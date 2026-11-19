import { copyFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const source = join(botDir, "POST.json");
  const raw = await readFile(source, "utf8");
  const data = JSON.parse(raw);
  if (typeof data.url !== "string" || data.url.trim() === "") {
    throw new Error("POST.json is missing a non-empty string 'url' field");
  }
  await mkdir(outDir, { recursive: true });
  await copyFile(source, join(outDir, "POST.json"));
  console.log(`Copied POST.json to ${join(outDir, "POST.json")}`);
} catch (err) {
  console.error(`Failed to copy POST.json: ${err.message}`);
  process.exit(1);
}
