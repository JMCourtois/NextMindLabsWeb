import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { shuffleArray } from "@/lib/utils";
import type { SpellingWord } from "@/lib/types";
import { FehlerworterExerciseClient } from "../ExerciseClient";
import { loadAllWords, WORDS_PER_SET, RANDOM_WORD_COUNT } from "../data";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

type Params = {
  group: string;
};

function buildGroupSlug(index: number) {
  return `uebung-${index}`;
}

function groupTitle(index: number, start: number, end: number) {
  return `Übung ${index}: Wörter ${start}–${end}`;
}

function groupDescription(words: SpellingWord[]) {
  const preview = words.slice(0, 3).map((word) => word.word).join(", ");
  return `Trainiere diese zehn Wörter in Folge. Beispiele: ${preview} …`;
}

async function resolveGroup(groupParam: string) {
  const words = await loadAllWords();
  const totalGroups = Math.ceil(words.length / WORDS_PER_SET);

  if (groupParam === "zufall") {
    const randomized = shuffleArray([...words]).slice(0, RANDOM_WORD_COUNT);
    return {
      title: "Zufallsmix: 20 Wörter querbeet",
      description: "Ein gemischter Durchlauf quer durch alle Fehlerwörter – perfekt zum Festigen.",
      storageKey: "nextmindlabs_spelling_progress_v1_random",
      words: randomized,
    };
  }

  const match = /^uebung-(\d+)$/.exec(groupParam);
  if (!match) {
    return null;
  }

  const index = Number(match[1]);
  if (!Number.isInteger(index) || index < 1 || index > totalGroups) {
    return null;
  }

  const startIndex = (index - 1) * WORDS_PER_SET;
  const endIndex = Math.min(startIndex + WORDS_PER_SET, words.length);
  const subset = words.slice(startIndex, endIndex);

  return {
    title: groupTitle(index, startIndex + 1, endIndex),
    description: groupDescription(subset),
    storageKey: `nextmindlabs_spelling_progress_v1_set_${index}`,
    words: subset,
  };
}

type PageProps = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { group: groupSlug } = await params;
  const group = await resolveGroup(groupSlug);
  if (!group) {
    return {
      title: "Fehlerwort-Übung nicht gefunden",
    };
  }
  return {
    title: `${group.title} | Next Mind Labs Schule`,
    description: group.description,
  };
}

export default async function FehlerworterGroupPage({ params }: PageProps) {
  const { group: groupSlug } = await params;
  const group = await resolveGroup(groupSlug);

  if (!group) {
    notFound();
  }

  return (
    <FehlerworterExerciseClient
      words={group.words}
      title={group.title}
      description={group.description}
      storageKey={group.storageKey}
      backHref="../"
    />
  );
}


