# ToolGrid 2500 — Subscription Waterfall Foundation

ToolGrid 2500 is a browser-first multi-tool project workspace. It includes 2,500 native tools, 10,000 curated project templates, 500,000,000 deterministic virtual project blueprints, prompt compilation, file-upload translation, demand-ranked project intelligence, and a project bus that lets tool UIs pass outputs through waterfall queues.

This build adds the subscription-oriented tool selector and animated waterfall foundation.

## New in this version

- Tool selector is now a pop-up modal UI.
- Selector has two tabs:
  - `CHOOSE OWN` — free/manual tool selection.
  - `BASED ON PROJECT` — paid guided selector.
- Based-on-project mode analyzes the prompt and uploaded files before choosing tools.
- If the prompt is too broad, the selector asks clarifying questions before generating the project.
- If the workflow is too complex, the project strategy can recommend splitting into multiple project runs.
- Once the prompt is finalized, the app creates a waterfall side panel.
- The waterfall panel shows each task in the queue and animates task states.
- One `Start` button can run the project through the full queue.
- A `Pause` button allows inspection and repair before continuing.
- While paused, users can select a task, explain what went wrong, and save a repair note back into the task prompt.
- User profile includes `topics / categories / subjects enjoyed`.
- Profile topics generate a fresh session theme animation so the site feels different on return visits.
- Sound preferences include mode, category, subcategory, and specific sound/randomized sound selection.
- The sound library includes hundreds of metadata sound options across bells, voiceover, memes, animals, nature, arcade, office, zen, sci-fi, and kitchen categories.

## Important browser note

The current sound implementation uses browser-generated tones as a local foundation. Browsers require user interaction before audio can play, and a normal web page cannot truly override other apps, games, operating-system volume, or device-level focus rules. Future versions can add uploaded/licensed sound files, Web Notifications, installed PWA behavior, or native wrappers for stronger background alerts.

## Full files rewritten

```text
toolgrid-2500-starter/index.html
toolgrid-2500-starter/package.json
toolgrid-2500-starter/README.md
toolgrid-2500-starter/TEST_RESULTS.txt
toolgrid-2500-starter/src/main.js
toolgrid-2500-starter/src/styles.css
toolgrid-2500-starter/src/project-foundation.js
toolgrid-2500-starter/tests/tool-engines.test.mjs
```

## New file added

```text
toolgrid-2500-starter/src/guided-project-orchestrator.js
```

## Unchanged major generated data files

```text
toolgrid-2500-starter/src/tool-catalog.js
toolgrid-2500-starter/src/tool-engines.js
toolgrid-2500-starter/src/project-templates.js
toolgrid-2500-starter/src/project-megagenerator.js
toolgrid-2500-starter/src/prompt-compiler.js
toolgrid-2500-starter/src/file-translator.js
toolgrid-2500-starter/src/project-demand-ranker.js
toolgrid-2500-starter/src/demand-rankings.js
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

## User flow

```text
Prompt entered
↓
Optional file upload
↓
All files added? Yes / No
↓
Tool selector pop-up
├── CHOOSE OWN — free manual selection
└── BASED ON PROJECT — paid guided selector
    ↓
    Analyze prompt + files
    ↓
    Ask clarifying questions when needed
    ↓
    Create guided project path
    ↓
    Build waterfall side panel
    ↓
    Start once
    ↓
    Tasks run in order, publish artifacts, animate status
    ↓
    Pause + repair any task if the wrong tool/path was chosen
    ↓
    Complete project
```

## Validation

The test suite verifies:

- 2,500 tool records are valid.
- Every tool engine returns usable output with default inputs.
- Prompt compiler still handles the mushroom-farm workflow.
- File translator still routes uploaded CSV/markdown files into suggested tools.
- 10,000 curated project templates remain valid.
- 500,000,000 virtual project generator remains addressable from 1 UI to 64 UI nodes.
- Demand-ranked project/tool intelligence still ranks all 2,500 tools.
- Free/paid tool-selector access flags work.
- Vague prompts trigger clarifying questions.
- Clarifying answers become part of the project prompt.
- Waterfall queues are generated from AI plans.
- Paused waterfall tasks can be revised.
- Profile topics generate session themes.
- Sound library supports category/subcategory randomization.
