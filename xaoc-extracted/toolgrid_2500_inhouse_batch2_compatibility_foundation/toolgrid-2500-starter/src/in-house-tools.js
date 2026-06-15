const normalize = (value) => String(value || "").toLowerCase().trim();
const slugify = (value) => normalize(value)
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export const IN_HOUSE_TOOLS_VERSION = "2026-06-13-in-house-tools-compatibility-v2-batch2";
export const IN_HOUSE_TOOL_TARGET_COUNT = 160;

const sharedSearchTerms = [
  "in house tool",
  "native browser tool",
  "project workflow",
  "waterfall task",
  "compatible tool",
  "project bus",
  "automation",
  "toolgrid"
];

const domainTerms = {
  intake: ["prompt", "brief", "goal", "project setup", "requirements", "clarify", "planning", "ai mode"],
  data: ["csv", "json", "spreadsheet", "table", "data cleanup", "file translator", "documentation", "records"],
  labels: ["labels", "tags", "qr", "batch", "print", "inventory", "packaging", "identifier"],
  communication: ["email", "reply", "customer", "message", "subject", "follow up", "support", "tone"],
  report: ["report", "summary", "outline", "markdown", "presentation", "review", "approval", "export"],
  marketing: ["seo", "utm", "keyword", "metadata", "campaign", "content", "web", "traffic"],
  finance: ["invoice", "quote", "pricing", "margin", "payment", "revenue", "cost", "business"],
  agriculture: ["mushroom", "farm", "substrate", "harvest", "contamination", "grow", "plant", "recipe"],
  developer: ["developer", "code", "json", "security", "password", "uuid", "encode", "debug"],
  collaboration: ["colab", "review", "approval", "share", "drive", "dropbox", "team", "handoff"],
  visual: ["theme", "sound", "animation", "ui signal", "completion", "status", "progress", "experience"],
  documents: ["document", "pdf", "docx", "attachment", "file notes", "summary", "review", "version"],
  media: ["image", "media", "asset", "alt text", "caption", "gallery", "brand", "preview"],
  seo: ["seo", "search", "title", "meta", "keyword", "page", "blog", "traffic"],
  ecommerce: ["product", "sku", "catalog", "order", "discount", "price", "launch", "sales"],
  operations: ["operations", "sop", "shift", "maintenance", "inventory", "work order", "incident", "safety"],
  education: ["lesson", "course", "quiz", "training", "student", "study", "learning", "feedback"],
  client: ["client", "agency", "proposal", "deliverable", "handoff", "approval", "feedback", "brief"],
  compliance: ["policy", "audit", "compliance", "retention", "approval gate", "risk", "checklist", "records"],
  research: ["research", "survey", "experiment", "insight", "notes", "analytics", "ab test", "data study"]
};

const addDenseTags = (definition) => {
  const domains = definition.domains || [];
  const contractTerms = [
    ...(definition.accepts || []),
    ...(definition.produces || []),
    ...(definition.needs || []),
    ...(definition.waterfallSignals || [])
  ];
  const generated = [
    definition.name,
    definition.id,
    definition.category,
    definition.engine,
    definition.purpose,
    ...sharedSearchTerms,
    ...domains.flatMap((domain) => domainTerms[domain] || []),
    ...contractTerms,
    ...(definition.tags || [])
  ];
  const tags = [...new Set(generated.map((term) => normalize(term)).filter(Boolean))].slice(0, 40);
  const searchPhrases = [...new Set([
    `${definition.name} tool`,
    `${definition.name} for projects`,
    `${definition.purpose}`,
    `${definition.category} workflow tool`,
    `find a tool to ${definition.purpose}`,
    `use ${definition.name} in waterfall queue`,
    `project tool that accepts ${(definition.accepts || []).join(" and ")}`,
    `project tool that creates ${(definition.produces || []).join(" and ")}`,
    ...domains.flatMap((domain) => [
      `${domain} workflow`,
      `${domain} project tools`,
      `${domain} automation helper`
    ]),
    ...(definition.searchPhrases || [])
  ].map((term) => String(term).trim()).filter(Boolean))].slice(0, 28);
  return { ...definition, tags, searchPhrases };
};

const makeTool = ({
  name,
  category,
  engine,
  config = {},
  purpose,
  domains,
  accepts,
  produces,
  needs = [],
  parallelSafe = true,
  requiresApproval = false,
  waterfallSignals = ["ready", "running", "complete"],
  searchPhrases = [],
  tags = []
}) => addDenseTags({
  id: slugify(name),
  name,
  category,
  engine,
  config,
  purpose,
  domains,
  accepts,
  produces,
  needs,
  parallelSafe,
  requiresApproval,
  waterfallSignals,
  searchPhrases,
  tags
});

