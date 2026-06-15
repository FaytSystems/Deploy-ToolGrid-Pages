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
import { engineNames, renderTool, runTool } from "./tool-engines.js";
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
import {
  WATERFALL_SCHEDULER_VERSION,
  buildExecutionBatches,
  buildTaskDependencyGraph,
  canRunPaidMultitask,
  getRecommendedParallelism,
  summarizeSchedule
} from "./waterfall-scheduler.js";
import {
  PROGRESS_METER_VERSION,
  buildProgressSnapshot
} from "./progress-meter.js";
import {
  PROJECT_OPERATING_SYSTEM_VERSION,
  PROJECT_OS_UPGRADE_REGISTRY,
  buildToolGenomeIndex,
  createAnalyticsEvent,
  createProjectOperatingSystemSnapshot,
  matchIndustryPacks,
  updateAnalyticsDemandModel
} from "./project-operating-system.js";
import {
  COLAB_FOUNDATION_VERSION,
  COLAB_PROVIDER_PLANS,
  COLAB_SECURITY_CHECKLIST,
  buildCloudConnectorPlan,
  createDefaultCollabState,
  createInvite,
  createShareSpace,
  summarizeProviderCost
} from "./colab-foundation.js";
import {
  IN_HOUSE_TOOLS_VERSION,
  IN_HOUSE_TOOL_RECORDS,
  buildInHouseCompatibilityReport,
  buildInHouseWorkflowSuggestion,
  searchInHouseTools,
  verifyInHouseToolSuite
} from "./in-house-tools.js";

import {
  MASSIVE_TOOL_FACTORY_RECORDS,
  MASSIVE_TOOL_FACTORY_VERSION,
  buildMassiveToolFactorySummary,
  verifyMassiveToolFactorySuite
} from "./massive-tool-factory.js";

import {
  WEBCAM_EXPLORER_TOOL,
  WEBCAM_EXPLORER_VERSION,
  WEBCAM_CATALOG,
  WEBCAM_MAX_UI_OUTPUTS,
  WEBCAM_PROVIDER_NOTES,
  buildWebcamGridPlan,
  searchWebcams,
  verifyWebcamCatalog
} from "./webcam-explorer.js";
import {
  FACTCHECKER_MAX_CELLS,
  FACTCHECKER_SOURCE_POLICIES,
  FACTCHECKER_TOOL,
  FACTCHECKER_VERSION,
  buildFactcheckerSearchPlan,
  verifyFactcheckerPlan
} from "./factchecker-tool.js";
import {
  RGB_EFFECT_TYPES,
  RGB_GENERATOR_TOOL,
  THEME_PRESET_TEMPLATES,
  THEME_STUDIO_TOOL,
  THEME_SYSTEM_VERSION,
  applyThemeToDocument,
  buildCssVariables,
  buildThemeFromSettings,
  buildThemeStudioSummary,
  createDefaultThemeProfile,
  randomizeTheme,
  rotateThemeForSignin,
  verifyThemeStudioConfig
} from "./theme-system.js";
import {
  RGB_MOTION_EFFECTS,
  RGB_MOTION_MAX_LAYERS,
  RGB_MOTION_SHAPES,
  RGB_MOTION_STUDIO_TOOL,
  RGB_MOTION_STUDIO_VERSION,
  buildRgbMotionProject,
  buildRgbMotionSettings,
  createDefaultRgbMotionSettings,
  searchRgbMotionEffects,
  verifyRgbMotionStudioConfig
} from "./rgb-motion-studio.js";
import {
  PRICE_COMPARISON_TOOL,
  SALE_FINDER_TOOL,
  BUDGET_PRODUCT_MATCHER_TOOL,
  PRICE_COMPARISON_VERSION,
  verifyPriceComparisonConfig
} from "./price-comparison-tool.js";
import {
  AUDIO_VISUALIZER_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_VERSION,
  AUDIO_VISUALIZER_MAX_VARIATIONS,
  AUDIO_VISUALIZER_SHAPES,
  AUDIO_VISUALIZER_LIGHTING_PRESETS,
  buildAudioVisualizerProject,
  buildAudioVisualizerSettings,
  createDefaultAudioVisualizerSettings,
  verifyAudioVisualizerStudioConfig
} from "./audio-visualizer-studio.js";

import {
  FUNCTIONAL_TOOL_RECORDS,
  FUNCTIONAL_TOOLS_VERSION,
  buildFunctionalToolsSummary,
  verifyFunctionalToolsSuite
} from "./functional-tools.js";

import {
  MINI_APP_SUITE_VERSION,
  MINI_APP_TOOL_RECORDS,
  buildMiniAppSummary,
  verifyMiniAppSuite
} from "./mini-apps.js";

import {
  FRONTIER_TOOL_EXPANSION_VERSION,
  FRONTIER_TOOL_RECORDS,
  buildFrontierToolSummary,
  verifyFrontierToolSuite
} from "./frontier-tool-expansion.js";

import {
  NEXT_FRONTIER_TOOL_EXPANSION_VERSION,
  NEXT_FRONTIER_TOOL_RECORDS,
  buildNextFrontierToolSummary,
  verifyNextFrontierToolSuite
} from "./next-frontier-tool-expansion.js";

import {
  SKELETON_TOOL_VERSION,
  buildSkeletonCompatibilityReport,
  buildSkeletonTools,
  pickSkeletonToolsForPrompt,
  verifySkeletonToolSuite
} from "./skeleton-tools.js";

const foundation = createFoundationState();
const baseRuntimeTools = Object.freeze([...tools, ...IN_HOUSE_TOOL_RECORDS, ...MASSIVE_TOOL_FACTORY_RECORDS, ...FUNCTIONAL_TOOL_RECORDS, ...MINI_APP_TOOL_RECORDS, ...FRONTIER_TOOL_RECORDS, ...NEXT_FRONTIER_TOOL_RECORDS, WEBCAM_EXPLORER_TOOL, FACTCHECKER_TOOL, THEME_STUDIO_TOOL, RGB_GENERATOR_TOOL, RGB_MOTION_STUDIO_TOOL, AUDIO_VISUALIZER_STUDIO_TOOL, PRICE_COMPARISON_TOOL, SALE_FINDER_TOOL, BUDGET_PRODUCT_MATCHER_TOOL]);
const SKELETON_TOOL_RECORDS = Object.freeze(buildSkeletonTools(baseRuntimeTools));
const runtimeTools = Object.freeze([...baseRuntimeTools, ...SKELETON_TOOL_RECORDS]);
const skeletonCompatibilityReport = buildSkeletonCompatibilityReport(SKELETON_TOOL_RECORDS, { limit: 12 });
const skeletonVerification = verifySkeletonToolSuite(SKELETON_TOOL_RECORDS, baseRuntimeTools.length);
const priceComparisonVerification = verifyPriceComparisonConfig();
const runtimeCategoryCounts = runtimeTools.reduce((counts, tool) => {
  counts[tool.category] = (counts[tool.category] || 0) + 1;
  return counts;
}, {});
const toolsById = new Map(runtimeTools.map((tool) => [tool.id, tool]));
const toolGenomeIndex = buildToolGenomeIndex(runtimeTools);
const inHouseCompatibilityReport = buildInHouseCompatibilityReport({ limit: 12 });
const inHouseVerification = verifyInHouseToolSuite();
const massiveToolFactorySummary = buildMassiveToolFactorySummary();
const massiveToolFactoryVerification = verifyMassiveToolFactorySuite({ knownEngines: engineNames });
const functionalToolsSummary = buildFunctionalToolsSummary();
const functionalToolsVerification = verifyFunctionalToolsSuite();
const miniAppSummary = buildMiniAppSummary();
const miniAppVerification = verifyMiniAppSuite({ knownEngines: engineNames });
const frontierToolSummary = buildFrontierToolSummary();
const frontierToolVerification = verifyFrontierToolSuite({ knownEngines: engineNames });
const nextFrontierToolSummary = buildNextFrontierToolSummary();
const nextFrontierToolVerification = verifyNextFrontierToolSuite({ knownEngines: engineNames, existingTools: [...tools, ...IN_HOUSE_TOOL_RECORDS, ...MASSIVE_TOOL_FACTORY_RECORDS, ...FUNCTIONAL_TOOL_RECORDS, ...MINI_APP_TOOL_RECORDS, ...FRONTIER_TOOL_RECORDS, WEBCAM_EXPLORER_TOOL, FACTCHECKER_TOOL, THEME_STUDIO_TOOL, RGB_GENERATOR_TOOL, RGB_MOTION_STUDIO_TOOL, AUDIO_VISUALIZER_STUDIO_TOOL, PRICE_COMPARISON_TOOL, SALE_FINDER_TOOL, BUDGET_PRODUCT_MATCHER_TOOL] });

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
  paidMultitaskEnabled: false,
  paidMultitaskParallelism: 3,
  lastScheduleSummary: "",
  userProfile: createDefaultUserProfile(),
  sessionTheme: null,
  analyticsEvents: [],
  progressSnapshot: null,
  mainView: "workspace",
  colab: createDefaultCollabState(),
  webcamQuery: "nature beach city scenic",
  webcamCount: 16,
  webcamProvider: "all",
  webcamCategory: "all",
  factcheckerPhrase: "I have a dream",
  factcheckerPerson: "Martin Luther King Jr.",
  factcheckerDateFrom: "",
  factcheckerDateTo: "",
  factcheckerMode: "quote-verification",
  factcheckerCount: 16,
  factcheckerIncludeSites: "",
  factcheckerExcludeSites: "",
  factcheckerSocialTargets: "",
  rgbMotion: createDefaultRgbMotionSettings(),
  rgbMotionQuery: "dog chasing tail animated outline video overlay",
  audioVisualizer: createDefaultAudioVisualizerSettings()
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
  enablePaidMultitask: document.querySelector("#enable-paid-multitask"),
  multitaskParallelism: document.querySelector("#multitask-parallelism"),
  multitaskStatus: document.querySelector("#multitask-status"),
  applyWaterfallRepair: document.querySelector("#apply-waterfall-repair"),
  profileTopics: document.querySelector("#profile-topics"),
  saveProfileTheme: document.querySelector("#save-profile-theme"),
  themePreview: document.querySelector("#theme-preview"),
  soundMode: document.querySelector("#sound-mode"),
  soundCategory: document.querySelector("#sound-category"),
  soundSubcategory: document.querySelector("#sound-subcategory"),
  specificSound: document.querySelector("#specific-sound"),
  previewSound: document.querySelector("#preview-sound"),
  mainTabWorkspace: document.querySelector("#main-tab-workspace"),
  mainTabColab: document.querySelector("#main-tab-colab"),
  workspaceView: document.querySelector("#workspace-view"),
  colabView: document.querySelector("#colab-view"),
  openColab: document.querySelector("#open-colab"),
  colabVersion: document.querySelector("#colab-version"),
  colabProviderSelect: document.querySelector("#colab-provider-select"),
  colabProviderCards: document.querySelector("#colab-provider-cards"),
  colabSetupTitle: document.querySelector("#colab-setup-title"),
  colabCostNote: document.querySelector("#colab-cost-note"),
  colabSetupSteps: document.querySelector("#colab-setup-steps"),
  colabSetupWarning: document.querySelector("#colab-setup-warning"),
  colabBuildSetupPlan: document.querySelector("#colab-build-setup-plan"),
  colabShareName: document.querySelector("#colab-share-name"),
  colabOwnerEmail: document.querySelector("#colab-owner-email"),
  colabCreateShare: document.querySelector("#colab-create-share"),
  colabShareSpaces: document.querySelector("#colab-share-spaces"),
  colabInviteEmail: document.querySelector("#colab-invite-email"),
  colabInviteRole: document.querySelector("#colab-invite-role"),
  colabInviteMessage: document.querySelector("#colab-invite-message"),
  colabCreateInvite: document.querySelector("#colab-create-invite"),
  colabInvites: document.querySelector("#colab-invites"),
  colabSecurityChecklist: document.querySelector("#colab-security-checklist"),
  projectOsStats: document.querySelector("#project-os-stats"),
  projectOsUpgrades: document.querySelector("#project-os-upgrades"),
  toolGenomePreview: document.querySelector("#tool-genome-preview"),
  projectGraphPreview: document.querySelector("#project-graph-preview"),
  industryPacksPreview: document.querySelector("#industry-packs-preview"),
  approvalCheckpointsPreview: document.querySelector("#approval-checkpoints-preview"),
  workflowRecorderPreview: document.querySelector("#workflow-recorder-preview"),
  analyticsLoopPreview: document.querySelector("#analytics-loop-preview"),
  inHouseToolStats: document.querySelector("#inhouse-tool-stats"),
  inHouseWorkflowPreview: document.querySelector("#inhouse-workflow-preview"),
  inHouseCompatibilityPreview: document.querySelector("#inhouse-compatibility-preview"),
  inHouseSearchTagsPreview: document.querySelector("#inhouse-search-tags-preview"),
  inHouseSignalPreview: document.querySelector("#inhouse-signal-preview"),
  webcamToolStats: document.querySelector("#webcam-tool-stats"),
  webcamSearch: document.querySelector("#webcam-search"),
  webcamCount: document.querySelector("#webcam-count"),
  webcamProvider: document.querySelector("#webcam-provider"),
  webcamCategory: document.querySelector("#webcam-category"),
  webcamResults: document.querySelector("#webcam-results"),
  webcamOpenTool: document.querySelector("#webcam-open-tool"),
  webcamLoadWall: document.querySelector("#webcam-load-wall"),
  factcheckerToolStats: document.querySelector("#factchecker-tool-stats"),
  factcheckerPhrase: document.querySelector("#factchecker-phrase"),
  factcheckerPerson: document.querySelector("#factchecker-person"),
  factcheckerDateFrom: document.querySelector("#factchecker-date-from"),
  factcheckerDateTo: document.querySelector("#factchecker-date-to"),
  factcheckerMode: document.querySelector("#factchecker-mode"),
  factcheckerCount: document.querySelector("#factchecker-count"),
  factcheckerIncludeSites: document.querySelector("#factchecker-include-sites"),
  factcheckerExcludeSites: document.querySelector("#factchecker-exclude-sites"),
  factcheckerSocialTargets: document.querySelector("#factchecker-social-targets"),
  factcheckerResults: document.querySelector("#factchecker-results"),
  factcheckerOpenTool: document.querySelector("#factchecker-open-tool"),
  factcheckerLoadGrid: document.querySelector("#factchecker-load-grid"),
  paidThemeStudioStats: document.querySelector("#paid-theme-studio-stats"),
  paidThemePreset: document.querySelector("#paid-theme-preset"),
  paidThemeBackground: document.querySelector("#paid-theme-background"),
  paidThemeBox: document.querySelector("#paid-theme-box"),
  paidThemeCell: document.querySelector("#paid-theme-cell"),
  paidThemeActiveCell: document.querySelector("#paid-theme-active-cell"),
  paidThemeGlow: document.querySelector("#paid-theme-glow"),
  paidThemeEffect: document.querySelector("#paid-theme-effect"),
  paidThemeSpeed: document.querySelector("#paid-theme-speed"),
  paidThemeRandomSignin: document.querySelector("#paid-theme-random-signin"),
  paidThemeAlternateLogons: document.querySelector("#paid-theme-alternate-logons"),
  paidThemePreview: document.querySelector("#paid-theme-preview"),
  paidThemeRandomize: document.querySelector("#paid-theme-randomize"),
  paidThemeSave: document.querySelector("#paid-theme-save"),
  paidThemeOpenTool: document.querySelector("#paid-theme-open-tool"),
  paidThemeOpenRgb: document.querySelector("#paid-theme-open-rgb"),
  rgbMotionStats: document.querySelector("#rgb-motion-stats"),
  rgbMotionShape: document.querySelector("#rgb-motion-shape"),
  rgbMotionOutlineEffect: document.querySelector("#rgb-motion-outline-effect"),
  rgbMotionFillEffect: document.querySelector("#rgb-motion-fill-effect"),
  rgbMotionOutlineColor: document.querySelector("#rgb-motion-outline-color"),
  rgbMotionFillColor: document.querySelector("#rgb-motion-fill-color"),
  rgbMotionSecondaryColor: document.querySelector("#rgb-motion-secondary-color"),
  rgbMotionLayerCount: document.querySelector("#rgb-motion-layer-count"),
  rgbMotionSpeed: document.querySelector("#rgb-motion-speed"),
  rgbMotionPreview: document.querySelector("#rgb-motion-preview"),
  rgbMotionResults: document.querySelector("#rgb-motion-results"),
  rgbMotionOpenTool: document.querySelector("#rgb-motion-open-tool"),
  rgbMotionFillWorkspace: document.querySelector("#rgb-motion-fill-workspace"),
  rgbMotionRandomize: document.querySelector("#rgb-motion-randomize"),
  audioVisualizerStats: document.querySelector("#audio-visualizer-stats"),
  audioVisualizerAudioUrl: document.querySelector("#audio-visualizer-audio-url"),
  audioVisualizerPrompt: document.querySelector("#audio-visualizer-prompt"),
  audioVisualizerShape: document.querySelector("#audio-visualizer-shape"),
  audioVisualizerLighting: document.querySelector("#audio-visualizer-lighting"),
  audioVisualizerCount: document.querySelector("#audio-visualizer-count"),
  audioVisualizerPreview: document.querySelector("#audio-visualizer-preview"),
  audioVisualizerVariations: document.querySelector("#audio-visualizer-variations"),
  audioVisualizerQueue: document.querySelector("#audio-visualizer-queue"),
  audioVisualizerGenerate: document.querySelector("#audio-visualizer-generate"),
  audioVisualizerOpenTool: document.querySelector("#audio-visualizer-open-tool"),
  audioVisualizerFillWorkspace: document.querySelector("#audio-visualizer-fill-workspace"),
  audioVisualizerMakeMore: document.querySelector("#audio-visualizer-make-more"),
  skeletonToolStats: document.querySelector("#skeleton-tool-stats"),
  skeletonSearch: document.querySelector("#skeleton-search"),
  skeletonLimit: document.querySelector("#skeleton-limit"),
  skeletonResults: document.querySelector("#skeleton-results"),
  skeletonLoadGrid: document.querySelector("#skeleton-load-grid"),
  totalProgressPercent: document.querySelector("#total-progress-percent"),
  totalProgressEta: document.querySelector("#total-progress-eta"),
  totalProgressBar: document.querySelector("#total-progress-bar"),
  totalProgressSummary: document.querySelector("#total-progress-summary"),
  cellProgressGrid: document.querySelector("#cell-progress-grid"),
  nestedProgressGrid: document.querySelector("#nested-progress-grid"),
  nestedProgressSummary: document.querySelector("#nested-progress-summary")
};

