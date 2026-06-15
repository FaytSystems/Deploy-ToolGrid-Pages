import { renderWebcamExplorer, runWebcamExplorer } from "./webcam-explorer.js";

const cleanNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const round = (value, decimals = 6) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return "NaN";
  return Number.parseFloat(parsed.toFixed(decimals)).toString();
};

const titleCase = (text) =>
  String(text)
    .toLowerCase()
    .replace(/\b([a-z])/g, (match) => match.toUpperCase());

const sentenceCase = (text) =>
  String(text)
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase());

const slugify = (text) =>
  String(text)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const escapeHtml = (text) =>
  String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const unescapeHtml = (text) =>
  String(text)
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&amp;", "&");

const browserBase64Encode = (value) => {
  if (typeof btoa === "function") return btoa(unescape(encodeURIComponent(String(value))));
  return Buffer.from(String(value), "utf8").toString("base64");
};

const browserBase64Decode = (value) => {
  if (typeof atob === "function") return decodeURIComponent(escape(atob(String(value))));
  return Buffer.from(String(value), "base64").toString("utf8");
};

const parseLines = (text) => String(text).split(/\r?\n/);

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const parseCsvLine = (line) => {
  const values = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];
    if (char === '"' && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current);
  return values;
};

const toCsvValue = (value) => {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

const unitFactors = {
  length: {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344,
    nautical_mile: 1852,
    micrometer: 0.000001,
    nanometer: 0.000000001
  },
  mass: {
    milligram: 0.000001,
    gram: 0.001,
    kilogram: 1,
    metric_ton: 1000,
    ounce: 0.028349523125,
    pound: 0.45359237,
    stone: 6.35029318,
    us_ton: 907.18474,
    imperial_ton: 1016.0469088
  },
  area: {
    square_meter: 1,
    square_kilometer: 1000000,
    square_centimeter: 0.0001,
    square_millimeter: 0.000001,
    square_foot: 0.09290304,
    square_yard: 0.83612736,
    acre: 4046.8564224,
    hectare: 10000
  },
  volume: {
    milliliter: 0.001,
    liter: 1,
    cubic_meter: 1000,
    teaspoon_us: 0.00492892159375,
    tablespoon_us: 0.01478676478125,
    fluid_ounce_us: 0.0295735295625,
    cup_us: 0.2365882365,
    pint_us: 0.473176473,
    gallon_us: 3.785411784
  },
  time: {
    millisecond: 0.001,
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month_30_day: 2592000,
    year_365_day: 31536000
  },
  data: {
    bit: 0.125,
    byte: 1,
    kilobyte: 1000,
    kibibyte: 1024,
    megabyte: 1000000,
    mebibyte: 1048576,
    gigabyte: 1000000000,
    gibibyte: 1073741824
  },
  speed: {
    meter_per_second: 1,
    kilometer_per_hour: 0.2777777777777778,
    mile_per_hour: 0.44704,
    foot_per_second: 0.3048,
    knot: 0.5144444444444445,
    mach: 343
  },
  energy: {
    joule: 1,
    kilojoule: 1000,
    calorie: 4.184,
    kilocalorie: 4184,
    watt_hour: 3600,
    kilowatt_hour: 3600000,
    btu: 1055.05585262
  },
  pressure: {
    pascal: 1,
    kilopascal: 1000,
    bar: 100000,
    psi: 6894.7572931783,
    atmosphere: 101325,
    torr: 133.3223684211,
    inch_hg: 3386.38815789
  }
};

const temperatureToCelsius = {
  celsius: (value) => value,
  fahrenheit: (value) => (value - 32) * (5 / 9),
  kelvin: (value) => value - 273.15,
  rankine: (value) => (value - 491.67) * (5 / 9)
};

const celsiusToTemperature = {
  celsius: (value) => value,
  fahrenheit: (value) => value * (9 / 5) + 32,
  kelvin: (value) => value + 273.15,
  rankine: (value) => (value + 273.15) * (9 / 5)
};

export const engineNames = [
  "text_stats",
  "text_transform",
  "list_transform",
  "encoder",
  "json_tool",
  "csv_tool",
  "unit_convert",
  "percentage",
  "percent_change",
  "tip_calculator",
  "loan_payment",
  "compound_interest",
  "date_diff",
  "date_add",
  "unix_time",
  "random_number",
  "password_generator",
  "uuid_generator",
  "color_convert",
  "contrast_ratio",
  "utm_builder",
  "meta_length",
  "keyword_density",
  "markdown_table",
  "plant_spacing",
  "soil_mix",
  "recipe_scale",
  "invoice_total",
  "simple_formula",
  "webcam_explorer"
];

export const unitKinds = Object.freeze({
  ...Object.fromEntries(Object.entries(unitFactors).map(([key, value]) => [key, Object.keys(value)])),
  temperature: Object.keys(temperatureToCelsius)
});

export function convertUnit(value, kind, from, to) {
  const numericValue = cleanNumber(value);
  if (kind === "temperature") {
    if (!temperatureToCelsius[from] || !celsiusToTemperature[to]) throw new Error("Unknown temperature unit.");
    return celsiusToTemperature[to](temperatureToCelsius[from](numericValue));
  }
  const table = unitFactors[kind];
  if (!table || !table[from] || !table[to]) throw new Error("Unknown unit conversion.");
  return (numericValue * table[from]) / table[to];
}

export function getDefaultInputs(tool) {
  const config = tool.config || {};
  switch (tool.engine) {
    case "text_stats":
    case "text_transform":
    case "list_transform":
    case "keyword_density":
      return { text: "Free tools save time when they are fast, private, and easy to use.", find: "tools", replace: "utilities" };
    case "encoder": {
      const examples = {
        base64_decode: "VG9vbEdyaWQ=",
        url_decode: "free%20tools%20workspace",
        html_unescape: "&lt;strong&gt;ToolGrid&lt;/strong&gt;"
      };
      return { text: examples[config.mode] || "Free tools save time when they are fast, private, and easy to use.", find: "tools", replace: "utilities" };
    }
    case "json_tool":
      return { text: '{"name":"ToolGrid","tools":2500,"ready":true}' };
    case "csv_tool":
      return { text: config.mode === "json_to_csv" ? '[{"name":"ToolGrid","category":"productivity"},{"name":"JSON Formatter","category":"developer"}]' : "name,category\nToolGrid,productivity\nJSON Formatter,developer" };
    case "unit_convert":
      return { value: 10, kind: config.kind, from: config.from, to: config.to };
    case "percentage":
      return { value: 25, total: 200 };
    case "percent_change":
      return { start: 80, end: 100 };
    case "tip_calculator":
      return { bill: 48.25, tipPercent: 20, people: 2 };
    case "loan_payment":
      return { principal: 250000, annualRate: 6.5, years: 30 };
    case "compound_interest":
      return { principal: 1000, annualRate: 7, years: 10, compoundsPerYear: 12, monthlyContribution: 50 };
    case "date_diff":
      return { startDate: "2026-01-01", endDate: "2026-06-13" };
    case "date_add":
      return { startDate: "2026-06-13", amount: 30 };
    case "unix_time":
      return { timestamp: 1781308800, dateTime: "2026-06-13T12:00" };
    case "random_number":
      return { min: 1, max: 100, count: 5 };
    case "password_generator":
      return { length: 18 };
    case "uuid_generator":
      return {};
    case "color_convert":
      return { hex: "#4f7cff", red: 79, green: 124, blue: 255 };
    case "contrast_ratio":
      return { foreground: "#ffffff", background: "#0b1020" };
    case "utm_builder":
      return { url: "https://example.com/page", source: "newsletter", medium: "email", campaign: "spring" };
    case "meta_length":
      return { title: "Free Online Tools for Everyday Work", description: "Search and run fast browser-based tools in a customizable workspace." };
    case "markdown_table":
      return { text: "Tool,Category\nJSON Formatter,Developer\nWord Counter,Text" };
    case "plant_spacing":
      return { bedLength: 8, bedWidth: 4, spacing: 12 };
    case "soil_mix":
      return { totalVolume: 10, partA: 1, partB: 1, partC: 1 };
    case "recipe_scale":
      return { ingredient: "flour", amount: 2, originalServings: 4, desiredServings: 10 };
    case "invoice_total":
      return { subtotal: 125, taxPercent: 6, discountPercent: 10, shipping: 8.5 };
    case "simple_formula":
      return { a: 12, b: 4, c: 2 };
    case "webcam_explorer":
      return { query: "nature beach city scenic", count: 16, provider: "all", category: "all" };
    default:
      return {};
  }
}

export function runTool(tool, inputs = {}) {
  const config = tool.config || {};
  switch (tool.engine) {
    case "text_stats": {
      const text = String(inputs.text || "");
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const characters = text.length;
      const charactersNoSpaces = text.replace(/\s/g, "").length;
      const sentences = (text.match(/[.!?]+/g) || []).length;
      const lines = parseLines(text).length;
      const readingMinutes = words / 225;
      const stats = {
        words,
        characters,
        characters_no_spaces: charactersNoSpaces,
        sentences,
        lines,
        estimated_reading_time_minutes: Number(readingMinutes.toFixed(2))
      };
      return config.stat && stats[config.stat] !== undefined ? String(stats[config.stat]) : JSON.stringify(stats, null, 2);
    }
    case "text_transform": {
      const text = String(inputs.text || "");
      switch (config.mode) {
        case "uppercase": return text.toUpperCase();
        case "lowercase": return text.toLowerCase();
        case "titlecase": return titleCase(text);
        case "sentencecase": return sentenceCase(text);
        case "slugify": return slugify(text);
        case "reverse": return [...text].reverse().join("");
        case "trim": return text.trim();
        case "remove_extra_spaces": return text.replace(/\s+/g, " ").trim();
        case "remove_blank_lines": return parseLines(text).filter((line) => line.trim()).join("\n");
        case "find_replace": return text.replaceAll(String(inputs.find || ""), String(inputs.replace || ""));
        default: throw new Error("Unknown text transform mode.");
      }
    }
    case "list_transform": {
      const lines = parseLines(inputs.text || "");
      switch (config.mode) {
        case "sort_az": return [...lines].sort((a, b) => a.localeCompare(b)).join("\n");
        case "sort_za": return [...lines].sort((a, b) => b.localeCompare(a)).join("\n");
        case "dedupe": return [...new Set(lines)].join("\n");
        case "number_lines": return lines.map((line, index) => `${index + 1}. ${line}`).join("\n");
        case "shuffle": return shuffle(lines).join("\n");
        default: throw new Error("Unknown list transform mode.");
      }
    }
    case "encoder": {
      const text = String(inputs.text || "");
      switch (config.mode) {
        case "base64_encode": return browserBase64Encode(text);
        case "base64_decode": return browserBase64Decode(text);
        case "url_encode": return encodeURIComponent(text);
        case "url_decode": return decodeURIComponent(text);
        case "html_escape": return escapeHtml(text);
        case "html_unescape": return unescapeHtml(text);
        default: throw new Error("Unknown encoder mode.");
      }
    }
    case "json_tool": {
      const value = JSON.parse(String(inputs.text || "null"));
      if (config.mode === "minify") return JSON.stringify(value);
      if (config.mode === "keys") return Array.isArray(value) ? Object.keys(value[0] || {}).join("\n") : Object.keys(value).join("\n");
      return JSON.stringify(value, null, 2);
    }
    case "csv_tool": {
      const text = String(inputs.text || "").trim();
      if (!text) return "";
      if (config.mode === "csv_to_json") {
        const [headerLine, ...rows] = parseLines(text);
        const headers = parseCsvLine(headerLine);
        const json = rows.filter(Boolean).map((row) => {
          const values = parseCsvLine(row);
          return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""]));
        });
        return JSON.stringify(json, null, 2);
      }
      if (config.mode === "json_to_csv") {
        const parsed = JSON.parse(text);
        const rows = Array.isArray(parsed) ? parsed : [parsed];
        const headers = [...new Set(rows.flatMap((row) => Object.keys(row)))];
        return [headers.join(","), ...rows.map((row) => headers.map((header) => toCsvValue(row[header])).join(","))].join("\n");
      }
      throw new Error("Unknown CSV mode.");
    }
    case "unit_convert": {
      const result = convertUnit(inputs.value, config.kind || inputs.kind, config.from || inputs.from, config.to || inputs.to);
      return `${round(result, 10)} ${String(config.to || inputs.to).replaceAll("_", " ")}`;
    }
    case "percentage": {
      const value = cleanNumber(inputs.value);
      const total = cleanNumber(inputs.total);
      return `${round((value / total) * 100, 4)}%`;
    }
    case "percent_change": {
      const start = cleanNumber(inputs.start);
      const end = cleanNumber(inputs.end);
      return `${round(((end - start) / start) * 100, 4)}%`;
    }
    case "tip_calculator": {
      const bill = cleanNumber(inputs.bill);
      const tipPercent = cleanNumber(inputs.tipPercent);
      const people = Math.max(1, cleanNumber(inputs.people, 1));
      const tip = bill * (tipPercent / 100);
      const total = bill + tip;
      return `Tip: $${round(tip, 2)}\nTotal: $${round(total, 2)}\nPer person: $${round(total / people, 2)}`;
    }
    case "loan_payment": {
      const principal = cleanNumber(inputs.principal);
      const monthlyRate = cleanNumber(inputs.annualRate) / 100 / 12;
      const payments = cleanNumber(inputs.years) * 12;
      const monthly = monthlyRate === 0 ? principal / payments : principal * (monthlyRate * (1 + monthlyRate) ** payments) / ((1 + monthlyRate) ** payments - 1);
      return `Monthly payment: $${round(monthly, 2)}\nTotal paid: $${round(monthly * payments, 2)}\nInterest: $${round(monthly * payments - principal, 2)}`;
    }
    case "compound_interest": {
      const principal = cleanNumber(inputs.principal);
      const rate = cleanNumber(inputs.annualRate) / 100;
      const years = cleanNumber(inputs.years);
      const compounds = Math.max(1, cleanNumber(inputs.compoundsPerYear, 12));
      const monthlyContribution = cleanNumber(inputs.monthlyContribution);
      let balance = principal;
      const monthlyRate = rate / 12;
      for (let month = 0; month < years * 12; month += 1) {
        balance = balance * (1 + monthlyRate) + monthlyContribution;
      }
      const noContributionFormula = principal * (1 + rate / compounds) ** (compounds * years);
      return `Projected balance: $${round(balance, 2)}\nNo monthly contribution formula: $${round(noContributionFormula, 2)}`;
    }
    case "date_diff": {
      const start = new Date(`${inputs.startDate}T00:00:00`);
      const end = new Date(`${inputs.endDate}T00:00:00`);
      const days = Math.round((end - start) / 86400000);
      return `${days} days\n${round(days / 7, 2)} weeks\n${round(days / 30.4375, 2)} months`;
    }
    case "date_add": {
      const date = new Date(`${inputs.startDate}T00:00:00`);
      const amount = cleanNumber(inputs.amount);
      if (config.unit === "weeks") date.setDate(date.getDate() + amount * 7);
      else if (config.unit === "months") date.setMonth(date.getMonth() + amount);
      else if (config.unit === "years") date.setFullYear(date.getFullYear() + amount);
      else date.setDate(date.getDate() + amount);
      return date.toISOString().slice(0, 10);
    }
    case "unix_time": {
      if (config.mode === "to_date") return new Date(cleanNumber(inputs.timestamp) * 1000).toISOString();
      return `${Math.floor(new Date(inputs.dateTime).getTime() / 1000)}`;
    }
    case "random_number": {
      const min = cleanNumber(inputs.min);
      const max = cleanNumber(inputs.max, 100);
      const count = Math.max(1, Math.min(100, cleanNumber(inputs.count, 1)));
      return Array.from({ length: count }, () => String(Math.floor(Math.random() * (max - min + 1)) + min)).join("\n");
    }
    case "password_generator": {
      const length = Math.max(4, Math.min(128, cleanNumber(inputs.length, 18)));
      const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*_-+=?";
      return Array.from({ length }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
    }
    case "uuid_generator": {
      if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
      return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (char) =>
        (Number(char) ^ (Math.random() * 16) >> (Number(char) / 4)).toString(16)
      );
    }
    case "color_convert": {
      if (config.mode === "hex_to_rgb") {
        const hex = String(inputs.hex || "#000000").replace("#", "");
        const full = hex.length === 3 ? hex.split("").map((char) => char + char).join("") : hex;
        const int = Number.parseInt(full, 16);
        return `rgb(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255})`;
      }
      const red = cleanNumber(inputs.red);
      const green = cleanNumber(inputs.green);
      const blue = cleanNumber(inputs.blue);
      return `#${[red, green, blue].map((value) => Math.max(0, Math.min(255, value)).toString(16).padStart(2, "0")).join("")}`;
    }
    case "contrast_ratio": {
      const luminance = (hexValue) => {
        const hex = String(hexValue || "#000000").replace("#", "");
        const full = hex.length === 3 ? hex.split("").map((char) => char + char).join("") : hex;
        const int = Number.parseInt(full, 16);
        const rgb = [((int >> 16) & 255), ((int >> 8) & 255), (int & 255)].map((channel) => {
          const srgb = channel / 255;
          return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
      };
      const a = luminance(inputs.foreground);
      const b = luminance(inputs.background);
      const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
      return `Contrast ratio: ${round(ratio, 2)}:1\nAA normal text: ${ratio >= 4.5 ? "pass" : "fail"}\nAA large text: ${ratio >= 3 ? "pass" : "fail"}`;
    }
    case "utm_builder": {
      const url = new URL(inputs.url || "https://example.com");
      const fields = ["source", "medium", "campaign", "term", "content"];
      for (const field of fields) {
        if (inputs[field]) url.searchParams.set(`utm_${field}`, inputs[field]);
      }
      return url.toString();
    }
    case "meta_length": {
      const title = String(inputs.title || "");
      const description = String(inputs.description || "");
      return `Title: ${title.length} characters (${title.length <= 60 ? "good" : "long"})\nDescription: ${description.length} characters (${description.length <= 160 ? "good" : "long"})`;
    }
    case "keyword_density": {
      const text = String(inputs.text || "").toLowerCase();
      const keyword = String(inputs.find || config.keyword || "tool").toLowerCase();
      const words = text.match(/[a-z0-9]+/g) || [];
      const matches = words.filter((word) => word === keyword).length;
      return `Keyword: ${keyword}\nMatches: ${matches}\nWords: ${words.length}\nDensity: ${round((matches / Math.max(1, words.length)) * 100, 3)}%`;
    }
    case "markdown_table": {
      const rows = parseLines(inputs.text || "").filter(Boolean).map(parseCsvLine);
      if (!rows.length) return "";
      const header = `| ${rows[0].join(" | ")} |`;
      const divider = `| ${rows[0].map(() => "---").join(" | ")} |`;
      const body = rows.slice(1).map((row) => `| ${row.join(" | ")} |`);
      return [header, divider, ...body].join("\n");
    }
    case "plant_spacing": {
      const areaSqFt = cleanNumber(inputs.bedLength) * cleanNumber(inputs.bedWidth);
      const spacingFt = cleanNumber(inputs.spacing, 12) / 12;
      const plants = Math.floor(areaSqFt / Math.max(0.01, spacingFt ** 2));
      return `Bed area: ${round(areaSqFt, 2)} sq ft\nEstimated plant sites: ${plants}`;
    }
    case "soil_mix": {
      const total = cleanNumber(inputs.totalVolume);
      const parts = [cleanNumber(inputs.partA, 1), cleanNumber(inputs.partB, 1), cleanNumber(inputs.partC, 1)];
      const sum = parts.reduce((a, b) => a + b, 0);
      return parts.map((part, index) => `Part ${index + 1}: ${round(total * part / sum, 3)}`).join("\n");
    }
    case "recipe_scale": {
      const factor = cleanNumber(inputs.desiredServings) / cleanNumber(inputs.originalServings, 1);
      const scaled = cleanNumber(inputs.amount) * factor;
      return `${inputs.ingredient || "ingredient"}: ${round(scaled, 3)}\nScale factor: ${round(factor, 3)}x`;
    }
    case "invoice_total": {
      const subtotal = cleanNumber(inputs.subtotal);
      const discount = subtotal * cleanNumber(inputs.discountPercent) / 100;
      const taxable = subtotal - discount;
      const tax = taxable * cleanNumber(inputs.taxPercent) / 100;
      const total = taxable + tax + cleanNumber(inputs.shipping);
      return `Subtotal: $${round(subtotal, 2)}\nDiscount: -$${round(discount, 2)}\nTax: $${round(tax, 2)}\nTotal: $${round(total, 2)}`;
    }
    case "webcam_explorer":
      return runWebcamExplorer(inputs);
    case "simple_formula": {
      const a = cleanNumber(inputs.a);
      const b = cleanNumber(inputs.b);
      const c = cleanNumber(inputs.c);
      switch (config.mode) {
        case "add": return round(a + b, 6);
        case "subtract": return round(a - b, 6);
        case "multiply": return round(a * b, 6);
        case "divide": return round(a / b, 6);
        case "average": return round((a + b + c) / 3, 6);
        case "area_rectangle": return `${round(a * b, 6)} square units`;
        case "volume_box": return `${round(a * b * c, 6)} cubic units`;
        default: throw new Error("Unknown formula mode.");
      }
    }
    default:
      throw new Error(`Unknown engine: ${tool.engine}`);
  }
}

