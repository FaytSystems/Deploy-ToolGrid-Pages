const normalize = (value) => String(value ?? "").trim();
const lower = (value) => normalize(value).toLowerCase();
const slugify = (value) => lower(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
const lines = (text) => normalize(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
const money = (value) => `$${(Number(value) || 0).toFixed(2)}`;

export const DAILY_DEALINGS_VERSION = "2026-06-13-daily-dealings-full-programs-v1";
export const DAILY_DEALINGS_LABEL = "Daily Dealings Full Program";
export const DAILY_DEALINGS_PROGRAM_TARGET_COUNT = 40;
export const DAILY_DEALINGS_MAX_STEPS = 64;

const DAILY_TOOL_IDS = Object.freeze({
  checklist: "functional-checklist-builder",
  planner: "functional-project-plan-builder",
  budget: "functional-budget-planner",
  inventory: "functional-inventory-reorder-calculator",
  report: "functional-report-generator",
  message: "functional-email-draft-generator",
  document: "functional-document-summarizer",
  csv: "functional-csv-cleaner",
  price: "price-comparison-64-cell-grid",
  evidence: "factchecker-quote-phrase-finder",
  calendar: "calendar-ics-scheduler",
  route: "map-route-geocoder",
  form: "secure-form-portal",
  approval: "signature-approval-capture",
  workspace: "local-account-workspace-sync",
  redaction: "pii-phi-redaction-tool",
  fileParser: "pdf-docx-xlsx-parser",
  ocr: "ocr-image-text-extractor",
  dashboard: "chart-dashboard-renderer",
  bank: "bank-feed-importer",
  takeoff: "measurement-takeoff-canvas"
});

const PROGRAM_SPECS = Object.freeze([
  ["daily-command-center", "Daily Command Center", "full-app", "Personal Operations", "general", "Turn loose notes, uploaded files, due dates, and errands into one daily action board.", ["planner", "checklist", "message", "workspace"], ["today-board", "priority-list", "handoff-note"], ["daily plan", "life admin", "command center", "tasks"]],
  ["bill-subscription-guardian", "Bill & Subscription Guardian", "full-program", "Money & Bills", "money", "Track bills, renewals, subscription waste, due dates, and payment decisions.", ["budget", "csv", "message", "dashboard"], ["bill-ledger", "renewal-alerts", "cancel-save-plan"], ["bills", "subscriptions", "renewals", "cashflow"]],
  ["household-budget-cashflow", "Household Budget & Cashflow Program", "full-program", "Money & Bills", "money", "Convert bank rows, receipts, bills, and goals into a practical household money plan.", ["budget", "bank", "dashboard", "redaction"], ["cashflow-plan", "spend-summary", "next-paycheck-plan"], ["budget", "cashflow", "bank rows", "household money"]],
  ["errand-route-dispatcher", "Errand Route Dispatcher", "program", "Daily Logistics", "route", "Batch errands, stops, shopping, pickups, and time windows into a clean run order.", ["route", "planner", "checklist", "message"], ["route-plan", "stop-checklist", "pickup-message"], ["errands", "route", "pickup", "stops"]],
  ["meal-pantry-prep-system", "Meal, Pantry & Prep System", "full-app", "Food & Household", "inventory", "Build meals from pantry rows, restrictions, budget, prep time, and grocery uploads.", ["inventory", "budget", "checklist", "price"], ["meal-plan", "pantry-gaps", "prep-list"], ["meal plan", "pantry", "grocery", "prep"]],
  ["grocery-price-stock-planner", "Grocery Price & Stock Planner", "program", "Food & Household", "shopping", "Compare grocery options, watch stock, and plan what to buy now versus later.", ["price", "inventory", "budget", "csv"], ["grocery-shortlist", "stock-plan", "price-watch"], ["grocery", "shopping", "prices", "stock"]],
  ["home-maintenance-calendar", "Home Maintenance Calendar", "full-program", "Home Operations", "home", "Organize repairs, seasonal chores, photos, manuals, receipts, and service dates.", ["planner", "calendar", "checklist", "fileParser"], ["maintenance-calendar", "repair-list", "service-record"], ["home maintenance", "repairs", "seasonal chores", "manuals"]],
  ["cleaning-reset-rotation", "Cleaning Reset Rotation", "program", "Home Operations", "home", "Turn room lists and chores into recurring cleaning zones, resets, and supply checks.", ["checklist", "inventory", "calendar", "message"], ["cleaning-rotation", "supply-list", "room-reset-plan"], ["cleaning", "chores", "rotation", "reset"]],
  ["family-schedule-sync", "Family Schedule Sync", "full-app", "Family & Care", "schedule", "Merge appointments, school notes, work shifts, activities, and reminders into one schedule.", ["calendar", "planner", "message", "workspace"], ["family-calendar", "conflict-list", "reminder-pack"], ["family schedule", "appointments", "school", "calendar"]],
  ["health-appointment-medication-desk", "Health Appointment & Medication Desk", "full-program", "Health Admin", "care", "Prepare appointments, medication lists, questions, refill dates, and care notes.", ["fileParser", "checklist", "calendar", "redaction"], ["appointment-brief", "medication-list", "refill-plan"], ["health admin", "medication", "appointment", "care notes"]],
  ["personal-documents-renewal-vault", "Personal Documents & Renewal Vault", "full-program", "Personal Records", "document", "Track IDs, permits, warranties, passwords, renewal dates, and document uploads.", ["fileParser", "ocr", "calendar", "workspace"], ["document-index", "renewal-calendar", "missing-docs-list"], ["documents", "renewals", "records", "vault"]],
  ["receipt-warranty-return-tracker", "Receipt, Warranty & Return Tracker", "program", "Personal Records", "document", "Read receipt notes and product uploads into return windows, warranties, and proof packets.", ["ocr", "fileParser", "calendar", "message"], ["receipt-ledger", "return-deadlines", "warranty-packet"], ["receipts", "warranty", "returns", "proof"]],
  ["vehicle-fuel-maintenance-log", "Vehicle Fuel & Maintenance Log", "full-app", "Vehicle & Travel", "inventory", "Track fuel, mileage, repairs, inspections, documents, and next service tasks.", ["csv", "budget", "calendar", "checklist"], ["vehicle-log", "service-schedule", "cost-summary"], ["vehicle", "fuel", "mileage", "maintenance"]],
  ["pet-care-routine-manager", "Pet Care Routine Manager", "full-app", "Family & Care", "care", "Manage food, medicine, vet visits, sitter instructions, grooming, and daily care routines.", ["checklist", "calendar", "message", "inventory"], ["pet-care-board", "sitter-handoff", "supply-alerts"], ["pet care", "vet", "sitter", "routine"]],
  ["school-paperwork-homework-hub", "School Paperwork & Homework Hub", "full-program", "Family & Care", "document", "Turn school papers, deadlines, forms, homework, and supply needs into a weekly plan.", ["fileParser", "checklist", "calendar", "message"], ["school-week-plan", "forms-list", "homework-board"], ["school", "homework", "forms", "children"]],
  ["elder-care-caregiver-handoff", "Elder Caregiver Handoff Program", "full-program", "Family & Care", "care", "Build caregiver shift notes, appointment prep, medication checks, and family updates.", ["redaction", "calendar", "message", "workspace"], ["caregiver-handoff", "care-questions", "family-update"], ["elder care", "caregiver", "handoff", "family update"]],
  ["client-follow-up-crm", "Client Follow-Up CRM", "full-app", "Work & Clients", "communication", "Convert calls, notes, proposals, invoices, and uploads into follow-up tasks and messages.", ["message", "planner", "report", "workspace"], ["follow-up-board", "message-pack", "client-history"], ["client", "crm", "follow up", "sales"]],
  ["small-business-daily-ops", "Small Business Daily Ops Program", "full-program", "Work & Clients", "general", "Run daily cash, customers, inventory, staff notes, vendor tasks, and open issues.", ["budget", "inventory", "report", "message"], ["daily-ops-board", "cash-note", "open-issues"], ["small business", "daily ops", "inventory", "customers"]],
  ["work-shift-task-handoff", "Work Shift Task Handoff", "program", "Work & Clients", "communication", "Package shift notes, open tasks, incidents, blockers, and next-person instructions.", ["checklist", "report", "message", "workspace"], ["shift-handoff", "open-task-list", "incident-note"], ["shift", "handoff", "work tasks", "operations"]],
  ["study-certification-planner", "Study & Certification Planner", "full-app", "Learning & Growth", "schedule", "Turn syllabi, notes, exam dates, weak topics, and practice logs into a study plan.", ["fileParser", "planner", "checklist", "dashboard"], ["study-calendar", "practice-plan", "progress-board"], ["study", "certification", "exam", "learning"]],
  ["habit-energy-recovery-board", "Habit, Energy & Recovery Board", "program", "Personal Wellbeing", "schedule", "Track habits, energy, sleep, focus, blockers, and recovery actions without over-planning.", ["planner", "dashboard", "checklist", "message"], ["habit-board", "energy-notes", "recovery-plan"], ["habits", "energy", "recovery", "wellbeing"]],
  ["fitness-meal-hydration-log", "Fitness, Meal & Hydration Log", "full-app", "Personal Wellbeing", "care", "Combine workouts, meals, hydration, measurements, and goals into daily adjustments.", ["csv", "dashboard", "checklist", "planner"], ["fitness-log", "meal-summary", "next-session-plan"], ["fitness", "meal", "hydration", "workout"]],
  ["event-party-runbook", "Event & Party Runbook", "full-program", "Events & Travel", "schedule", "Plan guests, food, budget, supplies, timeline, messages, and day-of assignments.", ["planner", "budget", "inventory", "message"], ["event-runbook", "guest-message-pack", "supply-budget"], ["event", "party", "guests", "runbook"]],
  ["travel-trip-document-packer", "Travel Trip Document Packer", "full-app", "Events & Travel", "document", "Prepare documents, bookings, packing lists, budgets, itinerary, and emergency contacts.", ["fileParser", "calendar", "checklist", "budget"], ["trip-packet", "packing-list", "travel-budget"], ["travel", "trip", "packing", "documents"]],
  ["moving-home-transition-planner", "Moving Home Transition Planner", "full-program", "Home Operations", "route", "Coordinate packing, utilities, address changes, movers, repairs, and room plans.", ["planner", "route", "message", "checklist"], ["move-plan", "utility-checklist", "box-index"], ["moving", "relocation", "utilities", "packing"]],
  ["community-volunteer-coordinator", "Community & Volunteer Coordinator", "full-app", "Community", "communication", "Organize volunteers, assignments, donation items, messages, and event shifts.", ["form", "message", "calendar", "report"], ["volunteer-roster", "assignment-board", "message-pack"], ["volunteer", "community", "donation", "roster"]],
  ["repair-contractor-quote-comparison", "Repair & Contractor Quote Comparison", "full-program", "Home Operations", "shopping", "Compare quotes, photos, measurements, scope, risks, and approval questions.", ["takeoff", "price", "budget", "approval"], ["quote-comparison", "scope-questions", "approval-packet"], ["contractor", "repair", "quote", "comparison"]],
  ["shopping-shortlist-decision-board", "Shopping Shortlist Decision Board", "program", "Buying Decisions", "shopping", "Shortlist products, prices, features, returns, warranties, and final buy/no-buy choices.", ["price", "budget", "report", "document"], ["shopping-shortlist", "decision-matrix", "return-risk"], ["shopping", "shortlist", "decision", "warranty"]],
  ["inbox-call-message-triage", "Inbox, Call & Message Triage", "full-app", "Communication", "communication", "Sort calls, emails, texts, voicemails, and follow-up notes into next actions.", ["message", "planner", "report", "redaction"], ["triage-board", "reply-pack", "call-back-list"], ["inbox", "calls", "messages", "triage"]],
  ["insurance-claim-evidence-packet", "Insurance Claim Evidence Packet", "full-program", "Records & Evidence", "evidence", "Collect photos, receipts, statements, dates, and claim notes into an evidence packet.", ["ocr", "fileParser", "evidence", "redaction"], ["claim-packet", "evidence-index", "missing-proof-list"], ["insurance", "claim", "evidence", "receipts"]],
  ["tax-bookkeeping-monthly-close", "Tax & Bookkeeping Monthly Close", "full-program", "Money & Bills", "money", "Close receipts, bank rows, invoices, mileage, categories, and missing documents.", ["bank", "ocr", "budget", "dashboard"], ["monthly-close", "missing-receipts", "category-summary"], ["tax", "bookkeeping", "monthly close", "receipts"]],
  ["rental-tenant-landlord-log", "Rental Tenant & Landlord Log", "full-app", "Home Operations", "evidence", "Track rent, maintenance requests, notices, photos, inspections, and message history.", ["fileParser", "message", "calendar", "evidence"], ["rental-log", "notice-packet", "maintenance-history"], ["rental", "tenant", "landlord", "maintenance"]],
  ["creator-content-publishing-calendar", "Creator Content Publishing Calendar", "full-app", "Creator Work", "schedule", "Plan content ideas, assets, publishing dates, captions, sponsors, and repurposing.", ["planner", "message", "dashboard", "workspace"], ["content-calendar", "caption-pack", "asset-list"], ["creator", "content", "publishing", "calendar"]],
  ["job-search-application-tracker", "Job Search Application Tracker", "full-program", "Work & Clients", "communication", "Track applications, resumes, interviews, contacts, follow-ups, and offer decisions.", ["document", "message", "planner", "dashboard"], ["application-tracker", "follow-up-pack", "interview-plan"], ["job search", "applications", "interview", "resume"]],
  ["project-deadline-waterfall-manager", "Project Deadline Waterfall Manager", "full-program", "Work & Clients", "schedule", "Break deadlines into dependent tasks, file needs, approvals, and progress checks.", ["planner", "approval", "dashboard", "workspace"], ["deadline-waterfall", "approval-gates", "risk-list"], ["project", "deadline", "waterfall", "approval"]],
  ["home-safety-emergency-readiness", "Home Safety & Emergency Readiness", "full-program", "Safety", "home", "Prepare supplies, contacts, routes, documents, pets, and home safety checks.", ["checklist", "inventory", "route", "document"], ["readiness-plan", "go-bag-list", "contact-card"], ["emergency", "safety", "preparedness", "home"]],
  ["renewal-negotiation-desk", "Renewal & Negotiation Desk", "program", "Money & Bills", "communication", "Handle subscription, rent, insurance, service, and contract renewals with decision scripts.", ["calendar", "message", "budget", "approval"], ["renewal-board", "negotiation-script", "decision-log"], ["renewal", "negotiation", "subscription", "contract"]],
  ["yard-garden-seasonal-plan", "Yard & Garden Seasonal Plan", "full-app", "Home Operations", "home", "Plan plantings, chores, supplies, weather windows, garden notes, and seasonal reminders.", ["planner", "inventory", "calendar", "budget"], ["garden-calendar", "supply-plan", "seasonal-checklist"], ["yard", "garden", "seasonal", "plants"]],
  ["digital-file-cleanup-archive", "Digital File Cleanup & Archive", "full-program", "Personal Records", "document", "Sort files, naming rules, duplicates, document folders, and archive handoff notes.", ["fileParser", "workspace", "checklist", "report"], ["file-index", "cleanup-rules", "archive-plan"], ["digital files", "archive", "cleanup", "documents"]],
  ["personal-relationship-followup", "Personal Relationship Follow-Up", "full-app", "Communication", "communication", "Remember people, important dates, promises, gifts, check-ins, and thoughtful follow-ups.", ["calendar", "message", "planner", "workspace"], ["relationship-board", "check-in-plan", "message-drafts"], ["personal crm", "relationships", "follow up", "birthdays"]]
]);

function toolIds(keys = []) {
  return keys.map((key) => DAILY_TOOL_IDS[key] || key);
}

function skeletonPatternForSpec(spec) {
  return {
    id: `daily-dealings-${spec.id}`,
    label: `${spec.name} Skeleton`,
    accepts: ["prompt", "notes", "rows", "files", "dates", "budget", "constraints"],
    produces: spec.produces,
    keywords: spec.tags
  };
}

function buildProgram(spec, index) {
  const [id, name, programType, domain, archetype, description, modules, produces, tags] = spec;
  const accepts = unique(["prompt", "notes", "rows", "files", "dates", "budget", "constraints", archetype]);
  const currentTools = toolIds(modules);
  return {
    id: `daily-${id}`,
    name,
    category: programType === "program" ? "Daily Dealings Programs" : programType === "full-program" ? "Daily Dealings Full Programs" : "Daily Dealings Full Apps",
    engine: "daily_dealings_program",
    systemLabel: DAILY_DEALINGS_LABEL,
    toolKind: programType,
    inHouse: true,
    dailyDealingsGenerated: true,
    description: `${description} Built as an in-house upload-ready daily dealings ${programType}.`,
    tags: unique([
      "daily dealings",
      "daily life",
      "full app",
      "full program",
      "upload files",
      "in-house program",
      "routine workflow",
      "practical daily use",
      "project handoff",
      "no outside tool site",
      domain,
      archetype,
      ...tags,
      ...name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
    ]),
    searchPhrases: unique([
      name,
      `${name} full app`,
      `${name} program`,
      `daily dealings ${name}`,
      `${tags.join(" ")} daily program`,
      `upload files for ${name}`,
      description
    ]),
    config: {
      sequence: index + 1,
      programType,
      domain,
      archetype,
      modules,
      currentTools,
      accepts,
      produces,
      maxSteps: DAILY_DEALINGS_MAX_STEPS,
      uploadRequired: true,
      skeletonPattern: skeletonPatternForSpec({ id, name, produces, tags }),
      noOutsideToolPolicy: "in-house implementation only; no embedded third-party tool site"
    },
    compatibility: {
      accepts,
      produces,
      output: produces[0] || "daily-dealings-output",
      parallelSafe: !["care", "evidence"].includes(archetype),
      requiresApproval: ["money", "care", "evidence"].includes(archetype),
      publishesToLibraries: ["daily-dealings-library", "project-artifacts", "toolbox-sync"]
    }
  };
}

export const DAILY_DEALINGS_PROGRAM_RECORDS = Object.freeze(PROGRAM_SPECS.map(buildProgram));

function parseRows(text = "") {
  const source = lines(text);
  if (!source.length) return [];
  const headers = source[0].split(",").map((header, index) => normalize(header) || `column_${index + 1}`);
  return source.slice(1).map((line) => {
    const parts = line.split(",");
    return Object.fromEntries(headers.map((header, index) => [header, normalize(parts[index])]));
  }).filter((row) => Object.values(row).some(Boolean));
}

function firstValue(row, keys, fallback = "") {
  for (const key of keys) {
    const match = Object.entries(row || {}).find(([name]) => lower(name) === lower(key));
    if (match && normalize(match[1])) return normalize(match[1]);
  }
  return fallback;
}

function numericValue(row, keys, fallback = 0) {
  const value = firstValue(row, keys, "");
  const parsed = Number(String(value).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function fileLines(value) {
  return lines(value).flatMap((line) => line.split(",").map((item) => item.trim()).filter(Boolean));
}

function markdownTable(headers, rows) {
  const safeRows = rows.length ? rows : [Object.fromEntries(headers.map((header) => [header, ""]))];
  const head = `| ${headers.join(" | ")} |`;
  const divider = `| ${headers.map(() => "---").join(" | ")} |`;
  const body = safeRows.map((row) => `| ${headers.map((header) => String(row[header] ?? "").replace(/\n/g, " ")).join(" | ")} |`);
  return [head, divider, ...body].join("\n");
}

function extractKeywords(text = "", limit = 8) {
  const stop = new Set("the and for that with this from have has are was were you your our but not into about more can will would should there their they them then than when where what how why also all any use using used".split(" "));
  const counts = new Map();
  for (const word of lower(text).match(/[a-z0-9][a-z0-9'-]{2,}/g) || []) {
    if (!stop.has(word)) counts.set(word, (counts.get(word) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([word]) => word);
}

function buildRows(inputs, tool) {
  const rows = parseRows(inputs.rows);
  if (rows.length) return rows.slice(0, 12);
  return [
    { item: `${tool.config.domain} intake`, due: inputs.deadline || "today", cost: "0", status: "new" },
    { item: "Review uploaded files", due: "today", cost: "0", status: "ready" },
    { item: "Send follow-up or reminder", due: "tomorrow", cost: "0", status: "queued" }
  ];
}

function buildActionRows(tool, inputs, rows, keywords) {
  const max = Math.max(3, Math.min(DAILY_DEALINGS_MAX_STEPS, Number(inputs.maxSteps || 8)));
  const baseItems = rows.map((row, index) => ({
    task: firstValue(row, ["task", "item", "name", "description"], `${tool.config.domain} task ${index + 1}`),
    due: firstValue(row, ["due", "deadline", "date"], inputs.deadline || "today"),
    owner: firstValue(row, ["owner", "person", "assignee"], "me"),
    status: firstValue(row, ["status", "state"], index === 0 ? "start" : "queued")
  }));
  const moduleItems = tool.config.modules.map((module, index) => ({
    task: `${module.replaceAll("-", " ")} pass for ${keywords[index % Math.max(1, keywords.length)] || tool.config.domain.toLowerCase()}`,
    due: index === 0 ? "today" : "next window",
    owner: "program",
    status: "ready"
  }));
  return [...baseItems, ...moduleItems].slice(0, max);
}

function buildMoneyBlock(rows, budget) {
  const ledger = rows.map((row, index) => {
    const cost = numericValue(row, ["cost", "amount", "price", "total"], (index + 1) * 12);
    return {
      item: firstValue(row, ["item", "name", "vendor", "task"], `item ${index + 1}`),
      due: firstValue(row, ["due", "deadline", "date"], "next"),
      amount: money(cost),
      status: cost > budget / 3 && budget > 0 ? "review" : "ok"
    };
  });
  const total = ledger.reduce((sum, row) => sum + Number(String(row.amount).replace(/[^0-9.-]/g, "")), 0);
  return [
    "## Money View",
    markdownTable(["item", "due", "amount", "status"], ledger),
    `Total signal: ${money(total)}`,
    budget ? `Budget position: ${total <= budget ? `inside budget by ${money(budget - total)}` : `over budget by ${money(total - budget)}`}` : "Budget position: no budget entered"
  ].join("\n");
}

function buildProgramSpecificBlock(tool, inputs, rows, keywords) {
  const archetype = tool.config.archetype;
  const budget = Number(inputs.budget || 0);
  if (archetype === "money") return buildMoneyBlock(rows, budget);
  if (archetype === "shopping") {
    const shortlist = rows.map((row, index) => ({
      option: firstValue(row, ["item", "name", "option", "vendor"], `option ${index + 1}`),
      cost: money(numericValue(row, ["cost", "price", "amount"], (index + 1) * 15)),
      fit: index === 0 ? "best first check" : "compare",
      next: "verify return, warranty, timing"
    }));
    return ["## Decision Shortlist", markdownTable(["option", "cost", "fit", "next"], shortlist)].join("\n");
  }
  if (archetype === "route") {
    const stops = rows.map((row, index) => ({
      order: index + 1,
      stop: firstValue(row, ["stop", "item", "place", "task"], `stop ${index + 1}`),
      window: firstValue(row, ["time", "window", "due"], index === 0 ? "first" : "after previous"),
      note: firstValue(row, ["note", "notes"], "batch with nearby tasks")
    }));
    return ["## Route / Sequence", markdownTable(["order", "stop", "window", "note"], stops)].join("\n");
  }
  if (archetype === "document" || archetype === "evidence") {
    const docs = rows.map((row, index) => ({
      record: firstValue(row, ["item", "document", "file", "name"], `record ${index + 1}`),
      proof: firstValue(row, ["proof", "source", "receipt"], "upload or note"),
      gap: firstValue(row, ["gap", "missing"], index === 0 ? "confirm date" : "none listed"),
      action: archetype === "evidence" ? "save to evidence packet" : "index and set renewal"
    }));
    return ["## Records / Evidence Packet", markdownTable(["record", "proof", "gap", "action"], docs)].join("\n");
  }
  if (archetype === "communication" || archetype === "care") {
    const audience = normalize(inputs.audience) || (archetype === "care" ? "care circle" : "recipient");
    return [
      "## Message / Handoff Draft",
      `To: ${audience}`,
      `Subject: ${tool.config.domain} update`,
      "",
      `Here is the current status for ${tool.name}:`,
      ...keywords.slice(0, 5).map((keyword) => `- ${keyword}: confirm next step`),
      "",
      "Please reply with changes, blockers, or approval."
    ].join("\n");
  }
  if (archetype === "home" || archetype === "inventory") {
    const inventory = rows.map((row, index) => ({
      item: firstValue(row, ["item", "task", "supply", "name"], `item ${index + 1}`),
      count: firstValue(row, ["count", "qty", "stock"], String(index + 1)),
      status: firstValue(row, ["status"], index % 2 ? "ok" : "check"),
      next: "schedule or restock"
    }));
    return ["## Home / Inventory Board", markdownTable(["item", "count", "status", "next"], inventory)].join("\n");
  }
  return [
    "## Program Focus",
    `Primary outcome: ${(tool.config.produces || []).join(", ")}`,
    `Keywords: ${keywords.join(", ") || "daily workflow"}`
  ].join("\n");
}

export function getDailyDealingsDefaultInputs(tool = DAILY_DEALINGS_PROGRAM_RECORDS[0]) {
  return {
    goal: `Run ${tool.name || "this daily dealings program"} for today and prepare a useful handoff.`,
    notes: "Deadline Friday. Budget 250. Need to sort receipts, call two people, upload the latest notes, and decide the next three steps.",
    rows: "item,due,cost,status\nReceipt review,today,24,new\nFollow-up call,tomorrow,0,queued\nSupply order,Friday,68,review",
    budget: 250,
    deadline: "2026-06-19",
    audience: "household, client, or team",
    cadence: "daily",
    constraints: "Keep it simple, private, upload-aware, and ready to hand off.",
    maxSteps: 8,
    programFiles: "receipt-photo.jpg (240 KB, image/jpeg)\nnotes.pdf (120 KB, application/pdf)"
  };
}

export function getDailyDealingsToolSchema(tool = {}) {
  const type = tool.config?.programType || tool.toolKind || "program";
  return [
    {
      name: "programFiles",
      label: `${type.replaceAll("-", " ")} files / references`,
      type: "file",
      multiple: true,
      accept: "image/*,audio/*,video/*,.pdf,.csv,.tsv,.json,.txt,.md,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.glb,.gltf,.obj,.stl,.step,.stp,.dwg,.dxf"
    },
    { name: "goal", label: "Goal", type: "textarea" },
    { name: "notes", label: "Notes / daily details", type: "textarea" },
    { name: "rows", label: "Rows / ledger / task table", type: "textarea" },
    { name: "budget", label: "Budget or limit", type: "number" },
    { name: "deadline", label: "Deadline", type: "date" },
    { name: "audience", label: "Audience / people involved", type: "text" },
    { name: "cadence", label: "Cadence", type: "text" },
    { name: "constraints", label: "Rules / constraints", type: "textarea" },
    { name: "maxSteps", label: "Steps to prepare", type: "number" }
  ];
}

export function runDailyDealingsProgram(tool = DAILY_DEALINGS_PROGRAM_RECORDS[0], inputs = {}) {
  const defaults = getDailyDealingsDefaultInputs(tool);
  const merged = { ...defaults, ...inputs };
  const rows = buildRows(merged, tool);
  const files = fileLines(merged.programFiles);
  const keywords = extractKeywords(`${merged.goal}\n${merged.notes}\n${merged.constraints}\n${rows.map((row) => Object.values(row).join(" ")).join(" ")}`, 10);
  const actionRows = buildActionRows(tool, merged, rows, keywords);
  const modules = tool.config.modules.map((module, index) => `${index + 1}. ${module.replaceAll("-", " ")} -> ${tool.config.currentTools[index] || "in-house slot"}`);
  return [
    `# ${tool.name}`,
    `Version: ${DAILY_DEALINGS_VERSION}`,
    `Type: ${tool.config.programType}`,
    `Domain: ${tool.config.domain}`,
    `Cadence: ${merged.cadence || "daily"}`,
    `Policy: ${tool.config.noOutsideToolPolicy}`,
    `Goal: ${merged.goal}`,
    `Uploads attached: ${files.length}`,
    files.length ? `Upload index: ${files.slice(0, 8).join(" | ")}` : "Upload index: ready for files",
    "",
    "## In-House Program Modules",
    ...modules,
    "",
    "## Daily Action Board",
    markdownTable(["task", "due", "owner", "status"], actionRows),
    "",
    buildProgramSpecificBlock(tool, merged, rows, keywords),
    "",
    "## Handoff Pack",
    "- daily intake summary",
    "- action board",
    "- file/upload index",
    "- decision or ledger output",
    "- next-tool routing map",
    "- approval checkpoint when money, care, or evidence is involved"
  ].join("\n");
}

export function searchDailyDealingsPrograms(query = "", { limit = 24, type = "all" } = {}) {
  const q = lower(query);
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  return DAILY_DEALINGS_PROGRAM_RECORDS.map((tool) => {
    const haystack = `${tool.name} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`.toLowerCase();
    let score = 0;
    for (const token of tokens) if (haystack.includes(token)) score += token.length > 4 ? 3 : 1;
    if (/daily|dealings|program|full app|full program/.test(q)) score += 4;
    if (type !== "all" && (tool.config?.programType === type || tool.toolKind === type)) score += 8;
    return { tool, score };
  })
    .filter((item) => item.score > 0 && (type === "all" || item.tool.config?.programType === type || item.tool.toolKind === type))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function buildDailyDealingsSummary() {
  const byType = {};
  const byDomain = {};
  for (const tool of DAILY_DEALINGS_PROGRAM_RECORDS) {
    byType[tool.config.programType] = (byType[tool.config.programType] || 0) + 1;
    byDomain[tool.config.domain] = (byDomain[tool.config.domain] || 0) + 1;
  }
  return {
    version: DAILY_DEALINGS_VERSION,
    toolCount: DAILY_DEALINGS_PROGRAM_RECORDS.length,
    targetCount: DAILY_DEALINGS_PROGRAM_TARGET_COUNT,
    maxSteps: DAILY_DEALINGS_MAX_STEPS,
    byType,
    byDomain,
    uploadReadyCount: DAILY_DEALINGS_PROGRAM_RECORDS.filter((tool) => tool.config.uploadRequired).length,
    summary: `${DAILY_DEALINGS_PROGRAM_RECORDS.length} upload-ready daily dealings full apps/programs built for practical everyday workflows.`
  };
}

export function verifyDailyDealingsSuite({ knownEngines = [] } = {}) {
  const errors = [];
  const engineSet = new Set(knownEngines);
  const ids = new Set();
  const names = new Set();
  for (const tool of DAILY_DEALINGS_PROGRAM_RECORDS) {
    if (ids.has(tool.id)) errors.push(`duplicate daily dealings id ${tool.id}`);
    ids.add(tool.id);
    const name = lower(tool.name);
    if (names.has(name)) errors.push(`duplicate daily dealings name ${tool.name}`);
    names.add(name);
    if (engineSet.size && !engineSet.has(tool.engine)) errors.push(`${tool.id} uses unknown engine ${tool.engine}`);
    if (!tool.config?.uploadRequired) errors.push(`${tool.id} should require upload-ready fields`);
    if (!tool.config?.skeletonPattern?.id) errors.push(`${tool.id} needs a skeleton pattern`);
    if ((tool.tags || []).length < 12) errors.push(`${tool.id} needs dense tags`);
    const output = runDailyDealingsProgram(tool, getDailyDealingsDefaultInputs(tool));
    if (!/Daily Action Board|Handoff Pack|Uploads attached/.test(output)) errors.push(`${tool.id} did not produce a useful full-program output`);
  }
  if (DAILY_DEALINGS_PROGRAM_RECORDS.length !== DAILY_DEALINGS_PROGRAM_TARGET_COUNT) errors.push(`expected ${DAILY_DEALINGS_PROGRAM_TARGET_COUNT} daily dealings programs, got ${DAILY_DEALINGS_PROGRAM_RECORDS.length}`);
  return { ok: errors.length === 0, errors, stats: buildDailyDealingsSummary() };
}
