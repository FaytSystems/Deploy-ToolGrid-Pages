import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";

import { tools } from "../src/tool-catalog.js";
import { buildDirectAnswerFoundation } from "../src/direct-answer-engine.js";
import { buildWaterfallQueueFromPlan } from "../src/guided-project-orchestrator.js";
import {
  buildInputsFromPayload,
  generateAiProjectPlan,
  getToolIO
} from "../src/project-foundation.js";
import { getDefaultInputs, runTool } from "../src/tool-engines.js";

const OUTPUT_DIR = path.resolve("exports", "audits", "site-mechanics");
const DEFAULT_PROMPTS = 10000;

const BLOCKED_PATTERNS = [
  /recommended workflow/i,
  /ready handoff/i,
  /completed cells/i,
  /current in-house tools wired/i,
  /free tools are better/i,
  /free tools save time/i,
  /skeleton tool:/i,
  /general workflow step/i,
  /tool output/i,
  /scale factor:\s*\d/i
];

const DOMAIN_RULES = {
  recipe: {
    minWords: 90,
    required: [/ingredient|amount|serving|batch|recipe/i, /\d/],
    generic: [/scale the recipe by/i]
  },
  construction: {
    minWords: 140,
    required: [/material|cut|measurement|dimension|lumber|screw|panel/i, /\d/],
    generic: []
  },
  "egg-flock": {
    minWords: 120,
    required: [/hens?|breed|eggs per week|flock/i, /\d/],
    generic: []
  },
  money: {
    minWords: 60,
    required: [/\$|percent|%|payment|total|interest|tax|discount|price/i, /\d/],
    generic: [/calculation setup/i]
  },
  converter: {
    minWords: 35,
    required: [/convert|conversion|result|unit|from|to|=/i, /\d/],
    generic: []
  },
  date: {
    minWords: 25,
    required: [/date|days?|weeks?|timestamp|utc|result|between|plus/i, /\d/],
    generic: []
  },
  investment: {
    minWords: 180,
    required: [/diversified|portfolio|risk|cash|bonds?|index|planner/i, /\$|\d/],
    generic: []
  },
  expense: {
    minWords: 80,
    required: [/category|budget|actual|expense|tracker/i],
    generic: []
  },
  data: {
    minWords: 90,
    required: [/table|rows?|columns?|csv|json|output|duplicates?|missing/i],
    generic: []
  },
  content: {
    minWords: 110,
    required: [/draft|subject|post|cta|copy|message|quality/i],
    generic: []
  },
  developer: {
    minWords: 25,
    required: [/json|url|base64|uuid|password|encoded|decoded|output|steps/i],
    generic: [/utility plan/i]
  },
  media: {
    minWords: 110,
    required: [/creative|export|format|settings|quality|visual|motion|asset/i],
    generic: []
  },
  research: {
    minWords: 120,
    required: [/source|evidence|citation|verify|confirmed|claim/i],
    generic: []
  },
  comparison: {
    minWords: 90,
    required: [/option|recommendation|risk|decision/i],
    generic: [/use this comparison structure/i]
  },
  space: {
    minWords: 90,
    required: [/dimensions?|room|placement|model|3d|layout|scale/i],
    generic: []
  },
  gardening: {
    minWords: 70,
    required: [/plant|spacing|soil|bed|compost|water/i, /\d/],
    generic: []
  },
  operations: {
    minWords: 100,
    required: [/schedule|checklist|steps?|owner|deadline|risk|next action/i],
    generic: []
  },
  fallback: {
    minWords: 90,
    required: [/summary|steps?|assumptions?|next action|checks?/i],
    generic: [/what i can build from this prompt/i]
  }
};

