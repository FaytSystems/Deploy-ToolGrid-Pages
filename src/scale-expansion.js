import { MINI_APP_DOMAINS } from "./mini-apps.js";

export const SCALE_EXPANSION_VERSION = "2026-06-15-scale-expansion-batch-v1";
export const SCALE_EXPANSION_BATCH_SIZE = 500;
export const SCALE_SOLO_TOOL_LABEL = "Scale Expansion In-House Solo Tool";
export const SCALE_APP_LABEL = "Scale Expansion App Program";

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
const scaleBatchId = (index) => `scale-batch-${String(Math.floor(index / SCALE_EXPANSION_BATCH_SIZE) + 1).padStart(3, "0")}`;

const SOLO_AREAS = Object.freeze([
  ["intake", "Intake", "capture raw user details, source files, and missing fields"],
  ["documents", "Document", "summarize, index, and prepare document packets"],
  ["data", "Data", "clean, normalize, and validate rows or pasted tables"],
  ["finance", "Finance", "track budgets, costs, invoices, bills, and cash flow"],
  ["schedule", "Schedule", "organize dates, deadlines, routes, reminders, and calendars"],
  ["communication", "Communication", "draft messages, replies, scripts, and share packs"],
  ["research", "Research", "compare options, gather evidence, and prepare citations"],
  ["inventory", "Inventory", "track stock, reorder needs, labels, and item records"],
  ["media", "Media", "prepare image, audio, video, and asset production notes"],
  ["design", "Design", "shape creative briefs, style rules, layouts, and variations"],
  ["compliance", "Compliance", "flag policy, privacy, approval, and audit issues"],
  ["customer", "Customer", "organize customers, follow-ups, support notes, and CRM actions"],
  ["operations", "Operations", "turn work notes into repeatable process steps"],
  ["pricing", "Pricing", "compare prices, offers, margins, and buying decisions"],
  ["reporting", "Reporting", "package findings into tables, reports, and dashboards"],
  ["handoff", "Handoff", "prepare final files, next actions, and reusable workflow packs"]
]);

const SOLO_ACTIONS = Object.freeze([
  ["parser", "Parser", "parse and structure", ["text", "notes", "files"], ["structured-summary", "field-map"]],
  ["builder", "Builder", "build a reusable output", ["prompt", "notes", "rows"], ["draft-output", "checklist"]],
  ["checker", "Checker", "check for gaps and risks", ["draft-output", "rows", "criteria"], ["issue-list", "repair-plan"]],
  ["exporter", "Exporter", "package and export", ["artifact", "notes", "settings"], ["handoff-pack", "export-plan"]]
]);

