import { tools } from "./tool-catalog.js";
import { PROJECT_TOOL_GROUPS } from "./project-templates.js";
import {
  MEGA_PROJECT_COUNT,
  MEGA_PROJECT_FIELDS,
  MEGA_PROJECT_GROUP_COUNT,
  MEGA_PROJECT_UI_MAX,
  MEGA_PROJECT_VARIANTS_PER_COMBINATION,
  createMegaProjectNumber,
  getMegaProjectByNumber,
  stableProjectHash
} from "./project-megagenerator.js";

export const DEMAND_RANKER_VERSION = "2026-06-13-demand-ranker-v1";

export const DEMAND_MODEL_NOTES = Object.freeze([
  "Scores are deterministic demand estimates, not real user analytics.",
  "The model intentionally favors repeatable business, creator, ecommerce, document, SEO, calculator, converter, data, developer, and operations workflows.",
  "The 500,000,000 project universe stays virtual; rankings are generated from the same field × group × UI-size × variant coordinate system."
]);

const CATEGORY_DEMAND = Object.freeze({
  "Converters": 1.0,
  "Text": 0.97,
  "Calculators": 0.94,
  "Developer": 0.91,
  "Data": 0.9,
  "SEO & Marketing": 0.89,
  "Generators": 0.86,
  "Date & Time": 0.82,
  "Business": 0.8,
  "Color": 0.73,
  "Gardening": 0.66,
  "Cooking": 0.63
});

const ENGINE_DEMAND = Object.freeze({
  text_transform: 1.0,
  unit_convert: 0.99,
  json_tool: 0.98,
  csv_tool: 0.97,
  encoder: 0.96,
  markdown_table: 0.95,
  meta_length: 0.94,
  keyword_density: 0.93,
  percentage: 0.92,
  percent_change: 0.91,
  date_add: 0.9,
  date_diff: 0.9,
  password_generator: 0.89,
  uuid_generator: 0.88,
  utm_builder: 0.88,
  invoice_total: 0.86,
  simple_formula: 0.85,
  compound_interest: 0.84,
  loan_payment: 0.83,
  unix_time: 0.82,
  color_convert: 0.77,
  contrast_ratio: 0.76,
  soil_mix: 0.72,
  plant_spacing: 0.71,
  recipe_scale: 0.69,
  random_number: 0.62,
  tip_calculator: 0.61,
  text_stats: 0.92
});

const FAMILY_DEMAND = Object.freeze({
  marketing: 1.0,
  seo: 0.98,
  content: 0.97,
  sales: 0.96,
  email: 0.95,
  operations: 0.94,
  data: 0.93,
  reporting: 0.92,
  support: 0.91,
  finance: 0.9,
  scheduling: 0.88,
  developer: 0.87,
  security: 0.86,
  pricing: 0.85,
  inventory: 0.84,
  outreach: 0.83,
  "web-launch": 0.82,
  research: 0.81,
  product: 0.8,
  compliance: 0.77,
  hr: 0.75,
  training: 0.73,
  ux: 0.72,
  "project-management": 0.71
});

const OUTCOME_DEMAND = Object.freeze({
  "daily-checklist": 1.0,
  "intake-to-output": 0.97,
  audit: 0.94,
  "decision-report": 0.91,
  campaign: 0.88
});

const FIELD_KEYWORD_WEIGHTS = Object.freeze([
  [/retail|ecommerce|shop|store|fashion|print|sign/i, 1.0],
  [/restaurant|food|coffee|bakery|catering|truck|cooking/i, 0.98],
  [/content|seo|web design|newsletter|youtube|podcast|creator|affiliate|marketing|agency/i, 0.97],
  [/saas|mobile app|developer|cybersecurity|data|it helpdesk|ai operations/i, 0.95],
  [/bookkeeping|tax|insurance|mortgage|legal|grant|finance|payroll/i, 0.93],
  [/real estate|property|construction|architecture|engineering|contracting|roofing|hvac|plumbing|electrical/i, 0.92],
  [/health|dental|wellness|veterinary|daycare|hr|recruiting|staff/i, 0.9],
  [/warehouse|manufacturing|fleet|trucking|field service|logistics|auto/i, 0.88],
  [/landscaping|lawn|farm|greenhouse|garden|nursery|houseplant|urban farm/i, 0.84],
  [/event|wedding|travel|hotel|vacation|sports|music|artist|game|community/i, 0.8],
  [/beauty|barber|spa|fitness|yoga|personal training|tutoring|courses/i, 0.79]
]);

