export const PRICE_COMPARISON_VERSION = "2026-06-13-price-comparison-shopping-v1";
export const PRICE_COMPARISON_MAX_CELLS = 64;

const clamp = (value, min, max) => Math.max(min, Math.min(max, Number(value) || min));
const safeText = (value) => String(value ?? "").trim();
const compact = (value) => safeText(value).replace(/\s+/g, " ");
const escapeHtml = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");
const encode = (value) => encodeURIComponent(compact(value));

export const PRICE_COMPARISON_MODES = Object.freeze({
  EXACT_COMPARE: "exact-price-compare",
  VARIATION_COMPARE: "variation-price-compare",
  SALE_FINDER: "sale-finder",
  BUDGET_MATCH: "budget-match"
});

export const PRICE_SOURCE_POLICIES = Object.freeze([
  {
    id: "search-engine-lanes",
    name: "Search engine shopping lanes",
    domains: ["google.com", "bing.com"],
    sourceType: "search-provider",
    accessMode: "api-or-link-out",
    supportsExact: true,
    supportsVariations: true,
    trust: 72,
    reason: "Useful for broad discovery when official merchant APIs are unavailable. Production should use approved search APIs or link-outs, not scraping results pages."
  },
  {
    id: "marketplace-api-lanes",
    name: "Marketplace API lanes",
    domains: ["ebay.com", "amazon.com", "walmart.com", "bestbuy.com", "target.com"],
    sourceType: "marketplace",
    accessMode: "official-api-preferred",
    supportsExact: true,
    supportsVariations: true,
    trust: 86,
    reason: "Best lane for structured item title, image, price, shipping, condition, seller, and product identifiers when the marketplace provides an approved API."
  },
  {
    id: "coupon-sale-lanes",
    name: "Coupon and sale discovery lanes",
    domains: ["slickdeals.net", "retailmenot.com", "coupons.com", "rakuten.com"],
    sourceType: "sale-discovery",
    accessMode: "api-rss-or-link-out",
    supportsExact: false,
    supportsVariations: true,
    trust: 62,
    reason: "Useful for deal discovery, coupon leads, and price-drop hints that should be verified against the merchant checkout page."
  },
  {
    id: "cheap-global-lanes",
    name: "Cheap global marketplace lanes",
    domains: ["temu.com", "shein.com", "alibaba.com", "aliexpress.com"],
    sourceType: "low-cost-marketplace",
    accessMode: "official-api-or-link-out",
    supportsExact: false,
    supportsVariations: true,
    trust: 54,
    reason: "Useful only when the user enables variations/cheap-options mode; results may differ in brand, material, shipping, size, quality, minimum order quantity, or delivery time."
  },
  {
    id: "merchant-direct-lanes",
    name: "Merchant direct lanes",
    domains: ["manufacturer-site", "brand-site", "retailer-site"],
    sourceType: "merchant-direct",
    accessMode: "structured-data-or-permitted-fetch",
    supportsExact: true,
    supportsVariations: false,
    trust: 83,
    reason: "Best lane when the user provides a product URL. Production should parse schema.org product data or use a permitted backend fetch."
  }
]);

export const PRICE_COMPARISON_SOURCE_WARNINGS = Object.freeze([
  "Do not scrape marketplaces or social commerce pages when their terms block automated collection.",
  "Always show source links and time checked because prices, sales, shipping, and inventory can change quickly.",
  "Separate exact-match results from lookalike/variation results so users do not compare different products as if they are identical.",
  "For Temu, SHEIN, Alibaba, and similar low-cost sources, label results as variation/cheap-option candidates unless product identifiers match.",
  "Use official APIs, affiliate/product APIs, merchant feeds, structured data, or user-authorized imports for production-grade price data."
]);

