const normalize = (value) => String(value || "").toLowerCase().trim();
const slugify = (value) => normalize(value)
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export const WEBCAM_EXPLORER_VERSION = "2026-06-13-pg-webcam-explorer-v1";
export const WEBCAM_TOOL_ID = "pg-live-webcam-explorer";
export const WEBCAM_MAX_UI_OUTPUTS = 64;

export const WEBCAM_CONTENT_POLICY = Object.freeze({
  rating: "PG / family-safe scenic, nature, city, animal, weather, and public-place webcams only",
  blocked: ["nudity", "adult content", "private surveillance", "bedrooms/private homes", "voyeur content", "harassment/stalking", "illegal streams"],
  rule: "Only include public, scenic, educational, travel, animal, weather, park, official tourism, or official provider pages. Respect provider embed/licensing policies."
});

export const WEBCAM_PROVIDER_NOTES = Object.freeze([
  {
    id: "explore-org",
    name: "Explore.org",
    pgFocus: "philanthropic live nature and animal cameras",
    embedPolicy: "mixed-official-pages",
    note: "Use official camera pages or official YouTube embeds when available. Do not scrape direct streams."
  },
  {
    id: "earthcam",
    name: "EarthCam",
    pgFocus: "tourism, entertainment, skyline, beach, and destination webcams",
    embedPolicy: "license-required-for-live-embed",
    note: "EarthCam public pages are safe to link; live embeds generally require licensing or partner/API approval."
  },
  {
    id: "skyline-webcams",
    name: "SkylineWebcams",
    pgFocus: "worldwide scenic city, landmark, beach, and attraction webcams",
    embedPolicy: "hosts-only-live-embed",
    note: "Only webcam hosts may embed live video; external users can use supported photogram/share options where offered."
  },
  {
    id: "webcamtaxi",
    name: "Webcamtaxi",
    pgFocus: "global HD travel, city, beach, ski, port, and nature webcams",
    embedPolicy: "link-or-provider-page",
    note: "Use provider pages unless a camera explicitly exposes embeddable HTML."
  },
  {
    id: "nps",
    name: "U.S. National Park Service",
    pgFocus: "national parks, wildlife, weather, geysers, air quality, and scenic public lands",
    embedPolicy: "official-page-or-image-refresh",
    note: "Many NPS cameras are official pages or refreshing images; use official pages and respect update intervals."
  },
  {
    id: "livebeaches",
    name: "Live Beaches",
    pgFocus: "U.S. and Caribbean beach, surf, boardwalk, hotel, and weather cams",
    embedPolicy: "link-or-provider-page",
    note: "Use public pages or supported embeds only."
  },
  {
    id: "youtube-live",
    name: "YouTube Live",
    pgFocus: "official live nature/city/scenic channels with YouTube embeds",
    embedPolicy: "embed-when-owner-allows",
    note: "YouTube embeds work only when the stream owner allows embedding; otherwise use the watch page."
  }
]);

