# ToolGrid 2500 — Paid Multitask Waterfall Foundation

ToolGrid 2500 is a browser-first project workbench with 2,500 native tool records, a 500,010,000-project idea universe, prompt/file translation, free manual tool selection, paid based-on-project selection, animated waterfall queues, pause/repair controls, profile themes, sound settings, and dependency-aware paid multitask scheduling.

## What this version adds

This build focuses on how tools work together once they are placed into a project waterfall.

The waterfall queue now understands three states:

- **Ready** — the task can run from the project prompt, uploaded file summary, or shared payload.
- **Wait** — the task needs output from another task before it is safe to run.
- **Parallel** — a paid-user task can run in the same batch as another ready task.

Paid users can turn on **Paid multitask**. When enabled, the scheduler checks the current queue and device capability before running batches. It only runs multiple tools at the same time when the project graph shows those tools do not depend on each other.

Free users still get the normal safe waterfall.

## Core flow

```text
Prompt entered
↓
Files uploaded and confirmed
↓
File translator suggests tools
↓
Tool selector opens
├── CHOOSE OWN — free/manual mode
└── BASED ON PROJECT — paid/guided mode
↓
Guided project creates waterfall queue
↓
Scheduler marks tasks as ready, waiting, single, or parallel
↓
Start runs either normal waterfall or paid multitask batches
↓
Pause allows task repair notes and queue correction
↓
Project artifacts and events are saved to the project bus
```

## Paid multitask behavior

Paid multitask is not just “run everything at once.” It is dependency-aware.

A lower queue task can run early when:

- it can use the project prompt directly,
- it can use the uploaded file summary directly,
- it does not need output from a previous tool,
- it is not a nested sub-tool that must wait for the parent tool,
- the queue has 64 or fewer tasks,
- the system reports enough concurrency to safely batch work.

A lower queue task waits when:

- it is a nested tool inside the same panel,
- it needs output from an earlier compatible tool,
- the scheduler cannot prove that it can run from project input safely,
- the queue is too large and should be split into smaller project runs.

## Important browser note

This foundation runs local JavaScript tools in the browser. It can safely batch lightweight local tool engines. Heavy tools such as large PDF parsing, OCR, video conversion, image processing, or API-backed AI tools should later run through workers/server queues with stricter resource limits.

## Full files rewritten

```text
toolgrid-2500-starter/index.html
toolgrid-2500-starter/package.json
toolgrid-2500-starter/README.md
toolgrid-2500-starter/TEST_RESULTS.txt
toolgrid-2500-starter/src/main.js
toolgrid-2500-starter/src/project-foundation.js
toolgrid-2500-starter/src/styles.css
toolgrid-2500-starter/tests/tool-engines.test.mjs
```

## New file added

```text
toolgrid-2500-starter/src/waterfall-scheduler.js
```

## Run locally

```bash
cd toolgrid-2500-starter
npm install
npm run check
npm test
npm start
```

Then open:

```text
http://localhost:4173
```

## Validation

Validated with:

```bash
npm run check
npm test
```

The test suite verifies:

- 2,500 tools load correctly.
- Every tool has a schema and working default output.
- 10,000 curated templates remain valid.
- 500,000,000 virtual project IDs remain addressable.
- Prompt compiler still breaks prompts into generalized search terms.
- File translator still routes uploaded file types.
- Free/paid selector boundaries work.
- Waterfall repair remains available.
- Paid multitask scheduler builds a dependency graph.
- Paid multitask access is denied for free users.
- Scheduler batches are created safely from queue dependencies.
