const normalize = (value) => String(value ?? "").trim();
const lower = (value) => normalize(value).toLowerCase();
const slugify = (value) => lower(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0));
const money = (value) => `$${(Number(value) || 0).toFixed(2)}`;
const lines = (text) => normalize(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

function parseCsv(text = "") {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;
  const input = `${String(text || "").replace(/\r\n/g, "\n")}\n`;
  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];
    if (char === '"' && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
    } else if (char === "\n" && !inQuotes) {
      row.push(current);
      rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }
  return rows.filter((candidate) => candidate.some((value) => normalize(value) !== ""));
}

function toCsvValue(value) {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvToObjects(text = "") {
  const parsed = parseCsv(text);
  if (parsed.length === 0) return { headers: [], objects: [] };
  const headers = parsed[0].map((header, index) => normalize(header) || `column_${index + 1}`);
  const objects = parsed.slice(1).map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""])));
  return { headers, objects };
}

function objectsToCsv(objects = []) {
  const rows = Array.isArray(objects) ? objects : [objects];
  const headers = [...new Set(rows.flatMap((row) => Object.keys(row || {})))];
  return [headers.map(toCsvValue).join(","), ...rows.map((row) => headers.map((header) => toCsvValue(row?.[header])).join(","))].join("\n");
}

