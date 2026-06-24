import { tools, CATEGORY_COUNTS, CATALOG_VERSION } from "./tool-catalog.js";
import { engineNames, renderTool, runTool } from "./tool-engines.js";
import { DEMAND_RANKINGS, TOP_DEMAND_PROJECTS, TOOL_USAGE_CATEGORY_SUMMARY, TOOL_USAGE_RANKING } from "./demand-rankings.js";
import {
  FILE_TRANSLATOR_VERSION,
  analyzeFilePackage,
  getSimpleToolExplanation,
  readUploadedFiles,
  summarizeFileListForProjectInput
} from "./file-translator.js";
import { buildDirectAnswerFoundation } from "./direct-answer-engine.js";
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
  SEE_IN_YOUR_SPACE_TOOL,
  SPACE_OBJECT_PRESETS,
  SPACE_STUDIO_MAX_OBJECTS,
  SPACE_STUDIO_TOOLS,
  SPACE_STUDIO_VERSION,
  buildSpaceStudioScene,
  createDefaultSpaceStudioSettings,
  verifySpaceStudioSuite
} from "./space-studio.js";

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
  DAILY_DEALINGS_PROGRAM_RECORDS,
  DAILY_DEALINGS_VERSION,
  buildDailyDealingsSummary,
  verifyDailyDealingsSuite
} from "./daily-dealings-programs.js";

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
import {
  EXPANSION_TOOLS_VERSION,
  NEEDED_INHOUSE_TOOL_RECORDS,
  POTENTIAL_APP_RECORDS,
  PRODUCTION_STREAM_ACTIVATION_RECORDS,
  buildExpansionToolsSummary,
  verifyExpansionToolsSuite
} from "./expansion-tools.js";
import {
  SCALE_APP_PROGRAM_RECORDS,
  SCALE_EXPANSION_VERSION,
  SCALE_INHOUSE_TOOL_RECORDS,
  buildScaleExpansionSummary,
  verifyScaleExpansionSuite
} from "./scale-expansion.js";
import {
  TARGET_500K_APP_PROGRAM_RECORDS,
  TARGET_500K_INHOUSE_TOOL_RECORDS,
  TARGET_500K_VERSION,
  buildTarget500kSummary,
  verifyTarget500kSuite
} from "./target-500k-expansion.js";
import {
  TARGET_5M_CATEGORY_COUNTS,
  TARGET_5M_FINAL_RUNTIME_RECORDS,
  TARGET_5M_VERSION,
  buildTarget5mSummary,
  resolveTarget5mRecordById,
  searchTarget5mExpansion,
  verifyTarget5mSuite
} from "./target-5m-expansion.js";
import {
  ALA_CREDIT_PACKAGES,
  MONTHLY_CREDIT_PACKAGES,
  PROFILE_BILLING_VERSION,
  PROFILE_TIER_DEFINITIONS,
  TARGET_RUNTIME_RECORDS_PRICED,
  addPurchasedCredits,
  buildCreditLedgerTooltip,
  buildEnterpriseInvestorRows,
  buildEnterpriseMonthlyInvoice,
  buildRuntimeCostCoverageSummary,
  buildStripeMeteringPlan,
  buildSubscriptionPricingSummary,
  calculateActualProjectCreditCost,
  createDefaultBillingAccount,
  estimateDownloadCreditCost,
  estimateProjectCreditCost,
  getUnlockedProfileFeatures,
  hasEnoughCredits,
  normalizeBillingAccount,
  recordCreditSpend
} from "./profile-billing-system.js";

const foundation = createFoundationState();
const retiredCatalogRecordSet = new Set(tools);
const retiredCatalogToolIds = new Set(tools.map((tool) => tool.id));
const preNextFrontierTools = Object.freeze([
  ...tools,
  ...IN_HOUSE_TOOL_RECORDS,
  ...MASSIVE_TOOL_FACTORY_RECORDS,
  ...FUNCTIONAL_TOOL_RECORDS,
  ...MINI_APP_TOOL_RECORDS,
  ...DAILY_DEALINGS_PROGRAM_RECORDS,
  ...NEEDED_INHOUSE_TOOL_RECORDS,
  ...SCALE_INHOUSE_TOOL_RECORDS,
  ...TARGET_500K_INHOUSE_TOOL_RECORDS,
  ...SPACE_STUDIO_TOOLS,
  ...FRONTIER_TOOL_RECORDS,
  WEBCAM_EXPLORER_TOOL,
  FACTCHECKER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  PRICE_COMPARISON_TOOL,
  SALE_FINDER_TOOL,
  BUDGET_PRODUCT_MATCHER_TOOL,
  ...POTENTIAL_APP_RECORDS,
  ...PRODUCTION_STREAM_ACTIVATION_RECORDS,
  ...SCALE_APP_PROGRAM_RECORDS,
  ...TARGET_500K_APP_PROGRAM_RECORDS
]);
const directWebsiteTools = Object.freeze([
  ...IN_HOUSE_TOOL_RECORDS,
  ...MASSIVE_TOOL_FACTORY_RECORDS,
  ...FUNCTIONAL_TOOL_RECORDS,
  ...MINI_APP_TOOL_RECORDS,
  ...DAILY_DEALINGS_PROGRAM_RECORDS,
  ...FRONTIER_TOOL_RECORDS,
  ...NEXT_FRONTIER_TOOL_RECORDS,
  ...NEEDED_INHOUSE_TOOL_RECORDS,
  ...SCALE_INHOUSE_TOOL_RECORDS,
  ...TARGET_500K_INHOUSE_TOOL_RECORDS,
  ...SPACE_STUDIO_TOOLS,
  WEBCAM_EXPLORER_TOOL,
  FACTCHECKER_TOOL,
  THEME_STUDIO_TOOL,
  RGB_GENERATOR_TOOL,
  RGB_MOTION_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  PRICE_COMPARISON_TOOL,
  SALE_FINDER_TOOL,
  BUDGET_PRODUCT_MATCHER_TOOL
]);
const skeletonSourceTools = Object.freeze([...tools, ...directWebsiteTools]);
const SKELETON_TOOL_RECORDS = Object.freeze(buildSkeletonTools(skeletonSourceTools));
const runtimeTools = Object.freeze([...directWebsiteTools, ...SKELETON_TOOL_RECORDS, ...POTENTIAL_APP_RECORDS, ...PRODUCTION_STREAM_ACTIVATION_RECORDS, ...SCALE_APP_PROGRAM_RECORDS, ...TARGET_500K_APP_PROGRAM_RECORDS]);
const skeletonCompatibilityReport = buildSkeletonCompatibilityReport(SKELETON_TOOL_RECORDS, { limit: 12 });
const skeletonVerification = verifySkeletonToolSuite(SKELETON_TOOL_RECORDS, skeletonSourceTools.length);
const priceComparisonVerification = verifyPriceComparisonConfig();
const totalRuntimeRecordCount = TARGET_5M_FINAL_RUNTIME_RECORDS;
const runtimeCategoryCounts = runtimeTools.reduce((counts, tool) => {
  counts[tool.category] = (counts[tool.category] || 0) + 1;
  return counts;
}, { ...TARGET_5M_CATEGORY_COUNTS });
const baseToolsById = new Map(runtimeTools.map((tool) => [tool.id, tool]));
const catalogSkeletonReplacements = new Map(SKELETON_TOOL_RECORDS
  .filter((tool) => retiredCatalogToolIds.has(tool.skeletonBaseToolId))
  .map((tool) => [tool.skeletonBaseToolId, tool]));
let retiredCatalogAliasCount = 0;
for (const tool of tools) {
  if (baseToolsById.has(tool.id)) continue;
  const replacement = catalogSkeletonReplacements.get(tool.id);
  if (!replacement) continue;
  baseToolsById.set(tool.id, replacement);
  retiredCatalogAliasCount += 1;
}
const toolsById = {
  get(id) {
    return baseToolsById.get(id) || resolveTarget5mRecordById(id);
  },
  has(id) {
    return baseToolsById.has(id) || Boolean(resolveTarget5mRecordById(id));
  },
  set(id, tool) {
    baseToolsById.set(id, tool);
    return this;
  },
  values() {
    return baseToolsById.values();
  },
  entries() {
    return baseToolsById.entries();
  },
  [Symbol.iterator]() {
    return baseToolsById[Symbol.iterator]();
  }
};
const visibleRetiredCatalogToolCount = runtimeTools.filter((tool) => retiredCatalogRecordSet.has(tool)).length;
const fastProjectOsTools = Object.freeze(runtimeTools.slice(0, 2500));
let toolGenomeIndex = { byId: {}, toolCount: 0, indexedCapabilities: 0 };
let inHouseCompatibilityReport = {
  matrix: { linkCount: 0, parallelSafeLinks: 0, approvalLinks: 0 },
  sampleLinks: [],
  summary: "Full in-house compatibility report is deferred so the site starts immediately."
};
const inHouseVerification = verifyInHouseToolSuite();
const massiveToolFactorySummary = buildMassiveToolFactorySummary();
const massiveToolFactoryVerification = verifyMassiveToolFactorySuite({ knownEngines: engineNames });
const functionalToolsSummary = buildFunctionalToolsSummary();
const functionalToolsVerification = verifyFunctionalToolsSuite();
const miniAppSummary = buildMiniAppSummary();
const miniAppVerification = verifyMiniAppSuite({ knownEngines: engineNames });
const dailyDealingsSummary = buildDailyDealingsSummary();
const dailyDealingsVerification = verifyDailyDealingsSuite({ knownEngines: engineNames });
const frontierToolSummary = buildFrontierToolSummary();
const frontierToolVerification = verifyFrontierToolSuite({ knownEngines: engineNames });
const nextFrontierToolSummary = buildNextFrontierToolSummary();
const nextFrontierToolVerification = verifyNextFrontierToolSuite({ knownEngines: engineNames, existingTools: preNextFrontierTools });
const expansionToolsSummary = buildExpansionToolsSummary();
const expansionToolsVerification = verifyExpansionToolsSuite({ knownEngines: engineNames });
const scaleExpansionSummary = buildScaleExpansionSummary();
const scaleExpansionVerification = verifyScaleExpansionSuite({ knownEngines: engineNames });
const target500kSummary = buildTarget500kSummary();
const target500kVerification = verifyTarget500kSuite({ knownEngines: engineNames });
const target5mSummary = buildTarget5mSummary();
const target5mVerification = verifyTarget5mSuite({ knownEngines: engineNames });
const spaceStudioVerification = verifySpaceStudioSuite();

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
  billingAccount: createDefaultBillingAccount(),
  projectCreditEstimate: null,
  projectActualCreditCost: null,
  premiumTheme: createDefaultThemeProfile(),
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
  audioVisualizer: createDefaultAudioVisualizerSettings(),
  spaceStudio: createDefaultSpaceStudioSettings(),
  cockpitPhase: "prompt",
  cockpitPage: "prompt",
  cockpitBatchIndex: 0,
  cockpitBatchSize: 64,
  cockpitRunning: false,
  cockpitLastOutput: "",
  cockpitGeneratedFile: null,
  cockpitSelectedCategory: "",
  cockpitPromptTemplate: null,
  cockpitBuilderSpec: null,
  cockpitAutoResolveTimer: null
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
  commandSearch: document.querySelector("#command-search"),
  commandSearchRun: document.querySelector("#command-search-run"),
  commandSearchCount: document.querySelector("#command-search-count"),
  profileOpenBuilder: document.querySelector("#profile-open-builder"),
  profileIconPill: document.querySelector("#profile-icon-pill"),
  profileTierLabel: document.querySelector("#profile-tier-label"),
  profileCreditBalance: document.querySelector("#profile-credit-balance"),
  profileCreditHover: document.querySelector("#profile-credit-hover"),
  projectCreditCost: document.querySelector("#project-credit-cost"),
  cockpitCategorySearch: document.querySelector("#cockpit-category-search"),
  cockpitCategoryDropdown: document.querySelector("#cockpit-category-dropdown"),
  cockpitTemplateHint: document.querySelector("#cockpit-template-hint"),
  cockpitTemplateUse: document.querySelector("#cockpit-template-use"),
  cockpitPhaseLabel: document.querySelector("#cockpit-phase-label"),
  cockpitMainMenu: document.querySelector("#cockpit-main-menu"),
  cockpitPageButtons: document.querySelectorAll("[data-cockpit-page]"),
  cockpitPageDrawer: document.querySelector("#cockpit-page-drawer"),
  cockpitPageTitle: document.querySelector("#cockpit-page-title"),
  cockpitPageBody: document.querySelector("#cockpit-page-body"),
  cockpitPageClose: document.querySelector("#cockpit-page-close"),
  promptBuilderPanel: document.querySelector("#prompt-builder-panel"),
  promptBuilderSummary: document.querySelector("#prompt-builder-summary"),
  promptBuilderPotential: document.querySelector("#prompt-builder-potential"),
  promptBuilderTemplate: document.querySelector("#prompt-builder-template"),
  promptBuilderFields: document.querySelector("#prompt-builder-fields"),
  promptBuilderAccept: document.querySelector("#prompt-builder-accept"),
  promptBuilderSkip: document.querySelector("#prompt-builder-skip"),
  promptAdjustPanel: document.querySelector("#prompt-adjust-panel"),
  promptAdjustSummary: document.querySelector("#prompt-adjust-summary"),
  promptIssueList: document.querySelector("#prompt-issue-list"),
  promptApplyAdjustments: document.querySelector("#prompt-apply-adjustments"),
  promptMarkReady: document.querySelector("#prompt-mark-ready"),
  search: document.querySelector("#tool-search"),
  category: document.querySelector("#category-filter"),
  layout: document.querySelector("#layout-select"),
  results: document.querySelector("#tool-results"),
  resultCount: document.querySelector("#result-count"),
  grid: document.querySelector("#workspace-grid"),
  cockpitWorkflowStage: document.querySelector("#cockpit-workflow-stage"),
  cockpitWorkflowGrid: document.querySelector("#cockpit-workflow-grid"),
  cockpitWorkflowTitle: document.querySelector("#cockpit-workflow-title"),
  cockpitWorkflowStatus: document.querySelector("#cockpit-workflow-status"),
  cockpitWorkflowBatch: document.querySelector("#cockpit-workflow-batch"),
  cockpitAnswerUi: document.querySelector("#cockpit-answer-ui"),
  cockpitAnswerContent: document.querySelector("#cockpit-answer-content"),
  answerBackToWorkflow: document.querySelector("#answer-back-to-workflow"),
  answerAdjustPrompt: document.querySelector("#answer-adjust-prompt"),
  answerSaveDevice: document.querySelector("#answer-save-device"),
  answerSaveCloud: document.querySelector("#answer-save-cloud"),
  answerSaveDrive: document.querySelector("#answer-save-drive"),
  answerShare: document.querySelector("#answer-share"),
  answerPrint: document.querySelector("#answer-print"),
  answerActionStatus: document.querySelector("#answer-action-status"),
  cockpitPrintRoot: document.querySelector("#cockpit-print-root"),
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
  spaceStudioStats: document.querySelector("#space-studio-stats"),
  spaceProgramSelect: document.querySelector("#space-program-select"),
  spacePreset: document.querySelector("#space-preset"),
  spaceRoomUpload: document.querySelector("#space-room-upload"),
  spaceProductUpload: document.querySelector("#space-product-upload"),
  spaceModelUpload: document.querySelector("#space-model-upload"),
  spaceRoomWidth: document.querySelector("#space-room-width"),
  spaceRoomDepth: document.querySelector("#space-room-depth"),
  spaceRoomHeight: document.querySelector("#space-room-height"),
  spaceProductWidth: document.querySelector("#space-product-width"),
  spaceProductHeight: document.querySelector("#space-product-height"),
  spaceProductDepth: document.querySelector("#space-product-depth"),
  spaceStudioPreview: document.querySelector("#space-studio-preview"),
  spaceOpenTool: document.querySelector("#space-open-tool"),
  spaceFillWorkspace: document.querySelector("#space-fill-workspace"),
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
const projectIdeaLibrary = {
  project: null,
  mega: null,
  loading: null,
  error: ""
};

