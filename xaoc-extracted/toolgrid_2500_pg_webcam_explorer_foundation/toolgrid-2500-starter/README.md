# ToolGrid 2500 — PG Live Webcam Explorer Foundation

This build extends the ToolGrid Project Operating System, COLAB, paid multitask waterfall, progress/ETA UI, and 640-tool in-house compatibility suite with a new **PG Live Webcam Explorer**.

The webcam tool is designed for safe scenic/public viewing only:

```text
Nature cams
Animal cams
National park cams
City skyline cams
Beach / surf / coast cams
Forest / desert / rainforest / mountain cams
Weather and public-land cams
```

Adult/nudity/private-surveillance content is intentionally blocked from the catalog policy.

## What this update adds

- Main in-app **PG Live Webcam Tool** panel
- New native tool: `PG Live Webcam Explorer`
- Searchable safe webcam catalog
- Provider/embed-policy metadata
- Provider-page fallback cards when live embedding is blocked or licensed
- Output count selector from 1 to 64
- Workspace-fill button for webcam wall workflows
- Webcam search by category, provider, place, and scene type
- Webcam catalog verification tests
- Webcam catalog CSV/JSON exports

## Why embed policy matters

Not all public webcam websites allow their live video to be embedded inside another website. The webcam tool handles this safely:

```text
Allowed official embed
└── show inline iframe/card when provider permits it

Blocked/licensed/host-only embeds
└── show a clean provider card with an official-source link
```

This avoids scraping direct video streams or violating webcam provider rules.

## Current provider/source policy seeds

- Explore.org — nature and animal cameras
- EarthCam — tourism, skyline, beach, destination cameras
- SkylineWebcams — worldwide scenic webcams; live embeds are generally host-only
- Webcamtaxi — worldwide travel and HD webcam directory
- National Park Service — public lands, wildlife, parks, geysers, and air-quality cams
- Live Beaches — U.S. and Caribbean beach/surf webcams
- YouTube Live — official live channels when owners allow embedding

## Current webcam catalog status

```text
61 PG webcam records
7 provider policies
64 maximum requested UI outputs
0 direct embeds in seed catalog until provider-approved embed URLs are added
61 provider-page/link-out cards
```

The tool is already built to display embeddable streams when an approved `embedUrl` is added to a catalog record. Until then, it displays safe official-source cards.

## Full files rewritten

- `toolgrid-2500-starter/index.html`
- `toolgrid-2500-starter/package.json`
- `toolgrid-2500-starter/README.md`
- `toolgrid-2500-starter/TEST_RESULTS.txt`
- `toolgrid-2500-starter/src/main.js`
- `toolgrid-2500-starter/src/styles.css`
- `toolgrid-2500-starter/src/project-foundation.js`
- `toolgrid-2500-starter/src/tool-engines.js`
- `toolgrid-2500-starter/tests/tool-engines.test.mjs`

## New files added

- `toolgrid-2500-starter/src/webcam-explorer.js`
- `toolgrid-2500-starter/scripts/export-webcam-catalog.mjs`
- `toolgrid-2500-starter/exports/webcam-catalog-summary.json`
- `toolgrid-2500-starter/exports/webcam-catalog.csv`

## Existing major foundations retained

- 2,500 generated native tool catalog
- 640 in-house native tools
- In-house compatibility generator
- Dense search tags and tool contracts
- 10,000 curated project idea templates
- 500,000,000 deterministic virtual project blueprints
- Prompt compiler
- File upload translator
- Tool selector modal with free/paid tabs
- Guided waterfall runner
- Paid multitask scheduler
- Project operating system foundation
- COLAB cloud/invite sharing foundation
- Progress and ETA meters
- Theme and sound personalization foundation

## Run

```bash
cd toolgrid-2500-starter
npm install
npm run check
npm test
npm run compat:inhouse
npm run webcam:export
npm start
```

Open:

```text
http://localhost:4173
```

## Production upgrade path

To turn provider cards into real inline streams, add only provider-approved `embedUrl` values or official API/player integrations. For high-volume webcam walls, add backend/provider rate handling, lazy loading, per-provider throttles, and user controls for muting/pausing hidden streams.