export const PRICE_COMPARISON_TOOL = Object.freeze({
  id: "price-comparison-64-cell-grid",
  name: "Price Comparison 64-Cell Grid",
  category: "In-House Shopping",
  engine: "price_comparison",
  inHouse: true,
  description: "Enter a product name or URL and prepare up to 64 price-result cells across approved search, marketplace, merchant, and cheap-option lanes.",
  tags: [
    "price comparison", "compare prices", "product url price", "product name search", "exact match", "variation search", "shopping grid", "64 cells", "merchant price", "marketplace price", "shipping price", "sale price", "discount", "product matching", "ecommerce", "cheap options", "temu", "shein", "alibaba", "aliexpress", "price checker", "shopping assistant"
  ],
  searchPhrases: [
    "compare product prices across sites", "search price by product url", "find exact product match prices", "show 64 price cells", "compare marketplace listings", "include cheap temu shein alibaba alternatives", "product price grid", "shopping comparison engine"
  ],
  config: { maxCells: PRICE_COMPARISON_MAX_CELLS, mode: PRICE_COMPARISON_MODES.EXACT_COMPARE, approvalRequired: true, parallelSafe: true },
  contracts: {
    accepts: ["product-name", "product-url", "product-code", "gtin", "sku", "brand", "model", "shopping-query"],
    produces: ["price-cell-grid", "merchant-links", "exact-match-plan", "variation-plan", "sale-scan-plan"],
    waterfallSignal: "shopping-research-and-verify",
    parallelSafe: true,
    requiresApproval: true
  }
});

export const SALE_FINDER_TOOL = Object.freeze({
  id: "on-sale-deal-finder-grid",
  name: "On Sale Deal Finder Grid",
  category: "In-House Shopping",
  engine: "price_comparison",
  inHouse: true,
  description: "Enter a product code, URL, or description and prepare sale/deal/coupon search cells for the lowest verified current offer.",
  tags: ["on sale", "sale finder", "deal finder", "coupon finder", "discount search", "product code", "sku sale", "lowest price", "clearance", "price drop", "shopping", "ecommerce", "64 cells", "coupon", "budget", "promo code", "deal grid", "retail price", "compare sale", "least expensive"],
  searchPhrases: ["find product on sale", "search least expensive product", "coupon and deal grid", "lowest price from product url", "sale price checker", "price drop finder"],
  config: { maxCells: PRICE_COMPARISON_MAX_CELLS, mode: PRICE_COMPARISON_MODES.SALE_FINDER, approvalRequired: true, parallelSafe: true },
  contracts: {
    accepts: ["product-code", "product-url", "product-description", "shopping-query", "price-range"],
    produces: ["sale-cell-grid", "coupon-check-plan", "lowest-price-candidates", "merchant-links"],
    waterfallSignal: "deal-scan-and-verify",
    parallelSafe: true,
    requiresApproval: true
  }
});

export const BUDGET_PRODUCT_MATCHER_TOOL = Object.freeze({
  id: "budget-product-match-grid",
  name: "Budget Product Match Grid",
  category: "In-House Shopping",
  engine: "price_comparison",
  inHouse: true,
  description: "Enter a product, budget, color, size, and match rules, then prepare up to 64 close-match shopping cells.",
  tags: ["budget product finder", "price range", "close match", "product variations", "color options", "size options", "budget shopping", "shopping grid", "product finder", "cheap alternatives", "exact or similar", "temu", "shein", "alibaba", "aliexpress", "marketplace", "ecommerce", "compare products", "64 cells", "filters", "shopping assistant"],
  searchPhrases: ["find products in my price range", "search color and size options", "show close product matches", "budget shopping 64 cells", "product variation finder", "cheap product alternatives"],
  config: { maxCells: PRICE_COMPARISON_MAX_CELLS, mode: PRICE_COMPARISON_MODES.BUDGET_MATCH, approvalRequired: true, parallelSafe: true },
  contracts: {
    accepts: ["product-name", "price-range", "color", "size", "brand", "variation-preferences", "shopping-query"],
    produces: ["budget-match-grid", "filtered-product-candidates", "variation-plan", "merchant-links"],
    waterfallSignal: "budget-match-and-rank",
    parallelSafe: true,
    requiresApproval: true
  }
});

export const PRICE_TOOLS = Object.freeze([PRICE_COMPARISON_TOOL, SALE_FINDER_TOOL, BUDGET_PRODUCT_MATCHER_TOOL]);

function tryExtractDomain(url) {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return "";
  }
}

function buildProductTokens({ productName = "", productUrl = "", productCode = "", brand = "", model = "", color = "", size = "" } = {}) {
  const fromUrl = tryExtractDomain(productUrl);
  const values = [productName, productCode, brand, model, color, size].map(compact).filter(Boolean);
  const seed = values.join(" ") || productUrl || "product";
  const tokens = compact(seed)
    .toLowerCase()
    .replace(/[^a-z0-9\s.-]/gi, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1)
    .slice(0, 16);
  return { seed, tokens, sourceDomain: fromUrl };
}

