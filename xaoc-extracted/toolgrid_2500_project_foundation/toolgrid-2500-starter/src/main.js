import { tools, CATEGORY_COUNTS, CATALOG_VERSION } from "./tool-catalog.js";
import { renderTool } from "./tool-engines.js";
import {
  appendArtifact,
  appendProjectEvent,
  buildInputsFromPayload,
  createFoundationState,
  createProject,
  getToolIO,
  listCompatibleLinks,
  makeArtifact,
  PROJECT_FOUNDATION_VERSION,
  runProjectPanelsAsQueue,
  runProjectPanelsSimultaneously
} from "./project-foundation.js";

const foundation = createFoundationState();
const toolsById = new Map(tools.map((tool) => [tool.id, tool]));

const state = {
  query: "",
  category: "All",
  layout: "2x2",
  containerName: foundation.containerName,
  activeProjectId: foundation.activeProjectId,
  projects: foundation.projects,
  panels: []
};

const elements = {
  containerName: document.querySelector("#container-name"),
  projectSelect: document.querySelector("#project-select"),
  projectName: document.querySelector("#project-name"),
  createProject: document.querySelector("#create-project"),
  renameProject: document.querySelector("#rename-project"),
  projectInput: document.querySelector("#project-input"),
  projectArtifacts: document.querySelector("#project-artifacts"),
  projectEvents: document.querySelector("#project-events"),
  projectLinks: document.querySelector("#project-links"),
  runSimultaneous: document.querySelector("#run-project-simultaneous"),
  runQueue: document.querySelector("#run-project-queue"),
  clearProjectData: document.querySelector("#clear-project-data"),
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

const storageKey = "toolgrid-2500-project-foundation-v1";
const legacyStorageKey = "toolgrid-2500-workspace-v1";
const maxResults = 80;

function parseLayout(layout) {
  const [columns, rows] = layout.split("x").map(Number);
  return { columns, rows, count: columns * rows };
}

function activeProject() {
  return state.projects.find((project) => project.id === state.activeProjectId) || state.projects[0];
}

function projectById(projectId) {
  return state.projects.find((project) => project.id === projectId) || activeProject();
}

function setActiveProject(projectId) {
  state.activeProjectId = projectId;
  const project = activeProject();
  elements.projectSelect.value = project.id;
  elements.projectName.value = project.name;
  elements.projectInput.value = project.input || "";
  renderProjectConsole();
  renderWorkspace();
  renderResults();
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

function renderProjectOptions() {
  const current = activeProject().id;
  elements.projectSelect.replaceChildren();
  for (const project of state.projects) {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = project.name;
    elements.projectSelect.append(option);
  }
  elements.projectSelect.value = current;
}

function normalize(text) {
  return String(text || "").toLowerCase();
}

function scoreTool(tool, query) {
  if (!query) return 1;
  const q = normalize(query);
  const io = getToolIO(tool);
  const haystack = normalize(`${tool.name} ${tool.category} ${tool.description} ${(tool.tags || []).join(" ")} ${io.accepts.join(" ")} ${io.output}`);
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

function openTool(tool, panelIndex = Number(elements.targetPanel.value || 0), projectId = activeProject().id) {
  const { count } = parseLayout(state.layout);
  const safeIndex = Math.min(Math.max(0, panelIndex), count - 1);
  state.panels[safeIndex] = {
    toolId: tool.id,
    projectId,
    openedAt: Date.now(),
    role: "Project tool node"
  };
  appendProjectEvent(projectById(projectId), `${tool.name} opened in panel ${safeIndex + 1}.`, "info");
  renderWorkspace();
  renderProjectConsole();
}

function renderResults() {
  const filtered = getFilteredTools();
  const project = activeProject();
  elements.resultCount.textContent = `${filtered.length.toLocaleString()} matching tools · catalog ${CATALOG_VERSION} · ${PROJECT_FOUNDATION_VERSION}`;
  const visible = filtered.slice(0, maxResults);
  const fragment = document.createDocumentFragment();
  for (const tool of visible) {
    const io = getToolIO(tool);
    const card = document.createElement("article");
    card.className = "tool-card";
    const title = document.createElement("h3");
    title.textContent = tool.name;
    const meta = document.createElement("span");
    meta.className = "category-pill";
    meta.textContent = `${tool.category} · ${io.accepts.join("/")} → ${io.output}`;
    const description = document.createElement("p");
    description.textContent = tool.description;
    const tags = document.createElement("div");
    tags.className = "tool-tags";
    for (const tag of (tool.tags || []).slice(0, 4)) tags.append(createTag(tag));
    const projectLine = document.createElement("p");
    projectLine.className = "mini-note";
    projectLine.textContent = `Will open for project: ${project.name}`;
    const actions = document.createElement("div");
    actions.className = "tool-card-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open";
    open.addEventListener("click", () => openTool(tool));
    const duplicate = document.createElement("button");
    duplicate.type = "button";
    duplicate.textContent = "Fill all";
    duplicate.title = "Put this same project-assigned tool in every panel of the current layout.";
    duplicate.addEventListener("click", () => {
      const { count } = parseLayout(state.layout);
      state.panels = Array.from({ length: count }, () => ({
        toolId: tool.id,
        projectId: project.id,
        openedAt: Date.now(),
        role: "Duplicated project node"
      }));
      appendProjectEvent(project, `${tool.name} filled all ${count} panels.`, "info");
      renderWorkspace();
      renderProjectConsole();
    });
    actions.append(open, duplicate);
    card.append(title, meta, description, tags, projectLine, actions);
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
  span.textContent = "Empty — open a tool here for the active project.";
  wrap.append(strong, span);
  return wrap;
}

function createPanelProjectSelect(index, entry) {
  const select = document.createElement("select");
  select.className = "panel-project-select";
  select.ariaLabel = `Project for panel ${index + 1}`;
  for (const project of state.projects) {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = project.name;
    select.append(option);
  }
  select.value = entry?.projectId || activeProject().id;
  select.addEventListener("change", () => {
    if (!state.panels[index]) return;
    state.panels[index].projectId = select.value;
    appendProjectEvent(projectById(select.value), `Panel ${index + 1} assigned to this project.`, "info");
    renderWorkspace();
    renderProjectConsole();
  });
  return select;
}

function publishPanelResult({ tool, panelIndex, inputs, output, status, runMode }) {
  const entry = state.panels[panelIndex];
  const project = projectById(entry?.projectId || activeProject().id);
  const artifact = makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, status, runMode });
  appendArtifact(project, artifact);
  renderProjectConsole();
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
    renderProjectConsole();
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
    renderProjectConsole();
  });
  actions.append(duplicate, clear);
  titleWrap.append(title, meta);
  topbar.append(titleWrap, actions);

  const body = document.createElement("div");
  body.className = "panel-body";
  const entry = state.panels[index];
  const tool = entry ? toolsById.get(entry.toolId) : null;
  if (tool) {
    const project = projectById(entry.projectId);
    const io = getToolIO(tool);
    title.textContent = tool.name;
    meta.textContent = `${io.accepts.join("/")} → ${io.output}`;
    const projectSelect = createPanelProjectSelect(index, entry);
    titleWrap.append(projectSelect);
    renderTool(body, tool, {
      project,
      panelIndex: index,
      panelRole: entry.role,
      buildProjectInputs: (selectedTool) => buildInputsFromPayload(selectedTool, project.input || ""),
      onPublish: publishPanelResult
    });
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
  elements.grid.style.gridTemplateRows = `repeat(${rows}, minmax(17rem, 1fr))`;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < count; index += 1) fragment.append(renderPanel(index));
  elements.grid.replaceChildren(fragment);
  const loaded = state.panels.filter(Boolean).length;
  const projectPanels = state.panels.filter((entry) => entry?.projectId === activeProject().id).length;
  elements.status.textContent = `${loaded}/${count} panels loaded · ${projectPanels} assigned to ${activeProject().name} · duplicate tools allowed`;
  updatePanelPicker();
}

