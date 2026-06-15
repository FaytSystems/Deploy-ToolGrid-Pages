import { tools, CATEGORY_COUNTS, CATALOG_VERSION } from "./tool-catalog.js";
import {
  PROJECT_COMPLEXITY_COUNTS,
  PROJECT_IDEA_COUNT,
  PROJECT_TEMPLATE_VERSION,
  PROJECT_TOOL_GROUPS,
  pickProjectTemplateForPrompt,
  searchProjectTemplates
} from "./project-templates.js";
import {
  MEGA_PROJECT_COMPLEXITY_COUNTS,
  MEGA_PROJECT_COUNT,
  MEGA_PROJECT_UI_MAX,
  MEGA_PROJECT_UI_MIN,
  MEGA_PROJECT_VERSION,
  searchMegaProjects
} from "./project-megagenerator.js";
import { renderTool, runTool } from "./tool-engines.js";
import { DEMAND_RANKINGS, TOP_DEMAND_PROJECTS, TOOL_USAGE_CATEGORY_SUMMARY, TOOL_USAGE_RANKING } from "./demand-rankings.js";
import {
  FILE_TRANSLATOR_VERSION,
  analyzeFilePackage,
  getSimpleToolExplanation,
  readUploadedFiles,
  summarizeFileListForProjectInput
} from "./file-translator.js";
import {
  GUIDED_PROJECT_ORCHESTRATOR_VERSION,
  SOUND_LIBRARY,
  SUBSCRIPTION_ACCESS,
  TOOL_SELECTOR_TABS,
  analyzeProjectPromptForQuestions,
  buildClarifiedPrompt,
  buildWaterfallQueueFromPlan,
  canUseBasedOnProject,
  chooseRandomSound,
  createDefaultUserProfile,
  createSessionTheme,
  getSoundChoices,
  reviseWaterfallTask,
  setUserTopics,
  suggestProjectRunStrategy
} from "./guided-project-orchestrator.js";
import {
  appendArtifact,
  appendProjectEvent,
  buildInputsFromPayload,
  canConnectTools,
  createFoundationState,
  createPanelEntriesFromPlan,
  createPlanFromProjectTemplate,
  createProject,
  generateAiProjectPlan,
  getPanelToolChain,
  getToolIO,
  listCompatibleLinks,
  makeArtifact,
  PROJECT_FOUNDATION_VERSION,
  runProjectPanelsAsQueue,
  runProjectPanelsAsQueueFrom,
  runProjectPanelsSimultaneously,
  updatePlanStepStatus,
  WORKSPACE_MODES
} from "./project-foundation.js";

const foundation = createFoundationState();
const toolsById = new Map(tools.map((tool) => [tool.id, tool]));

const state = {
  query: "",
  category: "All",
  layout: "2x2",
  templateQuery: "",
  templateComplexity: "All",
  containerName: foundation.containerName,
  activeProjectId: foundation.activeProjectId,
  mode: foundation.mode,
  autoWaterfall: foundation.autoWaterfall,
  projects: foundation.projects,
  panels: [],
  panelFx: {},
  pendingUploadFiles: [],
  uploadedFiles: [],
  fileAnalysis: null,
  guidedToolSuggestions: [],
  subscriptionStatus: SUBSCRIPTION_ACCESS.FREE,
  selectorTab: TOOL_SELECTOR_TABS.CHOOSE_OWN,
  selectorQuery: "",
  selectorCategory: "All",
  clarifyingAnalysis: null,
  clarifyingAnswers: {},
  waterfallRunning: false,
  waterfallPaused: false,
  activeWaterfallTaskId: "",
  userProfile: createDefaultUserProfile(),
  sessionTheme: null
};

const elements = {
  containerName: document.querySelector("#container-name"),
  workspaceMode: document.querySelector("#workspace-mode"),
  autoWaterfall: document.querySelector("#auto-waterfall"),
  projectSelect: document.querySelector("#project-select"),
  projectName: document.querySelector("#project-name"),
  createProject: document.querySelector("#create-project"),
  renameProject: document.querySelector("#rename-project"),
  aiPrompt: document.querySelector("#ai-prompt"),
  generateAiProject: document.querySelector("#generate-ai-project"),
  animateAiProject: document.querySelector("#animate-ai-project"),
  aiPlan: document.querySelector("#ai-plan"),
  aiBreakdown: document.querySelector("#ai-breakdown"),
  fileUpload: document.querySelector("#file-upload"),
  fileTranslatorStatus: document.querySelector("#file-translator-status"),
  fileSuggestionResults: document.querySelector("#file-suggestion-results"),
  fileConfirmModal: document.querySelector("#file-confirm-modal"),
  fileConfirmList: document.querySelector("#file-confirm-list"),
  confirmFilesYes: document.querySelector("#confirm-files-yes"),
  confirmFilesNo: document.querySelector("#confirm-files-no"),
  clearUploadedFiles: document.querySelector("#clear-uploaded-files"),
  useFileSuggestedTools: document.querySelector("#use-file-suggested-tools"),
  projectTemplateSearch: document.querySelector("#project-template-search"),
  projectTemplateComplexity: document.querySelector("#project-template-complexity"),
  projectTemplateStats: document.querySelector("#project-template-stats"),
  projectTemplateResults: document.querySelector("#project-template-results"),
  demandRankingStats: document.querySelector("#demand-ranking-stats"),
  topDemandProjects: document.querySelector("#top-demand-projects"),
  categoryDemandRanking: document.querySelector("#category-demand-ranking"),
  toolDemandRanking: document.querySelector("#tool-demand-ranking"),
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
  random: document.querySelector("#random-tools"),
  openToolSelector: document.querySelector("#open-tool-selector"),
  openToolSelectorInline: document.querySelector("#open-tool-selector-inline"),
  toolSelectorModal: document.querySelector("#tool-selector-modal"),
  closeToolSelector: document.querySelector("#close-tool-selector"),
  selectorTabChooseOwn: document.querySelector("#selector-tab-choose-own"),
  selectorTabBasedProject: document.querySelector("#selector-tab-based-project"),
  selectorPanelChooseOwn: document.querySelector("#selector-panel-choose-own"),
  selectorPanelBasedProject: document.querySelector("#selector-panel-based-project"),
  selectorSearch: document.querySelector("#selector-search"),
  selectorCategory: document.querySelector("#selector-category"),
  selectorOwnResults: document.querySelector("#selector-own-results"),
  basedProjectAccessNote: document.querySelector("#based-project-access-note"),
  clarifyingQuestions: document.querySelector("#clarifying-questions"),
  continueProjectFinder: document.querySelector("#continue-project-finder"),
  createGuidedProject: document.querySelector("#create-guided-project"),
  basedProjectSuggestions: document.querySelector("#based-project-suggestions"),
  subscriptionStatus: document.querySelector("#subscription-status"),
  waterfallStatus: document.querySelector("#waterfall-status"),
  waterfallQueue: document.querySelector("#waterfall-queue"),
  waterfallTaskSelect: document.querySelector("#waterfall-task-select"),
  waterfallRepairNote: document.querySelector("#waterfall-repair-note"),
  startWaterfall: document.querySelector("#start-waterfall"),
  pauseWaterfall: document.querySelector("#pause-waterfall"),
  applyWaterfallRepair: document.querySelector("#apply-waterfall-repair"),
  profileTopics: document.querySelector("#profile-topics"),
  saveProfileTheme: document.querySelector("#save-profile-theme"),
  themePreview: document.querySelector("#theme-preview"),
  soundMode: document.querySelector("#sound-mode"),
  soundCategory: document.querySelector("#sound-category"),
  soundSubcategory: document.querySelector("#sound-subcategory"),
  specificSound: document.querySelector("#specific-sound"),
  previewSound: document.querySelector("#preview-sound")
};

const storageKey = "toolgrid-2500-subscription-waterfall-foundation-v1";
const projectStorageKey = "toolgrid-2500-project-foundation-v2";
const legacyStorageKey = "toolgrid-2500-workspace-v1";
const maxResults = 80;
const maxTemplates = 18;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  elements.aiPrompt.value = project.prompt || "";
  elements.projectInput.value = project.input || "";
  elements.workspaceMode.value = project.mode || state.mode;
  state.mode = elements.workspaceMode.value;
  renderProjectConsole();
renderWaterfallPanel();
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

function buildModeOptions() {
  const modes = [
    [WORKSPACE_MODES.AI, "AI mode — prompt builds the project"],
    [WORKSPACE_MODES.MANUAL, "Manual mode — choose tools yourself"]
  ];
  for (const [value, label] of modes) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    elements.workspaceMode.append(option);
  }
  elements.workspaceMode.value = state.mode;
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

