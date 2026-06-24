import assert from "node:assert/strict";

import { tools } from "../src/tool-catalog.js";
import { buildWaterfallQueueFromPlan } from "../src/guided-project-orchestrator.js";
import { generateAiProjectPlan } from "../src/project-foundation.js";
import { buildDirectAnswerFoundation } from "../src/direct-answer-engine.js";

const blockedAnswerPatterns = [
  /recommended workflow/i,
  /ready handoff/i,
  /completed cells/i,
  /current in-house tools wired/i,
  /free tools are better/i,
  /skeleton tool:/i
];

const cases = [
  {
    name: "banana recipe scale",
    prompt: "need a recipe and the amounts that will use up 50 bananas",
    required: [/50 medium bananas/i, /33 1\/3 cups/i, /banana nut bread/i, /baking plan/i]
  },
  {
    name: "egg flock planner",
    prompt: "how many chickens do i need if i want 50 eggs a week and what breeds get along",
    required: [/12 good laying hens/i, /ISA Brown/i, /Rhode Island Red/i, /Plymouth Rock/i, /50 eggs per week/i]
  },
  {
    name: "room material estimator",
    prompt: "how many 2x4s will i need to build a 10 foot by 10 foot room with a 36 inch door and a drop ceiling how many sheets of 8x4 drywall about how many screws",
    required: [/# 2x4s: about 58/i, /# drywall panels: 11/i, /# drywall screws: about 500/i, /drop ceiling/i, /2x2 ceiling tiles/i]
  },
  {
    name: "chicken coop blueprint",
    prompt: "give me plans for a chicken coop with building materials and measurements to cut the materials at like a blueprint for 8 chickens",
    required: [/Material List/i, /Cut List/i, /2x4x8 lumber/i, /hardware cloth/i, /predator/i]
  },
  {
    name: "expense file builder",
    prompt: "need a file made that will be used to keep track of monthly expenses",
    required: [/Monthly Expense Tracker/i, /Expense Log/i, /Category/i, /Actual Amount/i],
    expectsFile: true
  },
  {
    name: "generic fallback stays human-readable",
    prompt: "build a customer follow up process for a small lawn care company",
    required: [/Direct Answer/i, /practical first-pass answer/i, /Next Action/i]
  }
];

function assertNoInternalSyntax(answer, name) {
  for (const pattern of blockedAnswerPatterns) {
    assert.doesNotMatch(answer, pattern, `${name} should not expose internal workflow syntax: ${pattern}`);
  }
}

function auditWorkflowPlanning(prompt, name) {
  const plan = generateAiProjectPlan({ prompt, tools, maxPanels: 16 });
  const queue = buildWaterfallQueueFromPlan(plan, { maxTasks: 16 });
  assert.ok(plan?.steps?.length > 0, `${name} should produce planning steps`);
  assert.ok(queue.length > 0, `${name} should produce a waterfall queue`);
  assert.ok(queue.every((task) => task.toolId && task.toolName), `${name} queue tasks should have tool IDs and names`);
  return { plan, queue };
}

const report = [];

for (const testCase of cases) {
  const { plan, queue } = auditWorkflowPlanning(testCase.prompt, testCase.name);
  const answer = buildDirectAnswerFoundation({
    prompt: testCase.prompt,
    finalPayload: "free tools are better to share",
    artifacts: []
  });
  assert.ok(answer?.content, `${testCase.name} should return answer content`);
  assertNoInternalSyntax(answer.content, testCase.name);
  for (const pattern of testCase.required) {
    assert.match(answer.content, pattern, `${testCase.name} should include ${pattern}`);
  }
  if (testCase.expectsFile) {
    assert.ok(answer.file?.filename, `${testCase.name} should produce a downloadable file`);
  }
  report.push({
    name: testCase.name,
    mode: answer.mode,
    workflowSteps: plan.steps.length,
    queuedTasks: queue.length,
    answerWords: answer.content.split(/\s+/).filter(Boolean).length,
    preview: answer.content.split("\n").slice(0, 5).join(" ")
  });
}

console.log("Cockpit direct-answer audit passed.");
for (const item of report) {
  console.log(`- ${item.name}: ${item.mode}, ${item.workflowSteps} planned steps, ${item.queuedTasks} queued tasks, ${item.answerWords} words`);
}
