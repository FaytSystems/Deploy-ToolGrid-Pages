const normalize = (value) => String(value ?? "").trim();
const lower = (value) => normalize(value).toLowerCase();
const slugify = (value) => lower(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];

export const FRONTIER_TOOL_EXPANSION_VERSION = "2026-06-13-frontier-tool-expansion-v1";
export const FRONTIER_TOOL_LABEL = "Frontier Functional Tool";
export const FRONTIER_DOMAIN_TARGET_COUNT = 400;
export const FRONTIER_OPERATION_TARGET_COUNT = 50;
export const FRONTIER_SUPPORT_TOOL_TARGET_COUNT = 50;
export const FRONTIER_TOOL_TARGET_COUNT = (FRONTIER_DOMAIN_TARGET_COUNT * FRONTIER_OPERATION_TARGET_COUNT) + FRONTIER_SUPPORT_TOOL_TARGET_COUNT;

const MACRO_DOMAINS = Object.freeze([
  { macro: "Emergency Preparedness", tags: ["emergency", "preparedness", "resilience", "safety"], fields: ["Storm Shelter", "Wildfire Evacuation", "Flood Readiness", "Power Outage", "Emergency Go Bag", "Community Response", "First Aid Kit", "Water Storage", "Backup Power", "Emergency Radio", "Pet Evacuation", "Family Reunification", "Vehicle Emergency", "Food Storage", "Cold Weather Prep", "Heat Wave Prep", "Neighborhood Watch", "Disaster Claim Packet", "Generator Maintenance", "Emergency Drill"] },
  { macro: "Personal Admin", tags: ["personal admin", "life management", "organization", "paperwork"], fields: ["Password Vault Cleanup", "Digital File Naming", "Warranty Tracker", "Return Window Tracker", "Subscription Audit", "Receipt Archive", "Home Binder", "Important Documents", "Contact List Cleanup", "Calendar Reset", "Goal Review", "Monthly Reset", "Quarterly Planning", "Errand Batch", "Gift Tracker", "Donation Tracker", "Personal CRM", "Life Admin Inbox", "Household Manual", "Family Records"] },
  { macro: "Home Improvement", tags: ["home", "repair", "maintenance", "improvement"], fields: ["Paint Room Refresh", "Flooring Project", "Cabinet Upgrade", "Deck Repair", "Fence Planning", "Garage Storage", "Basement Organization", "Attic Storage", "Window Treatment", "Lighting Upgrade", "Door Hardware", "Trim And Molding", "Home Energy Audit", "Smart Home Setup", "Appliance Replacement", "Tool Inventory", "Material Cut List", "Weekend Repair", "Home Safety Sweep", "Seasonal Maintenance"] },
  { macro: "Hobbies & Crafts", tags: ["hobby", "craft", "maker", "creative"], fields: ["Woodworking Project", "Sewing Pattern", "Quilting Layout", "Leathercraft", "Candle Making", "Soap Making", "Jewelry Making", "Miniature Painting", "Model Train", "Board Game Design", "Diorama Build", "Scrapbook Layout", "Calligraphy Practice", "Vinyl Cutter", "3D Printing", "Laser Cutting", "CNC Project", "Cosplay Armor", "Resin Casting", "Craft Fair Booth"] },
  { macro: "Outdoor Recreation", tags: ["outdoor", "recreation", "trip", "gear"], fields: ["Camping Trip", "Hiking Route", "Fishing Gear", "Hunting Checklist", "Kayak Outing", "Bike Tuneup", "Trail Maintenance", "RV Packing", "Overlanding Route", "Backpacking Meal", "Climbing Gear", "Ski Trip", "Beach Day", "Picnic Plan", "Birdwatching Log", "Geocaching Route", "Outdoor Photography", "Park Visit", "Boat Maintenance", "Adventure Journal"] },
  { macro: "Education & Learning", tags: ["education", "learning", "school", "training"], fields: ["Flashcard Deck", "Exam Cram Plan", "Reading Tracker", "Essay Outline", "Science Fair", "Math Practice", "Language Drill", "Music Practice", "Art Class", "Classroom Seating", "Parent Teacher Prep", "Scholarship Packet", "College Visit", "Course Comparison", "Skill Roadmap", "Certification Study", "Workshop Agenda", "Tutoring Session", "Student Progress", "Portfolio Review"] },
  { macro: "Health Admin", tags: ["health admin", "wellness", "care", "records"], fields: ["Appointment Prep", "Symptom Journal", "Medication Refill", "Caregiver Notes", "Physical Therapy", "Dental Visit", "Vision Check", "Insurance Followup", "Lab Results Tracker", "Meal Restriction", "Hydration Tracker", "Sleep Routine", "Mobility Plan", "Home Care Shift", "Vaccination Records", "Wellness Check", "Provider Comparison", "Care Plan Review", "Emergency Medical Card", "Health Document Binder"] },
  { macro: "Pet & Animal Care", tags: ["pet", "animal", "care", "schedule"], fields: ["Dog Training", "Cat Care", "Aquarium Maintenance", "Reptile Habitat", "Bird Cage Setup", "Horse Barn Chores", "Chicken Health Log", "Goat Milking", "Rabbit Hutch", "Pet Medication", "Pet Travel", "Grooming Routine", "Vet Visit Prep", "Food Rotation", "Lost Pet Plan", "Adoption Packet", "Pet Sitter Instructions", "Animal Enrichment", "Flea Tick Season", "Kennel Packing"] },
  { macro: "Food & Kitchen", tags: ["food", "kitchen", "meal", "recipe"], fields: ["Freezer Meal", "Pantry Rotation", "Leftover Plan", "Bulk Cooking", "Fermentation Batch", "Canning Session", "Sourdough Schedule", "BBQ Cook", "Meal Prep Sunday", "Kids Lunches", "Diet Swap", "Party Menu", "Kitchen Deep Clean", "Equipment Maintenance", "Recipe Binder", "Food Costing", "Allergen Menu", "Prep List", "Shopping Route", "Seasonal Menu"] },
  { macro: "Creator & Media", tags: ["creator", "media", "content", "production"], fields: ["Livestream Run Of Show", "Short Form Clip", "Newsletter Issue", "Blog Series", "Thumbnail Batch", "Podcast Guest Prep", "B Roll Shot List", "Content Repurpose", "Community Poll", "Creator Sponsorship", "Brand Kit", "Voiceover Script", "Caption Pack", "Media Archive", "Course Module", "Webinar Followup", "Content Calendar", "Analytics Review", "Audience Persona", "Creative Experiment"] },
  { macro: "Professional Services", tags: ["professional services", "client", "office", "business"], fields: ["Client Discovery", "Proposal Review", "Scope Change", "Meeting Prep", "Consulting Memo", "Retainer Renewal", "Client Offboarding", "Case Notes", "Service Menu", "Referral Program", "Client Winback", "Internal Review", "Vendor Brief", "Document Request", "Presentation Prep", "Decision Log", "Status Update", "Client Education", "Service Audit", "Quarterly Review"] },
  { macro: "Retail & Local Commerce", tags: ["retail", "commerce", "local shop", "sales"], fields: ["Window Display", "Shelf Reset", "Markdown Sale", "Loyalty Offer", "Local Flyer", "POS Cleanup", "Stockroom Audit", "Seasonal Merch", "Customer Pickup", "Return Desk", "Gift Guide", "Bundle Offer", "Vendor Booth", "Pop Up Shop", "Cash Drawer", "Store Opening", "Store Closing", "Shrink Check", "Price Tag Batch", "Local Partnership"] },
  { macro: "Facilities & Operations", tags: ["facilities", "operations", "maintenance", "inspection"], fields: ["Janitorial Route", "Security Patrol", "Access Badge Audit", "Room Setup", "Event Cleanup", "Equipment Checkout", "Supply Closet", "HVAC Filter Log", "Lighting Inspection", "Fire Extinguisher Check", "Parking Lot Sweep", "Restroom Checklist", "Conference Room", "Key Inventory", "Incident Log", "Building Walkthrough", "Vendor Visit", "Work Order Triage", "Utility Usage", "Move Coordination"] },
  { macro: "Transportation & Mobility", tags: ["transport", "fleet", "vehicle", "route"], fields: ["Fleet Fuel Log", "Driver Checklist", "Route Delay", "Vehicle Inspection", "Tire Rotation", "Mileage Audit", "Delivery Exception", "Passenger Manifest", "Ride Share Plan", "Bus Trip", "Airport Pickup", "Moving Truck", "Trailer Load", "Bike Fleet", "Scooter Charging", "Courier Bag", "Route Safety", "Maintenance Recall", "Parking Permit", "Trip Reconciliation"] },
  { macro: "Finance & Records", tags: ["finance", "records", "money", "audit"], fields: ["Cash Flow Snapshot", "Receipt Reconciliation", "Petty Cash", "Expense Category", "Donation Receipt", "Reimbursement Packet", "Mileage Reimbursement", "Budget Variance", "Cost Allocation", "Savings Challenge", "Debt Snowball", "Price Book", "Purchase Approval", "Payment Reminder", "Bill Calendar", "Tax Folder", "Vendor W9", "Bank Statement Review", "Financial Goal", "Year End Checklist"] },
  { macro: "Legal & Compliance Admin", tags: ["legal admin", "compliance", "records", "policy"], fields: ["Policy Acknowledgment", "Contract Summary", "License Renewal", "Permit Calendar", "Disclosure Tracker", "Privacy Request", "Retention Schedule", "Incident Evidence", "Terms Review", "Consent Form", "Training Proof", "Regulation Watch", "Board Packet", "Minutes Draft", "Risk Register", "Audit Evidence", "Control Owner", "Exception Request", "Document Hold", "Procedure Attestation"] },
  { macro: "Technology & Data", tags: ["technology", "data", "software", "systems"], fields: ["Device Inventory", "Access Review", "Backup Verification", "Data Cleanup", "Dataset Dictionary", "API Key Rotation", "Release Notes", "Bug Triage", "Feature Flag", "Support Macro", "Knowledge Base", "Incident Postmortem", "Uptime Review", "Log Review", "Migration Cutover", "Sandbox Test", "Integration Map", "Automation Recipe", "Prompt Library", "Model Evaluation"] },
  { macro: "Community & Social", tags: ["community", "social", "group", "event"], fields: ["Volunteer Roster", "Community Cleanup", "Neighborhood Newsletter", "Club Meeting", "Fundraiser Booth", "Welcome Packet", "Member Survey", "Forum Moderation", "Event RSVP", "Donation Drive", "Public Notice", "Stakeholder Update", "Community Calendar", "Sponsor Thank You", "Group Rules", "Outreach List", "Town Hall", "Feedback Roundup", "Mentor Match", "Resource Directory"] },
  { macro: "Science & Field Work", tags: ["science", "field work", "research", "observation"], fields: ["Field Sample", "Observation Log", "Specimen Label", "Calibration Check", "Lab Notebook", "Protocol Deviation", "Research Poster", "Survey Instrument", "Data Collection", "Consent Tracking", "Field Route", "Equipment Pack", "Weather Note", "Quality Control", "Chain Of Custody", "Experiment Setup", "Review Packet", "Literature Matrix", "Grant Milestone", "Finding Summary"] },
  { macro: "Niche Business Ops", tags: ["niche business", "operations", "small operator", "service"], fields: ["Mobile Notary", "Pressure Washing", "Junk Removal", "Pool Service", "Pest Control", "Locksmith Call", "Mobile Detailing", "Tattoo Studio", "Dance Studio", "Yoga Class", "Martial Arts School", "Escape Room", "Arcade Venue", "Storage Unit", "Laundromat", "Vending Route", "Photo Booth", "Party Rental", "Bounce House", "Mobile Mechanic"] }
]);

