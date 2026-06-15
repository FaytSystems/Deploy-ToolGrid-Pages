export const PROFILE_BILLING_VERSION = "2026-06-15-cloudflare-credit-billing-v1";

export const CREDIT_UNIT_USD = 0.001;
export const TRIAL_PROJECT_ALLOWANCE = 3;
export const DEFAULT_TRIAL_CREDITS = 750;
export const TARGET_RUNTIME_RECORDS_PRICED = 5000000;

export const CLOUDFLARE_RATE_CARD = Object.freeze({
  ratesEnteredAt: "2026-06-15",
  liveFetchStatus: "blocked-by-local-windows-network-stack-during-build; verify official source URLs before launch",
  sources: Object.freeze({
    workers: "https://developers.cloudflare.com/workers/platform/pricing/",
    r2: "https://developers.cloudflare.com/r2/pricing/",
    d1: "https://developers.cloudflare.com/d1/platform/pricing/",
    workersAi: "https://developers.cloudflare.com/workers-ai/platform/pricing/"
  }),
  workers: Object.freeze({
    paidMinimumMonthlyUsd: 5,
    includedRequestsMonthly: 10000000,
    requestPerMillionUsd: 0.30,
    includedCpuMsMonthly: 30000000,
    cpuMsPerMillionUsd: 0.02
  }),
  r2Standard: Object.freeze({
    includedStorageGbMonth: 10,
    includedClassAOperationsMonthly: 1000000,
    includedClassBOperationsMonthly: 10000000,
    storageGbMonthUsd: 0.015,
    classAOperationPerMillionUsd: 4.50,
    classBOperationPerMillionUsd: 0.36,
    egressInternetUsdPerGb: 0
  }),
  d1: Object.freeze({
    includedRowsReadMonthly: 25000000000,
    includedRowsWrittenMonthly: 50000000,
    includedStorageGbMonth: 5,
    rowsReadPerMillionUsd: 0.001,
    rowsWrittenPerMillionUsd: 1,
    storageGbMonthUsd: 0.75
  }),
  workersAi: Object.freeze({
    includedNeuronsDaily: 10000,
    neuronPerThousandUsd: 0.011,
    defaultModel: "@cf/meta/llama-3.1-8b-instruct-fp8-fast",
    defaultInputTokenPerMillionUsd: 0.045,
    defaultOutputTokenPerMillionUsd: 0.384,
    visionInputTokenPerMillionUsd: 0.049,
    visionOutputTokenPerMillionUsd: 0.676,
    largeInputTokenPerMillionUsd: 0.293,
    largeOutputTokenPerMillionUsd: 2.253
  })
});

export const CLOUD_RUN_ASSUMPTIONS = Object.freeze({
  expectedMonthlyActiveUsers: 5000,
  expectedProjectsPerUserMonthly: 12,
  sharedOperationsMonthlyUsd: 1250,
  packageSupportBufferRate: 0.18,
  monthlySupportBufferRate: 0.28,
  storageRetentionDays: 30,
  creditRetailMarkup: 4,
  enterpriseProfitMarkup: 1.65
});

export const PROFILE_FEATURES = Object.freeze({
  profileIcon: "Profile icon",
  creditLedger: "Credit balance and detailed spend ledger",
  soundNotices: "Task/project completion sounds",
  cockpitThemes: "Cockpit UI themes",
  rgbMatrixColors: "RGB 64-cell workflow coloration",
  savedProjects: "Saved projects and answer history",
  cloudExports: "Cloud, Google Drive, share, and print handoff",
  teamSeats: "Shared team accounts",
  companyProfile: "Company Profile",
  employeeUsageBreakdown: "Employee usage breakdown",
  stripeMetering: "Stripe/Metronome pay-as-you-go invoicing",
  unlimitedCompanyUsers: "Unlimited company users"
});

export const PROFILE_TIER_DEFINITIONS = Object.freeze([
  {
    id: "trial",
    label: "Trial",
    monthlyPriceUsd: 0,
    includedCredits: DEFAULT_TRIAL_CREDITS,
    billingMode: "trial-credits",
    featureIds: ["profileIcon", "creditLedger", "soundNotices"],
    description: "Free signup account with enough credits for up to three standard starter projects."
  },
  {
    id: "starter",
    label: "Starter",
    monthlyPriceUsd: 18,
    includedCredits: 12500,
    billingMode: "monthly-prepaid",
    featureIds: ["profileIcon", "creditLedger", "soundNotices", "cockpitThemes", "savedProjects"],
    description: "Solo account for daily tools, saved answers, prompt workflows, and light exports."
  },
  {
    id: "pro",
    label: "Pro",
    monthlyPriceUsd: 72,
    includedCredits: 50000,
    billingMode: "monthly-prepaid",
    featureIds: ["profileIcon", "creditLedger", "soundNotices", "cockpitThemes", "rgbMatrixColors", "savedProjects", "cloudExports"],
    description: "AI-guided workflows, richer files, larger queues, and profile-controlled cockpit themes."
  },
  {
    id: "creator",
    label: "Creator",
    monthlyPriceUsd: 216,
    includedCredits: 150000,
    billingMode: "monthly-prepaid",
    featureIds: ["profileIcon", "creditLedger", "soundNotices", "cockpitThemes", "rgbMatrixColors", "savedProjects", "cloudExports"],
    description: "Media rendering, audio visualizers, RGB motion, 3D space workflows, and heavy file outputs."
  },
  {
    id: "team",
    label: "Team",
    monthlyPriceUsd: 540,
    includedCredits: 375000,
    billingMode: "monthly-prepaid",
    featureIds: ["profileIcon", "creditLedger", "soundNotices", "cockpitThemes", "rgbMatrixColors", "savedProjects", "cloudExports", "teamSeats"],
    description: "Shared team usage with more credits, shared project history, and team-level profile controls."
  },
  {
    id: "enterprise",
    label: "Enterprise",
    monthlyPriceUsd: null,
    includedCredits: 0,
    billingMode: "enterprise-paygo",
    featureIds: ["profileIcon", "creditLedger", "soundNotices", "cockpitThemes", "rgbMatrixColors", "savedProjects", "cloudExports", "teamSeats", "companyProfile", "employeeUsageBreakdown", "stripeMetering", "unlimitedCompanyUsers"],
    description: "Company Profile with unlimited users, usage tracked by employee, and monthly pay-as-you-go invoice."
  }
]);

