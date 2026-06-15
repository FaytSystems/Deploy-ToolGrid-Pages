import { getDefaultInputs, getToolSchema, runTool } from "./tool-engines.js";
import {
  chooseToolsForCompiledPrompt,
  compilePromptToSearchPlan,
  scoreToolAgainstCompiledPrompt
} from "./prompt-compiler.js";

export const PROJECT_FOUNDATION_VERSION = "2026-06-13-paid-multitask-waterfall-foundation-v7";

export const DEFAULT_CONTAINER_NAME = "ToolGrid AI Project Container";

export const WORKSPACE_MODES = {
  AI: "ai",
  MANUAL: "manual"
};

const textLikeOutputs = new Set([
  "text_stats",
  "text_transform",
  "list_transform",
  "encoder",
  "keyword_density",
  "meta_length",
  "random_number",
  "password_generator",
  "uuid_generator",
  "invoice_total",
  "tip_calculator",
  "loan_payment",
  "compound_interest",
  "plant_spacing",
  "soil_mix",
  "recipe_scale",
  "simple_formula",
  "date_diff",
  "date_add",
  "unix_time"
]);

const numericEngines = new Set([
  "unit_convert",
  "percentage",
  "percent_change",
  "tip_calculator",
  "loan_payment",
  "compound_interest",
  "plant_spacing",
  "soil_mix",
  "recipe_scale",
  "invoice_total",
  "simple_formula"
]);

const engineIo = {
  json_tool: { accepts: ["json", "text"], output: "json" },
  csv_tool: { accepts: ["csv", "json", "text"], output: "data" },
  markdown_table: { accepts: ["csv", "json", "text"], output: "markdown" },
  color_convert: { accepts: ["color", "rgb", "text"], output: "color" },
  contrast_ratio: { accepts: ["color", "text"], output: "text" },
  utm_builder: { accepts: ["url", "text"], output: "url" },
  unit_convert: { accepts: ["number", "text"], output: "number" },
  percentage: { accepts: ["number", "text"], output: "number" },
  percent_change: { accepts: ["number", "text"], output: "number" },
  webcam_explorer: { accepts: ["text", "webcam-search", "location", "category"], output: "webcam-grid" },
  factchecker: { accepts: ["text", "quote", "phrase", "person", "date-range", "site-list", "social-url"], output: "source-clipping-grid" },
  theme_studio: { accepts: ["color", "profile", "theme-settings", "text"], output: "theme-profile" },
  rgb_generator: { accepts: ["color", "effect", "region", "text"], output: "rgb-effect-plan" },
  space_studio: { accepts: ["image", "model-file", "room-photo", "dimensions", "cad", "text"], output: "3d-scene" },
  daily_dealings_program: { accepts: ["text", "rows", "files", "dates", "budget", "constraints"], output: "daily-program-output" },
  skeleton_tool: { accepts: ["text", "project-input", "file-summary", "prompt"], output: "project-output" }
};

