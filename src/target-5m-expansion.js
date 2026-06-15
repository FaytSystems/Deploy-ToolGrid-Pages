import { MINI_APP_DOMAINS } from "./mini-apps.js";
import { TARGET_500K_SOLO_JOB_PATTERNS } from "./target-500k-expansion.js";

export const TARGET_5M_VERSION = "2026-06-15-target-5m-virtual-production-v1";
export const TARGET_5M_BATCH_SIZE = 50000;
export const TARGET_5M_BASELINE_RUNTIME_RECORDS = 500000;
export const TARGET_5M_FINAL_RUNTIME_RECORDS = 5000000;
export const TARGET_5M_ADDITIONAL_RUNTIME_RECORDS = TARGET_5M_FINAL_RUNTIME_RECORDS - TARGET_5M_BASELINE_RUNTIME_RECORDS;
export const TARGET_5M_SOLO_TOOL_COUNT = 1500000;
export const TARGET_5M_SKELETON_TOOL_COUNT = 1500000;
export const TARGET_5M_APP_PROGRAM_COUNT = 1500000;
export const TARGET_5M_SOLO_LABEL = "Target 5M In-House Solo Tool";
export const TARGET_5M_APP_LABEL = "Target 5M App Program";
export const TARGET_5M_SKELETON_LABEL = "SKELETON";

export const TARGET_5M_TYPE_TARGETS = Object.freeze({
  "mini-app": 450000,
  app: 300000,
  "full-app": 225000,
  "mini-program": 225000,
  program: 150000,
  "full-program": 75000,
  "production-pack": 75000
});

export const TARGET_5M_BASELINE_TOTALS = Object.freeze({
  runtimeRecords: 500000,
  "direct-in-house-tools": 150000,
  "skeleton-tools": 152500,
  "mini-apps": 74455,
  apps: 34687,
  "full-apps": 24835,
  "mini-programs-and-programs": 34776,
  "full-programs-and-production-packs": 29793
});

const TARGET_5M_TYPE_ORDER = Object.freeze(Object.keys(TARGET_5M_TYPE_TARGETS));
const TARGET_5M_TYPE_STARTS = Object.freeze(TARGET_5M_TYPE_ORDER.reduce((rows, type) => {
  const previous = rows.at(-1);
  rows.push({
    type,
    start: previous ? previous.end : 0,
    end: (previous ? previous.end : 0) + TARGET_5M_TYPE_TARGETS[type]
  });
  return rows;
}, []));