export const ALA_CREDIT_PACKAGES = Object.freeze([
  { id: "ala-5k", label: "Ala-Token 5K", credits: 5000 },
  { id: "ala-20k", label: "Ala-Token 20K", credits: 20000 },
  { id: "ala-60k", label: "Ala-Token 60K", credits: 60000 },
  { id: "ala-150k", label: "Ala-Token 150K", credits: 150000 }
].map((pack) => {
  const cloudflareCreditValueUsd = creditsToCostUsd(pack.credits);
  const overheadRecoveryUsd = roundMoney(cloudflareCreditValueUsd * CLOUD_RUN_ASSUMPTIONS.packageSupportBufferRate);
  const packageCostBasisUsd = roundMoney(cloudflareCreditValueUsd + overheadRecoveryUsd);
  return Object.freeze({
    ...pack,
    cloudflareCreditValueUsd,
    overheadRecoveryUsd,
    packageCostBasisUsd,
    retailPriceUsd: roundMoney(packageCostBasisUsd * CLOUD_RUN_ASSUMPTIONS.creditRetailMarkup),
    creditsNeverExpire: true
  });
}));

export const MONTHLY_CREDIT_PACKAGES = Object.freeze(ALA_CREDIT_PACKAGES.map((pack) => {
  const includedCredits = Math.round(pack.credits * 2.5);
  const cloudflareCreditValueUsd = creditsToCostUsd(includedCredits);
  const overheadRecoveryUsd = roundMoney(cloudflareCreditValueUsd * CLOUD_RUN_ASSUMPTIONS.monthlySupportBufferRate);
  const packageCostBasisUsd = roundMoney(cloudflareCreditValueUsd + overheadRecoveryUsd);
  const monthlyPriceUsd = roundMoney(pack.retailPriceUsd * 0.9);
  return Object.freeze({
    id: `monthly-${pack.id.replace(/^ala-/, "")}`,
    label: pack.label.replace("Ala-Token", "Monthly"),
    matchedAlaPackageId: pack.id,
    includedCredits,
    monthlyPriceUsd,
    cloudflareCreditValueUsd,
    overheadRecoveryUsd,
    packageCostBasisUsd,
    estimatedGrossProfitUsd: roundMoney(monthlyPriceUsd - packageCostBasisUsd),
    creditsNeverExpire: true,
    rule: "90% of matching ala-carte retail price with 250% of the credits. Overhead is recovered in package pricing, not credit burn."
  });
}));

export const ENTERPRISE_EMPLOYEE_DISCOUNTS = Object.freeze([
  { minEmployees: 1, maxEmployees: 9, discountRate: 0 },
  { minEmployees: 10, maxEmployees: 24, discountRate: 0.03 },
  { minEmployees: 25, maxEmployees: 49, discountRate: 0.03 },
  { minEmployees: 50, maxEmployees: 99, discountRate: 0.05 },
  { minEmployees: 100, maxEmployees: 249, discountRate: 0.05 },
  { minEmployees: 250, maxEmployees: 499, discountRate: 0.05 },
  { minEmployees: 500, maxEmployees: 1000, discountRate: 0.07 },
  { minEmployees: 1001, maxEmployees: Infinity, discountRate: 0.10 }
]);

export const DEFAULT_COMPANY_PROFILE = Object.freeze({
  companyName: "Company Profile",
  billingContact: "",
  employeeCount: 25,
  averageProjectsPerEmployeeMonthly: 12,
  stripeCustomerId: "",
  invoiceDay: 1,
  payAsYouGo: true,
  unlimitedUsers: true
});

const BYTES_PER_GB = 1024 ** 3;

function roundMoney(value, digits = 4) {
  return Number(Number(value || 0).toFixed(digits));
}

function roundCredits(value) {
  const credits = Number(value || 0);
  if (credits <= 0) return 0;
  return Math.max(0.01, Number(credits.toFixed(2)));
}

export function creditsToCostUsd(credits) {
  return roundMoney(Number(credits || 0) * CREDIT_UNIT_USD);
}

