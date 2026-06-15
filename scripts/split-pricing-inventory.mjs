import { createReadStream, createWriteStream } from "node:fs";
import { access, mkdir, writeFile } from "node:fs/promises";
import { once } from "node:events";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline";

const scriptPath = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(scriptPath), "..");
const pricingDir = path.join(projectRoot, "exports", "pricing");
const sourceCsvPath = path.join(pricingDir, "toolgrid-pricing-inventory.csv");
const chunksDir = path.join(pricingDir, "chunks");
const csvChunksDir = path.join(chunksDir, "csv");
const jsonChunksDir = path.join(chunksDir, "json");
const manifestPath = path.join(chunksDir, "toolgrid-pricing-inventory-chunk-manifest.json");
const indexCsvPath = path.join(chunksDir, "toolgrid-pricing-inventory-chunk-index.csv");
const rowsPerChunk = Math.max(1, Number(process.env.PRICING_SPLIT_ROWS || 5000));

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function writeSafe(stream, chunk) {
  if (!stream.write(chunk)) await once(stream, "drain");
}

function csvEscape(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function parseCsvLine(line) {
  const cells = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];
    if (quoted && char === '"' && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(cell);
      cell = "";
    } else {
      cell += char;
    }
  }
  cells.push(cell);
  return cells;
}

function rowFromCsv(headers, values) {
  const row = {};
  headers.forEach((header, index) => {
    row[header] = values[index] ?? "";
  });
  return row;
}

async function closeChunk(activeChunk) {
  if (!activeChunk) return;
  await writeSafe(activeChunk.jsonStream, "\n]\n");
  activeChunk.csvStream.end();
  activeChunk.jsonStream.end();
  await Promise.all([once(activeChunk.csvStream, "finish"), once(activeChunk.jsonStream, "finish")]);
}

function chunkNames(chunkNumber) {
  const part = String(chunkNumber).padStart(4, "0");
  return {
    part,
    csvName: `toolgrid-pricing-inventory-part-${part}.csv`,
    jsonName: `toolgrid-pricing-inventory-part-${part}.json`
  };
}

async function openChunk({ chunkNumber, headers }) {
  const { part, csvName, jsonName } = chunkNames(chunkNumber);
  const csvPath = path.join(csvChunksDir, csvName);
  const jsonPath = path.join(jsonChunksDir, jsonName);
  const csvStream = createWriteStream(csvPath, { encoding: "utf8" });
  const jsonStream = createWriteStream(jsonPath, { encoding: "utf8" });
  await writeSafe(csvStream, `${headers.join(",")}\n`);
  await writeSafe(jsonStream, "[");
  return {
    chunkNumber,
    part,
    csvName,
    jsonName,
    csvPath,
    jsonPath,
    csvStream,
    jsonStream,
    jsonHasRows: false,
    rowCount: 0,
    firstToolId: "",
    lastToolId: "",
    pricingBuckets: {},
    sourceFamilies: {},
    assetTypes: {}
  };
}

function increment(bucket, key) {
  const safeKey = String(key || "unknown");
  bucket[safeKey] = (bucket[safeKey] || 0) + 1;
}

async function addRowToChunk(activeChunk, headers, line, row) {
  await writeSafe(activeChunk.csvStream, `${line}\n`);
  await writeSafe(activeChunk.jsonStream, `${activeChunk.jsonHasRows ? ",\n" : "\n"}${JSON.stringify(row)}`);
  activeChunk.jsonHasRows = true;
  activeChunk.rowCount += 1;
  activeChunk.firstToolId ||= row.tool_id || "";
  activeChunk.lastToolId = row.tool_id || "";
  increment(activeChunk.pricingBuckets, row.likely_pricing_bucket);
  increment(activeChunk.sourceFamilies, row.source_family);
  increment(activeChunk.assetTypes, row.asset_type);
}

async function main() {
  if (!(await pathExists(sourceCsvPath))) {
    throw new Error(`Pricing inventory CSV not found: ${sourceCsvPath}`);
  }
  await mkdir(csvChunksDir, { recursive: true });
  await mkdir(jsonChunksDir, { recursive: true });

  const reader = readline.createInterface({
    input: createReadStream(sourceCsvPath, { encoding: "utf8" }),
    crlfDelay: Infinity
  });

  let headers = null;
  let activeChunk = null;
  let chunkNumber = 0;
  let totalRows = 0;
  const chunks = [];

  for await (const line of reader) {
    if (!headers) {
      headers = parseCsvLine(line);
      continue;
    }
    if (!line.trim()) continue;
    if (!activeChunk || activeChunk.rowCount >= rowsPerChunk) {
      if (activeChunk) {
        await closeChunk(activeChunk);
        chunks.push({
          part: activeChunk.part,
          row_count: activeChunk.rowCount,
          first_tool_id: activeChunk.firstToolId,
          last_tool_id: activeChunk.lastToolId,
          csv_file: path.relative(projectRoot, activeChunk.csvPath),
          json_file: path.relative(projectRoot, activeChunk.jsonPath),
          pricing_buckets: activeChunk.pricingBuckets,
          source_families: activeChunk.sourceFamilies,
          asset_types: activeChunk.assetTypes
        });
      }
      chunkNumber += 1;
      activeChunk = await openChunk({ chunkNumber, headers });
    }
    const row = rowFromCsv(headers, parseCsvLine(line));
    await addRowToChunk(activeChunk, headers, line, row);
    totalRows += 1;
  }

  if (activeChunk) {
    await closeChunk(activeChunk);
    chunks.push({
      part: activeChunk.part,
      row_count: activeChunk.rowCount,
      first_tool_id: activeChunk.firstToolId,
      last_tool_id: activeChunk.lastToolId,
      csv_file: path.relative(projectRoot, activeChunk.csvPath),
      json_file: path.relative(projectRoot, activeChunk.jsonPath),
      pricing_buckets: activeChunk.pricingBuckets,
      source_families: activeChunk.sourceFamilies,
      asset_types: activeChunk.assetTypes
    });
  }

  const manifest = {
    generated_at: new Date().toISOString(),
    source_csv: sourceCsvPath,
    rows_per_chunk: rowsPerChunk,
    total_rows: totalRows,
    chunk_count: chunks.length,
    csv_chunks_dir: csvChunksDir,
    json_chunks_dir: jsonChunksDir,
    chunks
  };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  await writeFile(indexCsvPath, [
    "part,row_count,first_tool_id,last_tool_id,csv_file,json_file",
    ...chunks.map((chunk) => [
      chunk.part,
      chunk.row_count,
      chunk.first_tool_id,
      chunk.last_tool_id,
      chunk.csv_file,
      chunk.json_file
    ].map(csvEscape).join(","))
  ].join("\n") + "\n", "utf8");

  console.log("Created pricing inventory chunks:");
  console.log(csvChunksDir);
  console.log(jsonChunksDir);
  console.log(manifestPath);
  console.log(indexCsvPath);
  console.log(`Total rows split: ${totalRows.toLocaleString()}`);
  console.log(`Chunk count: ${chunks.length.toLocaleString()} pairs`);
  console.log(`Rows per chunk: ${rowsPerChunk.toLocaleString()}`);
}

await main();
