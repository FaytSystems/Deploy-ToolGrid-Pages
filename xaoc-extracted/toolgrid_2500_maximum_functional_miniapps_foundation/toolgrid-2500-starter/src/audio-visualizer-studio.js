const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || min));
const slug = (text) => String(text || "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "") || "audio-visualizer";
const escapeHtml = (text) => String(text ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

export const AUDIO_VISUALIZER_STUDIO_VERSION = "2026-06-13-audio-visualizer-studio-v1";
export const AUDIO_VISUALIZER_MAX_VARIATIONS = 64;
export const AUDIO_VISUALIZER_MAX_EXPORT_SECONDS = 60;

export const AUDIO_VISUALIZER_SHAPES = Object.freeze([
  { id: "crystal-nebula", name: "Crystal Nebula", family: "sculptural", tags: ["crystal", "peaks", "3d", "cinematic"] },
  { id: "wave-ribbon", name: "Wave Ribbon", family: "path", tags: ["wave", "ribbon", "flow", "synthwave"] },
  { id: "orbital-ring", name: "Orbital Ring", family: "circular", tags: ["ring", "orbit", "halo", "loop"] },
  { id: "pulse-flower", name: "Pulse Flower", family: "organic", tags: ["flower", "bloom", "reactive", "organic"] },
  { id: "terrain-mountain", name: "Audio Terrain Mountain", family: "terrain", tags: ["mountain", "landscape", "depth", "3d"] },
  { id: "hex-grid-core", name: "Hex Grid Core", family: "geometric", tags: ["hex", "grid", "tech", "sci-fi"] },
  { id: "liquid-orb", name: "Liquid Orb", family: "fluid", tags: ["liquid", "orb", "gloss", "ambient"] },
  { id: "neon-tunnel", name: "Neon Tunnel", family: "camera", tags: ["tunnel", "speed", "loop", "travel"] },
  { id: "spectral-bars", name: "Spectral Bars", family: "equalizer", tags: ["bars", "classic", "equalizer", "music"] },
  { id: "free-draw-path", name: "Draw Your Own Audio Path", family: "custom", tags: ["draw", "custom", "path", "outline"] }
]);

export const AUDIO_VISUALIZER_EFFECTS = Object.freeze([
  { id: "reactive-crystal-peaks", name: "Reactive Crystal Peaks", role: "shape", supports3d: true, tags: ["peaks", "depth", "bass", "3d"] },
  { id: "dog-chasing-tail", name: "Dog-Chasing-Tail Light Orbit", role: "outline", supports3d: false, tags: ["tail", "orbit", "outline", "comet"] },
  { id: "smart-shadow-pass", name: "Smart Shadow Pass", role: "lighting", supports3d: true, tags: ["shadow", "lightsource", "3d", "depth"] },
  { id: "rim-light-highlights", name: "Rim Light Highlights", role: "lighting", supports3d: true, tags: ["rim", "highlight", "glow", "edge"] },
  { id: "spectrum-pulse", name: "Spectrum Pulse", role: "color", supports3d: false, tags: ["spectrum", "pulse", "rgb", "color"] },
  { id: "plasma-fill", name: "Plasma Fill", role: "fill", supports3d: false, tags: ["fill", "plasma", "interior", "gradient"] },
  { id: "bass-impact-flare", name: "Bass Impact Flare", role: "beat", supports3d: true, tags: ["bass", "impact", "flare", "beat"] },
  { id: "beat-synced-strobe", name: "Beat-Synced Strobe", role: "beat", supports3d: false, tags: ["strobe", "beat", "flash", "rhythm"] },
  { id: "aurora-particles", name: "Aurora Particle Field", role: "background", supports3d: true, tags: ["particles", "aurora", "ambient", "space"] },
  { id: "waveform-wireframe", name: "Waveform Wireframe", role: "outline", supports3d: true, tags: ["wireframe", "wave", "mesh", "line"] },
  { id: "inner-core-glow", name: "Inner Core Glow", role: "fill", supports3d: false, tags: ["inner", "core", "glow", "fill"] },
  { id: "camera-orbit-loop", name: "Camera Orbit Loop", role: "camera", supports3d: true, tags: ["camera", "orbit", "loop", "motion"] },
  { id: "soft-volumetric-haze", name: "Soft Volumetric Haze", role: "lighting", supports3d: true, tags: ["haze", "volume", "light", "atmosphere"] },
  { id: "outline-chase", name: "Outline Chase", role: "outline", supports3d: false, tags: ["outline", "chase", "trail", "path"] }
]);

export const AUDIO_VISUALIZER_LIGHTING_PRESETS = Object.freeze([
  { id: "neon-rim", name: "Neon Rim", tags: ["rim", "edge", "glow"] },
  { id: "soft-box", name: "Soft Box", tags: ["soft", "studio", "shadow"] },
  { id: "spot-light", name: "Spot Light", tags: ["spot", "stage", "focus"] },
  { id: "laser-grid", name: "Laser Grid", tags: ["grid", "laser", "tech"] },
  { id: "volumetric", name: "Volumetric Beam", tags: ["beam", "haze", "depth"] },
  { id: "aurora", name: "Aurora Wash", tags: ["aurora", "wash", "ambient"] },
  { id: "shadow-field", name: "Shadow Field", tags: ["shadow", "darkspots", "depth"] },
  { id: "light-source-path", name: "Animated Light Source Path", tags: ["lightsource", "moving", "smart-shadow"] }
]);

export const AUDIO_VISUALIZER_EXPORT_TIERS = Object.freeze([
  { id: "gif-loop", label: "Download GIF Loop", seconds: 5, paid: true, note: "Short seamless looping GIF." },
  { id: "short-clip", label: "Download Short Clip", seconds: 15, paid: true, note: "Small MP4/WebM loop for paid users." },
  { id: "render-boost-30", label: "Render Boost 30s", seconds: 30, paid: true, upsell: true, note: "Paid add-on for longer clips." },
  { id: "render-boost-60", label: "Render Boost 60s", seconds: 60, paid: true, upsell: true, note: "Highest browser-safe export tier before backend rendering." }
]);

export const AUDIO_VISUALIZER_TOOL = Object.freeze({
  id: "audio-visualizer-studio",
  name: "Audio Visualizer Studio",
  category: "In-House Audio Visuals",
  engine: "audio_visualizer_studio",
  description: "Turns an uploaded audio file, audio URL, or prompt into up to 64 selectable 3D visualizer variations with shape, lighting, shadow, RGB motion, and export planning.",
  systemLabel: "SPECIFIC_TOOL",
  tags: [
    "audio visualizer", "music visualizer", "3d audio visualizer", "waveform art", "visualizer generator", "gif loop",
    "mp4 loop", "audio url", "audio upload", "music video", "64 variations", "visual effects", "smart shadow",
    "lighting pass", "shape library", "shared library", "rgb effects", "dog chasing tail", "spectrum", "beat synced",
    "synthwave", "crystal nebula", "looping clip", "paid export", "toolbox sync", "waterfall queue"
  ],
  searchPhrases: [
    "make an audio visualizer from a song", "create 64 visualizer variations", "turn mp3 into video loop",
    "animated waveform with lighting", "3d music visualizer", "make gif loop from audio", "generate visual effects from audio url",
    "add smart shadows to visualizer", "make more like this visualizer", "select best audio visualizer thumbnails"
  ],
  accepts: ["audio-file", "audio-url", "prompt", "style-brief", "shape-library", "lighting-library", "color-palette"],
  produces: ["visualizer-variation-grid", "selected-visualizer", "render-plan", "gif-loop", "short-clip", "lighting-pass", "toolbox-preset"],
  config: {
    maxVariations: AUDIO_VISUALIZER_MAX_VARIATIONS,
    maxExportSeconds: AUDIO_VISUALIZER_MAX_EXPORT_SECONDS,
    paidOnlyExports: true,
    supportsToolboxSync: true,
    downstreamTargets: ["rgb-motion-shape-fx-studio", "paid-profile-theme-studio", "skeleton-video-overlay", "skeleton-lighting-pass"]
  }
});

export function createDefaultAudioVisualizerSettings() {
  return {
    audioFileName: "Synthwave_Resonance.mp3",
    audioUrl: "https://example.com/audio/track.mp3",
    prompt: "Uplifting synthwave with strong bass, retro arpeggios, and cinematic build.",
    variationCount: 64,
    selectedVariation: 27,
    shapeId: "crystal-nebula",
    lightingId: "neon-rim",
    mood: "energetic",
    bpm: 128,
    key: "F Minor",
    waveSize: 78,
    width: 64,
    height: 92,
    depth: 71,
    colorIntensity: 85,
    lightingAngle: 135,
    shadowStrength: 62,
    highlightStrength: 88,
    outlineEffect: "dog-chasing-tail",
    fillEffect: "plasma-fill",
    motionSpeed: 1.25,
    loopLengthSeconds: 15,
    exportFormat: "short-clip",
    paidExport: true,
    downstreamUse: "video editor, motion design, 3d compositor"
  };
}

export function buildAudioVisualizerSettings(inputs = {}) {
  const defaults = createDefaultAudioVisualizerSettings();
  const shape = AUDIO_VISUALIZER_SHAPES.find((item) => item.id === (inputs.shapeId || defaults.shapeId)) || AUDIO_VISUALIZER_SHAPES[0];
  const lighting = AUDIO_VISUALIZER_LIGHTING_PRESETS.find((item) => item.id === (inputs.lightingId || defaults.lightingId)) || AUDIO_VISUALIZER_LIGHTING_PRESETS[0];
  const outline = AUDIO_VISUALIZER_EFFECTS.find((item) => item.id === (inputs.outlineEffect || defaults.outlineEffect)) || AUDIO_VISUALIZER_EFFECTS.find((item) => item.id === "dog-chasing-tail");
  const fill = AUDIO_VISUALIZER_EFFECTS.find((item) => item.id === (inputs.fillEffect || defaults.fillEffect)) || AUDIO_VISUALIZER_EFFECTS.find((item) => item.id === "plasma-fill");
  return {
    ...defaults,
    ...inputs,
    audioFileName: String(inputs.audioFileName || defaults.audioFileName),
    audioUrl: String(inputs.audioUrl || defaults.audioUrl),
    prompt: String(inputs.prompt || defaults.prompt),
    variationCount: Math.max(1, Math.min(AUDIO_VISUALIZER_MAX_VARIATIONS, Number(inputs.variationCount || inputs.count || defaults.variationCount))),
    selectedVariation: Math.max(1, Math.min(AUDIO_VISUALIZER_MAX_VARIATIONS, Number(inputs.selectedVariation || defaults.selectedVariation))),
    shapeId: shape.id,
    shapeName: shape.name,
    lightingId: lighting.id,
    lightingName: lighting.name,
    outlineEffect: outline.id,
    outlineEffectName: outline.name,
    fillEffect: fill.id,
    fillEffectName: fill.name,
    bpm: Math.max(40, Math.min(240, Number(inputs.bpm || defaults.bpm))),
    waveSize: clamp(inputs.waveSize ?? defaults.waveSize, 1, 100),
    width: clamp(inputs.width ?? defaults.width, 1, 100),
    height: clamp(inputs.height ?? defaults.height, 1, 100),
    depth: clamp(inputs.depth ?? defaults.depth, 1, 100),
    colorIntensity: clamp(inputs.colorIntensity ?? defaults.colorIntensity, 1, 100),
    lightingAngle: clamp(inputs.lightingAngle ?? defaults.lightingAngle, 0, 360),
    shadowStrength: clamp(inputs.shadowStrength ?? defaults.shadowStrength, 0, 100),
    highlightStrength: clamp(inputs.highlightStrength ?? defaults.highlightStrength, 0, 100),
    motionSpeed: Math.max(0.1, Math.min(5, Number(inputs.motionSpeed || defaults.motionSpeed))),
    loopLengthSeconds: Math.max(1, Math.min(AUDIO_VISUALIZER_MAX_EXPORT_SECONDS, Number(inputs.loopLengthSeconds || inputs.durationSeconds || defaults.loopLengthSeconds)))
  };
}

export function analyzeAudioPrompt(prompt = "") {
  const text = String(prompt).toLowerCase();
  const mood = text.includes("calm") || text.includes("ambient") ? "ambient" : text.includes("dark") ? "dark cinematic" : text.includes("happy") || text.includes("uplifting") ? "uplifting" : "energetic";
  const style = ["synthwave", "cinematic", "bass", "retro", "orchestral", "lofi", "rock", "podcast", "ambient"].filter((term) => text.includes(term));
  const bpmMatch = text.match(/(\d{2,3})\s*bpm/);
  const keyMatch = text.match(/\b([a-g])\s*(major|minor|min|maj)\b/i);
  return {
    mood,
    styleTags: style.length ? style : ["visual", "music", "reactive"],
    suggestedBpm: bpmMatch ? Number(bpmMatch[1]) : 128,
    suggestedKey: keyMatch ? `${keyMatch[1].toUpperCase()} ${keyMatch[2].toLowerCase().startsWith("maj") ? "Major" : "Minor"}` : "F Minor",
    promptSignals: [
      text.includes("3d") ? "3d-shape" : "2d-overlay-compatible",
      text.includes("shadow") ? "smart-shadow" : "lighting-pass-recommended",
      text.includes("loop") ? "loop-export" : "short-clip-ready",
      text.includes("beat") || text.includes("bass") ? "beat-reactive" : "waveform-reactive"
    ]
  };
}

function colorForIndex(index) {
  const palette = ["#00E5FF", "#8A2BFF", "#FF4FD8", "#46FF9A", "#FFB000", "#2F7CFF", "#B6FF00", "#FF5A3D"];
  return palette[index % palette.length];
}

export function buildAudioVisualizerVariations(inputs = {}) {
  const settings = buildAudioVisualizerSettings(inputs);
  const promptAnalysis = analyzeAudioPrompt(settings.prompt);
  return Array.from({ length: settings.variationCount }, (_, index) => {
    const shape = AUDIO_VISUALIZER_SHAPES[index % AUDIO_VISUALIZER_SHAPES.length];
    const primary = AUDIO_VISUALIZER_EFFECTS[(index + 2) % AUDIO_VISUALIZER_EFFECTS.length];
    const secondary = AUDIO_VISUALIZER_EFFECTS[(index + 7) % AUDIO_VISUALIZER_EFFECTS.length];
    const lighting = AUDIO_VISUALIZER_LIGHTING_PRESETS[(index + 3) % AUDIO_VISUALIZER_LIGHTING_PRESETS.length];
    const accent = colorForIndex(index);
    const secondAccent = colorForIndex(index + 3);
    return {
      id: `av-var-${String(index + 1).padStart(2, "0")}`,
      number: index + 1,
      title: `${shape.name} ${primary.name}`,
      templateName: index + 1 === settings.selectedVariation ? "Crystal Nebula" : `${shape.family} ${primary.role}`,
      shapeId: shape.id,
      shapeName: shape.name,
      primaryEffect: primary.id,
      primaryEffectName: primary.name,
      secondaryEffect: secondary.id,
      secondaryEffectName: secondary.name,
      lightingId: lighting.id,
      lightingName: lighting.name,
      accent,
      secondAccent,
      energyScore: Math.min(100, 48 + ((index * 7) % 49)),
      loopReadiness: index % 3 === 0 ? "seamless" : "needs export pass",
      downstreamTargets: ["video-editor", "motion-design", "3d-compositor"],
      promptFit: promptAnalysis.styleTags.some((tag) => shape.tags.includes(tag) || primary.tags.includes(tag)) ? "high" : "medium",
      kept: index + 1 === settings.selectedVariation,
      status: index + 1 === settings.selectedVariation ? "selected" : "generated"
    };
  });
}

export function buildAudioVisualizerQueue(settings = createDefaultAudioVisualizerSettings()) {
  const s = buildAudioVisualizerSettings(settings);
  return [
    { id: "audio-analysis", label: "Audio Analysis", status: "complete", progress: 100, needs: ["audio-file-or-url"], produces: ["bpm", "energy", "waveform-traits"], durationMs: 12000 },
    { id: "shape-selection", label: "Shape Selection", status: "complete", progress: 100, needs: ["prompt", "audio-analysis"], produces: ["shape-plan", s.shapeId], durationMs: 5000 },
    { id: "visualizer-generation", label: "Visualizer Generation", status: "running", progress: 64, needs: ["shape-plan"], produces: ["variation-grid"], durationMs: 84000 },
    { id: "lighting-pass", label: "Lighting Pass", status: "queued", progress: 0, needs: ["selected-variation"], produces: ["light-source-plan", s.lightingId], durationMs: 25000 },
    { id: "shadow-pass", label: "Shadow Pass", status: "queued", progress: 0, needs: ["lighting-pass"], produces: ["smart-shadow-map"], durationMs: 25000 },
    { id: "variation-batch", label: "Variation Batch (64)", status: "queued", progress: 0, needs: ["visualizer-generation"], produces: ["64-variation-gallery"], durationMs: 45000 },
    { id: "export-prep", label: "Export Prep", status: "queued", progress: 0, needs: ["kept-variation"], produces: ["gif-loop", "short-clip-plan"], durationMs: 16000 },
    { id: "finalize-store", label: "Finalize & Store", status: "queued", progress: 0, needs: ["export-prep"], produces: ["saved-preset", "toolbox-library-asset"], durationMs: 8000 }
  ];
}

export function buildAudioVisualizerProject(inputs = {}) {
  const settings = buildAudioVisualizerSettings(inputs);
  const analysis = analyzeAudioPrompt(settings.prompt);
  const variations = buildAudioVisualizerVariations(settings);
  const selected = variations.find((variation) => variation.number === settings.selectedVariation) || variations[0];
  return {
    version: AUDIO_VISUALIZER_STUDIO_VERSION,
    settings: { ...settings, mood: analysis.mood, bpm: analysis.suggestedBpm, key: analysis.suggestedKey },
    analysis,
    variations,
    selected,
    queue: buildAudioVisualizerQueue(settings),
    effectsStack: ["reactive-crystal-peaks", settings.outlineEffect, "pulse-glow", "spectrum-pulse", "smart-shadow-pass", settings.fillEffect].map((id) => AUDIO_VISUALIZER_EFFECTS.find((effect) => effect.id === id) || AUDIO_VISUALIZER_EFFECTS[0]),
    toolboxSync: {
      active: true,
      sharedLibraries: {
        shapes: 1248,
        materials: 2103,
        lighting: 876,
        effects: 1540,
        presets: 342
      },
      downstreamImpact: ["Video Editor ready", "Motion Design ready", "3D Compositor ready"],
      note: "Outputs are prepared so downstream tools can consume shape, lighting, motion, palette, and export-plan data without re-asking the user."
    },
    exports: AUDIO_VISUALIZER_EXPORT_TIERS
  };
}

export function searchAudioVisualizerEffects(query = "", limit = 8) {
  const terms = String(query).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  return AUDIO_VISUALIZER_EFFECTS.map((effect) => {
    const haystack = [effect.id, effect.name, effect.role, ...effect.tags].join(" ").toLowerCase();
    const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 2 : 0), effect.supports3d ? 1 : 0);
    return { effect, score };
  }).sort((a, b) => b.score - a.score || a.effect.name.localeCompare(b.effect.name)).slice(0, limit);
}