const UI_DEMAND = Object.freeze({
  1: 0.94,
  2: 1.0,
  3: 0.99,
  4: 0.98,
  5: 0.94,
  6: 0.93,
  7: 0.9,
  8: 0.89,
  9: 0.85,
  10: 0.84,
  11: 0.82,
  12: 0.81,
  13: 0.78,
  14: 0.77,
  15: 0.76,
  16: 0.75
});

const toolsById = new Map(tools.map((tool) => [tool.id, tool]));
const toolsByEngine = new Map();
for (const tool of tools) {
  if (!toolsByEngine.has(tool.engine)) toolsByEngine.set(tool.engine, []);
  toolsByEngine.get(tool.engine).push(tool);
}
for (const pool of toolsByEngine.values()) pool.sort((a, b) => a.id.localeCompare(b.id));

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundScore(value) {
  return Math.round(value * 1000000) / 1000000;
}

function fieldDemand(field) {
  const text = String(field || "");
  let score = 0.58;
  for (const [pattern, weight] of FIELD_KEYWORD_WEIGHTS) {
    if (pattern.test(text)) score = Math.max(score, weight);
  }
  const lengthPenalty = Math.max(0, text.length - 28) * 0.001;
  return clamp(score - lengthPenalty, 0.42, 1);
}

function groupDemand(group) {
  const family = FAMILY_DEMAND[group?.familyId] ?? 0.68;
  const outcome = OUTCOME_DEMAND[group?.outcomeId] ?? 0.72;
  const engineBoost = (group?.compatibleEngines || []).reduce((sum, engine) => sum + (ENGINE_DEMAND[engine] || 0.64), 0) / Math.max(1, (group?.compatibleEngines || []).length);
  return clamp(family * 0.48 + outcome * 0.3 + engineBoost * 0.22, 0.35, 1);
}

export function getUiDemand(uiNodes) {
  if (UI_DEMAND[uiNodes]) return UI_DEMAND[uiNodes];
  if (uiNodes <= 24) return 0.72 - (uiNodes - 17) * 0.018;
  if (uiNodes <= 32) return 0.58 - (uiNodes - 25) * 0.012;
  if (uiNodes <= 48) return 0.46 - (uiNodes - 33) * 0.006;
  return 0.35 - (uiNodes - 49) * 0.003;
}

function variantDemand(variantIndex) {
  const novelty = 1 - (variantIndex / Math.max(1, MEGA_PROJECT_VARIANTS_PER_COMBINATION - 1));
  const bucket = 0.88 + novelty * 0.12;
  const stableBonus = (stableProjectHash(`variant-${variantIndex}`) % 1000) / 100000;
  return clamp(bucket + stableBonus, 0.84, 1.01);
}

export function getToolDemand(tool) {
  if (!tool) return 0.5;
  const category = CATEGORY_DEMAND[tool.category] ?? 0.62;
  const engine = ENGINE_DEMAND[tool.engine] ?? 0.65;
  const tagText = (tool.tags || []).join(" ").toLowerCase();
  let tagBoost = 0;
  if (/pdf|image|compress|convert|json|csv|password|qr|word|meta|keyword|utm|calculator|invoice|date|unit|base64|url/.test(tagText)) tagBoost += 0.045;
  if (/private|secure|browser|local|audit|report|schedule|label|email|customer/.test(tagText)) tagBoost += 0.025;
  return clamp(category * 0.45 + engine * 0.5 + tagBoost, 0.35, 1.05);
}

