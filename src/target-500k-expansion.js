import { MINI_APP_DOMAINS } from "./mini-apps.js";

export const TARGET_500K_VERSION = "2026-06-15-target-500k-production-v1";
export const TARGET_500K_BATCH_SIZE = 2500;
export const TARGET_500K_SOLO_TOOL_TARGET_COUNT = 79940;
export const TARGET_500K_APP_PROGRAM_TARGET_COUNT = 155354;
export const TARGET_500K_RUNTIME_CONTRIBUTION = TARGET_500K_SOLO_TOOL_TARGET_COUNT * 2 + TARGET_500K_APP_PROGRAM_TARGET_COUNT;
export const TARGET_500K_SOLO_LABEL = "Target 500K In-House Solo Tool";
export const TARGET_500K_APP_LABEL = "Target 500K App Program";

const TARGET_500K_TYPE_TARGETS = Object.freeze({
  "mini-app": 58263,
  app: 33487,
  "full-app": 17585,
  "mini-program": 11975,
  program: 11974,
  "full-program": 11035,
  "production-pack": 11035
});

const TARGET_500K_FINAL_GOALS = Object.freeze({
  "direct-in-house-tools": 150000,
  "skeleton-tools": 150000,
  "mini-apps": 75000,
  apps: 35000,
  "full-apps": 25000,
  "mini-programs-and-programs": 35000,
  "full-programs-and-production-packs": 30000
});

const CURRENT_CATEGORY_BASELINE = Object.freeze({
  "direct-in-house-tools": 70060,
  "skeleton-tools": 72560,
  "mini-apps": 16192,
  apps: 1200,
  "full-apps": 7250,
  "mini-programs-and-programs": 10827,
  "full-programs-and-production-packs": 7723,
  runtimeRecords: 184766
});

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
const targetBatchId = (index, batchSize = TARGET_500K_BATCH_SIZE) => `target500k-batch-${String(Math.floor(index / batchSize) + 1).padStart(4, "0")}`;

const TARGET_AREAS = Object.freeze([
  ["intake", "Intake", "capture user requests, uploaded files, missing facts, and answer goals"],
  ["documents", "Document", "read, organize, summarize, and package document work"],
  ["data", "Data", "clean, validate, map, and transform rows, tables, and pasted data"],
  ["finance", "Finance", "track budgets, costs, bills, invoices, cash flow, and savings"],
  ["schedule", "Schedule", "plan dates, deadlines, reminders, routes, and recurring work"],
  ["communication", "Communication", "draft replies, scripts, summaries, and share messages"],
  ["research", "Research", "compare options, gather evidence, and prepare source notes"],
  ["inventory", "Inventory", "track stock, labels, reorder needs, and item records"],
  ["media", "Media", "prepare image, audio, video, and asset production notes"],
  ["design", "Design", "shape creative briefs, layouts, styles, and visual variants"],
  ["compliance", "Compliance", "flag policy, privacy, approval, and audit issues"],
  ["customer", "Customer", "organize customers, follow-ups, support notes, and CRM actions"],
  ["operations", "Operations", "turn work notes into process steps, queues, and checklists"],
  ["pricing", "Pricing", "compare prices, offers, margins, discounts, and buying decisions"],
  ["reporting", "Reporting", "package findings into tables, reports, dashboards, and exports"],
  ["handoff", "Handoff", "prepare final files, next actions, and reusable workflow packs"],
  ["sales", "Sales", "prepare leads, quotes, outreach plans, and close steps"],
  ["marketing", "Marketing", "shape campaigns, posts, ads, funnels, and audience briefs"],
  ["support", "Support", "triage issues, replies, escalation notes, and help-center content"],
  ["hr", "HR", "prepare hiring, onboarding, schedules, reviews, and staff records"],
  ["training", "Training", "turn source material into lessons, drills, guides, and quizzes"],
  ["legal", "Legal Admin", "organize clauses, intake notes, compliance checks, and case packets"],
  ["property", "Property", "manage rooms, assets, tenants, inspections, and service plans"],
  ["construction", "Construction", "estimate jobs, materials, rooms, schedules, and punch lists"],
  ["logistics", "Logistics", "plan shipments, routes, pickups, vendors, and delivery handoffs"],
  ["health", "Health Admin", "organize wellness notes, appointments, logs, and care tasks"],
  ["education", "Education", "create study plans, rubrics, lesson notes, and classroom packets"],
  ["food", "Food Service", "scale recipes, menus, inventory, prep lists, and ordering"],
  ["retail", "Retail", "track shelf items, promotions, local offers, and customer requests"],
  ["ecommerce", "Ecommerce", "prepare listings, order notes, returns, bundles, and product pages"],
  ["creator", "Creator", "plan scripts, posts, thumbnails, launch queues, and content calendars"],
  ["security", "Security", "review access, incidents, risk notes, and protective workflows"],
  ["analytics", "Analytics", "summarize signals, scores, trends, anomalies, and KPI work"],
  ["product", "Product", "turn ideas into requirements, feedback loops, roadmaps, and launches"],
  ["maintenance", "Maintenance", "track repairs, inspections, schedules, parts, and service records"],
  ["procurement", "Procurement", "compare vendors, purchase needs, quotes, and approval packets"],
  ["grants", "Grant", "prepare funding narratives, budgets, evidence, and submission tasks"],
  ["events", "Event", "plan venues, schedules, staffing, tickets, vendors, and run-of-show"],
  ["travel", "Travel", "compare stays, trips, packing, routes, schedules, and travel notes"],
  ["community", "Community", "organize members, announcements, moderation, programs, and feedback"]
]);

