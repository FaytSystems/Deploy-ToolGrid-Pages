import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

const copyTargets = [
  "index.html",
  "src",
  "assets"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const target of copyTargets) {
  await cp(path.join(root, target), path.join(dist, target), {
    recursive: true,
    force: true,
    filter(source) {
      return !source.includes(`${path.sep}.tmp-chrome`);
    }
  });
}

await writeFile(
  path.join(dist, ".nojekyll"),
  "",
  "utf8"
);

console.log(`Built GitHub Pages dist at ${dist}`);
