import { mkdir, writeFile } from "node:fs/promises";
import { engineNames } from "../src/tool-engines.js";
import {
  IN_HOUSE_TOOL_RECORDS,
  buildInHouseCompatibilityReport,
  generateInHouseCompatibilityMatrix,
  verifyInHouseToolSuite
} from "../src/in-house-tools.js";

const outDir = new URL("../exports/", import.meta.url);
await mkdir(outDir, { recursive: true });

const verification = verifyInHouseToolSuite({ knownEngines: engineNames });
if (!verification.ok) {
  throw new Error(`In-house tool compatibility verification failed:\n${verification.errors.join("\n")}`);
}

const report = buildInHouseCompatibilityReport({ limit: 100 });
const matrix = generateInHouseCompatibilityMatrix();

const csvEscape = (value) => {
  const text = value === undefined || value === null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

const linkRows = [
  ["fromToolId", "fromToolName", "toToolId", "toToolName", "parallelSafe", "requiresApproval", "readiness", "signal", "reason"],
  ...matrix.links.map((link) => [
    link.fromToolId,
    link.fromToolName,
    link.toToolId,
    link.toToolName,
    link.parallelSafe,
    link.requiresApproval,
    link.readiness,
    link.signal,
    link.reason
  ])
];

const tagRows = [
  ["toolId", "toolName", "category", "engine", "accepts", "produces", "tags", "searchPhrases"],
  ...IN_HOUSE_TOOL_RECORDS.map((tool) => [
    tool.id,
    tool.name,
    tool.category,
    tool.engine,
    tool.metadata.accepts.join("|"),
    tool.metadata.produces.join("|"),
    tool.tags.join("|"),
    tool.metadata.searchPhrases.join("|")
  ])
];

await writeFile(new URL("inhouse-tool-compatibility-summary.json", outDir), JSON.stringify({
  generatedAt: new Date().toISOString(),
  version: report.version,
  summary: report.summary,
  verification: report.verification,
  topConnected: report.topConnected,
  sampleLinks: report.sampleLinks
}, null, 2));
await writeFile(new URL("inhouse-tool-compatibility-links.csv", outDir), `${linkRows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`);
await writeFile(new URL("inhouse-tool-search-tags.csv", outDir), `${tagRows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`);

console.log(report.summary);
console.log("Wrote exports/inhouse-tool-compatibility-summary.json");
console.log("Wrote exports/inhouse-tool-compatibility-links.csv");
console.log("Wrote exports/inhouse-tool-search-tags.csv");
