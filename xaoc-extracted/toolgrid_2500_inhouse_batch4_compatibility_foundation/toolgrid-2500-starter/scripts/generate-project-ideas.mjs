import { writeFileSync } from "node:fs";
import { tools } from "../src/tool-catalog.js";

const VERSION = "2026-06-13-10000-project-ideas-v1";

const rawFields = [
  "Retail & ecommerce", "Restaurant operations", "Food truck", "Coffee shop", "Bakery", "Catering", "Landscaping", "Lawn care", "Home cleaning", "HVAC", "Plumbing", "Electrical contracting", "Roofing", "Real estate agency", "Property management", "Interior design", "Fitness coaching", "Yoga studio", "Personal training", "Tutoring", "Online courses", "Daycare", "Healthcare office admin", "Dental office admin", "Wellness clinic", "Bookkeeping", "Tax prep", "Insurance agency", "Mortgage brokerage", "Legal admin", "Nonprofit fundraising", "Community organization", "Event planning", "Wedding services", "Photography studio", "Videography", "Podcasting", "YouTube channel", "Newsletter publisher", "Affiliate marketing", "Content agency", "SEO agency", "Web design agency", "SaaS startup", "Mobile app startup", "Freelance developer", "Cybersecurity consultant", "Data consulting", "IT helpdesk", "HR recruiting", "Staff scheduling", "Manufacturing", "Warehouse logistics", "Trucking", "Auto repair", "Car detailing", "Pet grooming", "Veterinary office", "Beauty salon", "Barber shop", "Spa", "Fashion brand", "Print shop", "Sign shop", "Farmers market vendor", "Nursery / garden center", "Urban farm", "Houseplant education", "Construction", "Architecture firm", "Engineering consulting", "Environmental consulting", "Travel agency", "Hotel / hostel", "Vacation rental", "Sports club", "Music school", "Artist studio", "Game studio", "Community forum", "Local government office", "Library", "Museum", "Personal productivity"
];

const fields = rawFields.slice(0, 80);

const families = [
  { id: "marketing", label: "marketing", engines: ["text_transform", "meta_length", "keyword_density", "utm_builder", "markdown_table", "encoder"] },
  { id: "sales", label: "sales", engines: ["csv_tool", "text_transform", "utm_builder", "percentage", "markdown_table", "encoder"] },
  { id: "support", label: "customer support", engines: ["text_stats", "text_transform", "markdown_table", "date_add", "csv_tool", "json_tool"] },
  { id: "operations", label: "operations", engines: ["date_add", "date_diff", "percentage", "csv_tool", "markdown_table", "text_transform"] },
  { id: "finance", label: "finance", engines: ["invoice_total", "percentage", "percent_change", "compound_interest", "loan_payment", "simple_formula"] },
  { id: "hr", label: "HR", engines: ["text_transform", "date_add", "date_diff", "csv_tool", "password_generator", "markdown_table"] },
  { id: "content", label: "content", engines: ["text_transform", "text_stats", "meta_length", "keyword_density", "markdown_table", "utm_builder"] },
  { id: "seo", label: "SEO", engines: ["meta_length", "keyword_density", "utm_builder", "encoder", "text_transform", "markdown_table"] },
  { id: "social", label: "social media", engines: ["text_transform", "meta_length", "keyword_density", "utm_builder", "encoder", "markdown_table"] },
  { id: "email", label: "email", engines: ["text_transform", "text_stats", "meta_length", "utm_builder", "encoder", "markdown_table"] },
  { id: "data", label: "data cleanup", engines: ["csv_tool", "json_tool", "markdown_table", "text_transform", "encoder", "uuid_generator"] },
  { id: "reporting", label: "reporting", engines: ["csv_tool", "markdown_table", "percentage", "percent_change", "text_transform", "date_add"] },
  { id: "compliance", label: "compliance", engines: ["text_stats", "text_transform", "date_diff", "date_add", "markdown_table", "json_tool"] },
  { id: "scheduling", label: "scheduling", engines: ["date_diff", "date_add", "unix_time", "markdown_table", "text_transform", "csv_tool"] },
  { id: "product", label: "product", engines: ["text_transform", "csv_tool", "markdown_table", "percentage", "percent_change", "json_tool"] },
  { id: "ux", label: "UX/UI", engines: ["color_convert", "contrast_ratio", "text_transform", "markdown_table", "meta_length", "keyword_density"] },
  { id: "web-launch", label: "web launch", engines: ["color_convert", "contrast_ratio", "meta_length", "keyword_density", "utm_builder", "json_tool"] },
  { id: "developer", label: "developer", engines: ["json_tool", "encoder", "uuid_generator", "password_generator", "csv_tool", "markdown_table"] },
  { id: "security", label: "security", engines: ["password_generator", "uuid_generator", "encoder", "json_tool", "text_transform", "markdown_table"] },
  { id: "training", label: "training", engines: ["text_transform", "markdown_table", "date_add", "date_diff", "csv_tool", "percentage"] },
  { id: "inventory", label: "inventory", engines: ["csv_tool", "percentage", "unit_convert", "markdown_table", "text_transform", "date_add"] },
  { id: "pricing", label: "pricing", engines: ["percent_change", "percentage", "invoice_total", "simple_formula", "compound_interest", "markdown_table"] },
  { id: "outreach", label: "outreach", engines: ["text_transform", "meta_length", "utm_builder", "encoder", "keyword_density", "markdown_table"] },
  { id: "research", label: "research", engines: ["text_stats", "keyword_density", "markdown_table", "csv_tool", "json_tool", "text_transform"] },
  { id: "project-management", label: "project management", engines: ["date_add", "date_diff", "text_transform", "markdown_table", "csv_tool", "percentage"] }
];