export function costUsdToCredits(usd) {
  return roundCredits(Number(usd || 0) / CREDIT_UNIT_USD);
}

function slug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function words(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean);
}

function byteLength(value) {
  const text = String(value || "");
  if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(text).length;
  return text.length;
}

function textIncludesAny(text, patterns) {
  const normalized = String(text || "").toLowerCase();
  return patterns.some((pattern) => normalized.includes(pattern));
}

function getTier(id) {
  return PROFILE_TIER_DEFINITIONS.find((tier) => tier.id === id) || PROFILE_TIER_DEFINITIONS[0];
}

function normalizeLedger(entries) {
  return Array.isArray(entries) ? entries.filter(Boolean).slice(-500) : [];
}

export function createDefaultBillingAccount() {
  const now = new Date().toISOString();
  return {
    version: PROFILE_BILLING_VERSION,
    accountId: `tg-local-${Date.now().toString(36)}`,
    tierId: "trial",
    displayName: "ToolGrid Member",
    profileIcon: "TG",
    creditBalance: DEFAULT_TRIAL_CREDITS,
    lifetimeCreditsAdded: DEFAULT_TRIAL_CREDITS,
    lifetimeCreditsSpent: 0,
    creditsNeverExpire: true,
    trialProjectsRemaining: TRIAL_PROJECT_ALLOWANCE,
    soundMode: "completion",
    projectSoundMode: "completion",
    companyProfile: { ...DEFAULT_COMPANY_PROFILE },
    enterpriseUsage: [],
    creditLedger: [
      {
        id: `ledger-${Date.now().toString(36)}-trial`,
        type: "credit-grant",
        label: "Signup trial credits",
        credits: DEFAULT_TRIAL_CREDITS,
        amountUsd: creditsToCostUsd(DEFAULT_TRIAL_CREDITS),
        balanceAfter: DEFAULT_TRIAL_CREDITS,
        createdAt: now,
        note: `Trial unlock covers up to ${TRIAL_PROJECT_ALLOWANCE} standard starter projects. Credits never expire.`
      }
    ],
    createdAt: now,
    updatedAt: now
  };
}

export function normalizeBillingAccount(input) {
  const defaults = createDefaultBillingAccount();
  const account = { ...defaults, ...(input && typeof input === "object" ? input : {}) };
  account.tierId = getTier(account.tierId).id;
  account.displayName = String(account.displayName || defaults.displayName);
  account.profileIcon = String(account.profileIcon || defaults.profileIcon).trim().slice(0, 4).toUpperCase() || "TG";
  account.creditBalance = Number.isFinite(Number(account.creditBalance)) ? Number(account.creditBalance) : defaults.creditBalance;
  account.lifetimeCreditsAdded = Number(account.lifetimeCreditsAdded || account.creditBalance || DEFAULT_TRIAL_CREDITS);
  account.lifetimeCreditsSpent = Number(account.lifetimeCreditsSpent || 0);
  account.creditsNeverExpire = true;
  account.trialProjectsRemaining = Math.max(0, Number(account.trialProjectsRemaining ?? defaults.trialProjectsRemaining));
  account.companyProfile = { ...DEFAULT_COMPANY_PROFILE, ...(account.companyProfile || {}) };
  account.enterpriseUsage = Array.isArray(account.enterpriseUsage) ? account.enterpriseUsage.slice(-1000) : [];
  account.creditLedger = normalizeLedger(account.creditLedger);
  account.updatedAt = new Date().toISOString();
  return account;
}

export function getUnlockedProfileFeatures(tierId) {
  const tier = getTier(tierId);
  return tier.featureIds.map((id) => PROFILE_FEATURES[id]).filter(Boolean);
}

function classifyToolRecord(tool = {}) {
  const haystack = [
    tool.id,
    tool.name,
    tool.label,
    tool.systemLabel,
    tool.category,
    tool.domain,
    tool.toolType,
    tool.assetType,
    tool.toolKind,
    tool.description,
    ...(tool.tags || []),
    ...(tool.searchTerms || [])
  ].join(" ").toLowerCase();
  const assetType = String(tool.assetType || tool.toolType || tool.toolKind || "").toLowerCase();
  return {
    assetType,
    isSkeleton: assetType.includes("skeleton") || tool.toolKind === "skeleton" || haystack.includes("skeleton"),
    isMiniApp: textIncludesAny(haystack, ["mini-app", "mini app", "app program", "workflow", "dashboard"]),
    isFullProgram: textIncludesAny(haystack, ["full-app", "full app", "full-program", "production-pack", "program system"]),
    requiresAi: Boolean(tool.requiresAi) || textIncludesAny(haystack, ["ai", "prompt", "factcheck", "summariz", "generate", "reasoning", "inference", "model"]),
    requiresRender: Boolean(tool.requiresRender) || textIncludesAny(haystack, ["render", "video", "audio", "visualizer", "rgb motion", "3d", "space", "image", "canvas", "gif", "clip"]),
    requiresApi: Boolean(tool.requiresApi) || textIncludesAny(haystack, ["api", "price comparison", "factcheck", "webcam", "appfigures", "external", "shopping", "source"]),
    requiresWeb: Boolean(tool.requiresWeb) || textIncludesAny(haystack, ["web", "search", "source", "url", "price", "fact", "webcam"]),
    requiresStorage: Boolean(tool.requiresStorage) || textIncludesAny(haystack, ["file", "upload", "download", "storage", "project", "archive", "share", "export"]),
    acceptsFiles: Boolean(tool.acceptsFiles) || textIncludesAny(haystack, ["upload", "file", "image", "audio", "video", "csv", "pdf", "docx", "spreadsheet"]),
    browserSide: tool.browserSide !== false && !Boolean(tool.backendRequired)
  };
}

