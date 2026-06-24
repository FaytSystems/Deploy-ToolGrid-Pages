import { convertUnit, unitKinds } from "./tool-engines.js";

function normalize(text) {
  return String(text || "").toLowerCase();
}

export function extractOriginalPrompt(prompt = "") {
  const text = String(prompt || "").trim();
  const originalMatch = text.match(/Original user prompt:\s*([\s\S]*?)(?:\nCategory focus:|\nTarget answer type:|\nDetails:|$)/i);
  return (originalMatch?.[1] || text).trim();
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvRow(values) {
  return values.map(csvCell).join(",");
}

function titleFromPrompt(prompt) {
  const compact = extractOriginalPrompt(prompt).replace(/\s+/g, " ").trim();
  if (!compact) return "Requested Answer";
  return compact.length > 90 ? `${compact.slice(0, 87).trim()}...` : compact;
}

function formatNumber(value, decimals = 6) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return "NaN";
  const abs = Math.abs(parsed);
  const rounded = abs >= 1000 || abs < 0.0001
    ? parsed.toLocaleString("en-US", { maximumFractionDigits: decimals })
    : parsed.toFixed(decimals).replace(/\.?0+$/, "");
  return String(rounded);
}

function stableHash(value) {
  const text = String(value || "");
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function normalizeUnitTerm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/["'`]/g, "")
    .replace(/[-_]/g, " ")
    .replace(/\bus\b/g, "")
    .replace(/\bper\b/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\bfeet\b/g, "foot")
    .replace(/\binches\b/g, "inch")
    .replace(/\bounces\b/g, "ounce")
    .replace(/\bpounds\b/g, "pound")
    .replace(/\bcups\b/g, "cup")
    .replace(/\bgallons\b/g, "gallon")
    .replace(/\bmeters\b/g, "meter")
    .replace(/\bmetres\b/g, "meter")
    .replace(/\bcentimeters\b/g, "centimeter")
    .replace(/\bmillimeters\b/g, "millimeter")
    .replace(/\bkilometers\b/g, "kilometer")
    .replace(/\bmiles\b/g, "mile")
    .replace(/\byards\b/g, "yard")
    .replace(/\bgrams\b/g, "gram")
    .replace(/\bkilograms\b/g, "kilogram")
    .replace(/\bliters\b/g, "liter")
    .replace(/\blitres\b/g, "liter")
    .replace(/\bseconds\b/g, "second")
    .replace(/\bminutes\b/g, "minute")
    .replace(/\bhours\b/g, "hour")
    .replace(/\bdays\b/g, "day")
    .replace(/\bweeks\b/g, "week")
    .replace(/\s+/g, " ")
    .trim();
}

const unitAliasIndex = (() => {
  const index = new Map();
  const add = (kind, unit, alias) => {
    const key = normalizeUnitTerm(alias);
    if (key && !index.has(key)) index.set(key, { kind, unit });
  };
  for (const [kind, units] of Object.entries(unitKinds)) {
    for (const unit of units) {
      const label = unit.replaceAll("_", " ");
      add(kind, unit, unit);
      add(kind, unit, label);
      add(kind, unit, label.replace(/\bus\b/gi, ""));
      add(kind, unit, label.replace(/\b30 day\b/gi, ""));
      add(kind, unit, label.replace(/\b365 day\b/gi, ""));
    }
  }
  add("length", "foot", "ft");
  add("length", "foot", "feet");
  add("length", "inch", "in");
  add("length", "inch", "inches");
  add("length", "meter", "metre");
  add("length", "kilometer", "km");
  add("length", "centimeter", "cm");
  add("length", "millimeter", "mm");
  add("mass", "pound", "lb");
  add("mass", "pound", "lbs");
  add("mass", "ounce", "oz");
  add("mass", "kilogram", "kg");
  add("mass", "gram", "g");
  add("volume", "cup_us", "cup");
  add("volume", "cup_us", "cups");
  add("volume", "gallon_us", "gallon");
  add("volume", "fluid_ounce_us", "fluid ounce");
  add("volume", "tablespoon_us", "tablespoon");
  add("volume", "teaspoon_us", "teaspoon");
  add("time", "month_30_day", "month");
  add("time", "year_365_day", "year");
  return index;
})();

function resolveUnit(term) {
  return unitAliasIndex.get(normalizeUnitTerm(term));
}

function unitLabel(unit) {
  return String(unit || "").replace(/_us$/i, "").replace(/_30_day$/i, "").replace(/_365_day$/i, "").replaceAll("_", " ");
}

function buildUnitConversionAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const match = original.match(/\b(?:convert|change)\s+(-?\d+(?:\.\d+)?)\s+(.+?)\s+(?:to|into|in)\s+(.+?)(?:[?.!,]|$)/i);
  if (!match) return null;
  const value = Number(match[1]);
  const from = resolveUnit(match[2]);
  const to = resolveUnit(match[3]);
  if (!Number.isFinite(value) || !from || !to || from.kind !== to.kind) return null;
  const result = convertUnit(value, from.kind, from.unit, to.unit);
  return [
    "# Direct Answer",
    "",
    `${formatNumber(value)} ${unitLabel(from.unit)} = ${formatNumber(result)} ${unitLabel(to.unit)}.`,
    "",
    "## Calculation",
    `- Unit family: ${from.kind}`,
    `- From: ${formatNumber(value)} ${unitLabel(from.unit)}`,
    `- To: ${unitLabel(to.unit)}`,
    `- Result: ${formatNumber(result)} ${unitLabel(to.unit)}`,
    "",
    "Use the rounded result above for quick work; keep more decimal places if this is for engineering, dosing, quoting, or manufacturing."
  ].join("\n");
}

function isLowValueToolOutput(text = "") {
  const clean = String(text || "").trim();
  if (!clean) return true;
  const lower = clean.toLowerCase();
  return [
    "free tools save time",
    "free tools save time when they are fast, private, and easy to use.",
    "free tools save time when they can share project data.",
    "free tools workspace",
    "free%20tools%20workspace",
    "toolgrid",
    "input issue:",
    "skeleton tool:",
    "current in-house tools wired",
    "general workflow step",
    "ready handoff"
  ].some((snippet) => lower === snippet || lower.includes(snippet));
}

function looksLikeInternalWorkflowText(text = "") {
  return /\b(recommended workflow|ready handoff|completed cells|current in-house tools wired|skeleton tool|workflow task|support tool|tool output|scale factor)\b/i.test(String(text || ""));
}

function looksLikeStandaloneAnswer(text = "") {
  const clean = String(text || "").trim();
  if (isLowValueToolOutput(clean) || looksLikeInternalWorkflowText(clean)) return false;
  const words = clean.split(/\s+/).filter(Boolean).length;
  return words >= 90 && /(^#|##|\n\d+\.|\|.+\||materials?|steps?|instructions?|recommendation|answer)/im.test(clean);
}

function usefulArtifactOutputs(artifacts = []) {
  return artifacts
    .filter((artifact) => artifact?.status !== "error" && !isLowValueToolOutput(artifact?.output))
    .slice(0, 8)
    .map((artifact) => ({
      toolName: artifact.toolName || artifact.name || "Tool",
      outputType: artifact.outputType || "text",
      output: String(artifact.output || "").trim()
    }));
}

function extractClarifiedValue(prompt, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(prompt || "").match(new RegExp(`${escaped}:\\s*([^\\n]+)`, "i"));
  return match?.[1]?.trim() || "";
}

function extractExpenseCategories(prompt) {
  const detail = extractClarifiedValue(prompt, "expense-categories");
  const source = detail || prompt;
  const fallback = ["Rent/Mortgage", "Utilities", "Groceries", "Transportation", "Insurance", "Subscriptions", "Medical", "Debt", "Savings", "Other"];
  const known = fallback.filter((category) => normalize(source).includes(normalize(category.split("/")[0])));
  const custom = detail
    .split(/[,;|]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/\.$/, ""));
  const merged = [...custom, ...known, ...fallback];
  return [...new Set(merged.map((item) => item.replace(/\b\w/g, (letter) => letter.toUpperCase())))].slice(0, 18);
}

export function buildMonthlyExpenseTrackerFile(prompt) {
  const text = normalize(prompt);
  const isRequest = /\b(file|spreadsheet|sheet|csv|xlsx|excel|template|tracker|download)\b/.test(text)
    && /\b(expense|expenses|spend|spending|budget|bills?|costs?)\b/.test(text);
  if (!isRequest) return null;
  const categories = extractExpenseCategories(prompt);
  const period = extractClarifiedValue(prompt, "expense-period") || extractClarifiedValue(prompt, "time-range") || "Reusable monthly template";
  const budgetMode = extractClarifiedValue(prompt, "budget-fields") || "Track income, budget limits, and actual expenses";
  const rows = [
    csvRow(["Monthly Expense Tracker"]),
    csvRow(["Period", period]),
    csvRow(["Tracking mode", budgetMode]),
    csvRow(["Generated", new Date().toLocaleString()]),
    "",
    csvRow(["Summary"]),
    csvRow(["Month", "Starting Balance", "Income", "Budgeted Expenses", "Actual Expenses", "Remaining", "Notes"]),
    csvRow([period, "", "", "", "", "", "Enter totals from the expense log below."]),
    "",
    csvRow(["Expense Categories"]),
    csvRow(["Category", "Monthly Budget", "Actual Total", "Difference", "Notes"]),
    ...categories.map((category) => csvRow([category, "", "", "", ""])),
    "",
    csvRow(["Expense Log"]),
    csvRow(["Date", "Category", "Vendor", "Description", "Payment Method", "Budgeted Amount", "Actual Amount", "Paid?", "Notes"]),
    ...categories.map((category) => csvRow(["", category, "", "", "", "", "", "", ""])),
    "",
    csvRow(["How to use"]),
    csvRow(["Fill one row per expense. Add actual amounts as money is spent. Use the Summary section to compare budgeted vs actual totals."])
  ];
  return {
    filename: "monthly_expense_tracker.csv",
    label: "Monthly Expense Tracker CSV",
    mime: "text/csv",
    content: rows.join("\n")
  };
}

function buildExpenseTrackerAnswer(prompt) {
  const categories = extractExpenseCategories(prompt);
  const period = extractClarifiedValue(prompt, "expense-period") || extractClarifiedValue(prompt, "time-range") || "Monthly";
  const fields = ["Date", "Category", "Vendor", "Description", "Payment Method", "Budgeted Amount", "Actual Amount", "Paid?", "Notes"];
  return [
    "# Direct Answer",
    "",
    `Create a ${period.toLowerCase()} expense tracker with one summary section, one category budget section, and one transaction log. The downloadable CSV is attached when the prompt asks for a file.`,
    "",
    "## Columns",
    fields.map((field) => `- ${field}`).join("\n"),
    "",
    "## Starting Categories",
    categories.map((category) => `- ${category}`).join("\n"),
    "",
    "## How To Use It",
    "1. Add each expense as a new row in the transaction log.",
    "2. Assign every row to a category.",
    "3. Enter budgeted and actual amounts so the monthly summary can compare planned vs real spending.",
    "4. Mark paid items and leave notes for unusual charges.",
    "5. Review remaining money by category before adding new spending."
  ].join("\n");
}

