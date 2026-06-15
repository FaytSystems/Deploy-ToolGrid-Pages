# ToolGrid 2500 — FactChecker Quote & Phrase Finder Foundation

This build extends the ToolGrid Project Operating System, COLAB, paid multitask waterfall, progress/ETA UI, 640-tool in-house compatibility suite, and PG Live Webcam Explorer with a new **FactChecker Quote & Phrase Finder** tool skeleton.

The FactChecker tool is designed to turn a quote, phrase, speaker, site list, social page, and date range into a **credible source search plan** and a **1–64 cell news-clipping grid**.

## What this update adds

- New native tool: `FactChecker Quote & Phrase Finder`
- Search modes:
  - Quote verification
  - Phrase finder
  - Site phrase count
  - Social keyword scan
- 1–64 clipping-cell output grid
- Exact quote and phrase-variation generator
- Source whitelist and source blocklist inputs
- Date range inputs
- Person/speaker input
- Public social page / handle target input
- Credibility/source policy groups
- Video viability checklist
- Social scan safety policy
- Dedicated FactChecker UI panel in the main workspace controls
- Workspace-fill button for clipping-cell workflows
- Shared tool-engine support for project publishing
- FactChecker source policy CSV/JSON exports

## Important honesty about live search

This is a **tool skeleton/foundation**, not a live internet crawler yet.

The browser app prepares verified search lanes and cells, but it does not invent excerpts. Each cell starts as `search-ready` with a placeholder that says a live connector must confirm evidence first.

To make this production-live, connect server-side search/news/social/transcript providers. The backend should fill each clipping cell only after it has:

```text
Short relevant excerpt/snippet
Citation URL
Source name
Date/time
Location/event if available
Speaker/person context
Credibility score
Video/transcript viability when applicable
```

## Source policy groups included

- Official records and transcripts
- C-SPAN / public affairs video
- Wire services
- Public broadcasting
- International news desks
- U.S. national news desks
- Major newspapers and magazines
- Official video/social accounts

## Why the cells do not copy full pages

The FactChecker clipping grid is designed to show **short relevant excerpts only**, not full articles, full transcripts, or full social feeds. Each cell is a citation-style clipping card, not a scraped webpage.

## Social media rule

Social search should be limited to public official pages, user-supplied handles/URLs, official platform APIs, provider-approved embeds, or user-authorized exports. Private accounts, login-only content, deleted posts, and scraping against platform terms are intentionally out of scope.

## Current FactChecker status

```text
1 FactChecker native tool
8 source policy groups
34 seeded source domains
64 maximum clipping cells
4 search modes
CSV/JSON source policy exports
```

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

- `toolgrid-2500-starter/src/factchecker-tool.js`
- `toolgrid-2500-starter/scripts/export-factchecker-sources.mjs`
- `toolgrid-2500-starter/exports/factchecker-source-policies-summary.json`
- `toolgrid-2500-starter/exports/factchecker-source-policies.csv`

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
- PG Live Webcam Explorer

## Run

```bash
cd toolgrid-2500-starter
npm install
npm run check
npm test
npm run compat:inhouse
npm run webcam:export
npm run factchecker:export
npm start
```

Open:

```text
http://localhost:4173
```

## Production upgrade path

To turn search-ready cells into real evidence clippings, add a backend with provider-specific integrations such as search APIs, news APIs, official transcript sources, video transcript APIs, and social platform APIs. Add source caching, source reputation scoring, domain allow/block controls, citation export, and human-review checkpoints before any claim is marked verified.
