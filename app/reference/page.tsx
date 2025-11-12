import type { Metadata } from "next";
import glossary from "@/data/glossary.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Reference Guide | Next Mind Labs",
  description: "A quick glossary of the concepts and frameworks that underpin our bias-aware learning platform."
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function ReferencePage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <h1>Reference guide</h1>
        <p>
          Key concepts, frameworks, and vocabulary used across Next Mind Labs. Use the glossary as a primer before
          diving into exercises or bias mitigation workshops.
        </p>
      </header>

      <nav aria-label="Glossary alphabet" className={styles.alphabet}>
        {alphabet.map((letter) => (
          <a key={letter} href={`#letter-${letter}`} className={styles.alphaLink}>
            {letter}
          </a>
        ))}
      </nav>

      <section className={styles.list}>
        {alphabet.map((letter) => {
          const items = glossary.filter((entry) => entry.term.toUpperCase().startsWith(letter));
          if (items.length === 0) {
            return null;
          }
          return (
            <div key={letter} className={styles.group} id={`letter-${letter}`}>
              <h2>{letter}</h2>
              {items.map((item) => (
                <article key={item.term} className={styles.entry}>
                  <div>
                    <h3>{item.term}</h3>
                    <p>{item.definition}</p>
                  </div>
                  {item.related.length ? (
                    <div className={styles.entryActions}>
                      {item.related.map((link) => (
                        <a key={link} href={link}>
                          Learn more
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          );
        })}
      </section>
    </main>
  );
}