const sourceSeed = [
  { provider: "Explore.org", providerId: "explore-org", baseUrl: "https://explore.org/livecams", embedPolicy: "official-page", regions: ["Alaska", "Kenya", "Panama", "Texas", "New York", "California"], categories: ["animals", "nature", "birds", "underwater", "farm", "forest"], scenes: ["African Wildlife Waterhole", "Panama Hummingbird Feeder", "Sheep Barn Farm Sanctuary", "Texas Backyard Wildlife", "Bat Cave Emergence", "Underwater Kelp Forest", "Bear River Lookout", "Puffin Nest Watch"] },
  { provider: "National Park Service", providerId: "nps", baseUrl: "https://www.nps.gov/subjects/watchingwildlife/webcams.htm", embedPolicy: "official-page", regions: ["Yellowstone", "Yosemite", "Grand Canyon", "Channel Islands", "Bryce Canyon", "Glacier"], categories: ["national park", "wildlife", "geyser", "mountain", "forest", "air quality"], scenes: ["Old Faithful Geyser", "High Sierra View", "Kelp Forest", "Bryce Canyon Hoodoos", "Mountain Air Quality", "Wildlife Corridor", "River Valley", "Desert Vista"] },
  { provider: "EarthCam", providerId: "earthcam", baseUrl: "https://www.earthcam.com/network/", embedPolicy: "license-required", regions: ["Seattle", "New York", "Los Angeles", "Hawaii", "Sint Maarten", "Spain"], categories: ["city", "skyline", "beach", "port", "landmark", "weather"], scenes: ["Seattle Skyline", "Times Square Street View", "Port of LA", "Waikoloa Village", "Sint Maarten Harbor", "Tamariu Beach", "Downtown Overlook", "Sunset City Cam"] },
  { provider: "SkylineWebcams", providerId: "skyline-webcams", baseUrl: "https://www.skylinewebcams.com/en.html", embedPolicy: "hosts-only-live", regions: ["Italy", "Spain", "Greece", "Thailand", "Seychelles", "Malta"], categories: ["city", "beach", "landmark", "plaza", "coast", "tourism"], scenes: ["Rome Colosseum", "Trevi Fountain", "Venice Rialto Bridge", "Tenerife Beach", "Seychelles Cove", "Malta Harbor", "Greek Island Coast", "Thailand Beach"] },
  { provider: "Webcamtaxi", providerId: "webcamtaxi", baseUrl: "https://www.webcamtaxi.com/webcams", embedPolicy: "provider-page", regions: ["Worldwide", "Portugal", "Canada", "Japan", "Norway", "United States"], categories: ["travel", "city", "beach", "ski", "port", "weather"], scenes: ["World Travel Cam", "Harbor Overlook", "Ski Mountain", "Beach Boardwalk", "City Center", "Port Entrance", "Rainy Street View", "Mountain Village"] },
  { provider: "Live Beaches", providerId: "livebeaches", baseUrl: "https://www.livebeaches.com/", embedPolicy: "provider-page", regions: ["Florida", "Hawaii", "Caribbean", "New Jersey", "New York", "California"], categories: ["beach", "surf", "boardwalk", "weather", "resort", "coast"], scenes: ["Venice Beach California", "Florida Surf Check", "Hawaii Beach Outlook", "Caribbean Cove", "Boardwalk Crowd View", "Pier Weather", "Resort Beach", "Island Sunset"] },
  { provider: "YouTube Live", providerId: "youtube-live", baseUrl: "https://www.youtube.com/results?search_query=live+nature+webcam", embedPolicy: "owner-allows-embed", regions: ["Worldwide", "Forest", "Ocean", "Rainforest", "Desert", "Mountain"], categories: ["nature", "relaxing", "forest", "rainforest", "desert", "ocean"], scenes: ["Forest Wildlife Live", "Ocean Waves Live", "Rainforest Soundscape", "Desert Sky Cam", "Mountain Weather Live", "Bird Feeder Live", "River Nature Live", "Coral Reef Live"] }
];

