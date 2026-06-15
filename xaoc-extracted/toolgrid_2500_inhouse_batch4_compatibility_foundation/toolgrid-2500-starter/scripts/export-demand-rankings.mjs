import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { tools } from "../src/tool-catalog.js";
import {
  DEMAND_RANKER_VERSION,
  buildToolUsageEstimate,
  getDemandRankedProjects,
  getDemandModelStats,
  summarizeDemandByCategory
} from "../src/project-demand-ranker.js";

const topDemandProjects = getDemandRankedProjects({
  limit: 250,
  fieldDepth: 64,
  groupDepth: 100,
  uiDepth: 32,
  variantDepth: 10
});

const usage = buildToolUsageEstimate({
  fieldLimit: 100,
  groupLimit: 125,
  uiSamples: [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 24, 32, 48, 64],
  variantSamples: [0, 1, 2, 3, 7, 15, 31, 63, 127, 255, 383, 511, 624]
});

const categorySummary = summarizeDemandByCategory(usage.rankedTools);
const output = {
  version: DEMAND_RANKER_VERSION,
  generatedAt: usage.generatedAt,
  modelStats: getDemandModelStats(),
  topDemandProjectCount: topDemandProjects.length,
  sourceToolCount: tools.length,
  topDemandProjects,
  toolUsageSummary: {
    sourceProjectUniverse: usage.sourceProjectUniverse,
    sampledProjectCount: usage.sampledProjectCount,
    projectedProjectWeight: usage.projectedProjectWeight,
    fieldCount: usage.fieldCount,
    groupCount: usage.groupCount,
    uiSamples: usage.uiSamples,
    variantSamples: usage.variantSamples,
    categorySummary,
    rankedTools: usage.rankedTools
  }
};

const js = `// Auto-generated projected project and tool demand rankings. Regenerate with npm run rank:demand.\nexport const DEMAND_RANKINGS = ${JSON.stringify(output, null, 2)};\nexport const TOP_DEMAND_PROJECTS = DEMAND_RANKINGS.topDemandProjects;\nexport const TOOL_USAGE_RANKING = DEMAND_RANKINGS.toolUsageSummary.rankedTools;\nexport const TOOL_USAGE_CATEGORY_SUMMARY = DEMAND_RANKINGS.toolUsageSummary.categorySummary;\n`;
const target = resolve("src/demand-rankings.js");
writeFileSync(target, js, "utf8");
console.log(`Wrote ${target}`);
console.log(`Top project: ${topDemandProjects[0]?.title} score=${topDemandProjects[0]?.demandScore}`);
console.log(`Top tool: ${usage.rankedTools[0]?.name} projectedUses=${usage.rankedTools[0]?.projectedUses}`);
console.log(`Ranked ${usage.rankedTools.length} tools across ${usage.sampledProjectCount.toLocaleString()} sampled virtual projects.`);
