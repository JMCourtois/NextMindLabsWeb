import Link from "next/link";
import type { Metadata } from "next";
import { loadAllWords, WORDS_PER_SET, RANDOM_WORD_COUNT } from "./data";
import styles from "./overview.module.css";

export const metadata: Metadata = {
  title: "100 Fehlerwörter – Auswahl | Next Mind Labs Schule",
  description: "Wähle deine Übungseinheit der 100 Fehlerwörter: zehn thematische Sets oder ein Zufallsmix.",
};

export default async function FehlerworterOverviewPage() {
  const words = await loadAllWords();
  const totalGroups = Math.ceil(words.length / WORDS_PER_SET);

  const groups = Array.from({ length: totalGroups }, (_, index) => {
    const start = index * WORDS_PER_SET;
    const end = Math.min(start + WORDS_PER_SET, words.length);
    const sample = words.slice(start, end).slice(0, 3).map((word) => word.word);
    return {
      id: `uebung-${index + 1}`,
      title: `Übung ${index + 1}`,
      description: `Wörter ${start + 1} – ${end}`,
      examples: sample,
    };
  });

  return (
    <section className={styles.page} aria-labelledby="fehlerworterOverviewHeading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>100 Fehlerwörter</p>
        <h1 id="fehlerworterOverviewHeading">Wähle deine Übungseinheit</h1>
        <p>
          Die Wörter stammen aus den häufigsten Fehlern, die Kinder in den ersten Grundschuljahren machen.
          Jede Einheit trainiert zehn Begriffe in der Originalreihenfolge unserer Liste. Wenn deine Klasse sicherer wird, wartet am Ende ein
          Zufallsmix mit zwanzig Begriffen zur Wiederholung.
        </p>
      </header>

      <div className={styles.grid}>
        {groups.map((group) => (
          <Link key={group.id} href={`fehlerworter/${group.id}`} className={styles.cardLinkWrapper}>
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <span className={styles.cardCta} aria-hidden="true">
                Übung starten →
              </span>
            </article>
          </Link>
        ))}

        <Link href="fehlerworter/zufall" className={styles.cardLinkWrapper}>
          <article className={styles.card} data-accent="true">
            <div className={styles.cardHeader}>
              <h2>Zufallsmix</h2>
              <p>
                {RANDOM_WORD_COUNT} zufällig ausgewählte Wörter aus der kompletten Fehlerwortliste – perfekt zum Wiederholen
                oder für eine Abschlussrunde.
              </p>
            </div>
            <span className={styles.cardCta} aria-hidden="true">
              Zufall starten →
            </span>
          </article>
        </Link>
      </div>
    </section>
  );
}


