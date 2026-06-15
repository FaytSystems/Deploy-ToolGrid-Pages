# ToolGrid 2500 — AI Project Foundation

ToolGrid 2500 is a searchable multi-window workspace for native browser tools. This version adds the **PROJECT foundation** the UI needs before a real hosted AI backend is added:

- A named main container.
- Multiple projects inside that container.
- AI mode and manual mode.
- Prompt-based AI project generation.
- Compatible tool selection.
- Up to 16 panels in a 1×1 through 4×4 grid.
- Nested tool UIs inside each panel.
- Shared project input/payload.
- Project artifacts.
- Project event stream.
- Compatible panel links.
- Simultaneous workflows.
- Queued waterfall workflows.
- Manual auto-waterfall after a tool publishes output.
- Animated AI workflow execution.

The current AI mode is a deterministic local planner. It does not call a paid AI API yet. That is intentional for the foundation phase: the product should work offline and prove the UI, project bus, compatibility graph, and animation loop before external model costs are added.

## Files

```text
toolgrid-2500-starter/
  index.html
  package.json
  dev-server.mjs
  README.md
  TEST_RESULTS.txt
  src/
    main.js
    styles.css
    tool-catalog.js
    tool-engines.js
    project-foundation.js
  tests/
    tool-engines.test.mjs
```

## Full files rewritten in this update

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

Unchanged generated catalog:

```text
toolgrid-2500-starter/src/tool-catalog.js
```

Unchanged native engine file:

```text
toolgrid-2500-starter/src/tool-engines.js
```

## Run locally

```bash
npm install
npm test
npm start
```

Open:

```text
http://localhost:4173
```

## AI mode

AI mode turns a user prompt into a project.

Example prompt:

```text
Build me a workflow to turn a blog idea into an SEO-ready post with title, meta description, slug, keyword density, and campaign URL tools.
```

What happens:

1. The prompt is classified into an intent profile.
2. Compatible native tools are scored and selected.
3. A grid layout is chosen automatically.
4. Tool panels are filled as project nodes.
5. Each tool node receives a planned step status.
6. The user can click **Animate + run**.
7. Panels visually move through running, done, or error states.
8. Outputs are saved as project artifacts.
9. Project events explain what happened.

Current local intent profiles:

```text
Content + SEO project
Data cleanup project
Developer utility project
Design + color project
Calculator + finance project
Gardening project
Cooking project
Time planning project
```

## Manual mode

Manual mode lets users pick tools themselves.

The user can:

1. Search for tools.
2. Open tools into any panel.
3. Duplicate the same tool across multiple panels.
4. Assign each panel to a project.
5. Paste data into one tool.
6. Click **Run + publish**.
7. Let compatible downstream panels continue automatically when manual auto-waterfall is enabled.

This is the manual version of the same project foundation: the user chooses the tools, but the project bus still lets tools pass outputs to compatible downstream tools.

## Project bus model

Every project contains:

```text
id
name
mode
prompt
input
plan
artifacts
events
workflows
```

Every panel can become a project tool node:

```text
toolId
projectId
openedAt
role
aiStepId
aiStepStatus
```

Every tool has inferred project I/O:

```text
accepts: text, json, csv, url, color, number, etc.
output: text, json, csv, url, color, number, markdown, etc.
```

Tool compatibility is decided by whether one tool's output can feed the next tool's accepted input types.

## Animation model

The AI animation loop runs the plan step-by-step:

```text
planned → running → done
planned → running → error
```

When a panel is running, it receives a scanning visual effect. When complete, it glows green. When blocked or failed, it turns into an error state.

## Test coverage

The test suite checks:

- The catalog contains exactly 2,500 tools.
- Every tool has a valid engine.
- Every tool has a schema.
- Every tool can run with default inputs.
- Native engines return non-empty string output.
- Project I/O exists for every tool.
- Compatible links are detected.
- Simultaneous project workflows run.
- Queued waterfall workflows run.
- Manual downstream waterfall works from a published panel.
- AI project plans are generated from prompts.
- AI plan entries can be converted into panel entries.

## Current limitation

The AI project generator is currently local and rules-based. It proves the product behavior without a backend. A later production version can replace or enhance `generateAiProjectPlan()` with a hosted AI planner while keeping the same project bus, panel, artifact, and animation structure.
