import { createWriteStream } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { once } from "node:events";

import {
  TARGET_5M_ADDITIONAL_RUNTIME_RECORDS,
  TARGET_5M_BATCH_SIZE,
  buildTarget5mBatches,
  buildTarget5mSummary,
  getTarget5mRecordByGlobalIndex,
  resolveTarget5mRecordById
} from "../src/target-5m-expansion.js";
import { runTool } from "../src/tool-engines.js";

const exportsDir = join(process.cwd(), "exports");
const BASE_TOOL_CHAIN = new Set([
  "functional-project-plan-builder",
  "functional-checklist-builder",
  "functional-report-generator",
  "functional-email-draft-generator",
  "functional-markdown-export-builder",
  "functional-workflow-recorder"
]);

function csvEscape(value) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : `"${text}"`;
}

function createCsvWriter(fileName, columns) {
  const stream = createWriteStream(join(exportsDir, fileName), { encoding: "utf8" });
  stream.write(`${columns.join(",")}\n`);
  return {
    async write(row) {
      const line = `${columns.map((column) => csvEscape(row[column])).join(",")}\n`;
      if (!stream.write(line)) await once(stream, "drain");
    },
    async close() {
      await new Promise((resolve, reject) => {
        stream.once("error", reject);
        stream.end(resolve);
      });
    }
  };
}

async function writeCsv(fileName, rows, columns) {
  const writer = createCsvWriter(fileName, columns);
  for (const row of rows) await writer.write(row);
  await writer.close();
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
  const prompt = `Use ${tool.name} for a real ${tool.config?.domain || tool.category || "project"} request. Return a direct usable answer, file plan, or workflow handoff that answers the prompt.`;
  if (tool.engine === "potential_app") {
    return {
      goal: prompt,
      projectNotes: "Customer wants a useful finished answer, upload handling, clarification checks, workflow steps, and save/print/share handoff.",
      uploadedFileNotes: "expense-notes.md, source-table.csv, room-photo.png, product-reference.jpg",
      programFiles: "expense-notes.md\nsource-table.csv\nroom-photo.png\nproduct-reference.jpg",
      maxPanels: 8
    };
  }
  if (tool.engine === "skeleton_tool") {
    return {
      projectGoal: prompt,
      inputPayload: "Prompt, files, table rows, budget, date, and desired output shape.",
      outputShape: tool.config?.produces?.[0] || "project-output",
      cells: 8
    };
  }
  return {
    settings: prompt,
    text: "Project: monthly expense tracker\nNeed: make a usable file plan and direct output\nDeadline: Friday\nOwner: customer",
    rows: "date,category,amount,note\n2026-06-01,Groceries,84.20,weekly food\n2026-06-03,Utilities,132.44,electric\n2026-06-05,Fuel,46.10,commute",
    urls: "https://example.com/reference-one\nhttps://example.com/reference-two"
  };
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
  if (tool.engine === "skeleton_tool" && (!/Skeleton tool:/i.test(text) || !/Cells prepared:/i.test(text))) {
    reasons.push("missing_skeleton_sections");
  }
  if (tool.engine === "inhouse_support_tool" && !/(Goal|Produces|Status|Output|workbench|handoff|workflow|answer|file)/i.test(text)) {
    reasons.push("missing_usable_answer_signal");
  }
  return { text, status: reasons.length ? "broken" : "passed", reasons };
}

function kindFor(tool) {
  return tool.toolKind || tool.config?.appType || "tool";
}

function idSequenceProof(tool) {
  const id = String(tool.id || "");
  if (id.startsWith("target5m-tool-")) return /^target5m-tool-\d{7}-/.test(id);
  if (id.startsWith("target5m-skeleton-")) return /^target5m-skeleton-\d{7}-/.test(id);
  if (id.startsWith("target5m-app-")) return /^target5m-app-\d{7}-/.test(id);
  return false;
}

function checkAppReferences(tool) {
  const missing = [];
  for (const id of tool.config?.currentTools || []) {
    if (BASE_TOOL_CHAIN.has(id)) continue;
    if (resolveTarget5mRecordById(id)) continue;
    missing.push(id);
  }
  return missing;
}

await mkdir(exportsDir, { recursive: true });

const batchRows = buildTarget5mBatches().map((batch) => ({
  ...batch,
  passed: 0,
  broken: 0,
  byStatus: {},
  checkedKinds: {}
}));
const failureWriter = createCsvWriter("target-5m-expansion-audit-failures.csv", [
  "sequence", "batchId", "status", "reasons", "id", "name", "kind", "engine", "outputPreview"
]);

const startedAt = new Date().toISOString();
const totals = {
  recordsAudited: 0,
  passed: 0,
  broken: 0,
  duplicateProofFailures: 0,
  resolverFailures: 0,
  missingReferences: 0
};
const kindCounts = {};
const firstBroken = [];