const storageKey = "toolgrid-2500-rgb-motion-studio-foundation-v1";
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
  option.textContent = `All categories (${runtimeTools.length})`;
  elements.category.append(option);
  for (const [category, count] of Object.entries(runtimeCategoryCounts).sort(([a], [b]) => a.localeCompare(b))) {
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
  option.textContent = `All categories (${runtimeTools.length})`;
  elements.selectorCategory.append(option);
  for (const [category, count] of Object.entries(runtimeCategoryCounts).sort(([a], [b]) => a.localeCompare(b))) {
    const categoryOption = document.createElement("option");
    categoryOption.value = category;
    categoryOption.textContent = `${category} (${count})`;
    elements.selectorCategory.append(categoryOption);
  }
}

function uniqueValues(items, selector) {
  return [...new Set(items.map(selector).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function setMainView(view) {
  state.mainView = view === "colab" ? "colab" : "workspace";
  const colabActive = state.mainView === "colab";
  elements.workspaceView?.classList.toggle("hidden", colabActive);
  elements.colabView?.classList.toggle("hidden", !colabActive);
  elements.mainTabWorkspace?.classList.toggle("active", !colabActive);
  elements.mainTabColab?.classList.toggle("active", colabActive);
  if (colabActive) renderColabPanel();
}

function buildColabProviderOptions() {
  if (!elements.colabProviderSelect) return;
  elements.colabProviderSelect.replaceChildren(...COLAB_PROVIDER_PLANS.map((provider) => {
    const option = document.createElement("option");
    option.value = provider.id;
    option.textContent = provider.name;
    return option;
  }));
  elements.colabProviderSelect.value = state.colab.activeProviderId;
}

function renderColabProviderCards() {
  if (!elements.colabProviderCards) return;
  const fragment = document.createDocumentFragment();
  for (const provider of COLAB_PROVIDER_PLANS) {
    const card = document.createElement("article");
    card.className = `colab-provider-card${provider.id === state.colab.activeProviderId ? " active" : ""}`;
    const title = document.createElement("h3");
    title.textContent = provider.name;
    const cost = document.createElement("p");
    cost.textContent = provider.developerCost;
    const userCost = document.createElement("p");
    userCost.className = "mini-note";
    userCost.textContent = provider.userCost;
    const caps = document.createElement("div");
    caps.className = "colab-chip-row";
    for (const capability of provider.capabilities.slice(0, 6)) {
      const chip = document.createElement("span");
      chip.className = "category-pill";
      chip.textContent = capability;
      caps.append(chip);
    }
    const use = document.createElement("button");
    use.type = "button";
    use.textContent = "Use this provider";
    use.addEventListener("click", () => {
      state.colab.activeProviderId = provider.id;
      elements.colabProviderSelect.value = provider.id;
      updateColabSetupPlan();
      renderColabPanel();
    });
    card.append(title, cost, userCost, caps, use);
    fragment.append(card);
  }
  elements.colabProviderCards.replaceChildren(fragment);
}

function updateColabSetupPlan() {
  const project = activeProject();
  const providerId = elements.colabProviderSelect?.value || state.colab.activeProviderId;
  state.colab.activeProviderId = providerId;
  state.colab.setupPlan = buildCloudConnectorPlan({ providerId, projectName: project?.name || "ToolGrid Project" });
}

function renderColabSetupPlan() {
  if (!elements.colabSetupTitle) return;
  const plan = state.colab.setupPlan || buildCloudConnectorPlan({ providerId: state.colab.activeProviderId, projectName: activeProject()?.name });
  elements.colabSetupTitle.textContent = `${plan.providerName} setup`;
  elements.colabCostNote.textContent = summarizeProviderCost(plan.providerId);
  elements.colabSetupSteps.replaceChildren(...plan.steps.map((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    return item;
  }));
  elements.colabSetupWarning.textContent = plan.warning;
}

function renderColabShareSpaces() {
  if (!elements.colabShareSpaces) return;
  const spaces = state.colab.shareSpaces || [];
  if (!spaces.length) {
    elements.colabShareSpaces.innerHTML = '<p class="mini-note">No shared project spaces yet. Create one from the active ToolGrid project.</p>';
    return;
  }
  const fragment = document.createDocumentFragment();
  for (const space of spaces.slice(0, 8)) {
    const card = document.createElement("article");
    card.className = `colab-mini-card${space.id === state.colab.activeShareSpaceId ? " active" : ""}`;
    const title = document.createElement("strong");
    title.textContent = space.name;
    const meta = document.createElement("span");
    meta.textContent = `${space.providerName} · ${space.members.length} member${space.members.length === 1 ? "" : "s"} · folder ${space.folderSlug}`;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Set active";
    button.addEventListener("click", () => {
      state.colab.activeShareSpaceId = space.id;
      renderColabShareSpaces();
      renderColabInvites();
    });
    card.append(title, meta, button);
    fragment.append(card);
  }
  elements.colabShareSpaces.replaceChildren(fragment);
}

function renderColabInvites() {
  if (!elements.colabInvites) return;
  const invites = state.colab.invites || [];
  if (!invites.length) {
    elements.colabInvites.innerHTML = '<p class="mini-note">No invite links created yet. Invite links are local placeholders until a backend is added.</p>';
    return;
  }
  const fragment = document.createDocumentFragment();
  for (const invite of invites.slice(0, 8)) {
    const card = document.createElement("article");
    card.className = "colab-mini-card";
    const title = document.createElement("strong");
    title.textContent = `${invite.email} · ${invite.role}`;
    const link = document.createElement("code");
    link.textContent = invite.inviteUrl;
    const note = document.createElement("span");
    note.textContent = invite.message || `Invited to ${invite.projectName}`;
    card.append(title, note, link);
    fragment.append(card);
  }
  elements.colabInvites.replaceChildren(fragment);
}

function renderColabSecurityChecklist() {
  if (!elements.colabSecurityChecklist) return;
  elements.colabSecurityChecklist.replaceChildren(...COLAB_SECURITY_CHECKLIST.map((rule) => {
    const item = document.createElement("li");
    item.textContent = rule;
    return item;
  }));
}

function renderColabPanel() {
  if (!elements.colabView) return;
  elements.colabVersion.textContent = `COLAB foundation ${COLAB_FOUNDATION_VERSION} · cloud connectors are planned locally until OAuth/backend credentials are added.`;
  if (elements.colabShareName && !elements.colabShareName.value) elements.colabShareName.value = `${activeProject()?.name || "Project"} Colab`;
  if (elements.colabOwnerEmail && !elements.colabOwnerEmail.value) elements.colabOwnerEmail.value = "owner@example.com";
  buildColabProviderOptions();
  renderColabProviderCards();
  renderColabSetupPlan();
  renderColabShareSpaces();
  renderColabInvites();
  renderColabSecurityChecklist();
}

function createColabShareSpaceFromUi() {
  const project = activeProject();
  const ownerEmail = elements.colabOwnerEmail.value.trim() || "owner@example.com";
  const providerId = elements.colabProviderSelect.value || state.colab.activeProviderId;
  const shareSpace = createShareSpace({
    project,
    name: elements.colabShareName.value.trim() || `${project.name} Colab`,
    providerId,
    ownerEmail
  });
  state.colab.shareSpaces.unshift(shareSpace);
  state.colab.activeShareSpaceId = shareSpace.id;
  state.colab.activity.unshift({
    type: "share-space-created",
    message: `${shareSpace.name} created with ${shareSpace.providerName}.`,
    createdAt: new Date().toISOString()
  });
  appendProjectEvent(project, `COLAB share space created: ${shareSpace.name}.`, "success");
  renderColabPanel();
  renderProjectConsole();
}

function createColabInviteFromUi() {
  const activeSpace = state.colab.shareSpaces.find((space) => space.id === state.colab.activeShareSpaceId) || state.colab.shareSpaces[0];
  if (!activeSpace) {
    elements.colabInvites.innerHTML = '<p class="mini-note warning-note">Create a shared project space before inviting users.</p>';
    return;
  }
  try {
    const invite = createInvite({
      shareSpaceId: activeSpace.id,
      projectName: activeSpace.projectName,
      email: elements.colabInviteEmail.value,
      role: elements.colabInviteRole.value,
      message: elements.colabInviteMessage.value
    });
    state.colab.invites.unshift(invite);
    state.colab.activity.unshift({ type: "invite-created", message: `Invite created for ${invite.email}.`, createdAt: new Date().toISOString() });
    appendProjectEvent(activeProject(), `COLAB invite created for ${invite.email} as ${invite.role}.`, "success");
    elements.colabInviteEmail.value = "";
    elements.colabInviteMessage.value = "";
    renderColabPanel();
    renderProjectConsole();
  } catch (error) {
    elements.colabInvites.innerHTML = `<p class="mini-note warning-note">${error instanceof Error ? error.message : String(error)}</p>`;
  }
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
  if (tool.toolKind === "skeleton" && /skeleton|generic|reusable|template|framework|wide|any project|workflow pattern/.test(q)) score += 28;
  if (tool.premiumOnly && /paid|premium|theme|rgb|profile|color scheme|randomize|strobe|flash|glow/.test(q)) score += 24;
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
  return runtimeTools
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
    const analysis = analyzeFilePackage({ prompt: project.prompt, files: uploaded, tools: runtimeTools, limit: 16 });
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

function openTool(tool, panelIndex = Number(elements.targetPanel.value || 0), projectId = activeProject().id, initialInputs = {}) {
  const { count } = parseLayout(state.layout);
  const safeIndex = Math.min(Math.max(0, panelIndex), count - 1);
  state.panels[safeIndex] = {
    toolId: tool.id,
    projectId,
    openedAt: Date.now(),
    role: state.mode === WORKSPACE_MODES.AI ? "AI-assisted tool node" : "Manual tool node",
    aiStepStatus: state.mode === WORKSPACE_MODES.AI ? "added" : undefined,
    initialInputs
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

function pushAnalyticsEvent(type, metadata = {}, toolId = "") {
  state.analyticsEvents.push(createAnalyticsEvent({ type, project: activeProject(), toolId, metadata }));
  if (state.analyticsEvents.length > 250) state.analyticsEvents = state.analyticsEvents.slice(-250);
}

function renderProjectOsPanel() {
  if (!elements.projectOsStats) return;
  const project = activeProject();
  const snapshot = createProjectOperatingSystemSnapshot({
    tools: runtimeTools,
    project,
    queue: project.waterfallQueue || [],
    plan: project.plan,
    panelEntries: state.panels,
    prompt: elements.aiPrompt?.value || project.prompt || "",
    fileAnalysis: state.fileAnalysis || project.fileAnalysis,
    profile: state.userProfile
  });
  const analyticsModel = updateAnalyticsDemandModel({ events: state.analyticsEvents });
  elements.projectOsStats.innerHTML = `<strong>${PROJECT_OPERATING_SYSTEM_VERSION}</strong><span>${snapshot.genomeStats.toolCount.toLocaleString()} tool genomes · ${snapshot.genomeStats.indexedCapabilities.toLocaleString()} capabilities · ${snapshot.graphStats.nodeCount} graph tasks · ${snapshot.graphStats.readyCount} ready · ${snapshot.graphStats.waitingCount} waiting · ${snapshot.graphStats.approvalCount} approval checkpoints</span>`;

  const upgradeItems = PROJECT_OS_UPGRADE_REGISTRY.map((upgrade) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${upgrade.label}</strong><span>${upgrade.summary}</span>`;
    return item;
  });
  elements.projectOsUpgrades?.replaceChildren(...upgradeItems);

  const genomeSamples = Object.values(toolGenomeIndex.byId).slice(0, 6).map((genome) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${genome.name}</strong><span>${genome.accepts.slice(0, 3).join("/")} → ${genome.produces.join("/")} · ${genome.parallelSafe ? "parallel safe" : "needs sequence"}${genome.requiresApproval ? " · approval" : ""}</span>`;
    return item;
  });
  elements.toolGenomePreview?.replaceChildren(...genomeSamples);

  const graphText = [
    `${snapshot.graphStats.nodeCount} task nodes`,
    `${snapshot.graphStats.edgeCount} dependency edges`,
    `${snapshot.graphStats.parallelGroupCount} parallel-ready group${snapshot.graphStats.parallelGroupCount === 1 ? "" : "s"}`,
    snapshot.missingDetails.isReady ? "prompt ready" : `${snapshot.missingDetails.questionCount} clarification needed${snapshot.missingDetails.questionCount === 1 ? "" : "s"}`
  ];
  elements.projectGraphPreview.textContent = graphText.join(" · ");

  const packs = snapshot.industryPacks.length ? snapshot.industryPacks : matchIndustryPacks(project.prompt || elements.aiPrompt.value || "business workflow", { limit: 3 });
  const packItems = packs.slice(0, 4).map((pack) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${pack.name}</strong><span>${pack.outputs.slice(0, 4).join(" · ")}</span>`;
    return item;
  });
  if (!packItems.length) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "Industry pack suggestions appear after the prompt names a field, business, or subject.";
    packItems.push(empty);
  }
  elements.industryPacksPreview?.replaceChildren(...packItems);

  const checkpointItems = snapshot.approvalCheckpoints.slice(0, 6).map((checkpoint) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${checkpoint.label}</strong><span>${checkpoint.reason}</span>`;
    return item;
  });
  if (!checkpointItems.length) {
    const empty = document.createElement("li");
    empty.className = "empty-list-item";
    empty.textContent = "No sensitive approval checkpoint is required yet.";
    checkpointItems.push(empty);
  }
  elements.approvalCheckpointsPreview?.replaceChildren(...checkpointItems);

  elements.workflowRecorderPreview.textContent = `${snapshot.workflowSnapshot.name} · ${snapshot.workflowSnapshot.panelCount} panels · ${snapshot.workflowSnapshot.toolIds.length} tools · ${snapshot.artifactHistory.totalArtifacts} artifacts can be saved as a reusable workflow.`;
  elements.analyticsLoopPreview.textContent = `${analyticsModel.eventCount} local events · ${analyticsModel.searches} searches · ${analyticsModel.projectStarts} starts · ${analyticsModel.completions} completions · ${analyticsModel.repairs} repairs · completion rate ${(analyticsModel.completionRate * 100).toFixed(1)}%.`;
}


function renderInHouseToolsPanel() {
  if (!elements.inHouseToolStats) return;
  const project = activeProject();
  const prompt = elements.aiPrompt?.value.trim() || project.prompt || project.input || "business workflow with files, reports, emails, labels, and review steps";
  const workflow = buildInHouseWorkflowSuggestion({
    prompt,
    fileAnalysis: state.fileAnalysis || project.fileAnalysis,
    limit: 16,
    maxParallel: Number(state.paidMultitaskParallelism || 4)
  });
  const searched = searchInHouseTools(prompt, {
    fileAnalysis: state.fileAnalysis || project.fileAnalysis,
    limit: 8
  });

  elements.inHouseToolStats.innerHTML = `<strong>${IN_HOUSE_TOOLS_VERSION}</strong><span>${IN_HOUSE_TOOL_RECORDS.length} in-house tools · ${inHouseCompatibilityReport.matrix.linkCount.toLocaleString()} compatibility links · ${inHouseCompatibilityReport.matrix.parallelSafeLinks.toLocaleString()} paid-multitask safe links · verification ${inHouseVerification.ok ? "passed" : "needs attention"}</span>`;

  const workflowItems = workflow.selectedTools.slice(0, 8).map((tool, index) => {
    const task = workflow.tasks.find((item) => item.toolId === tool.id);
    const item = document.createElement("li");
    item.innerHTML = `<strong>${index + 1}. ${tool.name}</strong><span>${task?.signal || "queued"} · ${(tool.metadata?.accepts || []).slice(0, 3).join("/")} → ${(tool.metadata?.produces || []).slice(0, 3).join("/")}</span>`;
    return item;
  });
  elements.inHouseWorkflowPreview?.replaceChildren(...workflowItems);

  const compatibilityItems = inHouseCompatibilityReport.sampleLinks.slice(0, 8).map((link) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${link.fromToolName} → ${link.toToolName}</strong><span>${link.signal} · ${link.reason}</span>`;
    return item;
  });
  elements.inHouseCompatibilityPreview?.replaceChildren(...compatibilityItems);

  const tagItems = searched.map(({ tool, score, rank }) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>#${rank} ${tool.name}</strong><span>score ${score} · ${(tool.tags || []).slice(0, 10).join(" · ")}</span>`;
    return item;
  });
  elements.inHouseSearchTagsPreview?.replaceChildren(...tagItems);

  const signalItems = workflow.batches.slice(0, 8).map((batch) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>Batch ${batch.batchIndex + 1}: ${batch.mode}</strong><span>${batch.signal} · ${batch.tasks.map((task) => task.toolName).join(" + ")}</span>`;
    return item;
  });
  if (!signalItems.length) {
    const item = document.createElement("li");
    item.className = "empty-list-item";
    item.textContent = "In-house waterfall signals appear after a prompt or file package is available.";
    signalItems.push(item);
  }
  elements.inHouseSignalPreview?.replaceChildren(...signalItems);
}


function buildWebcamSelectOptions() {
  if (!elements.webcamProvider || !elements.webcamCategory) return;
  const providerOptions = [{ id: "all", name: "All safe providers" }, ...WEBCAM_PROVIDER_NOTES.map((provider) => ({ id: provider.id, name: provider.name }))];
  elements.webcamProvider.replaceChildren(...providerOptions.map((provider) => {
    const option = document.createElement("option");
    option.value = provider.id;
    option.textContent = provider.name;
    return option;
  }));
  const categories = ["all", ...new Set(WEBCAM_CATALOG.map((cam) => cam.category).sort())];
  elements.webcamCategory.replaceChildren(...categories.map((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category === "all" ? "All categories" : category;
    return option;
  }));
  elements.webcamProvider.value = state.webcamProvider;
  elements.webcamCategory.value = state.webcamCategory;
}

function renderWebcamExplorerPanel() {
  if (!elements.webcamToolStats) return;
  const verification = verifyWebcamCatalog();
  const plan = buildWebcamGridPlan({
    query: state.webcamQuery,
    count: state.webcamCount,
    provider: state.webcamProvider,
    category: state.webcamCategory
  });
  elements.webcamToolStats.innerHTML = `<strong>${WEBCAM_EXPLORER_VERSION}</strong><span>${WEBCAM_CATALOG.length} PG cam records · ${verification.stats.providerCount} providers · max ${WEBCAM_MAX_UI_OUTPUTS} UI outputs · ${plan.embedCount} embeddable in current result set · ${plan.linkOutCount} provider-page cards</span>`;
  if (elements.webcamSearch && elements.webcamSearch.value !== state.webcamQuery) elements.webcamSearch.value = state.webcamQuery;
  if (elements.webcamCount && String(elements.webcamCount.value) !== String(state.webcamCount)) elements.webcamCount.value = state.webcamCount;
  const fragment = document.createDocumentFragment();
  for (const cam of plan.selected.slice(0, Math.min(24, plan.selected.length))) {
    const card = document.createElement("article");
    card.className = "webcam-mini-card";
    const title = document.createElement("strong");
    title.textContent = cam.title;
    const meta = document.createElement("span");
    meta.textContent = `${cam.provider} · ${cam.region} · ${cam.category}`;
    const policy = document.createElement("small");
    policy.textContent = `PG · ${cam.embedPolicy} · ${cam.displayMode}`;
    const link = document.createElement("a");
    link.href = cam.pageUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open official source";
    card.append(title, meta, policy, link);
    fragment.append(card);
  }
  elements.webcamResults.replaceChildren(fragment);
}

function openWebcamExplorerTool() {
  openTool(WEBCAM_EXPLORER_TOOL);
  renderWebcamExplorerPanel();
}

function fillWorkspaceWithWebcamExplorer() {
  const project = activeProject();
  const { count } = parseLayout(state.layout);
  state.panels = Array.from({ length: count }, (_, index) => ({
    toolId: WEBCAM_EXPLORER_TOOL.id,
    projectId: project.id,
    openedAt: Date.now(),
    role: index === 0 ? "PG webcam search controller" : "PG webcam wall output node",
    uiTitle: `PG Webcam Explorer ${index + 1}`
  }));
  appendProjectEvent(project, `PG Webcam Explorer loaded into ${count} panel${count === 1 ? "" : "s"}. Inside the tool, choose up to ${WEBCAM_MAX_UI_OUTPUTS} safe webcam outputs.`, "info");
  renderWorkspace();
  renderProjectConsole();
  renderWaterfallPanel();
}


function currentFactcheckerInputs() {
  return {
    mode: state.factcheckerMode,
    phrase: state.factcheckerPhrase,
    person: state.factcheckerPerson,
    dateFrom: state.factcheckerDateFrom,
    dateTo: state.factcheckerDateTo,
    includeSites: state.factcheckerIncludeSites,
    excludeSites: state.factcheckerExcludeSites,
    socialTargets: state.factcheckerSocialTargets,
    count: Math.max(1, Math.min(FACTCHECKER_MAX_CELLS, Number(state.factcheckerCount) || 16))
  };
}

function renderFactcheckerPanel() {
  if (!elements.factcheckerToolStats) return;
  const inputs = currentFactcheckerInputs();
  const plan = buildFactcheckerSearchPlan(inputs);
  const verification = verifyFactcheckerPlan(plan);
  elements.factcheckerToolStats.innerHTML = `<strong>${FACTCHECKER_VERSION}</strong><span>${FACTCHECKER_SOURCE_POLICIES.length} source policies · ${verification.stats.sourceDomainCount} seeded domains · ${plan.clippingCells.length}/${FACTCHECKER_MAX_CELLS} clipping cells · ${verification.ok ? "search plan verified" : "needs review"}</span>`;
  if (elements.factcheckerPhrase && elements.factcheckerPhrase.value !== state.factcheckerPhrase) elements.factcheckerPhrase.value = state.factcheckerPhrase;
  if (elements.factcheckerPerson && elements.factcheckerPerson.value !== state.factcheckerPerson) elements.factcheckerPerson.value = state.factcheckerPerson;
  if (elements.factcheckerDateFrom && elements.factcheckerDateFrom.value !== state.factcheckerDateFrom) elements.factcheckerDateFrom.value = state.factcheckerDateFrom;
  if (elements.factcheckerDateTo && elements.factcheckerDateTo.value !== state.factcheckerDateTo) elements.factcheckerDateTo.value = state.factcheckerDateTo;
  if (elements.factcheckerMode && elements.factcheckerMode.value !== state.factcheckerMode) elements.factcheckerMode.value = state.factcheckerMode;
  if (elements.factcheckerCount && String(elements.factcheckerCount.value) !== String(state.factcheckerCount)) elements.factcheckerCount.value = state.factcheckerCount;
  if (elements.factcheckerIncludeSites && elements.factcheckerIncludeSites.value !== state.factcheckerIncludeSites) elements.factcheckerIncludeSites.value = state.factcheckerIncludeSites;
  if (elements.factcheckerExcludeSites && elements.factcheckerExcludeSites.value !== state.factcheckerExcludeSites) elements.factcheckerExcludeSites.value = state.factcheckerExcludeSites;
  if (elements.factcheckerSocialTargets && elements.factcheckerSocialTargets.value !== state.factcheckerSocialTargets) elements.factcheckerSocialTargets.value = state.factcheckerSocialTargets;

  const fragment = document.createDocumentFragment();
  for (const cell of plan.clippingCells.slice(0, Math.min(24, plan.clippingCells.length))) {
    const card = document.createElement("article");
    card.className = "factchecker-mini-card";
    const title = document.createElement("strong");
    title.textContent = `${String(cell.cell).padStart(2, "0")} · ${cell.source}`;
    const meta = document.createElement("span");
    meta.textContent = `${cell.sourceType} · trust lane ${cell.trustScore}/100`;
    const query = document.createElement("small");
    query.textContent = cell.query;
    const note = document.createElement("p");
    note.textContent = "Excerpt slot only. Live connector must confirm the source, date, location, speaker, and short citation snippet before this becomes evidence.";
    card.append(title, meta, query, note);
    fragment.append(card);
  }
  elements.factcheckerResults?.replaceChildren(fragment);
}

function openFactcheckerTool() {
  openTool(FACTCHECKER_TOOL, Number(elements.targetPanel?.value || 0), activeProject().id, currentFactcheckerInputs());
  renderFactcheckerPanel();
}

function fillWorkspaceWithFactchecker() {
  const project = activeProject();
  const { count } = parseLayout(state.layout);
  state.panels = Array.from({ length: count }, (_, index) => ({
    toolId: FACTCHECKER_TOOL.id,
    projectId: project.id,
    openedAt: Date.now(),
    role: index === 0 ? "FactChecker phrase search controller" : "FactChecker clipping cell output node",
    uiTitle: `FactChecker Cell ${index + 1}`,
    initialInputs: currentFactcheckerInputs()
  }));
  appendProjectEvent(project, `FactChecker loaded into ${count} panel${count === 1 ? "" : "s"}. Each panel can operate as a phrase-finder/source-clipping cell.`, "info");
  renderWorkspace();
  renderProjectConsole();
  renderWaterfallPanel();
}

function renderResults() {
  const filtered = getFilteredTools();
  const project = activeProject();
  elements.resultCount.textContent = `${filtered.length.toLocaleString()} matching tools · ${tools.length.toLocaleString()} catalog + ${IN_HOUSE_TOOL_RECORDS.length} in-house + ${MASSIVE_TOOL_FACTORY_RECORDS.length.toLocaleString()} factory specific + webcam explorer + factchecker + theme studio + RGB motion studio + price comparison suite + ${SKELETON_TOOL_RECORDS.length.toLocaleString()} skeletons · ${CATALOG_VERSION} · ${IN_HOUSE_TOOLS_VERSION} · ${MASSIVE_TOOL_FACTORY_VERSION}`;
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
    meta.textContent = `${tool.systemLabel ? `${tool.systemLabel} · ` : ""}${tool.category} · ${io.accepts.join("/")} → ${io.output}`;
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
  return runtimeTools
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
    meta.textContent = `${tool.systemLabel ? `${tool.systemLabel} · ` : ""}${tool.category} · ${io.accepts.join("/")} → ${io.output}`;
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
  const suggested = generateAiProjectPlan({ prompt, tools: runtimeTools, maxPanels: 16 });
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


function getProgressSnapshot() {
  const project = activeProject();
  state.progressSnapshot = buildProgressSnapshot({
    project,
    panelEntries: state.panels,
    layout: state.layout,
    toolsById,
    now: Date.now()
  });
  return state.progressSnapshot;
}

function renderProgressBarElement(percent, className = "progress-fill") {
  const track = document.createElement("div");
  track.className = "progress-track";
  const fill = document.createElement("div");
  fill.className = className;
  fill.style.width = `${Math.max(0, Math.min(100, Number(percent) || 0))}%`;
  track.append(fill);
  return track;
}

function renderProgressDashboard() {
  if (!elements.totalProgressPercent) return;
  const snapshot = getProgressSnapshot();
  elements.totalProgressPercent.textContent = `${snapshot.percent}%`;
  elements.totalProgressEta.textContent = snapshot.taskCount
    ? `ETA ${snapshot.etaLabel}`
    : "ETA appears after a waterfall queue is created";
  elements.totalProgressBar.style.width = `${snapshot.percent}%`;
  elements.totalProgressSummary.textContent = snapshot.taskCount
    ? `${snapshot.taskCount} queued UI task${snapshot.taskCount === 1 ? "" : "s"} · ${snapshot.runningCount} running · ${snapshot.issueCount} issue${snapshot.issueCount === 1 ? "" : "s"} · ${snapshot.nestedUiCount}/64 nested UI node${snapshot.nestedUiCount === 1 ? "" : "s"} visible`
    : `No queue yet · generate a project, load a template, or create a guided waterfall. Progress meter version ${PROGRESS_METER_VERSION}.`;

  if (elements.cellProgressGrid) {
    const cellFragment = document.createDocumentFragment();
    for (const cell of snapshot.panelCells) {
      const item = document.createElement("div");
      item.className = `cell-progress-card cell-status-${cell.status}`;
      const top = document.createElement("div");
      top.className = "cell-progress-top";
      const label = document.createElement("strong");
      label.textContent = cell.label;
      const percent = document.createElement("span");
      percent.textContent = `${cell.percent}%`;
      top.append(label, percent);
      const meta = document.createElement("small");
      meta.textContent = `${cell.status} · ${cell.taskCount} task${cell.taskCount === 1 ? "" : "s"} · ${cell.nestedTotal || 0} UI · ETA ${cell.etaLabel}`;
      item.append(top, renderProgressBarElement(cell.percent), meta);
      cellFragment.append(item);
    }
    elements.cellProgressGrid.replaceChildren(cellFragment);
  }

  if (elements.nestedProgressGrid) {
    elements.nestedProgressSummary.textContent = snapshot.nestedUiCount
      ? `${snapshot.nestedUiCount} nested/visible UI node${snapshot.nestedUiCount === 1 ? "" : "s"} tracked across the current workspace. A full 4×4 with four UIs per cell tracks up to 64.`
      : "Nested UI progress appears when panels are loaded with primary and sub-tools.";
    const nestedFragment = document.createDocumentFragment();
    for (const node of snapshot.nestedNodes) {
      const item = document.createElement("div");
      item.className = `nested-progress-node nested-status-${String(node.status || "ready").toLowerCase()}`;
      const label = document.createElement("strong");
      label.textContent = node.label;
      const name = document.createElement("span");
      name.textContent = node.toolName;
      const percent = document.createElement("small");
      percent.textContent = `${node.percent}% · ${node.status} · ETA ${node.etaLabel}`;
      item.append(label, name, renderProgressBarElement(node.percent, "progress-fill nested-fill"), percent);
      nestedFragment.append(item);
    }
    elements.nestedProgressGrid.replaceChildren(nestedFragment);
  }
}

function createPanelProgressMeter(index) {
  const snapshot = getProgressSnapshot();
  const cell = snapshot.panelCells[index];
  const wrap = document.createElement("div");
  wrap.className = `panel-progress-meter panel-progress-${cell?.status || "empty"}`;
  const row = document.createElement("div");
  row.className = "panel-progress-row";
  const label = document.createElement("span");
  label.textContent = cell ? `Cell progress ${cell.percent}%` : "Cell progress 0%";
  const eta = document.createElement("span");
  eta.textContent = cell ? `ETA ${cell.etaLabel}` : "ETA 0s";
  row.append(label, eta);
  wrap.append(row, renderProgressBarElement(cell?.percent || 0));
  return wrap;
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
  panel.className = `workspace-panel premium-theme-panel theme-fx-${state.premiumTheme?.effect || "rotating-outline"}`;
  if (index === Number(elements.targetPanel?.value || 0)) panel.classList.add("active-theme-cell");
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
  body.append(createPanelProgressMeter(index));
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
      initialInputs: entry.initialInputs || {},
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
  renderProgressDashboard();
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

function getCurrentWaterfallSchedule(project = activeProject()) {
  const queue = ensureWaterfallQueue(project);
  const graph = buildTaskDependencyGraph({
    project,
    queue,
    plan: project.plan,
    panelEntries: state.panels,
    toolsById
  });
  const access = canRunPaidMultitask({
    subscriptionStatus: state.subscriptionStatus,
    queue,
    requestedParallel: state.paidMultitaskParallelism,
    systemBusy: state.waterfallRunning
  });
  const parallelism = access.allowed ? access.parallelism : getRecommendedParallelism({
    taskCount: queue.length,
    paid: state.subscriptionStatus === SUBSCRIPTION_ACCESS.PAID,
    requested: state.paidMultitaskParallelism
  });
  const batches = buildExecutionBatches({ graph, maxParallel: parallelism });
  return { queue, graph, access, batches, parallelism };
}

function renderWaterfallPanel() {
  if (!elements.waterfallQueue) return;
  const project = activeProject();
  const { queue, graph, access, batches } = getCurrentWaterfallSchedule(project);
  const doneCount = queue.filter((task) => task.status === "done").length;
  const errorCount = queue.filter((task) => task.status === "error").length;
  const runningTasks = queue.filter((task) => task.status === "running");
  const scheduleSummary = summarizeSchedule({ graph, batches, access });
  state.lastScheduleSummary = scheduleSummary;
  elements.waterfallStatus.textContent = `${queue.length} queued task${queue.length === 1 ? "" : "s"} · ${doneCount} done · ${errorCount} issue${errorCount === 1 ? "" : "s"}${state.waterfallPaused ? " · paused" : runningTasks.length ? ` · running ${runningTasks.length} task${runningTasks.length === 1 ? "" : "s"}` : ""}`;
  if (elements.enablePaidMultitask) {
    elements.enablePaidMultitask.checked = state.paidMultitaskEnabled;
    elements.enablePaidMultitask.disabled = state.subscriptionStatus !== SUBSCRIPTION_ACCESS.PAID;
  }
  if (elements.multitaskParallelism) {
    elements.multitaskParallelism.value = String(state.paidMultitaskParallelism);
    elements.multitaskParallelism.disabled = state.subscriptionStatus !== SUBSCRIPTION_ACCESS.PAID;
  }
  if (elements.multitaskStatus) {
    const modeLabel = state.paidMultitaskEnabled && access.allowed
      ? `Paid multitask ready · ${access.parallelism}x parallel cap`
      : state.subscriptionStatus === SUBSCRIPTION_ACCESS.PAID
        ? `Paid multitask idle · ${access.reason}`
        : "Paid multitask locked · Choose Own/free users run a normal waterfall";
    elements.multitaskStatus.textContent = `${modeLabel}. ${scheduleSummary}`;
  }

  const graphById = new Map(graph.tasks.map((task) => [task.id, task]));
  const taskToBatch = new Map();
  batches.forEach((batch, index) => {
    for (const taskId of batch.taskIds) taskToBatch.set(taskId, { ...batch, batchNumber: index + 1 });
  });

  const fragment = document.createDocumentFragment();
  const selectFragment = document.createDocumentFragment();
  for (const task of queue) {
    const graphTask = graphById.get(task.id);
    const batch = taskToBatch.get(task.id);
    const item = document.createElement("li");
    const dependencyClass = graphTask?.dependencies?.length ? "waterfall-blocked" : "waterfall-ready";
    const batchClass = batch?.mode === "parallel" ? "waterfall-parallel" : "waterfall-single";
    item.className = `waterfall-task waterfall-${task.status} ${dependencyClass} ${batchClass}`;
    const title = document.createElement("strong");
    title.textContent = `${task.sequence}. ${task.toolName}`;
    const detail = document.createElement("span");
    const dependencyText = graphTask?.dependencies?.length
      ? `waits for ${graphTask.dependencies.length}`
      : "can start now";
    const batchText = batch ? `batch ${batch.batchNumber} · ${batch.mode}` : "not scheduled";
    detail.textContent = `${task.status} · ${dependencyText} · ${batchText} · panel ${Number(task.panelIndex) + 1} · ${task.prompt.slice(0, 120)}`;
    const reason = document.createElement("em");
    reason.className = "waterfall-task-reason";
    reason.textContent = graphTask?.dependencyReason || "Scheduler is waiting for more project information.";
    item.append(title, detail, reason);
    fragment.append(item);

    const option = document.createElement("option");
    option.value = task.id;
    option.textContent = `${task.sequence}. ${task.toolName}`;
    selectFragment.append(option);
  }
  elements.waterfallQueue.replaceChildren(fragment);
  elements.waterfallTaskSelect.replaceChildren(selectFragment);
  if (state.activeWaterfallTaskId) elements.waterfallTaskSelect.value = state.activeWaterfallTaskId;
  renderProgressDashboard();
}

async function waitIfPaused() {
  while (state.waterfallPaused) {
    await sleep(200);
  }
}

function startGuidedWaterfall() {
  if (!activeProject().plan) generateAiProject();
  const project = activeProject();
  const queue = ensureWaterfallQueue(project);
  const access = canRunPaidMultitask({
    subscriptionStatus: state.subscriptionStatus,
    queue,
    requestedParallel: state.paidMultitaskParallelism,
    systemBusy: state.waterfallRunning
  });
  if (state.paidMultitaskEnabled && access.allowed) {
    startPaidMultitaskWaterfall(access.parallelism);
    return;
  }
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
  pushAnalyticsEvent("repair", { taskId, noteLength: note.length }, task?.toolId || "");
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
  elements.subscriptionStatus.value = state.subscriptionStatus;
  if (elements.enablePaidMultitask) elements.enablePaidMultitask.checked = state.paidMultitaskEnabled;
  if (elements.multitaskParallelism) elements.multitaskParallelism.value = String(state.paidMultitaskParallelism);
  elements.projectName.value = project.name;
  elements.aiPrompt.value = project.prompt || "";
  elements.projectInput.value = project.input || "";
  renderPromptBreakdown();
  renderAiPlan();
  renderFileSuggestions();
  renderWaterfallPanel();
  renderProjectOsPanel();
  renderInHouseToolsPanel();

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
    paidMultitaskEnabled: state.paidMultitaskEnabled,
    paidMultitaskParallelism: state.paidMultitaskParallelism,
    userProfile: state.userProfile,
    sessionTheme: state.sessionTheme,
    mainView: state.mainView,
    colab: state.colab,
    factchecker: {
      phrase: state.factcheckerPhrase,
      person: state.factcheckerPerson,
      dateFrom: state.factcheckerDateFrom,
      dateTo: state.factcheckerDateTo,
      mode: state.factcheckerMode,
      count: state.factcheckerCount,
      includeSites: state.factcheckerIncludeSites,
      excludeSites: state.factcheckerExcludeSites,
      socialTargets: state.factcheckerSocialTargets
    },
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
    state.paidMultitaskEnabled = Boolean(saved.paidMultitaskEnabled) && state.subscriptionStatus === SUBSCRIPTION_ACCESS.PAID;
    state.paidMultitaskParallelism = Number(saved.paidMultitaskParallelism || 3);
    state.userProfile = saved.userProfile || createDefaultUserProfile();
    state.mainView = saved.mainView || "workspace";
    state.colab = saved.colab || createDefaultCollabState();
    if (saved.factchecker) {
      state.factcheckerPhrase = saved.factchecker.phrase || state.factcheckerPhrase;
      state.factcheckerPerson = saved.factchecker.person || state.factcheckerPerson;
      state.factcheckerDateFrom = saved.factchecker.dateFrom || "";
      state.factcheckerDateTo = saved.factchecker.dateTo || "";
      state.factcheckerMode = saved.factchecker.mode || state.factcheckerMode;
      state.factcheckerCount = saved.factchecker.count || state.factcheckerCount;
      state.factcheckerIncludeSites = saved.factchecker.includeSites || "";
      state.factcheckerExcludeSites = saved.factchecker.excludeSites || "";
      state.factcheckerSocialTargets = saved.factchecker.socialTargets || "";
    }
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
    setMainView(state.mainView);
    renderColabPanel();
    renderFactcheckerPanel();
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
  pushAnalyticsEvent("project-start", { source: "generate-ai-project" });
  syncModeToProject();
  const project = activeProject();
  state.mode = WORKSPACE_MODES.AI;
  elements.workspaceMode.value = WORKSPACE_MODES.AI;
  project.mode = WORKSPACE_MODES.AI;
  project.prompt = elements.aiPrompt.value.trim() || "Build a useful project from compatible free tools.";
  const plan = generateAiProjectPlan({ prompt: project.prompt, tools: runtimeTools, maxPanels: 16 });
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

function getQueueTaskTool(task) {
  return toolsById.get(task.replacementToolId || task.toolId) || null;
}

function getPayloadForScheduledTask(project, graphTask, completedOutputs) {
  const dependencies = graphTask?.dependencies || [];
  if (dependencies.length) {
    const lastDependency = dependencies[dependencies.length - 1];
    return completedOutputs.get(lastDependency) || project.input || project.prompt || "";
  }
  return project.input || project.prompt || "";
}

async function runScheduledWaterfallTask({ project, task, graphTask, completedOutputs, runMode }) {
  await waitIfPaused();
  const tool = getQueueTaskTool(task);
  if (!tool) {
    task.status = "error";
    task.updatedAt = new Date().toISOString();
    const artifact = makeArtifact({
      projectId: project.id,
      panelIndex: task.panelIndex,
      tool: { id: task.toolId || "missing-tool", name: task.toolName || "Missing tool", engine: "missing" },
      inputs: {},
      output: `Missing tool for task ${task.toolName || task.id}.`,
      status: "error",
      runMode,
      stepId: task.parentStepId || null
    });
    appendArtifact(project, artifact);
    return artifact;
  }

  state.activeWaterfallTaskId = task.id;
  task.status = "running";
  task.updatedAt = new Date().toISOString();
  const panelIndex = Number(task.panelIndex);
  const entry = state.panels[panelIndex];
  if (entry) entry.aiStepStatus = "running";
  state.panelFx[panelIndex] = "running";
  updatePlanStepStatus(project, task.parentStepId, "running");
  renderWorkspace();
  renderProjectConsole();
  renderWaterfallPanel();
  await sleep(runMode.includes("multitask") ? 180 : 320);

  try {
    const payload = getPayloadForScheduledTask(project, graphTask, completedOutputs);
    const inputs = buildInputsFromPayload(tool, payload);
    const output = runTool(tool, inputs);
    const artifact = makeArtifact({ projectId: project.id, panelIndex, tool, inputs, output, runMode, stepId: task.parentStepId || null });
    appendArtifact(project, artifact);
    completedOutputs.set(task.id, artifact.output);
    task.status = "done";
    task.outputType = artifact.outputType;
    task.updatedAt = new Date().toISOString();
    if (entry) entry.aiStepStatus = "done";
    state.panelFx[panelIndex] = "done";
    updatePlanStepStatus(project, task.parentStepId, "done", { outputPreview: artifact.output.slice(0, 160) });
    playSelectedSound("task");
    return artifact;
  } catch (error) {
    const artifact = makeArtifact({
      projectId: project.id,
      panelIndex,
      tool,
      inputs: {},
      output: error instanceof Error ? error.message : String(error),
      status: "error",
      runMode,
      stepId: task.parentStepId || null
    });
    appendArtifact(project, artifact);
    completedOutputs.set(task.id, artifact.output);
    task.status = "error";
    task.updatedAt = new Date().toISOString();
    if (entry) entry.aiStepStatus = "error";
    state.panelFx[panelIndex] = "error";
    updatePlanStepStatus(project, task.parentStepId, "error", { outputPreview: artifact.output.slice(0, 160) });
    return artifact;
  } finally {
    renderWorkspace();
    renderProjectConsole();
    renderWaterfallPanel();
  }
}

async function startPaidMultitaskWaterfall(parallelism = state.paidMultitaskParallelism) {
  syncProjectInput();
  const project = activeProject();
  const queue = ensureWaterfallQueue(project);
  const access = canRunPaidMultitask({
    subscriptionStatus: state.subscriptionStatus,
    queue,
    requestedParallel: parallelism,
    systemBusy: false
  });
  if (!access.allowed) {
    appendProjectEvent(project, access.reason, "error");
    renderWaterfallPanel();
    return;
  }

  const graph = buildTaskDependencyGraph({
    project,
    queue,
    plan: project.plan,
    panelEntries: state.panels,
    toolsById
  });
  const batches = buildExecutionBatches({ graph, maxParallel: access.parallelism });
  const graphById = new Map(graph.tasks.map((task) => [task.id, task]));
  const completedOutputs = new Map();
  let hadError = false;

  state.waterfallPaused = false;
  state.waterfallRunning = true;
  appendProjectEvent(project, `Paid multitask started: ${batches.length} scheduler batch${batches.length === 1 ? "" : "es"}, up to ${access.parallelism} tasks at once.`, "success");
  renderWaterfallPanel();

  for (const batch of batches) {
    await waitIfPaused();
    if (batch.mode === "blocked") {
      hadError = true;
      for (const task of batch.tasks) {
        const queueTask = queue.find((candidate) => candidate.id === task.id);
        if (queueTask) queueTask.status = "error";
      }
      appendProjectEvent(project, "Paid multitask stopped because a dependency cycle or missing output was detected.", "error");
      break;
    }
    batch.tasks.forEach((task) => {
      const queueTask = queue.find((candidate) => candidate.id === task.id);
      if (queueTask) queueTask.status = "running";
    });
    renderWaterfallPanel();
    const artifacts = await Promise.all(batch.tasks.map((task) => {
      const queueTask = queue.find((candidate) => candidate.id === task.id);
      return runScheduledWaterfallTask({
        project,
        task: queueTask || task,
        graphTask: graphById.get(task.id),
        completedOutputs,
        runMode: batch.mode === "parallel" ? "paid-multitask" : "paid-multitask-single"
      });
    }));
    if (artifacts.some((artifact) => artifact?.status !== "ok")) hadError = true;
    await sleep(batch.mode === "parallel" ? 220 : 120);
  }

  state.waterfallRunning = false;
  state.activeWaterfallTaskId = "";
  playSelectedSound("completion");
  appendProjectEvent(project, hadError ? "Paid multitask finished with issues that may need pause/repair." : "Paid multitask finished. Independent tasks ran early while dependent tasks waited for their inputs.", hadError ? "error" : "success");
  renderWorkspace();
  renderProjectConsole();
  renderWaterfallPanel();
}

function runSimultaneousWorkflow() {
  pushAnalyticsEvent("project-start", { source: "simultaneous-run" });
  syncProjectInput();
  const project = activeProject();
  const artifacts = runProjectPanelsSimultaneously({ project, panelEntries: state.panels, toolsById });
  for (const artifact of artifacts) appendArtifact(project, artifact);
  appendProjectEvent(project, `Simultaneous run completed across ${artifacts.length} panel node${artifacts.length === 1 ? "" : "s"}.`, "success");
  renderProjectConsole();
renderWaterfallPanel();
}

function runQueuedWorkflow() {
  pushAnalyticsEvent("project-start", { source: "queued-run" });
  syncProjectInput();
  const project = activeProject();
  const artifacts = runProjectPanelsAsQueue({ project, panelEntries: state.panels, toolsById });
  for (const artifact of artifacts) appendArtifact(project, artifact);
  appendProjectEvent(project, `Queued waterfall completed across ${artifacts.length} panel node${artifacts.length === 1 ? "" : "s"}.`, artifacts.some((artifact) => artifact.status !== "ok") ? "error" : "success");
  renderProjectConsole();
renderWaterfallPanel();
}


function buildPaidThemeSelectors() {
  if (!elements.paidThemePreset || !elements.paidThemeEffect) return;
  elements.paidThemePreset.replaceChildren(...THEME_PRESET_TEMPLATES.map((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = `${preset.name}${preset.source === "uploaded-reference-style" ? " · uploaded reference" : ""}`;
    return option;
  }));
  elements.paidThemeEffect.replaceChildren(...RGB_EFFECT_TYPES.map((effect) => {
    const option = document.createElement("option");
    option.value = effect;
    option.textContent = effect.replaceAll("-", " ");
    return option;
  }));
}

function syncPremiumThemeControlsFromState() {
  if (!elements.paidThemePreset) return;
  const theme = buildThemeFromSettings(state.premiumTheme);
  elements.paidThemePreset.value = theme.presetId;
  elements.paidThemeBackground.value = theme.colors.background;
  elements.paidThemeBox.value = theme.colors.box;
  elements.paidThemeCell.value = theme.colors.cell;
  elements.paidThemeActiveCell.value = theme.colors.activeCell;
  elements.paidThemeGlow.value = theme.colors.glow;
  elements.paidThemeEffect.value = theme.effect;
  elements.paidThemeSpeed.value = theme.speedSeconds;
  elements.paidThemeRandomSignin.checked = !!theme.randomizeEachSignin;
  elements.paidThemeAlternateLogons.checked = !!theme.alternateBetweenLogons;
}

function readPremiumThemeControls() {
  return buildThemeFromSettings({
    presetId: elements.paidThemePreset?.value || state.premiumTheme.presetId,
    colors: {
      background: elements.paidThemeBackground?.value || state.premiumTheme.colors.background,
      box: elements.paidThemeBox?.value || state.premiumTheme.colors.box,
      cell: elements.paidThemeCell?.value || state.premiumTheme.colors.cell,
      activeCell: elements.paidThemeActiveCell?.value || state.premiumTheme.colors.activeCell,
      glow: elements.paidThemeGlow?.value || state.premiumTheme.colors.glow,
      text: state.premiumTheme.colors.text
    },
    effect: elements.paidThemeEffect?.value || state.premiumTheme.effect,
    speedSeconds: Number(elements.paidThemeSpeed?.value || state.premiumTheme.speedSeconds),
    brightness: state.premiumTheme.brightness,
    intensity: state.premiumTheme.intensity,
    randomizeEachSignin: !!elements.paidThemeRandomSignin?.checked,
    alternateBetweenLogons: !!elements.paidThemeAlternateLogons?.checked,
    signInCounter: state.premiumTheme.signInCounter || 0
  });
}

function applyPremiumTheme(theme = state.premiumTheme) {
  state.premiumTheme = buildThemeFromSettings(theme);
  applyThemeToDocument(state.premiumTheme);
  document.body.dataset.themeEffect = state.premiumTheme.effect;
  renderPaidThemeStudioPanel();
  renderWorkspace();
}

function renderPaidThemeStudioPanel() {
  if (!elements.paidThemeStudioStats) return;
  const theme = buildThemeFromSettings(state.premiumTheme);
  const verification = verifyThemeStudioConfig(theme);
  const summary = buildThemeStudioSummary(theme);
  elements.paidThemeStudioStats.innerHTML = `<strong>${THEME_SYSTEM_VERSION}</strong><span>${THEME_PRESET_TEMPLATES.length} premade templates · ${RGB_EFFECT_TYPES.length} RGB effects · ${verification.ok ? "theme verified" : "theme needs review"} · active RGB ${summary.activeCellRgb.r}, ${summary.activeCellRgb.g}, ${summary.activeCellRgb.b}</span>`;
  syncPremiumThemeControlsFromState();
  const vars = buildCssVariables(theme);
  const preview = elements.paidThemePreview;
  if (!preview) return;
  for (const [key, value] of Object.entries(vars)) preview.style.setProperty(key, value);
  preview.dataset.themeEffect = theme.effect;
  const parent = document.createElement("div");
  parent.className = "paid-theme-preview-parent";
  const label = document.createElement("strong");
  label.textContent = "RGB pop-open preview · 1 box / 4 cells";
  const cells = document.createElement("div");
  cells.className = "paid-theme-preview-cells";
  for (let i = 0; i < 4; i += 1) {
    const cell = document.createElement("div");
    cell.className = `paid-theme-preview-cell ${i === 0 ? "active" : ""}`;
    cell.innerHTML = `<span>Cell 0${i + 1}</span><small>${i === 0 ? "active cell" : "inner cell"}</small>`;
    cells.append(cell);
  }
  const controls = document.createElement("p");
  controls.className = "mini-note";
  controls.textContent = `Effect ${theme.effect.replaceAll("-", " ")} · speed ${theme.speedSeconds}s · random sign-in ${theme.randomizeEachSignin ? "on" : "off"} · alternate logons ${theme.alternateBetweenLogons ? "on" : "off"}`;
  parent.append(label, cells, controls);
  preview.replaceChildren(parent);
}

function updatePremiumThemeFromControls() {
  state.premiumTheme = readPremiumThemeControls();
  applyThemeToDocument(state.premiumTheme);
  document.body.dataset.themeEffect = state.premiumTheme.effect;
  renderPaidThemeStudioPanel();
}

function selectThemePresetFromControl() {
  const preset = THEME_PRESET_TEMPLATES.find((item) => item.id === elements.paidThemePreset.value) || THEME_PRESET_TEMPLATES[0];
  state.premiumTheme = buildThemeFromSettings({ ...state.premiumTheme, presetId: preset.id, colors: preset.colors, effect: preset.effect });
  applyPremiumTheme(state.premiumTheme);
}

function randomizePaidTheme() {
  state.premiumTheme = randomizeTheme(Date.now());
  state.premiumTheme.randomizeEachSignin = !!elements.paidThemeRandomSignin?.checked || true;
  applyPremiumTheme(state.premiumTheme);
}

function savePaidThemeProfile() {
  state.premiumTheme = readPremiumThemeControls();
  try {
    localStorage.setItem("toolgrid-paid-theme-profile", JSON.stringify(state.premiumTheme));
  } catch {}
  applyPremiumTheme(state.premiumTheme);
  appendProjectEvent(activeProject(), `Paid profile theme saved: ${state.premiumTheme.presetId} / ${state.premiumTheme.effect}.`, "info");
  renderProjectConsole();
}

function restorePaidThemeProfile() {
  try {
    const stored = JSON.parse(localStorage.getItem("toolgrid-paid-theme-profile") || "null");
    if (stored) state.premiumTheme = rotateThemeForSignin(stored);
  } catch {}
  applyThemeToDocument(state.premiumTheme);
  document.body.dataset.themeEffect = state.premiumTheme.effect;
}

function openThemeStudioTool() {
  openTool(THEME_STUDIO_TOOL, Number(elements.targetPanel?.value || 0), activeProject().id, state.premiumTheme);
}

function openRgbGeneratorTool() {
  openTool(RGB_GENERATOR_TOOL, Number(elements.targetPanel?.value || 0), activeProject().id, { effect: state.premiumTheme.effect, color: state.premiumTheme.colors.glow, speedSeconds: state.premiumTheme.speedSeconds });
}


function buildRgbMotionSelectors() {
  if (!elements.rgbMotionShape) return;
  elements.rgbMotionShape.replaceChildren(...RGB_MOTION_SHAPES.map((shape) => {
    const option = document.createElement("option");
    option.value = shape.id;
    option.textContent = shape.name;
    return option;
  }));
  const outlineEffects = RGB_MOTION_EFFECTS.filter((effect) => effect.supportsOutline);
  const fillEffects = RGB_MOTION_EFFECTS.filter((effect) => effect.supportsFill);
  elements.rgbMotionOutlineEffect?.replaceChildren(...outlineEffects.map((effect) => {
    const option = document.createElement("option");
    option.value = effect.id;
    option.textContent = effect.name;
    return option;
  }));
  elements.rgbMotionFillEffect?.replaceChildren(...fillEffects.map((effect) => {
    const option = document.createElement("option");
    option.value = effect.id;
    option.textContent = effect.name;
    return option;
  }));
}

function syncRgbMotionControlsFromState() {
  if (!elements.rgbMotionShape) return;
  const settings = buildRgbMotionSettings(state.rgbMotion);
  elements.rgbMotionShape.value = settings.shapeId;
  elements.rgbMotionOutlineEffect.value = settings.outlineEffect;
  elements.rgbMotionFillEffect.value = settings.fillEffect;
  elements.rgbMotionOutlineColor.value = settings.outlineColor;
  elements.rgbMotionFillColor.value = settings.fillColor;
  elements.rgbMotionSecondaryColor.value = settings.secondaryColor;
  elements.rgbMotionLayerCount.value = settings.layerCount;
  elements.rgbMotionSpeed.value = settings.speedSeconds;
}

function readRgbMotionControls() {
  return buildRgbMotionSettings({
    ...state.rgbMotion,
    shapeId: elements.rgbMotionShape?.value || state.rgbMotion.shapeId,
    outlineEffect: elements.rgbMotionOutlineEffect?.value || state.rgbMotion.outlineEffect,
    fillEffect: elements.rgbMotionFillEffect?.value || state.rgbMotion.fillEffect,
    outlineColor: elements.rgbMotionOutlineColor?.value || state.rgbMotion.outlineColor,
    fillColor: elements.rgbMotionFillColor?.value || state.rgbMotion.fillColor,
    secondaryColor: elements.rgbMotionSecondaryColor?.value || state.rgbMotion.secondaryColor,
    layerCount: Number(elements.rgbMotionLayerCount?.value || state.rgbMotion.layerCount),
    speedSeconds: Number(elements.rgbMotionSpeed?.value || state.rgbMotion.speedSeconds)
  });
}

function renderRgbMotionPreviewElement(target, settings) {
  if (!target) return;
  const plan = buildRgbMotionProject(settings);
  const s = plan.settings;
  const shapeMarkup = (() => {
    switch (s.shapeId) {
      case "circle": return '<circle cx="90" cy="66" r="42" pathLength="100" />';
      case "ellipse": return '<ellipse cx="90" cy="66" rx="56" ry="36" pathLength="100" />';
      case "diamond": return '<polygon points="90,12 164,66 90,120 16,66" pathLength="100" />';
      case "hexagon": return '<polygon points="44,18 136,18 170,66 136,114 44,114 10,66" pathLength="100" />';
      case "star": return '<polygon points="90,8 108,47 150,52 120,80 128,120 90,100 52,120 60,80 30,52 72,47" pathLength="100" />';
      default: return '<rect x="14" y="18" width="152" height="96" rx="16" pathLength="100" />';
    }
  })();
  target.innerHTML = `
    <div class="rgb-motion-mini-preview" style="--rgb-motion-outline:${s.outlineColor};--rgb-motion-fill:${s.fillColor};--rgb-motion-secondary:${s.secondaryColor};--rgb-motion-speed:${s.speedSeconds}s;--rgb-motion-stroke:${s.strokeWidth};">
      <svg viewBox="0 0 180 132" aria-hidden="true">
        <defs><linearGradient id="rgbMiniFill" x1="0" x2="1"><stop offset="0%" stop-color="${s.fillColor}"/><stop offset="100%" stop-color="${s.secondaryColor}"/></linearGradient></defs>
        <g class="rgb-motion-mini-fill ${s.fillEffect}">${shapeMarkup}</g>
        <g class="rgb-motion-mini-outline ${s.outlineEffect}">${shapeMarkup}</g>
        <circle class="rgb-motion-mini-tail" cx="14" cy="18" r="5"></circle>
      </svg>
      <div><strong>${s.shapeName}</strong><span>${s.outlineEffectName} outline · ${s.fillEffectName} fill · ${plan.layers.length}/${RGB_MOTION_MAX_LAYERS} layers</span></div>
    </div>`;
}

function renderRgbMotionStudioPanel() {
  if (!elements.rgbMotionStats) return;
  const settings = buildRgbMotionSettings(state.rgbMotion);
  const verification = verifyRgbMotionStudioConfig(settings);
  const plan = buildRgbMotionProject(settings);
  elements.rgbMotionStats.innerHTML = `<strong>${RGB_MOTION_STUDIO_VERSION}</strong><span>${RGB_MOTION_SHAPES.length} shapes · ${RGB_MOTION_EFFECTS.length} effects · ${plan.layers.length}/${RGB_MOTION_MAX_LAYERS} layers · ${verification.ok ? "verified" : "needs review"}</span>`;
  syncRgbMotionControlsFromState();
  renderRgbMotionPreviewElement(elements.rgbMotionPreview, settings);
  const matches = searchRgbMotionEffects(state.rgbMotionQuery, 6);
  const fragment = document.createDocumentFragment();
  for (const { effect, score } of matches) {
    const card = document.createElement("article");
    card.className = "rgb-motion-result-card";
    const title = document.createElement("strong");
    title.textContent = effect.name;
    const meta = document.createElement("span");
    meta.textContent = `${effect.region} · score ${score} · ${effect.parallelSafe ? "parallel-safe" : "backend/future render"}`;
    const desc = document.createElement("p");
    desc.textContent = effect.description;
    card.append(title, meta, desc);
    fragment.append(card);
  }
  elements.rgbMotionResults?.replaceChildren(fragment);
}

function updateRgbMotionFromControls() {
  state.rgbMotion = readRgbMotionControls();
  renderRgbMotionStudioPanel();
}

function randomizeRgbMotionSettings() {
  const outlineChoices = RGB_MOTION_EFFECTS.filter((effect) => effect.supportsOutline);
  const fillChoices = RGB_MOTION_EFFECTS.filter((effect) => effect.supportsFill);
  const randHex = () => `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0")}`.toUpperCase();
  state.rgbMotion = buildRgbMotionSettings({
    shapeId: RGB_MOTION_SHAPES[Math.floor(Math.random() * RGB_MOTION_SHAPES.length)].id,
    outlineEffect: outlineChoices[Math.floor(Math.random() * outlineChoices.length)].id,
    fillEffect: fillChoices[Math.floor(Math.random() * fillChoices.length)].id,
    outlineColor: randHex(),
    fillColor: randHex(),
    secondaryColor: randHex(),
    layerCount: Math.floor(1 + Math.random() * 16),
    speedSeconds: Number((0.6 + Math.random() * 6).toFixed(1))
  });
  renderRgbMotionStudioPanel();
}

function openRgbMotionStudioTool() {
  openTool(RGB_MOTION_STUDIO_TOOL, Number(elements.targetPanel?.value || 0), activeProject().id, state.rgbMotion);
}

function fillWorkspaceWithRgbMotion() {
  const project = activeProject();
  const { count } = parseLayout(state.layout);
  const plan = buildRgbMotionProject(state.rgbMotion);
  state.panels = Array.from({ length: count }, (_, index) => ({
    toolId: RGB_MOTION_STUDIO_TOOL.id,
    projectId: project.id,
    openedAt: Date.now(),
    role: index === 0 ? "RGB Motion master editor" : "RGB Motion effect layer node",
    uiTitle: `RGB Motion Layer ${index + 1}`,
    initialInputs: { ...state.rgbMotion, layerCount: Math.min(RGB_MOTION_MAX_LAYERS, Math.max(1, plan.layers.length)), shapeId: state.rgbMotion.shapeId }
  }));
  appendProjectEvent(project, `RGB Motion Studio loaded into ${count} panel${count === 1 ? "" : "s"}. Each panel can control a shape/path/effect layer for image or video overlays.`, "info");
  renderWorkspace();
  renderProjectConsole();
  renderWaterfallPanel();
}


function buildAudioVisualizerSelectors() {
  if (!elements.audioVisualizerShape) return;
  elements.audioVisualizerShape.replaceChildren(...AUDIO_VISUALIZER_SHAPES.map((shape) => {
    const option = document.createElement("option");
    option.value = shape.id;
    option.textContent = shape.name;
    return option;
  }));
  elements.audioVisualizerLighting?.replaceChildren(...AUDIO_VISUALIZER_LIGHTING_PRESETS.map((preset) => {
    const option = document.createElement("option");
    option.value = preset.id;
    option.textContent = preset.name;
    return option;
  }));
}

function syncAudioVisualizerControlsFromState() {
  if (!elements.audioVisualizerShape) return;
  const settings = buildAudioVisualizerSettings(state.audioVisualizer);
  elements.audioVisualizerAudioUrl.value = settings.audioUrl;
  elements.audioVisualizerPrompt.value = settings.prompt;
  elements.audioVisualizerShape.value = settings.shapeId;
  elements.audioVisualizerLighting.value = settings.lightingId;
  elements.audioVisualizerCount.value = settings.variationCount;
}

function readAudioVisualizerControls() {
  return buildAudioVisualizerSettings({
    ...state.audioVisualizer,
    audioUrl: elements.audioVisualizerAudioUrl?.value || state.audioVisualizer.audioUrl,
    prompt: elements.audioVisualizerPrompt?.value || state.audioVisualizer.prompt,
    shapeId: elements.audioVisualizerShape?.value || state.audioVisualizer.shapeId,
    lightingId: elements.audioVisualizerLighting?.value || state.audioVisualizer.lightingId,
    variationCount: Number(elements.audioVisualizerCount?.value || state.audioVisualizer.variationCount)
  });
}

function renderAudioVisualizerPanel() {
  if (!elements.audioVisualizerStats) return;
  const settings = buildAudioVisualizerSettings(state.audioVisualizer);
  const verification = verifyAudioVisualizerStudioConfig(settings);
  const project = buildAudioVisualizerProject(settings);
  syncAudioVisualizerControlsFromState();
  elements.audioVisualizerStats.innerHTML = `<strong>${AUDIO_VISUALIZER_STUDIO_VERSION}</strong><span>${project.variations.length}/${AUDIO_VISUALIZER_MAX_VARIATIONS} variations · ${AUDIO_VISUALIZER_SHAPES.length} shapes · ${AUDIO_VISUALIZER_LIGHTING_PRESETS.length} lighting presets · ${verification.ok ? "verified" : "needs review"}</span>`;
  if (elements.audioVisualizerPreview) {
    const selected = project.selected;
    elements.audioVisualizerPreview.innerHTML = `
      <div class="audio-compact-preview" style="--av-a:${selected.accent};--av-b:${selected.secondAccent};--av-depth:${settings.depth}%">
        <div class="audio-orbit-ring"></div>
        <div class="audio-crystal-field">${Array.from({ length: 24 }, (_, index) => `<i style="--h:${22 + ((index * 19) % 72)}%;--x:${(index * 31) % 100}%;--d:${0.25 + ((index * 11) % 60) / 100}s"></i>`).join("")}</div>
        <div class="audio-light-source"></div>
        <span>#${selected.number} ${selected.templateName}</span>
      </div>`;
  }
  if (elements.audioVisualizerVariations) {
    const fragment = document.createDocumentFragment();
    for (const variation of project.variations.slice(0, 16)) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `audio-variation-chip ${variation.number === settings.selectedVariation ? "selected" : ""}`;
      button.style.setProperty("--av-a", variation.accent);
      button.style.setProperty("--av-b", variation.secondAccent);
      button.innerHTML = `<strong>${String(variation.number).padStart(2, "0")}</strong><span>${variation.shapeName}</span>`;
      button.addEventListener("click", () => {
        state.audioVisualizer = buildAudioVisualizerSettings({ ...state.audioVisualizer, selectedVariation: variation.number });
        renderAudioVisualizerPanel();
      });
      fragment.append(button);
    }
    elements.audioVisualizerVariations.replaceChildren(fragment);
  }
  if (elements.audioVisualizerQueue) {
    elements.audioVisualizerQueue.replaceChildren(...project.queue.map((task) => {
      const li = document.createElement("li");
      li.className = `audio-mini-queue-task ${task.status}`;
      li.innerHTML = `<span>${task.label}</span><em>${task.status}${task.progress ? ` · ${task.progress}%` : ""}</em>`;
      return li;
    }));
  }
}

function updateAudioVisualizerFromControls() {
  state.audioVisualizer = readAudioVisualizerControls();
  renderAudioVisualizerPanel();
}

function generateAudioVisualizerVariations() {
  state.audioVisualizer = buildAudioVisualizerSettings({ ...readAudioVisualizerControls(), variationCount: AUDIO_VISUALIZER_MAX_VARIATIONS });
  appendProjectEvent(activeProject(), `Audio Visualizer Studio generated ${AUDIO_VISUALIZER_MAX_VARIATIONS} selectable variation cells and prepared lighting/shadow/export waterfall tasks.`, "info");
  renderAudioVisualizerPanel();
  renderProjectConsole();
}

function makeMoreAudioVisualizerVariations() {
  const next = ((Number(state.audioVisualizer.selectedVariation || 1) + 7 - 1) % AUDIO_VISUALIZER_MAX_VARIATIONS) + 1;
  state.audioVisualizer = buildAudioVisualizerSettings({ ...state.audioVisualizer, selectedVariation: next });
  appendProjectEvent(activeProject(), `Audio Visualizer Studio kept the style direction and focused the next variation batch around cell ${next}.`, "info");
  renderAudioVisualizerPanel();
  renderProjectConsole();
}

function openAudioVisualizerStudioTool() {
  openTool(AUDIO_VISUALIZER_STUDIO_TOOL, Number(elements.targetPanel?.value || 0), activeProject().id, state.audioVisualizer);
}

function fillWorkspaceWithAudioVisualizer() {
  const project = activeProject();
  const { count } = parseLayout(state.layout);
  const plan = buildAudioVisualizerProject(state.audioVisualizer);
  state.panels = Array.from({ length: count }, (_, index) => ({
    toolId: AUDIO_VISUALIZER_STUDIO_TOOL.id,
    projectId: project.id,
    openedAt: Date.now(),
    role: index === 0 ? "Audio visualizer master studio" : "Audio visualizer variation/render node",
    uiTitle: `Audio Visualizer ${index + 1}`,
    initialInputs: { ...state.audioVisualizer, selectedVariation: plan.variations[index % plan.variations.length]?.number || 1, variationCount: Math.min(AUDIO_VISUALIZER_MAX_VARIATIONS, Math.max(1, plan.variations.length)) }
  }));
  project.waterfallQueue = plan.queue.map((task, index) => ({
    id: task.id,
    title: task.label,
    status: index < 2 ? "complete" : "queued",
    requires: task.needs,
    produces: task.produces,
    estimatedMs: task.durationMs
  }));
  appendProjectEvent(project, `Audio Visualizer Studio loaded into ${count} panel${count === 1 ? "" : "s"}. The toolbox can now pass visualizer output into lighting, shadow, RGB motion, video, and skeleton tools.`, "info");
  renderWorkspace();
  renderProjectConsole();
  renderWaterfallPanel();
}

function renderSkeletonToolPanel() {
  if (!elements.skeletonToolStats) return;
  const suggestions = pickSkeletonToolsForPrompt({ prompt: state.skeletonQuery || elements.aiPrompt?.value || "", skeletonTools: SKELETON_TOOL_RECORDS, limit: state.skeletonLimit });
  elements.skeletonToolStats.innerHTML = `<strong>${SKELETON_TOOL_VERSION}</strong><span>${SKELETON_TOOL_RECORDS.length.toLocaleString()} skeleton tools · ${skeletonCompatibilityReport.patternCount} generic patterns · ${skeletonVerification.ok ? "verified" : "needs review"} · ${skeletonCompatibilityReport.summary}</span>`;
  const fragment = document.createDocumentFragment();
  for (const { tool, score } of suggestions) {
    const card = document.createElement("article");
    card.className = "skeleton-mini-card";
    const title = document.createElement("strong");
    title.textContent = tool.name;
    const meta = document.createElement("span");
    meta.textContent = `${tool.systemLabel} · score ${score} · ${tool.config.patternLabel}`;
    const desc = document.createElement("p");
    desc.textContent = tool.description;
    const action = document.createElement("button");
    action.type = "button";
    action.textContent = "Open skeleton";
    action.addEventListener("click", () => openTool(tool));
    card.append(title, meta, desc, action);
    fragment.append(card);
  }
  elements.skeletonResults.replaceChildren(fragment);
}

function fillWorkspaceWithSkeletonSuggestions() {
  const project = activeProject();
  const { count } = parseLayout(state.layout);
  const suggestions = pickSkeletonToolsForPrompt({ prompt: state.skeletonQuery || project.prompt || elements.aiPrompt?.value || "generic workflow", skeletonTools: SKELETON_TOOL_RECORDS, limit: Math.max(count, state.skeletonLimit) });
  state.panels = Array.from({ length: count }, (_, index) => {
    const item = suggestions[index % Math.max(1, suggestions.length)]?.tool;
    return item ? {
      toolId: item.id,
      projectId: project.id,
      openedAt: Date.now(),
      role: "Generic skeleton workflow node",
      uiTitle: `Skeleton ${index + 1}: ${item.config.patternLabel}`,
      initialInputs: { projectGoal: project.prompt || state.skeletonQuery, cells: 4 }
    } : null;
  });
  appendProjectEvent(project, `${count} skeleton tool node${count === 1 ? "" : "s"} loaded from prompt-based skeleton suggestions.`, "info");
  renderWorkspace();
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
    if (state.subscriptionStatus !== SUBSCRIPTION_ACCESS.PAID) state.paidMultitaskEnabled = false;
    renderBasedProjectSelector();
    renderWaterfallPanel();
  });
  elements.openToolSelector.addEventListener("click", () => openToolSelector(TOOL_SELECTOR_TABS.CHOOSE_OWN));
  elements.openColab?.addEventListener("click", () => setMainView("colab"));
  elements.mainTabWorkspace?.addEventListener("click", () => setMainView("workspace"));
  elements.mainTabColab?.addEventListener("click", () => setMainView("colab"));
  elements.colabProviderSelect?.addEventListener("change", () => {
    updateColabSetupPlan();
    renderColabPanel();
  });
  elements.colabBuildSetupPlan?.addEventListener("click", () => {
    updateColabSetupPlan();
    renderColabPanel();
  });
  elements.colabCreateShare?.addEventListener("click", createColabShareSpaceFromUi);
  elements.colabCreateInvite?.addEventListener("click", createColabInviteFromUi);
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
  elements.enablePaidMultitask.addEventListener("change", () => {
    state.paidMultitaskEnabled = elements.enablePaidMultitask.checked;
    if (state.subscriptionStatus !== SUBSCRIPTION_ACCESS.PAID) state.paidMultitaskEnabled = false;
    renderWaterfallPanel();
  });
  elements.multitaskParallelism.addEventListener("change", () => {
    state.paidMultitaskParallelism = Number(elements.multitaskParallelism.value) || 3;
    renderWaterfallPanel();
  });
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
  elements.webcamSearch?.addEventListener("input", () => {
    state.webcamQuery = elements.webcamSearch.value.trim();
    renderWebcamExplorerPanel();
  });
  elements.webcamCount?.addEventListener("change", () => {
    state.webcamCount = Math.max(1, Math.min(WEBCAM_MAX_UI_OUTPUTS, Number(elements.webcamCount.value) || 16));
    renderWebcamExplorerPanel();
  });
  elements.webcamProvider?.addEventListener("change", () => {
    state.webcamProvider = elements.webcamProvider.value;
    renderWebcamExplorerPanel();
  });
  elements.webcamCategory?.addEventListener("change", () => {
    state.webcamCategory = elements.webcamCategory.value;
    renderWebcamExplorerPanel();
  });
  elements.webcamOpenTool?.addEventListener("click", openWebcamExplorerTool);
  elements.webcamLoadWall?.addEventListener("click", fillWorkspaceWithWebcamExplorer);
  elements.factcheckerPhrase?.addEventListener("input", () => {
    state.factcheckerPhrase = elements.factcheckerPhrase.value.trim();
    renderFactcheckerPanel();
  });
  elements.factcheckerPerson?.addEventListener("input", () => {
    state.factcheckerPerson = elements.factcheckerPerson.value.trim();
    renderFactcheckerPanel();
  });
  elements.factcheckerDateFrom?.addEventListener("change", () => {
    state.factcheckerDateFrom = elements.factcheckerDateFrom.value;
    renderFactcheckerPanel();
  });
  elements.factcheckerDateTo?.addEventListener("change", () => {
    state.factcheckerDateTo = elements.factcheckerDateTo.value;
    renderFactcheckerPanel();
  });
  elements.factcheckerMode?.addEventListener("change", () => {
    state.factcheckerMode = elements.factcheckerMode.value;
    renderFactcheckerPanel();
  });
  elements.factcheckerCount?.addEventListener("change", () => {
    state.factcheckerCount = Math.max(1, Math.min(FACTCHECKER_MAX_CELLS, Number(elements.factcheckerCount.value) || 16));
    renderFactcheckerPanel();
  });
  elements.factcheckerIncludeSites?.addEventListener("input", () => {
    state.factcheckerIncludeSites = elements.factcheckerIncludeSites.value.trim();
    renderFactcheckerPanel();
  });
  elements.factcheckerExcludeSites?.addEventListener("input", () => {
    state.factcheckerExcludeSites = elements.factcheckerExcludeSites.value.trim();
    renderFactcheckerPanel();
  });
  elements.factcheckerSocialTargets?.addEventListener("input", () => {
    state.factcheckerSocialTargets = elements.factcheckerSocialTargets.value.trim();
    renderFactcheckerPanel();
  });
  elements.factcheckerOpenTool?.addEventListener("click", openFactcheckerTool);
  elements.factcheckerLoadGrid?.addEventListener("click", fillWorkspaceWithFactchecker);
  elements.paidThemePreset?.addEventListener("change", selectThemePresetFromControl);
  elements.paidThemeBackground?.addEventListener("input", updatePremiumThemeFromControls);
  elements.paidThemeBox?.addEventListener("input", updatePremiumThemeFromControls);
  elements.paidThemeCell?.addEventListener("input", updatePremiumThemeFromControls);
  elements.paidThemeActiveCell?.addEventListener("input", updatePremiumThemeFromControls);
  elements.paidThemeGlow?.addEventListener("input", updatePremiumThemeFromControls);
  elements.paidThemeEffect?.addEventListener("change", updatePremiumThemeFromControls);
  elements.paidThemeSpeed?.addEventListener("input", updatePremiumThemeFromControls);
  elements.paidThemeRandomSignin?.addEventListener("change", updatePremiumThemeFromControls);
  elements.paidThemeAlternateLogons?.addEventListener("change", updatePremiumThemeFromControls);
  elements.paidThemeRandomize?.addEventListener("click", randomizePaidTheme);
  elements.paidThemeSave?.addEventListener("click", savePaidThemeProfile);
  elements.paidThemeOpenTool?.addEventListener("click", openThemeStudioTool);
  elements.paidThemeOpenRgb?.addEventListener("click", openRgbGeneratorTool);
  elements.rgbMotionShape?.addEventListener("change", updateRgbMotionFromControls);
  elements.rgbMotionOutlineEffect?.addEventListener("change", updateRgbMotionFromControls);
  elements.rgbMotionFillEffect?.addEventListener("change", updateRgbMotionFromControls);
  elements.rgbMotionOutlineColor?.addEventListener("input", updateRgbMotionFromControls);
  elements.rgbMotionFillColor?.addEventListener("input", updateRgbMotionFromControls);
  elements.rgbMotionSecondaryColor?.addEventListener("input", updateRgbMotionFromControls);
  elements.rgbMotionLayerCount?.addEventListener("input", updateRgbMotionFromControls);
  elements.rgbMotionSpeed?.addEventListener("input", updateRgbMotionFromControls);
  elements.rgbMotionRandomize?.addEventListener("click", randomizeRgbMotionSettings);
  elements.rgbMotionOpenTool?.addEventListener("click", openRgbMotionStudioTool);
  elements.rgbMotionFillWorkspace?.addEventListener("click", fillWorkspaceWithRgbMotion);
  elements.audioVisualizerAudioUrl?.addEventListener("input", updateAudioVisualizerFromControls);
  elements.audioVisualizerPrompt?.addEventListener("input", updateAudioVisualizerFromControls);
  elements.audioVisualizerShape?.addEventListener("change", updateAudioVisualizerFromControls);
  elements.audioVisualizerLighting?.addEventListener("change", updateAudioVisualizerFromControls);
  elements.audioVisualizerCount?.addEventListener("change", updateAudioVisualizerFromControls);
  elements.audioVisualizerGenerate?.addEventListener("click", generateAudioVisualizerVariations);
  elements.audioVisualizerMakeMore?.addEventListener("click", makeMoreAudioVisualizerVariations);
  elements.audioVisualizerOpenTool?.addEventListener("click", openAudioVisualizerStudioTool);
  elements.audioVisualizerFillWorkspace?.addEventListener("click", fillWorkspaceWithAudioVisualizer);
  elements.skeletonSearch?.addEventListener("input", () => {
    state.skeletonQuery = elements.skeletonSearch.value.trim();
    renderSkeletonToolPanel();
  });
  elements.skeletonLimit?.addEventListener("change", () => {
    state.skeletonLimit = Math.max(1, Math.min(64, Number(elements.skeletonLimit.value) || 16));
    renderSkeletonToolPanel();
  });
  elements.skeletonLoadGrid?.addEventListener("click", fillWorkspaceWithSkeletonSuggestions);
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
    pushAnalyticsEvent("search", { query: state.query });
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
buildPaidThemeSelectors();
buildRgbMotionSelectors();
buildAudioVisualizerSelectors();
restorePaidThemeProfile();
buildWebcamSelectOptions();
buildColabProviderOptions();
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
renderColabPanel();
renderWebcamExplorerPanel();
renderFactcheckerPanel();
renderPaidThemeStudioPanel();
renderRgbMotionStudioPanel();
renderAudioVisualizerPanel();
renderSkeletonToolPanel();
setMainView(state.mainView);
setInterval(renderProgressDashboard, 1000);
