import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { tools as catalogTools } from "../src/tool-catalog.js";
import { IN_HOUSE_TOOL_RECORDS } from "../src/in-house-tools.js";
import { MASSIVE_TOOL_DOMAINS, MASSIVE_TOOL_FACTORY_RECORDS, MASSIVE_TOOL_OPERATIONS } from "../src/massive-tool-factory.js";
import { FUNCTIONAL_TOOL_RECORDS } from "../src/functional-tools.js";
import { MINI_APP_DOMAINS, MINI_APP_OPERATION_FAMILIES, MINI_APP_SUPPORT_TOOLKIT, MINI_APP_TOOL_RECORDS } from "../src/mini-apps.js";
import { DAILY_DEALINGS_PROGRAM_RECORDS } from "../src/daily-dealings-programs.js";
import { FRONTIER_TOOL_RECORDS } from "../src/frontier-tool-expansion.js";
import { NEXT_FRONTIER_TOOL_RECORDS } from "../src/next-frontier-tool-expansion.js";
import { buildSkeletonCompatibilityReport, buildSkeletonTools } from "../src/skeleton-tools.js";
import { PROJECT_FIELDS, PROJECT_TEMPLATES, PROJECT_TOOL_GROUPS } from "../src/project-templates.js";
import { FACTCHECKER_TOOL } from "../src/factchecker-tool.js";
import { WEBCAM_EXPLORER_TOOL } from "../src/webcam-explorer.js";
import { THEME_STUDIO_TOOL, RGB_GENERATOR_TOOL } from "../src/theme-system.js";
import { RGB_MOTION_STUDIO_TOOL } from "../src/rgb-motion-studio.js";
import { AUDIO_VISUALIZER_STUDIO_TOOL } from "../src/audio-visualizer-studio.js";
import { PRICE_TOOLS } from "../src/price-comparison-tool.js";
import { SPACE_STUDIO_TOOLS } from "../src/space-studio.js";
import {
  NEEDED_INHOUSE_TOOL_RECORDS,
  POTENTIAL_APP_RECORDS,
  PRODUCTION_STREAM_ACTIVATION_RECORDS,
  PRODUCTION_STREAM_MADE_RECORDS,
  buildExpansionToolsSummary,
  buildProductionStreamBatches
} from "../src/expansion-tools.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const exportsDir = join(root, "exports");
const reportPath = join(root, "POTENTIAL_APP_BACKLOG.md");

const specialTools = [
  FACTCHECKER_TOOL,
  WEBCAM_EXPLORER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  ...SPACE_STUDIO_TOOLS,
  ...PRICE_TOOLS
];

const slug = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);

const titleCase = (value) =>
  String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b[a-z]/g, (match) => match.toUpperCase());

const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];

const csvEscape = (value) => {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : `"${text}"`;
};

const writeCsv = async (fileName, rows, columns) => {
  const lines = [columns.join(",")];
  for (const row of rows) lines.push(columns.map((column) => csvEscape(row[column])).join(","));
  await writeFile(join(exportsDir, fileName), `${lines.join("\n")}\n`, "utf8");
};

const recordTags = (tool) => unique([...(tool.tags || []), ...(tool.searchPhrases || [])]).join(" ").toLowerCase();
const firstWords = (text, count = 5) => String(text || "").toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 2).slice(0, count);

const normalizeTool = (tool, layer) => {
  const accepts = tool.metadata?.accepts || tool.compatibility?.accepts || tool.config?.accepts || tool.config?.skeletonPattern?.accepts || [];
  const produces = tool.metadata?.produces || tool.compatibility?.produces || tool.config?.produces || tool.config?.skeletonPattern?.produces || [];
  return {
    layer,
    id: tool.id,
    name: tool.name,
    category: tool.category || "",
    engine: tool.engine || "",
    sourceDomain: tool.config?.factoryDomain || tool.compatibility?.domain || tool.metadata?.domains?.join("|") || "",
    operation: tool.config?.factoryOperationLabel || tool.compatibility?.operation || tool.config?.mode || "",
    pattern: tool.skeletonPatternId || tool.config?.patternId || tool.config?.skeletonPattern?.id || "",
    accepts,
    produces,
    tags: unique([...(tool.tags || []), ...(tool.searchPhrases || [])]).slice(0, 40)
  };
};

const normalizeProductionTool = (tool, index) => ({
  sequence: index + 1,
  id: tool.id,
  name: tool.name,
  appType: tool.config?.appType || tool.toolKind || "",
  sourceAppType: tool.config?.sourceAppType || tool.config?.appType || tool.toolKind || "",
  domain: tool.config?.domain || "",
  category: tool.config?.category || tool.category || "",
  readiness: tool.config?.readiness || "",
  sourcePotentialAppId: tool.config?.sourcePotentialAppId || "",
  productionBatchId: tool.config?.productionBatchId || "",
  currentToolCount: tool.config?.currentTools?.length || 0,
  currentTools: tool.config?.currentTools || [],
  neededToolIds: tool.config?.neededToolIds || [],
  neededTools: tool.config?.neededTools || [],
  operations: tool.config?.operationNames || tool.config?.operations || [],
  noOutsideToolPolicy: tool.config?.noOutsideToolPolicy || ""
});

const factoryOperationByLabel = new Map(MASSIVE_TOOL_OPERATIONS.map((operation) => [operation.label, operation]));
const miniOperationById = new Map(MINI_APP_OPERATION_FAMILIES.map((operation) => [operation.id, operation]));
const miniDomainSlugs = new Set(MINI_APP_DOMAINS.map(slug));
const factoryDomainBySlug = new Map(MASSIVE_TOOL_DOMAINS.map((domain) => [slug(domain.field), domain]));
const inHouseSearchIndex = IN_HOUSE_TOOL_RECORDS.map((tool) => ({
  id: tool.id,
  name: tool.name,
  haystack: `${tool.name} ${tool.category} ${recordTags(tool)} ${tool.description}`.toLowerCase(),
  parallelSafe: Boolean(tool.metadata?.parallelSafe)
}));

