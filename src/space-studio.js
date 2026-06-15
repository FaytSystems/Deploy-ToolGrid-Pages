export const SPACE_STUDIO_VERSION = "2026-06-13-see-in-your-space-studio-v1";
export const SPACE_STUDIO_MAX_OBJECTS = 64;

const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || 0));
const round = (value, decimals = 2) => Number(Number(value || 0).toFixed(decimals));
const slug = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const unique = (values) => [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];

export const SPACE_STUDIO_SCENARIOS = Object.freeze([
  {
    id: "see-in-your-space",
    name: "See In Your Space Studio",
    appType: "program",
    description: "Upload product files or room photos, enter or infer dimensions, then place the generated object into an interactive 3D room.",
    presets: ["sofa", "table", "chair", "shelf"],
    tags: ["ar preview", "product placement", "3d room", "customer preview", "upload product image", "see in your space"]
  },
  {
    id: "contractor-3d-room-builder",
    name: "Contractor 3D Room Builder",
    appType: "program",
    description: "Build a room, add fixtures, appliances, cabinets, materials, and show clients what a renovation or install will look like.",
    presets: ["fridge", "cabinet", "counter", "door", "window"],
    tags: ["contractor", "renovation", "fixture placement", "measurement", "takeoff", "client render"]
  },
  {
    id: "home-decorator-room-planner",
    name: "Home Decorator Room Planner",
    appType: "full-app",
    description: "Use room photos and furniture dimensions to arrange sofas, beds, rugs, shelves, tables, and accent pieces in a 3D plan.",
    presets: ["sofa", "bed", "rug", "lamp", "plant"],
    tags: ["home decor", "interior design", "furniture placement", "living room", "bedroom", "room photo"]
  },
  {
    id: "cad-showcase-environment-builder",
    name: "CAD Showcase Environment Builder",
    appType: "program",
    description: "Upload CAD/model files or dimensions, create a clean virtual display room, and prepare a visual scene for product or design review.",
    presets: ["display-stand", "product-box", "table", "wall-panel"],
    tags: ["cad", "model import", "design review", "product showcase", "glb", "obj", "stl"]
  },
  {
    id: "image-to-3d-product-workbench",
    name: "Image To 3D Product Workbench",
    appType: "full-app",
    description: "Turn an uploaded product image into a dimensioned proxy model now, with the same slot ready for future image-to-mesh generation.",
    presets: ["product-box", "chair", "sofa", "table"],
    tags: ["image to 3d", "product photo", "proxy model", "model generation", "texture mapping", "upload image"]
  },
  {
    id: "retail-showroom-scene-builder",
    name: "Retail Showroom Scene Builder",
    appType: "program",
    description: "Arrange products, shelves, fixtures, and signage in a 3D showroom layout for merchandising and customer presentation.",
    presets: ["shelf", "product-box", "display-stand", "sign"],
    tags: ["retail", "showroom", "merchandising", "shelf layout", "product display", "scene builder"]
  }
]);

export const SPACE_OBJECT_PRESETS = Object.freeze({
  "product-box": { label: "Product box", width: 2.4, height: 2.0, depth: 1.2, color: "#58D5FF", y: 1.0 },
  sofa: { label: "Sofa", width: 7.0, height: 2.7, depth: 3.0, color: "#57C785", y: 1.35 },
  bed: { label: "Bed", width: 6.0, height: 1.9, depth: 7.4, color: "#BCA7FF", y: 0.95 },
  fridge: { label: "Fridge", width: 3.0, height: 6.4, depth: 2.8, color: "#DCE7F4", y: 3.2 },
  table: { label: "Table", width: 4.8, height: 2.5, depth: 2.8, color: "#E7A86A", y: 1.25 },
  chair: { label: "Chair", width: 2.1, height: 3.0, depth: 2.1, color: "#F2D264", y: 1.5 },
  shelf: { label: "Shelf", width: 3.2, height: 6.0, depth: 1.1, color: "#B47A4C", y: 3.0 },
  cabinet: { label: "Cabinet", width: 3.8, height: 3.1, depth: 1.8, color: "#C68F5C", y: 1.55 },
  counter: { label: "Counter", width: 7.0, height: 3.0, depth: 2.2, color: "#D8D0C4", y: 1.5 },
  rug: { label: "Rug", width: 7.0, height: 0.08, depth: 5.0, color: "#8AD4FF", y: 0.04 },
  lamp: { label: "Lamp", width: 1.0, height: 4.8, depth: 1.0, color: "#FFD166", y: 2.4 },
  plant: { label: "Plant", width: 1.7, height: 4.0, depth: 1.7, color: "#67D98E", y: 2.0 },
  door: { label: "Door", width: 3.0, height: 6.8, depth: 0.15, color: "#9A6B45", y: 3.4 },
  window: { label: "Window", width: 4.5, height: 3.2, depth: 0.12, color: "#8FD3FF", y: 4.2 },
  "display-stand": { label: "Display stand", width: 3.2, height: 3.0, depth: 2.2, color: "#99F6E4", y: 1.5 },
  "wall-panel": { label: "Wall panel", width: 5.0, height: 6.0, depth: 0.2, color: "#D5DEE8", y: 3.0 },
  sign: { label: "Sign", width: 4.0, height: 2.0, depth: 0.15, color: "#FF6B6B", y: 4.0 }
});