export const FRONTIER_DOMAINS = Object.freeze(
  MACRO_DOMAINS.flatMap((macroGroup, macroIndex) => macroGroup.fields.map((field, fieldIndex) => ({
    field,
    macro: macroGroup.macro,
    tags: unique([macroGroup.macro, ...macroGroup.tags, field, `frontier domain ${macroIndex + 1}`, `domain slot ${fieldIndex + 1}`])
  })))
);

export const FRONTIER_OPERATION_FAMILIES = Object.freeze([
  { id: "requirement-map", label: "Requirement Map Builder", verb: "map requirements for", schema: "intake", accepts: ["prompt", "notes", "constraints"], produces: ["requirements-map"], tags: ["requirements", "mapping", "scope", "needed details"] },
  { id: "constraint-balance", label: "Constraint Balance Planner", verb: "balance constraints for", schema: "plan", accepts: ["requirements", "limits", "deadline"], produces: ["constraint-plan"], tags: ["constraints", "tradeoffs", "limits", "plan"] },
  { id: "readiness-score", label: "Readiness Scorecard", verb: "score readiness for", schema: "risk", accepts: ["checklist", "notes", "criteria"], produces: ["readiness-score"], tags: ["readiness", "scorecard", "confidence", "risk"] },
  { id: "resource-map", label: "Resource Map Builder", verb: "map resources for", schema: "inventory", accepts: ["items", "people", "tools"], produces: ["resource-map"], tags: ["resources", "inventory", "people", "tools"] },
  { id: "decision-gate", label: "Decision Gate Builder", verb: "create decision gates for", schema: "compare", accepts: ["options", "criteria", "risks"], produces: ["decision-gates"], tags: ["decision", "gate", "criteria", "approval"] },
  { id: "next-best-action", label: "Next Best Action Picker", verb: "pick next actions for", schema: "plan", accepts: ["current-state", "goal", "constraints"], produces: ["next-actions"], tags: ["next action", "prioritize", "triage", "sequence"] },
  { id: "stakeholder-map", label: "Stakeholder Map Builder", verb: "map stakeholders for", schema: "intake", accepts: ["people", "roles", "notes"], produces: ["stakeholder-map"], tags: ["stakeholders", "roles", "responsibility", "communications"] },
  { id: "handoff-dossier", label: "Handoff Dossier Builder", verb: "package handoff dossier for", schema: "handoff", accepts: ["outputs", "notes", "artifacts"], produces: ["handoff-dossier"], tags: ["handoff", "dossier", "package", "transfer"] },
  { id: "fallback-plan", label: "Fallback Plan Builder", verb: "build fallback plan for", schema: "risk", accepts: ["risk", "goal", "resources"], produces: ["fallback-plan"], tags: ["fallback", "backup", "contingency", "risk"] },
  { id: "quality-rubric", label: "Quality Rubric Builder", verb: "build quality rubric for", schema: "compare", accepts: ["criteria", "standard", "examples"], produces: ["quality-rubric"], tags: ["quality", "rubric", "score", "review"] },
  { id: "prep-packet", label: "Prep Packet Builder", verb: "create prep packet for", schema: "handoff", accepts: ["goal", "materials", "steps"], produces: ["prep-packet"], tags: ["prep packet", "ready", "materials", "brief"] },
  { id: "before-after-audit", label: "Before / After Audit", verb: "audit before and after for", schema: "report", accepts: ["before", "after", "metrics"], produces: ["change-report"], tags: ["before after", "audit", "change", "compare"] },
  { id: "route-map", label: "Route Map Planner", verb: "route steps for", schema: "plan", accepts: ["locations", "sequence", "constraints"], produces: ["route-map"], tags: ["route", "sequence", "path", "logistics"] },
  { id: "packet-checker", label: "Packet Completeness Checker", verb: "check packet completeness for", schema: "checklist", accepts: ["packet", "requirements"], produces: ["missing-items"], tags: ["packet", "complete", "missing", "checker"] },
  { id: "role-script", label: "Role Script Generator", verb: "write role script for", schema: "message", accepts: ["role", "audience", "tone"], produces: ["role-script"], tags: ["script", "role", "talking points", "message"] },
  { id: "scenario-grid", label: "Scenario Grid Builder", verb: "build scenarios for", schema: "compare", accepts: ["options", "assumptions", "outcomes"], produces: ["scenario-grid"], tags: ["scenario", "grid", "what if", "options"] },
  { id: "approval-map", label: "Approval Map Builder", verb: "map approvals for", schema: "intake", accepts: ["people", "steps", "policy"], produces: ["approval-map"], tags: ["approval", "map", "signoff", "review"] },
  { id: "dependency-scan", label: "Dependency Scanner", verb: "scan dependencies for", schema: "risk", accepts: ["tasks", "tools", "data"], produces: ["dependency-list"], tags: ["dependency", "blocked", "wait", "parallel"] },
  { id: "timeline-compressor", label: "Timeline Compressor", verb: "compress timeline for", schema: "plan", accepts: ["tasks", "deadline"], produces: ["compressed-plan"], tags: ["timeline", "compress", "fast track", "deadline"] },
  { id: "scope-splitter", label: "Scope Splitter", verb: "split scope for", schema: "plan", accepts: ["goal", "complexity"], produces: ["project-splits"], tags: ["scope", "split", "multiple projects", "complex"] },
  { id: "material-bundle", label: "Material Bundle Builder", verb: "bundle materials for", schema: "inventory", accepts: ["materials", "quantities"], produces: ["material-bundle"], tags: ["materials", "bundle", "inventory", "kit"] },
  { id: "supplier-shortlist", label: "Supplier Shortlist Builder", verb: "shortlist suppliers for", schema: "compare", accepts: ["vendors", "prices", "criteria"], produces: ["supplier-shortlist"], tags: ["supplier", "vendor", "shortlist", "purchase"] },
  { id: "message-tree", label: "Message Tree Builder", verb: "build message tree for", schema: "message", accepts: ["audience", "situations"], produces: ["message-tree"], tags: ["message", "tree", "if then", "reply"] },
  { id: "issue-triage", label: "Issue Triage Board", verb: "triage issues for", schema: "risk", accepts: ["issues", "urgency"], produces: ["triage-board"], tags: ["issue", "triage", "priority", "risk"] },
  { id: "success-definition", label: "Success Definition Builder", verb: "define success for", schema: "intake", accepts: ["goal", "criteria"], produces: ["success-definition"], tags: ["success", "definition", "done", "acceptance"] },
  { id: "evidence-binder", label: "Evidence Binder Builder", verb: "bind evidence for", schema: "report", accepts: ["notes", "files", "claims"], produces: ["evidence-binder"], tags: ["evidence", "binder", "proof", "documentation"] },
  { id: "microtask-board", label: "Microtask Board Builder", verb: "break into microtasks for", schema: "plan", accepts: ["goal", "tasks"], produces: ["microtask-board"], tags: ["microtasks", "board", "small steps", "tasks"] },
  { id: "risk-heatmap", label: "Risk Heatmap Builder", verb: "make risk heatmap for", schema: "risk", accepts: ["risks", "likelihood", "impact"], produces: ["risk-heatmap"], tags: ["risk", "heatmap", "impact", "likelihood"] },
  { id: "learning-loop", label: "Learning Loop Builder", verb: "build learning loop for", schema: "plan", accepts: ["results", "feedback"], produces: ["learning-loop"], tags: ["learning", "feedback", "iterate", "improve"] },
  { id: "asset-tagging", label: "Asset Tagging Planner", verb: "tag assets for", schema: "inventory", accepts: ["assets", "labels", "locations"], produces: ["asset-tags"], tags: ["assets", "tags", "labels", "library"] },
  { id: "inspection-pass", label: "Inspection Pass Builder", verb: "build inspection pass for", schema: "checklist", accepts: ["items", "standard"], produces: ["inspection-checklist"], tags: ["inspection", "pass", "check", "review"] },
  { id: "change-notice", label: "Change Notice Generator", verb: "generate change notice for", schema: "message", accepts: ["change", "audience"], produces: ["change-notice"], tags: ["change", "notice", "update", "communication"] },
  { id: "timebox-plan", label: "Timebox Plan Builder", verb: "timebox work for", schema: "plan", accepts: ["tasks", "duration"], produces: ["timebox-plan"], tags: ["timebox", "focus", "schedule", "plan"] },
  { id: "acceptance-test", label: "Acceptance Test Builder", verb: "build acceptance tests for", schema: "checklist", accepts: ["requirements", "output"], produces: ["acceptance-tests"], tags: ["acceptance", "test", "done", "quality"] },
  { id: "coverage-map", label: "Coverage Map Builder", verb: "map coverage for", schema: "report", accepts: ["items", "areas"], produces: ["coverage-map"], tags: ["coverage", "map", "gap", "report"] },
  { id: "cost-sensitivity", label: "Cost Sensitivity Checker", verb: "check cost sensitivity for", schema: "budget", accepts: ["costs", "budget"], produces: ["cost-sensitivity"], tags: ["cost", "sensitivity", "budget", "estimate"] },
  { id: "handoff-questions", label: "Handoff Questions Builder", verb: "build handoff questions for", schema: "intake", accepts: ["handoff", "gaps"], produces: ["handoff-questions"], tags: ["handoff", "questions", "gaps", "review"] },
  { id: "quickstart-guide", label: "Quickstart Guide Builder", verb: "write quickstart for", schema: "report", accepts: ["steps", "audience"], produces: ["quickstart-guide"], tags: ["quickstart", "guide", "instructions", "start"] },
  { id: "status-snapshot", label: "Status Snapshot Builder", verb: "create status snapshot for", schema: "report", accepts: ["progress", "risks"], produces: ["status-snapshot"], tags: ["status", "snapshot", "progress", "report"] },
  { id: "change-impact", label: "Change Impact Scanner", verb: "scan change impact for", schema: "risk", accepts: ["change", "dependencies"], produces: ["impact-report"], tags: ["change", "impact", "dependencies", "risk"] },
  { id: "boundary-setter", label: "Boundary Setter", verb: "set boundaries for", schema: "intake", accepts: ["scope", "limits"], produces: ["boundaries"], tags: ["boundaries", "scope", "limits", "rules"] },
  { id: "priority-ladder", label: "Priority Ladder Builder", verb: "ladder priorities for", schema: "compare", accepts: ["priorities", "criteria"], produces: ["priority-ladder"], tags: ["priority", "ladder", "rank", "decision"] },
  { id: "data-capture-card", label: "Data Capture Card Builder", verb: "build data capture cards for", schema: "intake", accepts: ["fields", "records"], produces: ["data-capture-card"], tags: ["data", "capture", "form", "fields"] },
  { id: "exception-log", label: "Exception Log Builder", verb: "log exceptions for", schema: "risk", accepts: ["exceptions", "notes"], produces: ["exception-log"], tags: ["exception", "log", "issue", "record"] },
  { id: "win-loss-review", label: "Win / Loss Review", verb: "review wins and losses for", schema: "report", accepts: ["outcomes", "notes"], produces: ["win-loss-review"], tags: ["win loss", "review", "lessons", "outcomes"] },
  { id: "prompt-contract", label: "Prompt Contract Builder", verb: "write prompt contract for", schema: "intake", accepts: ["prompt", "output"], produces: ["prompt-contract"], tags: ["prompt", "contract", "AI", "instructions"] },
  { id: "library-index", label: "Library Index Builder", verb: "index library for", schema: "inventory", accepts: ["assets", "metadata"], produces: ["library-index"], tags: ["library", "index", "assets", "metadata"] },
  { id: "translation-brief", label: "Translation Brief Builder", verb: "brief translation for", schema: "message", accepts: ["text", "locale"], produces: ["translation-brief"], tags: ["translation", "localization", "language", "brief"] },
  { id: "accessibility-sweep", label: "Accessibility Sweep", verb: "sweep accessibility for", schema: "risk", accepts: ["content", "layout"], produces: ["accessibility-sweep"], tags: ["accessibility", "readability", "inclusive", "check"] },
  { id: "final-review", label: "Final Review Checklist", verb: "review final output for", schema: "checklist", accepts: ["output", "requirements"], produces: ["final-review-checklist"], tags: ["final review", "checklist", "quality", "done"] }
]);

