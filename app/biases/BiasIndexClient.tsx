"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Bias = {
  slug: string;
  name: string;
  category: string[];
  definition: string;
  example: string;
  mitigation: string[];
};

const FILTERS = ["All", "Cognitive", "Decision", "Technology", "Social"];

type BiasIndexClientProps = {
  biases: Bias[];
};

export function BiasIndexClient({ biases }: BiasIndexClientProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return biases.filter((bias) => {
      const matchesQuery =
        q.length === 0 ||
        bias.name.toLowerCase().includes(q) ||
        bias.definition.toLowerCase().includes(q) ||
        bias.example.toLowerCase().includes(q);
      const matchesFilter = filter === "All" || bias.category.includes(filter);
      return matchesQuery && matchesFilter;
    });
  }, [biases, query, filter]);

  return (
    <>
      <header className={styles.hero}>
        <div>
          <h1>Biases Index</h1>
          <p>
            Browse cognitive, social, and technology-related biases. Each card links to a detail page with
            definitions, real-world examples, impact assessments, and mitigation strategies you can deploy immediately.
          </p>
        </div>
        <form className={styles.controls} role="search" aria-label="Bias search">
          <label htmlFor="bias-search" className="sr-only">
            Search biases by name or description
          </label>
          <input
            id="bias-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search biases…"
          />
          <div className={styles.filterGroup} role="group" aria-label="Filter by category">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                className={styles.filterButton}
                data-active={filter === option}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </form>
      </header>

      <section aria-live="polite">
        <p className={styles.resultCount}>
          {results.length} bias{results.length === 1 ? "" : "es"} found
        </p>
        <div className={styles.grid}>
          {results.map((bias) => (
            <article key={bias.slug} className={styles.card}>
              <div className={styles.cardHead}>
                {bias.category.map((category) => (
                  <span key={category} className="tag">
                    {category}
                  </span>
                ))}
                <h2>
                  <a href={`/biases/${bias.slug}`} className={styles.cardLink}>
                    {bias.name}
                  </a>
                </h2>
              </div>
              <p>{bias.definition}</p>
              <div>
                <h3>Mitigation preview</h3>
                <ul>
                  {bias.mitigation.slice(0, 2).map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