export function getToolSchema(tool) {
  const config = tool.config || {};
  switch (tool.engine) {
    case "text_stats":
    case "text_transform":
    case "list_transform":
    case "encoder":
    case "json_tool":
    case "csv_tool":
    case "keyword_density":
    case "markdown_table":
      return [
        { name: "text", label: "Input", type: "textarea" },
        ...(config.mode === "find_replace" || tool.engine === "keyword_density" ? [
          { name: "find", label: tool.engine === "keyword_density" ? "Keyword" : "Find", type: "text" },
          ...(config.mode === "find_replace" ? [{ name: "replace", label: "Replace with", type: "text" }] : [])
        ] : [])
      ];
    case "unit_convert": return [{ name: "value", label: `Value in ${String(config.from).replaceAll("_", " ")}`, type: "number" }];
    case "percentage": return [{ name: "value", label: "Value", type: "number" }, { name: "total", label: "Total", type: "number" }];
    case "percent_change": return [{ name: "start", label: "Starting value", type: "number" }, { name: "end", label: "Ending value", type: "number" }];
    case "tip_calculator": return [{ name: "bill", label: "Bill", type: "number" }, { name: "tipPercent", label: "Tip %", type: "number" }, { name: "people", label: "People", type: "number" }];
    case "loan_payment": return [{ name: "principal", label: "Principal", type: "number" }, { name: "annualRate", label: "Annual rate %", type: "number" }, { name: "years", label: "Years", type: "number" }];
    case "compound_interest": return [{ name: "principal", label: "Principal", type: "number" }, { name: "annualRate", label: "Annual rate %", type: "number" }, { name: "years", label: "Years", type: "number" }, { name: "compoundsPerYear", label: "Compounds/year", type: "number" }, { name: "monthlyContribution", label: "Monthly contribution", type: "number" }];
    case "date_diff": return [{ name: "startDate", label: "Start date", type: "date" }, { name: "endDate", label: "End date", type: "date" }];
    case "date_add": return [{ name: "startDate", label: "Start date", type: "date" }, { name: "amount", label: `Amount of ${config.unit || "days"}`, type: "number" }];
    case "unix_time": return config.mode === "to_date" ? [{ name: "timestamp", label: "Unix timestamp", type: "number" }] : [{ name: "dateTime", label: "Date/time", type: "datetime-local" }];
    case "random_number": return [{ name: "min", label: "Minimum", type: "number" }, { name: "max", label: "Maximum", type: "number" }, { name: "count", label: "Count", type: "number" }];
    case "password_generator": return [{ name: "length", label: "Length", type: "number" }];
    case "uuid_generator": return [];
    case "color_convert": return config.mode === "hex_to_rgb" ? [{ name: "hex", label: "Hex color", type: "text" }] : [{ name: "red", label: "Red", type: "number" }, { name: "green", label: "Green", type: "number" }, { name: "blue", label: "Blue", type: "number" }];
    case "contrast_ratio": return [{ name: "foreground", label: "Foreground hex", type: "text" }, { name: "background", label: "Background hex", type: "text" }];
    case "utm_builder": return [{ name: "url", label: "URL", type: "text" }, { name: "source", label: "Source", type: "text" }, { name: "medium", label: "Medium", type: "text" }, { name: "campaign", label: "Campaign", type: "text" }, { name: "term", label: "Term", type: "text" }, { name: "content", label: "Content", type: "text" }];
    case "meta_length": return [{ name: "title", label: "SEO title", type: "text" }, { name: "description", label: "Meta description", type: "textarea" }];
    case "plant_spacing": return [{ name: "bedLength", label: "Bed length ft", type: "number" }, { name: "bedWidth", label: "Bed width ft", type: "number" }, { name: "spacing", label: "Spacing inches", type: "number" }];
    case "soil_mix": return [{ name: "totalVolume", label: "Total volume", type: "number" }, { name: "partA", label: "Part 1", type: "number" }, { name: "partB", label: "Part 2", type: "number" }, { name: "partC", label: "Part 3", type: "number" }];
    case "recipe_scale": return [{ name: "ingredient", label: "Ingredient", type: "text" }, { name: "amount", label: "Current amount", type: "number" }, { name: "originalServings", label: "Original servings", type: "number" }, { name: "desiredServings", label: "Desired servings", type: "number" }];
    case "invoice_total": return [{ name: "subtotal", label: "Subtotal", type: "number" }, { name: "taxPercent", label: "Tax %", type: "number" }, { name: "discountPercent", label: "Discount %", type: "number" }, { name: "shipping", label: "Shipping", type: "number" }];
    case "simple_formula": return [{ name: "a", label: "A", type: "number" }, { name: "b", label: "B", type: "number" }, { name: "c", label: "C", type: "number" }];
    case "webcam_explorer": return [
      { name: "query", label: "Webcam search", type: "text" },
      { name: "count", label: "Outputs to show", type: "number" },
      { name: "provider", label: "Provider id or all", type: "text" },
      { name: "category", label: "Category or all", type: "text" }
    ];
    default: return [];
  }
}