const outcomeKinds = [
  { id: "intake-to-output", label: "intake-to-output workflow", action: "turn raw input into a ready-to-use output" },
  { id: "audit", label: "audit workflow", action: "audit the current state and create a prioritized fix list" },
  { id: "campaign", label: "campaign workflow", action: "prepare a launch campaign with trackable outputs" },
  { id: "daily-checklist", label: "daily checklist workflow", action: "create a repeatable daily operating checklist" },
  { id: "decision-report", label: "decision report workflow", action: "produce a decision-ready report with supporting calculations" }
];

const engineRole = {
  text_transform: "rewrite, summarize, clean, or format the shared text payload",
  text_stats: "measure the payload and expose readability-style text statistics",
  list_transform: "normalize lists and turn messy notes into structured items",
  meta_length: "check title and description length for web publishing",
  keyword_density: "extract keyword usage from project text",
  utm_builder: "create trackable campaign URLs",
  encoder: "encode or decode URLs, Base64, or HTML-safe text",
  csv_tool: "convert CSV, inspect tabular rows, or prepare structured data",
  json_tool: "format, validate, or extract useful keys from JSON",
  markdown_table: "turn data into a readable Markdown table",
  percentage: "calculate a share, discount, or completion rate",
  percent_change: "compare before/after values",
  invoice_total: "calculate invoice totals from line-item assumptions",
  compound_interest: "model long-term growth or recurring gains",
  loan_payment: "estimate payment obligations",
  simple_formula: "run a lightweight business formula",
  date_add: "project deadlines and future dates",
  date_diff: "measure durations between dates",
  unix_time: "convert or stamp time values",
  color_convert: "convert brand colors and palette values",
  contrast_ratio: "check readability and accessibility contrast",
  password_generator: "create secure passwords for the project",
  uuid_generator: "create unique IDs for assets, records, or tasks",
  unit_convert: "convert operational measurements",
  plant_spacing: "calculate planting or display spacing",
  soil_mix: "plan a soil/media mix",
  recipe_scale: "scale recipes or ingredient lists",
  random_number: "generate randomized sample values"
};

const byEngine = new Map();
const byCategory = new Map();
for (const tool of tools) {
  if (!byEngine.has(tool.engine)) byEngine.set(tool.engine, []);
  byEngine.get(tool.engine).push(tool);
  if (!byCategory.has(tool.category)) byCategory.set(tool.category, []);
  byCategory.get(tool.category).push(tool);
}
for (const values of byEngine.values()) values.sort((a, b) => a.id.localeCompare(b.id));
for (const values of byCategory.values()) values.sort((a, b) => a.id.localeCompare(b.id));

