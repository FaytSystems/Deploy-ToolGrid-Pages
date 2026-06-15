export const PROMPT_COMPILER_VERSION = "2026-06-13-prompt-compiler-v1";

const stopWords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "build", "by", "can", "for", "from", "have", "help", "helps", "in", "into", "is", "it", "make", "of", "on", "or", "that", "the", "then", "to", "use", "using", "with", "workflow", "workflows"
]);

const spellingCorrections = new Map([
  ["buisness", "business"],
  ["mutli", "multi"],
  ["mult-use", "multi-use"],
  ["autorespond", "auto-respond"],
  ["auto respond", "auto-respond"]
]);

const domainPatterns = [
  {
    id: "mushroom-farm",
    label: "Mushroom farm operations",
    matches: ["mushroom", "substrate", "spawn", "fruiting", "contamination", "harvest"],
    generalizedTerms: ["business", "agriculture", "farm operations", "crop production", "batch tracking", "quality control"],
    fields: ["Business", "Agriculture", "Operations", "Food production"]
  },
  {
    id: "farm-garden",
    label: "Farm and garden operations",
    matches: ["farm", "garden", "plant", "soil", "greenhouse", "nursery", "compost"],
    generalizedTerms: ["business", "agriculture", "grow planning", "soil variations", "crop documentation"],
    fields: ["Business", "Agriculture", "Gardening"]
  },
  {
    id: "restaurant-food",
    label: "Restaurant and food service",
    matches: ["restaurant", "kitchen", "recipe", "menu", "inventory", "chef", "food"],
    generalizedTerms: ["business", "food service", "recipe scaling", "inventory tracking", "customer communication"],
    fields: ["Business", "Cooking", "Operations"]
  },
  {
    id: "ecommerce",
    label: "Ecommerce operations",
    matches: ["store", "product", "sku", "shop", "order", "ecommerce", "listing"],
    generalizedTerms: ["business", "product listings", "customer communication", "pricing", "labels"],
    fields: ["Business", "Marketing", "Operations"]
  },
  {
    id: "content-marketing",
    label: "Content and marketing",
    matches: ["blog", "seo", "youtube", "social", "caption", "campaign", "content"],
    generalizedTerms: ["marketing", "content production", "SEO", "copywriting", "campaign tracking"],
    fields: ["Marketing", "Content", "Business"]
  },
  {
    id: "software-data",
    label: "Software and data operations",
    matches: ["api", "json", "csv", "code", "developer", "data", "database", "log"],
    generalizedTerms: ["developer tools", "data conversion", "documentation", "debugging", "structured data"],
    fields: ["Developer", "Data", "Business"]
  }
];

