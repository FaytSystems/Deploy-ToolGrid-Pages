import { compilePromptToSearchPlan } from "./prompt-compiler.js";

export const GUIDED_PROJECT_ORCHESTRATOR_VERSION = "2026-06-13-guided-project-orchestrator-v1";

export const SUBSCRIPTION_ACCESS = {
  FREE: "free",
  PAID: "paid"
};

export const TOOL_SELECTOR_TABS = {
  CHOOSE_OWN: "choose-own",
  BASED_ON_PROJECT: "based-on-project"
};

const soundCategoryBlueprints = {
  bells: ["soft", "bright", "ceremony", "retro", "tiny", "success", "attention", "calm"],
  voiceover: ["friendly", "coach", "arcade", "assistant", "narrator", "robot", "celebration", "focus"],
  memes: ["short phrase", "victory", "oops", "level up", "classic web", "surprise", "speedrun", "tiny joke"],
  animals: ["birds", "cats", "dogs", "frogs", "farm", "jungle", "ocean", "night"],
  nature: ["rain", "wind", "forest", "water", "fire", "storm", "morning", "evening"],
  arcade: ["coin", "power up", "quest", "complete", "menu", "combo", "bonus", "checkpoint"],
  office: ["typewriter", "stamp", "printer", "notification", "approval", "done", "queue", "calendar"],
  zen: ["bowl", "chime", "breath", "garden", "meditation", "ambient", "soft tap", "release"],
  sciFi: ["ship", "scanner", "portal", "terminal", "beacon", "drone", "core", "uplink"],
  kitchen: ["timer", "sizzle", "knife", "bell", "order up", "steam", "pour", "prep"]
};

export function buildSoundLibrary() {
  const sounds = [];
  for (const [category, subcategories] of Object.entries(soundCategoryBlueprints)) {
    subcategories.forEach((subcategory, subIndex) => {
      for (let variant = 1; variant <= 5; variant += 1) {
        sounds.push({
          id: `${category}-${subcategory.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-${variant}`,
          category,
          subcategory,
          label: `${titleCase(category)} · ${titleCase(subcategory)} ${variant}`,
          description: `A ${subcategory} ${category} sound for task progress or project completion.`,
          toneHz: 240 + subIndex * 34 + variant * 23,
          durationMs: 120 + variant * 28
        });
      }
    });
  }
  return sounds;
}

export const SOUND_LIBRARY = buildSoundLibrary();

export function createDefaultUserProfile() {
  return {
    id: "local-profile",
    displayName: "ToolGrid User",
    topics: ["productivity", "business", "creative tools"],
    soundMode: "completion",
    soundCategory: "bells",
    soundSubcategory: "success",
    specificSoundId: "",
    themeSeed: Date.now()
  };
}

