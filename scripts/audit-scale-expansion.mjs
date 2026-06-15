import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import {
  SCALE_EXPANSION_RECORDS,
  buildScaleExpansionBatches,
  buildScaleExpansionSummary
} from "../src/scale-expansion.js";
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
  const prompt = `Use ${tool.name} for a real ${tool.config?.domain || tool.category || "project"} request. Return a direct usable answer, file plan, or workflow handoff.`;
  if (tool.engine === "potential_app") {
    inputs.goal = prompt;
    inputs.projectNotes = "Customer notes, rows, deadlines, budget, source files, and final output requirements are included for this test.";
    inputs.uploadedFileNotes = "audit-notes.md, source-table.csv, reference-image.png";
    inputs.programFiles = "audit-notes.md\nsource-table.csv\nreference-image.png";
    inputs.maxPanels = 8;
  } else {
    inputs.settings = prompt;
    inputs.text = "Project: monthly operations review\nNeed: produce a direct answer and a clean handoff.\nDeadline: Friday\nOwner: project lead";
    inputs.rows = "item,amount,status\nMaterials,120,open\nLabor,340,planned\nShipping,55,ready";
    inputs.urls = "https://example.com/source-one\nhttps://example.com/source-two";
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
  return { text, status: reasons.length ? "broken" : "passed", reasons };
}

await mkdir(exportsDir, { recursive: true });

const rows = [];
for (const [index, tool] of SCALE_EXPANSION_RECORDS.entries()) {
  try {
    const output = runTool(tool, buildAuditInputs(tool));
    const assessment = assessOutput(tool, output);
    rows.push({
      sequence: index + 1,
      batchId: tool.config?.scaleBatchId,
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
      batchId: tool.config?.scaleBatchId,
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

const batchRows = buildScaleExpansionBatches().map((batch) => {
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
  version: "2026-06-15-scale-expansion-audit-v1",
  completedAt: new Date().toISOString(),
  scaleSummary: buildScaleExpansionSummary(),
  totals: {
    recordsAudited: rows.length,
    batchesAudited: batchRows.length,
    passed: rows.length - brokenRows.length,
    broken: brokenRows.length
  },
  firstBroken: brokenRows.slice(0, 30)
};

await writeFile(join(exportsDir, "scale-expansion-audit-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeCsv("scale-expansion-audit-findings.csv", rows, [
  "sequence", "batchId", "status", "reasons", "id", "name", "kind", "engine", "outputPreview"
]);
await writeCsv("scale-expansion-audit-batches.csv", batchRows, [
  "batchId", "sequence", "start", "end", "count", "passed", "broken", "byKind", "sampleIds"
]);
await writeFile(join(exportsDir, "scale-expansion-audit-notes.md"), [
  "# Scale Expansion Batch Audit",
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

console.log(`Audited ${rows.length.toLocaleString()} scale expansion records across ${batchRows.length} batches.`);
console.log(`Passed: ${(rows.length - brokenRows.length).toLocaleString()}; broken: ${brokenRows.length.toLocaleString()}.`);
console.log("Reports written to exports/scale-expansion-audit-*");

if (brokenRows.length) process.exit(1);