const capabilityPatterns = [
  {
    id: "calculator",
    label: "Calculator / formula step",
    actions: ["calculate", "calculator", "estimate", "size", "scale", "convert", "measure", "mix", "price", "total", "compare"],
    objects: ["soil", "substrate", "recipe", "variation", "rate", "ratio", "budget", "invoice", "cost", "yield", "serving"],
    generalizedTerms: ["calculator", "formula engine", "calculate soil variations", "recipe calculator", "quantity estimator", "ratio calculator"],
    capabilityTags: ["calculation", "numeric-input", "formula", "conversion"],
    preferredCategories: ["Calculators", "Converters", "Gardening", "Cooking", "Business"],
    preferredEngines: ["soil_mix", "recipe_scale", "unit_convert", "simple_formula", "invoice_total", "percentage", "percent_change", "compound_interest"]
  },
  {
    id: "documentation",
    label: "Documentation / tracking step",
    actions: ["track", "document", "documentation", "record", "log", "report", "monitor", "audit", "summarize"],
    objects: ["contamination", "issue", "incident", "subject", "batch", "report", "notes", "records", "quality"],
    generalizedTerms: ["documentation of subject", "record tracker", "issue log", "quality report", "structured notes", "audit trail"],
    capabilityTags: ["documentation", "tracking", "structured-data", "reporting"],
    preferredCategories: ["Data", "Text", "Business", "Developer"],
    preferredEngines: ["csv_tool", "json_tool", "markdown_table", "text_transform", "list_transform"]
  },
  {
    id: "label-tags",
    label: "Labels / tags step",
    actions: ["label", "tag", "generate", "create", "print", "name"],
    objects: ["label", "labels", "tag", "tags", "batch", "id", "uuid", "sku", "barcode"],
    generalizedTerms: ["create tags", "label generator", "batch label generator", "ID generator", "tag naming", "sticker text"],
    capabilityTags: ["labels", "tags", "identifier", "batching"],
    preferredCategories: ["Generators", "Text", "Developer", "Data"],
    preferredEngines: ["uuid_generator", "text_transform", "list_transform", "markdown_table", "encoder"]
  },
  {
    id: "email-response",
    label: "Email / response step",
    actions: ["email", "respond", "reply", "write", "message", "notify", "send"],
    objects: ["email", "emails", "customer", "customers", "reply", "response", "auto-response", "autoresponder", "inquiry"],
    generalizedTerms: ["generate auto-respond emails", "email template", "customer communication", "message formatter", "reply generator"],
    capabilityTags: ["email", "communication", "template", "customer-service"],
    preferredCategories: ["Text", "SEO & Marketing", "Generators", "Data"],
    preferredEngines: ["text_transform", "list_transform", "markdown_table", "meta_length"]
  },
  {
    id: "forecast-planning",
    label: "Forecast / planning step",
    actions: ["forecast", "predict", "plan", "schedule", "create", "project", "calendar"],
    objects: ["forecast", "harvest", "weekly", "date", "calendar", "deadline", "timeline", "schedule", "yield"],
    generalizedTerms: ["forecasting", "harvest forecast", "schedule builder", "calendar planning", "date calculator", "yield estimate"],
    capabilityTags: ["forecast", "planning", "date", "schedule"],
    preferredCategories: ["Date & Time", "Calculators", "Business", "Text"],
    preferredEngines: ["date_add", "date_diff", "simple_formula", "markdown_table", "text_transform"]
  },
  {
    id: "seo-marketing",
    label: "SEO / marketing step",
    actions: ["optimize", "rank", "market", "publish", "promote", "write", "create"],
    objects: ["seo", "keyword", "title", "description", "campaign", "utm", "slug", "post", "content"],
    generalizedTerms: ["SEO tools", "keyword analysis", "metadata generator", "slug generator", "campaign URL builder"],
    capabilityTags: ["SEO", "marketing", "copy", "metadata"],
    preferredCategories: ["SEO & Marketing", "Text", "Generators"],
    preferredEngines: ["meta_length", "keyword_density", "utm_builder", "text_transform", "list_transform"]
  },
  {
    id: "data-transform",
    label: "Data conversion step",
    actions: ["convert", "clean", "format", "parse", "import", "export", "dedupe"],
    objects: ["csv", "json", "table", "spreadsheet", "rows", "dataset", "file", "payload"],
    generalizedTerms: ["data conversion", "CSV tools", "JSON tools", "table generator", "data cleanup"],
    capabilityTags: ["data", "conversion", "table", "structured-data"],
    preferredCategories: ["Data", "Developer", "Converters", "Text"],
    preferredEngines: ["csv_tool", "json_tool", "markdown_table", "text_transform", "list_transform"]
  }
];

const genericBuildCapability = {
  id: "general-workflow",
  label: "General workflow step",
  generalizedTerms: ["business", "workflow", "documentation", "utility tools", "multi-step process"],
  capabilityTags: ["workflow", "general", "text"],
  preferredCategories: ["Text", "Data", "Calculators"],
  preferredEngines: ["text_transform", "list_transform", "markdown_table"]
};

