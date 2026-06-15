export const SKELETON_TOOL_VERSION = "2026-06-13-generic-skeleton-tools-v1";
export const SKELETON_TOOL_LABEL = "SKELETON";
export const SKELETON_MAX_CELLS = 64;

const ENGINE_PATTERNS = Object.freeze({
  text_stats: { id: "measurement", label: "Generic Measurement Skeleton", accepts: ["text", "document", "notes"], produces: ["metrics", "summary"], keywords: ["measure", "count", "score", "audit", "stats"] },
  text_transform: { id: "transformer", label: "Generic Text Transformer Skeleton", accepts: ["text", "document", "prompt"], produces: ["rewritten-text", "normalized-text"], keywords: ["rewrite", "format", "clean", "transform", "standardize"] },
  list_transform: { id: "list-processor", label: "Generic List Processor Skeleton", accepts: ["list", "rows", "items"], produces: ["sorted-list", "deduped-list"], keywords: ["sort", "dedupe", "organize", "sequence", "queue"] },
  encoder: { id: "encoder-decoder", label: "Generic Encoder / Decoder Skeleton", accepts: ["text", "url", "html", "encoded-value"], produces: ["encoded-output", "decoded-output"], keywords: ["encode", "decode", "escape", "unescape", "convert"] },
  json_tool: { id: "structured-data", label: "Generic Structured Data Skeleton", accepts: ["json", "text", "api-output"], produces: ["json", "schema", "keys"], keywords: ["json", "schema", "structure", "parse", "validate"] },
  csv_tool: { id: "table-converter", label: "Generic Table Converter Skeleton", accepts: ["csv", "spreadsheet", "json", "rows"], produces: ["table", "json", "csv"], keywords: ["spreadsheet", "table", "rows", "columns", "convert"] },
  unit_convert: { id: "unit-normalizer", label: "Generic Unit Normalizer Skeleton", accepts: ["number", "unit", "measurement"], produces: ["converted-number", "normalized-unit"], keywords: ["unit", "convert", "normalize", "measurement"] },
  percentage: { id: "ratio-calculator", label: "Generic Ratio Calculator Skeleton", accepts: ["number", "total", "data"], produces: ["percentage", "ratio"], keywords: ["percent", "ratio", "portion", "share"] },
  percent_change: { id: "change-calculator", label: "Generic Change Calculator Skeleton", accepts: ["starting-value", "ending-value"], produces: ["change", "trend"], keywords: ["change", "growth", "increase", "decrease"] },
  tip_calculator: { id: "split-cost", label: "Generic Split Cost Skeleton", accepts: ["amount", "rate", "people"], produces: ["payment-plan", "split-total"], keywords: ["split", "cost", "fee", "rate"] },
  loan_payment: { id: "payment-model", label: "Generic Payment Model Skeleton", accepts: ["principal", "rate", "duration"], produces: ["payment-estimate", "finance-summary"], keywords: ["loan", "payment", "finance", "estimate"] },
  compound_interest: { id: "growth-model", label: "Generic Growth Projection Skeleton", accepts: ["starting-value", "rate", "time"], produces: ["projection", "growth-summary"], keywords: ["projection", "growth", "forecast", "compound"] },
  date_diff: { id: "time-gap", label: "Generic Time Gap Skeleton", accepts: ["date", "schedule"], produces: ["duration", "time-summary"], keywords: ["date", "duration", "timeline", "deadline"] },
  date_add: { id: "date-offset", label: "Generic Date Offset Skeleton", accepts: ["date", "duration"], produces: ["future-date", "schedule"], keywords: ["add date", "deadline", "schedule"] },
  unix_time: { id: "timestamp", label: "Generic Timestamp Skeleton", accepts: ["date", "timestamp"], produces: ["timestamp", "date"], keywords: ["time", "timestamp", "unix"] },
  random_number: { id: "randomizer", label: "Generic Randomizer Skeleton", accepts: ["range", "count"], produces: ["random-values", "sample-set"], keywords: ["random", "sample", "lottery", "shuffle"] },
  password_generator: { id: "secure-token", label: "Generic Secure Token Skeleton", accepts: ["length", "policy"], produces: ["secure-token", "password"], keywords: ["password", "token", "secret", "credential"] },
  uuid_generator: { id: "unique-id", label: "Generic Unique ID Skeleton", accepts: ["request"], produces: ["unique-id", "identifier"], keywords: ["uuid", "id", "identifier", "tracking"] },
  color_convert: { id: "color-translator", label: "Generic Color Translator Skeleton", accepts: ["color", "hex", "rgb"], produces: ["color", "palette"], keywords: ["color", "hex", "rgb", "palette"] },
  contrast_ratio: { id: "accessibility-check", label: "Generic Accessibility Check Skeleton", accepts: ["color", "text"], produces: ["accessibility-report", "pass-fail"], keywords: ["contrast", "accessibility", "readability", "wcag"] },
  utm_builder: { id: "link-builder", label: "Generic Link Builder Skeleton", accepts: ["url", "campaign"], produces: ["tracked-url", "link"], keywords: ["url", "link", "campaign", "tracking"] },
  meta_length: { id: "content-limit-check", label: "Generic Content Limit Check Skeleton", accepts: ["text", "metadata"], produces: ["length-report", "recommendation"], keywords: ["title", "description", "metadata", "length"] },
  keyword_density: { id: "keyword-scanner", label: "Generic Keyword Scanner Skeleton", accepts: ["text", "keyword"], produces: ["keyword-report", "frequency"], keywords: ["keyword", "search", "frequency", "seo"] },
  markdown_table: { id: "report-table", label: "Generic Report Table Skeleton", accepts: ["rows", "csv", "data"], produces: ["markdown", "table", "report"], keywords: ["table", "report", "markdown", "documentation"] },
  plant_spacing: { id: "layout-capacity", label: "Generic Layout Capacity Skeleton", accepts: ["space", "spacing", "area"], produces: ["capacity-plan", "layout"], keywords: ["capacity", "layout", "spacing", "area"] },
  soil_mix: { id: "recipe-ratio", label: "Generic Recipe Ratio Skeleton", accepts: ["total", "parts", "materials"], produces: ["recipe", "mix-plan"], keywords: ["recipe", "ratio", "mix", "materials"] },
  recipe_scale: { id: "scale-recipe", label: "Generic Scaling Skeleton", accepts: ["recipe", "quantity", "target"], produces: ["scaled-recipe", "quantity-plan"], keywords: ["scale", "resize", "adjust", "quantity"] },
  invoice_total: { id: "totalizer", label: "Generic Totalizer Skeleton", accepts: ["amounts", "tax", "discount"], produces: ["total", "financial-summary"], keywords: ["invoice", "total", "tax", "discount"] },
  simple_formula: { id: "formula-runner", label: "Generic Formula Runner Skeleton", accepts: ["number", "formula"], produces: ["calculation", "result"], keywords: ["formula", "calculate", "math", "result"] },
  webcam_explorer: { id: "multi-output-discovery", label: "Generic Multi-Output Discovery Grid Skeleton", accepts: ["search", "source-list", "safe-policy"], produces: ["result-grid", "source-cards"], keywords: ["search", "grid", "multi output", "source cards"] },
  factchecker: { id: "evidence-clipping", label: "Generic Evidence Clipping Grid Skeleton", accepts: ["phrase", "source-list", "date-range"], produces: ["clipping-grid", "evidence-cells"], keywords: ["factcheck", "evidence", "source", "clipping", "quote"] },
  theme_studio: { id: "theme-configurator", label: "Generic Theme Configurator Skeleton", accepts: ["colors", "profile", "effect"], produces: ["theme-profile", "css-variables"], keywords: ["theme", "profile", "rgb", "effects"] },
  rgb_generator: { id: "effect-configurator", label: "Generic RGB Effect Configurator Skeleton", accepts: ["color", "region", "effect"], produces: ["effect-plan", "css-class"], keywords: ["rgb", "effect", "animation", "glow"] },
  rgb_motion_studio: { id: "visual-effect-compositor", label: "Generic Visual Effect Compositor Skeleton", accepts: ["image", "video", "shape", "path", "color-palette"], produces: ["animated-overlay", "effect-preset", "render-plan"], keywords: ["image", "video", "shape", "path", "outline", "fill", "rgb", "overlay", "animation"] },
  price_comparison: { id: "price-discovery-grid", label: "Generic Price Discovery Grid Skeleton", accepts: ["product", "url", "sku", "budget", "filters"], produces: ["price-grid", "source-links", "deal-candidates", "comparison-plan"], keywords: ["price", "shopping", "compare", "deal", "sale", "budget", "marketplace", "64 cells"] }
});

