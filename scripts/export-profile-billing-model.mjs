import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  ALA_CREDIT_PACKAGES,
  MONTHLY_CREDIT_PACKAGES,
  PROFILE_BILLING_VERSION,
  PROFILE_TIER_DEFINITIONS,
  buildEnterpriseInvestorRows,
  buildRuntimeCostCoverageSummary,
  buildStripeMeteringPlan,
  buildSubscriptionPricingSummary,
  getUnlockedProfileFeatures
} from "../src/profile-billing-system.js";

const outputDir = path.resolve("exports", "pricing");

function csvCell(value) {
  if (Array.isArray(value)) return csvCell(value.join("; "));
  if (value && typeof value === "object") return csvCell(JSON.stringify(value));
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function toCsv(rows, columns) {
  return [
    columns.map(csvCell).join(","),
    ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(","))
  ].join("\n");
}

async function writeJson(fileName, value) {
  const filePath = path.join(outputDir, fileName);
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  return filePath;
}

async function writeCsv(fileName, rows, columns) {
  const filePath = path.join(outputDir, fileName);
  await writeFile(filePath, `${toCsv(rows, columns)}\n`, "utf8");
  return filePath;
}

await mkdir(outputDir, { recursive: true });

const subscriptionSummary = buildSubscriptionPricingSummary();
const investorRows = buildEnterpriseInvestorRows();
const stripePlan = buildStripeMeteringPlan();
const runtimeCoverage = buildRuntimeCostCoverageSummary();

const tierRows = PROFILE_TIER_DEFINITIONS.map((tier) => ({
  tier_id: tier.id,
  tier_label: tier.label,
  billing_mode: tier.billingMode,
  monthly_price_usd: tier.monthlyPriceUsd ?? "custom",
  included_credits: tier.includedCredits,
  features: getUnlockedProfileFeatures(tier.id),
  description: tier.description
}));

const packageRows = [
  ...ALA_CREDIT_PACKAGES.map((pack) => ({
    package_id: pack.id,
    package_type: "ala-carte",
    label: pack.label,
    credits: pack.credits,
    price_usd: pack.retailPriceUsd,
    cloudflare_credit_value_usd: pack.cloudflareCreditValueUsd,
    overhead_recovery_usd: pack.overheadRecoveryUsd,
    package_cost_basis_usd: pack.packageCostBasisUsd,
    gross_profit_usd: Number((pack.retailPriceUsd - pack.packageCostBasisUsd).toFixed(4)),
    rule: "credits never expire; usage burn is Cloudflare-only"
  })),
  ...MONTHLY_CREDIT_PACKAGES.map((pack) => ({
    package_id: pack.id,
    package_type: "monthly",
    label: pack.label,
    credits: pack.includedCredits,
    price_usd: pack.monthlyPriceUsd,
    cloudflare_credit_value_usd: pack.cloudflareCreditValueUsd,
    overhead_recovery_usd: pack.overheadRecoveryUsd,
    package_cost_basis_usd: pack.packageCostBasisUsd,
    gross_profit_usd: pack.estimatedGrossProfitUsd,
    rule: pack.rule
  }))
];

const files = [];
files.push(await writeJson("profile-billing-model-summary.json", {
  ...subscriptionSummary,
  runtimeCostCoverage: runtimeCoverage
}));
files.push(await writeJson("profile-billing-stripe-metering-plan.json", stripePlan));
files.push(await writeCsv("profile-billing-subscription-tiers.csv", tierRows, [
  "tier_id",
  "tier_label",
  "billing_mode",
  "monthly_price_usd",
  "included_credits",
  "features",
  "description"
]));
files.push(await writeCsv("profile-billing-credit-packages.csv", packageRows, [
  "package_id",
  "package_type",
  "label",
  "credits",
  "price_usd",
  "cloudflare_credit_value_usd",
  "overhead_recovery_usd",
  "package_cost_basis_usd",
  "gross_profit_usd",
  "rule"
]));
files.push(await writeCsv("profile-billing-enterprise-investor-sheet.csv", investorRows, [
  "employees",
  "projectsPerEmployeeMonthly",
  "monthlyProjects",
  "averageProjectCredits",
  "discountRate",
  "cloudflareUsageUsd",
  "overheadRecoveryUsd",
  "costBasisUsd",
  "profitBeforeDiscountUsd",
  "profitDiscountUsd",
  "projectedInvoiceUsd",
  "projectedGrossProfitUsd",
  "guardrail"
]));
files.push(await writeJson("profile-billing-runtime-cost-coverage.json", runtimeCoverage));

console.log(`Profile billing model exported (${PROFILE_BILLING_VERSION})`);
for (const file of files) {
  console.log(file);
}
console.log(`Tier rows: ${tierRows.length}`);
console.log(`Credit package rows: ${packageRows.length}`);
console.log(`Enterprise investor rows: ${investorRows.length}`);
console.log(`Runtime pricing coverage: ${runtimeCoverage.totalRuntimeRecordsPriced.toLocaleString()} records`);