function skeletonPatternForOperation(operation) {
  return {
    id: `frontier-${operation.id}`,
    label: `Frontier ${operation.label} Skeleton`,
    accepts: operation.accepts,
    produces: operation.produces,
    keywords: operation.tags
  };
}

function commonToolTags(domain, operation) {
  return unique([
    "frontier tool expansion",
    "new tool not in previous files",
    "functional mini app",
    "specific tool",
    "skeleton ready",
    "prompt searchable",
    "waterfall compatible",
    "toolbox compatible",
    "daily use",
    "wide project use",
    domain.field,
    domain.macro,
    ...domain.tags,
    operation.label,
    operation.id,
    ...(operation.tags || [])
  ]);
}

function commonSearchPhrases(domain, operation) {
  const d = domain.field.toLowerCase();
  const o = operation.label.toLowerCase();
  return unique([
    `${domain.field} ${operation.label}`,
    `${operation.label} for ${domain.field}`,
    `make a ${d} ${o}`,
    `build a ${d} ${o}`,
    `create a ${d} ${o}`,
    `${d} checklist plan report ${o}`,
    `${d} project waterfall ${o}`,
    `${d} toolbox task ${o}`,
    `${d} AI mini app ${o}`,
    `${d} reusable skeleton ${operation.id}`,
    `${domain.macro} ${o}`,
    `${operation.tags?.[0] || operation.id} for ${d}`
  ]);
}

