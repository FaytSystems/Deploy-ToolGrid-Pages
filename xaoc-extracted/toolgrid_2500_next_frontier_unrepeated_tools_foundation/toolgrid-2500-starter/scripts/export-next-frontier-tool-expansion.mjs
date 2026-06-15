import fs from "node:fs";
import path from "node:path";
import { tools } from "../src/tool-catalog.js";
import { IN_HOUSE_TOOL_RECORDS } from "../src/in-house-tools.js";
import { MASSIVE_TOOL_FACTORY_RECORDS } from "../src/massive-tool-factory.js";
import { FUNCTIONAL_TOOL_RECORDS } from "../src/functional-tools.js";
import { MINI_APP_TOOL_RECORDS } from "../src/mini-apps.js";
import { FRONTIER_TOOL_RECORDS } from "../src/frontier-tool-expansion.js";
import { WEBCAM_EXPLORER_TOOL } from "../src/webcam-explorer.js";
import { FACTCHECKER_TOOL } from "../src/factchecker-tool.js";
import { RGB_GENERATOR_TOOL, THEME_STUDIO_TOOL } from "../src/theme-system.js";
import { RGB_MOTION_STUDIO_TOOL } from "../src/rgb-motion-studio.js";
import { AUDIO_VISUALIZER_STUDIO_TOOL } from "../src/audio-visualizer-studio.js";
import { PRICE_TOOLS } from "../src/price-comparison-tool.js";
import {
  NEXT_FRONTIER_TOOL_RECORDS,
  buildNextFrontierToolSummary,
  findNextFrontierCollisions,
  searchNextFrontierTools,
  verifyNextFrontierToolSuite
} from "../src/next-frontier-tool-expansion.js";

const existingTools = [
  ...tools,
  ...IN_HOUSE_TOOL_RECORDS,
  ...MASSIVE_TOOL_FACTORY_RECORDS,
  ...FUNCTIONAL_TOOL_RECORDS,
  ...MINI_APP_TOOL_RECORDS,
  ...FRONTIER_TOOL_RECORDS,
  WEBCAM_EXPLORER_TOOL,
  FACTCHECKER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  ...PRICE_TOOLS
];

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
const verification = verifyNextFrontierToolSuite({ knownEngines: ["mini_app"], existingTools });
const collisions = findNextFrontierCollisions(existingTools);
const summary = buildNextFrontierToolSummary();
fs.writeFileSync(path.join(exportsDir, "next-frontier-tool-expansion-summary.json"), JSON.stringify({ ...summary, verification, collisions: collisions.slice(0, 25) }, null, 2));
const rows = ["id,name,category,kind,operation,accepts,produces,tags,searchPhrases"];
for (const tool of NEXT_FRONTIER_TOOL_RECORDS.slice(0, 2000)) {
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
fs.writeFileSync(path.join(exportsDir, "next-frontier-tool-expansion-sample.csv"), rows.join("\n"));
const searchRows = ["query,topResults"];
for (const query of [
  "museum exhibit provenance evidence",
  "drone flight safety margin",
  "harbor mooring route variant",
  "apiary honey batch split",
  "stage lighting cue smart shadow",
  "customs invoice tariff source freshness",
  "robot sensor calibration drift",
  "academic accreditation evidence quality"
]) {
  searchRows.push([query, searchNextFrontierTools(query, { limit: 8 }).map((item) => item.tool.name).join(" | ")].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
}
fs.writeFileSync(path.join(exportsDir, "next-frontier-tool-search-examples.csv"), searchRows.join("\n"));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(summary.summary);