export function renderTool(container, tool, options = {}) {
  if (tool.engine === "webcam_explorer") {
    renderWebcamExplorer(container, tool, options);
    return;
  }
  const defaults = { ...getDefaultInputs(tool), ...(options.initialInputs || {}) };
  const schema = getToolSchema(tool);
  const form = document.createElement("form");
  form.className = "tool-form";

  const shell = document.createElement("div");
  shell.className = "nested-tool-shell";

  const tabs = document.createElement("div");
  tabs.className = "nested-tabs";
  const runTab = document.createElement("button");
  runTab.type = "button";
  runTab.textContent = "Tool UI";
  const projectTab = document.createElement("button");
  projectTab.type = "button";
  projectTab.textContent = "Project UI";
  const schemaTab = document.createElement("button");
  schemaTab.type = "button";
  schemaTab.textContent = "Schema UI";
  tabs.append(runTab, projectTab, schemaTab);

  const runPane = document.createElement("div");
  runPane.className = "nested-pane";
  const projectPane = document.createElement("div");
  projectPane.className = "nested-pane hidden";
  const schemaPane = document.createElement("div");
  schemaPane.className = "nested-pane hidden";

  const setActivePane = (paneName) => {
    const pairs = [
      ["run", runTab, runPane],
      ["project", projectTab, projectPane],
      ["schema", schemaTab, schemaPane]
    ];
    for (const [name, tab, pane] of pairs) {
      tab.classList.toggle("active", name === paneName);
      pane.classList.toggle("hidden", name !== paneName);
    }
  };
  runTab.addEventListener("click", () => setActivePane("run"));
  projectTab.addEventListener("click", () => setActivePane("project"));
  schemaTab.addEventListener("click", () => setActivePane("schema"));
  setActivePane("run");

  const fieldWrap = document.createElement("div");
  fieldWrap.className = schema.length > 1 && schema.every((field) => field.type !== "textarea") ? "form-grid two" : "form-grid";

  for (const field of schema) {
    const wrapper = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = `${tool.id}-${options.panelIndex ?? "panel"}-${field.name}`;
    label.textContent = field.label;
    const input = field.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
    input.id = `${tool.id}-${options.panelIndex ?? "panel"}-${field.name}`;
    input.name = field.name;
    input.type = field.type === "textarea" ? undefined : field.type;
    input.value = defaults[field.name] ?? "";
    wrapper.append(label, input);
    fieldWrap.append(wrapper);
  }

  const actions = document.createElement("div");
  actions.className = "tool-form-actions";
  const runButton = document.createElement("button");
  runButton.type = "submit";
  runButton.textContent = "Run";
  const publishButton = document.createElement("button");
  publishButton.type = "button";
  publishButton.textContent = "Run + publish";
  publishButton.title = "Run this tool and send its output into the selected project.";
  const useProjectButton = document.createElement("button");
  useProjectButton.type = "button";
  useProjectButton.textContent = "Use project input";
  useProjectButton.title = "Load the active project payload into this tool when fields are compatible.";
  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.textContent = "Copy result";
  actions.append(runButton, publishButton, useProjectButton, copyButton);

  const output = document.createElement("pre");
  output.className = "output-box";
  const status = document.createElement("div");
  status.className = "success-line";

  const collectInputs = () => Object.fromEntries(new FormData(form).entries());
  const setInputs = (inputs) => {
    for (const [name, value] of Object.entries(inputs || {})) {
      const field = form.elements.namedItem(name);
      if (field && "value" in field) field.value = value ?? "";
    }
  };
  const execute = () => {
    try {
      output.classList.remove("error-box");
      const inputs = collectInputs();
      output.textContent = runTool(tool, inputs);
      status.textContent = "";
      return { ok: true, inputs, output: output.textContent };
    } catch (error) {
      output.classList.add("error-box");
      output.textContent = error instanceof Error ? error.message : String(error);
      return { ok: false, inputs: collectInputs(), output: output.textContent };
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    execute();
  });

  publishButton.addEventListener("click", () => {
    const result = execute();
    if (typeof options.onPublish === "function") {
      options.onPublish({
        tool,
        panelIndex: options.panelIndex ?? null,
        inputs: result.inputs,
        output: result.output,
        status: result.ok ? "ok" : "error",
        runMode: "manual"
      });
      status.textContent = result.ok ? "Published to project." : "Error published to project log.";
    }
  });

  useProjectButton.addEventListener("click", () => {
    if (typeof options.buildProjectInputs === "function") {
      setInputs(options.buildProjectInputs(tool));
      status.textContent = "Loaded project input.";
      setTimeout(() => { status.textContent = ""; }, 1300);
    }
  });

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(output.textContent || "");
    status.textContent = "Copied.";
    setTimeout(() => { status.textContent = ""; }, 1300);
  });

  const projectInfo = document.createElement("div");
  projectInfo.className = "project-tool-info";
  const projectName = options.project?.name || "No project assigned";
  projectInfo.innerHTML = `
    <strong>Assigned project</strong>
    <span>${escapeHtml(projectName)}</span>
    <strong>Panel role</strong>
    <span>${escapeHtml(options.panelRole || "Manual tool node")}</span>
    <strong>Communication</strong>
    <span>Tools publish artifacts to the project bus. Compatible panels can consume those artifacts in simultaneous or queued runs.</span>
  `;

  const schemaInfo = document.createElement("pre");
  schemaInfo.className = "schema-box";
  schemaInfo.textContent = JSON.stringify({
    id: tool.id,
    engine: tool.engine,
    category: tool.category,
    config: tool.config || {},
    fields: schema
  }, null, 2);

  form.append(fieldWrap, actions, output, status);
  runPane.append(form);
  projectPane.append(projectInfo);
  schemaPane.append(schemaInfo);
  shell.append(tabs, runPane, projectPane, schemaPane);
  container.replaceChildren(shell);
  execute();
}