function buildSelectorCategories() {
  if (!elements.selectorCategory) return;
  elements.selectorCategory.replaceChildren();
  const option = document.createElement("option");
  option.value = "All";
  option.textContent = `All categories (${tools.length})`;
  elements.selectorCategory.append(option);
  for (const [category, count] of Object.entries(CATEGORY_COUNTS).sort(([a], [b]) => a.localeCompare(b))) {
    const categoryOption = document.createElement("option");
    categoryOption.value = category;
    categoryOption.textContent = `${category} (${count})`;
    elements.selectorCategory.append(categoryOption);
  }
}

function uniqueValues(items, selector) {
  return [...new Set(items.map(selector).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function buildSoundSelectors() {
  if (!elements.soundCategory) return;
  const categories = uniqueValues(SOUND_LIBRARY, (sound) => sound.category);
  elements.soundCategory.replaceChildren(...categories.map((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    return option;
  }));
  elements.soundCategory.value = state.userProfile.soundCategory || categories[0] || "bells";
  renderSoundSubcategoryOptions();
  renderSpecificSoundOptions();
}

function renderSoundSubcategoryOptions() {
  if (!elements.soundSubcategory) return;
  const category = elements.soundCategory.value || state.userProfile.soundCategory;
  const subcategories = uniqueValues(SOUND_LIBRARY.filter((sound) => sound.category === category), (sound) => sound.subcategory);
  elements.soundSubcategory.replaceChildren(...subcategories.map((subcategory) => {
    const option = document.createElement("option");
    option.value = subcategory;
    option.textContent = subcategory;
    return option;
  }));
  const preferred = state.userProfile.soundSubcategory;
  elements.soundSubcategory.value = subcategories.includes(preferred) ? preferred : subcategories[0] || "";
}

function renderSpecificSoundOptions() {
  if (!elements.specificSound) return;
  const category = elements.soundCategory.value || state.userProfile.soundCategory;
  const subcategory = elements.soundSubcategory.value || state.userProfile.soundSubcategory;
  const choices = getSoundChoices({ category, subcategory });
  const random = document.createElement("option");
  random.value = "";
  random.textContent = "Random from selected subcategory";
  const options = choices.map((sound) => {
    const option = document.createElement("option");
    option.value = sound.id;
    option.textContent = sound.label;
    return option;
  });
  elements.specificSound.replaceChildren(random, ...options);
  elements.specificSound.value = choices.some((sound) => sound.id === state.userProfile.specificSoundId) ? state.userProfile.specificSoundId : "";
}

function syncSoundProfileFromControls() {
  if (!elements.soundMode) return;
  state.userProfile = {
    ...state.userProfile,
    soundMode: elements.soundMode.value,
    soundCategory: elements.soundCategory.value,
    soundSubcategory: elements.soundSubcategory.value,
    specificSoundId: elements.specificSound.value
  };
}

function applySessionTheme() {
  state.sessionTheme = createSessionTheme(state.userProfile);
  document.body.style.setProperty("--session-accent", state.sessionTheme.accent);
  document.body.style.setProperty("--session-secondary", state.sessionTheme.secondary);
  document.body.style.setProperty("--session-background", state.sessionTheme.background);
  document.body.dataset.themeMotif = state.sessionTheme.motif;
  renderThemeProfile();
}

function renderThemeProfile() {
  if (!elements.profileTopics || !elements.themePreview) return;
  elements.profileTopics.value = state.userProfile.topics.join(", ");
  elements.soundMode.value = state.userProfile.soundMode;
  elements.soundCategory.value = state.userProfile.soundCategory;
  renderSoundSubcategoryOptions();
  elements.soundSubcategory.value = state.userProfile.soundSubcategory;
  renderSpecificSoundOptions();
  elements.specificSound.value = state.userProfile.specificSoundId || "";
  const theme = state.sessionTheme || createSessionTheme(state.userProfile);
  elements.themePreview.innerHTML = `<strong>${theme.name}</strong><span>${theme.animationName} · ${theme.topics.slice(0, 5).join(" · ")}</span>`;
}

function saveProfileAndRegenerateTheme() {
  state.userProfile = setUserTopics(state.userProfile, elements.profileTopics.value);
  syncSoundProfileFromControls();
  applySessionTheme();
  saveWorkspace();
}

function playSelectedSound(reason = "task") {
  syncSoundProfileFromControls();
  if (state.userProfile.soundMode === "off") return;
  if (reason === "task" && !["task", "both"].includes(state.userProfile.soundMode)) return;
  if (reason === "completion" && !["completion", "both"].includes(state.userProfile.soundMode)) return;
  const sound = chooseRandomSound(state.userProfile);
  try {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return;
    const context = new AudioContextCtor();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = sound.toneHz;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + sound.durationMs / 1000);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + sound.durationMs / 1000 + 0.02);
  } catch (error) {
    // Browser may block audio until a user gesture; silently keep the UI running.
  }
}

function buildProjectTemplateFilters() {
  const all = document.createElement("option");
  all.value = "All";
  all.textContent = "All project sizes";
  elements.projectTemplateComplexity.append(all);

  const megaHeader = document.createElement("option");
  megaHeader.value = "All";
  megaHeader.textContent = `Mega virtual library: ${MEGA_PROJECT_UI_MIN}–${MEGA_PROJECT_UI_MAX} UI nodes`;
  megaHeader.disabled = true;
  elements.projectTemplateComplexity.append(megaHeader);

  for (const [complexity, count] of Object.entries(MEGA_PROJECT_COMPLEXITY_COUNTS)) {
    const option = document.createElement("option");
    option.value = complexity;
    option.textContent = `${complexity.replaceAll("-", " ")} (${count.toLocaleString()} virtual)`;
    elements.projectTemplateComplexity.append(option);
  }

  for (const [complexity, count] of Object.entries(PROJECT_COMPLEXITY_COUNTS)) {
    const option = document.createElement("option");
    option.value = complexity;
    option.textContent = `${complexity.replaceAll("-", " ")} (${count.toLocaleString()} curated)`;
    elements.projectTemplateComplexity.append(option);
  }
}

function renderProjectOptions() {
  const current = activeProject().id;
  elements.projectSelect.replaceChildren();
  for (const project of state.projects) {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = `${project.mode === WORKSPACE_MODES.AI ? "✨ " : ""}${project.name}`;
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


function makeToolInfoButton(tool) {
  const wrap = document.createElement("span");
  wrap.className = "tool-info-wrap";
  const button = document.createElement("button");
  button.type = "button";
  button.className = "info-toggle";
  button.textContent = "i";
  button.setAttribute("aria-label", `What does ${tool.name} do?`);
  const popover = document.createElement("span");
  popover.className = "tool-info-popover";
  popover.textContent = getSimpleToolExplanation(tool);
  button.addEventListener("click", () => {
    wrap.classList.toggle("info-open");
  });
  button.addEventListener("blur", () => {
    setTimeout(() => wrap.classList.remove("info-open"), 180);
  });
  wrap.append(button, popover);
  return wrap;
}

function layoutForToolCount(count) {
  if (count <= 1) return "1x1";
  if (count <= 2) return "2x1";
  if (count <= 4) return "2x2";
  if (count <= 6) return "3x2";
  if (count <= 8) return "4x2";
  if (count <= 12) return "4x3";
  return "4x4";
}

function renderFileConfirmModal(files) {
  elements.fileConfirmList.replaceChildren();
  const fragment = document.createDocumentFragment();
  for (const file of files) {
    const item = document.createElement("li");
    const size = Number(file.size || 0);
    const label = size >= 1024 * 1024 ? `${(size / (1024 * 1024)).toFixed(2)} MB` : size >= 1024 ? `${(size / 1024).toFixed(1)} KB` : `${size} B`;
    item.textContent = `${file.name || "Unnamed file"} · ${file.type || "unknown type"} · ${label}`;
    fragment.append(item);
  }
  elements.fileConfirmList.append(fragment);
  elements.fileConfirmModal.classList.remove("hidden");
}

function closeFileConfirmModal() {
  elements.fileConfirmModal.classList.add("hidden");
}

function syncUploadStateToProject() {
  const project = activeProject();
  project.uploadedFiles = state.uploadedFiles;
  project.fileAnalysis = state.fileAnalysis;
}

function createFileSuggestedPlan(project, suggestions) {
  return {
    id: `file-plan-${Date.now()}`,
    prompt: project.prompt,
    intentId: "file-upload-translated-project",
    intentLabel: "File upload translated project",
    projectTitle: project.name,
    status: "planned",
    compiler: state.fileAnalysis?.compiledPrompt || project.compiler || null,
    recommendedLayout: state.layout,
    starterPayload: project.input,
    steps: suggestions.map((suggestion, index) => {
      const tool = toolsById.get(suggestion.toolId);
      const io = tool ? getToolIO(tool) : { accepts: ["text"], output: "text" };
      return {
        id: `file-step-${index + 1}`,
        panelIndex: index,
        toolId: suggestion.toolId,
        toolName: suggestion.name,
        nestedToolIds: [],
        status: "planned",
        accepts: io.accepts,
        outputType: io.output,
        reason: suggestion.reason || "recommended by uploaded files and prompt",
        score: suggestion.score
      };
    })
  };
}

function applyFileSuggestedTools() {
  const project = activeProject();
  const suggestions = state.guidedToolSuggestions.slice(0, 16);
  if (!suggestions.length) {
    elements.fileTranslatorStatus.textContent = "Upload and confirm files first so the file translator can suggest tools.";
    return;
  }
  state.mode = WORKSPACE_MODES.AI;
  elements.workspaceMode.value = WORKSPACE_MODES.AI;
  project.mode = WORKSPACE_MODES.AI;
  const layout = layoutForToolCount(suggestions.length);
  state.layout = layout;
  elements.layout.value = layout;
  const { count } = parseLayout(layout);
  state.panels = Array.from({ length: count }, (_, index) => {
    const suggestion = suggestions[index];
    if (!suggestion) return null;
    return {
      toolId: suggestion.toolId,
      projectId: project.id,
      openedAt: Date.now(),
      role: "File-translator suggested tool node",
      aiStepId: `file-step-${index + 1}`,
      aiStepStatus: "planned",
      fileSuggestionReason: suggestion.reason
    };
  });
  project.plan = createFileSuggestedPlan(project, suggestions);
  project.compiler = project.plan.compiler;
  state.panelFx = {};
  appendProjectEvent(project, `Loaded ${suggestions.length} file-recommended tool${suggestions.length === 1 ? "" : "s"} into the workspace.`, "success");
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
  renderResults();
}

function renderFileSuggestions() {
  if (!elements.fileTranslatorStatus || !elements.fileSuggestionResults) return;
  const project = activeProject();
  const fileCount = state.uploadedFiles.length || project.uploadedFiles?.length || 0;
  if (!fileCount) {
    elements.fileTranslatorStatus.textContent = `Step 1: enter prompt · Step 2: upload files · Step 3: confirm all files added · Step 4: select tools (${FILE_TRANSLATOR_VERSION})`;
    elements.fileSuggestionResults.replaceChildren();
    return;
  }

  const analysis = state.fileAnalysis || project.fileAnalysis;
  const suggestions = state.guidedToolSuggestions;
  elements.fileTranslatorStatus.textContent = analysis?.summary || `${fileCount} file${fileCount === 1 ? "" : "s"} uploaded.`;
  const fragment = document.createDocumentFragment();
  const files = state.uploadedFiles.slice(0, 4);
  for (const file of files) {
    const item = document.createElement("div");
    item.className = "uploaded-file-chip";
    item.textContent = `${file.kindLabel}: ${file.name} · ${file.sizeLabel} · ${file.status}`;
    fragment.append(item);
  }
  for (const suggestion of suggestions.slice(0, 10)) {
    const tool = toolsById.get(suggestion.toolId);
    if (!tool) continue;
    const card = document.createElement("article");
    card.className = "suggested-tool-card";
    const header = document.createElement("div");
    header.className = "tool-title-row";
    const title = document.createElement("h3");
    title.textContent = `#${suggestion.rank} ${tool.name}`;
    header.append(title, makeToolInfoButton(tool));
    const reason = document.createElement("p");
    reason.textContent = suggestion.reason;
    const explanation = document.createElement("p");
    explanation.className = "mini-note";
    explanation.textContent = suggestion.explanation;
    const actions = document.createElement("div");
    actions.className = "tool-card-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open tool";
    open.addEventListener("click", () => openTool(tool));
    actions.append(open);
    card.append(header, reason, explanation, actions);
    fragment.append(card);
  }
  elements.fileSuggestionResults.replaceChildren(fragment);
}

async function confirmUploadedFiles() {
  const pending = state.pendingUploadFiles;
  closeFileConfirmModal();
  if (!pending.length) return;
  const project = activeProject();
  project.prompt = elements.aiPrompt.value.trim() || project.prompt || "Use the uploaded files to build the best tool workflow.";
  elements.fileTranslatorStatus.textContent = "Reading files and translating them into tool needs...";
  try {
    const uploaded = await readUploadedFiles(pending);
    const analysis = analyzeFilePackage({ prompt: project.prompt, files: uploaded, tools, limit: 16 });
    state.uploadedFiles = uploaded;
    state.fileAnalysis = analysis;
    state.guidedToolSuggestions = analysis.recommendations;
    syncUploadStateToProject();
    project.compiler = analysis.compiledPrompt;
    project.input = summarizeFileListForProjectInput({ prompt: project.prompt, files: uploaded, analysis });
    elements.projectInput.value = project.input;
    state.query = analysis.searchTerms.slice(0, 6).join(" ");
    elements.search.value = state.query;
    state.category = "All";
    elements.category.value = "All";
    appendProjectEvent(project, `Uploaded files translated into ${analysis.recommendations.length} suggested tools.`, "success");
    renderFileSuggestions();
    renderResults();
    renderProjectConsole();
renderWaterfallPanel();
    elements.fileSuggestionResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch (error) {
    elements.fileTranslatorStatus.textContent = error instanceof Error ? error.message : String(error);
  } finally {
    state.pendingUploadFiles = [];
    elements.fileUpload.value = "";
  }
}

function rejectUploadedFiles() {
  state.pendingUploadFiles = [];
  elements.fileUpload.value = "";
  closeFileConfirmModal();
  elements.fileTranslatorStatus.textContent = "Upload canceled. Add the final set of files when ready.";
}

function clearUploadedFiles() {
  state.pendingUploadFiles = [];
  state.uploadedFiles = [];
  state.fileAnalysis = null;
  state.guidedToolSuggestions = [];
  const project = activeProject();
  project.uploadedFiles = [];
  project.fileAnalysis = null;
  elements.fileUpload.value = "";
  elements.fileTranslatorStatus.textContent = "Uploaded file package cleared.";
  renderFileSuggestions();
  renderProjectConsole();
renderWaterfallPanel();
}

function syncModeToProject() {
  const project = activeProject();
  state.mode = elements.workspaceMode.value;
  state.autoWaterfall = elements.autoWaterfall.checked;
  project.mode = state.mode;
}

function openTool(tool, panelIndex = Number(elements.targetPanel.value || 0), projectId = activeProject().id) {
  const { count } = parseLayout(state.layout);
  const safeIndex = Math.min(Math.max(0, panelIndex), count - 1);
  state.panels[safeIndex] = {
    toolId: tool.id,
    projectId,
    openedAt: Date.now(),
    role: state.mode === WORKSPACE_MODES.AI ? "AI-assisted tool node" : "Manual tool node",
    aiStepStatus: state.mode === WORKSPACE_MODES.AI ? "added" : undefined
  };
  appendProjectEvent(projectById(projectId), `${tool.name} opened in panel ${safeIndex + 1}.`, "info");
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
}

function applyProjectTemplate(template) {
  if (!template) return;
  syncModeToProject();
  const project = activeProject();
  state.mode = WORKSPACE_MODES.AI;
  elements.workspaceMode.value = WORKSPACE_MODES.AI;
  project.mode = WORKSPACE_MODES.AI;
  project.name = template.title;
  project.prompt = template.prompt;
  project.input = elements.projectInput.value.trim() || template.inputHint || template.prompt;
  project.plan = createPlanFromProjectTemplate(template, toolsById);
  state.layout = project.plan.recommendedLayout;
  elements.layout.value = state.layout;
  const { count } = parseLayout(state.layout);
  const entries = createPanelEntriesFromPlan(project.plan, project.id);
  state.panels = Array.from({ length: count }, (_, index) => entries[index] || null);
  state.panelFx = {};
  appendProjectEvent(project, `Loaded template: ${template.title}. ${template.toolCount} tools across ${template.panelCount} UI panel${template.panelCount === 1 ? "" : "s"}.`, "success");
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
  renderProjectTemplates();
  renderResults();
}

function renderProjectTemplates() {
  const curatedLimit = state.templateComplexity.startsWith("single") || state.templateComplexity.includes("33-64") || state.templateComplexity.includes("17-32") || state.templateComplexity.includes("5-8") ? 0 : Math.floor(maxTemplates / 2);
  const curated = curatedLimit > 0
    ? searchProjectTemplates(state.templateQuery, {
      limit: curatedLimit,
      complexity: state.templateComplexity
    })
    : [];
  const mega = searchMegaProjects(state.templateQuery, {
    limit: maxTemplates - curated.length,
    complexity: state.templateComplexity
  });
  const templates = [...curated, ...mega].slice(0, maxTemplates);
  const totalProjectIdeas = MEGA_PROJECT_COUNT + PROJECT_IDEA_COUNT;
  elements.projectTemplateStats.textContent = `${totalProjectIdeas.toLocaleString()} project ideas · ${MEGA_PROJECT_COUNT.toLocaleString()} virtual + ${PROJECT_IDEA_COUNT.toLocaleString()} curated · ${PROJECT_TOOL_GROUPS.length} tool groups · ${MEGA_PROJECT_VERSION}`;
  const fragment = document.createDocumentFragment();
  for (const template of templates) {
    const card = document.createElement("article");
    card.className = "template-card";
    const title = document.createElement("h3");
    title.textContent = template.title;
    const meta = document.createElement("span");
    meta.className = "category-pill";
    meta.textContent = `${template.source === "mega-generator" ? "Mega #" + template.virtualProjectNumber.toLocaleString() + " · " : ""}${template.field} · ${template.complexity} · ${template.toolCount} UI/tool node${template.toolCount === 1 ? "" : "s"} · ${template.layout}`;
    const outcome = document.createElement("p");
    outcome.textContent = template.outcome;
    const summary = document.createElement("p");
    summary.className = "mini-note";
    summary.textContent = template.compatibilitySummary;
    const actions = document.createElement("div");
    actions.className = "tool-card-actions";
    const load = document.createElement("button");
    load.type = "button";
    load.textContent = "Load project";
    load.addEventListener("click", () => applyProjectTemplate(template));
    actions.append(load);
    card.append(title, meta, outcome, summary, actions);
    fragment.append(card);
  }
  elements.projectTemplateResults.replaceChildren(fragment);
}


function renderDemandRankings() {
  if (!elements.demandRankingStats || !elements.topDemandProjects || !elements.categoryDemandRanking || !elements.toolDemandRanking) return;
  const sampled = DEMAND_RANKINGS.toolUsageSummary.sampledProjectCount.toLocaleString();
  const source = DEMAND_RANKINGS.toolUsageSummary.sourceProjectUniverse.toLocaleString();
  elements.demandRankingStats.textContent = `${source} virtual projects ranked · ${sampled} sampled coordinates for tool-usage projection · ${TOOL_USAGE_RANKING.length.toLocaleString()} tools ordered most-used to least-used · ${DEMAND_RANKINGS.version}`;

  const projectFragment = document.createDocumentFragment();
  for (const project of TOP_DEMAND_PROJECTS.slice(0, 12)) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>#${project.rank} ${project.title}</strong><br><span>Score ${project.demandScore} · ${project.toolCount} UI/tool node${project.toolCount === 1 ? "" : "s"} · ${project.layout} · ${project.field}</span>`;
    projectFragment.append(item);
  }
  elements.topDemandProjects.replaceChildren(projectFragment);

  const categoryFragment = document.createDocumentFragment();
  for (const category of TOOL_USAGE_CATEGORY_SUMMARY) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${category.category}</strong><br><span>${category.projectedUses.toLocaleString()} projected weighted uses · ${category.toolCount} tools · top: ${category.topTool}</span>`;
    categoryFragment.append(item);
  }
  elements.categoryDemandRanking.replaceChildren(categoryFragment);

  const toolFragment = document.createDocumentFragment();
  for (const tool of TOOL_USAGE_RANKING.slice(0, 40)) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>#${tool.rank} ${tool.name}</strong><br><span>${tool.category} · ${tool.engine} · ${tool.projectedUses.toLocaleString()} projected weighted uses · sampled hits ${tool.sampledHits.toLocaleString()}</span>`;
    toolFragment.append(item);
  }
  elements.toolDemandRanking.replaceChildren(toolFragment);
}

function renderResults() {
  const filtered = getFilteredTools();
  const project = activeProject();
  elements.resultCount.textContent = `${filtered.length.toLocaleString()} matching tools · catalog ${CATALOG_VERSION} · ${PROJECT_FOUNDATION_VERSION} · mega projects ${MEGA_PROJECT_COUNT.toLocaleString()}`;
  const visible = filtered.slice(0, maxResults);
  const fragment = document.createDocumentFragment();
  for (const tool of visible) {
    const io = getToolIO(tool);
    const card = document.createElement("article");
    card.className = "tool-card";
    const titleRow = document.createElement("div");
    titleRow.className = "tool-title-row";
    const title = document.createElement("h3");
    title.textContent = tool.name;
    titleRow.append(title, makeToolInfoButton(tool));
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
renderWaterfallPanel();
    });
    actions.append(open, duplicate);
    card.append(titleRow, meta, description, tags, projectLine, actions);
    fragment.append(card);
  }
  elements.results.replaceChildren(fragment);
}

