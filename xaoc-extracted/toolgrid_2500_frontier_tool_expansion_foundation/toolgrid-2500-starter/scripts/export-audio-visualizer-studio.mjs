import { mkdir, writeFile } from "node:fs/promises";
import {
  AUDIO_VISUALIZER_EFFECTS,
  AUDIO_VISUALIZER_EXPORT_TIERS,
  AUDIO_VISUALIZER_LIGHTING_PRESETS,
  AUDIO_VISUALIZER_MAX_VARIATIONS,
  AUDIO_VISUALIZER_SHAPES,
  AUDIO_VISUALIZER_STUDIO_VERSION,
  AUDIO_VISUALIZER_TOOL,
  buildAudioVisualizerProject,
  createDefaultAudioVisualizerSettings,
  verifyAudioVisualizerStudioConfig
} from "../src/audio-visualizer-studio.js";

const outDir = new URL("../exports/", import.meta.url);
await mkdir(outDir, { recursive: true });

const settings = createDefaultAudioVisualizerSettings();
const project = buildAudioVisualizerProject(settings);
const verification = verifyAudioVisualizerStudioConfig(settings);

const summary = {
  version: AUDIO_VISUALIZER_STUDIO_VERSION,
  toolId: AUDIO_VISUALIZER_TOOL.id,
  toolName: AUDIO_VISUALIZER_TOOL.name,
  maxVariations: AUDIO_VISUALIZER_MAX_VARIATIONS,
  shapes: AUDIO_VISUALIZER_SHAPES.length,
  effects: AUDIO_VISUALIZER_EFFECTS.length,
  lightingPresets: AUDIO_VISUALIZER_LIGHTING_PRESETS.length,
  exportTiers: AUDIO_VISUALIZER_EXPORT_TIERS.length,
  queueTasks: project.queue.length,
  selectedVariation: project.selected.number,
  verified: verification.ok,
  errors: verification.errors,
  note: "This foundation provides the functional UI, variation planner, prompt-aware settings, shared toolbox outputs, and export-plan skeleton. Production-grade MP4/GIF rendering should be connected to a backend renderer."
};

const csvHeader = "number,title,shape,effect,lighting,prompt_fit,loop_readiness,accent,second_accent\n";
const csvRows = project.variations.map((variation) => [
  variation.number,
  variation.title,
  variation.shapeName,
  variation.primaryEffectName,
  variation.lightingName,
  variation.promptFit,
  variation.loopReadiness,
  variation.accent,
  variation.secondAccent
].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\n");

await writeFile(new URL("audio-visualizer-studio-summary.json", outDir), `${JSON.stringify(summary, null, 2)}\n`);
await writeFile(new URL("audio-visualizer-variations.csv", outDir), `${csvHeader}${csvRows}\n`);
console.log(`Exported ${project.variations.length} audio visualizer variations and ${project.queue.length} queue tasks.`);