const factoryToolsByDomainSlug = new Map();
const factoryToolByDomainAndLabel = new Map();
for (const tool of MASSIVE_TOOL_FACTORY_RECORDS) {
  const domainSlug = slug(tool.config?.factoryDomain || "");
  if (!factoryToolsByDomainSlug.has(domainSlug)) factoryToolsByDomainSlug.set(domainSlug, []);
  factoryToolsByDomainSlug.get(domainSlug).push(tool);
  const operationLabel = MASSIVE_TOOL_OPERATIONS[tool.config?.factoryOperationIndex]?.label || "";
  if (domainSlug && operationLabel) factoryToolByDomainAndLabel.set(`${domainSlug}:${operationLabel}`, tool);
}

const miniAppByDomainOperation = new Map();
for (const tool of MINI_APP_TOOL_RECORDS) {
  const domainSlug = slug(tool.compatibility?.domain || "");
  const operation = tool.compatibility?.operation || "";
  if (domainSlug && operation) miniAppByDomainOperation.set(`${domainSlug}:${operation}`, tool);
}

const supportByName = new Map(MINI_APP_SUPPORT_TOOLKIT.map((tool) => [tool.name, tool]));
const supportBySlug = new Map(MINI_APP_SUPPORT_TOOLKIT.map((tool) => [slug(tool.name), tool]));

const functionalByOperation = {
  "intake-builder": ["functional-document-outline-extractor"],
  "checklist-generator": ["functional-checklist-builder"],
  planner: ["functional-project-plan-builder"],
  "budget-estimator": ["functional-budget-planner"],
  "comparison-matrix": ["functional-product-shortlist-builder", "functional-price-table-comparer"],
  "inventory-tracker": ["functional-inventory-reorder"],
  "message-pack": ["functional-email-draft-generator", "functional-customer-reply-builder"],
  "report-builder": ["functional-report-generator", "functional-document-summarizer"],
  "risk-auditor": ["functional-factcheck-query-builder", "functional-social-keyword-scanner"],
  "handoff-pack": ["functional-markdown-export-packager", "functional-workflow-recorder"]
};

const factoryLabelsByOperation = {
  "intake-builder": ["Prompt Clarifier", "Brief Formatter", "Clean Spaces Tool", "JSON Key Finder"],
  "checklist-generator": ["List Numberer", "List Sorter A-Z", "List Deduper", "Deadline Date Adder"],
  planner: ["Deadline Date Adder", "Date Difference Calculator", "Markdown Table Builder", "Simple Total Calculator"],
  "budget-estimator": ["Simple Total Calculator", "Invoice Total Calculator", "Percentage Calculator", "Percent Change Calculator"],
  "comparison-matrix": ["Markdown Table Builder", "Percentage Calculator", "Keyword Density Scanner", "Average Calculator"],
  "inventory-tracker": ["CSV To JSON Converter", "JSON Formatter", "Simple Total Calculator", "Percent Change Calculator"],
  "message-pack": ["Brief Formatter", "Title Case Converter", "Clean Spaces Tool", "Word Count Auditor"],
  "report-builder": ["Markdown Table Builder", "Word Count Auditor", "Keyword Density Scanner", "JSON Formatter"],
  "risk-auditor": ["Keyword Density Scanner", "Percent Change Calculator", "Date Difference Calculator", "Markdown Table Builder"],
  "handoff-pack": ["Markdown Table Builder", "JSON Formatter", "Base64 Encoder", "Unique ID Generator"]
};

const skeletonPatternsByOperation = {
  "intake-builder": ["functional-mini-app", "transformer", "structured-data"],
  "checklist-generator": ["functional-mini-app", "list-processor", "date-offset"],
  planner: ["functional-mini-app", "date-offset", "time-gap", "report-table"],
  "budget-estimator": ["functional-mini-app", "totalizer", "ratio-calculator", "table-converter"],
  "comparison-matrix": ["functional-mini-app", "report-table", "keyword-scanner", "ratio-calculator"],
  "inventory-tracker": ["functional-mini-app", "table-converter", "change-calculator", "totalizer"],
  "message-pack": ["functional-mini-app", "transformer", "content-limit-check"],
  "report-builder": ["functional-mini-app", "report-table", "measurement", "keyword-scanner"],
  "risk-auditor": ["functional-mini-app", "keyword-scanner", "change-calculator", "evidence-clipping"],
  "handoff-pack": ["functional-mini-app", "structured-data", "report-table", "unique-id"]
};

