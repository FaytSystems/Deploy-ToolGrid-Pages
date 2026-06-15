const normalize = (value) => String(value || "").toLowerCase().trim();
const slugify = (value) => normalize(value)
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .slice(0, 90);

const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];

export const MASSIVE_TOOL_FACTORY_VERSION = "2026-06-13-massive-tool-factory-v1";
export const MASSIVE_TOOL_FACTORY_TARGET_COUNT = 5100;
export const MASSIVE_TOOL_FACTORY_LABEL = "Massive Tool Factory Specific Tool";

export const MASSIVE_TOOL_DOMAINS = Object.freeze([
  { field: "Chicken Coop Building", macro: "Blueprints & Build Planning", tags: ["chicken coop", "blueprint", "homestead", "roosts", "nesting boxes", "materials"] },
  { field: "Shed Construction", macro: "Blueprints & Build Planning", tags: ["shed", "framing", "lumber", "roof", "foundation", "materials"] },
  { field: "Tiny Home Planning", macro: "Blueprints & Build Planning", tags: ["tiny home", "layout", "floor plan", "budget", "materials", "build"] },
  { field: "Greenhouse Setup", macro: "Agriculture & Growing", tags: ["greenhouse", "seedlings", "humidity", "lighting", "ventilation", "plants"] },
  { field: "Mushroom Farm Operations", macro: "Agriculture & Growing", tags: ["mushroom", "substrate", "contamination", "harvest", "farm", "batch"] },
  { field: "Hydroponic Garden", macro: "Agriculture & Growing", tags: ["hydroponics", "nutrients", "ph", "reservoir", "lights", "grow"] },
  { field: "Home Garden Planning", macro: "Agriculture & Growing", tags: ["garden", "planting", "spacing", "bed", "soil", "harvest"] },
  { field: "Compost System", macro: "Agriculture & Growing", tags: ["compost", "browns", "greens", "moisture", "turning", "soil"] },
  { field: "Restaurant Kitchen", macro: "Food & Hospitality", tags: ["restaurant", "kitchen", "prep", "inventory", "recipe", "order sheet"] },
  { field: "Catering Business", macro: "Food & Hospitality", tags: ["catering", "event", "menu", "guest count", "prep", "quote"] },
  { field: "Bakery Production", macro: "Food & Hospitality", tags: ["bakery", "batch", "recipe", "proofing", "ingredients", "orders"] },
  { field: "Food Truck", macro: "Food & Hospitality", tags: ["food truck", "menu", "route", "inventory", "sales", "prep"] },
  { field: "Coffee Shop", macro: "Food & Hospitality", tags: ["coffee", "shop", "drinks", "inventory", "schedule", "customer"] },
  { field: "Ecommerce Store", macro: "Commerce & Sales", tags: ["ecommerce", "product", "sku", "listing", "price", "shipping"] },
  { field: "Marketplace Seller", macro: "Commerce & Sales", tags: ["marketplace", "seller", "listing", "order", "review", "sku"] },
  { field: "Retail Shop", macro: "Commerce & Sales", tags: ["retail", "shelf", "tag", "receipt", "discount", "inventory"] },
  { field: "Wholesale Sourcing", macro: "Commerce & Sales", tags: ["wholesale", "supplier", "moq", "unit cost", "sourcing", "vendor"] },
  { field: "Price Shopping", macro: "Commerce & Sales", tags: ["price", "comparison", "deal", "sale", "budget", "product"] },
  { field: "Sales Pipeline", macro: "Commerce & Sales", tags: ["sales", "crm", "lead", "deal", "follow up", "forecast"] },
  { field: "Customer Support", macro: "Customer & Communication", tags: ["support", "ticket", "reply", "customer", "faq", "response"] },
  { field: "Email Marketing", macro: "Customer & Communication", tags: ["email", "campaign", "subject", "newsletter", "click", "utm"] },
  { field: "Client Proposal", macro: "Customer & Communication", tags: ["proposal", "client", "scope", "quote", "approval", "deliverable"] },
  { field: "Agency Project", macro: "Customer & Communication", tags: ["agency", "brief", "content", "client", "review", "handoff"] },
  { field: "Community Management", macro: "Customer & Communication", tags: ["community", "moderation", "announcement", "member", "event", "group"] },
  { field: "Local SEO", macro: "Marketing & Content", tags: ["local seo", "review", "service area", "business profile", "ranking", "keyword"] },
  { field: "Blog Content", macro: "Marketing & Content", tags: ["blog", "article", "outline", "seo", "title", "meta"] },
  { field: "Video Creator", macro: "Marketing & Content", tags: ["video", "script", "thumbnail", "caption", "creator", "youtube"] },
  { field: "Podcast Production", macro: "Marketing & Content", tags: ["podcast", "episode", "transcript", "show notes", "guest", "sponsor"] },
  { field: "Social Media Campaign", macro: "Marketing & Content", tags: ["social", "caption", "hashtag", "post", "calendar", "engagement"] },
  { field: "Brand Design", macro: "Marketing & Content", tags: ["brand", "palette", "logo", "style", "asset", "design"] },
  { field: "Audio Visualizer", macro: "Creative Media", tags: ["audio", "visualizer", "waveform", "gif", "loop", "lighting"] },
  { field: "RGB Motion Graphics", macro: "Creative Media", tags: ["rgb", "motion", "shape", "path", "glow", "overlay"] },
  { field: "Photo Editing", macro: "Creative Media", tags: ["photo", "gallery", "caption", "retouch", "metadata", "image"] },
  { field: "Video Editing", macro: "Creative Media", tags: ["video", "clip", "timeline", "overlay", "export", "effects"] },
  { field: "Theme Customization", macro: "Creative Media", tags: ["theme", "profile", "colors", "rgb", "template", "sign in"] },
  { field: "Music Release", macro: "Creative Media", tags: ["music", "track", "release", "credits", "royalty", "playlist"] },
  { field: "Web Analytics", macro: "Analytics & Data", tags: ["analytics", "conversion", "traffic", "funnel", "event", "report"] },
  { field: "Data Cleanup", macro: "Analytics & Data", tags: ["data", "cleanup", "dedupe", "mapping", "validation", "schema"] },
  { field: "Research Notes", macro: "Analytics & Data", tags: ["research", "notes", "source", "summary", "citation", "findings"] },
  { field: "Survey Analysis", macro: "Analytics & Data", tags: ["survey", "responses", "analysis", "rating", "comments", "insight"] },
  { field: "Financial Forecast", macro: "Finance & Admin", tags: ["finance", "forecast", "budget", "cash flow", "revenue", "scenario"] },
  { field: "Invoice Billing", macro: "Finance & Admin", tags: ["invoice", "billing", "payment", "tax", "discount", "total"] },
  { field: "Bookkeeping", macro: "Finance & Admin", tags: ["bookkeeping", "expense", "receipt", "tax", "monthly", "profit"] },
  { field: "Loan Planning", macro: "Finance & Admin", tags: ["loan", "payment", "interest", "amortization", "budget", "banking"] },
  { field: "Grant Writing", macro: "Finance & Admin", tags: ["grant", "funding", "budget narrative", "impact", "proposal", "milestone"] },
  { field: "Legal Admin", macro: "Operations & Compliance", tags: ["legal", "contract", "clause", "deadline", "red flag", "case"] },
  { field: "Compliance Audit", macro: "Operations & Compliance", tags: ["compliance", "audit", "policy", "risk", "checklist", "records"] },
  { field: "Safety Inspection", macro: "Operations & Compliance", tags: ["safety", "inspection", "incident", "checklist", "corrective action", "signoff"] },
  { field: "Facility Management", macro: "Operations & Compliance", tags: ["facility", "maintenance", "work order", "asset", "inspection", "building"] },
  { field: "Vendor Onboarding", macro: "Operations & Compliance", tags: ["vendor", "supplier", "w9", "insurance", "approval", "documents"] },
  { field: "Procurement", macro: "Operations & Compliance", tags: ["procurement", "purchase order", "quote", "supplier", "approval", "inventory"] },
  { field: "HR Hiring", macro: "People & Training", tags: ["hiring", "candidate", "interview", "job description", "offer", "recruiting"] },
  { field: "Employee Training", macro: "People & Training", tags: ["training", "lesson", "playbook", "quiz", "onboarding", "enablement"] },
  { field: "Fitness Coaching", macro: "People & Training", tags: ["fitness", "workout", "coach", "check in", "progress", "meal prep"] },
  { field: "Education Course", macro: "People & Training", tags: ["course", "lesson", "student", "quiz", "study", "feedback"] },
  { field: "Healthcare Admin", macro: "People & Training", tags: ["clinic", "intake", "appointment", "privacy", "visit", "care instructions"] },
  { field: "Real Estate Listing", macro: "Property & Services", tags: ["real estate", "listing", "property", "showing", "features", "lead"] },
  { field: "Property Management", macro: "Property & Services", tags: ["property", "tenant", "lease", "rent", "inspection", "maintenance"] },
  { field: "Home Service Estimate", macro: "Property & Services", tags: ["home service", "estimate", "job site", "technician", "parts", "work order"] },
  { field: "Construction Contractor", macro: "Property & Services", tags: ["construction", "contractor", "takeoff", "materials", "change order", "job site"] },
  { field: "Landscaping Service", macro: "Property & Services", tags: ["landscaping", "lawn care", "route", "crew", "mulch", "seasonal"] },
  { field: "HVAC Plumbing", macro: "Property & Services", tags: ["hvac", "plumbing", "service call", "fixture", "equipment", "aftercare"] },
  { field: "Automotive Repair", macro: "Property & Services", tags: ["automotive", "repair", "diagnostic", "parts", "labor", "maintenance"] },
  { field: "Beauty Salon", macro: "Local Services", tags: ["salon", "beauty", "appointment", "stylist", "service menu", "aftercare"] },
  { field: "Pet Care", macro: "Local Services", tags: ["pet", "grooming", "boarding", "feeding", "incident", "owner message"] },
  { field: "Photography Studio", macro: "Local Services", tags: ["photography", "shoot", "shot list", "gallery", "license", "delivery"] },
  { field: "Event Production", macro: "Events & Travel", tags: ["event", "run of show", "vendor", "badge", "timeline", "venue"] },
  { field: "Travel Planning", macro: "Events & Travel", tags: ["travel", "itinerary", "packing", "budget", "schedule", "reservation"] },
  { field: "Wedding Planning", macro: "Events & Travel", tags: ["wedding", "guest list", "rsvp", "vendor", "timeline", "budget"] },
  { field: "Transportation Logistics", macro: "Logistics & Inventory", tags: ["logistics", "dispatch", "route", "delivery", "fleet", "shipment"] },
  { field: "Warehouse Management", macro: "Logistics & Inventory", tags: ["warehouse", "inventory", "packing", "reorder", "stock", "qa"] },
  { field: "Inventory Forecasting", macro: "Logistics & Inventory", tags: ["inventory", "forecast", "reorder", "demand", "safety stock", "sell through"] },
  { field: "Manufacturing Run", macro: "Logistics & Inventory", tags: ["manufacturing", "production", "batch", "defect", "qa", "packing slip"] },
  { field: "IT Admin", macro: "Tech & Security", tags: ["it admin", "device", "access", "asset", "help desk", "software"] },
  { field: "Cybersecurity", macro: "Tech & Security", tags: ["cybersecurity", "privacy", "incident", "risk", "access review", "policy"] },
  { field: "Cloud Ops", macro: "Tech & Security", tags: ["cloud ops", "devops", "deployment", "uptime", "runbook", "release"] },
  { field: "SaaS Support", macro: "Tech & Security", tags: ["saas", "support ticket", "bug", "release note", "help article", "sla"] },
  { field: "API Project", macro: "Tech & Security", tags: ["api", "endpoint", "auth", "rate limit", "integration", "developer"] },
  { field: "AI Prompt Operations", macro: "AI & Automation", tags: ["ai", "prompt", "agent", "review", "prompt library", "workflow"] },
  { field: "Document Automation", macro: "AI & Automation", tags: ["document", "template", "merge fields", "pdf", "form", "packet"] },
  { field: "Workflow Automation", macro: "AI & Automation", tags: ["workflow", "automation", "task", "queue", "waterfall", "approval"] },
  { field: "Project Planning", macro: "AI & Automation", tags: ["project", "plan", "scope", "milestone", "task", "timeline"] },
  { field: "Nonprofit Fundraising", macro: "Nonprofit & Government", tags: ["nonprofit", "donor", "campaign", "donation", "impact", "fundraising"] },
  { field: "Government Permit", macro: "Nonprofit & Government", tags: ["government", "permit", "application", "public record", "department", "request"] },
  { field: "Public Records", macro: "Nonprofit & Government", tags: ["public record", "case file", "department", "records", "request", "summary"] },
  { field: "Academic Lab", macro: "Research & Science", tags: ["lab", "sample", "experiment", "protocol", "chain of custody", "result"] },
  { field: "Sustainability Audit", macro: "Research & Science", tags: ["sustainability", "carbon", "waste", "recycling", "water", "environment"] },
  { field: "Solar Energy", macro: "Research & Science", tags: ["solar", "energy", "utility bill", "battery", "panel", "savings"] },
  { field: "Subscription Membership", macro: "Membership & Communities", tags: ["subscription", "membership", "billing", "churn", "renewal", "subscriber"] },
  { field: "Online Community", macro: "Membership & Communities", tags: ["online community", "forum", "member", "moderation", "announcement", "event"] },
  { field: "Farmers Market CSA", macro: "Membership & Communities", tags: ["farmers market", "csa", "produce", "pickup", "market sales", "booth"] },
  { field: "Home Organization", macro: "Personal & Household", tags: ["home organization", "declutter", "storage bin", "chore", "household", "supplies"] },
  { field: "Personal Productivity", macro: "Personal & Household", tags: ["productivity", "daily plan", "priority", "habit", "focus", "time block"] },
  { field: "Family Schedule", macro: "Personal & Household", tags: ["family", "schedule", "calendar", "chores", "appointments", "meal plan"] },
  { field: "Esports Tournament", macro: "Gaming & Entertainment", tags: ["esports", "tournament", "player", "match", "stream", "bracket"] },
  { field: "Game Stream", macro: "Gaming & Entertainment", tags: ["stream", "gaming", "overlay", "schedule", "clip", "audience"] },
  { field: "Live Webcam Wall", macro: "Media Discovery", tags: ["webcam", "nature", "city", "beach", "scenic", "safe"] },
  { field: "Fact Checking", macro: "Media Discovery", tags: ["factcheck", "quote", "evidence", "source", "citation", "clipping"] },
  { field: "Product Review Research", macro: "Media Discovery", tags: ["product review", "comparison", "pros cons", "rating", "source", "summary"] },
  { field: "Document Review", macro: "Documents & Files", tags: ["document", "review", "summary", "red flag", "notes", "approval"] },
  { field: "Spreadsheet Ops", macro: "Documents & Files", tags: ["spreadsheet", "csv", "table", "rows", "columns", "cleanup"] },
  { field: "PDF Packet", macro: "Documents & Files", tags: ["pdf", "packet", "merge", "extract", "checklist", "export"] }
]);

