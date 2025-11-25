import Link from "next/link";
import styles from "./page.module.css";

const uebungen = [
  {
    slug: "fehlerworter",
    href: "/schule/ubungen/fehlerworter",
    title: "100 Fehlerwörter",
    description:
      "Höre das Wort und baue es Buchstabe für Buchstabe nach.",
    badge: "Audio + Buchstaben",
  },
  {
    slug: "luckentext",
    href: "/schule/ubungen/luckentext",
    title: "Lückentext-Training",
    description:
      "Vervollständige Sätze mit dem richtigen Wort.",
    badge: "Satzverständnis",
  },
  {
    slug: "stellenwerttrainer",
    href: "/schule/ubungen/stellenwert",
    title: "Stellenwert-Trainer",
    description:
      "Verstehe Dezimal-, Binär- und Hex-Systeme interaktiv.",
    badge: "Zahlenverständnis",
  },
];

export default function SchuleHomepage() {
  return (
    <main id="mainContent" className={styles.main}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Lernraum Schule</p>
        <h1 className={styles.title}>Digitale Werkzeuge</h1>
        <p className={styles.subtitle}>
          Interaktive Übungen für bewusstes Lernen. Ohne Ablenkung, fokussiert auf das Verstehen.
        </p>
      </section>

      <section aria-label="Verfügbare Übungen">
        <ul className={styles.cardGrid}>
          {uebungen.map((uebung) => (
            <li key={uebung.slug} className={styles.cardItem}>
              <Link href={uebung.href} className={styles.cardLink} aria-label={`${uebung.title} öffnen`}>
                <span className={styles.cardBadge}>{uebung.badge}</span>
                <h2 className={styles.cardTitle}>{uebung.title}</h2>
                <p className={styles.cardDescription}>{uebung.description}</p>
                <span className={styles.cardCta} aria-hidden="true">
                  Übung öffnen →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