const TARGET_ACTIONS = Object.freeze([
  ["parser", "Parser", "parse and structure", ["prompt", "notes", "files"], ["structured-summary", "field-map"]],
  ["builder", "Builder", "build a usable output", ["prompt", "notes", "rows"], ["draft-output", "checklist"]],
  ["checker", "Checker", "check gaps, risks, and missing details", ["draft-output", "criteria", "rows"], ["issue-list", "repair-plan"]],
  ["exporter", "Exporter", "package and export", ["artifact", "notes", "settings"], ["handoff-pack", "export-plan"]],
  ["formatter", "Formatter", "format content for reuse", ["text", "rows", "template"], ["formatted-output", "copy-ready-text"]],
  ["planner", "Planner", "plan work into steps", ["goal", "constraints", "deadline"], ["task-plan", "milestone-list"]],
  ["scorer", "Scorer", "rank choices against criteria", ["options", "criteria", "notes"], ["scorecard", "recommendation"]],
  ["normalizer", "Normalizer", "standardize inconsistent input", ["text", "rows", "files"], ["normalized-data", "clean-fields"]],
  ["mapper", "Mapper", "map inputs to target fields", ["source-fields", "target-format", "notes"], ["field-map", "conversion-plan"]],
  ["summarizer", "Summarizer", "summarize source material", ["text", "files", "notes"], ["summary", "key-points"]],
  ["validator", "Validator", "validate output readiness", ["artifact", "rules", "criteria"], ["validation-report", "fix-list"]],
  ["router", "Router", "route work to the right next tool", ["request", "context", "files"], ["routing-plan", "tool-list"]],
  ["packager", "Packager", "bundle outputs for delivery", ["outputs", "files", "settings"], ["delivery-pack", "manifest"]],
  ["estimator", "Estimator", "estimate time, cost, quantity, or effort", ["scope", "rows", "constraints"], ["estimate", "assumptions"]],
  ["monitor", "Monitor", "watch status and surface next actions", ["status", "metrics", "events"], ["status-report", "next-action-list"]],
  ["calculator", "Calculator", "calculate totals, rates, quantities, and differences", ["numbers", "rows", "formula"], ["calculation", "explanation"]],
  ["splitter", "Splitter", "split work into chunks", ["source", "rules", "limits"], ["work-chunks", "batch-plan"]],
  ["merger", "Merger", "merge related outputs", ["outputs", "rules", "priority"], ["merged-output", "change-log"]],
  ["prioritizer", "Prioritizer", "sort work by urgency and value", ["tasks", "criteria", "deadlines"], ["priority-list", "action-order"]],
  ["archiver", "Archiver", "store reusable history and references", ["artifact", "metadata", "notes"], ["archive-record", "retrieval-tags"]]
]);

