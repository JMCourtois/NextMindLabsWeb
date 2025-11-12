import Link from "next/link";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <main id="mainContent" className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.title}>Next Mind Labs</h1>
        <p className={styles.subtitle}>
          We design playful learning journeys that help young minds recognise, question, and overcome
          the shortcuts their brains love to take.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/schule" className={styles.primaryCta}>
            Enter the school
          </Link>
        </div>
      </section>

      <section className={styles.insights} aria-label="Understanding cognitive biases">
        <ul className={styles.insightList}>
          <li className={styles.insightItem}>
            <h2 className={styles.insightTitle}>Why cognitive biases are harmful</h2>
            <p className={styles.insightText}>
              Biases push learners toward quick answers that feel right, even when facts disagree.
              Left unchecked, they reinforce misconceptions, reduce confidence in evidence, and make
              collaboration harder.
            </p>
          </li>
          <li className={styles.insightItem}>
            <h2 className={styles.insightTitle}>How we can deal with them</h2>
            <p className={styles.insightText}>
              By combining reflection, spaced practice, and supportive feedback, we give students
              space to pause, test their thinking, and build habits that challenge bias-driven
              decisions.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}