function slug(value) {
  return String(value).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function chooseTool(engine, seed, used = new Set()) {
  const pool = byEngine.get(engine) || tools;
  for (let offset = 0; offset < pool.length; offset += 1) {
    const tool = pool[(seed + offset) % pool.length];
    if (!used.has(tool.id)) {
      used.add(tool.id);
      return tool;
    }
  }
  const fallback = pool[seed % pool.length];
  used.add(fallback.id);
  return fallback;
}

function complexityFor(seed) {
  if (seed % 10 === 0) return { id: "nested-64", label: "64-tool nested waterfall", layout: "4x4", panels: 16, nestedPerPanel: 4, executionMode: "nested-waterfall", targetTools: 64 };
  if (seed % 5 === 0) return { id: "advanced-32", label: "32-tool nested workbench", layout: "4x4", panels: 16, nestedPerPanel: 2, executionMode: "hybrid-waterfall", targetTools: 32 };
  if (seed % 3 === 0) return { id: "standard-16", label: "16-panel workflow", layout: "4x4", panels: 16, nestedPerPanel: 1, executionMode: "waterfall", targetTools: 16 };
  if (seed % 2 === 0) return { id: "mid-8", label: "8-panel workflow", layout: seed % 4 === 0 ? "4x2" : "2x4", panels: 8, nestedPerPanel: 1, executionMode: "hybrid", targetTools: 8 };
  return { id: "micro-2-4", label: "micro workflow", layout: seed % 4 === 1 ? "1x1" : "2x1", panels: seed % 4 === 1 ? 1 : 2, nestedPerPanel: seed % 4 === 1 ? 3 : 2, executionMode: "compact-waterfall", targetTools: seed % 4 === 1 ? 3 : 4 };
}

function sequenceFor(family, fieldIndex, archetypeIndex, targetTools) {
  const used = new Set();
  const ids = [];
  for (let i = 0; i < targetTools; i += 1) {
    const engine = family.engines[(fieldIndex + archetypeIndex + i) % family.engines.length];
    const tool = chooseTool(engine, fieldIndex * 719 + archetypeIndex * 997 + i * 37, used);
    ids.push(tool.id);
  }
  return ids;
}

function makePanels(toolIds, complexity, family) {
  const panels = [];
  let cursor = 0;
  for (let panel = 0; panel < complexity.panels; panel += 1) {
    const panelTools = [];
    for (let nested = 0; nested < complexity.nestedPerPanel && cursor < toolIds.length; nested += 1) {
      const toolId = toolIds[cursor];
      const tool = tools.find((candidate) => candidate.id === toolId);
      panelTools.push({
        order: cursor + 1,
        toolId,
        role: engineRole[tool?.engine] || `handle a ${family.label} subtask`,
        uiDepth: complexity.nestedPerPanel > 1 ? nested + 1 : 1
      });
      cursor += 1;
    }
    if (panelTools.length) {
      panels.push({
        panelIndex: panel,
        uiTitle: `${family.label[0].toUpperCase()}${family.label.slice(1)} node ${panel + 1}`,
        mode: panel === 0 ? "intake" : "waterfall",
        tools: panelTools
      });
    }
  }
  return panels;
}

const groups = [];
for (let familyIndex = 0; familyIndex < families.length; familyIndex += 1) {
  const family = families[familyIndex];
  for (let outcomeIndex = 0; outcomeIndex < outcomeKinds.length; outcomeIndex += 1) {
    const outcome = outcomeKinds[outcomeIndex];
    const used = new Set();
    const sampleToolIds = [];
    for (let i = 0; i < 16; i += 1) {
      const engine = family.engines[(i + outcomeIndex) % family.engines.length];
      sampleToolIds.push(chooseTool(engine, familyIndex * 271 + outcomeIndex * 83 + i * 17, used).id);
    }
    groups.push({
      id: `group-${family.id}-${outcome.id}`,
      name: `${family.label[0].toUpperCase()}${family.label.slice(1)} ${outcome.label}`,
      purpose: `A reusable group for ${family.label} projects that ${outcome.action}. Compatible tools pass text, data, URLs, numbers, dates, or reports through the project bus.`,
      familyId: family.id,
      outcomeId: outcome.id,
      compatibleEngines: family.engines,
      sampleToolIds,
      executionModes: ["simultaneous", "waterfall", "nested-waterfall"],
      fieldHints: fields.filter((_, fieldIndex) => (fieldIndex + familyIndex + outcomeIndex) % 7 === 0).slice(0, 10)
    });
  }
}

const templates = [];
for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex += 1) {
  const field = fields[fieldIndex];
  for (let archetypeIndex = 0; archetypeIndex < 125; archetypeIndex += 1) {
    const family = families[archetypeIndex % families.length];
    const outcome = outcomeKinds[Math.floor(archetypeIndex / families.length) % outcomeKinds.length];
    const seed = fieldIndex * 125 + archetypeIndex + 1;
    const complexity = complexityFor(seed);
    const toolIds = sequenceFor(family, fieldIndex, archetypeIndex, complexity.targetTools);
    const panels = makePanels(toolIds, complexity, family);
    const title = `${field} ${family.label} ${outcome.label}`;
    templates.push({
      id: `project-${slug(field)}-${family.id}-${outcome.id}-${String(archetypeIndex + 1).padStart(3, "0")}`,
      title,
      field,
      businessFunction: family.label,
      groupId: `group-${family.id}-${outcome.id}`,
      outcome: `Use compatible ${family.label} tools to ${outcome.action} for ${field}.`,
      prompt: `Build a ${complexity.label} for ${field}: ${outcome.action} using ${family.label} tools, linked project data, and a visible completion trail.`,
      inputHint: `Paste ${field} notes, URLs, table data, numbers, dates, or campaign copy. The project bus will route it through the compatible ${family.label} chain.`,
      complexity: complexity.id,
      layout: complexity.layout,
      executionMode: complexity.executionMode,
      toolCount: toolIds.length,
      panelCount: panels.length,
      maxNestedUiDepth: complexity.nestedPerPanel,
      tags: [slug(field), family.id, outcome.id, complexity.id],
      compatibilitySummary: `${toolIds.length} tools arranged as ${panels.length} panel UI${panels.length === 1 ? "" : "s"}; outputs are designed to move through text/data/url/number/date-compatible steps.`,
      panels
    });
  }
}