const DEFAULT_PATTERN = { id: "generic-tool", label: "Generic Project Tool Skeleton", accepts: ["text", "project-input"], produces: ["project-output"], keywords: ["generic", "tool", "project", "workflow"] };

function slug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function unique(values) {
  return [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];
}

export function getSkeletonPatternForTool(tool) {
  return ENGINE_PATTERNS[tool?.engine] || DEFAULT_PATTERN;
}

export function buildSkeletonToolFromTool(tool, index = 0) {
  const pattern = getSkeletonPatternForTool(tool);
  const baseName = String(tool?.name || "Project Tool").replace(/^(All Stats|Generic|Skeleton:)/i, "").trim();
  const tags = unique([
    "skeleton", "generic skeleton", "reusable tool skeleton", "project skeleton", "wide use", "generic function", "workflow node", "prompt engine skeleton", pattern.id, pattern.label,
    ...(pattern.keywords || []), tool?.category, tool?.engine, ...(tool?.tags || []).slice(0, 18)
  ]);
  return {
    id: `skeleton-${String(index).padStart(4, "0")}-${tool.id}`,
    name: `Skeleton: ${pattern.label.replace("Generic ", "")} — ${baseName}`,
    category: "Skeleton Tools",
    engine: "skeleton_tool",
    systemLabel: SKELETON_TOOL_LABEL,
    toolKind: "skeleton",
    skeletonBaseToolId: tool.id,
    skeletonPatternId: pattern.id,
    description: `Reusable skeleton version of ${tool.name}. Instead of being locked to one category, it exposes the generic ${pattern.label.toLowerCase()} pattern for any project that needs ${pattern.keywords.slice(0, 4).join(", ")}.`,
    tags,
    config: {
      baseToolId: tool.id,
      baseToolName: tool.name,
      baseEngine: tool.engine,
      baseCategory: tool.category,
      patternId: pattern.id,
      patternLabel: pattern.label,
      accepts: pattern.accepts,
      produces: pattern.produces,
      keywords: pattern.keywords
    }
  };
}

