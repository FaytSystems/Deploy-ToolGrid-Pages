import assert from "node:assert/strict";
import { tools, CATEGORY_COUNTS, CATALOG_VERSION } from "../src/tool-catalog.js";
import { engineNames, getDefaultInputs, getToolSchema, runTool } from "../src/tool-engines.js";

const knownEngines = new Set(engineNames);
const ids = new Set();

assert.equal(CATALOG_VERSION, "2026-06-13-native-2500-v1");
assert.equal(tools.length, 2500, "catalog should contain exactly 2,500 tool records");
assert.deepEqual(CATEGORY_COUNTS, {
  "Business": 17,
  "Calculators": 300,
  "Color": 125,
  "Converters": 548,
  "Cooking": 20,
  "Data": 200,
  "Date & Time": 200,
  "Developer": 350,
  "Gardening": 40,
  "Generators": 150,
  "SEO & Marketing": 100,
  "Text": 450
});

for (const tool of tools) {
  assert.ok(tool.id, "tool id is required");
  assert.ok(!ids.has(tool.id), `duplicate tool id: ${tool.id}`);
  ids.add(tool.id);
  assert.ok(tool.name, `tool name is required for ${tool.id}`);
  assert.ok(tool.category, `tool category is required for ${tool.id}`);
  assert.ok(knownEngines.has(tool.engine), `unknown engine ${tool.engine} for ${tool.id}`);
  assert.ok(Array.isArray(tool.tags), `tags array is required for ${tool.id}`);
  assert.ok(getToolSchema(tool).every((field) => field.name && field.label && field.type), `schema fields are invalid for ${tool.id}`);
  const output = runTool(tool, getDefaultInputs(tool));
  assert.equal(typeof output, "string", `output should be a string for ${tool.id}`);
  assert.ok(output.length > 0, `output should not be empty for ${tool.id}`);
}

const sample = (engine, config = {}, inputs = {}) => runTool({ id: "sample", name: "Sample", category: "Test", engine, config, tags: [] }, inputs);

assert.equal(sample("text_transform", { mode: "uppercase" }, { text: "abc" }), "ABC");
assert.equal(sample("text_transform", { mode: "slugify" }, { text: "Hello, Free Tools!" }), "hello-free-tools");
assert.equal(sample("encoder", { mode: "base64_encode" }, { text: "ToolGrid" }), "VG9vbEdyaWQ=");
assert.equal(sample("encoder", { mode: "url_encode" }, { text: "a b" }), "a%20b");
assert.equal(sample("json_tool", { mode: "format" }, { text: '{"a":1}' }), '{\n  "a": 1\n}');
assert.equal(sample("csv_tool", { mode: "csv_to_json" }, { text: "a,b\n1,2" }), '[\n  {\n    "a": "1",\n    "b": "2"\n  }\n]');
assert.equal(sample("unit_convert", { kind: "length", from: "meter", to: "centimeter" }, { value: 2 }), "200 centimeter");
assert.equal(sample("percentage", {}, { value: 25, total: 200 }), "12.5%");
assert.equal(sample("percent_change", {}, { start: 80, end: 100 }), "25%");
assert.match(sample("tip_calculator", {}, { bill: 50, tipPercent: 20, people: 2 }), /Total: \$60/);
assert.match(sample("loan_payment", {}, { principal: 100000, annualRate: 6, years: 30 }), /Monthly payment:/);
assert.match(sample("compound_interest", {}, { principal: 1000, annualRate: 5, years: 1, compoundsPerYear: 12, monthlyContribution: 0 }), /Projected balance:/);
assert.match(sample("date_diff", {}, { startDate: "2026-01-01", endDate: "2026-01-31" }), /30 days/);
assert.equal(sample("date_add", { unit: "days" }, { startDate: "2026-01-01", amount: 10 }), "2026-01-11");
assert.match(sample("unix_time", { mode: "to_date" }, { timestamp: 0 }), /1970-01-01/);
assert.match(sample("password_generator", {}, { length: 18 }), /^.{18}$/);
assert.match(sample("uuid_generator", {}, {}), /^[0-9a-f-]{36}$/i);
assert.equal(sample("color_convert", { mode: "hex_to_rgb" }, { hex: "#ffffff" }), "rgb(255, 255, 255)");
assert.equal(sample("color_convert", { mode: "rgb_to_hex" }, { red: 255, green: 0, blue: 170 }), "#ff00aa");
assert.match(sample("contrast_ratio", {}, { foreground: "#ffffff", background: "#000000" }), /21:1/);
assert.match(sample("utm_builder", {}, { url: "https://example.com", source: "x", medium: "y", campaign: "z" }), /utm_source=x/);
assert.match(sample("meta_length", {}, { title: "Title", description: "Description" }), /Title: 5/);
assert.match(sample("keyword_density", {}, { text: "tool tool grid", find: "tool" }), /66.667%/);
assert.match(sample("markdown_table", {}, { text: "a,b\n1,2" }), /\| a \| b \|/);
assert.match(sample("plant_spacing", {}, { bedLength: 4, bedWidth: 4, spacing: 12 }), /16/);
assert.match(sample("soil_mix", {}, { totalVolume: 9, partA: 1, partB: 1, partC: 1 }), /Part 1: 3/);
assert.match(sample("recipe_scale", {}, { ingredient: "flour", amount: 2, originalServings: 4, desiredServings: 8 }), /flour: 4/);
assert.match(sample("invoice_total", {}, { subtotal: 100, taxPercent: 10, discountPercent: 10, shipping: 5 }), /Total: \$104/);
assert.equal(sample("simple_formula", { mode: "volume_box" }, { a: 2, b: 3, c: 4 }), "24 cubic units");

console.log("All ToolGrid 2500 tests passed.");
