import { compilePromptToSearchPlan, scoreToolAgainstCompiledPrompt } from "./prompt-compiler.js";

export const FILE_TRANSLATOR_VERSION = "2026-06-13-file-translator-foundation-v1";
export const MAX_FILE_TEXT_PREVIEW = 120000;

const textExtensions = new Set([
  "txt", "md", "markdown", "csv", "tsv", "json", "jsonl", "xml", "html", "htm", "css", "js", "mjs", "cjs", "ts", "tsx", "jsx", "py", "sql", "log", "yaml", "yml", "svg", "rtf"
]);

const spreadsheetExtensions = new Set(["csv", "tsv", "xls", "xlsx", "ods", "numbers"]);
const documentExtensions = new Set(["pdf", "doc", "docx", "odt", "rtf", "txt", "md", "markdown"]);
const imageExtensions = new Set(["png", "jpg", "jpeg", "webp", "gif", "svg", "bmp", "tiff", "heic"]);
const dataExtensions = new Set(["json", "jsonl", "xml", "yaml", "yml", "csv", "tsv"]);
const codeExtensions = new Set(["js", "mjs", "cjs", "ts", "tsx", "jsx", "py", "sql", "css", "html", "htm", "java", "go", "rs", "php", "rb", "cs", "cpp", "c", "h"]);

const engineExplanations = {
  text_stats: "Counts words, characters, sentences, and reading details so you can understand a piece of text quickly.",
  text_transform: "Changes text into a cleaner format, such as uppercase, lowercase, title case, or a URL-friendly slug.",
  list_transform: "Cleans and reorganizes lists, such as sorting lines, removing duplicates, or trimming messy entries.",
  encoder: "Turns text into encoded formats or decodes encoded text for safe copying, sharing, or technical work.",
  json_tool: "Formats, checks, or converts JSON data so it is easier to read and use.",
  csv_tool: "Works with CSV table files by converting, cleaning, or turning rows into structured data.",
  unit_convert: "Converts one measurement unit into another, such as inches to centimeters or pounds to kilograms.",
  percentage: "Finds what percent one number is of another number.",
  percent_change: "Shows how much a number increased or decreased as a percentage.",
  tip_calculator: "Calculates tip, total bill, and split cost for a payment.",
  loan_payment: "Estimates a monthly loan payment from amount, interest rate, and loan length.",
  compound_interest: "Projects how money grows over time with interest and optional monthly additions.",
  date_diff: "Counts the time between two dates.",
  date_add: "Adds days, weeks, or months to a date to help build schedules and deadlines.",
  unix_time: "Converts computer timestamps into readable dates or readable dates into timestamps.",
  random_number: "Creates random numbers within a range.",
  password_generator: "Creates strong random passwords.",
  uuid_generator: "Creates unique ID codes for labels, records, batches, or technical systems.",
  color_convert: "Converts color values between common formats like HEX and RGB.",
  contrast_ratio: "Checks whether two colors have enough contrast to be readable.",
  utm_builder: "Builds campaign tracking links for marketing and analytics.",
  meta_length: "Checks title and description length for search engines or social previews.",
  keyword_density: "Counts how often a word or phrase appears in text.",
  markdown_table: "Turns rows of text or CSV-style data into a clean Markdown table.",
  plant_spacing: "Calculates how many plants fit in a growing area based on spacing.",
  soil_mix: "Splits a total soil or substrate amount into ingredient parts.",
  recipe_scale: "Scales an ingredient amount up or down for a different batch size.",
  invoice_total: "Calculates invoice totals with tax, discounts, and shipping.",
  simple_formula: "Runs a simple common formula, such as area or volume."
};