function buildQueryVariations(inputs = {}) {
  const { seed, tokens, sourceDomain } = buildProductTokens(inputs);
  const quoted = seed ? `"${seed.replaceAll('"', "").trim()}"` : "";
  const compactCode = compact(inputs.productCode || "");
  const brandModel = compact(`${inputs.brand || ""} ${inputs.model || ""}`);
  const colorSize = compact(`${inputs.color || ""} ${inputs.size || ""}`);
  const budget = compact(`${inputs.minPrice || ""} ${inputs.maxPrice || ""}`);
  return [
    { id: "exact", label: "Exact product phrase", query: quoted || tokens.join(" "), matchType: "exact" },
    { id: "code", label: "Product code / SKU / GTIN", query: compactCode || quoted || tokens.slice(0, 8).join(" "), matchType: "identifier" },
    { id: "brand-model", label: "Brand and model", query: brandModel || tokens.slice(0, 8).join(" "), matchType: "strong-similar" },
    { id: "color-size", label: "Color and size options", query: compact(`${seed} ${colorSize}`), matchType: "variation" },
    { id: "budget", label: "Budget range", query: compact(`${seed} ${budget} sale discount under ${inputs.maxPrice || ""}`), matchType: "budget" },
    { id: "source-domain", label: "Source page domain", query: sourceDomain ? `${quoted || seed} site:${sourceDomain}` : quoted || seed, matchType: "merchant-direct" }
  ].filter((item, index, array) => item.query && array.findIndex((candidate) => candidate.query === item.query) === index);
}

function searchUrlForDomain(domain, query) {
  const q = encode(query);
  const searchUrls = {
    "google.com": `https://www.google.com/search?q=${q}`,
    "bing.com": `https://www.bing.com/search?q=${q}`,
    "ebay.com": `https://www.ebay.com/sch/i.html?_nkw=${q}`,
    "amazon.com": `https://www.amazon.com/s?k=${q}`,
    "walmart.com": `https://www.walmart.com/search?q=${q}`,
    "bestbuy.com": `https://www.bestbuy.com/site/searchpage.jsp?st=${q}`,
    "target.com": `https://www.target.com/s?searchTerm=${q}`,
    "slickdeals.net": `https://slickdeals.net/newsearch.php?q=${q}`,
    "retailmenot.com": `https://www.retailmenot.com/search?q=${q}`,
    "coupons.com": `https://www.coupons.com/search?query=${q}`,
    "rakuten.com": `https://www.rakuten.com/search.htm?query=${q}`,
    "temu.com": `https://www.temu.com/search_result.html?search_key=${q}`,
    "shein.com": `https://us.shein.com/pdsearch/${q}/`,
    "alibaba.com": `https://www.alibaba.com/trade/search?SearchText=${q}`,
    "aliexpress.com": `https://www.aliexpress.com/wholesale?SearchText=${q}`
  };
  return searchUrls[domain] || `https://${domain}/search?q=${q}`;
}

