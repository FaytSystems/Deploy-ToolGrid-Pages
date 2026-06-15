const normalize = (value) => String(value ?? "").trim();
const lower = (value) => normalize(value).toLowerCase();
const slugify = (value) => lower(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const lines = (text) => normalize(text).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
const money = (value) => `$${(Number(value) || 0).toFixed(2)}`;

export const MINI_APP_SUITE_VERSION = "2026-06-13-max-functional-mini-apps-v2-expanded";
export const MINI_APP_TOOL_LABEL = "Functional Mini-App";

export const MINI_APP_DOMAINS = Object.freeze([
  "Personal Finance",
  "Household Budget",
  "Meal Planning",
  "Grocery Shopping",
  "Home Cleaning",
  "Home Maintenance",
  "Pet Care",
  "Childcare Planning",
  "Family Scheduling",
  "Travel Planning",
  "Event Planning",
  "Wedding Planning",
  "Birthday Party",
  "School Homework",
  "Study Planning",
  "Fitness Coaching",
  "Nutrition Tracking",
  "Medical Appointment",
  "Medication Schedule",
  "Habit Tracking",
  "Small Business",
  "Restaurant Operations",
  "Food Truck",
  "Bakery",
  "Coffee Shop",
  "Retail Store",
  "Ecommerce Shop",
  "Marketplace Seller",
  "Subscription Box",
  "Local Services",
  "Landscaping",
  "Lawn Care",
  "Nursery Greenhouse",
  "Garden Planning",
  "Mushroom Farm",
  "Chicken Coop",
  "Homestead",
  "Farmers Market",
  "CSA Program",
  "Pet Grooming",
  "Beauty Salon",
  "Barbershop",
  "Photography Studio",
  "Podcast Production",
  "YouTube Channel",
  "Social Media",
  "Creator Merch",
  "Music Release",
  "Audio Production",
  "Video Editing",
  "Freelance Design",
  "Freelance Writing",
  "Client Onboarding",
  "Consulting",
  "Agency Operations",
  "Sales Pipeline",
  "CRM Follow Up",
  "Customer Support",
  "Help Desk",
  "SaaS Support",
  "Project Management",
  "Team Meeting",
  "Hiring",
  "Employee Training",
  "HR Onboarding",
  "Payroll Prep",
  "Bookkeeping",
  "Tax Prep",
  "Invoice Collection",
  "Vendor Management",
  "Procurement",
  "Inventory Control",
  "Warehouse Ops",
  "Shipping Logistics",
  "Delivery Route",
  "Vehicle Maintenance",
  "Construction Estimate",
  "Contractor Job",
  "HVAC Service",
  "Plumbing Service",
  "Real Estate Listing",
  "Property Management",
  "Tenant Communication",
  "Insurance Claim",
  "Loan Comparison",
  "Legal Intake",
  "Compliance Review",
  "Grant Writing",
  "Nonprofit Campaign",
  "Community Event",
  "Academic Research",
  "Lab Inventory",
  "Data Migration",
  "Website SEO",
  "Web Analytics",
  "Cybersecurity Review",
  "Cloud Deployment",
  "API Documentation",
  "Product Roadmap",
  "UX Research",
  "Airbnb Hosting",
  "Vacation Rental",
  "Senior Care",
  "Home School",
  "College Applications",
  "Scholarship Search",
  "Tutoring Service",
  "Language Learning",
  "Book Club",
  "Library Program",
  "Community Garden",
  "Urban Farming",
  "Beekeeping",
  "Aquaponics",
  "Hydroponics",
  "Composting",
  "Food Preservation",
  "Canning Kitchen",
  "Farm Equipment",
  "Livestock Care",
  "Horse Stable",
  "Dog Training",
  "Veterinary Clinic",
  "Animal Rescue",
  "Wildlife Rehab",
  "Aquarium Maintenance",
  "Bird Watching",
  "Outdoor Adventure",
  "Camping Trip",
  "Hiking Club",
  "Boat Maintenance",
  "RV Travel",
  "Motorcycle Maintenance",
  "Bicycle Repair",
  "Home Gym",
  "Yoga Studio",
  "Martial Arts School",
  "Sports Team",
  "Youth League",
  "Dance Studio",
  "Theater Production",
  "Film Production",
  "Animation Project",
  "Game Development",
  "Board Game Design",
  "Comic Book Project",
  "Novel Writing",
  "Newsletter Publishing",
  "Course Creation",
  "Webinar Planning",
  "Online Community",
  "Forum Moderation",
  "Membership Site",
  "Patreon Creator",
  "Crowdfunding Campaign",
  "Product Launch",
  "Beta Testing",
  "App Store Launch",
  "Software QA",
  "Bug Triage",
  "Knowledge Base",
  "Technical Writing",
  "Documentation Portal",
  "API Integration",
  "No-Code Automation",
  "Database Cleanup",
  "Data Labeling",
  "Survey Research",
  "Market Research",
  "Competitive Analysis",
  "Brand Strategy",
  "Ad Campaign",
  "Email Newsletter",
  "Lead Magnet",
  "Landing Page",
  "Sales Proposal",
  "Client Retainer",
  "Contract Renewal",
  "RFP Response",
  "Vendor Scorecard",
  "Board Meeting",
  "Investor Update",
  "Startup Pitch",
  "Business Plan",
  "Operations Manual",
  "Franchise Manual",
  "Safety Training",
  "Incident Report",
  "Emergency Prep",
  "Disaster Recovery",
  "Church Group",
  "Youth Ministry",
  "Volunteer Coordination",
  "Fundraiser Event",
  "Food Pantry",
  "Mutual Aid",
  "Civic Campaign",
  "Local Newsletter",
  "Neighborhood Watch",
  "Club Treasurer"
]);
export const MINI_APP_OPERATION_FAMILIES = Object.freeze([
  {
    "id": "intake-builder",
    "name": "Intake Form Builder",
    "verb": "build an intake form",
    "accepts": [
      "prompt",
      "notes",
      "requirements"
    ],
    "produces": [
      "intake-form",
      "field-list",
      "questions"
    ],
    "keywords": [
      "intake",
      "form",
      "questions",
      "collect details",
      "setup"
    ],
    "deps": [
      "Text Intake Parser",
      "Field Normalizer",
      "Validation Rule Builder"
    ],
    "schema": "intake"
  },
  {
    "id": "checklist-generator",
    "name": "Checklist Generator",
    "verb": "build a checklist",
    "accepts": [
      "goal",
      "notes",
      "tasks"
    ],
    "produces": [
      "checklist",
      "task-list",
      "priority-list"
    ],
    "keywords": [
      "checklist",
      "tasks",
      "to do",
      "steps",
      "action list"
    ],
    "deps": [
      "Task Extractor",
      "Priority Sorter",
      "Deadline Normalizer"
    ],
    "schema": "checklist"
  },
  {
    "id": "planner",
    "name": "Step-by-Step Planner",
    "verb": "create a step-by-step plan",
    "accepts": [
      "goal",
      "constraints",
      "deadline"
    ],
    "produces": [
      "project-plan",
      "phases",
      "timeline"
    ],
    "keywords": [
      "plan",
      "project",
      "timeline",
      "phases",
      "roadmap"
    ],
    "deps": [
      "Goal Decomposer",
      "Timeline Builder",
      "Constraint Resolver"
    ],
    "schema": "plan"
  },
  {
    "id": "budget-estimator",
    "name": "Budget Estimator",
    "verb": "estimate a budget",
    "accepts": [
      "line-items",
      "budget",
      "constraints"
    ],
    "produces": [
      "budget",
      "cost-table",
      "spend-plan"
    ],
    "keywords": [
      "budget",
      "cost",
      "estimate",
      "price",
      "spending"
    ],
    "deps": [
      "CSV Row Parser",
      "Money Totalizer",
      "Cost Variance Checker"
    ],
    "schema": "budget"
  },
  {
    "id": "comparison-matrix",
    "name": "Comparison Matrix",
    "verb": "compare options",
    "accepts": [
      "options",
      "criteria",
      "budget"
    ],
    "produces": [
      "comparison-table",
      "ranked-options",
      "recommendation"
    ],
    "keywords": [
      "compare",
      "matrix",
      "rank",
      "options",
      "decision"
    ],
    "deps": [
      "Option Parser",
      "Criteria Scorer",
      "Recommendation Writer"
    ],
    "schema": "compare"
  },
  {
    "id": "inventory-tracker",
    "name": "Inventory Tracker",
    "verb": "track inventory needs",
    "accepts": [
      "inventory-rows",
      "usage",
      "thresholds"
    ],
    "produces": [
      "inventory-report",
      "reorder-list",
      "stock-status"
    ],
    "keywords": [
      "inventory",
      "stock",
      "reorder",
      "supplies",
      "materials"
    ],
    "deps": [
      "Table Normalizer",
      "Inventory Signal Detector",
      "Reorder Calculator"
    ],
    "schema": "inventory"
  },
  {
    "id": "message-pack",
    "name": "Message Pack Generator",
    "verb": "write ready-to-send messages",
    "accepts": [
      "audience",
      "tone",
      "details"
    ],
    "produces": [
      "email-draft",
      "sms-draft",
      "reply-pack"
    ],
    "keywords": [
      "email",
      "message",
      "reply",
      "customer",
      "communication"
    ],
    "deps": [
      "Tone Adapter",
      "Audience Mapper",
      "Message Formatter"
    ],
    "schema": "message"
  },
  {
    "id": "report-builder",
    "name": "Report Builder",
    "verb": "build a report",
    "accepts": [
      "notes",
      "data",
      "observations"
    ],
    "produces": [
      "summary-report",
      "risks",
      "next-steps"
    ],
    "keywords": [
      "report",
      "summary",
      "findings",
      "status",
      "brief"
    ],
    "deps": [
      "Summary Extractor",
      "Risk Signal Detector",
      "Report Packager"
    ],
    "schema": "report"
  },
  {
    "id": "risk-auditor",
    "name": "Risk Auditor",
    "verb": "audit risk and issues",
    "accepts": [
      "notes",
      "process",
      "policy"
    ],
    "produces": [
      "risk-list",
      "issue-log",
      "mitigation-plan"
    ],
    "keywords": [
      "risk",
      "audit",
      "issues",
      "problems",
      "mitigation"
    ],
    "deps": [
      "Risk Signal Detector",
      "Compliance Flagger",
      "Mitigation Planner"
    ],
    "schema": "risk"
  },
  {
    "id": "handoff-pack",
    "name": "Handoff Pack Builder",
    "verb": "package the work for handoff",
    "accepts": [
      "outputs",
      "notes",
      "next-steps"
    ],
    "produces": [
      "handoff-document",
      "artifact-list",
      "workflow-template"
    ],
    "keywords": [
      "handoff",
      "export",
      "workflow",
      "documentation",
      "template"
    ],
    "deps": [
      "Artifact Collector",
      "Markdown Exporter",
      "Workflow Recorder"
    ],
    "schema": "handoff"
  },

  {
    "id": "schedule-builder",
    "name": "Schedule Builder",
    "verb": "build a schedule",
    "accepts": ["dates", "tasks", "availability"],
    "produces": ["schedule", "calendar-plan", "time-blocks"],
    "keywords": ["schedule", "calendar", "time", "availability", "agenda"],
    "deps": ["Calendar Parser", "Time Blocker", "Conflict Detector"],
    "schema": "plan"
  },
  {
    "id": "sop-builder",
    "name": "SOP Builder",
    "verb": "write a standard operating procedure",
    "accepts": ["process", "steps", "requirements"],
    "produces": ["sop", "procedure", "process-doc"],
    "keywords": ["sop", "procedure", "process", "instructions", "operations"],
    "deps": ["Step Extractor", "Procedure Formatter", "Quality Gate Mapper"],
    "schema": "report"
  },
  {
    "id": "script-generator",
    "name": "Script Generator",
    "verb": "write a script or talk track",
    "accepts": ["audience", "tone", "talking-points"],
    "produces": ["script", "talk-track", "speaking-notes"],
    "keywords": ["script", "talk track", "voiceover", "presentation", "sales call"],
    "deps": ["Audience Mapper", "Tone Adapter", "Message Formatter"],
    "schema": "message"
  },
  {
    "id": "quote-estimate-builder",
    "name": "Quote / Estimate Builder",
    "verb": "create a quote or estimate",
    "accepts": ["line-items", "labor", "materials", "margin"],
    "produces": ["quote", "estimate", "pricing-table"],
    "keywords": ["quote", "estimate", "bid", "proposal", "pricing"],
    "deps": ["CSV Row Parser", "Money Totalizer", "Cost Variance Checker"],
    "schema": "budget"
  },
  {
    "id": "outreach-campaign-builder",
    "name": "Outreach Campaign Builder",
    "verb": "create an outreach campaign",
    "accepts": ["audience", "offer", "channels"],
    "produces": ["outreach-plan", "message-sequence", "follow-up-list"],
    "keywords": ["outreach", "campaign", "follow up", "prospects", "marketing"],
    "deps": ["Audience Mapper", "Tone Adapter", "Message Formatter"],
    "schema": "message"
  },
  {
    "id": "qa-test-plan-builder",
    "name": "QA Test Plan Builder",
    "verb": "create a test plan",
    "accepts": ["requirements", "features", "risks"],
    "produces": ["test-plan", "test-cases", "acceptance-checklist"],
    "keywords": ["qa", "test", "acceptance", "bugs", "validation"],
    "deps": ["Task Extractor", "Risk Signal Detector", "Validation Rule Builder"],
    "schema": "checklist"
  },
  {
    "id": "asset-library-builder",
    "name": "Asset Library Builder",
    "verb": "organize a reusable asset library",
    "accepts": ["files", "assets", "tags"],
    "produces": ["asset-library", "tag-map", "reuse-plan"],
    "keywords": ["assets", "library", "tags", "files", "reuse"],
    "deps": ["Artifact Collector", "Library Sync Planner", "Field Normalizer"],
    "schema": "handoff"
  },
  {
    "id": "training-lesson-builder",
    "name": "Training Lesson Builder",
    "verb": "create a lesson or training module",
    "accepts": ["topic", "audience", "goals"],
    "produces": ["lesson-plan", "training-outline", "quiz-questions"],
    "keywords": ["lesson", "training", "teach", "module", "quiz"],
    "deps": ["Goal Decomposer", "Summary Extractor", "Checklist Generator"],
    "schema": "plan"
  },
  {
    "id": "decision-brief-builder",
    "name": "Decision Brief Builder",
    "verb": "create a decision brief",
    "accepts": ["options", "risks", "criteria"],
    "produces": ["decision-brief", "tradeoff-table", "recommendation"],
    "keywords": ["decision", "tradeoff", "brief", "recommend", "choose"],
    "deps": ["Option Parser", "Criteria Scorer", "Recommendation Writer"],
    "schema": "compare"
  },
  {
    "id": "compliance-checklist-builder",
    "name": "Compliance Checklist Builder",
    "verb": "build a compliance checklist",
    "accepts": ["policy", "process", "requirements"],
    "produces": ["compliance-checklist", "approval-list", "issue-log"],
    "keywords": ["compliance", "approval", "policy", "review", "checklist"],
    "deps": ["Compliance Flagger", "Risk Signal Detector", "Mitigation Planner"],
    "schema": "risk"
  }
]);
export const MINI_APP_SUPPORT_TOOLKIT = Object.freeze([
  [
    "text-intake-parser",
    "Text Intake Parser",
    "Turns messy text into sections, keywords, and candidate fields.",
    [
      "text",
      "notes"
    ],
    [
      "sections",
      "keywords",
      "field-candidates"
    ]
  ],
  [
    "field-normalizer",
    "Field Normalizer",
    "Standardizes form fields so other tools can reuse them.",
    [
      "field-list",
      "text"
    ],
    [
      "normalized-fields",
      "field-schema"
    ]
  ],
  [
    "validation-rule-builder",
    "Validation Rule Builder",
    "Creates simple required/optional and format rules for form fields.",
    [
      "field-schema"
    ],
    [
      "validation-rules"
    ]
  ],
  [
    "task-extractor",
    "Task Extractor",
    "Extracts action items from notes and assigns starter priorities.",
    [
      "notes",
      "text"
    ],
    [
      "tasks",
      "priorities"
    ]
  ],
  [
    "priority-sorter",
    "Priority Sorter",
    "Sorts work by urgency, value, deadline, and blockers.",
    [
      "tasks",
      "constraints"
    ],
    [
      "priority-list"
    ]
  ],
  [
    "deadline-normalizer",
    "Deadline Normalizer",
    "Converts loose deadlines into a clear date or timing note.",
    [
      "deadline",
      "notes"
    ],
    [
      "schedule-note"
    ]
  ],
  [
    "goal-decomposer",
    "Goal Decomposer",
    "Breaks a project goal into phases, deliverables, and checkpoints.",
    [
      "goal",
      "prompt"
    ],
    [
      "phases",
      "deliverables"
    ]
  ],
  [
    "timeline-builder",
    "Timeline Builder",
    "Builds a simple timeline from phases, duration, and deadlines.",
    [
      "phases",
      "deadline"
    ],
    [
      "timeline"
    ]
  ],
  [
    "constraint-resolver",
    "Constraint Resolver",
    "Flags constraints and suggests workable alternatives.",
    [
      "constraints",
      "plan"
    ],
    [
      "constraint-notes",
      "alternatives"
    ]
  ],
  [
    "csv-row-parser",
    "CSV Row Parser",
    "Reads pasted CSV-style rows for mini apps that need tables.",
    [
      "csv",
      "rows"
    ],
    [
      "parsed-rows"
    ]
  ],
  [
    "money-totalizer",
    "Money Totalizer",
    "Adds costs and calculates totals, averages, and remaining budget.",
    [
      "amounts",
      "budget"
    ],
    [
      "totals",
      "budget-summary"
    ]
  ],
  [
    "cost-variance-checker",
    "Cost Variance Checker",
    "Flags items that are over budget or unusually expensive.",
    [
      "cost-table"
    ],
    [
      "variance-report"
    ]
  ],
  [
    "option-parser",
    "Option Parser",
    "Splits choices into comparable option cards.",
    [
      "options",
      "text"
    ],
    [
      "option-cards"
    ]
  ],
  [
    "criteria-scorer",
    "Criteria Scorer",
    "Scores options against user-selected criteria.",
    [
      "option-cards",
      "criteria"
    ],
    [
      "score-table"
    ]
  ],
  [
    "recommendation-writer",
    "Recommendation Writer",
    "Writes a plain-language recommendation from ranked choices.",
    [
      "score-table"
    ],
    [
      "recommendation"
    ]
  ],
  [
    "table-normalizer",
    "Table Normalizer",
    "Cleans table rows and fills missing labels where possible.",
    [
      "rows",
      "csv"
    ],
    [
      "clean-table"
    ]
  ],
  [
    "inventory-signal-detector",
    "Inventory Signal Detector",
    "Detects low stock, reorder risk, and safety-stock gaps.",
    [
      "inventory-rows"
    ],
    [
      "stock-signals"
    ]
  ],
  [
    "reorder-calculator",
    "Reorder Calculator",
    "Calculates reorder quantities from stock, usage, and lead time.",
    [
      "stock-signals"
    ],
    [
      "reorder-list"
    ]
  ],
  [
    "tone-adapter",
    "Tone Adapter",
    "Rewrites messages for a chosen tone and audience.",
    [
      "message",
      "tone",
      "audience"
    ],
    [
      "tone-adjusted-message"
    ]
  ],
  [
    "audience-mapper",
    "Audience Mapper",
    "Identifies who the message is for and what they need to know.",
    [
      "audience",
      "details"
    ],
    [
      "audience-needs"
    ]
  ],
  [
    "message-formatter",
    "Message Formatter",
    "Packages content into email, SMS, or support reply format.",
    [
      "draft",
      "channel"
    ],
    [
      "formatted-message"
    ]
  ],
  [
    "summary-extractor",
    "Summary Extractor",
    "Finds the most important points from a note or report.",
    [
      "text",
      "notes"
    ],
    [
      "summary",
      "key-points"
    ]
  ],
  [
    "risk-signal-detector",
    "Risk Signal Detector",
    "Finds words and patterns that imply risk, urgency, or blockers.",
    [
      "notes",
      "process"
    ],
    [
      "risk-signals"
    ]
  ],
  [
    "report-packager",
    "Report Packager",
    "Builds a readable report with summary, details, and next steps.",
    [
      "summary",
      "data"
    ],
    [
      "report"
    ]
  ],
  [
    "compliance-flagger",
    "Compliance Flagger",
    "Flags possible approval, policy, or review checkpoints.",
    [
      "policy",
      "process"
    ],
    [
      "approval-flags"
    ]
  ],
  [
    "mitigation-planner",
    "Mitigation Planner",
    "Suggests fixes or fallback actions for risk items.",
    [
      "risk-list"
    ],
    [
      "mitigation-plan"
    ]
  ],
  [
    "artifact-collector",
    "Artifact Collector",
    "Lists files, outputs, and notes produced by a workflow.",
    [
      "outputs",
      "files"
    ],
    [
      "artifact-list"
    ]
  ],
  [
    "markdown-exporter",
    "Markdown Exporter",
    "Turns structured output into a clean markdown handoff.",
    [
      "structured-output"
    ],
    [
      "markdown"
    ]
  ],
  [
    "workflow-recorder-support",
    "Workflow Recorder Support",
    "Records steps, inputs, outputs, and reusable workflow notes.",
    [
      "steps",
      "outputs"
    ],
    [
      "workflow-template"
    ]
  ],
  [
    "library-sync-planner",
    "Library Sync Planner",
    "Explains which shared project libraries a mini app should publish to.",
    [
      "outputs",
      "project"
    ],
    [
      "library-sync-plan"
    ]
  ],
  [
    "calendar-parser",
    "Calendar Parser",
    "Reads loose dates, time windows, and availability notes into schedule candidates.",
    ["dates", "availability", "notes"],
    ["schedule-candidates", "time-windows"]
  ],
  [
    "time-blocker",
    "Time Blocker",
    "Turns tasks into practical work blocks and agenda segments.",
    ["tasks", "schedule-candidates"],
    ["time-blocks", "agenda"]
  ],
  [
    "conflict-detector",
    "Conflict Detector",
    "Flags schedule overlaps, missing owners, and timing conflicts.",
    ["schedule", "time-blocks"],
    ["conflicts", "schedule-warnings"]
  ],
  [
    "step-extractor",
    "Step Extractor",
    "Extracts repeatable procedure steps from notes and rough instructions.",
    ["process", "notes"],
    ["procedure-steps", "step-list"]
  ],
  [
    "procedure-formatter",
    "Procedure Formatter",
    "Formats steps into a readable SOP with roles, timing, and acceptance notes.",
    ["procedure-steps"],
    ["sop", "process-doc"]
  ],
  [
    "quality-gate-mapper",
    "Quality Gate Mapper",
    "Adds review gates so outputs are checked before moving downstream.",
    ["process-doc", "requirements"],
    ["quality-gates", "approval-points"]
  ],
  [
    "asset-tagger",
    "Asset Tagger",
    "Creates searchable tags for files, visuals, prompts, and reusable assets.",
    ["assets", "files", "descriptions"],
    ["asset-tags", "tag-map"]
  ],
  [
    "reuse-planner",
    "Reuse Planner",
    "Suggests where generated outputs should be saved for future projects.",
    ["outputs", "asset-tags"],
    ["reuse-plan", "library-destinations"]
  ],
  [
    "lesson-objective-mapper",
    "Lesson Objective Mapper",
    "Turns training goals into lesson objectives and learner checkpoints.",
    ["topic", "goals", "audience"],
    ["lesson-objectives", "learner-checkpoints"]
  ],
  [
    "approval-lane-builder",
    "Approval Lane Builder",
    "Creates approval lanes for compliance, money, publishing, and customer-facing work.",
    ["policy", "process", "risks"],
    ["approval-lanes", "review-queue"]
  ]
].map(([id, name, description, accepts, produces]) => ({ id, name, description, accepts, produces })));
export const MINI_APP_TARGET_COUNT = MINI_APP_DOMAINS.length * MINI_APP_OPERATION_FAMILIES.length + MINI_APP_SUPPORT_TOOLKIT.length;

const skeletonPatternForOperation = (operation) => ({
  id: `mini-${operation.id}`,
  label: `Generic Mini-App ${operation.name} Skeleton`,
  accepts: operation.accepts,
  produces: operation.produces,
  keywords: operation.keywords
});

function unique(values) {
  return [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
}

function extractKeywords(text = "", limit = 10) {
  const stop = new Set("the and for that with this from have has are was were you your our but not into about more can will would should there their they them then than when where what how why also all any use using used over under after before need needs needing make build create help".split(" "));
  const counts = new Map();
  for (const word of lower(text).match(/[a-z0-9][a-z0-9'-]{2,}/g) || []) {
    if (!stop.has(word)) counts.set(word, (counts.get(word) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit).map(([word]) => word);
}

function parseRows(text = "") {
  const raw = lines(text);
  if (!raw.length) return [];
  const hasCommas = raw.some((line) => line.includes(","));
  if (!hasCommas) return raw.map((line, index) => ({ item: line.replace(/^[-*\d.)\s]+/, ""), order: index + 1 }));
  const headers = raw[0].split(",").map((header, index) => normalize(header) || `column_${index + 1}`);
  return raw.slice(1).map((line) => {
    const parts = line.split(",").map((part) => part.trim());
    return Object.fromEntries(headers.map((header, index) => [header, parts[index] ?? ""]));
  });
}

function scoreRows(rows = [], criteria = "") {
  const wanted = extractKeywords(criteria, 8);
  return rows.map((row, index) => {
    const text = JSON.stringify(row).toLowerCase();
    const numeric = Object.values(row).map((value) => Number(String(value).replace(/[^0-9.-]/g, ""))).filter(Number.isFinite);
    const base = numeric.length ? numeric.reduce((a, b) => a + b, 0) / numeric.length : 50;
    const keywordScore = wanted.reduce((score, word) => score + (text.includes(word) ? 12 : 0), 0);
    return { ...row, score: Math.max(1, Math.round(base + keywordScore + (rows.length - index))) };
  }).sort((a, b) => Number(b.score) - Number(a.score));
}

function formatMarkdownTable(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${headers.map((header) => String(row[header] ?? "").replaceAll("|", "\\|")).join(" | ")} |`)
  ].join("\n");
}

function defaultNotes(domain) {
  return `${domain} project notes:\n- Collect the exact goal, timing, budget, and must-have details.\n- Identify blockers and decisions needed.\n- Produce an output that can flow into the next ToolGrid task.`;
}

function buildSpecificToolRecord(domain, operation) {
  const domainSlug = slugify(domain);
  const operationSlug = slugify(operation.id);
  const name = `${domain} ${operation.name}`;
  const tags = unique([
    "functional mini app", "daily use", "production browser tool", "runs locally", "toolgrid mini app", "specific mini app", "waterfall-ready", "skeleton-ready", "toolbox-compatible", "project output", "shared library output", domain, domainSlug, operation.id, operation.name,
    ...operation.keywords, ...operation.accepts, ...operation.produces, ...operation.deps
  ]);
  return {
    id: `mini-${domainSlug}-${operationSlug}`,
    name,
    category: "Functional Mini Apps",
    engine: "mini_app",
    systemLabel: MINI_APP_TOOL_LABEL,
    toolKind: "specific-mini-app",
    miniAppGenerated: true,
    description: `Functional browser-side mini app for ${domain.toLowerCase()}. It can ${operation.verb} and package the result for ToolGrid waterfalls, shared libraries, and skeleton routing.`,
    tags,
    searchPhrases: unique([
      name,
      `${domain} ${operation.name.toLowerCase()}`,
      `${operation.verb} for ${domain.toLowerCase()}`,
      `${domain} workflow`, `${domain} daily task`, `${domain} project tool`, `${domain} mini app`,
      ...operation.keywords.map((keyword) => `${domain} ${keyword}`),
      ...operation.deps.map((dep) => `${dep} for ${domain}`)
    ]),
    compatibility: {
      accepts: operation.accepts,
      produces: operation.produces,
      requiredTools: operation.deps,
      parallelSafe: !["planner", "handoff-pack"].includes(operation.id),
      approvalSensitive: /message|report|risk|budget|handoff/.test(operation.id),
      publishesToLibraries: ["project-artifacts", "toolbox-memory", `${domainSlug}-library`]
    },
    config: {
      domain,
      operationId: operation.id,
      operationName: operation.name,
      operationVerb: operation.verb,
      schema: operation.schema,
      accepts: operation.accepts,
      produces: operation.produces,
      requiredTools: operation.deps,
      skeletonPattern: skeletonPatternForOperation(operation),
      downstreamUse: ["waterfall queue", "shared project library", "prompt compiler", "workflow recorder"],
      maxCells: 64
    }
  };
}

function buildSupportToolRecord(support) {
  const operation = { id: "support-tool", name: "Support Tool", accepts: support.accepts, produces: support.produces, keywords: ["support", "helper", "dependency", "toolbox", "mini app"], deps: [] };
  return {
    id: `mini-support-${support.id}`,
    name: support.name,
    category: "Functional Mini Apps",
    engine: "mini_app",
    systemLabel: MINI_APP_TOOL_LABEL,
    toolKind: "mini-app-support-tool",
    miniAppGenerated: true,
    description: `${support.description} This support tool exists because many mini apps depend on this reusable function.`,
    tags: unique(["functional mini app", "support tool", "dependency tool", "toolbox support", "waterfall helper", "daily use", "production browser tool", "runs locally", "skeleton-ready", "toolbox-compatible", "prompt engine", "project output", "shared library", "mini app dependency", support.id, support.name, support.description, ...support.accepts, ...support.produces]),
    searchPhrases: unique([support.name, support.description, `${support.name} helper`, `${support.name} dependency`, `${support.name} mini app support`, `${support.name} waterfall helper`, `${support.name} toolbox function`, `${support.name} project utility`, ...support.accepts, ...support.produces]),
    compatibility: { accepts: support.accepts, produces: support.produces, requiredTools: [], parallelSafe: true, approvalSensitive: false, publishesToLibraries: ["toolbox-support"] },
    config: { domain: "Toolbox Support", operationId: "support-tool", operationName: support.name, operationVerb: "support another mini app", schema: "support", accepts: support.accepts, produces: support.produces, requiredTools: [], skeletonPattern: skeletonPatternForOperation(operation), downstreamUse: ["dependency", "waterfall queue", "toolbox sync"], maxCells: 64 }
  };
}

export const MINI_APP_TOOL_RECORDS = Object.freeze([
  ...MINI_APP_DOMAINS.flatMap((domain) => MINI_APP_OPERATION_FAMILIES.map((operation) => buildSpecificToolRecord(domain, operation))),
  ...MINI_APP_SUPPORT_TOOLKIT.map(buildSupportToolRecord)
]);

function section(title, body) {
  return `## ${title}\n${body}`;
}

function buildChecklist(domain, inputs) {
  const base = parseRows(inputs.notes || inputs.rows || defaultNotes(domain));
  const items = (base.length ? base : parseRows(defaultNotes(domain))).slice(0, 12);
  return items.map((item, index) => `- [ ] ${index + 1}. ${item.item || item.task || Object.values(item)[0] || `Prepare ${domain} step ${index + 1}`}`).join("\n");
}

function buildTimeline(inputs) {
  const deadline = normalize(inputs.deadline) || "next review date";
  return [
    `Phase 1 — Intake and details: today`,
    `Phase 2 — Draft and organize: within 24 hours`,
    `Phase 3 — Review and fix gaps: before ${deadline}`,
    `Phase 4 — Export handoff and save workflow: ${deadline}`
  ].join("\n");
}

function runBySchema(tool, inputs) {
  const cfg = tool.config || {};
  const domain = cfg.domain || "Project";
  const goal = normalize(inputs.prompt || inputs.goal) || `Complete a ${domain.toLowerCase()} task.`;
  const notes = normalize(inputs.notes) || defaultNotes(domain);
  const rows = parseRows(inputs.rows || notes);
  const keywords = extractKeywords(`${goal} ${notes} ${inputs.constraints || ""}`, 10);
  const requiredTools = cfg.requiredTools || [];
  const header = [`# ${tool.name}`, `Goal: ${goal}`, `Domain: ${domain}`, `Operation: ${cfg.operationName || cfg.operationId}`, `Tool dependencies built: ${requiredTools.length ? requiredTools.join(", ") : "none required"}`].join("\n");
  let body = "";
  switch (cfg.schema) {
    case "intake": {
      const fields = ["Name / item", "Current status", "Deadline", "Budget", "Constraints", "Success definition", ...keywords.slice(0, 4).map((k) => `${k} detail`)];
      body = section("Intake fields", fields.map((field) => `- ${field}`).join("\n"));
      break;
    }
    case "checklist":
      body = section("Checklist", buildChecklist(domain, inputs));
      break;
    case "plan":
      body = [section("Plan", buildTimeline(inputs)), section("Key deliverables", keywords.slice(0, 6).map((k) => `- ${k} deliverable`).join("\n"))].join("\n\n");
      break;
    case "budget": {
      const budget = Number(inputs.budget || 0);
      const costRows = rows.slice(0, 10).map((row, index) => {
        const numeric = Object.values(row).map((value) => Number(String(value).replace(/[^0-9.-]/g, ""))).find(Number.isFinite) || (index + 1) * 10;
        return { item: row.item || row.name || Object.values(row)[0] || `${domain} item ${index + 1}`, cost: numeric };
      });
      const total = costRows.reduce((sum, row) => sum + Number(row.cost || 0), 0);
      body = [formatMarkdownTable(["item", "cost"], costRows.map((row) => ({ item: row.item, cost: money(row.cost) }))), `\nTotal estimate: ${money(total)}`, budget ? `Budget check: ${total <= budget ? "inside budget" : `over budget by ${money(total - budget)}`}` : "Budget check: no budget entered"].join("\n");
      break;
    }
    case "compare": {
      const scored = scoreRows(rows.length ? rows : parseRows("Option A, fast, 50\nOption B, cheaper, 30\nOption C, premium, 80"), `${inputs.criteria || ""} ${goal}`).slice(0, 8);
      body = [formatMarkdownTable(["option", "score"], scored.map((row, index) => ({ option: row.item || row.name || row.option || Object.values(row)[0] || `Option ${index + 1}`, score: row.score }))), `\nRecommendation: start with ${scored[0]?.item || scored[0]?.name || scored[0]?.option || Object.values(scored[0] || {})[0] || "the highest-scoring option"}.`].join("\n");
      break;
    }
    case "inventory": {
      const inv = rows.slice(0, 10).map((row, index) => {
        const stock = Number(row.stock || row.qty || row.quantity || row.count || index + 2);
        const usage = Number(row.usage || row.daily_usage || 1);
        const reorder = Math.max(0, usage * 7 - stock);
        return { item: row.item || row.name || Object.values(row)[0] || `${domain} stock ${index + 1}`, stock, usage, status: reorder > 0 ? "REORDER" : "OK", reorder };
      });
      body = formatMarkdownTable(["item", "stock", "usage", "status", "reorder"], inv);
      break;
    }
    case "message": {
      const audience = normalize(inputs.audience) || "the recipient";
      const tone = normalize(inputs.tone) || "clear and helpful";
      body = `Subject: ${domain} update\n\nHi ${audience},\n\nHere is the update: ${goal}\n\nKey details:\n${keywords.slice(0, 5).map((k) => `- ${k}`).join("\n")}\n\nNext step: please review and reply with any changes.\n\nTone used: ${tone}.`;
      break;
    }
    case "report":
      body = [section("Summary", `This ${domain.toLowerCase()} report is based on the provided prompt and notes.`), section("Key points", keywords.slice(0, 8).map((k) => `- ${k}`).join("\n")), section("Next steps", buildChecklist(domain, { notes }).split("\n").slice(0, 5).join("\n"))].join("\n\n");
      break;
    case "risk": {
      const riskWords = ["late", "cost", "missing", "low", "urgent", "deadline", "issue", "problem", "risk", "approval"];
      const found = riskWords.filter((word) => lower(`${goal} ${notes} ${inputs.constraints || ""}`).includes(word));
      body = [section("Risk flags", (found.length ? found : ["No obvious high-risk words found"]).map((risk) => `- ${risk}`).join("\n")), section("Mitigation plan", ["Confirm missing details", "Check budget and deadline", "Add approval checkpoint if this affects customers or money", "Save final output to project history"].map((s) => `- ${s}`).join("\n"))].join("\n\n");
      break;
    }
    case "handoff":
      body = [section("Handoff summary", `Reusable ${domain.toLowerCase()} workflow package created.`), section("Artifacts", ["Prompt", "Inputs", "Generated output", "Tool dependencies", "Next tool recommendations"].map((s) => `- ${s}`).join("\n")), section("Next recommended tool", "Use Workflow Recorder, Report Builder, or Message Pack Generator depending on the next project step.")].join("\n\n");
      break;
    case "support":
    default:
      body = [section("Support function", tool.description || "Reusable support function."), section("Reusable output", `Accepts: ${(cfg.accepts || []).join(", ")}\nProduces: ${(cfg.produces || []).join(", ")}`)].join("\n\n");
      break;
  }
  const footer = [``, `Compatibility signal: ${tool.compatibility?.parallelSafe ? "ready-for-paid-multitask" : "waterfall-only"}`, `Publishes to: ${(tool.compatibility?.publishesToLibraries || []).join(", ")}`, `Skeleton pattern: ${cfg.skeletonPattern?.label || "Generic Mini-App Skeleton"}`].join("\n");
  return `${header}\n\n${body}\n${footer}`;
}

export function getMiniAppDefaultInputs(tool = {}) {
  const domain = tool.config?.domain || "Project";
  return {
    prompt: `Help me complete a practical ${domain.toLowerCase()} task with a clear output.`,
    goal: `Finish the ${domain.toLowerCase()} work and prepare the next step.`,
    notes: defaultNotes(domain),
    rows: "item,stock,usage,cost\nSupplies,6,2,24\nLabels,3,1,12\nPackaging,10,2,18",
    budget: 100,
    deadline: "Friday",
    audience: "customer or team member",
    tone: "clear and professional",
    constraints: "Keep it simple, useful, and ready to hand off to the next tool.",
    criteria: "price quality urgency ease"
  };
}

export function getMiniAppToolSchema(tool = {}) {
  const cfg = tool.config || {};
  const base = [
    { name: "prompt", label: "Prompt / goal", type: "textarea" },
    { name: "notes", label: "Notes / details", type: "textarea" }
  ];
  const extras = {
    budget: [{ name: "rows", label: "Line items / rows", type: "textarea" }, { name: "budget", label: "Budget", type: "number" }],
    compare: [{ name: "rows", label: "Options / rows", type: "textarea" }, { name: "criteria", label: "Criteria", type: "text" }],
    inventory: [{ name: "rows", label: "Inventory rows", type: "textarea" }],
    message: [{ name: "audience", label: "Audience", type: "text" }, { name: "tone", label: "Tone", type: "text" }],
    plan: [{ name: "deadline", label: "Deadline", type: "text" }, { name: "constraints", label: "Constraints", type: "textarea" }],
    risk: [{ name: "constraints", label: "Policies / constraints", type: "textarea" }]
  };
  return [...base, ...(extras[cfg.schema] || [])];
}

export function runMiniAppTool(tool = {}, inputs = {}) {
  return runBySchema(tool, inputs);
}

export function searchMiniApps(query = "", { limit = 24 } = {}) {
  const q = lower(query);
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  return MINI_APP_TOOL_RECORDS.map((tool) => {
    const haystack = lower(`${tool.name} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`);
    let score = 0;
    for (const token of tokens) if (haystack.includes(token)) score += token.length > 4 ? 3 : 1;
    if (tool.toolKind === "specific-mini-app") score += 1;
    return { tool, score };
  }).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name)).slice(0, limit);
}

export function buildMiniAppSummary() {
  const byDomain = new Map();
  const byOperation = new Map();
  for (const tool of MINI_APP_TOOL_RECORDS) {
    byDomain.set(tool.config.domain, (byDomain.get(tool.config.domain) || 0) + 1);
    byOperation.set(tool.config.operationId, (byOperation.get(tool.config.operationId) || 0) + 1);
  }
  return {
    version: MINI_APP_SUITE_VERSION,
    toolCount: MINI_APP_TOOL_RECORDS.length,
    targetCount: MINI_APP_TARGET_COUNT,
    domainCount: MINI_APP_DOMAINS.length,
    operationFamilyCount: MINI_APP_OPERATION_FAMILIES.length,
    supportToolCount: MINI_APP_SUPPORT_TOOLKIT.length,
    skeletonPatternCount: byOperation.size,
    mostCommonOperations: [...byOperation.entries()].sort((a,b)=>b[1]-a[1]).slice(0, 12).map(([operation,count])=>({ operation, count })),
    summary: `${MINI_APP_TOOL_RECORDS.length.toLocaleString()} functional daily-use mini apps generated from ${MINI_APP_DOMAINS.length} domains, ${MINI_APP_OPERATION_FAMILIES.length} operation families, and ${MINI_APP_SUPPORT_TOOLKIT.length} dependency/support tools.`
  };
}

export function verifyMiniAppSuite({ knownEngines = [] } = {}) {
  const errors = [];
  const ids = new Set();
  for (const tool of MINI_APP_TOOL_RECORDS) {
    if (!tool.id) errors.push("mini app missing id");
    if (ids.has(tool.id)) errors.push(`duplicate mini app id ${tool.id}`);
    ids.add(tool.id);
    if (tool.engine !== "mini_app") errors.push(`${tool.id} does not use mini_app engine`);
    if (knownEngines.length && !knownEngines.includes(tool.engine)) errors.push(`${tool.id} uses unknown engine`);
    if (tool.systemLabel !== MINI_APP_TOOL_LABEL) errors.push(`${tool.id} missing mini-app label`);
    if ((tool.tags || []).length < 18) errors.push(`${tool.id} needs at least 18 searchable tags`);
    if ((tool.searchPhrases || []).length < 8) errors.push(`${tool.id} needs at least 8 search phrases`);
    if (!tool.config?.skeletonPattern?.id) errors.push(`${tool.id} missing skeleton pattern`);
    if (!tool.compatibility?.accepts?.length || !tool.compatibility?.produces?.length) errors.push(`${tool.id} missing compatibility IO`);
  }
  if (MINI_APP_TOOL_RECORDS.length !== MINI_APP_TARGET_COUNT) errors.push(`expected ${MINI_APP_TARGET_COUNT} mini apps, got ${MINI_APP_TOOL_RECORDS.length}`);
  return { ok: errors.length === 0, errors, stats: buildMiniAppSummary() };
}
