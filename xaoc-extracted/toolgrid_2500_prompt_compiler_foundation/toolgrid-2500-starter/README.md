# ToolGrid 2500 — Prompt Compiler Project Foundation

ToolGrid 2500 is a searchable multi-window workspace for native browser tools. This version adds a prompt compiler layer so AI mode can break a plain-language project goal into generalized search terms, capability tags, compatible tool requirements, and a runnable project graph.

## What this build contains

- 2,500 native tool records
- 10,000 curated project templates
- 500,000,000 deterministic virtual project blueprints from 1 UI to 64 UI/tool nodes
- AI mode and Manual mode
- Prompt compiler search intelligence
- Main container → projects → shared payload → tool panels → artifacts/events
- 1x1 through 4x4 outer layouts
- Nested UI support up to 64 total tool UIs
- Simultaneous and queued waterfall execution
- Compatible tool-link detection
- Local browser save/restore

## Prompt compiler foundation

The prompt compiler turns a specific request such as:

```text
Build a workflow that helps a mushroom farm calculate substrate recipes,
track contamination reports, generate batch labels, write customer emails,
and create a weekly harvest forecast.
```

into generalized search/project intelligence like:

```text
business
agriculture
farm operations
calculate soil variations
documentation of subject
create tags
generate auto-respond emails
harvest forecast
schedule builder
quality report
```

It also splits the prompt into task parts:

```text
1. calculate → substrate recipes
2. track → contamination reports
3. generate/label → batch labels
4. write/email → customer emails
5. forecast → weekly harvest forecast
```

Each task part includes:

- generalized search terms
- capability tags
- preferred tool categories
- preferred tool engines
- suggested search queries
- expected output type

The AI project generator uses that compiled plan to pick compatible tools and load the workspace panels.

## Run locally

```bash
cd toolgrid-2500-starter
npm install
npm test
npm start
```

Open:

```text
http://localhost:4173
```

## Useful commands

```bash
npm run check
npm test
npm run generate:projects
npm start
```

## Important architecture note

The 500,000,000 project library is not a hard limit. It is an indexed deterministic idea universe. If a user enters something outside that range, the prompt compiler creates a custom project graph from the 2,500 tools using:

```text
Prompt → task parts → generalized search terms → capability tags → tool search → compatibility graph → UI layout → queued/simultaneous workflow
```

This means custom projects can be created without requiring a pre-existing static project record.
