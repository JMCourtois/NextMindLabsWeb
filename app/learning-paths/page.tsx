import type { Metadata } from "next";
import learningPaths from "@/data/learning-paths.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Learning Paths | Next Mind Labs",
  description: "Progressive tracks combining skills, bias mitigation, and exercises for sustained behaviour change."
};

export default function LearningPathsPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <h1>Learning paths</h1>
        <p>
          Move from awareness to mastery. Each path blends future skills with bias mitigation rituals and reflective
          exercises so teams can practise, measure, and iterate.
        </p>
      </header>

      <section className={styles.timeline} aria-label="Learning path timeline">
        {learningPaths.map((path, index) => (
          <article key={path.id} className={styles.card}>
            <header>
              <span className={styles.badge}>{path.duration}</span>
              <h2>{index + 1}. {path.title}</h2>
            </header>
            <p>{path.outcome}</p>
            <dl className={styles.definitionList}>
              <div>
                <dt className={styles.definitionTerm}>Focus skills</dt>
                <dd className={styles.definitionDesc}>{path.focus.join(", ")}</dd>
              </div>
              <div>
                <dt className={styles.definitionTerm}>Biases addressed</dt>
                <dd className={styles.definitionDesc}>{path.biases.join(", ")}</dd>
              </div>
              <div>
                <dt className={styles.definitionTerm}>Exercises</dt>
                <dd className={styles.definitionDesc}>{path.exercises.join(", ")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </main>
  );
}


