import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  TARGET_5M_ADDITIONAL_RUNTIME_RECORDS,
  buildTarget5mBatches,
  buildTarget5mSummary,
  getTarget5mRecordByGlobalIndex,
  searchTarget5mExpansion
} from "../src/target-5m-expansion.js";

const exportsDir = join(process.cwd(), "exports");

function csvEscape(value) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : `"${text}"`;
}

async function writeCsv(fileName, rows, columns) {
  const lines = [columns.join(",")];
  for (const row of rows) lines.push(columns.map((column) => csvEscape(row[column])).join(","));
  await writeFile(join(exportsDir, fileName), `${lines.join("\n")}\n`, "utf8");
}

await mkdir(exportsDir, { recursive: true });

const summary = buildTarget5mSummary();
const batches = buildTarget5mBatches();
const sampleIndexes = [
  0,
  1,
  249999,
  1499999,
  1500000,
  2999999,
  3000000,
  3749999,
  4499998,
  4499999
];
const searchSamples = [
  ...searchTarget5mExpansion("monthly expense tracker", { limit: 8 }).results.map((row) => row.tool),
  ...searchTarget5mExpansion("3d room contractor furniture", { limit: 8 }).results.map((row) => row.tool),
  ...searchTarget5mExpansion("customer email workflow", { limit: 8 }).results.map((row) => row.tool)
];
const possibilityRows = [
  ...sampleIndexes.map((index) => getTarget5mRecordByGlobalIndex(index)),
  ...searchSamples
].map((tool, index) => ({
  sequence: index + 1,
  id: tool.id,
  name: tool.name,
  category: tool.category,
  kind: tool.toolKind || tool.config?.appType || "",
  engine: tool.engine,
  batchId: tool.config?.target5mBatchId,
  currentTools: tool.config?.currentTools || [],
  tags: tool.tags || []
}));

await writeFile(join(exportsDir, "target-5m-expansion-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeFile(join(exportsDir, "target-5m-expansion-batches.json"), JSON.stringify(batches, null, 2), "utf8");
await writeCsv("target-5m-expansion-batches.csv", batches, [
  "id", "sequence", "start", "end", "count", "byKind", "sampleIds"
]);
await writeCsv("target-5m-expansion-samples.csv", possibilityRows, [
  "sequence", "id", "name", "category", "kind", "engine", "batchId", "currentTools", "tags"
]);
await writeFile(join(exportsDir, "target-5m-expansion-possibilities.md"), [
  "# Target 5M Expansion Possibilities",
  "",
  `Version: ${summary.version}`,
  "",
  "## Added Counts",
  "",
  ...Object.entries(summary.addedByKind).map(([type, count]) => `- ${type}: ${count.toLocaleString()}`),
  "",
  `New records: ${summary.additionalRuntimeRecords.toLocaleString()}`,
  `Projected runtime total: ${summary.finalRuntimeRecords.toLocaleString()}`,
  `Batches: ${summary.batchCount.toLocaleString()} of up to ${summary.batchSize.toLocaleString()} records`,
  `Duplicate policy: ${summary.duplicatePolicy}`,
  "",
  "## Projected Final Totals",
  "",
  ...Object.entries(summary.projectedFinalTotals).map(([type, count]) => `- ${type}: ${count.toLocaleString()}`),
  "",
  "## Batch Samples",
  "",
  ...batches.slice(0, 24).map((batch) => `- ${batch.id}: ${batch.count.toLocaleString()} records, ${Object.entries(batch.byKind).map(([kind, count]) => `${kind} ${count}`).join(", ")}`),
  "",
  "## Sample Records",
  "",
  ...possibilityRows.slice(0, 24).map((row) => `- ${row.id}: ${row.name}`)
].join("\n"), "utf8");

console.log(`${TARGET_5M_ADDITIONAL_RUNTIME_RECORDS.toLocaleString()} target-5m records described across ${summary.batchCount} batches.`);
console.log(`Projected runtime total: ${summary.finalRuntimeRecords.toLocaleString()}.`);
