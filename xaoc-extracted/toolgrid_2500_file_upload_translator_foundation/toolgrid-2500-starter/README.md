# ToolGrid 2500 — File Upload Translator Foundation

ToolGrid 2500 is a browser-based project workbench for 2,500 native utility tools, a 10,000-template project idea library, and a deterministic 500,000,000-project virtual blueprint generator.

This version adds the **Document Upload Translator** layer.

## New project flow

1. Enter a project prompt.
2. Upload one or more files.
3. Confirm the pop-up: **All files added?**
   - **Yes** reads/translates the files and builds recommended tool suggestions.
   - **No** cancels the upload so the user can add the final file set.
4. Review suggested tools in the tool selector.
5. Use the recommended tools, or manually choose different tools.
6. Run the project as simultaneous tools, a queued waterfall, or an animated AI-mode project.

## What the file translator does

The file translator reads safe browser-accessible file metadata and text previews where possible. It classifies files as document, PDF, spreadsheet/table, structured data, image, code, archive, or unknown. Then it combines the file needs with the user's prompt and recommends the best matching native tools.

Examples:

- A CSV or spreadsheet routes toward CSV, JSON, table, calculator, and report tools.
- A text document routes toward word count, text cleanup, Markdown table, keyword, and summary-style tools.
- A PDF routes by metadata and any readable text preview available to document-review style tools.
- An image routes toward labeling, tagging, naming, color, and alt-text support tools.
- A code/data file routes toward developer, JSON, CSV, encoder, and documentation tools.

## Tool information icons

Every tool card now has a small **i** information icon. Hover with a mouse, focus with a keyboard, or tap/click on touch devices to open a simple explanation of what the tool does. The explanation is intentionally plain-language so a non-technical user can understand the tool before opening it.

## Project architecture preserved

This package still includes:

- 2,500 native tool records.
- AI mode and manual mode.
- 1x1 through 4x4 outer grid layouts.
- Up to 16 outer panels.
- Nested UI support for up to 64 tool UIs.
- Prompt compiler with generalized search terms.
- 10,000 curated/reusable project templates.
- 500,000,000 deterministic virtual project blueprints.
- Demand-ranked project samples and tool usage rankings.
- Project bus for artifacts, events, compatible links, simultaneous runs, and queued waterfalls.

## Full files rewritten in this update

- `toolgrid-2500-starter/index.html`
- `toolgrid-2500-starter/package.json`
- `toolgrid-2500-starter/README.md`
- `toolgrid-2500-starter/TEST_RESULTS.txt`
- `toolgrid-2500-starter/src/main.js`
- `toolgrid-2500-starter/src/styles.css`
- `toolgrid-2500-starter/src/project-foundation.js`
- `toolgrid-2500-starter/tests/tool-engines.test.mjs`

## New files added in this update

- `toolgrid-2500-starter/src/file-translator.js`

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

## Validation

The current test suite checks:

- Every one of the 2,500 tools has a valid engine and working output.
- The prompt compiler still breaks the mushroom farm example into generalized search terms.
- The 10,000 project-template library remains valid.
- The 500,000,000 virtual project generator remains valid from 1 UI to 64 UI nodes.
- Demand-ranked project and tool-usage outputs still load.
- The new file translator classifies uploaded files, reads text previews, creates project input summaries, and recommends tools.
- Tool explanation messages are plain-language strings.