export const TARGET_500K_SOLO_JOB_PATTERNS = Object.freeze(TARGET_AREAS.flatMap(([areaId, areaName, capability]) =>
  TARGET_ACTIONS.map(([actionId, actionName, verb, accepts, produces]) => ({
    id: `${areaId}-${actionId}`,
    areaId,
    actionId,
    name: `${areaName} ${actionName}`,
    capability: `${verb} ${capability}`,
    accepts,
    produces,
    keywords: [areaId, actionId, areaName, actionName, ...accepts, ...produces]
  }))
));

const BASE_TOOL_CHAIN = Object.freeze([
  "functional-project-plan-builder",
  "functional-checklist-builder",
  "functional-report-generator",
  "functional-email-draft-generator",
  "functional-markdown-export-builder",
  "functional-workflow-recorder"
]);

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
  ["security", "Security", ["security-parser", "security-validator", "compliance-checker", "reporting-builder"]]
]);

const APP_OUTCOMES = Object.freeze([
  ["intake", "Intake Desk", "turn a loose request and uploads into fields, task cards, and a direct answer path"],
  ["planner", "Planner", "turn the request into ordered work, milestones, decisions, and follow-up questions"],
  ["builder", "Builder", "produce the requested file, text, table, plan, or operating packet"],
  ["review", "Review Desk", "audit the generated output and repair gaps before handoff"],
  ["dashboard", "Dashboard", "show status, priorities, files, and next actions in a focused workspace"],
  ["export", "Export Studio", "package the final content for saving, printing, sharing, and reuse"],
  ["monitor", "Monitor", "track repeating work and show what changed since the last run"],
  ["triage", "Triage Board", "separate urgent, blocked, unclear, and ready-to-complete work"],
  ["scorecard", "Scorecard", "rank options and explain the best next choice"],
  ["archive", "Archive", "store reusable outputs, source notes, and retrieval labels"]
]);

const TYPE_CONFIG = Object.freeze({
  "mini-app": { panelCount: 8, chainLength: 4, category: "Target 500K Mini Apps", outputLabel: "focused mini-app" },
  app: { panelCount: 16, chainLength: 5, category: "Target 500K Apps", outputLabel: "multi-step app" },
  "full-app": { panelCount: 32, chainLength: 6, category: "Target 500K Full Apps", outputLabel: "full app workspace" },
  "mini-program": { panelCount: 12, chainLength: 4, category: "Target 500K Mini Programs", outputLabel: "repeatable mini-program" },
  program: { panelCount: 24, chainLength: 5, category: "Target 500K Programs", outputLabel: "repeatable program" },
  "full-program": { panelCount: 48, chainLength: 6, category: "Target 500K Full Programs", outputLabel: "full program system" },
  "production-pack": { panelCount: 64, chainLength: 6, category: "Target 500K Production Packs", outputLabel: "production activation pack" }
});

function soloToolIdFor(domain, patternId) {
  return `target500k-tool-${slug(domain)}-${patternId}`;
}

function appRecordIdFor(type, domain, patternId, serial) {
  return `target500k-${type}-${slug(domain)}-${patternId}-${String(serial).padStart(4, "0")}`;
}

