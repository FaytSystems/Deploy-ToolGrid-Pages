import { createReadStream, createWriteStream } from "node:fs";
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { once } from "node:events";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import readline from "node:readline";

const scriptPath = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(scriptPath);
const projectRoot = path.resolve(scriptDir, "..");
const exportsDir = path.join(projectRoot, "exports", "pricing");
const csvPath = path.join(exportsDir, "toolgrid-pricing-inventory.csv");
const jsonPath = path.join(exportsDir, "toolgrid-pricing-inventory.json");
const summaryPath = path.join(exportsDir, "toolgrid-pricing-summary.json");

const INVENTORY_COLUMNS = Object.freeze([
  "tool_id",
  "name",
  "label",
  "system_label",
  "asset_type",
  "tool_type",
  "source_family",
  "source_module",
  "category",
  "domain",
  "operation_family",
  "description",
  "simple_explanation",
  "tags",
  "search_terms",
  "inputs",
  "outputs",
  "accepts_files",
  "file_types",
  "requires_ai",
  "requires_api",
  "requires_web",
  "requires_render",
  "requires_auth",
  "requires_storage",
  "requires_paid_data",
  "browser_side",
  "backend_required",
  "export_types",
  "project_use_cases",
  "compatibility_inputs",
  "compatibility_outputs",
  "skeleton_or_specific",
  "mini_app_or_tool",
  "likely_pricing_bucket",
  "monetization_notes",
  "competitor_search_queries"
]);

const REQUIRED_MODULES = Object.freeze([
  "src/tool-catalog.js",
  "src/in-house-tools.js",
  "src/functional-tools.js",
  "src/mini-apps.js",
  "src/massive-tool-factory.js",
  "src/frontier-tool-expansion.js",
  "src/next-frontier-tool-expansion.js",
  "src/app-store-inspired-tool-expansion.js",
  "src/skeleton-tools.js",
  "src/factchecker-tool.js",
  "src/webcam-explorer.js",
  "src/price-comparison-tool.js",
  "src/theme-system.js",
  "src/rgb-motion-studio.js",
  "src/audio-visualizer-studio.js",
  "src/appfigures-connector.js"
]);

const OPTIONAL_MODULES = Object.freeze([
  "src/expansion-tools.js",
  "src/daily-dealings-programs.js",
  "src/space-studio.js",
  "src/scale-expansion.js",
  "src/target-500k-expansion.js",
  "src/target-5m-expansion.js"
]);

const CSV_SOURCE_FILES = Object.freeze([
  "exports/current-tool-inventory.csv",
  "exports/current-app-inventory.csv",
  "exports/potential-apps.csv",
  "exports/production-stream-apps.csv",
  "exports/production-stream-support-tools.csv",
  "exports/needed-tools-for-potential-apps.csv",
  "exports/scale-expansion-possibilities.csv",
  "exports/target-500k-expansion-possibilities.csv",
  "exports/target-5m-expansion-samples.csv"
]);

const GENERIC_MODULE_SCAN = Object.freeze([
  "src/app-store-inspired-tool-expansion.js",
  "src/factchecker-tool.js",
  "src/webcam-explorer.js",
  "src/price-comparison-tool.js",
  "src/theme-system.js",
  "src/rgb-motion-studio.js",
  "src/audio-visualizer-studio.js",
  "src/appfigures-connector.js",
  "src/space-studio.js"
]);

const PRICING_BUCKETS = Object.freeze([
  "free",
  "starter",
  "pro",
  "creator",
  "team",
  "enterprise",
  "credit_based"
]);

const redactPatterns = Object.freeze([
  /sk-[A-Za-z0-9_-]{16,}/g,
  /ghp_[A-Za-z0-9_]{16,}/g,
  /github_pat_[A-Za-z0-9_]{16,}/g,
  /xox[baprs]-[A-Za-z0-9-]{16,}/g,
  /\b(?:api[_-]?key|access[_-]?token|auth[_-]?token|secret|password)\s*[:=]\s*["']?[^"',\s;]{8,}/gi
]);

const sourceStatus = [];
const modules = new Map();
const seenIds = new Set();
const seenKeys = new Set();
const summary = {
  total_records: 0,
  unique_records: 0,
  duplicates_removed: 0,
  counts_by_source_family: {},
  counts_by_asset_type: {},
  counts_by_pricing_bucket: {},
  counts_backend_required: {},
  counts_requires_api: {},
  counts_requires_render: {},
  counts_skeleton_vs_specific: {},
  top_100_categories: [],
  top_100_domains: [],
  generated_at: new Date().toISOString(),
  virtual_records_represented: 0,
  virtual_export_note: "Target 5M lazy records are represented by production-batch pricing proxy rows unless PRICING_EXPORT_FULL_TARGET5M=1 is set."
};

const categoryCounts = new Map();
const domainCounts = new Map();

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b[a-z]/g, (match) => match.toUpperCase());
}

