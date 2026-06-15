import { mkdirSync, writeFileSync } from "node:fs";
import { FACTCHECKER_MAX_CELLS, FACTCHECKER_SOURCE_POLICIES, FACTCHECKER_TOOL, FACTCHECKER_VERSION, buildFactcheckerSearchPlan, exportFactcheckerSourceRows, verifyFactcheckerPlan } from "../src/factchecker-tool.js";

const outDir = new URL("../exports/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const samplePlan = buildFactcheckerSearchPlan({
  phrase: "I have a dream",
  person: "Martin Luther King Jr.",
  count: 64
});
const verification = verifyFactcheckerPlan(samplePlan);
const rows = exportFactcheckerSourceRows();

const summary = {
  version: FACTCHECKER_VERSION,
  toolId: FACTCHECKER_TOOL.id,
  maxCells: FACTCHECKER_MAX_CELLS,
  sourcePolicyCount: FACTCHECKER_SOURCE_POLICIES.length,
  sourceDomainCount: rows.length,
  sampleCellCount: samplePlan.clippingCells.length,
  verification
};

const csv = [
  "policy_id,name,domain,source_type,default_trust,embed_policy,reason",
  ...rows.map((row) => [
    row.policyId,
    row.name,
    row.domain,
    row.sourceType,
    row.defaultTrust,
    row.embedPolicy,
    row.reason
  ].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
].join("\n");

writeFileSync(new URL("factchecker-source-policies-summary.json", outDir), `${JSON.stringify(summary, null, 2)}\n`);
writeFileSync(new URL("factchecker-source-policies.csv", outDir), `${csv}\n`);
console.log(`Exported ${rows.length} FactChecker source policy domains for ${FACTCHECKER_VERSION}.`);