const fileKindRules = {
  document: {
    label: "Document",
    simpleNeed: "read, summarize, clean, reformat, or turn document text into useful outputs",
    terms: ["document upload", "documentation", "text extraction", "summary", "clean text", "report builder", "document review"],
    categories: ["Text", "Data", "SEO & Marketing", "Business"],
    engines: ["text_stats", "text_transform", "list_transform", "markdown_table", "keyword_density", "meta_length"]
  },
  pdf: {
    label: "PDF document",
    simpleNeed: "inspect the file, pull useful text when possible, summarize, label, or route it to document tools",
    terms: ["pdf", "document upload", "document review", "text extraction", "summary", "file notes", "report builder"],
    categories: ["Text", "Data", "Business", "Converters"],
    engines: ["text_stats", "text_transform", "list_transform", "markdown_table", "encoder"]
  },
  spreadsheet: {
    label: "Spreadsheet or table",
    simpleNeed: "clean rows, convert tables, calculate totals, and create reports from table data",
    terms: ["spreadsheet", "CSV tools", "table cleanup", "data conversion", "report table", "calculate totals"],
    categories: ["Data", "Calculators", "Business", "Developer"],
    engines: ["csv_tool", "json_tool", "markdown_table", "invoice_total", "percentage", "percent_change", "simple_formula"]
  },
  data: {
    label: "Structured data",
    simpleNeed: "format, validate, convert, or summarize structured data",
    terms: ["structured data", "JSON tools", "CSV tools", "data conversion", "table generator", "developer tools"],
    categories: ["Data", "Developer", "Text"],
    engines: ["json_tool", "csv_tool", "markdown_table", "text_transform", "encoder"]
  },
  image: {
    label: "Image",
    simpleNeed: "name, tag, describe, organize, or create supporting text for image files",
    terms: ["image file", "alt text", "image tags", "file label", "batch naming", "color tools"],
    categories: ["Text", "Color", "Generators", "SEO & Marketing"],
    engines: ["text_transform", "list_transform", "uuid_generator", "color_convert", "contrast_ratio", "meta_length"]
  },
  code: {
    label: "Code or technical file",
    simpleNeed: "format, inspect, convert, document, or encode technical text",
    terms: ["code file", "developer tools", "documentation", "JSON tools", "formatter", "technical notes"],
    categories: ["Developer", "Data", "Text"],
    engines: ["json_tool", "text_transform", "list_transform", "encoder", "markdown_table"]
  },
  archive: {
    label: "Archive",
    simpleNeed: "organize the file package, name files, and plan follow-up tools after extraction",
    terms: ["archive", "file package", "batch files", "file organization", "documentation"],
    categories: ["Text", "Data", "Generators"],
    engines: ["list_transform", "text_transform", "uuid_generator", "markdown_table"]
  },
  unknown: {
    label: "General file",
    simpleNeed: "identify the file and route it to the safest matching tools",
    terms: ["file upload", "file review", "documentation", "tool selector", "workflow"],
    categories: ["Text", "Data", "Converters"],
    engines: ["text_stats", "text_transform", "list_transform", "markdown_table"]
  }
};

function unique(values) {
  const seen = new Set();
  const output = [];
  for (const value of values.flat().map((item) => String(item || "").trim()).filter(Boolean)) {
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(value);
  }
  return output;
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function fileExtension(name) {
  const clean = String(name || "").toLowerCase();
  const dot = clean.lastIndexOf(".");
  return dot >= 0 ? clean.slice(dot + 1) : "";
}

function sizeLabel(bytes) {
  const value = Number(bytes || 0);
  if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(2)} MB`;
  if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${value} B`;
}

function isTextReadable({ type, extension }) {
  const mime = normalize(type);
  return mime.startsWith("text/") || textExtensions.has(extension) || mime.includes("json") || mime.includes("xml") || mime.includes("javascript") || mime.includes("csv");
}

export function classifyUploadedFile(fileLike) {
  const name = fileLike?.name || "unnamed-file";
  const type = fileLike?.type || "";
  const extension = fileExtension(name);
  const mime = normalize(type);

  if (extension === "pdf" || mime.includes("pdf")) return "pdf";
  if (spreadsheetExtensions.has(extension) || mime.includes("spreadsheet") || mime.includes("excel") || mime.includes("csv")) return "spreadsheet";
  if (imageExtensions.has(extension) || mime.startsWith("image/")) return "image";
  if (codeExtensions.has(extension)) return "code";
  if (dataExtensions.has(extension) || mime.includes("json") || mime.includes("xml") || mime.includes("yaml")) return "data";
  if (["zip", "rar", "7z", "tar", "gz"].includes(extension) || mime.includes("zip") || mime.includes("compressed")) return "archive";
  if (documentExtensions.has(extension) || mime.includes("document") || mime.includes("word") || mime.includes("rtf")) return "document";
  return "unknown";
}