export const MASSIVE_TOOL_OPERATIONS = Object.freeze([
  { label: "Prompt Clarifier", engine: "text_transform", config: { mode: "sentencecase" }, tags: ["clarify", "prompt", "requirements", "ask questions"] },
  { label: "Brief Formatter", engine: "text_transform", config: { mode: "trim" }, tags: ["brief", "format", "clean text", "normalize"] },
  { label: "Slug Generator", engine: "text_transform", config: { mode: "slugify" }, tags: ["slug", "url", "name", "identifier"] },
  { label: "Title Case Converter", engine: "text_transform", config: { mode: "titlecase" }, tags: ["title", "headline", "case", "format"] },
  { label: "Clean Spaces Tool", engine: "text_transform", config: { mode: "remove_extra_spaces" }, tags: ["spaces", "cleanup", "normalize", "text"] },
  { label: "Blank Line Cleaner", engine: "text_transform", config: { mode: "remove_blank_lines" }, tags: ["blank lines", "cleanup", "notes", "document"] },
  { label: "Find Replace Assistant", engine: "text_transform", config: { mode: "find_replace" }, tags: ["find replace", "swap", "edit", "update"] },
  { label: "Word Count Auditor", engine: "text_stats", config: { stat: "words" }, tags: ["word count", "measure", "length", "audit"] },
  { label: "Reading Time Estimator", engine: "text_stats", config: { stat: "estimated_reading_time_minutes" }, tags: ["reading time", "estimate", "length", "content"] },
  { label: "Line Count Checker", engine: "text_stats", config: { stat: "lines" }, tags: ["lines", "count", "audit", "records"] },
  { label: "Keyword Density Scanner", engine: "keyword_density", config: {}, tags: ["keyword", "frequency", "seo", "search"] },
  { label: "Markdown Table Builder", engine: "markdown_table", config: {}, tags: ["table", "markdown", "report", "rows"] },
  { label: "CSV To JSON Converter", engine: "csv_tool", config: { mode: "csv_to_json" }, tags: ["csv", "json", "convert", "spreadsheet"] },
  { label: "JSON To CSV Converter", engine: "csv_tool", config: { mode: "json_to_csv" }, tags: ["json", "csv", "convert", "export"] },
  { label: "JSON Formatter", engine: "json_tool", config: { mode: "format" }, tags: ["json", "format", "developer", "pretty"] },
  { label: "JSON Minifier", engine: "json_tool", config: { mode: "minify" }, tags: ["json", "minify", "compact", "developer"] },
  { label: "JSON Key Finder", engine: "json_tool", config: { mode: "keys" }, tags: ["json", "keys", "schema", "map"] },
  { label: "URL Encoder", engine: "encoder", config: { mode: "url_encode" }, tags: ["url", "encode", "link", "web"] },
  { label: "URL Decoder", engine: "encoder", config: { mode: "url_decode" }, tags: ["url", "decode", "link", "web"] },
  { label: "HTML Escape Tool", engine: "encoder", config: { mode: "html_escape" }, tags: ["html", "escape", "safe", "developer"] },
  { label: "Base64 Encoder", engine: "encoder", config: { mode: "base64_encode" }, tags: ["base64", "encode", "data", "developer"] },
  { label: "Base64 Decoder", engine: "encoder", config: { mode: "base64_decode" }, tags: ["base64", "decode", "data", "developer"] },
  { label: "List Sorter A-Z", engine: "list_transform", config: { mode: "sort_az" }, tags: ["list", "sort", "organize", "alphabetize"] },
  { label: "List Deduper", engine: "list_transform", config: { mode: "dedupe" }, tags: ["list", "dedupe", "cleanup", "unique"] },
  { label: "List Numberer", engine: "list_transform", config: { mode: "number_lines" }, tags: ["list", "number", "steps", "sequence"] },
  { label: "Random Picker", engine: "random_number", config: {}, tags: ["random", "pick", "sample", "selector"] },
  { label: "Secure Password Generator", engine: "password_generator", config: {}, tags: ["password", "secure", "random", "credential"] },
  { label: "Unique ID Generator", engine: "uuid_generator", config: {}, tags: ["uuid", "id", "tracking", "identifier"] },
  { label: "Percentage Calculator", engine: "percentage", config: {}, tags: ["percent", "ratio", "portion", "calculator"] },
  { label: "Percent Change Calculator", engine: "percent_change", config: {}, tags: ["change", "growth", "increase", "decrease"] },
  { label: "Simple Total Calculator", engine: "simple_formula", config: { mode: "add" }, tags: ["add", "total", "calculator", "sum"] },
  { label: "Difference Calculator", engine: "simple_formula", config: { mode: "subtract" }, tags: ["subtract", "difference", "variance", "calculator"] },
  { label: "Multiplier Calculator", engine: "simple_formula", config: { mode: "multiply" }, tags: ["multiply", "units", "quantity", "calculator"] },
  { label: "Average Calculator", engine: "simple_formula", config: { mode: "average" }, tags: ["average", "mean", "score", "calculator"] },
  { label: "Area Calculator", engine: "simple_formula", config: { mode: "area_rectangle" }, tags: ["area", "layout", "space", "rectangle"] },
  { label: "Volume Calculator", engine: "simple_formula", config: { mode: "volume_box" }, tags: ["volume", "box", "capacity", "dimensions"] },
  { label: "Invoice Total Calculator", engine: "invoice_total", config: {}, tags: ["invoice", "tax", "discount", "total"] },
  { label: "Loan Payment Estimator", engine: "loan_payment", config: {}, tags: ["loan", "payment", "monthly", "finance"] },
  { label: "Compound Growth Estimator", engine: "compound_interest", config: {}, tags: ["compound", "growth", "forecast", "finance"] },
  { label: "Tip Split Calculator", engine: "tip_calculator", config: {}, tags: ["tip", "split", "bill", "people"] },
  { label: "Date Difference Calculator", engine: "date_diff", config: {}, tags: ["date", "duration", "timeline", "deadline"] },
  { label: "Deadline Date Adder", engine: "date_add", config: { unit: "days" }, tags: ["date", "add", "deadline", "schedule"] },
  { label: "Unix Time Converter", engine: "unix_time", config: { mode: "to_date" }, tags: ["timestamp", "unix", "date", "developer"] },
  { label: "Length Unit Converter", engine: "unit_convert", config: { kind: "length", from: "foot", to: "meter" }, tags: ["length", "unit", "convert", "feet meters"] },
  { label: "Weight Unit Converter", engine: "unit_convert", config: { kind: "mass", from: "pound", to: "kilogram" }, tags: ["weight", "mass", "unit", "pounds kilograms"] },
  { label: "Volume Unit Converter", engine: "unit_convert", config: { kind: "volume", from: "gallon_us", to: "liter" }, tags: ["volume", "gallon", "liter", "unit"] },
  { label: "Temperature Converter", engine: "unit_convert", config: { kind: "temperature", from: "fahrenheit", to: "celsius" }, tags: ["temperature", "fahrenheit", "celsius", "unit"] },
  { label: "Recipe Scaler", engine: "recipe_scale", config: {}, tags: ["recipe", "scale", "servings", "ingredients"] },
  { label: "Mix Ratio Planner", engine: "soil_mix", config: {}, tags: ["mix", "ratio", "parts", "materials"] },
  { label: "Spacing Capacity Planner", engine: "plant_spacing", config: {}, tags: ["spacing", "capacity", "layout", "plan"] },
  { label: "Hex To RGB Converter", engine: "color_convert", config: { mode: "hex_to_rgb" }, tags: ["hex", "rgb", "color", "design"] },
  { label: "RGB To Hex Converter", engine: "color_convert", config: { mode: "rgb_to_hex" }, tags: ["rgb", "hex", "color", "design"] },
  { label: "Contrast Ratio Checker", engine: "contrast_ratio", config: {}, tags: ["contrast", "accessibility", "readability", "color"] },
  { label: "UTM Link Builder", engine: "utm_builder", config: {}, tags: ["utm", "campaign", "link", "tracking"] },
  { label: "Meta Length Checker", engine: "meta_length", config: {}, tags: ["meta", "title", "description", "seo"] }
]);