const exactPublicRecords = [
  {
    id: "explore-african-animal-lookout",
    title: "African Animals Lookout Camera",
    provider: "Explore.org",
    providerId: "explore-org",
    category: "animals",
    region: "Kenya",
    environment: "savanna",
    pageUrl: "https://explore.org/livecams/african-wildlife/african-animal-lookout-camera",
    embedUrl: "",
    embedPolicy: "official-page",
    pgRating: "PG",
    tags: ["africa", "animals", "wildlife", "savanna", "elephants", "nature", "educational"]
  },
  {
    id: "explore-sheep-barn-farm-sanctuary",
    title: "Sheep Barn Farm Sanctuary Camera",
    provider: "Explore.org",
    providerId: "explore-org",
    category: "farm animals",
    region: "Watkins Glen, New York",
    environment: "farm",
    pageUrl: "https://explore.org/livecams/farm-sanctuary/sheep-barn-farm-sanctuary",
    embedUrl: "",
    embedPolicy: "official-page",
    pgRating: "PG",
    tags: ["sheep", "farm", "sanctuary", "animals", "barn", "education", "calm"]
  },
  {
    id: "explore-texas-backyard-wildlife",
    title: "Texas Backyard Wildlife Cameras",
    provider: "Explore.org",
    providerId: "explore-org",
    category: "wildlife",
    region: "Texas",
    environment: "backyard habitat",
    pageUrl: "https://explore.org/livecams/texas-backyard-wildlife/backyard-cams",
    embedUrl: "",
    embedPolicy: "official-page",
    pgRating: "PG",
    tags: ["texas", "backyard", "birds", "deer", "wildlife", "nature", "feeder"]
  },
  {
    id: "nps-yellowstone-old-faithful",
    title: "Yellowstone Old Faithful and Upper Geyser Basin",
    provider: "National Park Service",
    providerId: "nps",
    category: "national park",
    region: "Yellowstone National Park",
    environment: "geyser basin",
    pageUrl: "https://www.nps.gov/yell/learn/photosmultimedia/webcams.htm",
    embedUrl: "",
    embedPolicy: "official-page",
    pgRating: "PG",
    tags: ["yellowstone", "old faithful", "geyser", "national park", "nature", "weather"]
  },
  {
    id: "earthcam-seattle-skyline",
    title: "Seattle Skyline and Space Needle Camera",
    provider: "EarthCam",
    providerId: "earthcam",
    category: "city skyline",
    region: "Seattle, Washington",
    environment: "city",
    pageUrl: "https://www.earthcam.com/usa/washington/seattle/",
    embedUrl: "",
    embedPolicy: "license-required",
    pgRating: "PG",
    tags: ["seattle", "skyline", "space needle", "city", "weather", "mount rainier"]
  }
];

function makeGeneratedRecords() {
  const records = [];
  for (const source of sourceSeed) {
    for (let index = 0; index < source.scenes.length; index += 1) {
      const scene = source.scenes[index];
      const category = source.categories[index % source.categories.length];
      const region = source.regions[index % source.regions.length];
      records.push({
        id: `${source.providerId}-${slugify(scene)}-${index + 1}`,
        title: scene,
        provider: source.provider,
        providerId: source.providerId,
        category,
        region,
        environment: category,
        pageUrl: source.baseUrl,
        embedUrl: "",
        embedPolicy: source.embedPolicy,
        pgRating: "PG",
        tags: [source.provider, source.providerId, scene, category, region, "live webcam", "pg", "family safe", "scenic", "public camera"].map(normalize)
      });
    }
  }
  return records;
}

export const WEBCAM_CATALOG = Object.freeze([...exactPublicRecords, ...makeGeneratedRecords()].map((cam, index) => ({
  ...cam,
  rank: index + 1,
  safeForToolGrid: cam.pgRating === "PG" && !/adult|nude|private/i.test(`${cam.title} ${cam.tags?.join(" ")}`),
  canEmbed: Boolean(cam.embedUrl) && ["owner-allows-embed", "official-embed", "embed"].includes(cam.embedPolicy),
  displayMode: Boolean(cam.embedUrl) ? "iframe" : "provider-card",
  tags: [...new Set([...(cam.tags || []), cam.category, cam.region, cam.environment, cam.provider, "live cam", "webcam", "stream", "no nudity", "pg only"].map(normalize).filter(Boolean))]
})));