export const SCALE_SOLO_JOB_PATTERNS = Object.freeze(SOLO_AREAS.flatMap(([areaId, areaName, capability]) =>
  SOLO_ACTIONS.map(([actionId, actionName, verb, accepts, produces]) => ({
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

function toolIdFor(domain, patternId) {
  return `scale-tool-${slug(domain)}-${patternId}`;
}

export function buildScaleSoloToolRecords() {
  return MINI_APP_DOMAINS.flatMap((domain, domainIndex) =>
    SCALE_SOLO_JOB_PATTERNS.map((pattern, patternIndex) => {
      const sequence = domainIndex * SCALE_SOLO_JOB_PATTERNS.length + patternIndex + 1;
      return {
        id: toolIdFor(domain, pattern.id),
        name: `${domain} ${pattern.name}`,
        category: "Scale Expansion Solo Tools",
        engine: "inhouse_support_tool",
        systemLabel: SCALE_SOLO_TOOL_LABEL,
        toolKind: "solo-job-tool",
        inHouse: true,
        scaleExpansionGenerated: true,
        description: `In-house ${pattern.name.toLowerCase()} for ${domain.toLowerCase()}. It can ${pattern.capability} without sending the user to an outside tool site.`,
        tags: unique([
          "scale expansion",
          "solo job tool",
          "in-house",
          "no outside tool site",
          "upload-ready",
          "workflow-ready",
          "batch generated",
          domain,
          slug(domain),
          pattern.id,
          pattern.areaId,
          pattern.actionId,
          ...pattern.keywords
        ]),
        searchPhrases: unique([
          `${domain} ${pattern.name}`,
          `${domain} ${pattern.capability}`,
          `${pattern.name} for ${domain}`,
          `build ${domain} ${pattern.areaId} ${pattern.actionId}`
        ]),
        compatibility: {
          accepts: pattern.accepts,
          produces: pattern.produces,
          requiredTools: [],
          parallelSafe: pattern.actionId !== "checker",
          approvalSensitive: ["finance", "compliance", "customer"].includes(pattern.areaId),
          publishesToLibraries: ["scale-expansion", `${slug(domain)}-library`]
        },
        config: {
          kind: pattern.areaId,
          priority: domainIndex < 25 ? "P1" : "P2",
          capability: `${domain}: ${pattern.capability}`,
          mode: `${pattern.areaId}_${pattern.actionId}`,
          accepts: pattern.accepts,
          produces: pattern.produces,
          domain,
          patternId: pattern.id,
          areaId: pattern.areaId,
          actionId: pattern.actionId,
          scaleSequence: sequence,
          scaleBatchId: scaleBatchId(sequence - 1)
        }
      };
    })
  );
}

const BASE_TOOL_CHAIN = Object.freeze([
  "functional-project-plan-builder",
  "functional-checklist-builder",
  "functional-report-generator",
  "functional-email-draft-generator",
  "functional-markdown-export-builder",
  "functional-workflow-recorder"
]);

const TYPE_PATTERNS = Object.freeze({
  "mini-app": [
    ["quick-intake-board", "Quick Intake Board", ["intake-parser", "intake-builder", "handoff-exporter"]],
    ["daily-checklist-builder", "Daily Checklist Builder", ["operations-parser", "operations-builder", "schedule-builder"]],
    ["budget-snapshot", "Budget Snapshot", ["finance-parser", "finance-builder", "reporting-exporter"]],
    ["message-pack-maker", "Message Pack Maker", ["communication-parser", "communication-builder", "handoff-exporter"]],
    ["data-cleanup-pad", "Data Cleanup Pad", ["data-parser", "data-checker", "reporting-exporter"]],
    ["research-scorecard", "Research Scorecard", ["research-parser", "research-checker", "reporting-builder"]],
    ["inventory-reorder-pad", "Inventory Reorder Pad", ["inventory-parser", "inventory-checker", "finance-builder"]],
    ["schedule-reminder-pad", "Schedule Reminder Pad", ["schedule-parser", "schedule-builder", "communication-exporter"]],
    ["customer-followup-pad", "Customer Follow-Up Pad", ["customer-parser", "customer-builder", "communication-builder"]],
    ["compliance-gap-pad", "Compliance Gap Pad", ["compliance-parser", "compliance-checker", "handoff-exporter"]],
    ["media-asset-pad", "Media Asset Pad", ["media-parser", "media-builder", "design-exporter"]],
    ["design-brief-pad", "Design Brief Pad", ["design-parser", "design-builder", "handoff-exporter"]],
    ["pricing-choice-pad", "Pricing Choice Pad", ["pricing-parser", "pricing-checker", "reporting-builder"]],
    ["report-draft-pad", "Report Draft Pad", ["reporting-parser", "reporting-builder", "handoff-exporter"]],
    ["operations-triage-pad", "Operations Triage Pad", ["operations-parser", "operations-checker", "schedule-builder"]],
    ["handoff-check-pad", "Handoff Check Pad", ["handoff-parser", "handoff-checker", "handoff-exporter"]],
    ["file-question-pad", "File Question Pad", ["documents-parser", "intake-checker", "handoff-builder"]],
    ["client-note-pad", "Client Note Pad", ["customer-parser", "communication-builder", "handoff-exporter"]],
    ["approval-ready-pad", "Approval Ready Pad", ["compliance-checker", "handoff-builder", "handoff-exporter"]],
    ["task-repair-pad", "Task Repair Pad", ["operations-checker", "intake-builder", "handoff-exporter"]],
    ["asset-variant-pad", "Asset Variant Pad", ["media-builder", "design-builder", "reporting-exporter"]],
    ["table-to-plan-pad", "Table To Plan Pad", ["data-parser", "operations-builder", "schedule-exporter"]],
    ["source-to-summary-pad", "Source To Summary Pad", ["research-parser", "documents-builder", "reporting-exporter"]],
    ["next-action-pad", "Next Action Pad", ["intake-parser", "operations-builder", "handoff-exporter"]]
  ],
  app: [
    ["workspace-command-board", "Workspace Command Board", ["intake-parser", "operations-builder", "reporting-builder", "handoff-exporter"]],
    ["client-response-studio", "Client Response Studio", ["customer-parser", "communication-builder", "compliance-checker", "handoff-exporter"]],
    ["cost-decision-studio", "Cost Decision Studio", ["finance-parser", "pricing-checker", "reporting-builder", "handoff-exporter"]],
    ["file-review-studio", "File Review Studio", ["documents-parser", "data-checker", "research-checker", "reporting-exporter"]],
    ["schedule-dispatch-studio", "Schedule Dispatch Studio", ["schedule-parser", "operations-builder", "communication-builder", "handoff-exporter"]],
    ["inventory-control-studio", "Inventory Control Studio", ["inventory-parser", "pricing-checker", "finance-builder", "reporting-exporter"]],
    ["media-launch-studio", "Media Launch Studio", ["media-parser", "design-builder", "communication-builder", "handoff-exporter"]],
    ["research-brief-studio", "Research Brief Studio", ["research-parser", "compliance-checker", "reporting-builder", "handoff-exporter"]],
    ["daily-ops-studio", "Daily Ops Studio", ["operations-parser", "schedule-builder", "customer-builder", "reporting-exporter"]],
    ["approval-desk", "Approval Desk", ["compliance-parser", "compliance-checker", "handoff-builder", "handoff-exporter"]],
    ["data-report-studio", "Data Report Studio", ["data-parser", "data-checker", "reporting-builder", "handoff-exporter"]],
    ["prompt-to-output-studio", "Prompt To Output Studio", ["intake-parser", "operations-builder", "reporting-builder", "handoff-exporter"]]
  ],
  "full-app": [
    ["business-control-room", "Business Control Room", ["intake-parser", "operations-builder", "finance-checker", "reporting-builder", "handoff-exporter"]],
    ["document-command-room", "Document Command Room", ["documents-parser", "data-checker", "research-builder", "compliance-checker", "handoff-exporter"]],
    ["customer-command-room", "Customer Command Room", ["customer-parser", "communication-builder", "schedule-builder", "reporting-builder", "handoff-exporter"]],
    ["finance-command-room", "Finance Command Room", ["finance-parser", "pricing-checker", "data-builder", "reporting-builder", "handoff-exporter"]],
    ["inventory-command-room", "Inventory Command Room", ["inventory-parser", "pricing-builder", "schedule-builder", "reporting-builder", "handoff-exporter"]],
    ["creative-command-room", "Creative Command Room", ["media-parser", "design-builder", "communication-builder", "reporting-builder", "handoff-exporter"]],
    ["compliance-command-room", "Compliance Command Room", ["compliance-parser", "research-checker", "documents-builder", "handoff-builder", "handoff-exporter"]],
    ["operations-command-room", "Operations Command Room", ["operations-parser", "schedule-builder", "customer-checker", "reporting-builder", "handoff-exporter"]]
  ],
  "mini-program": [
    ["weekly-reset-program", "Weekly Reset Program", ["operations-parser", "schedule-builder", "handoff-exporter"]],
    ["monthly-close-program", "Monthly Close Program", ["finance-parser", "data-checker", "reporting-builder"]],
    ["client-intake-program", "Client Intake Program", ["intake-parser", "customer-builder", "communication-exporter"]],
    ["file-cleanup-program", "File Cleanup Program", ["documents-parser", "data-checker", "handoff-exporter"]],
    ["stock-review-program", "Stock Review Program", ["inventory-parser", "pricing-checker", "finance-builder"]],
    ["campaign-prep-program", "Campaign Prep Program", ["media-parser", "design-builder", "communication-builder"]],
    ["source-review-program", "Source Review Program", ["research-parser", "compliance-checker", "reporting-exporter"]],
    ["approval-pack-program", "Approval Pack Program", ["compliance-parser", "handoff-builder", "handoff-exporter"]],
    ["daily-route-program", "Daily Route Program", ["schedule-parser", "operations-builder", "communication-exporter"]],
    ["customer-save-program", "Customer Save Program", ["customer-parser", "communication-builder", "finance-checker"]],
    ["price-watch-program", "Price Watch Program", ["pricing-parser", "pricing-checker", "reporting-builder"]],
    ["task-repair-program", "Task Repair Program", ["operations-checker", "intake-builder", "handoff-exporter"]]
  ],
  program: [
    ["operating-system-program", "Operating System Program", ["intake-parser", "operations-builder", "schedule-builder", "reporting-builder", "handoff-exporter"]],
    ["revenue-program", "Revenue Program", ["customer-parser", "pricing-builder", "communication-builder", "reporting-builder", "handoff-exporter"]],
    ["records-program", "Records Program", ["documents-parser", "data-builder", "compliance-checker", "handoff-builder", "handoff-exporter"]],
    ["service-program", "Service Program", ["schedule-parser", "operations-builder", "customer-builder", "reporting-exporter"]],
    ["buying-program", "Buying Program", ["pricing-parser", "research-checker", "finance-builder", "reporting-exporter"]],
    ["publishing-program", "Publishing Program", ["media-parser", "design-builder", "communication-builder", "handoff-exporter"]],
    ["evidence-program", "Evidence Program", ["research-parser", "documents-builder", "compliance-checker", "reporting-exporter"]],
    ["training-program", "Training Program", ["documents-parser", "operations-builder", "communication-builder", "handoff-exporter"]],
    ["risk-program", "Risk Program", ["compliance-parser", "research-checker", "finance-checker", "handoff-exporter"]],
    ["retention-program", "Retention Program", ["customer-parser", "communication-builder", "schedule-builder", "reporting-exporter"]],
    ["inventory-program", "Inventory Program", ["inventory-parser", "pricing-builder", "schedule-builder", "reporting-exporter"]],
    ["analytics-program", "Analytics Program", ["data-parser", "reporting-builder", "pricing-checker", "handoff-exporter"]]
  ],
  "full-program": [
    ["growth-full-program", "Growth Full Program", ["intake-parser", "customer-builder", "pricing-checker", "communication-builder", "reporting-builder", "handoff-exporter"]],
    ["admin-full-program", "Admin Full Program", ["documents-parser", "schedule-builder", "compliance-checker", "communication-builder", "handoff-builder", "handoff-exporter"]],
    ["finance-full-program", "Finance Full Program", ["finance-parser", "data-checker", "pricing-builder", "reporting-builder", "handoff-builder", "handoff-exporter"]],
    ["operations-full-program", "Operations Full Program", ["operations-parser", "schedule-builder", "inventory-checker", "customer-builder", "reporting-builder", "handoff-exporter"]],
    ["content-full-program", "Content Full Program", ["media-parser", "design-builder", "communication-builder", "schedule-builder", "reporting-builder", "handoff-exporter"]],
    ["compliance-full-program", "Compliance Full Program", ["compliance-parser", "research-checker", "documents-builder", "customer-checker", "reporting-builder", "handoff-exporter"]],
    ["product-full-program", "Product Full Program", ["pricing-parser", "inventory-builder", "research-checker", "customer-builder", "reporting-builder", "handoff-exporter"]],
    ["command-full-program", "Command Full Program", ["intake-parser", "operations-builder", "schedule-builder", "finance-checker", "reporting-builder", "handoff-exporter"]]
  ]
});

function currentToolsFor(domain, patternToolIds) {
  return unique([
    ...patternToolIds.map((patternId) => toolIdFor(domain, patternId)),
    ...BASE_TOOL_CHAIN
  ]).slice(0, 18);
}

function appCategoryFor(type) {
  return {
    "mini-app": "Scale Expansion Mini Apps",
    app: "Scale Expansion Apps",
    "full-app": "Scale Expansion Full Apps",
    "mini-program": "Scale Expansion Mini Programs",
    program: "Scale Expansion Programs",
    "full-program": "Scale Expansion Full Programs"
  }[type] || "Scale Expansion Apps";
}

export function buildScaleAppProgramRecords() {
  let sequence = 0;
  const records = [];
  const soloToolCount = MINI_APP_DOMAINS.length * SCALE_SOLO_JOB_PATTERNS.length;
  for (const domain of MINI_APP_DOMAINS) {
    for (const [type, patterns] of Object.entries(TYPE_PATTERNS)) {
      for (const [patternId, name, toolPatternIds] of patterns) {
        sequence += 1;
        const domainSlug = slug(domain);
        const currentTools = currentToolsFor(domain, toolPatternIds);
        const operationNames = toolPatternIds.map((id) => titleCase(id));
        records.push({
          id: `scale-${type}-${domainSlug}-${patternId}`,
          name: `${domain} ${name}`,
          category: appCategoryFor(type),
          engine: "potential_app",
          systemLabel: SCALE_APP_LABEL,
          toolKind: type,
          inHouse: true,
          scaleExpansionGenerated: true,
          description: `In-house ${type} for ${domain.toLowerCase()} that wires ${operationNames.join(", ")} into a runnable workflow with upload-ready inputs and no outside tool site.`,
          tags: unique([
            "scale expansion",
            "in-house app",
            "no outside tool site",
            "upload-ready",
            "waterfall-ready",
            "batch generated",
            type,
            domain,
            domainSlug,
            patternId,
            ...toolPatternIds,
            ...operationNames,
            ...currentTools
          ]),
          searchPhrases: unique([
            `${domain} ${name}`,
            `${domain} ${type}`,
            `${name} for ${domain}`,
            `build ${domain} ${patternId}`,
            `${domain} upload-ready ${type}`
          ]),
          compatibility: {
            accepts: ["prompt", "notes", "files", "rows", "settings"],
            produces: [`${type}-output`, "workflow", "handoff-pack"],
            requiredTools: currentTools,
            parallelSafe: true,
            approvalSensitive: /finance|compliance|customer|pricing/.test(toolPatternIds.join(" ")),
            publishesToLibraries: ["scale-expansion", `${domainSlug}-apps`]
          },
          config: {
            appType: type,
            domain,
            source: "scale-expansion",
            readiness: "ready-now",
            category: appCategoryFor(type),
            operations: toolPatternIds,
            operationNames,
            currentTools,
            skeletonPatterns: unique(toolPatternIds.map((id) => id.split("-")[0])),
            neededToolIds: [],
            neededTools: [],
            synergyChain: operationNames.join(" -> "),
            noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site",
            productionOutputs: [
              `${type} intake`,
              "runnable workflow checklist",
              "generated answer or file plan",
              "handoff package"
            ],
            scaleSequence: sequence,
            scaleBatchId: scaleBatchId(soloToolCount + sequence - 1)
          }
        });
      }
    }
  }
  return records;
}

export const SCALE_INHOUSE_TOOL_RECORDS = Object.freeze(buildScaleSoloToolRecords());
export const SCALE_APP_PROGRAM_RECORDS = Object.freeze(buildScaleAppProgramRecords());
export const SCALE_EXPANSION_RECORDS = Object.freeze([...SCALE_INHOUSE_TOOL_RECORDS, ...SCALE_APP_PROGRAM_RECORDS]);

function countBy(items, keyFn) {
  return items.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

export function buildScaleExpansionBatches({ batchSize = SCALE_EXPANSION_BATCH_SIZE } = {}) {
  const size = Math.max(1, Number(batchSize) || SCALE_EXPANSION_BATCH_SIZE);
  const batches = [];
  for (let start = 0; start < SCALE_EXPANSION_RECORDS.length; start += size) {
    const records = SCALE_EXPANSION_RECORDS.slice(start, start + size);
    batches.push({
      id: scaleBatchId(start),
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

export function buildScaleExpansionSummary() {
  const byKind = countBy(SCALE_EXPANSION_RECORDS, (record) => record.toolKind || record.config?.appType || "tool");
  const byCategory = countBy(SCALE_EXPANSION_RECORDS, (record) => record.category);
  return {
    version: SCALE_EXPANSION_VERSION,
    domainCount: MINI_APP_DOMAINS.length,
    soloJobPatternCount: SCALE_SOLO_JOB_PATTERNS.length,
    batchSize: SCALE_EXPANSION_BATCH_SIZE,
    batchCount: buildScaleExpansionBatches().length,
    totalRecords: SCALE_EXPANSION_RECORDS.length,
    byKind,
    byCategory,
    possibleMoreByType: {
      "solo-job-tools": byKind["solo-job-tool"] || 0,
      "mini-apps": byKind["mini-app"] || 0,
      apps: byKind.app || 0,
      "full-apps": byKind["full-app"] || 0,
      "mini-programs": byKind["mini-program"] || 0,
      programs: byKind.program || 0,
      "full-programs": byKind["full-program"] || 0
    },
    summary: `${SCALE_EXPANSION_RECORDS.length.toLocaleString()} additional in-house records across ${MINI_APP_DOMAINS.length} domains and ${buildScaleExpansionBatches().length} production batches.`
  };
}

export function verifyScaleExpansionSuite({ knownEngines = [] } = {}) {
  const errors = [];
  const ids = new Set();
  const engineSet = new Set(knownEngines);
  const toolIds = new Set(SCALE_EXPANSION_RECORDS.map((record) => record.id));
  const expected = {
    "solo-job-tool": 6400,
    "mini-app": 2400,
    app: 1200,
    "full-app": 800,
    "mini-program": 1200,
    program: 1200,
    "full-program": 800
  };
  const summary = buildScaleExpansionSummary();

  for (const record of SCALE_EXPANSION_RECORDS) {
    if (!record.id) errors.push("scale record missing id");
    if (ids.has(record.id)) errors.push(`duplicate scale id ${record.id}`);
    ids.add(record.id);
    if (engineSet.size && !engineSet.has(record.engine)) errors.push(`${record.id} uses unknown engine ${record.engine}`);
    if ((record.tags || []).length < 12) errors.push(`${record.id} needs dense tags`);
    if (!record.config?.scaleBatchId) errors.push(`${record.id} missing scale batch id`);
    for (const toolId of record.config?.currentTools || []) {
      if (!toolIds.has(toolId) && !BASE_TOOL_CHAIN.includes(toolId)) errors.push(`${record.id} references missing scale/current tool ${toolId}`);
    }
  }

  for (const [kind, count] of Object.entries(expected)) {
    if ((summary.byKind[kind] || 0) !== count) errors.push(`expected ${count} ${kind}, got ${summary.byKind[kind] || 0}`);
  }

  return { ok: errors.length === 0, errors, stats: summary };
}

export function searchScaleExpansion(query = "", { limit = 24 } = {}) {
  const tokens = String(query).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  return SCALE_EXPANSION_RECORDS
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