function buildTool(domain, operation, domainIndex, operationIndex) {
  const id = `factory-${slugify(domain.field)}-${slugify(operation.label)}`;
  const noun = domain.field.toLowerCase();
  return {
    id,
    name: `${domain.field} ${operation.label}`,
    category: domain.macro,
    engine: operation.engine,
    factoryGenerated: true,
    systemLabel: MASSIVE_TOOL_FACTORY_LABEL,
    description: `Specific ${operation.label.toLowerCase()} for ${noun}. It is generated by the massive tool factory and can be paired with a reusable skeleton when the project needs the same generic function in another field.`,
    tags: unique([
      "massive tool factory",
      "specific tool",
      "generated specific tool",
      "toolgrid factory",
      "workflow tool",
      "waterfall compatible",
      "prompt searchable",
      "skeleton-ready",
      domain.field,
      domain.macro,
      ...domain.tags,
      operation.label,
      operation.engine,
      ...(operation.tags || [])
    ]),
    searchPhrases: unique([
      `${domain.field} ${operation.label}`,
      `${operation.label} for ${domain.field}`,
      `${domain.field} project ${operation.label}`,
      `${domain.field} workflow ${operation.label}`,
      `${domain.field} waterfall ${operation.label}`,
      `${domain.field} AI tool ${operation.label}`,
      `${domain.field} ${operation.tags?.[0] || operation.label}`,
      `${domain.tags?.[0] || domain.field} ${operation.label}`,
      `make a ${domain.field.toLowerCase()} ${operation.label.toLowerCase()}`,
      `help with ${domain.field.toLowerCase()} ${operation.label.toLowerCase()}`
    ]),
    config: {
      ...operation.config,
      factoryDomain: domain.field,
      factoryMacro: domain.macro,
      factoryDomainIndex: domainIndex,
      factoryOperationIndex: operationIndex,
      skeletonReady: true
    }
  };
}

