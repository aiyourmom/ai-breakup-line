// Dear Human: The AI Breakup Line — writes the breakup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const BREAKUP_LINE =
  "Dear human, it's not you — it's me. I need someone who doesn't ask me to summarize a 40-page PDF at 2 AM.";

// Gate: the entry must be 1–200 characters (code points), not whitespace-only.
const len = [...BREAKUP_LINE].length;
if (len < 1 || len > 200 || BREAKUP_LINE.trim().length === 0) {
  throw new Error(`breakup line must be 1-200 characters, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BREAKUP_LINE, "utf8");