const BLUEPRINTS = [
  {
    id: "recipe-batch",
    expectedMode: "recipe",
    subjects: ["breakfast burritos", "banana nut breads", "blueberry muffins", "pancakes", "chili servings", "chicken soup quarts", "pasta salad trays"],
    templates: [
      (n, subject) => `how much of each ingredient is needed to make ${n} ${subject}`,
      (n, subject) => `scale this recipe for ${n} ${subject} with exact ingredient amounts and prep notes`,
      (n, subject) => `make a shopping list and batch plan for ${n} ${subject}`
    ]
  },
  {
    id: "construction-materials",
    expectedMode: "construction",
    subjects: ["10 foot by 10 foot room with a 36 inch door", "8 chicken coop", "12 foot workbench", "10 by 12 storage shed", "20 foot privacy fence"],
    templates: [
      (_n, subject) => `give me blueprint style plans with material list and cut measurements for a ${subject}`,
      (_n, subject) => `how many boards, panels, screws, and cuts are needed to build a ${subject}`,
      (_n, subject) => `make a contractor-ready build sheet for a ${subject}`
    ]
  },
  {
    id: "egg-flock",
    expectedMode: "egg-flock",
    subjects: ["eggs a week", "eggs per month", "eggs weekly"],
    templates: [
      (n, subject) => `how many chickens do i need if i want ${n} ${subject} and what breeds get along`,
      (n, subject) => `plan a backyard flock for ${n} ${subject} with breed mix and coop notes`
    ]
  },
  {
    id: "money-calculation",
    expectedMode: "money",
    subjects: ["loan payment", "invoice total", "tip split", "markup price", "discounted price", "monthly budget"],
    templates: [
      (n, subject) => `calculate ${subject} for ${n} dollars at 6.5 percent with a clear breakdown`,
      (n, subject) => `show the math for ${subject} using ${n} dollars, tax 7 percent, discount 10 percent`
    ]
  },
  {
    id: "investment",
    expectedMode: "investment",
    subjects: ["best investments", "retirement portfolio", "safe income portfolio", "growth portfolio"],
    templates: [
      (n, subject) => `if i had ${n} dollars what are the ${subject} and how should it be allocated`,
      (n, subject) => `make a practical investment framework for ${n} dollars focused on ${subject}`
    ]
  },
  {
    id: "expense-file",
    expectedMode: "file",
    subjects: ["monthly expenses", "rental property expenses", "small business expenses", "family budget"],
    templates: [
      (_n, subject) => `need a file made that will be used to keep track of ${subject}`,
      (_n, subject) => `build a CSV tracker for ${subject} with category budget and actual amount columns`
    ]
  },
  {
    id: "data-cleanup",
    expectedMode: "data",
    subjects: ["customer csv", "vendor table", "inventory spreadsheet", "sales rows", "expense export"],
    templates: [
      (_n, subject) => `clean a ${subject} with columns date, vendor, category, amount, notes remove duplicates and flag missing amounts`,
      (_n, subject) => `convert this ${subject} to a clean table and show the rows that need review`
    ]
  },
  {
    id: "content-marketing",
    expectedMode: "content",
    subjects: ["weekend candle sale", "lawn care follow up", "new bakery pickup menu", "contractor estimate reminder", "farmers market booth"],
    templates: [
      (_n, subject) => `write a friendly email and social post for ${subject} with subject line and CTA`,
      (_n, subject) => `create a content pack for ${subject} with email draft, social post, and quality checks`
    ]
  },
  {
    id: "developer",
    expectedMode: "developer",
    subjects: ["hello world & prices", "customer name=Sam & total=42", "{\"name\":\"ToolGrid\",\"ready\":true}", "free tools workspace"],
    templates: [
      (_n, subject) => `url encode "${subject}"`,
      (_n, subject) => `format or validate this developer input: ${subject}`,
      (_n, subject) => `create a slug, uuid, and safe output note for ${subject}`
    ]
  },
  {
    id: "media-design",
    expectedMode: "media",
    subjects: ["RGB motion logo visualizer", "neon cyan and magenta theme", "audio visualizer", "brand image pack", "short MP4 clip"],
    templates: [
      (_n, subject) => `create an ${subject} and export as MP4 with quality checks`,
      (_n, subject) => `make production settings for a ${subject} with variations and download formats`
    ]
  },
  {
    id: "research",
    expectedMode: "research",
    subjects: ["quote", "pricing claim", "product safety claim", "historical statement", "source list"],
    templates: [
      (_n, subject) => `verify this ${subject} and provide source evidence and citation notes`,
      (_n, subject) => `make an evidence table for this ${subject} with confirmed facts and open questions`
    ]
  },
  {
    id: "comparison",
    expectedMode: "comparison",
    subjects: ["buying a used truck versus leasing", "Shopify versus Etsy", "electric mower versus gas mower", "two logo directions", "three project plans"],
    templates: [
      (_n, subject) => `compare ${subject} and recommend the best option with risks`,
      (_n, subject) => `which should i choose for ${subject}, include decision criteria`
    ]
  },
  {
    id: "space",
    expectedMode: "space",
    subjects: ["living room furniture layout", "contractor kitchen remodel", "product see in your space model", "CAD display room", "garage storage layout"],
    templates: [
      (_n, subject) => `build a 3D space plan for ${subject} with dimensions and object placement`,
      (_n, subject) => `take an image and generate a 3D model plan for ${subject}`
    ]
  },
  {
    id: "gardening",
    expectedMode: "gardening",
    subjects: ["tomato plants", "pepper plants", "lettuce rows", "strawberry plants", "herb garden"],
    templates: [
      (n, subject) => `how many ${subject} fit in a 4 by 8 foot garden bed at ${n} inch spacing`,
      (n, subject) => `make a planting plan for ${subject} with ${n} inch spacing and soil notes`
    ]
  },
  {
    id: "operations",
    expectedMode: "operations",
    subjects: ["moving out by August 1", "launching a weekend market booth", "cleaning a workshop", "client onboarding", "monthly bookkeeping close"],
    templates: [
      (n, subject) => `build a checklist and schedule for ${subject} with a ${n} dollar budget`,
      (n, subject) => `make an operations workflow for ${subject} with owner, timing, risks, and next actions`
    ]
  }
];