function getSelectorFilteredTools() {
  const q = state.selectorQuery || state.query || "";
  return tools
    .map((tool) => ({ tool, score: scoreTool(tool, q) }))
    .filter(({ tool, score }) => score > 0 && (state.selectorCategory === "All" || tool.category === state.selectorCategory))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .map(({ tool }) => tool);
}

function renderToolSelectorOwnResults() {
  if (!elements.selectorOwnResults) return;
  const visible = getSelectorFilteredTools().slice(0, 60);
  const fragment = document.createDocumentFragment();
  for (const tool of visible) {
    const card = document.createElement("article");
    card.className = "selector-tool-card";
    const header = document.createElement("div");
    header.className = "tool-title-row";
    const title = document.createElement("h3");
    title.textContent = tool.name;
    header.append(title, makeToolInfoButton(tool));
    const desc = document.createElement("p");
    desc.textContent = tool.description;
    const meta = document.createElement("span");
    meta.className = "category-pill";
    const io = getToolIO(tool);
    meta.textContent = `${tool.category} · ${io.accepts.join("/")} → ${io.output}`;
    const actions = document.createElement("div");
    actions.className = "tool-card-actions";
    const open = document.createElement("button");
    open.type = "button";
    open.textContent = "Open in selected panel";
    open.addEventListener("click", () => {
      openTool(tool);
      closeToolSelector();
    });
    actions.append(open);
    card.append(header, meta, desc, actions);
    fragment.append(card);
  }
  elements.selectorOwnResults.replaceChildren(fragment);
}

