import { loadAllWords } from "./data";
import { LuckentextClient } from "./LuckentextClient";

export const metadata = {
  title: "Lückentext-Training | Lernraum Schule",
  description: "Übe die richtige Schreibweise von Wörtern im Satzzusammenhang.",
};

export default async function LuckentextPage() {
  const words = await loadAllWords();
  return <LuckentextClient words={words} />;
}

