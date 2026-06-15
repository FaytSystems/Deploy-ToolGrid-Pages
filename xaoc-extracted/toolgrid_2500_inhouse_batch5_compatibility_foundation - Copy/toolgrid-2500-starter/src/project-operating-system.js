export const PROJECT_OPERATING_SYSTEM_VERSION = "2026-06-13-project-operating-system-v1";

export const PROJECT_OS_UPGRADE_REGISTRY = [
  { id: "tool-genome", label: "Tool Genome", summary: "Every tool declares what it accepts, produces, depends on, and whether it is safe to run in parallel." },
  { id: "dependency-graph", label: "Dependency Graph", summary: "Waterfalls become a graph of ready, waiting, blocked, approval, and parallel-safe tasks." },
  { id: "ask-only-needed", label: "Ask Only When Needed", summary: "The paid project finder asks clarifying questions only for ambiguous branches that affect the path." },
  { id: "repair-memory", label: "Task Repair Memory", summary: "Pause notes become repair events that improve the current task and future similar projects." },
  { id: "artifact-history", label: "Artifact History", summary: "Inputs, intermediate outputs, final exports, and user corrections stay attached to the project." },
  { id: "industry-packs", label: "Industry Project Packs", summary: "Reusable packs provide defaults for farms, restaurants, creators, local businesses, developers, and more." },
  { id: "human-approval", label: "Human Approval Checkpoints", summary: "Sensitive actions pause for review before emails, publishing, exports, paid APIs, or destructive changes." },
  { id: "workflow-recorder", label: "Workflow Recorder", summary: "Successful runs can be saved as reusable workflows with the exact tool graph and settings." },
  { id: "theme-personalization", label: "Theme + Sound Personalization", summary: "Profile interests drive session themes, completion effects, and randomized sound categories." },
  { id: "analytics-loop", label: "Analytics-Based Ranking", summary: "Searches, starts, completions, repairs, and drop-offs feed demand rankings over time." }
];

