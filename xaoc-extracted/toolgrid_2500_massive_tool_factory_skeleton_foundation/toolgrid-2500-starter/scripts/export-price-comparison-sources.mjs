import { mkdir, writeFile } from "node:fs/promises";
import {
  PRICE_COMPARISON_VERSION,
  PRICE_COMPARISON_MAX_CELLS,
  PRICE_SOURCE_POLICIES,
  PRICE_COMPARISON_SOURCE_WARNINGS,
  PRICE_TOOLS,
  buildPriceComparisonPlan,
  verifyPriceComparisonConfig
} from "../src/price-comparison-tool.js";

const outDir = new URL("../exports/", import.meta.url);
await mkdir(outDir, { recursive: true });
const verification = verifyPriceComparisonConfig();
if (!verification.ok) throw new Error(`Price comparison config failed:\n${verification.errors.join("\n")}`);
const demoPlan = buildPriceComparisonPlan({ productName: "wireless earbuds", count: 64, includeVariations: "true", mode: "budget-match", maxPrice: 40 });
const csvEscape = (value) => {
  const text = value === undefined || value === null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};
const sourceRows = [
  ["policyId", "name", "domains", "sourceType", "accessMode", "supportsExact", "supportsVariations", "trust", "reason"],
  ...PRICE_SOURCE_POLICIES.map((policy) => [policy.id, policy.name, policy.domains.join("|"), policy.sourceType, policy.accessMode, policy.supportsExact, policy.supportsVariations, policy.trust, policy.reason])
];
const cellRows = [
  ["cell", "provider", "policyId", "matchType", "accessMode", "query", "url"],
  ...demoPlan.cells.map((cell) => [cell.cell, cell.provider, cell.providerPolicyId, cell.matchType, cell.accessMode, cell.query, cell.url])
];
await writeFile(new URL("price-comparison-summary.json", outDir), JSON.stringify({
  generatedAt: new Date().toISOString(),
  version: PRICE_COMPARISON_VERSION,
  maxCells: PRICE_COMPARISON_MAX_CELLS,
  toolCount: PRICE_TOOLS.length,
  sourcePolicyCount: PRICE_SOURCE_POLICIES.length,
  warningCount: PRICE_COMPARISON_SOURCE_WARNINGS.length,
  verification,
  demoPlan
}, null, 2));
await writeFile(new URL("price-comparison-source-policies.csv", outDir), `${sourceRows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`);
await writeFile(new URL("price-comparison-demo-cells.csv", outDir), `${cellRows.map((row) => row.map(csvEscape).join(",")).join("\n")}\n`);
console.log(`${PRICE_TOOLS.length} price comparison tools · ${PRICE_SOURCE_POLICIES.length} source policies · ${demoPlan.cells.length}/${PRICE_COMPARISON_MAX_CELLS} demo cells.`);
