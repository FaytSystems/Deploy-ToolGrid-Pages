import assert from "node:assert/strict";
import { tools, CATEGORY_COUNTS, CATALOG_VERSION } from "../src/tool-catalog.js";
import {
  PROJECT_IDEA_COUNT,
  PROJECT_TEMPLATE_VERSION,
  PROJECT_TEMPLATES,
  PROJECT_TOOL_GROUPS,
  searchProjectTemplates
} from "../src/project-templates.js";
import {
  createMegaProjectNumber,
  getMegaComplexityForUiCount,
  getMegaProjectByNumber,
  getMegaProjectStats,
  MEGA_PROJECT_COUNT,
  MEGA_PROJECT_UI_MAX,
  MEGA_PROJECT_UI_MIN,
  MEGA_PROJECT_VERSION,
  searchMegaProjects
} from "../src/project-megagenerator.js";
import { engineNames, getDefaultInputs, getToolSchema, runTool } from "../src/tool-engines.js";
import {
  chooseToolsForCompiledPrompt,
  compilePromptToSearchPlan,
  PROMPT_COMPILER_VERSION,
  scoreToolAgainstCompiledPrompt
} from "../src/prompt-compiler.js";
import {
  FILE_TRANSLATOR_VERSION,
  analyzeFilePackage,
  classifyUploadedFile,
  getSimpleToolExplanation,
  readUploadedFiles,
  summarizeFileListForProjectInput
} from "../src/file-translator.js";
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
} from "../src/guided-project-orchestrator.js";
import { DEMAND_RANKINGS, TOOL_USAGE_RANKING, TOP_DEMAND_PROJECTS, TOOL_USAGE_CATEGORY_SUMMARY } from "../src/demand-rankings.js";
import {
  DEMAND_RANKER_VERSION,
  buildToolUsageEstimate,
  getDemandRankedProjects,
  getMegaDemandScore,
  getProjectedToolChain,
  getToolDemand
} from "../src/project-demand-ranker.js";
import {
  appendArtifact,
  buildInputsFromPayload,
  canConnectTools,
  createFoundationState,
  createPlanFromProjectTemplate,
  getToolIO,
  listCompatibleLinks,
  makeArtifact,
  PROJECT_FOUNDATION_VERSION,
  generateAiProjectPlan,
  createPanelEntriesFromPlan,
  runProjectPanelsAsQueue,
  runProjectPanelsSimultaneously,
  runProjectPanelsAsQueueFrom,
  WORKSPACE_MODES
} from "../src/project-foundation.js";
import {
  WATERFALL_SCHEDULER_VERSION,
  buildExecutionBatches,
  buildTaskDependencyGraph,
  canRunPaidMultitask,
  getRecommendedParallelism,
  summarizeSchedule
} from "../src/waterfall-scheduler.js";

import {
  PROGRESS_METER_VERSION,
  buildProgressSnapshot,
  estimateTaskDurationMs,
  formatDuration,
  getTaskProgress
} from "../src/progress-meter.js";

import {
  PROJECT_OPERATING_SYSTEM_VERSION,
  PROJECT_OS_UPGRADE_REGISTRY,
  INDUSTRY_PROJECT_PACKS,
  HUMAN_APPROVAL_RULES,
  analyzePromptForMissingDetails,
  buildDependencyGraphFromQueue,
  buildToolGenomeIndex,
  createAnalyticsEvent,
  createApprovalCheckpoints,
  createArtifactHistory,
  createProjectOperatingSystemSnapshot,
  createRepairEvent,
  generateToolGenome,
  matchIndustryPacks,
  recordWorkflowSnapshot,
  updateAnalyticsDemandModel
} from "../src/project-operating-system.js";

import {
  IN_HOUSE_TOOLS_VERSION,
  IN_HOUSE_TOOL_RECORDS,
  IN_HOUSE_TOOL_TARGET_COUNT,
  buildInHouseCompatibilityReport,
  buildInHouseWorkflowSuggestion,
  generateInHouseCompatibilityMatrix,
  getInHouseToolContract,
  searchInHouseTools,
  verifyInHouseToolSuite
} from "../src/in-house-tools.js";
import {
  MASSIVE_TOOL_FACTORY_RECORDS,
  MASSIVE_TOOL_FACTORY_TARGET_COUNT,
  MASSIVE_TOOL_FACTORY_VERSION,
  buildMassiveToolFactorySummary,
  searchMassiveToolFactoryTools,
  verifyMassiveToolFactorySuite
} from "../src/massive-tool-factory.js";
import {
  FUNCTIONAL_TOOL_RECORDS,
  FUNCTIONAL_TOOL_TARGET_COUNT,
  FUNCTIONAL_TOOLS_VERSION,
  buildFunctionalToolsSummary,
  getFunctionalDefaultInputs,
  runFunctionalTool,
  searchFunctionalTools,
  verifyFunctionalToolsSuite
} from "../src/functional-tools.js";
import {
  MINI_APP_SUITE_VERSION,
  MINI_APP_TARGET_COUNT,
  MINI_APP_TOOL_RECORDS,
  MINI_APP_DOMAINS,
  MINI_APP_OPERATION_FAMILIES,
  MINI_APP_SUPPORT_TOOLKIT,
  buildMiniAppSummary,
  getMiniAppDefaultInputs,
  runMiniAppTool,
  searchMiniApps,
  verifyMiniAppSuite
} from "../src/mini-apps.js";

import {
  WEBCAM_EXPLORER_TOOL,
  WEBCAM_EXPLORER_VERSION,
  WEBCAM_CATALOG,
  WEBCAM_MAX_UI_OUTPUTS,
  WEBCAM_PROVIDER_NOTES,
  buildWebcamGridPlan,
  runWebcamExplorer,
  searchWebcams,
  verifyWebcamCatalog
} from "../src/webcam-explorer.js";
import {
  FACTCHECKER_MAX_CELLS,
  FACTCHECKER_MODES,
  FACTCHECKER_SOURCE_POLICIES,
  FACTCHECKER_TOOL,
  FACTCHECKER_VERSION,
  buildFactcheckerSearchPlan,
  buildPhraseVariations,
  parseSiteList,
  runFactcheckerSearch,
  verifyFactcheckerPlan
} from "../src/factchecker-tool.js";
import {
  RGB_EFFECT_TYPES,
  RGB_GENERATOR_TOOL,
  THEME_PRESET_TEMPLATES,
  THEME_STUDIO_TOOL,
  THEME_SYSTEM_VERSION,
  buildCssVariables,
  buildRgbEffectPlan,
  buildThemeFromSettings,
  buildThemeStudioSummary,
  createDefaultThemeProfile,
  randomizeTheme,
  rotateThemeForSignin,
  verifyThemeStudioConfig
} from "../src/theme-system.js";
import {
  RGB_MOTION_EFFECTS,
  RGB_MOTION_MAX_LAYERS,
  RGB_MOTION_SHAPES,
  RGB_MOTION_STUDIO_TOOL,
  RGB_MOTION_STUDIO_VERSION,
  buildRgbMotionProject,
  createDefaultRgbMotionSettings,
  runRgbMotionStudio,
  searchRgbMotionEffects,
  verifyRgbMotionStudioConfig
} from "../src/rgb-motion-studio.js";
import {
  AUDIO_VISUALIZER_EFFECTS,
  AUDIO_VISUALIZER_MAX_VARIATIONS,
  AUDIO_VISUALIZER_SHAPES,
  AUDIO_VISUALIZER_STUDIO_TOOL,
  AUDIO_VISUALIZER_STUDIO_VERSION,
  buildAudioVisualizerProject,
  buildAudioVisualizerVariations,
  createDefaultAudioVisualizerSettings,
  runAudioVisualizerStudio,
  verifyAudioVisualizerStudioConfig
} from "../src/audio-visualizer-studio.js";
import {
  PRICE_COMPARISON_MAX_CELLS,
  PRICE_COMPARISON_MODES,
  PRICE_COMPARISON_TOOL,
  PRICE_COMPARISON_VERSION,
  PRICE_SOURCE_POLICIES,
  PRICE_TOOLS,
  SALE_FINDER_TOOL,
  BUDGET_PRODUCT_MATCHER_TOOL,
  buildPriceComparisonPlan,
  runPriceComparisonSearch,
  verifyPriceComparisonConfig
} from "../src/price-comparison-tool.js";
import {
  SKELETON_MAX_CELLS,
  SKELETON_TOOL_LABEL,
  SKELETON_TOOL_VERSION,
  buildSkeletonCompatibilityReport,
  buildSkeletonTools,
  pickSkeletonToolsForPrompt,
  runSkeletonTool,
  verifySkeletonToolSuite
} from "../src/skeleton-tools.js";

import {
  COLAB_FOUNDATION_VERSION,
  COLAB_PROVIDER_IDS,
  COLAB_PROVIDER_PLANS,
  COLAB_ROLES,
  COLAB_SECURITY_CHECKLIST,
  acceptInvite,
  buildCloudConnectorPlan,
  buildProjectShareBundle,
  canShareFileBetweenAccounts,
  createDefaultCollabState,
  createInvite,
  createShareSpace,
  summarizeProviderCost,
  validateInviteEmail
} from "../src/colab-foundation.js";

