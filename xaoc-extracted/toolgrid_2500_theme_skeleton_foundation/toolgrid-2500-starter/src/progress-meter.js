export const PROGRESS_METER_VERSION = "2026-06-13-progress-eta-foundation-v1";

export const TASK_STATUS_PROGRESS = Object.freeze({
  planned: 0,
  queued: 0,
  wait: 0,
  waiting: 0,
  blocked: 0.05,
  revised: 0.12,
  ready: 0.15,
  running: 0.55,
  done: 1,
  ok: 1,
  complete: 1,
  completed: 1,
  error: 1,
  failed: 1,
  skipped: 1,
  cancelled: 1
});

const TOOL_DURATION_MS = Object.freeze({
  panel: 14000,
  nested: 9000,
  manual: 7000,
  approval: 30000,
  blocked: 0,
  default: 11000
});

function safeNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function parseLayoutCount(layout = "4x4") {
  const [columns = 4, rows = 4] = String(layout).split("x").map((value) => safeNumber(value, 4));
  return {
    columns,
    rows,
    count: Math.max(1, Math.min(16, columns * rows))
  };
}

export function getTaskProgress(task = {}) {
  const status = String(task.status || "queued").toLowerCase();
  return TASK_STATUS_PROGRESS[status] ?? 0;
}

export function estimateTaskDurationMs(task = {}, tool = null) {
  if (!task) return TOOL_DURATION_MS.default;
  const status = String(task.status || "queued").toLowerCase();
  if (status === "done" || status === "ok" || status === "complete" || status === "completed" || status === "error" || status === "failed" || status === "skipped") return 0;
  if (status === "blocked") return TOOL_DURATION_MS.blocked;
  const base = task.mode === "nested" ? TOOL_DURATION_MS.nested : TOOL_DURATION_MS.panel;
  const approvalPenalty = task.requiresApproval || /approval|review|send|publish|export|client|customer/i.test(`${task.prompt || ""} ${task.toolName || ""}`)
    ? 6000
    : 0;
  const categoryPenalty = tool?.category && /Media|PDF|Document|Data|Developer|Compliance|Research/i.test(tool.category)
    ? 3500
    : 0;
  return base + approvalPenalty + categoryPenalty;
}

export function formatDuration(ms = 0) {
  const totalSeconds = Math.max(0, Math.ceil(safeNumber(ms) / 1000));
  if (totalSeconds <= 0) return "0s";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours) return `${hours}h ${minutes}m`;
  if (minutes) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function getTaskTool(task, toolsById) {
  if (!task || !toolsById) return null;
  const toolId = task.replacementToolId || task.toolId;
  if (typeof toolsById.get === "function") return toolsById.get(toolId) || null;
  return toolsById[toolId] || null;
}

function getTaskRemainingMs(task, toolsById, now) {
  const status = String(task.status || "queued").toLowerCase();
  if (["done", "ok", "complete", "completed", "error", "failed", "skipped", "cancelled"].includes(status)) return 0;
  const estimate = estimateTaskDurationMs(task, getTaskTool(task, toolsById));
  if (status === "running") {
    const started = Date.parse(task.updatedAt || task.startedAt || "");
    const elapsed = Number.isFinite(started) ? Math.max(0, now - started) : estimate * 0.45;
    return Math.max(Math.round(estimate * 0.15), estimate - elapsed);
  }
  if (status === "revised") return Math.round(estimate * 0.9);
  if (status === "blocked") return 0;
  return estimate;
}

function summarizeStatuses(queue = []) {
  return queue.reduce((summary, task) => {
    const status = String(task.status || "queued").toLowerCase();
    summary[status] = (summary[status] || 0) + 1;
    return summary;
  }, {});
}

function averageProgress(tasks = []) {
  if (!tasks.length) return 0;
  const progress = tasks.reduce((sum, task) => sum + getTaskProgress(task), 0) / tasks.length;
  return clamp(Math.round(progress * 100));
}

function summarizePanelStatus(tasks = [], panelEntry = null) {
  if (!tasks.length) return panelEntry ? "ready" : "empty";
  if (tasks.some((task) => String(task.status).toLowerCase() === "running")) return "running";
  if (tasks.some((task) => String(task.status).toLowerCase() === "error")) return "issue";
  if (tasks.every((task) => ["done", "ok", "complete", "completed"].includes(String(task.status).toLowerCase()))) return "done";
  if (tasks.some((task) => String(task.status).toLowerCase() === "revised")) return "revised";
  if (tasks.some((task) => String(task.status).toLowerCase() === "blocked")) return "blocked";
  return "queued";
}