function createSoloLookup(records) {
  const byDomainPattern = new Map();
  const firstByDomain = new Map();
  let first = "";
  for (const record of records) {
    if (!first) first = record.id;
    const domain = record.config?.domain || "";
    const patternId = record.config?.patternId || "";
    if (domain && patternId) byDomainPattern.set(`${domain}::${patternId}`, record.id);
    if (domain && !firstByDomain.has(domain)) firstByDomain.set(domain, record.id);
  }
  return { byDomainPattern, firstByDomain, first };
}

function patternIdsForSeed(seed, desiredCount) {
  const ids = [];
  const actionIds = TARGET_ACTIONS.map(([id]) => id);
  for (let index = 0; ids.length < desiredCount && index < TARGET_AREAS.length * 2; index += 1) {
    const area = TARGET_AREAS[(seed + index * 7) % TARGET_AREAS.length][0];
    const action = actionIds[(seed + index * 3) % actionIds.length];
    ids.push(`${area}-${action}`);
  }
  return unique(ids).slice(0, desiredCount);
}

function buildAppPatterns(type) {
  const config = TYPE_CONFIG[type];
  const patterns = [];
  for (let familyIndex = 0; familyIndex < APP_FAMILIES.length; familyIndex += 1) {
    const [familyId, familyName, familyTools] = APP_FAMILIES[familyIndex];
    for (let outcomeIndex = 0; outcomeIndex < APP_OUTCOMES.length; outcomeIndex += 1) {
      const [outcomeId, outcomeName, outcomeDescription] = APP_OUTCOMES[outcomeIndex];
      const seed = familyIndex * APP_OUTCOMES.length + outcomeIndex + type.length;
      const generatedTools = patternIdsForSeed(seed, Math.max(config.chainLength, 4));
      const toolPatternIds = unique([...familyTools, ...generatedTools]).slice(0, config.chainLength);
      patterns.push({
        id: `${familyId}-${outcomeId}`,
        familyId,
        familyName,
        outcomeId,
        outcomeName,
        name: `${familyName} ${outcomeName}`,
        outcomeDescription,
        toolPatternIds,
        seed
      });
    }
  }
  return patterns;
}

function currentToolsFor(domain, patternToolIds, lookup) {
  const mappedTools = patternToolIds.map((patternId) =>
    lookup.byDomainPattern.get(`${domain}::${patternId}`) ||
    lookup.firstByDomain.get(domain) ||
    lookup.first
  );
  return unique([...mappedTools, ...BASE_TOOL_CHAIN]).slice(0, 18);
}

export function buildTarget500kSoloToolRecords() {
  const records = [];
  for (const domain of MINI_APP_DOMAINS) {
    for (const pattern of TARGET_500K_SOLO_JOB_PATTERNS) {
      if (records.length >= TARGET_500K_SOLO_TOOL_TARGET_COUNT) break;
      const sequence = records.length + 1;
      const domainSlug = slug(domain);
      records.push({
        id: soloToolIdFor(domain, pattern.id),
        name: `${domain} ${pattern.name}`,
        category: "Target 500K Solo Job Tools",
        engine: "inhouse_support_tool",
        systemLabel: TARGET_500K_SOLO_LABEL,
        toolKind: "solo-job-tool",
        inHouse: true,
        target500kGenerated: true,
        description: `In-house ${pattern.name.toLowerCase()} for ${domain.toLowerCase()}. It can ${pattern.capability} without routing the user to an outside tool site.`,
        tags: unique([
          "target 500k",
          "solo job tool",
          "in-house",
          "no outside tool site",
          "upload-ready",
          "workflow-ready",
          "batch generated",
          "prompt tested",
          domain,
          domainSlug,
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
          `${domain} upload ${pattern.actionId}`
        ]),
        compatibility: {
          accepts: pattern.accepts,
          produces: pattern.produces,
          requiredTools: [],
          parallelSafe: !["checker", "validator", "monitor"].includes(pattern.actionId),
          approvalSensitive: ["finance", "compliance", "customer", "legal", "health", "security"].includes(pattern.areaId),
          publishesToLibraries: ["target-500k", `${domainSlug}-solo-tools`]
        },
        config: {
          kind: pattern.areaId,
          priority: sequence <= 25000 ? "P1" : sequence <= 60000 ? "P2" : "P3",
          capability: `${domain}: ${pattern.capability}`,
          mode: `${pattern.areaId}_${pattern.actionId}`,
          accepts: pattern.accepts,
          produces: pattern.produces,
          domain,
          patternId: pattern.id,
          areaId: pattern.areaId,
          actionId: pattern.actionId,
          target500kSequence: sequence,
          target500kBatchId: targetBatchId(sequence - 1)
        }
      });
    }
  }
  return records;
}