export function buildPriceComparisonPlan(inputs = {}) {
  const mode = inputs.mode || PRICE_COMPARISON_MODES.EXACT_COMPARE;
  const count = clamp(inputs.count, 1, PRICE_COMPARISON_MAX_CELLS);
  const exactOnly = mode === PRICE_COMPARISON_MODES.EXACT_COMPARE || String(inputs.matchMode || "").toLowerCase().includes("exact");
  const includeVariations = !exactOnly || mode === PRICE_COMPARISON_MODES.VARIATION_COMPARE || mode === PRICE_COMPARISON_MODES.BUDGET_MATCH || String(inputs.includeVariations || "").toLowerCase() === "true";
  const includeCheap = includeVariations || /cheap|temu|shein|alibaba|aliexpress|variation/i.test(String(inputs.sources || inputs.prompt || ""));
  const includeSales = mode === PRICE_COMPARISON_MODES.SALE_FINDER || /sale|deal|coupon|discount|clearance/i.test(String(inputs.prompt || ""));
  const variations = buildQueryVariations(inputs);
  const activePolicies = PRICE_SOURCE_POLICIES.filter((policy) => {
    if (policy.id === "cheap-global-lanes") return includeCheap;
    if (policy.id === "coupon-sale-lanes") return includeSales || mode === PRICE_COMPARISON_MODES.SALE_FINDER;
    return true;
  });
  const domains = activePolicies.flatMap((policy) => policy.domains.map((domain) => ({ domain, policy })));
  const cells = [];
  let laneIndex = 0;
  while (cells.length < count && domains.length) {
    const lane = domains[laneIndex % domains.length];
    const queryVariant = variations[Math.floor(laneIndex / domains.length) % variations.length] || variations[0];
    const matchType = lane.policy.id === "cheap-global-lanes" ? "variation-cheap-option" : queryVariant.matchType;
    const query = queryVariant.query;
    cells.push({
      cell: cells.length + 1,
      status: "search-ready",
      providerPolicyId: lane.policy.id,
      provider: lane.domain,
      sourceType: lane.policy.sourceType,
      accessMode: lane.policy.accessMode,
      matchType,
      queryLabel: queryVariant.label,
      query,
      url: searchUrlForDomain(lane.domain === "manufacturer-site" || lane.domain === "brand-site" || lane.domain === "retailer-site" ? (tryExtractDomain(inputs.productUrl) || "google.com") : lane.domain, query),
      note: lane.policy.reason
    });
    laneIndex += 1;
  }
  return {
    version: PRICE_COMPARISON_VERSION,
    mode,
    count,
    exactOnly,
    includeVariations,
    includeCheap,
    includeSales,
    sourceWarnings: PRICE_COMPARISON_SOURCE_WARNINGS,
    queryVariations: variations,
    sourcePolicies: activePolicies,
    cells
  };
}

export function runPriceComparisonSearch(inputs = {}) {
  const plan = buildPriceComparisonPlan(inputs);
  const lines = [
    `Price comparison plan: ${plan.mode}`,
    `Cells prepared: ${plan.cells.length}/${PRICE_COMPARISON_MAX_CELLS}`,
    `Exact only: ${plan.exactOnly ? "yes" : "no"}`,
    `Variations enabled: ${plan.includeVariations ? "yes" : "no"}`,
    `Cheap marketplaces enabled: ${plan.includeCheap ? "yes" : "no"}`,
    `Sale/deal lanes enabled: ${plan.includeSales ? "yes" : "no"}`,
    `First cells: ${plan.cells.slice(0, 6).map((cell) => `${cell.cell}. ${cell.provider} · ${cell.matchType} · ${cell.queryLabel}`).join(" | ")}`,
    `Safety: ${PRICE_COMPARISON_SOURCE_WARNINGS[0]}`
  ];
  return lines.join("\n");
}

function inputField(name, label, type = "text", value = "") {
  const wrap = document.createElement("label");
  wrap.className = "price-field";
  const span = document.createElement("span");
  span.textContent = label;
  const input = document.createElement(type === "textarea" ? "textarea" : "input");
  input.name = name;
  if (type !== "textarea") input.type = type;
  input.value = value;
  wrap.append(span, input);
  return wrap;
}