const missingToolCatalog = {
  "pdf-docx-xlsx-parser": {
    name: "In-House PDF/DOCX/XLSX Parser",
    kind: "document-processing",
    priority: "P0",
    capability: "Extract text, tables, headings, fields, and metadata from office documents without handing users to outside tool sites."
  },
  "ocr-image-text-extractor": {
    name: "In-House OCR Image Text Extractor",
    kind: "document-processing",
    priority: "P0",
    capability: "Read scanned receipts, labels, screenshots, forms, and image-only PDFs into text and tables."
  },
  "web-page-fetcher-citation-archiver": {
    name: "In-House Web Page Fetcher & Citation Archiver",
    kind: "research",
    priority: "P0",
    capability: "Fetch allowed pages, save citations, archive snippets, and feed fact-checking or research apps."
  },
  "official-price-api-adapters": {
    name: "Official Price API Adapter Pack",
    kind: "shopping-data",
    priority: "P0",
    capability: "Use approved vendor APIs or user-provided feeds for live prices, availability, shipping, and historical price checks."
  },
  "product-feed-normalizer": {
    name: "In-House Product Feed Normalizer",
    kind: "shopping-data",
    priority: "P1",
    capability: "Normalize SKU, UPC, GTIN, options, variants, size, color, seller, and shipping fields from uploaded product feeds."
  },
  "image-batch-editor": {
    name: "In-House Image Batch Editor",
    kind: "media",
    priority: "P1",
    capability: "Resize, crop, watermark, compress, rename, palette-check, and package image batches locally."
  },
  "video-clip-renderer": {
    name: "In-House Video Clip Renderer",
    kind: "media",
    priority: "P1",
    capability: "Render short clips, visual effects, overlays, transitions, caption tracks, and export queues."
  },
  "audio-transcriber-segmenter": {
    name: "In-House Audio Transcriber & Segmenter",
    kind: "media",
    priority: "P1",
    capability: "Turn uploaded audio into transcript segments, timestamps, chapters, keywords, and clip notes."
  },
  "barcode-qr-scanner-generator": {
    name: "In-House Barcode/QR Scanner & Generator",
    kind: "inventory",
    priority: "P1",
    capability: "Read and generate item labels, QR codes, batch IDs, shelf tags, asset tags, and packing slips."
  },
  "calendar-ics-scheduler": {
    name: "In-House Calendar/ICS Scheduler",
    kind: "scheduling",
    priority: "P1",
    capability: "Import/export ICS, recurring schedules, reminders, appointments, shift calendars, and deadline plans."
  },
  "map-route-geocoder": {
    name: "In-House Map Route & Geocoder Tool",
    kind: "location",
    priority: "P1",
    capability: "Normalize addresses, geocode locations, cluster stops, estimate route order, and build service-area plans."
  },
  "secure-form-portal": {
    name: "In-House Secure Form Portal",
    kind: "forms",
    priority: "P1",
    capability: "Turn intake schemas into shareable forms with validation, saved responses, file fields, and export packages."
  },
  "local-account-workspace-sync": {
    name: "In-House Account Workspace Sync",
    kind: "storage",
    priority: "P1",
    capability: "Persist app workspaces, private libraries, approvals, artifacts, versions, and user settings."
  },
  "signature-approval-capture": {
    name: "In-House Signature & Approval Capture",
    kind: "approval",
    priority: "P2",
    capability: "Capture typed approvals, signatures, decision logs, version acceptance, and audit trails."
  },
  "chart-dashboard-renderer": {
    name: "In-House Chart & Dashboard Renderer",
    kind: "visual-reporting",
    priority: "P2",
    capability: "Render charts, KPI cards, trend lines, progress boards, and printable dashboards from table outputs."
  },
  "pii-phi-redaction-tool": {
    name: "In-House PII/PHI Redaction Tool",
    kind: "privacy",
    priority: "P0",
    capability: "Detect and redact sensitive personal, patient, legal, and financial fields before sharing or exporting."
  },
  "email-sms-send-queue": {
    name: "In-House Email/SMS Send Queue",
    kind: "communication",
    priority: "P2",
    capability: "Queue generated messages for user-approved sending through configured providers."
  },
  "bank-feed-importer": {
    name: "In-House Bank/Accounting Feed Importer",
    kind: "finance",
    priority: "P1",
    capability: "Import CSV, OFX/QIF-like exports, categorize rows, reconcile duplicates, and build bookkeeping packets."
  },
  "measurement-takeoff-canvas": {
    name: "In-House Measurement Takeoff Canvas",
    kind: "field-work",
    priority: "P2",
    capability: "Measure drawings/photos, count fixtures, estimate materials, and export takeoff rows."
  }
};

const advancedBlueprints = [
  {
    id: "document-intelligence-suite",
    name: "Document Intelligence Suite",
    type: "full-app",
    match: /document|legal|contract|invoice|tax|bookkeeping|insurance|healthcare|grant|research|real estate|property|compliance/i,
    operations: ["intake-builder", "report-builder", "risk-auditor", "handoff-pack"],
    needed: ["pdf-docx-xlsx-parser", "ocr-image-text-extractor", "pii-phi-redaction-tool"],
    description: "Upload or paste document packets, extract fields, build summaries, flag risks, and package a clean handoff."
  },
  {
    id: "live-price-intelligence-board",
    name: "Live Price Intelligence Board",
    type: "program",
    match: /ecommerce|retail|shopping|marketplace|price|product|procurement|wholesale|inventory|seller/i,
    operations: ["comparison-matrix", "budget-estimator", "inventory-tracker", "report-builder"],
    needed: ["official-price-api-adapters", "product-feed-normalizer", "chart-dashboard-renderer"],
    description: "Compare product options, track price movement, normalize feeds, and turn price evidence into buying decisions."
  },
  {
    id: "source-evidence-monitor",
    name: "Source Evidence Monitor",
    type: "program",
    match: /research|news|fact|legal|compliance|grant|academic|policy|social|web analytics|seo/i,
    operations: ["risk-auditor", "report-builder", "handoff-pack"],
    needed: ["web-page-fetcher-citation-archiver", "pii-phi-redaction-tool"],
    description: "Collect allowed sources, clip evidence, score credibility, and prepare citation-backed reports."
  },
  {
    id: "media-production-pipeline",
    name: "Media Production Pipeline",
    type: "full-app",
    match: /video|audio|music|podcast|youtube|creator|photo|photography|design|media|visual|theme/i,
    operations: ["planner", "checklist-generator", "message-pack", "handoff-pack"],
    needed: ["image-batch-editor", "video-clip-renderer", "audio-transcriber-segmenter"],
    description: "Plan media work, process assets, generate copy, package exports, and maintain release-ready checklists."
  },
  {
    id: "route-schedule-dispatcher",
    name: "Route Schedule Dispatcher",
    type: "program",
    match: /travel|delivery|route|logistics|transportation|field|landscaping|lawn|hvac|plumbing|event|property|service/i,
    operations: ["planner", "checklist-generator", "message-pack", "report-builder"],
    needed: ["map-route-geocoder", "calendar-ics-scheduler", "email-sms-send-queue"],
    description: "Build route plans, appointment windows, dispatch messages, and service reports from one intake."
  },
  {
    id: "inventory-label-command-center",
    name: "Inventory Label Command Center",
    type: "full-app",
    match: /inventory|warehouse|retail|marketplace|restaurant|farm|nursery|manufacturing|construction|shipping|grocery|bakery/i,
    operations: ["inventory-tracker", "budget-estimator", "checklist-generator", "handoff-pack"],
    needed: ["barcode-qr-scanner-generator", "product-feed-normalizer"],
    description: "Track stock, create reorder plans, generate labels, and package inventory handoffs."
  },
  {
    id: "secure-intake-portal",
    name: "Secure Intake Portal",
    type: "full-app",
    match: /client|legal|healthcare|insurance|real estate|loan|banking|hr|hiring|support|customer|tenant|vendor/i,
    operations: ["intake-builder", "message-pack", "risk-auditor", "handoff-pack"],
    needed: ["secure-form-portal", "local-account-workspace-sync", "pii-phi-redaction-tool"],
    description: "Turn intake schemas into shareable forms, collect responses, redact sensitive data, and generate next steps."
  },
  {
    id: "approval-and-signoff-room",
    name: "Approval & Signoff Room",
    type: "program",
    match: /client|compliance|legal|construction|vendor|procurement|quality|qa|project|grant|design|agency/i,
    operations: ["report-builder", "risk-auditor", "handoff-pack"],
    needed: ["signature-approval-capture", "local-account-workspace-sync"],
    description: "Package decisions, collect approvals, record change history, and create audit-ready signoff packets."
  },
  {
    id: "finance-import-reconciliation-desk",
    name: "Finance Import Reconciliation Desk",
    type: "program",
    match: /finance|bookkeeping|tax|loan|banking|budget|invoice|payroll|expense|grant/i,
    operations: ["budget-estimator", "comparison-matrix", "report-builder", "handoff-pack"],
    needed: ["bank-feed-importer", "pdf-docx-xlsx-parser", "chart-dashboard-renderer"],
    description: "Import finance rows, reconcile duplicates, build budget scenarios, and export review packets."
  },
  {
    id: "field-measurement-estimator",
    name: "Field Measurement Estimator",
    type: "full-app",
    match: /construction|contractor|landscaping|lawn|hvac|plumbing|property|real estate|shed|greenhouse|home|maintenance/i,
    operations: ["intake-builder", "budget-estimator", "comparison-matrix", "report-builder"],
    needed: ["measurement-takeoff-canvas", "image-batch-editor"],
    description: "Capture dimensions, estimate quantities, compare material options, and produce field-ready reports."
  }
];

