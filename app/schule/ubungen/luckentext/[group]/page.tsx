import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { shuffleArray } from "@/lib/utils";
import type { SpellingWord } from "@/lib/types";
import { LuckentextExerciseClient } from "../LuckentextExerciseClient";
import { loadAllWords } from "../data";

type Params = {
  group: string;
};

async function resolveGroup(groupParam: string) {
  const words = await loadAllWords();
  const validWords = words.filter((w) => w.sentence && w.sentence.includes("___"));

  if (groupParam === "zufall") {
    const randomized = shuffleArray([...validWords]).slice(0, 10);
    return {
      title: "Zufallsauswahl",
      description: "10 gemischte Sätze aus allen Bereichen",
      words: randomized,
    };
  }

  const match = /^gruppe-(\d+)$/.exec(groupParam);
  if (!match) {
    return null;
  }

  const groupNumber = Number(match[1]);
  const startIndex = (groupNumber - 1) * 10;
  const endIndex = startIndex + 10;
  
  if (startIndex >= validWords.length || groupNumber < 1) {
    return null;
  }

  const groupWords = validWords.slice(startIndex, endIndex);

  return {
    title: `Gruppe ${groupNumber}`,
    description: `${groupWords.length} Sätze`,
    words: groupWords,
  };
}

export async function generateStaticParams() {
  const words = await loadAllWords();
  const validWords = words.filter((w) => w.sentence && w.sentence.includes("___"));
  const totalGroups = Math.ceil(validWords.length / 10);
  
  const params = Array.from({ length: totalGroups }, (_, index) => ({
    group: `gruppe-${index + 1}`,
  }));
  params.push({ group: "zufall" });
  return params;
}

type PageProps = {
  params: Promise<Params>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { group: groupSlug } = await params;
  const group = await resolveGroup(groupSlug);
  if (!group) {
    return {
      title: "Lückentext-Übung nicht gefunden",
    };
  }
  return {
    title: `${group.title} | Lückentext-Training | Next Mind Labs Schule`,
    description: group.description,
  };
}

export default async function LuckentextGroupPage({ params }: PageProps) {
  const { group: groupSlug } = await params;
  const group = await resolveGroup(groupSlug);

  if (!group) {
    notFound();
  }

  return (
    <LuckentextExerciseClient
      words={group.words}
      title={group.title}
      description={group.description}
    />
  );
}

