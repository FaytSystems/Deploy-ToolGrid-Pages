import { tools } from "./tool-catalog.js";
import { PROJECT_FIELDS, PROJECT_TOOL_GROUPS } from "./project-templates.js";

export const MEGA_PROJECT_VERSION = "2026-06-13-500000000-virtual-projects-v1";
export const MEGA_PROJECT_COUNT = 500_000_000;
export const MEGA_PROJECT_UI_MIN = 1;
export const MEGA_PROJECT_UI_MAX = 64;
export const MEGA_PROJECT_VARIANTS_PER_COMBINATION = 625;

const SUPPLEMENTAL_FIELDS = [
  "AI operations",
  "SaaS onboarding",
  "Customer support",
  "Field service",
  "Warehouse operations",
  "Manufacturing admin",
  "Fleet management",
  "Construction bidding",
  "Farm management",
  "Greenhouse operations",
  "Creator agency",
  "Music studio",
  "Game studio",
  "App development",
  "Cybersecurity practice",
  "HR recruiting",
  "Payroll services",
  "Grant writing",
  "Research lab",
  "Local government office"
];

export const MEGA_PROJECT_FIELDS = Object.freeze([...PROJECT_FIELDS, ...SUPPLEMENTAL_FIELDS]);
export const MEGA_PROJECT_GROUP_COUNT = PROJECT_TOOL_GROUPS.length;
export const MEGA_PROJECT_FIELD_COUNT = MEGA_PROJECT_FIELDS.length;
export const MEGA_PROJECT_COMBINATION_COUNT = MEGA_PROJECT_FIELD_COUNT * MEGA_PROJECT_GROUP_COUNT * MEGA_PROJECT_UI_MAX * MEGA_PROJECT_VARIANTS_PER_COMBINATION;

if (MEGA_PROJECT_COMBINATION_COUNT !== MEGA_PROJECT_COUNT) {
  throw new Error(`Mega project dimensions must equal ${MEGA_PROJECT_COUNT}; got ${MEGA_PROJECT_COMBINATION_COUNT}`);
}

export const MEGA_PROJECT_COMPLEXITY_COUNTS = Object.freeze({
  "single-1": 7_812_500,
  "micro-2-4": 23_437_500,
  "mid-5-8": 31_250_000,
  "standard-9-16": 62_500_000,
  "advanced-17-32": 125_000_000,
  "nested-33-64": 250_000_000
});

const engineRole = {
  text_transform: "transform, clean, rewrite, or normalize project text",
  list_transform: "reshape list data for the next UI node",
  encoder: "encode, decode, or safely move structured strings",
  json_tool: "inspect, format, or convert project JSON",
  csv_tool: "move spreadsheet-style data through the project bus",
  markdown_table: "turn data into a readable project report table",
  keyword_density: "measure keyword usage and topical focus",
  meta_length: "validate title and description lengths",
  utm_builder: "create trackable campaign URLs",
  percentage: "calculate a project percentage",
  percent_change: "calculate change across two project values",
  tip_calculator: "calculate service totals",
  loan_payment: "model a recurring payment",
  compound_interest: "project compounding growth",
  invoice_total: "produce a pricing or invoice total",
  simple_formula: "run a lightweight formula step",
  date_add: "project dates forward",
  date_diff: "measure durations and gaps",
  unix_time: "convert or stamp timestamps",
  color_convert: "convert colors for brand/UI use",
  contrast_ratio: "validate readability contrast",
  password_generator: "create a secure secret for the project",
  uuid_generator: "create unique IDs for project records",
  unit_convert: "convert operational measurements",
  plant_spacing: "calculate plant or display spacing",
  soil_mix: "plan a material or medium mix",
  recipe_scale: "scale ingredient or recipe quantities",
  random_number: "create randomized sample values"
};

const toolsByEngine = new Map();
for (const tool of tools) {
  if (!toolsByEngine.has(tool.engine)) toolsByEngine.set(tool.engine, []);
  toolsByEngine.get(tool.engine).push(tool);
}
for (const pool of toolsByEngine.values()) pool.sort((a, b) => a.id.localeCompare(b.id));