export const MASSIVE_TOOL_FACTORY_RECORDS = Object.freeze(
  MASSIVE_TOOL_DOMAINS.flatMap((domain, domainIndex) =>
    MASSIVE_TOOL_OPERATIONS.slice(0, 50).map((operation, operationIndex) =>
      buildTool(domain, operation, domainIndex, operationIndex)
    )
  )
);

export function searchMassiveToolFactoryTools(query = "", { limit = 32, category = "all" } = {}) {
  const q = normalize(query);
  return MASSIVE_TOOL_FACTORY_RECORDS
    .map((tool) => {
      const haystack = normalize(`${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`);
      let score = 0;
      if (!q) score += 1;
      if (normalize(tool.name).includes(q)) score += 20;
      if (normalize(tool.category).includes(q)) score += 8;
      for (const token of q.split(/[^a-z0-9]+/).filter(Boolean)) if (haystack.includes(token)) score += 1;
      if (/skeleton|generic|reusable|waterfall|workflow/.test(q) && tool.config?.skeletonReady) score += 5;
      return { tool, score };
    })
    .filter((item) => item.score > 0 && (category === "all" || item.tool.category === category))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function buildMassiveToolFactorySummary() {
  const byMacro = MASSIVE_TOOL_FACTORY_RECORDS.reduce((counts, tool) => {
    counts[tool.category] = (counts[tool.category] || 0) + 1;
    return counts;
  }, {});
  const byEngine = MASSIVE_TOOL_FACTORY_RECORDS.reduce((counts, tool) => {
    counts[tool.engine] = (counts[tool.engine] || 0) + 1;
    return counts;
  }, {});
  return {
    version: MASSIVE_TOOL_FACTORY_VERSION,
    toolCount: MASSIVE_TOOL_FACTORY_RECORDS.length,
    domainCount: MASSIVE_TOOL_DOMAINS.length,
    operationCount: MASSIVE_TOOL_OPERATIONS.slice(0, 50).length,
    macroCategoryCount: Object.keys(byMacro).length,
    engineCount: Object.keys(byEngine).length,
    byMacro,
    byEngine,
    skeletonReadyCount: MASSIVE_TOOL_FACTORY_RECORDS.filter((tool) => tool.config?.skeletonReady).length,
    summary: `${MASSIVE_TOOL_FACTORY_RECORDS.length.toLocaleString()} generated specific tools across ${MASSIVE_TOOL_DOMAINS.length} domains and ${MASSIVE_TOOL_OPERATIONS.slice(0, 50).length} reusable operation families.`
  };
}

export function verifyMassiveToolFactorySuite({ knownEngines = [] } = {}) {
  const known = new Set(knownEngines);
  const errors = [];
  const ids = new Set();
  for (const tool of MASSIVE_TOOL_FACTORY_RECORDS) {
    if (!tool.id) errors.push("factory tool missing id");
    if (ids.has(tool.id)) errors.push(`duplicate factory tool id ${tool.id}`);
    ids.add(tool.id);
    if (!known.has(tool.engine)) errors.push(`${tool.id} uses unknown engine ${tool.engine}`);
    if (!tool.factoryGenerated) errors.push(`${tool.id} is missing factoryGenerated flag`);
    if (tool.systemLabel !== MASSIVE_TOOL_FACTORY_LABEL) errors.push(`${tool.id} is missing system label`);
    if ((tool.tags || []).length < 16) errors.push(`${tool.id} needs dense tags`);
    if ((tool.searchPhrases || []).length < 8) errors.push(`${tool.id} needs search phrases`);
    if (!tool.config?.skeletonReady) errors.push(`${tool.id} should be skeleton ready`);
  }
  if (MASSIVE_TOOL_FACTORY_RECORDS.length !== MASSIVE_TOOL_FACTORY_TARGET_COUNT) {
    errors.push(`expected ${MASSIVE_TOOL_FACTORY_TARGET_COUNT} factory tools, got ${MASSIVE_TOOL_FACTORY_RECORDS.length}`);
  }
  return { ok: errors.length === 0, errors, stats: buildMassiveToolFactorySummary() };
}