const APP_FAMILIES = Object.freeze([
  ["command", "Command", ["intake-parser", "operations-planner", "reporting-builder", "handoff-exporter"]],
  ["finance", "Finance", ["finance-parser", "finance-calculator", "pricing-scorer", "reporting-exporter"]],
  ["customer", "Customer", ["customer-parser", "communication-builder", "schedule-planner", "handoff-packager"]],
  ["document", "Document", ["documents-parser", "documents-summarizer", "compliance-checker", "handoff-exporter"]],
  ["operations", "Operations", ["operations-parser", "operations-prioritizer", "schedule-planner", "reporting-builder"]],
  ["inventory", "Inventory", ["inventory-parser", "inventory-monitor", "pricing-estimator", "reporting-exporter"]],
  ["content", "Content", ["creator-planner", "media-builder", "design-formatter", "communication-exporter"]],
  ["research", "Research", ["research-parser", "research-summarizer", "analytics-scorer", "reporting-builder"]],
  ["compliance", "Compliance", ["compliance-parser", "legal-checker", "documents-packager", "handoff-exporter"]],
  ["dispatch", "Dispatch", ["schedule-router", "logistics-planner", "communication-builder", "handoff-packager"]],
  ["maintenance", "Maintenance", ["maintenance-parser", "inventory-checker", "schedule-monitor", "reporting-builder"]],
  ["sales", "Sales", ["sales-parser", "customer-scorer", "communication-builder", "handoff-exporter"]],
  ["marketing", "Marketing", ["marketing-planner", "creator-builder", "analytics-monitor", "reporting-exporter"]],
  ["training", "Training", ["training-parser", "education-builder", "documents-formatter", "handoff-packager"]],
  ["support", "Support", ["support-parser", "customer-router", "communication-builder", "reporting-builder"]],
  ["product", "Product", ["product-parser", "analytics-scorer", "operations-planner", "handoff-exporter"]],
  ["property", "Property", ["property-parser", "maintenance-planner", "finance-estimator", "reporting-builder"]],
  ["construction", "Construction", ["construction-parser", "construction-estimator", "inventory-builder", "schedule-planner"]],
  ["procurement", "Procurement", ["procurement-parser", "pricing-scorer", "finance-checker", "handoff-packager"]],
  ["events", "Event", ["events-parser", "schedule-planner", "logistics-router", "communication-exporter"]],
  ["travel", "Travel", ["travel-parser", "schedule-planner", "pricing-scorer", "handoff-exporter"]],
  ["retail", "Retail", ["retail-parser", "inventory-monitor", "customer-builder", "reporting-exporter"]],
  ["ecommerce", "Ecommerce", ["ecommerce-parser", "product-builder", "pricing-estimator", "customer-router"]],
  ["security", "Security", ["security-parser", "security-validator", "compliance-checker", "reporting-builder"]],
  ["health", "Health", ["health-parser", "schedule-planner", "compliance-checker", "handoff-packager"]],
  ["education", "Education", ["education-parser", "training-builder", "documents-formatter", "reporting-exporter"]],
  ["food", "Food Service", ["food-parser", "inventory-monitor", "schedule-planner", "finance-calculator"]],
  ["creator", "Creator", ["creator-planner", "media-builder", "marketing-exporter", "analytics-monitor"]],
  ["legal", "Legal Admin", ["legal-parser", "documents-summarizer", "compliance-validator", "handoff-exporter"]],
  ["logistics", "Logistics", ["logistics-parser", "schedule-router", "inventory-monitor", "reporting-builder"]]
]);

const APP_OUTCOMES = Object.freeze([
  ["intake", "Intake Desk", "turn loose requests and uploads into fields, task cards, and a direct answer path"],
  ["planner", "Planner", "turn the request into ordered work, milestones, decisions, and follow-up questions"],
  ["builder", "Builder", "produce the requested file, text, table, plan, or operating packet"],
  ["review", "Review Desk", "audit generated output and repair gaps before handoff"],
  ["dashboard", "Dashboard", "show status, priorities, files, and next actions in a focused workspace"],
  ["export", "Export Studio", "package final content for saving, printing, sharing, and reuse"],
  ["monitor", "Monitor", "track repeating work and show what changed since the last run"],
  ["triage", "Triage Board", "separate urgent, blocked, unclear, and ready-to-complete work"],
  ["scorecard", "Scorecard", "rank options and explain the best next choice"],
  ["archive", "Archive", "store reusable outputs, source notes, and retrieval labels"],
  ["dispatch", "Dispatch Desk", "turn schedules, routes, and assignments into a ready queue"],
  ["compliance", "Compliance Desk", "flag approval, policy, privacy, and evidence requirements"]
]);

const TYPE_CONFIG = Object.freeze({
  "mini-app": { panelCount: 8, chainLength: 4, category: "Target 5M Mini Apps", outputLabel: "focused mini-app" },
  app: { panelCount: 16, chainLength: 5, category: "Target 5M Apps", outputLabel: "multi-step app" },
  "full-app": { panelCount: 32, chainLength: 6, category: "Target 5M Full Apps", outputLabel: "full app workspace" },
  "mini-program": { panelCount: 12, chainLength: 4, category: "Target 5M Mini Programs", outputLabel: "repeatable mini-program" },
  program: { panelCount: 24, chainLength: 5, category: "Target 5M Programs", outputLabel: "repeatable program" },
  "full-program": { panelCount: 48, chainLength: 6, category: "Target 5M Full Programs", outputLabel: "full program system" },
  "production-pack": { panelCount: 64, chainLength: 6, category: "Target 5M Production Packs", outputLabel: "production activation pack" }
});