function slug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function titleCase(value) {
  return String(value || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

export function stableProjectHash(value) {
  let hash = 2166136261;
  const text = String(value || "mega-project");
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function getMegaComplexityForUiCount(uiNodes) {
  if (uiNodes <= 1) return "single-1";
  if (uiNodes <= 4) return "micro-2-4";
  if (uiNodes <= 8) return "mid-5-8";
  if (uiNodes <= 16) return "standard-9-16";
  if (uiNodes <= 32) return "advanced-17-32";
  return "nested-33-64";
}

export function getMegaUiRangeForComplexity(complexity = "All") {
  switch (complexity) {
    case "single-1": return [1, 1];
    case "micro-2-4": return [2, 4];
    case "mid-5-8":
    case "mid-8": return [5, 8];
    case "standard-9-16":
    case "standard-16": return [9, 16];
    case "advanced-17-32":
    case "advanced-32": return [17, 32];
    case "nested-33-64":
    case "nested-64": return [33, 64];
    default: return [MEGA_PROJECT_UI_MIN, MEGA_PROJECT_UI_MAX];
  }
}

export function recommendMegaLayout(panelCount) {
  if (panelCount <= 1) return "1x1";
  if (panelCount === 2) return "2x1";
  if (panelCount <= 4) return "2x2";
  if (panelCount <= 6) return "3x2";
  if (panelCount <= 8) return "4x2";
  if (panelCount <= 12) return "4x3";
  return "4x4";
}

function getDimensionParts(projectNumber) {
  if (!Number.isInteger(projectNumber) || projectNumber < 1 || projectNumber > MEGA_PROJECT_COUNT) {
    throw new RangeError(`projectNumber must be an integer from 1 to ${MEGA_PROJECT_COUNT}`);
  }
  let cursor = projectNumber - 1;
  const variantIndex = cursor % MEGA_PROJECT_VARIANTS_PER_COMBINATION;
  cursor = Math.floor(cursor / MEGA_PROJECT_VARIANTS_PER_COMBINATION);
  const uiIndex = cursor % MEGA_PROJECT_UI_MAX;
  cursor = Math.floor(cursor / MEGA_PROJECT_UI_MAX);
  const groupIndex = cursor % MEGA_PROJECT_GROUP_COUNT;
  cursor = Math.floor(cursor / MEGA_PROJECT_GROUP_COUNT);
  const fieldIndex = cursor % MEGA_PROJECT_FIELD_COUNT;
  return { fieldIndex, groupIndex, uiIndex, variantIndex };
}

export function createMegaProjectNumber({ fieldIndex = 0, groupIndex = 0, uiNodes = 1, variantIndex = 0 } = {}) {
  const safeField = Math.max(0, Math.min(MEGA_PROJECT_FIELD_COUNT - 1, Math.trunc(fieldIndex)));
  const safeGroup = Math.max(0, Math.min(MEGA_PROJECT_GROUP_COUNT - 1, Math.trunc(groupIndex)));
  const safeUi = Math.max(MEGA_PROJECT_UI_MIN, Math.min(MEGA_PROJECT_UI_MAX, Math.trunc(uiNodes)));
  const safeVariant = Math.max(0, Math.min(MEGA_PROJECT_VARIANTS_PER_COMBINATION - 1, Math.trunc(variantIndex)));
  return 1
    + safeVariant
    + (safeUi - 1) * MEGA_PROJECT_VARIANTS_PER_COMBINATION
    + safeGroup * MEGA_PROJECT_VARIANTS_PER_COMBINATION * MEGA_PROJECT_UI_MAX
    + safeField * MEGA_PROJECT_VARIANTS_PER_COMBINATION * MEGA_PROJECT_UI_MAX * MEGA_PROJECT_GROUP_COUNT;
}

function chooseToolForEngine(engine, seed, usedIds) {
  const pool = toolsByEngine.get(engine) || tools;
  for (let offset = 0; offset < pool.length; offset += 1) {
    const tool = pool[(seed + offset) % pool.length];
    if (!usedIds.has(tool.id)) {
      usedIds.add(tool.id);
      return tool;
    }
  }
  const fallback = pool[seed % pool.length];
  usedIds.add(fallback.id);
  return fallback;
}

function fallbackGroup(index) {
  return {
    id: `mega-fallback-group-${index}`,
    name: "General Project Toolkit",
    purpose: "A fallback group for project workflows that pass text, data, numbers, URLs, and dates through the project bus.",
    familyId: "general",
    outcomeId: "complete-task",
    compatibleEngines: ["text_transform", "list_transform", "json_tool", "csv_tool", "markdown_table", "meta_length", "keyword_density", "utm_builder"]
  };
}

function buildToolChain({ group, fieldIndex, groupIndex, uiNodes, variantIndex }) {
  const engines = Array.isArray(group.compatibleEngines) && group.compatibleEngines.length
    ? group.compatibleEngines
    : fallbackGroup(groupIndex).compatibleEngines;
  const used = new Set();
  const chain = [];
  for (let i = 0; i < uiNodes; i += 1) {
    const engine = engines[(fieldIndex + groupIndex + variantIndex + i) % engines.length];
    const seed = fieldIndex * 1000003 + groupIndex * 9176 + variantIndex * 389 + i * 37;
    chain.push(chooseToolForEngine(engine, seed, used));
  }
  return chain;
}

function buildPanels({ chain, group, field }) {
  const panels = [];
  let cursor = 0;
  while (cursor < chain.length && panels.length < 16) {
    const remaining = chain.length - cursor;
    const slots = Math.min(4, remaining);
    const panelTools = [];
    for (let local = 0; local < slots; local += 1) {
      const tool = chain[cursor];
      panelTools.push({
        order: cursor + 1,
        toolId: tool.id,
        role: engineRole[tool.engine] || `complete a ${group.familyId || "project"} subtask`,
        uiDepth: local + 1
      });
      cursor += 1;
    }
    panels.push({
      panelIndex: panels.length,
      uiTitle: `${titleCase(group.familyId || "project")} UI ${panels.length + 1}`,
      mode: panels.length === 0 ? "intake" : "waterfall",
      tools: panelTools,
      projectScope: field
    });
  }
  return panels;
}

export function getMegaProjectByNumber(projectNumber) {
  const { fieldIndex, groupIndex, uiIndex, variantIndex } = getDimensionParts(projectNumber);
  const field = MEGA_PROJECT_FIELDS[fieldIndex];
  const group = PROJECT_TOOL_GROUPS[groupIndex] || fallbackGroup(groupIndex);
  const uiNodes = uiIndex + 1;
  const complexity = getMegaComplexityForUiCount(uiNodes);
  const chain = buildToolChain({ group, fieldIndex, groupIndex, uiNodes, variantIndex });
  const panels = buildPanels({ chain, group, field });
  const groupName = group.name || titleCase(group.familyId || "tool group");
  const title = `${field} ${groupName} project ${String(variantIndex + 1).padStart(3, "0")}`;
  const projectId = `mega-project-${String(projectNumber).padStart(9, "0")}`;
  return {
    id: projectId,
    virtualProjectNumber: projectNumber,
    source: "mega-generator",
    title,
    field,
    businessFunction: group.familyId || groupName,
    groupId: group.id,
    outcome: `Use ${uiNodes} compatible UI node${uiNodes === 1 ? "" : "s"} to move ${field} work through ${groupName.toLowerCase()} until the project reaches a usable output.`,
    prompt: `Build a ${uiNodes}-UI ${field} workflow using ${groupName}. Route the input through compatible tools, animate the run path, and save every artifact to the project bus.`,
    inputHint: `Paste ${field} notes, URLs, numbers, table data, dates, or instructions. The ${uiNodes}-UI workflow will route it through compatible ${groupName} tools.`,
    complexity,
    layout: recommendMegaLayout(panels.length),
    executionMode: uiNodes === 1 ? "single-ui" : uiNodes <= 8 ? "compact-waterfall" : uiNodes <= 32 ? "hybrid-waterfall" : "nested-waterfall",
    toolCount: uiNodes,
    panelCount: panels.length,
    maxNestedUiDepth: Math.max(...panels.map((panel) => panel.tools.length), 1),
    tags: ["mega-generator", slug(field), group.familyId || "general", group.outcomeId || "workflow", complexity, `${uiNodes}-ui`],
    compatibilitySummary: `${uiNodes} UI node${uiNodes === 1 ? "" : "s"} arranged across ${panels.length} outer panel${panels.length === 1 ? "" : "s"}; each panel can hold 1–4 nested tool UIs and pass artifacts through the shared project bus.`,
    panels
  };
}

function scoreTextAgainstQuery(text, query) {
  const clean = normalize(query);
  if (!clean) return 1;
  const haystack = normalize(text);
  let score = haystack.includes(clean) ? 80 : 0;
  for (const token of clean.split(/\s+/).filter(Boolean)) {
    if (haystack.includes(token)) score += token.length > 4 ? 12 : 5;
  }
  return score;
}

function rankedFields(query) {
  const scored = MEGA_PROJECT_FIELDS
    .map((field, index) => ({ index, field, score: scoreTextAgainstQuery(field, query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.field.localeCompare(b.field));
  return scored.length ? scored : MEGA_PROJECT_FIELDS.slice(0, 20).map((field, index) => ({ index, field, score: 1 }));
}

function rankedGroups(query) {
  const scored = PROJECT_TOOL_GROUPS
    .map((group, index) => ({
      index,
      group,
      score: scoreTextAgainstQuery([group.name, group.purpose, group.familyId, group.outcomeId].join(" "), query)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || String(a.group.name).localeCompare(String(b.group.name)));
  return scored.length ? scored : PROJECT_TOOL_GROUPS.slice(0, 20).map((group, index) => ({ index, group, score: 1 }));
}

export function searchMegaProjects(query = "", options = {}) {
  const {
    limit = 24,
    complexity = "All",
    uiMin = null,
    uiMax = null,
    page = 0
  } = options;
  const [complexityMin, complexityMax] = getMegaUiRangeForComplexity(complexity);
  const minUi = Math.max(MEGA_PROJECT_UI_MIN, uiMin ?? complexityMin);
  const maxUi = Math.min(MEGA_PROJECT_UI_MAX, uiMax ?? complexityMax);
  const fields = rankedFields(query).slice(0, Math.max(1, Math.min(12, limit)));
  const groups = rankedGroups(query).slice(0, Math.max(1, Math.min(12, limit)));
  const baseHash = stableProjectHash(`${query}|${complexity}|${page}`);
  const results = [];
  const seen = new Set();

  for (let i = 0; i < fields.length && results.length < limit; i += 1) {
    for (let j = 0; j < groups.length && results.length < limit; j += 1) {
      const span = Math.max(1, maxUi - minUi + 1);
      const uiNodes = minUi + ((baseHash + i * 11 + j * 17 + page * 19 + results.length * 23) % span);
      const variantIndex = (baseHash + i * 41 + j * 73 + page * 101 + results.length * 137) % MEGA_PROJECT_VARIANTS_PER_COMBINATION;
      const projectNumber = createMegaProjectNumber({
        fieldIndex: fields[i].index,
        groupIndex: groups[j].index,
        uiNodes,
        variantIndex
      });
      if (seen.has(projectNumber)) continue;
      seen.add(projectNumber);
      results.push(getMegaProjectByNumber(projectNumber));
    }
  }

  let filler = 0;
  while (results.length < limit && filler < limit * 10) {
    const projectNumber = 1 + ((baseHash + page * 7919 + filler * 104729) % MEGA_PROJECT_COUNT);
    const template = getMegaProjectByNumber(projectNumber);
    if (template.toolCount >= minUi && template.toolCount <= maxUi && !seen.has(projectNumber)) {
      seen.add(projectNumber);
      results.push(template);
    }
    filler += 1;
  }

  return results;
}

export function getMegaProjectStats() {
  return {
    version: MEGA_PROJECT_VERSION,
    totalProjects: MEGA_PROJECT_COUNT,
    fieldCount: MEGA_PROJECT_FIELD_COUNT,
    groupCount: MEGA_PROJECT_GROUP_COUNT,
    variantsPerCombination: MEGA_PROJECT_VARIANTS_PER_COMBINATION,
    uiMin: MEGA_PROJECT_UI_MIN,
    uiMax: MEGA_PROJECT_UI_MAX,
    perUiSize: MEGA_PROJECT_COUNT / MEGA_PROJECT_UI_MAX,
    complexityCounts: MEGA_PROJECT_COMPLEXITY_COUNTS
  };
}