export const INDUSTRY_PROJECT_PACKS = [
  {
    id: "mushroom-farm-pack",
    name: "Mushroom Farm Pack",
    domains: ["mushroom", "farm", "agriculture", "grow room", "substrate"],
    defaultTools: ["soil_mix", "csv_tool", "markdown_table", "date_add", "invoice_total", "text_transform"],
    outputs: ["substrate recipe", "contamination log", "batch labels", "customer reply", "harvest forecast"],
    clarifyingQuestions: ["Are recipes measured by weight, volume, or bag count?", "Do labels need QR codes or only plain batch tags?", "Should forecasts account for contamination loss?"]
  },
  {
    id: "restaurant-ops-pack",
    name: "Restaurant Operations Pack",
    domains: ["restaurant", "kitchen", "chef", "inventory", "menu"],
    defaultTools: ["csv_tool", "invoice_total", "recipe_scale", "markdown_table", "date_diff", "text_transform"],
    outputs: ["order sheet", "prep list", "recipe scale", "vendor email", "inventory report"],
    clarifyingQuestions: ["Are counts by case, each, pound, or recipe unit?", "Should the output become an order sheet or a prep list?"]
  },
  {
    id: "youtube-creator-pack",
    name: "YouTube Creator Pack",
    domains: ["youtube", "creator", "video", "channel", "thumbnail"],
    defaultTools: ["text_stats", "slugify", "meta_length", "keyword_density", "markdown_table", "utm_builder"],
    outputs: ["title", "description", "chapters", "tags", "thumbnail notes", "social post"],
    clarifyingQuestions: ["Is the content educational, entertainment, product, or livestream?", "Should the tone be casual, expert, or high-energy?"]
  },
  {
    id: "local-seo-pack",
    name: "Local SEO Pack",
    domains: ["local seo", "google business", "website", "ranking", "service area"],
    defaultTools: ["keyword_density", "meta_length", "utm_builder", "markdown_table", "slugify", "text_stats"],
    outputs: ["keyword list", "page titles", "meta descriptions", "service pages", "campaign links"],
    clarifyingQuestions: ["What city or service area should the project target?", "Is the goal phone calls, form leads, map ranking, or store visits?"]
  },
  {
    id: "etsy-seller-pack",
    name: "Etsy Seller Pack",
    domains: ["etsy", "shop", "listing", "handmade", "ecommerce"],
    defaultTools: ["text_stats", "keyword_density", "slugify", "invoice_total", "markdown_table", "utm_builder"],
    outputs: ["listing title", "description", "tags", "pricing sheet", "customer reply"],
    clarifyingQuestions: ["Is this for a new listing, a listing refresh, or customer follow-up?", "Are prices cost-plus or competitor-based?"]
  },
  {
    id: "real-estate-pack",
    name: "Real Estate Agent Pack",
    domains: ["real estate", "listing", "buyer", "seller", "open house"],
    defaultTools: ["text_transform", "markdown_table", "date_add", "utm_builder", "meta_length", "invoice_total"],
    outputs: ["listing copy", "showing schedule", "open-house checklist", "client email", "flyer text"],
    clarifyingQuestions: ["Is this for a buyer, seller, rental, or open house?", "Should the tone be luxury, friendly, or urgent?"]
  },
  {
    id: "contractor-estimate-pack",
    name: "Contractor Estimate Pack",
    domains: ["contractor", "estimate", "job", "quote", "materials"],
    defaultTools: ["simple_formula", "invoice_total", "csv_tool", "markdown_table", "date_add", "text_transform"],
    outputs: ["material estimate", "labor summary", "client quote", "schedule", "invoice draft"],
    clarifyingQuestions: ["Is this labor-only, materials-only, or full job estimate?", "Should tax, markup, and travel be included?"]
  },
  {
    id: "developer-security-pack",
    name: "Developer Security Pack",
    domains: ["developer", "code", "security", "api", "json"],
    defaultTools: ["json_tool", "encoder", "uuid_generator", "password_generator", "markdown_table", "text_stats"],
    outputs: ["formatted JSON", "encoded value", "test IDs", "secrets checklist", "error report"],
    clarifyingQuestions: ["Is the input JSON, logs, URLs, tokens, or error messages?", "Should output be human-readable or machine-readable?"]
  },
  {
    id: "fitness-coach-pack",
    name: "Fitness Coach Pack",
    domains: ["fitness", "coach", "workout", "meal", "client"],
    defaultTools: ["percentage", "date_add", "markdown_table", "text_transform", "recipe_scale", "invoice_total"],
    outputs: ["program schedule", "progress table", "client message", "meal scale", "invoice"],
    clarifyingQuestions: ["Is this for strength, weight loss, mobility, or habit tracking?", "How many weeks should the plan cover?"]
  },
  {
    id: "tutoring-pack",
    name: "Tutoring Business Pack",
    domains: ["tutor", "education", "lesson", "student", "homework"],
    defaultTools: ["date_add", "markdown_table", "text_stats", "text_transform", "invoice_total", "uuid_generator"],
    outputs: ["lesson plan", "student progress notes", "parent email", "schedule", "invoice"],
    clarifyingQuestions: ["What subject and grade level is this for?", "Should the output be for the student, parent, or tutor notes?"]
  },
  {
    id: "home-grower-pack",
    name: "Home Grower Pack",
    domains: ["plant", "garden", "grow", "soil", "home grower"],
    defaultTools: ["soil_mix", "plant_spacing", "date_add", "markdown_table", "text_transform", "percentage"],
    outputs: ["soil recipe", "plant spacing", "watering calendar", "care notes", "repotting checklist"],
    clarifyingQuestions: ["Is the plant indoor, outdoor, container, raised bed, or hydroponic?", "Should care notes be beginner-friendly or expert-level?"]
  },
  {
    id: "small-law-office-pack",
    name: "Small Law Office Pack",
    domains: ["law", "legal", "client", "document", "case"],
    defaultTools: ["text_stats", "markdown_table", "date_diff", "date_add", "text_transform", "csv_tool"],
    outputs: ["document summary", "deadline list", "client letter draft", "case notes", "intake table"],
    clarifyingQuestions: ["Is this for intake, case notes, deadlines, or client communication?", "Should any output require human review before use?"]
  }
];

