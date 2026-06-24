import assert from "node:assert/strict";

import { tools } from "../src/tool-catalog.js";
import { buildWaterfallQueueFromPlan } from "../src/guided-project-orchestrator.js";
import { buildInputsFromPayload, generateAiProjectPlan, getToolIO } from "../src/project-foundation.js";
import { runTool } from "../src/tool-engines.js";
import { buildDirectAnswerFoundation } from "../src/direct-answer-engine.js";

const blockedAnswerPatterns = [
  /recommended workflow/i,
  /ready handoff/i,
  /completed cells/i,
  /current in-house tools wired/i,
  /free tools are better/i,
  /free tools save time/i,
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
    name: "follow-up process routes to content answer",
    prompt: "build a customer follow up process for a small lawn care company",
    required: [/Direct Answer/i, /content pack/i, /Email Draft/i, /Quality Checks/i]
  },
  {
    name: "content marketing pack",
    prompt: "write a friendly email and social post for a weekend candle sale using small batch and Saturday pickup",
    required: [/Email Draft/i, /Subject:/i, /social post/i, /CTA|Call to action/i]
  },
  {
    name: "data cleanup workflow",
    prompt: "clean a CSV table columns are date, vendor, category, amount, notes remove duplicates and flag missing amounts",
    required: [/Output Table/i, /date \| vendor \| category \| amount/i, /Duplicates removed/i, /Rows needing review/i]
  },
  {
    name: "operations checklist",
    prompt: "build a checklist and schedule for moving out by August 1 with weekends only and a 500 dollar budget",
    required: [/Working Schedule/i, /Checklist/i, /Owner/i, /Risk Controls/i]
  },
  {
    name: "loan calculator",
    prompt: "calculate loan payment for 250000 at 6.5 percent for 30 years",
    required: [/\$250,000 loan/i, /estimated payment/i, /monthly payment/i, /Estimated interest/i]
  },
  {
    name: "garden spacing",
    prompt: "how many tomato plants fit in a 4 by 8 foot garden bed at 18 inch spacing",
    required: [/4 ft x 8 ft bed/i, /18 in spacing/i, /plants/i, /simple grid/i]
  },
  {
    name: "developer url encoder",
    prompt: "url encode \"hello world & prices\"",
    required: [/URL encoded value/i, /hello%20world%20%26%20prices/i]
  },
  {
    name: "media design plan",
    prompt: "create an RGB motion logo visualizer with neon cyan and magenta and export as MP4",
    required: [/Creative Brief/i, /Production Settings/i, /MP4/i, /Quality Checks/i]
  },
  {
    name: "research verification",
    prompt: "verify this quote and provide source evidence and citation notes",
    required: [/Evidence Table/i, /Verification Rules/i, /confirmed facts/i, /recommendation/i]
  },
  {
    name: "fallback filters stale default artifacts",
    prompt: "organize a small workshop supply list into a practical next action plan",
    required: [/Direct Answer/i, /Working Schedule/i, /Checklist/i, /Risk Controls/i],
    extraArtifacts: [
      { status: "ok", toolName: "Seed Text Tool", output: "Free tools save time when they can share project data.", outputType: "text" }
    ]
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

const toolsById = new Map(tools.map((tool) => [tool.id, tool]));

function auditWorkflowExecution(queue, prompt, name) {
  let payload = prompt;
  let payloadType = "text";
  const outputs = [];
  for (const task of queue.slice(0, 16)) {
    const tool = toolsById.get(task.toolId);
    assert.ok(tool, `${name} task ${task.sequence} should resolve tool ${task.toolId}`);
    const inputs = buildInputsFromPayload(tool, payload, payloadType);
    const output = String(runTool(tool, inputs) ?? "");
    assert.ok(output.trim().length > 0, `${name} task ${task.sequence} ${tool.name} should produce output`);
    assert.doesNotMatch(output, /Input issue:/i, `${name} task ${task.sequence} ${tool.name} should not produce input issue output`);
    outputs.push({ tool: tool.name, output });
    payload = output;
    payloadType = getToolIO(tool).output || "text";
  }
  return outputs;
}

const report = [];

for (const testCase of cases) {
  const { plan, queue } = auditWorkflowPlanning(testCase.prompt, testCase.name);
  const toolOutputs = auditWorkflowExecution(queue, testCase.prompt, testCase.name);
  const answer = buildDirectAnswerFoundation({
    prompt: testCase.prompt,
    finalPayload: "free tools are better to share",
    artifacts: [
      ...toolOutputs.map((item) => ({ status: "ok", toolName: item.tool, output: item.output, outputType: "text" })),
      ...(testCase.extraArtifacts || [])
    ]
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
    executedTasks: toolOutputs.length,
    answerWords: answer.content.split(/\s+/).filter(Boolean).length,
    preview: answer.content.split("\n").slice(0, 5).join(" ")
  });
}

console.log("Cockpit direct-answer audit passed.");
for (const item of report) {
  console.log(`- ${item.name}: ${item.mode}, ${item.workflowSteps} planned steps, ${item.queuedTasks} queued tasks, ${item.executedTasks} executed, ${item.answerWords} words`);
}