function buildPanelCells({ queue, panelEntries, layout, toolsById, now }) {
  const { count } = parseLayoutCount(layout);
  const cells = [];
  for (let index = 0; index < count; index += 1) {
    const entry = panelEntries[index] || null;
    const tasks = queue.filter((task) => Number(task.panelIndex) === index);
    const percent = tasks.length ? averageProgress(tasks) : entry ? 5 : 0;
    const remainingMs = tasks.reduce((sum, task) => sum + getTaskRemainingMs(task, toolsById, now), 0);
    const nestedTotal = entry ? 1 + (Array.isArray(entry.nestedToolIds) ? entry.nestedToolIds.length : 0) : 0;
    cells.push({
      panelIndex: index,
      label: `Cell ${index + 1}`,
      percent,
      status: summarizePanelStatus(tasks, entry),
      taskCount: tasks.length,
      nestedTotal,
      remainingMs,
      etaLabel: formatDuration(remainingMs),
      toolId: entry?.toolId || "",
      toolName: entry?.uiTitle || entry?.toolName || ""
    });
  }
  return cells;
}

function buildNestedNodes({ queue, panelEntries, toolsById, now }) {
  const nodes = [];
  for (let panelIndex = 0; panelIndex < panelEntries.length; panelIndex += 1) {
    const entry = panelEntries[panelIndex];
    if (!entry) continue;
    const toolIds = [entry.toolId, ...(Array.isArray(entry.nestedToolIds) ? entry.nestedToolIds : [])].filter(Boolean).slice(0, 4);
    toolIds.forEach((toolId, nestedIndex) => {
      const matchingTask = queue.find((task) => Number(task.panelIndex) === panelIndex && (task.replacementToolId || task.toolId) === toolId && (nestedIndex === 0 ? task.mode !== "nested" : task.mode === "nested"));
      const fallbackTask = queue.find((task) => Number(task.panelIndex) === panelIndex && (task.replacementToolId || task.toolId) === toolId);
      const task = matchingTask || fallbackTask || null;
      const tool = getTaskTool(task, toolsById) || (typeof toolsById?.get === "function" ? toolsById.get(toolId) : null);
      const status = task?.status || (entry.aiStepStatus && nestedIndex === 0 ? entry.aiStepStatus : "ready");
      const percent = task ? clamp(Math.round(getTaskProgress(task) * 100)) : status === "done" ? 100 : 5;
      const remainingMs = task ? getTaskRemainingMs(task, toolsById, now) : 0;
      nodes.push({
        nodeIndex: nodes.length,
        panelIndex,
        nestedIndex,
        label: `P${panelIndex + 1}.${nestedIndex + 1}`,
        toolId,
        toolName: tool?.name || entry.uiTitle || toolId,
        status,
        percent,
        remainingMs,
        etaLabel: formatDuration(remainingMs),
        taskId: task?.id || ""
      });
    });
  }
  return nodes.slice(0, 64);
}

export function buildProgressSnapshot({ project = {}, panelEntries = [], layout = "4x4", toolsById = new Map(), now = Date.now() } = {}) {
  const queue = Array.isArray(project.waterfallQueue) ? project.waterfallQueue : [];
  const totalTasks = queue.length;
  const statusCounts = summarizeStatuses(queue);
  const completedWeight = queue.reduce((sum, task) => sum + getTaskProgress(task), 0);
  const percent = totalTasks ? clamp(Math.round((completedWeight / totalTasks) * 100)) : 0;
  const remainingMs = queue.reduce((sum, task) => sum + getTaskRemainingMs(task, toolsById, now), 0);
  const panelCells = buildPanelCells({ queue, panelEntries, layout, toolsById, now });
  const nestedNodes = buildNestedNodes({ queue, panelEntries, toolsById, now });
  return {
    version: PROGRESS_METER_VERSION,
    projectId: project.id || "",
    projectName: project.name || "Untitled Project",
    percent,
    etaMs: remainingMs,
    etaLabel: formatDuration(remainingMs),
    taskCount: totalTasks,
    completedCount: statusCounts.done || 0,
    runningCount: statusCounts.running || 0,
    issueCount: (statusCounts.error || 0) + (statusCounts.failed || 0),
    statusCounts,
    panelCells,
    nestedNodes,
    outerPanelCount: parseLayoutCount(layout).count,
    nestedUiCount: nestedNodes.length,
    label: totalTasks ? `${percent}% complete · ETA ${formatDuration(remainingMs)}` : "No queue yet"
  };
}
