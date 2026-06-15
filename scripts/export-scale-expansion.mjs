import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  SCALE_EXPANSION_RECORDS,
  buildScaleExpansionBatches,
  buildScaleExpansionSummary
} from "../src/scale-expansion.js";

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

const summary = buildScaleExpansionSummary();
const batches = buildScaleExpansionBatches();
const sampleRows = SCALE_EXPANSION_RECORDS.map((tool, index) => ({
  sequence: index + 1,
  id: tool.id,
  name: tool.name,
  category: tool.category,
  kind: tool.toolKind || tool.config?.appType || "",
  engine: tool.engine,
  batchId: tool.config?.scaleBatchId,
  currentTools: tool.config?.currentTools || [],
  tags: tool.tags || []
}));

await writeFile(join(exportsDir, "scale-expansion-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeFile(join(exportsDir, "scale-expansion-batches.json"), JSON.stringify(batches, null, 2), "utf8");
await writeCsv("scale-expansion-possibilities.csv", sampleRows, [
  "sequence", "id", "name", "category", "kind", "engine", "batchId", "currentTools", "tags"
]);
await writeFile(join(exportsDir, "scale-expansion-possibilities.md"), [
  "# Scale Expansion Possibilities",
  "",
  `Version: ${summary.version}`,
  "",
  "## Counts",
  "",
  ...Object.entries(summary.possibleMoreByType).map(([type, count]) => `- ${type}: ${count.toLocaleString()}`),
  "",
  `Total records: ${summary.totalRecords.toLocaleString()}`,
  `Batches: ${summary.batchCount.toLocaleString()} of up to ${summary.batchSize.toLocaleString()} records`,
  "",
  "## Batch Samples",
  "",
  ...batches.slice(0, 12).map((batch) => `- ${batch.id}: ${batch.count.toLocaleString()} records, ${Object.entries(batch.byKind).map(([kind, count]) => `${kind} ${count}`).join(", ")}`)
].join("\n"), "utf8");

console.log(`${summary.totalRecords.toLocaleString()} scale expansion records exported across ${summary.batchCount} batches.`);
