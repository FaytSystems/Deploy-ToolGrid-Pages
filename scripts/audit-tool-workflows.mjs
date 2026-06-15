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
  PRODUCTION_STREAM_ACTIVATION_RECORDS,
  PRODUCTION_STREAM_MADE_RECORDS
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
import { engineNames, getDefaultInputs, getToolSchema, runTool } from "../src/tool-engines.js";
import { buildInputsFromPayload, canConnectTools, getToolIO, inferPayloadType } from "../src/project-foundation.js";

const knownEngines = new Set(engineNames);
const exportsDir = join(process.cwd(), "exports");

const parseArgs = (args) => {
  const options = {
    offset: Number(process.env.AUDIT_OFFSET || 0),
    limit: Number(process.env.AUDIT_LIMIT || 2500),
    comboLimit: Number(process.env.AUDIT_COMBO_LIMIT || 1000),
    full: process.env.AUDIT_FULL === "1",
    includeMade: process.env.AUDIT_INCLUDE_MADE === "1",
    failOnBroken: process.env.AUDIT_FAIL_ON_BROKEN === "1"
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = args[index + 1];
    if (arg === "--offset") {
      options.offset = Number(next || 0);
      index += 1;
    } else if (arg === "--limit") {
      options.limit = Number(next || 0);
      index += 1;
    } else if (arg === "--combo-limit") {
      options.comboLimit = Number(next || 0);
      index += 1;
    } else if (arg === "--full") {
      options.full = true;
    } else if (arg === "--include-made") {
      options.includeMade = true;
    } else if (arg === "--fail-on-broken") {
      options.failOnBroken = true;
    }
  }

  options.offset = Math.max(0, Number.isFinite(options.offset) ? options.offset : 0);
  options.limit = Math.max(0, Number.isFinite(options.limit) ? options.limit : 2500);
  options.comboLimit = Math.max(0, Number.isFinite(options.comboLimit) ? options.comboLimit : 1000);
  return options;
};

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