const programRecord = (scenario) => ({
  id: `space-${scenario.id}`,
  name: scenario.name,
  category: scenario.appType === "program" ? "3D Space Programs" : "3D Space Full Apps",
  engine: "space_studio",
  systemLabel: "In-House 3D Space Program",
  toolKind: scenario.appType,
  inHouse: true,
  premiumOnly: scenario.id !== "see-in-your-space",
  description: `${scenario.description} Built as an in-house browser-side ToolGrid program with upload slots and a live 3D room canvas.`,
  tags: unique([
    "in house 3d",
    "3d space",
    "virtual room",
    "see in your space",
    "upload files",
    "room photo",
    "product image",
    "manual dimensions",
    "inferred dimensions",
    "cad",
    "furniture",
    "contractor",
    "decorator",
    "webgl ready",
    ...scenario.tags
  ]),
  searchPhrases: [
    scenario.name,
    `${scenario.name} upload product`,
    `${scenario.name} room photo`,
    `${scenario.name} 3d model`,
    "see product in my space",
    "turn product image into 3d room preview"
  ],
  metadata: {
    accepts: ["image", "model-file", "room-photo", "dimensions", "cad", "text"],
    produces: ["3d-scene", "room-layout", "placement-plan", "scene-json"]
  },
  config: {
    scenarioId: scenario.id,
    appType: scenario.appType,
    presets: scenario.presets,
    uploadRequired: true,
    supportsRoomPhoto: true,
    supportsProductImage: true,
    supportsModelFile: true,
    supportsManualDimensions: true,
    supportsDimensionInference: true,
    futureMeshUpgradeSlot: true
  }
});

export const SPACE_STUDIO_TOOLS = Object.freeze(SPACE_STUDIO_SCENARIOS.map(programRecord));
export const SEE_IN_YOUR_SPACE_TOOL = SPACE_STUDIO_TOOLS[0];

export function createDefaultSpaceStudioSettings(overrides = {}) {
  return {
    roomWidth: 16,
    roomDepth: 14,
    roomHeight: 9,
    productWidth: 4,
    productHeight: 3,
    productDepth: 2,
    productX: 0,
    productZ: -1,
    productRotation: 18,
    productScale: 1,
    preset: "sofa",
    unit: "ft",
    wallColor: "#D9E2EC",
    floorColor: "#6F7D5F",
    productColor: "#58D5FF",
    cameraYaw: -34,
    cameraPitch: 18,
    cameraDistance: 26,
    roomPhotoFiles: "",
    productFiles: "",
    modelFiles: "",
    sceneNotes: "Place a dimensioned product into a room. Use uploads for room photos, product images, CAD/model files, or reference documents.",
    ...overrides
  };
}

export function inferDimensionsFromUploadText(text = "", fallback = {}) {
  const source = String(text || "");
  const matches = [...source.matchAll(/(\d+(?:\.\d+)?)\s*(?:x|by|X)\s*(\d+(?:\.\d+)?)\s*(?:x|by|X)\s*(\d+(?:\.\d+)?)/g)];
  if (!matches.length) return {};
  const [, a, b, c] = matches[0];
  return {
    productWidth: clamp(a, 0.1, 200) || fallback.productWidth,
    productHeight: clamp(b, 0.1, 200) || fallback.productHeight,
    productDepth: clamp(c, 0.1, 200) || fallback.productDepth
  };
}

