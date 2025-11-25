import Link from "next/link";
import type { Metadata } from "next";
import { loadAllWords } from "./data";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Lückentext-Training | Next Mind Labs Schule",
  description: "Wähle eine Übungsgruppe für das Lückentext-Training.",
};

export default async function LuckentextOverviewPage() {
  const words = await loadAllWords();
  const validWords = words.filter((w) => w.sentence && w.sentence.includes("___"));
  
  // Create 7 groups (6x10, 1x9)
  const groups = [];
  for (let i = 0; i < validWords.length; i += 10) {
    const groupWords = validWords.slice(i, i + 10);
    groups.push({
      id: `gruppe-${groups.length + 1}`,
      number: groups.length + 1,
      count: groupWords.length,
    });
  }

  return (
    <section className={styles.page}>
      <div className={styles.groupSection}>
        <Link href="/schule/ubungen/luckentext/zufall" className={styles.groupCard}>
          <h2 className={styles.groupCardTitle}>🎲 Zufallsauswahl</h2>
          <p className={styles.groupCardInfo}>10 gemischte Sätze aus allen Bereichen</p>
        </Link>

        {groups.map((group) => (
          <Link 
            key={group.id} 
            href={`/schule/ubungen/luckentext/${group.id}`} 
            className={styles.groupCard}
          >
            <h2 className={styles.groupCardTitle}>Gruppe {group.number}</h2>
            <p className={styles.groupCardInfo}>{group.count} Sätze</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
