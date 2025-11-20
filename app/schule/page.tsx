import Link from "next/link";
import styles from "./page.module.css";

const uebungen = [
  {
    slug: "fehlerworter",
    href: "/schule/ubungen/fehlerworter",
    title: "100 Fehlerwörter",
    description:
      "Höre das Wort, setze die Buchstaben richtig zusammen und überprüfe deine Lösung.",
    badge: "Audio + Buchstaben",
  },
  {
    slug: "stellenwerttrainer",
    href: "/schule/ubungen/stellenwert",
    title: "Stellenwert-Trainer",
    description:
      "Farben, Würfel und automatische Überträge zeigen Kindern Schritt für Schritt, wie Dezimal-, Binär- und Hex-Systeme wirklich funktionieren.",
    badge: "Zahlenverständnis",
  },
];

export default function SchuleHomepage() {
  return (
    <main id="mainContent" className={styles.main}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Lernraum Schule</p>
        <h1 className={styles.title}>Digitale Werkzeuge für bewusstes Lernen</h1>
        <p className={styles.subtitle}>
          Unsere interaktiven Übungen verbinden Sinneserfahrung, Reflexion und Gespräch. So merken
          Kinder nicht nur, dass sie sich irren können – sie verstehen auch, was sie daraus lernen
          können.
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