export function buildTarget500kAppProgramRecords(soloRecords = TARGET_500K_INHOUSE_TOOL_RECORDS) {
  const lookup = createSoloLookup(soloRecords);
  const records = [];
  let globalSequence = 0;
  let offset = soloRecords.length;

  for (const [type, targetCount] of Object.entries(TARGET_500K_TYPE_TARGETS)) {
    const patterns = buildAppPatterns(type);
    const config = TYPE_CONFIG[type];
    for (let index = 0; index < targetCount; index += 1) {
      const domain = MINI_APP_DOMAINS[index % MINI_APP_DOMAINS.length];
      const domainSlug = slug(domain);
      const pattern = patterns[index % patterns.length];
      const serial = Math.floor(index / patterns.length) + 1;
      const sequence = globalSequence + 1;
      const currentTools = currentToolsFor(domain, pattern.toolPatternIds, lookup);
      const operationNames = pattern.toolPatternIds.map((id) => titleCase(id));

      records.push({
        id: appRecordIdFor(type, domain, pattern.id, serial),
        name: `${domain} ${pattern.name}`,
        category: config.category,
        engine: "potential_app",
        systemLabel: TARGET_500K_APP_LABEL,
        toolKind: type,
        inHouse: true,
        target500kGenerated: true,
        description: `In-house ${config.outputLabel} for ${domain.toLowerCase()} that can ${pattern.outcomeDescription} using ${operationNames.join(", ")} with upload-ready inputs and no embedded outside tool site.`,
        tags: unique([
          "target 500k",
          "in-house app",
          "no outside tool site",
          "upload-ready",
          "waterfall-ready",
          "batch generated",
          "prompt tested",
          type,
          domain,
          domainSlug,
          pattern.id,
          pattern.familyId,
          pattern.outcomeId,
          ...pattern.toolPatternIds,
          ...operationNames,
          ...currentTools
        ]),
        searchPhrases: unique([
          `${domain} ${pattern.name}`,
          `${domain} ${type}`,
          `${pattern.name} for ${domain}`,
          `build ${domain} ${pattern.id}`,
          `${domain} upload-ready ${type}`,
          `${domain} ${pattern.familyName} ${pattern.outcomeName}`
        ]),
        compatibility: {
          accepts: ["prompt", "notes", "files", "rows", "settings", "uploaded-file-summary"],
          produces: [`${type}-output`, "workflow", "handoff-pack", "answer-ui-content"],
          requiredTools: currentTools,
          parallelSafe: true,
          approvalSensitive: /finance|compliance|customer|pricing|legal|health|security/.test(pattern.toolPatternIds.join(" ")),
          publishesToLibraries: ["target-500k", `${domainSlug}-apps`]
        },
        config: {
          appType: type,
          domain,
          source: "target-500k-expansion",
          readiness: "ready-now",
          category: config.category,
          panelCount: config.panelCount,
          operations: pattern.toolPatternIds,
          operationNames,
          currentTools,
          skeletonPatterns: unique(pattern.toolPatternIds.map((id) => id.split("-")[0])),
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
          target500kTypeSequence: index + 1,
          target500kSequence: sequence,
          target500kBatchId: targetBatchId(offset + globalSequence)
        }
      });
      globalSequence += 1;
    }
    offset += targetCount;
  }

  return records;
}