function estimateTokens(prompt, taskCount, flags) {
  const promptWords = words(prompt).length;
  const baseInput = Math.max(250, promptWords * 1.35 * 1.25);
  const taskMultiplier = Math.max(1, taskCount || 1);
  const inputTokens = Math.round(baseInput + taskMultiplier * (flags.requiresRender ? 1200 : flags.requiresApi ? 800 : 420));
  const outputTokens = Math.round(Math.max(450, inputTokens * (flags.requiresRender ? 1.5 : flags.isFullProgram ? 1.25 : 0.9)));
  return { inputTokens, outputTokens };
}

function estimateRecordUsage(tool, context = {}) {
  const flags = classifyToolRecord(tool);
  const taskCount = Math.max(1, Number(context.taskCount || 1));
  const prompt = context.prompt || tool.description || tool.name || "";
  const uploadBytes = Number(context.uploadBytes || 0);
  const outputBytes = Number(context.outputBytes || 12000 + words(prompt).length * 120);
  const fileGb = (uploadBytes + outputBytes) / BYTES_PER_GB;
  const retentionFraction = Math.max(1, Number(context.retentionDays || CLOUD_RUN_ASSUMPTIONS.storageRetentionDays)) / 30;
  const tokens = estimateTokens(prompt, taskCount, flags);

  let workerRequests = 1;
  let cpuMs = flags.browserSide ? 4 : 18;
  let r2ClassA = 0;
  let r2ClassB = 0;
  let r2StorageGbMonth = 0;
  let d1RowsRead = 25;
  let d1RowsWritten = 6;
  let aiInputTokens = 0;
  let aiOutputTokens = 0;

  if (flags.requiresAi || flags.isMiniApp || flags.isFullProgram) {
    aiInputTokens = tokens.inputTokens;
    aiOutputTokens = tokens.outputTokens;
    cpuMs += flags.isFullProgram ? 160 : 65;
    d1RowsRead += 80;
    d1RowsWritten += 18;
  }

  if (flags.requiresApi || flags.requiresWeb) {
    workerRequests += 2;
    cpuMs += 55;
    d1RowsRead += 60;
  }

  if (flags.requiresStorage || flags.acceptsFiles || uploadBytes || outputBytes > 20000) {
    r2ClassA += 1;
    r2ClassB += 1;
    r2StorageGbMonth += Math.max(0.00001, fileGb * retentionFraction);
    d1RowsWritten += 10;
  }

  if (flags.requiresRender) {
    workerRequests += 3;
    cpuMs += 450;
    r2ClassA += 2;
    r2ClassB += 2;
    r2StorageGbMonth += Math.max(0.00025, fileGb * 2 * retentionFraction);
    aiInputTokens += Math.round(tokens.inputTokens * 0.8);
    aiOutputTokens += Math.round(tokens.outputTokens * 0.7);
  }

  if (flags.isSkeleton) {
    cpuMs = Math.max(2, Math.round(cpuMs * 0.65));
    aiInputTokens = Math.round(aiInputTokens * 0.55);
    aiOutputTokens = Math.round(aiOutputTokens * 0.55);
  }

  if (flags.isFullProgram) {
    workerRequests += 5;
    cpuMs += 280;
    d1RowsRead += 160;
    d1RowsWritten += 40;
  }

  return {
    flags,
    workerRequests: Math.ceil(workerRequests),
    cpuMs: Math.ceil(cpuMs),
    r2ClassA,
    r2ClassB,
    r2StorageGbMonth: roundMoney(r2StorageGbMonth, 8),
    d1RowsRead,
    d1RowsWritten,
    d1StorageGbMonth: 0.00002,
    aiInputTokens,
    aiOutputTokens
  };
}