const rawTools = [
  makeTool({ name: "Project Brief Cleaner", category: "In-House Intake", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean a messy project prompt so other tools receive a clear brief", domains: ["intake"], accepts: ["prompt", "text", "project-brief"], produces: ["clean-brief", "text"] }),
  makeTool({ name: "Project Name Slug Builder", category: "In-House Intake", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn the project idea into a safe project id or folder name", domains: ["intake", "collaboration"], accepts: ["prompt", "project-title", "text"], produces: ["project-slug", "folder-name", "text"] }),
  makeTool({ name: "Clarifying Question Draft Cleaner", category: "In-House Intake", engine: "text_transform", config: { mode: "sentencecase" }, purpose: "clean follow-up questions before they are shown to the user", domains: ["intake"], accepts: ["clarifying-question", "prompt", "text"], produces: ["clean-question", "text"], requiresApproval: true, waterfallSignals: ["needs-review", "ready", "complete"] }),
  makeTool({ name: "Prompt Search Keyword Finder", category: "In-House Intake", engine: "keyword_density", purpose: "find important words in a prompt so the search engine can choose tools", domains: ["intake", "data"], accepts: ["prompt", "clean-brief", "text"], produces: ["search-keywords", "tool-search-terms"] }),
  makeTool({ name: "Project Task List Numberer", category: "In-House Intake", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn project parts into a numbered waterfall task list", domains: ["intake", "report"], accepts: ["task-list", "prompt", "text"], produces: ["numbered-task-list", "waterfall-outline"] }),
  makeTool({ name: "Project Task Deduper", category: "In-House Intake", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove duplicate tasks before the waterfall queue is created", domains: ["intake", "data"], accepts: ["task-list", "waterfall-outline", "text"], produces: ["deduped-task-list", "waterfall-outline"] }),
  makeTool({ name: "Project Task Sorter", category: "In-House Intake", engine: "list_transform", config: { mode: "sort_az" }, purpose: "sort task names for review when the user wants a clean project list", domains: ["intake", "report"], accepts: ["task-list", "deduped-task-list", "text"], produces: ["sorted-task-list", "waterfall-outline"] }),
  makeTool({ name: "Project Scope Word Counter", category: "In-House Intake", engine: "text_stats", purpose: "measure how large the prompt is before deciding whether to split the project", domains: ["intake"], accepts: ["prompt", "clean-brief", "text"], produces: ["scope-stats", "project-complexity-signal"] }),

  makeTool({ name: "Uploaded File Summary Table Builder", category: "In-House Data", engine: "markdown_table", purpose: "turn uploaded file notes into a simple table for the project bus", domains: ["data", "report"], accepts: ["uploaded-file-summary", "csv", "text"], produces: ["file-summary-table", "markdown-table", "table"] }),
  makeTool({ name: "CSV Intake To JSON Converter", category: "In-House Data", engine: "csv_tool", config: { mode: "csv_to_json" }, purpose: "convert uploaded CSV rows into JSON so downstream tools can reuse the data", domains: ["data"], accepts: ["csv", "spreadsheet", "file-preview"], produces: ["json", "structured-data", "records"] }),
  makeTool({ name: "JSON Records Formatter", category: "In-House Data", engine: "json_tool", config: { mode: "format" }, purpose: "format JSON records so humans and other tools can read them", domains: ["data", "developer"], accepts: ["json", "structured-data", "records"], produces: ["formatted-json", "structured-data", "text"] }),
  makeTool({ name: "JSON Keys Inspector", category: "In-House Data", engine: "json_tool", config: { mode: "keys" }, purpose: "list available data fields before labels, reports, or emails are created", domains: ["data", "developer"], accepts: ["json", "structured-data", "records"], produces: ["field-list", "schema-summary", "text"] }),
  makeTool({ name: "JSON To CSV Exporter", category: "In-House Data", engine: "csv_tool", config: { mode: "json_to_csv" }, purpose: "turn structured project records back into a spreadsheet-style export", domains: ["data", "report"], accepts: ["json", "structured-data", "records"], produces: ["csv", "spreadsheet", "export-table"] }),
  makeTool({ name: "CSV Row Cleanup Trimmer", category: "In-House Data", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean spacing in pasted CSV or spreadsheet previews", domains: ["data"], accepts: ["csv", "spreadsheet", "text"], produces: ["clean-csv", "text"] }),
  makeTool({ name: "Data Field Label Titlecaser", category: "In-House Data", engine: "text_transform", config: { mode: "titlecase" }, purpose: "make field labels readable before reports or labels are generated", domains: ["data", "labels"], accepts: ["field-list", "schema-summary", "text"], produces: ["readable-field-labels", "label-fields", "text"] }),
  makeTool({ name: "Data Table Markdown Builder", category: "In-House Data", engine: "markdown_table", purpose: "turn rows or field lists into a readable markdown table", domains: ["data", "report"], accepts: ["csv", "field-list", "records", "text"], produces: ["markdown-table", "report-section", "table"] }),

  makeTool({ name: "Batch ID UUID Generator", category: "In-House Labels", engine: "uuid_generator", purpose: "create a unique batch id for labels, reports, or tracking", domains: ["labels", "developer"], accepts: ["prompt", "batch-data", "text"], produces: ["batch-id", "identifier", "text"] }),
  makeTool({ name: "Batch Label Slug Generator", category: "In-House Labels", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn a batch name into a clean printable label slug", domains: ["labels", "agriculture"], accepts: ["batch-data", "label-fields", "text"], produces: ["label-slug", "label-data", "text"] }),
  makeTool({ name: "Batch Label Table Builder", category: "In-House Labels", engine: "markdown_table", purpose: "create a table of label fields for batch tags or print sheets", domains: ["labels", "data"], accepts: ["label-fields", "batch-data", "csv", "text"], produces: ["label-table", "print-sheet", "markdown-table"] }),
  makeTool({ name: "QR Payload URL Encoder", category: "In-House Labels", engine: "encoder", config: { mode: "url_encode" }, purpose: "encode a label or tracking link so a QR tool can use it", domains: ["labels", "developer"], accepts: ["url", "label-data", "tracking-link", "text"], produces: ["encoded-url", "qr-payload", "text"] }),
  makeTool({ name: "Label HTML Escape Tool", category: "In-House Labels", engine: "encoder", config: { mode: "html_escape" }, purpose: "make label text safe to place into an HTML print template", domains: ["labels", "developer"], accepts: ["label-data", "print-sheet", "text"], produces: ["safe-html", "print-template-text", "text"] }),
  makeTool({ name: "Label Line Numberer", category: "In-House Labels", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number label lines so a user can review each label entry", domains: ["labels", "report"], accepts: ["label-data", "label-table", "text"], produces: ["numbered-labels", "review-list", "text"] }),
  makeTool({ name: "Label Duplicate Remover", category: "In-House Labels", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated label entries before printing or exporting", domains: ["labels", "data"], accepts: ["label-data", "numbered-labels", "text"], produces: ["deduped-labels", "label-data", "text"] }),
  makeTool({ name: "Label Review Word Counter", category: "In-House Labels", engine: "text_stats", purpose: "check how much label text will be printed or reviewed", domains: ["labels"], accepts: ["label-data", "print-sheet", "text"], produces: ["label-stats", "review-signal"] }),

  makeTool({ name: "Customer Email Draft Cleaner", category: "In-House Communication", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean rough customer email drafts before final review", domains: ["communication"], accepts: ["email-draft", "customer-message", "text"], produces: ["clean-email-draft", "email-draft", "text"], requiresApproval: true, waterfallSignals: ["needs-review", "ready", "complete"] }),
  makeTool({ name: "Customer Email Sentence Formatter", category: "In-House Communication", engine: "text_transform", config: { mode: "sentencecase" }, purpose: "make a customer reply easier to read", domains: ["communication"], accepts: ["email-draft", "clean-email-draft", "text"], produces: ["formatted-email", "customer-reply", "text"], requiresApproval: true }),
  makeTool({ name: "Email Subject Title Builder", category: "In-House Communication", engine: "text_transform", config: { mode: "titlecase" }, purpose: "turn an email topic into a clear subject line", domains: ["communication", "marketing"], accepts: ["email-subject", "project-title", "text"], produces: ["formatted-subject", "email-subject", "text"], requiresApproval: true }),
  makeTool({ name: "Customer Reply HTML Escape Tool", category: "In-House Communication", engine: "encoder", config: { mode: "html_escape" }, purpose: "make a customer reply safe for a web preview", domains: ["communication", "developer"], accepts: ["customer-reply", "formatted-email", "text"], produces: ["safe-html", "email-preview", "text"], requiresApproval: true }),
  makeTool({ name: "Customer Reply Reading Time Checker", category: "In-House Communication", engine: "text_stats", purpose: "estimate whether a customer message is too long", domains: ["communication"], accepts: ["customer-reply", "email-draft", "text"], produces: ["email-stats", "review-signal"] }),
  makeTool({ name: "Customer Question Deduper", category: "In-House Communication", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated customer questions from a support list", domains: ["communication", "data"], accepts: ["customer-questions", "customer-message", "text"], produces: ["deduped-questions", "support-list", "text"] }),
  makeTool({ name: "Support Reply Numbered Checklist", category: "In-House Communication", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn support steps into a numbered reply checklist", domains: ["communication", "report"], accepts: ["support-list", "customer-reply", "text"], produces: ["support-checklist", "customer-reply", "text"], requiresApproval: true }),
  makeTool({ name: "Follow Up Date Scheduler", category: "In-House Communication", engine: "date_add", config: { unit: "days" }, purpose: "calculate a follow-up date after a customer action", domains: ["communication", "business"], accepts: ["date", "customer-action", "text"], produces: ["follow-up-date", "schedule-date", "text"] }),

  makeTool({ name: "Report Outline Numberer", category: "In-House Reports", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn notes into a numbered report outline", domains: ["report"], accepts: ["notes", "report-section", "text"], produces: ["report-outline", "numbered-outline", "text"] }),
  makeTool({ name: "Report Blank Line Cleaner", category: "In-House Reports", engine: "text_transform", config: { mode: "remove_blank_lines" }, purpose: "remove blank lines from report text", domains: ["report"], accepts: ["report-outline", "report-draft", "text"], produces: ["clean-report", "report-draft", "text"] }),
  makeTool({ name: "Report Markdown Table Builder", category: "In-House Reports", engine: "markdown_table", purpose: "create a markdown table for report data", domains: ["report", "data"], accepts: ["report-data", "csv", "text"], produces: ["markdown-table", "report-section", "table"] }),
  makeTool({ name: "Report Reading Time Checker", category: "In-House Reports", engine: "text_stats", purpose: "estimate the reading load of a report", domains: ["report"], accepts: ["report-draft", "clean-report", "text"], produces: ["report-stats", "review-signal"] }),
  makeTool({ name: "Approval Checklist Numberer", category: "In-House Reports", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number approval checkpoints before a final artifact is exported", domains: ["report", "collaboration"], accepts: ["approval-items", "review-list", "text"], produces: ["approval-checklist", "review-list", "text"], requiresApproval: true }),
  makeTool({ name: "Final Artifact Slug Builder", category: "In-House Reports", engine: "text_transform", config: { mode: "slugify" }, purpose: "create a safe file name for the final output", domains: ["report", "collaboration"], accepts: ["project-title", "report-title", "text"], produces: ["artifact-slug", "file-name", "text"] }),
  makeTool({ name: "Final Artifact Base64 Packager", category: "In-House Reports", engine: "encoder", config: { mode: "base64_encode" }, purpose: "encode a final text artifact for storage or transfer testing", domains: ["report", "developer"], accepts: ["final-artifact", "report-draft", "text"], produces: ["encoded-artifact", "text"] }),
  makeTool({ name: "Final Artifact HTML Unescape Tool", category: "In-House Reports", engine: "encoder", config: { mode: "html_unescape" }, purpose: "turn escaped preview text back into readable report text", domains: ["report", "developer"], accepts: ["safe-html", "email-preview", "print-template-text"], produces: ["readable-artifact", "text"] }),

  makeTool({ name: "SEO Title Length Checker", category: "In-House Marketing", engine: "meta_length", purpose: "check whether an SEO title and description fit common search-result lengths", domains: ["marketing"], accepts: ["seo-title", "meta-description", "text"], produces: ["seo-length-report", "review-signal"] }),
  makeTool({ name: "UTM Campaign Link Builder", category: "In-House Marketing", engine: "utm_builder", purpose: "build campaign tracking links for emails, posts, or ads", domains: ["marketing", "communication"], accepts: ["url", "campaign-info", "text"], produces: ["tracking-link", "url"] }),
  makeTool({ name: "Keyword Density Review Tool", category: "In-House Marketing", engine: "keyword_density", purpose: "check whether an important keyword appears enough in content", domains: ["marketing", "report"], accepts: ["content", "report-draft", "text"], produces: ["keyword-report", "review-signal"] }),
  makeTool({ name: "Campaign Slug Builder", category: "In-House Marketing", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn a campaign idea into a clean campaign slug", domains: ["marketing"], accepts: ["campaign-name", "project-title", "text"], produces: ["campaign-slug", "text"] }),
  makeTool({ name: "Content Headline Titlecaser", category: "In-House Marketing", engine: "text_transform", config: { mode: "titlecase" }, purpose: "format content headlines for review", domains: ["marketing", "communication"], accepts: ["headline", "content", "text"], produces: ["formatted-headline", "text"] }),
  makeTool({ name: "Content List Shuffler", category: "In-House Marketing", engine: "list_transform", config: { mode: "shuffle" }, purpose: "shuffle content idea lists for brainstorming", domains: ["marketing"], accepts: ["content-ideas", "keyword-list", "text"], produces: ["shuffled-ideas", "content-ideas", "text"] }),
  makeTool({ name: "Campaign Ideas Deduper", category: "In-House Marketing", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated campaign ideas before planning", domains: ["marketing", "data"], accepts: ["content-ideas", "campaign-list", "text"], produces: ["deduped-campaigns", "content-ideas", "text"] }),
  makeTool({ name: "Campaign Copy Word Counter", category: "In-House Marketing", engine: "text_stats", purpose: "measure campaign copy length before publishing or approval", domains: ["marketing"], accepts: ["campaign-copy", "content", "text"], produces: ["copy-stats", "review-signal"] }),

  makeTool({ name: "Invoice Total Builder", category: "In-House Business", engine: "invoice_total", purpose: "calculate an invoice total with discount, tax, and shipping", domains: ["finance", "business"], accepts: ["invoice-data", "quote-data", "text"], produces: ["invoice-total", "business-calculation", "text"] }),
  makeTool({ name: "Quote Price Average Calculator", category: "In-House Business", engine: "simple_formula", config: { mode: "average" }, purpose: "average three prices for a quick quote comparison", domains: ["finance", "business"], accepts: ["quote-data", "pricing-data", "text"], produces: ["average-price", "business-calculation", "text"] }),
  makeTool({ name: "Margin Percent Calculator", category: "In-House Business", engine: "percentage", purpose: "calculate a percentage value for margin, completion, or share of total", domains: ["finance", "business"], accepts: ["pricing-data", "inventory-data", "text"], produces: ["percentage-result", "business-calculation", "text"] }),
  makeTool({ name: "Revenue Change Calculator", category: "In-House Business", engine: "percent_change", purpose: "calculate growth or decline between two revenue values", domains: ["finance", "business"], accepts: ["revenue-data", "sales-data", "text"], produces: ["change-percent", "business-calculation", "text"] }),
  makeTool({ name: "Payment Plan Calculator", category: "In-House Business", engine: "loan_payment", purpose: "estimate monthly payment for financing or equipment planning", domains: ["finance", "business"], accepts: ["finance-data", "equipment-cost", "text"], produces: ["payment-plan", "business-calculation", "text"] }),
  makeTool({ name: "Savings Projection Calculator", category: "In-House Business", engine: "compound_interest", purpose: "project savings or reinvestment growth", domains: ["finance", "business"], accepts: ["finance-data", "savings-plan", "text"], produces: ["savings-projection", "business-calculation", "text"] }),
  makeTool({ name: "Business Report Table Builder", category: "In-House Business", engine: "markdown_table", purpose: "turn business numbers into a report table", domains: ["finance", "report", "data"], accepts: ["business-calculation", "invoice-total", "text"], produces: ["business-table", "report-section", "markdown-table"] }),
  makeTool({ name: "Business Follow Up Date Tool", category: "In-House Business", engine: "date_add", config: { unit: "days" }, purpose: "calculate the next follow-up date after a business task", domains: ["finance", "communication"], accepts: ["schedule-date", "business-task", "text"], produces: ["follow-up-date", "schedule-date", "text"] }),

  makeTool({ name: "Mushroom Substrate Mix Calculator", category: "In-House Agriculture", engine: "soil_mix", purpose: "calculate parts of a substrate mix for growing projects", domains: ["agriculture"], accepts: ["substrate-recipe", "grow-plan", "text"], produces: ["substrate-mix", "recipe-data", "business-calculation"] }),
  makeTool({ name: "Harvest Recipe Scale Tool", category: "In-House Agriculture", engine: "recipe_scale", purpose: "scale a recipe or grow input from one batch size to another", domains: ["agriculture", "business"], accepts: ["recipe-data", "substrate-mix", "text"], produces: ["scaled-recipe", "recipe-data", "text"] }),
  makeTool({ name: "Grow Bed Spacing Calculator", category: "In-House Agriculture", engine: "plant_spacing", purpose: "estimate how many plants or bags fit in a grow space", domains: ["agriculture"], accepts: ["grow-space", "bed-data", "text"], produces: ["spacing-plan", "capacity-estimate", "business-calculation"] }),
  makeTool({ name: "Harvest Window Date Calculator", category: "In-House Agriculture", engine: "date_add", config: { unit: "days" }, purpose: "calculate an estimated harvest date from a start date", domains: ["agriculture", "communication"], accepts: ["start-date", "grow-plan", "text"], produces: ["harvest-date", "schedule-date", "text"] }),
  makeTool({ name: "Contamination Log Table Builder", category: "In-House Agriculture", engine: "markdown_table", purpose: "turn contamination notes into a reviewable table", domains: ["agriculture", "data", "report"], accepts: ["contamination-notes", "csv", "text"], produces: ["contamination-table", "report-section", "markdown-table"] }),
  makeTool({ name: "Contamination Notes Deduper", category: "In-House Agriculture", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated contamination notes before reporting", domains: ["agriculture", "data"], accepts: ["contamination-notes", "report-section", "text"], produces: ["clean-contamination-notes", "report-section", "text"] }),
  makeTool({ name: "Weekly Harvest Forecast Average", category: "In-House Agriculture", engine: "simple_formula", config: { mode: "average" }, purpose: "average recent harvest numbers for a simple weekly forecast", domains: ["agriculture", "business"], accepts: ["harvest-data", "capacity-estimate", "text"], produces: ["harvest-forecast", "business-calculation", "report-section"] }),
  makeTool({ name: "Harvest Forecast Report Builder", category: "In-House Agriculture", engine: "markdown_table", purpose: "turn harvest forecasts into a simple report section", domains: ["agriculture", "report"], accepts: ["harvest-forecast", "harvest-data", "text"], produces: ["harvest-report", "report-section", "markdown-table"] }),

  makeTool({ name: "Project UUID Token Generator", category: "In-House Developer", engine: "uuid_generator", purpose: "create unique ids for project tasks, artifacts, or tool runs", domains: ["developer", "collaboration"], accepts: ["prompt", "project-data", "text"], produces: ["uuid", "identifier", "text"] }),
  makeTool({ name: "Project Payload Base64 Encoder", category: "In-House Developer", engine: "encoder", config: { mode: "base64_encode" }, purpose: "encode project payloads for safe transfer testing", domains: ["developer", "collaboration"], accepts: ["project-payload", "final-artifact", "text"], produces: ["encoded-payload", "text"] }),
  makeTool({ name: "Project Payload Base64 Decoder", category: "In-House Developer", engine: "encoder", config: { mode: "base64_decode" }, purpose: "decode base64 project payloads during testing", domains: ["developer"], accepts: ["encoded-payload", "text"], produces: ["project-payload", "text"] }),
  makeTool({ name: "JSON Minifier For Storage", category: "In-House Developer", engine: "json_tool", config: { mode: "minify" }, purpose: "minify JSON before it is saved or passed to another tool", domains: ["developer", "data"], accepts: ["json", "structured-data", "project-payload"], produces: ["minified-json", "structured-data", "text"] }),
  makeTool({ name: "Secure Password Generator", category: "In-House Developer", engine: "password_generator", purpose: "generate a strong password for test accounts or protected exports", domains: ["developer", "collaboration"], accepts: ["security-request", "prompt", "text"], produces: ["password", "secret-placeholder", "text"], requiresApproval: true }),
  makeTool({ name: "Random Sample Batch Picker", category: "In-House Developer", engine: "random_number", purpose: "pick random sample numbers for reviews, tests, or audits", domains: ["developer", "data"], accepts: ["sample-request", "review-list", "text"], produces: ["sample-selection", "review-signal", "text"] }),
  makeTool({ name: "HTML Preview Escape Tool", category: "In-House Developer", engine: "encoder", config: { mode: "html_escape" }, purpose: "escape text before it appears in a browser preview", domains: ["developer", "report"], accepts: ["report-draft", "customer-reply", "text"], produces: ["safe-html", "preview-text", "text"] }),
  makeTool({ name: "URL Decode Review Tool", category: "In-House Developer", engine: "encoder", config: { mode: "url_decode" }, purpose: "decode tracking or QR payloads for review", domains: ["developer", "marketing", "labels"], accepts: ["encoded-url", "qr-payload", "url"], produces: ["decoded-url", "tracking-link", "text"] }),

  makeTool({ name: "COLAB Share Folder Slug Builder", category: "In-House Collaboration", engine: "text_transform", config: { mode: "slugify" }, purpose: "create a clean folder name for a shared workspace", domains: ["collaboration"], accepts: ["project-title", "share-space", "text"], produces: ["folder-name", "share-space-slug", "text"] }),
  makeTool({ name: "Invite Message Cleaner", category: "In-House Collaboration", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean a teammate invite message", domains: ["collaboration", "communication"], accepts: ["invite-message", "customer-message", "text"], produces: ["clean-invite-message", "text"], requiresApproval: true }),
  makeTool({ name: "Reviewer Checklist Builder", category: "In-House Collaboration", engine: "list_transform", config: { mode: "number_lines" }, purpose: "create a numbered checklist for human review", domains: ["collaboration", "report"], accepts: ["review-items", "approval-items", "text"], produces: ["review-checklist", "approval-checklist", "text"], requiresApproval: true }),
  makeTool({ name: "Review Comment Deduper", category: "In-House Collaboration", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated teammate comments before repair", domains: ["collaboration", "data"], accepts: ["review-comments", "repair-notes", "text"], produces: ["deduped-comments", "repair-notes", "text"] }),
  makeTool({ name: "Repair Note Sentence Formatter", category: "In-House Collaboration", engine: "text_transform", config: { mode: "sentencecase" }, purpose: "clean a user's repair note before the task is retried", domains: ["collaboration", "intake"], accepts: ["repair-notes", "user-observation", "text"], produces: ["clean-repair-note", "revised-prompt", "text"] }),
  makeTool({ name: "Approval Summary Markdown Builder", category: "In-House Collaboration", engine: "markdown_table", purpose: "turn approval decisions into a readable table", domains: ["collaboration", "report"], accepts: ["approval-checklist", "review-signal", "text"], produces: ["approval-summary", "report-section", "markdown-table"], requiresApproval: true }),
  makeTool({ name: "Session Theme Slug Builder", category: "In-House Experience", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn user interests into a repeatable session theme slug", domains: ["visual", "intake"], accepts: ["user-topics", "profile-topics", "text"], produces: ["theme-slug", "visual-theme", "text"] }),
  makeTool({ name: "Completion Sound Category Sorter", category: "In-House Experience", engine: "list_transform", config: { mode: "sort_az" }, purpose: "sort sound categories before the user picks a completion sound", domains: ["visual", "collaboration"], accepts: ["sound-list", "profile-topics", "text"], produces: ["sorted-sounds", "sound-selection", "text"] }),

  makeTool({ name: "Document Outline Extractor", category: "In-House Documents", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn document notes into a numbered outline for review or next-step planning", domains: ["documents", "report"], accepts: ["document-text", "file-preview", "text"], produces: ["document-outline", "action-list", "review-list", "text"] }),
  makeTool({ name: "File Notes Cleaner", category: "In-House Documents", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean pasted file notes so document tools receive readable text", domains: ["documents", "data"], accepts: ["file-notes", "uploaded-file-summary", "text"], produces: ["clean-file-notes", "document-text", "text"] }),
  makeTool({ name: "PDF Action List Builder", category: "In-House Documents", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn PDF review notes into a clear action list", domains: ["documents", "collaboration"], accepts: ["pdf-notes", "document-outline", "text"], produces: ["pdf-action-list", "action-list", "approval-items", "text"], requiresApproval: true }),
  makeTool({ name: "Document Summary Word Counter", category: "In-House Documents", engine: "text_stats", purpose: "check the length of a document summary before it is sent or exported", domains: ["documents", "report"], accepts: ["document-summary", "report-draft", "text"], produces: ["summary-stats", "review-signal", "text"] }),
  makeTool({ name: "Document Section Titlecaser", category: "In-House Documents", engine: "text_transform", config: { mode: "titlecase" }, purpose: "make document section headings clean and readable", domains: ["documents", "report"], accepts: ["document-outline", "section-headings", "text"], produces: ["clean-section-headings", "report-section", "text"] }),
  makeTool({ name: "Document Findings Table Builder", category: "In-House Documents", engine: "markdown_table", purpose: "turn document findings into a simple review table", domains: ["documents", "report", "data"], accepts: ["document-findings", "csv", "text"], produces: ["findings-table", "report-section", "markdown-table"] }),
  makeTool({ name: "Attachment Name Slug Builder", category: "In-House Documents", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn an attachment name into a clean file or folder slug", domains: ["documents", "collaboration"], accepts: ["attachment-name", "file-name", "project-title", "text"], produces: ["attachment-slug", "folder-name", "text"] }),
  makeTool({ name: "Document Version UUID Generator", category: "In-House Documents", engine: "uuid_generator", purpose: "create a unique version id for document drafts and exports", domains: ["documents", "developer"], accepts: ["document-version", "project-data", "text"], produces: ["version-id", "identifier", "text"] }),
  makeTool({ name: "Document Review Checklist Deduper", category: "In-House Documents", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated document review checklist items", domains: ["documents", "collaboration"], accepts: ["review-checklist", "action-list", "text"], produces: ["deduped-review-checklist", "approval-checklist", "text"], requiresApproval: true }),
  makeTool({ name: "Final Document HTML Escape Tool", category: "In-House Documents", engine: "encoder", config: { mode: "html_escape" }, purpose: "make final document text safe for browser previews", domains: ["documents", "developer"], accepts: ["final-document", "report-draft", "text"], produces: ["safe-html", "preview-text", "text"], requiresApproval: true }),

  makeTool({ name: "Image Alt Text Cleaner", category: "In-House Media", engine: "text_transform", config: { mode: "sentencecase" }, purpose: "clean image alt text so it is readable and accessible", domains: ["media", "seo"], accepts: ["alt-text", "image-notes", "text"], produces: ["clean-alt-text", "seo-text", "text"] }),
  makeTool({ name: "Image File Name Slug Builder", category: "In-House Media", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn an image title into a clean file name", domains: ["media", "seo"], accepts: ["image-title", "asset-name", "text"], produces: ["image-file-slug", "asset-slug", "text"] }),
  makeTool({ name: "Gallery Caption Title Builder", category: "In-House Media", engine: "text_transform", config: { mode: "titlecase" }, purpose: "turn gallery captions into neat display titles", domains: ["media", "marketing"], accepts: ["caption", "image-notes", "text"], produces: ["gallery-title", "caption-title", "text"] }),
  makeTool({ name: "Asset Metadata Table Builder", category: "In-House Media", engine: "markdown_table", purpose: "turn media metadata into a readable asset table", domains: ["media", "data"], accepts: ["asset-metadata", "csv", "text"], produces: ["asset-table", "markdown-table", "report-section"] }),
  makeTool({ name: "Media Review Queue Numberer", category: "In-House Media", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number image or media assets for review", domains: ["media", "collaboration"], accepts: ["asset-list", "review-items", "text"], produces: ["media-review-queue", "review-list", "text"] }),
  makeTool({ name: "Brand Color Contrast Checker", category: "In-House Media", engine: "contrast_ratio", purpose: "check whether brand colors are readable together", domains: ["media", "visual"], accepts: ["brand-colors", "visual-theme", "text"], produces: ["contrast-report", "review-signal", "text"] }),
  makeTool({ name: "Color Hex To RGB Inspector", category: "In-House Media", engine: "color_convert", config: { mode: "hex_to_rgb" }, purpose: "convert a brand hex color into RGB values for design handoff", domains: ["media", "visual"], accepts: ["brand-color", "visual-theme", "text"], produces: ["rgb-color", "brand-color-data", "text"] }),
  makeTool({ name: "Social Image UTM Link Builder", category: "In-House Media", engine: "utm_builder", purpose: "create a campaign link for a social image or media post", domains: ["media", "marketing", "seo"], accepts: ["campaign-url", "social-post", "text"], produces: ["tracking-link", "utm-url", "text"] }),

  makeTool({ name: "Page SEO Snippet Length Checker", category: "In-House SEO Content", engine: "meta_length", purpose: "check whether a page title and description are a good length for search previews", domains: ["seo", "marketing"], accepts: ["seo-title", "meta-description", "text"], produces: ["seo-length-report", "review-signal", "text"] }),
  makeTool({ name: "Meta Description Length Checker", category: "In-House SEO Content", engine: "meta_length", purpose: "check whether a meta description is too short or too long", domains: ["seo", "marketing"], accepts: ["meta-description", "page-summary", "text"], produces: ["meta-length-report", "review-signal", "text"] }),
  makeTool({ name: "Keyword Focus Density Checker", category: "In-House SEO Content", engine: "keyword_density", purpose: "check how often a focus keyword appears in page copy", domains: ["seo", "marketing", "data"], accepts: ["page-copy", "seo-text", "text"], produces: ["keyword-density-report", "seo-report", "text"] }),
  makeTool({ name: "Blog Outline Numberer", category: "In-House SEO Content", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn blog ideas into a numbered article outline", domains: ["seo", "marketing", "report"], accepts: ["blog-ideas", "content-outline", "text"], produces: ["blog-outline", "content-outline", "text"] }),
  makeTool({ name: "Social Caption Cleaner", category: "In-House SEO Content", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean social media captions before publishing or scheduling", domains: ["seo", "marketing", "communication"], accepts: ["social-caption", "campaign-copy", "text"], produces: ["clean-social-caption", "social-post", "text"], requiresApproval: true }),
  makeTool({ name: "Hashtag List Deduper", category: "In-House SEO Content", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated hashtags from a campaign list", domains: ["seo", "marketing"], accepts: ["hashtag-list", "social-post", "text"], produces: ["deduped-hashtags", "campaign-tags", "text"] }),
  makeTool({ name: "UTM Campaign Builder", category: "In-House SEO Content", engine: "utm_builder", purpose: "build a trackable campaign URL", domains: ["seo", "marketing", "data"], accepts: ["campaign-url", "marketing-plan", "text"], produces: ["utm-url", "tracking-link", "text"] }),
  makeTool({ name: "Web Page Slug Builder", category: "In-House SEO Content", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn a page title into a search-friendly URL slug", domains: ["seo", "marketing"], accepts: ["page-title", "seo-title", "text"], produces: ["page-slug", "url", "text"] }),
  makeTool({ name: "Content Reading Time Checker", category: "In-House SEO Content", engine: "text_stats", purpose: "estimate reading time and content length before publishing", domains: ["seo", "marketing", "report"], accepts: ["page-copy", "blog-draft", "text"], produces: ["content-stats", "review-signal", "text"] }),
  makeTool({ name: "Marketing Copy HTML Escape Tool", category: "In-House SEO Content", engine: "encoder", config: { mode: "html_escape" }, purpose: "make marketing copy safe for web preview blocks", domains: ["seo", "marketing", "developer"], accepts: ["campaign-copy", "page-copy", "text"], produces: ["safe-html", "preview-text", "text"], requiresApproval: true }),

  makeTool({ name: "Product SKU Slug Builder", category: "In-House Ecommerce", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn product names into clean SKU-like slugs", domains: ["ecommerce", "data"], accepts: ["product-name", "product-data", "text"], produces: ["sku-slug", "product-id", "text"] }),
  makeTool({ name: "Product Description Cleaner", category: "In-House Ecommerce", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean rough product descriptions before review", domains: ["ecommerce", "marketing"], accepts: ["product-description", "product-data", "text"], produces: ["clean-product-description", "product-copy", "text"], requiresApproval: true }),
  makeTool({ name: "Price Markup Calculator", category: "In-House Ecommerce", engine: "percentage", purpose: "calculate what percent a value is of a total for pricing checks", domains: ["ecommerce", "finance"], accepts: ["price-data", "product-cost", "text"], produces: ["markup-percent", "business-calculation", "text"] }),
  makeTool({ name: "Discount Impact Calculator", category: "In-House Ecommerce", engine: "percent_change", purpose: "calculate the percent change from original price to sale price", domains: ["ecommerce", "finance"], accepts: ["discount-data", "price-data", "text"], produces: ["discount-impact", "business-calculation", "text"] }),
  makeTool({ name: "Ecommerce Order Total Builder", category: "In-House Ecommerce", engine: "invoice_total", purpose: "calculate customer order totals with tax, discount, and shipping", domains: ["ecommerce", "finance"], accepts: ["order-data", "invoice-lines", "text"], produces: ["order-total", "invoice-total", "business-calculation", "text"] }),
  makeTool({ name: "Product Tag Deduper", category: "In-House Ecommerce", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove duplicate product tags before publishing", domains: ["ecommerce", "seo"], accepts: ["product-tags", "campaign-tags", "text"], produces: ["deduped-product-tags", "campaign-tags", "text"] }),
  makeTool({ name: "Product Catalog CSV To JSON", category: "In-House Ecommerce", engine: "csv_tool", config: { mode: "csv_to_json" }, purpose: "convert a product catalog CSV into structured records", domains: ["ecommerce", "data"], accepts: ["product-catalog-csv", "csv", "spreadsheet"], produces: ["product-json", "structured-data", "records"] }),
  makeTool({ name: "Product Catalog Field Inspector", category: "In-House Ecommerce", engine: "json_tool", config: { mode: "keys" }, purpose: "list product catalog fields before labels or imports are built", domains: ["ecommerce", "data"], accepts: ["product-json", "structured-data", "records"], produces: ["product-field-list", "field-list", "text"] }),
  makeTool({ name: "Order Follow Up Date Tool", category: "In-House Ecommerce", engine: "date_add", config: { unit: "days" }, purpose: "calculate an order follow-up date", domains: ["ecommerce", "communication"], accepts: ["order-date", "schedule-date", "text"], produces: ["order-follow-up-date", "follow-up-date", "text"] }),
  makeTool({ name: "Product Launch Checklist Numberer", category: "In-House Ecommerce", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number product launch checklist items", domains: ["ecommerce", "operations"], accepts: ["launch-checklist", "product-data", "text"], produces: ["numbered-launch-checklist", "review-list", "text"], requiresApproval: true }),

  makeTool({ name: "SOP Step Numberer", category: "In-House Operations", engine: "list_transform", config: { mode: "number_lines" }, purpose: "turn SOP steps into a numbered process", domains: ["operations", "report"], accepts: ["sop-steps", "process-notes", "text"], produces: ["numbered-sop", "process-outline", "text"] }),
  makeTool({ name: "SOP Step Deduper", category: "In-House Operations", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated SOP steps", domains: ["operations", "data"], accepts: ["sop-steps", "numbered-sop", "text"], produces: ["deduped-sop", "process-outline", "text"] }),
  makeTool({ name: "Shift Note Cleaner", category: "In-House Operations", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean shift notes before they become a report", domains: ["operations", "report"], accepts: ["shift-notes", "incident-notes", "text"], produces: ["clean-shift-notes", "operations-report", "text"] }),
  makeTool({ name: "Maintenance Date Calculator", category: "In-House Operations", engine: "date_add", config: { unit: "days" }, purpose: "calculate the next maintenance date", domains: ["operations"], accepts: ["maintenance-date", "schedule-date", "text"], produces: ["next-maintenance-date", "schedule-date", "text"] }),
  makeTool({ name: "Inventory Count Average Tool", category: "In-House Operations", engine: "simple_formula", config: { mode: "average" }, purpose: "average inventory counts from recent checks", domains: ["operations", "data"], accepts: ["inventory-data", "count-data", "text"], produces: ["inventory-average", "business-calculation", "text"] }),
  makeTool({ name: "Inventory Reorder Percent Checker", category: "In-House Operations", engine: "percentage", purpose: "calculate percent remaining or percent used for inventory planning", domains: ["operations", "finance"], accepts: ["inventory-data", "reorder-data", "text"], produces: ["inventory-percent", "business-calculation", "text"] }),
  makeTool({ name: "Operations Report Table Builder", category: "In-House Operations", engine: "markdown_table", purpose: "turn operations notes into a simple report table", domains: ["operations", "report", "data"], accepts: ["operations-report", "csv", "text"], produces: ["operations-table", "report-section", "markdown-table"] }),
  makeTool({ name: "Work Order UUID Generator", category: "In-House Operations", engine: "uuid_generator", purpose: "create a unique id for work orders and maintenance tasks", domains: ["operations", "developer"], accepts: ["work-order", "maintenance-task", "text"], produces: ["work-order-id", "identifier", "text"] }),
  makeTool({ name: "Safety Checklist Builder", category: "In-House Operations", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number safety checklist items for approval", domains: ["operations", "compliance"], accepts: ["safety-items", "approval-items", "text"], produces: ["safety-checklist", "approval-checklist", "text"], requiresApproval: true }),
  makeTool({ name: "Incident Note Sentence Formatter", category: "In-House Operations", engine: "text_transform", config: { mode: "sentencecase" }, purpose: "make incident notes readable before review", domains: ["operations", "compliance"], accepts: ["incident-notes", "shift-notes", "text"], produces: ["clean-incident-notes", "operations-report", "text"], requiresApproval: true }),

  makeTool({ name: "Lesson Plan Cleaner", category: "In-House Education", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean a rough lesson plan before it becomes a project task", domains: ["education", "report"], accepts: ["lesson-plan", "training-notes", "text"], produces: ["clean-lesson-plan", "course-outline", "text"] }),
  makeTool({ name: "Quiz Question Numberer", category: "In-House Education", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number quiz questions for review", domains: ["education", "data"], accepts: ["quiz-questions", "lesson-plan", "text"], produces: ["numbered-quiz", "review-list", "text"] }),
  makeTool({ name: "Student Feedback Deduper", category: "In-House Education", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated student feedback before reporting", domains: ["education", "data"], accepts: ["student-feedback", "review-comments", "text"], produces: ["deduped-student-feedback", "report-section", "text"] }),
  makeTool({ name: "Reading Time Checker", category: "In-House Education", engine: "text_stats", purpose: "estimate reading time for training or lesson content", domains: ["education", "report"], accepts: ["lesson-content", "course-outline", "text"], produces: ["reading-stats", "review-signal", "text"] }),
  makeTool({ name: "Grade Change Calculator", category: "In-House Education", engine: "percent_change", purpose: "calculate percent change between two scores", domains: ["education", "data"], accepts: ["grade-data", "score-data", "text"], produces: ["grade-change", "business-calculation", "text"] }),
  makeTool({ name: "Study Schedule Date Tool", category: "In-House Education", engine: "date_add", config: { unit: "days" }, purpose: "calculate a study or follow-up date", domains: ["education", "communication"], accepts: ["study-date", "schedule-date", "text"], produces: ["study-follow-up-date", "schedule-date", "text"] }),
  makeTool({ name: "Training Checklist Table Builder", category: "In-House Education", engine: "markdown_table", purpose: "turn training checklist rows into a table", domains: ["education", "report"], accepts: ["training-checklist", "csv", "text"], produces: ["training-table", "report-section", "markdown-table"] }),
  makeTool({ name: "Course Slug Builder", category: "In-House Education", engine: "text_transform", config: { mode: "slugify" }, purpose: "turn a course or lesson title into a clean slug", domains: ["education", "seo"], accepts: ["course-title", "lesson-title", "text"], produces: ["course-slug", "page-slug", "text"] }),

  makeTool({ name: "Client Brief Cleaner", category: "In-House Client Work", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean a client brief before tools build tasks from it", domains: ["client", "intake"], accepts: ["client-brief", "project-brief", "text"], produces: ["clean-client-brief", "clean-brief", "text"] }),
  makeTool({ name: "Client Deliverable Checklist", category: "In-House Client Work", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number client deliverables for review and approval", domains: ["client", "collaboration"], accepts: ["deliverables", "client-brief", "text"], produces: ["deliverable-checklist", "approval-checklist", "text"], requiresApproval: true }),
  makeTool({ name: "Client Feedback Deduper", category: "In-House Client Work", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated client feedback before task repair", domains: ["client", "collaboration"], accepts: ["client-feedback", "review-comments", "text"], produces: ["deduped-client-feedback", "repair-notes", "text"] }),
  makeTool({ name: "Client Approval Summary Table", category: "In-House Client Work", engine: "markdown_table", purpose: "turn client approval items into a clear table", domains: ["client", "report"], accepts: ["client-approval-items", "approval-checklist", "text"], produces: ["client-approval-summary", "approval-summary", "markdown-table"], requiresApproval: true }),
  makeTool({ name: "Client Folder Slug Builder", category: "In-House Client Work", engine: "text_transform", config: { mode: "slugify" }, purpose: "create a clean folder slug for client files", domains: ["client", "collaboration"], accepts: ["client-name", "project-title", "text"], produces: ["client-folder-slug", "folder-name", "text"] }),
  makeTool({ name: "Proposal Cost Calculator", category: "In-House Client Work", engine: "invoice_total", purpose: "calculate proposal totals with tax, discount, and shipping-like fees", domains: ["client", "finance"], accepts: ["proposal-costs", "invoice-lines", "text"], produces: ["proposal-total", "business-calculation", "text"] }),
  makeTool({ name: "Proposal Follow Up Date", category: "In-House Client Work", engine: "date_add", config: { unit: "days" }, purpose: "calculate when to follow up after sending a proposal", domains: ["client", "communication"], accepts: ["proposal-date", "schedule-date", "text"], produces: ["proposal-follow-up-date", "follow-up-date", "text"] }),
  makeTool({ name: "Client Handoff Message Formatter", category: "In-House Client Work", engine: "text_transform", config: { mode: "sentencecase" }, purpose: "clean a client handoff message before sending", domains: ["client", "communication"], accepts: ["handoff-message", "customer-message", "text"], produces: ["formatted-handoff-message", "customer-reply", "text"], requiresApproval: true }),

  makeTool({ name: "Policy Checklist Numberer", category: "In-House Compliance", engine: "list_transform", config: { mode: "number_lines" }, purpose: "number policy requirements for review", domains: ["compliance", "report"], accepts: ["policy-items", "approval-items", "text"], produces: ["policy-checklist", "approval-checklist", "text"], requiresApproval: true }),
  makeTool({ name: "Compliance Notes Deduper", category: "In-House Compliance", engine: "list_transform", config: { mode: "dedupe" }, purpose: "remove repeated compliance notes before review", domains: ["compliance", "data"], accepts: ["compliance-notes", "policy-items", "text"], produces: ["deduped-compliance-notes", "review-list", "text"], requiresApproval: true }),
  makeTool({ name: "Audit Sample Picker", category: "In-House Compliance", engine: "random_number", purpose: "pick random sample numbers for an audit review", domains: ["compliance", "data"], accepts: ["audit-list", "review-list", "text"], produces: ["audit-sample", "review-signal", "text"], requiresApproval: true }),
  makeTool({ name: "Audit ID UUID Generator", category: "In-House Compliance", engine: "uuid_generator", purpose: "create a unique id for audit records", domains: ["compliance", "developer"], accepts: ["audit-record", "compliance-data", "text"], produces: ["audit-id", "identifier", "text"] }),
  makeTool({ name: "Policy HTML Escape Preview", category: "In-House Compliance", engine: "encoder", config: { mode: "html_escape" }, purpose: "make policy text safe for a browser preview", domains: ["compliance", "developer"], accepts: ["policy-text", "compliance-notes", "text"], produces: ["safe-html", "preview-text", "text"], requiresApproval: true }),
  makeTool({ name: "Retention Date Calculator", category: "In-House Compliance", engine: "date_add", config: { unit: "days" }, purpose: "calculate a retention or review date", domains: ["compliance", "operations"], accepts: ["retention-start-date", "schedule-date", "text"], produces: ["retention-review-date", "schedule-date", "text"], requiresApproval: true }),
  makeTool({ name: "Compliance Summary Table", category: "In-House Compliance", engine: "markdown_table", purpose: "turn compliance notes into a simple summary table", domains: ["compliance", "report", "data"], accepts: ["compliance-notes", "csv", "text"], produces: ["compliance-summary", "report-section", "markdown-table"], requiresApproval: true }),
  makeTool({ name: "Approval Gate Word Counter", category: "In-House Compliance", engine: "text_stats", purpose: "measure approval gate text before human review", domains: ["compliance", "collaboration"], accepts: ["approval-gate", "approval-items", "text"], produces: ["approval-gate-stats", "review-signal", "text"], requiresApproval: true }),

  makeTool({ name: "Survey CSV To JSON", category: "In-House Research", engine: "csv_tool", config: { mode: "csv_to_json" }, purpose: "convert survey CSV rows into structured research records", domains: ["research", "data"], accepts: ["survey-csv", "csv", "spreadsheet"], produces: ["survey-json", "structured-data", "records"] }),
  makeTool({ name: "Survey Field Inspector", category: "In-House Research", engine: "json_tool", config: { mode: "keys" }, purpose: "list survey fields before analysis or reporting", domains: ["research", "data"], accepts: ["survey-json", "structured-data", "records"], produces: ["survey-fields", "field-list", "text"] }),
  makeTool({ name: "Research Notes Keyword Finder", category: "In-House Research", engine: "keyword_density", purpose: "find important words in research notes", domains: ["research", "data"], accepts: ["research-notes", "document-text", "text"], produces: ["research-keywords", "tool-search-terms", "text"] }),
  makeTool({ name: "Experiment ID Generator", category: "In-House Research", engine: "uuid_generator", purpose: "create a unique id for an experiment or test run", domains: ["research", "developer"], accepts: ["experiment-plan", "research-data", "text"], produces: ["experiment-id", "identifier", "text"] }),
  makeTool({ name: "AB Change Calculator", category: "In-House Research", engine: "percent_change", purpose: "calculate change between two test results", domains: ["research", "analytics"], accepts: ["ab-test-data", "score-data", "text"], produces: ["ab-change", "business-calculation", "text"] }),
  makeTool({ name: "Data Export JSON To CSV", category: "In-House Research", engine: "csv_tool", config: { mode: "json_to_csv" }, purpose: "turn structured research data into a CSV export", domains: ["research", "data"], accepts: ["research-json", "structured-data", "records"], produces: ["research-csv", "csv", "export-table"] }),
  makeTool({ name: "Research Table Builder", category: "In-House Research", engine: "markdown_table", purpose: "turn research rows into a readable markdown table", domains: ["research", "report"], accepts: ["research-csv", "csv", "text"], produces: ["research-table", "markdown-table", "report-section"] }),
  makeTool({ name: "Insight Summary Cleaner", category: "In-House Research", engine: "text_transform", config: { mode: "remove_extra_spaces" }, purpose: "clean insight summaries before sharing or exporting", domains: ["research", "report"], accepts: ["insight-summary", "research-notes", "text"], produces: ["clean-insight-summary", "report-section", "text"] })
];

export const IN_HOUSE_TOOL_BLUEPRINTS = Object.freeze(rawTools);

export const IN_HOUSE_TOOL_RECORDS = Object.freeze(IN_HOUSE_TOOL_BLUEPRINTS.map((tool) => ({
  id: tool.id,
  name: tool.name,
  category: tool.category,
  engine: tool.engine,
  description: `${tool.name}: ${tool.purpose}. Built in-house for project waterfalls and compatible tool chains.`,
  tags: tool.tags,
  config: tool.config,
  inHouse: true,
  metadata: {
    version: IN_HOUSE_TOOLS_VERSION,
    purpose: tool.purpose,
    accepts: tool.accepts,
    produces: tool.produces,
    needs: tool.needs,
    domains: tool.domains,
    parallelSafe: tool.parallelSafe,
    requiresApproval: tool.requiresApproval,
    waterfallSignals: tool.waterfallSignals,
    searchPhrases: tool.searchPhrases
  }
})));

const contractAliases = {
  text: ["prompt", "clean-brief", "project-brief", "report-draft", "customer-reply", "content", "notes", "project-payload"],
  prompt: ["clean-brief", "project-brief", "text"],
  csv: ["spreadsheet", "clean-csv", "export-table"],
  json: ["structured-data", "formatted-json", "minified-json", "records", "project-payload"],
  table: ["markdown-table", "file-summary-table", "report-section", "business-table", "label-table"],
  "report-section": ["markdown-table", "report-data", "harvest-report", "business-table", "approval-summary"],
  "review-signal": ["approval-items", "review-items", "repair-notes"],
  "business-calculation": ["report-data", "business-table", "harvest-forecast"],
  "label-data": ["label-fields", "label-table", "print-sheet"],
  url: ["tracking-link", "encoded-url", "qr-payload", "decoded-url"],
  "schedule-date": ["follow-up-date", "harvest-date", "date"],
  "recipe-data": ["substrate-mix", "scaled-recipe"],
  "approval-checklist": ["review-checklist", "approval-items", "policy-checklist", "safety-checklist", "deliverable-checklist"],
  "document-text": ["file-preview", "clean-file-notes", "document-summary", "document-outline", "pdf-notes"],
  "action-list": ["pdf-action-list", "document-outline", "review-list", "approval-items"],
  "asset-metadata": ["asset-table", "asset-list", "image-notes", "caption"],
  "seo-text": ["page-copy", "clean-alt-text", "campaign-copy", "blog-draft"],
  "campaign-tags": ["deduped-hashtags", "product-tags", "deduped-product-tags"],
  "product-data": ["product-json", "product-copy", "product-description", "product-catalog-csv"],
  "order-data": ["invoice-lines", "invoice-total", "order-follow-up-date"],
  "process-outline": ["numbered-sop", "deduped-sop", "operations-report"],
  "inventory-data": ["inventory-average", "inventory-percent", "reorder-data"],
  "course-outline": ["clean-lesson-plan", "lesson-content", "training-checklist"],
  "client-brief": ["clean-client-brief", "deliverables", "proposal-costs"],
  "compliance-data": ["compliance-notes", "compliance-summary", "audit-record", "policy-items"],
  "research-data": ["survey-json", "research-json", "research-csv", "experiment-plan"],
  "survey-json": ["survey-fields", "structured-data", "records"],
  "review-list": ["media-review-queue", "deduped-compliance-notes", "numbered-quiz", "audit-list"]
};

const expandContracts = (contracts) => {
  const expanded = new Set();
  for (const contract of contracts || []) {
    const key = normalize(contract);
    expanded.add(key);
    for (const alias of contractAliases[key] || []) expanded.add(normalize(alias));
    for (const [source, aliases] of Object.entries(contractAliases)) {
      if (aliases.map(normalize).includes(key)) expanded.add(source);
    }
  }
  return expanded;
};

const intersects = (a, b) => {
  for (const item of a) if (b.has(item)) return true;
  return false;
};

const linkReason = (from, to, outputSet, inputSet) => {
  const shared = [...outputSet].filter((item) => inputSet.has(item)).slice(0, 3);
  if (shared.length) return `Output ${shared.join(", ")} can feed ${to.name}.`;
  return `${from.name} produces compatible project data for ${to.name}.`;
};

export function getInHouseToolById(toolId) {
  return IN_HOUSE_TOOL_RECORDS.find((tool) => tool.id === toolId) || null;
}

export function getInHouseToolContract(tool) {
  const source = tool?.metadata || tool || {};
  return {
    accepts: source.accepts || ["text"],
    produces: source.produces || ["text"],
    parallelSafe: source.parallelSafe !== false,
    requiresApproval: Boolean(source.requiresApproval),
    waterfallSignals: source.waterfallSignals || ["ready", "running", "complete"],
    searchPhrases: source.searchPhrases || [],
    domains: source.domains || []
  };
}

export function scoreInHouseToolForPrompt(tool, prompt = "", fileAnalysis = null) {
  const q = normalize([
    prompt,
    ...(fileAnalysis?.searchTerms || []),
    fileAnalysis?.summary || ""
  ].join(" "));
  if (!q) return 1;
  const contract = getInHouseToolContract(tool);
  const haystack = normalize([
    tool.name,
    tool.category,
    tool.description,
    ...(tool.tags || []),
    ...contract.searchPhrases,
    ...contract.accepts,
    ...contract.produces,
    ...contract.domains
  ].join(" "));
  let score = 0;
  if (haystack.includes(q)) score += 25;
  for (const token of q.split(/\s+/).filter((part) => part.length >= 3)) {
    if (haystack.includes(token)) score += 2;
  }
  for (const phrase of contract.searchPhrases) {
    const phraseText = normalize(phrase);
    if (phraseText && q.includes(phraseText.split(" ")[0])) score += 1;
  }
  if ((fileAnalysis?.recommendations || []).some((item) => haystack.includes(normalize(item.engine)))) score += 3;
  return score;
}

export function searchInHouseTools(query = "", options = {}) {
  const { fileAnalysis = null, limit = IN_HOUSE_TOOL_RECORDS.length, category = "All" } = options;
  return IN_HOUSE_TOOL_RECORDS
    .map((tool) => ({ tool, score: scoreInHouseToolForPrompt(tool, query, fileAnalysis) }))
    .filter(({ tool, score }) => score > 0 && (category === "All" || tool.category === category))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit)
    .map((item, index) => ({ ...item, rank: index + 1 }));
}

export function generateInHouseCompatibilityMatrix(toolRecords = IN_HOUSE_TOOL_RECORDS) {
  const tools = toolRecords.map((tool) => ({ tool, contract: getInHouseToolContract(tool) }));
  const links = [];
  for (const from of tools) {
    const outputSet = expandContracts(from.contract.produces);
    for (const to of tools) {
      if (from.tool.id === to.tool.id) continue;
      const inputSet = expandContracts(to.contract.accepts);
      if (!intersects(outputSet, inputSet)) continue;
      const readiness = to.contract.accepts.some((input) => ["prompt", "text", "uploaded-file-summary"].includes(input)) ? "parallel-ready" : "waits-for-output";
      links.push({
        fromToolId: from.tool.id,
        fromToolName: from.tool.name,
        toToolId: to.tool.id,
        toToolName: to.tool.name,
        reason: linkReason(from.tool, to.tool, outputSet, inputSet),
        parallelSafe: from.contract.parallelSafe && to.contract.parallelSafe,
        requiresApproval: from.contract.requiresApproval || to.contract.requiresApproval,
        readiness,
        signal: readiness === "parallel-ready" ? "can-run-early" : "wait-for-upstream"
      });
    }
  }
  const byTool = Object.fromEntries(toolRecords.map((tool) => [tool.id, { incoming: [], outgoing: [] }]));
  for (const link of links) {
    byTool[link.fromToolId]?.outgoing.push(link);
    byTool[link.toToolId]?.incoming.push(link);
  }
  return {
    version: IN_HOUSE_TOOLS_VERSION,
    toolCount: toolRecords.length,
    linkCount: links.length,
    parallelSafeLinks: links.filter((link) => link.parallelSafe).length,
    approvalLinks: links.filter((link) => link.requiresApproval).length,
    links,
    byTool
  };
}

export function buildInHouseWorkflowSuggestion({ prompt = "", fileAnalysis = null, limit = 16, maxParallel = 4 } = {}) {
  const ranked = searchInHouseTools(prompt, { fileAnalysis, limit: Math.max(limit * 2, 24) });
  const selected = ranked.slice(0, limit).map((item) => item.tool);
  const matrix = generateInHouseCompatibilityMatrix(selected);
  const incomingById = new Map(selected.map((tool) => [tool.id, matrix.links.filter((link) => link.toToolId === tool.id)]));
  const tasks = selected.map((tool, index) => {
    const contract = getInHouseToolContract(tool);
    const incoming = incomingById.get(tool.id) || [];
    const canStartFromProject = contract.accepts.some((input) => ["prompt", "text", "uploaded-file-summary", "file-preview"].includes(input));
    const status = index === 0 || canStartFromProject || incoming.length === 0 ? "ready" : "waiting";
    return {
      id: `inhouse-task-${index + 1}`,
      index,
      toolId: tool.id,
      toolName: tool.name,
      accepts: contract.accepts,
      produces: contract.produces,
      status,
      signal: status === "ready" && contract.parallelSafe ? "ready-for-multitask" : status === "ready" ? "ready" : "waiting-for-compatible-output",
      parallelSafe: contract.parallelSafe,
      requiresApproval: contract.requiresApproval,
      dependencies: incoming.slice(0, 4).map((link) => link.fromToolId),
      explanation: tool.description
    };
  });
  const ready = tasks.filter((task) => task.status === "ready" && task.parallelSafe);
  const batches = [];
  for (let index = 0; index < ready.length; index += maxParallel) {
    batches.push({
      batchIndex: batches.length,
      mode: "paid-multitask",
      tasks: ready.slice(index, index + maxParallel),
      signal: "run-together"
    });
  }
  const sequential = tasks.filter((task) => !ready.some((readyTask) => readyTask.id === task.id));
  for (const task of sequential) {
    batches.push({ batchIndex: batches.length, mode: "waterfall", tasks: [task], signal: task.signal });
  }
  return {
    version: IN_HOUSE_TOOLS_VERSION,
    prompt,
    fileAnalysisSummary: fileAnalysis?.summary || "No file analysis supplied.",
    selectedToolCount: selected.length,
    compatibilityLinkCount: matrix.linkCount,
    tasks,
    batches,
    signalSummary: `${ready.length} task${ready.length === 1 ? "" : "s"} can run early with paid multitask; ${tasks.length - ready.length} wait for waterfall order or upstream output.`,
    selectedTools: selected,
    compatibilityMatrix: matrix
  };
}

export function verifyInHouseToolSuite({ toolRecords = IN_HOUSE_TOOL_RECORDS, knownEngines = [] } = {}) {
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const known = new Set(knownEngines);
  for (const tool of toolRecords) {
    if (!tool.id) errors.push("tool is missing id");
    if (ids.has(tool.id)) errors.push(`duplicate tool id: ${tool.id}`);
    ids.add(tool.id);
    if (!tool.name || !tool.description) errors.push(`${tool.id} is missing name or description`);
    if (known.size && !known.has(tool.engine)) errors.push(`${tool.id} uses unknown engine ${tool.engine}`);
    if (!Array.isArray(tool.tags) || tool.tags.length < 12) errors.push(`${tool.id} needs at least 12 searchable tags`);
    const contract = getInHouseToolContract(tool);
    if (!contract.accepts.length || !contract.produces.length) errors.push(`${tool.id} needs input/output contracts`);
    if (!contract.searchPhrases.length || contract.searchPhrases.length < 8) errors.push(`${tool.id} needs at least 8 search phrases`);
  }
  const matrix = generateInHouseCompatibilityMatrix(toolRecords);
  for (const tool of toolRecords) {
    const links = matrix.byTool[tool.id] || { incoming: [], outgoing: [] };
    if (!links.incoming.length && !links.outgoing.length) warnings.push(`${tool.id} has no compatibility links`);
  }
  return {
    version: IN_HOUSE_TOOLS_VERSION,
    ok: errors.length === 0,
    errors,
    warnings,
    stats: {
      toolCount: toolRecords.length,
      linkCount: matrix.linkCount,
      parallelSafeLinks: matrix.parallelSafeLinks,
      approvalLinks: matrix.approvalLinks,
      searchableTagCount: toolRecords.reduce((sum, tool) => sum + (tool.tags || []).length, 0),
      searchPhraseCount: toolRecords.reduce((sum, tool) => sum + getInHouseToolContract(tool).searchPhrases.length, 0)
    }
  };
}

export function buildInHouseCompatibilityReport({ toolRecords = IN_HOUSE_TOOL_RECORDS, limit = 20 } = {}) {
  const matrix = generateInHouseCompatibilityMatrix(toolRecords);
  const verification = verifyInHouseToolSuite({ toolRecords });
  const topConnected = toolRecords
    .map((tool) => {
      const links = matrix.byTool[tool.id] || { incoming: [], outgoing: [] };
      return {
        toolId: tool.id,
        toolName: tool.name,
        category: tool.category,
        incoming: links.incoming.length,
        outgoing: links.outgoing.length,
        totalLinks: links.incoming.length + links.outgoing.length,
        sampleOutputs: getInHouseToolContract(tool).produces.slice(0, 4),
        sampleAccepts: getInHouseToolContract(tool).accepts.slice(0, 4)
      };
    })
    .sort((a, b) => b.totalLinks - a.totalLinks || a.toolName.localeCompare(b.toolName))
    .slice(0, limit);
  return {
    version: IN_HOUSE_TOOLS_VERSION,
    summary: `${toolRecords.length} in-house tools · ${matrix.linkCount} compatibility links · ${matrix.parallelSafeLinks} parallel-safe links · ${matrix.approvalLinks} approval-sensitive links.`,
    verification,
    topConnected,
    sampleLinks: matrix.links.slice(0, limit),
    matrix
  };
}