for (let index = 0; index < TARGET_5M_ADDITIONAL_RUNTIME_RECORDS; index += 1) {
  const tool = getTarget5mRecordByGlobalIndex(index);
  const batch = batchRows[Math.floor(index / TARGET_5M_BATCH_SIZE)];
  const kind = kindFor(tool);
  const reasons = [];

  if (!idSequenceProof(tool)) {
    reasons.push("id_sequence_proof_failed");
    totals.duplicateProofFailures += 1;
  }
  const resolved = resolveTarget5mRecordById(tool.id);
  if (!resolved || resolved.id !== tool.id) {
    reasons.push("resolver_roundtrip_failed");
    totals.resolverFailures += 1;
  }
  if (tool.engine === "potential_app") {
    const missing = checkAppReferences(tool);
    if (missing.length) {
      reasons.push(`missing_current_tools:${missing.slice(0, 3).join("|")}`);
      totals.missingReferences += missing.length;
    }
  }

  let assessment = { text: "", status: "passed", reasons: [] };
  try {
    assessment = assessOutput(tool, runTool(tool, buildAuditInputs(tool)));
    reasons.push(...assessment.reasons);
  } catch (error) {
    reasons.push("threw");
    assessment = { text: error instanceof Error ? error.message : String(error), status: "broken", reasons: ["threw"] };
  }

  const status = reasons.length ? "broken" : "passed";
  totals.recordsAudited += 1;
  totals[status] += 1;
  kindCounts[kind] = (kindCounts[kind] || 0) + 1;
  batch[status] += 1;
  batch.byStatus[status] = (batch.byStatus[status] || 0) + 1;
  batch.checkedKinds[kind] = (batch.checkedKinds[kind] || 0) + 1;

  if (status !== "passed") {
    const row = {
      sequence: index + 1,
      batchId: tool.config?.target5mBatchId,
      status,
      reasons,
      id: tool.id,
      name: tool.name,
      kind,
      engine: tool.engine,
      outputPreview: preview(assessment.text)
    };
    if (firstBroken.length < 30) firstBroken.push(row);
    await failureWriter.write(row);
  }
}

await failureWriter.close();

const summary = {
  version: "2026-06-15-target-5m-audit-v1",
  startedAt,
  completedAt: new Date().toISOString(),
  target5mSummary: buildTarget5mSummary(),
  totals,
  kindCounts,
  duplicateProof: {
    policy: "Disjoint target5m-tool, target5m-skeleton, and target5m-app namespaces carry zero-padded sequence indexes. Every audited record round-tripped through the resolver.",
    duplicateProofFailures: totals.duplicateProofFailures,
    resolverFailures: totals.resolverFailures
  },
  firstBroken
};

await writeFile(join(exportsDir, "target-5m-expansion-audit-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeCsv("target-5m-expansion-audit-batches.csv", batchRows, [
  "id", "sequence", "start", "end", "count", "passed", "broken", "byKind", "byStatus", "checkedKinds", "sampleIds"
]);
await writeFile(join(exportsDir, "target-5m-expansion-audit-notes.md"), [
  "# Target 5M Batch Audit",
  "",
  `Generated: ${summary.completedAt}`,
  "",
  `Records audited: ${summary.totals.recordsAudited.toLocaleString()}`,
  `Passed: ${summary.totals.passed.toLocaleString()}`,
  `Broken: ${summary.totals.broken.toLocaleString()}`,
  `Duplicate proof failures: ${summary.totals.duplicateProofFailures.toLocaleString()}`,
  `Resolver failures: ${summary.totals.resolverFailures.toLocaleString()}`,
  `Missing app references: ${summary.totals.missingReferences.toLocaleString()}`,
  "",
  "## Kind Counts",
  "",
  ...Object.entries(kindCounts).map(([kind, count]) => `- ${kind}: ${count.toLocaleString()}`),
  "",
  "## Batch Status",
  "",
  ...batchRows.map((batch) => `- ${batch.id}: ${batch.passed.toLocaleString()}/${batch.count.toLocaleString()} passed`)
].join("\n"), "utf8");

console.log(`Audited ${totals.recordsAudited.toLocaleString()} target-5m records across ${batchRows.length} batches.`);
console.log(`Passed: ${totals.passed.toLocaleString()}; broken: ${totals.broken.toLocaleString()}.`);
console.log(`Duplicate proof failures: ${totals.duplicateProofFailures}; resolver failures: ${totals.resolverFailures}; missing references: ${totals.missingReferences}.`);
console.log("Reports written to exports/target-5m-expansion-audit-*");

if (totals.broken) process.exit(1);
