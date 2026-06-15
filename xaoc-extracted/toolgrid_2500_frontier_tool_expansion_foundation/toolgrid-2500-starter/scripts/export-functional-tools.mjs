import fs from "node:fs";
import path from "node:path";
import {
  FUNCTIONAL_TOOL_RECORDS,
  buildFunctionalToolsSummary,
  getFunctionalDefaultInputs,
  runFunctionalTool,
  verifyFunctionalToolsSuite
} from "../src/functional-tools.js";

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
const verification = verifyFunctionalToolsSuite();
const summary = buildFunctionalToolsSummary();
fs.writeFileSync(path.join(exportsDir, "functional-tools-summary.json"), JSON.stringify({ ...summary, verification }, null, 2));
const rows = ["id,name,mode,systemLabel,skeletonPattern,accepts,produces,tags,sampleOutput"];
for (const tool of FUNCTIONAL_TOOL_RECORDS) {
  const output = runFunctionalTool(tool, getFunctionalDefaultInputs(tool)).replace(/\s+/g, " ").slice(0, 220);
  rows.push([
    tool.id,
    tool.name,
    tool.config.mode,
    tool.systemLabel,
    tool.config.skeletonPattern.id,
    (tool.config.accepts || []).join("|"),
    (tool.config.produces || []).join("|"),
    (tool.tags || []).slice(0, 24).join("|"),
    output
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "functional-tools.csv"), rows.join("\n"));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(summary.summary);
