import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About | Next Mind Labs",
  description: "Discover the mission, approach, and impact principles behind Next Mind Labs."
};

export default function AboutPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <h1>About Next Mind Labs</h1>
        <p>
          We help organisations build bias-aware, AI-ready capabilities through experiential learning. Our team combines
          behavioural science, UX strategy, and learning design to make responsible technology adoption practical.
        </p>
      </header>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>Our mission</h2>
          <p>
            Equip teams with the mindsets, language, and rituals needed to thrive in an AI-rich future while staying
            grounded in human judgment and ethical guardrails.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Our approach</h2>
          <ul>
            <li>Behavioural insights translate into micro-experiments, prompts, and decision checklists.</li>
            <li>Every exercise pairs future skills with bias mitigation strategies.</li>
            <li>Instructor-led and async formats keep pace with hybrid teams.</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>Impact principles</h2>
          <ul>
            <li>Measure behaviour, not just knowledge.</li>
            <li>Design with and for the communities affected.</li>
            <li>Build open-source inspired playbooks to share wins.</li>
          </ul>
        </article>
      </section>

      <section className={styles.panel}>
        <h2>Who we work with</h2>
        <p>
          Innovation teams, school networks, public sector labs, and mission-driven startups who want responsible AI
          literacy to be part of their culture—not an afterthought.
        </p>
      </section>
    </main>
  );
}