const BASE_TOOL_CHAIN = Object.freeze([
  "functional-project-plan-builder",
  "functional-checklist-builder",
  "functional-report-generator",
  "functional-email-draft-generator",
  "functional-markdown-export-builder",
  "functional-workflow-recorder"
]);

const slug = (value) => String(value || "")
  .toLowerCase()
  .replace(/&/g, " and ")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 120);

const titleCase = (value) => String(value || "")
  .replace(/[-_]+/g, " ")
  .replace(/\s+/g, " ")
  .trim()
  .replace(/\b[a-z]/g, (match) => match.toUpperCase());

const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
const padded = (value) => String(value).padStart(7, "0");
const batchId = (index, batchSize = TARGET_5M_BATCH_SIZE) => `target5m-batch-${String(Math.floor(index / batchSize) + 1).padStart(4, "0")}`;

function normalizeIndex(index, count, label) {
  const parsed = Number(index);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed >= count) throw new RangeError(`${label} index out of range: ${index}`);
  return parsed;
}

function domainForIndex(index) {
  return MINI_APP_DOMAINS[index % MINI_APP_DOMAINS.length];
}

function soloPatternForIndex(index) {
  return TARGET_500K_SOLO_JOB_PATTERNS[index % TARGET_500K_SOLO_JOB_PATTERNS.length];
}

function soloLaneForIndex(index) {
  return Math.floor(index / (MINI_APP_DOMAINS.length * TARGET_500K_SOLO_JOB_PATTERNS.length)) + 1;
}

function soloIdForIndex(index) {
  const domain = domainForIndex(index);
  const pattern = soloPatternForIndex(index);
  return `target5m-tool-${padded(index + 1)}-${slug(domain)}-${pattern.id}`;
}

function skeletonIdForIndex(index) {
  const domain = domainForIndex(index);
  const pattern = soloPatternForIndex(index);
  return `target5m-skeleton-${padded(index + 1)}-${slug(domain)}-${pattern.id}`;
}

function appTypeForIndex(index) {
  for (const row of TARGET_5M_TYPE_STARTS) {
    if (index >= row.start && index < row.end) return { ...row, localIndex: index - row.start };
  }
  throw new RangeError(`target5m app index out of range: ${index}`);
}

function appFamilyForIndex(index) {
  return APP_FAMILIES[index % APP_FAMILIES.length];
}

function appOutcomeForIndex(index) {
  return APP_OUTCOMES[Math.floor(index / APP_FAMILIES.length) % APP_OUTCOMES.length];
}

function appIdForIndex(index) {
  const { type, localIndex } = appTypeForIndex(index);
  const domain = domainForIndex(index);
  const [familyId] = appFamilyForIndex(localIndex);
  const [outcomeId] = appOutcomeForIndex(localIndex);
  return `target5m-app-${padded(index + 1)}-${type}-${slug(domain)}-${familyId}-${outcomeId}`;
}

function pickSoloPatternIds(seed, desiredCount) {
  const ids = [];
  for (let index = 0; ids.length < desiredCount && index < TARGET_500K_SOLO_JOB_PATTERNS.length; index += 1) {
    const pattern = TARGET_500K_SOLO_JOB_PATTERNS[(seed + index * 37) % TARGET_500K_SOLO_JOB_PATTERNS.length];
    ids.push(pattern.id);
  }
  return unique(ids).slice(0, desiredCount);
}

function pickSoloIndexesForApp(appIndex, count) {
  const indexes = [];
  for (let offset = 0; indexes.length < count; offset += 1) {
    indexes.push((appIndex * 19 + offset * 7919 + 313) % TARGET_5M_SOLO_TOOL_COUNT);
  }
  return unique(indexes.map(String)).map(Number).slice(0, count);
}

