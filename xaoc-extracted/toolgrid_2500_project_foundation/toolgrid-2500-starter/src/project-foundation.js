import { getDefaultInputs, getToolSchema, runTool } from "./tool-engines.js";

export const PROJECT_FOUNDATION_VERSION = "2026-06-13-project-foundation-v1";

export const DEFAULT_CONTAINER_NAME = "ToolGrid Project Container";

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
  percent_change: { accepts: ["number", "text"], output: "number" }
};

const safeText = (value) => String(value ?? "");

export function createId(prefix = "id") {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createProject(name = "New Project") {
  return {
    id: createId("project"),
    name,
    input: "Free tools save time when they can share project data.",
    artifacts: [],
    events: [],
    workflows: []
  };
}

export function createFoundationState() {
  const project = createProject("Default Project");
  project.id = "project-default";
  return {
    containerName: DEFAULT_CONTAINER_NAME,
    activeProjectId: project.id,
    projects: [project]
  };
}

export function getToolIO(tool) {
  const config = tool.config || {};
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
    if (field.name === "text") inputs.text = text;
    if (field.name === "url" && (payloadType === "url" || /^https?:\/\//i.test(text))) inputs.url = text;
    if (field.name === "hex" && payloadType === "color") inputs.hex = text;
    if (field.name === "value" && hasNumber) inputs.value = firstNumber;
    if (field.name === "start" && hasNumber) inputs.start = firstNumber;
    if (field.name === "end" && hasNumber) inputs.end = firstNumber;
    if (field.name === "a" && hasNumber) inputs.a = firstNumber;
  }

  return inputs;
}

export function makeArtifact({ projectId, panelIndex = null, tool, inputs, output, status = "ok", runMode = "manual" }) {
  return {
    id: createId("artifact"),
    projectId,
    panelIndex,
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
  project.events = project.events.slice(0, 80);
  return project.events[0];
}

export function appendArtifact(project, artifact) {
  project.artifacts.unshift(artifact);
  project.artifacts = project.artifacts.slice(0, 120);
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

export function runProjectPanelsSimultaneously({ project, panelEntries, toolsById }) {
  const payload = project.input || "";
  const payloadType = inferPayloadType(payload);
  const artifacts = [];

  panelEntries.forEach((entry, panelIndex) => {
    if (!entry || entry.projectId !== project.id) return;
    const tool = toolsById.get(entry.toolId);
    if (!tool) return;
    try {
      const inputs = buildInputsFromPayload(tool, payload, payloadType);
      const output = runTool(tool, inputs);
      artifacts.push(makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, runMode: "simultaneous" }));
    } catch (error) {
      artifacts.push(makeArtifact({
        projectId: project.id,
        panelIndex,
        tool,
        inputs: {},
        output: error instanceof Error ? error.message : String(error),
        status: "error",
        runMode: "simultaneous"
      }));
    }
  });

  return artifacts;
}

export function runProjectPanelsAsQueue({ project, panelEntries, toolsById }) {
  let payload = project.input || "";
  let payloadType = inferPayloadType(payload);
  let previousTool = null;
  const artifacts = [];

  panelEntries.forEach((entry, panelIndex) => {
    if (!entry || entry.projectId !== project.id) return;
    const tool = toolsById.get(entry.toolId);
    if (!tool) return;
    if (previousTool && !canConnectTools(previousTool, tool)) {
      artifacts.push(makeArtifact({
        projectId: project.id,
        panelIndex,
        tool,
        inputs: {},
        output: `Skipped: ${previousTool.name} output is not compatible with ${tool.name}.`,
        status: "error",
        runMode: "queued"
      }));
      return;
    }
    try {
      const inputs = buildInputsFromPayload(tool, payload, payloadType);
      const output = runTool(tool, inputs);
      const artifact = makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, runMode: "queued" });
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
        runMode: "queued"
      }));
    }
  });

  return artifacts;
}