function unique(values) {
  return [...new Set(values.flat(Infinity).filter((value) => value !== undefined && value !== null && value !== "")
    .map((value) => String(value).trim())
    .filter(Boolean))];
}

function redact(value) {
  let text = String(value ?? "");
  for (const pattern of redactPatterns) text = text.replace(pattern, "[REDACTED]");
  return text;
}

function flatten(value) {
  if (value === undefined || value === null) return "";
  if (Array.isArray(value)) return unique(value.map((item) => typeof item === "object" ? JSON.stringify(item) : item)).join("; ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function csvEscape(value) {
  const text = redact(flatten(value));
  return `"${text.replaceAll('"', '""')}"`;
}

function toBooleanText(value) {
  return value ? "true" : "false";
}

function includesAny(text, terms) {
  const haystack = normalizeText(text);
  return terms.some((term) => haystack.includes(normalizeText(term)));
}

function collectText(record) {
  return [
    record.tool_id,
    record.id,
    record.name,
    record.label,
    record.systemLabel,
    record.system_label,
    record.category,
    record.domain,
    record.engine,
    record.toolKind,
    record.appType,
    record.description,
    record.simpleExplanation,
    record.simple_explanation,
    record.tags,
    record.searchPhrases,
    record.searchTerms,
    record.config,
    record.compatibility
  ].map(flatten).join(" ");
}

function inferFileTypes(text) {
  const types = [];
  const checks = [
    ["pdf", /\bpdf\b/i],
    ["docx", /\bdocx|word\b/i],
    ["xlsx", /\bxlsx|spreadsheet|excel\b/i],
    ["csv", /\bcsv\b/i],
    ["json", /\bjson\b/i],
    ["image", /\bimage|photo|screenshot|png|jpg|jpeg|webp|gif\b/i],
    ["audio", /\baudio|mp3|wav|transcript\b/i],
    ["video", /\bvideo|mp4|clip\b/i],
    ["model", /\bglb|obj|stl|cad|3d model|model file\b/i],
    ["html", /\bhtml|web page\b/i]
  ];
  for (const [type, pattern] of checks) if (pattern.test(text)) types.push(type);
  return types;
}

function inferExportTypes(text, record) {
  const values = unique([
    record.exportTypes,
    record.export_types,
    record.outputs,
    record.produces,
    record.config?.produces,
    record.compatibility?.produces
  ]);
  const combined = `${text} ${values.join(" ")}`;
  const types = [];
  const checks = [
    ["csv", /\bcsv\b/i],
    ["json", /\bjson|scene-json\b/i],
    ["xlsx", /\bxlsx|spreadsheet|excel\b/i],
    ["docx", /\bdocx|word\b/i],
    ["pdf", /\bpdf|print\b/i],
    ["markdown", /\bmarkdown|md\b/i],
    ["png", /\bpng|image\b/i],
    ["gif", /\bgif\b/i],
    ["mp4", /\bmp4|video|clip\b/i],
    ["glb", /\bglb|3d-scene|model\b/i],
    ["html", /\bhtml|web\b/i]
  ];
  for (const [type, pattern] of checks) if (pattern.test(combined)) types.push(type);
  return unique([...values.filter((value) => /^[a-z0-9-]{2,24}$/i.test(value)), ...types]).slice(0, 12);
}

function inferAssetType(record, sourceFamily = "") {
  const text = collectText(record);
  const explicit = record.asset_type || record.assetType || record.appType || record.toolKind || record.config?.appType || record.config?.kind;
  if (explicit) return String(explicit);
  if (includesAny(text, ["production pack", "activation pack"])) return "production-pack";
  if (includesAny(text, ["full program"])) return "full-program";
  if (includesAny(text, ["mini program"])) return "mini-program";
  if (includesAny(text, ["full app"])) return "full-app";
  if (includesAny(text, ["mini app", "mini-app"])) return "mini-app";
  if (includesAny(text, ["skeleton"])) return "skeleton-tool";
  if (includesAny(sourceFamily, ["app", "program"])) return "app-program";
  return "tool";
}

function inferMiniAppOrTool(assetType, record) {
  const text = `${assetType} ${collectText(record)}`;
  if (includesAny(text, ["production pack"])) return "production-pack";
  if (includesAny(text, ["full program"])) return "full-program";
  if (includesAny(text, ["program"])) return "program";
  if (includesAny(text, ["full app"])) return "full-app";
  if (includesAny(text, ["app"])) return "app";
  return "tool";
}

function inferPricing(row, text) {
  const bucketText = `${row.asset_type} ${row.tool_type} ${row.category} ${row.domain} ${text}`;
  const collaborative = row.requires_auth === "true" || includesAny(bucketText, ["team", "roles", "collaboration", "shared files", "drive", "dropbox", "workspace sync"]);
  const apiHeavy = row.requires_api === "true" || includesAny(bucketText, ["external api", "official api", "app intelligence", "appfigures", "price api", "web page fetcher"]);
  const paidData = row.requires_paid_data === "true";
  const rendered = row.requires_render === "true";
  const media = includesAny(bucketText, ["video", "audio visualizer", "rgb motion", "render", "3d", "scene", "image batch"]);
  const aiGuided = row.requires_ai === "true" || includesAny(bucketText, ["prompt compiler", "ai guided", "waterfall", "orchestrator"]);
  const workflow = includesAny(bucketText, ["saved project", "workflow", "mini app", "full app", "program", "production pack", "dashboard"]);

  if (collaborative && (apiHeavy || paidData)) return ["enterprise", "Collaboration, auth, shared files, or external data makes this an enterprise-grade capability."];
  if (collaborative) return ["team", "Shared workspaces, saved files, approvals, or role-based collaboration fit a team subscription."];
  if (paidData || (apiHeavy && includesAny(bucketText, ["price", "factcheck", "shopping", "source", "app intelligence"]))) return ["credit_based", "External data, live source lookup, fact-checking, or price intelligence can create variable usage costs."];
  if (media && rendered) return ["credit_based", "Media rendering or 3D/audio/video export is compute-heavy and fits credit-based usage."];
  if (media) return ["creator", "Creative media, visual effects, audio visualization, image, video, or 3D workspace tools fit a creator plan."];
  if (apiHeavy) return ["pro", "API-backed or web-aware research features usually belong in a paid pro plan."];
  if (aiGuided) return ["pro", "AI-guided prompt analysis, waterfall planning, or orchestration is a higher-value pro workflow."];
  if (workflow) return ["pro", "Saved workflow, mini-app, app, or program behavior fits a pro subscription tier."];
  if (row.accepts_files === "true" || row.requires_storage === "true") return ["starter", "File intake or saved output is useful enough for a starter plan."];
  return ["free", "Simple browser-side utility with no required account, API, paid data, or heavy rendering."];
}

function competitorQueries(row) {
  const baseName = row.name || row.label || row.category || "online tool";
  const category = row.category || row.domain || "software";
  const operation = row.operation_family || row.tool_type || "tool";
  const queries = [
    `${baseName} pricing`,
    `${category} tool pricing`,
    `${operation} software pricing`
  ];
  const text = `${baseName} ${category} ${operation} ${row.description} ${row.tags}`;
  if (includesAny(text, ["pdf", "compress", "convert"])) queries.push("PDF tool subscription pricing");
  if (includesAny(text, ["video", "rgb motion", "audio visualizer", "render"])) queries.push("AI video editor pricing", "audio visualizer pricing");
  if (includesAny(text, ["price comparison", "shopping", "product price", "sale finder"])) queries.push("price comparison API pricing", "shopping data API pricing");
  if (includesAny(text, ["workflow", "automation", "waterfall", "orchestrator"])) queries.push("workflow automation subscription pricing");
  if (includesAny(text, ["factcheck", "citation", "source", "web page"])) queries.push("fact checking tool pricing", "web research API pricing");
  if (includesAny(text, ["3d", "room", "space", "cad"])) queries.push("3D room planner software pricing", "AR product visualization pricing");
  if (includesAny(text, ["team", "collaboration", "shared files"])) queries.push("team collaboration software pricing");
  return unique(queries).slice(0, 8);
}

function count(map, key, amount = 1) {
  const safeKey = String(key || "unknown");
  map[safeKey] = (map[safeKey] || 0) + amount;
}

function topEntries(map, limit = 100) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, countValue]) => ({ name, count: countValue }));
}

