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
    return {
      id: `uebung-${index + 1}`,
      title: `Gruppe ${index + 1}`,
      description: `${end - start} Wörter`,
    };
  });

  return (
    <section className={styles.page} aria-labelledby="fehlerworterOverviewHeading">
       <Link href="/schule" className={styles.backLink}>
        ← Zur Übersicht
      </Link>

      <header className={styles.header}>
        <div className={styles.headerText}>
            <h1 id="fehlerworterOverviewHeading" className={styles.heading}>Sprach- und Hörtraining</h1>
            <p className={styles.headerDescription}>
            Die Wörter stammen aus den häufigsten Fehlern. Wähle eine Gruppe, um zu starten.
            </p>
        </div>
      </header>

      <div className={styles.groupSection}>
        <Link href="fehlerworter/zufall" className={styles.groupCard}>
            <h2 className={styles.groupCardTitle}>🎲 Zufallsauswahl</h2>
            <p className={styles.groupCardInfo}>
                {RANDOM_WORD_COUNT} zufällig ausgewählte Wörter
            </p>
        </Link>

        {groups.map((group) => (
          <Link key={group.id} href={`fehlerworter/${group.id}`} className={styles.groupCard}>
              <h2 className={styles.groupCardTitle}>{group.title}</h2>
              <p className={styles.groupCardInfo}>{group.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