function preview(value, max = 320) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function tokenize(value) {
  return String(value ?? "")
    .toLowerCase()
    .split(/[^a-z0-9#]+/)
    .filter((token) => token.length >= 3);
}

function buildAuditPrompt(tool) {
  const domain = tool.config?.domain || tool.category || "general work";
  const type = tool.config?.appType || tool.toolKind || tool.engine || "tool";
  return [
    `Use ${tool.name} to produce a directly useful ${type} answer for ${domain}.`,
    "The answer should contain concrete output, not just say that the tool is ready.",
    tool.description || ""
  ].filter(Boolean).join(" ");
}

function sampleTextForTool(tool, prompt) {
  if (tool.engine === "json_tool") {
    return JSON.stringify({ project: "monthly expenses", ready: true, items: [{ name: "rent", amount: 1200 }, { name: "food", amount: 450 }] });
  }
  if (tool.engine === "csv_tool" && tool.config?.mode === "json_to_csv") {
    return JSON.stringify([{ item: "Rent", amount: 1200, due: "2026-07-01" }, { item: "Food", amount: 450, due: "weekly" }]);
  }
  if (tool.engine === "csv_tool" || tool.engine === "markdown_table") {
    return "item,amount,due,status\nRent,1200,2026-07-01,planned\nFood,450,weekly,review\nUtilities,220,2026-07-10,planned";
  }
  if (tool.engine === "encoder") {
    const mode = tool.config?.mode || "";
    if (mode === "base64_decode") return "TW9udGhseSBleHBlbnNlIHRyYWNrZXI=";
    if (mode === "url_decode") return "monthly%20expense%20tracker";
    if (mode === "html_unescape") return "&lt;strong&gt;Monthly expense tracker&lt;/strong&gt;";
    return "Monthly expense tracker and project handoff";
  }
  if (tool.engine === "keyword_density") return "Budget tracker monthly budget expenses expense tracker budget review";
  if (tool.engine === "color_convert") return "#00e5ff";
  return `${prompt}\n\nNotes: build a practical output with tasks, totals, warnings, and next actions.`;
}

function buildAuditInputs(tool) {
  const prompt = buildAuditPrompt(tool);
  const schema = getToolSchema(tool);
  const inputs = { ...getDefaultInputs(tool) };

  for (const field of schema) {
    const name = field.name;
    if (["prompt", "goal", "projectGoal", "settings", "purpose"].includes(name)) inputs[name] = prompt;
    if (["notes", "projectNotes", "uploadedFileNotes", "details", "constraints"].includes(name)) {
      inputs[name] = "Use realistic rows, clear sections, useful next actions, and an output that can be handed to another in-house tool.";
    }
    if (name === "text") inputs.text = sampleTextForTool(tool, prompt);
    if (name === "rows") inputs.rows = "item,amount,due,status\nRent,1200,2026-07-01,planned\nFood,450,weekly,review\nUtilities,220,2026-07-10,planned";
    if (name === "budget") inputs.budget = 2500;
    if (name === "deadline") inputs.deadline = "Friday";
    if (name === "audience") inputs.audience = "project owner";
    if (name === "tone") inputs.tone = "clear and practical";
    if (name === "criteria") inputs.criteria = "usefulness, completeness, directness, smooth handoff";
    if (name === "programFiles") inputs.programFiles = "audit-notes.md\naudit-data.csv\nreference-image.png";
    if (name === "maxPanels") inputs.maxPanels = 8;
  }

  if (tool.engine === "potential_app") {
    inputs.goal = prompt;
    inputs.projectNotes = "Project notes include rows, files, budget, dates, customer/user needs, and decision criteria.";
    inputs.uploadedFileNotes = "audit-notes.md, audit-data.csv, reference-image.png";
    inputs.programFiles = "audit-notes.md\naudit-data.csv\nreference-image.png";
    inputs.maxPanels = 8;
  }

  if (tool.engine === "skeleton_tool") {
    inputs.projectGoal = prompt;
    inputs.inputPayload = "Prompt, files, table rows, budget, date, and desired output shape.";
    inputs.outputShape = tool.config?.produces?.[0] || "project-output";
    inputs.cells = 8;
  }

  if (tool.engine === "functional_tool") {
    if (tool.config?.mode === "phrase_counter") {
      inputs.text = "Local food is fresh. Local food supports farms. The food system needs local buyers.";
      inputs.phrase = "local food";
      inputs.variations = "local,food,farms";
    }
    if (tool.config?.mode === "social_keyword_scanner") {
      inputs.text = "2026-06-01: New drop today.\n2026-06-02: Pickup update for members.\n2026-06-03: New drop is sold out.";
      inputs.keywords = "drop,pickup,sold out";
    }
    if (tool.config?.mode === "label_sheet") {
      inputs.text = "batch,item,date\nA101,Blue Oyster,2026-06-13\nA102,Lion's Mane,2026-06-14";
      inputs.fields = "batch,item,date";
    }
  }

  return { prompt, schema, inputs };
}

const brokenPatterns = [
  /\bundefined\b/i,
  /\bNaN\b/,
  /\[object Object\]/,
  /Unknown engine/i,
  /Cannot read/i,
  /not implemented/i,
  /TODO\b/i,
  /^Skipped:/i
];

const complexEngines = new Set([
  "functional_tool",
  "mini_app",
  "daily_dealings_program",
  "inhouse_support_tool",
  "potential_app",
  "skeleton_tool",
  "webcam_explorer",
  "factchecker",
  "theme_studio",
  "rgb_generator",
  "rgb_motion_studio",
  "audio_visualizer_studio",
  "price_comparison",
  "space_studio"
]);

function scoreOutput(tool, prompt, rawOutput) {
  const output = typeof rawOutput === "string" ? rawOutput : JSON.stringify(rawOutput, null, 2);
  const reasons = [];
  let score = 100;

  if (!knownEngines.has(tool.engine)) {
    reasons.push("unknown_engine");
    score -= 100;
  }
  if (!output.trim()) {
    reasons.push("empty_output");
    score -= 100;
  }
  for (const pattern of brokenPatterns) {
    if (pattern.test(output)) {
      reasons.push(`bad_output:${pattern.source.slice(0, 24)}`);
      score -= 60;
      break;
    }
  }

  const minLength = complexEngines.has(tool.engine) ? 120 : 1;
  if (output.trim().length < minLength) {
    reasons.push("too_short_for_tool_type");
    score -= complexEngines.has(tool.engine) ? 30 : 5;
  }

  if (tool.engine === "potential_app" && (!/## Workspace Panels/i.test(output) || !/## Output Pack/i.test(output))) {
    reasons.push("missing_app_workspace_sections");
    score -= 35;
  }
  if (tool.engine === "skeleton_tool" && (!/Skeleton tool:/i.test(output) || !/Cells prepared:/i.test(output))) {
    reasons.push("missing_skeleton_sections");
    score -= 35;
  }
  if (tool.engine === "daily_dealings_program" && !/Action|Board|Handoff|Program/i.test(output)) {
    reasons.push("missing_daily_program_sections");
    score -= 25;
  }
  if (tool.engine === "mini_app" && !/Compatibility signal|Next steps|Checklist|Budget|Subject|Summary|Output/i.test(output)) {
    reasons.push("missing_mini_app_action_sections");
    score -= 20;
  }

  if (complexEngines.has(tool.engine)) {
    const targetTokens = new Set([
      ...tokenize(tool.name).slice(0, 5),
      ...tokenize(tool.category).slice(0, 4),
      ...tokenize(tool.config?.domain).slice(0, 4),
      ...tokenize(prompt).slice(0, 8)
    ]);
    const outputLower = output.toLowerCase();
    const hitCount = [...targetTokens].filter((token) => outputLower.includes(token)).length;
    if (hitCount < 2) {
      reasons.push("weak_prompt_directness");
      score -= 20;
    }
  }

  const status = score <= 0 || reasons.includes("empty_output") || reasons.some((reason) => reason.startsWith("bad_output")) || reasons.includes("unknown_engine")
    ? "broken"
    : score < 75
      ? "weak"
      : "passed";

  return { status, score: Math.max(0, score), reasons, output };
}

function runSingleTool(tool) {
  const { prompt, schema, inputs } = buildAuditInputs(tool);
  try {
    const output = runTool(tool, inputs);
    const quality = scoreOutput(tool, prompt, output);
    return {
      tool,
      prompt,
      schemaCount: schema.length,
      output: quality.output,
      status: quality.status,
      score: quality.score,
      reasons: quality.reasons,
      error: ""
    };
  } catch (error) {
    return {
      tool,
      prompt,
      schemaCount: schema.length,
      output: "",
      status: "broken",
      score: 0,
      reasons: ["threw"],
      error: error instanceof Error ? error.message : String(error)
    };
  }
}

function representativeTools(results, max = 260) {
  const byEngine = new Map();
  const out = [];
  for (const result of results) {
    if (result.status === "broken") continue;
    const key = result.tool.engine;
    const bucket = byEngine.get(key) || [];
    if (bucket.length < 12) {
      bucket.push(result);
      byEngine.set(key, bucket);
      out.push(result);
    }
    if (out.length >= max) break;
  }
  return out;
}

function runCombination(sourceResult, targetTool) {
  const sourceTool = sourceResult.tool;
  try {
    const sourceType = getToolIO(sourceTool).output;
    const inputs = buildInputsFromPayload(targetTool, sourceResult.output, sourceType || inferPayloadType(sourceResult.output));
    const prompt = `Use ${targetTool.name} to continue the output from ${sourceTool.name} and return a useful next answer.`;
    const output = runTool(targetTool, inputs);
    const quality = scoreOutput(targetTool, prompt, output);
    return {
      sourceTool,
      targetTool,
      sourceType,
      targetAccepts: getToolIO(targetTool).accepts,
      prompt,
      status: quality.status,
      score: quality.score,
      reasons: quality.reasons,
      error: "",
      output: quality.output
    };
  } catch (error) {
    return {
      sourceTool,
      targetTool,
      sourceType: getToolIO(sourceTool).output,
      targetAccepts: getToolIO(targetTool).accepts,
      prompt: "",
      status: "broken",
      score: 0,
      reasons: ["combo_threw"],
      error: error instanceof Error ? error.message : String(error),
      output: ""
    };
  }
}

function summarizeStatuses(rows) {
  return rows.reduce((counts, row) => {
    counts[row.status] = (counts[row.status] || 0) + 1;
    return counts;
  }, {});
}

function summarizeReasons(rows) {
  const counts = new Map();
  for (const row of rows) {
    for (const reason of row.reasons || []) counts.set(reason, (counts.get(reason) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 20).map(([reason, count]) => ({ reason, count }));
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

const options = parseArgs(process.argv.slice(2));
const runtimeTools = uniqueById([
  ...directWebsiteTools,
  ...skeletonTools,
  ...POTENTIAL_APP_RECORDS,
  ...PRODUCTION_STREAM_ACTIVATION_RECORDS,
  ...SCALE_APP_PROGRAM_RECORDS,
  ...TARGET_500K_APP_PROGRAM_RECORDS,
  ...(options.includeMade ? PRODUCTION_STREAM_MADE_RECORDS : [])
]);

const limit = options.full ? runtimeTools.length : options.limit;
const batch = runtimeTools.slice(options.offset, options.offset + limit);
const batchSlug = `offset-${options.offset}-limit-${limit}`;
const startedAt = new Date().toISOString();

await mkdir(exportsDir, { recursive: true });

const toolColumns = [
  "sequence", "status", "score", "reasons", "error", "id", "name", "engine", "category", "toolKind", "schemaCount", "prompt", "outputPreview"
];
const toolWriters = [
  createCsvWriter("tool-workflow-audit-findings.csv", toolColumns),
  createCsvWriter(`tool-workflow-audit-findings-${batchSlug}.csv`, toolColumns)
];
const toolStatuses = {};
const toolReasonCounts = new Map();
const firstBrokenOrWeak = [];
const comboCandidates = [];
const comboCandidatesByEngine = new Map();
let auditedToolCount = 0;

function recordToolStatus(result) {
  toolStatuses[result.status] = (toolStatuses[result.status] || 0) + 1;
  for (const reason of result.reasons || []) toolReasonCounts.set(reason, (toolReasonCounts.get(reason) || 0) + 1);
}

function reasonMapToSummary(map) {
  return [...map.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 20).map(([reason, count]) => ({ reason, count }));
}

function maybeKeepComboCandidate(result) {
  if (result.status === "broken" || comboCandidates.length >= 260) return;
  const key = result.tool.engine;
  const count = comboCandidatesByEngine.get(key) || 0;
  if (count >= 12) return;
  comboCandidatesByEngine.set(key, count + 1);
  comboCandidates.push({
    tool: result.tool,
    prompt: result.prompt,
    schemaCount: result.schemaCount,
    output: preview(result.output, 1200),
    status: result.status,
    score: result.score,
    reasons: result.reasons,
    error: result.error
  });
}

for (const [index, tool] of batch.entries()) {
  const result = runSingleTool(tool);
  auditedToolCount += 1;
  recordToolStatus(result);
  const row = {
    sequence: options.offset + index + 1,
    status: result.status,
    score: result.score,
    reasons: result.reasons,
    error: result.error,
    id: result.tool.id,
    name: result.tool.name,
    engine: result.tool.engine,
    category: result.tool.category,
    toolKind: result.tool.toolKind || "",
    schemaCount: result.schemaCount,
    prompt: result.prompt,
    outputPreview: preview(result.output)
  };
  if (row.status !== "passed" && firstBrokenOrWeak.length < 30) firstBrokenOrWeak.push(row);
  for (const writer of toolWriters) await writer.write(row);
  maybeKeepComboCandidate(result);
}

for (const writer of toolWriters) await writer.close();

const comboResults = [];

for (const sourceResult of comboCandidates) {
  if (comboResults.length >= options.comboLimit) break;
  let targetsForSource = 0;
  for (const targetResult of comboCandidates) {
    if (comboResults.length >= options.comboLimit || targetsForSource >= 3) break;
    if (sourceResult.tool.id === targetResult.tool.id) continue;
    if (!canConnectTools(sourceResult.tool, targetResult.tool)) continue;
    comboResults.push(runCombination(sourceResult, targetResult.tool));
    targetsForSource += 1;
  }
}

const comboRows = comboResults.map((result, index) => ({
  sequence: index + 1,
  status: result.status,
  score: result.score,
  reasons: result.reasons,
  error: result.error,
  sourceId: result.sourceTool.id,
  sourceName: result.sourceTool.name,
  sourceEngine: result.sourceTool.engine,
  sourceOutputType: result.sourceType,
  targetId: result.targetTool.id,
  targetName: result.targetTool.name,
  targetEngine: result.targetTool.engine,
  targetAccepts: result.targetAccepts,
  outputPreview: preview(result.output)
}));

const brokenOrWeakToolCount = auditedToolCount - (toolStatuses.passed || 0);
const brokenOrWeakComboRows = comboRows.filter((row) => row.status !== "passed");
const summary = {
  version: "2026-06-14-tool-workflow-audit-v1",
  startedAt,
  completedAt: new Date().toISOString(),
  options,
  totals: {
    runtimeTools: runtimeTools.length,
    directWebsiteTools: directWebsiteTools.length,
    skeletonTools: skeletonTools.length,
    potentialApps: POTENTIAL_APP_RECORDS.length,
    productionStreamActivationRecords: PRODUCTION_STREAM_ACTIVATION_RECORDS.length,
    productionStreamMadeRecords: PRODUCTION_STREAM_MADE_RECORDS.length,
    scaleInHouseTools: SCALE_INHOUSE_TOOL_RECORDS.length,
    scaleAppProgramRecords: SCALE_APP_PROGRAM_RECORDS.length,
    target500kInHouseTools: TARGET_500K_INHOUSE_TOOL_RECORDS.length,
    target500kAppProgramRecords: TARGET_500K_APP_PROGRAM_RECORDS.length,
    auditedTools: auditedToolCount,
    auditedCombinations: comboResults.length
  },
  toolStatuses,
  combinationStatuses: summarizeStatuses(comboResults),
  toolReasonCounts: reasonMapToSummary(toolReasonCounts),
  combinationReasonCounts: summarizeReasons(comboResults),
  firstBrokenOrWeak,
  firstBrokenOrWeakCombinations: brokenOrWeakComboRows.slice(0, 30)
};

await writeFile(join(exportsDir, "tool-workflow-audit-summary.json"), JSON.stringify(summary, null, 2), "utf8");
await writeFile(join(exportsDir, `tool-workflow-audit-summary-${batchSlug}.json`), JSON.stringify(summary, null, 2), "utf8");
await writeCsv("tool-workflow-audit-combinations.csv", comboRows, [
  "sequence", "status", "score", "reasons", "error", "sourceId", "sourceName", "sourceEngine", "sourceOutputType",
  "targetId", "targetName", "targetEngine", "targetAccepts", "outputPreview"
]);
await writeCsv(`tool-workflow-audit-combinations-${batchSlug}.csv`, comboRows, [
  "sequence", "status", "score", "reasons", "error", "sourceId", "sourceName", "sourceEngine", "sourceOutputType",
  "targetId", "targetName", "targetEngine", "targetAccepts", "outputPreview"
]);

await writeFile(join(exportsDir, "tool-workflow-audit-broken.md"), [
  "# Tool Workflow Audit Notes",
  "",
  `Generated: ${summary.completedAt}`,
  "",
  "## Tool Statuses",
  "",
  Object.entries(summary.toolStatuses).map(([status, count]) => `- ${status}: ${count}`).join("\n") || "- none",
  "",
  "## Combination Statuses",
  "",
  Object.entries(summary.combinationStatuses).map(([status, count]) => `- ${status}: ${count}`).join("\n") || "- none",
  "",
  "## First Broken Or Weak Tools",
  "",
  ...summary.firstBrokenOrWeak.map((row) => `- ${row.status}: ${row.id} (${row.engine}) - ${row.reasons || row.error}`),
  "",
  "## First Broken Or Weak Combinations",
  "",
  ...summary.firstBrokenOrWeakCombinations.map((row) => `- ${row.status}: ${row.sourceId} -> ${row.targetId} - ${row.reasons || row.error}`)
].join("\n"), "utf8");

console.log(`Audited ${auditedToolCount} tools and ${comboResults.length} combinations.`);
console.log(`Tool statuses: ${JSON.stringify(summary.toolStatuses)}`);
console.log(`Combination statuses: ${JSON.stringify(summary.combinationStatuses)}`);
console.log("Reports written to exports/tool-workflow-audit-*");

if (options.failOnBroken && (brokenOrWeakToolCount || brokenOrWeakComboRows.length)) process.exit(1);