export function renderPriceComparisonTool(container, tool, options = {}) {
  const defaults = { mode: tool.config?.mode || PRICE_COMPARISON_MODES.EXACT_COMPARE, count: 16, productName: "wireless earbuds", productUrl: "", productCode: "", brand: "", model: "", minPrice: "", maxPrice: "", color: "", size: "", includeVariations: "false", sources: "" , ...(options.initialInputs || {}) };
  const shell = document.createElement("div");
  shell.className = "price-comparison-tool-shell";
  const title = document.createElement("div");
  title.className = "special-tool-title";
  title.innerHTML = `<strong>${escapeHtml(tool.name)}</strong><span>${escapeHtml(tool.description || "Prepare source-safe product price cells.")}</span>`;
  const grid = document.createElement("div");
  grid.className = "price-form-grid";
  grid.append(
    inputField("productName", "Product name / description", "text", defaults.productName),
    inputField("productUrl", "Product URL", "text", defaults.productUrl),
    inputField("productCode", "SKU / GTIN / product code", "text", defaults.productCode),
    inputField("brand", "Brand", "text", defaults.brand),
    inputField("model", "Model", "text", defaults.model),
    inputField("minPrice", "Min price", "number", defaults.minPrice),
    inputField("maxPrice", "Max price", "number", defaults.maxPrice),
    inputField("color", "Color", "text", defaults.color),
    inputField("size", "Size", "text", defaults.size),
    inputField("count", "Cells 1–64", "number", defaults.count),
    inputField("sources", "Specific sites / source notes", "textarea", defaults.sources)
  );
  const modeWrap = document.createElement("label");
  modeWrap.className = "price-field";
  modeWrap.innerHTML = `<span>Mode</span>`;
  const modeSelect = document.createElement("select");
  modeSelect.name = "mode";
  Object.values(PRICE_COMPARISON_MODES).forEach((mode) => {
    const option = document.createElement("option");
    option.value = mode;
    option.textContent = mode.replaceAll("-", " ");
    if (mode === defaults.mode) option.selected = true;
    modeSelect.append(option);
  });
  modeWrap.append(modeSelect);
  const variations = document.createElement("label");
  variations.className = "inline-check price-variation-toggle";
  variations.innerHTML = `<input name="includeVariations" type="checkbox" ${String(defaults.includeVariations) === "true" ? "checked" : ""}> Include variations / cheap-option marketplaces`;
  const actions = document.createElement("div");
  actions.className = "tool-actions";
  const run = document.createElement("button");
  run.type = "button";
  run.textContent = "Prepare 64-cell price grid";
  actions.append(run);
  const result = document.createElement("div");
  result.className = "price-results-grid";
  const warning = document.createElement("p");
  warning.className = "muted special-tool-note";
  warning.textContent = "Foundation mode prepares source-safe cells and links. Production live prices need official APIs, permitted merchant feeds, or backend fetch rules.";
  const collect = () => {
    const data = Object.fromEntries(new FormData(form).entries());
    data.includeVariations = form.querySelector('[name="includeVariations"]')?.checked ? "true" : "false";
    return data;
  };
  const form = document.createElement("form");
  form.className = "tool-form";
  form.append(title, modeWrap, variations, grid, actions, warning, result);
  const renderPlan = () => {
    const plan = buildPriceComparisonPlan(collect());
    result.replaceChildren();
    for (const cell of plan.cells) {
      const card = document.createElement("a");
      card.className = `price-cell-card ${cell.providerPolicyId}`;
      card.href = cell.url;
      card.target = "_blank";
      card.rel = "noreferrer";
      card.innerHTML = `<strong>${String(cell.cell).padStart(2, "0")} · ${escapeHtml(cell.provider)}</strong><span>${escapeHtml(cell.matchType)} · ${escapeHtml(cell.accessMode)}</span><p>${escapeHtml(cell.query)}</p>`;
      result.append(card);
    }
  };
  run.addEventListener("click", renderPlan);
  container.replaceChildren(form);
  renderPlan();
}

export function verifyPriceComparisonConfig() {
  const errors = [];
  const ids = new Set();
  for (const tool of PRICE_TOOLS) {
    if (!tool.id || ids.has(tool.id)) errors.push(`Bad or duplicate price tool id ${tool.id}`);
    ids.add(tool.id);
    if (tool.engine !== "price_comparison") errors.push(`${tool.id} must use price_comparison engine`);
    if ((tool.tags || []).length < 12) errors.push(`${tool.id} needs dense tags`);
    if (!tool.contracts?.accepts?.length || !tool.contracts?.produces?.length) errors.push(`${tool.id} needs input/output contracts`);
  }
  const plan = buildPriceComparisonPlan({ productName: "wireless earbuds", count: 64, includeVariations: "true", mode: PRICE_COMPARISON_MODES.BUDGET_MATCH, maxPrice: 40 });
  if (plan.cells.length !== 64) errors.push("Price comparison plan should prepare 64 cells");
  if (!plan.cells.some((cell) => cell.provider === "temu.com")) errors.push("Variation mode should include Temu lane");
  if (!plan.cells.some((cell) => cell.provider === "alibaba.com")) errors.push("Variation mode should include Alibaba lane");
  return { ok: errors.length === 0, errors, version: PRICE_COMPARISON_VERSION, toolCount: PRICE_TOOLS.length, maxCells: PRICE_COMPARISON_MAX_CELLS };
}