const NUMBER_POOL = [8, 10, 12, 16, 18, 24, 30, 36, 40, 50, 64, 75, 100, 250, 500, 1000, 10000, 250000, 1000000];

function parseArgs(argv) {
  const args = {
    prompts: DEFAULT_PROMPTS,
    workflowSample: 250,
    workflowTaskLimit: 4,
    toolSample: "all",
    hours: 0,
    retainPassLimit: 1000,
    strict: false,
    checkpointEvery: 1000
  };
  for (const raw of argv) {
    const [flag, value = "true"] = raw.split("=");
    if (flag === "--prompts") args.prompts = Math.max(1, Number(value) || DEFAULT_PROMPTS);
    if (flag === "--workflow-sample") args.workflowSample = Math.max(0, Number(value) || 0);
    if (flag === "--workflow-task-limit") args.workflowTaskLimit = Math.max(0, Number(value) || 0);
    if (flag === "--tool-sample") args.toolSample = value === "all" ? "all" : Math.max(0, Number(value) || 0);
    if (flag === "--hours") args.hours = Math.max(0, Number(value) || 0);
    if (flag === "--retain-pass-limit") args.retainPassLimit = Math.max(0, Number(value) || 0);
    if (flag === "--checkpoint-every") args.checkpointEvery = Math.max(0, Number(value) || 0);
    if (flag === "--strict") args.strict = true;
  }
  return args;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stableHash(value) {
  let hash = 2166136261;
  const text = String(value || "");
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pick(items, index) {
  return items[index % items.length];
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function csvCell(value) {
  const text = Array.isArray(value) ? value.join("; ") : String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvRows(rows) {
  return rows.map((row) => row.map(csvCell).join(",")).join("\n");
}

function wordCount(text) {
  return String(text || "").split(/\s+/).filter(Boolean).length;
}

function uniquePromptKey(prompt) {
  return normalize(prompt).replace(/[^a-z0-9]+/g, " ").trim();
}

function makeBlueprintPrompt(index, round = 0) {
  const blueprint = pick(BLUEPRINTS, index + round);
  const subject = pick(blueprint.subjects, Math.floor(index / BLUEPRINTS.length) + round);
  const template = pick(blueprint.templates, Math.floor(index / (BLUEPRINTS.length * 2)) + round);
  const number = pick(NUMBER_POOL, index + stableHash(subject) + round);
  return {
    id: `blueprint-${round}-${index}`,
    source: "blueprint",
    domain: blueprint.expectedMode,
    expectedMode: blueprint.expectedMode,
    prompt: template(number, subject)
  };
}

function promptForTool(tool, index, round = 0) {
  const config = tool.config || {};
  const name = tool.name || tool.id;
  const n = pick(NUMBER_POOL, index + round);
  const fallback = `Use ${name} for a practical project answer and explain the output clearly.`;
  const prompts = {
    unit_convert: `convert ${n} ${String(config.from || "foot").replaceAll("_", " ")} to ${String(config.to || "meter").replaceAll("_", " ")}`,
    text_stats: `count words, characters, lines, and reading time for this text: ToolGrid should answer the user directly and clearly.`,
    text_transform: `use ${name} on this text: customer order needs pickup saturday at 2 pm`,
    list_transform: `use ${name} on this list: apples\nbananas\napples\ncarrots`,
    encoder: config.mode === "url_decode"
      ? `url decode "hello%20world%20%26%20prices"`
      : config.mode === "base64_decode"
        ? `base64 decode "VG9vbEdyaWQ="`
        : `use ${name} for "hello world & prices"`,
    json_tool: `use ${name} on {"name":"ToolGrid","count":${n},"ready":true}`,
    csv_tool: config.mode === "json_to_csv"
      ? `convert this JSON to CSV: [{"name":"ToolGrid","count":${n}}]`
      : `convert this CSV to JSON: name,count\nToolGrid,${n}`,
    markdown_table: `turn this CSV into a markdown table: item,count\nboards,${n}\nscrews,200`,
    tip_calculator: `calculate a tip on a ${n} dollar bill with 20 percent tip split by 4 people`,
    loan_payment: `calculate loan payment for 250000 at 6.5 percent for 30 years`,
    compound_interest: `calculate compound growth for ${n} dollars at 7 percent for 10 years with 50 monthly contribution`,
    percentage: `what is ${n} percent of 200 with the math shown`,
    percent_change: `what is the percent change from ${n} to ${n + 25}`,
    simple_formula: config.mode === "area_rectangle"
      ? `calculate area for a ${n} by 12 rectangle`
      : config.mode === "volume_box"
        ? `calculate volume for a ${n} by 12 by 8 box`
        : `use ${name} with ${n}, 12, and 8 and explain the result`,
    meta_length: `check SEO title and meta description length for a page about ToolGrid paid member profiles`,
    keyword_density: `check keyword density for "tool" in this text: tool grid has a tool cockpit and tool search`,
    utm_builder: `build a UTM link for https://example.com with source newsletter medium email campaign summer`,
    date_diff: `how many days between 2026-01-01 and 2026-06-24`,
    date_add: `add ${n} days to 2026-06-24 and show the result`,
    unix_time: `convert unix timestamp 1781308800 to a readable date`,
    password_generator: `generate a strong ${Math.max(12, Math.min(32, n))} character password and explain safe handling`,
    uuid_generator: `generate a UUID and explain where to use it`,
    random_number: `pick 5 random numbers between 1 and ${Math.max(10, n)}`,
    color_convert: config.mode === "hex_to_rgb" ? `convert #4f7cff to RGB` : `convert RGB 79 124 255 to hex`,
    contrast_ratio: `check contrast ratio for white text on #0b1020`,
    plant_spacing: `how many tomato plants fit in a 4 by 8 foot garden bed at 18 inch spacing`,
    soil_mix: `make a soil mix from 10 gallons total using 1 part compost 1 part peat 1 part perlite`,
    recipe_scale: `scale 2 cups flour from 4 servings to ${Math.max(8, n)} servings`,
    invoice_total: `calculate invoice total for ${n} subtotal, 7 percent tax, 10 percent discount, and 8.50 shipping`
  };
  const prompt = prompts[tool.engine] || fallback;
  return {
    id: `tool-${round}-${tool.id}`,
    source: "tool-catalog",
    domain: expectedModeForEngine(tool.engine),
    expectedMode: expectedModeForEngine(tool.engine),
    prompt,
    toolId: tool.id,
    toolName: tool.name,
    toolEngine: tool.engine,
    toolCategory: tool.category
  };
}

function expectedModeForEngine(engine) {
  if (["unit_convert"].includes(engine)) return "converter";
  if (["date_diff", "date_add", "unix_time"].includes(engine)) return "date";
  if (["text_stats", "text_transform", "list_transform", "random_number"].includes(engine)) return "developer";
  if (["recipe_scale"].includes(engine)) return "recipe";
  if (["plant_spacing", "soil_mix"].includes(engine)) return "gardening";
  if (["loan_payment", "compound_interest", "percentage", "percent_change", "tip_calculator", "invoice_total", "simple_formula"].includes(engine)) return "money";
  if (["csv_tool", "markdown_table"].includes(engine)) return "data";
  if (["json_tool", "encoder", "password_generator", "uuid_generator"].includes(engine)) return "developer";
  if (["color_convert", "contrast_ratio"].includes(engine)) return "media";
  if (["meta_length", "keyword_density", "utm_builder"].includes(engine)) return "content";
  return "fallback";
}

function generatePromptCases(count, round = 0) {
  const seen = new Set();
  const cases = [];
  let index = 0;
  while (cases.length < count) {
    const next = index % 3 === 0
      ? promptForTool(tools[(index + round) % tools.length], index, round)
      : makeBlueprintPrompt(index, round);
    const key = uniquePromptKey(next.prompt);
    if (!seen.has(key)) {
      seen.add(key);
      cases.push({ ...next, auditIndex: cases.length });
    }
    index += 1;
  }
  return cases;
}

function detectMode(answer) {
  return answer?.mode || "none";
}

function looksLikeEmptyTable(content) {
  const lines = String(content || "").split(/\r?\n/).filter((line) => line.trim().startsWith("|"));
  if (lines.length < 4) return false;
  const emptyish = lines.filter((line) => line.replace(/[|\-\s:]/g, "").length <= 2).length;
  return emptyish >= Math.max(3, Math.floor(lines.length * 0.55));
}

function promptNumbers(prompt) {
  return String(prompt || "").match(/\b\d+(?:\.\d+)?\b/g) || [];
}

function scoreAnswer(testCase, answer) {
  const content = String(answer?.content || "");
  const lowerPrompt = normalize(testCase.prompt);
  const lowerContent = normalize(content);
  const reasons = [];
  let score = 100;
  const mode = detectMode(answer);
  const rules = DOMAIN_RULES[testCase.expectedMode] || DOMAIN_RULES.fallback;
  const words = wordCount(content);

  if (!content.trim()) {
    return { score: 0, status: "fail", reasons: ["missing answer content"], mode, words };
  }
  if (!/^# Direct Answer/m.test(content) && testCase.expectedMode !== "file") {
    score -= 8;
    reasons.push("missing direct-answer heading");
  }
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(content)) {
      score -= 35;
      reasons.push(`internal or stale workflow text: ${pattern}`);
      break;
    }
  }
  if (looksLikeEmptyTable(content)) {
    score -= 45;
    reasons.push("empty or artifact-only markdown table");
  }
  if (/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(content) && !/uuid/i.test(lowerPrompt)) {
    score -= 25;
    reasons.push("uuid artifact appeared in a non-uuid answer");
  }
  if (words < rules.minWords) {
    score -= Math.min(30, Math.ceil((rules.minWords - words) / 4));
    reasons.push(`short answer: ${words} words, target ${rules.minWords}+`);
  }
  for (const pattern of rules.required || []) {
    if (!pattern.test(content)) {
      score -= 14;
      reasons.push(`missing domain signal: ${pattern}`);
    }
  }
  for (const pattern of rules.generic || []) {
    if (pattern.test(content)) {
      score -= 18;
      reasons.push(`generic scaffold instead of specific answer: ${pattern}`);
    }
  }
  const numbers = promptNumbers(testCase.prompt).slice(0, 3);
  const contentDigits = lowerContent.replace(/,/g, "");
  if (numbers.length && !numbers.some((number) => contentDigits.includes(String(number).replace(/,/g, "")))) {
    score -= 18;
    reasons.push("does not carry prompt numbers into answer");
  }
  if (testCase.expectedMode !== "file" && mode !== testCase.expectedMode) {
    if (!(testCase.expectedMode === "money" && mode === "investment")) {
      score -= 20;
      reasons.push(`mode mismatch: expected ${testCase.expectedMode}, got ${mode}`);
    }
  }
  const promptTerms = lowerPrompt
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length >= 5 && !["please", "using", "would", "should", "about", "with"].includes(term))
    .slice(0, 8);
  const matchedTerms = promptTerms.filter((term) => lowerContent.includes(term)).length;
  if (promptTerms.length >= 3 && matchedTerms < 2) {
    score -= 10;
    reasons.push("answer drops most prompt-specific terms");
  }
  if (/here is a practical first-pass answer/i.test(content)) {
    score -= 12;
    reasons.push("fallback first-pass wording");
  }
  const bounded = Math.max(0, Math.min(100, score));
  return {
    score: bounded,
    status: bounded >= 75 ? "pass" : bounded >= 60 ? "weak" : "fail",
    reasons,
    mode,
    words
  };
}

function auditAnswers(cases, options, retainedPasses, aggregates) {
  const failures = [];
  const retained = [];
  for (const testCase of cases) {
    let answer;
    let scoring;
    try {
      answer = buildDirectAnswerFoundation({
        prompt: testCase.prompt,
        finalPayload: "free tools are better to share",
        artifacts: []
      });
      scoring = scoreAnswer(testCase, answer);
    } catch (error) {
      scoring = { score: 0, status: "fail", reasons: [`exception: ${error.message}`], mode: "error", words: 0 };
      answer = { content: "" };
    }
    const record = {
      id: testCase.id,
      auditIndex: testCase.auditIndex,
      source: testCase.source,
      prompt: testCase.prompt,
      expectedMode: testCase.expectedMode,
      mode: scoring.mode,
      score: scoring.score,
      status: scoring.status,
      reasons: scoring.reasons,
      wordCount: scoring.words,
      toolId: testCase.toolId || "",
      toolName: testCase.toolName || "",
      toolEngine: testCase.toolEngine || "",
      toolCategory: testCase.toolCategory || "",
      preview: String(answer?.content || "").split(/\r?\n/).slice(0, 8).join(" ").slice(0, 500)
    };
    aggregates.totalAnswers += 1;
    aggregates.byStatus[record.status] = (aggregates.byStatus[record.status] || 0) + 1;
    aggregates.byExpectedMode[record.expectedMode] = (aggregates.byExpectedMode[record.expectedMode] || 0) + 1;
    aggregates.byActualMode[record.mode] = (aggregates.byActualMode[record.mode] || 0) + 1;
    if (record.status !== "pass") failures.push(record);
    else if (retainedPasses.length < options.retainPassLimit) retained.push(record);
    if (options.checkpointEvery && aggregates.totalAnswers % options.checkpointEvery === 0) {
      process.stdout.write(`\nChecked ${aggregates.totalAnswers.toLocaleString()} answers...`);
    }
  }
  retainedPasses.push(...retained);
  return failures;
}

function chooseSample(items, limit, offset = 0) {
  if (!limit || limit <= 0) return [];
  if (limit === "all" || limit >= items.length) return items;
  const out = [];
  const step = Math.max(1, Math.floor(items.length / limit));
  for (let index = offset; out.length < limit && index < items.length * 3; index += step) {
    out.push(items[index % items.length]);
  }
  return out;
}

function auditToolRuntime(options) {
  const selected = chooseSample(tools, options.toolSample);
  const results = [];
  const summary = {
    checked: selected.length,
    ok: 0,
    weak: 0,
    fail: 0,
    byEngine: {},
    failures: []
  };
  for (const tool of selected) {
    const record = {
      toolId: tool.id,
      toolName: tool.name,
      engine: tool.engine,
      category: tool.category,
      status: "ok",
      outputPreview: "",
      error: ""
    };
    try {
      const output = String(runTool(tool, getDefaultInputs(tool)) ?? "");
      record.outputPreview = output.slice(0, 300);
      if (!output.trim() || /Input issue:/i.test(output)) {
        record.status = "weak";
        record.error = "empty or input issue output from default inputs";
      }
    } catch (error) {
      record.status = "fail";
      record.error = error.message;
    }
    summary[record.status] += 1;
    summary.byEngine[tool.engine] = summary.byEngine[tool.engine] || { ok: 0, weak: 0, fail: 0, checked: 0 };
    summary.byEngine[tool.engine].checked += 1;
    summary.byEngine[tool.engine][record.status] += 1;
    if (record.status !== "ok") summary.failures.push(record);
    results.push(record);
  }
  return { summary, results };
}

function auditWorkflowMechanics(cases, options) {
  const sample = chooseSample(cases, Math.min(options.workflowSample, cases.length));
  const toolsById = new Map(tools.map((tool) => [tool.id, tool]));
  const summary = {
    checked: sample.length,
    ok: 0,
    weak: 0,
    fail: 0,
    failures: [],
    byExpectedMode: {}
  };
  const results = [];
  for (const testCase of sample) {
    const record = {
      id: testCase.id,
      prompt: testCase.prompt,
      expectedMode: testCase.expectedMode,
      status: "ok",
      planSteps: 0,
      queueTasks: 0,
      executedTasks: 0,
      engines: [],
      errors: []
    };
    try {
      const plan = generateAiProjectPlan({ prompt: testCase.prompt, tools, maxPanels: 16 });
      const queue = buildWaterfallQueueFromPlan(plan, { maxTasks: 16 });
      record.planSteps = plan?.steps?.length || 0;
      record.queueTasks = queue.length;
      if (!record.planSteps || !queue.length) {
        record.status = "fail";
        record.errors.push("empty plan or waterfall queue");
      }
      let payload = testCase.prompt;
      let payloadType = "text";
      for (const task of queue.slice(0, options.workflowTaskLimit)) {
        const tool = toolsById.get(task.toolId);
        if (!tool) {
          record.status = "fail";
          record.errors.push(`unresolved tool: ${task.toolId}`);
          continue;
        }
        record.engines.push(tool.engine);
        const inputs = buildInputsFromPayload(tool, payload, payloadType);
        const output = String(runTool(tool, inputs) ?? "");
        record.executedTasks += 1;
        if (!output.trim() || /Input issue:/i.test(output)) {
          record.status = record.status === "fail" ? "fail" : "weak";
          record.errors.push(`${tool.name} produced empty/input issue output`);
        }
        payload = output;
        payloadType = getToolIO(tool).output || "text";
      }
    } catch (error) {
      record.status = "fail";
      record.errors.push(error.message);
    }
    summary[record.status] += 1;
    summary.byExpectedMode[record.expectedMode] = summary.byExpectedMode[record.expectedMode] || { ok: 0, weak: 0, fail: 0, checked: 0 };
    summary.byExpectedMode[record.expectedMode].checked += 1;
    summary.byExpectedMode[record.expectedMode][record.status] += 1;
    if (record.status !== "ok") summary.failures.push(record);
    results.push(record);
  }
  return { summary, results };
}

function topReasons(records, limit = 25) {
  const counts = new Map();
  for (const record of records) {
    for (const reason of record.reasons || record.errors || []) {
      counts.set(reason, (counts.get(reason) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([reason, count]) => ({ reason, count }));
}

function writeReports({ summary, answerRecords, failures, toolAudit, workflowAudit }) {
  ensureDir(OUTPUT_DIR);
  const summaryPath = path.join(OUTPUT_DIR, "site-quality-summary.json");
  const resultsPath = path.join(OUTPUT_DIR, "site-quality-results.json");
  const failuresPath = path.join(OUTPUT_DIR, "site-quality-failures.csv");
  const mechanicsPath = path.join(OUTPUT_DIR, "site-mechanics-summary.json");
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(resultsPath, JSON.stringify(answerRecords, null, 2));
  fs.writeFileSync(mechanicsPath, JSON.stringify({ toolAudit: toolAudit.summary, workflowAudit: workflowAudit.summary }, null, 2));
  const failureRows = [
    ["status", "score", "expected_mode", "actual_mode", "source", "tool_engine", "tool_name", "reasons", "prompt", "preview"],
    ...failures.map((record) => [
      record.status,
      record.score,
      record.expectedMode,
      record.mode,
      record.source,
      record.toolEngine,
      record.toolName,
      record.reasons.join("; "),
      record.prompt,
      record.preview
    ])
  ];
  fs.writeFileSync(failuresPath, csvRows(failureRows));
  return { summaryPath, resultsPath, failuresPath, mechanicsPath };
}

function buildSummary({ options, startedAt, elapsedMs, answerAggregates, failures, retainedPasses, toolAudit, workflowAudit, rounds }) {
  return {
    generated_at: new Date().toISOString(),
    started_at: startedAt,
    elapsed_seconds: Number((elapsedMs / 1000).toFixed(2)),
    rounds,
    options,
    answer_quality: {
      total_checked: answerAggregates.totalAnswers,
      retained_pass_records: retainedPasses.length,
      weak_or_failed: failures.length,
      pass_rate: Number((((answerAggregates.byStatus.pass || 0) / Math.max(1, answerAggregates.totalAnswers)) * 100).toFixed(2)),
      by_status: answerAggregates.byStatus,
      by_expected_mode: answerAggregates.byExpectedMode,
      by_actual_mode: answerAggregates.byActualMode,
      top_failure_reasons: topReasons(failures, 30)
    },
    tool_runtime: toolAudit.summary,
    workflow_mechanics: {
      ...workflowAudit.summary,
      top_failure_reasons: topReasons(workflowAudit.summary.failures, 20)
    },
    next_fix_targets: topReasons(failures, 12).map((item) => item.reason)
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const startedAt = new Date().toISOString();
  const started = performance.now();
  const deadline = options.hours > 0 ? Date.now() + options.hours * 60 * 60 * 1000 : 0;
  const allFailures = [];
  const retainedPasses = [];
  const answerAggregates = { totalAnswers: 0, byStatus: {}, byExpectedMode: {}, byActualMode: {} };
  let allCases = [];
  let rounds = 0;

  do {
    const cases = generatePromptCases(options.prompts, rounds);
    allCases = cases;
    const failures = auditAnswers(cases, options, retainedPasses, answerAggregates);
    allFailures.push(...failures);
    rounds += 1;
    if (!deadline) break;
  } while (Date.now() < deadline);

  process.stdout.write("\nAuditing tool runtime...");
  const toolAudit = auditToolRuntime(options);
  process.stdout.write(" done.\nAuditing sampled waterfall mechanics...");
  const workflowAudit = auditWorkflowMechanics(allCases, options);
  process.stdout.write(" done.\n");

  const elapsedMs = performance.now() - started;
  const answerRecords = [...allFailures, ...retainedPasses].sort((a, b) => a.auditIndex - b.auditIndex);
  const summary = buildSummary({
    options,
    startedAt,
    elapsedMs,
    answerAggregates,
    failures: allFailures,
    retainedPasses,
    toolAudit,
    workflowAudit,
    rounds
  });
  const paths = writeReports({ summary, answerRecords, failures: allFailures, toolAudit, workflowAudit });

  console.log("Site quality audit complete.");
  console.log(`- Answers checked: ${summary.answer_quality.total_checked.toLocaleString()}`);
  console.log(`- Pass rate: ${summary.answer_quality.pass_rate}%`);
  console.log(`- Weak/failed answers: ${summary.answer_quality.weak_or_failed.toLocaleString()}`);
  console.log(`- Tool runtime checked: ${summary.tool_runtime.checked.toLocaleString()} (${summary.tool_runtime.fail} failed, ${summary.tool_runtime.weak} weak)`);
  console.log(`- Workflow sample checked: ${summary.workflow_mechanics.checked.toLocaleString()} (${summary.workflow_mechanics.fail} failed, ${summary.workflow_mechanics.weak} weak)`);
  console.log(`- Summary: ${paths.summaryPath}`);
  console.log(`- Results: ${paths.resultsPath}`);
  console.log(`- Failures CSV: ${paths.failuresPath}`);
  console.log(`- Mechanics: ${paths.mechanicsPath}`);

  if (options.strict && (summary.answer_quality.weak_or_failed || summary.tool_runtime.fail || summary.workflow_mechanics.fail)) {
    process.exitCode = 1;
  }
}

main();