export const TARGET_500K_INHOUSE_TOOL_RECORDS = Object.freeze(buildTarget500kSoloToolRecords());
export const TARGET_500K_APP_PROGRAM_RECORDS = Object.freeze(buildTarget500kAppProgramRecords(TARGET_500K_INHOUSE_TOOL_RECORDS));
export const TARGET_500K_RECORDS = Object.freeze([...TARGET_500K_INHOUSE_TOOL_RECORDS, ...TARGET_500K_APP_PROGRAM_RECORDS]);

function countBy(items, keyFn) {
  return items.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function finalProjection() {
  const byKind = countBy(TARGET_500K_RECORDS, (record) => record.toolKind || record.config?.appType || "tool");
  return {
    runtimeRecords: CURRENT_CATEGORY_BASELINE.runtimeRecords + TARGET_500K_RUNTIME_CONTRIBUTION,
    "direct-in-house-tools": CURRENT_CATEGORY_BASELINE["direct-in-house-tools"] + TARGET_500K_INHOUSE_TOOL_RECORDS.length,
    "skeleton-tools": CURRENT_CATEGORY_BASELINE["skeleton-tools"] + TARGET_500K_INHOUSE_TOOL_RECORDS.length,
    "mini-apps": CURRENT_CATEGORY_BASELINE["mini-apps"] + (byKind["mini-app"] || 0),
    apps: CURRENT_CATEGORY_BASELINE.apps + (byKind.app || 0),
    "full-apps": CURRENT_CATEGORY_BASELINE["full-apps"] + (byKind["full-app"] || 0),
    "mini-programs-and-programs": CURRENT_CATEGORY_BASELINE["mini-programs-and-programs"] + (byKind["mini-program"] || 0) + (byKind.program || 0),
    "full-programs-and-production-packs": CURRENT_CATEGORY_BASELINE["full-programs-and-production-packs"] + (byKind["full-program"] || 0) + (byKind["production-pack"] || 0)
  };
}

export function buildTarget500kBatches({ batchSize = TARGET_500K_BATCH_SIZE } = {}) {
  const size = Math.max(1, Number(batchSize) || TARGET_500K_BATCH_SIZE);
  const batches = [];
  for (let start = 0; start < TARGET_500K_RECORDS.length; start += size) {
    const records = TARGET_500K_RECORDS.slice(start, start + size);
    batches.push({
      id: targetBatchId(start, size),
      sequence: batches.length + 1,
      start: start + 1,
      end: start + records.length,
      count: records.length,
      byKind: countBy(records, (record) => record.toolKind || record.config?.appType || "tool"),
      sampleIds: records.slice(0, 8).map((record) => record.id)
    });
  }
  return batches;
}

export function buildTarget500kSummary() {
  const byKind = countBy(TARGET_500K_RECORDS, (record) => record.toolKind || record.config?.appType || "tool");
  const byCategory = countBy(TARGET_500K_RECORDS, (record) => record.category);
  const projection = finalProjection();
  return {
    version: TARGET_500K_VERSION,
    domainCount: MINI_APP_DOMAINS.length,
    soloJobPatternCount: TARGET_500K_SOLO_JOB_PATTERNS.length,
    batchSize: TARGET_500K_BATCH_SIZE,
    batchCount: buildTarget500kBatches().length,
    totalRecords: TARGET_500K_RECORDS.length,
    runtimeContribution: TARGET_500K_RUNTIME_CONTRIBUTION,
    byKind,
    byCategory,
    typeTargets: TARGET_500K_TYPE_TARGETS,
    baseline: CURRENT_CATEGORY_BASELINE,
    requestedFinalGoals: TARGET_500K_FINAL_GOALS,
    projectedFinalTotals: projection,
    possibleMoreByType: {
      "solo-job-tools": byKind["solo-job-tool"] || 0,
      "mini-apps": byKind["mini-app"] || 0,
      apps: byKind.app || 0,
      "full-apps": byKind["full-app"] || 0,
      "mini-programs": byKind["mini-program"] || 0,
      programs: byKind.program || 0,
      "full-programs": byKind["full-program"] || 0,
      "production-packs": byKind["production-pack"] || 0
    },
    summary: `${TARGET_500K_RECORDS.length.toLocaleString()} new in-house records add ${TARGET_500K_RUNTIME_CONTRIBUTION.toLocaleString()} runtime records, projecting the website to ${projection.runtimeRecords.toLocaleString()} total runtime records.`
  };
}

export function verifyTarget500kSuite({ knownEngines = [] } = {}) {
  const errors = [];
  const ids = new Set();
  const engineSet = new Set(knownEngines);
  const recordIds = new Set(TARGET_500K_RECORDS.map((record) => record.id));
  const expected = {
    "solo-job-tool": TARGET_500K_SOLO_TOOL_TARGET_COUNT,
    ...TARGET_500K_TYPE_TARGETS
  };
  const summary = buildTarget500kSummary();

  if (TARGET_500K_INHOUSE_TOOL_RECORDS.length !== TARGET_500K_SOLO_TOOL_TARGET_COUNT) {
    errors.push(`expected ${TARGET_500K_SOLO_TOOL_TARGET_COUNT} target solo tools, got ${TARGET_500K_INHOUSE_TOOL_RECORDS.length}`);
  }

  if (TARGET_500K_APP_PROGRAM_RECORDS.length !== TARGET_500K_APP_PROGRAM_TARGET_COUNT) {
    errors.push(`expected ${TARGET_500K_APP_PROGRAM_TARGET_COUNT} target app/program records, got ${TARGET_500K_APP_PROGRAM_RECORDS.length}`);
  }

  if (summary.runtimeContribution !== 315234) errors.push(`expected runtime contribution 315234, got ${summary.runtimeContribution}`);
  if (summary.projectedFinalTotals.runtimeRecords !== 500000) errors.push(`expected projected runtime 500000, got ${summary.projectedFinalTotals.runtimeRecords}`);
  if (summary.projectedFinalTotals["direct-in-house-tools"] !== 150000) {
    errors.push(`expected projected direct tools 150000, got ${summary.projectedFinalTotals["direct-in-house-tools"]}`);
  }

  for (const record of TARGET_500K_RECORDS) {
    if (!record.id) errors.push("target 500k record missing id");
    if (ids.has(record.id)) errors.push(`duplicate target 500k id ${record.id}`);
    ids.add(record.id);
    if (engineSet.size && !engineSet.has(record.engine)) errors.push(`${record.id} uses unknown engine ${record.engine}`);
    if ((record.tags || []).length < 12) errors.push(`${record.id} needs dense tags`);
    if (!record.config?.target500kBatchId) errors.push(`${record.id} missing target 500k batch id`);
    for (const toolId of record.config?.currentTools || []) {
      if (!recordIds.has(toolId) && !BASE_TOOL_CHAIN.includes(toolId)) errors.push(`${record.id} references missing target/current tool ${toolId}`);
    }
  }

  for (const [kind, count] of Object.entries(expected)) {
    if ((summary.byKind[kind] || 0) !== count) errors.push(`expected ${count} ${kind}, got ${summary.byKind[kind] || 0}`);
  }

  return { ok: errors.length === 0, errors, stats: summary };
}

export function searchTarget500kExpansion(query = "", { limit = 24 } = {}) {
  const tokens = String(query).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  return TARGET_500K_RECORDS
    .map((tool) => {
      const haystack = `${tool.name} ${tool.category} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`.toLowerCase();
      const score = tokens.length
        ? tokens.reduce((sum, token) => sum + (haystack.includes(token) ? token.length : 0), 0)
        : 1;
      return { tool, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}