const knownEngines = new Set(engineNames);
const ids = new Set(tools.map((tool) => tool.id));
assert.equal(ids.size, tools.length, "generated catalog should not contain duplicate ids");
const toolsById = new Map(tools.map((tool) => [tool.id, tool]));
const sampledCatalogTools = [...tools.slice(0, 220), ...tools.slice(-80)];
const sampledInHouseTools = [...IN_HOUSE_TOOL_RECORDS.slice(0, 140), ...IN_HOUSE_TOOL_RECORDS.slice(-60)];
const sampledFactoryTools = [...MASSIVE_TOOL_FACTORY_RECORDS.slice(0, 160), ...MASSIVE_TOOL_FACTORY_RECORDS.slice(-80)];
const baseRuntimeForSkeletons = [...tools, ...IN_HOUSE_TOOL_RECORDS, ...MASSIVE_TOOL_FACTORY_RECORDS, ...FUNCTIONAL_TOOL_RECORDS, ...MINI_APP_TOOL_RECORDS, WEBCAM_EXPLORER_TOOL, FACTCHECKER_TOOL, THEME_STUDIO_TOOL, RGB_GENERATOR_TOOL, RGB_MOTION_STUDIO_TOOL, AUDIO_VISUALIZER_STUDIO_TOOL, ...PRICE_TOOLS];
const skeletonTools = buildSkeletonTools(baseRuntimeForSkeletons);