export function verifyAudioVisualizerStudioConfig(inputs = {}) {
  const settings = buildAudioVisualizerSettings(inputs);
  const errors = [];
  if (AUDIO_VISUALIZER_SHAPES.length < 8) errors.push("shape library is too small");
  if (AUDIO_VISUALIZER_EFFECTS.length < 10) errors.push("effect library is too small");
  if (settings.variationCount > AUDIO_VISUALIZER_MAX_VARIATIONS) errors.push("too many variations");
  if (!AUDIO_VISUALIZER_EFFECTS.some((effect) => effect.id === "dog-chasing-tail")) errors.push("missing dog-chasing-tail effect");
  if (!AUDIO_VISUALIZER_EFFECTS.some((effect) => effect.id === "smart-shadow-pass")) errors.push("missing smart shadow effect");
  const project = buildAudioVisualizerProject(settings);
  if (project.variations.length !== settings.variationCount) errors.push("variation generator count mismatch");
  if (project.queue.length < 7) errors.push("workflow queue missing stages");
  return {
    ok: errors.length === 0,
    errors,
    stats: {
      shapes: AUDIO_VISUALIZER_SHAPES.length,
      effects: AUDIO_VISUALIZER_EFFECTS.length,
      variations: project.variations.length,
      queueTasks: project.queue.length,
      maxVariations: AUDIO_VISUALIZER_MAX_VARIATIONS
    }
  };
}