function buildDomains() {
  const domains = new Map();
  const add = (name, source, extras = {}) => {
    if (!name) return;
    const key = slug(name);
    if (!key) return;
    const current = domains.get(key) || {
      name,
      slug: key,
      sources: [],
      macro: "",
      tags: []
    };
    current.sources = unique([...current.sources, source]);
    current.macro = current.macro || extras.macro || "";
    current.tags = unique([...current.tags, ...(extras.tags || [])]);
    domains.set(key, current);
  };

  for (const domain of MINI_APP_DOMAINS) add(domain, "mini-app-domain");
  for (const domain of MASSIVE_TOOL_DOMAINS) add(domain.field, "factory-domain", { macro: domain.macro, tags: domain.tags });
  for (const field of PROJECT_FIELDS) add(field, "project-field");
  for (const tool of IN_HOUSE_TOOL_RECORDS) {
    const category = String(tool.category || "").replace(/^In-House\s+/i, "").trim();
    if (category && category.length > 2) add(category, "in-house-category");
  }
  return [...domains.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function buildOperationBundles() {
  const operations = MINI_APP_OPERATION_FAMILIES;
  const bundles = [];

  for (let i = 0; i < operations.length; i += 1) {
    for (let j = i + 1; j < operations.length; j += 1) {
      const a = operations[i];
      const b = operations[j];
      bundles.push({
        id: `${a.id}-${b.id}`,
        name: `${a.name} + ${b.name}`,
        type: "mini-app",
        category: "paired-workflow",
        operations: [a.id, b.id],
        description: `Combines ${a.name.toLowerCase()} with ${b.name.toLowerCase()} so one pasted project input can produce connected outputs.`
      });
    }
  }

  const curated = [
    ["intake-builder", "planner", "handoff-pack", "Start-to-Handoff Builder", "program"],
    ["intake-builder", "checklist-generator", "planner", "Launch Planner", "full-app"],
    ["budget-estimator", "comparison-matrix", "risk-auditor", "Decision & Risk Desk", "full-app"],
    ["inventory-tracker", "budget-estimator", "message-pack", "Inventory Reorder Messenger", "full-app"],
    ["report-builder", "risk-auditor", "handoff-pack", "Audit Report Packager", "program"],
    ["planner", "checklist-generator", "report-builder", "Execution Status Room", "program"],
    ["intake-builder", "message-pack", "handoff-pack", "Client Intake Reply Pack", "full-app"],
    ["comparison-matrix", "report-builder", "handoff-pack", "Recommendation Report Builder", "full-app"],
    ["budget-estimator", "inventory-tracker", "report-builder", "Cost & Stock Report Center", "program"],
    ["planner", "budget-estimator", "risk-auditor", "Feasibility Planner", "program"],
    ["checklist-generator", "message-pack", "report-builder", "Team Update Kit", "mini-app"],
    ["intake-builder", "comparison-matrix", "message-pack", "Option Intake Messenger", "mini-app"],
    ["inventory-tracker", "comparison-matrix", "handoff-pack", "Sourcing Handoff Board", "full-app"],
    ["planner", "message-pack", "handoff-pack", "Follow-Up Workflow Builder", "mini-app"],
    ["intake-builder", "budget-estimator", "report-builder", "Estimate Report Builder", "full-app"],
    ["checklist-generator", "risk-auditor", "handoff-pack", "Readiness Audit Pack", "program"],
    ["comparison-matrix", "budget-estimator", "message-pack", "Buying Decision Messenger", "full-app"],
    ["planner", "inventory-tracker", "checklist-generator", "Operations Prep Board", "program"],
    ["intake-builder", "risk-auditor", "report-builder", "Triage Report Builder", "full-app"],
    ["planner", "comparison-matrix", "handoff-pack", "Roadmap Decision Pack", "program"],
    ["intake-builder", "checklist-generator", "budget-estimator", "Setup Cost Checklist", "mini-app"],
    ["message-pack", "risk-auditor", "handoff-pack", "Sensitive Reply Pack", "mini-app"],
    ["report-builder", "comparison-matrix", "budget-estimator", "Executive Options Brief", "full-app"],
    ["inventory-tracker", "risk-auditor", "report-builder", "Stock Risk Reporter", "full-app"]
  ];
  for (const [a, b, c, name, type] of curated) {
    bundles.push({
      id: slug(name),
      name,
      type,
      category: "curated-chain",
      operations: [a, b, c],
      description: `A purpose-built ${type} that chains ${[a, b, c].map((id) => miniOperationById.get(id)?.name).filter(Boolean).join(", ")}.`
    });
  }

  const suiteSets = [
    [["intake-builder", "planner", "checklist-generator", "budget-estimator", "risk-auditor", "handoff-pack"], "Complete Project Operating App"],
    [["intake-builder", "comparison-matrix", "budget-estimator", "message-pack", "report-builder", "handoff-pack"], "Client Decision Program"],
    [["inventory-tracker", "budget-estimator", "comparison-matrix", "risk-auditor", "report-builder", "handoff-pack"], "Inventory Intelligence Program"],
    [["planner", "checklist-generator", "message-pack", "report-builder", "handoff-pack"], "Daily Ops Command Center"],
    [["intake-builder", "risk-auditor", "message-pack", "report-builder", "handoff-pack"], "Risk Response Program"],
    [["intake-builder", "planner", "comparison-matrix", "report-builder", "handoff-pack"], "Planning & Recommendation Studio"],
    [["budget-estimator", "comparison-matrix", "message-pack", "report-builder", "handoff-pack"], "Quote-to-Reply Program"],
    [["checklist-generator", "inventory-tracker", "budget-estimator", "message-pack", "handoff-pack"], "Supply Run Program"],
    [["intake-builder", "checklist-generator", "message-pack", "report-builder", "handoff-pack"], "Customer Handoff Center"],
    [["planner", "budget-estimator", "comparison-matrix", "risk-auditor", "report-builder"], "Feasibility Board"],
    [["intake-builder", "planner", "inventory-tracker", "budget-estimator", "report-builder"], "Resource Planning Console"],
    [["comparison-matrix", "message-pack", "risk-auditor", "report-builder", "handoff-pack"], "Decision Assurance Desk"]
  ];
  for (const [operations, name] of suiteSets) {
    bundles.push({
      id: slug(name),
      name,
      type: "program",
      category: "multi-stage-program",
      operations,
      description: `A larger app program that connects ${operations.length} current mini-app operation families into one guided workspace.`
    });
  }

  return bundles;
}

function selectInHouseTools(domain, bundle, limit = 4) {
  const words = firstWords(`${domain.name} ${domain.tags.join(" ")} ${bundle.name}`, 14);
  const operationWords = bundle.operations.flatMap((id) => miniOperationById.get(id)?.keywords || []);
  const tokens = unique([...words, ...operationWords.map((word) => slug(word).replaceAll("-", " "))]).filter(Boolean);
  return inHouseSearchIndex
    .map((tool) => {
      const haystack = tool.haystack;
      let score = 0;
      for (const token of tokens) if (token && haystack.includes(token)) score += token.length > 5 ? 3 : 1;
      if (score && tool.parallelSafe) score += 1;
      return { tool, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit)
    .map((item) => item.tool.id);
}

function selectFactoryTools(domain, operations, limit = 8) {
  const wantedLabels = unique(operations.flatMap((id) => factoryLabelsByOperation[id] || []));
  return wantedLabels
    .map((label) => factoryToolByDomainAndLabel.get(`${domain.slug}:${label}`))
    .filter(Boolean)
    .slice(0, limit)
    .map((tool) => tool.id);
}

function selectMiniApps(domain, operations) {
  return operations
    .map((operation) => miniAppByDomainOperation.get(`${domain.slug}:${operation}`)?.id)
    .filter(Boolean);
}

function selectSupportTools(operations) {
  const names = unique(operations.flatMap((id) => miniOperationById.get(id)?.deps || []));
  return names.map((name) => supportByName.get(name) || supportBySlug.get(slug(name))).filter(Boolean).map((tool) => tool.id);
}

function selectFunctionalTools(operations) {
  return unique(operations.flatMap((id) => functionalByOperation[id] || []));
}

function selectSpecialTools(domain, bundle) {
  const text = `${domain.name} ${domain.macro} ${domain.tags.join(" ")} ${bundle.name}`.toLowerCase();
  const ids = [];
  if (/price|shopping|ecommerce|retail|marketplace|seller|procurement|product|deal|wholesale/.test(text)) ids.push(...PRICE_TOOLS.map((tool) => tool.id));
  if (/research|fact|quote|source|news|social|evidence|compliance|legal/.test(text)) ids.push(FACTCHECKER_TOOL.id);
  if (/theme|brand|profile|color|visual|design/.test(text)) ids.push(THEME_STUDIO_TOOL.id, RGB_GENERATOR_TOOL.id);
  if (/video|image|photo|motion|rgb|effect|overlay/.test(text)) ids.push(RGB_MOTION_STUDIO_TOOL.id);
  if (/audio|music|podcast|visualizer|waveform/.test(text)) ids.push(AUDIO_VISUALIZER_STUDIO_TOOL.id);
  if (/webcam|travel|city|nature|beach|scenic|tourism/.test(text)) ids.push(WEBCAM_EXPLORER_TOOL.id);
  return unique(ids);
}

function neededToolsFor(domain, bundle) {
  const text = `${domain.name} ${domain.macro} ${domain.tags.join(" ")} ${bundle.name} ${bundle.description}`.toLowerCase();
  const needed = [];
  for (const blueprint of advancedBlueprints) {
    if (blueprint.match.test(text) && (bundle.id === blueprint.id || /program|suite|pipeline|portal|monitor|board|center|desk|room|estimator/.test(bundle.name.toLowerCase()))) {
      needed.push(...blueprint.needed);
    }
  }
  return unique([...(bundle.needed || []), ...needed]);
}

function buildPotentialRows(domains, operationBundles) {
  const existingApps = [
  ...FUNCTIONAL_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, type: "functional-tool" })),
  ...MINI_APP_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, type: "mini-app" })),
  ...DAILY_DEALINGS_PROGRAM_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, type: "daily-dealings-program" })),
  ...FRONTIER_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, type: "frontier-tool" })),
  ...NEXT_FRONTIER_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, type: "next-frontier-tool" })),
  ...PROJECT_TEMPLATES.map((template) => ({ id: template.id, name: template.title, type: "project-template" })),
  ...specialTools.map((tool) => ({ id: tool.id, name: tool.name, type: "special-app-tool" }))
  ];
  const existingSlugs = new Set(existingApps.map((app) => slug(app.name)));
  const seen = new Set();
  const rows = [];

  const addRow = (domain, bundle, source = "operation-bundle") => {
    const name = `${domain.name} ${bundle.name}`;
    const ideaSlug = slug(name);
    if (!ideaSlug || existingSlugs.has(ideaSlug) || seen.has(ideaSlug)) return;
    seen.add(ideaSlug);

    const operations = bundle.operations || [];
    const miniAppIds = selectMiniApps(domain, operations);
    const supportIds = selectSupportTools(operations);
    const functionalIds = selectFunctionalTools(operations);
    const factoryIds = selectFactoryTools(domain, operations);
    const inHouseIds = selectInHouseTools(domain, bundle);
    const specialIds = selectSpecialTools(domain, bundle);
    const needed = neededToolsFor(domain, bundle);
    const skeletonPatterns = unique(operations.flatMap((id) => skeletonPatternsByOperation[id] || ["functional-mini-app"]));
    const currentToolIds = unique([...miniAppIds, ...supportIds, ...functionalIds, ...factoryIds, ...inHouseIds, ...specialIds, ...needed]).slice(0, 30);
    const hasExactMiniApps = operations.length > 0 && miniAppIds.length === operations.length;
    const hasFactory = factoryIds.length > 0;
    const readiness = needed.length
      ? "ready-with-new-support-tools"
      : hasExactMiniApps
        ? "ready-now"
        : hasFactory
          ? "factory-and-skeleton-ready"
          : "skeleton-ready";
    const outputNames = operations.map((id) => miniOperationById.get(id)?.name || id);
    const neededNames = needed.map((id) => missingToolCatalog[id]?.name || titleCase(id));
    const appType = needed.length && bundle.type === "mini-app" ? "full-app" : bundle.type;

    rows.push({
      id: `potential-${ideaSlug}`,
      name,
      appType,
      domain: domain.name,
      domainSources: domain.sources,
      source,
      category: bundle.category || "generated-combination",
      readiness,
      description: `${bundle.description} Built only from in-house tools, in-house skeletons, and new in-house support tools where listed.`,
      operations: outputNames,
      currentToolCount: currentToolIds.length,
      currentTools: currentToolIds,
      skeletonPatterns,
      neededTools: neededNames,
      neededToolIds: needed,
      duplicateCheck: "not an existing single-operation mini-app, functional tool, special app, or project template title",
      synergyChain: outputNames.join(" -> "),
      noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site"
    });
  };

  for (const domain of domains) {
    for (const bundle of operationBundles) addRow(domain, bundle);
    for (const blueprint of advancedBlueprints) {
      if (blueprint.match.test(`${domain.name} ${domain.macro} ${domain.tags.join(" ")}`)) {
        addRow(domain, {
          id: blueprint.id,
          name: blueprint.name,
          type: blueprint.type,
          category: "missing-tool-enabled",
          operations: blueprint.operations,
          needed: blueprint.needed,
          description: blueprint.description
        }, "advanced-missing-tool-blueprint");
      }
    }
  }

  const groupsByFamily = new Map();
  for (const group of PROJECT_TOOL_GROUPS) {
    if (!groupsByFamily.has(group.familyId)) groupsByFamily.set(group.familyId, []);
    groupsByFamily.get(group.familyId).push(group);
  }
  const projectFields = PROJECT_FIELDS.map((field) => ({ name: field, slug: slug(field), sources: ["project-field"], macro: "Project Programs", tags: [] }));
  for (const field of projectFields) {
    for (const [family, groups] of groupsByFamily.entries()) {
      const name = `${field.name} ${titleCase(family)} Operating System`;
      const ideaSlug = slug(name);
      if (existingSlugs.has(ideaSlug) || seen.has(ideaSlug)) continue;
      seen.add(ideaSlug);
      const groupIds = groups.slice(0, 5).map((group) => group.id);
      const sampleToolIds = unique(groups.flatMap((group) => group.sampleToolIds || [])).slice(0, 20);
      const needed = /collaboration|approval|client|legal|health|insurance|finance/.test(`${family} ${field.name}`.toLowerCase())
        ? ["local-account-workspace-sync", "signature-approval-capture"]
        : [];
      rows.push({
        id: `potential-${ideaSlug}`,
        name,
        appType: "program",
        domain: field.name,
        domainSources: field.sources,
        source: "project-tool-group-cross-reference",
        category: "operating-system-program",
        readiness: needed.length ? "ready-with-new-support-tools" : "ready-now",
        description: `Combines existing ${family} project workflow groups into a dedicated operating system for ${field.name}.`,
        operations: groups.slice(0, 5).map((group) => group.name),
        currentToolCount: sampleToolIds.length,
        currentTools: sampleToolIds,
        skeletonPatterns: ["functional-mini-app", "transformer", "report-table", "structured-data"],
        neededTools: needed.map((id) => missingToolCatalog[id]?.name || titleCase(id)),
        neededToolIds: needed,
        duplicateCheck: "not an existing project template title; combines several current project groups into one program",
        synergyChain: groupIds.join(" -> "),
        noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site"
      });
    }
  }

  return rows;
}