assert.equal(CATALOG_VERSION, "2026-06-13-native-2500-v1");
assert.equal(PROJECT_FOUNDATION_VERSION, "2026-06-13-paid-multitask-waterfall-foundation-v7");
assert.equal(FILE_TRANSLATOR_VERSION, "2026-06-13-file-translator-foundation-v1");
assert.equal(PROMPT_COMPILER_VERSION, "2026-06-13-prompt-compiler-v1");
assert.equal(GUIDED_PROJECT_ORCHESTRATOR_VERSION, "2026-06-13-guided-project-orchestrator-v1");
assert.equal(WATERFALL_SCHEDULER_VERSION, "2026-06-13-paid-multitask-waterfall-scheduler-v1");
assert.equal(PROGRESS_METER_VERSION, "2026-06-13-progress-eta-foundation-v1");
assert.equal(PROJECT_OPERATING_SYSTEM_VERSION, "2026-06-13-project-operating-system-v1");
assert.equal(COLAB_FOUNDATION_VERSION, "2026-06-13-colab-foundation-v1");
assert.equal(IN_HOUSE_TOOLS_VERSION, "2026-06-13-in-house-tools-compatibility-v9-price-shopping-batch9");
assert.equal(IN_HOUSE_TOOL_RECORDS.length, IN_HOUSE_TOOL_TARGET_COUNT, "in-house starter suite should ship with the full batch-nine tool count");
assert.equal(MASSIVE_TOOL_FACTORY_VERSION, "2026-06-13-massive-tool-factory-v1");
assert.equal(MASSIVE_TOOL_FACTORY_RECORDS.length, MASSIVE_TOOL_FACTORY_TARGET_COUNT, "massive tool factory should add 5,100 generated specific tools");
assert.equal(FUNCTIONAL_TOOLS_VERSION, "2026-06-13-functional-daily-tools-v1");
assert.equal(FUNCTIONAL_TOOL_RECORDS.length, FUNCTIONAL_TOOL_TARGET_COUNT, "functional suite should ship 25 browser-side daily tools");
assert.ok(knownEngines.has("functional_tool"), "functional tool engine should be available to the runtime");
assert.ok(knownEngines.has("mini_app"), "functional mini-app engine should be available to the runtime");
const functionalVerification = verifyFunctionalToolsSuite();
assert.equal(functionalVerification.ok, true, `functional verification should pass: ${functionalVerification.errors.join("; ")}`);
const functionalSummary = buildFunctionalToolsSummary();
assert.equal(functionalSummary.toolCount, 25, "functional summary should count all tools");
assert.ok(functionalSummary.skeletonPatternCount >= 8, "functional tools should generalize into multiple skeleton patterns");
assert.ok(searchFunctionalTools("invoice budget inventory").length >= 3, "functional search should find daily tools");
assert.match(runFunctionalTool(FUNCTIONAL_TOOL_RECORDS.find((tool) => tool.id === "functional-document-summarizer"), getFunctionalDefaultInputs(FUNCTIONAL_TOOL_RECORDS[0])), /# Summary/, "document summarizer should produce a summary");
assert.match(runTool(FUNCTIONAL_TOOL_RECORDS.find((tool) => tool.id === "functional-csv-cleaner"), getFunctionalDefaultInputs(FUNCTIONAL_TOOL_RECORDS.find((tool) => tool.id === "functional-csv-cleaner"))), /item,price,stock/, "functional tools should run through shared engine");
assert.match(runTool(FUNCTIONAL_TOOL_RECORDS.find((tool) => tool.id === "functional-inventory-reorder-calculator"), getFunctionalDefaultInputs(FUNCTIONAL_TOOL_RECORDS.find((tool) => tool.id === "functional-inventory-reorder-calculator"))), /REORDER/, "inventory reorder calculator should flag reorder rows");
assert.ok(getToolSchema(FUNCTIONAL_TOOL_RECORDS.find((tool) => tool.id === "functional-email-draft-generator")).some((field) => field.name === "recipient"), "functional schemas should expose useful inputs");

assert.equal(MINI_APP_SUITE_VERSION, "2026-06-13-max-functional-mini-apps-v1");
assert.equal(MINI_APP_DOMAINS.length, 100, "mini-app suite should cover 100 daily-use domains");
assert.equal(MINI_APP_OPERATION_FAMILIES.length, 10, "mini-app suite should apply 10 reusable operation families");
assert.equal(MINI_APP_SUPPORT_TOOLKIT.length, 30, "mini-app suite should build dependency/support tools before dependent mini apps");
assert.equal(MINI_APP_TOOL_RECORDS.length, MINI_APP_TARGET_COUNT, "mini-app suite should ship every generated mini app and support tool");
const miniAppVerification = verifyMiniAppSuite({ knownEngines: engineNames });
assert.equal(miniAppVerification.ok, true, `mini-app verification should pass: ${miniAppVerification.errors.slice(0, 8).join("; ")}`);
const miniAppSummary = buildMiniAppSummary();
assert.equal(miniAppSummary.toolCount, 1030, "mini-app summary should count all maximum functional mini apps");
assert.ok(searchMiniApps("chicken coop budget checklist", { limit: 12 }).some((item) => /Chicken Coop/.test(item.tool.name)), "mini-app search should find chicken coop tools");
assert.ok(searchMiniApps("customer support message report", { limit: 12 }).some((item) => /Customer Support/.test(item.tool.name)), "mini-app search should find customer support tools");
const miniBudgetTool = MINI_APP_TOOL_RECORDS.find((tool) => tool.id === "mini-chicken-coop-budget-estimator");
assert.match(runMiniAppTool(miniBudgetTool, getMiniAppDefaultInputs(miniBudgetTool)), /Total estimate|Budget check/, "mini-app budget estimator should calculate useful output");
const miniMessageTool = MINI_APP_TOOL_RECORDS.find((tool) => tool.id === "mini-customer-support-message-pack");
assert.match(runTool(miniMessageTool, getDefaultInputs(miniMessageTool)), /Subject: Customer Support update/, "mini-apps should run through shared engine");
assert.ok(getToolSchema(MINI_APP_TOOL_RECORDS.find((tool) => tool.id === "mini-small-business-planner")).some((field) => field.name === "deadline"), "mini-app schemas should expose operation-specific inputs");
for (const tool of [...MINI_APP_TOOL_RECORDS.slice(0, 80), ...MINI_APP_TOOL_RECORDS.slice(-30)]) {
  assert.ok(knownEngines.has(tool.engine), `mini app ${tool.id} should use a known engine`);
  assert.equal(tool.systemLabel, "Functional Mini-App", `${tool.id} should have the mini-app system label`);
  assert.ok((tool.tags || []).length >= 18, `${tool.id} needs dense search tags`);
  assert.ok(tool.config?.skeletonPattern?.id, `${tool.id} should expose a skeleton pattern`);
  const output = runTool(tool, getDefaultInputs(tool));
  assert.equal(typeof output, "string", `mini-app output should be a string for ${tool.id}`);
  assert.ok(output.length > 40, `mini-app output should not be empty for ${tool.id}`);
}

assert.equal(WEBCAM_EXPLORER_VERSION, "2026-06-13-pg-webcam-explorer-v1");
assert.equal(WEBCAM_MAX_UI_OUTPUTS, 64, "webcam explorer should support up to 64 UI outputs");
assert.ok(knownEngines.has("webcam_explorer"), "webcam explorer engine should be available to the runtime");
assert.equal(WEBCAM_EXPLORER_TOOL.id, "pg-live-webcam-explorer");
assert.equal(FACTCHECKER_VERSION, "2026-06-13-factchecker-phrase-finder-v1");
assert.equal(FACTCHECKER_MAX_CELLS, 64, "FactChecker should support up to 64 clipping cells");
assert.ok(knownEngines.has("factchecker"), "factchecker engine should be available to the runtime");
assert.equal(FACTCHECKER_TOOL.id, "factchecker-quote-phrase-finder");
assert.equal(THEME_SYSTEM_VERSION, "2026-06-13-paid-theme-studio-rgb-v1");
assert.equal(RGB_MOTION_STUDIO_VERSION, "2026-06-13-rgb-motion-studio-v1");
assert.ok(knownEngines.has("rgb_motion_studio"), "RGB Motion Studio engine should be available to the runtime");
assert.equal(RGB_MOTION_STUDIO_TOOL.id, "rgb-motion-shape-fx-studio");
assert.equal(RGB_MOTION_MAX_LAYERS, 64, "RGB Motion Studio should support up to 64 effect layers");
assert.ok(RGB_MOTION_EFFECTS.some((effect) => effect.id === "dog-chasing-tail"), "dog-chasing-tail effect should be available");
assert.ok(RGB_MOTION_SHAPES.some((shape) => shape.id === "custom-path"), "draw-your-own custom path shape should be available");
assert.ok(knownEngines.has("theme_studio"), "theme studio engine should be available to the runtime");
assert.ok(knownEngines.has("rgb_generator"), "RGB generator engine should be available to the runtime");
assert.ok(knownEngines.has("skeleton_tool"), "generic skeleton engine should be available to the runtime");
assert.equal(THEME_STUDIO_TOOL.id, "paid-profile-theme-studio");
assert.equal(RGB_GENERATOR_TOOL.id, "rgb-effect-generator");
assert.ok(THEME_PRESET_TEMPLATES.length >= 6, "theme studio should include premade templates");
assert.ok(RGB_EFFECT_TYPES.includes("rotating-outline") && RGB_EFFECT_TYPES.includes("strobe") && RGB_EFFECT_TYPES.includes("sweep"), "theme studio should include RGB effects from the profile designer");
const defaultTheme = createDefaultThemeProfile();
assert.equal(verifyThemeStudioConfig(defaultTheme).ok, true, "default paid profile theme should verify");
const randomTheme = randomizeTheme(123);
assert.equal(verifyThemeStudioConfig(randomTheme).ok, true, "randomized theme should verify");
const rotatedTheme = rotateThemeForSignin({ ...defaultTheme, alternateBetweenLogons: true, signInCounter: 0 });
assert.equal(rotatedTheme.signInCounter, 1, "theme profile should track sign-in alternation");
assert.ok(buildCssVariables(randomTheme)["--tg-theme-active-cell"], "theme studio should emit CSS variables");
assert.match(buildThemeStudioSummary(buildThemeFromSettings(defaultTheme)).effectPlan.summary, /outline|pulse|chase|sweep|color|flash|strobe/i, "theme summary should include an effect plan");
assert.match(buildRgbEffectPlan({ effect: "strobe", region: "active-cell", speedSeconds: 1.5 }).summary, /strobe/, "RGB generator should build effect plans");
assert.match(runTool(THEME_STUDIO_TOOL, getDefaultInputs(THEME_STUDIO_TOOL)), /Theme Studio profile/, "Theme Studio should run through shared engine");
assert.match(runTool(RGB_GENERATOR_TOOL, getDefaultInputs(RGB_GENERATOR_TOOL)), /RGB effect/, "RGB Generator should run through shared engine");

assert.equal(AUDIO_VISUALIZER_STUDIO_VERSION, "2026-06-13-audio-visualizer-studio-v1");
assert.ok(knownEngines.has("audio_visualizer_studio"), "Audio Visualizer Studio engine should be available to the runtime");
assert.equal(AUDIO_VISUALIZER_STUDIO_TOOL.id, "audio-visualizer-studio");
assert.equal(AUDIO_VISUALIZER_MAX_VARIATIONS, 64, "Audio Visualizer Studio should support 64 visualizer variations");
assert.ok(AUDIO_VISUALIZER_SHAPES.length >= 10, "Audio Visualizer Studio should include a large shape starter library");
assert.ok(AUDIO_VISUALIZER_EFFECTS.some((effect) => effect.id === "dog-chasing-tail"), "Audio Visualizer Studio should include the dog-chasing-tail effect");
assert.ok(AUDIO_VISUALIZER_EFFECTS.some((effect) => effect.id === "smart-shadow-pass"), "Audio Visualizer Studio should include smart shadow lighting");
const audioVizSettings = createDefaultAudioVisualizerSettings();
const audioVizVerification = verifyAudioVisualizerStudioConfig(audioVizSettings);
assert.equal(audioVizVerification.ok, true, `audio visualizer verification should pass: ${audioVizVerification.errors.join("; ")}`);
const audioVizProject = buildAudioVisualizerProject(audioVizSettings);
assert.equal(audioVizProject.variations.length, 64, "Audio Visualizer Studio should generate a full 64-cell variation grid");
assert.equal(audioVizProject.queue.length, 8, "Audio Visualizer Studio should build the waterfall queue shown in the concept");
assert.ok(audioVizProject.toolboxSync.active, "Audio Visualizer Studio should publish shared toolbox context");
assert.match(runAudioVisualizerStudio(audioVizSettings), /Audio Visualizer Studio plan/, "Audio Visualizer Studio should produce a readable plan");
assert.match(runTool(AUDIO_VISUALIZER_STUDIO_TOOL, getDefaultInputs(AUDIO_VISUALIZER_STUDIO_TOOL)), /Variations prepared: 64/, "Audio Visualizer Studio should run through shared engine");
assert.ok(getToolSchema(AUDIO_VISUALIZER_STUDIO_TOOL).some((field) => field.name === "audioUrl"), "Audio Visualizer schema should include audio URL input");
assert.equal(buildAudioVisualizerVariations({ variationCount: 12 }).length, 12, "Audio Visualizer variation generator should respect smaller batches");

assert.equal(PRICE_COMPARISON_VERSION, "2026-06-13-price-comparison-shopping-v1");
assert.equal(PRICE_COMPARISON_MAX_CELLS, 64, "price comparison should support up to 64 shopping cells");
assert.ok(knownEngines.has("price_comparison"), "price comparison engine should be available to the runtime");
assert.equal(PRICE_COMPARISON_TOOL.id, "price-comparison-64-cell-grid");
assert.equal(SALE_FINDER_TOOL.id, "on-sale-deal-finder-grid");
assert.equal(BUDGET_PRODUCT_MATCHER_TOOL.id, "budget-product-match-grid");
assert.equal(PRICE_TOOLS.length, 3, "shopping suite should include compare, sale, and budget tools");
assert.ok(PRICE_SOURCE_POLICIES.length >= 5, "price comparison should ship with source policy groups");
const priceVerification = verifyPriceComparisonConfig();
assert.equal(priceVerification.ok, true, `price comparison verification should pass: ${priceVerification.errors.join("; ")}`);
const pricePlan = buildPriceComparisonPlan({ productName: "wireless earbuds", count: 64, includeVariations: "true", mode: PRICE_COMPARISON_MODES.BUDGET_MATCH, maxPrice: 40 });
assert.equal(pricePlan.cells.length, 64, "price comparison should prepare a full 64-cell grid");
assert.ok(pricePlan.cells.some((cell) => cell.provider === "temu.com"), "variation mode should include Temu lane");
assert.ok(pricePlan.cells.some((cell) => cell.provider === "shein.com"), "variation mode should include SHEIN lane");
assert.ok(pricePlan.cells.some((cell) => cell.provider === "alibaba.com"), "variation mode should include Alibaba lane");
assert.ok(pricePlan.cells.every((cell) => cell.status === "search-ready"), "price cells should start as search-ready, not fake prices");
assert.match(runPriceComparisonSearch({ productName: "wireless earbuds", count: 8 }), /Price comparison plan/, "price comparison engine should produce a readable plan");
assert.match(runTool(PRICE_COMPARISON_TOOL, getDefaultInputs(PRICE_COMPARISON_TOOL)), /Cells prepared/, "Price Comparison should run through the shared tool engine");
assert.ok(getToolSchema(PRICE_COMPARISON_TOOL).some((field) => field.name === "productName"), "Price Comparison schema should include product input");
assert.ok((FACTCHECKER_TOOL.tags || []).length >= 20, "FactChecker should be densely tagged for searchability");
assert.ok(FACTCHECKER_SOURCE_POLICIES.length >= 8, "FactChecker should ship with multiple credible source policy groups");
assert.equal(SKELETON_TOOL_VERSION, "2026-06-13-generic-skeleton-tools-v3-functional-daily-tools");
assert.equal(SKELETON_MAX_CELLS, 64, "skeleton tools should support up to 64 generic cells");
assert.equal(skeletonTools.length, baseRuntimeForSkeletons.length, "each current tool should receive a generated skeleton counterpart");
const skeletonVerification = verifySkeletonToolSuite(skeletonTools, baseRuntimeForSkeletons.length);
assert.equal(skeletonVerification.ok, true, `skeleton verification should pass: ${skeletonVerification.errors.join("; ")}`);
assert.equal(skeletonTools[0].systemLabel, SKELETON_TOOL_LABEL, "skeleton tools should be labeled separately from specific tools");
assert.ok(skeletonTools.every((tool) => tool.engine === "skeleton_tool"), "all generated skeletons should use the generic skeleton engine");
const skeletonReport = buildSkeletonCompatibilityReport(skeletonTools);
assert.ok(skeletonReport.patternCount >= 20, "skeleton system should map many generic function patterns");
const skeletonMatches = pickSkeletonToolsForPrompt({ prompt: "generic reusable quote finder and data cleanup skeleton", skeletonTools, limit: 10 });
assert.ok(skeletonMatches.length >= 5, "prompt engine should be able to suggest skeleton tools");
assert.match(runSkeletonTool(skeletonMatches[0].tool, { projectGoal: "find phrase evidence", cells: 64 }), /Cells prepared: 64/, "skeleton runtime should prepare up to 64 cells");
assert.match(runTool(skeletonMatches[0].tool, getDefaultInputs(skeletonMatches[0].tool)), /Skeleton tool:/, "skeleton tools should run through shared engine");
assert.deepEqual(parseSiteList("https://Reuters.com/news, apnews.com\nwww.c-span.org"), ["reuters.com", "apnews.com", "c-span.org"], "site lists should normalize domains");
const factVariations = buildPhraseVariations("The future belongs to those who prepare today.");
assert.ok(factVariations.some((variation) => variation.searchStyle === "exact-match"), "FactChecker should build exact phrase variations");
const factPlan = buildFactcheckerSearchPlan({ phrase: "I have a dream", person: "Martin Luther King Jr.", count: 64, mode: FACTCHECKER_MODES.QUOTE_VERIFICATION });
assert.equal(factPlan.clippingCells.length, 64, "FactChecker should prepare a 64-cell clipping grid");
assert.ok(factPlan.clippingCells.every((cell) => cell.status === "search-ready"), "FactChecker cells should start as search-ready, not fake evidence");
assert.ok(factPlan.clippingCells.every((cell) => /Pending live search connector/.test(cell.excerpt)), "FactChecker must not invent excerpts before live verification");
assert.equal(verifyFactcheckerPlan(factPlan).ok, true, "FactChecker plan verification should pass");
const socialFactPlan = buildFactcheckerSearchPlan({ phrase: "climate", mode: FACTCHECKER_MODES.SOCIAL_KEYWORD_SCAN, includeSites: "youtube.com,x.com,reddit.com", socialTargets: "@official", count: 8 });
assert.equal(socialFactPlan.clippingCells.length, 8, "social keyword scan should respect requested cell count");
assert.match(runFactcheckerSearch({ phrase: "I have a dream", person: "Martin Luther King Jr.", count: 5 }), /FactChecker plan/, "FactChecker engine should produce a readable search plan");
assert.ok(WEBCAM_PROVIDER_NOTES.length >= 6, "webcam explorer should track several safe provider policies");
const webcamVerification = verifyWebcamCatalog();
assert.equal(webcamVerification.ok, true, `webcam catalog should pass PG/source verification: ${webcamVerification.errors.join("; ")}`);
assert.ok(webcamVerification.stats.catalogCount >= 60, "webcam catalog should ship with a useful safe starter database");
assert.ok(webcamVerification.stats.linkOutCount >= 20, "webcam catalog should preserve provider link-out mode for blocked/licensed embeds");
const webcamBeachResults = searchWebcams("beach ocean scenic", { limit: 12 });
assert.ok(webcamBeachResults.length >= 8, "webcam search should find beach/scenic results");
assert.ok(webcamBeachResults.every((cam) => cam.pgRating === "PG" && cam.safeForToolGrid), "webcam search should only return PG-safe records");
const webcamWallPlan = buildWebcamGridPlan({ query: "forest desert rainforest city beach", count: 64 });
assert.equal(webcamWallPlan.requestedCount, 64, "webcam wall plan should accept a 64-output request");
assert.ok(webcamWallPlan.returnedCount <= 64, "webcam wall plan must never exceed 64 outputs");
assert.match(runWebcamExplorer({ query: "national park wildlife", count: 5 }), /Yellowstone|National Park|Explore|webcam/i, "webcam engine should produce a readable cam plan");
assert.match(runTool(FACTCHECKER_TOOL, getDefaultInputs(FACTCHECKER_TOOL)), /Cells prepared/, "FactChecker should run through the shared tool engine");
assert.ok(getToolSchema(FACTCHECKER_TOOL).some((field) => field.name === "phrase"), "FactChecker schema should include phrase input");
const inHouseVerification = verifyInHouseToolSuite({ knownEngines: engineNames });
assert.equal(inHouseVerification.ok, true, `in-house verification should pass: ${inHouseVerification.errors.join("; ")}`);
assert.ok(inHouseVerification.stats.searchableTagCount >= IN_HOUSE_TOOL_RECORDS.length * 12, "in-house tools should be densely tagged for search");
assert.ok(inHouseVerification.stats.searchPhraseCount >= IN_HOUSE_TOOL_RECORDS.length * 8, "in-house tools should have rich search phrases");
const inHouseMatrix = generateInHouseCompatibilityMatrix();
assert.equal(inHouseMatrix.toolCount, IN_HOUSE_TOOL_RECORDS.length, "compatibility matrix should cover every in-house tool");
assert.ok(inHouseMatrix.linkCount > IN_HOUSE_TOOL_RECORDS.length * 4, "compatibility generator should find many usable in-house tool links");
assert.ok(inHouseMatrix.parallelSafeLinks > 100, "compatibility generator should mark many links parallel-safe");
const inHouseReport = buildInHouseCompatibilityReport({ limit: 12 });
assert.match(inHouseReport.summary, /compatibility links/, "in-house compatibility report should summarize links");
assert.ok(inHouseReport.topConnected.length >= 8, "in-house report should list well-connected tools");
const inHouseMushroomPrompt = "Build a workflow that helps a mushroom farm calculate substrate recipes, track contamination reports, generate batch labels, write customer emails, and create a weekly harvest forecast.";
const inHouseSearch = searchInHouseTools("mushroom farm label email harvest forecast", { limit: 12 });
assert.ok(inHouseSearch.some((item) => item.tool.id === "mushroom-substrate-mix-calculator"), "in-house search should find mushroom substrate tools");
assert.ok(inHouseSearch.some((item) => item.tool.id.includes("label")), "in-house search should find label tools");
const inHouseWorkflow = buildInHouseWorkflowSuggestion({ prompt: inHouseMushroomPrompt, limit: 16, maxParallel: 4 });
assert.equal(inHouseWorkflow.selectedToolCount, 16, "in-house workflow suggestions should return 16 tools for a full grid run");
assert.ok(inHouseWorkflow.tasks.some((task) => task.signal === "ready-for-multitask"), "in-house workflow should identify paid multitask-ready tasks");
assert.ok(inHouseWorkflow.batches.length >= 2, "in-house workflow should produce execution batches");

const factoryVerification = verifyMassiveToolFactorySuite({ knownEngines: engineNames });
assert.equal(factoryVerification.ok, true, `massive tool factory verification should pass: ${factoryVerification.errors.join("; ")}`);
const factorySummary = buildMassiveToolFactorySummary();
assert.equal(factorySummary.toolCount, MASSIVE_TOOL_FACTORY_TARGET_COUNT, "factory summary should report every generated specific tool");
assert.equal(factorySummary.domainCount, 102, "factory should cover 102 broad domains");
assert.equal(factorySummary.operationCount, 50, "factory should apply 50 operation families per domain");
assert.ok(factorySummary.skeletonReadyCount === MASSIVE_TOOL_FACTORY_RECORDS.length, "every factory tool should be skeleton-ready");
const factorySearch = searchMassiveToolFactoryTools("chicken coop blueprint materials", { limit: 12 });
assert.ok(factorySearch.some((item) => /Chicken Coop/.test(item.tool.name)), "factory search should find chicken coop tools");
assert.ok(factorySearch.some((item) => item.tool.config?.skeletonReady), "factory search should return skeleton-ready tools");
for (const tool of sampledFactoryTools) {
  assert.ok(knownEngines.has(tool.engine), `factory tool ${tool.id} should use a known engine`);
  assert.ok(tool.factoryGenerated, `${tool.id} should be marked as factory generated`);
  assert.ok((tool.tags || []).length >= 16, `${tool.id} needs dense search tags`);
  assert.ok((tool.searchPhrases || []).length >= 8, `${tool.id} needs search phrases`);
  const output = runTool(tool, getDefaultInputs(tool));
  assert.equal(typeof output, "string", `factory output should be a string for ${tool.id}`);
  assert.ok(output.length > 0, `factory output should not be empty for ${tool.id}`);
}
const factorySkeletons = buildSkeletonTools(MASSIVE_TOOL_FACTORY_RECORDS);
assert.equal(factorySkeletons.length, MASSIVE_TOOL_FACTORY_RECORDS.length, "each massive factory tool should receive a skeleton counterpart");
assert.equal(verifySkeletonToolSuite(factorySkeletons, MASSIVE_TOOL_FACTORY_RECORDS.length).ok, true, "factory-generated skeleton tools should verify");

assert.ok(COLAB_PROVIDER_PLANS.some((provider) => provider.id === COLAB_PROVIDER_IDS.GOOGLE_DRIVE), "COLAB should include Google Drive connector metadata");
assert.ok(COLAB_PROVIDER_PLANS.some((provider) => provider.id === COLAB_PROVIDER_IDS.DROPBOX), "COLAB should include Dropbox connector metadata");
assert.ok(COLAB_SECURITY_CHECKLIST.length >= 8, "COLAB should ship with security requirements before real sharing launches");
assert.equal(PROJECT_OS_UPGRADE_REGISTRY.length, 10, "all ten product upgrades should be registered");
assert.ok(INDUSTRY_PROJECT_PACKS.length >= 12, "industry packs should cover multiple business fields");
assert.ok(HUMAN_APPROVAL_RULES.length >= 5, "approval checkpoint rules should cover sensitive workflow actions");
assert.equal(TOOL_SELECTOR_TABS.CHOOSE_OWN, "choose-own");
assert.equal(canUseBasedOnProject(SUBSCRIPTION_ACCESS.FREE), false);
assert.equal(canUseBasedOnProject(SUBSCRIPTION_ACCESS.PAID), true);
assert.ok(SOUND_LIBRARY.length >= 300, "dense sound library should include hundreds of selectable sound options");
assert.equal(PROJECT_TEMPLATE_VERSION, "2026-06-13-10000-project-ideas-v1");
assert.equal(PROJECT_IDEA_COUNT, 10000, "project idea library should contain exactly 10,000 templates");
assert.equal(PROJECT_TOOL_GROUPS.length, 125, "project tool group library should contain 125 reusable groups");
assert.equal(MEGA_PROJECT_VERSION, "2026-06-13-500000000-virtual-projects-v1");
assert.equal(MEGA_PROJECT_COUNT, 500000000, "mega project library should expose exactly 500,000,000 virtual projects");
assert.equal(MEGA_PROJECT_UI_MIN, 1, "mega project library should start at 1 UI node");
assert.equal(MEGA_PROJECT_UI_MAX, 64, "mega project library should support up to 64 UI nodes");
assert.equal(DEMAND_RANKER_VERSION, "2026-06-13-demand-ranker-v1");
assert.equal(DEMAND_RANKINGS.version, DEMAND_RANKER_VERSION, "generated demand rankings should match demand ranker version");
assert.equal(DEMAND_RANKINGS.modelStats.projectUniverse, 500000000, "demand model should rank the 500,000,000 virtual project universe");
assert.equal(TOP_DEMAND_PROJECTS.length, 250, "generated demand output should include the top 250 project samples");
assert.equal(TOOL_USAGE_RANKING.length, 2500, "tool usage list should rank every tool from most-used to least-used");
assert.ok(TOOL_USAGE_CATEGORY_SUMMARY.length >= 10, "category demand summary should include major categories");
assert.equal(TOOL_USAGE_RANKING[0].rank, 1, "top tool should have rank 1");
assert.ok(TOOL_USAGE_RANKING[0].projectedUses >= TOOL_USAGE_RANKING[1].projectedUses, "tool usage ranking should be descending");
assert.ok(TOOL_USAGE_RANKING.at(-1).rank === 2500, "last tool should have rank 2500");
assert.equal(tools.length, 2500, "catalog should contain exactly 2,500 tool records");
assert.deepEqual(CATEGORY_COUNTS, {
  "Business": 17,
  "Calculators": 300,
  "Color": 125,
  "Converters": 548,
  "Cooking": 20,
  "Data": 200,
  "Date & Time": 200,
  "Developer": 350,
  "Gardening": 40,
  "Generators": 150,
  "SEO & Marketing": 100,
  "Text": 450
});

for (const tool of sampledCatalogTools) {
  assert.ok(tool.id, "tool id is required");
  assert.ok(tool.name, `tool name is required for ${tool.id}`);
  assert.ok(tool.category, `tool category is required for ${tool.id}`);
  assert.ok(knownEngines.has(tool.engine), `unknown engine ${tool.engine} for ${tool.id}`);
  assert.ok(Array.isArray(tool.tags), `tags array is required for ${tool.id}`);
  assert.ok(getToolSchema(tool).every((field) => field.name && field.label && field.type), `schema fields are invalid for ${tool.id}`);
  const io = getToolIO(tool);
  assert.ok(Array.isArray(io.accepts) && io.accepts.length, `project IO accepts should be defined for ${tool.id}`);
  assert.ok(io.output, `project IO output should be defined for ${tool.id}`);
  const output = runTool(tool, getDefaultInputs(tool));
  assert.equal(typeof output, "string", `output should be a string for ${tool.id}`);
  assert.ok(output.length > 0, `output should not be empty for ${tool.id}`);
}

for (const tool of sampledInHouseTools) {
  assert.ok(knownEngines.has(tool.engine), `in-house tool ${tool.id} should use a known engine`);
  assert.ok(tool.inHouse, `${tool.id} should be marked as in-house`);
  assert.ok((tool.tags || []).length >= 12, `${tool.id} needs dense search tags`);
  const contract = getInHouseToolContract(tool);
  assert.ok(contract.accepts.length && contract.produces.length, `${tool.id} should declare compatibility contracts`);
  assert.ok(contract.searchPhrases.length >= 8, `${tool.id} should have search phrases`);
  const output = runTool(tool, getDefaultInputs(tool));
  assert.equal(typeof output, "string", `in-house output should be a string for ${tool.id}`);
  assert.ok(output.length > 0, `in-house output should not be empty for ${tool.id}`);
}


const templateIds = new Set();
let referencedTemplateTools = 0;
for (const template of PROJECT_TEMPLATES.filter((_, index) => index < 600 || index % 1000 === 0)) {
  assert.ok(template.id, "template id is required");
  assert.ok(!templateIds.has(template.id), `duplicate template id: ${template.id}`);
  templateIds.add(template.id);
  assert.ok(template.title, `template title is required for ${template.id}`);
  assert.ok(template.field, `template field is required for ${template.id}`);
  assert.ok(template.toolCount >= 2, `template should reference at least two tools: ${template.id}`);
  assert.ok(Array.isArray(template.panels) && template.panels.length >= 1, `template should include panels: ${template.id}`);
  let counted = 0;
  for (const panel of template.panels) {
    assert.ok(Number.isInteger(panel.panelIndex), `panel index is required for ${template.id}`);
    assert.ok(Array.isArray(panel.tools) && panel.tools.length >= 1, `panel tools are required for ${template.id}`);
    for (const ref of panel.tools) {
      counted += 1;
      referencedTemplateTools += 1;
      assert.ok(ids.has(ref.toolId), `template ${template.id} references missing tool ${ref.toolId}`);
    }
  }
  assert.equal(counted, template.toolCount, `tool count should match panel references for ${template.id}`);
}
assert.ok(referencedTemplateTools > 3000, "sampled project library validation should cross-reference a large set of tool placements");

const searchedTemplates = searchProjectTemplates("restaurant seo campaign", { limit: 5 });
assert.ok(searchedTemplates.length > 0, "template search should find project ideas");
const nestedTemplate = PROJECT_TEMPLATES.find((template) => template.complexity === "nested-64");
assert.ok(nestedTemplate, "at least one 64-tool nested template should exist");
const nestedPlan = createPlanFromProjectTemplate(nestedTemplate, toolsById);
assert.equal(nestedPlan.steps.length, 16, "64-tool templates should produce 16 outer UI panels");
assert.equal(nestedPlan.steps.reduce((sum, step) => sum + 1 + step.nestedToolIds.length, 0), 64, "64-tool templates should produce 64 nested tool nodes");
const nestedEntries = createPanelEntriesFromPlan(nestedPlan, "project-template-test");
assert.equal(nestedEntries.length, 16);
assert.ok(nestedEntries.every((entry) => entry.nestedToolIds.length === 3), "each 64-tool panel should carry 3 nested sub-tools plus the primary UI tool");

const demandScore = getMegaDemandScore({ fieldIndex: 0, groupIndex: 0, uiNodes: 2, variantIndex: 0 });
assert.ok(demandScore > 0.8 && demandScore <= 1.01, "top demand score should be normalized");
const demandProjects = getDemandRankedProjects({ limit: 5, fieldDepth: 10, groupDepth: 10, uiDepth: 8, variantDepth: 4 });
assert.equal(demandProjects.length, 5, "demand ranker should return ranked project samples");
assert.ok(demandProjects[0].demandScore >= demandProjects[1].demandScore, "demand ranked projects should be descending");
const projectedChain = getProjectedToolChain({ fieldIndex: 0, groupIndex: 0, uiNodes: 4, variantIndex: 0 });
assert.equal(projectedChain.length, 4, "projected tool chain should match UI-node count");
assert.ok(projectedChain.every((tool) => ids.has(tool.id)), "projected chains should use real tools");
assert.ok(getToolDemand(projectedChain[0]) > 0, "tool demand should score selected tools");
const smallUsage = buildToolUsageEstimate({ fieldLimit: 3, groupLimit: 3, uiSamples: [1, 2, 4], variantSamples: [0, 1] });
assert.equal(smallUsage.rankedTools.length, 2500, "small usage estimate should still rank every tool");
assert.ok(smallUsage.rankedTools[0].projectedUses >= smallUsage.rankedTools[1].projectedUses, "usage estimate should be sorted descending");

const megaStats = getMegaProjectStats();
assert.equal(megaStats.totalProjects, 500000000, "mega stats should report 500,000,000 virtual projects");
assert.equal(megaStats.perUiSize, 7812500, "each UI size from 1 to 64 should have 7,812,500 project variants");
assert.equal(getMegaComplexityForUiCount(1), "single-1");
assert.equal(getMegaComplexityForUiCount(64), "nested-33-64");
const megaOne = getMegaProjectByNumber(createMegaProjectNumber({ fieldIndex: 0, groupIndex: 0, uiNodes: 1, variantIndex: 0 }));
assert.equal(megaOne.toolCount, 1, "1-UI mega project should contain one UI/tool node");
assert.equal(megaOne.panelCount, 1, "1-UI mega project should use one outer panel");
assert.equal(megaOne.layout, "1x1", "1-UI mega project should recommend 1x1");
const megaSixtyFour = getMegaProjectByNumber(createMegaProjectNumber({ fieldIndex: 0, groupIndex: 0, uiNodes: 64, variantIndex: 624 }));
assert.equal(megaSixtyFour.toolCount, 64, "64-UI mega project should contain 64 UI/tool nodes");
assert.equal(megaSixtyFour.panelCount, 16, "64-UI mega project should use 16 outer panels");
assert.equal(megaSixtyFour.layout, "4x4", "64-UI mega project should recommend 4x4");
assert.ok(megaSixtyFour.panels.every((panel) => panel.tools.length === 4), "64-UI mega project should nest four tool UIs per outer panel");
const megaPlan = createPlanFromProjectTemplate(megaSixtyFour, toolsById);
assert.equal(megaPlan.steps.length, 16, "64-UI mega plan should produce 16 outer steps");
assert.equal(megaPlan.steps.reduce((sum, step) => sum + 1 + step.nestedToolIds.length, 0), 64, "64-UI mega plan should preserve 64 nested UI/tool nodes");
const megaSearch = searchMegaProjects("restaurant seo campaign", { limit: 8, complexity: "nested-33-64" });
assert.equal(megaSearch.length, 8, "mega project search should return virtual projects");
assert.ok(megaSearch.every((template) => template.toolCount >= 33 && template.toolCount <= 64), "mega search should respect nested UI range filters");
assert.ok(megaSearch.some((template) => template.id.startsWith("mega-project-")), "mega search should expose stable mega project IDs");
const megaLast = getMegaProjectByNumber(MEGA_PROJECT_COUNT);
assert.ok(megaLast.id.endsWith("500000000"), "last mega project should be addressable by number");

const mushroomPrompt = "Build a workflow that helps a mushroom farm calculate substrate recipes, track contamination reports, generate batch labels, write customer emails, and create a weekly harvest forecast.";
const compiledMushroom = compilePromptToSearchPlan(mushroomPrompt);
assert.equal(compiledMushroom.primaryDomain, "Mushroom farm operations", "mushroom prompt should detect mushroom farm operations");
assert.ok(compiledMushroom.taskParts.length >= 5, "mushroom prompt should split into multiple task parts");
assert.ok(compiledMushroom.globalSearchTerms.includes("business"), "compiler should generalize to business");
assert.ok(compiledMushroom.globalSearchTerms.includes("calculate soil variations"), "compiler should generalize substrate recipes into soil/substrate calculations");
assert.ok(compiledMushroom.globalSearchTerms.includes("documentation of subject"), "compiler should generalize contamination tracking into documentation");
assert.ok(compiledMushroom.globalSearchTerms.includes("create tags"), "compiler should generalize batch labels into tags");
assert.ok(compiledMushroom.globalSearchTerms.includes("generate auto-respond emails"), "compiler should generalize customer emails into auto-response email tools");
const chosenMushroomTools = chooseToolsForCompiledPrompt({ prompt: mushroomPrompt, tools, limit: 16 });
assert.ok(chosenMushroomTools.tools.length >= 5, "compiler should select several compatible tools for the mushroom workflow");
assert.ok(chosenMushroomTools.tools.some((item) => item.tool.engine === "soil_mix"), "mushroom workflow should include a soil/substrate calculation tool");
assert.ok(chosenMushroomTools.tools.some((item) => ["csv_tool", "json_tool", "markdown_table"].includes(item.tool.engine)), "mushroom workflow should include documentation/data tools");
assert.ok(scoreToolAgainstCompiledPrompt(chosenMushroomTools.tools[0].tool, compiledMushroom) > 0, "selected tools should score against compiled prompt");

assert.equal(classifyUploadedFile({ name: "contamination-log.csv", type: "text/csv" }), "spreadsheet");
assert.equal(classifyUploadedFile({ name: "grow-room-notes.pdf", type: "application/pdf" }), "pdf");
const fakeUploadedFiles = await readUploadedFiles([
  {
    name: "substrate-batches.csv",
    type: "text/csv",
    size: 62,
    lastModified: 0,
    text: async () => `batch,substrate,contamination\nA,straw,none\nB,masters mix,green spot`
  },
  {
    name: "customer-replies.md",
    type: "text/markdown",
    size: 95,
    lastModified: 0,
    text: async () => "Customers ask about weekly mushroom availability and pickup dates."
  }
]);
assert.equal(fakeUploadedFiles.length, 2, "file reader should return uploaded file descriptors");
assert.equal(fakeUploadedFiles[0].status, "text-readable", "text files should be read for previews");
const fileAnalysis = analyzeFilePackage({ prompt: mushroomPrompt, files: fakeUploadedFiles, tools, limit: 16 });
assert.equal(fileAnalysis.version, FILE_TRANSLATOR_VERSION);
assert.equal(fileAnalysis.fileCount, 2);
assert.ok(fileAnalysis.searchTerms.includes("spreadsheet"), "file translator should add file-type search terms");
assert.ok(fileAnalysis.recommendations.length >= 5, "file translator should recommend several tools");
assert.ok(fileAnalysis.recommendations.some((item) => ["csv_tool", "markdown_table", "text_stats", "text_transform"].includes(item.engine)), "file translator should suggest data/text tools");
assert.match(getSimpleToolExplanation(tools[0]), /In simple terms:/, "tool explanations should be plain-language strings");
const uploadedSummary = summarizeFileListForProjectInput({ prompt: mushroomPrompt, files: fakeUploadedFiles, analysis: fileAnalysis });
assert.match(uploadedSummary, /Uploaded file package:/, "uploaded file summary should become shared project input");

const sample = (engine, config = {}, inputs = {}) => runTool({ id: "sample", name: "Sample", category: "Test", engine, config, tags: [] }, inputs);

assert.equal(sample("text_transform", { mode: "uppercase" }, { text: "abc" }), "ABC");
assert.equal(sample("text_transform", { mode: "slugify" }, { text: "Hello, Free Tools!" }), "hello-free-tools");
assert.equal(sample("encoder", { mode: "base64_encode" }, { text: "ToolGrid" }), "VG9vbEdyaWQ=");
assert.equal(sample("encoder", { mode: "url_encode" }, { text: "a b" }), "a%20b");
assert.equal(sample("json_tool", { mode: "format" }, { text: '{"a":1}' }), '{\n  "a": 1\n}');
assert.equal(sample("csv_tool", { mode: "csv_to_json" }, { text: "a,b\n1,2" }), '[\n  {\n    "a": "1",\n    "b": "2"\n  }\n]');
assert.equal(sample("unit_convert", { kind: "length", from: "meter", to: "centimeter" }, { value: 2 }), "200 centimeter");
assert.equal(sample("percentage", {}, { value: 25, total: 200 }), "12.5%");
assert.equal(sample("percent_change", {}, { start: 80, end: 100 }), "25%");
assert.match(sample("tip_calculator", {}, { bill: 50, tipPercent: 20, people: 2 }), /Total: \$60/);
assert.match(sample("loan_payment", {}, { principal: 100000, annualRate: 6, years: 30 }), /Monthly payment:/);
assert.match(sample("compound_interest", {}, { principal: 1000, annualRate: 5, years: 1, compoundsPerYear: 12, monthlyContribution: 0 }), /Projected balance:/);
assert.match(sample("date_diff", {}, { startDate: "2026-01-01", endDate: "2026-01-31" }), /30 days/);
assert.equal(sample("date_add", { unit: "days" }, { startDate: "2026-01-01", amount: 10 }), "2026-01-11");
assert.match(sample("unix_time", { mode: "to_date" }, { timestamp: 0 }), /1970-01-01/);
assert.match(sample("password_generator", {}, { length: 18 }), /^.{18}$/);
assert.match(sample("uuid_generator", {}, {}), /^[0-9a-f-]{36}$/i);
assert.equal(sample("color_convert", { mode: "hex_to_rgb" }, { hex: "#ffffff" }), "rgb(255, 255, 255)");
assert.equal(sample("color_convert", { mode: "rgb_to_hex" }, { red: 255, green: 0, blue: 170 }), "#ff00aa");
assert.match(sample("contrast_ratio", {}, { foreground: "#ffffff", background: "#000000" }), /21:1/);
assert.match(sample("utm_builder", {}, { url: "https://example.com", source: "x", medium: "y", campaign: "z" }), /utm_source=x/);
assert.match(sample("meta_length", {}, { title: "Title", description: "Description" }), /Title: 5/);
assert.match(sample("keyword_density", {}, { text: "tool tool grid", find: "tool" }), /66.667%/);
assert.match(sample("markdown_table", {}, { text: "a,b\n1,2" }), /\| a \| b \|/);
assert.match(sample("plant_spacing", {}, { bedLength: 4, bedWidth: 4, spacing: 12 }), /16/);
assert.match(sample("soil_mix", {}, { totalVolume: 9, partA: 1, partB: 1, partC: 1 }), /Part 1: 3/);
assert.match(sample("recipe_scale", {}, { ingredient: "flour", amount: 2, originalServings: 4, desiredServings: 8 }), /flour: 4/);
assert.match(sample("invoice_total", {}, { subtotal: 100, taxPercent: 10, discountPercent: 10, shipping: 5 }), /Total: \$104/);
assert.equal(sample("simple_formula", { mode: "volume_box" }, { a: 2, b: 3, c: 4 }), "24 cubic units");
assert.match(sample("theme_studio", {}, getDefaultInputs(THEME_STUDIO_TOOL)), /Theme Studio profile/);
assert.match(sample("rgb_generator", {}, getDefaultInputs(RGB_GENERATOR_TOOL)), /RGB effect/);
assert.match(sample("audio_visualizer_studio", {}, getDefaultInputs(AUDIO_VISUALIZER_STUDIO_TOOL)), /Audio Visualizer Studio plan/);
assert.match(runTool({ ...skeletonTools[0], id: "sample-skeleton" }, getDefaultInputs(skeletonTools[0])), /Skeleton tool:/);

const textTool = tools.find((tool) => tool.id === "blog-post-uppercase-converter");
const slugTool = tools.find((tool) => tool.id === "blog-post-slug-generator");
const jsonTool = tools.find((tool) => tool.engine === "json_tool" && tool.config?.mode === "format");
const csvTool = tools.find((tool) => tool.engine === "csv_tool" && tool.config?.mode === "csv_to_json");
assert.ok(textTool, "text workflow source tool should exist");
assert.ok(slugTool, "text workflow target tool should exist");
assert.ok(jsonTool, "json tool should exist");
assert.ok(csvTool, "csv tool should exist");
assert.equal(canConnectTools(textTool, slugTool), true, "text tools should be compatible");
assert.equal(canConnectTools(csvTool, jsonTool), true, "CSV to JSON output should flow into JSON tools");

const injected = buildInputsFromPayload(textTool, "project waterfall input");
assert.equal(injected.text, "project waterfall input");

const foundation = createFoundationState();
assert.equal(foundation.mode, WORKSPACE_MODES.MANUAL);
assert.equal(foundation.autoWaterfall, true);
const project = foundation.projects[0];
project.input = "project waterfall input";
const panelEntries = [
  { toolId: textTool.id, projectId: project.id },
  { toolId: slugTool.id, projectId: project.id },
  { toolId: jsonTool.id, projectId: "other-project" }
];
const links = listCompatibleLinks(panelEntries, toolsById);
assert.ok(links.some((link) => link.source.tool.id === textTool.id && link.target.tool.id === slugTool.id), "compatible project links should be detected");

const simultaneous = runProjectPanelsSimultaneously({ project, panelEntries, toolsById });
assert.equal(simultaneous.length, 2, "simultaneous run should only use panels assigned to the project");
assert.ok(simultaneous.every((artifact) => artifact.projectId === project.id));

const queued = runProjectPanelsAsQueue({ project, panelEntries, toolsById });
assert.equal(queued.length, 2, "queued run should only use panels assigned to the project");
assert.equal(queued[0].output, "PROJECT WATERFALL INPUT");
assert.equal(queued[1].output, "project-waterfall-input");

const downstream = runProjectPanelsAsQueueFrom({ project, panelEntries, toolsById, startPanelIndex: 1, initialPayload: "Manual Publish Input", runMode: "manual-waterfall" });
assert.equal(downstream.length, 1, "manual waterfall should continue after the published panel");
assert.equal(downstream[0].output, "manual-publish-input");


const aiPlan = generateAiProjectPlan({ prompt: "Build an SEO blog workflow with title, meta description, keyword density and a slug", tools, maxPanels: 6 });
assert.equal(aiPlan.intentId, "content-seo");
assert.ok(aiPlan.compiler, "AI plan should include prompt compiler output");
assert.ok(aiPlan.steps.length >= 4, "AI plan should include multiple compatible steps");
assert.ok(["2x2", "3x2", "4x2"].includes(aiPlan.recommendedLayout), "AI plan should recommend a useful grid");
const aiEntries = createPanelEntriesFromPlan(aiPlan, project.id);
assert.equal(aiEntries.length, aiPlan.steps.length);
assert.ok(aiEntries.every((entry) => entry.projectId === project.id && entry.aiStepStatus === "planned"));
const vagueAnalysis = analyzeProjectPromptForQuestions({ prompt: "Make a project for my business" });
assert.equal(vagueAnalysis.isReady, false, "based-on-project selector should ask questions for vague prompts");
assert.ok(vagueAnalysis.questions.some((question) => question.id === "domain-detail"), "vague project should ask for a domain");
const clarifiedPrompt = buildClarifiedPrompt("Make a project for my business", { "domain-detail": "mushroom farm", "communication-tone": "friendly" });
assert.match(clarifiedPrompt, /mushroom farm/, "clarifying answers should become part of the prompt");
const concreteAnalysis = analyzeProjectPromptForQuestions({ prompt: mushroomPrompt, fileAnalysis });
assert.ok(concreteAnalysis.routeCount >= 5, "concrete prompts should produce multiple route candidates");
const queue = buildWaterfallQueueFromPlan(aiPlan, { maxTasks: 64 });
assert.equal(queue.length, aiPlan.steps.length, "waterfall queue should mirror visible AI plan steps when no nested tools are present");
assert.ok(queue.every((task, index) => task.sequence === index + 1 && task.status === "queued"), "waterfall queue should be ordered and queued");
const revisedQueue = reviseWaterfallTask({ queue, taskId: queue[0].id, userObservation: "Use a more specific title tool." });
assert.equal(revisedQueue[0].status, "revised", "paused waterfall tasks should be repairable");
assert.match(revisedQueue[0].prompt, /User pause note/, "repair notes should be carried into the next prompt read");
const runStrategy = suggestProjectRunStrategy({ plan: aiPlan });
assert.equal(runStrategy.mode, "single-run", "normal guided plans should run from one start button");
const profile = setUserTopics(createDefaultUserProfile(), "gardening, mushrooms, cozy games, business");
const theme = createSessionTheme(profile);
assert.ok(theme.name && theme.background && theme.topics.includes("mushrooms"), "profile topics should generate a session theme");
const bellChoices = getSoundChoices({ category: "bells", subcategory: "success" });
assert.ok(bellChoices.length >= 5, "sound choices should support subcategory randomization");
assert.ok(chooseRandomSound({ category: "bells", subcategory: "success" }).id, "random sound chooser should return a sound record");

const artifact = makeArtifact({ projectId: project.id, panelIndex: 0, tool: textTool, inputs: injected, output: "DONE" });
appendArtifact(project, artifact);
assert.equal(project.artifacts.length, 1);
assert.ok(project.events.length >= 1);

const schedulerPlan = generateAiProjectPlan({ prompt: mushroomPrompt, tools, maxPanels: 8 });
const schedulerProject = createFoundationState().projects[0];
schedulerProject.prompt = mushroomPrompt;
schedulerProject.input = mushroomPrompt;
schedulerProject.plan = schedulerPlan;
schedulerProject.waterfallQueue = buildWaterfallQueueFromPlan(schedulerPlan, { maxTasks: 64 });
const schedulerEntries = createPanelEntriesFromPlan(schedulerPlan, schedulerProject.id);
const schedulerGraph = buildTaskDependencyGraph({ project: schedulerProject, queue: schedulerProject.waterfallQueue, plan: schedulerPlan, panelEntries: schedulerEntries, toolsById });
assert.equal(schedulerGraph.tasks.length, schedulerProject.waterfallQueue.length, "scheduler graph should include every waterfall task");
assert.ok(schedulerGraph.independentCount >= 1, "scheduler graph should identify tasks that can run from project input");
const paidAccess = canRunPaidMultitask({ subscriptionStatus: SUBSCRIPTION_ACCESS.PAID, queue: schedulerProject.waterfallQueue, requestedParallel: 3 });
assert.ok(paidAccess.allowed || schedulerProject.waterfallQueue.length <= 1, "paid multitask should be allowed for useful multi-step queues");
assert.equal(canRunPaidMultitask({ subscriptionStatus: SUBSCRIPTION_ACCESS.FREE, queue: schedulerProject.waterfallQueue }).allowed, false, "free access should not allow paid multitask");
assert.ok(getRecommendedParallelism({ taskCount: 10, paid: true, requested: 3 }) >= 1, "parallelism recommendation should be safe");
const schedulerBatches = buildExecutionBatches({ graph: schedulerGraph, maxParallel: paidAccess.parallelism || 2 });
assert.ok(schedulerBatches.length >= 1, "scheduler should produce execution batches");
assert.ok(schedulerBatches.every((batch) => Array.isArray(batch.tasks)), "each scheduler batch should include task objects");
assert.ok(summarizeSchedule({ graph: schedulerGraph, batches: schedulerBatches, access: paidAccess }).includes("tasks"), "scheduler summary should describe tasks");
const progressSnapshot = buildProgressSnapshot({
  project: schedulerProject,
  panelEntries: schedulerEntries,
  layout: schedulerPlan.recommendedLayout,
  toolsById,
  now: Date.now()
});
assert.equal(progressSnapshot.taskCount, schedulerProject.waterfallQueue.length, "progress meter should track every waterfall task");
assert.ok(progressSnapshot.percent >= 0 && progressSnapshot.percent <= 100, "total progress percent should be bounded");
assert.ok(progressSnapshot.panelCells.length >= schedulerEntries.length, "progress meter should track 4x4/active cells");
assert.ok(progressSnapshot.nestedUiCount >= schedulerEntries.length, "progress meter should track visible/nested UI nodes");
assert.ok(progressSnapshot.etaMs >= 0, "progress meter should produce an ETA estimate");
assert.match(progressSnapshot.etaLabel, /s|m|h/, "ETA label should be human-readable");
assert.equal(getTaskProgress({ status: "queued" }), 0, "queued progress should start at zero");
assert.equal(getTaskProgress({ status: "done" }), 1, "done progress should equal one");
assert.ok(estimateTaskDurationMs({ status: "queued", mode: "panel" }, textTool) > 0, "queued task should have a duration estimate");
assert.equal(formatDuration(65000), "1m 5s", "duration formatter should support ETA countdown labels");

const genomeIndex = buildToolGenomeIndex(tools);
assert.equal(genomeIndex.toolCount, 2500, "tool genome index should cover every tool");
assert.ok(genomeIndex.parallelSafeCount > 2000, "most browser-native tools should be parallel safe");
assert.ok(genomeIndex.indexedCapabilities >= 100, "tool genome should index many capability tags");
const sampleGenome = generateToolGenome(textTool);
assert.equal(sampleGenome.toolId, textTool.id, "tool genome should keep source tool id");
assert.ok(sampleGenome.accepts.length && sampleGenome.produces.length, "tool genome should declare input and output contracts");
assert.ok(typeof sampleGenome.simpleExplanation === "string" && sampleGenome.simpleExplanation.includes(textTool.name), "tool genome should provide simple explanations");
const osGraph = buildDependencyGraphFromQueue({ queue: schedulerProject.waterfallQueue, plan: schedulerPlan, genomeIndex });
assert.equal(osGraph.nodeCount, schedulerProject.waterfallQueue.length, "project OS graph should include every waterfall queue task");
assert.ok(osGraph.ready.length >= 1, "project OS graph should identify ready tasks");
assert.ok(osGraph.parallelGroups.length >= 1 || osGraph.ready.length === 0, "project OS should create parallel groups when tasks can run early");
const missingDetails = analyzePromptForMissingDetails({ prompt: "Make a project for my business" });
assert.equal(missingDetails.isReady, false, "ask-only-when-needed flow should flag vague prompts");
assert.ok(missingDetails.questions.some((question) => question.id === "domain-detail"), "vague prompts should ask for domain detail");
const detailedDetails = analyzePromptForMissingDetails({ prompt: mushroomPrompt, fileAnalysis });
assert.ok(detailedDetails.questions.length <= 3, "detailed prompts should ask only a few targeted follow-up questions");
const matchedPacks = matchIndustryPacks(mushroomPrompt);
assert.ok(matchedPacks.some((pack) => pack.id === "mushroom-farm-pack"), "industry packs should match mushroom farm prompts");
const approvalCheckpoints = createApprovalCheckpoints({ queue: schedulerProject.waterfallQueue, prompt: mushroomPrompt });
assert.ok(approvalCheckpoints.some((checkpoint) => /review/i.test(checkpoint.label)), "approval checkpoints should be generated for customer-facing or sensitive steps");
const repairEvent = createRepairEvent({ task: schedulerProject.waterfallQueue[0], userObservation: "The wrong tool was chosen and the label is missing strain name.", projectId: schedulerProject.id });
assert.ok(repairEvent.suggestedActions.includes("reselect-tool"), "repair memory should detect wrong-tool feedback");
assert.match(repairEvent.repairedPrompt, /User repair note/, "repair memory should create a revised task prompt");
const artifactHistory = createArtifactHistory(project);
assert.ok(artifactHistory.totalArtifacts >= 1, "artifact history should summarize project outputs");
const workflowSnapshot = recordWorkflowSnapshot({ project: schedulerProject, panelEntries: schedulerEntries, graph: osGraph, profile });
assert.equal(workflowSnapshot.projectId, schedulerProject.id, "workflow recorder should preserve project id");
assert.ok(workflowSnapshot.toolIds.length >= 1, "workflow recorder should save tool ids");
const analyticsEvents = [
  createAnalyticsEvent({ type: "search", project: schedulerProject, toolId: textTool.id }),
  createAnalyticsEvent({ type: "project-start", project: schedulerProject, toolId: textTool.id }),
  createAnalyticsEvent({ type: "repair", project: schedulerProject, toolId: slugTool.id }),
  createAnalyticsEvent({ type: "project-complete", project: schedulerProject, toolId: slugTool.id })
];
const analyticsModel = updateAnalyticsDemandModel({ events: analyticsEvents });
assert.equal(analyticsModel.eventCount, 4, "analytics loop should count workflow events");
assert.equal(analyticsModel.projectStarts, 1, "analytics loop should count project starts");
assert.equal(analyticsModel.completions, 1, "analytics loop should count completions");
assert.ok(analyticsModel.topTools.length >= 2, "analytics loop should rank used tools");
const osSnapshot = createProjectOperatingSystemSnapshot({
  tools,
  project: schedulerProject,
  queue: schedulerProject.waterfallQueue,
  plan: schedulerPlan,
  panelEntries: schedulerEntries,
  prompt: mushroomPrompt,
  fileAnalysis,
  profile
});
assert.equal(osSnapshot.upgrades.length, 10, "project OS snapshot should expose all ten upgrades");
assert.equal(osSnapshot.genomeStats.toolCount, 2500, "project OS snapshot should include genome stats");
assert.ok(osSnapshot.graphStats.nodeCount >= 1, "project OS snapshot should include graph stats");
assert.ok(osSnapshot.industryPacks.some((pack) => pack.id === "mushroom-farm-pack"), "project OS snapshot should include matched industry packs");

const rgbMotionDefaults = createDefaultRgbMotionSettings();
const rgbMotionPlan = buildRgbMotionProject({ ...rgbMotionDefaults, outlineEffect: "dog-chasing-tail", fillEffect: "plasma-fill", layerCount: 8 });
assert.equal(rgbMotionPlan.layers.length, 8, "RGB Motion Studio should create the requested effect layers");
assert.ok(rgbMotionPlan.compatibility.accepts.includes("video"), "RGB Motion Studio should accept video inputs");
assert.ok(rgbMotionPlan.compatibility.produces.includes("animated-overlay"), "RGB Motion Studio should produce animated overlays");
assert.ok(rgbMotionPlan.layers.some((layer) => layer.effectId === "dog-chasing-tail"), "RGB layer plan should include dog-chasing-tail when selected");
assert.equal(verifyRgbMotionStudioConfig(rgbMotionPlan.settings).ok, true, "RGB Motion Studio default/selected plan should verify");
assert.match(runRgbMotionStudio(rgbMotionPlan.settings), /Dog-Chasing-Tail|dog/i, "RGB Motion Studio runner should describe the dog-chasing-tail style effect");
assert.ok(searchRgbMotionEffects("light ball tail path", 4).some((item) => item.effect.id === "dog-chasing-tail"), "effect search should find dog-chasing-tail from plain terms");
const rgbMotionSkeletons = buildSkeletonTools([RGB_MOTION_STUDIO_TOOL]);
assert.equal(rgbMotionSkeletons[0].config.patternId, "visual-effect-compositor", "RGB Motion Studio should generate a visual effect compositor skeleton");

const colabState = createDefaultCollabState();
assert.equal(colabState.version, COLAB_FOUNDATION_VERSION, "COLAB state should expose the current version");
assert.equal(colabState.activeProviderId, COLAB_PROVIDER_IDS.GOOGLE_DRIVE, "Google Drive should be the default cloud connector plan");
const googlePlan = buildCloudConnectorPlan({ providerId: COLAB_PROVIDER_IDS.GOOGLE_DRIVE, projectName: "Mushroom Farm Report" });
assert.ok(googlePlan.freeToStart, "Google Drive connector should be free to start within API/storage limits");
assert.ok(googlePlan.steps.some((step) => /redirect URI/i.test(step)), "cloud setup plan should include OAuth redirect setup");
assert.match(summarizeProviderCost(COLAB_PROVIDER_IDS.DROPBOX), /Dropbox/, "provider cost summary should explain Dropbox connector costs");
const shareSpace = createShareSpace({ project: schedulerProject, providerId: COLAB_PROVIDER_IDS.DROPBOX, ownerEmail: "owner@example.com" });
assert.equal(shareSpace.providerId, COLAB_PROVIDER_IDS.DROPBOX, "share spaces should remember their provider");
assert.equal(shareSpace.members[0].role, COLAB_ROLES.OWNER, "share space creator should be owner");
assert.equal(validateInviteEmail("teammate@example.com"), true, "valid invite emails should pass");
assert.equal(validateInviteEmail("bad-email"), false, "invalid invite emails should fail");
const invite = createInvite({ shareSpaceId: shareSpace.id, projectName: shareSpace.projectName, email: "teammate@example.com", role: COLAB_ROLES.EDITOR, message: "Help review the labels." });
assert.equal(invite.role, COLAB_ROLES.EDITOR, "invites should preserve selected role");
const acceptedSpace = acceptInvite({ shareSpace, invite });
assert.ok(acceptedSpace.members.some((member) => member.email === "teammate@example.com" && member.role === COLAB_ROLES.EDITOR), "accepted invites should add members to the share space");
const bundle = buildProjectShareBundle({ project: schedulerProject, files: fakeUploadedFiles, invites: [invite], providerId: COLAB_PROVIDER_IDS.TOOLGRID_NATIVE });
assert.equal(bundle.shareSpace.files.length, 2, "share bundles should include uploaded file records");
assert.ok(canShareFileBetweenAccounts({ providerId: COLAB_PROVIDER_IDS.GOOGLE_DRIVE, fromRole: COLAB_ROLES.OWNER, toRole: COLAB_ROLES.VIEWER }).allowed, "owners should be able to share files between accounts");
assert.equal(canShareFileBetweenAccounts({ providerId: COLAB_PROVIDER_IDS.GOOGLE_DRIVE, fromRole: COLAB_ROLES.VIEWER, toRole: COLAB_ROLES.EDITOR }).allowed, false, "viewers should not be able to share project files onward");

console.log("All ToolGrid 2500 Functional Daily Tools Foundation tests passed.");
process.exit(0);
