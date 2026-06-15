import { createWriteStream } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { once } from "node:events";

import { tools } from "../src/tool-catalog.js";
import { IN_HOUSE_TOOL_RECORDS } from "../src/in-house-tools.js";
import { MASSIVE_TOOL_FACTORY_RECORDS } from "../src/massive-tool-factory.js";
import { FUNCTIONAL_TOOL_RECORDS } from "../src/functional-tools.js";
import { MINI_APP_TOOL_RECORDS } from "../src/mini-apps.js";
import { DAILY_DEALINGS_PROGRAM_RECORDS } from "../src/daily-dealings-programs.js";
import { FRONTIER_TOOL_RECORDS } from "../src/frontier-tool-expansion.js";
import { NEXT_FRONTIER_TOOL_RECORDS } from "../src/next-frontier-tool-expansion.js";
import {
  NEEDED_INHOUSE_TOOL_RECORDS,
  POTENTIAL_APP_RECORDS,
  PRODUCTION_STREAM_ACTIVATION_RECORDS
} from "../src/expansion-tools.js";
import {
  SCALE_APP_PROGRAM_RECORDS,
  SCALE_INHOUSE_TOOL_RECORDS
} from "../src/scale-expansion.js";
import {
  TARGET_500K_APP_PROGRAM_RECORDS,
  TARGET_500K_INHOUSE_TOOL_RECORDS
} from "../src/target-500k-expansion.js";
import { SPACE_STUDIO_TOOLS } from "../src/space-studio.js";
import { WEBCAM_EXPLORER_TOOL } from "../src/webcam-explorer.js";
import { FACTCHECKER_TOOL } from "../src/factchecker-tool.js";
import { RGB_GENERATOR_TOOL, THEME_STUDIO_TOOL } from "../src/theme-system.js";
import { RGB_MOTION_STUDIO_TOOL } from "../src/rgb-motion-studio.js";
import { AUDIO_VISUALIZER_STUDIO_TOOL } from "../src/audio-visualizer-studio.js";
import { PRICE_TOOLS } from "../src/price-comparison-tool.js";
import { buildSkeletonTools } from "../src/skeleton-tools.js";
import { getDefaultInputs, runTool } from "../src/tool-engines.js";
import { buildInputsFromPayload, canConnectTools, getToolIO, inferPayloadType } from "../src/project-foundation.js";

const exportsDir = join(process.cwd(), "exports");

function uniqueById(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    if (!item?.id || seen.has(item.id)) continue;
    seen.add(item.id);
    out.push(item);
  }
  return out;
}