function findFirstPromptNumber(prompt, fallback = 1) {
  const match = String(prompt || "").match(/\b(\d+(?:\.\d+)?)\b/);
  const value = Number(match?.[1]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function extractAllNumbers(prompt) {
  return (String(prompt || "").match(/-?\d+(?:\.\d+)?/g) || [])
    .map(Number)
    .filter(Number.isFinite);
}

function titleCaseText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());
}

function sentenceCaseText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());
}

function slugifyText(text) {
  return String(text || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractTextPayload(prompt) {
  const original = extractOriginalPrompt(prompt);
  return original.match(/\b(?:on this text|for this text|text|input)\s*:\s*([\s\S]+)$/i)?.[1]?.trim()
    || original.match(/["'`](.+?)["'`]/)?.[1]
    || original.match(/\bfor\s+([^:]+=[\s\S]+)$/i)?.[1]?.trim()
    || "";
}

function buildTextTransformAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const lower = normalize(original);
  if (!/\b(uppercase|lowercase|title case|sentence case|slug|slugify|extra space|spaces|blank line|reverse|reverser|trim|word count|reading time|find and replace|replace tool)\b/i.test(lower)) return null;
  const payload = extractTextPayload(original) || "Paste the text to transform here.";
  let label = "Cleaned text";
  let output = payload.trim();
  if (/\buppercase\b/.test(lower)) {
    label = "Uppercase text";
    output = payload.toUpperCase();
  } else if (/\blowercase\b/.test(lower)) {
    label = "Lowercase text";
    output = payload.toLowerCase();
  } else if (/\btitle case\b/.test(lower)) {
    label = "Title case text";
    output = titleCaseText(payload);
  } else if (/\bsentence case\b/.test(lower)) {
    label = "Sentence case text";
    output = sentenceCaseText(payload);
  } else if (/\bslug|slugify\b/.test(lower)) {
    label = "Slug";
    output = slugifyText(payload);
  } else if (/\bextra space|spaces|trim\b/.test(lower)) {
    label = "Whitespace-cleaned text";
    output = payload.replace(/\s+/g, " ").trim();
  } else if (/\bblank line\b/.test(lower)) {
    label = "Blank-line-cleaned text";
    output = payload.split(/\r?\n/).filter((line) => line.trim()).join("\n");
  } else if (/\breverse|reverser\b/.test(lower)) {
    label = "Reversed text";
    output = [...payload].reverse().join("");
  } else if (/\bfind and replace|replace tool\b/.test(lower)) {
    label = "Find/replace-ready text";
    output = payload;
    return [
      "# Direct Answer",
      "",
      "Find/replace needs two missing details: the exact text to find and the replacement text.",
      "",
      "## Current Text",
      "```text",
      output,
      "```",
      "",
      "## Ready Prompt",
      `Replace "[text to find]" with "[replacement]" in: ${payload}`,
      "",
      "Once those two fields are provided, the output should return only the changed text plus a short change count."
    ].join("\n");
  } else if (/\bword count|reading time\b/.test(lower)) {
    const words = payload.trim() ? payload.trim().split(/\s+/).length : 0;
    const chars = payload.length;
    const minutes = words / 225;
    return [
      "# Direct Answer",
      "",
      `Word count: ${words}`,
      "",
      "## Text Stats",
      `- Characters: ${chars}`,
      `- Lines: ${payload.split(/\r?\n/).length}`,
      `- Estimated reading time: ${formatNumber(minutes, 2)} minutes`,
      "",
      "Use this count for drafting, SEO, captions, document limits, or reading-time estimates."
    ].join("\n");
  }
  return [
    "# Direct Answer",
    "",
    `${label}:`,
    "",
    "```text",
    output,
    "```",
    "",
    "## Applied Transform",
    `- Source text: ${payload}`,
    `- Output type: ${label}`,
    "- The result is ready to copy into the next workflow step."
  ].join("\n");
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function parseIsoDate(value) {
  const match = String(value || "").match(/\b(\d{4}-\d{2}-\d{2})\b/);
  if (!match) return null;
  const date = new Date(`${match[1]}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function buildDateUtilityAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const lower = normalize(original);
  const between = original.match(/\b(?:days?|weeks?|months?)\s+between\s+(\d{4}-\d{2}-\d{2})\s+(?:and|to)\s+(\d{4}-\d{2}-\d{2})/i);
  if (between) {
    const start = new Date(`${between[1]}T00:00:00Z`);
    const end = new Date(`${between[2]}T00:00:00Z`);
    const days = Math.round((end - start) / 86400000);
    return [
      "# Direct Answer",
      "",
      `${between[1]} to ${between[2]} is ${days} days.`,
      "",
      "## Breakdown",
      `- Weeks: ${formatNumber(days / 7, 2)}`,
      `- 30-day months: ${formatNumber(days / 30, 2)}`,
      "- Count is calendar-day difference, not inclusive of both start and end dates."
    ].join("\n");
  }
  const add = original.match(/\badd\s+(-?\d+(?:\.\d+)?)\s+(days?|weeks?|months?|years?)\s+to\s+(\d{4}-\d{2}-\d{2})/i);
  if (add) {
    const amount = Number(add[1]);
    const unit = add[2].toLowerCase();
    const date = new Date(`${add[3]}T00:00:00Z`);
    if (/week/.test(unit)) date.setUTCDate(date.getUTCDate() + amount * 7);
    else if (/month/.test(unit)) date.setUTCMonth(date.getUTCMonth() + amount);
    else if (/year/.test(unit)) date.setUTCFullYear(date.getUTCFullYear() + amount);
    else date.setUTCDate(date.getUTCDate() + amount);
    return [
      "# Direct Answer",
      "",
      `${add[3]} plus ${formatNumber(amount)} ${unit} = ${isoDate(date)}.`,
      "",
      "## Breakdown",
      `- Start date: ${add[3]}`,
      `- Amount added: ${formatNumber(amount)} ${unit}`,
      `- Result date: ${isoDate(date)}`
    ].join("\n");
  }
  const unix = original.match(/\bunix(?:\s+timestamp)?\s+(\d{9,13})\b/i);
  if (unix) {
    const raw = Number(unix[1]);
    const ms = raw > 9999999999 ? raw : raw * 1000;
    const date = new Date(ms);
    if (Number.isNaN(date.getTime())) return null;
    return [
      "# Direct Answer",
      "",
      `Unix timestamp ${unix[1]} = ${date.toISOString()}.`,
      "",
      "## Breakdown",
      `- UTC date: ${isoDate(date)}`,
      `- UTC time: ${date.toISOString().slice(11, 19)}`,
      `- Interpreted as: ${raw > 9999999999 ? "milliseconds" : "seconds"} since 1970-01-01 UTC`
    ].join("\n");
  }
  if (/\bdate|deadline|calendar|timestamp\b/.test(lower) && parseIsoDate(original)) {
    return [
      "# Direct Answer",
      "",
      `Date recognized: ${isoDate(parseIsoDate(original))}.`,
      "",
      "Add a second date for a difference calculation, or say how many days/weeks/months to add for a deadline result."
    ].join("\n");
  }
  return null;
}

function buildDirectMathAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const lower = normalize(original);
  if (/\bsoil mix|compost|perlite|peat\b/.test(lower)) return null;
  const percentOf = original.match(/\bwhat\s+is\s+(-?\d+(?:\.\d+)?)\s*percent\s+of\s+(-?\d+(?:\.\d+)?)/i);
  if (percentOf) {
    const percent = Number(percentOf[1]);
    const total = Number(percentOf[2]);
    const result = total * percent / 100;
    return [
      "# Direct Answer",
      "",
      `${formatNumber(percent)}% of ${formatNumber(total)} = ${formatNumber(result)}.`,
      "",
      "## Math",
      `${formatNumber(total)} x (${formatNumber(percent)} / 100) = ${formatNumber(result)}`,
      "",
      "Use this result as the calculated total, portion, discount amount, tax amount, or percentage share depending on the prompt."
    ].join("\n");
  }
  const percentChange = original.match(/\bpercent\s+change\s+from\s+(-?\d+(?:\.\d+)?)\s+to\s+(-?\d+(?:\.\d+)?)/i);
  if (percentChange) {
    const start = Number(percentChange[1]);
    const end = Number(percentChange[2]);
    const change = ((end - start) / start) * 100;
    return [
      "# Direct Answer",
      "",
      `The percent change from ${formatNumber(start)} to ${formatNumber(end)} is ${formatNumber(change, 4)}%.`,
      "",
      "## Math",
      `((${formatNumber(end)} - ${formatNumber(start)}) / ${formatNumber(start)}) x 100 = ${formatNumber(change, 4)}%`
    ].join("\n");
  }
  const nums = extractAllNumbers(original);
  const withNumbers = nums.length >= 2 && /\b(calculator|calculate|math|add|subtract|subtraction|multiply|multiplier|divide|average|area|volume|total)\b/i.test(lower);
  if (!withNumbers) return null;
  let label = "Calculated result";
  let result = null;
  let formula = "";
  const [a, b, c = 0] = nums;
  if (/\barea\b/.test(lower) && nums.length >= 2) {
    label = "Area";
    result = a * b;
    formula = `${formatNumber(a)} x ${formatNumber(b)} = ${formatNumber(result)} square units`;
  } else if (/\bvolume\b/.test(lower) && nums.length >= 3) {
    label = "Volume";
    result = a * b * c;
    formula = `${formatNumber(a)} x ${formatNumber(b)} x ${formatNumber(c)} = ${formatNumber(result)} cubic units`;
  } else if (/\baverage\b/.test(lower)) {
    label = "Average";
    result = nums.reduce((sum, value) => sum + value, 0) / nums.length;
    formula = `(${nums.map((value) => formatNumber(value)).join(" + ")}) / ${nums.length} = ${formatNumber(result)}`;
  } else if (/\bsubtract|subtraction|difference\b/.test(lower)) {
    label = "Difference";
    result = nums.slice(1).reduce((value, next) => value - next, a);
    formula = `${nums.map((value) => formatNumber(value)).join(" - ")} = ${formatNumber(result)}`;
  } else if (/\bmultiply|multiplication|multiplier|product\b/.test(lower)) {
    label = "Product";
    result = nums.reduce((value, next) => value * next, 1);
    formula = `${nums.map((value) => formatNumber(value)).join(" x ")} = ${formatNumber(result)}`;
  } else if (/\bdivide|division\b/.test(lower) && b !== 0) {
    label = "Quotient";
    result = a / b;
    formula = `${formatNumber(a)} / ${formatNumber(b)} = ${formatNumber(result)}`;
  } else if (/\badd|addition|sum|total\b/.test(lower)) {
    label = "Total";
    result = nums.reduce((sum, value) => sum + value, 0);
    formula = `${nums.map((value) => formatNumber(value)).join(" + ")} = ${formatNumber(result)}`;
  }
  if (result === null) return null;
  return [
    "# Direct Answer",
    "",
    `${label}: ${formatNumber(result)}`,
    "",
    "## Math",
    formula,
    "",
    "## Use It For",
    "- Quick calculator output.",
    "- Table totals or quantity checks.",
    "- A handoff value for the next workflow cell."
  ].join("\n");
}

function buildRandomNumberAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const match = original.match(/\bpick\s+(\d+)\s+random\s+numbers?\s+between\s+(-?\d+(?:\.\d+)?)\s+and\s+(-?\d+(?:\.\d+)?)/i)
    || original.match(/\bgenerate\s+(\d+)\s+random\s+numbers?\s+between\s+(-?\d+(?:\.\d+)?)\s+and\s+(-?\d+(?:\.\d+)?)/i);
  if (!match) return null;
  const count = Math.max(1, Math.min(100, Number(match[1]) || 1));
  const min = Math.ceil(Math.min(Number(match[2]), Number(match[3])));
  const max = Math.floor(Math.max(Number(match[2]), Number(match[3])));
  const span = Math.max(1, max - min + 1);
  let seed = stableHash(original);
  const values = [];
  for (let index = 0; index < count; index += 1) {
    seed = Math.imul(seed ^ (index + 1), 1664525) + 1013904223;
    values.push(min + Math.abs(seed >>> 0) % span);
  }
  return [
    "# Direct Answer",
    "",
    `Random number output: ${values.join(", ")}`,
    "",
    "## Settings",
    `- Count: ${count}`,
    `- Minimum: ${min}`,
    `- Maximum: ${max}`,
    "- Method: deterministic browser-safe pseudo-random set for repeatable project output.",
    "",
    "Regenerate the prompt if you need a fresh set."
  ].join("\n");
}

function buildKeywordDensityAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  if (!/\bkeyword density\b/i.test(original)) return null;
  const keyword = original.match(/["'`](.+?)["'`]/)?.[1] || "tool";
  const text = extractTextPayload(original) || original;
  const words = text.toLowerCase().match(/[a-z0-9]+/g) || [];
  const matches = words.filter((word) => word === keyword.toLowerCase()).length;
  const density = words.length ? (matches / words.length) * 100 : 0;
  return [
    "# Direct Answer",
    "",
    `Keyword density for "${keyword}": ${formatNumber(density, 2)}%.`,
    "",
    "## Count",
    `- Keyword matches: ${matches}`,
    `- Total words: ${words.length}`,
    `- Density: ${formatNumber(density, 2)}%`,
    "",
    "## SEO Note",
    "Use density as a sanity check, not a target by itself. The copy should still read naturally and answer the searcher's intent."
  ].join("\n");
}

function hexToRgb(hex) {
  const clean = String(hex || "").replace("#", "").trim();
  if (![3, 6].includes(clean.length)) return null;
  const full = clean.length === 3 ? clean.split("").map((char) => char + char).join("") : clean;
  const value = Number.parseInt(full, 16);
  if (!Number.isFinite(value)) return null;
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function relativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const channels = rgb.map((channel) => {
    const srgb = channel / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function buildContrastRatioAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  if (!/\bcontrast ratio|color contrast|contrast checker\b/i.test(original)) return null;
  const hexes = original.match(/#[0-9a-f]{3,6}\b/gi) || [];
  const foreground = /\bwhite\b/i.test(original) ? "#ffffff" : /\bblack\b/i.test(original) ? "#000000" : (hexes[0] || "#ffffff");
  const background = hexes.find((hex) => hex.toLowerCase() !== foreground.toLowerCase()) || "#0b1020";
  const a = relativeLuminance(foreground);
  const b = relativeLuminance(background);
  if (a === null || b === null) return null;
  const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  const foregroundRgb = hexToRgb(foreground).join(", ");
  const backgroundRgb = hexToRgb(background).join(", ");
  return [
    "# Direct Answer",
    "",
    `Contrast ratio for ${foreground} on ${background}: ${formatNumber(ratio, 2)}:1.`,
    "",
    "## Accessibility Result",
    `- WCAG AA normal text: ${ratio >= 4.5 ? "pass" : "fail"}`,
    `- WCAG AA large text: ${ratio >= 3 ? "pass" : "fail"}`,
    `- WCAG AAA normal text: ${ratio >= 7 ? "pass" : "fail"}`,
    "",
    "## Visual Use",
    `- Foreground RGB: ${foregroundRgb}`,
    `- Background RGB: ${backgroundRgb}`,
    `- Recommended setting: ${ratio >= 7 ? "safe for body copy, dense dashboards, buttons, labels, and exported visual assets." : ratio >= 4.5 ? "safe for normal UI copy; test thin fonts, small captions, and compressed exports carefully." : "use only for large decorative text, or adjust one color before shipping."}`,
    "",
    "Use at least 4.5:1 for normal body text and 3:1 for large text or bold UI labels. For production artwork, screenshots, motion frames, and social graphics, keep this pairing consistent across the exported asset so the text remains readable after resizing or compression."
  ].join("\n");
}

function extractRequestedCount(prompt, nouns = []) {
  const source = extractOriginalPrompt(prompt);
  for (const noun of nouns) {
    const match = source.match(new RegExp(`\\b(\\d+(?:\\.\\d+)?)\\s*(?:${noun})\\b`, "i"));
    if (match) return Number(match[1]);
  }
  return findFirstPromptNumber(source, 0);
}

function fractionText(value) {
  const rounded = Math.round(value * 3) / 3;
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  if (Math.abs(fraction) < 0.01) return String(whole);
  if (Math.abs(fraction - 1 / 3) < 0.01) return whole ? `${whole} 1/3` : "1/3";
  if (Math.abs(fraction - 2 / 3) < 0.01) return whole ? `${whole} 2/3` : "2/3";
  if (Math.abs(fraction - 0.5) < 0.01) return whole ? `${whole} 1/2` : "1/2";
  return rounded.toFixed(2).replace(/\.?0+$/, "");
}

function kitchenFractionText(value) {
  const rounded = Math.round(value * 4) / 4;
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  if (Math.abs(fraction) < 0.01) return String(whole);
  if (Math.abs(fraction - 0.25) < 0.01) return whole ? `${whole} 1/4` : "1/4";
  if (Math.abs(fraction - 0.5) < 0.01) return whole ? `${whole} 1/2` : "1/2";
  if (Math.abs(fraction - 0.75) < 0.01) return whole ? `${whole} 3/4` : "3/4";
  return rounded.toFixed(2).replace(/\.?0+$/, "");
}

function tspBreakdown(tsp) {
  const tbsp = Math.floor(tsp / 3);
  const remaining = tsp - tbsp * 3;
  if (!tbsp) return `${fractionText(tsp)} tsp`;
  if (remaining < 0.05) return `${tbsp} Tbsp`;
  return `${tbsp} Tbsp + ${fractionText(remaining)} tsp`;
}

function parseBananaBreadRequest(prompt) {
  const original = extractOriginalPrompt(prompt);
  const number = findFirstPromptNumber(original, 50);
  const bananaCountMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:ripe\s+)?bananas?\b/i);
  const loafCountMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:loaves|loafs|breads?)\b/i);
  const asksToUseBananas = /\b(use|uses|using|use up|with)\b[\s\S]{0,24}\bbananas?\b/i.test(original)
    || /\bbananas?\b[\s\S]{0,24}\b(use|uses|using|use up)\b/i.test(original);
  if (bananaCountMatch || asksToUseBananas) return { mode: "bananas", count: Number(bananaCountMatch?.[1] || number) };
  if (loafCountMatch) return { mode: "loaves", count: Number(loafCountMatch[1]) };
  return { mode: "bananas", count: number };
}

function buildBananaNutBreadRecipeAnswer(prompt) {
  const request = parseBananaBreadRequest(prompt);
  const bananasPerLoaf = 3;
  const loaves = request.mode === "loaves" ? request.count : request.count / bananasPerLoaf;
  const bananas = request.mode === "loaves" ? request.count * bananasPerLoaf : request.count;
  const factor = loaves;
  const rows = [
    ["Ripe bananas", `${fractionText(bananas)} medium bananas`, "Mash well."],
    ["All-purpose flour", `${fractionText(2 * factor)} cups`, "Spoon and level if measuring by volume."],
    ["Sugar", `${fractionText(0.75 * factor)} cups`, "White, brown, or half-and-half."],
    ["Unsalted butter or neutral oil", `${fractionText(0.5 * factor)} cups`, `${fractionText(factor)} sticks of butter.`],
    ["Large eggs", `${fractionText(2 * factor)} eggs`, "Round to the nearest whole egg, or beat one egg and use only the needed portion."],
    ["Baking soda", tspBreakdown(factor), ""],
    ["Salt", tspBreakdown(0.5 * factor), ""],
    ["Vanilla extract", tspBreakdown(factor), ""],
    ["Chopped walnuts or pecans", `${fractionText(factor)} cups`, "Toast first for better flavor."],
    ["Ground cinnamon, optional", tspBreakdown(factor), ""]
  ];
  const wholeLoaves = Math.floor(loaves);
  const partialBananas = bananas - wholeLoaves * bananasPerLoaf;
  const panNote = request.mode === "bananas" && partialBananas > 0
    ? `This makes about ${fractionText(loaves)} standard 9x5 loaves. Practical bake plan: make ${wholeLoaves} full loaves with ${wholeLoaves * bananasPerLoaf} bananas, plus one smaller loaf/muffin batch using the remaining ${fractionText(partialBananas)} banana${partialBananas === 1 ? "" : "s"}.`
    : `This makes ${fractionText(loaves)} standard 9x5 loaf${Math.round(loaves) === 1 ? "" : "ves"}.`;
  const fiftyLoafNote = request.mode === "bananas"
    ? ["", "## If You Actually Meant 50 Full Loaves", "Use 150 bananas, 100 cups flour, 37 1/2 cups sugar, 25 cups butter/oil, 100 eggs, 50 tsp baking soda, 25 tsp salt, 50 tsp vanilla, and 50 cups nuts."].join("\n")
    : "";
  return [
    "# Direct Answer",
    "",
    request.mode === "bananas"
      ? `Assumption: you want to use up ${fractionText(bananas)} bananas for banana nut bread. A standard loaf uses 3 medium ripe bananas.`
      : `Assumption: you want ${fractionText(loaves)} full banana nut bread loaves. A standard loaf uses 3 medium ripe bananas, so this uses ${fractionText(bananas)} bananas.`,
    "",
    panNote,
    "",
    "## Scaled Ingredients",
    "| Ingredient | Amount Needed | Note |",
    "| --- | ---: | --- |",
    ...rows.map(([ingredient, amount, note]) => `| ${ingredient} | ${amount} | ${note || " "} |`),
    "",
    "## Baking Plan",
    "1. Heat oven to 350 F.",
    "2. Grease loaf pans or line with parchment.",
    "3. Mix mashed bananas, sugar, butter/oil, eggs, and vanilla.",
    "4. Fold in flour, baking soda, salt, cinnamon, and nuts.",
    "5. Fill pans about 2/3 full.",
    "6. Bake standard loaves 55-65 minutes, or until a tester comes out clean.",
    "7. Cool 10-15 minutes in pans, then move to racks.",
    fiftyLoafNote
  ].filter(Boolean).join("\n");
}

function isBurritoRecipeRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\bburritos?\b/.test(lower)
    && /\b(how much|how many|amounts?|ingredients?|ingreidents?|needed|make|recipe|batch)\b/.test(lower);
}

function buildBurritoIngredientAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const burritoCount = Math.max(1, Math.round(extractRequestedCount(original, ["burritos?"]) || findFirstPromptNumber(original, 30)));
  const sizeMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:\"|in|inch|inches)\b/i);
  const tortillaSize = Number(sizeMatch?.[1]) || 8;
  const eggs = Math.ceil(burritoCount * 1.5);
  const cheeseOz = burritoCount;
  const cheeseCups = cheeseOz / 4;
  const cookedSausageOz = burritoCount;
  const rawSausageLb = cookedSausageOz / 16 / 0.78;
  const baconSlices = burritoCount;
  const rawBaconLb = baconSlices / 16;
  const onionCups = burritoCount * 2 / 16;
  const mediumOnions = Math.ceil(onionCups);
  const tortillasWithWaste = Math.ceil(burritoCount * 1.1);
  return [
    "# Direct Answer",
    "",
    `For ${burritoCount} ${tortillaSize}-inch breakfast burritos with cheese, eggs, sausage, bacon, and onion, use these practical batch amounts. This assumes each burrito gets about 1 1/2 eggs, 1 oz cheese, 1 oz cooked sausage, 1 slice bacon, and 2 Tbsp diced onion.`,
    "",
    "## Ingredient Amounts",
    "| Ingredient | Amount For Batch | Buying / Prep Note |",
    "| --- | ---: | --- |",
    `| ${tortillaSize}-inch flour tortillas | ${burritoCount} needed; buy ${tortillasWithWaste} | Buy extras for tearing or overfilling. |`,
    `| Large eggs | ${eggs} eggs | Buy 4 dozen if making exactly ${burritoCount}; this gives a few spare. |`,
    `| Shredded cheese | ${cheeseOz} oz, about ${kitchenFractionText(cheeseCups)} cups | Buy 2 lb if you want a little extra. |`,
    `| Breakfast sausage | ${cookedSausageOz} oz cooked, about ${fractionText(cookedSausageOz / 16)} lb cooked | Start with about ${rawSausageLb.toFixed(1)} lb raw sausage. |`,
    `| Bacon | ${baconSlices} cooked slices | Buy about ${rawBaconLb.toFixed(1)} lb bacon; cook crisp, then crumble or halve slices. |`,
    `| Onion | ${kitchenFractionText(onionCups)} cups diced | About ${mediumOnions} medium onion${mediumOnions === 1 ? "" : "s"}. Saute before filling. |`,
    "",
    "## Seasoning / Cooking Add-Ons",
    "| Item | Amount |",
    "| --- | ---: |",
    "| Salt | 2-3 tsp total, added gradually |",
    "| Black pepper | 1-2 tsp |",
    "| Butter or oil for eggs/onions | 4-6 Tbsp |",
    "| Optional salsa/hot sauce | 2-4 cups on the side, not inside if freezing |",
    "",
    "## Assembly Plan",
    "1. Cook bacon, drain, and crumble or cut into pieces.",
    "2. Brown sausage and drain excess grease.",
    "3. Saute diced onion until soft.",
    "4. Scramble eggs softly; do not overcook if burritos will be reheated.",
    "5. Warm tortillas so they fold without cracking.",
    "6. Fill each tortilla with roughly: 1/2 cup egg, 2 Tbsp sausage, 1 slice bacon, 2 Tbsp onion, and 1/4 cup cheese.",
    "7. Roll tightly. Serve now, refrigerate, or wrap individually for freezing.",
    "",
    "## If The Burritos Need To Be Bigger",
    `For very full ${tortillaSize}-inch burritos, increase eggs to ${burritoCount * 2}, cheese to ${Math.ceil(burritoCount * 1.25)} oz, and use 10-inch tortillas instead.`
  ].join("\n");
}

function isEggFlockRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\b(egg|eggs)\b/.test(lower) && /\b(chicken|chickens|hen|hens|breed|breeds|flock)\b/.test(lower);
}

function buildEggFlockAnswer(prompt) {
  const targetEggs = Math.max(1, Math.round(extractRequestedCount(prompt, ["eggs?(?:\\s+per\\s+week)?", "eggs?"]) || 50));
  const highProducerHens = Math.ceil(targetEggs / 5.2);
  const bufferedHighProducerHens = Math.ceil(targetEggs / 4.5);
  const rhodeIslandHens = Math.ceil(targetEggs / 4.2);
  const dualPurposeHens = Math.ceil(targetEggs / 3.7);
  const mixedPlan = [
    { breed: "ISA Brown or Golden Comet", hens: Math.max(3, Math.round(bufferedHighProducerHens * 0.35)), eggs: 5.2 },
    { breed: "Rhode Island Red", hens: Math.max(3, Math.round(bufferedHighProducerHens * 0.3)), eggs: 4.4 },
    { breed: "Plymouth Rock", hens: Math.max(2, Math.round(bufferedHighProducerHens * 0.2)), eggs: 4 },
    { breed: "Australorp or Orpington", hens: Math.max(2, Math.round(bufferedHighProducerHens * 0.15)), eggs: 3.6 }
  ];
  const mixedTotalHens = mixedPlan.reduce((sum, item) => sum + item.hens, 0);
  const mixedEggs = Math.round(mixedPlan.reduce((sum, item) => sum + item.hens * item.eggs, 0));
  return [
    "# Direct Answer",
    "",
    `To reliably get about ${targetEggs} eggs per week, plan on ${bufferedHighProducerHens} good laying hens, not just the bare minimum ${highProducerHens}. The buffer matters because laying drops during winter, molting, heat stress, age, and short daylight.`,
    "",
    "## Straight Breed Options",
    "| Flock Type | Hens Needed | Expected Eggs/Week | Notes |",
    "| --- | ---: | ---: | --- |",
    `| ISA Brown / Golden Comet | ${bufferedHighProducerHens} hens | about ${Math.round(bufferedHighProducerHens * 5.2)} | Best production, friendly, shorter peak-laying lifespan |`,
    `| White Leghorn | ${Math.ceil(targetEggs / 4.8)}-${Math.ceil(targetEggs / 4.4)} hens | about ${targetEggs}+ | Excellent layers, lighter birds, can be flighty |`,
    `| Rhode Island Red | ${rhodeIslandHens} hens | about ${Math.round(rhodeIslandHens * 4.2)} | Hardy, common, usually good backyard birds |`,
    `| Plymouth Rock / Australorp / Orpington mix | ${dualPurposeHens} hens | about ${Math.round(dualPurposeHens * 3.7)} | Calmer dual-purpose flock, fewer eggs per bird |`,
    "",
    "## Recommended Mixed Flock",
    `Use ${mixedTotalHens} hens total for a practical, friendly flock that should average around ${mixedEggs} eggs per week in good laying conditions:`,
    ...mixedPlan.map((item) => `- ${item.hens} ${item.breed} hen${item.hens === 1 ? "" : "s"}`),
    "",
    "## Compatibility Notes",
    "- These breeds generally get along if they are raised together or introduced slowly.",
    "- Keep similar age/size birds together when possible.",
    "- Provide at least 4 sq ft per bird inside the coop and 10 sq ft per bird in the run.",
    "- Give multiple feeders/waterers if mixing bold production birds with calmer breeds.",
    "- For steady eggs, add light in winter only if you are comfortable with year-round production pressure.",
    "",
    "## Bottom Line",
    `Buy ${bufferedHighProducerHens} high-production hens for the smallest reliable flock, or ${mixedTotalHens} mixed-breed hens for a friendlier, more balanced backyard flock.`
  ].join("\n");
}

function parseRoomDimensions(prompt) {
  const source = extractOriginalPrompt(prompt);
  const dimensionMatch = source.match(/\b(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')?\s*(?:x|by)\s*(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')?\b/i);
  const width = Number(dimensionMatch?.[1]) || 10;
  const length = Number(dimensionMatch?.[2]) || width;
  const heightMatch = source.match(/\b(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')\s*(?:high|height|wall|walls|ceiling)\b/i);
  const height = Number(heightMatch?.[1]) || 8;
  const doorMatch = source.match(/\b(\d+(?:\.\d+)?)\s*(?:"|in|inch|inches)\s*(?:wide\s*)?door\b/i)
    || source.match(/\b(\d+(?:\.\d+)?)\s*(?:-| )?in(?:ch)?\s*door\b/i);
  const doorWidthIn = Number(doorMatch?.[1]) || (/\bdoor\b/i.test(source) ? 36 : 0);
  return { width, length, height, doorWidthIn };
}

function isRoomMaterialRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\b(room|wall|walls|framing|drywall|sheetrock|2x4|studs?|drop ceiling|ceiling tile)\b/.test(lower)
    && /\b(build|need|how many|materials?|sheets?|screws?|door|cut|measurements?)\b/.test(lower);
}

function buildRoomMaterialAnswer(prompt) {
  const { width, length, height, doorWidthIn } = parseRoomDimensions(prompt);
  const perimeter = 2 * (width + length);
  const wallArea = perimeter * height;
  const doorArea = doorWidthIn ? (doorWidthIn / 12) * 6.67 : 0;
  const netWallArea = Math.max(0, wallArea - doorArea);
  const drywallInside = Math.ceil((netWallArea / 32) * 1.1);
  const drywallBothSides = drywallInside * 2;
  const wallLengths = [width, length, width, length];
  const baseStuds = wallLengths.reduce((sum, feet) => sum + Math.ceil((feet * 12) / 16) + 1, 0);
  const doorFramingExtra = doorWidthIn ? 5 : 0;
  const verticalStuds = baseStuds + doorFramingExtra;
  const plateBoards8 = Math.ceil((perimeter * 2 * 1.1) / 8);
  const blockingAndWaste = Math.ceil(verticalStuds * 0.08) + 2;
  const total2x4x8 = verticalStuds + plateBoards8 + blockingAndWaste;
  const drywallScrews = Math.ceil((drywallInside * 36 * 1.15) / 50) * 50;
  const drywallScrewsBothSides = drywallScrews * 2;
  const framingScrews = Math.ceil((total2x4x8 * 6 * 1.15) / 50) * 50;
  const ceilingTiles2x2 = Math.ceil(width * length / 4 * 1.1);
  const ceilingTiles2x4 = Math.ceil(width * length / 8 * 1.1);
  const wallAngle = Math.ceil(perimeter);
  return [
    "# Direct Answer",
    "",
    `For a ${width} ft x ${length} ft room with ${height} ft walls, one ${doorWidthIn || 36} in door, and a drop ceiling, use this as a practical first-pass material estimate. This assumes non-load-bearing interior framing at 16 in on center and drywall on the inside wall faces only. If both sides of the new walls need drywall, use the both-sides count below.`,
    "",
    "## Quick Quantity Answer",
    `- # 2x4s: about ${total2x4x8} boards if buying mostly 2x4x8 stock.`,
    `- # drywall panels: ${drywallInside} sheets of 4x8 drywall for inside faces only, or ${drywallBothSides} sheets for both sides of all new walls.`,
    `- # drywall screws: about ${drywallScrews} 1 1/4 in drywall screws for inside faces only, or about ${drywallScrewsBothSides} for both sides.`,
    `- # framing screws/nails: about ${framingScrews} 3 in framing screws or equivalent nails.`,
    "",
    "## Framing Breakdown",
    "| Item | Estimate | Notes |",
    "| --- | ---: | --- |",
    `| Wall perimeter | ${perimeter} linear ft | Four walls around the room |`,
    `| Vertical studs | ${verticalStuds} pieces | Includes door king/jack/cripple allowance |`,
    `| Plate stock | ${plateBoards8} 2x4x8 boards | Bottom plate plus top plate; buy long plates if preferred |`,
    `| Blocking/waste allowance | ${blockingAndWaste} boards | Corners, backing, mistakes, short pieces |`,
    `| Total 2x4x8 equivalent | ${total2x4x8} boards | Round up if walls must be perfectly straight |`,
    "",
    "## Drywall Breakdown",
    "| Surface | Area | 4x8 Sheets |",
    "| --- | ---: | ---: |",
    `| Wall area before door | ${Math.round(wallArea)} sq ft | ${Math.ceil(wallArea / 32)} |`,
    `| Door subtraction | -${Math.round(doorArea)} sq ft | - |`,
    `| Inside wall faces plus 10% waste | ${Math.round(netWallArea * 1.1)} sq ft | ${drywallInside} |`,
    `| Both sides plus 10% waste | ${Math.round(netWallArea * 2.2)} sq ft | ${drywallBothSides} |`,
    "",
    "## Drop Ceiling Add-On",
    `- Wall angle: about ${wallAngle} linear ft.`,
    `- 2x2 ceiling tiles: about ${ceilingTiles2x2} tiles with waste, or 2x4 tiles: about ${ceilingTiles2x4} tiles with waste.`,
    "- Main runners/cross tees depend on the grid brand, but a 10x10 room normally needs one small-room kit or equivalent grid components.",
    "",
    "## Before Buying",
    "- Check whether the walls are load-bearing. If yes, do not use this as a structural plan.",
    "- Confirm actual ceiling height, door rough opening, electrical boxes, and whether drywall is needed on one side or both sides.",
    "- Buy a few extra straight studs for corners, backing, and mistakes; crooked studs waste time."
  ].join("\n");
}

function isConstructionBlueprintRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\b(blueprint|plan|plans|build|building|materials?|cut list|cutlist|measurements?|dimensions?|lumber|plywood|framing|layout|drywall|2x4|studs?)\b/.test(lower)
    && /\b(chicken|coop|shed|deck|cabinet|table|workbench|greenhouse|shelf|shelves|fence|pergola|frame|room|wall|garage|barn)\b/.test(lower);
}

function buildChickenCoopBlueprintAnswer(prompt) {
  const hens = Math.max(1, Math.round(extractRequestedCount(prompt, ["chickens?", "hens?", "birds?"]) || 6));
  const coopWidth = hens <= 8 ? 4 : hens <= 12 ? 6 : 8;
  const coopLength = hens <= 8 ? 8 : hens <= 12 ? 8 : 10;
  const runWidth = hens <= 8 ? 8 : hens <= 12 ? 10 : 12;
  const runLength = hens <= 8 ? 12 : hens <= 12 ? 16 : 20;
  const frontHeight = 72;
  const backHeight = 60;
  const coopWidthIn = coopWidth * 12;
  const coopLengthIn = coopLength * 12;
  const floorJoist = coopWidthIn - 3;
  const sidePlate = coopWidthIn - 3;
  const studFront = frontHeight - 3;
  const studBack = backHeight - 3;
  const rafter = coopWidthIn + 12;
  const longStudCount = Math.ceil(coopLengthIn / 16) + 1;
  const sideStudCount = Math.ceil(coopWidthIn / 16) + 1;
  const roofSheets = Math.max(2, Math.ceil((coopLength + 1) * (coopWidth + 1) / 32));
  const sidingSheets = Math.max(6, Math.ceil(((coopLength * frontHeight / 12) + (coopLength * backHeight / 12) + (coopWidth * 2 * 66 / 12)) / 32));
  const lumber2x4 = hens <= 8 ? 34 : hens <= 12 ? 46 : 62;
  const hardwareClothSqft = Math.ceil((2 * (runWidth + runLength) * 6 + runWidth * runLength) * 1.15);
  return [
    "# Direct Answer",
    "",
    `Here is a usable starter blueprint for a predator-resistant chicken coop sized for about ${hens} chicken${hens === 1 ? "" : "s"}.`,
    "",
    "## Assumed Finished Size",
    `- Coop footprint: ${coopWidth} ft x ${coopLength} ft (${coopWidth * coopLength} sq ft).`,
    `- Coop height: ${frontHeight / 12} ft front wall, ${backHeight / 12} ft back wall, single-slope shed roof.`,
    `- Outdoor run: ${runWidth} ft x ${runLength} ft x 6 ft tall.`,
    "- Floor: raised 18-24 in above grade on skids or posts.",
    "- Interior: 2 nesting boxes for up to 6 hens; add 1 box per 3-4 additional hens.",
    "",
    "## Material List",
    "| Material | Estimated Quantity | Use |",
    "| --- | ---: | --- |",
    `| 2x4x8 lumber | ${lumber2x4} boards | Floor frame, wall framing, rafters, doors, roosts |`,
    `| 2x6x8 pressure-treated lumber | ${coopLength <= 8 ? 6 : 8} boards | Base skids and floor rim |`,
    `| 4x4x8 pressure-treated posts | ${hens <= 8 ? 6 : 8} posts | Run corners and gate posts |`,
    "| 3/4 in exterior plywood | 1 sheet | Coop floor |",
    `| 1/2 in exterior plywood or T1-11 siding | ${sidingSheets} sheets | Coop walls, doors, nesting box faces |`,
    `| 1/2 in roof sheathing plywood | ${roofSheets} sheets | Roof deck if not using purlins |`,
    "| Corrugated metal/polycarbonate roofing | 3-5 panels | Weatherproof roof with overhang |",
    `| 1/2 in galvanized hardware cloth | about ${hardwareClothSqft} sq ft | Run walls, vents, predator apron |`,
    "| Exterior screws | 5 lb box, 2 1/2 in | Framing |",
    "| Exterior screws | 1 lb box, 1 1/4 in | Sheathing and trim |",
    "| Hinges | 6 heavy-duty | Human door, egg door, run gate |",
    "| Latches | 4 predator-resistant | Doors and nesting access |",
    "",
    "## Cut List",
    "| Part | Material | Cut Quantity x Length | Notes |",
    "| --- | --- | --- | --- |",
    `| Floor long rims | 2x6 | 2 x ${coopLengthIn} in | Front/back floor frame |`,
    `| Floor end rims | 2x6 | 2 x ${floorJoist} in | Fits between long rims |`,
    `| Floor joists | 2x6 | ${Math.max(4, Math.ceil(coopLengthIn / 16))} x ${floorJoist} in | 16 in on center |`,
    `| Front wall plates | 2x4 | 2 x ${coopLengthIn} in | Top and bottom plates |`,
    `| Front wall studs | 2x4 | ${longStudCount} x ${studFront} in | Gives ${frontHeight / 12} ft wall height |`,
    `| Back wall plates | 2x4 | 2 x ${coopLengthIn} in | Top and bottom plates |`,
    `| Back wall studs | 2x4 | ${longStudCount} x ${studBack} in | Gives ${backHeight / 12} ft wall height |`,
    `| Side wall plates | 2x4 | 4 x ${sidePlate} in | Two plates per side |`,
    `| Side wall studs | 2x4 | ${sideStudCount} x ${studFront} in and ${sideStudCount} x ${studBack} in | Cut middle studs to roof slope after dry-fit |`,
    `| Roof rafters | 2x4 | ${longStudCount} x ${rafter} in | Allows about 6 in overhang each side |`,
    "| Human cleanout door | 2x4 frame | 2 x 60 in, 2 x 21 in | Makes a 24 in x 60 in door with sheathing |",
    "| Chicken pop door | plywood | 1 x 12 in by 14 in | Add slide track or hinged latch |",
    "| Nesting boxes | 1/2 in plywood | 2 bottoms 12x12, 4 sides 12x12, 2 backs 12x12 | Add more boxes if over 8 hens |",
    "",
    "## Build Order",
    "1. Build the raised floor frame square, then fasten the plywood floor.",
    "2. Frame front and back walls flat on the floor deck, stand them, and brace plumb.",
    "3. Frame both side walls between front/back walls; field-cut the sloped studs to match the shed roof.",
    "4. Add rafters, roof sheathing or purlins, then roofing panels with 3-6 in overhang.",
    "5. Sheath the walls, cut door openings, and install doors and latches.",
    "6. Build the run, attach hardware cloth, and add the buried predator apron.",
    "",
    "## Important Checks Before Cutting",
    "- Confirm bird count, yard footprint, snow/wind load, and local setback rules.",
    "- Measure the assembled frame before cutting siding and roofing.",
    "- Use hardware cloth, not chicken wire, anywhere predators can reach."
  ].join("\n");
}

function buildConstructionBlueprintAnswer(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  if (isRoomMaterialRequest(prompt)) return buildRoomMaterialAnswer(prompt);
  if (/\b(chicken|coop|hen|hens)\b/.test(lower)) return buildChickenCoopBlueprintAnswer(prompt);
  const subject = titleFromPrompt(prompt);
  return [
    "# Direct Answer",
    "",
    `Here is a build-ready planning format for: ${subject}`,
    "",
    "## Assumptions To Lock Before Cutting",
    "- Final width, depth, and height.",
    "- Indoor/outdoor use.",
    "- Expected weight/load.",
    "- Material preference: framing lumber, plywood, metal, PVC, or composite.",
    "- Finish requirements: paint, stain, waterproofing, or food-safe seal.",
    "",
    "## Blueprint-Style Build Sheet",
    "| Section | What To Define | Output Needed |",
    "| --- | --- | --- |",
    "| Overall dimensions | Width x depth x height | Finished footprint and clearance |",
    "| Frame | Stud/rail spacing and fasteners | Lumber cut list |",
    "| Panels | Plywood/siding/decking layout | Sheet goods cut list |",
    "| Openings | Doors, vents, drawers, windows, access panels | Exact opening sizes |",
    "| Hardware | Hinges, brackets, latches, screws | Purchase list |",
    "| Finish | Weatherproofing or interior finish | Paint/stain/seal plan |",
    "",
    "## Starter Cut-List Method",
    "1. Draw the finished rectangle first.",
    "2. Subtract 3 in from pieces that fit between two 2x framing boards.",
    "3. Put vertical supports every 16 in on center unless the structure is light-duty.",
    "4. Cut panels after the frame is square, not before.",
    "5. Label every cut piece by assembly: base, left wall, right wall, front, back, roof/top, doors."
  ].join("\n");
}

function buildContentMarketingAnswer(prompt) {
  const subject = titleFromPrompt(prompt);
  const lower = normalize(prompt);
  const isEmail = /\bemail|newsletter|subject line|customer follow/i.test(lower);
  const isSeo = /\bseo|blog|meta|keyword|landing page/i.test(lower);
  return [
    "# Direct Answer",
    "",
    `Use this content pack for: ${subject}`,
    "",
    "## Positioning",
    "- Audience: the people most likely to need the offer or information in the prompt.",
    "- Core promise: make the result clear, useful, and easy to act on.",
    "- Tone: practical, direct, and specific; avoid vague hype.",
    "",
    isEmail ? "## Email Draft" : "## Main Copy",
    isEmail
      ? [
          "Subject: Quick update for your next step",
          "",
          "Hi [Name],",
          "",
          `I wanted to follow up about ${subject}. The next best step is to confirm the details, choose a date, and make sure nothing is missing before we move forward.`,
          "",
          "Reply with any changes, questions, or timing constraints and I will update the plan.",
          "",
          "Thanks,"
        ].join("\n")
      : [
          `Headline: ${subject}`,
          "",
          "Short body: Get the key details in one clear plan, with the next action already mapped out.",
          "",
          "Call to action: Review the details, choose the option that fits, and save the final version."
        ].join("\n"),
    "",
    "## Variants",
    "- Short social post: Clear, useful, and ready to act on. Here is the plan, the key details, and the next step.",
    "- Friendly version: Here is the simplest way to move this forward without guessing or missing the important pieces.",
    "- Professional version: The attached plan summarizes the goal, working assumptions, action items, and recommended next step.",
    "",
    isSeo ? "## SEO Structure\n- Page title: Keep under 60 characters.\n- Meta description: Keep under 155 characters.\n- Include the main keyword in the heading, opening paragraph, and one subheading.\n- Add a clear FAQ section with real customer questions." : "",
    "",
    "## Quality Checks",
    "- Names, prices, dates, and claims from the prompt are preserved.",
    "- The first sentence explains the value.",
    "- The CTA tells the reader exactly what to do next.",
    "- The final version can be copied into email, social, web, or a document without internal ToolGrid notes."
  ].filter(Boolean).join("\n");
}

function buildDataWorkflowAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const columnMatch = original.match(/\b(?:columns?|fields?)\s*(?:are|:)?\s*([^.\n]+)/i);
  const columns = (columnMatch?.[1] || "date, name, category, amount, status, notes")
    .split(/[,|]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 10);
  return [
    "# Direct Answer",
    "",
    `Use this data workflow for: ${titleFromPrompt(prompt)}`,
    "",
    "## Output Table",
    `| ${columns.join(" | ")} | Issue Flag | Cleaned Value |`,
    `| ${columns.map(() => "---").join(" | ")} | --- | --- |`,
    `| sample | ${columns.slice(1).map(() => "sample").join(" | ")} | Check blanks, duplicates, bad formats | normalized row |`,
    "",
    "## Cleaning Rules",
    "1. Trim leading/trailing spaces from every text field.",
    "2. Standardize dates to YYYY-MM-DD where possible.",
    "3. Standardize money/number fields to plain numbers.",
    "4. Remove exact duplicate rows.",
    "5. Flag rows missing required fields instead of silently deleting them.",
    "6. Keep an original-value column when a value is changed.",
    "",
    "## Summary Report",
    "- Total rows received: count all input rows.",
    "- Rows cleaned: count rows with at least one changed value.",
    "- Duplicates removed: count exact duplicate rows.",
    "- Rows needing review: count missing or invalid required values.",
    "- Export: CSV-ready table plus a short markdown summary.",
    "",
    "## Handoff",
    "After cleaning, save the cleaned table, the issue list, and the assumptions used so the user can audit the changes."
  ].join("\n");
}

function buildScheduleOperationsAnswer(prompt) {
  return [
    "# Direct Answer",
    "",
    `Use this operations plan for: ${titleFromPrompt(prompt)}`,
    "",
    "## Working Schedule",
    "| Phase | Owner | Due | Output |",
    "| --- | --- | --- | --- |",
    "| 1. Intake | Project owner | Today | Goal, constraints, and required output confirmed |",
    "| 2. Prep | Assigned helper/team | Next available work block | Materials, files, contacts, and calendar holds ready |",
    "| 3. Execution | Task owner | Main work window | Work completed in order, blockers logged |",
    "| 4. Review | Project owner | Same day as completion | Check quality, missing items, and next actions |",
    "| 5. Handoff | Project owner | Final step | Save, share, print, or send final output |",
    "",
    "## Checklist",
    "- Define the final deliverable before starting.",
    "- Put deadlines and appointments on the calendar.",
    "- Assign one owner per task.",
    "- List materials, files, links, contacts, or budget limits.",
    "- Add a review step before anything is submitted, printed, cut, sent, or purchased.",
    "- Save the finished answer and any generated file.",
    "",
    "## Risk Controls",
    "- If a required detail is missing, make a visible assumption and label it.",
    "- If cost or safety is involved, add a verify-before-buying or verify-before-building step.",
    "- If another person must approve it, put approval before final handoff."
  ].join("\n");
}

function parseMoneyNumbers(prompt) {
  return [...String(prompt || "").matchAll(/\$?\b(\d+(?:,\d{3})*(?:\.\d+)?)\b/g)].map((match) => Number(match[1].replaceAll(",", ""))).filter(Number.isFinite);
}

function extractInvestmentAmount(prompt) {
  const text = String(prompt || "");
  const millionMatch = text.match(/\$?\b(\d+(?:\.\d+)?)\s*(?:million|m)\b/i);
  if (millionMatch) return Number(millionMatch[1]) * 1000000;
  const dollarMatch = text.match(/\$?\b(\d+(?:,\d{3})*(?:\.\d+)?)\s*dollars?\b/i);
  if (dollarMatch) return Number(dollarMatch[1].replaceAll(",", ""));
  const numbers = parseMoneyNumbers(text);
  return numbers.find((value) => value >= 10000) || (/\bmillion dollars?\b/i.test(text) ? 1000000 : 0);
}

function buildInvestmentPlanningAnswer(prompt) {
  const amount = extractInvestmentAmount(prompt) || 1000000;
  const money = (value) => `$${Math.round(value).toLocaleString()}`;
  const conservative = [
    ["Cash / T-bills / money market", 0.15, "Near-term needs, emergency reserve, dry powder"],
    ["High-quality bonds / bond funds", 0.35, "Stability and income"],
    ["Broad stock index funds / ETFs", 0.45, "Long-term growth"],
    ["Alternatives / real estate / small tilt", 0.05, "Optional diversification after core portfolio"]
  ];
  const moderate = [
    ["Cash / T-bills / money market", 0.10, "1-3 years of known spending or opportunity fund"],
    ["High-quality bonds / bond funds", 0.25, "Reduce volatility and fund rebalancing"],
    ["Broad U.S. stock index funds / ETFs", 0.40, "Core long-term growth"],
    ["Broad international stock index funds / ETFs", 0.15, "Global diversification"],
    ["REITs or other diversified alternatives", 0.10, "Optional, keep costs and liquidity in mind"]
  ];
  const aggressive = [
    ["Cash / T-bills / money market", 0.05, "Known short-term needs"],
    ["Bonds / bond funds", 0.15, "Shock absorber"],
    ["Broad U.S. stock index funds / ETFs", 0.55, "Main growth engine"],
    ["Broad international stock index funds / ETFs", 0.20, "Global growth/diversification"],
    ["Small/value/sector tilt or alternatives", 0.05, "Only if you understand the risk"]
  ];
  const tableRows = (rows) => rows.map(([bucket, pct, reason]) => `| ${bucket} | ${(pct * 100).toFixed(0)}% | ${money(amount * pct)} | ${reason} |`).join("\n");
  return [
    "# Direct Answer",
    "",
    `There is no single "best" investment for ${money(amount)}. The best plan depends on time horizon, risk tolerance, taxes, debt, income needs, and whether the money must be protected for a near-term goal. This is educational, not personal financial advice.`,
    "",
    "If the money is long-term and high-interest debt plus emergency cash are already handled, the practical starting answer is usually a low-cost, diversified portfolio rather than one stock, one coin, one fund, or one real-estate deal.",
    "",
    "## First Moves Before Investing",
    "1. Keep an emergency reserve in cash, Treasury bills, or a high-yield savings/money-market style account.",
    "2. Pay off high-interest debt before taking market risk.",
    "3. Set aside near-term spending money separately if you need it within 1-3 years.",
    "4. Maximize appropriate tax-advantaged accounts where possible.",
    "5. Decide whether the goal is preservation, income, growth, or a mix.",
    "6. Talk with a fiduciary financial planner and tax professional before placing a large lump sum.",
    "",
    "## Sample $1,000,000 Allocation Frameworks",
    "These are starting frameworks, not recommendations to buy specific securities.",
    "",
    "### Conservative",
    "| Bucket | Share | Dollar Amount | Purpose |",
    "| --- | ---: | ---: | --- |",
    tableRows(conservative),
    "",
    "### Moderate",
    "| Bucket | Share | Dollar Amount | Purpose |",
    "| --- | ---: | ---: | --- |",
    tableRows(moderate),
    "",
    "### Aggressive Long-Term",
    "| Bucket | Share | Dollar Amount | Purpose |",
    "| --- | ---: | ---: | --- |",
    tableRows(aggressive),
    "",
    "## What I Would Need To Narrow It",
    "- Age and investing time horizon.",
    "- Whether this money is for retirement, income, business, house purchase, education, or general wealth building.",
    "- Existing debt, emergency fund, income, tax bracket, and current investments.",
    "- How much loss you could tolerate without panic-selling.",
    "- Whether you need monthly income or can leave the money alone for 10+ years.",
    "",
    "## Plain-English Bottom Line",
    `For a generic ${money(amount)} scenario, the most defensible default is not a flashy pick. It is a diversified, low-cost portfolio with enough cash/bonds for safety and broad stock index exposure for growth, adjusted to the user's timeline and risk tolerance.`
  ].join("\n");
}

function buildMoneyCalculationAnswer(prompt) {
  const lower = normalize(prompt);
  const nums = parseMoneyNumbers(prompt);
  if (/\bloan|mortgage|payment|interest|apr\b/.test(lower) && nums.length >= 3) {
    const principal = nums[0];
    const annualRate = nums.find((value, index) => index > 0 && value > 0 && value < 30) || nums[1];
    const years = nums.find((value) => value >= 1 && value <= 40 && value !== annualRate) || nums[2];
    const monthlyRate = annualRate / 100 / 12;
    const payments = years * 12;
    const monthly = monthlyRate === 0 ? principal / payments : principal * (monthlyRate * (1 + monthlyRate) ** payments) / ((1 + monthlyRate) ** payments - 1);
    const totalPaid = monthly * payments;
    return [
      "# Direct Answer",
      "",
      `For a $${Math.round(principal).toLocaleString()} loan at ${annualRate}% for ${years} years, the estimated payment is about $${monthly.toFixed(2)} per month.`,
      "",
      "## Breakdown",
      `- Principal: $${Math.round(principal).toLocaleString()}`,
      `- Term: ${years} years / ${payments} payments`,
      `- Estimated monthly payment: $${monthly.toFixed(2)}`,
      `- Total paid: $${totalPaid.toFixed(2)}`,
      `- Estimated interest: $${(totalPaid - principal).toFixed(2)}`,
      "",
      "## Note",
      "This is a basic principal-and-interest estimate. Taxes, insurance, fees, PMI, escrow, and lender terms can change the real payment."
    ].join("\n");
  }
  if (/\btip|split|bill\b/.test(lower) && nums.length >= 2) {
    const bill = nums[0];
    const tipPercent = nums.find((value) => value > 0 && value <= 40) || 20;
    const people = nums.find((value) => value > 1 && value < 30 && value !== tipPercent) || 1;
    const tip = bill * tipPercent / 100;
    const total = bill + tip;
    return [
      "# Direct Answer",
      "",
      `For a $${bill.toFixed(2)} bill with a ${tipPercent}% tip, total is $${total.toFixed(2)}.`,
      "",
      "## Breakdown",
      `- Tip: $${tip.toFixed(2)}`,
      `- Total: $${total.toFixed(2)}`,
      `- Per person: $${(total / people).toFixed(2)} across ${people} ${people === 1 ? "person" : "people"}`
    ].join("\n");
  }
  return [
    "# Direct Answer",
    "",
    `Use this money plan for: ${titleFromPrompt(prompt)}`,
    "",
    "## Calculation Setup",
    "| Field | What To Enter |",
    "| --- | --- |",
    "| Starting amount | Principal, subtotal, bill amount, or budget total |",
    "| Rate or percent | Tax, tip, interest, markup, discount, or growth rate |",
    "| Time or quantity | Months, years, people, units, or line items |",
    "| Final output | Payment, total, profit, remaining budget, or per-person split |",
    "",
    "## Handoff",
    "Add the exact numbers and ToolGrid can produce the final calculated amount, itemized breakdown, and assumption notes."
  ].join("\n");
}

function buildSoilMixAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const totalMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(gallons?|gal|quarts?|liters?|litres?|cubic feet|cu ft|bags?)\s+total\b/i)
    || original.match(/\bfrom\s+(\d+(?:\.\d+)?)\s*(gallons?|gal|quarts?|liters?|litres?|cubic feet|cu ft|bags?)\b/i);
  const total = Number(totalMatch?.[1]) || findFirstPromptNumber(original, 10);
  const unit = totalMatch?.[2] || "gallons";
  const partMatches = [...original.matchAll(/\b(\d+(?:\.\d+)?)\s+parts?\s+([a-zA-Z][a-zA-Z ]{1,24})(?=\s+\d+\s+parts?|\s*$|,|;)/gi)];
  const parts = partMatches.length
    ? partMatches.map((match) => ({ amount: Number(match[1]), name: match[2].trim() }))
    : [
      { amount: 1, name: "compost" },
      { amount: 1, name: "peat/coir" },
      { amount: 1, name: "perlite" }
    ];
  const totalParts = parts.reduce((sum, item) => sum + item.amount, 0) || 1;
  return [
    "# Direct Answer",
    "",
    `For a ${formatNumber(total)} ${unit} soil mix, divide the total by ${formatNumber(totalParts)} total parts.`,
    "",
    "## Mix Amounts",
    "| Component | Parts | Amount Needed |",
    "| --- | ---: | ---: |",
    ...parts.map((item) => `| ${item.name} | ${formatNumber(item.amount)} | ${formatNumber(total * item.amount / totalParts, 2)} ${unit} |`),
    "",
    "## Practical Mixing Notes",
    "- Moisten peat/coir before final measuring if it is very dry.",
    "- Mix dry components first, then add water slowly.",
    "- For vegetables, add fertilizer or amendments separately based on the crop and soil test.",
    "- Keep one extra small container of compost/perlite available for texture adjustments."
  ].join("\n");
}

function buildGardeningAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  if (/\bsoil mix|compost|perlite|peat|coir\b/i.test(original)) return buildSoilMixAnswer(prompt);
  const bedMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')?\s*(?:x|by)\s*(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')?\b/i);
  const spacingMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:in|inch|inches|")\s*(?:spacing|apart|space)\b/i);
  const width = Number(bedMatch?.[1]);
  const length = Number(bedMatch?.[2]);
  const spacing = Number(spacingMatch?.[1]);
  const hasPlantCount = width && length && spacing;
  const across = hasPlantCount ? Math.floor((width * 12) / spacing) : 0;
  const down = hasPlantCount ? Math.floor((length * 12) / spacing) : 0;
  const count = Math.max(0, across * down);
  return [
    "# Direct Answer",
    "",
    hasPlantCount
      ? `For a ${width} ft x ${length} ft bed with ${spacing} in spacing, plan on about ${count} plants in a simple grid (${across} across by ${down} down).`
      : `Use this garden plan for: ${titleFromPrompt(prompt)}`,
    "",
    "## Planting Plan",
    hasPlantCount ? `- Bed area: ${width * length} sq ft.` : "- Measure the bed length and width.",
    hasPlantCount ? `- Spacing: ${spacing} in on center.` : "- Choose spacing by mature plant width.",
    hasPlantCount ? `- Practical count: ${count} plants before path/edge adjustments.` : "- Count planting positions row by row.",
    "- Leave room at edges for airflow and harvesting.",
    "- Group plants with similar water and sun needs.",
    "",
    "## Soil And Care",
    "- Add compost before planting.",
    "- Mulch after seedlings are established.",
    "- Water deeply instead of lightly sprinkling.",
    "- Recheck spacing if the crop sprawls, vines, or needs trellis support."
  ].join("\n");
}

function buildGenericRecipeAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const fromTo = original.match(/\bfrom\s+(\d+(?:\.\d+)?)\s+(?:to|servings?\s+to)\s+(\d+(?:\.\d+)?)/i);
  const toOnly = original.match(/\b(?:for|to)\s+(\d+(?:\.\d+)?)\s+(?:servings?|people|guests?)\b/i);
  const ingredientScale = original.match(/\bscale\s+(\d+(?:\.\d+)?)\s+([a-zA-Z]+)\s+([a-zA-Z][a-zA-Z ]{1,40}?)\s+from\s+(\d+(?:\.\d+)?)\s+servings?\s+to\s+(\d+(?:\.\d+)?)\s+servings?/i);
  if (ingredientScale) {
    const amount = Number(ingredientScale[1]);
    const unit = ingredientScale[2];
    const ingredient = ingredientScale[3].trim();
    const fromServings = Number(ingredientScale[4]);
    const toServings = Number(ingredientScale[5]);
    const factor = toServings / fromServings;
    const scaled = amount * factor;
    return [
      "# Direct Answer",
      "",
      `For ${toServings} servings, ${amount} ${unit} ${ingredient} becomes ${fractionText(scaled)} ${unit} ${ingredient}.`,
      "",
      "## Scaling Math",
      `- Original servings: ${fromServings}`,
      `- Desired servings: ${toServings}`,
      `- Multiplier: ${formatNumber(factor, 3)}x`,
      `- Calculation: ${formatNumber(amount)} ${unit} x ${formatNumber(factor, 3)} = ${fractionText(scaled)} ${unit}`,
      "",
      "## Batch Notes",
      "- Multiply every other ingredient by the same multiplier.",
      "- Taste-adjust salt, hot spices, acids, and extracts after mixing.",
      "- Baking pan depth and cooking time may need adjustment when the batch size changes."
    ].join("\n");
  }
  const from = Number(fromTo?.[1]) || 4;
  const to = Number(fromTo?.[2] || toOnly?.[1]) || 8;
  const factor = to / from;
  return [
    "# Direct Answer",
    "",
    `Multiply each ingredient by ${factor.toFixed(2).replace(/\.?0+$/, "")}x to move from ${from} servings to ${to} servings.`,
    "",
    "## Scaling Table",
    "| Original Amount | New Amount |",
    "| ---: | ---: |",
    `| 1 cup | ${fractionText(factor)} cups |`,
    `| 1 Tbsp | ${fractionText(factor)} Tbsp |`,
    `| 1 tsp | ${fractionText(factor)} tsp |`,
    `| 1 lb | ${fractionText(factor)} lb |`,
    "",
    "## Cooking Notes",
    "- Seasoning, salt, hot spices, and leavening may need small taste/texture adjustments after scaling.",
    "- Pan size and cooking time do not always scale linearly.",
    "- For baked goods, keep batter depth similar to the original recipe."
  ].join("\n");
}