function currentToolsForApp(appIndex, chainLength) {
  return unique([
    ...pickSoloIndexesForApp(appIndex, Math.max(4, chainLength)).map(soloIdForIndex),
    ...BASE_TOOL_CHAIN
  ]).slice(0, 18);
}

export function getTarget5mSoloTool(index) {
  const safeIndex = normalizeIndex(index, TARGET_5M_SOLO_TOOL_COUNT, "target5m solo");
  const domain = domainForIndex(safeIndex);
  const domainSlug = slug(domain);
  const pattern = soloPatternForIndex(safeIndex);
  const lane = soloLaneForIndex(safeIndex);
  return {
    id: soloIdForIndex(safeIndex),
    name: `Target 5M ${domain} ${pattern.name} ${padded(safeIndex + 1)}`,
    category: "Target 5M Solo Job Tools",
    engine: "inhouse_support_tool",
    systemLabel: TARGET_5M_SOLO_LABEL,
    toolKind: "solo-job-tool",
    inHouse: true,
    target5mGenerated: true,
    description: `Duplicate-safe in-house ${pattern.name.toLowerCase()} for ${domain.toLowerCase()}, lane ${lane}. It can ${pattern.capability} with upload-ready inputs and no outside tool site.`,
    tags: unique([
      "target 5m",
      "solo job tool",
      "in-house",
      "no outside tool site",
      "upload-ready",
      "workflow-ready",
      "batch generated",
      "duplicate-safe",
      domain,
      domainSlug,
      `lane-${lane}`,
      pattern.id,
      pattern.areaId,
      pattern.actionId,
      ...pattern.keywords
    ]),
    searchPhrases: unique([
      `${domain} ${pattern.name}`,
      `${domain} ${pattern.capability}`,
      `${pattern.name} for ${domain}`,
      `build ${domain} ${pattern.areaId} ${pattern.actionId}`,
      `target 5m ${domain} ${pattern.actionId}`
    ]),
    compatibility: {
      accepts: pattern.accepts,
      produces: pattern.produces,
      requiredTools: [],
      parallelSafe: !["checker", "validator", "monitor"].includes(pattern.actionId),
      approvalSensitive: ["finance", "compliance", "customer", "legal", "health", "security"].includes(pattern.areaId),
      publishesToLibraries: ["target-5m", `${domainSlug}-solo-tools`]
    },
    config: {
      kind: pattern.areaId,
      priority: safeIndex < 400000 ? "P1" : safeIndex < 1000000 ? "P2" : "P3",
      capability: `${domain}: ${pattern.capability}`,
      mode: `${pattern.areaId}_${pattern.actionId}`,
      accepts: pattern.accepts,
      produces: pattern.produces,
      domain,
      patternId: pattern.id,
      areaId: pattern.areaId,
      actionId: pattern.actionId,
      target5mLane: lane,
      target5mSequence: safeIndex + 1,
      target5mBatchId: batchId(safeIndex)
    }
  };
}

export function getTarget5mSkeletonTool(index) {
  const safeIndex = normalizeIndex(index, TARGET_5M_SKELETON_TOOL_COUNT, "target5m skeleton");
  const base = getTarget5mSoloTool(safeIndex);
  const pattern = soloPatternForIndex(safeIndex);
  return {
    id: skeletonIdForIndex(safeIndex),
    name: `Skeleton: Target 5M ${pattern.name} ${padded(safeIndex + 1)}`,
    category: "Target 5M Skeleton Tools",
    engine: "skeleton_tool",
    systemLabel: TARGET_5M_SKELETON_LABEL,
    toolKind: "skeleton",
    skeletonBaseToolId: base.id,
    skeletonPatternId: "support-capability",
    target5mGenerated: true,
    description: `Reusable skeleton mirror for ${base.name}. It exposes the generic in-house support capability pattern for broad project reuse.`,
    tags: unique([
      "target 5m",
      "skeleton",
      "generic skeleton",
      "reusable tool skeleton",
      "project skeleton",
      "workflow node",
      "duplicate-safe",
      pattern.id,
      pattern.areaId,
      pattern.actionId,
      ...(base.tags || []).slice(0, 18)
    ]),
    config: {
      baseToolId: base.id,
      baseToolName: base.name,
      baseEngine: base.engine,
      baseCategory: base.category,
      patternId: "support-capability",
      patternLabel: "Generic In-House Support Capability Skeleton",
      accepts: pattern.accepts,
      produces: pattern.produces,
      keywords: unique(["support", "parser", "adapter", "workbench", "in-house", pattern.areaId, pattern.actionId]),
      target5mSequence: TARGET_5M_SOLO_TOOL_COUNT + safeIndex + 1,
      target5mBatchId: batchId(TARGET_5M_SOLO_TOOL_COUNT + safeIndex)
    }
  };
}