function titleCase(value) {
  return String(value || "")
    .split(/\s+|-/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function stableHash(value) {
  const text = String(value || "");
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

export function normalizeTopics(topicsText) {
  if (Array.isArray(topicsText)) return topicsText.map((topic) => String(topic).trim()).filter(Boolean).slice(0, 18);
  return String(topicsText || "")
    .split(/[,\n;]/)
    .map((topic) => topic.trim())
    .filter(Boolean)
    .slice(0, 18);
}

export function setUserTopics(profile, topicsText) {
  return {
    ...profile,
    topics: normalizeTopics(topicsText),
    themeSeed: Date.now()
  };
}

export function createSessionTheme(profile = createDefaultUserProfile()) {
  const topics = normalizeTopics(profile.topics).length ? normalizeTopics(profile.topics) : ["productivity"];
  const seedText = `${topics.join("|")}|${profile.themeSeed || "session"}|${new Date().toDateString()}`;
  const hash = stableHash(seedText);
  const palettes = [
    { name: "Neon Greenhouse", accent: "#2dd4bf", secondary: "#84cc16", glow: "rgba(45, 212, 191, 0.30)" },
    { name: "Studio Night", accent: "#a78bfa", secondary: "#22d3ee", glow: "rgba(167, 139, 250, 0.30)" },
    { name: "Market Sunrise", accent: "#f97316", secondary: "#facc15", glow: "rgba(249, 115, 22, 0.28)" },
    { name: "Forest Console", accent: "#22c55e", secondary: "#14b8a6", glow: "rgba(34, 197, 94, 0.26)" },
    { name: "Ocean Lab", accent: "#38bdf8", secondary: "#6366f1", glow: "rgba(56, 189, 248, 0.26)" },
    { name: "Berry Arcade", accent: "#ec4899", secondary: "#8b5cf6", glow: "rgba(236, 72, 153, 0.26)" }
  ];
  const motifs = ["floating orbs", "slow aurora", "grid shimmer", "constellation dots", "soft waves", "terminal sparks"];
  const palette = palettes[hash % palettes.length];
  const motif = motifs[Math.floor(hash / palettes.length) % motifs.length];
  return {
    ...palette,
    motif,
    topics,
    animationName: `Session ${titleCase(motif)}`,
    background: `radial-gradient(circle at 12% 20%, ${palette.glow}, transparent 32%), radial-gradient(circle at 82% 0%, ${palette.secondary}33, transparent 28%), linear-gradient(135deg, #071018 0%, #101827 48%, #05070b 100%)`
  };
}

export function getSoundChoices({ category = "bells", subcategory = "success" } = {}) {
  const filtered = SOUND_LIBRARY.filter((sound) => {
    const categoryOk = !category || sound.category === category;
    const subOk = !subcategory || sound.subcategory === subcategory;
    return categoryOk && subOk;
  });
  return filtered.length ? filtered : SOUND_LIBRARY.filter((sound) => sound.category === category).slice(0, 20);
}

export function chooseRandomSound({ category = "bells", subcategory = "success", specificSoundId = "" } = {}) {
  if (specificSoundId) return SOUND_LIBRARY.find((sound) => sound.id === specificSoundId) || SOUND_LIBRARY[0];
  const choices = getSoundChoices({ category, subcategory });
  return choices[Math.floor(Math.random() * choices.length)] || SOUND_LIBRARY[0];
}

export function canUseBasedOnProject(subscriptionStatus) {
  return subscriptionStatus === SUBSCRIPTION_ACCESS.PAID;
}

export function analyzeProjectPromptForQuestions({ prompt = "", fileAnalysis = null } = {}) {
  const cleanPrompt = String(prompt || "").trim();
  const compiled = compilePromptToSearchPlan(cleanPrompt || "Build a useful project workflow.");
  const lower = cleanPrompt.toLowerCase();
  const questions = [];
  const hasFiles = Number(fileAnalysis?.fileCount || 0) > 0;
  const taskCount = compiled.taskParts?.length || 0;
  const routeCount = Math.max(1, taskCount + (hasFiles ? 1 : 0));

  if (!cleanPrompt || cleanPrompt.length < 18) {
    questions.push({
      id: "goal-detail",
      label: "What should the finished project accomplish?",
      reason: "The project goal is too short to safely choose tools.",
      placeholder: "Example: turn uploaded customer orders into labels, emails, and a weekly summary."
    });
  }

  const hasOnlyGenericBusiness = /\b(my|a|the)?\s*business\b/.test(lower) && !/\b(farm|restaurant|store|blog|site|customer|invoice|seo|image|pdf|csv|code|recipe|plant|garden|mushroom|shopify|youtube|landscaping|kitchen|school|nonprofit)\b/.test(lower);
  if ((/\b(project|workflow|business|thing|stuff|help me|make it)\b/.test(lower) && !/\b(farm|restaurant|store|blog|site|customer|invoice|seo|image|pdf|csv|code|recipe|plant|garden|mushroom)\b/.test(lower)) || hasOnlyGenericBusiness) {
    questions.push({
      id: "domain-detail",
      label: "What field or subject is this for?",
      reason: "The prompt is broad, so the selector needs a domain to avoid choosing generic tools.",
      placeholder: "Example: mushroom farm, landscaping company, YouTube channel, restaurant, Shopify store."
    });
  }

  const asksForFile = /\b(file|spreadsheet|sheet|csv|xlsx|excel|template|tracker|download)\b/.test(lower);
  const asksForExpenseTracker = /\b(expense|expenses|spend|spending|budget|bills?|monthly cost|costs?)\b/.test(lower);
  if (asksForFile && !/\b(csv|xlsx|excel|spreadsheet|google sheets?|pdf|docx|word|plain text|txt|html)\b/.test(lower)) {
    questions.push({
      id: "file-format",
      label: "What file format should be made?",
      reason: "A file request needs a usable download format before ToolGrid creates the output.",
      placeholder: "Example: Excel-compatible CSV, Google Sheets-style spreadsheet, printable PDF, plain text."
    });
  }

  if (asksForExpenseTracker && !/\b(rent|mortgage|utilities|groceries|food|transport|gas|insurance|subscriptions?|medical|debt|savings?|category|categories)\b/.test(lower)) {
    questions.push({
      id: "expense-categories",
      label: "Which expense categories should the tracker include?",
      reason: "Expense trackers are only useful when the rows or category tabs match what the user needs to track.",
      placeholder: "Example: rent, utilities, groceries, gas, insurance, subscriptions, medical, debt, savings."
    });
  }

  if (asksForExpenseTracker && !/\b(income|paycheck|salary|budget limit|monthly budget|starting balance|account)\b/.test(lower)) {
    questions.push({
      id: "budget-fields",
      label: "Should the file track income, budget limits, or only expenses?",
      reason: "The tracker layout changes depending on whether it should compare spending against income or budget goals.",
      placeholder: "Example: include income and monthly budget limits, or only track expenses."
    });
  }

  if (asksForExpenseTracker && /\bmonthly\b/.test(lower) && !/\b(reusable|template|ongoing|every month|january|february|march|april|may|june|july|august|september|october|november|december|20\d{2})\b/.test(lower)) {
    questions.push({
      id: "expense-period",
      label: "Is this for a specific month or a reusable monthly template?",
      reason: "The file can either be labeled for one month or left reusable for every month.",
      placeholder: "Example: reusable monthly template, or July 2026."
    });
  }

  if (taskCount >= 7) {
    questions.push({
      id: "split-preference",
      label: "Should this be one large project or several smaller project runs?",
      reason: "The waterfall may become too complex for one run.",
      placeholder: "Example: split into data cleanup, label generation, and customer messaging projects."
    });
  }

  if (/(email|customer|client|reply|message)/.test(lower) && !/(tone|friendly|formal|short|detailed|brand|voice)/.test(lower)) {
    questions.push({
      id: "communication-tone",
      label: "What tone should the generated messages use?",
      reason: "Communication tools need tone direction to produce useful outputs.",
      placeholder: "Example: friendly, professional, short, upbeat, luxury, casual."
    });
  }

  if (/(forecast|schedule|weekly|monthly|deadline|calendar)/.test(lower) && !/(date|week|month|season|start|end|frequency)/.test(lower)) {
    questions.push({
      id: "time-range",
      label: "What time range or schedule should the project use?",
      reason: "Planning and forecast tools need a time window.",
      placeholder: "Example: next 7 days, weekly on Mondays, next month, harvest season."
    });
  }

  return {
    isReady: questions.length === 0,
    questions,
    compiled,
    routeCount,
    suggestedMode: taskCount > 16 ? "split-projects" : taskCount > 6 ? "consider-splitting" : "single-project",
    summary: questions.length
      ? `${questions.length} detail${questions.length === 1 ? "" : "s"} needed before the based-on-project selector can safely build the waterfall.`
      : `Prompt is specific enough to build a ${routeCount}-route guided waterfall.`
  };
}

export function buildClarifiedPrompt(prompt, answers = {}) {
  const answerLines = Object.entries(answers)
    .filter(([, value]) => String(value || "").trim())
    .map(([key, value]) => `${key}: ${String(value).trim()}`);
  if (!answerLines.length) return String(prompt || "").trim();
  return `${String(prompt || "").trim()}\n\nClarifying details:\n${answerLines.join("\n")}`;
}

export function suggestProjectRunStrategy({ plan, maxUiNodes = 64 } = {}) {
  const steps = plan?.steps || [];
  const totalNodes = steps.reduce((sum, step) => sum + 1 + (Array.isArray(step.nestedToolIds) ? step.nestedToolIds.length : 0), 0);
  if (totalNodes > maxUiNodes) {
    return {
      mode: "split-required",
      projectCount: Math.ceil(totalNodes / maxUiNodes),
      reason: `${totalNodes} UI/tool nodes exceeds the ${maxUiNodes}-node run limit.`
    };
  }
  if (totalNodes > 24) {
    return {
      mode: "split-recommended",
      projectCount: Math.ceil(totalNodes / 16),
      reason: "This workflow is large enough that smaller linked project runs may be easier to inspect and repair."
    };
  }
  return {
    mode: "single-run",
    projectCount: 1,
    reason: "This can run as one start-button waterfall."
  };
}

export function buildWaterfallQueueFromPlan(plan, { maxTasks = 64 } = {}) {
  const queue = [];
  for (const step of plan?.steps || []) {
    const toolIds = [step.toolId, ...(Array.isArray(step.nestedToolIds) ? step.nestedToolIds : [])].filter(Boolean);
    toolIds.forEach((toolId, nestedIndex) => {
      if (queue.length >= maxTasks) return;
      const sequence = queue.length + 1;
      queue.push({
        id: `waterfall-task-${sequence}`,
        sequence,
        panelIndex: step.panelIndex,
        parentStepId: step.id,
        toolId,
        toolName: nestedIndex === 0 ? step.toolName : `Nested tool ${nestedIndex + 1}: ${toolId}`,
        prompt: nestedIndex === 0
          ? step.reason || `Run ${step.toolName} for this project.`
          : `Use output from the previous task inside panel ${step.panelIndex + 1}.`,
        status: "queued",
        mode: nestedIndex === 0 ? "panel" : "nested",
        userObservation: "",
        revisedAt: null
      });
    });
  }
  return queue;
}

export function reviseWaterfallTask({ queue = [], taskId, userObservation = "", replacementToolId = "" } = {}) {
  return queue.map((task) => {
    if (task.id !== taskId) return task;
    return {
      ...task,
      status: "revised",
      userObservation: String(userObservation || "").trim(),
      replacementToolId: replacementToolId || task.replacementToolId || "",
      prompt: `${task.prompt}\n\nUser pause note: ${String(userObservation || "").trim()}`.trim(),
      revisedAt: new Date().toISOString()
    };
  });
}