function parseUploadedList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value || "").split(/\r?\n|,/).map((item) => item.trim()).filter(Boolean);
}

function buildBaseObject(settings, scenario) {
  const preset = SPACE_OBJECT_PRESETS[settings.preset] || SPACE_OBJECT_PRESETS[scenario?.presets?.[0]] || SPACE_OBJECT_PRESETS["product-box"];
  const inferred = inferDimensionsFromUploadText(`${settings.productFiles}\n${settings.modelFiles}`, settings);
  const width = clamp(inferred.productWidth || settings.productWidth || preset.width, 0.1, 200) * clamp(settings.productScale || 1, 0.1, 20);
  const height = clamp(inferred.productHeight || settings.productHeight || preset.height, 0.1, 200) * clamp(settings.productScale || 1, 0.1, 20);
  const depth = clamp(inferred.productDepth || settings.productDepth || preset.depth, 0.1, 200) * clamp(settings.productScale || 1, 0.1, 20);
  return {
    id: "uploaded-product-proxy",
    name: "Uploaded product proxy",
    kind: settings.preset,
    width,
    height,
    depth,
    x: clamp(settings.productX, -100, 100),
    y: height / 2,
    z: clamp(settings.productZ, -100, 100),
    rotation: clamp(settings.productRotation, -360, 360),
    color: settings.productColor || preset.color,
    sourceFiles: parseUploadedList(settings.productFiles),
    modelFiles: parseUploadedList(settings.modelFiles)
  };
}

function scenarioObjects(settings, scenario) {
  const presets = (scenario?.presets || []).filter((id) => id !== settings.preset).slice(0, 5);
  return presets.map((presetId, index) => {
    const preset = SPACE_OBJECT_PRESETS[presetId] || SPACE_OBJECT_PRESETS["product-box"];
    const spread = index - (presets.length - 1) / 2;
    return {
      id: `scene-${presetId}-${index + 1}`,
      name: preset.label,
      kind: presetId,
      width: preset.width,
      height: preset.height,
      depth: preset.depth,
      x: spread * 2.7,
      y: preset.y,
      z: 3 + (index % 2) * 2.2,
      rotation: index % 2 ? -12 : 8,
      color: preset.color,
      sourceFiles: [],
      modelFiles: []
    };
  });
}

export function buildSpaceStudioScene(inputs = {}, tool = SEE_IN_YOUR_SPACE_TOOL) {
  const scenario = SPACE_STUDIO_SCENARIOS.find((item) => item.id === tool.config?.scenarioId) || SPACE_STUDIO_SCENARIOS[0];
  const settings = createDefaultSpaceStudioSettings({
    preset: scenario.presets?.[0] || "product-box",
    ...inputs
  });
  const room = {
    width: clamp(settings.roomWidth, 4, 500),
    depth: clamp(settings.roomDepth, 4, 500),
    height: clamp(settings.roomHeight, 4, 100),
    unit: settings.unit || "ft",
    wallColor: settings.wallColor,
    floorColor: settings.floorColor,
    roomPhotoFiles: parseUploadedList(settings.roomPhotoFiles)
  };
  const product = buildBaseObject(settings, scenario);
  const objects = [product, ...scenarioObjects(settings, scenario)].slice(0, SPACE_STUDIO_MAX_OBJECTS);
  const volume = objects.reduce((sum, object) => sum + object.width * object.height * object.depth, 0);
  return {
    version: SPACE_STUDIO_VERSION,
    scenario,
    settings,
    room,
    objects,
    camera: {
      yaw: clamp(settings.cameraYaw, -180, 180),
      pitch: clamp(settings.cameraPitch, -80, 80),
      distance: clamp(settings.cameraDistance, 8, 120)
    },
    uploads: {
      roomPhotos: room.roomPhotoFiles,
      productFiles: product.sourceFiles,
      modelFiles: product.modelFiles,
      total: room.roomPhotoFiles.length + product.sourceFiles.length + product.modelFiles.length
    },
    outputs: {
      objectCount: objects.length,
      estimatedObjectVolume: round(volume),
      sceneJsonReady: true,
      proxyModelReady: true,
      futureMeshUpgradeSlot: true
    }
  };
}

