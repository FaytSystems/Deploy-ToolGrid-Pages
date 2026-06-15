import fs from "node:fs";
import path from "node:path";
import {
  MASSIVE_TOOL_FACTORY_RECORDS,
  buildMassiveToolFactorySummary,
  verifyMassiveToolFactorySuite
} from "../src/massive-tool-factory.js";
import { engineNames } from "../src/tool-engines.js";

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
const verification = verifyMassiveToolFactorySuite({ knownEngines: engineNames });
const summary = buildMassiveToolFactorySummary();
fs.writeFileSync(path.join(exportsDir, "massive-tool-factory-summary.json"), JSON.stringify({ ...summary, verification }, null, 2));

const rows = ["id,name,category,engine,systemLabel,tags,searchPhrases"];
for (const tool of MASSIVE_TOOL_FACTORY_RECORDS.slice(0, 1000)) {
  rows.push([
    tool.id,
    tool.name,
    tool.category,
    tool.engine,
    tool.systemLabel,
    (tool.tags || []).slice(0, 24).join("|"),
    (tool.searchPhrases || []).slice(0, 12).join("|")
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "massive-tool-factory-sample.csv"), rows.join("\n"));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(summary.summary);
