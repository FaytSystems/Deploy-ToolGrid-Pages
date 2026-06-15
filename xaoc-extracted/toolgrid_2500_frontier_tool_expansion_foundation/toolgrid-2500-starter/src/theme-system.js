export const THEME_SYSTEM_VERSION = "2026-06-13-paid-theme-studio-rgb-v1";

export const THEME_ACCESS_LEVELS = Object.freeze({
  FREE: "free",
  PAID: "paid"
});

export const RGB_EFFECT_TYPES = Object.freeze([
  "solid",
  "strobe",
  "flash",
  "rotating-outline",
  "pulse",
  "intermittent-color",
  "chase",
  "sweep",
  "spectrum-shift",
  "breathing-glow"
]);

export const THEME_REGIONS = Object.freeze([
  "background",
  "outer-box",
  "inner-cell",
  "active-cell",
  "text",
  "glow"
]);

export const THEME_PRESET_TEMPLATES = Object.freeze([
  {
    id: "nexus-blueprint",
    name: "Nexus Blueprint",
    source: "uploaded-reference-style",
    thumbnail: "./assets/themes/theme-studio-reference.png",
    colors: {
      background: "#050A14",
      box: "#101827",
      cell: "#13233A",
      activeCell: "#00E5FF",
      text: "#E6F7FF",
      glow: "#7C3CFF"
    },
    effect: "rotating-outline"
  },
  {
    id: "matrix-cyan",
    name: "Matrix Cyan",
    source: "uploaded-reference-style",
    thumbnail: "./assets/themes/theme-workspace-reference.png",
    colors: {
      background: "#061015",
      box: "#0B1D24",
      cell: "#0F2F3A",
      activeCell: "#27F5D7",
      text: "#DDFBFF",
      glow: "#00A7FF"
    },
    effect: "pulse"
  },
  {
    id: "ember-command",
    name: "Ember Command",
    source: "generated-template",
    thumbnail: "",
    colors: {
      background: "#090907",
      box: "#1E1309",
      cell: "#261608",
      activeCell: "#FF9D3B",
      text: "#FFF2DC",
      glow: "#FF6A1F"
    },
    effect: "chase"
  },
  {
    id: "violet-orbit",
    name: "Violet Orbit",
    source: "generated-template",
    thumbnail: "",
    colors: {
      background: "#090814",
      box: "#17122A",
      cell: "#211945",
      activeCell: "#BE5CFF",
      text: "#F0E8FF",
      glow: "#FF4FDB"
    },
    effect: "spectrum-shift"
  },
  {
    id: "green-lattice",
    name: "Green Lattice",
    source: "generated-template",
    thumbnail: "",
    colors: {
      background: "#03120E",
      box: "#092219",
      cell: "#0D3327",
      activeCell: "#99FF66",
      text: "#E7FFE8",
      glow: "#19F7A5"
    },
    effect: "intermittent-color"
  },
  {
    id: "ice-terminal",
    name: "Ice Terminal",
    source: "generated-template",
    thumbnail: "",
    colors: {
      background: "#E9F3FA",
      box: "#D2E1EA",
      cell: "#173142",
      activeCell: "#66DFFF",
      text: "#061C28",
      glow: "#B8F4FF"
    },
    effect: "sweep"
  }
]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));

export function normalizeHex(value, fallback = "#00E5FF") {
  const raw = String(value || "").trim();
  if (/^#[0-9a-f]{6}$/i.test(raw)) return raw.toUpperCase();
  if (/^#[0-9a-f]{3}$/i.test(raw)) {
    return `#${raw.slice(1).split("").map((char) => char + char).join("")}`.toUpperCase();
  }
  return fallback.toUpperCase();
}

export function hexToRgb(hex) {
  const normalized = normalizeHex(hex).slice(1);
  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16)
  };
}

