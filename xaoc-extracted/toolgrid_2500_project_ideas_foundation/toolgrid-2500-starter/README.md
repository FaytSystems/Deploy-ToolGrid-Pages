# ToolGrid 2500 — Project Idea Foundation

ToolGrid 2500 is a searchable multi-window workspace for native browser tools. This version adds a large project intelligence layer on top of the existing AI/manual project bus.

It now includes:

- 2,500 native tool records.
- 125 reusable tool groups.
- 10,000 searchable project ideas across 80 business and productivity fields.
- Project templates ranging from compact 2-tool workflows to nested 64-tool workflows.
- AI mode that selects a matching project template from the 10,000 idea library.
- Manual mode for choosing tools directly.
- Up to 16 outer panels in a 1×1 through 4×4 grid.
- Up to 4 nested tool UIs inside each outer panel.
- 64-tool project templates modeled as 4×4 outer panels × 4 nested tools per panel.
- Shared project input/payload.
- Project artifacts and event stream.
- Compatible panel links.
- Simultaneous, queued, and nested waterfall workflows.
- Animated AI workflow execution.

The current AI mode is a deterministic local planner. It does not call a paid AI API yet. That is intentional for the foundation phase: the product should work offline and prove the UI, project bus, compatibility graph, template library, and animation loop before external model costs are added.

## Files

```text
toolgrid-2500-starter/
  index.html
  package.json
  dev-server.mjs
  README.md
  TEST_RESULTS.txt
  scripts/
    generate-project-ideas.mjs
  src/
    main.js
    styles.css
    tool-catalog.js
    tool-engines.js
    project-foundation.js
    project-templates.js
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

## New generated files added in this update

```text
toolgrid-2500-starter/scripts/generate-project-ideas.mjs
toolgrid-2500-starter/src/project-templates.js
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

## Regenerate the 10,000 project ideas

```bash
npm run generate:projects
npm test
```

The generator creates exactly 10,000 project templates from 80 fields × 125 business-function/outcome combinations.

## Project idea library

The project library contains:

```text
10,000 project ideas
125 reusable tool groups
80 business/productivity fields
```

Complexity distribution:

```text
micro-2-4: 2,666 templates
mid-8: 2,667 templates
standard-16: 2,667 templates
advanced-32: 1,000 templates
nested-64: 1,000 templates
```

A template can be small:

```text
1×1 outer UI
2–4 nested tools
compact-waterfall execution
```

Or large:

```text
4×4 outer UI
4 nested tools inside each panel
64 total tool nodes
nested-waterfall execution
```

## Tool groups

Tool groups are reusable chains, for example:

```text
Marketing intake-to-output workflow
SEO campaign workflow
Developer security workflow
Finance decision report workflow
Inventory daily checklist workflow
UX/UI audit workflow
Data cleanup intake-to-output workflow
```

Every group has sample tool IDs and compatible engines. Project templates reference these groups and arrange real catalog tools into panel/nested-UI plans.

## AI mode

AI mode now searches the 10,000 project ideas.

Example prompt:

```text
Build me a restaurant SEO campaign workflow with title, meta description, keyword density, slug, and campaign tracking.
```

What happens:

1. The prompt is matched against the project template library.
2. The closest project idea is loaded.
3. A grid layout is chosen from the template.
4. Tool panels are filled as project nodes.
5. Nested tools are attached to each panel when the template requires them.
6. The user can click **Animate + run**.
7. Panels visually move through running, done, or error states.
8. Outputs are saved as project artifacts.
9. Project events explain what happened.

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
nestedToolIds
nestedToolRoles
projectId
openedAt
role
uiTitle
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

The AI animation loop runs the plan step-by-step. Nested tools run inside each panel before the project bus moves to the next panel.

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
- The project idea library contains exactly 10,000 templates.
- The project group library contains exactly 125 tool groups.
- Every template references real tool IDs from the 2,500-tool catalog.
- Template panel references match each template's declared tool count.
- The project library contains more than 100,000 cross-referenced tool placements.
- 64-tool nested templates produce 16 outer panels with 4 tools each.
- Compatible links are detected.
- Simultaneous project workflows run.
- Queued waterfall workflows run.
- Nested waterfall workflows run.
- Manual downstream waterfall works from a published panel.
- AI project plans are generated from prompts.
- Template plans can be converted into panel entries.

## Current limitation

The AI project generator is currently local and rules-based. It proves the product behavior without a backend. A later production version can replace or enhance template selection with a hosted AI planner while keeping the same project bus, panel, artifact, template, and animation structure.
