import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  TARGET_500K_RECORDS,
  buildTarget500kBatches,
  buildTarget500kSummary
} from "../src/target-500k-expansion.js";
import { getDefaultInputs, runTool } from "../src/tool-engines.js";

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

function preview(value, max = 260) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

const brokenPatterns = [
  /\bundefined\b/i,
  /\bNaN\b/,
  /\[object Object\]/,
  /Unknown engine/i,
  /Cannot read/i,
  /not implemented/i,
  /TODO\b/i
];

function buildAuditInputs(tool) {
  const inputs = { ...getDefaultInputs(tool) };
  const prompt = `Use ${tool.name} for a real ${tool.config?.domain || tool.category || "project"} request. Return a direct usable answer, file plan, or workflow handoff that answers the prompt.`;
  if (tool.engine === "potential_app") {
    inputs.goal = prompt;
    inputs.projectNotes = "Customer wants a useful finished answer, upload handling, clarification checks, workflow steps, and save/print/share handoff.";
    inputs.uploadedFileNotes = "expense-notes.md, source-table.csv, room-photo.png, product-reference.jpg";
    inputs.programFiles = "expense-notes.md\nsource-table.csv\nroom-photo.png\nproduct-reference.jpg";
    inputs.maxPanels = 8;
  } else {
    inputs.settings = prompt;
    inputs.text = "Project: monthly expense tracker\nNeed: make a usable file plan and direct output\nDeadline: Friday\nOwner: customer";
    inputs.rows = "date,category,amount,note\n2026-06-01,Groceries,84.20,weekly food\n2026-06-03,Utilities,132.44,electric\n2026-06-05,Fuel,46.10,commute";
    inputs.urls = "https://example.com/reference-one\nhttps://example.com/reference-two";
  }
  return inputs;
}

function assessOutput(tool, output) {
  const text = typeof output === "string" ? output : JSON.stringify(output, null, 2);
  const reasons = [];
  if (!text.trim()) reasons.push("empty_output");
  if (text.trim().length < 80) reasons.push("too_short");
  for (const pattern of brokenPatterns) {
    if (pattern.test(text)) {
      reasons.push(`bad_output:${pattern.source.slice(0, 24)}`);
      break;
    }
  }
  if (tool.engine === "potential_app" && (!/## Workspace Panels/i.test(text) || !/## Output Pack/i.test(text))) {
    reasons.push("missing_workspace_or_output_pack");
  }
  if (tool.engine === "inhouse_support_tool" && !/(result|summary|output|handoff|workflow|answer|file)/i.test(text)) {
    reasons.push("missing_usable_answer_signal");
  }
  return { text, status: reasons.length ? "broken" : "passed", reasons };
}

await mkdir(exportsDir, { recursive: true });

const rows = [];
for (const [index, tool] of TARGET_500K_RECORDS.entries()) {
  try {
    const output = runTool(tool, buildAuditInputs(tool));
    const assessment = assessOutput(tool, output);
    rows.push({
      sequence: index + 1,
      batchId: tool.config?.target500kBatchId,
      status: assessment.status,
      reasons: assessment.reasons,
      id: tool.id,
      name: tool.name,
      kind: tool.toolKind || tool.config?.appType || "",
      engine: tool.engine,
      outputPreview: preview(assessment.text)
    });
  } catch (error) {
    rows.push({
      sequence: index + 1,
      batchId: tool.config?.target500kBatchId,
      status: "broken",
      reasons: ["threw"],
      id: tool.id,
      name: tool.name,
      kind: tool.toolKind || tool.config?.appType || "",
      engine: tool.engine,
      outputPreview: error instanceof Error ? error.message : String(error)
    });
  }
}

const batchRows = buildTarget500kBatches().map((batch) => {
  const batchResults = rows.filter((row) => row.batchId === batch.id);
  const passed = batchResults.filter((row) => row.status === "passed").length;
  const broken = batchResults.length - passed;
  return {
    batchId: batch.id,
    sequence: batch.sequence,
    start: batch.start,
    end: batch.end,
    count: batch.count,
    passed,
    broken,
    byKind: batch.byKind,
    sampleIds: batch.sampleIds
  };
});

const brokenRows = rows.filter((row) => row.status !== "passed");
const summary = {
  version: "2026-06-15-target-500k-audit-v1",
  completedAt: new Date().toISOString(),
  target500kSummary: buildTarget500kSummary(),
  totals: {
    recordsAudited: rows.length,
    batchesAudited: batchRows.length,
    passed: rows.length - brokenRows.length,
    broken: brokenRows.length
  },
  firstBroken: brokenRows.slice(0, 30)
};

await writeFile(join(exportsDir, "target-500k-expansion-audit-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeCsv("target-500k-expansion-audit-findings.csv", rows, [
  "sequence", "batchId", "status", "reasons", "id", "name", "kind", "engine", "outputPreview"
]);
await writeCsv("target-500k-expansion-audit-batches.csv", batchRows, [
  "batchId", "sequence", "start", "end", "count", "passed", "broken", "byKind", "sampleIds"
]);
await writeFile(join(exportsDir, "target-500k-expansion-audit-notes.md"), [
  "# Target 500K Batch Audit",
  "",
  `Generated: ${summary.completedAt}`,
  "",
  `Records audited: ${summary.totals.recordsAudited.toLocaleString()}`,
  `Batches audited: ${summary.totals.batchesAudited.toLocaleString()}`,
  `Passed: ${summary.totals.passed.toLocaleString()}`,
  `Broken: ${summary.totals.broken.toLocaleString()}`,
  "",
  "## Batch Status",
  "",
  ...batchRows.map((batch) => `- ${batch.batchId}: ${batch.passed}/${batch.count} passed`)
].join("\n"), "utf8");

console.log(`Audited ${rows.length.toLocaleString()} target-500k records across ${batchRows.length} batches.`);
console.log(`Passed: ${(rows.length - brokenRows.length).toLocaleString()}; broken: ${brokenRows.length.toLocaleString()}.`);
console.log("Reports written to exports/target-500k-expansion-audit-*");

if (brokenRows.length) process.exit(1);
