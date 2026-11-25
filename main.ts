// Robot Romance: One-Line Pickup Lines for AI
// Writes one original pickup line for a robot/AI to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, a single line, not only whitespace.
// The joke twists a machine failure mode (hallucination) instead of the
// worn battery / charging / reboot moves, so the laugh comes from the
// machine premise itself: setup asks the model, punch makes the glitch
// the romantic hero.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked the model for my soulmate and it hallucinated you — best error it's ever made.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  const line = LINE.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (/\r|\n/.test(line)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  console.log(`wrote ${line.length} chars to ${OUTPUT_PATH}`);
}

main();