function normalizeRecord(raw, source) {
  const record = raw || {};
  const toolId = record.tool_id || record.id || record.toolId || record.key || record.slug || "";
  const name = record.name || record.title || record.label || record.systemLabel || record.id || toolId || "Untitled ToolGrid record";
  const assetType = inferAssetType(record, source.family);
  const toolType = record.tool_type || record.toolType || record.engine || record.appType || record.toolKind || record.config?.mode || record.config?.kind || assetType;
  const text = collectText(record);
  const fileTypes = inferFileTypes(text);
  const compatibilityInputs = unique([record.compatibility_inputs, record.compatibility?.accepts, record.config?.accepts, record.accepts, record.inputs]);
  const compatibilityOutputs = unique([record.compatibility_outputs, record.compatibility?.produces, record.config?.produces, record.produces, record.outputs]);
  const acceptsFiles = Boolean(record.accepts_files ?? record.acceptsFiles) || fileTypes.length > 0 || includesAny(text, ["upload", "file", "attachment"]);
  const requiresApi = Boolean(record.requires_api ?? record.requiresApi) || includesAny(text, ["api", "adapter", "feed", "connector", "webhook"]);
  const requiresWeb = Boolean(record.requires_web ?? record.requiresWeb) || includesAny(text, ["web", "url", "website", "webcam", "citation", "source", "shopping", "price comparison"]);
  const requiresRender = Boolean(record.requires_render ?? record.requiresRender) || includesAny(text, ["render", "visualizer", "rgb motion", "video", "3d", "canvas", "theme", "animation", "gif", "mp4"]);
  const requiresAuth = Boolean(record.requires_auth ?? record.requiresAuth) || includesAny(text, ["auth", "login", "account", "subscription", "roles", "shared", "drive", "dropbox"]);
  const requiresStorage = Boolean(record.requires_storage ?? record.requiresStorage) || includesAny(text, ["storage", "saved", "workspace", "archive", "history", "cloud", "library"]);
  const requiresPaidData = Boolean(record.requires_paid_data ?? record.requiresPaidData) || includesAny(text, ["paid data", "official api", "price api", "app intelligence", "live prices", "provider api"]);
  const requiresAi = Boolean(record.requires_ai ?? record.requiresAi) || includesAny(text, ["ai", "prompt compiler", "guided", "orchestrator", "inference", "generated answer"]);
  const backendRequired = requiresApi || requiresAuth || requiresPaidData || includesAny(text, ["server", "backend", "provider", "send queue", "bank feed"]);
  const browserSide = !backendRequired || includesAny(text, ["browser-side", "local", "native browser"]);

  const row = {
    tool_id: toolId,
    name,
    label: record.label || record.toolLabel || record.appLabel || "",
    system_label: record.system_label || record.systemLabel || "",
    asset_type: assetType,
    tool_type: toolType,
    source_family: source.family,
    source_module: source.module,
    category: record.category || record.domain || record.config?.category || "",
    domain: record.domain || record.sourceDomain || record.config?.domain || record.config?.kind || record.kind || "",
    operation_family: record.operation_family || record.operationFamily || record.operation || record.config?.operationFamily || record.config?.mode || record.config?.patternId || "",
    description: record.description || record.summary || record.capability || record.config?.capability || "",
    simple_explanation: record.simple_explanation || record.simpleExplanation || record.explanation || record.description || "",
    tags: unique([record.tags, record.keywords, record.config?.keywords]),
    search_terms: unique([record.search_terms, record.searchTerms, record.searchPhrases, record.search_phrases]),
    inputs: unique([record.inputs, record.accepts, record.config?.accepts]),
    outputs: unique([record.outputs, record.produces, record.config?.produces]),
    accepts_files: toBooleanText(acceptsFiles),
    file_types: fileTypes,
    requires_ai: toBooleanText(requiresAi),
    requires_api: toBooleanText(requiresApi),
    requires_web: toBooleanText(requiresWeb),
    requires_render: toBooleanText(requiresRender),
    requires_auth: toBooleanText(requiresAuth),
    requires_storage: toBooleanText(requiresStorage),
    requires_paid_data: toBooleanText(requiresPaidData),
    browser_side: toBooleanText(browserSide),
    backend_required: toBooleanText(backendRequired),
    export_types: inferExportTypes(text, record),
    project_use_cases: unique([record.project_use_cases, record.projectUseCases, record.searchPhrases, record.config?.useCases]).slice(0, 12),
    compatibility_inputs: compatibilityInputs,
    compatibility_outputs: compatibilityOutputs,
    skeleton_or_specific: includesAny(`${assetType} ${text}`, ["skeleton"]) ? "skeleton" : "specific",
    mini_app_or_tool: inferMiniAppOrTool(assetType, record),
    likely_pricing_bucket: "",
    monetization_notes: "",
    competitor_search_queries: []
  };
  const [bucket, notes] = inferPricing(row, text);
  row.likely_pricing_bucket = PRICING_BUCKETS.includes(bucket) ? bucket : "starter";
  row.monetization_notes = notes;
  row.competitor_search_queries = competitorQueries(row);
  for (const key of Object.keys(row)) row[key] = Array.isArray(row[key]) ? row[key].map(redact) : redact(row[key]);
  return row;
}

