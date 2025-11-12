import type { Metadata } from "next";
import skills from "@/data/skills.json";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Skills | Next Mind Labs",
  description: "Explore the ten WEF-endorsed skills on the rise and discover micro-challenges to practise them."
};

export default function SkillsPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <div>
          <h1>Skills for an AI-powered workplace</h1>
          <p>
            Identify the ten WEF skills on the rise, paired with micro-challenges that help teams build habits,
            experiment quickly, and connect each skill to AI-driven workflows.
          </p>
        </div>
      </header>

      <section className={styles.grid} aria-label="List of skills">
        {skills.map((skill) => (
          <article key={skill.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className="tag">{skill.tag}</span>
              <h2>{skill.name}</h2>
            </div>
            <p>{skill.summary}</p>
            <div>
              <h3>Micro-challenges</h3>
              <ul>
                {skill.microChallenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