export function calculateCloudflareUsageCost(usage = {}) {
  const workers = CLOUDFLARE_RATE_CARD.workers;
  const r2 = CLOUDFLARE_RATE_CARD.r2Standard;
  const d1 = CLOUDFLARE_RATE_CARD.d1;
  const ai = CLOUDFLARE_RATE_CARD.workersAi;
  const costs = {
    workersRequestsUsd: (Number(usage.workerRequests || 0) / 1000000) * workers.requestPerMillionUsd,
    workersCpuUsd: (Number(usage.cpuMs || 0) / 1000000) * workers.cpuMsPerMillionUsd,
    r2ClassAUsd: (Number(usage.r2ClassA || 0) / 1000000) * r2.classAOperationPerMillionUsd,
    r2ClassBUsd: (Number(usage.r2ClassB || 0) / 1000000) * r2.classBOperationPerMillionUsd,
    r2StorageUsd: Number(usage.r2StorageGbMonth || 0) * r2.storageGbMonthUsd,
    d1RowsReadUsd: (Number(usage.d1RowsRead || 0) / 1000000) * d1.rowsReadPerMillionUsd,
    d1RowsWrittenUsd: (Number(usage.d1RowsWritten || 0) / 1000000) * d1.rowsWrittenPerMillionUsd,
    d1StorageUsd: Number(usage.d1StorageGbMonth || 0) * d1.storageGbMonthUsd,
    workersAiInputUsd: (Number(usage.aiInputTokens || 0) / 1000000) * ai.defaultInputTokenPerMillionUsd,
    workersAiOutputUsd: (Number(usage.aiOutputTokens || 0) / 1000000) * ai.defaultOutputTokenPerMillionUsd
  };
  const totalUsd = Object.values(costs).reduce((sum, value) => sum + value, 0);
  return {
    costs: Object.fromEntries(Object.entries(costs).map(([key, value]) => [key, roundMoney(value, 8)])),
    totalUsd: roundMoney(totalUsd)
  };
}

export function estimateToolRecordCost(tool = {}, context = {}) {
  const usage = estimateRecordUsage(tool, context);
  const cloudflare = calculateCloudflareUsageCost(usage);
  const costUsd = cloudflare.totalUsd;
  const credits = costUsdToCredits(costUsd);
  return {
    toolId: tool.id || "",
    name: tool.name || tool.label || "ToolGrid record",
    category: tool.category || "Uncategorized",
    costUsd: roundMoney(costUsd),
    credits,
    usage,
    cloudflareCosts: cloudflare.costs,
    costBasis: "Cloudflare Workers + R2 + D1 + Workers AI only",
    notes: buildCostNotes(usage.flags)
  };
}

function combineUsage(rows) {
  const total = {};
  for (const row of rows) {
    for (const [key, value] of Object.entries(row.usage || {})) {
      if (key === "flags") continue;
      total[key] = (total[key] || 0) + Number(value || 0);
    }
  }
  return {
    ...total,
    r2StorageGbMonth: roundMoney(total.r2StorageGbMonth || 0, 8),
    d1StorageGbMonth: roundMoney(total.d1StorageGbMonth || 0, 8),
    overheadUsd: 0
  };
}

function summarizeFlags(rows) {
  const summary = {
    requiresAi: false,
    requiresApi: false,
    requiresWeb: false,
    requiresRender: false,
    requiresStorage: false,
    acceptsFiles: false
  };
  for (const row of rows) {
    const flags = row.usage?.flags || {};
    for (const key of Object.keys(summary)) {
      summary[key] = summary[key] || Boolean(flags[key]);
    }
  }
  return summary;
}

function buildCostNotes(flags = {}) {
  const notes = [];
  if (flags.requiresAi) notes.push("AI model usage priced through Workers AI token/neuron proxy.");
  if (flags.requiresRender) notes.push("Render-heavy output includes extra CPU, R2 storage, and Workers AI usage.");
  if (flags.requiresApi || flags.requiresWeb) notes.push("External research/API flow includes added Workers requests and D1 trace rows.");
  if (flags.requiresStorage || flags.acceptsFiles) notes.push("File-ready flow includes R2 object operations and D1 ledger rows.");
  if (!notes.length) notes.push("Simple browser-first utility with light Workers/D1 usage.");
  return notes;
}

export function estimateProjectCreditCost({ prompt = "", queue = [], toolsById, fileAnalysis = null, uploadBytes = 0, outputBytes = 0 } = {}) {
  const tasks = Array.isArray(queue) && queue.length ? queue : [{ toolId: "prompt-intake", toolName: "Prompt Intake", synthetic: true }];
  const fileBytes = uploadBytes || (fileAnalysis?.files || []).reduce((sum, file) => sum + Number(file.size || 0), 0);
  const breakdown = tasks.map((task, index) => {
    const tool = task.synthetic
      ? {
          id: "prompt-intake",
          name: task.toolName,
          category: "Prompt Workflow",
          description: prompt,
          tags: ["prompt", "workflow", "ai"]
        }
      : toolsById?.get?.(task.replacementToolId || task.toolId) || {
          id: task.toolId || `workflow-task-${index + 1}`,
          name: task.toolName || `Workflow task ${index + 1}`,
          category: "Virtual ToolGrid Record",
          description: task.reason || prompt,
          tags: task.capabilityTags || []
        };
    return estimateToolRecordCost(tool, {
      prompt: `${prompt}\n${task.prompt || ""}\n${task.reason || ""}`,
      taskCount: tasks.length,
      uploadBytes: index === 0 ? fileBytes : 0,
      outputBytes: outputBytes || 12000 + tasks.length * 900
    });
  });
  const usage = combineUsage(breakdown);
  const cloudflare = calculateCloudflareUsageCost(usage);
  const flags = summarizeFlags(breakdown);
  const totalUsd = roundMoney(cloudflare.totalUsd, 8);
  const credits = costUsdToCredits(totalUsd);
  return {
    estimateId: `estimate-${Date.now().toString(36)}-${slug(prompt).slice(0, 28) || "prompt"}`,
    prompt: String(prompt || "").slice(0, 500),
    taskCount: tasks.length,
    costUsd: totalUsd,
    credits,
    creditUnitUsd: CREDIT_UNIT_USD,
    cloudflareCosts: cloudflare.costs,
    usage,
    flags,
    taskBreakdown: breakdown.slice(0, 64),
    pricingBasis: "credits equal estimated Cloudflare Workers, R2, D1, and Workers AI cost only",
    noChargeUntilAnswer: true,
    creditsNeverExpire: true,
    generatedAt: new Date().toISOString()
  };
}

