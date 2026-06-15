# ToolGrid 2500 — Mega Project Foundation

ToolGrid 2500 is a searchable multi-window workspace for native browser tools. This version adds a deterministic mega project generator on top of the existing project bus, AI/manual modes, 2,500 native tools, 125 reusable tool groups, and 10,000 curated project templates.

It now includes:

- 2,500 native tool records.
- 125 reusable compatible tool groups.
- 10,000 curated searchable project ideas across 80 business and productivity fields.
- 500,000,000 deterministic virtual project blueprints.
- Project sizes ranging from 1 UI node to 64 UI nodes.
- 7,812,500 project variants for every UI size from 1 through 64.
- 100 project fields in the mega generator: the original 80 curated fields plus 20 supplemental operating fields.
- AI mode that searches curated templates and the 500,000,000-project virtual library.
- Manual mode for choosing tools directly.
- Up to 16 outer panels in a 1×1 through 4×4 grid.
- Up to 4 nested tool UIs inside each outer panel.
- 64-UI projects modeled as 4×4 outer panels × 4 nested tools per panel.
- Shared project input/payload.
- Project artifacts and event stream.
- Compatible panel links.
- Simultaneous, queued, and nested waterfall workflows.
- Animated AI workflow execution.

The current AI mode is a deterministic local planner. It does not call a paid AI API yet. That is intentional for the foundation phase: the product should work offline and prove the UI, project bus, compatibility graph, massive project generator, template library, and animation loop before external model costs are added.

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
    project-megagenerator.js
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
toolgrid-2500-starter/tests/tool-engines.test.mjs
```

## New files added in this update

```text
toolgrid-2500-starter/src/project-megagenerator.js
```

Unchanged generated files:

```text
toolgrid-2500-starter/src/tool-catalog.js
toolgrid-2500-starter/src/tool-engines.js
toolgrid-2500-starter/src/project-foundation.js
toolgrid-2500-starter/src/project-templates.js
toolgrid-2500-starter/src/styles.css
toolgrid-2500-starter/scripts/generate-project-ideas.mjs
toolgrid-2500-starter/dev-server.mjs
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

## Validate code only

```bash
npm run check
```

## Regenerate the 10,000 curated project ideas

```bash
npm run generate:projects
npm test
```

The curated generator creates exactly 10,000 project templates from 80 fields × 125 business-function/outcome combinations.

The 500,000,000-project mega library is not written as a huge static file. It is generated deterministically from a compact address space, which is faster, cheaper, and deployable.

## Mega project library

The mega project generator creates exactly:

```text
500,000,000 virtual project blueprints
100 fields
125 tool groups
64 UI sizes
625 variants per field/group/UI-size combination
```

Math:

```text
100 fields × 125 groups × 64 UI sizes × 625 variants = 500,000,000 projects
```

Every virtual project has a stable project number:

```text
1 through 500,000,000
```

Every virtual project can be recreated on demand by number. This avoids shipping a massive multi-gigabyte or terabyte-sized static project list.

## UI-size distribution

Every UI size from 1 through 64 has exactly:

```text
7,812,500 project variants
```

Complexity distribution:

```text
single-1: 7,812,500
micro-2-4: 23,437,500
mid-5-8: 31,250,000
standard-9-16: 62,500,000
advanced-17-32: 125,000,000
nested-33-64: 250,000,000
```

## Curated project idea library

The curated project library still contains:

```text
10,000 project ideas
125 reusable tool groups
80 business/productivity fields
```

Curated complexity distribution:

```text
micro-2-4: 2,666 templates
mid-8: 2,667 templates
standard-16: 2,667 templates
advanced-32: 1,000 templates
nested-64: 1,000 templates
```

## Project size examples

A 1-UI project:

```text
1×1 outer UI
1 tool UI node
single-ui execution
```

A compact project:

```text
1×1 or 2×2 outer UI
2–4 tool UI nodes
compact-waterfall execution
```

A 16-UI project:

```text
4×4 outer UI
1 tool per panel
standard waterfall execution
```

A 64-UI project:

```text
4×4 outer UI
4 nested tool UIs inside each panel
64 total tool UI nodes
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

Every group has compatible engines. The mega generator combines fields, groups, UI sizes, and variants to build stable project blueprints that reference real tools from the 2,500-tool catalog.

## AI mode

AI mode now searches both:

```text
10,000 curated project templates
500,000,000 deterministic virtual project blueprints
```

Example prompt:

```text
Build me a restaurant SEO campaign workflow with title, meta description, keyword density, slug, and campaign tracking.
```

What happens:

1. The prompt is matched against the curated library and the mega generator.
2. Matching project blueprints are shown in the project idea library.
3. The selected project loads into the active project container.
4. A grid layout is chosen from the template.
5. Tool panels are filled as project nodes.
6. Nested tools are attached to each panel when the project requires them.
7. The user can click **Animate + run**.
8. Panels visually move through running, done, or error states.
9. Outputs are saved as project artifacts.
10. Project events explain what happened.

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
- The curated project idea library contains exactly 10,000 templates.
- The project group library contains exactly 125 tool groups.
- Every curated template references real tool IDs from the 2,500-tool catalog.
- Template panel references match each template's declared tool count.
- The curated project library contains more than 100,000 cross-referenced tool placements.
- 64-tool curated templates produce 16 outer panels with 4 tools each.
- The mega project library exposes exactly 500,000,000 virtual project blueprints.
- Mega project numbers are stable and addressable from 1 through 500,000,000.
- Mega projects support exactly 1 through 64 UI/tool nodes.
- Every UI size has 7,812,500 variants.
- 1-UI mega projects produce one outer panel and a 1×1 layout.
- 64-UI mega projects produce 16 outer panels and a 4×4 layout.
- 64-UI mega projects preserve four nested tool UIs per outer panel.
- Mega search returns prompt-matched virtual projects.
- Compatible links are detected.
- Simultaneous project workflows run.
- Queued waterfall workflows run.
- Nested waterfall workflows run.
- Manual downstream waterfall works from a published panel.
- AI project plans are generated from prompts.
- Curated and mega template plans can be converted into panel entries.

## Current limitation

The AI project generator is currently local and rules-based. It proves the product behavior without a backend. A later production version can replace or enhance template selection with a hosted AI planner while keeping the same project bus, panel, artifact, template, mega generator, and animation structure.
