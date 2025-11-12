import type { Metadata } from "next";
import exercises from "@/data/exercises.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Exercises & Cases | Next Mind Labs",
  description: "Quizzes, case studies, and guided reflections to practise bias-aware decision-making."
};

const GROUPS = ["Quiz", "Case Study", "Guided Reflection"];

export default function ExercisesPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <h1>Exercises &amp; cases</h1>
        <p>
          Quick, high-impact learning formats designed for teams and classrooms. Mix and match to reinforce bias
          literacy, practise decision frameworks, and reflect on AI workflows.
        </p>
      </header>

      <section className={styles.tabs} aria-label="Exercise categories">
        {GROUPS.map((group) => (
          <article key={group} className={styles.card}>
            <h2>{group}</h2>
            <ul>
              {exercises
                .filter((exercise) => exercise.type === group)
                .map((exercise) => (
                  <li key={exercise.slug}>
                    <h3>{exercise.title}</h3>
                    <p>{exercise.summary}</p>
                    <p className={styles.meta}>
                      <span>{exercise.duration}</span>
                      <span>{exercise.skills.join(", ")}</span>
                    </p>
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}