function normalize(value) {
  return String(value ?? "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

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

function outputStatus(output) {
  const text = typeof output === "string" ? output : JSON.stringify(output, null, 2);
  const reasons = [];
  if (!text.trim()) reasons.push("empty_output");
  for (const pattern of brokenPatterns) {
    if (pattern.test(text)) {
      reasons.push(`bad_output:${pattern.source.slice(0, 24)}`);
      break;
    }
  }
  return { ok: reasons.length === 0, reasons, text };
}

function runCachedTool(tool, cache) {
  if (cache.has(tool.id)) return cache.get(tool.id);
  let result;
  try {
    const output = runTool(tool, getDefaultInputs(tool));
    const status = outputStatus(output);
    result = {
      id: tool.id,
      name: tool.name,
      engine: tool.engine,
      ok: status.ok,
      reasons: status.reasons,
      output: status.text,
      error: ""
    };
  } catch (error) {
    result = {
      id: tool.id,
      name: tool.name,
      engine: tool.engine,
      ok: false,
      reasons: ["threw"],
      output: "",
      error: error instanceof Error ? error.message : String(error)
    };
  }
  cache.set(tool.id, result);
  return result;
}

function declaredIdRefs(tool) {
  const config = tool.config || {};
  return [
    ...(config.currentTools || []),
    ...(config.neededToolIds || []),
    ...(config.toolIds || [])
  ].filter(Boolean);
}

function declaredNameRefs(tool) {
  const config = tool.config || {};
  const compatibility = tool.compatibility || {};
  return [
    ...(config.requiredTools || []),
    ...(config.neededTools || []),
    ...(compatibility.requiredTools || [])
  ].filter(Boolean);
}

function isAppWorkflowRecord(tool) {
  if (["mini_app", "daily_dealings_program", "potential_app"].includes(tool.engine)) return true;
  const config = tool.config || {};
  return Boolean(config.currentTools?.length || config.neededToolIds?.length || config.requiredTools?.length || tool.compatibility?.requiredTools?.length);
}

const baseRuntimeForSkeletons = [
  ...tools,
  ...IN_HOUSE_TOOL_RECORDS,
  ...MASSIVE_TOOL_FACTORY_RECORDS,
  ...FUNCTIONAL_TOOL_RECORDS,
  ...MINI_APP_TOOL_RECORDS,
  ...DAILY_DEALINGS_PROGRAM_RECORDS,
  ...FRONTIER_TOOL_RECORDS,
  ...NEXT_FRONTIER_TOOL_RECORDS,
  ...NEEDED_INHOUSE_TOOL_RECORDS,
  ...SCALE_INHOUSE_TOOL_RECORDS,
  ...TARGET_500K_INHOUSE_TOOL_RECORDS,
  ...SPACE_STUDIO_TOOLS,
  WEBCAM_EXPLORER_TOOL,
  FACTCHECKER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  ...PRICE_TOOLS
];

const skeletonTools = buildSkeletonTools(baseRuntimeForSkeletons);
const directWebsiteTools = [
  ...IN_HOUSE_TOOL_RECORDS,
  ...MASSIVE_TOOL_FACTORY_RECORDS,
  ...FUNCTIONAL_TOOL_RECORDS,
  ...MINI_APP_TOOL_RECORDS,
  ...DAILY_DEALINGS_PROGRAM_RECORDS,
  ...FRONTIER_TOOL_RECORDS,
  ...NEXT_FRONTIER_TOOL_RECORDS,
  ...NEEDED_INHOUSE_TOOL_RECORDS,
  ...SCALE_INHOUSE_TOOL_RECORDS,
  ...TARGET_500K_INHOUSE_TOOL_RECORDS,
  ...SPACE_STUDIO_TOOLS,
  WEBCAM_EXPLORER_TOOL,
  FACTCHECKER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  ...PRICE_TOOLS
];

const runtimeTools = uniqueById([
  ...directWebsiteTools,
  ...skeletonTools,
  ...POTENTIAL_APP_RECORDS,
  ...PRODUCTION_STREAM_ACTIVATION_RECORDS,
  ...SCALE_APP_PROGRAM_RECORDS,
  ...TARGET_500K_APP_PROGRAM_RECORDS
]);

const toolsById = new Map(runtimeTools.map((tool) => [tool.id, tool]));
for (const skeleton of skeletonTools) {
  if (skeleton.skeletonBaseToolId && !toolsById.has(skeleton.skeletonBaseToolId)) {
    toolsById.set(skeleton.skeletonBaseToolId, skeleton);
  }
}

const toolsByName = new Map();
for (const tool of runtimeTools) toolsByName.set(normalize(tool.name), tool);

const toolRunCache = new Map();
const appRecords = runtimeTools.filter(isAppWorkflowRecord);
const findings = [];
const handoffRows = [];
let declaredIdRefCount = 0;
let declaredNameRefCount = 0;
let testedHandoffCount = 0;

for (const app of appRecords) {
  const appRun = runCachedTool(app, toolRunCache);
  if (!appRun.ok) {
    findings.push({
      severity: "broken",
      type: "app_output",
      appId: app.id,
      appName: app.name,
      ref: app.id,
      message: appRun.reasons.join("|") || appRun.error,
      outputPreview: preview(appRun.output)
    });
  }

  const idRefs = [...new Set(declaredIdRefs(app))];
  const nameRefs = [...new Set(declaredNameRefs(app))];
  declaredIdRefCount += idRefs.length;
  declaredNameRefCount += nameRefs.length;

  const resolvedTools = [];
  for (const id of idRefs) {
    const target = toolsById.get(id);
    if (!target) {
      findings.push({
        severity: "broken",
        type: "missing_tool_id",
        appId: app.id,
        appName: app.name,
        ref: id,
        message: "Declared in-house tool id was not found in the runtime map.",
        outputPreview: ""
      });
      continue;
    }
    resolvedTools.push(target);
    const targetRun = runCachedTool(target, toolRunCache);
    if (!targetRun.ok) {
      findings.push({
        severity: "broken",
        type: "referenced_tool_output",
        appId: app.id,
        appName: app.name,
        ref: id,
        message: targetRun.reasons.join("|") || targetRun.error,
        outputPreview: preview(targetRun.output)
      });
    }
  }

  for (const name of nameRefs) {
    const target = toolsById.get(name) || toolsByName.get(normalize(name));
    if (!target) {
      findings.push({
        severity: "warning",
        type: "missing_named_dependency",
        appId: app.id,
        appName: app.name,
        ref: name,
        message: "Named dependency did not match a runtime tool name or id.",
        outputPreview: ""
      });
      continue;
    }
    const targetRun = runCachedTool(target, toolRunCache);
    if (!targetRun.ok) {
      findings.push({
        severity: "broken",
        type: "named_dependency_output",
        appId: app.id,
        appName: app.name,
        ref: name,
        message: targetRun.reasons.join("|") || targetRun.error,
        outputPreview: preview(targetRun.output)
      });
    }
  }

  for (let index = 0; index < resolvedTools.length - 1; index += 1) {
    const source = resolvedTools[index];
    const target = resolvedTools[index + 1];
    const compatible = canConnectTools(source, target);
    if (!compatible) {
      handoffRows.push({
        status: "parallel_or_incompatible",
        appId: app.id,
        appName: app.name,
        sourceId: source.id,
        sourceOutput: getToolIO(source).output,
        targetId: target.id,
        targetAccepts: getToolIO(target).accepts,
        message: "Declared tools are available, but this adjacent pair is not a direct waterfall handoff.",
        outputPreview: ""
      });
      continue;
    }
    testedHandoffCount += 1;
    const sourceRun = runCachedTool(source, toolRunCache);
    try {
      const inputs = buildInputsFromPayload(target, sourceRun.output, inferPayloadType(sourceRun.output));
      const output = runTool(target, inputs);
      const status = outputStatus(output);
      handoffRows.push({
        status: status.ok ? "passed" : "broken",
        appId: app.id,
        appName: app.name,
        sourceId: source.id,
        sourceOutput: getToolIO(source).output,
        targetId: target.id,
        targetAccepts: getToolIO(target).accepts,
        message: status.reasons.join("|"),
        outputPreview: preview(status.text)
      });
      if (!status.ok) {
        findings.push({
          severity: "broken",
          type: "declared_handoff_output",
          appId: app.id,
          appName: app.name,
          ref: `${source.id} -> ${target.id}`,
          message: status.reasons.join("|"),
          outputPreview: preview(status.text)
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      handoffRows.push({
        status: "broken",
        appId: app.id,
        appName: app.name,
        sourceId: source.id,
        sourceOutput: getToolIO(source).output,
        targetId: target.id,
        targetAccepts: getToolIO(target).accepts,
        message,
        outputPreview: ""
      });
      findings.push({
        severity: "broken",
        type: "declared_handoff_threw",
        appId: app.id,
        appName: app.name,
        ref: `${source.id} -> ${target.id}`,
        message,
        outputPreview: ""
      });
    }
  }
}

await mkdir(exportsDir, { recursive: true });

const findingCounts = findings.reduce((counts, finding) => {
  counts[finding.type] = (counts[finding.type] || 0) + 1;
  return counts;
}, {});
const handoffCounts = handoffRows.reduce((counts, row) => {
  counts[row.status] = (counts[row.status] || 0) + 1;
  return counts;
}, {});
const brokenFindings = findings.filter((finding) => finding.severity === "broken");
const warningFindings = findings.filter((finding) => finding.severity !== "broken");

const summary = {
  version: "2026-06-14-declared-app-workflow-audit-v1",
  completedAt: new Date().toISOString(),
  totals: {
    runtimeTools: runtimeTools.length,
    appWorkflowRecords: appRecords.length,
    declaredIdRefs: declaredIdRefCount,
    declaredNameRefs: declaredNameRefCount,
    uniqueToolsExecuted: toolRunCache.size,
    testedHandoffs: testedHandoffCount,
    handoffRows: handoffRows.length,
    brokenFindings: brokenFindings.length,
    warningFindings: warningFindings.length
  },
  findingCounts,
  handoffCounts,
  firstFindings: findings.slice(0, 40)
};

await writeFile(join(exportsDir, "declared-app-workflow-audit-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeCsv("declared-app-workflow-audit-findings.csv", findings, [
  "severity", "type", "appId", "appName", "ref", "message", "outputPreview"
]);
await writeCsv("declared-app-workflow-audit-handoffs.csv", handoffRows, [
  "status", "appId", "appName", "sourceId", "sourceOutput", "targetId", "targetAccepts", "message", "outputPreview"
]);

await writeFile(join(exportsDir, "declared-app-workflow-audit-notes.md"), [
  "# Declared App Workflow Audit",
  "",
  `Generated: ${summary.completedAt}`,
  "",
  "## Totals",
  "",
  `- Runtime tools: ${summary.totals.runtimeTools}`,
  `- App/workflow records checked: ${summary.totals.appWorkflowRecords}`,
  `- Declared ID references checked: ${summary.totals.declaredIdRefs}`,
  `- Declared named references checked: ${summary.totals.declaredNameRefs}`,
  `- Unique tools executed in this pass: ${summary.totals.uniqueToolsExecuted}`,
  `- Direct handoffs tested: ${summary.totals.testedHandoffs}`,
  `- Broken findings: ${summary.totals.brokenFindings}`,
  `- Warnings: ${summary.totals.warningFindings}`,
  "",
  "## Finding Counts",
  "",
  Object.entries(findingCounts).map(([type, count]) => `- ${type}: ${count}`).join("\n") || "- none",
  "",
  "## Handoff Counts",
  "",
  Object.entries(handoffCounts).map(([status, count]) => `- ${status}: ${count}`).join("\n") || "- none"
].join("\n"), "utf8");

console.log(`Checked ${appRecords.length} declared app/workflow records.`);
console.log(`Declared ID refs: ${declaredIdRefCount}; named refs: ${declaredNameRefCount}; unique tools executed: ${toolRunCache.size}.`);
console.log(`Handoffs tested: ${testedHandoffCount}; handoff statuses: ${JSON.stringify(handoffCounts)}.`);
console.log(`Broken findings: ${brokenFindings.length}; warnings: ${warningFindings.length}.`);
console.log("Reports written to exports/declared-app-workflow-audit-*");

if (brokenFindings.length) process.exit(1);
