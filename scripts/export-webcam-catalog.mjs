import { writeFileSync, mkdirSync } from "node:fs";
import { WEBCAM_CATALOG, WEBCAM_EXPLORER_VERSION, WEBCAM_PROVIDER_NOTES, verifyWebcamCatalog } from "../src/webcam-explorer.js";

const escapeCsv = (value) => {
  const text = value === null || value === undefined ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
};

mkdirSync("exports", { recursive: true });
const verification = verifyWebcamCatalog();
writeFileSync("exports/webcam-catalog-summary.json", `${JSON.stringify({
  version: WEBCAM_EXPLORER_VERSION,
  verification,
  providers: WEBCAM_PROVIDER_NOTES
}, null, 2)}\n`);
const headers = ["rank", "id", "title", "provider", "region", "category", "displayMode", "embedPolicy", "pgRating", "pageUrl", "tags"];
const rows = WEBCAM_CATALOG.map((cam) => headers.map((header) => escapeCsv(header === "tags" ? cam.tags.join(" | ") : cam[header])).join(","));
writeFileSync("exports/webcam-catalog.csv", `${headers.join(",")}\n${rows.join("\n")}\n`);
console.log(`${WEBCAM_CATALOG.length} PG webcam records · ${verification.stats.providerCount} providers · ${verification.stats.linkOutCount} link-out/provider-page records.`);
console.log("Wrote exports/webcam-catalog-summary.json");
console.log("Wrote exports/webcam-catalog.csv");
