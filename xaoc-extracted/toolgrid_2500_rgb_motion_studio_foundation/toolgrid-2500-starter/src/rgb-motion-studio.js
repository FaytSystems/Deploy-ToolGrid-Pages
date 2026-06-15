export const RGB_MOTION_STUDIO_VERSION = "2026-06-13-rgb-motion-studio-v1";
export const RGB_MOTION_MAX_LAYERS = 64;
export const RGB_MOTION_MAX_EXPORT_SECONDS = 30;

export const RGB_MOTION_SHAPES = Object.freeze([
  { id: "rounded-rectangle", name: "Rounded Rectangle", pathType: "rect", search: ["box", "frame", "border", "thumbnail", "panel"] },
  { id: "rectangle", name: "Rectangle", pathType: "rect", search: ["square", "box", "frame", "banner"] },
  { id: "circle", name: "Circle", pathType: "ellipse", search: ["ring", "orb", "badge", "logo"] },
  { id: "ellipse", name: "Ellipse", pathType: "ellipse", search: ["oval", "orbit", "badge"] },
  { id: "triangle", name: "Triangle", pathType: "polygon", search: ["pointer", "warning", "play", "arrow"] },
  { id: "diamond", name: "Diamond", pathType: "polygon", search: ["gem", "badge", "marker"] },
  { id: "hexagon", name: "Hexagon", pathType: "polygon", search: ["tech", "honeycomb", "badge", "cell"] },
  { id: "star", name: "Star", pathType: "polygon", search: ["spark", "favorite", "badge"] },
  { id: "arrow", name: "Arrow", pathType: "polygon", search: ["direction", "callout", "pointer"] },
  { id: "heart", name: "Heart", pathType: "path", search: ["love", "like", "social"] },
  { id: "custom-path", name: "Draw Your Own Path", pathType: "freehand", search: ["custom", "draw", "freehand", "path", "mask"] }
]);

export const RGB_MOTION_EFFECTS = Object.freeze([
  {
    id: "dog-chasing-tail",
    name: "Dog-Chasing-Tail",
    region: "outline",
    description: "A bright light ball runs around the chosen path with a faded tail behind it, like a dog chasing its tail.",
    supportsFill: false,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "comet-trail",
    name: "Comet Trail",
    region: "outline",
    description: "A glowing comet head follows the shape with a long smooth fade trail.",
    supportsFill: false,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "rotating-outline",
    name: "Rotating Outline",
    region: "outline",
    description: "A light sweep rotates around the outside edge of the shape.",
    supportsFill: false,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "strobe-outline",
    name: "Strobe Outline",
    region: "outline",
    description: "The outline flashes hard on/off at a chosen speed.",
    supportsFill: false,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "pulse-glow",
    name: "Pulse Glow",
    region: "outline-fill",
    description: "The shape breathes brighter and dimmer in a smooth loop.",
    supportsFill: true,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "spectrum-shift",
    name: "Spectrum Shift",
    region: "outline-fill",
    description: "The colors move through a full RGB rainbow cycle.",
    supportsFill: true,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "intermittent-sparks",
    name: "Intermittent Sparks",
    region: "outline",
    description: "Small glowing sparks appear randomly on the path and fade out.",
    supportsFill: false,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "scanner-sweep",
    name: "Scanner Sweep",
    region: "fill",
    description: "A scanning light passes through the inside of the shape.",
    supportsFill: true,
    supportsOutline: false,
    parallelSafe: true
  },
  {
    id: "plasma-fill",
    name: "Plasma Fill",
    region: "fill",
    description: "The inside of the shape becomes a moving cloudy RGB plasma texture.",
    supportsFill: true,
    supportsOutline: false,
    parallelSafe: true
  },
  {
    id: "grid-flicker",
    name: "Grid Flicker",
    region: "fill",
    description: "The interior flashes with digital grid-like flickers.",
    supportsFill: true,
    supportsOutline: false,
    parallelSafe: true
  },
  {
    id: "neon-breathe",
    name: "Neon Breathe",
    region: "outline-fill",
    description: "A soft neon aura expands and contracts around the whole shape.",
    supportsFill: true,
    supportsOutline: true,
    parallelSafe: true
  },
  {
    id: "audio-reactive-preview",
    name: "Audio Reactive Preview",
    region: "outline-fill",
    description: "A metadata-ready effect for future audio-reactive rendering and beat-synced exports.",
    supportsFill: true,
    supportsOutline: true,
    parallelSafe: false
  }
]);

