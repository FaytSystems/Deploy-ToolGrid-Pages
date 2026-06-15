# ToolGrid 2500 — RGB Motion Studio Foundation

This package extends the ToolGrid project operating system with a paid **RGB Motion Shape FX Studio** for image/video overlays, while preserving the paid Theme Studio, skeleton-tool routing, FactChecker, PG Webcam Explorer, COLAB planning, progress/ETA meters, and the 640 in-house compatibility suite.

## New in this build

- **RGB Motion Shape FX Studio** as a paid media tool.
- **Dog-Chasing-Tail** effect: a moving light ball with a faded tail following a chosen path.
- Shape presets: rounded rectangle, rectangle, circle, ellipse, triangle, diamond, hexagon, star, arrow, heart, and custom path.
- Separate effect regions: outer outline, inner outline, fill, outer glow, inner glow, and mask.
- Effects can be layered up to **64 layers** for 4x4 / nested 64 UI workflows.
- Export targets are modeled as preview-only, transparent PNG sequence, GIF overlay, WebM overlay, MP4 composite, and preset JSON.
- Prompt/skeleton layer now gets a generic **Visual Effect Compositor Skeleton** for broad image/video/path/shape effect tasks.

## Current runtime inventory

- 2,500 generated specific tools
- 640 in-house specific tools
- 1 PG Live Webcam Explorer tool
- 1 FactChecker Quote & Phrase Finder tool
- 1 Paid Profile Theme Studio tool
- 1 RGB Effect Generator tool
- 1 RGB Motion Shape FX Studio tool
- 3,145 generated generic skeleton tools
- 6,290 total runtime tools
- 34 skeleton function patterns
- 11 RGB motion shape presets
- 12 RGB motion effect types

## Important implementation note

The RGB Motion Studio includes a real browser-side SVG/CSS preview and a validated render-plan/export skeleton. Final high-resolution video compositing, long videos, object tracking, beat sync, and MP4 rendering should be wired to a backend renderer later.

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
npm run rgbmotion:export
npm run skeleton:export
npm start
```

Then open:

```text
http://localhost:4173
```

## Full files rewritten in this update

- `toolgrid-2500-starter/index.html`
- `toolgrid-2500-starter/package.json`
- `toolgrid-2500-starter/README.md`
- `toolgrid-2500-starter/TEST_RESULTS.txt`
- `toolgrid-2500-starter/src/main.js`
- `toolgrid-2500-starter/src/styles.css`
- `toolgrid-2500-starter/src/tool-engines.js`
- `toolgrid-2500-starter/src/skeleton-tools.js`
- `toolgrid-2500-starter/tests/tool-engines.test.mjs`

## New files added

- `toolgrid-2500-starter/src/rgb-motion-studio.js`
- `toolgrid-2500-starter/scripts/export-rgb-motion-studio.mjs`
- `toolgrid-2500-starter/exports/rgb-motion-studio-summary.json`
- `toolgrid-2500-starter/exports/rgb-motion-effects.csv`