const fieldCounts = Object.fromEntries(fields.map((field) => [field, templates.filter((template) => template.field === field).length]));
const complexityCounts = templates.reduce((acc, template) => {
  acc[template.complexity] = (acc[template.complexity] || 0) + 1;
  return acc;
}, {});

const output = `// Auto-generated project ideas and compatibility groups. Do not hand-edit generated records; update scripts/generate-project-ideas.mjs instead.\nexport const PROJECT_TEMPLATE_VERSION = ${JSON.stringify(VERSION)};\nexport const PROJECT_IDEA_COUNT = ${templates.length};\nexport const PROJECT_FIELDS = ${JSON.stringify(fields)};\nexport const PROJECT_FIELD_COUNTS = ${JSON.stringify(fieldCounts)};\nexport const PROJECT_COMPLEXITY_COUNTS = ${JSON.stringify(complexityCounts)};\nexport const PROJECT_TOOL_GROUPS = ${JSON.stringify(groups, null, 2)};\nexport const PROJECT_TEMPLATES = ${JSON.stringify(templates, null, 2)};\n\nconst normalizeProjectText = (value) => String(value || \"\").toLowerCase();\n\nexport function getProjectTemplateById(id) {\n  return PROJECT_TEMPLATES.find((template) => template.id === id) || null;\n}\n\nexport function scoreProjectTemplate(template, query) {\n  const clean = normalizeProjectText(query);\n  if (!clean) return 1;\n  const haystack = normalizeProjectText([\n    template.title,\n    template.field,\n    template.businessFunction,\n    template.outcome,\n    template.prompt,\n    template.complexity,\n    template.executionMode,\n    ...(template.tags || [])\n  ].join(\" \"));\n  let score = 0;\n  if (normalizeProjectText(template.title).includes(clean)) score += 80;\n  if (normalizeProjectText(template.field).includes(clean)) score += 40;\n  if (normalizeProjectText(template.businessFunction).includes(clean)) score += 30;\n  for (const token of clean.split(/\\s+/).filter(Boolean)) {\n    if (haystack.includes(token)) score += token.length > 4 ? 8 : 4;\n  }\n  return score;\n}\n\nexport function searchProjectTemplates(query = \"\", options = {}) {\n  const { limit = 50, field = \"All\", complexity = \"All\" } = options;\n  return PROJECT_TEMPLATES\n    .map((template) => ({ template, score: scoreProjectTemplate(template, query) }))\n    .filter(({ template, score }) => score > 0 && (field === \"All\" || template.field === field) && (complexity === \"All\" || template.complexity === complexity))\n    .sort((a, b) => b.score - a.score || a.template.title.localeCompare(b.template.title))\n    .slice(0, limit)\n    .map(({ template }) => template);\n}\n\nexport function pickProjectTemplateForPrompt(prompt = \"\") {\n  return searchProjectTemplates(prompt, { limit: 1 })[0] || PROJECT_TEMPLATES[0];\n}\n`;

writeFileSync(new URL("../src/project-templates.js", import.meta.url), output);
console.log(`Generated ${templates.length} project templates, ${groups.length} groups, version ${VERSION}.`);
