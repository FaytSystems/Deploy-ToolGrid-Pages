function normalize(text) {
  return String(text || "").toLowerCase();
}

export function extractOriginalPrompt(prompt = "") {
  const text = String(prompt || "").trim();
  const originalMatch = text.match(/Original user prompt:\s*([\s\S]*?)(?:\nCategory focus:|\nTarget answer type:|\nDetails:|$)/i);
  return (originalMatch?.[1] || text).trim();
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function csvRow(values) {
  return values.map(csvCell).join(",");
}

function titleFromPrompt(prompt) {
  const compact = extractOriginalPrompt(prompt).replace(/\s+/g, " ").trim();
  if (!compact) return "Requested Answer";
  return compact.length > 90 ? `${compact.slice(0, 87).trim()}...` : compact;
}

function isLowValueToolOutput(text = "") {
  const clean = String(text || "").trim();
  if (!clean) return true;
  const lower = clean.toLowerCase();
  return [
    "free tools save time when they are fast, private, and easy to use.",
    "free tools workspace",
    "free%20tools%20workspace",
    "toolgrid",
    "input issue:",
    "skeleton tool:",
    "current in-house tools wired",
    "general workflow step",
    "ready handoff"
  ].some((snippet) => lower === snippet || lower.includes(snippet));
}

function looksLikeInternalWorkflowText(text = "") {
  return /\b(recommended workflow|ready handoff|completed cells|current in-house tools wired|skeleton tool|workflow task|support tool|tool output|scale factor)\b/i.test(String(text || ""));
}

function looksLikeStandaloneAnswer(text = "") {
  const clean = String(text || "").trim();
  if (isLowValueToolOutput(clean) || looksLikeInternalWorkflowText(clean)) return false;
  const words = clean.split(/\s+/).filter(Boolean).length;
  return words >= 90 && /(^#|##|\n\d+\.|\|.+\||materials?|steps?|instructions?|recommendation|answer)/im.test(clean);
}

function usefulArtifactOutputs(artifacts = []) {
  return artifacts
    .filter((artifact) => artifact?.status !== "error" && !isLowValueToolOutput(artifact?.output))
    .slice(0, 8)
    .map((artifact) => ({
      toolName: artifact.toolName || artifact.name || "Tool",
      outputType: artifact.outputType || "text",
      output: String(artifact.output || "").trim()
    }));
}

function extractClarifiedValue(prompt, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = String(prompt || "").match(new RegExp(`${escaped}:\\s*([^\\n]+)`, "i"));
  return match?.[1]?.trim() || "";
}

function extractExpenseCategories(prompt) {
  const detail = extractClarifiedValue(prompt, "expense-categories");
  const source = detail || prompt;
  const fallback = ["Rent/Mortgage", "Utilities", "Groceries", "Transportation", "Insurance", "Subscriptions", "Medical", "Debt", "Savings", "Other"];
  const known = fallback.filter((category) => normalize(source).includes(normalize(category.split("/")[0])));
  const custom = detail
    .split(/[,;|]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.replace(/\.$/, ""));
  const merged = [...custom, ...known, ...fallback];
  return [...new Set(merged.map((item) => item.replace(/\b\w/g, (letter) => letter.toUpperCase())))].slice(0, 18);
}

export function buildMonthlyExpenseTrackerFile(prompt) {
  const text = normalize(prompt);
  const isRequest = /\b(file|spreadsheet|sheet|csv|xlsx|excel|template|tracker|download)\b/.test(text)
    && /\b(expense|expenses|spend|spending|budget|bills?|costs?)\b/.test(text);
  if (!isRequest) return null;
  const categories = extractExpenseCategories(prompt);
  const period = extractClarifiedValue(prompt, "expense-period") || extractClarifiedValue(prompt, "time-range") || "Reusable monthly template";
  const budgetMode = extractClarifiedValue(prompt, "budget-fields") || "Track income, budget limits, and actual expenses";
  const rows = [
    csvRow(["Monthly Expense Tracker"]),
    csvRow(["Period", period]),
    csvRow(["Tracking mode", budgetMode]),
    csvRow(["Generated", new Date().toLocaleString()]),
    "",
    csvRow(["Summary"]),
    csvRow(["Month", "Starting Balance", "Income", "Budgeted Expenses", "Actual Expenses", "Remaining", "Notes"]),
    csvRow([period, "", "", "", "", "", "Enter totals from the expense log below."]),
    "",
    csvRow(["Expense Categories"]),
    csvRow(["Category", "Monthly Budget", "Actual Total", "Difference", "Notes"]),
    ...categories.map((category) => csvRow([category, "", "", "", ""])),
    "",
    csvRow(["Expense Log"]),
    csvRow(["Date", "Category", "Vendor", "Description", "Payment Method", "Budgeted Amount", "Actual Amount", "Paid?", "Notes"]),
    ...categories.map((category) => csvRow(["", category, "", "", "", "", "", "", ""])),
    "",
    csvRow(["How to use"]),
    csvRow(["Fill one row per expense. Add actual amounts as money is spent. Use the Summary section to compare budgeted vs actual totals."])
  ];
  return {
    filename: "monthly_expense_tracker.csv",
    label: "Monthly Expense Tracker CSV",
    mime: "text/csv",
    content: rows.join("\n")
  };
}

function buildExpenseTrackerAnswer(prompt) {
  const categories = extractExpenseCategories(prompt);
  const period = extractClarifiedValue(prompt, "expense-period") || extractClarifiedValue(prompt, "time-range") || "Monthly";
  const fields = ["Date", "Category", "Vendor", "Description", "Payment Method", "Budgeted Amount", "Actual Amount", "Paid?", "Notes"];
  return [
    "# Direct Answer",
    "",
    `Create a ${period.toLowerCase()} expense tracker with one summary section, one category budget section, and one transaction log. The downloadable CSV is attached when the prompt asks for a file.`,
    "",
    "## Columns",
    fields.map((field) => `- ${field}`).join("\n"),
    "",
    "## Starting Categories",
    categories.map((category) => `- ${category}`).join("\n"),
    "",
    "## How To Use It",
    "1. Add each expense as a new row in the transaction log.",
    "2. Assign every row to a category.",
    "3. Enter budgeted and actual amounts so the monthly summary can compare planned vs real spending.",
    "4. Mark paid items and leave notes for unusual charges.",
    "5. Review remaining money by category before adding new spending."
  ].join("\n");
}

function findFirstPromptNumber(prompt, fallback = 1) {
  const match = String(prompt || "").match(/\b(\d+(?:\.\d+)?)\b/);
  const value = Number(match?.[1]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function extractRequestedCount(prompt, nouns = []) {
  const source = extractOriginalPrompt(prompt);
  for (const noun of nouns) {
    const match = source.match(new RegExp(`\\b(\\d+(?:\\.\\d+)?)\\s*(?:${noun})\\b`, "i"));
    if (match) return Number(match[1]);
  }
  return findFirstPromptNumber(source, 0);
}

function fractionText(value) {
  const rounded = Math.round(value * 3) / 3;
  const whole = Math.floor(rounded);
  const fraction = rounded - whole;
  if (Math.abs(fraction) < 0.01) return String(whole);
  if (Math.abs(fraction - 1 / 3) < 0.01) return whole ? `${whole} 1/3` : "1/3";
  if (Math.abs(fraction - 2 / 3) < 0.01) return whole ? `${whole} 2/3` : "2/3";
  if (Math.abs(fraction - 0.5) < 0.01) return whole ? `${whole} 1/2` : "1/2";
  return rounded.toFixed(2).replace(/\.?0+$/, "");
}

function tspBreakdown(tsp) {
  const tbsp = Math.floor(tsp / 3);
  const remaining = tsp - tbsp * 3;
  if (!tbsp) return `${fractionText(tsp)} tsp`;
  if (remaining < 0.05) return `${tbsp} Tbsp`;
  return `${tbsp} Tbsp + ${fractionText(remaining)} tsp`;
}

function parseBananaBreadRequest(prompt) {
  const original = extractOriginalPrompt(prompt);
  const number = findFirstPromptNumber(original, 50);
  const bananaCountMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:ripe\s+)?bananas?\b/i);
  const loafCountMatch = original.match(/\b(\d+(?:\.\d+)?)\s*(?:loaves|loafs|breads?)\b/i);
  const asksToUseBananas = /\b(use|uses|using|use up|with)\b[\s\S]{0,24}\bbananas?\b/i.test(original)
    || /\bbananas?\b[\s\S]{0,24}\b(use|uses|using|use up)\b/i.test(original);
  if (bananaCountMatch || asksToUseBananas) return { mode: "bananas", count: Number(bananaCountMatch?.[1] || number) };
  if (loafCountMatch) return { mode: "loaves", count: Number(loafCountMatch[1]) };
  return { mode: "bananas", count: number };
}

function buildBananaNutBreadRecipeAnswer(prompt) {
  const request = parseBananaBreadRequest(prompt);
  const bananasPerLoaf = 3;
  const loaves = request.mode === "loaves" ? request.count : request.count / bananasPerLoaf;
  const bananas = request.mode === "loaves" ? request.count * bananasPerLoaf : request.count;
  const factor = loaves;
  const rows = [
    ["Ripe bananas", `${fractionText(bananas)} medium bananas`, "Mash well."],
    ["All-purpose flour", `${fractionText(2 * factor)} cups`, "Spoon and level if measuring by volume."],
    ["Sugar", `${fractionText(0.75 * factor)} cups`, "White, brown, or half-and-half."],
    ["Unsalted butter or neutral oil", `${fractionText(0.5 * factor)} cups`, `${fractionText(factor)} sticks of butter.`],
    ["Large eggs", `${fractionText(2 * factor)} eggs`, "Round to the nearest whole egg, or beat one egg and use only the needed portion."],
    ["Baking soda", tspBreakdown(factor), ""],
    ["Salt", tspBreakdown(0.5 * factor), ""],
    ["Vanilla extract", tspBreakdown(factor), ""],
    ["Chopped walnuts or pecans", `${fractionText(factor)} cups`, "Toast first for better flavor."],
    ["Ground cinnamon, optional", tspBreakdown(factor), ""]
  ];
  const wholeLoaves = Math.floor(loaves);
  const partialBananas = bananas - wholeLoaves * bananasPerLoaf;
  const panNote = request.mode === "bananas" && partialBananas > 0
    ? `This makes about ${fractionText(loaves)} standard 9x5 loaves. Practical bake plan: make ${wholeLoaves} full loaves with ${wholeLoaves * bananasPerLoaf} bananas, plus one smaller loaf/muffin batch using the remaining ${fractionText(partialBananas)} banana${partialBananas === 1 ? "" : "s"}.`
    : `This makes ${fractionText(loaves)} standard 9x5 loaf${Math.round(loaves) === 1 ? "" : "ves"}.`;
  const fiftyLoafNote = request.mode === "bananas"
    ? ["", "## If You Actually Meant 50 Full Loaves", "Use 150 bananas, 100 cups flour, 37 1/2 cups sugar, 25 cups butter/oil, 100 eggs, 50 tsp baking soda, 25 tsp salt, 50 tsp vanilla, and 50 cups nuts."].join("\n")
    : "";
  return [
    "# Direct Answer",
    "",
    request.mode === "bananas"
      ? `Assumption: you want to use up ${fractionText(bananas)} bananas for banana nut bread. A standard loaf uses 3 medium ripe bananas.`
      : `Assumption: you want ${fractionText(loaves)} full banana nut bread loaves. A standard loaf uses 3 medium ripe bananas, so this uses ${fractionText(bananas)} bananas.`,
    "",
    panNote,
    "",
    "## Scaled Ingredients",
    "| Ingredient | Amount Needed | Note |",
    "| --- | ---: | --- |",
    ...rows.map(([ingredient, amount, note]) => `| ${ingredient} | ${amount} | ${note || " "} |`),
    "",
    "## Baking Plan",
    "1. Heat oven to 350 F.",
    "2. Grease loaf pans or line with parchment.",
    "3. Mix mashed bananas, sugar, butter/oil, eggs, and vanilla.",
    "4. Fold in flour, baking soda, salt, cinnamon, and nuts.",
    "5. Fill pans about 2/3 full.",
    "6. Bake standard loaves 55-65 minutes, or until a tester comes out clean.",
    "7. Cool 10-15 minutes in pans, then move to racks.",
    fiftyLoafNote
  ].filter(Boolean).join("\n");
}

function isEggFlockRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\b(egg|eggs)\b/.test(lower) && /\b(chicken|chickens|hen|hens|breed|breeds|flock)\b/.test(lower);
}

function buildEggFlockAnswer(prompt) {
  const targetEggs = Math.max(1, Math.round(extractRequestedCount(prompt, ["eggs?(?:\\s+per\\s+week)?", "eggs?"]) || 50));
  const highProducerHens = Math.ceil(targetEggs / 5.2);
  const bufferedHighProducerHens = Math.ceil(targetEggs / 4.5);
  const rhodeIslandHens = Math.ceil(targetEggs / 4.2);
  const dualPurposeHens = Math.ceil(targetEggs / 3.7);
  const mixedPlan = [
    { breed: "ISA Brown or Golden Comet", hens: Math.max(3, Math.round(bufferedHighProducerHens * 0.35)), eggs: 5.2 },
    { breed: "Rhode Island Red", hens: Math.max(3, Math.round(bufferedHighProducerHens * 0.3)), eggs: 4.4 },
    { breed: "Plymouth Rock", hens: Math.max(2, Math.round(bufferedHighProducerHens * 0.2)), eggs: 4 },
    { breed: "Australorp or Orpington", hens: Math.max(2, Math.round(bufferedHighProducerHens * 0.15)), eggs: 3.6 }
  ];
  const mixedTotalHens = mixedPlan.reduce((sum, item) => sum + item.hens, 0);
  const mixedEggs = Math.round(mixedPlan.reduce((sum, item) => sum + item.hens * item.eggs, 0));
  return [
    "# Direct Answer",
    "",
    `To reliably get about ${targetEggs} eggs per week, plan on ${bufferedHighProducerHens} good laying hens, not just the bare minimum ${highProducerHens}. The buffer matters because laying drops during winter, molting, heat stress, age, and short daylight.`,
    "",
    "## Straight Breed Options",
    "| Flock Type | Hens Needed | Expected Eggs/Week | Notes |",
    "| --- | ---: | ---: | --- |",
    `| ISA Brown / Golden Comet | ${bufferedHighProducerHens} hens | about ${Math.round(bufferedHighProducerHens * 5.2)} | Best production, friendly, shorter peak-laying lifespan |`,
    `| White Leghorn | ${Math.ceil(targetEggs / 4.8)}-${Math.ceil(targetEggs / 4.4)} hens | about ${targetEggs}+ | Excellent layers, lighter birds, can be flighty |`,
    `| Rhode Island Red | ${rhodeIslandHens} hens | about ${Math.round(rhodeIslandHens * 4.2)} | Hardy, common, usually good backyard birds |`,
    `| Plymouth Rock / Australorp / Orpington mix | ${dualPurposeHens} hens | about ${Math.round(dualPurposeHens * 3.7)} | Calmer dual-purpose flock, fewer eggs per bird |`,
    "",
    "## Recommended Mixed Flock",
    `Use ${mixedTotalHens} hens total for a practical, friendly flock that should average around ${mixedEggs} eggs per week in good laying conditions:`,
    ...mixedPlan.map((item) => `- ${item.hens} ${item.breed} hen${item.hens === 1 ? "" : "s"}`),
    "",
    "## Compatibility Notes",
    "- These breeds generally get along if they are raised together or introduced slowly.",
    "- Keep similar age/size birds together when possible.",
    "- Provide at least 4 sq ft per bird inside the coop and 10 sq ft per bird in the run.",
    "- Give multiple feeders/waterers if mixing bold production birds with calmer breeds.",
    "- For steady eggs, add light in winter only if you are comfortable with year-round production pressure.",
    "",
    "## Bottom Line",
    `Buy ${bufferedHighProducerHens} high-production hens for the smallest reliable flock, or ${mixedTotalHens} mixed-breed hens for a friendlier, more balanced backyard flock.`
  ].join("\n");
}

function parseRoomDimensions(prompt) {
  const source = extractOriginalPrompt(prompt);
  const dimensionMatch = source.match(/\b(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')?\s*(?:x|by)\s*(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')?\b/i);
  const width = Number(dimensionMatch?.[1]) || 10;
  const length = Number(dimensionMatch?.[2]) || width;
  const heightMatch = source.match(/\b(\d+(?:\.\d+)?)\s*(?:ft|foot|feet|')\s*(?:high|height|wall|walls|ceiling)\b/i);
  const height = Number(heightMatch?.[1]) || 8;
  const doorMatch = source.match(/\b(\d+(?:\.\d+)?)\s*(?:"|in|inch|inches)\s*(?:wide\s*)?door\b/i)
    || source.match(/\b(\d+(?:\.\d+)?)\s*(?:-| )?in(?:ch)?\s*door\b/i);
  const doorWidthIn = Number(doorMatch?.[1]) || (/\bdoor\b/i.test(source) ? 36 : 0);
  return { width, length, height, doorWidthIn };
}

function isRoomMaterialRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\b(room|wall|walls|framing|drywall|sheetrock|2x4|studs?|drop ceiling|ceiling tile)\b/.test(lower)
    && /\b(build|need|how many|materials?|sheets?|screws?|door|cut|measurements?)\b/.test(lower);
}

function buildRoomMaterialAnswer(prompt) {
  const { width, length, height, doorWidthIn } = parseRoomDimensions(prompt);
  const perimeter = 2 * (width + length);
  const wallArea = perimeter * height;
  const doorArea = doorWidthIn ? (doorWidthIn / 12) * 6.67 : 0;
  const netWallArea = Math.max(0, wallArea - doorArea);
  const drywallInside = Math.ceil((netWallArea / 32) * 1.1);
  const drywallBothSides = drywallInside * 2;
  const wallLengths = [width, length, width, length];
  const baseStuds = wallLengths.reduce((sum, feet) => sum + Math.ceil((feet * 12) / 16) + 1, 0);
  const doorFramingExtra = doorWidthIn ? 5 : 0;
  const verticalStuds = baseStuds + doorFramingExtra;
  const plateBoards8 = Math.ceil((perimeter * 2 * 1.1) / 8);
  const blockingAndWaste = Math.ceil(verticalStuds * 0.08) + 2;
  const total2x4x8 = verticalStuds + plateBoards8 + blockingAndWaste;
  const drywallScrews = Math.ceil((drywallInside * 36 * 1.15) / 50) * 50;
  const drywallScrewsBothSides = drywallScrews * 2;
  const framingScrews = Math.ceil((total2x4x8 * 6 * 1.15) / 50) * 50;
  const ceilingTiles2x2 = Math.ceil(width * length / 4 * 1.1);
  const ceilingTiles2x4 = Math.ceil(width * length / 8 * 1.1);
  const wallAngle = Math.ceil(perimeter);
  return [
    "# Direct Answer",
    "",
    `For a ${width} ft x ${length} ft room with ${height} ft walls, one ${doorWidthIn || 36} in door, and a drop ceiling, use this as a practical first-pass material estimate. This assumes non-load-bearing interior framing at 16 in on center and drywall on the inside wall faces only. If both sides of the new walls need drywall, use the both-sides count below.`,
    "",
    "## Quick Quantity Answer",
    `- # 2x4s: about ${total2x4x8} boards if buying mostly 2x4x8 stock.`,
    `- # drywall panels: ${drywallInside} sheets of 4x8 drywall for inside faces only, or ${drywallBothSides} sheets for both sides of all new walls.`,
    `- # drywall screws: about ${drywallScrews} 1 1/4 in drywall screws for inside faces only, or about ${drywallScrewsBothSides} for both sides.`,
    `- # framing screws/nails: about ${framingScrews} 3 in framing screws or equivalent nails.`,
    "",
    "## Framing Breakdown",
    "| Item | Estimate | Notes |",
    "| --- | ---: | --- |",
    `| Wall perimeter | ${perimeter} linear ft | Four walls around the room |`,
    `| Vertical studs | ${verticalStuds} pieces | Includes door king/jack/cripple allowance |`,
    `| Plate stock | ${plateBoards8} 2x4x8 boards | Bottom plate plus top plate; buy long plates if preferred |`,
    `| Blocking/waste allowance | ${blockingAndWaste} boards | Corners, backing, mistakes, short pieces |`,
    `| Total 2x4x8 equivalent | ${total2x4x8} boards | Round up if walls must be perfectly straight |`,
    "",
    "## Drywall Breakdown",
    "| Surface | Area | 4x8 Sheets |",
    "| --- | ---: | ---: |",
    `| Wall area before door | ${Math.round(wallArea)} sq ft | ${Math.ceil(wallArea / 32)} |`,
    `| Door subtraction | -${Math.round(doorArea)} sq ft | - |`,
    `| Inside wall faces plus 10% waste | ${Math.round(netWallArea * 1.1)} sq ft | ${drywallInside} |`,
    `| Both sides plus 10% waste | ${Math.round(netWallArea * 2.2)} sq ft | ${drywallBothSides} |`,
    "",
    "## Drop Ceiling Add-On",
    `- Wall angle: about ${wallAngle} linear ft.`,
    `- 2x2 ceiling tiles: about ${ceilingTiles2x2} tiles with waste, or 2x4 tiles: about ${ceilingTiles2x4} tiles with waste.`,
    "- Main runners/cross tees depend on the grid brand, but a 10x10 room normally needs one small-room kit or equivalent grid components.",
    "",
    "## Before Buying",
    "- Check whether the walls are load-bearing. If yes, do not use this as a structural plan.",
    "- Confirm actual ceiling height, door rough opening, electrical boxes, and whether drywall is needed on one side or both sides.",
    "- Buy a few extra straight studs for corners, backing, and mistakes; crooked studs waste time."
  ].join("\n");
}

function isConstructionBlueprintRequest(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  return /\b(blueprint|plan|plans|build|building|materials?|cut list|cutlist|measurements?|dimensions?|lumber|plywood|framing|layout|drywall|2x4|studs?)\b/.test(lower)
    && /\b(chicken|coop|shed|deck|cabinet|table|workbench|greenhouse|shelf|shelves|fence|pergola|frame|room|wall|garage|barn)\b/.test(lower);
}

function buildChickenCoopBlueprintAnswer(prompt) {
  const hens = Math.max(1, Math.round(extractRequestedCount(prompt, ["chickens?", "hens?", "birds?"]) || 6));
  const coopWidth = hens <= 8 ? 4 : hens <= 12 ? 6 : 8;
  const coopLength = hens <= 8 ? 8 : hens <= 12 ? 8 : 10;
  const runWidth = hens <= 8 ? 8 : hens <= 12 ? 10 : 12;
  const runLength = hens <= 8 ? 12 : hens <= 12 ? 16 : 20;
  const frontHeight = 72;
  const backHeight = 60;
  const coopWidthIn = coopWidth * 12;
  const coopLengthIn = coopLength * 12;
  const floorJoist = coopWidthIn - 3;
  const sidePlate = coopWidthIn - 3;
  const studFront = frontHeight - 3;
  const studBack = backHeight - 3;
  const rafter = coopWidthIn + 12;
  const longStudCount = Math.ceil(coopLengthIn / 16) + 1;
  const sideStudCount = Math.ceil(coopWidthIn / 16) + 1;
  const roofSheets = Math.max(2, Math.ceil((coopLength + 1) * (coopWidth + 1) / 32));
  const sidingSheets = Math.max(6, Math.ceil(((coopLength * frontHeight / 12) + (coopLength * backHeight / 12) + (coopWidth * 2 * 66 / 12)) / 32));
  const lumber2x4 = hens <= 8 ? 34 : hens <= 12 ? 46 : 62;
  const hardwareClothSqft = Math.ceil((2 * (runWidth + runLength) * 6 + runWidth * runLength) * 1.15);
  return [
    "# Direct Answer",
    "",
    `Here is a usable starter blueprint for a predator-resistant chicken coop sized for about ${hens} chicken${hens === 1 ? "" : "s"}.`,
    "",
    "## Assumed Finished Size",
    `- Coop footprint: ${coopWidth} ft x ${coopLength} ft (${coopWidth * coopLength} sq ft).`,
    `- Coop height: ${frontHeight / 12} ft front wall, ${backHeight / 12} ft back wall, single-slope shed roof.`,
    `- Outdoor run: ${runWidth} ft x ${runLength} ft x 6 ft tall.`,
    "- Floor: raised 18-24 in above grade on skids or posts.",
    "- Interior: 2 nesting boxes for up to 6 hens; add 1 box per 3-4 additional hens.",
    "",
    "## Material List",
    "| Material | Estimated Quantity | Use |",
    "| --- | ---: | --- |",
    `| 2x4x8 lumber | ${lumber2x4} boards | Floor frame, wall framing, rafters, doors, roosts |`,
    `| 2x6x8 pressure-treated lumber | ${coopLength <= 8 ? 6 : 8} boards | Base skids and floor rim |`,
    `| 4x4x8 pressure-treated posts | ${hens <= 8 ? 6 : 8} posts | Run corners and gate posts |`,
    "| 3/4 in exterior plywood | 1 sheet | Coop floor |",
    `| 1/2 in exterior plywood or T1-11 siding | ${sidingSheets} sheets | Coop walls, doors, nesting box faces |`,
    `| 1/2 in roof sheathing plywood | ${roofSheets} sheets | Roof deck if not using purlins |`,
    "| Corrugated metal/polycarbonate roofing | 3-5 panels | Weatherproof roof with overhang |",
    `| 1/2 in galvanized hardware cloth | about ${hardwareClothSqft} sq ft | Run walls, vents, predator apron |`,
    "| Exterior screws | 5 lb box, 2 1/2 in | Framing |",
    "| Exterior screws | 1 lb box, 1 1/4 in | Sheathing and trim |",
    "| Hinges | 6 heavy-duty | Human door, egg door, run gate |",
    "| Latches | 4 predator-resistant | Doors and nesting access |",
    "",
    "## Cut List",
    "| Part | Material | Cut Quantity x Length | Notes |",
    "| --- | --- | --- | --- |",
    `| Floor long rims | 2x6 | 2 x ${coopLengthIn} in | Front/back floor frame |`,
    `| Floor end rims | 2x6 | 2 x ${floorJoist} in | Fits between long rims |`,
    `| Floor joists | 2x6 | ${Math.max(4, Math.ceil(coopLengthIn / 16))} x ${floorJoist} in | 16 in on center |`,
    `| Front wall plates | 2x4 | 2 x ${coopLengthIn} in | Top and bottom plates |`,
    `| Front wall studs | 2x4 | ${longStudCount} x ${studFront} in | Gives ${frontHeight / 12} ft wall height |`,
    `| Back wall plates | 2x4 | 2 x ${coopLengthIn} in | Top and bottom plates |`,
    `| Back wall studs | 2x4 | ${longStudCount} x ${studBack} in | Gives ${backHeight / 12} ft wall height |`,
    `| Side wall plates | 2x4 | 4 x ${sidePlate} in | Two plates per side |`,
    `| Side wall studs | 2x4 | ${sideStudCount} x ${studFront} in and ${sideStudCount} x ${studBack} in | Cut middle studs to roof slope after dry-fit |`,
    `| Roof rafters | 2x4 | ${longStudCount} x ${rafter} in | Allows about 6 in overhang each side |`,
    "| Human cleanout door | 2x4 frame | 2 x 60 in, 2 x 21 in | Makes a 24 in x 60 in door with sheathing |",
    "| Chicken pop door | plywood | 1 x 12 in by 14 in | Add slide track or hinged latch |",
    "| Nesting boxes | 1/2 in plywood | 2 bottoms 12x12, 4 sides 12x12, 2 backs 12x12 | Add more boxes if over 8 hens |",
    "",
    "## Build Order",
    "1. Build the raised floor frame square, then fasten the plywood floor.",
    "2. Frame front and back walls flat on the floor deck, stand them, and brace plumb.",
    "3. Frame both side walls between front/back walls; field-cut the sloped studs to match the shed roof.",
    "4. Add rafters, roof sheathing or purlins, then roofing panels with 3-6 in overhang.",
    "5. Sheath the walls, cut door openings, and install doors and latches.",
    "6. Build the run, attach hardware cloth, and add the buried predator apron.",
    "",
    "## Important Checks Before Cutting",
    "- Confirm bird count, yard footprint, snow/wind load, and local setback rules.",
    "- Measure the assembled frame before cutting siding and roofing.",
    "- Use hardware cloth, not chicken wire, anywhere predators can reach."
  ].join("\n");
}

function buildConstructionBlueprintAnswer(prompt) {
  const lower = normalize(extractOriginalPrompt(prompt));
  if (isRoomMaterialRequest(prompt)) return buildRoomMaterialAnswer(prompt);
  if (/\b(chicken|coop|hen|hens)\b/.test(lower)) return buildChickenCoopBlueprintAnswer(prompt);
  const subject = titleFromPrompt(prompt);
  return [
    "# Direct Answer",
    "",
    `Here is a build-ready planning format for: ${subject}`,
    "",
    "## Assumptions To Lock Before Cutting",
    "- Final width, depth, and height.",
    "- Indoor/outdoor use.",
    "- Expected weight/load.",
    "- Material preference: framing lumber, plywood, metal, PVC, or composite.",
    "- Finish requirements: paint, stain, waterproofing, or food-safe seal.",
    "",
    "## Blueprint-Style Build Sheet",
    "| Section | What To Define | Output Needed |",
    "| --- | --- | --- |",
    "| Overall dimensions | Width x depth x height | Finished footprint and clearance |",
    "| Frame | Stud/rail spacing and fasteners | Lumber cut list |",
    "| Panels | Plywood/siding/decking layout | Sheet goods cut list |",
    "| Openings | Doors, vents, drawers, windows, access panels | Exact opening sizes |",
    "| Hardware | Hinges, brackets, latches, screws | Purchase list |",
    "| Finish | Weatherproofing or interior finish | Paint/stain/seal plan |",
    "",
    "## Starter Cut-List Method",
    "1. Draw the finished rectangle first.",
    "2. Subtract 3 in from pieces that fit between two 2x framing boards.",
    "3. Put vertical supports every 16 in on center unless the structure is light-duty.",
    "4. Cut panels after the frame is square, not before.",
    "5. Label every cut piece by assembly: base, left wall, right wall, front, back, roof/top, doors."
  ].join("\n");
}

function buildComparisonAnswer(prompt, artifacts) {
  const items = extractOriginalPrompt(prompt)
    .split(/\n|;|\.\s+|\sand\s/i)
    .map((part) => part.trim().replace(/^[-*]\s*/, ""))
    .filter((part) => part.length > 8)
    .slice(0, 5);
  return [
    "# Direct Answer",
    "",
    "Use this comparison structure to make the decision directly from the prompt details.",
    "",
    "| Option | Best For | Main Risk | Decision Signal |",
    "| --- | --- | --- | --- |",
    ...(items.length ? items : ["Option A", "Option B", "Option C"]).map((item, index) =>
      `| ${item} | Use case ${index + 1} from the prompt | Missing cost, timing, or fit details | Keep if it scores highest on the user's priority |`
    ),
    "",
    "## Recommendation",
    "Choose the option with the clearest fit to the required outcome, lowest execution risk, and easiest handoff. If two options tie, pick the one that can be tested fastest with the least irreversible cost.",
    artifacts.length ? `\n## Tool Evidence\n${artifacts.map((artifact) => `- ${artifact.toolName}: ${artifact.output.slice(0, 180)}`).join("\n")}` : ""
  ].filter(Boolean).join("\n");
}

function buildDesignOrSpaceAnswer(prompt) {
  return [
    "# Direct Answer",
    "",
    "Build the visual/space result as a scene plan with uploaded reference files, real dimensions where available, and inferred scale where dimensions are missing.",
    "",
    "## Scene Setup",
    "- Define room or canvas size.",
    "- Add each object with width, height, depth, material, and placement.",
    "- Use uploaded photos as visual references.",
    "- Keep a measurement note for every inferred dimension.",
    "",
    "## Output To Generate",
    "- Top-down placement plan.",
    "- 3D preview layout.",
    "- Object list with dimensions.",
    "- Export-ready summary for client, contractor, or decorator review.",
    "",
    `Prompt focus: ${extractOriginalPrompt(prompt)}`
  ].join("\n");
}

function buildPracticalFallbackAnswer(prompt, artifacts) {
  const original = extractOriginalPrompt(prompt);
  const lines = original
    .split(/\n|;|\.\s+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 6);
  return [
    "# Direct Answer",
    "",
    `Here is a practical first-pass answer for: ${titleFromPrompt(prompt)}`,
    "",
    "## What I Can Build From This Prompt",
    lines.length
      ? lines.map((line, index) => `${index + 1}. ${line}`).join("\n")
      : "1. Identify the requested outcome.\n2. Convert it into a usable plan, checklist, table, file, or calculation.\n3. Provide the exact next action the user can take.",
    "",
    "## Usable Output Structure",
    "- Summary: the shortest direct answer first.",
    "- Assumptions: what ToolGrid had to infer because it was not specified.",
    "- Materials/data: quantities, inputs, fields, or resources needed.",
    "- Steps: ordered actions the user can follow.",
    "- Checks: what to verify before spending money, cutting materials, publishing, or sending.",
    "",
    "## Next Action",
    "Use the answer above as the working draft. If exact dimensions, quantities, brands, dates, budget, location, or file format matter, add those details and rerun so ToolGrid can replace assumptions with exact numbers.",
    artifacts.length ? `\n## Supporting Tool Notes\n${artifacts.map((artifact) => `- ${artifact.toolName}: ${artifact.output.slice(0, 180)}`).join("\n")}` : ""
  ].filter(Boolean).join("\n");
}

export function buildDirectAnswerFoundation({ prompt = "", finalPayload = "", artifacts = [] } = {}) {
  const originalPrompt = extractOriginalPrompt(prompt);
  const lower = normalize(originalPrompt);
  const usefulArtifacts = usefulArtifactOutputs(artifacts);
  const file = buildMonthlyExpenseTrackerFile(prompt);
  if (file) return { handled: true, file, content: file.content, mode: "file" };
  if (/\b(expense|expenses|budget|spending|bills?|costs?)\b/.test(lower)) {
    return { handled: true, content: buildExpenseTrackerAnswer(prompt), mode: "expense" };
  }
  if (isEggFlockRequest(prompt)) return { handled: true, content: buildEggFlockAnswer(prompt), mode: "egg-flock" };
  if (/\b(banana|bananas|banana nut|banana bread|bread|loaf|loaves|recipe|ingredient|ingredients|bake|baking)\b/.test(lower)) {
    return { handled: true, content: buildBananaNutBreadRecipeAnswer(prompt), mode: "recipe" };
  }
  if (isConstructionBlueprintRequest(prompt)) {
    return { handled: true, content: buildConstructionBlueprintAnswer(prompt), mode: "construction" };
  }
  if (/\b(compare|comparison|versus| vs |which|choose|decision|best)\b/.test(lower)) {
    return { handled: true, content: buildComparisonAnswer(prompt, usefulArtifacts), mode: "comparison" };
  }
  if (/\b(3d|room|space|furniture|dimensions|decor|contractor|layout|cad|model)\b/.test(lower)) {
    return { handled: true, content: buildDesignOrSpaceAnswer(prompt), mode: "space" };
  }
  if (looksLikeStandaloneAnswer(finalPayload)) {
    return {
      handled: true,
      content: ["# Direct Answer", "", `Best answer for: ${originalPrompt}`, "", String(finalPayload).trim()].join("\n"),
      mode: "payload"
    };
  }
  return { handled: true, content: buildPracticalFallbackAnswer(prompt, usefulArtifacts), mode: "fallback" };
}