function renderProjectConsole() {
  const project = activeProject();
  renderProjectOptions();
  elements.containerName.value = state.containerName;
  elements.projectName.value = project.name;
  elements.projectInput.value = project.input || "";

  const artifacts = project.artifacts.slice(0, 8);
  elements.projectArtifacts.replaceChildren(...artifacts.map((artifact) => {
    const item = document.createElement("li");
    item.className = artifact.status === "ok" ? "ok-item" : "error-item";
    item.innerHTML = `<strong>${artifact.toolName}</strong><span>${artifact.runMode} · ${artifact.outputType} · panel ${Number(artifact.panelIndex) + 1 || "n/a"}</span><pre>${artifact.output.slice(0, 420)}</pre>`;
    return item;
  }));
  if (!artifacts.length) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "No project artifacts yet. Run + publish a tool or run a project workflow.";
    elements.projectArtifacts.append(empty);
  }

  const events = project.events.slice(0, 8);
  elements.projectEvents.replaceChildren(...events.map((event) => {
    const item = document.createElement("li");
    item.className = `event-${event.level}`;
    item.textContent = `${new Date(event.createdAt).toLocaleTimeString()} — ${event.message}`;
    return item;
  }));
  if (!events.length) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "No project events yet.";
    elements.projectEvents.append(empty);
  }

  const projectPanelEntries = state.panels.map((entry) => entry?.projectId === project.id ? entry : null);
  const links = listCompatibleLinks(projectPanelEntries, toolsById).slice(0, 12);
  elements.projectLinks.replaceChildren(...links.map((link) => {
    const item = document.createElement("li");
    item.textContent = `Panel ${link.source.index + 1} ${link.source.tool.name} → Panel ${link.target.index + 1} ${link.target.tool.name} (${link.connection.label})`;
    return item;
  }));
  if (!links.length) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "Compatible links appear when two or more panels in this project can pass data to each other.";
    elements.projectLinks.append(empty);
  }
}

