# ToolGrid 2500 — Audio Visualizer Studio Foundation

This package extends the ToolGrid project operating system with a functional **Audio Visualizer Studio** that follows the generated product mockup: audio input, audio URL, prompt-aware visualizer planning, up to 64 selectable visualizer variations, a live neon/3D-style preview, workflow queue, shape library, lighting library, effects stack, export-plan buttons, and toolbox sync for downstream tools.

## What is included

- 2,500 generated specific tools
- 720 in-house specific tools
- 1 PG Live Webcam Explorer tool
- 1 FactChecker Quote & Phrase Finder tool
- 1 Paid Profile Theme Studio tool
- 1 RGB Effect Generator tool
- 1 RGB Motion Shape FX Studio tool
- 1 Audio Visualizer Studio tool
- 3 Price Comparison / Shopping tools
- 3,229 generated skeleton tools
- 6,458 total runtime tools
- 36 skeleton function patterns
- 64-cell audio visualizer variation grid
- 8-step audio visualizer waterfall queue
- Shared toolbox libraries for shapes, materials, lighting, effects, and presets
- Export-plan foundation for GIF loops, short clips, and paid render-boost durations

## New Audio Visualizer Studio abilities

- Upload/paste audio URL planning interface
- Prompt/style field for mood, genre, BPM, and downstream intent
- Generate up to 64 visualizer variations
- Select a favorite variation cell
- Make more like the selected style direction
- Shape library with sculptural, path, circular, organic, terrain, geometric, fluid, camera, equalizer, and custom path concepts
- Lighting library with neon rim, soft box, spot light, laser grid, volumetric beam, aurora wash, shadow field, and animated light-source path
- Effect stack with reactive crystal peaks, dog-chasing-tail light orbit, smart shadow pass, rim highlights, spectrum pulse, plasma fill, beat strobe, particles, wireframe, inner glow, camera orbit, and volumetric haze
- Waterfall queue: Audio Analysis → Shape Selection → Visualizer Generation → Lighting Pass → Shadow Pass → Variation Batch → Export Prep → Finalize & Store
- Workspace fill mode that loads Audio Visualizer Studio nodes into the current grid
- Skeleton version generated so the prompt engine can also choose a generic audio-visualizer skeleton

## Important implementation note

The current build provides a browser-side functional foundation: UI, SVG/CSS visual preview, variation planner, prompt-aware settings, waterfall queue metadata, tool runtime, tests, and exports. Final production-grade high-resolution GIF/MP4 rendering, beat-accurate audio analysis, long clip rendering, and advanced 3D compositing should be connected to a backend renderer.

## New and rewritten full files

- `toolgrid-2500-starter/index.html`
- `toolgrid-2500-starter/package.json`
- `toolgrid-2500-starter/README.md`
- `toolgrid-2500-starter/TEST_RESULTS.txt`
- `toolgrid-2500-starter/src/main.js`
- `toolgrid-2500-starter/src/styles.css`
- `toolgrid-2500-starter/src/tool-engines.js`
- `toolgrid-2500-starter/src/audio-visualizer-studio.js`
- `toolgrid-2500-starter/scripts/export-audio-visualizer-studio.mjs`
- `toolgrid-2500-starter/scripts/export-skeleton-tools.mjs`
- `toolgrid-2500-starter/tests/tool-engines.test.mjs`
- `toolgrid-2500-starter/assets/audio-visualizer/audio-visualizer-reference.png`

## Regenerated exports

- `toolgrid-2500-starter/exports/audio-visualizer-studio-summary.json`
- `toolgrid-2500-starter/exports/audio-visualizer-variations.csv`
- `toolgrid-2500-starter/exports/inhouse-tool-compatibility-summary.json`
- `toolgrid-2500-starter/exports/inhouse-tool-compatibility-links.csv`
- `toolgrid-2500-starter/exports/inhouse-tool-search-tags.csv`
- `toolgrid-2500-starter/exports/skeleton-tool-summary.json`
- `toolgrid-2500-starter/exports/skeleton-tool-sample.csv`

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
npm run audiovisualizer:export
npm run price:export
npm run skeleton:export
npm start
```

Then open:

```text
http://localhost:4173
```