export function runSpaceStudioTool(tool = SEE_IN_YOUR_SPACE_TOOL, inputs = {}) {
  const scene = buildSpaceStudioScene(inputs, tool);
  const product = scene.objects[0];
  return [
    `# ${tool.name}`,
    `Version: ${SPACE_STUDIO_VERSION}`,
    `Program type: ${tool.config?.appType || "program"}`,
    `Room: ${scene.room.width} x ${scene.room.depth} x ${scene.room.height} ${scene.room.unit}`,
    `Primary object: ${product.name} (${product.kind}) ${round(product.width)} x ${round(product.height)} x ${round(product.depth)} ${scene.room.unit}`,
    `Placement: x ${round(product.x)}, z ${round(product.z)}, rotation ${round(product.rotation)} deg`,
    `Uploads attached: ${scene.uploads.total} (${scene.uploads.roomPhotos.length} room, ${scene.uploads.productFiles.length} product, ${scene.uploads.modelFiles.length} model/CAD)`,
    `Scene objects: ${scene.objects.length}/${SPACE_STUDIO_MAX_OBJECTS}`,
    "Output pack:",
    "- interactive 3D room plan",
    "- uploaded-product proxy model",
    "- placement and dimension report",
    "- scene JSON handoff",
    "- future image-to-mesh/CAD import slot"
  ].join("\n");
}

export function getSpaceStudioDefaultInputs(tool = SEE_IN_YOUR_SPACE_TOOL) {
  const scenario = SPACE_STUDIO_SCENARIOS.find((item) => item.id === tool.config?.scenarioId) || SPACE_STUDIO_SCENARIOS[0];
  return createDefaultSpaceStudioSettings({
    preset: scenario.presets?.[0] || "product-box",
    roomPhotoFiles: "living-room-reference.jpg",
    productFiles: "product-photo-4x3x2.png",
    modelFiles: "optional-cad-model.obj"
  });
}

export function getSpaceStudioToolSchema() {
  return [
    { name: "roomFilesUpload", label: "Upload room photos / floor plans", type: "file", multiple: true, accept: "image/*,.pdf,.png,.jpg,.jpeg,.webp" },
    { name: "productFilesUpload", label: "Upload product photos / texture refs", type: "file", multiple: true, accept: "image/*,.png,.jpg,.jpeg,.webp" },
    { name: "modelFilesUpload", label: "Upload model / CAD files", type: "file", multiple: true, accept: ".glb,.gltf,.obj,.stl,.dae,.fbx,.step,.stp,.dwg,.dxf" },
    { name: "preset", label: "Object preset", type: "text" },
    { name: "roomWidth", label: "Room width", type: "number" },
    { name: "roomDepth", label: "Room depth", type: "number" },
    { name: "roomHeight", label: "Room height", type: "number" },
    { name: "productWidth", label: "Product width", type: "number" },
    { name: "productHeight", label: "Product height", type: "number" },
    { name: "productDepth", label: "Product depth", type: "number" },
    { name: "productX", label: "Placement X", type: "number" },
    { name: "productZ", label: "Placement Z", type: "number" },
    { name: "productRotation", label: "Rotation degrees", type: "number" },
    { name: "sceneNotes", label: "Scene notes", type: "textarea" }
  ];
}

