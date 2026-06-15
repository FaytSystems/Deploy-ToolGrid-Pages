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

const knownEngines = new Set(engineNames);
const ids = new Set();
const toolsById = new Map(tools.map((tool) => [tool.id, tool]));

assert.equal(CATALOG_VERSION, "2026-06-13-native-2500-v1");
assert.equal(PROJECT_FOUNDATION_VERSION, "2026-06-13-paid-multitask-waterfall-foundation-v7");
assert.equal(FILE_TRANSLATOR_VERSION, "2026-06-13-file-translator-foundation-v1");
assert.equal(PROMPT_COMPILER_VERSION, "2026-06-13-prompt-compiler-v1");
assert.equal(GUIDED_PROJECT_ORCHESTRATOR_VERSION, "2026-06-13-guided-project-orchestrator-v1");
assert.equal(WATERFALL_SCHEDULER_VERSION, "2026-06-13-paid-multitask-waterfall-scheduler-v1");
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

for (const tool of tools) {
  assert.ok(tool.id, "tool id is required");
  assert.ok(!ids.has(tool.id), `duplicate tool id: ${tool.id}`);
  ids.add(tool.id);
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


const templateIds = new Set();
let referencedTemplateTools = 0;
for (const template of PROJECT_TEMPLATES) {
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
assert.ok(referencedTemplateTools > 100000, "project library should cross-reference a large set of tool placements");

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

console.log("All ToolGrid 2500 paid multitask waterfall foundation tests passed.");