export function getTarget5mAppProgram(index) {
  const safeIndex = normalizeIndex(index, TARGET_5M_APP_PROGRAM_COUNT, "target5m app");
  const { type, localIndex } = appTypeForIndex(safeIndex);
  const config = TYPE_CONFIG[type];
  const domain = domainForIndex(safeIndex);
  const domainSlug = slug(domain);
  const [familyId, familyName, familyTools] = appFamilyForIndex(localIndex);
  const [outcomeId, outcomeName, outcomeDescription] = appOutcomeForIndex(localIndex);
  const generatedOperations = pickSoloPatternIds(safeIndex + localIndex, config.chainLength);
  const operations = unique([...familyTools, ...generatedOperations]).slice(0, config.chainLength);
  const currentTools = currentToolsForApp(safeIndex, config.chainLength);
  const operationNames = operations.map((id) => titleCase(id));

  return {
    id: appIdForIndex(safeIndex),
    name: `Target 5M ${domain} ${familyName} ${outcomeName} ${padded(safeIndex + 1)}`,
    category: config.category,
    engine: "potential_app",
    systemLabel: TARGET_5M_APP_LABEL,
    toolKind: type,
    inHouse: true,
    target5mGenerated: true,
    description: `Duplicate-safe in-house ${config.outputLabel} for ${domain.toLowerCase()} that can ${outcomeDescription} using ${operationNames.join(", ")} with upload-ready inputs and no embedded outside tool site.`,
    tags: unique([
      "target 5m",
      "in-house app",
      "no outside tool site",
      "upload-ready",
      "waterfall-ready",
      "batch generated",
      "duplicate-safe",
      type,
      domain,
      domainSlug,
      familyId,
      outcomeId,
      ...operations,
      ...operationNames,
      ...currentTools
    ]),
    searchPhrases: unique([
      `${domain} ${familyName} ${outcomeName}`,
      `${domain} ${type}`,
      `${familyName} ${outcomeName} for ${domain}`,
      `build ${domain} ${familyId} ${outcomeId}`,
      `target 5m ${domain} upload-ready ${type}`
    ]),
    compatibility: {
      accepts: ["prompt", "notes", "files", "rows", "settings", "uploaded-file-summary"],
      produces: [`${type}-output`, "workflow", "handoff-pack", "answer-ui-content"],
      requiredTools: currentTools,
      parallelSafe: true,
      approvalSensitive: /finance|compliance|customer|pricing|legal|health|security/.test(operations.join(" ")),
      publishesToLibraries: ["target-5m", `${domainSlug}-apps`]
    },
    config: {
      appType: type,
      domain,
      source: "target-5m-expansion",
      readiness: "ready-now",
      category: config.category,
      panelCount: config.panelCount,
      operations,
      operationNames,
      currentTools,
      skeletonPatterns: unique(operations.map((id) => id.split("-")[0])),
      neededToolIds: [],
      neededTools: [],
      synergyChain: operationNames.join(" -> "),
      noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site",
      productionOutputs: [
        `${type} intake`,
        "clarifying-field checklist",
        "runnable workflow plan",
        "generated answer or file plan",
        "save-print-share handoff package"
      ],
      target5mTypeSequence: localIndex + 1,
      target5mSequence: TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT + safeIndex + 1,
      target5mBatchId: batchId(TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT + safeIndex)
    }
  };
}