function dedupeKey(row) {
  return [
    normalizeText(row.name),
    normalizeText(row.category),
    normalizeText(row.asset_type || row.tool_type)
  ].join("|");
}

async function writeSafe(stream, chunk) {
  if (!stream.write(chunk)) await once(stream, "drain");
}

async function addRow(raw, source, writers) {
  summary.total_records += 1;
  const rawId = String(raw?.tool_id || raw?.id || raw?.toolId || raw?.key || raw?.slug || "").trim();
  if (rawId && seenIds.has(rawId)) {
    summary.duplicates_removed += 1;
    return false;
  }
  const row = normalizeRecord(raw, source);
  const id = String(row.tool_id || "").trim();
  if (id) {
    if (seenIds.has(id)) {
      summary.duplicates_removed += 1;
      return false;
    }
    seenIds.add(id);
  } else {
    const key = dedupeKey(row);
    if (seenKeys.has(key)) {
      summary.duplicates_removed += 1;
      return false;
    }
    seenKeys.add(key);
  }

  summary.unique_records += 1;
  count(summary.counts_by_source_family, row.source_family);
  count(summary.counts_by_asset_type, row.asset_type);
  count(summary.counts_by_pricing_bucket, row.likely_pricing_bucket);
  count(summary.counts_backend_required, row.backend_required);
  count(summary.counts_requires_api, row.requires_api);
  count(summary.counts_requires_render, row.requires_render);
  count(summary.counts_skeleton_vs_specific, row.skeleton_or_specific);
  categoryCounts.set(row.category || "unknown", (categoryCounts.get(row.category || "unknown") || 0) + 1);
  domainCounts.set(row.domain || "unknown", (domainCounts.get(row.domain || "unknown") || 0) + 1);

  await writeSafe(writers.csv, `${INVENTORY_COLUMNS.map((column) => csvEscape(row[column])).join(",")}\n`);
  await writeSafe(writers.json, `${writers.jsonHasRows ? ",\n" : "\n"}${JSON.stringify(row)}`);
  writers.jsonHasRows = true;
  return true;
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function loadModule(relativePath) {
  const absPath = path.join(projectRoot, relativePath);
  if (!(await pathExists(absPath))) {
    sourceStatus.push({ source_module: relativePath, status: "missing", fallback: "not parsed", records: 0 });
    return null;
  }
  try {
    const imported = await import(pathToFileURL(absPath).href);
    modules.set(relativePath, imported);
    sourceStatus.push({ source_module: relativePath, status: "imported", fallback: "", records: "" });
    return imported;
  } catch (error) {
    sourceStatus.push({ source_module: relativePath, status: "import_failed", fallback: "source regex parse attempted", error: error.message, records: 0 });
    return null;
  }
}

function looksLikeRecord(value) {
  return value && typeof value === "object" && !Array.isArray(value) && (
    value.id || value.tool_id || value.name || value.label || value.title || value.systemLabel
  );
}

function recordsFromExportedValue(value) {
  if (Array.isArray(value)) return value.filter(looksLikeRecord);
  if (looksLikeRecord(value)) return [value];
  return [];
}

async function parseModuleSourceFallback(relativePath, writers) {
  const absPath = path.join(projectRoot, relativePath);
  if (!(await pathExists(absPath))) return 0;
  const text = await readFile(absPath, "utf8");
  const matches = [...text.matchAll(/["']?id["']?\s*:\s*["']([^"']+)["'][\s\S]{0,700}?["']?name["']?\s*:\s*["']([^"']+)["']/g)];
  let countValue = 0;
  for (const match of matches) {
    const nearby = text.slice(Math.max(0, match.index - 200), Math.min(text.length, match.index + 900));
    const category = nearby.match(/["']?category["']?\s*:\s*["']([^"']+)["']/)?.[1] || "";
    const engine = nearby.match(/["']?engine["']?\s*:\s*["']([^"']+)["']/)?.[1] || "";
    await addRow({
      id: match[1],
      name: match[2],
      category,
      engine,
      description: "Recovered by lightweight source parsing after module import failed."
    }, { family: "source-parse-fallback", module: relativePath }, writers);
    countValue += 1;
  }
  const status = sourceStatus.find((item) => item.source_module === relativePath && item.status === "import_failed");
  if (status) status.records = countValue;
  return countValue;
}

async function addExportRecords(modulePath, exportName, family, writers) {
  const module = modules.get(modulePath);
  if (!module || !(exportName in module)) return 0;
  const records = recordsFromExportedValue(module[exportName]);
  for (const record of records) await addRow(record, { family, module: `${modulePath}#${exportName}` }, writers);
  return records.length;
}

async function addGenericModuleRecords(modulePath, writers) {
  const module = modules.get(modulePath);
  if (!module) return 0;
  let countValue = 0;
  for (const [exportName, value] of Object.entries(module)) {
    const records = recordsFromExportedValue(value);
    if (!records.length) continue;
    const family = exportName.toLowerCase().includes("tool") ? "module-export-tool" : "module-export-record";
    for (const record of records) {
      await addRow(record, { family, module: `${modulePath}#${exportName}` }, writers);
      countValue += 1;
    }
  }
  return countValue;
}

function parseCsvLine(line) {
  const cells = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (quoted && char === '"' && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(cell);
      cell = "";
    } else {
      cell += char;
    }
  }
  cells.push(cell);
  return cells;
}

function rowFromCsv(headers, values) {
  const row = {};
  headers.forEach((header, index) => {
    row[header] = values[index] ?? "";
  });
  return row;
}

async function addCsvSource(relativePath, writers) {
  const absPath = path.join(projectRoot, relativePath);
  if (!(await pathExists(absPath))) {
    sourceStatus.push({ source_module: relativePath, status: "missing", fallback: "csv not parsed", records: 0 });
    return 0;
  }
  const reader = readline.createInterface({
    input: createReadStream(absPath, { encoding: "utf8" }),
    crlfDelay: Infinity
  });
  let headers = null;
  let added = 0;
  for await (const line of reader) {
    if (!line.trim()) continue;
    if (!headers) {
      headers = parseCsvLine(line);
      continue;
    }
    const row = rowFromCsv(headers, parseCsvLine(line));
    const mapped = {
      id: row.id || row.tool_id,
      name: row.name,
      label: row.label,
      systemLabel: row.systemLabel || row.system_label,
      asset_type: row.appType || row.layer || row.sourceAppType,
      tool_type: row.engine || row.appType || row.sourceAppType,
      category: row.category,
      domain: row.domain || row.sourceDomain,
      operation_family: row.operation || row.operations || row.pattern,
      description: row.description || row.readiness,
      tags: row.tags ? row.tags.split("|") : [],
      searchPhrases: row.search_terms ? row.search_terms.split("|") : [],
      accepts: row.accepts || row.inputs,
      produces: row.produces || row.outputs,
      compatibility: {
        accepts: row.accepts || row.compatibility_inputs,
        produces: row.produces || row.compatibility_outputs
      },
      config: {
        currentTools: row.currentTools,
        neededToolIds: row.neededToolIds,
        noOutsideToolPolicy: row.noOutsideToolPolicy
      }
    };
    await addRow(mapped, { family: `csv-${path.basename(relativePath, ".csv")}`, module: relativePath }, writers);
    added += 1;
  }
  sourceStatus.push({ source_module: relativePath, status: "csv_parsed", fallback: "", records: added });
  return added;
}

function getExport(modulePath, exportName) {
  return modules.get(modulePath)?.[exportName];
}

function compactRows(values) {
  return values.flat().filter(Boolean);
}

async function addSkeletonRows(writers) {
  const buildSkeletonTools = getExport("src/skeleton-tools.js", "buildSkeletonTools");
  if (typeof buildSkeletonTools !== "function") return 0;
  const baseTools = compactRows([
    getExport("src/tool-catalog.js", "tools") || [],
    getExport("src/in-house-tools.js", "IN_HOUSE_TOOL_RECORDS") || [],
    getExport("src/massive-tool-factory.js", "MASSIVE_TOOL_FACTORY_RECORDS") || [],
    getExport("src/functional-tools.js", "FUNCTIONAL_TOOL_RECORDS") || [],
    getExport("src/mini-apps.js", "MINI_APP_TOOL_RECORDS") || [],
    getExport("src/daily-dealings-programs.js", "DAILY_DEALINGS_PROGRAM_RECORDS") || [],
    getExport("src/frontier-tool-expansion.js", "FRONTIER_TOOL_RECORDS") || [],
    getExport("src/next-frontier-tool-expansion.js", "NEXT_FRONTIER_TOOL_RECORDS") || [],
    getExport("src/expansion-tools.js", "NEEDED_INHOUSE_TOOL_RECORDS") || [],
    getExport("src/scale-expansion.js", "SCALE_INHOUSE_TOOL_RECORDS") || [],
    getExport("src/target-500k-expansion.js", "TARGET_500K_INHOUSE_TOOL_RECORDS") || [],
    getExport("src/space-studio.js", "SPACE_STUDIO_TOOLS") || [],
    getExport("src/webcam-explorer.js", "WEBCAM_EXPLORER_TOOL"),
    getExport("src/factchecker-tool.js", "FACTCHECKER_TOOL"),
    getExport("src/theme-system.js", "THEME_STUDIO_TOOL"),
    getExport("src/theme-system.js", "RGB_GENERATOR_TOOL"),
    getExport("src/rgb-motion-studio.js", "RGB_MOTION_STUDIO_TOOL"),
    getExport("src/audio-visualizer-studio.js", "AUDIO_VISUALIZER_STUDIO_TOOL"),
    getExport("src/price-comparison-tool.js", "PRICE_TOOLS") || []
  ]);
  const skeletons = buildSkeletonTools(baseTools);
  for (const skeleton of skeletons) await addRow(skeleton, { family: "generated-skeleton-tools", module: "src/skeleton-tools.js#buildSkeletonTools" }, writers);
  return skeletons.length;
}

async function addTarget5mVirtualRows(writers) {
  const fullTarget5m = process.env.PRICING_EXPORT_FULL_TARGET5M === "1";
  const modulePath = "src/target-5m-expansion.js";
  const module = modules.get(modulePath);
  if (!module) return 0;
  if (fullTarget5m && typeof module.iterateTarget5mRecords === "function") {
    let countValue = 0;
    for (const record of module.iterateTarget5mRecords()) {
      await addRow(record, { family: "target-5m-full-virtual-records", module: `${modulePath}#iterateTarget5mRecords` }, writers);
      countValue += 1;
    }
    summary.virtual_records_represented += countValue;
    summary.virtual_export_note = "PRICING_EXPORT_FULL_TARGET5M=1 was set, so target 5M virtual records were fully materialized.";
    return countValue;
  }
  if (typeof module.buildTarget5mBatches !== "function") return 0;
  const batches = module.buildTarget5mBatches();
  for (const batch of batches) {
    const byKind = typeof batch.byKind === "object" ? batch.byKind : {};
    const countValue = Number(batch.count || 0);
    await addRow({
      id: batch.id,
      name: `Target 5M ${titleCase(batch.id)} Pricing Proxy`,
      category: "Target 5M Virtual Production Batches",
      domain: "multi-domain",
      toolKind: "virtual-production-batch",
      engine: "target5m_virtual_generator",
      systemLabel: "Target 5M Virtual Production Batch",
      description: `Pricing inventory proxy for ${countValue.toLocaleString()} lazy-generated ToolGrid records in ${batch.id}. Kind mix: ${Object.entries(byKind).map(([kind, value]) => `${kind} ${value}`).join(", ")}.`,
      tags: ["target 5m", "lazy generated", "pricing proxy", "virtual records", ...Object.keys(byKind)],
      searchPhrases: ["large tool marketplace pricing", "workflow automation subscription pricing", "AI app builder pricing"],
      config: {
        virtualRecordCount: countValue,
        byKind,
        sampleIds: batch.sampleIds
      }
    }, { family: "target-5m-virtual-batches", module: `${modulePath}#buildTarget5mBatches` }, writers);
    summary.virtual_records_represented += countValue;
  }
  return batches.length;
}

async function main() {
  if (!(await pathExists(path.join(projectRoot, "package.json")))) {
    throw new Error(`ToolGrid app root not found at ${projectRoot}`);
  }
  await mkdir(exportsDir, { recursive: true });
  await Promise.all([...REQUIRED_MODULES, ...OPTIONAL_MODULES].map(loadModule));

  const csv = createWriteStream(csvPath, { encoding: "utf8" });
  const json = createWriteStream(jsonPath, { encoding: "utf8" });
  const writers = { csv, json, jsonHasRows: false };
  await writeSafe(csv, `${INVENTORY_COLUMNS.join(",")}\n`);
  await writeSafe(json, "[");

  const knownExports = [
    ["src/tool-catalog.js", "tools", "native-catalog-tools"],
    ["src/in-house-tools.js", "IN_HOUSE_TOOL_RECORDS", "in-house-tools"],
    ["src/functional-tools.js", "FUNCTIONAL_TOOL_RECORDS", "functional-tools"],
    ["src/mini-apps.js", "MINI_APP_TOOL_RECORDS", "mini-apps"],
    ["src/massive-tool-factory.js", "MASSIVE_TOOL_FACTORY_RECORDS", "massive-tool-factory"],
    ["src/frontier-tool-expansion.js", "FRONTIER_TOOL_RECORDS", "frontier-tool-expansion"],
    ["src/next-frontier-tool-expansion.js", "NEXT_FRONTIER_TOOL_RECORDS", "next-frontier-tool-expansion"],
    ["src/daily-dealings-programs.js", "DAILY_DEALINGS_PROGRAM_RECORDS", "daily-dealings-programs"],
    ["src/expansion-tools.js", "NEEDED_INHOUSE_TOOL_RECORDS", "needed-inhouse-support-tools"],
    ["src/expansion-tools.js", "POTENTIAL_APP_RECORDS", "potential-app-programs"],
    ["src/expansion-tools.js", "PRODUCTION_STREAM_ACTIVATION_RECORDS", "production-stream-packs"],
    ["src/scale-expansion.js", "SCALE_INHOUSE_TOOL_RECORDS", "scale-expansion-solo-tools"],
    ["src/scale-expansion.js", "SCALE_APP_PROGRAM_RECORDS", "scale-expansion-app-programs"],
    ["src/target-500k-expansion.js", "TARGET_500K_INHOUSE_TOOL_RECORDS", "target-500k-solo-tools"],
    ["src/target-500k-expansion.js", "TARGET_500K_APP_PROGRAM_RECORDS", "target-500k-app-programs"],
    ["src/space-studio.js", "SPACE_STUDIO_TOOLS", "space-studio-programs"],
    ["src/price-comparison-tool.js", "PRICE_TOOLS", "price-comparison-tools"],
    ["src/webcam-explorer.js", "WEBCAM_EXPLORER_TOOL", "webcam-explorer"],
    ["src/factchecker-tool.js", "FACTCHECKER_TOOL", "factchecker-tool"],
    ["src/theme-system.js", "THEME_STUDIO_TOOL", "theme-studio"],
    ["src/theme-system.js", "RGB_GENERATOR_TOOL", "rgb-generator"],
    ["src/rgb-motion-studio.js", "RGB_MOTION_STUDIO_TOOL", "rgb-motion-studio"],
    ["src/audio-visualizer-studio.js", "AUDIO_VISUALIZER_STUDIO_TOOL", "audio-visualizer-studio"]
  ];

  for (const [modulePath, exportName, family] of knownExports) {
    await addExportRecords(modulePath, exportName, family, writers);
  }
  await addSkeletonRows(writers);

  for (const modulePath of GENERIC_MODULE_SCAN) {
    await addGenericModuleRecords(modulePath, writers);
  }
  for (const modulePath of [...REQUIRED_MODULES, ...OPTIONAL_MODULES]) {
    if (!modules.has(modulePath)) await parseModuleSourceFallback(modulePath, writers);
  }
  for (const csvFile of CSV_SOURCE_FILES) await addCsvSource(csvFile, writers);
  await addTarget5mVirtualRows(writers);

  summary.top_100_categories = topEntries(categoryCounts);
  summary.top_100_domains = topEntries(domainCounts);
  summary.source_modules = sourceStatus;
  summary.modules_not_imported_or_parsed = sourceStatus
    .filter((item) => item.status !== "imported" && item.status !== "csv_parsed" && Number(item.records || 0) === 0)
    .map((item) => ({
      source_module: item.source_module,
      status: item.status,
      fallback: item.fallback,
      error: item.error || ""
    }));

  await writeSafe(json, writers.jsonHasRows ? "\n]\n" : "]\n");
  csv.end();
  json.end();
  await Promise.all([once(csv, "finish"), once(json, "finish")]);
  await writeFile(summaryPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");

  const topBuckets = Object.entries(summary.counts_by_pricing_bucket)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7)
    .map(([bucket, countValue]) => `${bucket}: ${countValue.toLocaleString()}`)
    .join(", ");
  const missing = summary.modules_not_imported_or_parsed
    .map((item) => `${item.source_module} (${item.status})`)
    .join("; ") || "None";

  console.log("Created pricing inventory files:");
  console.log(csvPath);
  console.log(jsonPath);
  console.log(summaryPath);
  console.log(`Total exported unique records: ${summary.unique_records.toLocaleString()}`);
  console.log(`Duplicates removed: ${summary.duplicates_removed.toLocaleString()}`);
  console.log(`Top pricing buckets: ${topBuckets}`);
  console.log(`Modules that could not be imported/parsed: ${missing}`);
}

await main();