function setSelectorTab(tab) {
  state.selectorTab = tab;
  const isOwn = tab === TOOL_SELECTOR_TABS.CHOOSE_OWN;
  elements.selectorTabChooseOwn.classList.toggle("active", isOwn);
  elements.selectorTabBasedProject.classList.toggle("active", !isOwn);
  elements.selectorPanelChooseOwn.classList.toggle("active", isOwn);
  elements.selectorPanelBasedProject.classList.toggle("active", !isOwn);
  if (isOwn) renderToolSelectorOwnResults();
  else renderBasedProjectSelector();
}

function openToolSelector(preferredTab = state.selectorTab) {
  elements.toolSelectorModal.classList.remove("hidden");
  state.selectorQuery = elements.aiPrompt.value.trim() || state.query || "";
  elements.selectorSearch.value = state.selectorQuery;
  elements.selectorCategory.value = state.selectorCategory;
  setSelectorTab(preferredTab);
}

function closeToolSelector() {
  elements.toolSelectorModal.classList.add("hidden");
}

function collectClarifyingAnswers() {
  const answers = {};
  for (const input of elements.clarifyingQuestions.querySelectorAll("textarea[data-question-id]")) {
    answers[input.dataset.questionId] = input.value.trim();
  }
  state.clarifyingAnswers = answers;
  return answers;
}