function renderVariationCell(variation, selectedNumber) {
  return `<button class="audio-variation-cell ${variation.number === selectedNumber ? "selected" : ""}" type="button" data-variation="${variation.number}" style="--av-a:${variation.accent};--av-b:${variation.secondAccent}">
    <span>${String(variation.number).padStart(2, "0")}</span>
    <i></i>
    <small>${escapeHtml(variation.shapeName.split(" ")[0])}</small>
  </button>`;
}

export function renderAudioVisualizerStudio(container, tool = AUDIO_VISUALIZER_TOOL, options = {}) {
  const initial = { ...createDefaultAudioVisualizerSettings(), ...(options.initialInputs || {}) };
  let settings = buildAudioVisualizerSettings(initial);
  let project = buildAudioVisualizerProject(settings);

  const paint = () => {
    project = buildAudioVisualizerProject(settings);
    const s = project.settings;
    const selected = project.selected;
    container.innerHTML = `
      <div class="audio-studio-shell">
        <aside class="audio-studio-left">
          <div class="audio-project-chip"><strong>Orbital Resonance</strong><span>Visualizer Project · ${project.variations.length}/${AUDIO_VISUALIZER_MAX_VARIATIONS} variations</span></div>
          <div class="audio-panel-block"><strong>Audio Input</strong><label>Audio URL</label><input class="av-audio-url" value="${escapeHtml(s.audioUrl)}"/><label>Prompt / style</label><textarea class="av-prompt" rows="3">${escapeHtml(s.prompt)}</textarea><button class="av-generate" type="button">Analyze + generate</button></div>
          <div class="audio-shape-library"><strong>Shape Library</strong>${AUDIO_VISUALIZER_SHAPES.slice(0, 10).map((shape) => `<button class="av-shape ${shape.id === s.shapeId ? "active" : ""}" data-shape="${shape.id}" type="button">${escapeHtml(shape.name)}</button>`).join("")}</div>
          <div class="audio-lighting-library"><strong>Lighting Library</strong>${AUDIO_VISUALIZER_LIGHTING_PRESETS.map((light) => `<button class="av-light ${light.id === s.lightingId ? "active" : ""}" data-light="${light.id}" type="button">${escapeHtml(light.name)}</button>`).join("")}</div>
        </aside>
        <main class="audio-studio-main">
          <div class="audio-studio-title"><div><p class="eyebrow small">Premium tool</p><h3>${escapeHtml(tool.name)}</h3><span>Transform sound into immersive 3D visual experiences.</span></div><strong>Real-time preview · 60 FPS</strong></div>
          <div class="audio-preview-stage" style="--av-a:${selected.accent};--av-b:${selected.secondAccent};--av-depth:${s.depth}%;--av-speed:${s.motionSpeed}s">
            <div class="audio-orbit-ring"></div><div class="audio-crystal-field">${Array.from({ length: 34 }, (_, index) => `<i style="--h:${18 + ((index * 17) % 82)}%;--x:${(index * 29) % 100}%;--d:${0.35 + ((index * 13) % 60) / 100}s"></i>`).join("")}</div>
            <div class="audio-light-source"></div>
            <div class="audio-wave-line"></div>
            <span class="audio-preview-label">Selected #${selected.number} · ${escapeHtml(selected.templateName)}</span>
          </div>
          <div class="audio-transport"><button type="button">▶</button><span>00:48 / 03:42</span><div class="audio-mini-wave"></div><button type="button">Loop</button><button type="button">Beat Snap</button><button type="button">1×</button></div>
          <section><div class="section-title-row"><h4>Variations Gallery (${project.variations.length})</h4><span>${project.variations.length}/${AUDIO_VISUALIZER_MAX_VARIATIONS} generated</span></div><div class="audio-variation-grid">${project.variations.map((variation) => renderVariationCell(variation, s.selectedVariation)).join("")}</div></section>
          <footer class="audio-toolbox-sync"><strong>Toolbox Sync Active</strong><span>${project.toolboxSync.note}</span></footer>
        </main>
        <aside class="audio-studio-right">
          <div class="audio-panel-block"><strong>Workflow Queue</strong>${project.queue.map((task) => `<div class="audio-queue-item ${task.status}"><span>${escapeHtml(task.label)}</span><em>${task.status} ${task.progress ? `${task.progress}%` : ""}</em></div>`).join("")}<small>Estimated time remaining · 01:24</small></div>
          <div class="audio-panel-block"><strong>Selected Variation</strong><span>#${selected.number} ${escapeHtml(selected.templateName)}</span><label>Wave size</label><input class="av-wave-size" type="range" min="1" max="100" value="${s.waveSize}"/><label>Width</label><input class="av-width" type="range" min="1" max="100" value="${s.width}"/><label>Height</label><input class="av-height" type="range" min="1" max="100" value="${s.height}"/><label>Depth</label><input class="av-depth" type="range" min="1" max="100" value="${s.depth}"/><label>Color intensity</label><input class="av-color-intensity" type="range" min="1" max="100" value="${s.colorIntensity}"/><label>Lighting angle</label><input class="av-lighting-angle" type="range" min="0" max="360" value="${s.lightingAngle}"/><label>Shadow strength</label><input class="av-shadow" type="range" min="0" max="100" value="${s.shadowStrength}"/></div>
          <div class="audio-panel-block"><strong>Effects Stack</strong>${project.effectsStack.map((effect) => `<span class="audio-effect-pill">${escapeHtml(effect.name)}</span>`).join("")}</div>
          <div class="audio-panel-block"><strong>Export & Download</strong><button class="premium-export" type="button">Download GIF Loop</button><button class="premium-export" type="button">Download Short Clip</button><div class="audio-duration-pills"><button>5s</button><button>10s</button><button class="active">15s</button><button>30s</button><button>60s</button></div><small>Longer renders available with Render Boost upgrade.</small></div>
        </aside>
      </div>`;

    container.querySelector(".av-generate")?.addEventListener("click", () => {
      settings = buildAudioVisualizerSettings({ ...settings, audioUrl: container.querySelector(".av-audio-url")?.value, prompt: container.querySelector(".av-prompt")?.value, variationCount: AUDIO_VISUALIZER_MAX_VARIATIONS });
      paint();
    });
    container.querySelectorAll(".audio-variation-cell").forEach((button) => button.addEventListener("click", () => {
      settings = buildAudioVisualizerSettings({ ...settings, selectedVariation: Number(button.dataset.variation) });
      paint();
    }));
    container.querySelectorAll(".av-shape").forEach((button) => button.addEventListener("click", () => {
      settings = buildAudioVisualizerSettings({ ...settings, shapeId: button.dataset.shape });
      paint();
    }));
    container.querySelectorAll(".av-light").forEach((button) => button.addEventListener("click", () => {
      settings = buildAudioVisualizerSettings({ ...settings, lightingId: button.dataset.light });
      paint();
    }));
    for (const [selector, key] of [[".av-wave-size", "waveSize"], [".av-width", "width"], [".av-height", "height"], [".av-depth", "depth"], [".av-color-intensity", "colorIntensity"], [".av-lighting-angle", "lightingAngle"], [".av-shadow", "shadowStrength"]]) {
      container.querySelector(selector)?.addEventListener("input", (event) => {
        settings = buildAudioVisualizerSettings({ ...settings, [key]: Number(event.target.value) });
        const preview = container.querySelector(".audio-preview-stage");
        if (preview && key === "depth") preview.style.setProperty("--av-depth", `${event.target.value}%`);
      });
    }
  };

  paint();
}