export function calculateActualProjectCreditCost({ prompt = "", queue = [], artifacts = [], generatedFile = null, toolsById, fileAnalysis = null } = {}) {
  const completedQueue = Array.isArray(queue) && queue.length
    ? queue.filter((task) => task.status === "done")
    : [];
  const billableQueue = completedQueue.length ? completedQueue : queue;
  const outputBytes = Math.max(
    generatedFile?.content ? byteLength(generatedFile.content) : 0,
    ...((Array.isArray(artifacts) ? artifacts : []).map((artifact) => byteLength(artifact.output || ""))),
    12000
  );
  const baseEstimate = estimateProjectCreditCost({
    prompt,
    queue: billableQueue,
    toolsById,
    fileAnalysis,
    outputBytes
  });
  return {
    ...baseEstimate,
    estimateId: `actual-${Date.now().toString(36)}-${slug(prompt).slice(0, 28) || "project"}`,
    taskCount: billableQueue.length || baseEstimate.taskCount,
    completedTaskCount: completedQueue.length,
    artifactCount: Array.isArray(artifacts) ? artifacts.length : 0,
    outputBytes,
    actualBasis: "settled from completed task count, actual generated artifact size, generated file size, and the Cloudflare rate card only",
    noChargeUntilAnswer: false
  };
}

export function estimateDownloadCreditCost({ bytes = 0, fileType = "answer", retained = false } = {}) {
  const sizeBytes = Math.max(1, Number(bytes || 0));
  const gb = sizeBytes / BYTES_PER_GB;
  const usage = {
    workerRequests: 1,
    cpuMs: 3,
    r2ClassA: retained ? 1 : 0,
    r2ClassB: 1,
    r2StorageGbMonth: retained ? gb : 0,
    d1RowsRead: 5,
    d1RowsWritten: retained ? 4 : 1,
    d1StorageGbMonth: 0,
    aiInputTokens: 0,
    aiOutputTokens: 0
  };
  const cloudflare = calculateCloudflareUsageCost(usage);
  const costUsd = cloudflare.totalUsd;
  return {
    fileType,
    bytes: sizeBytes,
    costUsd: roundMoney(costUsd),
    credits: costUsdToCredits(costUsd),
    usage,
    cloudflareCosts: cloudflare.costs,
    note: retained ? "Download plus retained cloud copy." : "Download handoff with R2/D1 traceability estimate."
  };
}

export function hasEnoughCredits(account, estimate) {
  const normalized = normalizeBillingAccount(account);
  const tier = getTier(normalized.tierId);
  if (tier.billingMode === "enterprise-paygo") return true;
  return Number(normalized.creditBalance || 0) >= Number(estimate?.credits || 0);
}

