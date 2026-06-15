import fs from "node:fs";
import path from "node:path";
import { tools } from "../src/tool-catalog.js";
import { IN_HOUSE_TOOL_RECORDS } from "../src/in-house-tools.js";
import { MASSIVE_TOOL_FACTORY_RECORDS } from "../src/massive-tool-factory.js";
import { FUNCTIONAL_TOOL_RECORDS } from "../src/functional-tools.js";
import { MINI_APP_TOOL_RECORDS } from "../src/mini-apps.js";
import { DAILY_DEALINGS_PROGRAM_RECORDS } from "../src/daily-dealings-programs.js";
import { FRONTIER_TOOL_RECORDS } from "../src/frontier-tool-expansion.js";
import { NEXT_FRONTIER_TOOL_RECORDS } from "../src/next-frontier-tool-expansion.js";
import { NEEDED_INHOUSE_TOOL_RECORDS } from "../src/expansion-tools.js";
import { SPACE_STUDIO_TOOLS } from "../src/space-studio.js";
import { WEBCAM_EXPLORER_TOOL } from "../src/webcam-explorer.js";
import { FACTCHECKER_TOOL } from "../src/factchecker-tool.js";
import { RGB_GENERATOR_TOOL, THEME_STUDIO_TOOL } from "../src/theme-system.js";
import { RGB_MOTION_STUDIO_TOOL } from "../src/rgb-motion-studio.js";
import { AUDIO_VISUALIZER_STUDIO_TOOL } from "../src/audio-visualizer-studio.js";
import { PRICE_TOOLS } from "../src/price-comparison-tool.js";
import { buildSkeletonCompatibilityReport, buildSkeletonTools, verifySkeletonToolSuite } from "../src/skeleton-tools.js";

const baseTools = [...tools, ...IN_HOUSE_TOOL_RECORDS, ...MASSIVE_TOOL_FACTORY_RECORDS, ...FUNCTIONAL_TOOL_RECORDS, ...MINI_APP_TOOL_RECORDS, ...DAILY_DEALINGS_PROGRAM_RECORDS, ...FRONTIER_TOOL_RECORDS, ...NEXT_FRONTIER_TOOL_RECORDS, ...NEEDED_INHOUSE_TOOL_RECORDS, ...SPACE_STUDIO_TOOLS, WEBCAM_EXPLORER_TOOL, FACTCHECKER_TOOL, THEME_STUDIO_TOOL, RGB_GENERATOR_TOOL, RGB_MOTION_STUDIO_TOOL, AUDIO_VISUALIZER_STUDIO_TOOL, ...PRICE_TOOLS];
const skeletons = buildSkeletonTools(baseTools);
const verification = verifySkeletonToolSuite(skeletons, baseTools.length);
const report = buildSkeletonCompatibilityReport(skeletons, { limit: 24 });
const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
fs.writeFileSync(path.join(exportsDir, "skeleton-tool-summary.json"), JSON.stringify({ ...report, verification }, null, 2));
const rows = ["id,name,baseToolId,baseEngine,patternId,accepts,produces,tags"];
for (const tool of skeletons.slice(0, 500)) {
  rows.push([
    tool.id,
    tool.name,
    tool.skeletonBaseToolId,
    tool.config.baseEngine,
    tool.config.patternId,
    (tool.config.accepts || []).join("|"),
    (tool.config.produces || []).join("|"),
    (tool.tags || []).slice(0, 18).join("|")
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "skeleton-tool-sample.csv"), rows.join("\n"));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(report.summary);