function aggregateNeededTools(rows) {
  const byId = new Map();
  for (const row of rows) {
    for (const id of row.neededToolIds || []) {
      const current = byId.get(id) || {
        id,
        name: missingToolCatalog[id]?.name || titleCase(id),
        kind: missingToolCatalog[id]?.kind || "support",
        priority: missingToolCatalog[id]?.priority || "P2",
        capability: missingToolCatalog[id]?.capability || "",
        neededForCount: 0,
        exampleApps: []
      };
      current.neededForCount += 1;
      if (current.exampleApps.length < 8) current.exampleApps.push(row.name);
      byId.set(id, current);
    }
  }
  return [...byId.values()].sort((a, b) => a.priority.localeCompare(b.priority) || b.neededForCount - a.neededForCount);
}

function buildMarkdown({ domains, potentialRows, neededRows, skeletonReport, inventoryRows, existingAppRows, productionRows, productionBatchRows, expansionSummary, retiredCatalogRows }) {
  const byReadiness = Object.groupBy(potentialRows, (row) => row.readiness);
  const byType = Object.groupBy(potentialRows, (row) => row.appType);
  const topNeeded = neededRows.slice(0, 20);
  const readyExamples = potentialRows.filter((row) => row.readiness === "ready-now").slice(0, 80);
  const missingExamples = potentialRows.filter((row) => row.readiness === "ready-with-new-support-tools").slice(0, 80);

  return `# Potential App Backlog From Current In-House Tools

Generated: 2026-06-13

## What Was Cross-Referenced

- Current tool inventory rows: ${inventoryRows.length.toLocaleString()}
- Original catalog tools retired from direct website use: ${retiredCatalogRows.length.toLocaleString()}
- Existing app/program rows checked for duplicate names: ${existingAppRows.length.toLocaleString()}
- Potential app/program ideas generated: ${potentialRows.length.toLocaleString()}
- Production-stream records made: ${productionRows.length.toLocaleString()}
- Support-unlocked production packs made: ${expansionSummary.productionActivationCount.toLocaleString()}
- Production batches available: ${productionBatchRows.length.toLocaleString()}
- Domains/fields/categories considered: ${domains.length.toLocaleString()}
- Skeleton tools available: ${skeletonReport.toolCount.toLocaleString()} across ${skeletonReport.patternCount.toLocaleString()} patterns

This backlog treats every tool as an in-house build target. It does not recommend embedding or wrapping outside tool websites. Rows marked ready-with-new-support-tools are now unlocked by the 19 in-house support tools added for this batch.

## Continuous Production Stream

The production stream is now made as ${expansionSummary.productionStreamMadeCount.toLocaleString()} records:

\`\`\`text
${potentialRows.length.toLocaleString()} generated mini-app/full-app/program records
+ ${expansionSummary.productionActivationCount.toLocaleString()} support-unlocked production build packs
= ${expansionSummary.productionStreamMadeCount.toLocaleString()} production-stream records
\`\`\`

The stream is split into ${productionBatchRows.length.toLocaleString()} batches so it can keep moving without duplicating already-made app ideas.

## Retired Catalog Tool Policy

The original 2,500 catalog records are no longer exported as directly usable website tools. They stay available only as hidden source metadata for compatibility, skeleton generation, and audit trails. Website use resolves to a fully functioning in-house replacement when one exists, otherwise to the generated skeleton replacement.

## Potential Ideas By Readiness

${Object.entries(byReadiness).sort((a, b) => b[1].length - a[1].length).map(([key, rows]) => `- ${key}: ${rows.length.toLocaleString()}`).join("\n")}

## Potential Ideas By App Type

${Object.entries(byType).sort((a, b) => b[1].length - a[1].length).map(([key, rows]) => `- ${key}: ${rows.length.toLocaleString()}`).join("\n")}

## Highest-Leverage New In-House Support Tools

${topNeeded.map((tool) => `- ${tool.priority} ${tool.name}: unlocks ${tool.neededForCount.toLocaleString()} potential apps`).join("\n")}

## Ready-Now Examples

${readyExamples.map((row) => `- ${row.name} (${row.appType}) - ${row.synergyChain}`).join("\n")}

## New-Support-Tool-Enabled Examples

${missingExamples.map((row) => `- ${row.name} (${row.appType}) - uses ${row.neededTools.join("; ")}`).join("\n")}

## Export Files

- \`exports/current-tool-inventory.csv\`
- \`exports/retired-catalog-tool-sources.csv\`
- \`exports/current-app-inventory.csv\`
- \`exports/potential-apps.csv\`
- \`exports/production-stream-apps.csv\`
- \`exports/production-stream-batches.csv\`
- \`exports/potential-apps-summary.json\`
- \`exports/needed-tools-for-potential-apps.csv\`
`;
}