export function recordCreditSpend(account, event = {}) {
  const next = normalizeBillingAccount(account);
  const tier = getTier(next.tierId);
  const credits = Math.max(0, Number(event.credits || 0));
  const existing = event.settlementId
    ? next.creditLedger.find((entry) => entry.settlementId === event.settlementId)
    : null;
  if (existing) return { account: next, entry: existing, duplicate: true };
  const enterprisePaygo = tier.billingMode === "enterprise-paygo";
  const signedCredits = event.type === "credit-grant" ? credits : -credits;
  if (!enterprisePaygo) {
    next.creditBalance = roundCredits(Number(next.creditBalance || 0) + signedCredits);
    if (event.type === "credit-grant") next.lifetimeCreditsAdded += credits;
    if (event.type !== "credit-grant") next.lifetimeCreditsSpent += credits;
  } else if (event.type !== "credit-grant") {
    next.lifetimeCreditsSpent += credits;
  }
  if (event.type === "project-answer" && next.trialProjectsRemaining > 0) {
    next.trialProjectsRemaining -= 1;
  }
  const entry = {
    id: `ledger-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    settlementId: event.settlementId || "",
    type: event.type || "credit-spend",
    label: event.label || "ToolGrid usage",
    credits,
    amountUsd: creditsToCostUsd(credits),
    balanceAfter: enterprisePaygo ? next.creditBalance : Math.max(0, next.creditBalance),
    employeeId: event.employeeId || "",
    employeeName: event.employeeName || "",
    projectId: event.projectId || "",
    projectName: event.projectName || "",
    costBasis: event.costBasis || "Cloudflare usage estimate",
    note: event.note || "",
    createdAt: new Date().toISOString()
  };
  next.creditLedger.push(entry);
  next.creditLedger = normalizeLedger(next.creditLedger);
  next.updatedAt = entry.createdAt;
  if (enterprisePaygo && event.type !== "credit-grant") {
    next.enterpriseUsage.push({
      ...entry,
      companyName: next.companyProfile.companyName,
      invoiceMonth: entry.createdAt.slice(0, 7)
    });
    next.enterpriseUsage = next.enterpriseUsage.slice(-2500);
  }
  return { account: next, entry, duplicate: false };
}

export function addPurchasedCredits(account, packageId) {
  const pack = [...ALA_CREDIT_PACKAGES, ...MONTHLY_CREDIT_PACKAGES].find((item) => item.id === packageId);
  if (!pack) return { account: normalizeBillingAccount(account), package: null };
  const result = recordCreditSpend(account, {
    type: "credit-grant",
    label: `${pack.label} credits`,
    credits: pack.credits || pack.includedCredits,
    note: `Credits added from ${pack.label}; credits never expire.`
  });
  return { account: result.account, package: pack };
}

export function buildCreditLedgerTooltip(account) {
  const normalized = normalizeBillingAccount(account);
  const tier = getTier(normalized.tierId);
  const recent = normalizeLedger(normalized.creditLedger).slice(-6).reverse();
  const lines = [
    `${tier.label} profile`,
    tier.billingMode === "enterprise-paygo"
      ? "Enterprise pay-as-you-go: usage is invoiced monthly."
      : `${Math.round(normalized.creditBalance).toLocaleString()} credits remaining.`,
    "Credits never expire."
  ];
  for (const entry of recent) {
    lines.push(`${entry.type === "credit-grant" ? "+" : "-"}${Number(entry.credits || 0).toLocaleString()} credits - ${entry.label}`);
  }
  return lines.join("\n");
}

export function buildEnterpriseMonthlyInvoice(account, month = new Date().toISOString().slice(0, 7)) {
  const normalized = normalizeBillingAccount(account);
  const employeeGroups = new Map();
  for (const item of normalized.enterpriseUsage || []) {
    if ((item.invoiceMonth || item.createdAt?.slice(0, 7)) !== month) continue;
    const key = item.employeeId || item.employeeName || "generic-usage";
    const row = employeeGroups.get(key) || {
      employeeId: item.employeeId || "",
      employeeName: item.employeeName || "Generic company usage",
      projectCount: 0,
      credits: 0,
      costBasisUsd: 0
    };
    row.projectCount += item.type === "project-answer" ? 1 : 0;
    row.credits += Number(item.credits || 0);
    row.costBasisUsd += creditsToCostUsd(item.credits || 0);
    employeeGroups.set(key, row);
  }
  const employeeBreakdown = [...employeeGroups.values()].map((row) => ({
    ...row,
    credits: Math.round(row.credits),
    costBasisUsd: roundMoney(row.costBasisUsd)
  }));
  const totalCostBasisUsd = roundMoney(employeeBreakdown.reduce((sum, row) => sum + row.costBasisUsd, 0));
  const overheadRecoveryUsd = roundMoney(totalCostBasisUsd * CLOUD_RUN_ASSUMPTIONS.monthlySupportBufferRate);
  const invoiceCostBasisUsd = roundMoney(totalCostBasisUsd + overheadRecoveryUsd);
  const discountRate = getEnterpriseDiscount(normalized.companyProfile.employeeCount);
  const profitBeforeDiscountUsd = roundMoney(invoiceCostBasisUsd * (CLOUD_RUN_ASSUMPTIONS.enterpriseProfitMarkup - 1));
  const profitAfterDiscountUsd = roundMoney(profitBeforeDiscountUsd * (1 - discountRate));
  return {
    invoiceId: `tg-${slug(normalized.companyProfile.companyName)}-${month}`,
    companyName: normalized.companyProfile.companyName,
    month,
    employeeCount: Number(normalized.companyProfile.employeeCount || 0),
    discountRate,
    totalCredits: employeeBreakdown.reduce((sum, row) => sum + row.credits, 0),
    cloudflareUsageUsd: totalCostBasisUsd,
    overheadRecoveryUsd,
    invoiceCostBasisUsd,
    profitBeforeDiscountUsd,
    profitDiscountUsd: roundMoney(profitBeforeDiscountUsd - profitAfterDiscountUsd),
    invoiceTotalUsd: roundMoney(invoiceCostBasisUsd + profitAfterDiscountUsd),
    employeeBreakdown,
    rule: "Employee usage credits are Cloudflare-only. Invoice recovers overhead separately, then discounts are applied only to profit."
  };
}

export function getEnterpriseDiscount(employeeCount) {
  const count = Math.max(1, Number(employeeCount || 1));
  return (ENTERPRISE_EMPLOYEE_DISCOUNTS.find((tier) => count >= tier.minEmployees && count <= tier.maxEmployees) || ENTERPRISE_EMPLOYEE_DISCOUNTS[0]).discountRate;
}

export function buildEnterpriseInvestorRows({ averageProjectCredits = 58, projectsPerEmployeeMonthly = 12 } = {}) {
  const employeeCounts = [10, 25, 50, 100, 250, 500, 1000, 1500];
  return employeeCounts.map((employees) => {
    const monthlyProjects = employees * projectsPerEmployeeMonthly;
    const cloudflareUsageUsd = creditsToCostUsd(monthlyProjects * averageProjectCredits);
    const overheadRecoveryUsd = roundMoney(cloudflareUsageUsd * CLOUD_RUN_ASSUMPTIONS.monthlySupportBufferRate);
    const costBasisUsd = roundMoney(cloudflareUsageUsd + overheadRecoveryUsd);
    const profitBeforeDiscountUsd = roundMoney(costBasisUsd * (CLOUD_RUN_ASSUMPTIONS.enterpriseProfitMarkup - 1));
    const discountRate = getEnterpriseDiscount(employees);
    const profitAfterDiscountUsd = roundMoney(profitBeforeDiscountUsd * (1 - discountRate));
    return {
      employees,
      projectsPerEmployeeMonthly,
      monthlyProjects,
      averageProjectCredits,
      discountRate,
      cloudflareUsageUsd,
      overheadRecoveryUsd,
      costBasisUsd,
      profitBeforeDiscountUsd,
      profitDiscountUsd: roundMoney(profitBeforeDiscountUsd - profitAfterDiscountUsd),
      projectedInvoiceUsd: roundMoney(costBasisUsd + profitAfterDiscountUsd),
      projectedGrossProfitUsd: profitAfterDiscountUsd,
      guardrail: "Usage credits burn against Cloudflare only; overhead is recovered before profit, and discounts reduce profit only."
    };
  });
}

export function buildSubscriptionPricingSummary() {
  return {
    version: PROFILE_BILLING_VERSION,
    creditUnitUsd: CREDIT_UNIT_USD,
    cloudflareRateCard: CLOUDFLARE_RATE_CARD,
    assumptions: CLOUD_RUN_ASSUMPTIONS,
    tiers: PROFILE_TIER_DEFINITIONS.map((tier) => ({
      ...tier,
      features: getUnlockedProfileFeatures(tier.id)
    })),
    alaCarte: ALA_CREDIT_PACKAGES,
    monthly: MONTHLY_CREDIT_PACKAGES,
    enterpriseDiscounts: ENTERPRISE_EMPLOYEE_DISCOUNTS,
    investorRows: buildEnterpriseInvestorRows(),
    runtimeRecordsPriced: TARGET_RUNTIME_RECORDS_PRICED,
    notes: [
      "Credits represent Cloudflare usage at $0.001 per credit.",
      "Project credit spend does not include profit or platform overhead.",
      "Platform overhead is recovered in monthly, ala-token, and enterprise invoice pricing before profit is calculated.",
      "Projects are only charged when an answer is produced.",
      "Downloads can add a small traceable credit spend when storage or delivery costs are expected.",
      "Credits never expire and roll over indefinitely.",
      "Stripe/Metronome should receive usage events after ToolGrid records the internal credit ledger."
    ]
  };
}

export function buildStripeMeteringPlan() {
  return {
    billingPlatform: "Stripe Metronome recommended for new prepaid credits, credit burndown, enterprise contracts, and high-volume usage.",
    noSecretsRequiredInClient: true,
    customerObjects: [
      "toolgrid_user_profile",
      "toolgrid_company_profile",
      "toolgrid_employee_usage_identity"
    ],
    products: PROFILE_TIER_DEFINITIONS.map((tier) => ({
      lookupKey: `toolgrid_${tier.id}`,
      label: tier.label,
      billingMode: tier.billingMode,
      includedCredits: tier.includedCredits,
      monthlyPriceUsd: tier.monthlyPriceUsd
    })),
    meters: [
      { id: "project_answer_credits", eventName: "toolgrid.project_answer", unit: "credit", chargeTiming: "after_answer_produced" },
      { id: "download_export_credits", eventName: "toolgrid.download_export", unit: "credit", chargeTiming: "after_export_started" },
      { id: "enterprise_employee_usage", eventName: "toolgrid.enterprise_employee_usage", unit: "credit", dimensions: ["company_id", "employee_id", "project_id"] }
    ],
    webhookEventsToHandle: [
      "checkout.session.completed",
      "customer.subscription.updated",
      "invoice.finalized",
      "invoice.paid",
      "customer.subscription.deleted"
    ],
    ledgerRules: [
      "Never deduct credits during specify/clarify screens.",
      "Deduct project credits only after the waterfall produces an answer.",
      "Record employee, project, tool mix, Cloudflare cost basis, and credit amount for enterprise invoice lines.",
      "Do not store Stripe secrets, tokens, or customer payment data in the browser."
    ]
  };
}

export function buildRuntimeCostCoverageSummary() {
  const types = [
    ["solo-job tools", 1500000, 12],
    ["skeleton tools", 1500000, 8],
    ["mini-apps", 450000, 28],
    ["apps", 300000, 42],
    ["full-apps", 225000, 72],
    ["mini-programs/programs", 375000, 58],
    ["full-programs/production-packs", 150000, 118]
  ];
  return {
    totalRuntimeRecordsPriced: TARGET_RUNTIME_RECORDS_PRICED,
    pricingMode: "lazy-estimated",
    explanation: "The estimator prices each virtual or concrete record by ID, type, category, flags, prompt size, files, queue length, and output kind instead of materializing five million static price rows in the browser.",
    proxyBands: types.map(([type, count, averageCredits]) => ({
      type,
      recordCount: count,
      averageCredits,
      averageCostBasisUsd: creditsToCostUsd(averageCredits)
    }))
  };
}
