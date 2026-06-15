export const FACTCHECKER_VERSION = "2026-06-13-factchecker-phrase-finder-v1";
export const FACTCHECKER_MAX_CELLS = 64;

const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || min));
const safeText = (value) => String(value ?? "").trim();
const compact = (value) => safeText(value).replace(/\s+/g, " ");
const stripProtocol = (value) => safeText(value).replace(/^https?:\/\//i, "").replace(/^www\./i, "").split("/")[0].trim().toLowerCase();
const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export const FACTCHECKER_MODES = Object.freeze({
  QUOTE_VERIFICATION: "quote-verification",
  PHRASE_FINDER: "phrase-finder",
  SITE_PHRASE_COUNT: "site-phrase-count",
  SOCIAL_KEYWORD_SCAN: "social-keyword-scan"
});

export const FACTCHECKER_SOURCE_POLICIES = Object.freeze([
  {
    id: "official-records",
    name: "Official records and transcripts",
    domains: ["whitehouse.gov", "congress.gov", "govinfo.gov", "state.gov", "justice.gov"],
    sourceType: "primary-record",
    defaultTrust: 98,
    embedPolicy: "link-and-cite",
    reason: "Best lane for first-person dates, locations, speaker names, official remarks, testimony, and published transcripts."
  },
  {
    id: "cspan",
    name: "C-SPAN / public affairs video",
    domains: ["c-span.org"],
    sourceType: "primary-video",
    defaultTrust: 96,
    embedPolicy: "link-and-cite",
    reason: "Strong lane for full-context public-event video, speech dates, locations, and speaker identity."
  },
  {
    id: "wire-services",
    name: "Wire services",
    domains: ["reuters.com", "apnews.com"],
    sourceType: "news-wire",
    defaultTrust: 91,
    embedPolicy: "excerpt-and-link",
    reason: "Useful for early reporting, attribution, source chronology, and quote context."
  },
  {
    id: "public-broadcast",
    name: "Public broadcasting",
    domains: ["pbs.org", "npr.org"],
    sourceType: "public-media",
    defaultTrust: 88,
    embedPolicy: "excerpt-and-link",
    reason: "Useful for transcripts, interviews, show notes, and source context."
  },
  {
    id: "international-news",
    name: "International news desks",
    domains: ["bbc.com", "theguardian.com", "dw.com", "france24.com", "aljazeera.com"],
    sourceType: "news-reporting",
    defaultTrust: 82,
    embedPolicy: "excerpt-and-link",
    reason: "Useful for broader coverage and cross-country confirmation."
  },
  {
    id: "us-national-news",
    name: "U.S. national news desks",
    domains: ["abcnews.go.com", "cbsnews.com", "nbcnews.com", "cnn.com", "usatoday.com"],
    sourceType: "news-reporting",
    defaultTrust: 80,
    embedPolicy: "excerpt-and-link",
    reason: "Useful for mainstream coverage, event writeups, and televised interview references."
  },
  {
    id: "newspapers-magazines",
    name: "Major newspapers and magazines",
    domains: ["nytimes.com", "washingtonpost.com", "wsj.com", "politico.com", "time.com", "theatlantic.com"],
    sourceType: "analysis-reporting",
    defaultTrust: 78,
    embedPolicy: "excerpt-and-link",
    reason: "Useful for sourced writeups, profile interviews, and timeline building."
  },
  {
    id: "official-video-social",
    name: "Official video/social accounts",
    domains: ["youtube.com", "x.com", "twitter.com", "facebook.com", "instagram.com", "threads.net", "tiktok.com", "reddit.com"],
    sourceType: "platform-public-post",
    defaultTrust: 65,
    embedPolicy: "public-api-or-link",
    reason: "Useful only when the post/channel/page is official, public, and can be verified by API, transcript, archive, or source-page context."
  }
]);

export const FACTCHECKER_VIDEO_VIABILITY_CHECKS = Object.freeze([
  "Uploader or publisher is official, original, or clearly attributable.",
  "Video has a date/time, event name, and location or venue.",
  "Speaker identity can be matched by face, voice, transcript, caption, or event metadata.",
  "The quoted phrase appears in transcript/captions or can be timestamped manually.",
  "Clip is not only a cropped repost; full-context source is preferred.",
  "At least one independent text source or transcript supports the quote/context."
]);

export const FACTCHECKER_SOCIAL_POLICY = Object.freeze({
  allowed: [
    "Search public official pages, public posts, and user-provided handles/URLs.",
    "Use official platform APIs, user-authorized exports, or provider-approved embeds when available.",
    "Store only small relevant excerpts/snippets, links, timestamps, and citation metadata."
  ],
  blocked: [
    "Do not scrape private accounts, login-only material, deleted posts, or content that violates platform terms.",
    "Do not treat viral reposts as first-person evidence without source-chain verification.",
    "Do not copy full articles, full transcripts, or full social feeds into the cells."
  ]
});

export const FACTCHECKER_TOOL = Object.freeze({
  id: "factchecker-quote-phrase-finder",
  name: "FactChecker Quote & Phrase Finder",
  category: "In-House Research",
  engine: "factchecker",
  inHouse: true,
  description: "Search-plan tool for verifying who said a quoted phrase, when and where it was said, and where exact or similar wording appears across trusted sources, sites, and public social pages.",
  tags: [
    "factchecker",
    "fact checker",
    "quote verification",
    "quoted phrase finder",
    "phrase finder",
    "exact match search",
    "news clipping grid",
    "first person account",
    "source citation",
    "citation finder",
    "date location quote",
    "speaker verification",
    "video credibility",
    "transcript verification",
    "public record search",
    "news source search",
    "site phrase count",
    "social keyword scan",
    "keyword timeline",
    "claim evidence map",
    "credible source filter",
    "news quote pinpointer"
  ],
  searchPhrases: [
    "verify a quote by person",
    "find where a phrase was first said",
    "search news sites for exact phrase",
    "find phrase variations on one website",
    "count keyword uses on a social page",
    "pinpoint date location of quote",
    "create 64 news clipping cells",
    "build cited evidence grid",
    "cross check videos for credibility",
    "search only trusted sources"
  ],
  config: {
    maxCells: FACTCHECKER_MAX_CELLS,
    defaultMode: FACTCHECKER_MODES.QUOTE_VERIFICATION,
    approvalRequired: true,
    parallelSafe: true
  },
  contracts: {
    accepts: ["quote", "phrase", "person", "date-range", "site-list", "social-url", "public-source"],
    produces: ["source-clipping-grid", "citation-plan", "search-queries", "evidence-checklist", "phrase-frequency-map"],
    waterfallSignal: "research-and-verify",
    parallelSafe: true,
    requiresApproval: true
  }
});

export function parseSiteList(value) {
  return safeText(value)
    .split(/[\n,]+/)
    .map(stripProtocol)
    .filter(Boolean)
    .filter((site, index, array) => array.indexOf(site) === index);
}

export function normalizePhrase(value) {
  return compact(value)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function quoteWrap(value) {
  const text = normalizePhrase(value).replace(/^"|"$/g, "");
  return text ? `"${text}"` : "";
}

function contentWords(value) {
  return normalizePhrase(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/gi, " ")
    .split(/\s+/)
    .filter((word) => word.length >= 4 && !["that", "this", "with", "from", "have", "were", "they", "them", "your", "about"].includes(word));
}

export function buildPhraseVariations(phrase) {
  const exact = normalizePhrase(phrase);
  const words = contentWords(exact);
  const noPunctuation = exact.replace(/[.,!?;:()\[\]{}]/g, "").replace(/\s+/g, " ").trim();
  const core = words.slice(0, 8).join(" ");
  const tail = words.slice(-8).join(" ");
  const short = exact.split(/\s+/).slice(0, 9).join(" ");
  return [
    { id: "exact", label: "Exact quoted phrase", queryText: quoteWrap(exact), searchStyle: "exact-match", weight: 1 },
    { id: "normalized", label: "Quote without punctuation", queryText: quoteWrap(noPunctuation), searchStyle: "normalized-exact", weight: 0.88 },
    { id: "core-keywords", label: "Core keyword cluster", queryText: core, searchStyle: "keyword-cluster", weight: 0.68 },
    { id: "opening-fragment", label: "Opening phrase fragment", queryText: quoteWrap(short), searchStyle: "partial-exact", weight: 0.62 },
    { id: "ending-keywords", label: "Ending keyword cluster", queryText: tail || core, searchStyle: "keyword-cluster", weight: 0.54 }
  ].filter((item, index, array) => item.queryText && array.findIndex((candidate) => candidate.queryText === item.queryText) === index);
}

function sourceDomainsForInputs({ includeSites = "", excludeSites = "" } = {}) {
  const include = parseSiteList(includeSites);
  const exclude = new Set(parseSiteList(excludeSites));
  const defaultDomains = FACTCHECKER_SOURCE_POLICIES.flatMap((policy) => policy.domains);
  return (include.length ? include : defaultDomains).filter((domain) => !exclude.has(domain)).slice(0, 80);
}

function sourcePolicyForDomain(domain) {
  return FACTCHECKER_SOURCE_POLICIES.find((policy) => policy.domains.includes(domain)) || {
    id: "custom-source",
    name: "Custom source",
    sourceType: "custom-domain",
    defaultTrust: 55,
    embedPolicy: "excerpt-and-link",
    reason: "User-specified source. Needs credibility review before being treated as supporting evidence."
  };
}

function buildDateOperators({ dateFrom = "", dateTo = "" } = {}) {
  const parts = [];
  if (safeText(dateFrom)) parts.push(`after:${safeText(dateFrom)}`);
  if (safeText(dateTo)) parts.push(`before:${safeText(dateTo)}`);
  return parts.join(" ");
}

function buildModeIntent(mode) {
  switch (mode) {
    case FACTCHECKER_MODES.PHRASE_FINDER:
      return "Find exact and near-exact phrase usage across trusted sources.";
    case FACTCHECKER_MODES.SITE_PHRASE_COUNT:
      return "Count or map how many times a phrase/variation appears on selected sites.";
    case FACTCHECKER_MODES.SOCIAL_KEYWORD_SCAN:
      return "Search public social pages/official accounts for keyword or phrase usage.";
    case FACTCHECKER_MODES.QUOTE_VERIFICATION:
    default:
      return "Pinpoint credible first-person evidence for who said the quote, where, and when.";
  }
}

export function buildFactcheckerSearchPlan(inputs = {}) {
  const mode = safeText(inputs.mode) || FACTCHECKER_MODES.QUOTE_VERIFICATION;
  const phrase = normalizePhrase(inputs.phrase || inputs.quote || inputs.text || "");
  const person = compact(inputs.person || inputs.speaker || "");
  const dateFrom = safeText(inputs.dateFrom);
  const dateTo = safeText(inputs.dateTo);
  const socialTargets = safeText(inputs.socialTargets);
  const maxCells = clamp(inputs.count || inputs.maxCells || FACTCHECKER_MAX_CELLS, 1, FACTCHECKER_MAX_CELLS);
  const dateOperators = buildDateOperators({ dateFrom, dateTo });
  const phraseVariations = buildPhraseVariations(phrase || "quoted phrase");
  const domains = sourceDomainsForInputs(inputs);
  const queryRows = [];

  for (const variation of phraseVariations) {
    for (const domain of domains) {
      const policy = sourcePolicyForDomain(domain);
      const pieces = [variation.queryText, person ? quoteWrap(person) : "", `site:${domain}`, dateOperators].filter(Boolean);
      const query = pieces.join(" ").replace(/\s+/g, " ").trim();
      const socialBoost = mode === FACTCHECKER_MODES.SOCIAL_KEYWORD_SCAN && /youtube|x\.com|twitter|facebook|instagram|threads|tiktok|reddit/.test(domain);
      const score = Math.round(policy.defaultTrust * variation.weight + (socialBoost ? 8 : 0));
      queryRows.push({
        id: `${variation.id}-${domain}`.replace(/[^a-z0-9.-]+/gi, "-"),
        mode,
        domain,
        sourceName: policy.name,
        sourceType: policy.sourceType,
        embedPolicy: policy.embedPolicy,
        trustScore: Math.max(0, Math.min(100, score)),
        phraseVariation: variation.label,
        searchStyle: variation.searchStyle,
        query,
        sourceReason: policy.reason,
        socialTargetHint: socialTargets || "Public/official social URL or handle can be added here."
      });
    }
  }

  const sortedRows = queryRows
    .sort((a, b) => b.trustScore - a.trustScore || a.domain.localeCompare(b.domain));
  const laneHints = ["transcript", "video", "interview", "statement", "caption", "archive", "press conference", "remarks", "full context", "timestamp"];
  const selectedRows = [...sortedRows];
  let laneIndex = 0;
  while (selectedRows.length < maxCells && sortedRows.length) {
    const base = sortedRows[laneIndex % sortedRows.length];
    const hint = laneHints[laneIndex % laneHints.length];
    selectedRows.push({
      ...base,
      id: `${base.id}-${hint.replace(/\s+/g, "-")}-${laneIndex}`,
      phraseVariation: `${base.phraseVariation} · ${hint}`,
      query: `${base.query} ${quoteWrap(hint)}`.replace(/\s+/g, " ").trim(),
      trustScore: Math.max(1, base.trustScore - 3 - (laneIndex % 5))
    });
    laneIndex += 1;
  }
  selectedRows.length = Math.min(selectedRows.length, maxCells);

  return {
    version: FACTCHECKER_VERSION,
    toolId: FACTCHECKER_TOOL.id,
    mode,
    intent: buildModeIntent(mode),
    phrase,
    person,
    dateRange: { from: dateFrom || null, to: dateTo || null },
    includeSites: parseSiteList(inputs.includeSites),
    excludeSites: parseSiteList(inputs.excludeSites),
    socialTargets,
    requestedCells: maxCells,
    phraseVariations,
    queryRows: selectedRows,
    clippingCells: selectedRows.map((row, index) => ({
      cell: index + 1,
      cellId: `fact-cell-${String(index + 1).padStart(2, "0")}`,
      status: "search-ready",
      headline: `${row.phraseVariation} · ${row.domain}`,
      source: row.domain,
      sourceName: row.sourceName,
      sourceType: row.sourceType,
      trustScore: row.trustScore,
      query: row.query,
      excerpt: "Pending live search connector. This cell is reserved for the shortest relevant excerpt/snippet only, not a full article or full page.",
      date: null,
      location: null,
      speaker: person || null,
      citationUrl: `https://${row.domain}`,
      verificationChecklist: [
        "Exact or near-exact wording located",
        "Speaker identity confirmed",
        "Date and location confirmed",
        "Primary source/video/transcript preferred",
        "Context checked before final conclusion"
      ]
    })),
    videoViabilityChecks: FACTCHECKER_VIDEO_VIABILITY_CHECKS,
    socialPolicy: FACTCHECKER_SOCIAL_POLICY,
    liveSearchRequired: true,
    backendNeeded: "Connect a server-side search/news/social/transcript provider to turn search-ready cells into verified evidence clippings."
  };
}

export function verifyFactcheckerPlan(plan) {
  const errors = [];
  if (!plan || plan.version !== FACTCHECKER_VERSION) errors.push("missing factchecker version");
  if (!Array.isArray(plan.clippingCells)) errors.push("missing clipping cells");
  if ((plan.clippingCells || []).length > FACTCHECKER_MAX_CELLS) errors.push("too many clipping cells");
  for (const cell of plan.clippingCells || []) {
    if (!cell.query || !cell.source) errors.push(`cell ${cell.cellId || "unknown"} missing query/source`);
    if (!cell.excerpt || !/Pending live search connector/.test(cell.excerpt)) errors.push(`cell ${cell.cellId || "unknown"} should not invent evidence before live search`);
  }
  return {
    ok: errors.length === 0,
    errors,
    stats: {
      sourcePolicyCount: FACTCHECKER_SOURCE_POLICIES.length,
      sourceDomainCount: FACTCHECKER_SOURCE_POLICIES.flatMap((policy) => policy.domains).length,
      clippingCellCount: plan?.clippingCells?.length || 0,
      maxCells: FACTCHECKER_MAX_CELLS
    }
  };
}

export function runFactcheckerSearch(inputs = {}) {
  const plan = buildFactcheckerSearchPlan(inputs);
  const topCells = plan.clippingCells.slice(0, Math.min(12, plan.clippingCells.length));
  return [
    `FactChecker plan: ${plan.intent}`,
    `Phrase: ${plan.phrase || "(none supplied)"}`,
    `Person/speaker: ${plan.person || "not specified"}`,
    `Date range: ${plan.dateRange.from || "any"} → ${plan.dateRange.to || "any"}`,
    `Cells prepared: ${plan.clippingCells.length}/${FACTCHECKER_MAX_CELLS}`,
    "",
    "Top search-ready clipping cells:",
    ...topCells.map((cell) => `${String(cell.cell).padStart(2, "0")}. ${cell.source} · score ${cell.trustScore} · ${cell.query}`),
    "",
    "Evidence rule: cells are search targets until a live backend/API confirms a short excerpt, citation URL, date, location, and speaker context."
  ].join("\n");
}

function selectEl(name, label, values, selected) {
  const wrap = document.createElement("label");
  wrap.textContent = label;
  const select = document.createElement("select");
  select.name = name;
  for (const [value, text] of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    select.append(option);
  }
  select.value = selected;
  wrap.append(select);
  return wrap;
}

function fieldEl(name, label, type = "text", value = "", placeholder = "") {
  const wrap = document.createElement("label");
  wrap.textContent = label;
  const input = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
  input.name = name;
  if (type !== "textarea") input.type = type;
  input.value = value;
  input.placeholder = placeholder;
  if (type === "textarea") input.rows = 4;
  wrap.append(input);
  return wrap;
}

function renderClippingCells(target, plan) {
  const fragment = document.createDocumentFragment();
  for (const cell of plan.clippingCells) {
    const card = document.createElement("article");
    card.className = "factchecker-cell";
    card.innerHTML = `
      <div class="factchecker-cell-top"><strong>${String(cell.cell).padStart(2, "0")}</strong><span>${escapeHtml(cell.status)}</span></div>
      <h4>${escapeHtml(cell.headline)}</h4>
      <p>${escapeHtml(cell.excerpt)}</p>
      <dl>
        <dt>Source</dt><dd>${escapeHtml(cell.sourceName)} · ${escapeHtml(cell.source)}</dd>
        <dt>Trust lane</dt><dd>${escapeHtml(cell.sourceType)} · ${cell.trustScore}/100</dd>
        <dt>Query</dt><dd>${escapeHtml(cell.query)}</dd>
      </dl>
      <a href="${escapeHtml(cell.citationUrl)}" target="_blank" rel="noopener noreferrer">Open source domain</a>
    `;
    fragment.append(card);
  }
  target.replaceChildren(fragment);
}

export function renderFactchecker(container, tool = FACTCHECKER_TOOL, options = {}) {
  const defaults = {
    mode: FACTCHECKER_MODES.QUOTE_VERIFICATION,
    phrase: "I have a dream",
    person: "Martin Luther King Jr.",
    dateFrom: "",
    dateTo: "",
    includeSites: "",
    excludeSites: "",
    socialTargets: "",
    count: 16,
    ...(options.initialInputs || {})
  };

  const shell = document.createElement("section");
  shell.className = "factchecker-tool-shell";
  const heading = document.createElement("div");
  heading.className = "factchecker-heading";
  heading.innerHTML = `
    <p class="eyebrow small">${escapeHtml(FACTCHECKER_VERSION)}</p>
    <h3>${escapeHtml(tool.name)}</h3>
    <p>Builds a credible source search plan and a 1–64 cell news-clipping grid. Live evidence requires a backend/API connector before a claim can be marked verified.</p>
  `;

  const form = document.createElement("form");
  form.className = "factchecker-form";
  form.append(
    selectEl("mode", "Search mode", [
      [FACTCHECKER_MODES.QUOTE_VERIFICATION, "Quote verification"],
      [FACTCHECKER_MODES.PHRASE_FINDER, "Phrase finder"],
      [FACTCHECKER_MODES.SITE_PHRASE_COUNT, "Site phrase count"],
      [FACTCHECKER_MODES.SOCIAL_KEYWORD_SCAN, "Social keyword scan"]
    ], defaults.mode),
    fieldEl("phrase", "Quoted phrase / keyword", "textarea", defaults.phrase, "Paste the quote or keyword phrase..."),
    fieldEl("person", "Person / speaker", "text", defaults.person, "Person X"),
    fieldEl("dateFrom", "From date", "date", defaults.dateFrom),
    fieldEl("dateTo", "To date", "date", defaults.dateTo),
    fieldEl("includeSites", "Only these sites/domains", "textarea", defaults.includeSites, "reuters.com\napnews.com\nc-span.org"),
    fieldEl("excludeSites", "Never use these sites/domains", "textarea", defaults.excludeSites, "example.com"),
    fieldEl("socialTargets", "Social page URLs / handles", "textarea", defaults.socialTargets, "Official public page or handle URLs only"),
    fieldEl("count", "Cells to prepare", "number", defaults.count)
  );

  const actions = document.createElement("div");
  actions.className = "project-actions";
  const run = document.createElement("button");
  run.type = "submit";
  run.textContent = "Build clipping grid";
  const publish = document.createElement("button");
  publish.type = "button";
  publish.className = "ghost-button";
  publish.textContent = "Run + publish";
  const copy = document.createElement("button");
  copy.type = "button";
  copy.className = "ghost-button";
  copy.textContent = "Copy plan";
  actions.append(run, publish, copy);

  const summary = document.createElement("pre");
  summary.className = "output-box factchecker-summary";
  const cells = document.createElement("div");
  cells.className = "factchecker-grid";
  const checklist = document.createElement("div");
  checklist.className = "factchecker-checklist";
  checklist.innerHTML = `
    <strong>Credibility rules</strong>
    <ul>${FACTCHECKER_VIDEO_VIABILITY_CHECKS.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    <strong>Social scan rule</strong>
    <p>Public official pages only unless the user authorizes account/export access. Results must stay as short snippets with citation metadata.</p>
  `;

  const collect = () => Object.fromEntries(new FormData(form).entries());
  const execute = () => {
    const inputs = collect();
    inputs.count = clamp(inputs.count, 1, FACTCHECKER_MAX_CELLS);
    const plan = buildFactcheckerSearchPlan(inputs);
    summary.textContent = runFactcheckerSearch(inputs);
    renderClippingCells(cells, plan);
    return { inputs, plan, output: summary.textContent };
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    execute();
  });
  publish.addEventListener("click", () => {
    const result = execute();
    if (typeof options.onPublish === "function") {
      options.onPublish({
        tool,
        panelIndex: options.panelIndex ?? null,
        inputs: result.inputs,
        output: JSON.stringify(result.plan, null, 2),
        status: "ok",
        runMode: "factchecker"
      });
    }
  });
  copy.addEventListener("click", async () => {
    const result = execute();
    await navigator.clipboard.writeText(JSON.stringify(result.plan, null, 2));
  });

  form.append(actions);
  shell.append(heading, form, summary, checklist, cells);
  container.replaceChildren(shell);
  execute();
}

export function exportFactcheckerSourceRows() {
  return FACTCHECKER_SOURCE_POLICIES.flatMap((policy) => policy.domains.map((domain) => ({
    policyId: policy.id,
    name: policy.name,
    domain,
    sourceType: policy.sourceType,
    defaultTrust: policy.defaultTrust,
    embedPolicy: policy.embedPolicy,
    reason: policy.reason
  })));
}
