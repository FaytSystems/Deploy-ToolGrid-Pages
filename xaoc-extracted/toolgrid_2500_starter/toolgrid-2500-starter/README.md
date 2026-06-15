# ToolGrid 2500 Starter

ToolGrid 2500 is a static, browser-native starter site for a searchable free-tool database with a multi-window workspace.

## What is included

- 2,500 generated native tool records in `src/tool-catalog.js`
- 29 reusable tested tool engines in `src/tool-engines.js`
- Search, category filtering, and result ranking
- Workspace layouts from 1×1 through 4×4
- Up to 16 active tool panels
- Duplicate tools allowed in multiple panels
- Save/restore workspace using browser local storage
- No backend required for the starter version
- No external JavaScript libraries

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
- Engine-specific assertions for text, developer, JSON, CSV, unit conversion, calculators, date/time, random generators, color, SEO, gardening, cooking, and business utilities

Run:

```bash
npm test
```

## Important limitation

This package creates original native versions of common tool functions. It does not copy the UI, brand, or source code of existing tool websites. PDF editing, advanced image editing, OCR, remove-background, video conversion, and AI tools should be added in later phases because they require heavier browser libraries, server workers, or API integrations.

## Suggested next build phase

1. Move the catalog into Cloudflare D1, Supabase, PostgreSQL, or SQLite.
2. Add an admin tool-submission and approval dashboard.
3. Add heavier native workers for PDF, image, audio, and video tools.
4. Add iframe/external-launch support for third-party tools that cannot be rebuilt immediately.
5. Add account-based saved workspaces and shareable workspace links.
