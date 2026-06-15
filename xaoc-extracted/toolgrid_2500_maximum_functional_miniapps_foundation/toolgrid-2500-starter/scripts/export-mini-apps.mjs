import fs from "node:fs";
import path from "node:path";
import {
  MINI_APP_TOOL_RECORDS,
  buildMiniAppSummary,
  getMiniAppDefaultInputs,
  runMiniAppTool,
  verifyMiniAppSuite
} from "../src/mini-apps.js";

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
const verification = verifyMiniAppSuite({ knownEngines: ["mini_app"] });
const summary = buildMiniAppSummary();
fs.writeFileSync(path.join(exportsDir, "mini-apps-summary.json"), JSON.stringify({ ...summary, verification }, null, 2));
const rows = ["id,name,domain,operation,systemLabel,requiredTools,accepts,produces,tags,sampleOutput"];
for (const tool of MINI_APP_TOOL_RECORDS.slice(0, 1000)) {
  const output = runMiniAppTool(tool, getMiniAppDefaultInputs(tool)).replace(/\s+/g, " ").slice(0, 240);
  rows.push([
    tool.id,
    tool.name,
    tool.config.domain,
    tool.config.operationId,
    tool.systemLabel,
    (tool.config.requiredTools || []).join("|"),
    (tool.compatibility.accepts || []).join("|"),
    (tool.compatibility.produces || []).join("|"),
    (tool.tags || []).slice(0, 24).join("|"),
    output
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "mini-apps-sample.csv"), rows.join("\n"));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(summary.summary);
