import { tools, CATEGORY_COUNTS, CATALOG_VERSION } from "./tool-catalog.js";
import { renderTool } from "./tool-engines.js";

const state = {
  query: "",
  category: "All",
  layout: "2x2",
  panels: []
};

const elements = {
  search: document.querySelector("#tool-search"),
  category: document.querySelector("#category-filter"),
  layout: document.querySelector("#layout-select"),
  results: document.querySelector("#tool-results"),
  resultCount: document.querySelector("#result-count"),
  grid: document.querySelector("#workspace-grid"),
  targetPanel: document.querySelector("#target-panel"),
  status: document.querySelector("#workspace-status"),
  save: document.querySelector("#save-workspace"),
  restore: document.querySelector("#restore-workspace"),
  clear: document.querySelector("#clear-workspace"),
  random: document.querySelector("#random-tools")
};

const storageKey = "toolgrid-2500-workspace-v1";
const maxResults = 80;

function parseLayout(layout) {
  const [columns, rows] = layout.split("x").map(Number);
  return { columns, rows, count: columns * rows };
}

function buildLayoutOptions() {
  for (let columns = 1; columns <= 4; columns += 1) {
    for (let rows = 1; rows <= 4; rows += 1) {
      const value = `${columns}x${rows}`;
      const option = document.createElement("option");
      option.value = value;
      option.textContent = `${columns}×${rows} (${columns * rows} panel${columns * rows === 1 ? "" : "s"})`;
      elements.layout.append(option);
    }
  }
  elements.layout.value = state.layout;
}

function buildCategories() {
  const option = document.createElement("option");
  option.value = "All";
  option.textContent = `All categories (${tools.length})`;
  elements.category.append(option);
  for (const [category, count] of Object.entries(CATEGORY_COUNTS).sort(([a], [b]) => a.localeCompare(b))) {
    const categoryOption = document.createElement("option");
    categoryOption.value = category;
    categoryOption.textContent = `${category} (${count})`;
    elements.category.append(categoryOption);
  }
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function scoreTool(tool, query) {
  if (!query) return 1;
  const q = normalize(query);
  const haystack = normalize(`${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")}`);
  let score = 0;
  if (normalize(tool.name).includes(q)) score += 20;
  if (normalize(tool.category).includes(q)) score += 8;
  if ((tool.tags || []).some((tag) => normalize(tag).includes(q))) score += 10;
  if (haystack.includes(q)) score += 4;
  for (const token of q.split(/\s+/).filter(Boolean)) {
    if (haystack.includes(token)) score += 1;
  }
  return score;
}

function getFilteredTools() {
  return tools
    .map((tool) => ({ tool, score: scoreTool(tool, state.query) }))
    .filter(({ tool, score }) => score > 0 && (state.category === "All" || tool.category === state.category))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .map(({ tool }) => tool);
}

function createTag(text) {
  const tag = document.createElement("span");
  tag.className = "tool-tag";
  tag.textContent = text;
  return tag;
}

function openTool(tool, panelIndex = Number(elements.targetPanel.value || 0)) {
  const { count } = parseLayout(state.layout);
  const safeIndex = Math.min(Math.max(0, panelIndex), count - 1);
  state.panels[safeIndex] = { toolId: tool.id, openedAt: Date.now() };
  renderWorkspace();
}

function renderResults() {
  const filtered = getFilteredTools();
  elements.resultCount.textContent = `${filtered.length.toLocaleString()} matching tools · catalog ${CATALOG_VERSION}`;
  const visible = filtered.slice(0, maxResults);
  const fragment = document.createDocumentFragment();
  for (const tool of visible) {
    const card = document.createElement("article");
    card.className = "tool-card";
    const title = document.createElement("h3");
    title.textContent = tool.name;
    const meta = document.createElement("span");
    meta.className = "category-pill";
    meta.textContent = tool.category;
    const description = document.createElement("p");
    description.textContent = tool.description;
    const tags = document.createElement("div");
    tags.className = "tool-tags";
    for (const tag of (tool.tags || []).slice(0, 4)) tags.append(createTag(tag));
    const actions = document.createElement("div");
    actions.className = "tool-card-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open";
    open.addEventListener("click", () => openTool(tool));
    const duplicate = document.createElement("button");
    duplicate.type = "button";
    duplicate.textContent = "Fill all";
    duplicate.title = "Put this same tool in every panel of the current layout.";
    duplicate.addEventListener("click", () => {
      const { count } = parseLayout(state.layout);
      state.panels = Array.from({ length: count }, () => ({ toolId: tool.id, openedAt: Date.now() }));
      renderWorkspace();
    });
    actions.append(open, duplicate);
    card.append(title, meta, description, tags, actions);
    fragment.append(card);
  }
  elements.results.replaceChildren(fragment);
}

function updatePanelPicker() {
  const { count } = parseLayout(state.layout);
  const current = Number(elements.targetPanel.value || 0);
  elements.targetPanel.replaceChildren();
  for (let i = 0; i < count; i += 1) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = `Panel ${i + 1}`;
    elements.targetPanel.append(option);
  }
  elements.targetPanel.value = String(Math.min(current, count - 1));
}