export async function readUploadedFiles(fileList) {
  const files = Array.from(fileList || []);
  const descriptors = [];
  for (const file of files) {
    const extension = fileExtension(file.name);
    const kind = classifyUploadedFile(file);
    let textPreview = "";
    let status = "metadata-only";
    if (isTextReadable({ type: file.type, extension }) && typeof file.text === "function") {
      try {
        const text = await file.text();
        textPreview = String(text || "").slice(0, MAX_FILE_TEXT_PREVIEW);
        status = "text-readable";
      } catch {
        status = "metadata-only";
      }
    }

    descriptors.push({
      id: `${Date.now().toString(36)}-${descriptors.length + 1}-${Math.random().toString(36).slice(2, 8)}`,
      name: file.name || `File ${descriptors.length + 1}`,
      extension,
      type: file.type || "unknown",
      kind,
      kindLabel: fileKindRules[kind]?.label || fileKindRules.unknown.label,
      size: Number(file.size || textPreview.length || 0),
      sizeLabel: sizeLabel(file.size || textPreview.length || 0),
      lastModified: file.lastModified || null,
      textPreview,
      lineCount: textPreview ? textPreview.split(/\r?\n/).length : 0,
      wordCount: textPreview ? textPreview.trim().split(/\s+/).filter(Boolean).length : 0,
      status
    });
  }
  return descriptors;
}

function extractPromptFromFiles(files) {
  return files
    .map((file) => `${file.kindLabel}: ${file.name}\n${file.textPreview || ""}`)
    .join("\n\n")
    .slice(0, MAX_FILE_TEXT_PREVIEW);
}

function fileRequirementSummary(files) {
  const kinds = unique(files.map((file) => file.kind));
  const terms = unique(kinds.flatMap((kind) => fileKindRules[kind]?.terms || fileKindRules.unknown.terms));
  const categories = unique(kinds.flatMap((kind) => fileKindRules[kind]?.categories || fileKindRules.unknown.categories));
  const engines = unique(kinds.flatMap((kind) => fileKindRules[kind]?.engines || fileKindRules.unknown.engines));
  const needs = kinds.map((kind) => `${fileKindRules[kind]?.label || "File"}: ${fileKindRules[kind]?.simpleNeed || fileKindRules.unknown.simpleNeed}`);
  return { kinds, terms, categories, engines, needs };
}

function scoreToolForFiles(tool, requirement, compiled) {
  const haystack = normalize(`${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${tool.engine} ${JSON.stringify(tool.config || {})}`);
  let score = scoreToolAgainstCompiledPrompt(tool, compiled);
  if (requirement.categories.includes(tool.category)) score += 28;
  if (requirement.engines.includes(tool.engine)) score += 34;
  for (const term of requirement.terms) {
    const lowered = normalize(term);
    if (haystack.includes(lowered)) score += 14;
    for (const token of lowered.split(/\s+/)) {
      if (token.length >= 4 && haystack.includes(token)) score += 3;
    }
  }
  if (tool.engine === "text_stats" && requirement.kinds.some((kind) => ["document", "pdf"].includes(kind))) score += 35;
  if (tool.engine === "csv_tool" && requirement.kinds.includes("spreadsheet")) score += 60;
  if (tool.engine === "json_tool" && requirement.kinds.includes("data")) score += 55;
  if (tool.engine === "markdown_table" && requirement.kinds.some((kind) => ["spreadsheet", "data", "document", "pdf"].includes(kind))) score += 40;
  if (tool.engine === "uuid_generator" && requirement.kinds.some((kind) => ["image", "archive"].includes(kind))) score += 25;
  return score;
}