export const WEBCAM_EXPLORER_TOOL = Object.freeze({
  id: WEBCAM_TOOL_ID,
  name: "PG Live Webcam Explorer",
  category: "In-House Webcam",
  description: "Search a PG-only database of nature, city, beach, wildlife, park, and scenic webcams, then display the selected number of safe webcam cards or embeddable streams in the workspace.",
  engine: "webcam_explorer",
  tags: [
    "webcam", "live cam", "live webcam", "nature cam", "city cam", "beach cam", "forest cam", "desert cam", "rainforest cam", "wildlife cam", "animal cam", "scenic camera", "skyline", "national park", "family safe", "pg", "no nudity", "64 streams", "multi window", "live stream", "travel cam", "weather cam"
  ],
  config: {
    maxOutputs: WEBCAM_MAX_UI_OUTPUTS,
    catalogVersion: WEBCAM_EXPLORER_VERSION,
    contentPolicy: WEBCAM_CONTENT_POLICY.rating
  },
  metadata: {
    accepts: ["text", "webcam-search", "location", "category", "project-prompt"],
    produces: ["webcam-grid", "provider-links", "safe-live-cam-selection", "visual-reference"],
    parallelSafe: true,
    canRunWithoutPriorOutput: true,
    requiresApproval: false,
    waterfallSignals: ["ready-for-multitask", "visual-reference", "provider-link-out"],
    plainExplanation: "Type what you want to watch, such as beach, forest, city skyline, birds, desert, or national park. The tool searches safe public webcam sources and shows matching live-cam cards. If a source allows embedding, it can appear inside the panel; if not, the card opens the official provider page."
  }
});

export function scoreWebcam(cam, query = "") {
  const q = normalize(query);
  if (!q) return cam.rank <= 16 ? 20 - cam.rank : 1;
  const tokens = q.split(/[^a-z0-9]+/).filter(Boolean);
  const haystack = [cam.title, cam.provider, cam.category, cam.region, cam.environment, ...(cam.tags || [])].join(" ").toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (haystack.includes(token)) score += 10;
    if (normalize(cam.title).includes(token)) score += 8;
    if (normalize(cam.category).includes(token)) score += 6;
    if (normalize(cam.region).includes(token)) score += 5;
    if (normalize(cam.provider).includes(token)) score += 4;
  }
  if (/nature|wildlife|animal|bird|forest|rainforest|park/.test(q) && /nature|wildlife|animals|birds|national park|forest|rainforest/.test(haystack)) score += 16;
  if (/city|skyline|street|downtown|landmark/.test(q) && /city|skyline|landmark|plaza/.test(haystack)) score += 16;
  if (/beach|ocean|surf|coast|island|waves/.test(q) && /beach|ocean|surf|coast|island|waves/.test(haystack)) score += 16;
  if (/desert|geyser|mountain|snow|ski/.test(q) && /desert|geyser|mountain|snow|ski/.test(haystack)) score += 14;
  if (cam.canEmbed) score += 4;
  return score;
}