export function getMegaDemandScore({ fieldIndex = 0, groupIndex = 0, uiNodes = 1, variantIndex = 0 } = {}) {
  const field = MEGA_PROJECT_FIELDS[fieldIndex] || MEGA_PROJECT_FIELDS[0];
  const group = PROJECT_TOOL_GROUPS[groupIndex] || PROJECT_TOOL_GROUPS[0];
  const fieldScore = fieldDemand(field);
  const groupScore = groupDemand(group);
  const uiScore = getUiDemand(uiNodes);
  const variantScore = variantDemand(variantIndex);
  const score = fieldScore * 0.31 + groupScore * 0.33 + uiScore * 0.25 + variantScore * 0.11;
  return roundScore(score);
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


function specialistEnginesForField(field, group) {
  const text = `${field || ""} ${group?.familyId || ""} ${group?.name || ""}`.toLowerCase();
  const engines = [];
  if (/farm|greenhouse|garden|nursery|houseplant|landscaping|lawn|mushroom|urban farm/.test(text)) engines.push("soil_mix", "plant_spacing", "unit_convert", "date_add");
  if (/restaurant|food|coffee|bakery|catering|food truck|cooking/.test(text)) engines.push("recipe_scale", "tip_calculator", "invoice_total", "date_add");
  if (/bookkeeping|tax|finance|insurance|mortgage|pricing|invoice|payroll/.test(text)) engines.push("invoice_total", "percentage", "percent_change", "compound_interest", "loan_payment");
  if (/developer|saas|app|cybersecurity|data|it helpdesk|security/.test(text)) engines.push("json_tool", "encoder", "password_generator", "uuid_generator", "unix_time");
  if (/content|seo|marketing|youtube|newsletter|podcast|creator|agency|web design|retail|ecommerce/.test(text)) engines.push("text_transform", "meta_length", "keyword_density", "utm_builder", "markdown_table");
  if (/schedule|event|travel|hotel|staff|field service|warehouse|manufacturing|logistics/.test(text)) engines.push("date_add", "date_diff", "csv_tool", "markdown_table");
  return [...new Set(engines)];
}

function chooseSpecialistTools({ field, group, seed, usedIds, limit = 2 }) {
  const engines = specialistEnginesForField(field, group);
  const selected = [];
  for (let i = 0; i < engines.length && selected.length < limit; i += 1) {
    const tool = chooseToolForEngine(engines[i], seed + i * 9973, usedIds);
    if (tool) selected.push(tool);
  }
  return selected;
}

export function getProjectedToolChain({ fieldIndex = 0, groupIndex = 0, uiNodes = 1, variantIndex = 0 } = {}) {
  const group = PROJECT_TOOL_GROUPS[groupIndex] || PROJECT_TOOL_GROUPS[0];
  const engines = Array.isArray(group.compatibleEngines) && group.compatibleEngines.length
    ? group.compatibleEngines
    : ["text_transform", "json_tool", "csv_tool", "markdown_table"];
  const used = new Set();
  const chain = [];
  for (let i = 0; i < uiNodes; i += 1) {
    const engine = engines[(fieldIndex + groupIndex + variantIndex + i) % engines.length];
    const seed = fieldIndex * 1000003 + groupIndex * 9176 + variantIndex * 389 + i * 37;
    chain.push(chooseToolForEngine(engine, seed, used));
  }
  return chain;
}

function sortedFieldIndexes() {
  return MEGA_PROJECT_FIELDS
    .map((field, index) => ({ index, field, score: fieldDemand(field) }))
    .sort((a, b) => b.score - a.score || a.field.localeCompare(b.field));
}

function sortedGroupIndexes() {
  return PROJECT_TOOL_GROUPS
    .map((group, index) => ({ index, group, score: groupDemand(group) }))
    .sort((a, b) => b.score - a.score || String(a.group.name).localeCompare(String(b.group.name)));
}

function sortedUiIndexes() {
  return Array.from({ length: MEGA_PROJECT_UI_MAX }, (_, index) => ({ uiNodes: index + 1, score: getUiDemand(index + 1) }))
    .sort((a, b) => b.score - a.score || a.uiNodes - b.uiNodes);
}

function sortedVariantIndexes(limit = 12) {
  return Array.from({ length: MEGA_PROJECT_VARIANTS_PER_COMBINATION }, (_, index) => ({ index, score: variantDemand(index) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, Math.max(1, limit));
}

function passesFilters({ field, group, uiNodes }, filters = {}) {
  const query = String(filters.query || "").trim().toLowerCase();
  if (query) {
    const haystack = `${field} ${group.name} ${group.purpose} ${group.familyId} ${group.outcomeId} ${(group.compatibleEngines || []).join(" ")}`.toLowerCase();
    if (!query.split(/\s+/).every((token) => haystack.includes(token))) return false;
  }
  if (filters.familyId && filters.familyId !== "All" && group.familyId !== filters.familyId) return false;
  if (filters.minUi && uiNodes < filters.minUi) return false;
  if (filters.maxUi && uiNodes > filters.maxUi) return false;
  return true;
}

export function getDemandRankedProjects(options = {}) {
  const {
    limit = 50,
    fieldDepth = 32,
    groupDepth = 64,
    uiDepth = 24,
    variantDepth = 8,
    query = "",
    familyId = "All",
    minUi = 1,
    maxUi = 64
  } = options;
  const fields = sortedFieldIndexes().slice(0, fieldDepth);
  const groups = sortedGroupIndexes().slice(0, groupDepth);
  const uiSizes = sortedUiIndexes().filter((item) => item.uiNodes >= minUi && item.uiNodes <= maxUi).slice(0, uiDepth);
  const variants = sortedVariantIndexes(variantDepth);
  const heap = [];

  for (const fieldItem of fields) {
    for (const groupItem of groups) {
      for (const uiItem of uiSizes) {
        if (!passesFilters({ field: fieldItem.field, group: groupItem.group, uiNodes: uiItem.uiNodes }, { query, familyId, minUi, maxUi })) continue;
        for (const variantItem of variants) {
          const demandScore = getMegaDemandScore({ fieldIndex: fieldItem.index, groupIndex: groupItem.index, uiNodes: uiItem.uiNodes, variantIndex: variantItem.index });
          const projectNumber = createMegaProjectNumber({ fieldIndex: fieldItem.index, groupIndex: groupItem.index, uiNodes: uiItem.uiNodes, variantIndex: variantItem.index });
          heap.push({ projectNumber, demandScore, fieldScore: roundScore(fieldItem.score), groupScore: roundScore(groupItem.score), uiScore: roundScore(uiItem.score), variantScore: roundScore(variantItem.score) });
        }
      }
    }
  }

  return heap
    .sort((a, b) => b.demandScore - a.demandScore || a.projectNumber - b.projectNumber)
    .slice(0, limit)
    .map((item, index) => {
      const project = getMegaProjectByNumber(item.projectNumber);
      return {
        rank: index + 1,
        demandScore: item.demandScore,
        scoreBreakdown: {
          field: item.fieldScore,
          group: item.groupScore,
          uiSize: item.uiScore,
          variant: item.variantScore
        },
        ...project
      };
    });
}

export function buildToolUsageEstimate(options = {}) {
  const {
    fieldLimit = MEGA_PROJECT_FIELDS.length,
    groupLimit = MEGA_PROJECT_GROUP_COUNT,
    uiSamples = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 48, 64],
    variantSamples = [0, 1, 2, 3, 7, 15, 31, 63, 127, 255, 383, 511, 624]
  } = options;
  const usage = new Map();
  const fieldIndexes = sortedFieldIndexes().slice(0, fieldLimit);
  const groupIndexes = sortedGroupIndexes().slice(0, groupLimit);
  const validUiSamples = uiSamples.filter((uiNodes) => uiNodes >= 1 && uiNodes <= MEGA_PROJECT_UI_MAX);
  const validVariantSamples = variantSamples.filter((variantIndex) => variantIndex >= 0 && variantIndex < MEGA_PROJECT_VARIANTS_PER_COMBINATION);
  const uiMultiplier = MEGA_PROJECT_UI_MAX / Math.max(1, validUiSamples.length);
  const variantMultiplier = MEGA_PROJECT_VARIANTS_PER_COMBINATION / Math.max(1, validVariantSamples.length);
  let sampledProjectCount = 0;
  let projectedProjectWeight = 0;

  for (const fieldItem of fieldIndexes) {
    for (const groupItem of groupIndexes) {
      for (const uiNodes of validUiSamples) {
        for (const variantIndex of validVariantSamples) {
          const demandScore = getMegaDemandScore({ fieldIndex: fieldItem.index, groupIndex: groupItem.index, uiNodes, variantIndex });
          const projectWeight = demandScore * uiMultiplier * variantMultiplier;
          const chain = getProjectedToolChain({ fieldIndex: fieldItem.index, groupIndex: groupItem.index, uiNodes, variantIndex });
          const usedIds = new Set(chain.map((tool) => tool.id));
          const specialists = chooseSpecialistTools({
            field: fieldItem.field,
            group: groupItem.group,
            seed: fieldItem.index * 101 + groupItem.index * 1009 + variantIndex * 7919 + uiNodes,
            usedIds,
            limit: uiNodes <= 2 ? 1 : 2
          });
          const projectTools = [...chain, ...specialists];
          sampledProjectCount += 1;
          projectedProjectWeight += projectWeight;
          for (let stepIndex = 0; stepIndex < projectTools.length; stepIndex += 1) {
            const tool = projectTools[stepIndex];
            const toolDemand = getToolDemand(tool);
            const positionWeight = stepIndex < chain.length
              ? 1 - Math.min(stepIndex, 63) * 0.006
              : 0.42;
            const addition = projectWeight * toolDemand * positionWeight;
            const existing = usage.get(tool.id) || {
              toolId: tool.id,
              name: tool.name,
              category: tool.category,
              engine: tool.engine,
              projectedUses: 0,
              sampledHits: 0,
              demandScore: 0
            };
            existing.projectedUses += addition;
            existing.sampledHits += 1;
            existing.demandScore = Math.max(existing.demandScore, toolDemand);
            usage.set(tool.id, existing);
          }
        }
      }
    }
  }

  for (const tool of tools) {
    if (!usage.has(tool.id)) {
      usage.set(tool.id, {
        toolId: tool.id,
        name: tool.name,
        category: tool.category,
        engine: tool.engine,
        projectedUses: 0,
        sampledHits: 0,
        demandScore: getToolDemand(tool)
      });
    }
  }

  const rankedTools = [...usage.values()]
    .map((item) => ({
      ...item,
      projectedUses: Math.round(item.projectedUses),
      demandScore: roundScore(item.demandScore)
    }))
    .sort((a, b) => b.projectedUses - a.projectedUses || b.demandScore - a.demandScore || a.name.localeCompare(b.name))
    .map((item, index) => ({ rank: index + 1, ...item }));

  return {
    version: DEMAND_RANKER_VERSION,
    sourceProjectUniverse: MEGA_PROJECT_COUNT,
    sampledProjectCount,
    projectedProjectWeight: Math.round(projectedProjectWeight),
    fieldCount: fieldIndexes.length,
    groupCount: groupIndexes.length,
    uiSamples: validUiSamples,
    variantSamples: validVariantSamples,
    generatedAt: new Date().toISOString(),
    notes: DEMAND_MODEL_NOTES,
    rankedTools
  };
}

export function summarizeDemandByCategory(rankedTools) {
  const summary = new Map();
  for (const item of rankedTools) {
    const current = summary.get(item.category) || { category: item.category, projectedUses: 0, toolCount: 0, topTool: item.name };
    current.projectedUses += item.projectedUses;
    current.toolCount += 1;
    if (!current.topTool || item.rank < (current.topRank || Infinity)) {
      current.topTool = item.name;
      current.topRank = item.rank;
    }
    summary.set(item.category, current);
  }
  return [...summary.values()]
    .map((item) => ({ ...item, projectedUses: Math.round(item.projectedUses) }))
    .sort((a, b) => b.projectedUses - a.projectedUses || a.category.localeCompare(b.category));
}

export function getDemandModelStats() {
  return {
    version: DEMAND_RANKER_VERSION,
    projectUniverse: MEGA_PROJECT_COUNT,
    scoringDimensions: ["field demand", "tool-group demand", "UI-size demand", "variant demand"],
    categoryDemand: CATEGORY_DEMAND,
    familyDemand: FAMILY_DEMAND,
    outcomeDemand: OUTCOME_DEMAND,
    notes: DEMAND_MODEL_NOTES
  };
}
