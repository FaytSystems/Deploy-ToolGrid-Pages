import { SUBSCRIPTION_ACCESS } from "./guided-project-orchestrator.js";
import { canConnectTools, getPanelToolChain, inferPayloadType } from "./project-foundation.js";

export const WATERFALL_SCHEDULER_VERSION = "2026-06-13-paid-multitask-waterfall-scheduler-v1";

export const MULTITASK_ACCESS = {
  FREE: "locked",
  PAID_READY: "paid-ready",
  PAID_BLOCKED: "paid-blocked"
};

export const DEFAULT_MULTITASK_LIMITS = {
  maxUiNodes: 64,
  defaultParallel: 3,
  maxParallel: 6,
  safeHardwareFloor: 2
};

const promptOnlyActions = new Set([
  "write",
  "generate",
  "create",
  "summarize",
  "format",
  "label",
  "document",
  "email",
  "report",
  "list"
]);

function safeText(value) {
  return String(value ?? "");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function hardwareConcurrency() {
  if (typeof navigator === "undefined") return DEFAULT_MULTITASK_LIMITS.defaultParallel;
  const raw = Number(navigator.hardwareConcurrency || DEFAULT_MULTITASK_LIMITS.defaultParallel);
  if (!Number.isFinite(raw) || raw < 1) return DEFAULT_MULTITASK_LIMITS.defaultParallel;
  return Math.max(1, Math.floor(raw));
}

export function getRecommendedParallelism({ taskCount = 0, paid = false, requested = DEFAULT_MULTITASK_LIMITS.defaultParallel } = {}) {
  if (!paid || taskCount <= 1) return 1;
  const hardware = hardwareConcurrency();
  const hardwareCap = Math.max(1, Math.min(DEFAULT_MULTITASK_LIMITS.maxParallel, Math.floor(hardware / 2) || 1));
  const requestedCap = Math.max(1, Math.min(DEFAULT_MULTITASK_LIMITS.maxParallel, Number(requested) || DEFAULT_MULTITASK_LIMITS.defaultParallel));
  return Math.max(1, Math.min(taskCount, hardwareCap, requestedCap));
}

export function canRunPaidMultitask({ subscriptionStatus, queue = [], requestedParallel = DEFAULT_MULTITASK_LIMITS.defaultParallel, systemBusy = false } = {}) {
  if (subscriptionStatus !== SUBSCRIPTION_ACCESS.PAID) {
    return {
      access: MULTITASK_ACCESS.FREE,
      allowed: false,
      parallelism: 1,
      reason: "Multitask is a paid feature. Free projects still run safely as a single waterfall."
    };
  }
  if (systemBusy) {
    return {
      access: MULTITASK_ACCESS.PAID_BLOCKED,
      allowed: false,
      parallelism: 1,
      reason: "A waterfall is already running. Pause or finish it before starting multitask."
    };
  }
  if (!Array.isArray(queue) || queue.length <= 1) {
    return {
      access: MULTITASK_ACCESS.PAID_BLOCKED,
      allowed: false,
      parallelism: 1,
      reason: "This project has one or fewer tasks, so there is nothing useful to multitask."
    };
  }
  if (queue.length > DEFAULT_MULTITASK_LIMITS.maxUiNodes) {
    return {
      access: MULTITASK_ACCESS.PAID_BLOCKED,
      allowed: false,
      parallelism: 1,
      reason: `This queue has ${queue.length} tasks. Split it into project runs before using multitask.`
    };
  }
  const hardware = hardwareConcurrency();
  if (hardware < DEFAULT_MULTITASK_LIMITS.safeHardwareFloor) {
    return {
      access: MULTITASK_ACCESS.PAID_BLOCKED,
      allowed: false,
      parallelism: 1,
      reason: "This device reports limited available concurrency, so the safer option is a normal waterfall."
    };
  }
  const parallelism = getRecommendedParallelism({ taskCount: queue.length, paid: true, requested: requestedParallel });
  if (parallelism <= 1) {
    return {
      access: MULTITASK_ACCESS.PAID_BLOCKED,
      allowed: false,
      parallelism: 1,
      reason: "The current queue/device combination does not benefit from parallel execution."
    };
  }
  return {
    access: MULTITASK_ACCESS.PAID_READY,
    allowed: true,
    parallelism,
    reason: `Ready to run up to ${parallelism} independent task${parallelism === 1 ? "" : "s"} at the same time.`
  };
}

function getStepById(plan, stepId) {
  return (plan?.steps || []).find((step) => step.id === stepId) || null;
}

function getPanelEntryByTask(task, panelEntries) {
  if (!Array.isArray(panelEntries)) return null;
  return panelEntries[Number(task.panelIndex)] || null;
}

function getTaskTool(task, panelEntries, toolsById) {
  if (!task?.toolId) return toolsById.get(task?.replacementToolId || "") || null;
  const direct = toolsById.get(task.replacementToolId || task.toolId);
  if (direct) return direct;
  const entry = getPanelEntryByTask(task, panelEntries);
  return getPanelToolChain(entry, toolsById).find((item) => item.toolId === task.toolId)?.tool || null;
}

function taskCanUseProjectInput(task, tool, projectInputType, step) {
  if (!tool) return true;
  const accepts = Array.isArray(task.accepts) && task.accepts.length ? task.accepts : [];
  const toolAccepts = accepts.length ? accepts : ["text"];
  const lowerPrompt = `${safeText(task.prompt)} ${safeText(step?.reason)} ${safeText(step?.taskAction)} ${safeText(step?.taskObject)}`.toLowerCase();
  if (toolAccepts.includes(projectInputType)) return true;
  if (toolAccepts.includes("text") && projectInputType !== "binary") return true;
  if (promptOnlyActions.has(safeText(step?.taskAction).toLowerCase())) return true;
  if (/\b(write|generate|create|label|email|message|summarize|document|report|format|draft)\b/.test(lowerPrompt)) return true;
  return false;
}

export function buildTaskDependencyGraph({ project, queue = [], plan = null, panelEntries = [], toolsById = new Map() } = {}) {
  const normalizedQueue = Array.isArray(queue) ? queue : [];
  const projectInputType = inferPayloadType(project?.input || project?.prompt || "");
  const taskById = new Map(normalizedQueue.map((task) => [task.id, task]));
  const tasks = normalizedQueue.map((task, index) => {
    const step = getStepById(plan, task.parentStepId);
    const tool = getTaskTool(task, panelEntries, toolsById);
    const dependencies = [];
    const reasons = [];

    const previousSamePanel = [...normalizedQueue]
      .slice(0, index)
      .reverse()
      .find((candidate) => Number(candidate.panelIndex) === Number(task.panelIndex));

    if (task.mode === "nested" && previousSamePanel) {
      dependencies.push(previousSamePanel.id);
      reasons.push(`Nested UI waits for ${previousSamePanel.toolName}.`);
    }

    if (!dependencies.length && task.mode !== "nested" && !taskCanUseProjectInput(task, tool, projectInputType, step)) {
      const previousCompatible = [...normalizedQueue]
        .slice(0, index)
        .reverse()
        .find((candidate) => {
          const candidateTool = getTaskTool(candidate, panelEntries, toolsById);
          return candidateTool && tool && canConnectTools(candidateTool, tool);
        });
      if (previousCompatible) {
        dependencies.push(previousCompatible.id);
        reasons.push(`Needs compatible output from ${previousCompatible.toolName}.`);
      }
    }

    if (!dependencies.length && step?.mode === "waterfall" && /\breceives\b|\bprevious\b|\bdownstream\b/i.test(safeText(step.reason))) {
      const previousTask = normalizedQueue[index - 1];
      const previousTool = getTaskTool(previousTask, panelEntries, toolsById);
      if (previousTask && previousTool && tool && !taskCanUseProjectInput(task, tool, projectInputType, step)) {
        dependencies.push(previousTask.id);
        reasons.push(`Waterfall-only task waits for ${previousTask.toolName}.`);
      }
    }

    const canStartFromProject = dependencies.length === 0;
    return {
      ...task,
      index,
      dependencies: unique(dependencies.filter((dependencyId) => taskById.has(dependencyId))),
      dependencyReason: reasons.join(" ") || (canStartFromProject ? "Can run from the project prompt/file payload." : "Waits for required upstream output."),
      canStartFromProject,
      projectInputType,
      schedulerStatus: canStartFromProject ? "ready" : "blocked"
    };
  });

  const dependencyCount = tasks.reduce((sum, task) => sum + task.dependencies.length, 0);
  const independentCount = tasks.filter((task) => !task.dependencies.length).length;
  const blockedCount = tasks.length - independentCount;
  return {
    version: WATERFALL_SCHEDULER_VERSION,
    projectId: project?.id || "project",
    projectInputType,
    tasks,
    dependencyCount,
    independentCount,
    blockedCount,
    canBenefitFromMultitask: independentCount > 1 || tasks.some((task) => task.dependencies.length === 0 && task.index > 0)
  };
}

export function buildExecutionBatches({ graph, maxParallel = DEFAULT_MULTITASK_LIMITS.defaultParallel } = {}) {
  const tasks = Array.isArray(graph?.tasks) ? graph.tasks : [];
  const remaining = new Map(tasks.map((task) => [task.id, { ...task }]));
  const completed = new Set();
  const batches = [];
  const cap = Math.max(1, Math.min(DEFAULT_MULTITASK_LIMITS.maxParallel, Number(maxParallel) || DEFAULT_MULTITASK_LIMITS.defaultParallel));

  while (remaining.size) {
    const ready = [...remaining.values()]
      .filter((task) => (task.dependencies || []).every((dependencyId) => completed.has(dependencyId)))
      .sort((a, b) => a.index - b.index)
      .slice(0, cap);

    if (!ready.length) {
      const blocked = [...remaining.values()].sort((a, b) => a.index - b.index);
      batches.push({
        id: `batch-${batches.length + 1}`,
        mode: "blocked",
        taskIds: blocked.map((task) => task.id),
        tasks: blocked,
        reason: "No task can start because dependencies are missing or circular."
      });
      break;
    }

    batches.push({
      id: `batch-${batches.length + 1}`,
      mode: ready.length > 1 ? "parallel" : "single",
      taskIds: ready.map((task) => task.id),
      tasks: ready,
      reason: ready.length > 1
        ? `${ready.length} tasks can run together because none waits on another task in this batch.`
        : `${ready[0].toolName} is the next ready task.`
    });

    for (const task of ready) {
      completed.add(task.id);
      remaining.delete(task.id);
    }
  }

  return batches;
}

export function summarizeSchedule({ graph, batches, access } = {}) {
  const batchCount = Array.isArray(batches) ? batches.length : 0;
  const parallelBatches = (batches || []).filter((batch) => batch.mode === "parallel").length;
  const independent = Number(graph?.independentCount || 0);
  const blocked = Number(graph?.blockedCount || 0);
  const accessText = access?.allowed ? `multitask allowed at ${access.parallelism}x` : access?.reason || "normal waterfall";
  return `${graph?.tasks?.length || 0} tasks · ${independent} can start from project input · ${blocked} wait for upstream output · ${batchCount} batch${batchCount === 1 ? "" : "es"} · ${parallelBatches} parallel batch${parallelBatches === 1 ? "" : "es"} · ${accessText}.`;
}