const isProjectIdeaLibraryReady = () => Boolean(projectIdeaLibrary.project && projectIdeaLibrary.mega);

async function loadProjectIdeaLibrary() {
  if (isProjectIdeaLibraryReady()) return projectIdeaLibrary;
  if (projectIdeaLibrary.loading) return projectIdeaLibrary.loading;
  projectIdeaLibrary.error = "";
  if (elements.projectTemplateStats) {
    elements.projectTemplateStats.textContent = "Loading project idea library...";
  }
  projectIdeaLibrary.loading = Promise.all([
    import("./project-templates.js"),
    import("./project-megagenerator.js")
  ])
    .then(([project, mega]) => {
      projectIdeaLibrary.project = project;
      projectIdeaLibrary.mega = mega;
      buildProjectTemplateFilters();
      renderProjectTemplates();
      return projectIdeaLibrary;
    })
    .catch((error) => {
      projectIdeaLibrary.error = error instanceof Error ? error.message : String(error);
      renderProjectTemplates();
      throw error;
    })
    .finally(() => {
      projectIdeaLibrary.loading = null;
    });
  return projectIdeaLibrary.loading;
}

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
  option.textContent = `All categories (${totalRuntimeRecordCount})`;
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
  option.textContent = `All categories (${totalRuntimeRecordCount})`;
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
  elements.projectTemplateComplexity.replaceChildren();
  const all = document.createElement("option");
  all.value = "All";
  all.textContent = "All project sizes";
  elements.projectTemplateComplexity.append(all);

  if (!isProjectIdeaLibraryReady()) {
    const lazy = document.createElement("option");
    lazy.value = "All";
    lazy.textContent = projectIdeaLibrary.loading ? "Loading project library..." : "Project library loads on search";
    lazy.disabled = true;
    elements.projectTemplateComplexity.append(lazy);
    return;
  }

  const {
    PROJECT_COMPLEXITY_COUNTS
  } = projectIdeaLibrary.project;
  const {
    MEGA_PROJECT_COMPLEXITY_COUNTS,
    MEGA_PROJECT_UI_MAX,
    MEGA_PROJECT_UI_MIN
  } = projectIdeaLibrary.mega;

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

function mergeVirtualToolResults(baseTools, virtualResults = []) {
  const seen = new Set();
  const merged = [];
  for (const { tool } of virtualResults) {
    if (!tool?.id || seen.has(tool.id)) continue;
    seen.add(tool.id);
    merged.push(tool);
  }
  for (const tool of baseTools) {
    if (!tool?.id || seen.has(tool.id)) continue;
    seen.add(tool.id);
    merged.push(tool);
  }
  return merged;
}

function getFilteredToolsFor(query, category, virtualLimit = 96) {
  const baseFiltered = runtimeTools
    .map((tool) => ({ tool, score: scoreTool(tool, query) }))
    .filter(({ tool, score }) => score > 0 && (category === "All" || tool.category === category))
    .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
    .map(({ tool }) => tool);
  const target5m = searchTarget5mExpansion(query, { limit: virtualLimit, category });
  return {
    tools: mergeVirtualToolResults(baseFiltered, target5m.results),
    matchCount: baseFiltered.length + target5m.totalMatches
  };
}

function getFilteredTools() {
  const result = getFilteredToolsFor(state.query, state.category, Math.max(96, maxResults * 2));
  getFilteredTools.lastMatchCount = result.matchCount;
  return result.tools;
}

function getPlanningToolsForPrompt(prompt, limit = 96) {
  const target5m = searchTarget5mExpansion(prompt, { limit, category: "All" });
  return mergeVirtualToolResults(runtimeTools, target5m.results);
}

function setSearchInputs(value) {
  const next = String(value || "");
  if (elements.search && elements.search.value !== next) elements.search.value = next;
  if (elements.commandSearch && elements.commandSearch.value !== next) elements.commandSearch.value = next;
}

function updateCommandSearchCount(matchCount) {
  if (!elements.commandSearchCount) return;
  elements.commandSearchCount.textContent = state.query
    ? `${matchCount.toLocaleString()} live matches`
    : `${totalRuntimeRecordCount.toLocaleString()} matrix records ready`;
}

function runToolSearchFrom(value, source) {
  state.query = String(value || "").trim();
  setSearchInputs(value);
  pushAnalyticsEvent("search", { query: state.query, source });
  renderResults();
}

