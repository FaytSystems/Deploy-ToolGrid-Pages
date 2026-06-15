import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src", "project-templates.js");
const chunkDir = path.join(root, "src", "project-templates");
const chunkPrefix = "project-templates-part-";
const chunkSize = 100;

function splitTopLevelItems(arraySource) {
  const items = [];
  let current = "";
  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escape = false;

  for (let i = 0; i < arraySource.length; i += 1) {
    const char = arraySource[i];
    current += char;

    if (escape) {
      escape = false;
      continue;
    }
    if (char === "\\") {
      escape = true;
      continue;
    }
    if (inString) {
      if (char === stringQuote) {
        inString = false;
        stringQuote = "";
      }
      continue;
    }
    if (char === "'" || char === '"' || char === "`") {
      inString = true;
      stringQuote = char;
      continue;
    }
    if (char === "{" || char === "[" || char === "(") depth += 1;
    if (char === "}" || char === "]" || char === ")") depth -= 1;
    if (char === "," && depth === 0) {
      items.push(current.slice(0, -1).trim());
      current = "";
    }
  }

  const trimmed = current.trim().replace(/,\s*$/, "");
  if (trimmed) items.push(trimmed);
  return items.filter(Boolean);
}

function findMatchingBracket(source, openIndex) {
  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escape = false;

  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];

    if (escape) {
      escape = false;
      continue;
    }
    if (char === "\\") {
      escape = true;
      continue;
    }
    if (inString) {
      if (char === stringQuote) {
        inString = false;
        stringQuote = "";
      }
      continue;
    }
    if (char === "'" || char === '"' || char === "`") {
      inString = true;
      stringQuote = char;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

const source = await readFile(sourcePath, "utf8");
const startMarker = "export const PROJECT_TEMPLATES = [";
const startIndex = source.indexOf(startMarker);

if (startIndex === -1) {
  throw new Error("Could not locate the project template array boundaries.");
}

const openBracketIndex = source.indexOf("[", startIndex);
const closeBracketIndex = findMatchingBracket(source, openBracketIndex);

if (openBracketIndex === -1 || closeBracketIndex === -1) {
  throw new Error("Could not locate the complete PROJECT_TEMPLATES array.");
}

const prefix = source.slice(0, startIndex);
const suffix = source.slice(closeBracketIndex + 1).replace(/^\n/, "");
const arraySource = source.slice(openBracketIndex + 1, closeBracketIndex);
const items = splitTopLevelItems(arraySource);
const partCount = Math.ceil(items.length / chunkSize);

await rm(chunkDir, { recursive: true, force: true });
await mkdir(chunkDir, { recursive: true });

const partFiles = [];
for (let partIndex = 0; partIndex < partCount; partIndex += 1) {
  const start = partIndex * chunkSize;
  const end = Math.min(items.length, start + chunkSize);
  const fileName = `${chunkPrefix}${String(partIndex + 1).padStart(2, "0")}.js`;
  const exportName = `PROJECT_TEMPLATES_PART_${String(partIndex + 1).padStart(2, "0")}`;
  const filePath = path.join(chunkDir, fileName);
  const body = `export const ${exportName} = [\n${items
    .slice(start, end)
    .map((item) => `  ${item}`)
    .join(",\n")}\n];\n`;
  await writeFile(filePath, body, "utf8");
  partFiles.push({ fileName, exportName });
}

const wrapperImports = partFiles
  .map(({ fileName, exportName }) => `import { ${exportName} } from "./project-templates/${fileName}";`)
  .join("\n");
const wrapper = `${prefix}${wrapperImports}\n\nexport const PROJECT_TEMPLATES = [\n${partFiles
  .map(({ exportName }) => `  ...${exportName}`)
  .join(",\n")}\n];\n\n${suffix}\n`;

await writeFile(sourcePath, wrapper, "utf8");

console.log(
  `Split ${items.length.toLocaleString()} templates into ${partFiles.length} chunk files in ${path.relative(
    root,
    chunkDir
  )}.`
);