function renderClarifyingQuestions(analysis) {
  elements.clarifyingQuestions.replaceChildren();
  if (!analysis?.questions?.length) {
    const ready = document.createElement("div");
    ready.className = "ready-box";
    ready.textContent = analysis?.summary || "The prompt is ready. Create the guided waterfall when you are ready.";
    elements.clarifyingQuestions.append(ready);
    return;
  }
  for (const question of analysis.questions) {
    const wrap = document.createElement("label");
    wrap.className = "clarifying-question";
    const title = document.createElement("strong");
    title.textContent = question.label;
    const reason = document.createElement("span");
    reason.textContent = question.reason;
    const input = document.createElement("textarea");
    input.rows = 2;
    input.placeholder = question.placeholder;
    input.dataset.questionId = question.id;
    input.value = state.clarifyingAnswers[question.id] || "";
    wrap.append(title, reason, input);
    elements.clarifyingQuestions.append(wrap);
  }
}

function renderBasedProjectSelector() {
  if (!canUseBasedOnProject(state.subscriptionStatus)) {
    elements.basedProjectAccessNote.textContent = "Based on Project is a paid subscription selector. Free users can still use CHOOSE OWN and manually build projects.";
    elements.clarifyingQuestions.replaceChildren();
    elements.basedProjectSuggestions.replaceChildren();
    elements.createGuidedProject.disabled = true;
    elements.continueProjectFinder.disabled = true;
    return;
  }
  elements.createGuidedProject.disabled = false;
  elements.continueProjectFinder.disabled = false;
  const project = activeProject();
  project.prompt = elements.aiPrompt.value.trim() || project.prompt || "Build a guided tool workflow.";
  state.clarifyingAnalysis = analyzeProjectPromptForQuestions({ prompt: project.prompt, fileAnalysis: state.fileAnalysis || project.fileAnalysis });
  const strategy = project.plan ? suggestProjectRunStrategy({ plan: project.plan }) : null;
  elements.basedProjectAccessNote.textContent = `${state.clarifyingAnalysis.summary}${strategy ? ` · ${strategy.reason}` : ""}`;
  renderClarifyingQuestions(state.clarifyingAnalysis);
  renderBasedProjectSuggestions();
}

function renderBasedProjectSuggestions() {
  elements.basedProjectSuggestions.replaceChildren();
  const prompt = buildClarifiedPrompt(elements.aiPrompt.value.trim() || activeProject().prompt, state.clarifyingAnswers);
  const analysis = analyzeProjectPromptForQuestions({ prompt, fileAnalysis: state.fileAnalysis });
  const suggested = generateAiProjectPlan({ prompt, tools, maxPanels: 16 });
  const fragment = document.createDocumentFragment();
  const summary = document.createElement("article");
  summary.className = "selector-tool-card suggestion-summary";
  summary.innerHTML = `<h3>${analysis.isReady ? "Ready path" : "Draft path"}</h3><p>${suggested.intentLabel} · ${suggested.steps.length} visible panel steps · ${suggested.workflowMode || "waterfall"}</p>`;
  fragment.append(summary);
  for (const step of suggested.steps.slice(0, 12)) {
    const tool = toolsById.get(step.toolId);
    if (!tool) continue;
    const card = document.createElement("article");
    card.className = "selector-tool-card";
    const header = document.createElement("div");
    header.className = "tool-title-row";
    const title = document.createElement("h3");
    title.textContent = `${step.panelIndex + 1}. ${tool.name}`;
    header.append(title, makeToolInfoButton(tool));
    const reason = document.createElement("p");
    reason.textContent = step.reason;
    card.append(header, reason);
    fragment.append(card);
  }
  elements.basedProjectSuggestions.replaceChildren(fragment);
}

function continueProjectFinder() {
  if (!canUseBasedOnProject(state.subscriptionStatus)) return;
  const project = activeProject();
  const answers = collectClarifyingAnswers();
  const clarified = buildClarifiedPrompt(elements.aiPrompt.value.trim() || project.prompt, answers);
  project.prompt = clarified;
  elements.aiPrompt.value = clarified;
  state.clarifyingAnalysis = analyzeProjectPromptForQuestions({ prompt: clarified, fileAnalysis: state.fileAnalysis || project.fileAnalysis });
  renderBasedProjectSelector();
}

function createGuidedProjectFromSelector() {
  if (!canUseBasedOnProject(state.subscriptionStatus)) return;
  const project = activeProject();
  const answers = collectClarifyingAnswers();
  const prompt = buildClarifiedPrompt(elements.aiPrompt.value.trim() || project.prompt, answers);
  elements.aiPrompt.value = prompt;
  generateAiProject();
  const active = activeProject();
  active.waterfallQueue = buildWaterfallQueueFromPlan(active.plan, { maxTasks: 64 });
  state.waterfallPaused = false;
  state.waterfallRunning = false;
  appendProjectEvent(active, `Guided project created with ${active.waterfallQueue.length} queued waterfall task${active.waterfallQueue.length === 1 ? "" : "s"}.`, "success");
  renderWaterfallPanel();
  closeToolSelector();
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
  span.textContent = state.mode === WORKSPACE_MODES.AI
    ? "Empty — generate an AI project or open a compatible tool here."
    : "Empty — open a tool here for the active project.";
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
renderWaterfallPanel();
  });
  return select;
}

function runManualWaterfallFromArtifact(project, sourcePanelIndex, artifact) {
  if (!state.autoWaterfall || state.mode !== WORKSPACE_MODES.MANUAL || artifact.status !== "ok") return;
  const downstream = state.panels.slice(sourcePanelIndex + 1).filter((entry) => entry?.projectId === project.id);
  if (!downstream.length) return;
  const artifacts = runProjectPanelsAsQueueFrom({
    project,
    panelEntries: state.panels,
    toolsById,
    startPanelIndex: sourcePanelIndex + 1,
    initialPayload: artifact.output,
    runMode: "manual-waterfall"
  });
  if (!artifacts.length) return;
  for (const nextArtifact of artifacts) appendArtifact(project, nextArtifact);
  appendProjectEvent(project, `Manual auto-waterfall continued from panel ${sourcePanelIndex + 1} through ${artifacts.length} compatible downstream node${artifacts.length === 1 ? "" : "s"}.`, artifacts.some((item) => item.status !== "ok") ? "error" : "success");
}

function publishPanelResult({ tool, panelIndex, inputs, output, status, runMode }) {
  const entry = state.panels[panelIndex];
  const project = projectById(entry?.projectId || activeProject().id);
  const artifact = makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, status, runMode, stepId: entry?.aiStepId || null });
  appendArtifact(project, artifact);
  runManualWaterfallFromArtifact(project, panelIndex, artifact);
  renderProjectConsole();
renderWaterfallPanel();
}

function createPanelBadge(entry, tool) {
  const badge = document.createElement("span");
  const status = entry?.aiStepStatus || entry?.manualStatus || "ready";
  badge.className = `panel-badge badge-${status}`;
  badge.textContent = state.mode === WORKSPACE_MODES.AI ? `AI ${status}` : status;
  if (tool) badge.title = `${tool.name} is ${status}`;
  return badge;
}