function hexToRgb(hex, fallback = [120, 170, 220]) {
  const cleaned = String(hex || "").replace("#", "");
  if (!/^[a-f0-9]{6}$/i.test(cleaned)) return fallback;
  const int = Number.parseInt(cleaned, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function shade(hex, factor) {
  const rgb = hexToRgb(hex);
  return `rgb(${rgb.map((value) => clamp(value * factor, 0, 255)).join(",")})`;
}

function cuboidFaces(object) {
  const hw = object.width / 2;
  const hh = object.height / 2;
  const hd = object.depth / 2;
  const yaw = (object.rotation || 0) * Math.PI / 180;
  const cos = Math.cos(yaw);
  const sin = Math.sin(yaw);
  const raw = [
    [-hw, -hh, -hd], [hw, -hh, -hd], [hw, hh, -hd], [-hw, hh, -hd],
    [-hw, -hh, hd], [hw, -hh, hd], [hw, hh, hd], [-hw, hh, hd]
  ].map(([x, y, z]) => ({
    x: object.x + x * cos - z * sin,
    y: object.y + y,
    z: object.z + x * sin + z * cos
  }));
  const faceIndices = [
    [0, 1, 2, 3, 0.8],
    [4, 5, 6, 7, 1.05],
    [0, 4, 7, 3, 0.72],
    [1, 5, 6, 2, 0.92],
    [3, 2, 6, 7, 1.14],
    [0, 1, 5, 4, 0.62]
  ];
  return faceIndices.map((face) => ({
    points: face.slice(0, 4).map((index) => raw[index]),
    color: shade(object.color, face[4]),
    depth: face.slice(0, 4).reduce((sum, index) => sum + raw[index].z, 0) / 4
  }));
}

export function drawSpaceStudioScene(canvas, scene, options = {}) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect?.() || { width: canvas.width || 900, height: canvas.height || 560 };
  const width = Math.max(320, Math.floor(rect.width || canvas.width || 900));
  const height = Math.max(260, Math.floor(rect.height || canvas.height || 560));
  const ratio = globalThis.devicePixelRatio || 1;
  if (canvas.width !== Math.floor(width * ratio) || canvas.height !== Math.floor(height * ratio)) {
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
  }
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const yaw = ((options.yaw ?? scene.camera.yaw) * Math.PI) / 180;
  const pitch = ((options.pitch ?? scene.camera.pitch) * Math.PI) / 180;
  const distance = options.distance ?? scene.camera.distance;
  const center = { x: width / 2, y: height * 0.58 };
  const scaleBase = Math.min(width, height) * 0.92;

  const project = (point) => {
    const cosY = Math.cos(yaw);
    const sinY = Math.sin(yaw);
    const x1 = point.x * cosY - point.z * sinY;
    const z1 = point.x * sinY + point.z * cosY;
    const cosP = Math.cos(pitch);
    const sinP = Math.sin(pitch);
    const y1 = point.y * cosP - z1 * sinP;
    const z2 = point.y * sinP + z1 * cosP + distance;
    const scale = scaleBase / Math.max(4, z2);
    return { x: center.x + x1 * scale, y: center.y - y1 * scale, z: z2 };
  };

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#07101f");
  gradient.addColorStop(0.48, "#0d1a2f");
  gradient.addColorStop(1, "#16243c");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const room = scene.room;
  const hw = room.width / 2;
  const hd = room.depth / 2;
  const floor = [
    { x: -hw, y: 0, z: -hd },
    { x: hw, y: 0, z: -hd },
    { x: hw, y: 0, z: hd },
    { x: -hw, y: 0, z: hd }
  ];
  const backWall = [
    { x: -hw, y: 0, z: -hd },
    { x: hw, y: 0, z: -hd },
    { x: hw, y: room.height, z: -hd },
    { x: -hw, y: room.height, z: -hd }
  ];
  const sideWall = [
    { x: -hw, y: 0, z: -hd },
    { x: -hw, y: 0, z: hd },
    { x: -hw, y: room.height, z: hd },
    { x: -hw, y: room.height, z: -hd }
  ];

  const drawPoly = (points, fill, stroke = "rgba(255,255,255,.18)") => {
    const projected = points.map(project);
    ctx.beginPath();
    projected.forEach((p, index) => index ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  drawPoly(backWall, shade(room.wallColor, 0.72));
  drawPoly(sideWall, shade(room.wallColor, 0.62));
  drawPoly(floor, shade(room.floorColor, 0.82));

  ctx.strokeStyle = "rgba(255,255,255,.16)";
  ctx.lineWidth = 1;
  for (let x = -hw; x <= hw + 0.001; x += Math.max(1, room.width / 8)) {
    const a = project({ x, y: 0.015, z: -hd });
    const b = project({ x, y: 0.015, z: hd });
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
  for (let z = -hd; z <= hd + 0.001; z += Math.max(1, room.depth / 8)) {
    const a = project({ x: -hw, y: 0.016, z });
    const b = project({ x: hw, y: 0.016, z });
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }

  const faces = scene.objects.flatMap((object) => cuboidFaces(object).map((face) => ({ ...face, object })));
  faces.sort((a, b) => b.points.reduce((sum, p) => sum + project(p).z, 0) - a.points.reduce((sum, p) => sum + project(p).z, 0));
  for (const face of faces) drawPoly(face.points, face.color, "rgba(5,10,20,.72)");

  const primary = scene.objects[0];
  const labelPoint = project({ x: primary.x, y: primary.y + primary.height / 2 + 0.35, z: primary.z });
  ctx.fillStyle = "rgba(5,10,20,.78)";
  ctx.fillRect(labelPoint.x - 78, labelPoint.y - 24, 156, 22);
  ctx.fillStyle = "#EAF8FF";
  ctx.font = "12px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(primary.kind.replaceAll("-", " "), labelPoint.x, labelPoint.y - 8);

  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(234,248,255,.92)";
  ctx.font = "12px system-ui, sans-serif";
  ctx.fillText(`${room.width}x${room.depth}x${room.height} ${room.unit} room`, 14, 22);
  ctx.fillText(`${scene.uploads.total} upload slot${scene.uploads.total === 1 ? "" : "s"} attached`, 14, 42);
}

function fileSummary(files) {
  return Array.from(files || []).map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join("\n");
}

export function renderSpaceStudio(container, tool = SEE_IN_YOUR_SPACE_TOOL, options = {}) {
  const defaults = { ...getSpaceStudioDefaultInputs(tool), ...(options.initialInputs || {}) };
  const sceneState = {
    settings: createDefaultSpaceStudioSettings(defaults),
    yaw: Number(defaults.cameraYaw ?? -34),
    pitch: Number(defaults.cameraPitch ?? 18),
    distance: Number(defaults.cameraDistance ?? 26),
    productImageUrl: "",
    roomImageUrl: ""
  };

  const shell = document.createElement("div");
  shell.className = "space-studio-shell";
  const canvasWrap = document.createElement("div");
  canvasWrap.className = "space-canvas-wrap";
  const canvas = document.createElement("canvas");
  canvas.className = "space-studio-canvas";
  canvas.setAttribute("aria-label", "Interactive 3D room canvas");
  const hint = document.createElement("div");
  hint.className = "space-canvas-hint";
  hint.textContent = "Drag to orbit. Wheel to zoom.";
  canvasWrap.append(canvas, hint);

  const form = document.createElement("form");
  form.className = "space-studio-controls";
  const presetOptions = Object.keys(SPACE_OBJECT_PRESETS).map((id) => `<option value="${id}">${SPACE_OBJECT_PRESETS[id].label}</option>`).join("");
  form.innerHTML = `
    <div class="space-upload-grid">
      <label>Room photos / floor plans<input name="roomFilesUpload" type="file" multiple accept="image/*,.pdf,.png,.jpg,.jpeg,.webp"></label>
      <label>Product photos / textures<input name="productFilesUpload" type="file" multiple accept="image/*,.png,.jpg,.jpeg,.webp"></label>
      <label>Model / CAD files<input name="modelFilesUpload" type="file" multiple accept=".glb,.gltf,.obj,.stl,.dae,.fbx,.step,.stp,.dwg,.dxf"></label>
    </div>
    <div class="form-grid two compact-grid">
      <label>Object preset<select name="preset">${presetOptions}</select></label>
      <label>Product color<input name="productColor" type="color" value="${defaults.productColor || "#58D5FF"}"></label>
      <label>Room width<input name="roomWidth" type="number" step="0.1" value="${defaults.roomWidth}"></label>
      <label>Room depth<input name="roomDepth" type="number" step="0.1" value="${defaults.roomDepth}"></label>
      <label>Room height<input name="roomHeight" type="number" step="0.1" value="${defaults.roomHeight}"></label>
      <label>Product width<input name="productWidth" type="number" step="0.1" value="${defaults.productWidth}"></label>
      <label>Product height<input name="productHeight" type="number" step="0.1" value="${defaults.productHeight}"></label>
      <label>Product depth<input name="productDepth" type="number" step="0.1" value="${defaults.productDepth}"></label>
      <label>Placement X<input name="productX" type="number" step="0.1" value="${defaults.productX}"></label>
      <label>Placement Z<input name="productZ" type="number" step="0.1" value="${defaults.productZ}"></label>
      <label>Rotation<input name="productRotation" type="range" min="-180" max="180" value="${defaults.productRotation}"></label>
      <label>Scale<input name="productScale" type="range" min="0.2" max="3" step="0.05" value="${defaults.productScale}"></label>
    </div>
    <label>Scene notes<textarea name="sceneNotes" rows="3">${defaults.sceneNotes || ""}</textarea></label>
    <div class="project-actions">
      <button type="submit">Render 3D room</button>
      <button type="button" data-action="export">Export scene JSON</button>
      <button type="button" data-action="publish" class="ghost-button">Run + publish</button>
    </div>
    <pre class="space-output-box"></pre>
  `;
  form.elements.preset.value = defaults.preset || tool.config?.presets?.[0] || "product-box";

  const output = form.querySelector(".space-output-box");
  const scene = () => buildSpaceStudioScene(sceneState.settings, tool);
  const redraw = () => drawSpaceStudioScene(canvas, scene(), { yaw: sceneState.yaw, pitch: sceneState.pitch, distance: sceneState.distance });
  const sync = () => {
    const fd = new FormData(form);
    const uploadText = {
      roomPhotoFiles: fileSummary(form.elements.roomFilesUpload.files),
      productFiles: fileSummary(form.elements.productFilesUpload.files),
      modelFiles: fileSummary(form.elements.modelFilesUpload.files)
    };
    sceneState.settings = createDefaultSpaceStudioSettings({
      ...sceneState.settings,
      ...Object.fromEntries(fd.entries()),
      ...uploadText,
      roomWidth: Number(fd.get("roomWidth")),
      roomDepth: Number(fd.get("roomDepth")),
      roomHeight: Number(fd.get("roomHeight")),
      productWidth: Number(fd.get("productWidth")),
      productHeight: Number(fd.get("productHeight")),
      productDepth: Number(fd.get("productDepth")),
      productX: Number(fd.get("productX")),
      productZ: Number(fd.get("productZ")),
      productRotation: Number(fd.get("productRotation")),
      productScale: Number(fd.get("productScale"))
    });
    const inferred = inferDimensionsFromUploadText(`${uploadText.productFiles}\n${uploadText.modelFiles}`, sceneState.settings);
    if (Object.keys(inferred).length) {
      for (const [key, value] of Object.entries(inferred)) {
        sceneState.settings[key] = value;
        if (form.elements[key]) form.elements[key].value = value;
      }
    }
    const report = runSpaceStudioTool(tool, sceneState.settings);
    output.textContent = report;
    redraw();
    return { inputs: sceneState.settings, output: report };
  };

  form.addEventListener("input", sync);
  form.addEventListener("change", sync);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sync();
  });
  form.querySelector('[data-action="export"]').addEventListener("click", () => {
    output.textContent = JSON.stringify(scene(), null, 2);
  });
  form.querySelector('[data-action="publish"]').addEventListener("click", () => {
    const result = sync();
    if (typeof options.onPublish === "function") {
      options.onPublish({ tool, panelIndex: options.panelIndex ?? null, inputs: result.inputs, output: result.output, status: "ok", runMode: "manual" });
    }
  });

  let dragging = false;
  let last = { x: 0, y: 0 };
  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    last = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    sceneState.yaw += (event.clientX - last.x) * 0.35;
    sceneState.pitch = clamp(sceneState.pitch + (event.clientY - last.y) * 0.18, -60, 65);
    last = { x: event.clientX, y: event.clientY };
    redraw();
  });
  canvas.addEventListener("pointerup", () => { dragging = false; });
  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    sceneState.distance = clamp(sceneState.distance + Math.sign(event.deltaY) * 1.6, 10, 80);
    redraw();
  }, { passive: false });

  shell.append(canvasWrap, form);
  container.replaceChildren(shell);
  requestAnimationFrame(sync);
}

export function verifySpaceStudioSuite() {
  const errors = [];
  if (SPACE_STUDIO_TOOLS.length < 6) errors.push("expected several 3D space program entry points");
  for (const tool of SPACE_STUDIO_TOOLS) {
    if (tool.engine !== "space_studio") errors.push(`${tool.id} uses wrong engine`);
    if (!tool.config?.uploadRequired) errors.push(`${tool.id} should expose upload slots`);
    const scene = buildSpaceStudioScene(getSpaceStudioDefaultInputs(tool), tool);
    if (!scene.objects.length) errors.push(`${tool.id} did not build scene objects`);
    if (!scene.uploads.total) errors.push(`${tool.id} should include default upload metadata`);
  }
  return {
    ok: errors.length === 0,
    errors,
    stats: {
      version: SPACE_STUDIO_VERSION,
      toolCount: SPACE_STUDIO_TOOLS.length,
      objectPresetCount: Object.keys(SPACE_OBJECT_PRESETS).length,
      maxObjects: SPACE_STUDIO_MAX_OBJECTS
    }
  };
}
