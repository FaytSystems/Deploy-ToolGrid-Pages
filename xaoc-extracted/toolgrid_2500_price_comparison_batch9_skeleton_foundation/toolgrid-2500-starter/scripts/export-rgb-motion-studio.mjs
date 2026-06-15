import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  RGB_MOTION_EFFECTS,
  RGB_MOTION_MAX_EXPORT_SECONDS,
  RGB_MOTION_MAX_LAYERS,
  RGB_MOTION_SHAPES,
  RGB_MOTION_STUDIO_TOOL,
  RGB_MOTION_STUDIO_VERSION,
  buildRgbMotionProject,
  createDefaultRgbMotionSettings,
  verifyRgbMotionStudioConfig
} from "../src/rgb-motion-studio.js";

const exportDir = join(process.cwd(), "exports");
mkdirSync(exportDir, { recursive: true });

const defaultPlan = buildRgbMotionProject(createDefaultRgbMotionSettings());
const verification = verifyRgbMotionStudioConfig(defaultPlan.settings);
const summary = {
  version: RGB_MOTION_STUDIO_VERSION,
  toolId: RGB_MOTION_STUDIO_TOOL.id,
  shapeCount: RGB_MOTION_SHAPES.length,
  effectCount: RGB_MOTION_EFFECTS.length,
  maxLayers: RGB_MOTION_MAX_LAYERS,
  maxExportSeconds: RGB_MOTION_MAX_EXPORT_SECONDS,
  defaultSummary: defaultPlan.summary,
  accepts: defaultPlan.compatibility.accepts,
  produces: defaultPlan.compatibility.produces,
  waterfallSignals: defaultPlan.compatibility.waterfallSignals,
  verified: verification.ok,
  errors: verification.errors
};
writeFileSync(join(exportDir, "rgb-motion-studio-summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
const csv = [
  "id,name,region,supports_outline,supports_fill,parallel_safe,description",
  ...RGB_MOTION_EFFECTS.map((effect) => [
    effect.id,
    effect.name,
    effect.region,
    effect.supportsOutline,
    effect.supportsFill,
    effect.parallelSafe,
    `"${effect.description.replaceAll('"', '""')}"`
  ].join(","))
].join("\n");
writeFileSync(join(exportDir, "rgb-motion-effects.csv"), `${csv}\n`);
console.log(`Exported ${RGB_MOTION_EFFECTS.length} RGB motion effects and ${RGB_MOTION_SHAPES.length} shape presets.`);
