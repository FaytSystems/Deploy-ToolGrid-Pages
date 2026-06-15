import fs from "node:fs";
import path from "node:path";
import {
  DAILY_DEALINGS_PROGRAM_RECORDS,
  buildDailyDealingsSummary,
  getDailyDealingsDefaultInputs,
  runDailyDealingsProgram,
  searchDailyDealingsPrograms,
  verifyDailyDealingsSuite
} from "../src/daily-dealings-programs.js";

const csvEscape = (value) => {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : `"${text}"`;
};

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });

const verification = verifyDailyDealingsSuite({ knownEngines: ["daily_dealings_program"] });
const summary = buildDailyDealingsSummary();
const searchExamples = [
  "bills subscriptions cashflow",
  "home maintenance receipts manuals",
  "school paperwork homework forms",
  "insurance claim evidence receipts",
  "client follow up messages",
  "meal pantry grocery budget"
].map((query) => ({
  query,
  topResults: searchDailyDealingsPrograms(query, { limit: 8 }).map((item) => item.tool.name)
}));

fs.writeFileSync(
  path.join(exportsDir, "daily-dealings-programs-summary.json"),
  JSON.stringify({ ...summary, verification, searchExamples }, null, 2)
);

const rows = ["id,name,type,domain,archetype,accepts,produces,currentTools,tags,sampleOutput"];
for (const tool of DAILY_DEALINGS_PROGRAM_RECORDS) {
  const sampleOutput = runDailyDealingsProgram(tool, getDailyDealingsDefaultInputs(tool))
    .split(/\r?\n/)
    .slice(0, 16)
    .join(" | ");
  rows.push([
    tool.id,
    tool.name,
    tool.config?.programType,
    tool.config?.domain,
    tool.config?.archetype,
    tool.config?.accepts || [],
    tool.config?.produces || [],
    tool.config?.currentTools || [],
    (tool.tags || []).slice(0, 24),
    sampleOutput
  ].map(csvEscape).join(","));
}
fs.writeFileSync(path.join(exportsDir, "daily-dealings-programs.csv"), `${rows.join("\n")}\n`);

const searchRows = ["query,topResults"];
for (const example of searchExamples) {
  searchRows.push([example.query, example.topResults.join(" | ")].map(csvEscape).join(","));
}
fs.writeFileSync(path.join(exportsDir, "daily-dealings-search-examples.csv"), `${searchRows.join("\n")}\n`);

if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}

console.log(summary.summary);