await mkdir(exportsDir, { recursive: true });

const directWebsiteToolGroups = [
  ["in-house-specific", IN_HOUSE_TOOL_RECORDS],
  ["factory-specific", MASSIVE_TOOL_FACTORY_RECORDS],
  ["functional-tool", FUNCTIONAL_TOOL_RECORDS],
  ["functional-mini-app", MINI_APP_TOOL_RECORDS],
  ["daily-dealings-program", DAILY_DEALINGS_PROGRAM_RECORDS],
  ["frontier-functional-tool", FRONTIER_TOOL_RECORDS],
  ["next-frontier-functional-tool", NEXT_FRONTIER_TOOL_RECORDS],
  ["needed-inhouse-support-tool", NEEDED_INHOUSE_TOOL_RECORDS],
  ["special-app-tool", specialTools]
];
const directWebsiteTools = directWebsiteToolGroups.flatMap(([, records]) => records);
const specificBaseTools = [
  ...catalogTools,
  ...directWebsiteTools
];
const skeletonTools = buildSkeletonTools(specificBaseTools);
const skeletonReport = buildSkeletonCompatibilityReport(skeletonTools);
const catalogToolIds = new Set(catalogTools.map((tool) => tool.id));
const directWebsiteToolById = new Map(directWebsiteTools.map((tool) => [tool.id, tool]));
const catalogSkeletonReplacementById = new Map(skeletonTools
  .filter((tool) => catalogToolIds.has(tool.skeletonBaseToolId))
  .map((tool) => [tool.skeletonBaseToolId, tool]));