export function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((value) => clamp(value, 0, 255).toString(16).padStart(2, "0")).join("")}`.toUpperCase();
}

export function createDefaultThemeProfile() {
  const preset = THEME_PRESET_TEMPLATES[0];
  return {
    access: THEME_ACCESS_LEVELS.PAID,
    presetId: preset.id,
    colors: { ...preset.colors },
    effect: preset.effect,
    effectRegion: "outer-box",
    speedSeconds: 3.2,
    brightness: 80,
    intensity: 75,
    randomizeEachSignin: false,
    alternateBetweenLogons: true,
    signInCounter: 0,
    savedThemes: [preset.id]
  };
}

export function buildRgbEffectPlan(input = {}) {
  const effect = RGB_EFFECT_TYPES.includes(input.effect) ? input.effect : "rotating-outline";
  const region = THEME_REGIONS.includes(input.region) ? input.region : "outer-box";
  return {
    effect,
    region,
    mode: input.mode || "continuous",
    speedSeconds: Number(clamp(input.speedSeconds ?? 3.2, 0.2, 30).toFixed(1)),
    brightness: clamp(input.brightness ?? 80, 0, 100),
    intensity: clamp(input.intensity ?? 75, 0, 100),
    color: normalizeHex(input.color || input.glow || "#8A2BFF"),
    cssClass: `theme-fx-${effect}`,
    summary: `${effect.replaceAll("-", " ")} on ${region.replaceAll("-", " ")} at ${input.speedSeconds ?? 3.2}s`
  };
}

export function buildThemeFromSettings(settings = {}) {
  const preset = THEME_PRESET_TEMPLATES.find((item) => item.id === settings.presetId) || THEME_PRESET_TEMPLATES[0];
  const colors = { ...preset.colors, ...(settings.colors || {}) };
  return {
    ...createDefaultThemeProfile(),
    ...settings,
    presetId: preset.id,
    colors: {
      background: normalizeHex(colors.background, preset.colors.background),
      box: normalizeHex(colors.box, preset.colors.box),
      cell: normalizeHex(colors.cell, preset.colors.cell),
      activeCell: normalizeHex(colors.activeCell, preset.colors.activeCell),
      text: normalizeHex(colors.text, preset.colors.text),
      glow: normalizeHex(colors.glow, preset.colors.glow)
    },
    effect: RGB_EFFECT_TYPES.includes(settings.effect) ? settings.effect : preset.effect,
    speedSeconds: Number(clamp(settings.speedSeconds ?? 3.2, 0.2, 30).toFixed(1)),
    brightness: clamp(settings.brightness ?? 80, 0, 100),
    intensity: clamp(settings.intensity ?? 75, 0, 100)
  };
}

export function randomizeTheme(seed = Date.now()) {
  let value = Math.abs(Math.sin(Number(seed) || Date.now()) * 10000);
  const next = () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
  const hue = Math.floor(next() * 360);
  const accent = (offset, light = 55) => hslToHex((hue + offset) % 360, 92, light);
  return buildThemeFromSettings({
    presetId: THEME_PRESET_TEMPLATES[Math.floor(next() * THEME_PRESET_TEMPLATES.length)].id,
    colors: {
      background: hslToHex(hue, 45, 5 + Math.floor(next() * 6)),
      box: hslToHex((hue + 12) % 360, 54, 10 + Math.floor(next() * 8)),
      cell: hslToHex((hue + 24) % 360, 60, 16 + Math.floor(next() * 8)),
      activeCell: accent(80, 60),
      text: hslToHex((hue + 180) % 360, 70, 92),
      glow: accent(140, 58)
    },
    effect: RGB_EFFECT_TYPES[1 + Math.floor(next() * (RGB_EFFECT_TYPES.length - 1))],
    speedSeconds: Number((0.6 + next() * 6).toFixed(1)),
    brightness: Math.floor(55 + next() * 45),
    intensity: Math.floor(45 + next() * 55),
    randomizeEachSignin: true
  });
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return rgbToHex({ r: Math.round(255 * f(0)), g: Math.round(255 * f(8)), b: Math.round(255 * f(4)) });
}

export function rotateThemeForSignin(profile = createDefaultThemeProfile()) {
  const nextCounter = Number(profile.signInCounter || 0) + 1;
  if (profile.randomizeEachSignin) return { ...randomizeTheme(nextCounter + Date.now()), signInCounter: nextCounter };
  if (profile.alternateBetweenLogons) {
    const preset = THEME_PRESET_TEMPLATES[nextCounter % THEME_PRESET_TEMPLATES.length];
    return buildThemeFromSettings({ ...profile, signInCounter: nextCounter, presetId: preset.id, colors: preset.colors, effect: preset.effect });
  }
  return { ...profile, signInCounter: nextCounter };
}

export function buildCssVariables(theme = createDefaultThemeProfile()) {
  const clean = buildThemeFromSettings(theme);
  return {
    "--tg-theme-bg": clean.colors.background,
    "--tg-theme-box": clean.colors.box,
    "--tg-theme-cell": clean.colors.cell,
    "--tg-theme-active-cell": clean.colors.activeCell,
    "--tg-theme-text": clean.colors.text,
    "--tg-theme-glow": clean.colors.glow,
    "--tg-theme-speed": `${clean.speedSeconds}s`,
    "--tg-theme-brightness": `${clean.brightness}%`,
    "--tg-theme-intensity": `${clean.intensity}%`
  };
}

export function applyThemeToDocument(theme, root = globalThis.document?.documentElement) {
  if (!root) return buildCssVariables(theme);
  const vars = buildCssVariables(theme);
  for (const [key, value] of Object.entries(vars)) root.style.setProperty(key, value);
  root.dataset.themeEffect = theme.effect || "rotating-outline";
  return vars;
}

export function buildThemeStudioSummary(theme = createDefaultThemeProfile()) {
  const clean = buildThemeFromSettings(theme);
  const rgb = hexToRgb(clean.colors.activeCell);
  return {
    version: THEME_SYSTEM_VERSION,
    preset: clean.presetId,
    effect: clean.effect,
    activeCellRgb: rgb,
    colorCount: Object.keys(clean.colors).length,
    regions: THEME_REGIONS,
    effectPlan: buildRgbEffectPlan({ effect: clean.effect, region: clean.effectRegion, speedSeconds: clean.speedSeconds, brightness: clean.brightness, intensity: clean.intensity, color: clean.colors.glow })
  };
}

export function verifyThemeStudioConfig(theme = createDefaultThemeProfile()) {
  const clean = buildThemeFromSettings(theme);
  const errors = [];
  for (const [key, value] of Object.entries(clean.colors)) {
    if (!/^#[0-9A-F]{6}$/.test(value)) errors.push(`${key} is not a valid six-digit hex color`);
  }
  if (!RGB_EFFECT_TYPES.includes(clean.effect)) errors.push("Unknown RGB effect type");
  return { ok: errors.length === 0, errors, theme: clean };
}

export const THEME_STUDIO_TOOL = Object.freeze({
  id: "paid-profile-theme-studio",
  name: "Paid Profile Theme Studio",
  category: "Paid Profile Tools",
  engine: "theme_studio",
  premiumOnly: true,
  systemLabel: "PAID THEME TOOL",
  description: "Build and preview a paid profile theme with background, box, cell, active-cell, text, and glow colors plus RGB effects like strobe, flash, rotating outline, pulse, chase, sweep, and randomize-each-sign-in.",
  tags: ["theme studio", "paid profile", "rgb generator", "custom theme", "color scheme", "randomize theme", "alternating colors", "new theme each sign in", "strobing light", "flashing light", "rotating outline", "pulse", "cell effects", "workspace theme", "profile settings", "premium theme", "theme maker", "rgb effects", "glow intensity", "effect speed", "theme preview"],
  config: { mode: "theme_studio" }
});

export const RGB_GENERATOR_TOOL = Object.freeze({
  id: "rgb-effect-generator",
  name: "RGB Effect Generator",
  category: "Paid Profile Tools",
  engine: "rgb_generator",
  premiumOnly: true,
  systemLabel: "PAID RGB TOOL",
  description: "Generate RGB effect settings for a selected workspace region, including speed, brightness, intensity, effect type, and color output.",
  tags: ["rgb", "rgb generator", "effect generator", "strobe", "flash", "pulse", "rotating border", "glow", "color shift", "theme effect", "cell outline", "box outline", "active cell", "custom color", "animation settings", "premium effects"],
  config: { mode: "rgb_generator" }
});

export function runThemeStudio(inputs = {}) {
  const theme = buildThemeFromSettings({
    presetId: inputs.presetId,
    colors: {
      background: inputs.background,
      box: inputs.box,
      cell: inputs.cell,
      activeCell: inputs.activeCell,
      text: inputs.text,
      glow: inputs.glow
    },
    effect: inputs.effect,
    speedSeconds: inputs.speedSeconds,
    brightness: inputs.brightness,
    intensity: inputs.intensity,
    randomizeEachSignin: String(inputs.randomizeEachSignin) === "true" || inputs.randomizeEachSignin === true,
    alternateBetweenLogons: String(inputs.alternateBetweenLogons) !== "false"
  });
  const summary = buildThemeStudioSummary(theme);
  return [
    `Theme Studio profile: ${summary.preset}`,
    `Effect: ${summary.effectPlan.summary}`,
    `Active cell RGB: ${summary.activeCellRgb.r}, ${summary.activeCellRgb.g}, ${summary.activeCellRgb.b}`,
    `CSS variables: ${JSON.stringify(buildCssVariables(theme), null, 2)}`
  ].join("\n");
}

export function runRgbGenerator(inputs = {}) {
  const plan = buildRgbEffectPlan(inputs);
  return [
    `RGB effect: ${plan.effect}`,
    `Region: ${plan.region}`,
    `Mode: ${plan.mode}`,
    `Speed: ${plan.speedSeconds}s`,
    `Brightness: ${plan.brightness}%`,
    `Intensity: ${plan.intensity}%`,
    `Color: ${plan.color}`,
    `CSS class: ${plan.cssClass}`
  ].join("\n");
}

function appendField(form, name, label, type, value, options = []) {
  const wrap = document.createElement("div");
  const fieldLabel = document.createElement("label");
  fieldLabel.textContent = label;
  fieldLabel.htmlFor = name;
  let input;
  if (type === "select") {
    input = document.createElement("select");
    for (const option of options) {
      const opt = document.createElement("option");
      opt.value = option.value ?? option;
      opt.textContent = option.label ?? String(option);
      input.append(opt);
    }
    input.value = value;
  } else {
    input = document.createElement("input");
    input.type = type;
    input.value = value;
  }
  input.name = name;
  input.id = name;
  wrap.append(fieldLabel, input);
  form.append(wrap);
  return input;
}

export function renderThemeStudio(container, tool, options = {}) {
  const theme = buildThemeFromSettings(options.initialInputs || {});
  const shell = document.createElement("div");
  shell.className = "theme-studio-tool-shell";
  const title = document.createElement("h3");
  title.textContent = tool.name;
  const note = document.createElement("p");
  note.className = "mini-note";
  note.textContent = "Premium theme maker: choose colors, select RGB effects, randomize, alternate between logons, and save the result to the profile. This browser demo applies the preview immediately.";
  const form = document.createElement("form");
  form.className = "form-grid two";
  const preset = appendField(form, "presetId", "Premade template", "select", theme.presetId, THEME_PRESET_TEMPLATES.map((item) => ({ value: item.id, label: item.name })));
  const background = appendField(form, "background", "Background", "color", theme.colors.background);
  const box = appendField(form, "box", "Box", "color", theme.colors.box);
  const cell = appendField(form, "cell", "Cell", "color", theme.colors.cell);
  const activeCell = appendField(form, "activeCell", "Active cell", "color", theme.colors.activeCell);
  const glow = appendField(form, "glow", "Glow", "color", theme.colors.glow);
  const effect = appendField(form, "effect", "RGB effect", "select", theme.effect, RGB_EFFECT_TYPES);
  const speed = appendField(form, "speedSeconds", "Speed seconds", "number", theme.speedSeconds);
  const randomize = appendField(form, "randomizeEachSignin", "Random each sign-in", "checkbox", "");
  randomize.checked = theme.randomizeEachSignin;
  const preview = document.createElement("div");
  preview.className = "theme-tool-preview-grid";
  const drawPreview = () => {
    const current = buildThemeFromSettings({ presetId: preset.value, colors: { background: background.value, box: box.value, cell: cell.value, activeCell: activeCell.value, glow: glow.value }, effect: effect.value, speedSeconds: speed.value, randomizeEachSignin: randomize.checked });
    const vars = buildCssVariables(current);
    for (const [key, value] of Object.entries(vars)) preview.style.setProperty(key, value);
    preview.dataset.themeEffect = current.effect;
    preview.replaceChildren();
    for (let i = 0; i < 4; i += 1) {
      const c = document.createElement("div");
      c.className = `theme-tool-preview-cell ${i === 0 ? "active" : ""}`;
      c.textContent = `Cell 0${i + 1}`;
      preview.append(c);
    }
    applyThemeToDocument(current);
  };
  form.addEventListener("input", drawPreview);
  preset.addEventListener("change", () => {
    const selected = THEME_PRESET_TEMPLATES.find((item) => item.id === preset.value) || THEME_PRESET_TEMPLATES[0];
    background.value = selected.colors.background;
    box.value = selected.colors.box;
    cell.value = selected.colors.cell;
    activeCell.value = selected.colors.activeCell;
    glow.value = selected.colors.glow;
    effect.value = selected.effect;
    drawPreview();
  });
  const actions = document.createElement("div");
  actions.className = "tool-card-actions";
  const randomButton = document.createElement("button");
  randomButton.type = "button";
  randomButton.textContent = "Randomize";
  randomButton.addEventListener("click", () => {
    const next = randomizeTheme();
    background.value = next.colors.background;
    box.value = next.colors.box;
    cell.value = next.colors.cell;
    activeCell.value = next.colors.activeCell;
    glow.value = next.colors.glow;
    effect.value = next.effect;
    speed.value = next.speedSeconds;
    randomize.checked = true;
    drawPreview();
  });
  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.textContent = "Save to profile";
  saveButton.addEventListener("click", () => {
    const current = buildThemeFromSettings({ presetId: preset.value, colors: { background: background.value, box: box.value, cell: cell.value, activeCell: activeCell.value, glow: glow.value }, effect: effect.value, speedSeconds: speed.value, randomizeEachSignin: randomize.checked });
    localStorage.setItem("toolgrid-paid-theme-profile", JSON.stringify(current));
    applyThemeToDocument(current);
  });
  actions.append(randomButton, saveButton);
  shell.append(title, note, form, preview, actions);
  container.append(shell);
  drawPreview();
}

export function renderRgbGenerator(container, tool, options = {}) {
  const shell = document.createElement("div");
  shell.className = "rgb-generator-tool-shell";
  const title = document.createElement("h3");
  title.textContent = tool.name;
  const form = document.createElement("form");
  form.className = "tool-form";
  const effect = appendField(form, "effect", "Effect", "select", options.initialInputs?.effect || "rotating-outline", RGB_EFFECT_TYPES);
  const region = appendField(form, "region", "Region", "select", options.initialInputs?.region || "outer-box", THEME_REGIONS);
  const color = appendField(form, "color", "Color", "color", options.initialInputs?.color || "#8A2BFF");
  const speed = appendField(form, "speedSeconds", "Speed seconds", "number", options.initialInputs?.speedSeconds || 3.2);
  const output = document.createElement("pre");
  output.className = "tool-output";
  const update = () => {
    output.textContent = runRgbGenerator({ effect: effect.value, region: region.value, color: color.value, speedSeconds: speed.value });
  };
  form.addEventListener("input", update);
  shell.append(title, form, output);
  container.append(shell);
  update();
}
