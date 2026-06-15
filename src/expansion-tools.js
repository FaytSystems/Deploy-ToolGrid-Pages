import { IN_HOUSE_TOOL_RECORDS } from "./in-house-tools.js";
import { MASSIVE_TOOL_DOMAINS, MASSIVE_TOOL_OPERATIONS } from "./massive-tool-factory.js";
import { FUNCTIONAL_TOOL_RECORDS } from "./functional-tools.js";
import { MINI_APP_DOMAINS, MINI_APP_OPERATION_FAMILIES, MINI_APP_SUPPORT_TOOLKIT, MINI_APP_TOOL_RECORDS } from "./mini-apps.js";
import { FACTCHECKER_TOOL } from "./factchecker-tool.js";
import { WEBCAM_EXPLORER_TOOL } from "./webcam-explorer.js";
import { THEME_STUDIO_TOOL, RGB_GENERATOR_TOOL } from "./theme-system.js";
import { RGB_MOTION_STUDIO_TOOL } from "./rgb-motion-studio.js";
import { AUDIO_VISUALIZER_STUDIO_TOOL } from "./audio-visualizer-studio.js";
import { PRICE_TOOLS } from "./price-comparison-tool.js";

export const EXPANSION_TOOLS_VERSION = "2026-06-13-needed-tools-and-potential-apps-v1";
export const NEEDED_INHOUSE_TOOL_TARGET_COUNT = 19;
export const POTENTIAL_APP_TARGET_COUNT = 27640;
export const SUPPORT_UNLOCKED_APP_TARGET_COUNT = 6906;
export const PRODUCTION_STREAM_TARGET_COUNT = POTENTIAL_APP_TARGET_COUNT + SUPPORT_UNLOCKED_APP_TARGET_COUNT;
export const PRODUCTION_STREAM_BATCH_SIZE = 250;
export const NEEDED_INHOUSE_TOOL_LABEL = "Needed In-House Support Tool";
export const POTENTIAL_APP_LABEL = "In-House Generated App";
export const PRODUCTION_STREAM_LABEL = "In-House Production Stream Build Pack";

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
const lines = (text) => String(text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
const money = (value) => `$${(Number(value) || 0).toFixed(2)}`;
const productionBatchId = (index, batchSize = PRODUCTION_STREAM_BATCH_SIZE) => `production-batch-${String(Math.floor(index / batchSize) + 1).padStart(3, "0")}`;

const PROJECT_FIELDS = Object.freeze(["Retail & ecommerce","Restaurant operations","Food truck","Coffee shop","Bakery","Catering","Landscaping","Lawn care","Home cleaning","HVAC","Plumbing","Electrical contracting","Roofing","Real estate agency","Property management","Interior design","Fitness coaching","Yoga studio","Personal training","Tutoring","Online courses","Daycare","Healthcare office admin","Dental office admin","Wellness clinic","Bookkeeping","Tax prep","Insurance agency","Mortgage brokerage","Legal admin","Nonprofit fundraising","Community organization","Event planning","Wedding services","Photography studio","Videography","Podcasting","YouTube channel","Newsletter publisher","Affiliate marketing","Content agency","SEO agency","Web design agency","SaaS startup","Mobile app startup","Freelance developer","Cybersecurity consultant","Data consulting","IT helpdesk","HR recruiting","Staff scheduling","Manufacturing","Warehouse logistics","Trucking","Auto repair","Car detailing","Pet grooming","Veterinary office","Beauty salon","Barber shop","Spa","Fashion brand","Print shop","Sign shop","Farmers market vendor","Nursery / garden center","Urban farm","Houseplant education","Construction","Architecture firm","Engineering consulting","Environmental consulting","Travel agency","Hotel / hostel","Vacation rental","Sports club","Music school","Artist studio","Game studio","Community forum"]);

const PROJECT_GROUP_FAMILIES = Object.freeze([
  "marketing", "sales", "support", "operations", "finance", "hr", "content", "seo", "social", "email", "data", "reporting", "compliance",
  "scheduling", "product", "ux", "web-launch", "developer", "security", "training", "inventory", "pricing", "outreach", "research", "project-management"
]);

const PROJECT_GROUP_OUTCOMES = Object.freeze([
  ["intake-to-output", "intake-to-output workflow"],
  ["audit", "audit workflow"],
  ["campaign", "campaign workflow"],
  ["daily-checklist", "daily checklist workflow"],
  ["decision-report", "decision report workflow"]
]);

const projectGroupSampleToolIds = Object.freeze([
  "functional-project-plan-builder",
  "functional-checklist-builder",
  "functional-report-generator",
  "functional-budget-planner",
  "functional-email-draft-generator",
  "functional-csv-cleaner",
  "functional-document-summarizer",
  "functional-inventory-reorder-calculator"
]);

const PROJECT_TOOL_GROUPS = Object.freeze(PROJECT_GROUP_FAMILIES.flatMap((family) =>
  PROJECT_GROUP_OUTCOMES.map(([outcomeId, outcomeName]) => ({
    id: `group-${family}-${outcomeId}`,
    name: `${titleCase(family)} ${outcomeName}`,
    familyId: family,
    outcomeId,
    sampleToolIds: projectGroupSampleToolIds
  }))
));

const specialTools = [
  FACTCHECKER_TOOL,
  WEBCAM_EXPLORER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  ...PRICE_TOOLS
];

const neededToolSpecs = [
  ["pdf-docx-xlsx-parser", "In-House PDF/DOCX/XLSX Parser", "document-processing", "P0", "Extract text, tables, headings, fields, and metadata from office documents without handing users to outside tool sites.", "document_parser", ["file-notes", "document-text", "table-text"], ["document-text", "tables", "metadata", "field-map"]],
  ["ocr-image-text-extractor", "In-House OCR Image Text Extractor", "document-processing", "P0", "Read scanned receipts, labels, screenshots, forms, and image-only PDFs into text and tables.", "ocr_workbench", ["image-notes", "scan-notes", "screenshot-text"], ["ocr-text", "detected-fields", "confidence-plan"]],
  ["web-page-fetcher-citation-archiver", "In-House Web Page Fetcher & Citation Archiver", "research", "P0", "Fetch allowed pages, save citations, archive snippets, and feed fact-checking or research apps.", "citation_archiver", ["urls", "source-notes", "query"], ["citation-list", "source-archive", "evidence-notes"]],
  ["official-price-api-adapters", "Official Price API Adapter Pack", "shopping-data", "P0", "Use approved vendor APIs or user-provided feeds for live prices, availability, shipping, and historical price checks.", "price_api_adapter", ["product-query", "sku", "feed-notes"], ["price-source-plan", "normalized-offers", "adapter-checklist"]],
  ["product-feed-normalizer", "In-House Product Feed Normalizer", "shopping-data", "P1", "Normalize SKU, UPC, GTIN, options, variants, size, color, seller, and shipping fields from uploaded product feeds.", "product_feed_normalizer", ["product-feed", "csv", "rows"], ["normalized-products", "variant-table", "feed-report"]],
  ["image-batch-editor", "In-House Image Batch Editor", "media", "P1", "Resize, crop, watermark, compress, rename, palette-check, and package image batches locally.", "image_batch_editor", ["image-list", "asset-notes", "settings"], ["image-edit-plan", "rename-map", "export-queue"]],
  ["video-clip-renderer", "In-House Video Clip Renderer", "media", "P1", "Render short clips, visual effects, overlays, transitions, caption tracks, and export queues.", "video_clip_renderer", ["clip-notes", "timeline", "render-settings"], ["render-plan", "clip-queue", "caption-track"]],
  ["audio-transcriber-segmenter", "In-House Audio Transcriber & Segmenter", "media", "P1", "Turn uploaded audio into transcript segments, timestamps, chapters, keywords, and clip notes.", "audio_transcriber", ["audio-notes", "transcript", "timestamps"], ["segments", "chapter-list", "keyword-notes"]],
  ["barcode-qr-scanner-generator", "In-House Barcode/QR Scanner & Generator", "inventory", "P1", "Read and generate item labels, QR codes, batch IDs, shelf tags, asset tags, and packing slips.", "barcode_qr_tool", ["label-rows", "item-list", "ids"], ["label-codes", "qr-plan", "scan-report"]],
  ["calendar-ics-scheduler", "In-House Calendar/ICS Scheduler", "scheduling", "P1", "Import/export ICS, recurring schedules, reminders, appointments, shift calendars, and deadline plans.", "calendar_scheduler", ["dates", "tasks", "schedule-notes"], ["calendar-plan", "ics-rows", "reminders"]],
  ["map-route-geocoder", "In-House Map Route & Geocoder Tool", "location", "P1", "Normalize addresses, geocode locations, cluster stops, estimate route order, and build service-area plans.", "route_geocoder", ["addresses", "stops", "service-area"], ["route-plan", "normalized-addresses", "cluster-report"]],
  ["secure-form-portal", "In-House Secure Form Portal", "forms", "P1", "Turn intake schemas into shareable forms with validation, saved responses, file fields, and export packages.", "secure_form_portal", ["field-schema", "form-notes", "validation-rules"], ["form-schema", "response-template", "portal-plan"]],
  ["local-account-workspace-sync", "In-House Account Workspace Sync", "storage", "P1", "Persist app workspaces, private libraries, approvals, artifacts, versions, and user settings.", "workspace_sync", ["workspace-notes", "artifacts", "settings"], ["sync-plan", "artifact-index", "version-log"]],
  ["signature-approval-capture", "In-House Signature & Approval Capture", "approval", "P2", "Capture typed approvals, signatures, decision logs, version acceptance, and audit trails.", "approval_capture", ["approval-notes", "decision", "signoff"], ["approval-log", "signature-fields", "audit-trail"]],
  ["chart-dashboard-renderer", "In-House Chart & Dashboard Renderer", "visual-reporting", "P2", "Render charts, KPI cards, trend lines, progress boards, and printable dashboards from table outputs.", "dashboard_renderer", ["rows", "metrics", "report-data"], ["dashboard-plan", "chart-specs", "kpi-cards"]],
  ["pii-phi-redaction-tool", "In-House PII/PHI Redaction Tool", "privacy", "P0", "Detect and redact sensitive personal, patient, legal, and financial fields before sharing or exporting.", "redaction_tool", ["document-text", "message", "records"], ["redacted-text", "sensitive-field-report", "privacy-log"]],
  ["email-sms-send-queue", "In-House Email/SMS Send Queue", "communication", "P2", "Queue generated messages for user-approved sending through configured providers.", "send_queue", ["messages", "recipients", "approval"], ["send-queue", "approval-checklist", "delivery-plan"]],
  ["bank-feed-importer", "In-House Bank/Accounting Feed Importer", "finance", "P1", "Import CSV, OFX/QIF-like exports, categorize rows, reconcile duplicates, and build bookkeeping packets.", "bank_feed_importer", ["bank-csv", "transactions", "categories"], ["transaction-table", "reconciliation-report", "bookkeeping-packet"]],
  ["measurement-takeoff-canvas", "In-House Measurement Takeoff Canvas", "field-work", "P2", "Measure drawings/photos, count fixtures, estimate materials, and export takeoff rows.", "measurement_takeoff", ["measurements", "drawing-notes", "materials"], ["takeoff-table", "quantity-estimate", "materials-list"]]
];

export const NEEDED_INHOUSE_TOOL_RECORDS = Object.freeze(neededToolSpecs.map(([id, name, kind, priority, capability, mode, accepts, produces]) => ({
  id,
  name,
  category: "Needed In-House Support Tools",
  engine: "inhouse_support_tool",
  systemLabel: NEEDED_INHOUSE_TOOL_LABEL,
  toolKind: "needed-inhouse-support",
  inHouse: true,
  description: `${name}: ${capability}`,
  tags: unique([
    "in house tool",
    "needed for potential apps",
    "support tool",
    "no outside tool site",
    "browser-side workbench",
    "toolgrid expansion",
    kind,
    priority,
    mode,
    ...accepts,
    ...produces,
    ...name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
  ]),
  searchPhrases: [
    name,
    `${name} in-house`,
    `${name} for potential apps`,
    `build ${name}`,
    capability
  ],
  config: { kind, priority, capability, mode, accepts, produces }
})));

const neededToolById = new Map(NEEDED_INHOUSE_TOOL_RECORDS.map((tool) => [tool.id, tool]));
const miniOperationById = new Map(MINI_APP_OPERATION_FAMILIES.map((operation) => [operation.id, operation]));
const miniSupportToolBySourceId = new Map(MINI_APP_TOOL_RECORDS
  .filter((tool) => tool.id.startsWith("mini-support-"))
  .map((tool) => [tool.id.replace(/^mini-support-/, ""), tool]));
const supportByName = new Map(MINI_APP_SUPPORT_TOOLKIT.map((tool) => [tool.name, miniSupportToolBySourceId.get(tool.id) || tool]));
const supportBySlug = new Map(MINI_APP_SUPPORT_TOOLKIT.map((tool) => [slug(tool.name), miniSupportToolBySourceId.get(tool.id) || tool]));
const miniAppByDomainOperation = new Map(MINI_APP_TOOL_RECORDS
  .filter((tool) => tool.toolKind === "specific-mini-app")
  .map((tool) => [`${slug(tool.config?.domain || tool.compatibility?.domain || "")}:${tool.config?.operationId || tool.compatibility?.operation || ""}`, tool]));

const factoryOperationByIndex = new Map(MASSIVE_TOOL_OPERATIONS.map((operation, index) => [index, operation.label]));
const factoryToolIdByDomainAndLabel = new Map();
for (const domain of MASSIVE_TOOL_DOMAINS) {
  for (const [index, label] of factoryOperationByIndex.entries()) {
    factoryToolIdByDomainAndLabel.set(`${slug(domain.field)}:${label}`, `factory-${slug(domain.field)}-${slug(label)}`);
  }
}

const inHouseToolIdsByToken = new Map();
for (const tool of IN_HOUSE_TOOL_RECORDS) {
  const tokens = unique([
    ...(tool.metadata?.domains || []),
    ...String(tool.category || "").replace(/^In-House\s+/i, "").split(/[^a-z0-9]+/i),
    ...String(tool.name || "").split(/[^a-z0-9]+/i).slice(0, 3)
  ].map(slug));
  for (const token of tokens) {
    if (!token) continue;
    if (!inHouseToolIdsByToken.has(token)) inHouseToolIdsByToken.set(token, []);
    if (inHouseToolIdsByToken.get(token).length < 24) inHouseToolIdsByToken.get(token).push(tool.id);
  }
}

const functionalByOperation = {
  "intake-builder": ["functional-document-outline-extractor"],
  "checklist-generator": ["functional-checklist-builder"],
  planner: ["functional-project-plan-builder"],
  "budget-estimator": ["functional-budget-planner"],
  "comparison-matrix": ["functional-product-shortlist-builder", "functional-price-table-comparer"],
  "inventory-tracker": ["functional-inventory-reorder-calculator"],
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

const advancedBlueprints = [
  ["document-intelligence-suite", "Document Intelligence Suite", "full-app", /document|legal|contract|invoice|tax|bookkeeping|insurance|healthcare|grant|research|real estate|property|compliance/i, ["intake-builder", "report-builder", "risk-auditor", "handoff-pack"], ["pdf-docx-xlsx-parser", "ocr-image-text-extractor", "pii-phi-redaction-tool"], "Upload or paste document packets, extract fields, build summaries, flag risks, and package a clean handoff."],
  ["live-price-intelligence-board", "Live Price Intelligence Board", "program", /ecommerce|retail|shopping|marketplace|price|product|procurement|wholesale|inventory|seller/i, ["comparison-matrix", "budget-estimator", "inventory-tracker", "report-builder"], ["official-price-api-adapters", "product-feed-normalizer", "chart-dashboard-renderer"], "Compare product options, track price movement, normalize feeds, and turn price evidence into buying decisions."],
  ["source-evidence-monitor", "Source Evidence Monitor", "program", /research|news|fact|legal|compliance|grant|academic|policy|social|web analytics|seo/i, ["risk-auditor", "report-builder", "handoff-pack"], ["web-page-fetcher-citation-archiver", "pii-phi-redaction-tool"], "Collect allowed sources, clip evidence, score credibility, and prepare citation-backed reports."],
  ["media-production-pipeline", "Media Production Pipeline", "full-app", /video|audio|music|podcast|youtube|creator|photo|photography|design|media|visual|theme/i, ["planner", "checklist-generator", "message-pack", "handoff-pack"], ["image-batch-editor", "video-clip-renderer", "audio-transcriber-segmenter"], "Plan media work, process assets, generate copy, package exports, and maintain release-ready checklists."],
  ["route-schedule-dispatcher", "Route Schedule Dispatcher", "program", /travel|delivery|route|logistics|transportation|field|landscaping|lawn|hvac|plumbing|event|property|service/i, ["planner", "checklist-generator", "message-pack", "report-builder"], ["map-route-geocoder", "calendar-ics-scheduler", "email-sms-send-queue"], "Build route plans, appointment windows, dispatch messages, and service reports from one intake."],
  ["inventory-label-command-center", "Inventory Label Command Center", "full-app", /inventory|warehouse|retail|marketplace|restaurant|farm|nursery|manufacturing|construction|shipping|grocery|bakery/i, ["inventory-tracker", "budget-estimator", "checklist-generator", "handoff-pack"], ["barcode-qr-scanner-generator", "product-feed-normalizer"], "Track stock, create reorder plans, generate labels, and package inventory handoffs."],
  ["secure-intake-portal", "Secure Intake Portal", "full-app", /client|legal|healthcare|insurance|real estate|loan|banking|hr|hiring|support|customer|tenant|vendor/i, ["intake-builder", "message-pack", "risk-auditor", "handoff-pack"], ["secure-form-portal", "local-account-workspace-sync", "pii-phi-redaction-tool"], "Turn intake schemas into shareable forms, collect responses, redact sensitive data, and generate next steps."],
  ["approval-and-signoff-room", "Approval & Signoff Room", "program", /client|compliance|legal|construction|vendor|procurement|quality|qa|project|grant|design|agency/i, ["report-builder", "risk-auditor", "handoff-pack"], ["signature-approval-capture", "local-account-workspace-sync"], "Package decisions, collect approvals, record change history, and create audit-ready signoff packets."],
  ["finance-import-reconciliation-desk", "Finance Import Reconciliation Desk", "program", /finance|bookkeeping|tax|loan|banking|budget|invoice|payroll|expense|grant/i, ["budget-estimator", "comparison-matrix", "report-builder", "handoff-pack"], ["bank-feed-importer", "pdf-docx-xlsx-parser", "chart-dashboard-renderer"], "Import finance rows, reconcile duplicates, build budget scenarios, and export review packets."],
  ["field-measurement-estimator", "Field Measurement Estimator", "full-app", /construction|contractor|landscaping|lawn|hvac|plumbing|property|real estate|shed|greenhouse|home|maintenance/i, ["intake-builder", "budget-estimator", "comparison-matrix", "report-builder"], ["measurement-takeoff-canvas", "image-batch-editor"], "Capture dimensions, estimate quantities, compare material options, and produce field-ready reports."]
].map(([id, name, type, match, operations, needed, description]) => ({ id, name, type, match, operations, needed, description }));

function buildDomains() {
  const domains = new Map();
  const add = (name, source, extras = {}) => {
    const key = slug(name);
    if (!key) return;
    const current = domains.get(key) || { name, slug: key, sources: [], macro: "", tags: [] };
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
    if (category.length > 2) add(category, "in-house-category");
  }
  return [...domains.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function buildOperationBundles() {
  const bundles = [];
  for (let i = 0; i < MINI_APP_OPERATION_FAMILIES.length; i += 1) {
    for (let j = i + 1; j < MINI_APP_OPERATION_FAMILIES.length; j += 1) {
      const a = MINI_APP_OPERATION_FAMILIES[i];
      const b = MINI_APP_OPERATION_FAMILIES[j];
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
    bundles.push({ id: slug(name), name, type, category: "curated-chain", operations: [a, b, c], description: `Chains ${[a, b, c].map((id) => miniOperationById.get(id)?.name).filter(Boolean).join(", ")} into one guided workspace.` });
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
    bundles.push({ id: slug(name), name, type: "program", category: "multi-stage-program", operations, description: `Connects ${operations.length} current mini-app operation families into one guided workspace.` });
  }
  return bundles;
}

function selectMiniApps(domain, operations) {
  return operations.map((operation) => miniAppByDomainOperation.get(`${domain.slug}:${operation}`)?.id).filter(Boolean);
}

function selectSupportTools(operations) {
  const names = unique(operations.flatMap((id) => miniOperationById.get(id)?.deps || []));
  return names.map((name) => supportByName.get(name) || supportBySlug.get(slug(name))).filter(Boolean).map((tool) => tool.id);
}

function selectFunctionalTools(operations) {
  return unique(operations.flatMap((id) => functionalByOperation[id] || [])).filter((id) => FUNCTIONAL_TOOL_RECORDS.some((tool) => tool.id === id));
}

function selectFactoryTools(domain, operations, limit = 8) {
  return unique(operations.flatMap((id) => factoryLabelsByOperation[id] || [])
    .map((label) => factoryToolIdByDomainAndLabel.get(`${domain.slug}:${label}`))
    .filter(Boolean)).slice(0, limit);
}

function selectInHouseTools(domain, operations, limit = 4) {
  const tokens = unique([domain.slug, ...domain.slug.split("-"), ...operations.flatMap((id) => id.split("-"))]);
  const ids = [];
  for (const token of tokens) ids.push(...(inHouseToolIdsByToken.get(token) || []));
  return unique(ids).slice(0, limit);
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
    if (blueprint.match.test(text) && (bundle.id === blueprint.id || /program|suite|pipeline|portal|monitor|board|center|desk|room|estimator/.test(bundle.name.toLowerCase()))) needed.push(...blueprint.needed);
  }
  return unique([...(bundle.needed || []), ...needed]).filter((id) => neededToolById.has(id));
}

function buildPotentialAppRecords() {
  const existingSlugs = new Set([
    ...FUNCTIONAL_TOOL_RECORDS.map((tool) => slug(tool.name)),
    ...MINI_APP_TOOL_RECORDS.map((tool) => slug(tool.name)),
    ...specialTools.map((tool) => slug(tool.name))
  ]);
  const rows = [];
  const seen = new Set();
  const addRow = (domain, bundle, source = "operation-bundle") => {
    const name = `${domain.name} ${bundle.name}`;
    const ideaSlug = slug(name);
    if (!ideaSlug || existingSlugs.has(ideaSlug) || seen.has(ideaSlug)) return;
    seen.add(ideaSlug);
    const operations = bundle.operations || [];
    const neededIds = neededToolsFor(domain, bundle);
    const operationNames = operations.map((id) => miniOperationById.get(id)?.name || titleCase(id));
    const currentTools = unique([
      ...selectMiniApps(domain, operations),
      ...selectSupportTools(operations),
      ...selectFunctionalTools(operations),
      ...selectFactoryTools(domain, operations),
      ...selectInHouseTools(domain, operations),
      ...selectSpecialTools(domain, bundle),
      ...neededIds
    ]).slice(0, 30);
    const readiness = neededIds.length
      ? "ready-with-new-support-tools"
      : selectMiniApps(domain, operations).length === operations.length
        ? "ready-now"
        : selectFactoryTools(domain, operations).length
          ? "factory-and-skeleton-ready"
          : "skeleton-ready";
    const appType = neededIds.length && bundle.type === "mini-app" ? "full-app" : bundle.type;
    rows.push({
      id: `potential-${ideaSlug}`,
      name,
      category: appType === "program" ? "Generated Programs" : appType === "full-app" ? "Generated Full Apps" : "Generated Mini Apps",
      engine: "potential_app",
      systemLabel: POTENTIAL_APP_LABEL,
      toolKind: appType,
      potentialAppGenerated: true,
      description: `${bundle.description} Built only from in-house tools, in-house skeletons, and in-house support tools.`,
      tags: unique([
        "in house app",
        "potential app",
        "generated app",
        "no outside tool site",
        "toolgrid expansion",
        appType,
        readiness,
        domain.name,
        domain.slug,
        bundle.category,
        ...operationNames,
        ...currentTools.slice(0, 12),
        ...neededIds
      ]),
      searchPhrases: [
        name,
        `${domain.name} ${appType}`,
        `${domain.name} ${operationNames.join(" ")}`,
        `make ${name}`,
        `in-house ${name}`
      ],
      config: {
        appType,
        domain: domain.name,
        domainSources: domain.sources,
        source,
        category: bundle.category || "generated-combination",
        readiness,
        operations,
        operationNames,
        currentTools,
        skeletonPatterns: unique(operations.flatMap((id) => skeletonPatternsByOperation[id] || ["functional-mini-app"])),
        neededToolIds: neededIds,
        neededTools: neededIds.map((id) => neededToolById.get(id)?.name || titleCase(id)),
        synergyChain: operationNames.join(" -> "),
        noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site"
      }
    });
  };
  const domains = buildDomains();
  const operationBundles = buildOperationBundles();
  for (const domain of domains) {
    for (const bundle of operationBundles) addRow(domain, bundle);
    for (const blueprint of advancedBlueprints) {
      if (blueprint.match.test(`${domain.name} ${domain.macro} ${domain.tags.join(" ")}`)) {
        addRow(domain, {
          id: blueprint.id,
          name: blueprint.name,
          type: blueprint.type,
          category: "support-tool-enabled",
          operations: blueprint.operations,
          needed: blueprint.needed,
          description: blueprint.description
        }, "advanced-support-tool-blueprint");
      }
    }
  }
  const groupsByFamily = new Map();
  for (const group of PROJECT_TOOL_GROUPS) {
    if (!groupsByFamily.has(group.familyId)) groupsByFamily.set(group.familyId, []);
    groupsByFamily.get(group.familyId).push(group);
  }
  for (const field of PROJECT_FIELDS.map((name) => ({ name, slug: slug(name), sources: ["project-field"], macro: "Project Programs", tags: [] }))) {
    for (const [family, groups] of groupsByFamily.entries()) {
      const name = `${field.name} ${titleCase(family)} Operating System`;
      const ideaSlug = slug(name);
      if (existingSlugs.has(ideaSlug) || seen.has(ideaSlug)) continue;
      seen.add(ideaSlug);
      const neededIds = /collaboration|approval|client|legal|health|insurance|finance/.test(`${family} ${field.name}`.toLowerCase())
        ? ["local-account-workspace-sync", "signature-approval-capture"]
        : [];
      rows.push({
        id: `potential-${ideaSlug}`,
        name,
        category: "Generated Programs",
        engine: "potential_app",
        systemLabel: POTENTIAL_APP_LABEL,
        toolKind: "program",
        potentialAppGenerated: true,
        description: `Combines existing ${family} project workflow groups into a dedicated operating system for ${field.name}.`,
        tags: unique([
          "in house app",
          "generated program",
          "operating system",
          "workflow program",
          "project groups",
          "ready workspace",
          "no outside tool site",
          "toolgrid expansion",
          "multi workflow",
          "symbiotic tools",
          field.name,
          field.slug,
          family,
          ...groups.slice(0, 5).map((group) => group.name),
          ...neededIds
        ]),
        searchPhrases: [name, `${field.name} ${family} program`, `in-house ${name}`],
        config: {
          appType: "program",
          domain: field.name,
          domainSources: field.sources,
          source: "project-tool-group-cross-reference",
          category: "operating-system-program",
          readiness: neededIds.length ? "ready-with-new-support-tools" : "ready-now",
          operations: groups.slice(0, 5).map((group) => group.id),
          operationNames: groups.slice(0, 5).map((group) => group.name),
          currentTools: unique([...groups.flatMap((group) => group.sampleToolIds || []), ...neededIds]).slice(0, 30),
          skeletonPatterns: ["functional-mini-app", "transformer", "report-table", "structured-data"],
          neededToolIds: neededIds,
          neededTools: neededIds.map((id) => neededToolById.get(id)?.name || titleCase(id)),
          synergyChain: groups.slice(0, 5).map((group) => group.id).join(" -> "),
          noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site"
        }
      });
    }
  }
  return rows;
}

export const POTENTIAL_APP_RECORDS = Object.freeze(buildPotentialAppRecords());

function buildProductionStreamActivationRecords() {
  const unlockedApps = POTENTIAL_APP_RECORDS.filter((app) => app.config?.readiness === "ready-with-new-support-tools");
  return unlockedApps.map((app, index) => {
    const appConfig = app.config || {};
    const sourceSlug = slug(app.name);
    const supportToolIds = appConfig.neededToolIds || [];
    const supportToolNames = appConfig.neededTools || supportToolIds.map((id) => neededToolById.get(id)?.name || titleCase(id));
    const batchId = productionBatchId(index);
    const operationNames = unique([
      "Production Intake",
      "Support Tool Wiring",
      ...(appConfig.operationNames || []).slice(0, 10),
      "Validation Pass",
      "Launch Handoff"
    ]);
    const operations = unique([
      "production-intake",
      "support-tool-wiring",
      ...(appConfig.operations || []),
      "validation-pass",
      "launch-handoff"
    ]);
    const currentTools = unique([
      ...supportToolIds,
      ...(appConfig.currentTools || [])
    ]).slice(0, 48);

    return {
      id: `production-${sourceSlug}-support-pack`,
      name: `${app.name} Support-Unlocked Production Pack`,
      category: "Production Stream Build Packs",
      engine: "potential_app",
      systemLabel: PRODUCTION_STREAM_LABEL,
      toolKind: "production-pack",
      potentialAppGenerated: true,
      productionStreamGenerated: true,
      description: `Production build package for ${app.name}. It wires the newly made in-house support tools into a launchable workflow without embedding outside tool sites.`,
      tags: unique([
        ...(app.tags || []),
        "production stream",
        "continuous production batch",
        "support unlocked",
        "build pack",
        "launch pack",
        "34k production layer",
        batchId,
        appConfig.appType,
        appConfig.domain,
        appConfig.source,
        ...supportToolIds,
        ...supportToolNames
      ]),
      searchPhrases: [
        `${app.name} production pack`,
        `${app.name} support unlocked`,
        `${appConfig.domain || "domain"} production stream`,
        `${supportToolNames.join(" ")} ${app.name}`,
        `make ${app.name} with support tools`
      ],
      config: {
        appType: "production-pack",
        sourceAppType: appConfig.appType || app.toolKind || "app",
        domain: appConfig.domain || "General",
        domainSources: appConfig.domainSources || [],
        source: "support-tool-production-activation",
        sourcePotentialAppId: app.id,
        sourceReadiness: appConfig.readiness,
        category: "production-stream-activation",
        readiness: "production-stream-ready",
        productionSequence: index + 1,
        productionBatchId: batchId,
        productionBatchSize: PRODUCTION_STREAM_BATCH_SIZE,
        operations,
        operationNames,
        currentTools,
        skeletonPatterns: unique([...(appConfig.skeletonPatterns || []), "support-capability", "functional-mini-app", "structured-data"]),
        neededToolIds: supportToolIds,
        neededTools: supportToolNames,
        synergyChain: operationNames.join(" -> "),
        noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site",
        productionOutputs: [
          "support-tool-wired app intake",
          "launch checklist",
          "validation notes",
          "handoff package",
          "next batch routing"
        ]
      }
    };
  });
}

export const PRODUCTION_STREAM_ACTIVATION_RECORDS = Object.freeze(buildProductionStreamActivationRecords());
export const PRODUCTION_STREAM_MADE_RECORDS = Object.freeze([...POTENTIAL_APP_RECORDS, ...PRODUCTION_STREAM_ACTIVATION_RECORDS]);

export function buildProductionStreamBatches({ batchSize = PRODUCTION_STREAM_BATCH_SIZE } = {}) {
  const size = Math.max(1, Number(batchSize) || PRODUCTION_STREAM_BATCH_SIZE);
  const batches = [];
  for (let start = 0; start < PRODUCTION_STREAM_MADE_RECORDS.length; start += size) {
    const records = PRODUCTION_STREAM_MADE_RECORDS.slice(start, start + size);
    const byType = {};
    for (const record of records) {
      const type = record.config?.appType || record.toolKind || "app";
      byType[type] = (byType[type] || 0) + 1;
    }
    batches.push({
      id: productionBatchId(start, size),
      sequence: batches.length + 1,
      start: start + 1,
      end: start + records.length,
      count: records.length,
      supportUnlockedCount: records.filter((record) => record.config?.readiness === "ready-with-new-support-tools" || record.config?.sourceReadiness === "ready-with-new-support-tools").length,
      activationPackCount: records.filter((record) => record.productionStreamGenerated).length,
      byType,
      sampleIds: records.slice(0, 8).map((record) => record.id)
    });
  }
  return batches;
}

export function getInHouseSupportDefaultInputs(tool = {}) {
  return {
    text: "Customer Jane Example called 555-123-4567 about invoice INV-1001. Total $420.00. Follow up Friday.",
    rows: "item,qty,cost\nLabels,12,4.5\nJars,8,1.2\nBoxes,5,2.1",
    urls: "https://example.com/source-one\nhttps://example.com/source-two",
    settings: tool.config?.capability || "Build an in-house support workflow for ToolGrid."
  };
}

export function getInHouseSupportToolSchema() {
  return [
    { name: "text", label: "Text / notes", type: "textarea" },
    { name: "rows", label: "Rows / table data", type: "textarea" },
    { name: "urls", label: "URLs / source list", type: "textarea" },
    { name: "settings", label: "Settings / goal", type: "textarea" }
  ];
}

export function runInHouseSupportTool(tool = {}, inputs = {}) {
  const mode = tool.config?.mode || "support_tool";
  const text = String(inputs.text || "");
  const rowLines = lines(inputs.rows);
  const urlLines = lines(inputs.urls);
  const settings = String(inputs.settings || tool.config?.capability || "");
  const redact = (value) => String(value)
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .replace(/\b(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b/g, "[redacted-phone]")
    .replace(/\b\d{3}-\d{2}-\d{4}\b/g, "[redacted-ssn]")
    .replace(/\b(?:\d[ -]*?){13,16}\b/g, "[redacted-card]");
  const numberTotal = rowLines.slice(1).reduce((sum, row) => {
    const nums = row.split(",").map(Number).filter(Number.isFinite);
    return sum + nums.reduce((a, b) => a + b, 0);
  }, 0);

  switch (mode) {
    case "redaction_tool":
      return [`# ${tool.name}`, redact(text), "", `Fields scanned: email, phone, SSN, card-like numbers`, `Original length: ${text.length}`, `Redacted length: ${redact(text).length}`].join("\n");
    case "document_parser":
      return [`# ${tool.name}`, `Sections found: ${lines(text).length}`, `Table rows found: ${Math.max(0, rowLines.length - 1)}`, `Likely fields: ${unique([...text.matchAll(/\b[A-Z][A-Za-z]+:/g)].map((m) => m[0].replace(":", ""))).join(", ") || "none detected"}`, `Output: document-text + tables + field-map`].join("\n");
    case "product_feed_normalizer":
    case "bank_feed_importer":
      return [`# ${tool.name}`, `Rows imported: ${Math.max(0, rowLines.length - 1)}`, `Numeric total signal: ${money(numberTotal)}`, `Normalized headers: ${rowLines[0] || "none"}`, `Next output: ${tool.config?.produces?.join(", ")}`].join("\n");
    case "citation_archiver":
      return [`# ${tool.name}`, `Sources queued: ${urlLines.length}`, ...urlLines.slice(0, 8).map((url, index) => `${index + 1}. ${url} — citation slot ready`), `Policy: fetch/archive only allowed sources; no embedded outside tool UI.`].join("\n");
    case "price_api_adapter":
      return [`# ${tool.name}`, `Product query: ${text || settings}`, `Adapters: official APIs, uploaded feeds, user-approved source lists`, `Offer normalization fields: sku, seller, price, shipping, availability, timestamp`, `No scraping or embedded outside tool site.`].join("\n");
    case "ocr_workbench":
    case "image_batch_editor":
    case "video_clip_renderer":
    case "audio_transcriber":
      return [`# ${tool.name}`, `Workbench queue prepared.`, `Input notes: ${text || settings}`, `Rows/assets listed: ${Math.max(rowLines.length, urlLines.length)}`, `Output plan: ${tool.config?.produces?.join(", ")}`].join("\n");
    case "barcode_qr_tool":
      return [`# ${tool.name}`, ...rowLines.slice(0, 12).map((row, index) => `Label ${index + 1}: ${slug(row).slice(0, 32) || `item-${index + 1}`}`), `Generated locally as label-code plan.`].join("\n");
    case "calendar_scheduler":
    case "route_geocoder":
    case "secure_form_portal":
    case "workspace_sync":
    case "approval_capture":
    case "dashboard_renderer":
    case "send_queue":
    case "measurement_takeoff":
    default:
      return [`# ${tool.name}`, `Goal: ${settings}`, `Inputs: ${lines(text).length} note lines, ${Math.max(0, rowLines.length - 1)} data rows, ${urlLines.length} URLs`, `Produces: ${tool.config?.produces?.join(", ")}`, `Status: in-house workbench ready for generated apps.`].join("\n");
  }
}

export function getPotentialAppDefaultInputs(tool = {}) {
  return {
    goal: `Build and run ${tool.name || "this in-house app"} for a real project.`,
    projectNotes: "Raw notes, rows, URLs, dates, budget limits, customer messages, and decision criteria go here.",
    uploadedFileNotes: "Attach source files, reference images, spreadsheets, documents, audio/video, or CAD/model files that this app should use.",
    maxPanels: 8
  };
}

export function getPotentialAppToolSchema(tool = {}) {
  const appType = tool.config?.appType || tool.toolKind || "app";
  const uploadLabel = appType === "production-pack"
    ? "Production pack files / handoff assets"
    : appType === "program"
      ? "Program files / references"
      : appType === "full-app"
        ? "Full-app files / source package"
        : "Mini-app files / references";
  return [
    {
      name: "programFiles",
      label: uploadLabel,
      type: "file",
      multiple: true,
      accept: "image/*,audio/*,video/*,.pdf,.csv,.tsv,.json,.txt,.md,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.glb,.gltf,.obj,.stl,.step,.stp,.dwg,.dxf"
    },
    { name: "goal", label: "Goal", type: "textarea" },
    { name: "projectNotes", label: "Project notes / input", type: "textarea" },
    { name: "uploadedFileNotes", label: "Uploaded file notes", type: "textarea" },
    { name: "maxPanels", label: "Panels to prepare", type: "number" }
  ];
}

export function runPotentialAppTool(tool = {}, inputs = {}) {
  const config = tool.config || {};
  const maxPanels = Math.max(1, Math.min(64, Number(inputs.maxPanels || 8)));
  const operations = config.operationNames || [];
  const currentTools = config.currentTools || [];
  const neededTools = config.neededTools || [];
  const uploadedFiles = lines(inputs.programFiles);
  const uploadedNotes = String(inputs.uploadedFileNotes || "");
  const panels = operations.slice(0, maxPanels).map((operation, index) => {
    const toolId = currentTools[index % Math.max(1, currentTools.length)] || "in-house-workflow-slot";
    return `${index + 1}. ${operation} — ${toolId}`;
  });
  return [
    `# ${tool.name}`,
    `Type: ${config.appType || tool.toolKind || "app"}`,
    `Domain: ${config.domain || "General"}`,
    `Readiness: ${config.readiness || "ready-now"}`,
    `Policy: ${config.noOutsideToolPolicy || "in-house implementation only"}`,
    `Goal: ${inputs.goal || "Run this app"}`,
    `Synergy chain: ${config.synergyChain || operations.join(" -> ")}`,
    `Current in-house tools wired: ${currentTools.length}`,
    neededTools.length ? `New support tools included: ${neededTools.join(", ")}` : "New support tools included: none required",
    `Uploaded files attached: ${uploadedFiles.length}`,
    uploadedNotes ? `Upload notes: ${uploadedNotes}` : "Upload notes: ready for source files, references, and project assets",
    "",
    "## Workspace Panels",
    ...(panels.length ? panels : ["1. In-house workflow slot"]),
    "",
    "## Output Pack",
    "- app intake",
    "- runnable workflow checklist",
    "- generated report/handoff shell",
    "- next-tool routing map"
  ].join("\n");
}

export function buildExpansionToolsSummary() {
  const byReadiness = {};
  const byType = {};
  for (const app of POTENTIAL_APP_RECORDS) {
    byReadiness[app.config.readiness] = (byReadiness[app.config.readiness] || 0) + 1;
    byType[app.config.appType] = (byType[app.config.appType] || 0) + 1;
  }
  const productionBatches = buildProductionStreamBatches();
  const supportUnlockedAppCount = byReadiness["ready-with-new-support-tools"] || 0;
  return {
    version: EXPANSION_TOOLS_VERSION,
    neededToolCount: NEEDED_INHOUSE_TOOL_RECORDS.length,
    potentialAppCount: POTENTIAL_APP_RECORDS.length,
    supportUnlockedAppCount,
    productionActivationCount: PRODUCTION_STREAM_ACTIVATION_RECORDS.length,
    productionStreamMadeCount: PRODUCTION_STREAM_MADE_RECORDS.length,
    productionStreamTargetCount: PRODUCTION_STREAM_TARGET_COUNT,
    productionBatchCount: productionBatches.length,
    totalExpansionRecords: NEEDED_INHOUSE_TOOL_RECORDS.length + POTENTIAL_APP_RECORDS.length + PRODUCTION_STREAM_ACTIVATION_RECORDS.length,
    byReadiness,
    byType,
    summary: `${NEEDED_INHOUSE_TOOL_RECORDS.length} needed in-house support tools, ${POTENTIAL_APP_RECORDS.length.toLocaleString()} generated mini/full/program app records, and ${PRODUCTION_STREAM_ACTIVATION_RECORDS.length.toLocaleString()} support-unlocked production packs.`
  };
}

export function verifyExpansionToolsSuite({ knownEngines = [] } = {}) {
  const errors = [];
  const engineSet = new Set(knownEngines);
  const ids = new Set();
  const sourceAppIds = new Set(POTENTIAL_APP_RECORDS.map((tool) => tool.id));
  for (const tool of [...NEEDED_INHOUSE_TOOL_RECORDS, ...POTENTIAL_APP_RECORDS, ...PRODUCTION_STREAM_ACTIVATION_RECORDS]) {
    if (ids.has(tool.id)) errors.push(`duplicate expansion id ${tool.id}`);
    ids.add(tool.id);
    if (engineSet.size && !engineSet.has(tool.engine)) errors.push(`${tool.id} uses unknown engine ${tool.engine}`);
    if ((tool.tags || []).length < 8) errors.push(`${tool.id} needs dense tags`);
    if (tool.productionStreamGenerated && !sourceAppIds.has(tool.config?.sourcePotentialAppId)) errors.push(`${tool.id} points at a missing source app`);
  }
  if (NEEDED_INHOUSE_TOOL_RECORDS.length !== NEEDED_INHOUSE_TOOL_TARGET_COUNT) errors.push(`expected ${NEEDED_INHOUSE_TOOL_TARGET_COUNT} needed tools, got ${NEEDED_INHOUSE_TOOL_RECORDS.length}`);
  if (POTENTIAL_APP_RECORDS.length !== POTENTIAL_APP_TARGET_COUNT) errors.push(`expected ${POTENTIAL_APP_TARGET_COUNT} potential apps, got ${POTENTIAL_APP_RECORDS.length}`);
  if (PRODUCTION_STREAM_ACTIVATION_RECORDS.length !== SUPPORT_UNLOCKED_APP_TARGET_COUNT) errors.push(`expected ${SUPPORT_UNLOCKED_APP_TARGET_COUNT} support-unlocked production packs, got ${PRODUCTION_STREAM_ACTIVATION_RECORDS.length}`);
  if (PRODUCTION_STREAM_MADE_RECORDS.length !== PRODUCTION_STREAM_TARGET_COUNT) errors.push(`expected ${PRODUCTION_STREAM_TARGET_COUNT} production stream records, got ${PRODUCTION_STREAM_MADE_RECORDS.length}`);
  return { ok: errors.length === 0, errors, stats: buildExpansionToolsSummary() };
}

export function searchPotentialApps(query = "", { limit = 24 } = {}) {
  const q = String(query).toLowerCase();
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  return POTENTIAL_APP_RECORDS
    .map((tool) => {
      const haystack = `${tool.name} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`.toLowerCase();
      let score = 0;
      for (const token of tokens) if (haystack.includes(token)) score += token.length > 4 ? 3 : 1;
      if (tool.config?.readiness === "ready-now") score += 1;
      return { tool, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function searchProductionStreamApps(query = "", { limit = 24 } = {}) {
  const q = String(query).toLowerCase();
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  return PRODUCTION_STREAM_MADE_RECORDS
    .map((tool) => {
      const haystack = `${tool.name} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`.toLowerCase();
      let score = 0;
      for (const token of tokens) if (haystack.includes(token)) score += token.length > 4 ? 3 : 1;
      if (tool.productionStreamGenerated) score += 2;
      if (tool.config?.readiness === "production-stream-ready") score += 1;
      return { tool, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}