export function getSimpleToolExplanation(tool) {
  const base = engineExplanations[tool?.engine] || "Helps complete one step in a larger project workflow.";
  const purpose = tool?.description ? String(tool.description).replace(/\.$/, "") : tool?.name || "This tool";
  const tags = Array.isArray(tool?.tags) && tool.tags.length ? ` Common uses: ${tool.tags.slice(0, 4).join(", ")}.` : "";
  return `${purpose}. In simple terms: ${base}${tags}`;
}

export function analyzeFilePackage({ prompt = "", files = [], tools = [], limit = 16 } = {}) {
  const safeFiles = Array.isArray(files) ? files : [];
  const requirement = fileRequirementSummary(safeFiles);
  const fileText = extractPromptFromFiles(safeFiles);
  const compiledPrompt = compilePromptToSearchPlan(`${prompt}\n\nUploaded files:\n${requirement.terms.join(", ")}\n${fileText}`.trim());
  const ranked = tools
    .map((tool) => ({
      tool,
      score: scoreToolForFiles(tool, requirement, compiledPrompt),
      explanation: getSimpleToolExplanation(tool)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .slice(0, limit)
    .map((item, index) => ({
      rank: index + 1,
      toolId: item.tool.id,
      name: item.tool.name,
      category: item.tool.category,
      engine: item.tool.engine,
      score: item.score,
      reason: buildRecommendationReason(item.tool, requirement, compiledPrompt),
      explanation: item.explanation
    }));

  const searchTerms = unique([
    ...requirement.terms,
    ...compiledPrompt.globalSearchTerms,
    ...safeFiles.map((file) => file.kindLabel),
    ...safeFiles.map((file) => file.extension).filter(Boolean)
  ]).slice(0, 36);

  return {
    version: FILE_TRANSLATOR_VERSION,
    fileCount: safeFiles.length,
    files: safeFiles,
    prompt,
    requirement,
    compiledPrompt,
    searchTerms,
    recommendations: ranked,
    summary: safeFiles.length
      ? `${safeFiles.length} file${safeFiles.length === 1 ? "" : "s"} translated into ${requirement.terms.length} search term${requirement.terms.length === 1 ? "" : "s"} and ${ranked.length} recommended tool${ranked.length === 1 ? "" : "s"}.`
      : "No files uploaded yet."
  };
}

function buildRecommendationReason(tool, requirement, compiled) {
  const reasons = [];
  if (requirement.categories.includes(tool.category)) reasons.push(`matches ${tool.category.toLowerCase()} file needs`);
  if (requirement.engines.includes(tool.engine)) reasons.push("has the right tool function for this file type");
  const matchedTerm = requirement.terms.find((term) => normalize(`${tool.name} ${tool.description} ${(tool.tags || []).join(" ")}`).includes(normalize(term).split(/\s+/)[0] || ""));
  if (matchedTerm) reasons.push(`relates to “${matchedTerm}”`);
  if (compiled.primaryDomain) reasons.push(`fits the ${compiled.primaryDomain.toLowerCase()} prompt`);
  return reasons.slice(0, 3).join(" · ") || "recommended by the file translator";
}

export function summarizeFileListForProjectInput({ prompt = "", files = [], analysis = null } = {}) {
  const fileLines = files.map((file, index) => {
    const preview = file.textPreview ? `\nPreview:\n${file.textPreview.slice(0, 1800)}` : "\nPreview: File content is binary or metadata-only, so route by file type and name.";
    return `File ${index + 1}: ${file.name}\nType: ${file.kindLabel} (${file.type}, ${file.sizeLabel})\nStatus: ${file.status}${preview}`;
  });
  const terms = analysis?.searchTerms?.length ? `\nSuggested search terms: ${analysis.searchTerms.slice(0, 20).join(", ")}` : "";
  return `Prompt:\n${prompt || "No prompt entered."}\n\nUploaded file package:\n${fileLines.join("\n\n")}\n${terms}`.trim();
}