export const HUMAN_APPROVAL_RULES = [
  { id: "send-email", match: ["email", "customer", "reply", "autoresponder"], reason: "Messages to people should be reviewed before sending." },
  { id: "publish-content", match: ["publish", "post", "website", "social", "youtube", "seo"], reason: "Public content should be reviewed before publishing." },
  { id: "export-client-document", match: ["invoice", "quote", "contract", "report", "client", "label"], reason: "Client-facing documents should be reviewed before export or delivery." },
  { id: "destructive-data", match: ["delete", "replace", "overwrite", "clean", "dedupe"], reason: "Destructive or irreversible data changes should require approval." },
  { id: "paid-api", match: ["paid", "api", "credits", "billing", "subscribe"], reason: "Paid APIs or billable actions should require approval." }
];

const ENGINE_IO = {
  text_transform: { accepts: ["text", "document"], output: "text" },
  text_stats: { accepts: ["text", "document"], output: "report" },
  encoder: { accepts: ["text", "url", "data"], output: "encoded text" },
  json_tool: { accepts: ["json", "structured data", "text"], output: "json" },
  csv_tool: { accepts: ["csv", "spreadsheet", "table"], output: "table data" },
  unit_convert: { accepts: ["number", "measurement"], output: "converted measurement" },
  percentage: { accepts: ["number"], output: "percentage" },
  percent_change: { accepts: ["number"], output: "percentage change" },
  tip_calculator: { accepts: ["money", "number"], output: "payment summary" },
  loan_payment: { accepts: ["money", "number"], output: "payment schedule" },
  compound_interest: { accepts: ["money", "number"], output: "projection" },
  date_diff: { accepts: ["date"], output: "duration" },
  date_add: { accepts: ["date", "schedule"], output: "date" },
  unix_time: { accepts: ["timestamp", "date"], output: "date" },
  password_generator: { accepts: ["settings"], output: "password" },
  uuid_generator: { accepts: ["none", "settings"], output: "identifier" },
  color_convert: { accepts: ["color"], output: "color" },
  contrast_ratio: { accepts: ["color"], output: "accessibility report" },
  utm_builder: { accepts: ["url", "campaign"], output: "tracking url" },
  meta_length: { accepts: ["seo text", "title", "description"], output: "seo report" },
  keyword_density: { accepts: ["text", "keyword"], output: "seo report" },
  markdown_table: { accepts: ["csv", "text", "table"], output: "markdown table" },
  plant_spacing: { accepts: ["measurement", "garden bed"], output: "plant count" },
  soil_mix: { accepts: ["volume", "soil recipe"], output: "mix recipe" },
  recipe_scale: { accepts: ["recipe", "number"], output: "scaled recipe" },
  invoice_total: { accepts: ["money", "invoice"], output: "invoice total" },
  simple_formula: { accepts: ["number", "measurement"], output: "calculation" }
};

function normalize(value) {
  return String(value || "").toLowerCase();
}