function buildFrontierTool(domain, operation, domainIndex, operationIndex) {
  const accepts = unique(["prompt", "notes", ...(operation.accepts || [])]);
  const produces = unique(operation.produces || [operation.id]);
  return {
    id: `frontier-${slugify(domain.field)}-${slugify(operation.label)}`,
    name: `${domain.field} ${operation.label}`,
    category: `Frontier: ${domain.macro}`,
    engine: "mini_app",
    systemLabel: FRONTIER_TOOL_LABEL,
    toolKind: "frontier-specific-tool",
    frontierGenerated: true,
    description: `New frontier functional mini-app for ${domain.field.toLowerCase()}. It performs ${operation.label.toLowerCase()} work, declares clean input/output contracts, and generates its own skeleton so the same function can be reused in unrelated projects.`,
    tags: commonToolTags(domain, operation),
    searchPhrases: commonSearchPhrases(domain, operation),
    config: {
      domain: domain.field,
      macro: domain.macro,
      operationId: operation.id,
      operationName: operation.label,
      operationVerb: operation.verb,
      schema: operation.schema,
      accepts,
      produces,
      requiredTools: [`frontier-support-${operation.id}`],
      skeletonPattern: skeletonPatternForOperation(operation),
      downstreamUse: ["waterfall queue", "paid multitask", "toolbox sync", "project artifact history"],
      maxCells: 64,
      frontierDomainIndex: domainIndex,
      frontierOperationIndex: operationIndex
    },
    compatibility: {
      accepts,
      produces,
      output: produces[0] || "frontier-output",
      parallelSafe: !["approval-map", "decision-gate", "final-review", "acceptance-test"].includes(operation.id),
      requiresApproval: /approval|decision|final|legal|risk|evidence|exception/.test(operation.id),
      publishesToLibraries: ["frontier-output-library", "project-artifacts", "toolbox-sync"]
    }
  };
}