function renderPanel(index) {
  const panel = document.createElement("article");
  panel.className = "workspace-panel";
  const entry = state.panels[index];
  const tool = entry ? toolsById.get(entry.toolId) : null;
  const fx = state.panelFx[index] || entry?.aiStepStatus || "";
  if (fx) panel.classList.add(`panel-${fx}`);

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
    delete state.panelFx[index];
    renderWorkspace();
    renderProjectConsole();
renderWaterfallPanel();
  });
  const duplicate = document.createElement("button");
  duplicate.type = "button";
  duplicate.textContent = "⧉";
  duplicate.title = "Duplicate this panel to the next available panel";
  duplicate.addEventListener("click", () => {
    const { count } = parseLayout(state.layout);
    const source = state.panels[index];
    if (!source) return;
    const targetIndex = state.panels.findIndex((candidate, idx) => idx < count && !candidate);
    state.panels[targetIndex === -1 ? index : targetIndex] = { ...source, openedAt: Date.now(), aiStepId: undefined, aiStepStatus: undefined };
    renderWorkspace();
    renderProjectConsole();
renderWaterfallPanel();
  });
  actions.append(duplicate, clear);
  titleWrap.append(title, meta);
  topbar.append(titleWrap, actions);

  const body = document.createElement("div");
  body.className = "panel-body";
  if (tool) {
    const project = projectById(entry.projectId);
    const io = getToolIO(tool);
    const chain = getPanelToolChain(entry, toolsById);
    title.textContent = entry.uiTitle || tool.name;
    titleWrap.append(makeToolInfoButton(tool));
    meta.textContent = `${chain.length} UI tool${chain.length === 1 ? "" : "s"} · ${io.accepts.join("/")} → ${io.output}`;
    const utilityRow = document.createElement("div");
    utilityRow.className = "panel-utility-row";
    const projectSelect = createPanelProjectSelect(index, entry);
    utilityRow.append(projectSelect, createPanelBadge(entry, tool));
    titleWrap.append(utilityRow);
    if (chain.length > 1) {
      const nested = document.createElement("div");
      nested.className = "nested-tool-strip";
      for (const item of chain) {
        const chip = document.createElement("span");
        chip.textContent = `${item.order + 1}. ${item.tool.name}`;
        nested.append(chip);
      }
      body.append(nested);
    }
    renderTool(body, tool, {
      project,
      panelIndex: index,
      panelRole: entry.role,
      stepStatus: entry.aiStepStatus,
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
  elements.status.textContent = `${state.mode.toUpperCase()} mode · ${loaded}/${count} panels loaded · ${projectPanels} assigned to ${activeProject().name} · duplicate tools allowed`;
  updatePanelPicker();
}

function renderPromptBreakdown() {
  const project = activeProject();
  const compiled = project.plan?.compiler || project.compiler;
  elements.aiBreakdown.replaceChildren();
  if (!compiled) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "Prompt breakdown appears after AI mode compiles the project goal.";
    elements.aiBreakdown.append(empty);
    return;
  }

  const summary = document.createElement("li");
  summary.className = "plan-summary";
  summary.textContent = compiled.summary;
  elements.aiBreakdown.append(summary);

  const global = document.createElement("li");
  const globalTitle = document.createElement("strong");
  globalTitle.textContent = "Generalized search terms";
  const globalText = document.createElement("span");
  globalText.textContent = compiled.globalSearchTerms.slice(0, 18).join(" · ");
  global.append(globalTitle, globalText);
  elements.aiBreakdown.append(global);

  for (const part of compiled.taskParts || []) {
    const item = document.createElement("li");
    item.className = "prompt-part";
    const title = document.createElement("strong");
    title.textContent = `${part.action} → ${part.object}`;
    const desc = document.createElement("span");
    desc.textContent = `${part.capabilityLabel} · searches: ${part.searchQueries.slice(0, 3).join(" | ")}`;
    const terms = document.createElement("small");
    terms.textContent = part.generalizedTerms.slice(0, 8).join(" · ");
    item.append(title, desc, terms);
    elements.aiBreakdown.append(item);
  }
}

function renderAiPlan() {
  const project = activeProject();
  const plan = project.plan;
  elements.aiPlan.replaceChildren();
  if (!plan) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "No AI plan yet. Describe the goal, then generate a project.";
    elements.aiPlan.append(empty);
    return;
  }
  const summary = document.createElement("li");
  summary.className = "plan-summary";
  summary.textContent = `${plan.intentLabel} · ${plan.steps.length} linked tool node${plan.steps.length === 1 ? "" : "s"} · layout ${plan.recommendedLayout}`;
  elements.aiPlan.append(summary);
  for (const step of plan.steps) {
    const item = document.createElement("li");
    item.className = `plan-step plan-${step.status}`;
    const title = document.createElement("strong");
    title.textContent = `Panel ${step.panelIndex + 1}: ${step.toolName}${step.nestedCount ? ` + ${step.nestedCount} nested` : ""}`;
    const desc = document.createElement("span");
    desc.textContent = `${step.status} · ${step.accepts.join("/")} → ${step.outputType} · ${step.reason}`;
    item.append(title, desc);
    elements.aiPlan.append(item);
  }
}

function ensureWaterfallQueue(project = activeProject()) {
  if (!Array.isArray(project.waterfallQueue) || !project.waterfallQueue.length) {
    project.waterfallQueue = buildWaterfallQueueFromPlan(project.plan, { maxTasks: 64 });
  }
  return project.waterfallQueue || [];
}

function setWaterfallTaskStatus(project, stepId, status) {
  if (!project?.waterfallQueue?.length) return;
  let changed = false;
  for (const task of project.waterfallQueue) {
    if (task.parentStepId === stepId || task.id === stepId) {
      task.status = status;
      task.updatedAt = new Date().toISOString();
      changed = true;
    }
  }
  if (changed) renderWaterfallPanel();
}

function renderWaterfallPanel() {
  if (!elements.waterfallQueue) return;
  const project = activeProject();
  const queue = ensureWaterfallQueue(project);
  const doneCount = queue.filter((task) => task.status === "done").length;
  const errorCount = queue.filter((task) => task.status === "error").length;
  const running = queue.find((task) => task.status === "running");
  elements.waterfallStatus.textContent = `${queue.length} queued task${queue.length === 1 ? "" : "s"} · ${doneCount} done · ${errorCount} issue${errorCount === 1 ? "" : "s"}${state.waterfallPaused ? " · paused" : running ? ` · running ${running.toolName}` : ""}`;
  const fragment = document.createDocumentFragment();
  const selectFragment = document.createDocumentFragment();
  for (const task of queue) {
    const item = document.createElement("li");
    item.className = `waterfall-task waterfall-${task.status}`;
    const title = document.createElement("strong");
    title.textContent = `${task.sequence}. ${task.toolName}`;
    const detail = document.createElement("span");
    detail.textContent = `${task.status} · panel ${Number(task.panelIndex) + 1} · ${task.prompt.slice(0, 140)}`;
    item.append(title, detail);
    fragment.append(item);

    const option = document.createElement("option");
    option.value = task.id;
    option.textContent = `${task.sequence}. ${task.toolName}`;
    selectFragment.append(option);
  }
  elements.waterfallQueue.replaceChildren(fragment);
  elements.waterfallTaskSelect.replaceChildren(selectFragment);
  if (state.activeWaterfallTaskId) elements.waterfallTaskSelect.value = state.activeWaterfallTaskId;
}

async function waitIfPaused() {
  while (state.waterfallPaused) {
    await sleep(200);
  }
}

function startGuidedWaterfall() {
  if (!activeProject().plan) generateAiProject();
  state.waterfallPaused = false;
  state.waterfallRunning = true;
  animateAiProject();
}

function pauseGuidedWaterfall() {
  state.waterfallPaused = !state.waterfallPaused;
  elements.pauseWaterfall.textContent = state.waterfallPaused ? "Resume" : "Pause";
  appendProjectEvent(activeProject(), state.waterfallPaused ? "Waterfall paused for inspection and repair." : "Waterfall resumed.", "info");
  renderWaterfallPanel();
}

function applyWaterfallRepair() {
  const project = activeProject();
  const taskId = elements.waterfallTaskSelect.value;
  const note = elements.waterfallRepairNote.value.trim();
  if (!taskId || !note) {
    elements.waterfallStatus.textContent = "Pick a task and explain what is wrong before applying a repair.";
    return;
  }
  project.waterfallQueue = reviseWaterfallTask({ queue: ensureWaterfallQueue(project), taskId, userObservation: note });
  const task = project.waterfallQueue.find((item) => item.id === taskId);
  if (task?.parentStepId && project.plan?.steps) {
    const step = project.plan.steps.find((candidate) => candidate.id === task.parentStepId);
    if (step) {
      step.reason = `${step.reason}\nRepair note: ${note}`;
      step.status = "revised";
    }
  }
  state.activeWaterfallTaskId = taskId;
  appendProjectEvent(project, `Task repair saved for ${task?.toolName || taskId}.`, "success");
  elements.waterfallRepairNote.value = "";
  renderWaterfallPanel();
  renderProjectConsole();
renderWaterfallPanel();
}