export function getTarget5mRecordByGlobalIndex(index) {
  const safeIndex = normalizeIndex(index, TARGET_5M_ADDITIONAL_RUNTIME_RECORDS, "target5m runtime");
  if (safeIndex < TARGET_5M_SOLO_TOOL_COUNT) return getTarget5mSoloTool(safeIndex);
  if (safeIndex < TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT) {
    return getTarget5mSkeletonTool(safeIndex - TARGET_5M_SOLO_TOOL_COUNT);
  }
  return getTarget5mAppProgram(safeIndex - TARGET_5M_SOLO_TOOL_COUNT - TARGET_5M_SKELETON_TOOL_COUNT);
}

export function resolveTarget5mRecordById(id) {
  const text = String(id || "");
  let match = text.match(/^target5m-tool-(\d{7})-/);
  if (match) {
    const tool = getTarget5mSoloTool(Number(match[1]) - 1);
    return tool.id === text ? tool : null;
  }
  match = text.match(/^target5m-skeleton-(\d{7})-/);
  if (match) {
    const tool = getTarget5mSkeletonTool(Number(match[1]) - 1);
    return tool.id === text ? tool : null;
  }
  match = text.match(/^target5m-app-(\d{7})-/);
  if (match) {
    const tool = getTarget5mAppProgram(Number(match[1]) - 1);
    return tool.id === text ? tool : null;
  }
  return null;
}

export function* iterateTarget5mRecords({ offset = 0, limit = TARGET_5M_ADDITIONAL_RUNTIME_RECORDS } = {}) {
  const start = Math.max(0, Number(offset) || 0);
  const end = Math.min(TARGET_5M_ADDITIONAL_RUNTIME_RECORDS, start + Math.max(0, Number(limit) || 0));
  for (let index = start; index < end; index += 1) yield getTarget5mRecordByGlobalIndex(index);
}

export const TARGET_5M_CATEGORY_COUNTS = Object.freeze({
  "Target 5M Solo Job Tools": TARGET_5M_SOLO_TOOL_COUNT,
  "Target 5M Skeleton Tools": TARGET_5M_SKELETON_TOOL_COUNT,
  ...Object.fromEntries(TARGET_5M_TYPE_ORDER.map((type) => [TYPE_CONFIG[type].category, TARGET_5M_TYPE_TARGETS[type]]))
});

function countForCategory(category = "All") {
  if (category === "All") return TARGET_5M_ADDITIONAL_RUNTIME_RECORDS;
  return TARGET_5M_CATEGORY_COUNTS[category] || 0;
}

function indexForCategory(category, seed, step) {
  const count = countForCategory(category);
  if (!count) return null;
  const local = Math.abs(seed + step * 104729) % count;
  if (category === "All") return local;
  if (category === "Target 5M Solo Job Tools") return local;
  if (category === "Target 5M Skeleton Tools") return TARGET_5M_SOLO_TOOL_COUNT + local;
  const type = TARGET_5M_TYPE_ORDER.find((candidate) => TYPE_CONFIG[candidate].category === category);
  if (!type) return null;
  const row = TARGET_5M_TYPE_STARTS.find((item) => item.type === type);
  return TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT + row.start + local;
}

