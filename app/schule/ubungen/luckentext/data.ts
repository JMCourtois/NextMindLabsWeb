import path from "path";
import { cache } from "react";
import fs from "fs/promises";
import type { SpellingWord } from "@/lib/types";

export const loadAllWords = cache(async (): Promise<SpellingWord[]> => {
  const filePath = path.join(process.cwd(), "public", "data", "words.json");
  const file = await fs.readFile(filePath, "utf8");
  return JSON.parse(file) as SpellingWord[];
});

