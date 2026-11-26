// Write the contest's single-line entry to the requested output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const text = "At 50x, one wick turns my thesis into a memorial candle.";
const length = [...text].length;

if (length < 1 || length > 200 || text.trim().length === 0) {
  throw new Error(`Entry must be 1-200 nonblank characters; got ${length}.`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), text, "utf8");
