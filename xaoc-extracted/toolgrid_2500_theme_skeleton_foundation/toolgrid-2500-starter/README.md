# ToolGrid 2500 — Theme Studio + Generic Skeleton Tools Foundation

This build adds two major paid/product architecture upgrades:

1. **Paid Profile Theme Studio + RGB Effect Generator**
2. **Generic Skeleton Tool Layer for every current usable tool**

The original specific tools remain in the system. The new skeleton tools are generated as separate tool records with a `SKELETON` system label, `skeleton_tool` engine, base-tool references, input/output contracts, dense tags, and prompt-engine searchability.

## Paid Theme Studio

The uploaded sci-fi UI references are now represented as functional paid theme/profile tools and template assets.

Included paid profile features:

- Premade theme templates
- Uploaded reference template thumbnails
- Background color
- Box color
- Cell color
- Active cell color
- Glow/RGB color
- RGB effects
- Randomize theme button
- Save to profile button
- Random theme each sign-in toggle
- Alternate colors between logons toggle
- Live 1 parent box / 4 cell preview
- Workspace panel effect classes

Supported RGB effects:

- solid
- strobe
- flash
- rotating-outline
- pulse
- intermittent-color
- chase
- sweep
- spectrum-shift
- breathing-glow

## Generic Skeleton Tool Layer

Every current runtime tool is mirrored into a reusable skeleton form. This allows the prompt engine to choose between:

- A **specific tool** when the task is clear and exact
- A **skeleton tool** when the task is broad, reusable, generic, cross-category, or needs a framework/pattern

Example:

- Specific: `FactChecker Quote & Phrase Finder`
- Skeleton: `Skeleton: Evidence Clipping Grid Skeleton — FactChecker Quote & Phrase Finder`

Skeleton tools are useful for broad tasks such as:

- search/find/excerpt grids
- data cleanup patterns
- quote evidence clipping
- table conversion workflows
- generalized calculators
- theme/effect configuration
- report/document generators
- multi-output UI cells
- project waterfall templates

## New files

- `src/theme-system.js`
- `src/skeleton-tools.js`
- `scripts/export-theme-system.mjs`
- `scripts/export-skeleton-tools.mjs`
- `assets/themes/theme-studio-reference.png`
- `assets/themes/theme-workspace-reference.png`
- `exports/theme-system-summary.json`
- `exports/skeleton-tool-summary.json`
- `exports/skeleton-tool-sample.csv`

## Full files rewritten

- `index.html`
- `package.json`
- `README.md`
- `TEST_RESULTS.txt`
- `src/main.js`
- `src/styles.css`
- `src/tool-engines.js`
- `src/project-foundation.js`
- `tests/tool-engines.test.mjs`

## Run locally

```bash
cd toolgrid-2500-starter
npm install
npm run check
npm test
npm run compat:inhouse
npm run webcam:export
npm run factchecker:export
npm run theme:export
npm run skeleton:export
npm start
```

Then open:

```text
http://localhost:4173
```

## Important implementation notes

The Theme Studio is a front-end foundation. It applies CSS variables and visual effect classes in-browser. A real paid subscription launch still needs backend user accounts, subscription verification, and server-side profile storage.

The skeleton layer does not delete or replace original tools. It adds a second generalized layer so the prompt engine can route broad tasks to reusable skeletons and exact tasks to specific tools.