function createEmptyPanel(panelNumber) {
  const wrap = document.createElement("div");
  wrap.className = "empty-panel";
  const strong = document.createElement("strong");
  strong.textContent = `Panel ${panelNumber}`;
  const span = document.createElement("span");
  span.textContent = "Empty — open a tool here.";
  wrap.append(strong, span);
  return wrap;
}

function renderPanel(index) {
  const panel = document.createElement("article");
  panel.className = "workspace-panel";
  const topbar = document.createElement("div");
  topbar.className = "panel-topbar";
  const titleWrap = document.createElement("div");
  titleWrap.className = "panel-title-wrap";
  const title = document.createElement("strong");
  const meta = document.createElement("span");
  meta.className = "panel-meta";
  const actions = document.createElement("div");
  actions.className = "panel-actions";
  const clear = document.createElement("button");
  clear.type = "button";
  clear.textContent = "×";
  clear.title = "Clear panel";
  clear.addEventListener("click", () => {
    state.panels[index] = null;
    renderWorkspace();
  });
  const duplicate = document.createElement("button");
  duplicate.type = "button";
  duplicate.textContent = "⧉";
  duplicate.title = "Duplicate this panel to the next available panel";
  duplicate.addEventListener("click", () => {
    const { count } = parseLayout(state.layout);
    const source = state.panels[index];
    if (!source) return;
    const targetIndex = state.panels.findIndex((entry, idx) => idx < count && !entry);
    state.panels[targetIndex === -1 ? index : targetIndex] = { ...source, openedAt: Date.now() };
    renderWorkspace();
  });
  actions.append(duplicate, clear);
  titleWrap.append(title, meta);
  topbar.append(titleWrap, actions);

  const body = document.createElement("div");
  body.className = "panel-body";
  const entry = state.panels[index];
  const tool = entry ? tools.find((item) => item.id === entry.toolId) : null;
  if (tool) {
    title.textContent = tool.name;
    meta.textContent = `${tool.category} · native browser tool`;
    renderTool(body, tool);
  } else {
    title.textContent = `Panel ${index + 1}`;
    meta.textContent = "No tool loaded";
    body.append(createEmptyPanel(index + 1));
  }
  panel.append(topbar, body);
  return panel;
}

function renderWorkspace() {
  const { columns, rows, count } = parseLayout(state.layout);
  while (state.panels.length < count) state.panels.push(null);
  state.panels = state.panels.slice(0, count);
  elements.grid.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
  elements.grid.style.gridTemplateRows = `repeat(${rows}, minmax(14rem, 1fr))`;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) fragment.append(renderPanel(index));
  elements.grid.replaceChildren(fragment);
  const loaded = state.panels.filter(Boolean).length;
  elements.status.textContent = `${loaded}/${count} panels loaded · duplicate tools are allowed`;
  updatePanelPicker();
}

function saveWorkspace() {
  localStorage.setItem(storageKey, JSON.stringify({ layout: state.layout, panels: state.panels }));
  elements.status.textContent = "Workspace saved in this browser.";
}

function restoreWorkspace() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    elements.status.textContent = "No saved workspace found.";
    return;
  }
  try {
    const saved = JSON.parse(raw);
    state.layout = saved.layout || "2x2";
    state.panels = Array.isArray(saved.panels) ? saved.panels : [];
    elements.layout.value = state.layout;
    renderWorkspace();
  } catch (error) {
    elements.status.textContent = "Saved workspace could not be restored.";
  }
}

function clearWorkspace() {
  const { count } = parseLayout(state.layout);
  state.panels = Array.from({ length: count }, () => null);
  renderWorkspace();
}

function randomTools() {
  const { count } = parseLayout(state.layout);
  const pool = getFilteredTools();
  state.panels = Array.from({ length: count }, () => ({ toolId: pool[Math.floor(Math.random() * pool.length)].id, openedAt: Date.now() }));
  renderWorkspace();
}

function bindEvents() {
  elements.search.addEventListener("input", () => {
    state.query = elements.search.value.trim();
    renderResults();
  });
  elements.category.addEventListener("change", () => {
    state.category = elements.category.value;
    renderResults();
  });
  elements.layout.addEventListener("change", () => {
    state.layout = elements.layout.value;
    renderWorkspace();
  });
  elements.save.addEventListener("click", saveWorkspace);
  elements.restore.addEventListener("click", restoreWorkspace);
  elements.clear.addEventListener("click", clearWorkspace);
  elements.random.addEventListener("click", randomTools);
}

buildCategories();
buildLayoutOptions();
bindEvents();
renderResults();
renderWorkspace();