const intentProfiles = [
  {
    id: "content-seo",
    label: "Content + SEO project",
    keywords: ["seo", "blog", "article", "title", "description", "keyword", "marketing", "post", "youtube", "content", "copy", "landing"],
    categories: ["SEO & Marketing", "Text", "Generators"],
    engines: ["meta_length", "keyword_density", "text_transform", "list_transform", "markdown_table", "utm_builder"],
    starterPayload: "Draft a useful page or post, then optimize title length, meta description, keywords, slug, and campaign URL."
  },
  {
    id: "data-cleanup",
    label: "Data cleanup project",
    keywords: ["csv", "json", "data", "table", "clean", "format", "convert", "dedupe", "spreadsheet", "rows", "dataset"],
    categories: ["Data", "Developer", "Converters", "Text"],
    engines: ["csv_tool", "json_tool", "markdown_table", "text_transform", "list_transform"],
    starterPayload: "name,email\nToolGrid,user@example.com\nProject,builder@example.com"
  },
  {
    id: "developer",
    label: "Developer utility project",
    keywords: ["developer", "code", "encode", "decode", "base64", "url", "uuid", "password", "json", "html", "api", "debug"],
    categories: ["Developer", "Generators", "Data", "Converters"],
    engines: ["json_tool", "encoder", "uuid_generator", "password_generator", "text_transform"],
    starterPayload: "{\"project\":\"ToolGrid\",\"mode\":\"AI project generator\"}"
  },
  {
    id: "image-color",
    label: "Design + color project",
    keywords: ["image", "color", "palette", "contrast", "hex", "rgb", "design", "brand", "accessibility", "ui", "theme", "profile", "strobe", "glow"],
    categories: ["Color", "Converters", "Text", "Paid Profile Tools", "Skeleton Tools"],
    engines: ["color_convert", "contrast_ratio", "text_transform", "theme_studio", "rgb_generator", "skeleton_tool"],
    starterPayload: "#22c55e"
  },
  {
    id: "numbers-finance",
    label: "Calculator + finance project",
    keywords: ["calculate", "calculator", "percent", "percentage", "loan", "compound", "interest", "invoice", "tip", "tax", "business", "money", "price"],
    categories: ["Calculators", "Business", "Converters"],
    engines: ["percentage", "percent_change", "loan_payment", "compound_interest", "invoice_total", "tip_calculator", "unit_convert"],
    starterPayload: "100"
  },
  {
    id: "garden-home",
    label: "Gardening project",
    keywords: ["plant", "garden", "soil", "spacing", "pot", "seed", "compost", "grow", "houseplant", "bonsai"],
    categories: ["Gardening", "Calculators", "Text"],
    engines: ["plant_spacing", "soil_mix", "text_transform", "list_transform"],
    starterPayload: "Calculate plant spacing and soil mix, then summarize the grow plan."
  },
  {
    id: "cooking",
    label: "Cooking project",
    keywords: ["recipe", "cook", "kitchen", "serving", "scale", "ingredient", "menu", "food"],
    categories: ["Cooking", "Calculators", "Text"],
    engines: ["recipe_scale", "text_transform", "list_transform"],
    starterPayload: "Scale a recipe from 4 servings to 8 servings."
  },
  {
    id: "webcam-visual-monitoring",
    label: "PG live webcam viewer project",
    keywords: ["webcam", "live cam", "camera", "nature", "wildlife", "beach", "city", "skyline", "forest", "desert", "rainforest", "scenic", "stream"],
    categories: ["In-House Webcam", "In-House Media", "Media"],
    engines: ["webcam_explorer", "text_transform", "markdown_table"],
    starterPayload: "Find PG nature, city, beach, and scenic live webcams, then show the selected safe cam outputs in the workspace."
  },
  {
    id: "time-planning",
    label: "Time planning project",
    keywords: ["date", "time", "schedule", "deadline", "duration", "unix", "timestamp", "calendar"],
    categories: ["Date & Time", "Calculators", "Text"],
    engines: ["date_diff", "date_add", "unix_time", "text_transform"],
    starterPayload: "2026-06-13"
  }
];

const safeText = (value) => String(value ?? "");

