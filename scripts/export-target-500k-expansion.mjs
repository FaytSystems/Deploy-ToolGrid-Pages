import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  TARGET_500K_RECORDS,
  buildTarget500kBatches,
  buildTarget500kSummary
} from "../src/target-500k-expansion.js";

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

const summary = buildTarget500kSummary();
const batches = buildTarget500kBatches();
const possibilityRows = TARGET_500K_RECORDS.map((tool, index) => ({
  sequence: index + 1,
  id: tool.id,
  name: tool.name,
  category: tool.category,
  kind: tool.toolKind || tool.config?.appType || "",
  engine: tool.engine,
  batchId: tool.config?.target500kBatchId,
  currentTools: tool.config?.currentTools || [],
  tags: tool.tags || []
}));

await writeFile(join(exportsDir, "target-500k-expansion-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeFile(join(exportsDir, "target-500k-expansion-batches.json"), JSON.stringify(batches, null, 2), "utf8");
await writeCsv("target-500k-expansion-possibilities.csv", possibilityRows, [
  "sequence", "id", "name", "category", "kind", "engine", "batchId", "currentTools", "tags"
]);
await writeFile(join(exportsDir, "target-500k-expansion-possibilities.md"), [
  "# Target 500K Expansion Possibilities",
  "",
  `Version: ${summary.version}`,
  "",
  "## Added Counts",
  "",
  ...Object.entries(summary.possibleMoreByType).map(([type, count]) => `- ${type}: ${count.toLocaleString()}`),
  "",
  `New records: ${summary.totalRecords.toLocaleString()}`,
  `Runtime contribution: ${summary.runtimeContribution.toLocaleString()}`,
  `Projected runtime total: ${summary.projectedFinalTotals.runtimeRecords.toLocaleString()}`,
  `Batches: ${summary.batchCount.toLocaleString()} of up to ${summary.batchSize.toLocaleString()} records`,
  "",
  "## Projected Final Totals",
  "",
  ...Object.entries(summary.projectedFinalTotals).map(([type, count]) => `- ${type}: ${count.toLocaleString()}`),
  "",
  "## Batch Samples",
  "",
  ...batches.slice(0, 24).map((batch) => `- ${batch.id}: ${batch.count.toLocaleString()} records, ${Object.entries(batch.byKind).map(([kind, count]) => `${kind} ${count}`).join(", ")}`)
].join("\n"), "utf8");

console.log(`${summary.totalRecords.toLocaleString()} target-500k records exported across ${summary.batchCount} batches.`);
console.log(`Projected runtime total: ${summary.projectedFinalTotals.runtimeRecords.toLocaleString()}.`);