function formatCredits(value) {
  const credits = Number(value || 0);
  if (credits >= 1000) return credits.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (credits >= 10) return credits.toLocaleString(undefined, { maximumFractionDigits: 1 });
  return credits.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatUsd(value) {
  return `$${Number(value || 0).toFixed(4)}`;
}

function currentProfileTier() {
  return PROFILE_TIER_DEFINITIONS.find((tier) => tier.id === state.billingAccount?.tierId) || PROFILE_TIER_DEFINITIONS[0];
}

function syncBillingTierToLegacyAccess() {
  state.subscriptionStatus = state.billingAccount?.tierId === "trial" ? SUBSCRIPTION_ACCESS.FREE : SUBSCRIPTION_ACCESS.PAID;
  if (elements.subscriptionStatus) elements.subscriptionStatus.value = state.subscriptionStatus;
}

function estimatePromptBeforeQueue(prompt) {
  return estimateProjectCreditCost({
    prompt,
    queue: [],
    toolsById,
    fileAnalysis: state.fileAnalysis || activeProject().fileAnalysis
  });
}

function refreshProjectCreditEstimate() {
  const prompt = elements.commandSearch?.value.trim() || elements.aiPrompt?.value.trim() || activeProject().prompt || "";
  if (!prompt) {
    state.projectCreditEstimate = null;
    if (elements.projectCreditCost) elements.projectCreditCost.textContent = "Est. 0.00 credits";
    return null;
  }
  state.projectCreditEstimate = estimatePromptBeforeQueue(prompt);
  if (elements.projectCreditCost) {
    elements.projectCreditCost.textContent = `Est. ${formatCredits(state.projectCreditEstimate.credits)} credits`;
    elements.projectCreditCost.title = `${formatUsd(state.projectCreditEstimate.costUsd)} estimated Cloudflare usage. Final charge is settled after an answer is produced.`;
  }
  return state.projectCreditEstimate;
}

function renderBillingProfileSummary() {
  state.billingAccount = normalizeBillingAccount(state.billingAccount);
  const account = state.billingAccount;
  const tier = currentProfileTier();
  if (elements.profileIconPill) elements.profileIconPill.textContent = account.profileIcon || "TG";
  if (elements.profileTierLabel) elements.profileTierLabel.textContent = `${tier.label} Profile`;
  if (elements.profileCreditBalance) {
    elements.profileCreditBalance.textContent = tier.billingMode === "enterprise-paygo"
      ? "Pay-go invoice"
      : `${formatCredits(account.creditBalance)} credits`;
  }
  if (elements.profileCreditHover) elements.profileCreditHover.textContent = buildCreditLedgerTooltip(account);
  refreshProjectCreditEstimate();
}

function buildProjectEstimateFromQueue(project) {
  return estimateProjectCreditCost({
    prompt: project.prompt || "",
    queue: project.waterfallQueue || [],
    toolsById,
    fileAnalysis: state.fileAnalysis || project.fileAnalysis
  });
}

function showCreditShortage(estimate) {
  const account = normalizeBillingAccount(state.billingAccount);
  const missing = Math.max(0, Number(estimate?.credits || 0) - Number(account.creditBalance || 0));
  if (elements.commandSearchCount) {
    elements.commandSearchCount.textContent = `Need ${formatCredits(missing)} more credits before workflow can run`;
  }
  renderBillingProfileSummary();
  renderCockpitMenuPage("profile");
}

function settleCockpitProjectCredits(reason = "project-answer") {
  const project = activeProject();
  const settlementId = project.creditSettlementId || `${project.id}-${reason}-${project.artifacts?.length || 0}-${state.cockpitGeneratedFile?.filename || "answer"}`;
  if (project.creditSettlementId === settlementId) return null;
  const actual = calculateActualProjectCreditCost({
    prompt: project.prompt || "",
    queue: project.waterfallQueue || [],
    artifacts: project.artifacts || [],
    generatedFile: state.cockpitGeneratedFile,
    toolsById,
    fileAnalysis: state.fileAnalysis || project.fileAnalysis
  });
  const result = recordCreditSpend(state.billingAccount, {
    type: "project-answer",
    label: `${project.name || "ToolGrid project"} answer`,
    credits: actual.credits,
    projectId: project.id,
    projectName: project.name,
    settlementId,
    costBasis: "Cloudflare usage only",
    note: `Actual settled after answer: ${actual.completedTaskCount || actual.taskCount} completed task(s), ${formatUsd(actual.costUsd)} Cloudflare usage.`
  });
  state.billingAccount = result.account;
  state.projectActualCreditCost = actual;
  project.creditSettlementId = settlementId;
  project.creditEstimate = state.projectCreditEstimate;
  project.creditActual = actual;
  appendProjectEvent(project, `Settled ${formatCredits(actual.credits)} credit${actual.credits === 1 ? "" : "s"} from actual Cloudflare usage after answer generation.`, "success");
  renderBillingProfileSummary();
  return actual;
}

function spendDownloadCredits(file) {
  const bytes = new Blob([file.content || ""]).size;
  const estimate = estimateDownloadCreditCost({ bytes, fileType: file.mime || "answer" });
  if (!hasEnoughCredits(state.billingAccount, estimate)) {
    setAnswerActionStatus(`Need ${formatCredits(estimate.credits)} credits for this export handoff.`);
    renderCockpitMenuPage("profile");
    return false;
  }
  const project = activeProject();
  const result = recordCreditSpend(state.billingAccount, {
    type: "download-export",
    label: `Download ${file.filename}`,
    credits: estimate.credits,
    projectId: project.id,
    projectName: project.name,
    settlementId: `${project.id}-download-${file.filename}-${bytes}`,
    costBasis: "Cloudflare download/storage trace only",
    note: estimate.note
  });
  state.billingAccount = result.account;
  renderBillingProfileSummary();
  return true;
}

const promptTemplateProfiles = [
  {
    id: "finance-file",
    match: /expense|budget|bill|invoice|subscription|bookkeeping|tax|cash|finance|money|bank|loan|price/i,
    categoryHint: /finance|money|bill|bookkeeping|tax|price|shopping|business/i,
    answerMode: "Downloadable tracker or money plan",
    template: "Create a [file format or answer type] for [time period] that tracks [specific categories/items], includes [budget/income fields], uses [source data], and ends with [save/share/print-ready output].",
    fields: [
      ["goal", "Exact money task", "What should this solve?", "Example: Make a monthly expense tracker file."],
      ["fileFormat", "File or answer format", "CSV, spreadsheet, printable report, dashboard, checklist...", "Example: CSV file I can open in Excel."],
      ["timePeriod", "Time period", "Month, week, year, billing cycle, trip dates...", "Example: July 2026 monthly template."],
      ["categories", "Categories/items", "Expense categories, bill names, vendors, accounts...", "Example: rent, groceries, utilities, gas, subscriptions."],
      ["budgetFields", "Budget fields", "Income, planned amount, actual amount, paid, due date, notes...", "Example: income, budgeted amount, actual amount, remaining, paid."]
    ]
  },
  {
    id: "space-3d",
    match: /3d|room|space|furniture|decor|contractor|cad|dimension|see in your space|layout|interior|build plan/i,
    categoryHint: /3d|space|contractor|home|construction|design|field|visual/i,
    answerMode: "3D room or placement plan",
    template: "Create a [3D/room/placement output] for [space or room], using [product/object details], [dimensions or inferred scale], [style constraints], and [final export/use case].",
    fields: [
      ["goal", "Exact space task", "What should the 3D/space answer do?", "Example: Place a couch and shelves into my living room plan."],
      ["space", "Room or site", "Room type, photo notes, job site, CAD source, business use...", "Example: 12 ft by 15 ft living room with one window."],
      ["objects", "Products or objects", "Furniture, appliance, fixture, CAD design, product image...", "Example: sectional couch, coffee table, wall shelf."],
      ["dimensions", "Dimensions/scale", "Known sizes or what should be inferred.", "Example: couch is 84 in wide, ceiling 8 ft."],
      ["style", "Style/theme", "Modern, rustic, clinic, showroom, contractor presentation...", "Example: warm modern, realistic lighting."]
    ]
  },
  {
    id: "content-marketing",
    match: /content|post|social|email|seo|marketing|caption|blog|newsletter|ad|sales|copy|brand/i,
    categoryHint: /seo|marketing|content|social|sales|creator|email|communication/i,
    answerMode: "Content pack",
    template: "Create [content type] for [audience/platform], about [topic/offer], in [tone/style], with [must-use words], and include [variants/export format].",
    fields: [
      ["goal", "Content goal", "What should the content accomplish?", "Example: Generate posts for a product launch."],
      ["audience", "Audience/platform", "Customer type and where it will be posted.", "Example: Instagram and email list for local customers."],
      ["topic", "Topic/offer", "Product, event, campaign, page, service...", "Example: weekend sale on handmade candles."],
      ["tone", "Tone/style", "Professional, fun, luxury, urgent, simple...", "Example: friendly, polished, not hypey."],
      ["mustUse", "Words/phrases/data", "Names, claims, prices, links, dates, hashtags...", "Example: use 'small batch', '$20', and 'Saturday pickup'."]
    ]
  },
  {
    id: "data-workflow",
    match: /csv|json|spreadsheet|table|data|clean|convert|dedupe|normalize|analyze|report|dashboard/i,
    categoryHint: /data|developer|spreadsheet|report|dashboard|analytics/i,
    answerMode: "Clean table, report, or dashboard",
    template: "Take [source data] and produce [output format] that [cleanup/analysis goal], keeps [important columns], flags [issues], and returns [handoff format].",
    fields: [
      ["goal", "Data task", "What should happen to the data?", "Example: Clean my vendor CSV and summarize totals."],
      ["sourceData", "Source data", "Paste rows, describe upload, or name columns.", "Example: item, amount, category, date."],
      ["rules", "Cleanup/analysis rules", "Dedupe, trim, group, total, validate, compare...", "Example: remove blanks, group by category, total amounts."],
      ["columns", "Important columns", "Fields that must be kept or created.", "Example: date, vendor, category, amount, notes."],
      ["outputFormat", "Output format", "CSV, markdown table, JSON, report, dashboard...", "Example: markdown report plus CSV-ready rows."]
    ]
  },
  {
    id: "research-decision",
    match: /research|compare|fact|verify|source|quote|find|decision|recommend|which|best|evidence/i,
    categoryHint: /research|fact|comparison|decision|shopping|analytics/i,
    answerMode: "Decision report",
    template: "Research/compare [question/options] using [source rules], filter by [criteria], show [evidence/table], and finish with [decision or next action].",
    fields: [
      ["goal", "Question to answer", "What exact question should be answered?", "Example: Compare three software options for a small shop."],
      ["options", "Options or search space", "Items, competitors, sources, URLs, claims...", "Example: Option A, Option B, Option C."],
      ["criteria", "Decision criteria", "Budget, quality, risk, speed, compatibility...", "Example: under $50/month, easy setup, exportable data."],
      ["sourceRules", "Source rules", "Official sources, dates, blocked sources, citation needs...", "Example: use official docs and recent pricing pages."],
      ["finalDecision", "Final output", "Recommendation, shortlist, scorecard, risk list...", "Example: ranked table with best pick and why."]
    ]
  },
  {
    id: "schedule-operations",
    match: /schedule|calendar|plan|workflow|task|checklist|routine|project|deadline|event|route|operations/i,
    categoryHint: /schedule|operations|project|task|event|route|daily|program/i,
    answerMode: "Workflow plan",
    template: "Build a [workflow/checklist/calendar] for [goal], covering [people/resources], [dates/deadlines], [constraints], and [final handoff].",
    fields: [
      ["goal", "Workflow goal", "What needs to get done?", "Example: Plan a move-out checklist."],
      ["people", "People/resources", "Owners, team, family, vendors, tools...", "Example: me, landlord, moving company."],
      ["dates", "Dates/deadlines", "Due dates, recurrence, appointment windows...", "Example: finish by August 1."],
      ["constraints", "Constraints", "Budget, access, time, permissions, risks...", "Example: weekends only, budget $500."],
      ["handoff", "Final handoff", "Checklist, calendar, message pack, printable runbook...", "Example: printable checklist and reminder schedule."]
    ]
  },
  {
    id: "media-design",
    match: /image|video|audio|visual|theme|color|rgb|logo|design|render|clip|music|visualizer|asset/i,
    categoryHint: /media|visual|theme|color|audio|video|design|creative/i,
    answerMode: "Media/design output",
    template: "Create [media/design output] for [asset or idea], in [style/theme], using [source files/details], with [variations/settings], and export as [final format].",
    fields: [
      ["goal", "Creative goal", "What should be generated or edited?", "Example: Make an audio visualizer concept."],
      ["asset", "Asset/source", "Image, audio, video, logo, text, product photo...", "Example: uploaded product image and synthwave track."],
      ["style", "Style/theme", "Colors, mood, brand, effects, motion...", "Example: neon cyan and magenta, sci-fi cockpit."],
      ["settings", "Settings/variations", "Size, count, duration, effects, constraints...", "Example: 64 variations, 15-second loop."],
      ["exportFormat", "Export format", "PNG, SVG, GIF, MP4, CSS, report...", "Example: short clip and downloadable preset."]
    ]
  },
  {
    id: "general",
    match: /.*/i,
    categoryHint: /.*/i,
    answerMode: "Targeted answer",
    template: "Create [answer type] for [specific goal], using [user-provided details], in [style/format], with [constraints], and finish with [clear next action].",
    fields: [
      ["goal", "Exact goal", "What should ToolGrid accomplish?", "Example: Build a useful answer from my notes."],
      ["answerType", "Answer type", "File, checklist, report, plan, comparison, design, code...", "Example: step-by-step plan."],
      ["details", "User words/data", "Paste the exact words, phrases, rows, or facts to preserve.", "Example: include these names, dates, prices, and notes."],
      ["style", "Style/format", "Tone, layout, export type, audience...", "Example: clear, practical, printable."],
      ["constraints", "Constraints", "Budget, tools, time, sources, exclusions...", "Example: in-house tools only, no outside tool sites."]
    ]
  }
];

function categoryEntries() {
  return Object.entries(runtimeCategoryCounts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => a.category.localeCompare(b.category));
}

function scoreCockpitCategory(query, entry) {
  const q = normalize(query);
  const haystack = normalize(entry.category);
  if (!q) return entry.count > 1000 ? 2 : 1;
  let score = haystack.includes(q) ? 20 : 0;
  for (const token of q.split(/\s+/).filter(Boolean)) {
    if (haystack.includes(token)) score += token.length > 3 ? 8 : 3;
  }
  const template = promptTemplateProfiles.find((profile) => profile.categoryHint.test(entry.category));
  if (template?.match.test(query)) score += 10;
  return score;
}

function suggestCockpitCategories(query, limit = 12) {
  return categoryEntries()
    .map((entry) => ({ ...entry, score: scoreCockpitCategory(query, entry) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.count - a.count || a.category.localeCompare(b.category))
    .slice(0, limit);
}

function selectPromptProfile(prompt = "", category = "") {
  return promptTemplateProfiles.find((profile) => profile.match.test(prompt) || profile.categoryHint.test(category)) || promptTemplateProfiles[promptTemplateProfiles.length - 1];
}

function fieldObjects(profile) {
  return profile.fields.map(([id, label, reason, placeholder]) => ({ id, label, reason, placeholder, required: true }));
}

function inferFieldValue(prompt, fieldId, profile) {
  const text = String(prompt || "").trim();
  if (fieldId === "goal") return text;
  if (fieldId === "fileFormat" && /\bcsv\b/i.test(text)) return "CSV file";
  if (fieldId === "fileFormat" && /\bexcel|xlsx|spreadsheet\b/i.test(text)) return "Spreadsheet file";
  if (fieldId === "timePeriod" && /\bmonthly|month\b/i.test(text)) return "Monthly template";
  if (fieldId === "categories" && /expense|budget/i.test(text)) return "rent, utilities, groceries, transportation, subscriptions, other";
  if (fieldId === "budgetFields" && /expense|budget/i.test(text)) return "income, budgeted amount, actual amount, remaining, paid status, notes";
  if (fieldId === "answerType") return profile.answerMode;
  if (fieldId === "style" && /sci-fi|cockpit|nexus|lattice/i.test(text)) return "sci-fi cockpit style";
  return "";
}

function buildUserWordSummary(prompt) {
  const stop = new Set("the and for that with this from have has are was were you your our but not into about more can will would should there their they them then than when where what how why also all any use using used made make build create need needs want wants a an to of in on it is be by as".split(" "));
  return [...new Set((normalize(prompt).match(/[a-z0-9][a-z0-9'-]{2,}/g) || []).filter((word) => !stop.has(word)))].slice(0, 12).join(", ");
}

function buildPromptBuilderSpec(prompt) {
  const category = state.cockpitSelectedCategory || suggestCockpitCategories(prompt, 1)[0]?.category || "General";
  const profile = selectPromptProfile(prompt, category);
  const analysis = analyzeProjectPromptForQuestions({ prompt, fileAnalysis: state.fileAnalysis || activeProject().fileAnalysis });
  const fieldsById = new Map();
  for (const field of fieldObjects(profile)) fieldsById.set(field.id, field);
  for (const question of analysis.questions || []) {
    fieldsById.set(question.id, {
      id: question.id,
      label: question.label,
      reason: question.reason,
      placeholder: question.placeholder,
      required: true
    });
  }
  fieldsById.set("userWords", {
    id: "userWords",
    label: "Words, phrases, data, or theme to preserve",
    reason: "These words keep the answer targeted to the user's wording instead of drifting generic.",
    placeholder: "Example: exact product names, categories, brand voice, dimensions, prices, dates...",
    required: false
  });

  const fields = [...fieldsById.values()].map((field) => ({
    ...field,
    value: state.clarifyingAnswers[field.id] || inferFieldValue(prompt, field.id, profile) || ""
  }));
  const userWords = fields.find((field) => field.id === "userWords");
  if (userWords && !userWords.value) userWords.value = buildUserWordSummary(prompt);

  return {
    originalPrompt: prompt,
    category,
    profile,
    fields,
    template: profile.template,
    potentialAnswers: [
      { title: profile.answerMode, detail: `Best fit for ${category}.` },
      { title: "Specific prompt", detail: `${fields.filter((field) => field.required).length} detail fields keep this from becoming generic.` },
      { title: "Workflow target", detail: "Accepted details populate the 64-cell waterfall automatically." }
    ],
    analysis
  };
}

function fillPromptTemplate(template, answers) {
  return template
    .replace("[file format or answer type]", answers.fileFormat || answers.answerType || answers.outputFormat || "answer")
    .replace("[time period]", answers.timePeriod || answers.dates || "the needed time period")
    .replace("[specific categories/items]", answers.categories || answers.options || answers.objects || "the user's specific items")
    .replace("[budget/income fields]", answers.budgetFields || "the needed tracking fields")
    .replace("[source data]", answers.sourceData || answers.details || answers.userWords || "the user's provided data")
    .replace("[save/share/print-ready output]", answers.outputFormat || answers.finalDecision || "a save/share/print-ready result")
    .replace("[3D/room/placement output]", answers.answerType || "3D placement plan")
    .replace("[space or room]", answers.space || "the specified space")
    .replace("[product/object details]", answers.objects || answers.asset || "the product/object details")
    .replace("[dimensions or inferred scale]", answers.dimensions || "manual or inferred dimensions")
    .replace("[style constraints]", answers.style || "the requested style")
    .replace("[final export/use case]", answers.exportFormat || answers.handoff || "the final use case")
    .replace("[content type]", answers.answerType || "content")
    .replace("[audience/platform]", answers.audience || "the target audience/platform")
    .replace("[topic/offer]", answers.topic || answers.goal || "the topic")
    .replace("[tone/style]", answers.tone || answers.style || "the requested tone")
    .replace("[must-use words]", answers.mustUse || answers.userWords || "must-use words")
    .replace("[variants/export format]", answers.exportFormat || "usable variants")
    .replace("[cleanup/analysis goal]", answers.rules || answers.goal || "the cleanup/analysis goal")
    .replace("[important columns]", answers.columns || "important fields")
    .replace("[issues]", answers.constraints || "issues")
    .replace("[handoff format]", answers.outputFormat || answers.handoff || "handoff format")
    .replace("[question/options]", answers.options || answers.goal || "the question/options")
    .replace("[source rules]", answers.sourceRules || "source rules")
    .replace("[criteria]", answers.criteria || "criteria")
    .replace("[evidence/table]", answers.outputFormat || "evidence table")
    .replace("[decision or next action]", answers.finalDecision || "decision and next action")
    .replace("[workflow/checklist/calendar]", answers.answerType || answers.handoff || "workflow")
    .replace("[people/resources]", answers.people || "people/resources")
    .replace("[dates/deadlines]", answers.dates || "dates/deadlines")
    .replace("[constraints]", answers.constraints || "constraints")
    .replace("[final handoff]", answers.handoff || "final handoff")
    .replace("[media/design output]", answers.answerType || "media/design output")
    .replace("[asset or idea]", answers.asset || answers.goal || "asset or idea")
    .replace("[style/theme]", answers.style || "style/theme")
    .replace("[source files/details]", answers.sourceData || answers.asset || "source files/details")
    .replace("[variations/settings]", answers.settings || "variations/settings")
    .replace("[final format]", answers.exportFormat || answers.outputFormat || "final format")
    .replace("[answer type]", answers.answerType || answers.fileFormat || "answer")
    .replace("[specific goal]", answers.goal || "specific goal")
    .replace("[user-provided details]", answers.details || answers.userWords || "user-provided details")
    .replace("[style/format]", answers.style || answers.outputFormat || "style/format")
    .replace("[clear next action]", answers.handoff || answers.finalDecision || "clear next action");
}

function composeSpecificPrompt(spec, answers) {
  const filled = fillPromptTemplate(spec.template, answers);
  const details = spec.fields
    .map((field) => [field.id, answers[field.id] || field.value || ""])
    .filter(([, value]) => String(value).trim())
    .map(([id, value]) => `${id}: ${value}`)
    .join("\n");
  return [
    filled,
    "",
    `Original user prompt: ${spec.originalPrompt}`,
    `Category focus: ${spec.category}`,
    `Target answer type: ${spec.profile.answerMode}`,
    details ? `Details:\n${details}` : "",
    "Use the user's exact words and data where provided. Return a direct answer, file, table, plan, or program output that satisfies the original prompt."
  ].filter(Boolean).join("\n");
}

function renderCockpitTemplateHint(prompt = elements.commandSearch?.value || "") {
  const category = state.cockpitSelectedCategory || suggestCockpitCategories(prompt, 1)[0]?.category || "";
  const profile = selectPromptProfile(prompt, category);
  state.cockpitPromptTemplate = { category, profile };
  if (elements.cockpitTemplateHint) {
    elements.cockpitTemplateHint.textContent = category
      ? `${category}: ${profile.template}`
      : profile.template;
  }
}

function renderCockpitCategoryDropdown(query = "") {
  if (!elements.cockpitCategoryDropdown) return;
  const suggestions = suggestCockpitCategories(query || elements.commandSearch?.value || "", 12);
  const fragment = document.createDocumentFragment();
  for (const suggestion of suggestions) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "option");
    button.innerHTML = `<strong>${suggestion.category}</strong><span>${suggestion.count.toLocaleString()} records</span>`;
    button.addEventListener("click", () => {
      state.cockpitSelectedCategory = suggestion.category;
      elements.cockpitCategorySearch.value = suggestion.category;
      elements.cockpitCategoryDropdown.classList.add("hidden");
      renderCockpitTemplateHint(elements.commandSearch?.value || suggestion.category);
    });
    fragment.append(button);
  }
  elements.cockpitCategoryDropdown.replaceChildren(fragment);
  elements.cockpitCategoryDropdown.classList.toggle("hidden", suggestions.length === 0);
}

function useCockpitTemplate() {
  const prompt = elements.commandSearch?.value.trim() || "";
  const category = state.cockpitSelectedCategory || suggestCockpitCategories(prompt, 1)[0]?.category || "General";
  const profile = selectPromptProfile(prompt, category);
  const seed = prompt || "my specific project";
  const next = `${profile.template}\n\nMy details: ${seed}`;
  elements.commandSearch.value = next;
  elements.aiPrompt.value = next;
  activeProject().prompt = next;
  renderCockpitTemplateHint(next);
  if (elements.commandSearchCount) elements.commandSearchCount.textContent = "Template loaded; replace bracketed parts with your details";
}

function allPromptBuilderRequiredFieldsResolved() {
  const inputs = [...(elements.promptBuilderFields?.querySelectorAll("[data-builder-field]") || [])];
  return inputs.filter((input) => input.dataset.required === "true").every((input) => input.value.trim().length > 0);
}

function schedulePromptBuilderAutoResolution() {
  clearTimeout(state.cockpitAutoResolveTimer);
  state.cockpitAutoResolveTimer = setTimeout(() => {
    if (allPromptBuilderRequiredFieldsResolved()) resolveCockpitPromptBuilder();
  }, 900);
}

function renderCockpitPromptBuilder(spec) {
  state.cockpitBuilderSpec = spec;
  state.cockpitSelectedCategory = spec.category;
  if (elements.cockpitCategorySearch) elements.cockpitCategorySearch.value = spec.category;
  if (elements.promptBuilderSummary) elements.promptBuilderSummary.textContent = `${spec.category} -> ${spec.profile.answerMode}`;
  if (elements.promptBuilderTemplate) elements.promptBuilderTemplate.textContent = spec.template;

  const potential = document.createDocumentFragment();
  for (const item of spec.potentialAnswers) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "prompt-potential-card";
    card.innerHTML = `<strong>${item.title}</strong><span>${item.detail}</span>`;
    card.addEventListener("click", () => {
      const answerField = elements.promptBuilderFields?.querySelector("[data-builder-field='answerType'], [data-builder-field='fileFormat'], [data-builder-field='outputFormat']");
      if (answerField && !answerField.value.trim()) answerField.value = item.title;
    });
    potential.append(card);
  }
  elements.promptBuilderPotential?.replaceChildren(potential);

  const fields = document.createDocumentFragment();
  for (const field of spec.fields) {
    const label = document.createElement("label");
    label.className = "prompt-builder-field";
    const title = document.createElement("strong");
    title.textContent = field.label;
    const reason = document.createElement("span");
    reason.textContent = field.reason;
    const input = document.createElement("textarea");
    input.rows = field.id === "goal" ? 2 : 1;
    input.placeholder = field.placeholder;
    input.value = field.value || "";
    input.dataset.builderField = field.id;
    input.dataset.required = field.required ? "true" : "false";
    input.addEventListener("input", schedulePromptBuilderAutoResolution);
    label.append(title, reason, input);
    fields.append(label);
  }
  elements.promptBuilderFields?.replaceChildren(fields);
  if (elements.commandSearchCount) elements.commandSearchCount.textContent = `${spec.fields.filter((field) => field.required).length} target fields ready`;
  setCockpitPhase("specify");
}

function collectPromptBuilderAnswers() {
  const answers = {};
  for (const input of elements.promptBuilderFields?.querySelectorAll("[data-builder-field]") || []) {
    answers[input.dataset.builderField] = input.value.trim();
  }
  state.clarifyingAnswers = answers;
  return answers;
}

function resolveCockpitPromptBuilder({ force = false } = {}) {
  const spec = state.cockpitBuilderSpec || buildPromptBuilderSpec(elements.commandSearch?.value.trim() || activeProject().prompt || "");
  if (!force && !allPromptBuilderRequiredFieldsResolved()) {
    if (elements.commandSearchCount) elements.commandSearchCount.textContent = "Fill each target field to continue";
    return;
  }
  const answers = collectPromptBuilderAnswers();
  const prompt = force ? spec.originalPrompt : composeSpecificPrompt(spec, answers);
  elements.commandSearch.value = prompt.replace(/\n{3,}/g, "\n\n").trim();
  elements.aiPrompt.value = prompt;
  activeProject().prompt = prompt;
  buildCockpitWorkflow(prompt);
}

function launchTopSearchResult() {
  submitCockpitPrompt();
}

function setCockpitPhase(phase) {
  state.cockpitPhase = phase;
  document.body.classList.add("cockpit-mode");
  document.body.dataset.cockpitPhase = phase;
  elements.promptBuilderPanel?.classList.toggle("hidden", phase !== "specify");
  elements.promptAdjustPanel?.classList.toggle("hidden", phase !== "adjust");
  elements.cockpitWorkflowStage?.classList.toggle("hidden", phase !== "workflow");
  elements.cockpitAnswerUi?.classList.toggle("hidden", phase !== "answer");
  if (elements.cockpitPhaseLabel) {
    const labels = {
      prompt: "Input mode",
      specify: "Specify target",
      adjust: "Adjust prompt",
      workflow: "Workflow running",
      answer: "Answer ready"
    };
    elements.cockpitPhaseLabel.textContent = labels[phase] || "Input mode";
  }
}

function appendProfileField(form, { label, value, type = "text", options = null, onChange }) {
  const wrap = document.createElement("label");
  wrap.className = "profile-builder-field";
  const title = document.createElement("span");
  title.textContent = label;
  let input;
  if (options) {
    input = document.createElement("select");
    for (const option of options) {
      const node = document.createElement("option");
      node.value = option.value;
      node.textContent = option.label;
      input.append(node);
    }
    input.value = value;
  } else {
    input = document.createElement("input");
    input.type = type;
    input.value = value ?? "";
  }
  input.addEventListener("input", () => onChange?.(input.value));
  input.addEventListener("change", () => onChange?.(input.value));
  wrap.append(title, input);
  form.append(wrap);
  return input;
}

function createProfileMetric(label, value, note = "") {
  const item = document.createElement("div");
  item.className = "profile-metric-card";
  const strong = document.createElement("strong");
  strong.textContent = value;
  const span = document.createElement("span");
  span.textContent = label;
  item.append(strong, span);
  if (note) {
    const small = document.createElement("small");
    small.textContent = note;
    item.append(small);
  }
  return item;
}

function renderProfileTierCards(root) {
  const section = document.createElement("section");
  section.className = "profile-builder-section";
  const title = document.createElement("h4");
  title.textContent = "Membership tiers";
  const grid = document.createElement("div");
  grid.className = "profile-tier-grid";
  for (const tier of PROFILE_TIER_DEFINITIONS) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `profile-tier-card ${state.billingAccount.tierId === tier.id ? "active" : ""}`;
    const price = tier.monthlyPriceUsd === null ? "Custom" : `$${tier.monthlyPriceUsd}/mo`;
    card.innerHTML = `<strong>${tier.label}</strong><span>${price}</span><small>${tier.description}</small>`;
    card.addEventListener("click", () => {
      state.billingAccount = normalizeBillingAccount({ ...state.billingAccount, tierId: tier.id });
      syncBillingTierToLegacyAccess();
      saveWorkspace();
      renderBillingProfileSummary();
      renderCockpitMenuPage("profile");
    });
    grid.append(card);
  }
  section.append(title, grid);
  root.append(section);
}

function renderProfileFeatureList(root) {
  const section = document.createElement("section");
  section.className = "profile-builder-section";
  const tier = currentProfileTier();
  const title = document.createElement("h4");
  title.textContent = `${tier.label} unlocked features`;
  const list = document.createElement("ul");
  list.className = "profile-feature-list";
  for (const feature of getUnlockedProfileFeatures(tier.id)) {
    const item = document.createElement("li");
    item.textContent = feature;
    list.append(item);
  }
  section.append(title, list);
  root.append(section);
}

function renderCreditPackageButtons(root) {
  const section = document.createElement("section");
  section.className = "profile-builder-section";
  const title = document.createElement("h4");
  title.textContent = "Credit packages";
  const note = document.createElement("p");
  note.textContent = "Credit burn is Cloudflare usage only. Overhead and profit are recovered when credits are bought.";
  const grid = document.createElement("div");
  grid.className = "profile-package-grid";
  for (const pack of [...ALA_CREDIT_PACKAGES, ...MONTHLY_CREDIT_PACKAGES]) {
    const button = document.createElement("button");
    button.type = "button";
    const credits = pack.credits || pack.includedCredits;
    const price = pack.retailPriceUsd || pack.monthlyPriceUsd;
    button.innerHTML = `<strong>${pack.label}</strong><span>${formatCredits(credits)} credits</span><small>$${Number(price).toFixed(2)} purchase model</small>`;
    button.addEventListener("click", () => {
      const result = addPurchasedCredits(state.billingAccount, pack.id);
      state.billingAccount = result.account;
      saveWorkspace();
      renderBillingProfileSummary();
      renderCockpitMenuPage("profile");
    });
    grid.append(button);
  }
  section.append(title, note, grid);
  root.append(section);
}

function renderEnterpriseInvoicePreview(root) {
  const section = document.createElement("section");
  section.className = "profile-builder-section";
  const title = document.createElement("h4");
  title.textContent = "Enterprise invoice model";
  const investor = buildEnterpriseInvestorRows();
  const invoice = buildEnterpriseMonthlyInvoice(state.billingAccount);
  const grid = document.createElement("div");
  grid.className = "profile-enterprise-grid";
  grid.append(
    createProfileMetric("Current month Cloudflare usage", `$${Number(invoice.cloudflareUsageUsd || 0).toFixed(4)}`),
    createProfileMetric("Overhead recovered on invoice", `$${Number(invoice.overheadRecoveryUsd || 0).toFixed(4)}`),
    createProfileMetric("Projected current invoice", `$${Number(invoice.invoiceTotalUsd || 0).toFixed(4)}`)
  );
  const table = document.createElement("div");
  table.className = "profile-investor-table";
  table.innerHTML = `<span>Employees</span><span>Cloudflare</span><span>Overhead</span><span>Invoice</span>`;
  for (const row of investor.slice(0, 7)) {
    table.insertAdjacentHTML("beforeend", `<span>${row.employees}</span><span>$${row.cloudflareUsageUsd}</span><span>$${row.overheadRecoveryUsd}</span><span>$${row.projectedInvoiceUsd}</span>`);
  }
  section.append(title, grid, table);
  root.append(section);
}

function renderCreditLedger(root) {
  const section = document.createElement("section");
  section.className = "profile-builder-section";
  const title = document.createElement("h4");
  title.textContent = "Credit trace ledger";
  const list = document.createElement("div");
  list.className = "profile-ledger-list";
  const entries = (state.billingAccount.creditLedger || []).slice(-10).reverse();
  if (!entries.length) {
    const empty = document.createElement("p");
    empty.textContent = "No credit movement yet.";
    list.append(empty);
  }
  for (const entry of entries) {
    const item = document.createElement("article");
    item.className = "profile-ledger-item";
    const sign = entry.type === "credit-grant" ? "+" : "-";
    item.innerHTML = `<strong>${sign}${formatCredits(entry.credits)} credits</strong><span>${entry.label}</span><small>${entry.note || entry.costBasis || "Cloudflare usage trace"}</small>`;
    list.append(item);
  }
  section.append(title, list);
  root.append(section);
}

function renderProfileBuilderPage() {
  const root = document.createDocumentFragment();
  const account = normalizeBillingAccount(state.billingAccount);
  state.billingAccount = account;
  const tier = currentProfileTier();
  const hero = document.createElement("section");
  hero.className = "profile-builder-hero";
  hero.append(
    createProfileMetric("Active tier", tier.label, tier.billingMode),
    createProfileMetric("Credit balance", tier.billingMode === "enterprise-paygo" ? "Pay-go" : formatCredits(account.creditBalance), "Credits never expire"),
    createProfileMetric("Priced records", TARGET_RUNTIME_RECORDS_PRICED.toLocaleString(), PROFILE_BILLING_VERSION)
  );
  root.append(hero);

  const form = document.createElement("section");
  form.className = "profile-builder-section profile-builder-form";
  const heading = document.createElement("h4");
  heading.textContent = "Profile builder";
  form.append(heading);
  appendProfileField(form, {
    label: "Display name",
    value: account.displayName,
    onChange: (value) => {
      state.billingAccount.displayName = value;
      renderBillingProfileSummary();
    }
  });
  appendProfileField(form, {
    label: "Profile icon",
    value: account.profileIcon,
    onChange: (value) => {
      state.billingAccount.profileIcon = String(value || "TG").slice(0, 4).toUpperCase();
      renderBillingProfileSummary();
    }
  });
  appendProfileField(form, {
    label: "Sound notices",
    value: state.userProfile.soundMode || "completion",
    options: [
      { value: "off", label: "Off" },
      { value: "task", label: "Task complete" },
      { value: "completion", label: "Project complete" },
      { value: "both", label: "Task and project complete" }
    ],
    onChange: (value) => {
      state.userProfile = { ...state.userProfile, soundMode: value };
      state.billingAccount.soundMode = value;
      if (elements.soundMode) elements.soundMode.value = value;
      saveWorkspace();
    }
  });
  appendProfileField(form, {
    label: "Company name",
    value: account.companyProfile.companyName,
    onChange: (value) => {
      state.billingAccount.companyProfile.companyName = value || "Company Profile";
    }
  });
  appendProfileField(form, {
    label: "Company users",
    value: account.companyProfile.employeeCount,
    type: "number",
    onChange: (value) => {
      state.billingAccount.companyProfile.employeeCount = Math.max(1, Number(value || 1));
    }
  });
  const actions = document.createElement("div");
  actions.className = "profile-builder-actions";
  const save = document.createElement("button");
  save.type = "button";
  save.textContent = "Save profile";
  save.addEventListener("click", () => {
    state.billingAccount = normalizeBillingAccount(state.billingAccount);
    syncBillingTierToLegacyAccess();
    saveWorkspace();
    renderBillingProfileSummary();
    renderCockpitMenuPage("profile");
  });
  const theme = document.createElement("button");
  theme.type = "button";
  theme.className = "ghost-button";
  theme.textContent = "Open theme/RGB";
  theme.addEventListener("click", () => renderCockpitMenuPage("theme"));
  actions.append(save, theme);
  form.append(actions);
  root.append(form);

  renderProfileTierCards(root);
  renderProfileFeatureList(root);
  renderCreditPackageButtons(root);
  renderEnterpriseInvoicePreview(root);
  renderCreditLedger(root);

  const runtime = buildRuntimeCostCoverageSummary();
  const pricing = buildSubscriptionPricingSummary();
  const stripe = buildStripeMeteringPlan();
  const notes = document.createElement("section");
  notes.className = "profile-builder-section";
  notes.innerHTML = `<h4>Cost rules</h4>
    <p>${runtime.explanation}</p>
    <p>${pricing.notes.slice(0, 4).join(" ")}</p>
    <p>${stripe.billingPlatform}</p>`;
  root.append(notes);
  return root;
}

function renderCockpitMenuPage(page = state.cockpitPage) {
  if (!elements.cockpitPageDrawer || !elements.cockpitPageBody || !elements.cockpitPageTitle) return;
  state.cockpitPage = page;
  const project = activeProject();
  const queue = project.waterfallQueue || [];
  const completed = queue.filter((task) => task.status === "done").length;
  const pages = {
    prompt: {
      title: "Prompt",
      lines: [
        "Start here: enter the goal in the command prompt and press Build.",
        "ToolGrid checks whether the prompt is specific enough before it creates the workflow."
      ]
    },
    workflow: {
      title: "Workflow",
      lines: [
        `${queue.length || 0} queued task records.`,
        `${completed} completed. Batches fill the 64-cell matrix automatically.`
      ]
    },
    tools: {
      title: "Tools",
      lines: [
        `${totalRuntimeRecordCount.toLocaleString()} in-house, skeleton, app, and production-pack records are available to the planner.`,
        "Manual tool browsing is still available through the tool selector."
      ],
      action: "Open tool selector"
    },
    projects: {
      title: "Projects",
      lines: [
        `Active project: ${project.name}.`,
        `${state.projects.length} project space${state.projects.length === 1 ? "" : "s"} in this browser.`
      ]
    },
    uploads: {
      title: "Uploads",
      lines: [
        `${(project.uploadedFiles || state.uploadedFiles || []).length} uploaded file record${(project.uploadedFiles || state.uploadedFiles || []).length === 1 ? "" : "s"}.`,
        "Uploads feed the prompt analyzer and help choose file-ready tools."
      ]
    },
    theme: {
      title: "Theme",
      lines: [
        `Active effect: ${state.premiumTheme?.effect || "rotating-outline"}.`,
        "Theme tools are kept in the menu instead of filling the first screen."
      ]
    },
    profile: {
      title: "Profile",
      lines: []
    },
    colab: {
      title: "COLAB",
      lines: [
        "Shared workspace and cloud connector controls are grouped here.",
        "The original COLAB page remains available from the menu flow."
      ],
      action: "Open COLAB"
    },
    answers: {
      title: "Answers",
      lines: [
        state.cockpitLastOutput ? "The latest generated answer is available." : "No answer has been generated yet.",
        "After workflow completion the answer UI opens automatically."
      ]
    }
  };
  const selected = pages[page] || pages.prompt;
  elements.cockpitPageTitle.textContent = selected.title;
  if (page === "profile") {
    elements.cockpitPageBody.replaceChildren(renderProfileBuilderPage());
    elements.cockpitPageDrawer.classList.remove("hidden");
    return;
  }
  const fragment = document.createDocumentFragment();
  for (const line of selected.lines) {
    const item = document.createElement("p");
    item.textContent = line;
    fragment.append(item);
  }
  if (selected.action) {
    const action = document.createElement("button");
    action.type = "button";
    action.textContent = selected.action;
    action.addEventListener("click", () => {
      if (page === "tools") openToolSelector(TOOL_SELECTOR_TABS.CHOOSE_OWN);
      if (page === "colab") setMainView("colab");
    });
    fragment.append(action);
  }
  elements.cockpitPageBody.replaceChildren(fragment);
  elements.cockpitPageDrawer.classList.remove("hidden");
}

function buildPromptFromAdjustmentInputs() {
  const answers = {};
  for (const input of elements.promptIssueList?.querySelectorAll("textarea[data-question-id]") || []) {
    answers[input.dataset.questionId] = input.value.trim();
  }
  state.clarifyingAnswers = answers;
  return buildClarifiedPrompt(elements.commandSearch?.value.trim() || activeProject().prompt, answers);
}

function allPromptIssuesResolved() {
  const inputs = [...(elements.promptIssueList?.querySelectorAll("textarea[data-question-id]") || [])];
  return inputs.length > 0 && inputs.every((input) => input.value.trim().length > 0);
}

function schedulePromptAutoResolution() {
  clearTimeout(state.cockpitAutoResolveTimer);
  state.cockpitAutoResolveTimer = setTimeout(() => {
    if (allPromptIssuesResolved()) resolveCockpitPromptAdjustment();
  }, 650);
}

function renderCockpitPromptAdjustment(analysis) {
  if (!elements.promptIssueList) return;
  elements.promptAdjustSummary.textContent = analysis?.summary || "Add missing details.";
  elements.promptIssueList.replaceChildren();
  for (const question of analysis?.questions || []) {
    const wrap = document.createElement("label");
    wrap.className = "prompt-issue-card";
    const title = document.createElement("strong");
    title.textContent = question.label;
    const reason = document.createElement("span");
    reason.textContent = question.reason;
    const input = document.createElement("textarea");
    input.rows = 2;
    input.placeholder = question.placeholder;
    input.dataset.questionId = question.id;
    input.value = state.clarifyingAnswers[question.id] || "";
    input.addEventListener("input", schedulePromptAutoResolution);
    wrap.append(title, reason, input);
    elements.promptIssueList.append(wrap);
  }
  if (elements.commandSearchCount) elements.commandSearchCount.textContent = `${analysis.questions.length} prompt issue${analysis.questions.length === 1 ? "" : "s"} found`;
  setCockpitPhase("adjust");
}

function submitCockpitPrompt() {
  const prompt = elements.commandSearch?.value.trim() || elements.aiPrompt?.value.trim() || "";
  if (!prompt) {
    if (elements.commandSearchCount) elements.commandSearchCount.textContent = "Enter a prompt first";
    setCockpitPhase("prompt");
    return;
  }
  const project = activeProject();
  project.prompt = prompt;
  project.input = elements.projectInput?.value.trim() || prompt;
  elements.aiPrompt.value = prompt;
  elements.projectInput.value = project.input;
  state.clarifyingAnswers = {};
  state.clarifyingAnalysis = analyzeProjectPromptForQuestions({ prompt, fileAnalysis: state.fileAnalysis || project.fileAnalysis });
  state.cockpitBuilderSpec = buildPromptBuilderSpec(prompt);
  if (elements.commandSearchCount) elements.commandSearchCount.textContent = "Building best direct answer";
  buildCockpitWorkflow(prompt);
}

function resolveCockpitPromptAdjustment({ force = false } = {}) {
  const prompt = force ? (elements.commandSearch?.value.trim() || activeProject().prompt) : buildPromptFromAdjustmentInputs();
  if (!force && !allPromptIssuesResolved()) {
    if (elements.commandSearchCount) elements.commandSearchCount.textContent = "Fill each prompt issue to continue";
    return;
  }
  elements.commandSearch.value = prompt.replace(/\s+/g, " ").trim();
  elements.aiPrompt.value = prompt;
  buildCockpitWorkflow(prompt);
}

function createCockpitFileBuildPlan(prompt) {
  const idSeed = `file-${Date.now()}`;
  const stepLabels = [
    ["Clarify file requirements", "Confirms format, categories, budget fields, and period."],
    ["Design tracker columns", "Creates summary, category, and expense-log sections."],
    ["Assemble CSV content", "Builds a spreadsheet-compatible monthly expense tracker."],
    ["Prepare download", "Publishes the tracker as a downloadable file."]
  ];
  return {
    id: `${idSeed}-plan`,
    prompt,
    intentId: "file-build",
    intentLabel: "Monthly Expense Tracker File",
    recommendedLayout: "4x4",
    starterPayload: prompt,
    status: "planned",
    compiler: {
      summary: "Create a downloadable monthly expense tracker file.",
      taskParts: stepLabels.map(([label], index) => ({
        id: `${idSeed}-part-${index + 1}`,
        capabilityLabel: label,
        action: "build",
        object: "expense tracker file",
        generalizedTerms: ["monthly expense tracker", "budget spreadsheet", "downloadable csv"],
        capabilityTags: ["file-generation", "expense-tracking", "csv"],
        searchQueries: ["monthly expense tracker csv template"]
      })),
      requiredCapabilities: ["file-generation", "expense-tracking", "csv"],
      primaryDomain: "Monthly Expense Tracker",
      workflowMode: "file-build"
    },
    projectTitle: "Monthly Expense Tracker File",
    workflowMode: "file-build",
    createdAt: new Date().toISOString(),
    steps: stepLabels.map(([toolName, reason], index) => ({
      id: `${idSeed}-step-${index + 1}`,
      panelIndex: index,
      toolId: `cockpit-file-maker-${index + 1}`,
      toolName,
      status: "planned",
      mode: index === 0 ? "input" : "waterfall",
      reason,
      accepts: ["text"],
      outputType: index === stepLabels.length - 1 ? "file" : "text",
      taskPartId: `${idSeed}-part-${index + 1}`,
      taskAction: "build",
      taskObject: "expense tracker file",
      generalizedTerms: ["monthly expense tracker", "csv"],
      capabilityTags: ["file-generation", "expense-tracking"],
      searchQueries: ["monthly expense tracker csv"]
    }))
  };
}

function buildCockpitWorkflow(prompt) {
  clearTimeout(state.cockpitAutoResolveTimer);
  syncModeToProject();
  const project = activeProject();
  state.mode = WORKSPACE_MODES.AI;
  elements.workspaceMode.value = WORKSPACE_MODES.AI;
  project.mode = WORKSPACE_MODES.AI;
  project.prompt = prompt;
  project.input = elements.projectInput?.value.trim() || prompt;
  const isFileBuild = isMonthlyExpenseFileRequest(prompt);
  const maxWorkflowTasks = isFileBuild ? 8 : 128;
  const plan = isFileBuild ? createCockpitFileBuildPlan(prompt) : generateAiProjectPlan({ prompt, tools: getPlanningToolsForPrompt(prompt), maxPanels: maxWorkflowTasks });
  project.plan = plan;
  project.compiler = plan.compiler;
  project.name = plan.projectTitle || project.name;
  project.waterfallQueue = buildWaterfallQueueFromPlan(plan, { maxTasks: maxWorkflowTasks });
  state.projectCreditEstimate = buildProjectEstimateFromQueue(project);
  project.creditEstimate = state.projectCreditEstimate;
  if (!hasEnoughCredits(state.billingAccount, state.projectCreditEstimate)) {
    showCreditShortage(state.projectCreditEstimate);
    appendProjectEvent(project, `Workflow estimated at ${formatCredits(state.projectCreditEstimate.credits)} Cloudflare credits, but this profile needs more credits before running.`, "warning");
    renderProjectConsole();
    return;
  }
  state.layout = "4x4";
  if (elements.layout) elements.layout.value = state.layout;
  const entries = isFileBuild ? [] : createPanelEntriesFromPlan(plan, project.id);
  state.panels = Array.from({ length: 16 }, (_, index) => entries[index] || null);
  state.panelFx = {};
  state.cockpitBatchIndex = 0;
  state.cockpitLastOutput = "";
  state.cockpitGeneratedFile = null;
  project.directAnswer = "";
  appendProjectEvent(project, `Command UI built ${project.waterfallQueue.length} workflow task${project.waterfallQueue.length === 1 ? "" : "s"} from the prompt. Estimated Cloudflare usage: ${formatCredits(state.projectCreditEstimate.credits)} credits.`, "success");
  renderBillingProfileSummary();
  renderCockpitWorkflow();
  setCockpitPhase("workflow");
  if (isFileBuild) {
    completeCockpitFileBuild();
    return;
  }
  renderProjectConsole();
  renderWaterfallPanel();
  runCockpitWorkflowQueue();
}

function visibleCockpitTasks() {
  const queue = activeProject().waterfallQueue || [];
  const start = state.cockpitBatchIndex * state.cockpitBatchSize;
  return {
    queue,
    start,
    visible: queue.slice(start, start + state.cockpitBatchSize)
  };
}

function renderCockpitWorkflow() {
  if (!elements.cockpitWorkflowGrid) return;
  const project = activeProject();
  const { queue, start, visible } = visibleCockpitTasks();
  const done = queue.filter((task) => task.status === "done").length;
  const running = queue.filter((task) => task.status === "running").length;
  const issues = queue.filter((task) => task.status === "error").length;
  const totalBatches = Math.max(1, Math.ceil(queue.length / state.cockpitBatchSize));
  elements.cockpitWorkflowTitle.textContent = project.plan?.projectTitle || "64-cell matrix";
  elements.cockpitWorkflowStatus.textContent = queue.length
    ? `${done}/${queue.length} complete · ${running} running · ${issues} issue${issues === 1 ? "" : "s"}`
    : "Waiting for prompt";
  elements.cockpitWorkflowBatch.textContent = `Batch ${state.cockpitBatchIndex + 1}/${totalBatches}`;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < state.cockpitBatchSize; index += 1) {
    const task = visible[index];
    const cell = document.createElement("article");
    cell.className = `cockpit-task-cell ${task ? `task-${task.status}` : "task-empty"}`;
    const number = document.createElement("strong");
    number.textContent = String(start + index + 1).padStart(2, "0");
    const title = document.createElement("span");
    title.textContent = task?.toolName || "Queued slot";
    const meta = document.createElement("small");
    meta.textContent = task ? task.status : "waiting";
    cell.append(number, title, meta);
    fragment.append(cell);
  }
  elements.cockpitWorkflowGrid.replaceChildren(fragment);
}

async function runCockpitWorkflowQueue() {
  if (state.cockpitRunning) return;
  const project = activeProject();
  const queue = project.waterfallQueue || [];
  if (!queue.length) return;
  state.cockpitRunning = true;
  let payload = project.input || project.prompt || "";
  let payloadType = "text";

  for (let index = 0; index < queue.length; index += 1) {
    const task = queue[index];
    state.cockpitBatchIndex = Math.floor(index / state.cockpitBatchSize);
    task.status = "running";
    state.activeWaterfallTaskId = task.id;
    updatePlanStepStatus(project, task.parentStepId, "running");
    renderCockpitWorkflow();
    renderWaterfallPanel();
    await sleep(70);

    const tool = toolsById.get(task.toolId);
    if (!tool) {
      task.status = "error";
      task.prompt = `${task.prompt}\nMissing tool record.`;
      continue;
    }
    try {
      const inputs = buildInputsFromPayload(tool, payload, payloadType);
      const output = runTool(tool, inputs);
      const artifact = makeArtifact({
        projectId: project.id,
        panelIndex: index % state.cockpitBatchSize,
        tool,
        inputs,
        output,
        runMode: "cockpit-workflow",
        stepId: task.parentStepId || null
      });
      appendArtifact(project, artifact);
      payload = output;
      payloadType = artifact.outputType;
      task.status = "done";
      updatePlanStepStatus(project, task.parentStepId, "done", { outputPreview: artifact.output.slice(0, 160) });
    } catch (error) {
      task.status = "error";
      const artifact = makeArtifact({
        projectId: project.id,
        panelIndex: index % state.cockpitBatchSize,
        tool,
        inputs: {},
        output: error instanceof Error ? error.message : String(error),
        status: "error",
        runMode: "cockpit-workflow",
        stepId: task.parentStepId || null
      });
      appendArtifact(project, artifact);
      updatePlanStepStatus(project, task.parentStepId, "error", { outputPreview: artifact.output.slice(0, 160) });
    }
    if (index % 8 === 0 || index === queue.length - 1) {
      renderCockpitWorkflow();
      renderWaterfallPanel();
    }
    await sleep(55);
  }

  state.cockpitRunning = false;
  state.cockpitLastOutput = buildDirectCockpitAnswer(project, { finalPayload: payload });
  project.directAnswer = state.cockpitLastOutput;
  settleCockpitProjectCredits("project-answer");
  renderProjectConsole();
  renderCockpitWorkflow();
  renderCockpitAnswer();
  setCockpitPhase("answer");
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvRow(values) {
  return values.map(csvCell).join(",");
}

function isMonthlyExpenseFileRequest(prompt) {
  const text = normalize(prompt);
  return /\b(file|spreadsheet|sheet|csv|xlsx|excel|template|tracker|download)\b/.test(text)
    && /\b(expense|expenses|spend|spending|budget|bills?|costs?)\b/.test(text);
}

function extractClarifiedValue(prompt, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(prompt || "").match(new RegExp(`${escaped}:\\s*([^\\n]+)`, "i"));
  return match?.[1]?.trim() || "";
}

function extractExpenseCategories(prompt) {
  const detail = extractClarifiedValue(prompt, "expense-categories");
  const source = detail || prompt;
  const fallback = ["Rent/Mortgage", "Utilities", "Groceries", "Transportation", "Insurance", "Subscriptions", "Medical", "Debt", "Savings", "Other"];
  const known = fallback.filter((category) => normalize(source).includes(normalize(category.split("/")[0])));
  const custom = detail
    .split(/[,;|]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/\.$/, ""));
  const merged = [...custom, ...known, ...fallback];
  return [...new Set(merged.map((item) => item.replace(/\b\w/g, (letter) => letter.toUpperCase())))].slice(0, 18);
}

function buildMonthlyExpenseTrackerFile(prompt) {
  if (!isMonthlyExpenseFileRequest(prompt)) return null;
  const categories = extractExpenseCategories(prompt);
  const period = extractClarifiedValue(prompt, "expense-period") || extractClarifiedValue(prompt, "time-range") || "Reusable monthly template";
  const budgetMode = extractClarifiedValue(prompt, "budget-fields") || "Track income, budget limits, and actual expenses";
  const rows = [
    csvRow(["Monthly Expense Tracker"]),
    csvRow(["Period", period]),
    csvRow(["Tracking mode", budgetMode]),
    csvRow(["Generated", new Date().toLocaleString()]),
    "",
    csvRow(["Summary"]),
    csvRow(["Month", "Starting Balance", "Income", "Budgeted Expenses", "Actual Expenses", "Remaining", "Notes"]),
    csvRow([period, "", "", "", "", "", "Enter totals from the expense log below."]),
    "",
    csvRow(["Expense Categories"]),
    csvRow(["Category", "Monthly Budget", "Actual Total", "Difference", "Notes"]),
    ...categories.map((category) => csvRow([category, "", "", "", ""])),
    "",
    csvRow(["Expense Log"]),
    csvRow(["Date", "Category", "Vendor", "Description", "Payment Method", "Budgeted Amount", "Actual Amount", "Paid?", "Notes"]),
    ...categories.map((category) => csvRow(["", category, "", "", "", "", "", "", ""])),
    "",
    csvRow(["How to use"]),
    csvRow(["Fill one row per expense. Add actual amounts as money is spent. Use the Summary section to compare budgeted vs actual totals."])
  ];
  return {
    filename: "monthly_expense_tracker.csv",
    label: "Monthly Expense Tracker CSV",
    mime: "text/csv",
    content: rows.join("\n")
  };
}

function completeCockpitFileBuild() {
  const project = activeProject();
  const queue = project.waterfallQueue || [];
  state.cockpitBatchIndex = 0;
  for (const task of queue) {
    task.status = "done";
    updatePlanStepStatus(project, task.parentStepId, "done", { outputPreview: "Generated downloadable tracker file." });
  }
  state.cockpitGeneratedFile = buildMonthlyExpenseTrackerFile(project.prompt);
  state.cockpitLastOutput = state.cockpitGeneratedFile?.content || "Generated file is ready.";
  project.directAnswer = state.cockpitLastOutput;
  settleCockpitProjectCredits("project-answer");
  renderCockpitWorkflow();
  renderCockpitAnswer();
  setCockpitPhase("answer");
}

function extractOriginalPrompt(prompt = "") {
  const text = String(prompt || "").trim();
  const originalMatch = text.match(/Original user prompt:\s*([\s\S]*?)(?:\nCategory focus:|\nTarget answer type:|\nDetails:|$)/i);
  return (originalMatch?.[1] || text).trim();
}

function isLowValueToolOutput(text = "") {
  const clean = String(text || "").trim();
  if (!clean) return true;
  const lower = clean.toLowerCase();
  return [
    "free tools save time when they are fast, private, and easy to use.",
    "free tools workspace",
    "free%20tools%20workspace",
    "toolgrid",
    "input issue:",
    "skeleton tool:",
    "current in-house tools wired",
    "general workflow step",
    "ready handoff"
  ].some((snippet) => lower === snippet || lower.includes(snippet));
}

function looksLikeInternalWorkflowText(text = "") {
  return /\b(recommended workflow|ready handoff|completed cells|current in-house tools wired|skeleton tool|workflow task|support tool|tool output|scale factor)\b/i.test(String(text || ""));
}

function looksLikeStandaloneAnswer(text = "") {
  const clean = String(text || "").trim();
  if (isLowValueToolOutput(clean) || looksLikeInternalWorkflowText(clean)) return false;
  const words = clean.split(/\s+/).filter(Boolean).length;
  return words >= 90 && /(^#|##|\n\d+\.|\|.+\||materials?|steps?|instructions?|recommendation|answer)/im.test(clean);
}

function usefulArtifactOutputs(project) {
  return (project.artifacts || [])
    .filter((artifact) => artifact.status === "ok" && !isLowValueToolOutput(artifact.output))
    .slice(0, 8)
    .map((artifact) => ({
      toolName: artifact.toolName,
      outputType: artifact.outputType,
      output: String(artifact.output || "").trim()
    }));
}

function promptLineItems(prompt) {
  const original = extractOriginalPrompt(prompt);
  return original
    .split(/\n|;|\.\s+|\sand\s/i)
    .map((part) => part.trim().replace(/^[-*]\s*/, ""))
    .filter((part) => part.length > 8)
    .slice(0, 8);
}

function buildExpenseTrackerAnswer(prompt) {
  const categories = extractExpenseCategories(prompt);
  const period = extractClarifiedValue(prompt, "expense-period") || extractClarifiedValue(prompt, "time-range") || "Monthly";
  const fields = [
    "Date",
    "Category",
    "Vendor",
    "Description",
    "Payment Method",
    "Budgeted Amount",
    "Actual Amount",
    "Paid?",
    "Notes"
  ];
  return [
    "# Direct Answer",
    "",
    `Create a ${period.toLowerCase()} expense tracker with one summary section, one category budget section, and one transaction log. The downloadable CSV is attached above when the prompt asks for a file.`,
    "",
    "## Columns",
    fields.map((field) => `- ${field}`).join("\n"),
    "",
    "## Starting Categories",
    categories.map((category) => `- ${category}`).join("\n"),
    "",
    "## How To Use It",
    "1. Add each expense as a new row in the transaction log.",
    "2. Assign every row to a category.",
    "3. Enter budgeted and actual amounts so the monthly summary can compare planned vs real spending.",
    "4. Mark paid items and leave notes for unusual charges.",
    "5. Review remaining money by category before adding new spending."
  ].join("\n");
}

function buildComparisonAnswer(prompt, artifacts) {
  const items = promptLineItems(prompt);
  return [
    "# Direct Answer",
    "",
    "Use this comparison structure to make the decision directly from the prompt details.",
    "",
    "| Option | Best For | Main Risk | Decision Signal |",
    "| --- | --- | --- | --- |",
    ...(items.length ? items : ["Option A", "Option B", "Option C"]).slice(0, 5).map((item, index) =>
      `| ${item} | Use case ${index + 1} from the prompt | Missing cost, timing, or fit details | Keep if it scores highest on the user's priority |`
    ),
    "",
    "## Recommendation",
    "Choose the option with the clearest fit to the required outcome, lowest execution risk, and easiest handoff. If two options tie, pick the one that can be tested fastest with the least irreversible cost.",
    artifacts.length ? `\n## Tool Evidence\n${artifacts.map((artifact) => `- ${artifact.toolName}: ${artifact.output.slice(0, 180)}`).join("\n")}` : ""
  ].filter(Boolean).join("\n");
}

function findFirstPromptNumber(prompt, fallback = 1) {
  const match = String(prompt || "").match(/\b(\d+(?:\.\d+)?)\b/);
  const value = Number(match?.[1]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function parseBananaBreadRequest(prompt) {
  const original = extractOriginalPrompt(prompt);
  const lower = normalize(original);
  const number = findFirstPromptNumber(original, 50);
  const bananaCountMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:ripe\s+)?bananas?\b/i);
  const loafCountMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:loaves|loafs|breads?)\b/i);
  const asksToUseBananas = /\b(use|uses|using|use up|with)\b[\s\S]{0,24}\bbananas?\b/i.test(original)
    || /\bbananas?\b[\s\S]{0,24}\b(use|uses|using|use up)\b/i.test(original);
  if (bananaCountMatch || asksToUseBananas) {
    return { mode: "bananas", count: Number(bananaCountMatch?.[1] || number), original };
  }
  if (loafCountMatch) return { mode: "loaves", count: Number(loafCountMatch[1]), original };
  return { mode: "bananas", count: number, original };
}

function fractionText(value) {
  const rounded = Math.round(value * 3) / 3;
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  if (Math.abs(fraction) < 0.01) return String(whole);
  if (Math.abs(fraction - 1 / 3) < 0.01) return whole ? `${whole} 1/3` : "1/3";
  if (Math.abs(fraction - 2 / 3) < 0.01) return whole ? `${whole} 2/3` : "2/3";
  if (Math.abs(fraction - 0.5) < 0.01) return whole ? `${whole} 1/2` : "1/2";
  return rounded.toFixed(2).replace(/\.?0+$/, "");
}

function tspBreakdown(tsp) {
  const tbsp = Math.floor(tsp / 3);
  const remaining = tsp - tbsp * 3;
  if (!tbsp) return `${fractionText(tsp)} tsp`;
  if (remaining < 0.05) return `${tbsp} Tbsp`;
  return `${tbsp} Tbsp + ${fractionText(remaining)} tsp`;
}

function buildBananaNutBreadRecipeAnswer(prompt) {
  const request = parseBananaBreadRequest(prompt);
  const bananasPerLoaf = 3;
  const loaves = request.mode === "loaves" ? request.count : request.count / bananasPerLoaf;
  const bananas = request.mode === "loaves" ? request.count * bananasPerLoaf : request.count;
  const factor = loaves;
  const rows = [
    ["Ripe bananas", `${fractionText(bananas)} medium bananas`, "Mash well."],
    ["All-purpose flour", `${fractionText(2 * factor)} cups`, "Spoon and level if measuring by volume."],
    ["Sugar", `${fractionText(0.75 * factor)} cups`, "White, brown, or half-and-half."],
    ["Unsalted butter or neutral oil", `${fractionText(0.5 * factor)} cups`, `${fractionText(factor)} sticks of butter.`],
    ["Large eggs", `${fractionText(2 * factor)} eggs`, "Round to the nearest whole egg, or beat one egg and use only the needed portion."],
    ["Baking soda", tspBreakdown(factor), ""],
    ["Salt", tspBreakdown(0.5 * factor), ""],
    ["Vanilla extract", tspBreakdown(factor), ""],
    ["Chopped walnuts or pecans", `${fractionText(factor)} cups`, "Toast first for better flavor."],
    ["Ground cinnamon, optional", tspBreakdown(factor), ""]
  ];
  const wholeLoaves = Math.floor(loaves);
  const partialBananas = bananas - wholeLoaves * bananasPerLoaf;
  const panNote = request.mode === "bananas" && partialBananas > 0
    ? `This makes about ${fractionText(loaves)} standard 9x5 loaves. Practical bake plan: make ${wholeLoaves} full loaves with ${wholeLoaves * bananasPerLoaf} bananas, plus one smaller loaf/muffin batch using the remaining ${fractionText(partialBananas)} banana${partialBananas === 1 ? "" : "s"}.`
    : `This makes ${fractionText(loaves)} standard 9x5 loaf${Math.round(loaves) === 1 ? "" : "ves"}.`;
  const fiftyLoafNote = request.mode === "bananas"
    ? [
        "",
        "## If You Actually Meant 50 Full Loaves",
        "Use 150 bananas, 100 cups flour, 37 1/2 cups sugar, 25 cups butter/oil, 100 eggs, 50 tsp baking soda, 25 tsp salt, 50 tsp vanilla, and 50 cups nuts."
      ].join("\n")
    : "";
  return [
    "# Direct Answer",
    "",
    request.mode === "bananas"
      ? `Assumption: you want to use up ${fractionText(bananas)} bananas for banana nut bread. A standard loaf uses 3 medium ripe bananas.`
      : `Assumption: you want ${fractionText(loaves)} full banana nut bread loaves. A standard loaf uses 3 medium ripe bananas, so this uses ${fractionText(bananas)} bananas.`,
    "",
    panNote,
    "",
    "## Scaled Ingredients",
    "| Ingredient | Amount Needed | Note |",
    "| --- | ---: | --- |",
    ...rows.map(([ingredient, amount, note]) => `| ${ingredient} | ${amount} | ${note || " "} |`),
    "",
    "## Base Recipe Per 1 Loaf",
    "- 3 ripe bananas",
    "- 2 cups flour",
    "- 3/4 cup sugar",
    "- 1/2 cup melted butter or oil",
    "- 2 large eggs",
    "- 1 tsp baking soda",
    "- 1/2 tsp salt",
    "- 1 tsp vanilla",
    "- 1 cup chopped walnuts or pecans",
    "",
    "## Baking Plan",
    "1. Heat oven to 350 F.",
    "2. Grease loaf pans or line with parchment.",
    "3. Mix mashed bananas, sugar, butter/oil, eggs, and vanilla.",
    "4. Fold in flour, baking soda, salt, cinnamon, and nuts.",
    "5. Fill pans about 2/3 full.",
    "6. Bake standard loaves 55-65 minutes, or until the center reaches about 200-205 F and a tester comes out clean.",
    "7. Cool 10-15 minutes in pans, then move to racks.",
    fiftyLoafNote
  ].filter(Boolean).join("\n");
}

function buildWorkflowAnswer(project, prompt, artifacts) {
  const plan = project.plan;
  const steps = (plan?.steps || []).slice(0, 12);
  const promptItems = promptLineItems(prompt);
  return [
    "# Direct Answer",
    "",
    `Best answer for: ${extractOriginalPrompt(prompt)}`,
    "",
    "## Output",
    promptItems.length
      ? promptItems.map((item, index) => `${index + 1}. ${item}`).join("\n")
      : "1. Capture the exact goal.\n2. Turn the prompt into a concrete deliverable.\n3. Produce the answer in a save, share, and print-ready format.",
    "",
    "## Recommended Workflow",
    steps.length
      ? steps.map((step, index) => `${index + 1}. ${step.toolName || step.uiTitle || "Project step"}: ${step.reason || "Produce one part of the final answer."}`).join("\n")
      : "1. Parse the request.\n2. Build the result.\n3. Review the result for missing details.\n4. Save or export the final answer.",
    "",
    "## Ready Handoff",
    `- Project: ${project.name || "ToolGrid project"}`,
    `- Target: ${plan?.intentLabel || plan?.projectTitle || "direct answer"}`,
    `- Completed cells: ${(project.waterfallQueue || []).filter((task) => task.status === "done").length}/${(project.waterfallQueue || []).length}`,
    artifacts.length ? `\n## Useful Tool Outputs\n${artifacts.map((artifact) => `- ${artifact.toolName}: ${artifact.output.slice(0, 220)}`).join("\n")}` : ""
  ].filter(Boolean).join("\n");
}

function buildDesignOrSpaceAnswer(prompt) {
  return [
    "# Direct Answer",
    "",
    "Build the visual/space result as a scene plan with uploaded reference files, real dimensions where available, and inferred scale where dimensions are missing.",
    "",
    "## Scene Setup",
    "- Define room or canvas size.",
    "- Add each object with width, height, depth, material, and placement.",
    "- Use uploaded photos as visual references.",
    "- Keep a measurement note for every inferred dimension.",
    "",
    "## Output To Generate",
    "- Top-down placement plan.",
    "- 3D preview layout.",
    "- Object list with dimensions.",
    "- Export-ready summary for client, contractor, or decorator review.",
    "",
    `Prompt focus: ${extractOriginalPrompt(prompt)}`
  ].join("\n");
}

function buildDirectCockpitAnswer(project, { finalPayload = "" } = {}) {
  const prompt = project.prompt || elements.commandSearch?.value || "";
  const originalPrompt = extractOriginalPrompt(prompt);
  const lower = normalize(originalPrompt);
  const artifacts = usefulArtifactOutputs(project);
  const foundationAnswer = buildDirectAnswerFoundation({
    prompt,
    finalPayload,
    artifacts: project.artifacts || []
  });
  if (foundationAnswer?.file) state.cockpitGeneratedFile = foundationAnswer.file;
  if (foundationAnswer?.content) return foundationAnswer.content;
  const file = buildMonthlyExpenseTrackerFile(prompt);
  if (file) {
    state.cockpitGeneratedFile = file;
    return file.content;
  }
  if (/\b(expense|expenses|budget|spending|bills?|costs?)\b/.test(lower)) return buildExpenseTrackerAnswer(prompt);
  if (/\b(banana|bananas|banana nut|banana bread|bread|loaf|loaves|recipe|ingredient|ingredients|bake|baking)\b/.test(lower)) return buildBananaNutBreadRecipeAnswer(prompt);
  if (/\b(compare|comparison|versus| vs |which|choose|decision|best)\b/.test(lower)) return buildComparisonAnswer(prompt, artifacts);
  if (/\b(3d|room|space|furniture|dimensions|decor|contractor|layout|cad|model)\b/.test(lower)) return buildDesignOrSpaceAnswer(prompt);
  if (looksLikeStandaloneAnswer(finalPayload)) {
    return [
      "# Direct Answer",
      "",
      `Best answer for: ${originalPrompt}`,
      "",
      String(finalPayload).trim()
    ].join("\n");
  }
  return buildWorkflowAnswer(project, prompt, artifacts);
}

function getCockpitAnswerTitle() {
  const project = activeProject();
  return state.cockpitGeneratedFile?.label || project.name || "Generated answer";
}

function getCockpitAnswerText() {
  const project = activeProject();
  const artifacts = project.artifacts || [];
  return state.cockpitGeneratedFile?.content
    || project.directAnswer
    || state.cockpitLastOutput
    || artifacts[0]?.output
    || "Workflow completed. No text output was produced.";
}

function setAnswerActionStatus(message) {
  if (elements.answerActionStatus) elements.answerActionStatus.textContent = message;
}

function downloadTextFile({ filename, mime, content }) {
  const blob = new Blob([content], { type: mime || "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 800);
}

function saveCockpitAnswerToDevice() {
  const project = activeProject();
  const safeName = (project.name || "toolgrid-answer").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "toolgrid-answer";
  const file = state.cockpitGeneratedFile || {
    filename: `${safeName}.md`,
    mime: "text/markdown",
    content: `# ${getCockpitAnswerTitle()}\n\nPrompt: ${project.prompt || ""}\n\n${getCockpitAnswerText()}`
  };
  if (!spendDownloadCredits(file)) return;
  downloadTextFile(file);
  setAnswerActionStatus(`Saved ${file.filename} to this device.`);
}

function saveCockpitAnswerToCloud(target = "cloud") {
  saveWorkspace();
  renderCockpitMenuPage("colab");
  setAnswerActionStatus(target === "drive"
    ? "Workspace saved locally. Use COLAB to connect Google Drive for cloud export."
    : "Workspace saved locally. Use COLAB to connect cloud storage.");
}

function buildShareText() {
  const project = activeProject();
  const text = getCockpitAnswerText();
  return `${getCockpitAnswerTitle()}\n\nPrompt: ${project.prompt || ""}\n\n${text.slice(0, 1800)}`;
}

async function shareCockpitAnswer() {
  const title = getCockpitAnswerTitle();
  const text = buildShareText();
  try {
    if (navigator.share) {
      await navigator.share({ title, text });
      setAnswerActionStatus("Share sheet opened.");
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setAnswerActionStatus("Answer text copied for sharing.");
    } else {
      setAnswerActionStatus("Copy the answer text from the answer panel to share.");
    }
  } catch {
    setAnswerActionStatus("Share was cancelled or blocked by the browser.");
  }
}

function printCockpitAnswer() {
  if (!elements.cockpitPrintRoot) return;
  const project = activeProject();
  const title = getCockpitAnswerTitle();
  const pre = document.createElement("pre");
  pre.textContent = getCockpitAnswerText();
  const heading = document.createElement("h1");
  heading.textContent = title;
  const prompt = document.createElement("p");
  prompt.textContent = project.prompt || "";
  elements.cockpitPrintRoot.replaceChildren(heading, prompt, pre);
  document.body.classList.add("printing-cockpit-answer");
  window.print();
  setTimeout(() => document.body.classList.remove("printing-cockpit-answer"), 900);
  setAnswerActionStatus("Print dialog opened for the answer content.");
}

function adjustCockpitAnswerPrompt() {
  const prompt = activeProject().prompt || elements.commandSearch?.value.trim() || "";
  if (elements.commandSearch) elements.commandSearch.value = prompt;
  renderCockpitPromptBuilder(buildPromptBuilderSpec(prompt));
}

function renderCockpitAnswer() {
  if (!elements.cockpitAnswerContent) return;
  const project = activeProject();
  const artifacts = project.artifacts.slice(0, 24);
  state.cockpitGeneratedFile = state.cockpitGeneratedFile || buildMonthlyExpenseTrackerFile(project.prompt);
  if (!project.directAnswer && !state.cockpitLastOutput) {
    state.cockpitLastOutput = buildDirectCockpitAnswer(project);
    project.directAnswer = state.cockpitLastOutput;
  }
  const answer = document.createElement("article");
  answer.className = "cockpit-answer-card";
  const title = document.createElement("h3");
  title.textContent = state.cockpitGeneratedFile ? state.cockpitGeneratedFile.label : project.name || "Generated answer";
  const prompt = document.createElement("p");
  prompt.textContent = project.prompt || "";
  const output = document.createElement("pre");
  output.textContent = getCockpitAnswerText();
  answer.append(title, prompt);
  if (project.creditActual || state.projectActualCreditCost) {
    const creditNote = document.createElement("p");
    creditNote.className = "cockpit-credit-note";
    const actual = project.creditActual || state.projectActualCreditCost;
    const estimated = project.creditEstimate;
    creditNote.textContent = `Credit settlement: ${formatCredits(actual.credits)} actual Cloudflare credits${estimated ? ` (estimated ${formatCredits(estimated.credits)})` : ""}.`;
    answer.append(creditNote);
  }
  if (state.cockpitGeneratedFile) {
    const download = document.createElement("a");
    download.className = "cockpit-download-file";
    download.href = `data:${state.cockpitGeneratedFile.mime};charset=utf-8,${encodeURIComponent(state.cockpitGeneratedFile.content)}`;
    download.download = state.cockpitGeneratedFile.filename;
    download.textContent = `Download ${state.cockpitGeneratedFile.filename}`;
    answer.append(download);
  }
  const shareLinks = document.createElement("div");
  shareLinks.className = "cockpit-share-links";
  const encodedTitle = encodeURIComponent(getCockpitAnswerTitle());
  const encodedText = encodeURIComponent(buildShareText().slice(0, 900));
  const shareTargets = [
    ["Email", `mailto:?subject=${encodedTitle}&body=${encodedText}`],
    ["X", `https://twitter.com/intent/tweet?text=${encodedText}`],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`]
  ];
  for (const [label, href] of shareTargets) {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    shareLinks.append(link);
  }
  answer.append(shareLinks);
  answer.append(output);

  const artifactList = document.createElement("div");
  artifactList.className = "cockpit-answer-artifacts";
  for (const artifact of artifacts) {
    const item = document.createElement("section");
    item.className = `cockpit-answer-artifact ${artifact.status === "ok" ? "artifact-ok" : "artifact-error"}`;
    const strong = document.createElement("strong");
    strong.textContent = artifact.toolName;
    const meta = document.createElement("span");
    meta.textContent = `${artifact.outputType} - ${artifact.runMode}`;
    const snippet = document.createElement("p");
    snippet.textContent = artifact.output.slice(0, 260);
    item.append(strong, meta, snippet);
    artifactList.append(item);
  }
  elements.cockpitAnswerContent.replaceChildren(answer, artifactList);
  if (elements.commandSearchCount) elements.commandSearchCount.textContent = "Answer generated";
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

function renderProjectTemplates({ load = false } = {}) {
  if (!isProjectIdeaLibraryReady()) {
    elements.projectTemplateStats.textContent = projectIdeaLibrary.error
      ? `Project idea library could not load: ${projectIdeaLibrary.error}`
      : projectIdeaLibrary.loading
        ? "Loading project idea library..."
        : "Project idea library is available on demand. Search here when you want to load the full 500,010,000 idea library.";
    const card = document.createElement("article");
    card.className = "template-card";
    const title = document.createElement("h3");
    title.textContent = projectIdeaLibrary.loading ? "Loading project ideas" : "Project idea library";
    const note = document.createElement("p");
    note.textContent = projectIdeaLibrary.loading
      ? "The full project library is loading. The rest of ToolGrid stays usable while this finishes."
      : "Load this only when you want curated and mega project templates. Tool search, daily programs, uploads, and workspace buttons are ready without waiting for it.";
    const actions = document.createElement("div");
    actions.className = "tool-card-actions";
    const loadButton = document.createElement("button");
    loadButton.type = "button";
    loadButton.textContent = projectIdeaLibrary.loading ? "Loading..." : "Load project library";
    loadButton.disabled = Boolean(projectIdeaLibrary.loading);
    loadButton.addEventListener("click", () => {
      loadProjectIdeaLibrary().catch(() => {});
    });
    actions.append(loadButton);
    card.append(title, note, actions);
    elements.projectTemplateResults.replaceChildren(card);
    if (load && !projectIdeaLibrary.loading) loadProjectIdeaLibrary().catch(() => {});
    return;
  }

  const {
    PROJECT_IDEA_COUNT,
    PROJECT_TOOL_GROUPS,
    searchProjectTemplates
  } = projectIdeaLibrary.project;
  const {
    MEGA_PROJECT_COUNT,
    MEGA_PROJECT_VERSION,
    searchMegaProjects
  } = projectIdeaLibrary.mega;
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
    tools: fastProjectOsTools,
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
  const matchCount = getFilteredTools.lastMatchCount ?? filtered.length;
  updateCommandSearchCount(matchCount);
  elements.resultCount.textContent = `${matchCount.toLocaleString()} matching tools · ${tools.length.toLocaleString()} original catalog tools retired from direct website use (${visibleRetiredCatalogToolCount} visible, ${retiredCatalogAliasCount.toLocaleString()} compatibility aliases) · ${directWebsiteTools.length.toLocaleString()} direct in-house tools (${dailyDealingsSummary.toolCount.toLocaleString()} daily dealings programs, ${dailyDealingsVerification.ok ? "verified" : "needs review"}) + ${SKELETON_TOOL_RECORDS.length.toLocaleString()} skeleton replacements + ${POTENTIAL_APP_RECORDS.length.toLocaleString()} app/program records + ${PRODUCTION_STREAM_ACTIVATION_RECORDS.length.toLocaleString()} production packs + ${scaleExpansionSummary.totalRecords.toLocaleString()} scale-expansion records (${scaleExpansionVerification.ok ? "verified" : "needs review"}) + ${target500kSummary.totalRecords.toLocaleString()} target-500k records (${target500kVerification.ok ? "verified" : "needs review"}) + ${target5mSummary.additionalRuntimeRecords.toLocaleString()} target-5m records (${target5mVerification.ok ? "verified" : "needs review"}) · ${CATALOG_VERSION} · ${IN_HOUSE_TOOLS_VERSION} · ${MASSIVE_TOOL_FACTORY_VERSION} · ${DAILY_DEALINGS_VERSION} · ${SCALE_EXPANSION_VERSION} · ${TARGET_500K_VERSION} · ${TARGET_5M_VERSION}`;
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
  return getFilteredToolsFor(q, state.selectorCategory, 96).tools;
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
  const suggested = generateAiProjectPlan({ prompt, tools: getPlanningToolsForPrompt(prompt), maxPanels: 16 });
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
    billingAccount: state.billingAccount,
    projectCreditEstimate: state.projectCreditEstimate,
    projectActualCreditCost: state.projectActualCreditCost,
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
    state.billingAccount = normalizeBillingAccount(saved.billingAccount || createDefaultBillingAccount());
    state.projectCreditEstimate = saved.projectCreditEstimate || null;
    state.projectActualCreditCost = saved.projectActualCreditCost || null;
    syncBillingTierToLegacyAccess();
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
    renderBillingProfileSummary();
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
  const plan = generateAiProjectPlan({ prompt: project.prompt, tools: getPlanningToolsForPrompt(project.prompt), maxPanels: 16 });
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
  state.premiumTheme = buildThemeFromSettings(state.premiumTheme);
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

function fileNamesFromInput(input) {
  return Array.from(input?.files || []).map((file) => `${file.name} (${Math.round(file.size / 1024)} KB)`).join("\n");
}

function selectedSpaceStudioTool() {
  return SPACE_STUDIO_TOOLS.find((tool) => tool.id === elements.spaceProgramSelect?.value) || SEE_IN_YOUR_SPACE_TOOL;
}

function buildSpaceStudioSelectors() {
  if (!elements.spaceProgramSelect) return;
  elements.spaceProgramSelect.replaceChildren(...SPACE_STUDIO_TOOLS.map((tool) => {
    const option = document.createElement("option");
    option.value = tool.id;
    option.textContent = tool.name;
    return option;
  }));
  elements.spacePreset?.replaceChildren(...Object.entries(SPACE_OBJECT_PRESETS).map(([id, preset]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = preset.label;
    return option;
  }));
  elements.spaceProgramSelect.value = SEE_IN_YOUR_SPACE_TOOL.id;
  elements.spacePreset.value = state.spaceStudio.preset || "sofa";
}

function readSpaceStudioControls() {
  return createDefaultSpaceStudioSettings({
    ...state.spaceStudio,
    preset: elements.spacePreset?.value || state.spaceStudio.preset,
    roomWidth: Number(elements.spaceRoomWidth?.value || state.spaceStudio.roomWidth),
    roomDepth: Number(elements.spaceRoomDepth?.value || state.spaceStudio.roomDepth),
    roomHeight: Number(elements.spaceRoomHeight?.value || state.spaceStudio.roomHeight),
    productWidth: Number(elements.spaceProductWidth?.value || state.spaceStudio.productWidth),
    productHeight: Number(elements.spaceProductHeight?.value || state.spaceStudio.productHeight),
    productDepth: Number(elements.spaceProductDepth?.value || state.spaceStudio.productDepth),
    roomPhotoFiles: fileNamesFromInput(elements.spaceRoomUpload) || state.spaceStudio.roomPhotoFiles,
    productFiles: fileNamesFromInput(elements.spaceProductUpload) || state.spaceStudio.productFiles,
    modelFiles: fileNamesFromInput(elements.spaceModelUpload) || state.spaceStudio.modelFiles
  });
}

function syncSpaceStudioControlsFromState() {
  if (!elements.spaceRoomWidth) return;
  elements.spacePreset.value = state.spaceStudio.preset;
  elements.spaceRoomWidth.value = state.spaceStudio.roomWidth;
  elements.spaceRoomDepth.value = state.spaceStudio.roomDepth;
  elements.spaceRoomHeight.value = state.spaceStudio.roomHeight;
  elements.spaceProductWidth.value = state.spaceStudio.productWidth;
  elements.spaceProductHeight.value = state.spaceStudio.productHeight;
  elements.spaceProductDepth.value = state.spaceStudio.productDepth;
}

function renderSpaceStudioPanel() {
  if (!elements.spaceStudioStats) return;
  state.spaceStudio = readSpaceStudioControls();
  syncSpaceStudioControlsFromState();
  const tool = selectedSpaceStudioTool();
  const scene = buildSpaceStudioScene(state.spaceStudio, tool);
  elements.spaceStudioStats.innerHTML = `<strong>${SPACE_STUDIO_VERSION}</strong><span>${SPACE_STUDIO_TOOLS.length} programs · ${Object.keys(SPACE_OBJECT_PRESETS).length} object presets · ${scene.objects.length}/${SPACE_STUDIO_MAX_OBJECTS} scene objects · ${spaceStudioVerification.ok ? "verified" : "needs review"}</span>`;
  const product = scene.objects[0];
  const preview = document.createElement("div");
  preview.className = "space-preview-card";
  const miniRoom = document.createElement("div");
  miniRoom.className = "space-mini-room";
  const box = document.createElement("span");
  box.style.width = `${Math.max(18, Math.min(80, product.width * 9))}%`;
  box.style.height = `${Math.max(18, Math.min(70, product.depth * 12))}%`;
  box.style.background = product.color;
  miniRoom.append(box);
  const copy = document.createElement("div");
  copy.innerHTML = `<strong>${tool.name}</strong><span>${scene.room.width}x${scene.room.depth}x${scene.room.height} ${scene.room.unit} room · ${product.kind} ${product.width}x${product.height}x${product.depth} · uploads ${scene.uploads.total}</span>`;
  preview.append(miniRoom, copy);
  elements.spaceStudioPreview.replaceChildren(preview);
}

function updateSpaceStudioFromControls() {
  state.spaceStudio = readSpaceStudioControls();
  renderSpaceStudioPanel();
}

function openSpaceStudioTool() {
  const tool = selectedSpaceStudioTool();
  openTool(tool, Number(elements.targetPanel?.value || 0), activeProject().id, state.spaceStudio);
  renderSpaceStudioPanel();
}

function fillWorkspaceWithSpaceStudio() {
  const project = activeProject();
  const { count } = parseLayout(state.layout);
  const tools = SPACE_STUDIO_TOOLS.slice(0, Math.max(1, count));
  state.panels = Array.from({ length: count }, (_, index) => {
    const tool = tools[index % tools.length];
    return {
      toolId: tool.id,
      projectId: project.id,
      openedAt: Date.now(),
      role: index === 0 ? "3D space master studio" : "3D space program node",
      uiTitle: tool.name,
      initialInputs: { ...state.spaceStudio, preset: tool.config?.presets?.[0] || state.spaceStudio.preset }
    };
  });
  appendProjectEvent(project, `Loaded ${count} 3D space program node${count === 1 ? "" : "s"} with upload-ready room, product, and model slots.`, "info");
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
    state.billingAccount = normalizeBillingAccount({
      ...state.billingAccount,
      tierId: state.subscriptionStatus === SUBSCRIPTION_ACCESS.PAID
        ? (state.billingAccount.tierId === "trial" ? "pro" : state.billingAccount.tierId)
        : "trial"
    });
    if (state.subscriptionStatus !== SUBSCRIPTION_ACCESS.PAID) state.paidMultitaskEnabled = false;
    renderBillingProfileSummary();
    renderBasedProjectSelector();
    renderWaterfallPanel();
  });
  elements.profileOpenBuilder?.addEventListener("click", () => renderCockpitMenuPage("profile"));
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
  elements.spaceProgramSelect?.addEventListener("change", updateSpaceStudioFromControls);
  elements.spacePreset?.addEventListener("change", updateSpaceStudioFromControls);
  elements.spaceRoomUpload?.addEventListener("change", updateSpaceStudioFromControls);
  elements.spaceProductUpload?.addEventListener("change", updateSpaceStudioFromControls);
  elements.spaceModelUpload?.addEventListener("change", updateSpaceStudioFromControls);
  elements.spaceRoomWidth?.addEventListener("input", updateSpaceStudioFromControls);
  elements.spaceRoomDepth?.addEventListener("input", updateSpaceStudioFromControls);
  elements.spaceRoomHeight?.addEventListener("input", updateSpaceStudioFromControls);
  elements.spaceProductWidth?.addEventListener("input", updateSpaceStudioFromControls);
  elements.spaceProductHeight?.addEventListener("input", updateSpaceStudioFromControls);
  elements.spaceProductDepth?.addEventListener("input", updateSpaceStudioFromControls);
  elements.spaceOpenTool?.addEventListener("click", openSpaceStudioTool);
  elements.spaceFillWorkspace?.addEventListener("click", fillWorkspaceWithSpaceStudio);
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
    renderProjectTemplates({ load: true });
  });
  elements.projectTemplateComplexity.addEventListener("change", () => {
    state.templateComplexity = elements.projectTemplateComplexity.value;
    renderProjectTemplates({ load: true });
  });
  elements.projectInput.addEventListener("input", syncProjectInput);
  elements.runSimultaneous.addEventListener("click", runSimultaneousWorkflow);
  elements.runQueue.addEventListener("click", runQueuedWorkflow);
  elements.clearProjectData.addEventListener("click", clearProjectData);
  elements.commandSearch?.addEventListener("input", () => {
    const prompt = elements.commandSearch.value.trim();
    elements.aiPrompt.value = prompt;
    activeProject().prompt = prompt;
    if (elements.commandSearchCount) elements.commandSearchCount.textContent = prompt ? "Press Build to analyze prompt" : "Prompt ready";
    renderCockpitTemplateHint(prompt);
    refreshProjectCreditEstimate();
    if (!elements.cockpitCategorySearch?.value.trim()) renderCockpitCategoryDropdown(prompt);
    setCockpitPhase("prompt");
  });
  elements.cockpitCategorySearch?.addEventListener("input", () => {
    state.cockpitSelectedCategory = "";
    renderCockpitCategoryDropdown(elements.cockpitCategorySearch.value);
    renderCockpitTemplateHint(elements.commandSearch?.value || elements.cockpitCategorySearch.value);
  });
  elements.cockpitCategorySearch?.addEventListener("focus", () => {
    renderCockpitCategoryDropdown(elements.cockpitCategorySearch.value || elements.commandSearch?.value || "");
  });
  elements.cockpitTemplateUse?.addEventListener("click", useCockpitTemplate);
  elements.commandSearchRun?.addEventListener("click", launchTopSearchResult);
  elements.promptBuilderAccept?.addEventListener("click", () => resolveCockpitPromptBuilder());
  elements.promptBuilderSkip?.addEventListener("click", () => resolveCockpitPromptBuilder({ force: true }));
  elements.promptApplyAdjustments?.addEventListener("click", () => resolveCockpitPromptAdjustment());
  elements.promptMarkReady?.addEventListener("click", () => resolveCockpitPromptAdjustment({ force: true }));
  elements.cockpitPageButtons?.forEach((button) => {
    button.addEventListener("click", () => renderCockpitMenuPage(button.dataset.cockpitPage));
  });
  elements.cockpitPageClose?.addEventListener("click", () => elements.cockpitPageDrawer?.classList.add("hidden"));
  elements.answerBackToWorkflow?.addEventListener("click", () => {
    renderCockpitWorkflow();
    setCockpitPhase("workflow");
  });
  elements.answerAdjustPrompt?.addEventListener("click", adjustCockpitAnswerPrompt);
  elements.answerSaveDevice?.addEventListener("click", saveCockpitAnswerToDevice);
  elements.answerSaveCloud?.addEventListener("click", () => saveCockpitAnswerToCloud("cloud"));
  elements.answerSaveDrive?.addEventListener("click", () => saveCockpitAnswerToCloud("drive"));
  elements.answerShare?.addEventListener("click", shareCockpitAnswer);
  elements.answerPrint?.addEventListener("click", printCockpitAnswer);
  elements.search.addEventListener("input", () => {
    runToolSearchFrom(elements.search.value, "sidebar");
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
buildSpaceStudioSelectors();
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
renderSpaceStudioPanel();
renderSkeletonToolPanel();
setMainView(state.mainView);
renderCockpitTemplateHint();
state.billingAccount = normalizeBillingAccount(state.billingAccount);
syncBillingTierToLegacyAccess();
renderBillingProfileSummary();
setCockpitPhase("prompt");
setInterval(renderProgressDashboard, 1000);