function hashQuery(query) {
  const text = String(query || "target 5m");
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function scoreVirtualTool(tool, query) {
  if (!query) return 1;
  const q = String(query).toLowerCase();
  const haystack = `${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`.toLowerCase();
  let score = 0;
  if (haystack.includes(q)) score += 20;
  for (const token of q.split(/[^a-z0-9]+/).filter(Boolean)) if (haystack.includes(token)) score += token.length > 4 ? 4 : 1;
  return score || 1;
}

export function searchTarget5mExpansion(query = "", { limit = 24, category = "All" } = {}) {
  const wanted = Math.max(0, Number(limit) || 24);
  const totalMatches = countForCategory(category);
  if (!wanted || !totalMatches) return { totalMatches: 0, results: [] };
  const seed = hashQuery(`${category}:${query}`);
  const seen = new Set();
  const results = [];

  for (let step = 0; results.length < wanted && step < wanted * 8 + 32; step += 1) {
    const index = indexForCategory(category, seed, step);
    if (index === null || seen.has(index)) continue;
    seen.add(index);
    const tool = getTarget5mRecordByGlobalIndex(index);
    results.push({ tool, score: scoreVirtualTool(tool, query), virtual: true });
  }

  return {
    totalMatches,
    results: results.sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
  };
}

export function buildTarget5mBatches({ batchSize = TARGET_5M_BATCH_SIZE } = {}) {
  const size = Math.max(1, Number(batchSize) || TARGET_5M_BATCH_SIZE);
  const batches = [];
  for (let start = 0; start < TARGET_5M_ADDITIONAL_RUNTIME_RECORDS; start += size) {
    const end = Math.min(TARGET_5M_ADDITIONAL_RUNTIME_RECORDS, start + size);
    const byKind = {};
    for (let index = start; index < end; index += 1) {
      let kind = "solo-job-tool";
      if (index >= TARGET_5M_SOLO_TOOL_COUNT && index < TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT) kind = "skeleton";
      if (index >= TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT) {
        kind = appTypeForIndex(index - TARGET_5M_SOLO_TOOL_COUNT - TARGET_5M_SKELETON_TOOL_COUNT).type;
      }
      byKind[kind] = (byKind[kind] || 0) + 1;
    }
    batches.push({
      id: batchId(start, size),
      sequence: batches.length + 1,
      start: start + 1,
      end,
      count: end - start,
      byKind,
      sampleIds: [
        getTarget5mRecordByGlobalIndex(start).id,
        getTarget5mRecordByGlobalIndex(Math.min(end - 1, start + Math.floor((end - start) / 2))).id,
        getTarget5mRecordByGlobalIndex(end - 1).id
      ]
    });
  }
  return batches;
}

export function buildTarget5mSummary() {
  const addedByKind = {
    "solo-job-tool": TARGET_5M_SOLO_TOOL_COUNT,
    skeleton: TARGET_5M_SKELETON_TOOL_COUNT,
    ...TARGET_5M_TYPE_TARGETS
  };
  const projectedFinalTotals = {
    runtimeRecords: TARGET_5M_FINAL_RUNTIME_RECORDS,
    "direct-in-house-tools": TARGET_5M_BASELINE_TOTALS["direct-in-house-tools"] + TARGET_5M_SOLO_TOOL_COUNT,
    "skeleton-tools": TARGET_5M_BASELINE_TOTALS["skeleton-tools"] + TARGET_5M_SKELETON_TOOL_COUNT,
    "mini-apps": TARGET_5M_BASELINE_TOTALS["mini-apps"] + TARGET_5M_TYPE_TARGETS["mini-app"],
    apps: TARGET_5M_BASELINE_TOTALS.apps + TARGET_5M_TYPE_TARGETS.app,
    "full-apps": TARGET_5M_BASELINE_TOTALS["full-apps"] + TARGET_5M_TYPE_TARGETS["full-app"],
    "mini-programs-and-programs": TARGET_5M_BASELINE_TOTALS["mini-programs-and-programs"] + TARGET_5M_TYPE_TARGETS["mini-program"] + TARGET_5M_TYPE_TARGETS.program,
    "full-programs-and-production-packs": TARGET_5M_BASELINE_TOTALS["full-programs-and-production-packs"] + TARGET_5M_TYPE_TARGETS["full-program"] + TARGET_5M_TYPE_TARGETS["production-pack"]
  };
  return {
    version: TARGET_5M_VERSION,
    baselineRuntimeRecords: TARGET_5M_BASELINE_RUNTIME_RECORDS,
    finalRuntimeRecords: TARGET_5M_FINAL_RUNTIME_RECORDS,
    additionalRuntimeRecords: TARGET_5M_ADDITIONAL_RUNTIME_RECORDS,
    batchSize: TARGET_5M_BATCH_SIZE,
    batchCount: Math.ceil(TARGET_5M_ADDITIONAL_RUNTIME_RECORDS / TARGET_5M_BATCH_SIZE),
    domainCount: MINI_APP_DOMAINS.length,
    soloJobPatternCount: TARGET_500K_SOLO_JOB_PATTERNS.length,
    addedByKind,
    categoryCounts: TARGET_5M_CATEGORY_COUNTS,
    typeTargets: TARGET_5M_TYPE_TARGETS,
    baseline: TARGET_5M_BASELINE_TOTALS,
    projectedFinalTotals,
    duplicatePolicy: "Every target-5m id includes a disjoint namespace plus a zero-padded sequence index; solo, skeleton, and app namespaces cannot collide with previous target500k records.",
    summary: `${TARGET_5M_ADDITIONAL_RUNTIME_RECORDS.toLocaleString()} additional duplicate-safe records bring the website projection to ${TARGET_5M_FINAL_RUNTIME_RECORDS.toLocaleString()} total runtime records.`
  };
}

export function verifyTarget5mSuite({ knownEngines = [] } = {}) {
  const errors = [];
  const summary = buildTarget5mSummary();
  const engineSet = new Set(knownEngines);
  const expectedAdditional = TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT + TARGET_5M_APP_PROGRAM_COUNT;

  if (expectedAdditional !== TARGET_5M_ADDITIONAL_RUNTIME_RECORDS) errors.push(`expected ${TARGET_5M_ADDITIONAL_RUNTIME_RECORDS} added records, got ${expectedAdditional}`);
  if (summary.projectedFinalTotals.runtimeRecords !== TARGET_5M_FINAL_RUNTIME_RECORDS) errors.push(`projected final runtime should be ${TARGET_5M_FINAL_RUNTIME_RECORDS}`);
  if (Object.values(TARGET_5M_TYPE_TARGETS).reduce((sum, count) => sum + count, 0) !== TARGET_5M_APP_PROGRAM_COUNT) errors.push("target 5m app/program type targets do not sum correctly");

  const sampleIndexes = unique([
    0,
    1,
    TARGET_5M_SOLO_TOOL_COUNT - 1,
    TARGET_5M_SOLO_TOOL_COUNT,
    TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT - 1,
    TARGET_5M_SOLO_TOOL_COUNT + TARGET_5M_SKELETON_TOOL_COUNT,
    TARGET_5M_ADDITIONAL_RUNTIME_RECORDS - 2,
    TARGET_5M_ADDITIONAL_RUNTIME_RECORDS - 1,
    ...Array.from({ length: 200 }, (_, index) => (index * 7919 + 313) % TARGET_5M_ADDITIONAL_RUNTIME_RECORDS)
  ].map(String)).map(Number);
  const ids = new Set();
  const names = new Set();

  for (const index of sampleIndexes) {
    const record = getTarget5mRecordByGlobalIndex(index);
    if (ids.has(record.id)) errors.push(`sample duplicate id ${record.id}`);
    ids.add(record.id);
    if (names.has(record.name)) errors.push(`sample duplicate name ${record.name}`);
    names.add(record.name);
    if (!/^target5m-(tool|skeleton|app)-/.test(record.id)) errors.push(`${record.id} is outside the target5m namespace`);
    if (engineSet.size && !engineSet.has(record.engine)) errors.push(`${record.id} uses unknown engine ${record.engine}`);
    if ((record.tags || []).length < 12) errors.push(`${record.id} needs dense tags`);
    if (!record.config?.target5mBatchId) errors.push(`${record.id} missing target5m batch id`);
    const resolved = resolveTarget5mRecordById(record.id);
    if (!resolved || resolved.id !== record.id) errors.push(`${record.id} does not round-trip through resolver`);
  }

  return { ok: errors.length === 0, errors, stats: summary };
}