const objectSynonymMap = [
  { matches: ["substrate", "soil", "mix", "recipe"], terms: ["calculate soil variations", "substrate recipe", "soil mix calculator", "ratio calculator"] },
  { matches: ["contamination", "quality", "issue", "incident"], terms: ["documentation of subject", "contamination log", "quality report", "issue tracker"] },
  { matches: ["batch", "label", "tag", "sku"], terms: ["create tags", "batch labels", "ID generator", "label generator"] },
  { matches: ["customer", "email", "reply", "response"], terms: ["generate auto-respond emails", "email templates", "customer communication"] },
  { matches: ["weekly", "harvest", "forecast", "yield"], terms: ["weekly forecast", "harvest forecast", "yield estimate", "schedule builder"] },
  { matches: ["business", "buisness", "company", "operations"], terms: ["business", "operations", "workflow automation"] }
];

function normalizePrompt(prompt) {
  let text = String(prompt ?? "").trim();
  for (const [wrong, right] of spellingCorrections.entries()) {
    text = text.replace(new RegExp(`\\b${wrong}\\b`, "gi"), right);
  }
  return text.replace(/\s+/g, " ");
}

function tokenize(text) {
  return normalizePrompt(text)
    .toLowerCase()
    .split(/[^a-z0-9#-]+/)
    .filter((token) => token && !stopWords.has(token));
}

function unique(values) {
  const seen = new Set();
  const out = [];
  for (const value of values.flat().map((item) => String(item || "").trim()).filter(Boolean)) {
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out;
}

function scorePattern(text, pattern) {
  const haystack = text.toLowerCase();
  let score = 0;
  for (const action of pattern.actions || []) {
    if (haystack.includes(action)) score += 5;
  }
  for (const object of pattern.objects || []) {
    if (haystack.includes(object)) score += 4;
  }
  return score;
}

function detectDomains(normalizedPrompt) {
  const text = normalizedPrompt.toLowerCase();
  const scored = domainPatterns
    .map((domain) => ({
      ...domain,
      score: domain.matches.reduce((sum, token) => sum + (text.includes(token) ? 1 : 0), 0)
    }))
    .filter((domain) => domain.score > 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  return scored.length ? scored : [{
    id: "general-business",
    label: "General business workflow",
    matches: [],
    generalizedTerms: ["business", "workflow", "documentation", "operations"],
    fields: ["Business"],
    score: 0
  }];
}

function splitIntoTaskChunks(normalizedPrompt) {
  const clean = normalizedPrompt
    .replace(/^build\s+(me\s+)?(a|an)?\s*/i, "")
    .replace(/^workflow\s+that\s+helps?\s+/i, "")
    .replace(/\bthen\b/gi, ",")
    .replace(/\band\s+(?=(calculate|track|document|generate|create|write|email|forecast|predict|schedule|convert|clean|format|optimize|label|tag|record|log|report)\b)/gi, ", ");

  const chunks = clean
    .split(/[;,]+|\n+/)
    .map((chunk) => chunk.trim().replace(/^and\s+/i, ""))
    .filter((chunk) => chunk.length > 2);

  return chunks.length ? chunks : [normalizedPrompt];
}

function detectCapabilityForChunk(chunk) {
  const scored = capabilityPatterns
    .map((pattern) => ({ pattern, score: scorePattern(chunk, pattern) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.pattern.label.localeCompare(b.pattern.label));
  return scored[0]?.pattern || genericBuildCapability;
}

function inferAction(chunk, capability) {
  const text = chunk.toLowerCase();
  const action = (capability.actions || []).find((candidate) => text.includes(candidate));
  if (action) return action;
  const fallback = {
    calculator: "calculate",
    documentation: "track",
    "label-tags": "generate",
    "email-response": "write",
    "forecast-planning": "forecast",
    "seo-marketing": "optimize",
    "data-transform": "convert"
  };
  return fallback[capability.id] || "organize";
}

function inferObject(chunk, action) {
  const text = chunk.trim();
  const regex = new RegExp(`\\b${action.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
  const parts = text.split(regex);
  let object = parts.length > 1 ? parts.slice(1).join(action).trim() : text;
  object = object.replace(/^to\s+/i, "").replace(/^for\s+/i, "").replace(/^a\s+/i, "").trim();
  if (!object || /^[.?!,;:]+$/.test(object)) object = text;
  return object;
}

function objectSynonyms(chunk) {
  const text = chunk.toLowerCase();
  return unique(objectSynonymMap
    .filter((item) => item.matches.some((token) => text.includes(token)))
    .flatMap((item) => item.terms));
}

function createTaskPart(chunk, index, domains) {
  const capability = detectCapabilityForChunk(chunk);
  const action = inferAction(chunk, capability);
  const object = inferObject(chunk, action);
  const domainTerms = domains.flatMap((domain) => domain.generalizedTerms);
  const objectTerms = objectSynonyms(chunk);
  const generalizedTerms = unique([
    ...domainTerms.slice(0, 4),
    ...capability.generalizedTerms,
    ...objectTerms,
    action,
    object
  ]).slice(0, 14);
  const searchQueries = unique([
    `${capability.label} ${object}`,
    `${generalizedTerms.slice(0, 3).join(" ")}`,
    `${action} ${object}`,
    ...objectTerms.slice(0, 3)
  ]).slice(0, 7);

  return {
    id: `task-${index + 1}`,
    sourceText: chunk,
    action,
    object,
    capabilityId: capability.id,
    capabilityLabel: capability.label,
    generalizedTerms,
    capabilityTags: capability.capabilityTags,
    preferredCategories: capability.preferredCategories,
    preferredEngines: capability.preferredEngines,
    searchQueries,
    outputNeed: capability.id === "documentation" || capability.id === "data-transform" ? "structured data or report" : capability.id === "calculator" ? "numeric result" : "text result"
  };
}

export function compilePromptToSearchPlan(prompt) {
  const normalizedPrompt = normalizePrompt(prompt || "Build a useful workflow.");
  const domains = detectDomains(normalizedPrompt);
  const chunks = splitIntoTaskChunks(normalizedPrompt);
  const taskParts = chunks.map((chunk, index) => createTaskPart(chunk, index, domains));
  const tokens = tokenize(normalizedPrompt);
  const globalSearchTerms = unique([
    ...domains.flatMap((domain) => domain.generalizedTerms),
    ...taskParts.flatMap((part) => part.generalizedTerms),
    ...tokens.filter((token) => token.length >= 4)
  ]).slice(0, 80);
  const requiredCapabilities = unique(taskParts.map((part) => part.capabilityLabel));
  const capabilityTags = unique(taskParts.flatMap((part) => part.capabilityTags));
  const suggestedQueries = unique([
    ...taskParts.flatMap((part) => part.searchQueries),
    `${domains[0].label} ${requiredCapabilities.slice(0, 3).join(" ")}`
  ]).slice(0, 24);
  const recommendedUiNodes = Math.min(64, Math.max(1, taskParts.length <= 1 ? 2 : taskParts.length * 2));
  const workflowMode = taskParts.length > 4 ? "hybrid-waterfall-and-parallel" : "queued-waterfall";

  return {
    version: PROMPT_COMPILER_VERSION,
    originalPrompt: String(prompt ?? ""),
    normalizedPrompt,
    domains: domains.map(({ id, label, generalizedTerms, fields, score }) => ({ id, label, generalizedTerms, fields, score })),
    primaryDomain: domains[0].label,
    tokens,
    taskParts,
    globalSearchTerms,
    requiredCapabilities,
    capabilityTags,
    suggestedQueries,
    recommendedUiNodes,
    workflowMode,
    summary: `${domains[0].label}: ${taskParts.length} task part${taskParts.length === 1 ? "" : "s"}, ${requiredCapabilities.length} capability group${requiredCapabilities.length === 1 ? "" : "s"}, ${recommendedUiNodes} suggested UI node${recommendedUiNodes === 1 ? "" : "s"}.`
  };
}

export function scoreToolAgainstCompiledPrompt(tool, compiled) {
  const plan = compiled?.taskParts ? compiled : compilePromptToSearchPlan(compiled?.normalizedPrompt || "");
  const haystack = `${tool?.name || ""} ${tool?.category || ""} ${tool?.description || ""} ${(tool?.tags || []).join(" ")} ${tool?.engine || ""} ${JSON.stringify(tool?.config || {})}`.toLowerCase();
  let score = 0;

  for (const part of plan.taskParts || []) {
    if (part.preferredCategories?.includes(tool.category)) score += 24;
    if (part.preferredEngines?.includes(tool.engine)) score += 28;
    const specificTerms = `${part.object || ""} ${(part.generalizedTerms || []).join(" ")}`.toLowerCase();
    if (tool.engine === "soil_mix" && /soil|substrate|mix/.test(specificTerms)) score += 90;
    if (tool.engine === "recipe_scale" && /recipe|ingredient|serving/.test(specificTerms)) score += 55;
    if (tool.engine === "date_add" && /weekly|forecast|schedule|harvest|date/.test(specificTerms)) score += 45;
    if (tool.engine === "uuid_generator" && /label|tag|batch|id/.test(specificTerms)) score += 45;
    if (tool.engine === "markdown_table" && /report|documentation|email|table|log/.test(specificTerms)) score += 35;
    for (const term of part.generalizedTerms || []) {
      const lowered = term.toLowerCase();
      if (lowered.length < 3) continue;
      if (haystack.includes(lowered)) score += 10;
      for (const token of lowered.split(/\s+/)) {
        if (token.length >= 4 && haystack.includes(token)) score += 2;
      }
    }
    for (const tag of part.capabilityTags || []) {
      if (haystack.includes(tag.toLowerCase())) score += 3;
    }
  }

  for (const term of plan.globalSearchTerms || []) {
    const lowered = term.toLowerCase();
    if (lowered.length >= 4 && haystack.includes(lowered)) score += 3;
  }

  return score;
}

export function chooseToolsForCompiledPrompt({ prompt, tools, limit = 16 }) {
  const compiled = compilePromptToSearchPlan(prompt);
  const chosen = [];
  const used = new Set();

  for (const part of compiled.taskParts) {
    const ranked = tools
      .map((tool) => {
        let score = scoreToolAgainstCompiledPrompt(tool, { ...compiled, taskParts: [part] });
        const haystack = `${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${tool.engine}`.toLowerCase();
        for (const query of part.searchQueries) {
          for (const token of query.toLowerCase().split(/\s+/)) {
            if (token.length >= 4 && haystack.includes(token)) score += 4;
          }
        }
        return { tool, score };
      })
      .filter((item) => item.score > 0 && !used.has(item.tool.id))
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name));

    const selected = ranked[0]?.tool;
    if (selected) {
      used.add(selected.id);
      chosen.push({ tool: selected, taskPart: part, score: ranked[0].score });
    }
  }

  if (chosen.length < Math.min(limit, compiled.taskParts.length + 2)) {
    const rankedGlobal = tools
      .map((tool) => ({ tool, score: scoreToolAgainstCompiledPrompt(tool, compiled) }))
      .filter((item) => item.score > 0 && !used.has(item.tool.id))
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name));
    for (const item of rankedGlobal) {
      if (chosen.length >= limit) break;
      used.add(item.tool.id);
      chosen.push({ tool: item.tool, taskPart: compiled.taskParts[chosen.length % compiled.taskParts.length], score: item.score });
    }
  }

  return {
    compiled,
    tools: chosen.slice(0, limit)
  };
}