function renderProjectConsole() {
  const project = activeProject();
  renderProjectOptions();
  elements.containerName.value = state.containerName;
  elements.workspaceMode.value = project.mode || state.mode;
  elements.autoWaterfall.checked = state.autoWaterfall;
  elements.projectName.value = project.name;
  elements.aiPrompt.value = project.prompt || "";
  elements.projectInput.value = project.input || "";
  renderPromptBreakdown();
  renderAiPlan();
  renderFileSuggestions();
  renderWaterfallPanel();

  const artifacts = project.artifacts.slice(0, 8);
  elements.projectArtifacts.replaceChildren(...artifacts.map((artifact) => {
    const item = document.createElement("li");
    item.className = artifact.status === "ok" ? "ok-item" : "error-item";
    const title = document.createElement("strong");
    title.textContent = artifact.toolName;
    const meta = document.createElement("span");
    meta.textContent = `${artifact.runMode} · ${artifact.outputType} · panel ${Number(artifact.panelIndex) + 1 || "n/a"}`;
    const pre = document.createElement("pre");
    pre.textContent = artifact.output.slice(0, 420);
    item.append(title, meta, pre);
    return item;
  }));
  if (!artifacts.length) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "No project artifacts yet. Run + publish a tool, animate an AI plan, or run a project workflow.";
    elements.projectArtifacts.append(empty);
  }

  const events = project.events.slice(0, 10);
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
  syncProjectInput();
  syncModeToProject();
  const data = {
    containerName: state.containerName,
    activeProjectId: state.activeProjectId,
    mode: state.mode,
    autoWaterfall: state.autoWaterfall,
    projects: state.projects,
    layout: state.layout,
    panels: state.panels,
    uploadedFiles: state.uploadedFiles,
    fileAnalysis: state.fileAnalysis,
    subscriptionStatus: state.subscriptionStatus,
    userProfile: state.userProfile,
    sessionTheme: state.sessionTheme,
    savedAt: new Date().toISOString(),
    version: PROJECT_FOUNDATION_VERSION
  };
  localStorage.setItem(storageKey, JSON.stringify(data));
  elements.status.textContent = "AI project foundation workspace saved in this browser.";
}

function restoreWorkspace() {
  const raw = localStorage.getItem(storageKey) || localStorage.getItem(projectStorageKey) || localStorage.getItem(legacyStorageKey);
  if (!raw) {
    elements.status.textContent = "No saved workspace found.";
    return;
  }
  try {
    const saved = JSON.parse(raw);
    state.containerName = saved.containerName || state.containerName;
    state.mode = saved.mode || saved.projects?.[0]?.mode || WORKSPACE_MODES.MANUAL;
    state.autoWaterfall = typeof saved.autoWaterfall === "boolean" ? saved.autoWaterfall : true;
    state.subscriptionStatus = saved.subscriptionStatus || SUBSCRIPTION_ACCESS.FREE;
    state.userProfile = saved.userProfile || createDefaultUserProfile();
    state.layout = saved.layout || "2x2";
    state.projects = Array.isArray(saved.projects) && saved.projects.length ? saved.projects : createFoundationState().projects;
    state.projects = state.projects.map((project) => ({
      ...createProject(project.name || "Restored Project"),
      ...project,
      mode: project.mode || state.mode,
      artifacts: Array.isArray(project.artifacts) ? project.artifacts : [],
      events: Array.isArray(project.events) ? project.events : [],
      workflows: Array.isArray(project.workflows) ? project.workflows : [],
      waterfallQueue: Array.isArray(project.waterfallQueue) ? project.waterfallQueue : [],
      compiler: project.compiler || project.plan?.compiler || null
    }));
    state.activeProjectId = saved.activeProjectId || state.projects[0].id;
    state.panels = Array.isArray(saved.panels)
      ? saved.panels.map((entry) => entry ? { ...entry, projectId: entry.projectId || state.activeProjectId } : null)
      : [];
    state.uploadedFiles = Array.isArray(saved.uploadedFiles) ? saved.uploadedFiles : activeProject().uploadedFiles || [];
    state.fileAnalysis = saved.fileAnalysis || activeProject().fileAnalysis || null;
    state.guidedToolSuggestions = state.fileAnalysis?.recommendations || [];
    elements.layout.value = state.layout;
    setActiveProject(state.activeProjectId);
    renderWorkspace();
    renderProjectConsole();
renderWaterfallPanel();
    applySessionTheme();
  } catch (error) {
    elements.status.textContent = "Saved workspace could not be restored.";
  }
}

function clearWorkspace() {
  const { count } = parseLayout(state.layout);
  state.panels = Array.from({ length: count }, () => null);
  state.panelFx = {};
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
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
renderWaterfallPanel();
}

function createNewProject() {
  syncModeToProject();
  const project = createProject(`Project ${state.projects.length + 1}`);
  project.mode = state.mode;
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
renderWaterfallPanel();
  renderWorkspace();
  renderResults();
}

function syncProjectInput() {
  const project = activeProject();
  project.input = elements.projectInput.value;
  project.prompt = elements.aiPrompt.value;
}

function generateAiProject() {
  syncModeToProject();
  const project = activeProject();
  state.mode = WORKSPACE_MODES.AI;
  elements.workspaceMode.value = WORKSPACE_MODES.AI;
  project.mode = WORKSPACE_MODES.AI;
  project.prompt = elements.aiPrompt.value.trim() || "Build a useful project from compatible free tools.";
  const plan = generateAiProjectPlan({ prompt: project.prompt, tools, maxPanels: 16 });
  project.plan = plan;
  project.waterfallQueue = buildWaterfallQueueFromPlan(plan, { maxTasks: 64 });
  project.compiler = plan.compiler;
  project.name = plan.projectTitle || project.name;
  project.input = elements.projectInput.value.trim() || plan.starterPayload || project.prompt;
  state.layout = plan.recommendedLayout;
  elements.layout.value = state.layout;
  const { count } = parseLayout(state.layout);
  const entries = createPanelEntriesFromPlan(plan, project.id);
  state.panels = Array.from({ length: count }, (_, index) => entries[index] || null);
  state.panelFx = {};
  appendProjectEvent(
    project,
    `Prompt compiler split the goal into ${plan.compiler.taskParts.length} task part${plan.compiler.taskParts.length === 1 ? "" : "s"}, ${plan.compiler.requiredCapabilities.length} capability group${plan.compiler.requiredCapabilities.length === 1 ? "" : "s"}, and ${plan.steps.length} compatible UI node${plan.steps.length === 1 ? "" : "s"}.`,
    "success"
  );
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
  renderResults();
  renderWaterfallPanel();
}


async function animateAiProject() {
  syncModeToProject();
  syncProjectInput();
  const project = activeProject();
  if (project.mode !== WORKSPACE_MODES.AI || !project.plan) generateAiProject();
  const active = activeProject();
  const plan = active.plan;
  if (!plan?.steps?.length) return;
  let payload = active.input || plan.starterPayload || plan.prompt || "";
  let previousTool = null;
  let hadError = false;
  plan.status = "running";
  state.waterfallRunning = true;
  state.waterfallPaused = false;
  ensureWaterfallQueue(active).forEach((task) => {
    task.status = task.status === "revised" ? "revised" : "queued";
  });
  appendProjectEvent(active, "AI animation started. Panels and the waterfall queue will light up as each tool node works.", "info");
  renderWaterfallPanel();

  for (const step of plan.steps) {
    await waitIfPaused();
    setWaterfallTaskStatus(active, step.id, "running");
    state.activeWaterfallTaskId = ensureWaterfallQueue(active).find((task) => task.parentStepId === step.id)?.id || "";
    const panelIndex = step.panelIndex;
    const entry = state.panels[panelIndex];
    const tool = toolsById.get(step.toolId);
    if (!entry || !tool) continue;
    entry.aiStepStatus = "running";
    state.panelFx[panelIndex] = "running";
    updatePlanStepStatus(active, step.id, "running");
    renderWorkspace();
    renderProjectConsole();
renderWaterfallPanel();
    await sleep(420);

    if (previousTool && !canConnectTools(previousTool, tool)) {
      const artifact = makeArtifact({
        projectId: active.id,
        panelIndex,
        tool,
        inputs: {},
        output: `Skipped: ${previousTool.name} output is not compatible with ${tool.name}.`,
        status: "error",
        runMode: "ai-animated",
        stepId: step.id
      });
      appendArtifact(active, artifact);
      entry.aiStepStatus = "error";
      state.panelFx[panelIndex] = "error";
      updatePlanStepStatus(active, step.id, "error", { outputPreview: artifact.output.slice(0, 160) });
      setWaterfallTaskStatus(active, step.id, "error");
      hadError = true;
      renderWorkspace();
      renderProjectConsole();
renderWaterfallPanel();
      await sleep(280);
      continue;
    }

    try {
      const chain = getPanelToolChain(entry, toolsById);
      for (const item of chain) {
        const selectedTool = item.tool;
        if (previousTool && !canConnectTools(previousTool, selectedTool)) {
          const artifact = makeArtifact({
            projectId: active.id,
            panelIndex,
            tool: selectedTool,
            inputs: {},
            output: `Skipped: ${previousTool.name} output is not compatible with ${selectedTool.name}.`,
            status: "error",
            runMode: item.order === 0 ? "ai-animated" : "ai-animated-nested",
            stepId: step.id
          });
          appendArtifact(active, artifact);
          hadError = true;
          continue;
        }
        const inputs = buildInputsFromPayload(selectedTool, payload);
        const output = runTool(selectedTool, inputs);
        const artifact = makeArtifact({ projectId: active.id, panelIndex, tool: selectedTool, inputs, output, runMode: item.order === 0 ? "ai-animated" : "ai-animated-nested", stepId: step.id });
        appendArtifact(active, artifact);
        payload = artifact.output;
        previousTool = selectedTool;
      }
      entry.aiStepStatus = hadError ? "error" : "done";
      state.panelFx[panelIndex] = hadError ? "error" : "done";
      updatePlanStepStatus(active, step.id, hadError ? "error" : "done", { outputPreview: String(payload).slice(0, 160) });
      setWaterfallTaskStatus(active, step.id, hadError ? "error" : "done");
      playSelectedSound("task");
    } catch (error) {
      const artifact = makeArtifact({
        projectId: active.id,
        panelIndex,
        tool,
        inputs: {},
        output: error instanceof Error ? error.message : String(error),
        status: "error",
        runMode: "ai-animated",
        stepId: step.id
      });
      appendArtifact(active, artifact);
      entry.aiStepStatus = "error";
      state.panelFx[panelIndex] = "error";
      updatePlanStepStatus(active, step.id, "error", { outputPreview: artifact.output.slice(0, 160) });
      setWaterfallTaskStatus(active, step.id, "error");
      hadError = true;
    }
    renderWorkspace();
    renderProjectConsole();
renderWaterfallPanel();
    await sleep(320);
  }

  plan.status = hadError ? "completed-with-errors" : "completed";
  state.waterfallRunning = false;
  state.activeWaterfallTaskId = "";
  playSelectedSound("completion");
  appendProjectEvent(active, hadError ? "AI animation finished with at least one blocked or failed step." : "AI animation finished successfully. Final artifacts are in the project bus.", hadError ? "error" : "success");
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
  renderWaterfallPanel();
}