function tokens(value) {
  return normalize(value).split(/[^a-z0-9]+/).filter(Boolean);
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function toolText(tool) {
  return `${tool?.name || ""} ${tool?.category || ""} ${tool?.description || ""} ${(tool?.tags || []).join(" ")} ${tool?.engine || ""}`;
}

export function deriveToolIO(tool) {
  const base = ENGINE_IO[tool?.engine] || { accepts: ["text", "manual input"], output: "tool output" };
  return {
    accepts: unique([...(base.accepts || []), ...(tool?.tags || []).slice(0, 3)]),
    output: base.output || "tool output"
  };
}

export function inferToolFileTypes(tool) {
  const text = toolText(tool);
  const types = [];
  if (/pdf|document|doc|text|markdown|copy|blog|email|letter/.test(text)) types.push("document", "text");
  if (/csv|spreadsheet|table|inventory|data/.test(text)) types.push("csv", "spreadsheet");
  if (/json|xml|yaml|developer|api|code|error/.test(text)) types.push("json", "code");
  if (/image|photo|color|contrast|thumbnail/.test(text)) types.push("image");
  if (/url|utm|seo|website|link/.test(text)) types.push("url", "web page");
  if (/invoice|loan|compound|money|price|cost|business/.test(text)) types.push("financial data");
  if (/garden|soil|plant|recipe|spacing|mushroom|substrate/.test(text)) types.push("recipe", "operations notes");
  return unique(types.length ? types : ["manual input", "text"]);
}

export function generateToolGenome(tool) {
  const io = deriveToolIO(tool);
  const text = toolText(tool);
  const fileTypes = inferToolFileTypes(tool);
  const requiresApproval = HUMAN_APPROVAL_RULES.some((rule) => rule.match.some((word) => text.includes(word)));
  const canRunAlone = io.accepts.some((input) => ["none", "settings", "number", "date", "text", "manual input", "measurement", "money", "volume"].includes(input));
  const producesFinalArtifact = /(report|invoice|label|email|url|table|recipe|projection|password|identifier|document|summary|schedule)/.test(`${io.output} ${text}`);
  const parallelUnsafe = /(delete|overwrite|send|publish|billing|payment|charge)/.test(text);
  const bestAfter = [];
  const bestBefore = [];
  if (/csv|table|json|data|spreadsheet/.test(text)) bestBefore.push("report-builder", "chart-builder", "label-generator", "exporter");
  if (/seo|keyword|meta|utm|slug/.test(text)) bestAfter.push("content-draft", "website-url", "keyword-list");
  if (/email|reply|customer/.test(text)) bestAfter.push("customer-data", "tone-selection");
  if (/label|tag|qr/.test(text)) bestAfter.push("clean-batch-data", "identifier-generator");
  if (/recipe|soil|plant|substrate/.test(text)) bestBefore.push("schedule-builder", "label-generator", "forecast-builder");
  if (/invoice|quote|payment/.test(text)) bestBefore.push("approval-checkpoint", "pdf-export", "client-email");

  return {
    toolId: tool.id,
    name: tool.name,
    category: tool.category,
    engine: tool.engine,
    accepts: io.accepts,
    produces: [io.output],
    fileTypes,
    canRunAlone,
    dependsOnPriorOutput: !canRunAlone,
    parallelSafe: !parallelUnsafe,
    requiresApproval,
    createsFinalArtifact: producesFinalArtifact,
    accessTier: requiresApproval ? "paid-review" : "free-compatible",
    bestAfter: unique(bestAfter),
    bestBefore: unique(bestBefore),
    capabilityTags: unique([tool.category, tool.engine, ...(tool.tags || []), ...fileTypes, io.output]).slice(0, 14),
    simpleExplanation: `${tool.name} takes ${io.accepts.slice(0, 3).join(", ")} and turns it into ${io.output}. Use it when you need ${normalize(tool.description).replace(/\.$/, "") || "a focused utility step"}.`
  };
}

export function buildToolGenomeIndex(tools) {
  const byId = {};
  const byCapability = {};
  let parallelSafeCount = 0;
  let approvalRequiredCount = 0;
  let finalArtifactCount = 0;
  for (const tool of tools) {
    const genome = generateToolGenome(tool);
    byId[tool.id] = genome;
    if (genome.parallelSafe) parallelSafeCount += 1;
    if (genome.requiresApproval) approvalRequiredCount += 1;
    if (genome.createsFinalArtifact) finalArtifactCount += 1;
    for (const tag of genome.capabilityTags) {
      const key = normalize(tag).replace(/\s+/g, "-");
      if (!byCapability[key]) byCapability[key] = [];
      if (byCapability[key].length < 40) byCapability[key].push(tool.id);
    }
  }
  return {
    version: PROJECT_OPERATING_SYSTEM_VERSION,
    toolCount: tools.length,
    byId,
    byCapability,
    parallelSafeCount,
    approvalRequiredCount,
    finalArtifactCount,
    indexedCapabilities: Object.keys(byCapability).length
  };
}

export function buildDependencyGraphFromQueue({ queue = [], plan = null, genomeIndex = null } = {}) {
  const planStepsById = new Map((plan?.steps || []).map((step) => [step.id, step]));
  const nodes = queue.map((task, index) => {
    const step = planStepsById.get(task.parentStepId || task.id) || {};
    const genome = genomeIndex?.byId?.[task.toolId || step.toolId] || null;
    const dependencies = [];
    if (index > 0 && genome?.dependsOnPriorOutput) dependencies.push(queue[index - 1].id);
    if (task.requires && Array.isArray(task.requires)) dependencies.push(...task.requires);
    const needsApproval = Boolean(task.requiresApproval || genome?.requiresApproval || /email|publish|invoice|client|delete|paid/i.test(`${task.toolName || ""} ${task.prompt || ""}`));
    return {
      id: task.id,
      toolId: task.toolId || step.toolId || "unknown",
      label: task.toolName || step.toolName || `Task ${index + 1}`,
      status: task.status || "queued",
      dependencies: unique(dependencies),
      needsApproval,
      parallelSafe: genome ? genome.parallelSafe && !needsApproval : !needsApproval,
      canRunNow: dependencies.length === 0 && !needsApproval,
      produces: genome?.produces || [step.outputType || "output"],
      consumes: genome?.accepts || step.accepts || ["project input"]
    };
  });
  const edges = nodes.flatMap((node) => node.dependencies.map((sourceId) => ({ sourceId, targetId: node.id, type: "requires-output" })));
  const ready = nodes.filter((node) => node.canRunNow && node.parallelSafe);
  const waiting = nodes.filter((node) => node.dependencies.length > 0);
  const approval = nodes.filter((node) => node.needsApproval);
  return {
    version: PROJECT_OPERATING_SYSTEM_VERSION,
    nodeCount: nodes.length,
    edgeCount: edges.length,
    nodes,
    edges,
    ready,
    waiting,
    approval,
    parallelGroups: ready.length ? [{ id: "parallel-ready-1", taskIds: ready.map((node) => node.id), reason: "These tasks can run from project input without waiting for upstream outputs." }] : []
  };
}

export function analyzePromptForMissingDetails({ prompt = "", fileAnalysis = null, industryPacks = INDUSTRY_PROJECT_PACKS } = {}) {
  const text = normalize(prompt);
  const questions = [];
  const matchedPacks = matchIndustryPacks(prompt, { limit: 3 });
  if (text.length < 35 || /my business|project|workflow|help me|make a/i.test(prompt) && !matchedPacks.length) {
    questions.push({ id: "domain-detail", label: "What field or business is this for?", reason: "The system needs the domain to choose the right tool pack." });
  }
  if (/(email|reply|customer|message)/.test(text) && !/(tone|formal|friendly|professional|casual|voice)/.test(text)) {
    questions.push({ id: "communication-tone", label: "What tone should communication use?", reason: "Email and customer-message tools need a tone before drafting." });
  }
  if (/(forecast|schedule|calendar|weekly|monthly|date)/.test(text) && !/(day|week|month|quarter|year|daily|weekly|monthly)/.test(text)) {
    questions.push({ id: "time-horizon", label: "What time period should the schedule or forecast cover?", reason: "Forecast tools need a time window." });
  }
  if (/(label|tag|qr|barcode)/.test(text) && !/(qr|barcode|print|sticker|plain)/.test(text)) {
    questions.push({ id: "label-format", label: "What format should labels use?", reason: "Label tools need to know whether to make simple tags, print sheets, QR labels, or barcodes." });
  }
  if (/(calculate|recipe|mix|substrate|soil|materials)/.test(text) && !/(weight|volume|pound|kg|bag|case|unit|ratio)/.test(text)) {
    questions.push({ id: "measurement-system", label: "What units should calculations use?", reason: "Calculation tools need units to avoid wrong quantities." });
  }
  if (fileAnalysis?.fileCount > 1 && !/(combine|separate|each file|all files|merge)/.test(text)) {
    questions.push({ id: "file-handling", label: "Should uploaded files be combined or processed separately?", reason: "Multiple files can create different workflow paths." });
  }
  const distinct = [];
  const seen = new Set();
  for (const question of questions) {
    if (!seen.has(question.id)) {
      seen.add(question.id);
      distinct.push(question);
    }
  }
  const isSpecificPrompt = String(prompt || "").length > 80 || matchedPacks.length > 0;
  const focused = isSpecificPrompt ? distinct.slice(0, 3) : distinct;
  return {
    isReady: focused.length === 0,
    questionCount: focused.length,
    questions: focused,
    matchedPacks,
    summary: focused.length ? `Ask ${focused.length} focused question${focused.length === 1 ? "" : "s"} before locking the project path.` : "Prompt has enough detail to build a project graph."
  };
}

export function createRepairEvent({ task = {}, userObservation = "", projectId = "active-project" } = {}) {
  const observation = String(userObservation || "").trim();
  const lower = normalize(observation);
  const suggestedActions = [];
  if (/wrong tool|bad tool|different tool|tool/.test(lower)) suggestedActions.push("reselect-tool");
  if (/missing|didnt|didn't|not enough|incomplete|forgot/.test(lower)) suggestedActions.push("expand-task-prompt");
  if (/tone|voice|too casual|too formal/.test(lower)) suggestedActions.push("update-style-preference");
  if (/data|file|csv|spreadsheet|columns/.test(lower)) suggestedActions.push("re-read-artifact-or-file");
  if (!suggestedActions.length) suggestedActions.push("ask-repair-follow-up");
  return {
    id: `repair-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    projectId,
    taskId: task.id || "unknown-task",
    toolName: task.toolName || task.label || "Unknown tool",
    observation,
    suggestedActions,
    memoryTags: unique([task.toolName, task.status, ...tokens(observation).slice(0, 8)]),
    repairedPrompt: `${task.prompt || task.label || "Run task"}\n\nUser repair note: ${observation}\nAdjust the selected tools, task instructions, and downstream outputs before continuing.`,
    createdAt: new Date().toISOString()
  };
}

export function createArtifactHistory(project = {}) {
  const artifacts = Array.isArray(project.artifacts) ? project.artifacts : [];
  const byStatus = artifacts.reduce((acc, artifact) => {
    const status = artifact.status || "unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
  return {
    projectId: project.id || "unknown-project",
    totalArtifacts: artifacts.length,
    byStatus,
    latestArtifacts: artifacts.slice(-8).map((artifact) => ({
      id: artifact.id,
      toolName: artifact.toolName,
      outputType: artifact.outputType,
      status: artifact.status,
      preview: String(artifact.output || "").slice(0, 160)
    })),
    hasReusableOutputs: artifacts.some((artifact) => artifact.status === "ok")
  };
}

export function matchIndustryPacks(prompt = "", { limit = 5 } = {}) {
  const text = normalize(prompt);
  return INDUSTRY_PROJECT_PACKS
    .map((pack) => {
      let score = 0;
      for (const domain of pack.domains) if (text.includes(domain)) score += 10;
      for (const output of pack.outputs) for (const token of tokens(output)) if (text.includes(token)) score += 1;
      return { ...pack, score };
    })
    .filter((pack) => pack.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, limit);
}

export function createApprovalCheckpoints({ queue = [], prompt = "" } = {}) {
  const combinedPrompt = normalize(prompt);
  return queue.flatMap((task, index) => {
    const text = normalize(`${task.toolName || ""} ${task.prompt || ""} ${combinedPrompt}`);
    return HUMAN_APPROVAL_RULES
      .filter((rule) => rule.match.some((word) => text.includes(word)))
      .map((rule) => ({
        id: `approval-${task.id || index}-${rule.id}`,
        taskId: task.id || `task-${index + 1}`,
        sequence: index + 1,
        ruleId: rule.id,
        label: `Review ${task.toolName || `task ${index + 1}`}`,
        reason: rule.reason,
        status: "needs-review"
      }));
  });
}

export function recordWorkflowSnapshot({ project = {}, panelEntries = [], graph = null, profile = null } = {}) {
  const panels = panelEntries.filter(Boolean);
  return {
    id: `workflow-${Date.now().toString(36)}`,
    projectId: project.id || "unknown-project",
    name: `${project.name || "Untitled project"} reusable workflow`,
    prompt: project.prompt || "",
    panelCount: panels.length,
    toolIds: panels.map((entry) => entry.toolId).filter(Boolean),
    nestedToolCount: panels.reduce((sum, entry) => sum + (entry.nestedToolIds?.length || 0), 0),
    graphNodeCount: graph?.nodeCount || project.waterfallQueue?.length || 0,
    artifactCount: project.artifacts?.length || 0,
    profileTopics: profile?.topics || [],
    savedAt: new Date().toISOString(),
    rerunHint: "This snapshot can be loaded later to recreate the same prompt, tools, layout, waterfall rules, and user preferences."
  };
}

export function createAnalyticsEvent({ type, project = {}, toolId = "", metadata = {} } = {}) {
  return {
    id: `analytics-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    type: type || "unknown",
    projectId: project.id || "unknown-project",
    toolId,
    metadata,
    createdAt: new Date().toISOString()
  };
}

export function updateAnalyticsDemandModel({ events = [], previous = null } = {}) {
  const model = previous || {
    version: PROJECT_OPERATING_SYSTEM_VERSION,
    eventCount: 0,
    searches: 0,
    projectStarts: 0,
    completions: 0,
    repairs: 0,
    approvals: 0,
    dropoffs: 0,
    toolCounts: {},
    projectCounts: {}
  };
  for (const event of events) {
    model.eventCount += 1;
    if (event.type === "search") model.searches += 1;
    if (event.type === "project-start") model.projectStarts += 1;
    if (event.type === "project-complete") model.completions += 1;
    if (event.type === "repair") model.repairs += 1;
    if (event.type === "approval") model.approvals += 1;
    if (event.type === "dropoff") model.dropoffs += 1;
    if (event.toolId) model.toolCounts[event.toolId] = (model.toolCounts[event.toolId] || 0) + 1;
    if (event.projectId) model.projectCounts[event.projectId] = (model.projectCounts[event.projectId] || 0) + 1;
  }
  model.completionRate = model.projectStarts ? Number((model.completions / model.projectStarts).toFixed(4)) : 0;
  model.repairRate = model.projectStarts ? Number((model.repairs / model.projectStarts).toFixed(4)) : 0;
  model.topTools = Object.entries(model.toolCounts).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([toolId, count], index) => ({ rank: index + 1, toolId, count }));
  return model;
}

export function createProjectOperatingSystemSnapshot({ tools = [], project = {}, queue = [], plan = null, panelEntries = [], prompt = "", fileAnalysis = null, profile = null } = {}) {
  const genomeIndex = buildToolGenomeIndex(tools);
  const graph = buildDependencyGraphFromQueue({ queue, plan, genomeIndex });
  const missingDetails = analyzePromptForMissingDetails({ prompt: prompt || project.prompt || "", fileAnalysis });
  const approvalCheckpoints = createApprovalCheckpoints({ queue, prompt: prompt || project.prompt || "" });
  const artifactHistory = createArtifactHistory(project);
  const industryPacks = matchIndustryPacks(prompt || project.prompt || "", { limit: 4 });
  const workflowSnapshot = recordWorkflowSnapshot({ project, panelEntries, graph, profile });
  return {
    version: PROJECT_OPERATING_SYSTEM_VERSION,
    upgrades: PROJECT_OS_UPGRADE_REGISTRY,
    genomeStats: {
      toolCount: genomeIndex.toolCount,
      indexedCapabilities: genomeIndex.indexedCapabilities,
      parallelSafeCount: genomeIndex.parallelSafeCount,
      approvalRequiredCount: genomeIndex.approvalRequiredCount,
      finalArtifactCount: genomeIndex.finalArtifactCount
    },
    graphStats: {
      nodeCount: graph.nodeCount,
      edgeCount: graph.edgeCount,
      readyCount: graph.ready.length,
      waitingCount: graph.waiting.length,
      approvalCount: graph.approval.length,
      parallelGroupCount: graph.parallelGroups.length
    },
    missingDetails,
    approvalCheckpoints,
    artifactHistory,
    industryPacks,
    workflowSnapshot
  };
}
