# ToolGrid 2500 — Price Comparison + Batch 9 Skeleton Foundation

This package extends the ToolGrid project operating system with **three shopping/price intelligence tools**, an additional **80 specific in-house tools**, regenerated skeleton versions for every current tool, and preserved support for RGB Motion Studio, Paid Theme Studio, FactChecker, PG Webcam Explorer, COLAB, progress/ETA, and waterfall orchestration.

## What is included

- 2,500 generated specific tools
- 720 in-house specific tools
- 1 PG Live Webcam Explorer tool
- 1 FactChecker Quote & Phrase Finder tool
- 1 Paid Profile Theme Studio tool
- 1 RGB Effect Generator tool
- 1 RGB Motion Shape FX Studio tool
- 3 Price Comparison / Shopping tools
- 3,228 generated skeleton tools
- 6,456 total runtime tools
- 35 skeleton function patterns
- 64-cell price comparison grid planning
- Exact-match, variation, sale-finder, and budget-match shopping modes
- Source-policy safety model for marketplace/search/deal/cheap-option lanes

## New price tools

- `Price Comparison 64-Cell Grid`
- `On Sale Deal Finder Grid`
- `Budget Product Match Grid`

These tools prepare source-safe search cells. They do not invent prices. Production live pricing should be connected to official APIs, approved merchant feeds, product advertising APIs, structured-data extraction, or permitted backend fetch rules.

## New Batch 9 in-house categories

- In-House Price Intelligence
- In-House Shopping Deals
- In-House Wholesale Sourcing
- In-House Apparel Variations
- In-House Electronics Comparison
- In-House Home Goods Comparison
- In-House Marketplace Pricing
- In-House Coupon & Promo
- In-House Vendor Quotes
- In-House Purchase Decision

## New and rewritten full files

- `toolgrid-2500-starter/index.html`
- `toolgrid-2500-starter/package.json`
- `toolgrid-2500-starter/README.md`
- `toolgrid-2500-starter/TEST_RESULTS.txt`
- `toolgrid-2500-starter/src/main.js`
- `toolgrid-2500-starter/src/styles.css`
- `toolgrid-2500-starter/src/tool-engines.js`
- `toolgrid-2500-starter/src/in-house-tools.js`
- `toolgrid-2500-starter/src/skeleton-tools.js`
- `toolgrid-2500-starter/src/price-comparison-tool.js`
- `toolgrid-2500-starter/scripts/export-price-comparison-sources.mjs`
- `toolgrid-2500-starter/scripts/export-skeleton-tools.mjs`
- `toolgrid-2500-starter/tests/tool-engines.test.mjs`

## Regenerated exports

- `toolgrid-2500-starter/exports/inhouse-tool-compatibility-summary.json`
- `toolgrid-2500-starter/exports/inhouse-tool-compatibility-links.csv`
- `toolgrid-2500-starter/exports/inhouse-tool-search-tags.csv`
- `toolgrid-2500-starter/exports/price-comparison-summary.json`
- `toolgrid-2500-starter/exports/price-comparison-source-policies.csv`
- `toolgrid-2500-starter/exports/price-comparison-demo-cells.csv`
- `toolgrid-2500-starter/exports/skeleton-tool-summary.json`
- `toolgrid-2500-starter/exports/skeleton-tool-sample.csv`

## Run locally

```bash
cd toolgrid-2500-starter
npm install
npm run check
npm test
npm run compat:inhouse
npm run price:export
npm run skeleton:export
npm start
```

Then open:

```text
http://localhost:4173
```