export function searchWebcams(query = "", options = {}) {
  const limit = Math.max(1, Math.min(WEBCAM_MAX_UI_OUTPUTS, Number(options.limit) || 16));
  const provider = normalize(options.provider || "all");
  const category = normalize(options.category || "all");
  return WEBCAM_CATALOG
    .filter((cam) => cam.safeForToolGrid)
    .filter((cam) => provider === "all" || normalize(cam.providerId) === provider || normalize(cam.provider) === provider)
    .filter((cam) => category === "all" || normalize(cam.category).includes(category) || cam.tags.some((tag) => tag.includes(category)))
    .map((cam) => ({ cam, score: scoreWebcam(cam, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.cam.title.localeCompare(b.cam.title))
    .slice(0, limit)
    .map(({ cam, score }, index) => ({ ...cam, score, selectionRank: index + 1 }));
}

export function buildWebcamGridPlan(inputs = {}) {
  const query = inputs.query || inputs.text || inputs.prompt || "nature beach city scenic";
  const count = Math.max(1, Math.min(WEBCAM_MAX_UI_OUTPUTS, Number(inputs.count) || 16));
  const provider = inputs.provider || "all";
  const category = inputs.category || "all";
  const selected = searchWebcams(query, { limit: count, provider, category });
  const embedCount = selected.filter((cam) => cam.canEmbed).length;
  const linkOutCount = selected.length - embedCount;
  return {
    version: WEBCAM_EXPLORER_VERSION,
    query,
    requestedCount: count,
    returnedCount: selected.length,
    embedCount,
    linkOutCount,
    maxOutputs: WEBCAM_MAX_UI_OUTPUTS,
    warning: count > 16 ? "Large webcam walls can be heavy. The UI supports up to 64 outputs, but performance depends on device, browser, provider limits, and network speed." : "Small webcam grids are safer for performance.",
    selected
  };
}

export function runWebcamExplorer(inputs = {}) {
  const plan = buildWebcamGridPlan(inputs);
  return JSON.stringify({
    query: plan.query,
    returned: plan.returnedCount,
    embeddable: plan.embedCount,
    linkOutOnly: plan.linkOutCount,
    warning: plan.warning,
    selections: plan.selected.map((cam) => ({
      rank: cam.selectionRank,
      title: cam.title,
      provider: cam.provider,
      region: cam.region,
      category: cam.category,
      displayMode: cam.displayMode,
      embedPolicy: cam.embedPolicy,
      pageUrl: cam.pageUrl
    }))
  }, null, 2);
}

export function verifyWebcamCatalog() {
  const ids = new Set();
  const errors = [];
  for (const cam of WEBCAM_CATALOG) {
    if (ids.has(cam.id)) errors.push(`Duplicate webcam id: ${cam.id}`);
    ids.add(cam.id);
    if (cam.pgRating !== "PG") errors.push(`${cam.id} is not marked PG`);
    if (!cam.title || !cam.provider || !cam.pageUrl) errors.push(`${cam.id} missing title/provider/pageUrl`);
    if (!Array.isArray(cam.tags) || cam.tags.length < 8) errors.push(`${cam.id} needs richer tags`);
    if (!cam.safeForToolGrid) errors.push(`${cam.id} failed PG safe filter`);
  }
  return {
    ok: errors.length === 0,
    errors,
    stats: {
      catalogCount: WEBCAM_CATALOG.length,
      providerCount: new Set(WEBCAM_CATALOG.map((cam) => cam.provider)).size,
      categoryCount: new Set(WEBCAM_CATALOG.map((cam) => cam.category)).size,
      maxOutputs: WEBCAM_MAX_UI_OUTPUTS,
      embeddableCount: WEBCAM_CATALOG.filter((cam) => cam.canEmbed).length,
      linkOutCount: WEBCAM_CATALOG.filter((cam) => !cam.canEmbed).length
    }
  };
}

export function renderWebcamExplorer(container, tool, options = {}) {
  const root = document.createElement("div");
  root.className = "webcam-explorer-tool";
  const intro = document.createElement("p");
  intro.className = "mini-note";
  intro.textContent = "PG-only live cam search. Embeddable cameras appear inline when providers allow it; blocked/licensed sources open official provider pages instead.";

  const controls = document.createElement("div");
  controls.className = "webcam-controls form-grid two";
  const queryWrap = document.createElement("div");
  const queryLabel = document.createElement("label");
  queryLabel.textContent = "Search cam database";
  const queryInput = document.createElement("input");
  queryInput.type = "search";
  queryInput.value = options.project?.prompt || options.project?.input || "nature beach city scenic";
  queryInput.placeholder = "beach, forest, desert, rainforest, city skyline, animals...";
  queryWrap.append(queryLabel, queryInput);

  const countWrap = document.createElement("div");
  const countLabel = document.createElement("label");
  countLabel.textContent = "Outputs to show";
  const countInput = document.createElement("input");
  countInput.type = "number";
  countInput.min = "1";
  countInput.max = String(WEBCAM_MAX_UI_OUTPUTS);
  countInput.value = "16";
  countWrap.append(countLabel, countInput);

  const providerWrap = document.createElement("div");
  const providerLabel = document.createElement("label");
  providerLabel.textContent = "Provider";
  const providerSelect = document.createElement("select");
  const providers = [{ id: "all", name: "All safe providers" }, ...WEBCAM_PROVIDER_NOTES.map((provider) => ({ id: provider.id, name: provider.name }))];
  providerSelect.replaceChildren(...providers.map((provider) => {
    const option = document.createElement("option");
    option.value = provider.id;
    option.textContent = provider.name;
    return option;
  }));
  providerWrap.append(providerLabel, providerSelect);

  const categoryWrap = document.createElement("div");
  const categoryLabel = document.createElement("label");
  categoryLabel.textContent = "Category";
  const categorySelect = document.createElement("select");
  const categories = ["all", ...new Set(WEBCAM_CATALOG.map((cam) => cam.category).sort())];
  categorySelect.replaceChildren(...categories.map((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category === "all" ? "All categories" : category;
    return option;
  }));
  categoryWrap.append(categoryLabel, categorySelect);
  controls.append(queryWrap, countWrap, providerWrap, categoryWrap);

  const actions = document.createElement("div");
  actions.className = "tool-form-actions";
  const searchButton = document.createElement("button");
  searchButton.type = "button";
  searchButton.textContent = "Search webcams";
  const publishButton = document.createElement("button");
  publishButton.type = "button";
  publishButton.textContent = "Publish cam plan";
  actions.append(searchButton, publishButton);

  const summary = document.createElement("div");
  summary.className = "webcam-summary success-line";
  const grid = document.createElement("div");
  grid.className = "webcam-result-grid";

  const renderResults = () => {
    const plan = buildWebcamGridPlan({
      query: queryInput.value,
      count: countInput.value,
      provider: providerSelect.value,
      category: categorySelect.value
    });
    summary.textContent = `${plan.returnedCount} safe cam output${plan.returnedCount === 1 ? "" : "s"} · ${plan.embedCount} embeddable · ${plan.linkOutCount} provider-page card${plan.linkOutCount === 1 ? "" : "s"}. ${plan.warning}`;
    const columns = plan.returnedCount <= 4 ? 2 : plan.returnedCount <= 16 ? 4 : 8;
    grid.style.gridTemplateColumns = `repeat(${columns}, minmax(8rem, 1fr))`;
    const cards = plan.selected.map((cam) => {
      const card = document.createElement("article");
      card.className = `webcam-card webcam-${cam.displayMode}`;
      const title = document.createElement("strong");
      title.textContent = cam.title;
      const meta = document.createElement("span");
      meta.textContent = `${cam.provider} · ${cam.region} · ${cam.category}`;
      const policy = document.createElement("small");
      policy.textContent = `PG · ${cam.embedPolicy}`;
      if (cam.canEmbed && cam.embedUrl) {
        const iframe = document.createElement("iframe");
        iframe.title = cam.title;
        iframe.src = cam.embedUrl;
        iframe.loading = "lazy";
        iframe.allow = "autoplay; encrypted-media; picture-in-picture";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        card.append(iframe);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "webcam-placeholder";
        placeholder.textContent = "Official provider page";
        card.append(placeholder);
      }
      const link = document.createElement("a");
      link.href = cam.pageUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = cam.canEmbed ? "Open source" : "Open official cam page";
      card.append(title, meta, policy, link);
      return card;
    });
    grid.replaceChildren(...cards);
    return plan;
  };

  let currentPlan = renderResults();
  searchButton.addEventListener("click", () => { currentPlan = renderResults(); });
  publishButton.addEventListener("click", () => {
    currentPlan = renderResults();
    if (typeof options.onPublish === "function") {
      options.onPublish({
        tool,
        panelIndex: options.panelIndex ?? null,
        inputs: { query: queryInput.value, count: countInput.value, provider: providerSelect.value, category: categorySelect.value },
        output: JSON.stringify(currentPlan, null, 2),
        status: "ok",
        runMode: "webcam-explorer"
      });
      summary.textContent += " Published to project.";
    }
  });

  root.append(intro, controls, actions, summary, grid);
  container.replaceChildren(root);
}