function buildSupportTool(operation, index) {
  const accepts = unique(["prompt", ...(operation.accepts || [])]);
  const produces = unique(["support-output", ...(operation.produces || [])]);
  return {
    id: `frontier-support-${operation.id}`,
    name: `Frontier Support: ${operation.label}`,
    category: "Frontier Support Tools",
    engine: "mini_app",
    systemLabel: FRONTIER_TOOL_LABEL,
    toolKind: "frontier-support-tool",
    frontierGenerated: true,
    description: `Dependency support tool for every frontier mini-app that uses ${operation.label.toLowerCase()}. It prepares shared inputs, terminology, and handoff context before the project-specific tool runs.`,
    tags: unique(["frontier support tool", "dependency tool", "support toolkit", "toolbox sync", "waterfall support", "frontier expansion", "new tool not in previous files", "skeleton ready", "prompt searchable", "project support", "shared context", "input normalizer", "handoff helper", "parallel safe", "daily use", "wide project use", "generic support", "mini app support", operation.label, operation.id, ...(operation.tags || [])]),
    searchPhrases: unique([`frontier support ${operation.label}`, `${operation.label} dependency`, `${operation.label} support toolkit`, `${operation.label} setup tool`, `${operation.label} shared context tool`, `${operation.label} prep tool`, `${operation.label} waterfall support`, `${operation.label} skeleton support`]),
    config: {
      domain: "Frontier Support",
      macro: "Frontier Support Tools",
      operationId: `support-${operation.id}`,
      operationName: `Support: ${operation.label}`,
      operationVerb: `support ${operation.verb}`,
      schema: "support",
      accepts,
      produces,
      requiredTools: [],
      skeletonPattern: skeletonPatternForOperation({ ...operation, id: `support-${operation.id}`, label: `Support ${operation.label}` }),
      downstreamUse: ["dependency", "waterfall queue", "toolbox sync"],
      maxCells: 64,
      frontierSupportIndex: index
    },
    compatibility: {
      accepts,
      produces,
      output: produces[0] || "support-output",
      parallelSafe: true,
      requiresApproval: false,
      publishesToLibraries: ["frontier-support-library", "project-artifacts"]
    }
  };
}