function runSimultaneousWorkflow() {
  syncProjectInput();
  const project = activeProject();
  const artifacts = runProjectPanelsSimultaneously({ project, panelEntries: state.panels, toolsById });
  for (const artifact of artifacts) appendArtifact(project, artifact);
  appendProjectEvent(project, `Simultaneous run completed across ${artifacts.length} panel node${artifacts.length === 1 ? "" : "s"}.`, "success");
  renderProjectConsole();
renderWaterfallPanel();
}

function runQueuedWorkflow() {
  syncProjectInput();
  const project = activeProject();
  const artifacts = runProjectPanelsAsQueue({ project, panelEntries: state.panels, toolsById });
  for (const artifact of artifacts) appendArtifact(project, artifact);
  appendProjectEvent(project, `Queued waterfall completed across ${artifacts.length} panel node${artifacts.length === 1 ? "" : "s"}.`, artifacts.some((artifact) => artifact.status !== "ok") ? "error" : "success");
  renderProjectConsole();
renderWaterfallPanel();
}

function clearProjectData() {
  const project = activeProject();
  project.artifacts = [];
  project.events = [];
  if (project.plan?.steps) {
    for (const step of project.plan.steps) step.status = "planned";
  }
  if (Array.isArray(project.waterfallQueue)) {
    for (const task of project.waterfallQueue) task.status = "queued";
  }
  for (const entry of state.panels) {
    if (entry?.projectId === project.id) entry.aiStepStatus = entry.aiStepId ? "planned" : undefined;
  }
  state.panelFx = {};
  renderWorkspace();
  renderProjectConsole();
renderWaterfallPanel();
  renderWaterfallPanel();
}

function bindEvents() {
  elements.containerName.addEventListener("input", () => {
    state.containerName = elements.containerName.value.trim() || "Untitled Container";
  });
  elements.workspaceMode.addEventListener("change", () => {
    syncModeToProject();
    renderWorkspace();
    renderProjectConsole();
renderWaterfallPanel();
  });
  elements.autoWaterfall.addEventListener("change", () => {
    state.autoWaterfall = elements.autoWaterfall.checked;
    renderProjectConsole();
renderWaterfallPanel();
  });
  elements.subscriptionStatus.addEventListener("change", () => {
    state.subscriptionStatus = elements.subscriptionStatus.value;
    renderBasedProjectSelector();
  });
  elements.openToolSelector.addEventListener("click", () => openToolSelector(TOOL_SELECTOR_TABS.CHOOSE_OWN));
  elements.openToolSelectorInline.addEventListener("click", () => openToolSelector(state.subscriptionStatus === SUBSCRIPTION_ACCESS.PAID ? TOOL_SELECTOR_TABS.BASED_ON_PROJECT : TOOL_SELECTOR_TABS.CHOOSE_OWN));
  elements.closeToolSelector.addEventListener("click", closeToolSelector);
  elements.selectorTabChooseOwn.addEventListener("click", () => setSelectorTab(TOOL_SELECTOR_TABS.CHOOSE_OWN));
  elements.selectorTabBasedProject.addEventListener("click", () => setSelectorTab(TOOL_SELECTOR_TABS.BASED_ON_PROJECT));
  elements.selectorSearch.addEventListener("input", () => {
    state.selectorQuery = elements.selectorSearch.value.trim();
    renderToolSelectorOwnResults();
  });
  elements.selectorCategory.addEventListener("change", () => {
    state.selectorCategory = elements.selectorCategory.value;
    renderToolSelectorOwnResults();
  });
  elements.continueProjectFinder.addEventListener("click", continueProjectFinder);
  elements.createGuidedProject.addEventListener("click", createGuidedProjectFromSelector);
  elements.startWaterfall.addEventListener("click", startGuidedWaterfall);
  elements.pauseWaterfall.addEventListener("click", pauseGuidedWaterfall);
  elements.applyWaterfallRepair.addEventListener("click", applyWaterfallRepair);
  elements.saveProfileTheme.addEventListener("click", saveProfileAndRegenerateTheme);
  elements.previewSound.addEventListener("click", () => playSelectedSound("completion"));
  elements.soundCategory.addEventListener("change", () => {
    syncSoundProfileFromControls();
    renderSoundSubcategoryOptions();
    renderSpecificSoundOptions();
  });
  elements.soundSubcategory.addEventListener("change", () => {
    syncSoundProfileFromControls();
    renderSpecificSoundOptions();
  });
  elements.soundMode.addEventListener("change", syncSoundProfileFromControls);
  elements.specificSound.addEventListener("change", syncSoundProfileFromControls);
  elements.projectSelect.addEventListener("change", () => setActiveProject(elements.projectSelect.value));
  elements.projectName.addEventListener("change", renameActiveProject);
  elements.renameProject.addEventListener("click", renameActiveProject);
  elements.createProject.addEventListener("click", createNewProject);
  elements.aiPrompt.addEventListener("input", syncProjectInput);
  elements.generateAiProject.addEventListener("click", generateAiProject);
  elements.animateAiProject.addEventListener("click", animateAiProject);
  elements.fileUpload.addEventListener("change", () => {
    state.pendingUploadFiles = Array.from(elements.fileUpload.files || []);
    if (state.pendingUploadFiles.length) renderFileConfirmModal(state.pendingUploadFiles);
  });
  elements.confirmFilesYes.addEventListener("click", confirmUploadedFiles);
  elements.confirmFilesNo.addEventListener("click", rejectUploadedFiles);
  elements.clearUploadedFiles.addEventListener("click", clearUploadedFiles);
  elements.useFileSuggestedTools.addEventListener("click", applyFileSuggestedTools);
  elements.projectTemplateSearch.addEventListener("input", () => {
    state.templateQuery = elements.projectTemplateSearch.value.trim();
    renderProjectTemplates();
  });
  elements.projectTemplateComplexity.addEventListener("change", () => {
    state.templateComplexity = elements.projectTemplateComplexity.value;
    renderProjectTemplates();
  });
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
renderWaterfallPanel();
  });
  elements.save.addEventListener("click", saveWorkspace);
  elements.restore.addEventListener("click", restoreWorkspace);
  elements.clear.addEventListener("click", clearWorkspace);
  elements.random.addEventListener("click", randomTools);
}

buildCategories();
buildSelectorCategories();
buildSoundSelectors();
applySessionTheme();
buildProjectTemplateFilters();
buildLayoutOptions();
buildModeOptions();
renderProjectOptions();
bindEvents();
renderProjectTemplates();
renderDemandRankings();
renderResults();
renderWorkspace();
renderProjectConsole();
renderWaterfallPanel();