function simpleSentences(text = "") {
  return normalize(text)
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function scoreSentence(sentence, keywords) {
  const s = lower(sentence);
  let score = Math.min(20, sentence.length / 20);
  for (const keyword of keywords) {
    if (keyword.length > 3 && s.includes(keyword)) score += 6;
  }
  if (/\b(important|must|should|required|deadline|risk|cost|price|customer|urgent|next)\b/i.test(sentence)) score += 4;
  return score;
}

function extractKeywords(text = "", limit = 12) {
  const stop = new Set("the and for that with this from have has are was were you your our but not into about more can will would should there their they them then than when where what how why also all any use using used into over under after before".split(" "));
  const counts = new Map();
  for (const word of lower(text).match(/[a-z0-9][a-z0-9'-]{2,}/g) || []) {
    if (!stop.has(word)) counts.set(word, (counts.get(word) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([word]) => word);
}

function parseItems(text = "") {
  const raw = lines(text).flatMap((line) => line.split(/\s*(?:;|\|)\s*/));
  return raw.map((item) => item.replace(/^[-*\d.)\s]+/, "").trim()).filter(Boolean);
}

function parseKeyValueLines(text = "") {
  const out = {};
  for (const line of lines(text)) {
    const match = line.match(/^([^:=,]+)\s*[:=,]\s*(.+)$/);
    if (match) out[match[1].trim()] = match[2].trim();
  }
  return out;
}

function stableColor(seed, index = 0) {
  const value = [...`${seed}-${index}`].reduce((sum, char) => sum + char.charCodeAt(0) * 17, 0);
  const hue = value % 360;
  return `hsl(${hue} 88% 58%)`;
}

function hexToRgb(hex) {
  const cleaned = String(hex || "#000000").replace("#", "");
  const full = cleaned.length === 3 ? cleaned.split("").map((c) => c + c).join("") : cleaned.padEnd(6, "0").slice(0, 6);
  const num = Number.parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("")}`;
}

function blend(hex, amount = 0.2) {
  const rgb = hexToRgb(hex);
  const mix = (channel) => channel + (255 - channel) * amount;
  return rgbToHex({ r: mix(rgb.r), g: mix(rgb.g), b: mix(rgb.b) });
}

function parsePriceRows(text = "") {
  const { headers, objects } = csvToObjects(text);
  if (!objects.length) {
    return parseItems(text).map((item) => {
      const priceMatch = item.match(/\$?([0-9]+(?:\.[0-9]{1,2})?)/);
      return { item, price: priceMatch ? Number(priceMatch[1]) : 0, source: "manual", url: "" };
    });
  }
  const priceKey = headers.find((header) => /price|cost|amount/i.test(header)) || headers[1];
  const nameKey = headers.find((header) => /name|product|item|title/i.test(header)) || headers[0];
  const sourceKey = headers.find((header) => /source|store|site|vendor/i.test(header)) || "source";
  const urlKey = headers.find((header) => /url|link/i.test(header)) || "url";
  return objects.map((row) => ({
    item: row[nameKey] || "Product",
    price: Number(String(row[priceKey] || "0").replace(/[^0-9.]/g, "")) || 0,
    source: row[sourceKey] || "manual",
    url: row[urlKey] || ""
  }));
}

function makeMarkdownTable(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map((value) => String(value ?? "").replaceAll("|", "\\|")).join(" | ")} |`)
  ].join("\n");
}

function buildSearchUrl(provider, query) {
  const encoded = encodeURIComponent(query);
  const bases = {
    general: `https://www.google.com/search?q=${encoded}`,
    shopping: `https://www.google.com/search?tbm=shop&q=${encoded}`,
    ebay: `https://www.ebay.com/sch/i.html?_nkw=${encoded}`,
    temu: `https://www.temu.com/search_result.html?search_key=${encoded}`,
    shein: `https://us.shein.com/pdsearch/${encoded}/`,
    alibaba: `https://www.alibaba.com/trade/search?SearchText=${encoded}`,
    amazon: `https://www.amazon.com/s?k=${encoded}`
  };
  return bases[provider] || bases.general;
}

export const FUNCTIONAL_TOOLS_VERSION = "2026-06-13-functional-daily-tools-v1";
export const FUNCTIONAL_TOOL_LABEL = "Production Functional Tool";
export const FUNCTIONAL_TOOL_TARGET_COUNT = 25;

const patterns = {
  summarize: { id: "summarize-and-extract", label: "Generic Summarize / Extract Skeleton", accepts: ["text", "document", "notes"], produces: ["summary", "key-points", "outline"], keywords: ["summarize", "extract", "condense", "brief"] },
  cleanTable: { id: "clean-and-analyze-table", label: "Generic Table Cleanup / Analysis Skeleton", accepts: ["csv", "spreadsheet", "rows"], produces: ["clean-table", "data-report", "csv"], keywords: ["clean data", "csv", "spreadsheet", "analyze rows"] },
  generateDoc: { id: "generate-business-document", label: "Generic Business Document Generator Skeleton", accepts: ["prompt", "facts", "notes"], produces: ["draft", "report", "message"], keywords: ["generate", "draft", "document", "business"] },
  plan: { id: "plan-and-checklist", label: "Generic Plan / Checklist Skeleton", accepts: ["goal", "tasks", "constraints"], produces: ["plan", "checklist", "schedule"], keywords: ["plan", "checklist", "steps", "project"] },
  shopping: { id: "compare-and-shortlist", label: "Generic Compare / Shortlist Skeleton", accepts: ["products", "budget", "criteria"], produces: ["shortlist", "comparison", "decision"], keywords: ["compare", "shortlist", "price", "buy"] },
  evidence: { id: "evidence-and-keyword-scan", label: "Generic Evidence / Keyword Scanner Skeleton", accepts: ["phrase", "text", "source"], produces: ["matches", "counts", "search-plan"], keywords: ["find", "count", "keyword", "evidence"] },
  visual: { id: "visual-asset-builder", label: "Generic Visual Asset Builder Skeleton", accepts: ["text", "data", "design-settings"], produces: ["svg", "labels", "visual"], keywords: ["visual", "svg", "label", "asset"] },
  finance: { id: "money-and-inventory-calculator", label: "Generic Money / Inventory Calculator Skeleton", accepts: ["amounts", "items", "rates"], produces: ["totals", "forecast", "reorder-plan"], keywords: ["money", "inventory", "budget", "invoice"] },
  marketing: { id: "marketing-and-seo-review", label: "Generic Marketing / SEO Review Skeleton", accepts: ["page", "keyword", "copy"], produces: ["seo-report", "recommendations", "campaign-copy"], keywords: ["seo", "marketing", "keywords", "customer"] },
  workflow: { id: "workflow-capture", label: "Generic Workflow Capture Skeleton", accepts: ["steps", "outputs", "notes"], produces: ["workflow", "template", "handoff"], keywords: ["workflow", "record", "template", "handoff"] }
};

const tool = (id, name, mode, description, tags, skeletonPattern, extra = {}) => ({
  id,
  name,
  category: "Functional Daily Tools",
  engine: "functional_tool",
  systemLabel: FUNCTIONAL_TOOL_LABEL,
  description,
  tags: [...new Set(["functional", "daily tool", "production browser tool", "runs locally", "toolgrid", ...tags])],
  searchPhrases: [...new Set([name, description, ...tags])],
  config: { mode, skeletonPattern, accepts: skeletonPattern.accepts, produces: skeletonPattern.produces, ...extra }
});

export const FUNCTIONAL_TOOL_RECORDS = Object.freeze([
  tool("functional-document-summarizer", "Document Summarizer", "document_summarizer", "Summarizes pasted text into key points, action items, and a short brief.", ["summarize document", "notes summary", "action items", "brief"], patterns.summarize),
  tool("functional-document-outline-extractor", "Document Outline Extractor", "document_outline", "Turns rough notes or a document into a clean heading outline with important terms.", ["outline", "headings", "extract structure", "document map"], patterns.summarize),
  tool("functional-csv-cleaner", "CSV Cleaner", "csv_cleaner", "Cleans CSV text by trimming cells, removing blank rows, and optionally deduping rows.", ["csv cleanup", "dedupe rows", "trim spreadsheet", "data cleaner"], patterns.cleanTable),
  tool("functional-spreadsheet-analyzer", "Spreadsheet Analyzer", "spreadsheet_analyzer", "Analyzes CSV columns, row counts, blanks, numeric totals, averages, minimums, and maximums.", ["spreadsheet analysis", "csv stats", "column report", "data audit"], patterns.cleanTable),
  tool("functional-email-draft-generator", "Email Draft Generator", "email_draft", "Creates a clear email draft from purpose, recipient, tone, and key details.", ["email", "draft", "customer message", "professional reply"], patterns.generateDoc),
  tool("functional-report-generator", "Report Generator", "report_generator", "Creates a structured report from notes, findings, risks, and next steps.", ["report", "business report", "markdown report", "summary report"], patterns.generateDoc),
  tool("functional-checklist-builder", "Checklist Builder", "checklist_builder", "Converts a goal or notes into a grouped checklist with priorities.", ["checklist", "task list", "todo", "priority checklist"], patterns.plan),
  tool("functional-project-plan-builder", "Project Plan Builder", "project_plan", "Builds a project plan with phases, tasks, owners, blockers, and acceptance checks.", ["project plan", "milestones", "phases", "acceptance criteria"], patterns.plan),
  tool("functional-product-shortlist-builder", "Product Shortlist Builder", "product_shortlist", "Ranks pasted product options by price, score, and user criteria.", ["product shortlist", "buying decision", "compare products", "rank options"], patterns.shopping),
  tool("functional-price-table-comparer", "Price Table Comparer", "price_table_compare", "Compares pasted product/price rows and marks cheapest, average, and expensive options.", ["price compare", "lowest price", "shopping table", "deal compare"], patterns.shopping),
  tool("functional-sale-scout-brief", "Sale Search Brief Builder", "sale_scout_brief", "Builds a safe shopping search plan with exact-match and sale/deal search links.", ["sale finder", "coupon search", "deal search", "price search links"], patterns.shopping),
  tool("functional-factcheck-query-builder", "FactCheck Query Builder", "factcheck_query", "Builds exact-match quote and evidence search queries with credible source lanes.", ["fact check", "quote finder", "source evidence", "news search"], patterns.evidence),
  tool("functional-phrase-counter", "Phrase Counter", "phrase_counter", "Counts exact phrase matches and common variations inside pasted text.", ["phrase count", "keyword count", "site text scan", "frequency"], patterns.evidence),
  tool("functional-social-keyword-scanner", "Social Keyword Scanner", "social_keyword_scanner", "Scans exported or pasted social posts for keywords, counts, and matching excerpts.", ["social keyword", "post scanner", "keyword excerpts", "content scan"], patterns.evidence),
  tool("functional-svg-code-card-generator", "SVG Code Card Generator", "svg_code_card", "Creates a downloadable SVG-style share card for a URL, code, label, or short message.", ["svg card", "share card", "label graphic", "code card"], patterns.visual),
  tool("functional-label-sheet-generator", "Label Sheet Generator", "label_sheet", "Turns CSV rows into a printable markdown label sheet for batches, inventory, or products.", ["labels", "batch labels", "product labels", "print sheet"], patterns.visual),
  tool("functional-invoice-builder", "Invoice Builder", "invoice_builder", "Builds an invoice summary from line items, tax, discount, shipping, and payment notes.", ["invoice", "line items", "tax", "total"], patterns.finance),
  tool("functional-budget-planner", "Budget Planner", "budget_planner", "Compares income and expenses, calculates surplus or deficit, and flags large spending areas.", ["budget", "expenses", "cash flow", "monthly planning"], patterns.finance),
  tool("functional-inventory-reorder-calculator", "Inventory Reorder Calculator", "inventory_reorder", "Calculates reorder status from stock, daily usage, lead time, and safety stock.", ["inventory", "reorder", "stock", "forecast"], patterns.finance),
  tool("functional-customer-reply-builder", "Customer Reply Builder", "customer_reply", "Creates a customer response using issue, policy, tone, and next action.", ["customer support", "reply", "service email", "response"], patterns.marketing),
  tool("functional-seo-page-analyzer", "SEO Page Analyzer", "seo_page_analyzer", "Reviews page title, meta description, body copy, and keyword usage.", ["seo", "page analysis", "meta title", "keyword density"], patterns.marketing),
  tool("functional-workflow-recorder", "Workflow Recorder", "workflow_recorder", "Turns completed steps and outputs into a reusable workflow template.", ["workflow recorder", "save process", "template", "repeatable workflow"], patterns.workflow),
  tool("functional-json-csv-normalizer", "JSON / CSV Normalizer", "json_csv_normalizer", "Converts JSON arrays to CSV or CSV to JSON and reports detected fields.", ["json csv", "convert data", "normalize table", "structured data"], patterns.cleanTable),
  tool("functional-color-palette-builder", "Color Palette Builder", "color_palette", "Creates a small theme palette from a base color with lighter, darker, accent, and glow colors.", ["color palette", "theme colors", "hex", "design"], patterns.visual),
  tool("functional-markdown-export-builder", "Markdown Export Builder", "markdown_export", "Packages title, summary, table data, and next steps into clean markdown.", ["markdown", "export", "documentation", "handoff"], patterns.generateDoc)
]);

export function getFunctionalDefaultInputs(tool = {}) {
  switch (tool.config?.mode) {
    case "document_summarizer":
    case "document_outline":
      return { text: "Customer orders increased this week. Inventory is low on blue labels and 8 oz jars. Team should reorder supplies by Friday and update the packing checklist. Two customers asked about pickup times.", keyword: "customer inventory reorder" };
    case "csv_cleaner":
    case "spreadsheet_analyzer":
    case "json_csv_normalizer":
      return { text: "item,price,stock\nBlue Label,4.50,12\n8 oz Jar,1.20,4\nBlue Label,4.50,12", dedupe: "true" };
    case "email_draft":
      return { recipient: "Customer", purpose: "Confirm pickup details", tone: "friendly professional", details: "Pickup is available Friday from 2-6 PM. Reply with any changes." };
    case "report_generator":
      return { title: "Weekly Operations Report", notes: "Orders increased. Inventory is low. Customer pickup questions increased. Need reorder by Friday.", risks: "Stockout risk on jars and labels.", nextSteps: "Reorder supplies, update checklist, send customer pickup email." };
    case "checklist_builder":
      return { goal: "Prepare weekly pickup orders", notes: "Print labels, verify inventory, pack orders, send pickup reminder, clean pickup area." };
    case "project_plan":
      return { goal: "Launch a small product comparison workflow", deadline: "2 weeks", constraints: "No paid APIs for MVP. Must work with pasted CSV data." };
    case "product_shortlist":
    case "price_table_compare":
      return { text: "product,price,score,source\nEarbuds A,29.99,4.2,Store A\nEarbuds B,22.50,3.9,Store B\nEarbuds C,39.00,4.8,Store C", maxPrice: "35", criteria: "price,score" };
    case "sale_scout_brief":
      return { product: "wireless earbuds", brand: "", maxPrice: "40", color: "black", size: "", includeCheapMarketplaces: "true" };
    case "factcheck_query":
      return { phrase: "I have a dream", person: "Martin Luther King Jr.", dateFrom: "1963-08-01", dateTo: "1963-08-31", includeSites: "c-span.org, archives.gov, npr.org, reuters.com" };
    case "phrase_counter":
      return { text: "Local food is fresh. Local food supports farms. The food system needs local buyers.", phrase: "local food", variations: "local, food, farms" };
    case "social_keyword_scanner":
      return { text: "2026-06-01: New drop today!\n2026-06-02: Pickup update for members.\n2026-06-03: New drop is sold out.", keywords: "drop,pickup,sold out" };
    case "svg_code_card":
      return { title: "Pickup Link", value: "https://example.com/pickup", accent: "#00E5FF" };
    case "label_sheet":
      return { text: "batch,item,date\nA101,Blue Oyster,2026-06-13\nA102,Lion's Mane,2026-06-14", fields: "batch,item,date" };
    case "invoice_builder":
      return { text: "item,qty,unitPrice\nConsulting,3,75\nMaterials,1,42.50", taxPercent: "6", discountPercent: "0", shipping: "0", paymentTerms: "Due on receipt" };
    case "budget_planner":
      return { income: "4200", expenses: "Rent,1200\nFood,500\nSoftware,95\nMarketing,300\nUtilities,220", savingsGoal: "500" };
    case "inventory_reorder":
      return { text: "item,stock,dailyUse,leadDays,safetyStock\nLabels,120,30,5,80\nJars,48,12,7,50\nBoxes,200,20,4,40" };
    case "customer_reply":
      return { issue: "Customer wants to change pickup time", policy: "Pickup changes are allowed before noon on pickup day.", tone: "helpful and reassuring", nextAction: "Ask for preferred time and confirm availability." };
    case "seo_page_analyzer":
      return { title: "Fresh Gourmet Mushrooms in Town", description: "Order fresh mushrooms weekly for pickup or local delivery.", body: "Fresh mushrooms from our local farm. We grow oyster mushrooms and lion's mane for restaurants and home cooks.", keyword: "fresh mushrooms" };
    case "workflow_recorder":
      return { workflowName: "Weekly Pickup Prep", steps: "Review orders\nCheck inventory\nPrint labels\nPack orders\nSend pickup reminder", outputs: "Packed orders, label sheet, reminder email", notes: "Run every Thursday afternoon." };
    case "color_palette":
      return { baseColor: "#00E5FF", themeName: "Neon Harbor" };
    case "markdown_export":
      return { title: "Project Handoff", summary: "The workflow created labels, a customer email, and an inventory reorder list.", table: "Item,Status\nLabels,Ready\nJars,Reorder", nextSteps: "Review outputs and save as reusable workflow." };
    default:
      return { text: "Paste input here." };
  }
}

export function getFunctionalToolSchema(tool = {}) {
  switch (tool.config?.mode) {
    case "document_summarizer": return [{ name: "text", label: "Document text", type: "textarea" }, { name: "keyword", label: "Focus keywords", type: "text" }];
    case "document_outline": return [{ name: "text", label: "Document text", type: "textarea" }, { name: "keyword", label: "Focus keywords", type: "text" }];
    case "csv_cleaner": return [{ name: "text", label: "CSV input", type: "textarea" }, { name: "dedupe", label: "Dedupe rows true/false", type: "text" }];
    case "spreadsheet_analyzer": return [{ name: "text", label: "CSV input", type: "textarea" }];
    case "email_draft": return [{ name: "recipient", label: "Recipient", type: "text" }, { name: "purpose", label: "Purpose", type: "text" }, { name: "tone", label: "Tone", type: "text" }, { name: "details", label: "Details", type: "textarea" }];
    case "report_generator": return [{ name: "title", label: "Report title", type: "text" }, { name: "notes", label: "Notes/findings", type: "textarea" }, { name: "risks", label: "Risks", type: "textarea" }, { name: "nextSteps", label: "Next steps", type: "textarea" }];
    case "checklist_builder": return [{ name: "goal", label: "Goal", type: "text" }, { name: "notes", label: "Notes/tasks", type: "textarea" }];
    case "project_plan": return [{ name: "goal", label: "Goal", type: "text" }, { name: "deadline", label: "Deadline", type: "text" }, { name: "constraints", label: "Constraints", type: "textarea" }];
    case "product_shortlist": return [{ name: "text", label: "Product CSV/options", type: "textarea" }, { name: "maxPrice", label: "Max price", type: "number" }, { name: "criteria", label: "Criteria", type: "text" }];
    case "price_table_compare": return [{ name: "text", label: "Product/price CSV", type: "textarea" }, { name: "maxPrice", label: "Max price", type: "number" }];
    case "sale_scout_brief": return [{ name: "product", label: "Product", type: "text" }, { name: "brand", label: "Brand", type: "text" }, { name: "maxPrice", label: "Max price", type: "number" }, { name: "color", label: "Color", type: "text" }, { name: "size", label: "Size", type: "text" }, { name: "includeCheapMarketplaces", label: "Include cheap marketplaces true/false", type: "text" }];
    case "factcheck_query": return [{ name: "phrase", label: "Phrase / quote", type: "textarea" }, { name: "person", label: "Person", type: "text" }, { name: "dateFrom", label: "Date from", type: "date" }, { name: "dateTo", label: "Date to", type: "date" }, { name: "includeSites", label: "Sites/domains", type: "textarea" }];
    case "phrase_counter": return [{ name: "text", label: "Text to scan", type: "textarea" }, { name: "phrase", label: "Exact phrase", type: "text" }, { name: "variations", label: "Variations/keywords", type: "text" }];
    case "social_keyword_scanner": return [{ name: "text", label: "Exported/pasted posts", type: "textarea" }, { name: "keywords", label: "Keywords", type: "text" }];
    case "svg_code_card": return [{ name: "title", label: "Title", type: "text" }, { name: "value", label: "URL/code/value", type: "text" }, { name: "accent", label: "Accent color", type: "text" }];
    case "label_sheet": return [{ name: "text", label: "CSV rows", type: "textarea" }, { name: "fields", label: "Fields to show", type: "text" }];
    case "invoice_builder": return [{ name: "text", label: "Line item CSV: item,qty,unitPrice", type: "textarea" }, { name: "taxPercent", label: "Tax %", type: "number" }, { name: "discountPercent", label: "Discount %", type: "number" }, { name: "shipping", label: "Shipping", type: "number" }, { name: "paymentTerms", label: "Payment terms", type: "text" }];
    case "budget_planner": return [{ name: "income", label: "Income", type: "number" }, { name: "expenses", label: "Expenses: name,amount", type: "textarea" }, { name: "savingsGoal", label: "Savings goal", type: "number" }];
    case "inventory_reorder": return [{ name: "text", label: "CSV: item,stock,dailyUse,leadDays,safetyStock", type: "textarea" }];
    case "customer_reply": return [{ name: "issue", label: "Customer issue", type: "textarea" }, { name: "policy", label: "Policy/context", type: "textarea" }, { name: "tone", label: "Tone", type: "text" }, { name: "nextAction", label: "Next action", type: "textarea" }];
    case "seo_page_analyzer": return [{ name: "title", label: "SEO title", type: "text" }, { name: "description", label: "Meta description", type: "textarea" }, { name: "body", label: "Page body", type: "textarea" }, { name: "keyword", label: "Target keyword", type: "text" }];
    case "workflow_recorder": return [{ name: "workflowName", label: "Workflow name", type: "text" }, { name: "steps", label: "Steps", type: "textarea" }, { name: "outputs", label: "Outputs", type: "textarea" }, { name: "notes", label: "Notes", type: "textarea" }];
    case "json_csv_normalizer": return [{ name: "text", label: "JSON or CSV", type: "textarea" }];
    case "color_palette": return [{ name: "baseColor", label: "Base hex color", type: "text" }, { name: "themeName", label: "Theme name", type: "text" }];
    case "markdown_export": return [{ name: "title", label: "Title", type: "text" }, { name: "summary", label: "Summary", type: "textarea" }, { name: "table", label: "CSV table", type: "textarea" }, { name: "nextSteps", label: "Next steps", type: "textarea" }];
    default: return [{ name: "text", label: "Input", type: "textarea" }];
  }
}

export function runFunctionalTool(tool = {}, inputs = {}) {
  const mode = tool.config?.mode;
  switch (mode) {
    case "document_summarizer": {
      const text = normalize(inputs.text);
      const keywords = [...extractKeywords(text, 8), ...lower(inputs.keyword).split(/[,\s]+/).filter(Boolean)];
      const ranked = simpleSentences(text).map((sentence) => ({ sentence, score: scoreSentence(sentence, keywords) })).sort((a, b) => b.score - a.score).slice(0, 5);
      const actions = ranked.filter(({ sentence }) => /\b(should|must|need|needs|required|reorder|send|update|call|review|deadline)\b/i.test(sentence)).map(({ sentence }) => sentence);
      return [`# Summary`, ...ranked.map((item) => `- ${item.sentence}`), "", "## Action Items", ...(actions.length ? actions : ["No explicit action items detected."]).map((item) => `- ${item}`), "", `Keywords: ${keywords.slice(0, 10).join(", ")}`].join("\n");
    }
    case "document_outline": {
      const text = normalize(inputs.text);
      const keywords = extractKeywords(`${inputs.keyword || ""} ${text}`, 12);
      const s = simpleSentences(text);
      return [`# Document Outline`, "", `## Main topic`, `- ${keywords.slice(0, 4).join(" / ") || "Untitled topic"}`, "", "## Sections", ...keywords.slice(0, 8).map((keyword, index) => `${index + 1}. ${keyword[0].toUpperCase()}${keyword.slice(1)} — ${s.find((sentence) => lower(sentence).includes(keyword)) || "Add supporting details."}`)].join("\n");
    }
    case "csv_cleaner": {
      const rows = parseCsv(inputs.text);
      const cleaned = rows.map((row) => row.map((cell) => normalize(cell).replace(/\s+/g, " "))).filter((row) => row.some(Boolean));
      const finalRows = lower(inputs.dedupe) === "true" ? [...new Map(cleaned.map((row) => [JSON.stringify(row), row])).values()] : cleaned;
      return finalRows.map((row) => row.map(toCsvValue).join(",")).join("\n");
    }
    case "spreadsheet_analyzer": {
      const { headers, objects } = csvToObjects(inputs.text);
      const numeric = headers.map((header) => {
        const values = objects.map((row) => Number(String(row[header]).replace(/[^0-9.-]/g, ""))).filter(Number.isFinite);
        const sum = values.reduce((a, b) => a + b, 0);
        return values.length ? { header, count: values.length, sum, avg: sum / values.length, min: Math.min(...values), max: Math.max(...values) } : null;
      }).filter(Boolean);
      return JSON.stringify({ rows: objects.length, columns: headers.length, headers, blankCells: objects.reduce((sum, row) => sum + headers.filter((h) => !normalize(row[h])).length, 0), numeric }, null, 2);
    }
    case "email_draft": return [`Subject: ${normalize(inputs.purpose) || "Quick update"}`, "", `Hi ${normalize(inputs.recipient) || "there"},`, "", `I’m reaching out to ${lower(inputs.purpose) || "follow up"}.`, "", normalize(inputs.details), "", `Tone: ${normalize(inputs.tone) || "professional"}`, "", "Thanks,"].join("\n");
    case "report_generator": return [`# ${normalize(inputs.title) || "Report"}`, "", "## Summary", normalize(inputs.notes), "", "## Risks / Watch Items", normalize(inputs.risks) || "No risks listed.", "", "## Recommended Next Steps", ...parseItems(inputs.nextSteps).map((item) => `- ${item}`)].join("\n");
    case "checklist_builder": return [`# Checklist: ${normalize(inputs.goal) || "Project"}`, "", ...parseItems(inputs.notes).map((item, index) => `- [ ] P${index < 3 ? 1 : 2} — ${item}`)].join("\n");
    case "project_plan": return [`# Project Plan: ${normalize(inputs.goal) || "Untitled"}`, "", `Deadline: ${normalize(inputs.deadline) || "Not specified"}`, "", "## Constraints", normalize(inputs.constraints) || "None listed.", "", "## Phases", "1. Intake and requirements", "2. Build first working version", "3. Review outputs and fix gaps", "4. Finalize and save reusable workflow", "", "## Acceptance Checks", "- The output solves the stated goal", "- User can pause/repair any step", "- Final workflow can be reused"].join("\n");
    case "product_shortlist": {
      const rows = parsePriceRows(inputs.text).filter((row) => !inputs.maxPrice || row.price <= Number(inputs.maxPrice));
      const ranked = rows.sort((a, b) => (a.price || Infinity) - (b.price || Infinity)).slice(0, 12);
      return makeMarkdownTable(["Rank", "Product", "Price", "Source"], ranked.map((row, index) => [index + 1, row.item, money(row.price), row.source]));
    }
    case "price_table_compare": {
      const rows = parsePriceRows(inputs.text).sort((a, b) => a.price - b.price);
      const avg = rows.reduce((s, r) => s + r.price, 0) / Math.max(1, rows.length);
      return [`Average price: ${money(avg)}`, "", makeMarkdownTable(["Status", "Product", "Price", "Source"], rows.map((row, index) => [index === 0 ? "LOWEST" : row.price <= avg ? "Below avg" : "Above avg", row.item, money(row.price), row.source]))].join("\n");
    }
    case "sale_scout_brief": {
      const terms = [inputs.brand, inputs.product, inputs.color, inputs.size, inputs.maxPrice && `under $${inputs.maxPrice}`, "sale", "coupon"].filter(Boolean).join(" ");
      const providers = ["shopping", "ebay", "amazon", ...(lower(inputs.includeCheapMarketplaces) === "true" ? ["temu", "shein", "alibaba"] : [])];
      return makeMarkdownTable(["Lane", "Purpose", "Search URL"], providers.map((p) => [p, p === "shopping" ? "general shopping results" : `${p} source lane`, buildSearchUrl(p, terms)]));
    }
    case "factcheck_query": {
      const phrase = `"${normalize(inputs.phrase).replaceAll('"', "")}"`;
      const person = normalize(inputs.person);
      const sites = parseItems(inputs.includeSites).length ? parseItems(inputs.includeSites) : ["reuters.com", "apnews.com", "c-span.org", "archives.gov", "youtube.com"];
      return makeMarkdownTable(["Source lane", "Exact query"], sites.map((site) => [site, `${phrase} ${person} site:${site} ${inputs.dateFrom || ""} ${inputs.dateTo || ""}`.trim()]));
    }
    case "phrase_counter": {
      const text = lower(inputs.text);
      const phrases = [inputs.phrase, ...String(inputs.variations || "").split(/[,|;]/)].map(lower).filter(Boolean);
      return makeMarkdownTable(["Phrase", "Count"], phrases.map((phrase) => [phrase, (text.match(new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length]));
    }
    case "social_keyword_scanner": {
      const keywords = String(inputs.keywords || "").split(/[,|;]/).map(lower).filter(Boolean);
      const rows = lines(inputs.text).flatMap((line, index) => keywords.filter((keyword) => lower(line).includes(keyword)).map((keyword) => [index + 1, keyword, line]));
      return rows.length ? makeMarkdownTable(["Post", "Keyword", "Excerpt"], rows.slice(0, 64)) : "No keyword matches found.";
    }
    case "svg_code_card": {
      const accent = normalize(inputs.accent) || "#00E5FF";
      const title = normalize(inputs.title) || "Code Card";
      const value = normalize(inputs.value) || "https://example.com";
      return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="420" viewBox="0 0 900 420"><rect width="900" height="420" rx="32" fill="#07111f"/><rect x="28" y="28" width="844" height="364" rx="26" fill="#101827" stroke="${accent}" stroke-width="4"/><text x="70" y="120" fill="#e8f6ff" font-family="Arial" font-size="46" font-weight="700">${title.replace(/[<&]/g, "")}</text><text x="70" y="205" fill="${accent}" font-family="Arial" font-size="28">${value.replace(/[<&]/g, "")}</text><text x="70" y="300" fill="#8da3bd" font-family="Arial" font-size="20">Generated by ToolGrid Functional Tools</text></svg>`;
    }
    case "label_sheet": {
      const { headers, objects } = csvToObjects(inputs.text);
      const selected = String(inputs.fields || headers.join(",")).split(/[,|;]/).map((f) => f.trim()).filter(Boolean);
      return objects.map((row, index) => [`### Label ${index + 1}`, ...selected.map((field) => `**${field}:** ${row[field] ?? ""}`)].join("\n")).join("\n\n---\n\n");
    }
    case "invoice_builder": {
      const { objects } = csvToObjects(inputs.text);
      const rows = objects.map((row) => ({ item: row.item || row.Item || "Item", qty: Number(row.qty || row.quantity || 1), unit: Number(row.unitPrice || row.price || row.unit || 0) }));
      const subtotal = rows.reduce((sum, row) => sum + row.qty * row.unit, 0);
      const discount = subtotal * (Number(inputs.discountPercent) || 0) / 100;
      const taxable = subtotal - discount;
      const tax = taxable * (Number(inputs.taxPercent) || 0) / 100;
      const total = taxable + tax + (Number(inputs.shipping) || 0);
      return [makeMarkdownTable(["Item", "Qty", "Unit", "Line Total"], rows.map((r) => [r.item, r.qty, money(r.unit), money(r.qty * r.unit)])), "", `Subtotal: ${money(subtotal)}`, `Discount: -${money(discount)}`, `Tax: ${money(tax)}`, `Shipping: ${money(inputs.shipping)}`, `Total: ${money(total)}`, `Payment terms: ${normalize(inputs.paymentTerms) || "Due on receipt"}`].join("\n");
    }
    case "budget_planner": {
      const income = Number(inputs.income) || 0;
      const expenses = parseItems(inputs.expenses).map((line) => { const [name, amount] = line.split(/[,=:]/); return { name: normalize(name), amount: Number(String(amount || "0").replace(/[^0-9.-]/g, "")) || 0 }; });
      const total = expenses.reduce((sum, item) => sum + item.amount, 0);
      const surplus = income - total;
      return [`Income: ${money(income)}`, `Expenses: ${money(total)}`, `Savings goal: ${money(inputs.savingsGoal)}`, `After expenses: ${money(surplus)}`, `After savings goal: ${money(surplus - (Number(inputs.savingsGoal) || 0))}`, "", makeMarkdownTable(["Expense", "Amount", "% Income"], expenses.map((e) => [e.name, money(e.amount), `${((e.amount / Math.max(1, income)) * 100).toFixed(1)}%`]))].join("\n");
    }
    case "inventory_reorder": {
      const { objects } = csvToObjects(inputs.text);
      const rows = objects.map((row) => {
        const stock = Number(row.stock) || 0, daily = Number(row.dailyUse) || 0, lead = Number(row.leadDays) || 0, safety = Number(row.safetyStock) || 0;
        const reorderPoint = daily * lead + safety;
        return [row.item || "Item", stock, reorderPoint, stock <= reorderPoint ? "REORDER" : "OK", daily ? `${(stock / daily).toFixed(1)} days` : "n/a"];
      });
      return makeMarkdownTable(["Item", "Stock", "Reorder Point", "Status", "Days Remaining"], rows);
    }
    case "customer_reply": return [`Hi,`, "", `Thanks for reaching out. ${normalize(inputs.issue)}`, "", `Here’s what we can do: ${normalize(inputs.nextAction)}`, "", `For reference: ${normalize(inputs.policy)}`, "", `I appreciate your patience, and I’ll help get this resolved.`, "", `Tone guide: ${normalize(inputs.tone) || "helpful"}`].join("\n");
    case "seo_page_analyzer": {
      const title = normalize(inputs.title), desc = normalize(inputs.description), body = normalize(inputs.body), keyword = lower(inputs.keyword);
      const keywordCount = keyword ? (lower(`${title} ${desc} ${body}`).match(new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length : 0;
      const checks = [
        ["Title length", title.length, title.length >= 30 && title.length <= 60 ? "OK" : "Adjust"],
        ["Meta description length", desc.length, desc.length >= 120 && desc.length <= 160 ? "OK" : "Adjust"],
        ["Keyword uses", keywordCount, keywordCount > 0 ? "OK" : "Missing"],
        ["Body words", body.trim() ? body.trim().split(/\s+/).length : 0, body.length > 300 ? "OK" : "Add detail"]
      ];
      return makeMarkdownTable(["Check", "Value", "Status"], checks);
    }
    case "workflow_recorder": return JSON.stringify({ name: normalize(inputs.workflowName) || "Reusable Workflow", steps: parseItems(inputs.steps), outputs: parseItems(inputs.outputs), notes: normalize(inputs.notes), reusable: true, createdAt: new Date(0).toISOString() }, null, 2);
    case "json_csv_normalizer": {
      const text = normalize(inputs.text);
      if (text.startsWith("[") || text.startsWith("{")) return objectsToCsv(JSON.parse(text));
      return JSON.stringify(csvToObjects(text).objects, null, 2);
    }
    case "color_palette": {
      const base = normalize(inputs.baseColor) || "#00E5FF";
      const palette = { name: normalize(inputs.themeName) || "Generated Palette", base, light: blend(base, 0.35), soft: blend(base, 0.65), dark: rgbToHex(Object.fromEntries(Object.entries(hexToRgb(base)).map(([k, v]) => [k, v * 0.45]))), glow: stableColor(base, 4), accent: stableColor(base, 7) };
      return JSON.stringify(palette, null, 2);
    }
    case "markdown_export": {
      const { headers, objects } = csvToObjects(inputs.table);
      return [`# ${normalize(inputs.title) || "Export"}`, "", normalize(inputs.summary), "", headers.length ? makeMarkdownTable(headers, objects.map((row) => headers.map((h) => row[h]))) : "", "", "## Next Steps", ...parseItems(inputs.nextSteps).map((item) => `- ${item}`)].join("\n");
    }
    default:
      throw new Error(`Unknown functional tool mode: ${mode}`);
  }
}

export function searchFunctionalTools(query = "", { limit = 25 } = {}) {
  const terms = lower(query).split(/\s+/).filter(Boolean);
  return FUNCTIONAL_TOOL_RECORDS
    .map((tool) => {
      const haystack = lower([tool.name, tool.description, ...(tool.tags || []), ...(tool.searchPhrases || [])].join(" "));
      const score = terms.reduce((sum, term) => sum + (haystack.includes(term) ? 1 : 0), 0);
      return { tool, score };
    })
    .filter((item) => item.score > 0 || terms.length === 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function buildFunctionalToolsSummary() {
  const modeCounts = FUNCTIONAL_TOOL_RECORDS.reduce((counts, tool) => {
    counts[tool.config.mode] = (counts[tool.config.mode] || 0) + 1;
    return counts;
  }, {});
  const skeletonPatterns = [...new Set(FUNCTIONAL_TOOL_RECORDS.map((tool) => tool.config.skeletonPattern.id))];
  return {
    version: FUNCTIONAL_TOOLS_VERSION,
    label: FUNCTIONAL_TOOL_LABEL,
    toolCount: FUNCTIONAL_TOOL_RECORDS.length,
    targetCount: FUNCTIONAL_TOOL_TARGET_COUNT,
    skeletonPatternCount: skeletonPatterns.length,
    skeletonPatterns,
    modeCounts,
    summary: `${FUNCTIONAL_TOOL_RECORDS.length} production functional tools with ${skeletonPatterns.length} generalized skeleton patterns.`
  };
}

export function verifyFunctionalToolsSuite() {
  const errors = [];
  if (FUNCTIONAL_TOOL_RECORDS.length !== FUNCTIONAL_TOOL_TARGET_COUNT) errors.push(`Expected ${FUNCTIONAL_TOOL_TARGET_COUNT} tools, found ${FUNCTIONAL_TOOL_RECORDS.length}.`);
  const ids = new Set();
  for (const tool of FUNCTIONAL_TOOL_RECORDS) {
    if (ids.has(tool.id)) errors.push(`Duplicate functional tool id: ${tool.id}`);
    ids.add(tool.id);
    if (tool.engine !== "functional_tool") errors.push(`${tool.id} must use functional_tool engine.`);
    if (!tool.config?.mode) errors.push(`${tool.id} missing config.mode.`);
    if (!tool.config?.skeletonPattern?.id) errors.push(`${tool.id} missing skeleton pattern.`);
    try {
      const output = runFunctionalTool(tool, getFunctionalDefaultInputs(tool));
      if (!String(output).trim()) errors.push(`${tool.id} produced empty output.`);
    } catch (error) {
      errors.push(`${tool.id} failed: ${error.message}`);
    }
  }
  return { ok: errors.length === 0, errors, count: FUNCTIONAL_TOOL_RECORDS.length };
}