export const FRONTIER_TOOL_RECORDS = Object.freeze([
  ...FRONTIER_DOMAINS.flatMap((domain, domainIndex) =>
    FRONTIER_OPERATION_FAMILIES.map((operation, operationIndex) =>
      buildFrontierTool(domain, operation, domainIndex, operationIndex)
    )
  ),
  ...FRONTIER_OPERATION_FAMILIES.map((operation, index) => buildSupportTool(operation, index))
]);

export function searchFrontierTools(query = "", { limit = 32, macro = "all" } = {}) {
  const q = lower(query);
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  return FRONTIER_TOOL_RECORDS.map((tool) => {
    const haystack = lower(`${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.searchPhrases || []).join(" ")}`);
    let score = q ? 0 : 1;
    if (q && haystack.includes(q)) score += 20;
    for (const token of tokens) if (haystack.includes(token)) score += token.length > 5 ? 3 : 1;
    if (/skeleton|generic|wide|reusable|not in previous|new/.test(q)) score += 6;
    if (tool.toolKind === "frontier-support-tool") score += 1;
    return { tool, score };
  }).filter((item) => item.score > 0 && (macro === "all" || item.tool.config?.macro === macro))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function buildFrontierToolSummary() {
  const byMacro = new Map();
  const byOperation = new Map();
  for (const tool of FRONTIER_TOOL_RECORDS) {
    byMacro.set(tool.config?.macro || tool.category, (byMacro.get(tool.config?.macro || tool.category) || 0) + 1);
    byOperation.set(tool.config?.operationId || "unknown", (byOperation.get(tool.config?.operationId || "unknown") || 0) + 1);
  }
  return {
    version: FRONTIER_TOOL_EXPANSION_VERSION,
    toolCount: FRONTIER_TOOL_RECORDS.length,
    targetCount: FRONTIER_TOOL_TARGET_COUNT,
    domainCount: FRONTIER_DOMAINS.length,
    operationFamilyCount: FRONTIER_OPERATION_FAMILIES.length,
    supportToolCount: FRONTIER_OPERATION_FAMILIES.length,
    macroCount: byMacro.size,
    topMacros: [...byMacro.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([macro, count]) => ({ macro, count })),
    topOperations: [...byOperation.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([operation, count]) => ({ operation, count })),
    summary: `${FRONTIER_TOOL_RECORDS.length.toLocaleString()} new frontier tools created from ${FRONTIER_DOMAINS.length} domains and ${FRONTIER_OPERATION_FAMILIES.length} operation families, plus ${FRONTIER_OPERATION_FAMILIES.length} support tools.`
  };
}

export function verifyFrontierToolSuite({ knownEngines = ["mini_app"] } = {}) {
  const known = new Set(knownEngines);
  const errors = [];
  const ids = new Set();
  for (const tool of FRONTIER_TOOL_RECORDS) {
    if (!tool.id) errors.push("frontier tool missing id");
    if (ids.has(tool.id)) errors.push(`duplicate frontier tool id ${tool.id}`);
    ids.add(tool.id);
    if (!known.has(tool.engine)) errors.push(`${tool.id} uses unknown engine ${tool.engine}`);
    if (tool.systemLabel !== FRONTIER_TOOL_LABEL) errors.push(`${tool.id} missing frontier system label`);
    if (!tool.frontierGenerated) errors.push(`${tool.id} missing frontierGenerated flag`);
    if ((tool.tags || []).length < 18) errors.push(`${tool.id} needs at least 18 tags`);
    if ((tool.searchPhrases || []).length < 8) errors.push(`${tool.id} needs at least 8 search phrases`);
    if (!tool.config?.skeletonPattern?.id) errors.push(`${tool.id} missing skeleton pattern`);
    if (!tool.compatibility?.accepts?.length || !tool.compatibility?.produces?.length) errors.push(`${tool.id} missing compatibility contracts`);
  }
  if (FRONTIER_DOMAINS.length !== FRONTIER_DOMAIN_TARGET_COUNT) errors.push(`expected ${FRONTIER_DOMAIN_TARGET_COUNT} frontier domains, got ${FRONTIER_DOMAINS.length}`);
  if (FRONTIER_OPERATION_FAMILIES.length !== FRONTIER_OPERATION_TARGET_COUNT) errors.push(`expected ${FRONTIER_OPERATION_TARGET_COUNT} frontier operation families, got ${FRONTIER_OPERATION_FAMILIES.length}`);
  if (FRONTIER_TOOL_RECORDS.length !== FRONTIER_TOOL_TARGET_COUNT) errors.push(`expected ${FRONTIER_TOOL_TARGET_COUNT} frontier tools, got ${FRONTIER_TOOL_RECORDS.length}`);
  return { ok: errors.length === 0, errors, stats: buildFrontierToolSummary() };
}