const retiredCatalogRows = catalogTools.map((tool) => {
  const directReplacement = directWebsiteToolById.get(tool.id);
  const skeletonReplacement = catalogSkeletonReplacementById.get(tool.id);
  const replacement = directReplacement || skeletonReplacement;
  return {
    id: tool.id,
    name: tool.name,
    oldCategory: tool.category,
    oldEngine: tool.engine,
    websiteVisible: "no",
    retirementReason: "covered by in-house direct tool or generated skeleton replacement",
    replacementId: replacement?.id || "",
    replacementName: replacement?.name || "",
    replacementLayer: directReplacement ? "fully-functioning-in-house" : "skeleton-replacement",
    replacementEngine: replacement?.engine || "",
    sourcePolicy: "kept only as hidden source metadata for compatibility and skeleton generation"
  };
});

const inventoryRows = [
  ...directWebsiteToolGroups.flatMap(([layer, records]) => records.map((tool) => normalizeTool(tool, layer))),
  ...skeletonTools.map((tool) => normalizeTool(tool, "skeleton-tool")),
  ...POTENTIAL_APP_RECORDS.map((tool) => normalizeTool(tool, "generated-potential-app")),
  ...PRODUCTION_STREAM_ACTIVATION_RECORDS.map((tool) => normalizeTool(tool, "production-stream-build-pack"))
];

