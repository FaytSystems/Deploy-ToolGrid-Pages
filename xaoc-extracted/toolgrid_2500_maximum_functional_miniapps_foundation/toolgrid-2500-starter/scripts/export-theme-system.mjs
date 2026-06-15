import fs from "node:fs";
import path from "node:path";
import { RGB_EFFECT_TYPES, THEME_PRESET_TEMPLATES, THEME_SYSTEM_VERSION, buildThemeFromSettings, buildThemeStudioSummary, randomizeTheme, verifyThemeStudioConfig } from "../src/theme-system.js";

const exportsDir = path.resolve("exports");
fs.mkdirSync(exportsDir, { recursive: true });
const random = randomizeTheme(42);
const verification = verifyThemeStudioConfig(random);
const payload = {
  version: THEME_SYSTEM_VERSION,
  presetCount: THEME_PRESET_TEMPLATES.length,
  effectCount: RGB_EFFECT_TYPES.length,
  presets: THEME_PRESET_TEMPLATES.map((preset) => ({ id: preset.id, name: preset.name, source: preset.source, effect: preset.effect })),
  sampleTheme: buildThemeStudioSummary(buildThemeFromSettings(random)),
  verification
};
fs.writeFileSync(path.join(exportsDir, "theme-system-summary.json"), JSON.stringify(payload, null, 2));
if (!verification.ok) {
  console.error(verification.errors.join("\n"));
  process.exit(1);
}
console.log(`Theme system exported: ${payload.presetCount} presets, ${payload.effectCount} RGB effects.`);