export function runAudioVisualizerStudio(inputs = {}) {
  const project = buildAudioVisualizerProject(inputs);
  const s = project.settings;
  return [
    `Audio Visualizer Studio plan (${AUDIO_VISUALIZER_STUDIO_VERSION})`,
    `Audio: ${s.audioFileName || s.audioUrl}`,
    `Prompt mood: ${project.analysis.mood}`,
    `BPM/key: ${project.analysis.suggestedBpm} / ${project.analysis.suggestedKey}`,
    `Variations prepared: ${project.variations.length}/${AUDIO_VISUALIZER_MAX_VARIATIONS}`,
    `Selected: #${project.selected.number} ${project.selected.templateName}`,
    `Shape: ${s.shapeName}`,
    `Lighting: ${s.lightingName}`,
    `Effects: ${project.effectsStack.map((effect) => effect.name).join(" → ")}`,
    `Waterfall tasks: ${project.queue.map((task) => `${task.label}:${task.status}`).join(" | ")}`,
    `Paid exports: ${project.exports.map((item) => `${item.label} ${item.seconds}s`).join(", ")}`,
    "Note: live preview is browser-side; high-quality long video rendering should use a backend renderer."
  ].join("\n");
}

export const AUDIO_VISUALIZER_STUDIO_TOOL = AUDIO_VISUALIZER_TOOL;