export function buildSkeletonTools(baseTools = []) {
  return baseTools
    .filter((tool) => tool && tool.id && tool.engine !== "skeleton_tool" && !tool.toolKind)
    .map((tool, index) => buildSkeletonToolFromTool(tool, index));
}

export function runSkeletonTool(tool = {}, inputs = {}) {
  const config = tool.config || {};
  const count = Math.max(1, Math.min(SKELETON_MAX_CELLS, Number(inputs.cells || inputs.count || 8)));
  const projectGoal = String(inputs.projectGoal || inputs.text || "Apply this reusable tool skeleton to the active project.");
  const outputShape = String(inputs.outputShape || config.produces?.[0] || "project-output");
  const cells = Array.from({ length: count }, (_, index) => ({
    cell: index + 1,
    role: `${config.patternLabel || "Skeleton step"} slot ${index + 1}`,
    accepts: config.accepts || ["text"],
    produces: config.produces || [outputShape],
    status: "template-ready"
  }));
  return [
    `Skeleton tool: ${tool.name || config.patternLabel || "Generic skeleton"}`,
    `Base tool: ${config.baseToolName || "custom"}`,
    `Generic pattern: ${config.patternLabel || config.patternId || "generic"}`,
    `Project goal: ${projectGoal}`,
    `Output shape: ${outputShape}`,
    `Cells prepared: ${cells.length}/${SKELETON_MAX_CELLS}`,
    `First cells: ${cells.slice(0, 4).map((cell) => `${cell.cell}. ${cell.role}`).join(" | ")}`
  ].join("\n");
}

export function getSkeletonToolSchema() {
  return [
    { name: "projectGoal", label: "Project goal / prompt", type: "textarea" },
    { name: "inputPayload", label: "Input payload", type: "textarea" },
    { name: "outputShape", label: "Desired output shape", type: "text" },
    { name: "cells", label: "Cells / UI slots to prepare", type: "number" }
  ];
}

export function pickSkeletonToolsForPrompt({ prompt = "", skeletonTools = [], limit = 16 } = {}) {
  const q = String(prompt).toLowerCase();
  return skeletonTools
    .map((tool) => {
      const haystack = `${tool.name} ${tool.description} ${(tool.tags || []).join(" ")} ${(tool.config?.keywords || []).join(" ")}`.toLowerCase();
      let score = tool.toolKind === "skeleton" ? 2 : 0;
      if (/generic|skeleton|template|any project|wide array|reusable|framework|workflow/.test(q)) score += 15;
      for (const token of q.split(/[^a-z0-9]+/).filter(Boolean)) if (haystack.includes(token)) score += 1;
      return { tool, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit);
}

export function buildSkeletonCompatibilityReport(skeletonTools = [], { limit = 16 } = {}) {
  const byPattern = new Map();
  for (const tool of skeletonTools) {
    const key = tool.config?.patternId || "generic";
    byPattern.set(key, (byPattern.get(key) || 0) + 1);
  }
  const topPatterns = [...byPattern.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([patternId, count]) => ({ patternId, count }));
  return {
    version: SKELETON_TOOL_VERSION,
    toolCount: skeletonTools.length,
    patternCount: byPattern.size,
    maxCells: SKELETON_MAX_CELLS,
    topPatterns,
    summary: `${skeletonTools.length.toLocaleString()} skeleton tools generated across ${byPattern.size} generic function patterns.`
  };
}

export function verifySkeletonToolSuite(skeletonTools = [], baseToolCount = 0) {
  const errors = [];
  const ids = new Set();
  for (const tool of skeletonTools) {
    if (!tool.id.startsWith("skeleton-")) errors.push(`${tool.id} does not use the skeleton id namespace`);
    if (ids.has(tool.id)) errors.push(`duplicate skeleton id ${tool.id}`);
    ids.add(tool.id);
    if (tool.engine !== "skeleton_tool") errors.push(`${tool.id} does not use skeleton_tool engine`);
    if (tool.systemLabel !== SKELETON_TOOL_LABEL) errors.push(`${tool.id} is missing skeleton label`);
    if (!tool.skeletonBaseToolId) errors.push(`${tool.id} missing base tool reference`);
    if ((tool.tags || []).length < 12) errors.push(`${tool.id} needs dense skeleton tags`);
  }
  if (baseToolCount && skeletonTools.length !== baseToolCount) errors.push(`expected ${baseToolCount} skeleton tools, got ${skeletonTools.length}`);
  return { ok: errors.length === 0, errors, stats: buildSkeletonCompatibilityReport(skeletonTools) };
}