function buildDeveloperUtilityAnswer(prompt) {
  const original = extractOriginalPrompt(prompt);
  const lower = normalize(original);
  const quoted = original.match(/["'`](.+?)["'`]/)?.[1] || "";
  if (/\bhtml escape|escape html|html escaper\b/.test(lower) && quoted) {
    const escaped = quoted
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
    return ["# Direct Answer", "", `HTML escaped output: \`${escaped}\``, "", "Use this when text must be displayed as literal content inside HTML instead of being interpreted as markup."].join("\n");
  }
  if (/\bbase64 encode|encode base64\b/.test(lower) && quoted) {
    const encoded = typeof btoa === "function" ? btoa(unescape(encodeURIComponent(quoted))) : Buffer.from(quoted, "utf8").toString("base64");
    return ["# Direct Answer", "", `Base64 encoded output: \`${encoded}\``, "", "Use Base64 for transport encoding, not as encryption."].join("\n");
  }
  if (/\bbase64 decode|decode base64\b/.test(lower) && quoted) {
    let decoded = "";
    try {
      decoded = typeof atob === "function" ? decodeURIComponent(escape(atob(quoted))) : Buffer.from(quoted, "base64").toString("utf8");
    } catch {
      decoded = "Input could not be decoded as valid Base64.";
    }
    return ["# Direct Answer", "", `Base64 decoded output: \`${decoded}\``, "", "If this looks garbled, confirm the original text was encoded as UTF-8."].join("\n");
  }
  if (/\burl encode|encode url|url-encode\b/.test(lower) && quoted) {
    return ["# Direct Answer", "", `URL encoded value: \`${encodeURIComponent(quoted)}\``, "", "Use this in query strings, redirect parameters, or API calls where spaces/symbols must be escaped."].join("\n");
  }
  if (/\burl decode|decode url|url-decode\b/.test(lower) && quoted) {
    let decoded = quoted;
    try {
      decoded = decodeURIComponent(quoted);
    } catch {
      decoded = "Input could not be decoded as a valid URL-encoded string.";
    }
    return ["# Direct Answer", "", `URL decoded value: \`${decoded}\``, "", "If the input contains incomplete percent escapes, fix those before decoding."].join("\n");
  }
  return [
    "# Direct Answer",
    "",
    `Use this developer utility plan for: ${titleFromPrompt(prompt)}`,
    "",
    "## Steps",
    "1. Identify the input format: text, JSON, CSV, URL, Base64, HTML, number, or color.",
    "2. Validate the input before transforming it.",
    "3. Run the requested conversion or generator.",
    "4. Return both the output and a note about invalid or missing input.",
    "",
    "## Common Outputs",
    "- JSON: pretty print, minify, validate, or list keys.",
    "- URL: encode/decode components safely.",
    "- Text: clean whitespace, slugify, title-case, or extract lines.",
    "- Security helper: generate UUIDs or strong passwords without sending data to outside services."
  ].join("\n");
}

function buildMediaDesignAnswer(prompt) {
  return [
    "# Direct Answer",
    "",
    `Use this media/design plan for: ${titleFromPrompt(prompt)}`,
    "",
    "## Creative Brief",
    "- Output: image, video, audio visualizer, RGB motion preset, theme, logo, clip, or asset pack.",
    "- Style: define colors, mood, motion, brand feel, and any hard exclusions.",
    "- Source: list uploaded files, pasted text, dimensions, product photos, or audio URLs.",
    "- Variations: choose count, aspect ratio, duration, and export type.",
    "",
    "## Production Settings",
    "| Setting | Practical Default |",
    "| --- | --- |",
    "| Variations | 4 for normal design, 64 for visualizer/gallery mode |",
    "| Export | PNG for static, GIF/MP4 for motion, JSON/CSS for theme presets |",
    "| Review | Pick one best version, then make 3 refinements |",
    "| Handoff | Save source settings and final export together |",
    "",
    "## Quality Checks",
    "- The output matches the requested format.",
    "- Text is readable at mobile size.",
    "- Colors have enough contrast.",
    "- Motion is not too fast for normal viewing.",
    "- Files are named clearly for download or reuse."
  ].join("\n");
}

function buildResearchAnswer(prompt) {
  return [
    "# Direct Answer",
    "",
    `Use this research/verification plan for: ${titleFromPrompt(prompt)}`,
    "",
    "## Evidence Table",
    "| Claim or Option | Source Needed | What To Check | Decision Impact |",
    "| --- | --- | --- | --- |",
    "| Main claim from prompt | Primary/original source | Exact wording, date, author, and context | Keep only if verified |",
    "| Competing option | Official page or reliable reference | Cost, constraints, compatibility, risk | Compare against criteria |",
    "| Missing detail | User-provided or authoritative source | Whether the answer needs a caveat | Mark as assumption if unresolved |",
    "",
    "## Verification Rules",
    "- Prefer original documents, official sources, or direct data over summaries.",
    "- Record dates because pricing, rules, and availability can change.",
    "- Separate confirmed facts from assumptions.",
    "- Finish with a recommendation only after the criteria are visible.",
    "",
    "## Output",
    "Return a ranked table, a short recommendation, evidence notes, and the open questions that would change the answer."
  ].join("\n");
}

function buildComparisonAnswer(prompt, artifacts) {
  const items = extractOriginalPrompt(prompt)
    .split(/\n|;|\.\s+|\sand\s/i)
    .map((part) => part.trim().replace(/^[-*]\s*/, ""))
    .filter((part) => part.length > 8)
    .slice(0, 5);
  return [
    "# Direct Answer",
    "",
    "Use this comparison structure to make the decision directly from the prompt details.",
    "",
    "| Option | Best For | Main Risk | Decision Signal |",
    "| --- | --- | --- | --- |",
    ...(items.length ? items : ["Option A", "Option B", "Option C"]).map((item, index) =>
      `| ${item} | Use case ${index + 1} from the prompt | Missing cost, timing, or fit details | Keep if it scores highest on the user's priority |`
    ),
    "",
    "## Recommendation",
    "Choose the option with the clearest fit to the required outcome, lowest execution risk, and easiest handoff. If two options tie, pick the one that can be tested fastest with the least irreversible cost.",
    artifacts.length ? `\n## Tool Evidence\n${artifacts.map((artifact) => `- ${artifact.toolName}: ${artifact.output.slice(0, 180)}`).join("\n")}` : ""
  ].filter(Boolean).join("\n");
}

function buildDesignOrSpaceAnswer(prompt) {
  return [
    "# Direct Answer",
    "",
    "Build the visual/space result as a scene plan with uploaded reference files, real dimensions where available, and inferred scale where dimensions are missing.",
    "",
    "## Scene Setup",
    "- Define room or canvas size.",
    "- Add each object with width, height, depth, material, and placement.",
    "- Use uploaded photos as visual references.",
    "- Keep a measurement note for every inferred dimension.",
    "",
    "## Output To Generate",
    "- Top-down placement plan.",
    "- 3D preview layout.",
    "- Object list with dimensions.",
    "- Export-ready summary for client, contractor, or decorator review.",
    "",
    `Prompt focus: ${extractOriginalPrompt(prompt)}`
  ].join("\n");
}

function buildPracticalFallbackAnswer(prompt, artifacts) {
  const original = extractOriginalPrompt(prompt);
  const lines = original
    .split(/\n|;|\.\s+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 6);
  return [
    "# Direct Answer",
    "",
    `Here is a practical first-pass answer for: ${titleFromPrompt(prompt)}`,
    "",
    "## What I Can Build From This Prompt",
    lines.length
      ? lines.map((line, index) => `${index + 1}. ${line}`).join("\n")
      : "1. Identify the requested outcome.\n2. Convert it into a usable plan, checklist, table, file, or calculation.\n3. Provide the exact next action the user can take.",
    "",
    "## Usable Output Structure",
    "- Summary: the shortest direct answer first.",
    "- Assumptions: what ToolGrid had to infer because it was not specified.",
    "- Materials/data: quantities, inputs, fields, or resources needed.",
    "- Steps: ordered actions the user can follow.",
    "- Checks: what to verify before spending money, cutting materials, publishing, or sending.",
    "",
    "## Next Action",
    "Use the answer above as the working draft. If exact dimensions, quantities, brands, dates, budget, location, or file format matter, add those details and rerun so ToolGrid can replace assumptions with exact numbers.",
    artifacts.length ? `\n## Supporting Tool Notes\n${artifacts.map((artifact) => `- ${artifact.toolName}: ${artifact.output.slice(0, 180)}`).join("\n")}` : ""
  ].filter(Boolean).join("\n");
}

export function buildDirectAnswerFoundation({ prompt = "", finalPayload = "", artifacts = [] } = {}) {
  const originalPrompt = extractOriginalPrompt(prompt);
  const lower = normalize(originalPrompt);
  const usefulArtifacts = usefulArtifactOutputs(artifacts);
  const file = buildMonthlyExpenseTrackerFile(prompt);
  if (file) return { handled: true, file, content: file.content, mode: "file" };
  const unitConversionAnswer = buildUnitConversionAnswer(prompt);
  if (unitConversionAnswer) return { handled: true, content: unitConversionAnswer, mode: "converter" };
  const dateUtilityAnswer = buildDateUtilityAnswer(prompt);
  if (dateUtilityAnswer) return { handled: true, content: dateUtilityAnswer, mode: "date" };
  const randomNumberAnswer = buildRandomNumberAnswer(prompt);
  if (randomNumberAnswer) return { handled: true, content: randomNumberAnswer, mode: "developer" };
  const keywordDensityAnswer = buildKeywordDensityAnswer(prompt);
  if (keywordDensityAnswer) return { handled: true, content: keywordDensityAnswer, mode: "content" };
  const contrastRatioAnswer = buildContrastRatioAnswer(prompt);
  if (contrastRatioAnswer) return { handled: true, content: contrastRatioAnswer, mode: "media" };
  const directMathAnswer = buildDirectMathAnswer(prompt);
  if (directMathAnswer) return { handled: true, content: directMathAnswer, mode: "money" };
  const textTransformAnswer = buildTextTransformAnswer(prompt);
  if (textTransformAnswer) return { handled: true, content: textTransformAnswer, mode: "developer" };
  if (/\b(loan|mortgage|payment|interest|apr|tip|split|invoice|subtotal|tax|discount|markup|profit|price|pricing|percent|percentage|calculator)\b/.test(lower)) {
    return { handled: true, content: buildMoneyCalculationAnswer(prompt), mode: "money" };
  }
  if (/\b(schedule|calendar|plan|workflow|task|checklist|routine|project|deadline|event|route|operations)\b/.test(lower)) {
    return { handled: true, content: buildScheduleOperationsAnswer(prompt), mode: "operations" };
  }
  if (/\b(invest|investing|investment|investments|portfolio|stocks?|bonds?|etfs?|index funds?|mutual funds?|retirement|wealth|asset allocation|million dollars?)\b/.test(lower)) {
    return { handled: true, content: buildInvestmentPlanningAnswer(prompt), mode: "investment" };
  }
  if (/\b(expense|expenses|budget|spending|bills?|costs?)\b/.test(lower)) {
    return { handled: true, content: buildExpenseTrackerAnswer(prompt), mode: "expense" };
  }
  if (/\b(developer|code|encode|decode|base64|url|uuid|password|api|debug|html|slug|escape|escaper)\b/.test(lower)) {
    return { handled: true, content: buildDeveloperUtilityAnswer(prompt), mode: "developer" };
  }
  if (/\b(content|post|social|email|seo|marketing|caption|blog|newsletter|ad|sales|copy|brand|follow up|cta|subject line)\b/.test(lower)) {
    return { handled: true, content: buildContentMarketingAnswer(prompt), mode: "content" };
  }
  if (isEggFlockRequest(prompt)) return { handled: true, content: buildEggFlockAnswer(prompt), mode: "egg-flock" };
  if (isBurritoRecipeRequest(prompt)) {
    return { handled: true, content: buildBurritoIngredientAnswer(prompt), mode: "recipe" };
  }
  if (/\b(banana|bananas|banana nut|banana bread)\b/.test(lower)) {
    return { handled: true, content: buildBananaNutBreadRecipeAnswer(prompt), mode: "recipe" };
  }
  if (/\b(recipe|servings?|cook|cooking|menu|meal|ingredients?|ingreidents?|bake|baking)\b/.test(lower)) {
    return { handled: true, content: buildGenericRecipeAnswer(prompt), mode: "recipe" };
  }
  if (isConstructionBlueprintRequest(prompt)) {
    return { handled: true, content: buildConstructionBlueprintAnswer(prompt), mode: "construction" };
  }
  if (/\b(garden|plant|plants|spacing|soil|seed|compost|grow|greenhouse|bed)\b/.test(lower)) {
    return { handled: true, content: buildGardeningAnswer(prompt), mode: "gardening" };
  }
  if (/\b(csv|json|spreadsheet|table|data|clean|dedupe|normalize|analyze|report|dashboard|rows?|columns?)\b/.test(lower)) {
    return { handled: true, content: buildDataWorkflowAnswer(prompt), mode: "data" };
  }
  if (/\b(image|video|audio|visual|theme|color|rgb|logo|design|render|clip|music|visualizer|asset)\b/.test(lower)) {
    return { handled: true, content: buildMediaDesignAnswer(prompt), mode: "media" };
  }
  if (/\b(research|fact|verify|source|quote|evidence|citation)\b/.test(lower)) {
    return { handled: true, content: buildResearchAnswer(prompt), mode: "research" };
  }
  if (/\b(compare|comparison|versus| vs |which|choose|decision|best)\b/.test(lower)) {
    return { handled: true, content: buildComparisonAnswer(prompt, usefulArtifacts), mode: "comparison" };
  }
  if (/\b(3d|room|space|furniture|dimensions|decor|contractor|layout|cad|model)\b/.test(lower)) {
    return { handled: true, content: buildDesignOrSpaceAnswer(prompt), mode: "space" };
  }
  if (looksLikeStandaloneAnswer(finalPayload)) {
    return {
      handled: true,
      content: ["# Direct Answer", "", `Best answer for: ${originalPrompt}`, "", String(finalPayload).trim()].join("\n"),
      mode: "payload"
    };
  }
  return { handled: true, content: buildPracticalFallbackAnswer(prompt, usefulArtifacts), mode: "fallback" };
}