function saveWorkspace() {
  const data = {
    containerName: state.containerName,
    activeProjectId: state.activeProjectId,
    projects: state.projects,
    layout: state.layout,
    panels: state.panels,
    savedAt: new Date().toISOString(),
    version: PROJECT_FOUNDATION_VERSION
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
  elements.status.textContent = "Project foundation workspace saved in this browser.";
}

function restoreWorkspace() {
  const raw = localStorage.getItem(storageKey) || localStorage.getItem(legacyStorageKey);
  if (!raw) {
    elements.status.textContent = "No saved workspace found.";
    return;
  }
  try {
    const saved = JSON.parse(raw);
    state.containerName = saved.containerName || state.containerName;
    state.layout = saved.layout || "2x2";
    state.projects = Array.isArray(saved.projects) && saved.projects.length ? saved.projects : createFoundationState().projects;
    state.activeProjectId = saved.activeProjectId || state.projects[0].id;
    state.panels = Array.isArray(saved.panels)
      ? saved.panels.map((entry) => entry ? { ...entry, projectId: entry.projectId || state.activeProjectId } : null)
      : [];
    elements.layout.value = state.layout;
    setActiveProject(state.activeProjectId);
    renderWorkspace();
    renderProjectConsole();
  } catch (error) {
    elements.status.textContent = "Saved workspace could not be restored.";
  }
}

function clearWorkspace() {
  const { count } = parseLayout(state.layout);
  state.panels = Array.from({ length: count }, () => null);
  renderWorkspace();
  renderProjectConsole();
}

function randomTools() {
  const { count } = parseLayout(state.layout);
  const pool = getFilteredTools();
  const project = activeProject();
  state.panels = Array.from({ length: count }, () => ({
    toolId: pool[Math.floor(Math.random() * pool.length)].id,
    projectId: project.id,
    openedAt: Date.now(),
    role: "Randomized project node"
  }));
  appendProjectEvent(project, `Randomized ${count} project panels.`, "info");
  renderWorkspace();
  renderProjectConsole();
}

function createNewProject() {
  const project = createProject(`Project ${state.projects.length + 1}`);
  state.projects.push(project);
  setActiveProject(project.id);
  appendProjectEvent(project, "Project created inside the main container.", "success");
}

function renameActiveProject() {
  const project = activeProject();
  const name = elements.projectName.value.trim();
  if (!name) return;
  project.name = name;
  renderProjectConsole();
  renderWorkspace();
  renderResults();
}

function syncProjectInput() {
  const project = activeProject();
  project.input = elements.projectInput.value;
}

function runSimultaneousWorkflow() {
  syncProjectInput();
  const project = activeProject();
  const artifacts = runProjectPanelsSimultaneously({ project, panelEntries: state.panels, toolsById });
  for (const artifact of artifacts) appendArtifact(project, artifact);
  appendProjectEvent(project, `Simultaneous run completed across ${artifacts.length} panel node${artifacts.length === 1 ? "" : "s"}.`, "success");
  renderProjectConsole();
}

function runQueuedWorkflow() {
  syncProjectInput();
  const project = activeProject();
  const artifacts = runProjectPanelsAsQueue({ project, panelEntries: state.panels, toolsById });
  for (const artifact of artifacts) appendArtifact(project, artifact);
  appendProjectEvent(project, `Queued waterfall completed across ${artifacts.length} panel node${artifacts.length === 1 ? "" : "s"}.`, artifacts.some((artifact) => artifact.status !== "ok") ? "error" : "success");
  renderProjectConsole();
}

function clearProjectData() {
  const project = activeProject();
  project.artifacts = [];
  project.events = [];
  renderProjectConsole();
}

function bindEvents() {
  elements.containerName.addEventListener("input", () => {
    state.containerName = elements.containerName.value.trim() || "Untitled Container";
  });
  elements.projectSelect.addEventListener("change", () => setActiveProject(elements.projectSelect.value));
  elements.projectName.addEventListener("change", renameActiveProject);
  elements.renameProject.addEventListener("click", renameActiveProject);
  elements.createProject.addEventListener("click", createNewProject);
  elements.projectInput.addEventListener("input", syncProjectInput);
  elements.runSimultaneous.addEventListener("click", runSimultaneousWorkflow);
  elements.runQueue.addEventListener("click", runQueuedWorkflow);
  elements.clearProjectData.addEventListener("click", clearProjectData);
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
    renderProjectConsole();
  });
  elements.save.addEventListener("click", saveWorkspace);
  elements.restore.addEventListener("click", restoreWorkspace);
  elements.clear.addEventListener("click", clearWorkspace);
  elements.random.addEventListener("click", randomTools);
}

buildCategories();
buildLayoutOptions();
renderProjectOptions();
bindEvents();
renderResults();
renderWorkspace();
renderProjectConsole();
