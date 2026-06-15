# ToolGrid 2500 Project Foundation

ToolGrid 2500 is a static, browser-native starter site for a searchable free-tool database with a project-aware multi-window workspace.

The main container can hold multiple named projects. Each 1×1 through 4×4 panel can load a tool UI, assign that tool to a project, publish artifacts back to the project bus, and participate in simultaneous or queued workflows.

## What is included

- 2,500 generated native tool records in `src/tool-catalog.js`
- 29 reusable tested tool engines in `src/tool-engines.js`
- Project bus and workflow foundation in `src/project-foundation.js`
- Search, category filtering, and result ranking
- Workspace layouts from 1×1 through 4×4
- Up to 16 active tool panels
- Duplicate tools allowed in multiple panels
- Named main container
- Multiple projects inside the container
- Project assignment per panel
- Project shared input / payload
- Manual `Run + publish` from any panel into the assigned project
- Compatible-link detection between project panels
- Simultaneous project runs across every assigned compatible panel
- Queued waterfall runs where output from one tool becomes input for the next tool
- Nested tool UI tabs: Tool UI, Project UI, and Schema UI
- Save/restore workspace using browser local storage
- No backend required for the starter version
- No external JavaScript libraries

## Project foundation model

```text
Main Container
└── Project
    ├── Shared input payload
    ├── Tool panel node
    │   ├── Tool UI
    │   ├── Project UI
    │   └── Schema UI
    ├── Tool panel node
    ├── Compatible links
    ├── Artifacts
    └── Events
```

A tool is no longer only a standalone calculator. It is a node that can:

1. Read the active project input.
2. Run its own UI and function.
3. Publish an artifact to the project.
4. Expose input/output type metadata.
5. Link to compatible tools in the same project.
6. Run as part of a simultaneous batch or queued waterfall.

## Project workflow modes

### Manual run

Open a tool, edit its fields, click `Run + publish`, and the output is saved into the assigned project as an artifact.

### Simultaneous run

Every panel assigned to the active project consumes the same project input and runs at the same time. This is useful when one payload should be analyzed by many tools.

### Queued waterfall

Panels assigned to the active project run in panel order. The output from one tool becomes the input payload for the next compatible tool.

Example:

```text
Project input
→ Uppercase Converter
→ Slug Generator
→ Keyword Density Tool
→ Project artifact
```

## Tested catalog counts

- Text: 450
- Converters: 548
- Developer: 350
- Data: 200
- Calculators: 300
- Date & Time: 200
- Generators: 150
- Color: 125
- SEO & Marketing: 100
- Gardening: 40
- Cooking: 20
- Business: 17

Total: 2,500 records.

## Full file paths rewritten in this update

```text
toolgrid-2500-starter/index.html
toolgrid-2500-starter/package.json
toolgrid-2500-starter/README.md
toolgrid-2500-starter/TEST_RESULTS.txt
toolgrid-2500-starter/src/main.js
toolgrid-2500-starter/src/styles.css
toolgrid-2500-starter/src/tool-engines.js
toolgrid-2500-starter/src/project-foundation.js
toolgrid-2500-starter/tests/tool-engines.test.mjs
```

Unchanged generated catalog:

```text
toolgrid-2500-starter/src/tool-catalog.js
```

## Run locally

```bash
npm install
npm test
npm start
```

Then open:

```text
http://localhost:4173
```

You can also open `index.html` directly in a browser, but the local server is better for ES module loading.

## Test coverage

The test suite validates:

- Exactly 2,500 catalog records exist
- Category counts match the expected distribution
- Every tool has a unique id
- Every tool maps to a known engine
- Every tool can render a schema
- Every tool can run with default inputs and return output
- Every tool exposes project input/output metadata
- Compatible project links can be detected
- Project artifacts and events can be created
- Simultaneous project workflows run only panels assigned to the active project
- Queued waterfall workflows pass output into the next compatible tool
- Engine-specific assertions for text, developer, JSON, CSV, unit conversion, calculators, date/time, random generators, color, SEO, gardening, cooking, and business utilities

Run:

```bash
npm test
```

## Important limitation

This package creates original native versions of common tool functions. It does not copy the UI, brand, or source code of existing tool websites. PDF editing, advanced image editing, OCR, remove-background, video conversion, and AI tools should be added in later phases because they require heavier browser libraries, server workers, or API integrations.

## Suggested next build phase

1. Move the project/container/workspace state into Cloudflare D1, Supabase, PostgreSQL, or SQLite.
2. Add account-based saved projects and shareable project workspace links.
3. Add a drag-and-drop workflow canvas where panels become visible workflow nodes.
4. Add permissions so projects can be private, shared, or public templates.
5. Add heavier native workers for PDF, image, audio, and video tools.
6. Add API-capable tools so queued waterfalls can include server-side work.
7. Add iframe/external-launch support for third-party tools that cannot be rebuilt immediately.
