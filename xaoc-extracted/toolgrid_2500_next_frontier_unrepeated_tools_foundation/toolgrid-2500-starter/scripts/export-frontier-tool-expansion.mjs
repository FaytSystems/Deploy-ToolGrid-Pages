import fs from "node:fs";
import path from "node:path";
import {
  FRONTIER_TOOL_RECORDS,
  buildFrontierToolSummary,
  searchFrontierTools,
  verifyFrontierToolSuite
} from "../src/frontier-tool-expansion.js";

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
const verification = verifyFrontierToolSuite({ knownEngines: ["mini_app"] });
const summary = buildFrontierToolSummary();
fs.writeFileSync(path.join(exportsDir, "frontier-tool-expansion-summary.json"), JSON.stringify({ ...summary, verification }, null, 2));
const rows = ["id,name,category,kind,operation,accepts,produces,tags,searchPhrases"];
for (const tool of FRONTIER_TOOL_RECORDS.slice(0, 1500)) {
  rows.push([
    tool.id,
    tool.name,
    tool.category,
    tool.toolKind,
    tool.config?.operationId,
    (tool.compatibility?.accepts || []).join("|"),
    (tool.compatibility?.produces || []).join("|"),
    (tool.tags || []).slice(0, 24).join("|"),
    (tool.searchPhrases || []).slice(0, 12).join("|")
  ].map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "frontier-tool-expansion-sample.csv"), rows.join("\n"));
const searchRows = ["query,topResults"];
for (const query of ["emergency readiness", "home repair materials", "creator content handoff", "legal compliance evidence", "technology data migration", "community volunteer", "field sample", "mobile detailing quote"]) {
  searchRows.push([query, searchFrontierTools(query, { limit: 8 }).map((item) => item.tool.name).join(" | ")].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "frontier-tool-search-examples.csv"), searchRows.join("\n"));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(summary.summary);
