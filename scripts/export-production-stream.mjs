import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  NEEDED_INHOUSE_TOOL_RECORDS,
  PRODUCTION_STREAM_ACTIVATION_RECORDS,
  PRODUCTION_STREAM_MADE_RECORDS,
  buildExpansionToolsSummary,
  buildProductionStreamBatches
} from "../src/expansion-tools.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const exportsDir = join(root, "exports");

const csvEscape = (value) => {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : `"${text}"`;
};

const writeCsv = async (fileName, rows, columns) => {
  const lines = [columns.join(",")];
  for (const row of rows) lines.push(columns.map((column) => csvEscape(row[column])).join(","));
  await writeFile(join(exportsDir, fileName), `${lines.join("\n")}\n`, "utf8");
};

const appRows = PRODUCTION_STREAM_MADE_RECORDS.map((tool, index) => ({
  sequence: index + 1,
  id: tool.id,
  name: tool.name,
  runtimeCategory: tool.category,
  appType: tool.config?.appType || tool.toolKind || "",
  sourceAppType: tool.config?.sourceAppType || tool.config?.appType || tool.toolKind || "",
  domain: tool.config?.domain || "",
  readiness: tool.config?.readiness || "",
  sourcePotentialAppId: tool.config?.sourcePotentialAppId || "",
  productionBatchId: tool.config?.productionBatchId || "",
  currentToolCount: tool.config?.currentTools?.length || 0,
  neededToolCount: tool.config?.neededToolIds?.length || 0,
  neededToolIds: tool.config?.neededToolIds || [],
  operationNames: tool.config?.operationNames || [],
  policy: tool.config?.noOutsideToolPolicy || ""
}));

const batchRows = buildProductionStreamBatches().map((batch) => ({
  id: batch.id,
  sequence: batch.sequence,
  start: batch.start,
  end: batch.end,
  count: batch.count,
  supportUnlockedCount: batch.supportUnlockedCount,
  activationPackCount: batch.activationPackCount,
  byType: Object.entries(batch.byType).map(([type, count]) => `${type}:${count}`),
  sampleIds: batch.sampleIds
}));

const supportRows = NEEDED_INHOUSE_TOOL_RECORDS.map((tool) => ({
  id: tool.id,
  name: tool.name,
  priority: tool.config?.priority || "",
  kind: tool.config?.kind || "",
  capability: tool.config?.capability || "",
  mode: tool.config?.mode || "",
  produces: tool.config?.produces || []
}));

const summary = buildExpansionToolsSummary();

await mkdir(exportsDir, { recursive: true });
await writeCsv("production-stream-apps.csv", appRows, [
  "sequence", "id", "name", "runtimeCategory", "appType", "sourceAppType", "domain", "readiness",
  "sourcePotentialAppId", "productionBatchId", "currentToolCount", "neededToolCount", "neededToolIds", "operationNames", "policy"
]);
await writeCsv("production-stream-batches.csv", batchRows, [
  "id", "sequence", "start", "end", "count", "supportUnlockedCount", "activationPackCount", "byType", "sampleIds"
]);
await writeCsv("production-stream-support-tools.csv", supportRows, [
  "id", "name", "priority", "kind", "capability", "mode", "produces"
]);

await writeFile(join(root, "PRODUCTION_STREAM.md"), `# Continuous Production Stream

Generated: 2026-06-13

The stream is in-house only. It does not embed outside tool websites.

## Counts

- Production-stream records made: ${summary.productionStreamMadeCount.toLocaleString()}
- Base generated app/program records: ${summary.potentialAppCount.toLocaleString()}
- Support-unlocked production packs: ${summary.productionActivationCount.toLocaleString()}
- Needed in-house support tools: ${summary.neededToolCount.toLocaleString()}
- Production batches: ${summary.productionBatchCount.toLocaleString()}

## Export Files

- \`exports/production-stream-apps.csv\`
- \`exports/production-stream-batches.csv\`
- \`exports/production-stream-support-tools.csv\`

## Batch Policy

Each support-unlocked production pack points back to its source potential app and lists the in-house support tools that made it possible. This keeps the stream non-duplicative while still making the newly unlocked 6,906 app builds concrete.
`, "utf8");

console.log(`Production stream records made: ${summary.productionStreamMadeCount}`);
console.log(`Support-unlocked production packs: ${PRODUCTION_STREAM_ACTIVATION_RECORDS.length}`);
console.log(`Production batches: ${summary.productionBatchCount}`);
