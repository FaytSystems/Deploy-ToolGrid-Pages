# ToolGrid 2500 — Demand-Ranked Project Foundation

ToolGrid 2500 is a browser-first multi-window tool workspace with:

- 2,500 native tool records.
- AI mode and manual mode.
- Prompt compiler that turns user goals into generalized search terms, task parts, capabilities, and compatible tool chains.
- 10,000 curated project templates.
- 500,000,000 deterministic virtual project blueprints from 1 UI node to 64 nested UI nodes.
- Demand-ranking engine that scores the 500,000,000 virtual projects by likely user need.
- Tool-usage projection that ranks every tool from most-used to least-used.
- Project bus for queued waterfall, simultaneous, and nested workflows.

## Demand-ranking model

The 500,000,000 projects are not exported as a giant static table. They are represented by a deterministic coordinate system:

```text
100 fields × 125 tool groups × 64 UI sizes × 625 variants = 500,000,000 projects
```

The demand ranker scores projects using:

```text
field demand + tool-group demand + UI-size demand + variant demand
```

The model intentionally favors workflows likely to be repeated by real users:

- Business operations
- Marketing and SEO
- Content creation
- Sales and email
- Data/reporting
- Calculators/converters
- Developer/security utilities
- Scheduling and project operations
- Niche specialist tools when the field calls for them, such as gardening, cooking, farm, or restaurant workflows

This is a deterministic projection, not live user analytics. Once real usage exists, replace or blend these weights with real event data.

## Generated ranking exports

The `exports/` folder contains reviewable demand outputs:

```text
exports/top-demand-projects.csv
exports/tool-usage-ranking-most-to-least.csv
exports/category-demand-summary.csv
exports/demand-ranking-summary.json
```

The generated runtime data is also available in:

```text
src/demand-rankings.js
```

## Full files rewritten in this version

```text
index.html
package.json
README.md
TEST_RESULTS.txt
src/main.js
src/styles.css
src/project-demand-ranker.js
src/demand-rankings.js
tests/tool-engines.test.mjs
```

## New files added in this version

```text
scripts/export-demand-rankings.mjs
exports/top-demand-projects.csv
exports/tool-usage-ranking-most-to-least.csv
exports/category-demand-summary.csv
exports/demand-ranking-summary.json
```

## Run locally

```bash
cd toolgrid-2500-starter
npm install
npm run check
npm test
npm start
```

Open:

```text
http://localhost:4173
```

## Regenerate the demand rankings

```bash
npm run rank:demand
```

Then refresh the exports if needed:

```bash
node scripts/export-demand-rankings.mjs
```

## Test status

```text
All ToolGrid 2500 demand-ranked project foundation tests passed.
```
