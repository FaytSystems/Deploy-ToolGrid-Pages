# ToolGrid 2500 — COLAB Foundation

This build adds a **COLAB** main-menu tab to the ToolGrid Project Operating System foundation.

## What COLAB adds

- Main menu tab: `COLAB`
- Google Drive connector planning metadata
- Dropbox connector planning metadata
- Native ToolGrid shared-workspace planning metadata
- Shared project space creation UI
- User invite UI with viewer/commenter/editor/owner roles
- Local placeholder invite links
- Provider setup-plan panel
- Security checklist for real production file sharing
- COLAB state saved/restored with the workspace

## Important implementation note

This is a front-end foundation. It does **not** include real Google Drive or Dropbox OAuth credentials, backend token storage, or production file syncing yet. Those must be added server-side before real private file sharing launches.

## Is Google Drive free to integrate?

Google Drive API standard use is available at no additional cost within published usage limits. Users still use their own Google Drive storage. Google also documents Drive API quotas, per-user/per-project limits, upload limits, and planned over-quota billing changes later in 2026.

## Is Dropbox free to integrate?

Dropbox's developer platform can be used to add file storage, sharing, previews, search, Chooser, Saver, and Sharing API features. Users use their own Dropbox accounts/storage. Public production apps must follow Dropbox app review/production approval and rate-limit handling requirements.

## Recommended production architecture

1. Add authentication for ToolGrid accounts.
2. Add a backend for project memberships and roles.
3. Add encrypted OAuth token storage.
4. Add Google Drive OAuth + Drive Picker.
5. Add Dropbox OAuth + Chooser/Saver.
6. Add project-level permission checks.
7. Add server-side activity logs.
8. Add per-project cloud folders.
9. Add file-type and size controls.
10. Add invite acceptance pages.

## Full files rewritten

- `toolgrid-2500-starter/index.html`
- `toolgrid-2500-starter/package.json`
- `toolgrid-2500-starter/README.md`
- `toolgrid-2500-starter/TEST_RESULTS.txt`
- `toolgrid-2500-starter/src/main.js`
- `toolgrid-2500-starter/src/styles.css`
- `toolgrid-2500-starter/tests/tool-engines.test.mjs`

## New file added

- `toolgrid-2500-starter/src/colab-foundation.js`

## Run

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