const existingAppRows = [
  ...FUNCTIONAL_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, appType: "functional-tool", source: "functional-tools.js", currentToolCount: 1 })),
  ...MINI_APP_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, appType: "mini-app", source: "mini-apps.js", currentToolCount: 1 })),
  ...DAILY_DEALINGS_PROGRAM_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, appType: "daily-dealings-program", source: "daily-dealings-programs.js", currentToolCount: tool.config?.currentTools?.length || 1 })),
  ...FRONTIER_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, appType: "frontier-functional-tool", source: "frontier-tool-expansion.js", currentToolCount: 1 })),
  ...NEXT_FRONTIER_TOOL_RECORDS.map((tool) => ({ id: tool.id, name: tool.name, appType: "next-frontier-functional-tool", source: "next-frontier-tool-expansion.js", currentToolCount: 1 })),
  ...PROJECT_TEMPLATES.map((template) => ({ id: template.id, name: template.title, appType: "project-template", source: "project-templates.js", currentToolCount: template.toolCount || 0 })),
  ...specialTools.map((tool) => ({ id: tool.id, name: tool.name, appType: "special-app-tool", source: "special modules", currentToolCount: 1 }))
];

const domains = buildDomains();
const operationBundles = buildOperationBundles();
const potentialRows = buildPotentialRows(domains, operationBundles);
const neededRows = aggregateNeededTools(potentialRows);
const productionRows = PRODUCTION_STREAM_MADE_RECORDS.map((tool, index) => normalizeProductionTool(tool, index));
const productionBatchRows = buildProductionStreamBatches().map((batch) => ({
  id: batch.id,
  sequence: batch.sequence,
  start: batch.start,
  end: batch.end,
  count: batch.count,
  supportUnlockedCount: batch.supportUnlockedCount,
  activationPackCount: batch.activationPackCount,
  byType: Object.entries(batch.byType).map(([type, count]) => `${type}:${count}`),
  sampleIds: batch.sampleIds
}));
const expansionSummary = buildExpansionToolsSummary();

await writeCsv("current-tool-inventory.csv", inventoryRows, [
  "layer", "id", "name", "category", "engine", "sourceDomain", "operation", "pattern", "accepts", "produces", "tags"
]);

await writeCsv("retired-catalog-tool-sources.csv", retiredCatalogRows, [
  "id", "name", "oldCategory", "oldEngine", "websiteVisible", "retirementReason", "replacementId", "replacementName",
  "replacementLayer", "replacementEngine", "sourcePolicy"
]);

await writeCsv("current-app-inventory.csv", existingAppRows, [
  "id", "name", "appType", "source", "currentToolCount"
]);

await writeCsv("potential-apps.csv", potentialRows, [
  "id", "name", "appType", "domain", "domainSources", "source", "category", "readiness", "description", "operations",
  "currentToolCount", "currentTools", "skeletonPatterns", "neededTools", "neededToolIds", "duplicateCheck", "synergyChain", "noOutsideToolPolicy"
]);

await writeCsv("needed-tools-for-potential-apps.csv", neededRows, [
  "id", "name", "kind", "priority", "capability", "neededForCount", "exampleApps"
]);

await writeCsv("production-stream-apps.csv", productionRows, [
  "sequence", "id", "name", "appType", "sourceAppType", "domain", "category", "readiness", "sourcePotentialAppId",
  "productionBatchId", "currentToolCount", "currentTools", "neededToolIds", "neededTools", "operations", "noOutsideToolPolicy"
]);

await writeCsv("production-stream-batches.csv", productionBatchRows, [
  "id", "sequence", "start", "end", "count", "supportUnlockedCount", "activationPackCount", "byType", "sampleIds"
]);

const summary = {
  generatedAt: "2026-06-13T00:00:00.000-04:00",
  policy: "All ideas are intended for in-house implementation. Do not embed third-party tool sites.",
  counts: {
    inventoryRows: inventoryRows.length,
    retiredCatalogSourceRows: retiredCatalogRows.length,
    retiredCatalogVisibleRows: inventoryRows.filter((row) => catalogToolIds.has(row.id) && row.layer === "in-house-browser-specific").length,
    existingAppsChecked: existingAppRows.length,
    potentialApps: potentialRows.length,
    productionStreamMade: productionRows.length,
    productionActivationPacks: expansionSummary.productionActivationCount,
    productionBatches: productionBatchRows.length,
    domainsConsidered: domains.length,
    operationBundles: operationBundles.length,
    missingToolTypes: neededRows.length,
    skeletonTools: skeletonReport.toolCount,
    skeletonPatterns: skeletonReport.patternCount
  },
  byReadiness: Object.fromEntries(Object.entries(Object.groupBy(potentialRows, (row) => row.readiness)).map(([key, rows]) => [key, rows.length])),
  byType: Object.fromEntries(Object.entries(Object.groupBy(potentialRows, (row) => row.appType)).map(([key, rows]) => [key, rows.length])),
  topNeededTools: neededRows.slice(0, 25),
  productionStream: {
    target: expansionSummary.productionStreamTargetCount,
    made: expansionSummary.productionStreamMadeCount,
    supportUnlockedPacks: expansionSummary.productionActivationCount,
    batches: productionBatchRows.length
  },
  sampleReadyNow: potentialRows.filter((row) => row.readiness === "ready-now").slice(0, 25).map((row) => ({
    id: row.id,
    name: row.name,
    appType: row.appType,
    currentTools: row.currentTools,
    synergyChain: row.synergyChain
  })),
  sampleNeedsTools: potentialRows.filter((row) => row.neededToolIds.length).slice(0, 25).map((row) => ({
    id: row.id,
    name: row.name,
    appType: row.appType,
    neededToolIds: row.neededToolIds
  }))
};

await writeFile(join(exportsDir, "potential-apps-summary.json"), `${JSON.stringify(summary, null, 2)}\n`, "utf8");
await writeFile(reportPath, buildMarkdown({ domains, potentialRows, neededRows, skeletonReport, inventoryRows, existingAppRows, productionRows, productionBatchRows, expansionSummary, retiredCatalogRows }), "utf8");

console.log(`Current tool inventory: ${inventoryRows.length}`);
console.log(`Retired catalog sources hidden from website inventory: ${retiredCatalogRows.length}`);
console.log(`Existing apps checked: ${existingAppRows.length}`);
console.log(`Potential apps generated: ${potentialRows.length}`);
console.log(`Production stream records made: ${productionRows.length}`);
console.log(`Support-unlocked production packs: ${expansionSummary.productionActivationCount}`);
console.log(`Needed support tool types: ${neededRows.length}`);
console.log(`Skeleton tools: ${skeletonReport.toolCount}`);