export const RGB_MOTION_REGIONS = Object.freeze([
  "outer-outline",
  "inner-outline",
  "fill",
  "outer-glow",
  "inner-glow",
  "mask"
]);

export const RGB_MOTION_EXPORT_FORMATS = Object.freeze([
  "preview-only",
  "transparent-png-sequence",
  "gif-overlay",
  "webm-overlay",
  "mp4-composite",
  "preset-json"
]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
const slug = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function normalizeHex(value, fallback = "#00E5FF") {
  const raw = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(raw)) return raw.toUpperCase();
  if (/^#[0-9a-f]{3}$/i.test(raw)) return `#${raw.slice(1).split("").map((char) => char + char).join("")}`.toUpperCase();
  return fallback.toUpperCase();
}

function pickShape(shapeId) {
  return RGB_MOTION_SHAPES.find((shape) => shape.id === shapeId) || RGB_MOTION_SHAPES[0];
}

function pickEffect(effectId) {
  return RGB_MOTION_EFFECTS.find((effect) => effect.id === effectId) || RGB_MOTION_EFFECTS[0];
}

export function createDefaultRgbMotionSettings() {
  return {
    sourceType: "image-or-video-overlay",
    shapeId: "rounded-rectangle",
    customPath: "M 20 20 H 180 Q 200 20 200 40 V 120 Q 200 140 180 140 H 20 Q 0 140 0 120 V 40 Q 0 20 20 20",
    region: "outer-outline",
    outlineEffect: "dog-chasing-tail",
    fillEffect: "plasma-fill",
    innerEffect: "pulse-glow",
    outlineColor: "#00E5FF",
    fillColor: "#7C00FF",
    secondaryColor: "#FFB000",
    trailLength: 28,
    strokeWidth: 6,
    speedSeconds: 3.2,
    brightness: 85,
    intensity: 76,
    layerCount: 4,
    exportFormat: "preview-only",
    durationSeconds: 8,
    pathMode: "loop",
    blendMode: "screen"
  };
}

export function buildRgbMotionSettings(inputs = {}) {
  const defaults = createDefaultRgbMotionSettings();
  const shape = pickShape(inputs.shapeId || defaults.shapeId);
  const outline = pickEffect(inputs.outlineEffect || inputs.effect || defaults.outlineEffect);
  const fill = pickEffect(inputs.fillEffect || defaults.fillEffect);
  const inner = pickEffect(inputs.innerEffect || defaults.innerEffect);
  return {
    sourceType: String(inputs.sourceType || defaults.sourceType),
    shapeId: shape.id,
    shapeName: shape.name,
    shapePathType: shape.pathType,
    customPath: String(inputs.customPath || defaults.customPath),
    region: RGB_MOTION_REGIONS.includes(inputs.region) ? inputs.region : defaults.region,
    outlineEffect: outline.id,
    outlineEffectName: outline.name,
    fillEffect: fill.id,
    fillEffectName: fill.name,
    innerEffect: inner.id,
    innerEffectName: inner.name,
    outlineColor: normalizeHex(inputs.outlineColor || inputs.color || defaults.outlineColor, defaults.outlineColor),
    fillColor: normalizeHex(inputs.fillColor || defaults.fillColor, defaults.fillColor),
    secondaryColor: normalizeHex(inputs.secondaryColor || defaults.secondaryColor, defaults.secondaryColor),
    trailLength: clamp(inputs.trailLength ?? defaults.trailLength, 0, 100),
    strokeWidth: clamp(inputs.strokeWidth ?? defaults.strokeWidth, 1, 40),
    speedSeconds: clamp(inputs.speedSeconds ?? defaults.speedSeconds, 0.1, 30),
    brightness: clamp(inputs.brightness ?? defaults.brightness, 1, 100),
    intensity: clamp(inputs.intensity ?? defaults.intensity, 1, 100),
    layerCount: Math.max(1, Math.min(RGB_MOTION_MAX_LAYERS, Number(inputs.layerCount || inputs.layers || defaults.layerCount))),
    exportFormat: RGB_MOTION_EXPORT_FORMATS.includes(inputs.exportFormat) ? inputs.exportFormat : defaults.exportFormat,
    durationSeconds: clamp(inputs.durationSeconds ?? defaults.durationSeconds, 1, RGB_MOTION_MAX_EXPORT_SECONDS),
    pathMode: ["loop", "reverse", "bounce", "ping-pong", "random-start"].includes(inputs.pathMode) ? inputs.pathMode : defaults.pathMode,
    blendMode: ["screen", "add", "normal", "multiply", "overlay", "lighten"].includes(inputs.blendMode) ? inputs.blendMode : defaults.blendMode
  };
}

export function buildShapeEffectLayer({ index = 0, settings = createDefaultRgbMotionSettings(), region, effectId, role } = {}) {
  const normalized = buildRgbMotionSettings(settings);
  const effect = pickEffect(effectId || normalized.outlineEffect);
  return {
    id: `rgb-layer-${String(index + 1).padStart(2, "0")}-${slug(region || normalized.region)}-${effect.id}`,
    layer: index + 1,
    role: role || `${effect.name} on ${region || normalized.region}`,
    shapeId: normalized.shapeId,
    region: region || normalized.region,
    effectId: effect.id,
    effectName: effect.name,
    accepts: ["image", "video", "transparent-overlay", "shape", "path", "color-palette", "timeline"],
    produces: ["animated-overlay", "effect-preset", "render-plan", normalized.exportFormat],
    pathMode: normalized.pathMode,
    parallelSafe: effect.parallelSafe,
    renderHint: `${effect.name} uses ${normalized.outlineColor}, ${normalized.fillColor}, ${normalized.secondaryColor} at ${normalized.speedSeconds}s speed.`,
    status: "preview-ready"
  };
}

export function buildRgbMotionProject(inputs = {}) {
  const settings = buildRgbMotionSettings(inputs);
  const baseLayers = [
    buildShapeEffectLayer({ index: 0, settings, region: "outer-outline", effectId: settings.outlineEffect, role: "Outer outline motion path" }),
    buildShapeEffectLayer({ index: 1, settings, region: "fill", effectId: settings.fillEffect, role: "Internal fill effect" }),
    buildShapeEffectLayer({ index: 2, settings, region: "inner-outline", effectId: settings.innerEffect, role: "Inner outline accent" }),
    buildShapeEffectLayer({ index: 3, settings, region: "outer-glow", effectId: "neon-breathe", role: "Outer glow aura" })
  ];
  const layers = Array.from({ length: settings.layerCount }, (_, index) => baseLayers[index % baseLayers.length]).map((layer, index) => ({ ...layer, id: layer.id.replace("rgb-layer-", `rgb-layer-${String(index + 1).padStart(2, "0")}-`), layer: index + 1 }));
  const outlineEffect = pickEffect(settings.outlineEffect);
  const fillEffect = pickEffect(settings.fillEffect);
  return {
    version: RGB_MOTION_STUDIO_VERSION,
    settings,
    layers,
    compatibility: {
      accepts: ["image", "video", "transparent-overlay", "svg", "canvas", "shape", "path", "theme-profile"],
      produces: ["animated-overlay", "effect-preset", "render-plan", "gif", "webm", "mp4", "png-sequence"],
      waterfallSignals: ["media-input-ready", "shape-path-ready", "effect-preview-ready", "render-export-ready"],
      canRunWithoutPriorOutput: true,
      parallelSafe: layers.every((layer) => layer.parallelSafe),
      needsBackendFor: settings.exportFormat === "mp4-composite" ? ["high-resolution-video-render", "long-video-export"] : []
    },
    summary: `${settings.shapeName} with ${outlineEffect.name} outline + ${fillEffect.name} fill across ${layers.length}/${RGB_MOTION_MAX_LAYERS} effect layer${layers.length === 1 ? "" : "s"}.`
  };
}

export function runRgbMotionStudio(inputs = {}) {
  const project = buildRgbMotionProject(inputs);
  const { settings, compatibility } = project;
  return [
    `RGB Motion Studio: ${project.summary}`,
    `Source type: ${settings.sourceType}`,
    `Shape/path: ${settings.shapeName} (${settings.shapePathType}) · path mode ${settings.pathMode}`,
    `Outline: ${settings.outlineEffectName} · Fill: ${settings.fillEffectName} · Inner: ${settings.innerEffectName}`,
    `Colors: outline ${settings.outlineColor}, fill ${settings.fillColor}, secondary ${settings.secondaryColor}`,
    `Controls: speed ${settings.speedSeconds}s · trail ${settings.trailLength}% · stroke ${settings.strokeWidth}px · brightness ${settings.brightness}% · intensity ${settings.intensity}%`,
    `Export target: ${settings.exportFormat} · duration ${settings.durationSeconds}s · blend ${settings.blendMode}`,
    `Waterfall signals: ${compatibility.waterfallSignals.join(" → ")}`,
    compatibility.needsBackendFor.length ? `Backend needed for: ${compatibility.needsBackendFor.join(", ")}` : "Browser preview/export preset ready. Heavy video rendering can be connected later."
  ].join("\n");
}

export function searchRgbMotionEffects(query = "", limit = 12) {
  const q = String(query || "").toLowerCase();
  return RGB_MOTION_EFFECTS
    .map((effect) => {
      const haystack = `${effect.id} ${effect.name} ${effect.description} ${effect.region}`.toLowerCase();
      let score = 0;
      for (const token of q.split(/[^a-z0-9]+/).filter(Boolean)) if (haystack.includes(token)) score += 2;
      if (!q) score += 1;
      if (effect.id === "dog-chasing-tail") score += 3;
      return { effect, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.effect.name.localeCompare(b.effect.name))
    .slice(0, limit);
}

export function verifyRgbMotionStudioConfig(settings = createDefaultRgbMotionSettings()) {
  const project = buildRgbMotionProject(settings);
  const errors = [];
  if (!RGB_MOTION_SHAPES.some((shape) => shape.id === project.settings.shapeId)) errors.push("unknown shape");
  if (!RGB_MOTION_EFFECTS.some((effect) => effect.id === project.settings.outlineEffect)) errors.push("unknown outline effect");
  if (!RGB_MOTION_EFFECTS.some((effect) => effect.id === project.settings.fillEffect)) errors.push("unknown fill effect");
  if (!/^#[0-9A-F]{6}$/.test(project.settings.outlineColor)) errors.push("outline color is not normalized");
  if (project.layers.length < 1 || project.layers.length > RGB_MOTION_MAX_LAYERS) errors.push("layer count out of range");
  if (!project.compatibility.accepts.includes("video")) errors.push("tool must accept video");
  if (!project.compatibility.produces.includes("animated-overlay")) errors.push("tool must produce animated overlay");
  return { ok: errors.length === 0, errors, project };
}

export const RGB_MOTION_STUDIO_TOOL = Object.freeze({
  id: "rgb-motion-shape-fx-studio",
  name: "RGB Motion Shape FX Studio",
  category: "Image & Video Tools",
  engine: "rgb_motion_studio",
  premiumOnly: true,
  systemLabel: "PAID RGB MEDIA TOOL",
  description: "Create animated RGB effects for image/video overlays. Pick premade shapes or draw a custom path, then apply effects to the outline, fill, inner outline, glow, or multiple stacked shapes.",
  tags: [
    "rgb motion studio", "rgb shape effects", "dog chasing tail", "light ball with tail", "comet trail", "animated outline", "shape outline effect", "fill effect", "inner outline", "outer glow", "image editing", "video editing", "video overlay", "transparent overlay", "gif overlay", "webm overlay", "mp4 composite", "draw your own shape", "custom path", "premade shapes", "neon border", "rgb trail", "motion path", "path animation", "glow trail", "strobe shape", "flashing outline", "rotating outline", "spectrum shift", "plasma fill", "scanner sweep", "layered effects", "multi shape effects", "premium media tool", "skeleton ready"
  ],
  config: {
    mode: "rgb_motion_studio",
    accepts: ["image", "video", "transparent-overlay", "svg", "canvas", "shape", "path", "theme-profile"],
    produces: ["animated-overlay", "effect-preset", "render-plan", "gif", "webm", "mp4", "png-sequence"],
    maxLayers: RGB_MOTION_MAX_LAYERS
  }
});

function option(value, label) {
  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = label || value;
  return opt;
}

function addField(form, name, label, type, value, choices = []) {
  const wrap = document.createElement("div");
  const lab = document.createElement("label");
  lab.htmlFor = `rgb-motion-${name}`;
  lab.textContent = label;
  let input;
  if (type === "select") {
    input = document.createElement("select");
    input.append(...choices.map((choice) => option(choice.value ?? choice, choice.label ?? String(choice))));
    input.value = value;
  } else if (type === "textarea") {
    input = document.createElement("textarea");
    input.rows = 3;
    input.value = value;
  } else {
    input = document.createElement("input");
    input.type = type;
    input.value = value;
  }
  input.id = `rgb-motion-${name}`;
  input.name = name;
  wrap.append(lab, input);
  form.append(wrap);
  return input;
}

function svgShapeMarkup(shapeId, strokeWidth = 6) {
  switch (shapeId) {
    case "circle": return `<circle cx="110" cy="80" r="54" pathLength="100" />`;
    case "ellipse": return `<ellipse cx="110" cy="80" rx="72" ry="46" pathLength="100" />`;
    case "triangle": return `<polygon points="110,20 190,140 30,140" pathLength="100" />`;
    case "diamond": return `<polygon points="110,12 198,80 110,148 22,80" pathLength="100" />`;
    case "hexagon": return `<polygon points="66,22 154,22 202,80 154,138 66,138 18,80" pathLength="100" />`;
    case "star": return `<polygon points="110,15 132,58 180,65 145,98 154,145 110,122 66,145 75,98 40,65 88,58" pathLength="100" />`;
    case "arrow": return `<polygon points="30,68 142,68 142,36 202,80 142,124 142,92 30,92" pathLength="100" />`;
    case "custom-path": return `<path d="M30 108 C58 20 142 20 190 72 C142 84 156 146 70 136 C48 132 36 124 30 108" pathLength="100" />`;
    case "rectangle": return `<rect x="25" y="30" width="170" height="100" pathLength="100" />`;
    case "rounded-rectangle":
    default: return `<rect x="20" y="25" width="180" height="110" rx="18" ry="18" pathLength="100" />`;
  }
}

function drawPreview(target, settings) {
  const project = buildRgbMotionProject(settings);
  const s = project.settings;
  target.innerHTML = `
    <div class="rgb-motion-preview-card" style="--rgb-motion-outline:${s.outlineColor};--rgb-motion-fill:${s.fillColor};--rgb-motion-secondary:${s.secondaryColor};--rgb-motion-speed:${s.speedSeconds}s;--rgb-motion-stroke:${s.strokeWidth};--rgb-motion-brightness:${s.brightness}%;--rgb-motion-intensity:${s.intensity}%;">
      <svg class="rgb-motion-svg" viewBox="0 0 220 160" role="img" aria-label="RGB motion preview">
        <defs>
          <filter id="rgbMotionGlow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <linearGradient id="rgbMotionFill" x1="0" x2="1"><stop offset="0%" stop-color="${s.fillColor}"/><stop offset="50%" stop-color="${s.secondaryColor}"/><stop offset="100%" stop-color="${s.outlineColor}"/></linearGradient>
        </defs>
        <g class="rgb-motion-shape-fill ${s.fillEffect}">${svgShapeMarkup(s.shapeId, s.strokeWidth)}</g>
        <g class="rgb-motion-shape-outline ${s.outlineEffect}">${svgShapeMarkup(s.shapeId, s.strokeWidth)}</g>
        <g class="rgb-motion-shape-inner ${s.innerEffect}"><rect x="55" y="55" width="110" height="50" rx="12" pathLength="100" /></g>
        <circle class="rgb-motion-tail-head" cx="20" cy="25" r="6" />
      </svg>
      <div class="rgb-motion-preview-meta"><strong>${s.shapeName}</strong><span>${s.outlineEffectName} outline · ${s.fillEffectName} fill · ${project.layers.length} layers</span></div>
    </div>`;
}

export function renderRgbMotionStudio(container, tool, options = {}) {
  const defaults = buildRgbMotionSettings(options.initialInputs || {});
  const shell = document.createElement("div");
  shell.className = "rgb-motion-tool-shell";
  const title = document.createElement("h3");
  title.textContent = tool.name;
  const note = document.createElement("p");
  note.className = "mini-note";
  note.textContent = "Premium image/video FX tool: make a shape, choose outline/fill/inner effects, preview the RGB motion, and export a render plan or overlay preset. The Dog-Chasing-Tail effect is a moving light ball with a faded tail on the selected path.";
  const form = document.createElement("form");
  form.className = "form-grid two compact-grid";
  const shape = addField(form, "shapeId", "Shape", "select", defaults.shapeId, RGB_MOTION_SHAPES.map((item) => ({ value: item.id, label: item.name })));
  const outline = addField(form, "outlineEffect", "Outline effect", "select", defaults.outlineEffect, RGB_MOTION_EFFECTS.filter((item) => item.supportsOutline).map((item) => ({ value: item.id, label: item.name })));
  const fill = addField(form, "fillEffect", "Fill effect", "select", defaults.fillEffect, RGB_MOTION_EFFECTS.filter((item) => item.supportsFill).map((item) => ({ value: item.id, label: item.name })));
  const inner = addField(form, "innerEffect", "Inner effect", "select", defaults.innerEffect, RGB_MOTION_EFFECTS.map((item) => ({ value: item.id, label: item.name })));
  const outlineColor = addField(form, "outlineColor", "Outline color", "color", defaults.outlineColor);
  const fillColor = addField(form, "fillColor", "Fill color", "color", defaults.fillColor);
  const secondaryColor = addField(form, "secondaryColor", "Secondary color", "color", defaults.secondaryColor);
  const speed = addField(form, "speedSeconds", "Speed seconds", "number", defaults.speedSeconds);
  const trail = addField(form, "trailLength", "Tail length %", "number", defaults.trailLength);
  const stroke = addField(form, "strokeWidth", "Stroke width", "number", defaults.strokeWidth);
  const layers = addField(form, "layerCount", "Effect layers", "number", defaults.layerCount);
  const exportFormat = addField(form, "exportFormat", "Export target", "select", defaults.exportFormat, RGB_MOTION_EXPORT_FORMATS);
  const preview = document.createElement("div");
  preview.className = "rgb-motion-live-preview";
  const output = document.createElement("pre");
  output.className = "tool-output";
  const collect = () => Object.fromEntries(new FormData(form).entries());
  const update = () => {
    const current = buildRgbMotionSettings(collect());
    drawPreview(preview, current);
    output.textContent = runRgbMotionStudio(current);
  };
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  const actions = document.createElement("div");
  actions.className = "tool-card-actions";
  const random = document.createElement("button");
  random.type = "button";
  random.textContent = "Randomize FX";
  random.addEventListener("click", () => {
    const effect = RGB_MOTION_EFFECTS[Math.floor(Math.random() * RGB_MOTION_EFFECTS.length)];
    const shapePreset = RGB_MOTION_SHAPES[Math.floor(Math.random() * RGB_MOTION_SHAPES.length)];
    shape.value = shapePreset.id;
    outline.value = effect.supportsOutline ? effect.id : "dog-chasing-tail";
    fill.value = RGB_MOTION_EFFECTS.filter((item) => item.supportsFill)[Math.floor(Math.random() * RGB_MOTION_EFFECTS.filter((item) => item.supportsFill).length)].id;
    inner.value = RGB_MOTION_EFFECTS[Math.floor(Math.random() * RGB_MOTION_EFFECTS.length)].id;
    speed.value = (0.8 + Math.random() * 6).toFixed(1);
    trail.value = Math.floor(12 + Math.random() * 70);
    stroke.value = Math.floor(3 + Math.random() * 14);
    layers.value = Math.floor(1 + Math.random() * 12);
    update();
  });
  actions.append(random);
  shell.append(title, note, form, preview, actions, output);
  container.append(shell);
  update();
}