const csvCell = (value) => {
  const text = safeText(value);
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

const looksLikeBase64 = (value) => {
  const text = safeText(value).trim();
  return text.length > 0 && text.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(text);
};

const adaptPayloadForTextField = (tool, text, payloadType) => {
  const mode = tool?.config?.mode || "";
  if (tool?.engine === "json_tool" && payloadType !== "json") {
    return JSON.stringify({ value: text });
  }
  if (tool?.engine === "csv_tool") {
    if (mode === "json_to_csv" && payloadType !== "json") return JSON.stringify([{ value: text }]);
    if (mode === "csv_to_json" && payloadType !== "csv") return `value\n${csvCell(text)}`;
  }
  if (tool?.engine === "encoder") {
    if (mode === "base64_decode" && !looksLikeBase64(text)) return undefined;
    if (mode === "url_decode" && !/%[0-9a-f]{2}/i.test(text)) return undefined;
    if (mode === "html_unescape" && !/&(?:lt|gt|amp|quot|#039);/i.test(text)) return undefined;
  }
  return text;
};

function tokenize(value) {
  return safeText(value).toLowerCase().split(/[^a-z0-9#]+/).filter(Boolean);
}

function uniqueById(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    if (!item || seen.has(item.id)) continue;
    seen.add(item.id);
    out.push(item);
  }
  return out;
}

export function createId(prefix = "id") {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createProject(name = "New Project") {
  return {
    id: createId("project"),
    name,
    mode: WORKSPACE_MODES.MANUAL,
    prompt: "",
    input: "Free tools save time when they can share project data.",
    plan: null,
    compiler: null,
    artifacts: [],
    events: [],
    workflows: [],
    waterfallQueue: []
  };
}

export function createFoundationState() {
  const project = createProject("Default Project");
  project.id = "project-default";
  return {
    containerName: DEFAULT_CONTAINER_NAME,
    activeProjectId: project.id,
    mode: WORKSPACE_MODES.MANUAL,
    autoWaterfall: true,
    projects: [project]
  };
}

export function getToolIO(tool) {
  const config = tool.config || {};
  if (tool.engine === "skeleton_tool") {
    return { accepts: config.accepts || ["text", "project-input"], output: (config.produces || ["project-output"])[0], summary: `Skeleton: ${config.patternLabel || "Generic project tool"}` };
  }
  if (tool.engine === "csv_tool") {
    return {
      accepts: ["csv", "json", "text"],
      output: config.mode === "csv_to_json" ? "json" : "csv",
      summary: config.mode === "csv_to_json" ? "CSV → JSON" : "JSON → CSV"
    };
  }
  if (tool.engine === "json_tool") {
    return { accepts: ["json", "text"], output: config.mode === "keys" ? "text" : "json", summary: "JSON tool" };
  }
  if (tool.engine === "encoder" && String(config.mode || "").includes("url")) {
    return { accepts: ["url", "text"], output: config.mode === "url_encode" ? "url" : "text", summary: "URL/text encoder" };
  }
  if (engineIo[tool.engine]) return { ...engineIo[tool.engine], summary: `${tool.engine.replaceAll("_", " ")} engine` };
  if (numericEngines.has(tool.engine)) return { accepts: ["number", "text"], output: "number", summary: "Numeric/text utility" };
  if (textLikeOutputs.has(tool.engine)) return { accepts: ["text"], output: "text", summary: "Text utility" };
  return { accepts: ["text"], output: "text", summary: "General utility" };
}

export function canConnectTools(sourceTool, targetTool) {
  if (!sourceTool || !targetTool) return false;
  const source = getToolIO(sourceTool);
  const target = getToolIO(targetTool);
  return target.accepts.includes(source.output) || (source.output !== "binary" && target.accepts.includes("text"));
}

export function describeConnection(sourceTool, targetTool) {
  const source = getToolIO(sourceTool);
  const target = getToolIO(targetTool);
  const compatible = canConnectTools(sourceTool, targetTool);
  return {
    compatible,
    sourceType: source.output,
    targetTypes: target.accepts,
    label: compatible ? `${source.output} → ${target.accepts.join("/")}` : `${source.output} blocked by ${target.accepts.join("/")}`
  };
}

export function getPanelToolIds(entry) {
  if (!entry) return [];
  const nested = Array.isArray(entry.nestedToolIds) ? entry.nestedToolIds : [];
  return [entry.toolId, ...nested].filter(Boolean);
}

export function getPanelToolChain(entry, toolsById) {
  return getPanelToolIds(entry)
    .map((toolId, order) => ({ toolId, order, tool: toolsById.get(toolId) }))
    .filter((item) => item.tool);
}

export function createPlanFromProjectTemplate(template, toolsById = new Map()) {
  const steps = (template?.panels || []).map((panel, panelOrder) => {
    const first = panel.tools?.[0];
    const primaryTool = first ? toolsById.get(first.toolId) : null;
    const last = panel.tools?.[panel.tools.length - 1];
    const lastTool = last ? toolsById.get(last.toolId) : primaryTool;
    return {
      id: createId("template-step"),
      templateId: template.id,
      panelIndex: panel.panelIndex ?? panelOrder,
      toolId: first?.toolId,
      toolName: primaryTool?.name || first?.toolId || "Template tool",
      nestedToolIds: (panel.tools || []).slice(1).map((tool) => tool.toolId),
      nestedToolRoles: panel.tools || [],
      uiTitle: panel.uiTitle || `Project UI ${panelOrder + 1}`,
      status: "planned",
      mode: panel.mode || (panelOrder === 0 ? "input" : "waterfall"),
      reason: panelOrder === 0
        ? `Starts from the project payload for ${template.title}.`
        : `Receives project-bus output from the previous compatible UI node.`,
      accepts: primaryTool ? getToolIO(primaryTool).accepts : ["text"],
      outputType: lastTool ? getToolIO(lastTool).output : "text",
      nestedCount: Math.max(0, (panel.tools || []).length - 1)
    };
  }).filter((step) => step.toolId);

  return {
    id: createId("template-plan"),
    templateId: template.id,
    prompt: template.prompt,
    intentId: template.businessFunction,
    intentLabel: template.title,
    recommendedLayout: template.layout || recommendLayoutForPanels(steps.length),
    starterPayload: template.inputHint || template.prompt,
    status: "planned",
    complexity: template.complexity,
    executionMode: template.executionMode,
    toolCount: template.toolCount,
    createdAt: new Date().toISOString(),
    steps
  };
}

export function inferPayloadType(payload) {
  const text = safeText(payload).trim();
  if (!text) return "text";
  if (/^#[0-9a-f]{3,8}$/i.test(text) || /^rgb\(/i.test(text)) return "color";
  if (/^https?:\/\//i.test(text)) return "url";
  if (/^-?\d+(\.\d+)?$/.test(text)) return "number";
  try {
    JSON.parse(text);
    return "json";
  } catch {
    // fall through
  }
  if (text.includes(",") && text.includes("\n")) return "csv";
  return "text";
}

export function buildInputsFromPayload(tool, payload, payloadType = inferPayloadType(payload)) {
  const inputs = { ...getDefaultInputs(tool) };
  const schema = getToolSchema(tool);
  const text = safeText(payload);
  const firstNumber = Number((text.match(/-?\d+(\.\d+)?/) || [])[0]);
  const hasNumber = Number.isFinite(firstNumber);

  for (const field of schema) {
    if (field.name === "text") {
      const adaptedText = adaptPayloadForTextField(tool, text, payloadType);
      if (adaptedText !== undefined) inputs.text = adaptedText;
    }
    if (field.name === "url" && (payloadType === "url" || /^https?:\/\//i.test(text))) inputs.url = text;
    if (field.name === "hex" && payloadType === "color") inputs.hex = text;
    if (field.name === "foreground" && payloadType === "color") inputs.foreground = text;
    if (field.name === "background" && payloadType === "color") inputs.background = inputs.background || "#000000";
    if (field.name === "value" && hasNumber) inputs.value = firstNumber;
    if (field.name === "total" && hasNumber) inputs.total = inputs.total || 100;
    if (field.name === "start" && hasNumber) inputs.start = firstNumber;
    if (field.name === "end" && hasNumber) inputs.end = firstNumber;
    if (field.name === "a" && hasNumber) inputs.a = firstNumber;
    if (field.name === "subtotal" && hasNumber) inputs.subtotal = firstNumber;
    if (field.name === "principal" && hasNumber) inputs.principal = firstNumber;
    if (field.name === "bill" && hasNumber) inputs.bill = firstNumber;
    if (field.name === "bedLength" && hasNumber) inputs.bedLength = firstNumber;
    if (field.name === "totalVolume" && hasNumber) inputs.totalVolume = firstNumber;
    if (field.name === "amount" && hasNumber) inputs.amount = firstNumber;
    if (field.name === "startDate" && /^\d{4}-\d{2}-\d{2}/.test(text)) inputs.startDate = text.slice(0, 10);
  }

  return inputs;
}

export function makeArtifact({ projectId, panelIndex = null, tool, inputs, output, status = "ok", runMode = "manual", stepId = null }) {
  return {
    id: createId("artifact"),
    projectId,
    panelIndex,
    stepId,
    toolId: tool.id,
    toolName: tool.name,
    engine: tool.engine,
    inputType: inferPayloadType(JSON.stringify(inputs || {})),
    outputType: getToolIO(tool).output,
    output: safeText(output),
    status,
    runMode,
    createdAt: new Date().toISOString()
  };
}

export function appendProjectEvent(project, message, level = "info") {
  project.events.unshift({
    id: createId("event"),
    level,
    message,
    createdAt: new Date().toISOString()
  });
  project.events = project.events.slice(0, 120);
  return project.events[0];
}

export function appendArtifact(project, artifact) {
  project.artifacts.unshift(artifact);
  project.artifacts = project.artifacts.slice(0, 180);
  appendProjectEvent(project, `${artifact.toolName} published ${artifact.outputType} output.`, artifact.status === "ok" ? "success" : "error");
  return artifact;
}

export function listCompatibleLinks(panelEntries, toolsById) {
  const loaded = panelEntries
    .map((entry, index) => ({ entry, index, tool: entry ? toolsById.get(entry.toolId) : null }))
    .filter((item) => item.entry && item.tool);
  const links = [];
  for (const source of loaded) {
    for (const target of loaded) {
      if (source.index === target.index) continue;
      const connection = describeConnection(source.tool, target.tool);
      if (connection.compatible) links.push({ source, target, connection });
    }
  }
  return links;
}

export function inferProjectIntent(prompt) {
  const text = safeText(prompt).toLowerCase();
  const scores = intentProfiles.map((profile) => {
    let score = 0;
    for (const keyword of profile.keywords) {
      if (text.includes(keyword)) score += keyword.length > 4 ? 4 : 2;
    }
    return { profile, score };
  }).sort((a, b) => b.score - a.score);
  return scores[0]?.score > 0 ? scores[0].profile : intentProfiles[0];
}

export function scoreToolForPrompt(tool, prompt, profile = inferProjectIntent(prompt), compiled = null) {
  const promptTokens = tokenize(prompt);
  const haystack = `${safeText(tool.name)} ${safeText(tool.category)} ${safeText(tool.description)} ${(tool.tags || []).join(" ")} ${safeText(tool.engine)} ${JSON.stringify(tool.config || {})}`.toLowerCase();
  let score = 0;
  if (profile.categories.includes(tool.category)) score += 24;
  if (profile.engines.includes(tool.engine)) score += 22;
  if (compiled) score += scoreToolAgainstCompiledPrompt(tool, compiled);
  for (const tag of tool.tags || []) {
    if (profile.keywords.includes(String(tag).toLowerCase())) score += 8;
  }
  for (const token of promptTokens) {
    if (token.length < 3) continue;
    if (safeText(tool.name).toLowerCase().includes(token)) score += 12;
    else if (haystack.includes(token)) score += 4;
  }
  if (getToolIO(tool).accepts.includes("text")) score += 2;
  return score;
}

export function recommendLayoutForPanels(count) {
  if (count <= 1) return "1x1";
  if (count <= 2) return "2x1";
  if (count <= 4) return "2x2";
  if (count <= 6) return "3x2";
  if (count <= 8) return "4x2";
  if (count <= 12) return "4x3";
  return "4x4";
}

export function generateAiProjectPlan({ prompt, tools, maxPanels = 16 }) {
  const cleanPrompt = safeText(prompt).trim() || "Build a useful multi-step project with compatible tools.";
  const compiled = compilePromptToSearchPlan(cleanPrompt);
  const profile = inferProjectIntent(cleanPrompt);
  const toolLimit = Math.min(Math.max(1, maxPanels), Math.max(1, compiled.recommendedUiNodes));
  const selected = chooseToolsForCompiledPrompt({ prompt: cleanPrompt, tools, limit: toolLimit });
  const chosen = selected.tools.map((item) => item.tool);

  if (!chosen.length) {
    const scored = tools
      .map((tool) => ({ tool, score: scoreToolForPrompt(tool, cleanPrompt, profile, compiled) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
      .map((item) => item.tool);
    chosen.push(...scored.slice(0, toolLimit));
  }

  const finalTools = uniqueById(chosen).slice(0, Math.max(1, toolLimit));
  const steps = finalTools.map((tool, index) => {
    const previous = index > 0 ? finalTools[index - 1] : null;
    const connection = previous ? describeConnection(previous, tool) : null;
    const matched = selected.tools.find((item) => item.tool.id === tool.id);
    const taskPart = matched?.taskPart || compiled.taskParts[index % Math.max(1, compiled.taskParts.length)];
    return {
      id: createId("step"),
      panelIndex: index,
      toolId: tool.id,
      toolName: tool.name,
      status: "planned",
      mode: index === 0 ? "input" : "waterfall",
      reason: index === 0
        ? `Starts from task: ${taskPart?.capabilityLabel || profile.label}.`
        : connection?.compatible
          ? `Receives ${connection.sourceType} output from ${previous.name}; supports ${taskPart?.capabilityLabel || "the next task"}.`
          : `Uses text-compatible project output for ${taskPart?.capabilityLabel || "the next task"}.`,
      accepts: getToolIO(tool).accepts,
      outputType: getToolIO(tool).output,
      taskPartId: taskPart?.id || null,
      taskAction: taskPart?.action || null,
      taskObject: taskPart?.object || null,
      generalizedTerms: taskPart?.generalizedTerms || [],
      capabilityTags: taskPart?.capabilityTags || [],
      searchQueries: taskPart?.searchQueries || []
    };
  });

  return {
    id: createId("plan"),
    prompt: cleanPrompt,
    intentId: profile.id,
    intentLabel: compiled.primaryDomain || profile.label,
    recommendedLayout: recommendLayoutForPanels(finalTools.length),
    starterPayload: profile.starterPayload,
    status: "planned",
    compiler: compiled,
    projectTitle: `${compiled.primaryDomain} Project`,
    workflowMode: compiled.workflowMode,
    createdAt: new Date().toISOString(),
    steps
  };
}

export function createPanelEntriesFromPlan(plan, projectId) {
  return (plan?.steps || []).map((step) => ({
    toolId: step.toolId,
    nestedToolIds: Array.isArray(step.nestedToolIds) ? step.nestedToolIds : [],
    nestedToolRoles: Array.isArray(step.nestedToolRoles) ? step.nestedToolRoles : [],
    projectId,
    openedAt: Date.now(),
    role: step.templateId ? "Template-linked project UI node" : "AI-planned tool node",
    uiTitle: step.uiTitle || null,
    aiStepId: step.id,
    aiStepStatus: step.status || "planned"
  }));
}

export function updatePlanStepStatus(project, stepId, status, extra = {}) {
  if (!project?.plan?.steps) return null;
  const step = project.plan.steps.find((candidate) => candidate.id === stepId);
  if (!step) return null;
  Object.assign(step, extra, { status, updatedAt: new Date().toISOString() });
  return step;
}

export function runProjectPanelsSimultaneously({ project, panelEntries, toolsById }) {
  const projectPayload = project.input || "";
  const artifacts = [];

  panelEntries.forEach((entry, panelIndex) => {
    if (!entry || entry.projectId !== project.id) return;
    let payload = projectPayload;
    let payloadType = inferPayloadType(payload);
    let previousTool = null;
    for (const chainItem of getPanelToolChain(entry, toolsById)) {
      const tool = chainItem.tool;
      if (previousTool && !canConnectTools(previousTool, tool)) {
        artifacts.push(makeArtifact({
          projectId: project.id,
          panelIndex,
          tool,
          inputs: {},
          output: `Skipped: ${previousTool.name} output is not compatible with nested tool ${tool.name}.`,
          status: "error",
          runMode: "simultaneous-nested",
          stepId: entry.aiStepId || null
        }));
        continue;
      }
      try {
        const inputs = buildInputsFromPayload(tool, payload, payloadType);
        const output = runTool(tool, inputs);
        const artifact = makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, runMode: chainItem.order === 0 ? "simultaneous" : "simultaneous-nested", stepId: entry.aiStepId || null });
        artifacts.push(artifact);
        payload = output;
        payloadType = artifact.outputType;
        previousTool = tool;
      } catch (error) {
        artifacts.push(makeArtifact({
          projectId: project.id,
          panelIndex,
          tool,
          inputs: {},
          output: error instanceof Error ? error.message : String(error),
          status: "error",
          runMode: chainItem.order === 0 ? "simultaneous" : "simultaneous-nested",
          stepId: entry.aiStepId || null
        }));
      }
    }
  });

  return artifacts;
}


export function runProjectPanelsAsQueue({ project, panelEntries, toolsById }) {
  return runProjectPanelsAsQueueFrom({
    project,
    panelEntries,
    toolsById,
    startPanelIndex: 0,
    initialPayload: project.input || "",
    runMode: "queued"
  });
}

export function runProjectPanelsAsQueueFrom({ project, panelEntries, toolsById, startPanelIndex = 0, initialPayload = "", runMode = "manual-waterfall" }) {
  let payload = initialPayload;
  let payloadType = inferPayloadType(payload);
  let previousTool = null;
  const artifacts = [];

  panelEntries.forEach((entry, panelIndex) => {
    if (panelIndex < startPanelIndex) return;
    if (!entry || entry.projectId !== project.id) return;
    for (const chainItem of getPanelToolChain(entry, toolsById)) {
      const tool = chainItem.tool;
      if (previousTool && !canConnectTools(previousTool, tool)) {
        artifacts.push(makeArtifact({
          projectId: project.id,
          panelIndex,
          tool,
          inputs: {},
          output: `Skipped: ${previousTool.name} output is not compatible with ${tool.name}.`,
          status: "error",
          runMode,
          stepId: entry.aiStepId || null
        }));
        return;
      }
      try {
        const inputs = buildInputsFromPayload(tool, payload, payloadType);
        const output = runTool(tool, inputs);
        const artifact = makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, runMode: chainItem.order === 0 ? runMode : `${runMode}-nested`, stepId: entry.aiStepId || null });
        artifacts.push(artifact);
        payload = output;
        payloadType = artifact.outputType;
        previousTool = tool;
      } catch (error) {
        artifacts.push(makeArtifact({
          projectId: project.id,
          panelIndex,
          tool,
          inputs: {},
          output: error instanceof Error ? error.message : String(error),
          status: "error",
          runMode: chainItem.order === 0 ? runMode : `${runMode}-nested`,
          stepId: entry.aiStepId || null
        }));
      }
    }
  });

  return artifacts;
}
