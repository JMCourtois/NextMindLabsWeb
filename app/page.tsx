import Link from "next/link";
import skills from "@/data/skills.json";
import biases from "@/data/biases.json";
import glossary from "@/data/glossary.json";
import learningPaths from "@/data/learning-paths.json";
import exercises from "@/data/exercises.json";
import styles from "./page.module.css";

const FILTERS = ["All", "Cognitive", "Decision", "Technology", "Social"];

export default function LandingPage() {
  const featuredBiases = biases.slice(0, 3);
  const referenceSlice = glossary.slice(0, 4);

  return (
    <main id="mainContent" className={styles.page}>
      <section className={`${styles.hero} ${styles.sectionSurface}`} aria-labelledby="heroTitle">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>AI-ready learning</span>
          <h1 id="heroTitle">Next Mind Labs</h1>
          <p className={styles.heroSubtitle}>
            Build future-proof skills, decode cognitive biases, and navigate an AI-powered workplace
            with confidence.
          </p>
          <Link href="/skills" className={styles.primaryButton}>
            Start Learning
          </Link>
        </div>
        <div className={styles.heroVisual} aria-hidden="true" />
      </section>

      <section className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="biasesMatterHeading">
        <div className={styles.sectionHeader}>
          <h2 id="biasesMatterHeading">Why cognitive biases matter</h2>
          <p>
            Cognitive shortcuts protect our mental bandwidth, yet in high-stakes, AI-accelerated environments,
            they distort evidence, amplify inequity, and slow innovation. We pair science-backed insights with
            actionable exercises so that teams can spot, measure, and mitigate bias before decisions calcify.
          </p>
        </div>
        <ul className={styles.mitigationList}>
          <li>Reveal hidden assumptions with fast, bias-aware diagnostics.</li>
          <li>Design mitigation rituals that blend human judgment and automated oversight.</li>
          <li>Build muscles for reflective, data-informed decisions across every project sprint.</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="skillsHubHeading">
        <div className={styles.sectionHeader}>
          <h2 id="skillsHubHeading">Skills hub</h2>
          <p>Ten WEF-endorsed skills with micro-challenges that bring them to life inside your workflow.</p>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <article key={skill.id} className={styles.skillCard}>
              <span className="tag">{skill.tag}</span>
              <h3>{skill.name}</h3>
              <p>{skill.summary}</p>
              <ul>
                {skill.microChallenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="biasIndexHeading">
        <div className={styles.sectionHeader}>
          <h2 id="biasIndexHeading">Biases index</h2>
          <p>
            Search, filter, and explore bias definitions inspired by The Decision Lab. Each profile includes
            real-world examples, impacts, mitigation techniques, and further reading.
          </p>
        </div>
        <div className={styles.biasedPreview}>
          <div className={styles.biasControls}>
            <input className={styles.search} type="search" placeholder="Search biases…" aria-label="Search biases" />
            <div className={styles.filterGroup} role="group" aria-label="Bias categories">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={styles.filterButton}
                  data-active={filter === "All"}
                  aria-pressed={filter === "All"}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.biasCards}>
            {featuredBiases.map((bias) => (
              <article key={bias.slug} className={styles.biasCard}>
                <h3>{bias.name}</h3>
                <p>{bias.definition}</p>
                <ul>
                  {bias.mitigation.slice(0, 2).map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
                <Link href={`/biases/${bias.slug}`} className={styles.ghostButton}>
                  View detail
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="referenceHeading">
        <div className={styles.sectionHeader}>
          <h2 id="referenceHeading">Reference guide</h2>
          <p>Anchor your vocabulary with quick definitions of the concepts we use throughout the platform.</p>
        </div>
        <div className={styles.referenceList}>
          {referenceSlice.map((item) => (
            <div key={item.term} className={styles.referenceItem}>
              <div>
                <strong>{item.term}</strong>
                <p>{item.definition}</p>
              </div>
              {item.related.length > 0 ? (
                <Link href={item.related[0]} className={styles.ghostButton}>
                  Learn more
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="learningPathsHeading">
        <div className={styles.sectionHeader}>
          <h2 id="learningPathsHeading">Learning paths</h2>
          <p>Structured journeys that blend skills, biases, and exercises for sustained behaviour change.</p>
        </div>
        <div className={styles.learningTrack}>
          {learningPaths.map((path) => (
            <article key={path.id} className={styles.trackCard}>
              <span className={styles.trackBadge}>{path.duration}</span>
              <h3>{path.title}</h3>
              <p>{path.outcome}</p>
              <div className={styles.dotGrid}>
                <span>Focus skills</span>
                <span>{path.focus.join(", ")}</span>
                <span>Biases</span>
                <span>{path.biases.join(", ")}</span>
                <span>Exercises</span>
                <span>{path.exercises.join(", ")}</span>
              </div>
              <Link href="/learning-paths" className={styles.ghostButton}>
                Explore path
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSurface}`} aria-labelledby="exercisesHeading">
        <div className={styles.sectionHeader}>
          <h2 id="exercisesHeading">Exercises &amp; cases</h2>
          <p>Quick quizzes, case studies, and guided reflections for classrooms and teams.</p>
        </div>
        <div className={styles.exerciseGrid}>
          {exercises.map((exercise) => (
            <article key={exercise.slug} className={styles.exerciseCard}>
              <span className="tag">{exercise.type}</span>
              <h3>{exercise.title}</h3>
              <p>{exercise.summary}</p>
              <p>
                <strong>Duration:</strong> {exercise.duration}
              </p>
              <p>
                <strong>Skills:</strong> {exercise.skills.join(", ")}
              </p>
            </article>
          ))}
        </div>
        <Link href="/exercises" className={styles.ghostButton}>
          Browse exercises
        </Link>
      </section>

      <section className={`${styles.section} ${styles.newsletter}`} aria-labelledby="newsletterHeading">
        <div>
          <h2 id="newsletterHeading">Newsletter &amp; updates</h2>
          <p>
            Get monthly prompts, new case studies, and classroom kits that help you keep skills sharp and biases visible.
          </p>
        </div>
        <form>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input id="newsletter-email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <button type="submit" className={styles.primaryButton}>
            Subscribe
          </button>
        </form>
      </section>

      <section className={`${styles.section} ${styles.about}`} aria-labelledby="aboutHeading">
        <div className={styles.sectionSurface}>
          <div className={styles.sectionHeader}>
            <h2 id="aboutHeading">About Next Mind Labs</h2>
            <p>
              We blend behavioural science, design, and educator expertise to make responsible AI literacy practical.
              Our programmes are co-created with classrooms and teams navigating real transformation.
            </p>
          </div>
          <div className={styles.dotGrid}>
            <span>Founded</span>
            <span>2022</span>
            <span>Practitioners</span>
            <span>Behavioral scientists, UX strategists, learning designers</span>
            <span>Impact</span>
            <span>20+ organisations prototyping responsible AI rituals</span>
            <span>Formats</span>
            <span>Workshops, async toolkits, instructor-led cohorts</span>
          </div>
        </div>

        <div className={styles.contactForm} aria-labelledby="contactHeading">
          <h2 id="contactHeading">Let’s collaborate</h2>
          <form className={styles.section} noValidate>
            <label htmlFor="contact-name">
              Name
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </label>
            <label htmlFor="contact-email">
              Email
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </label>
            <label htmlFor="contact-org">
              Organisation
              <input id="contact-org" name="organisation" type="text" autoComplete="organization" />
            </label>
            <label htmlFor="contact-message">
              How can we help?
              <textarea id="contact-message" name="message" />
            </label>
            <button type="submit" className={styles.primaryButton}>
              Send message
            </button>
          </form>
          <div className={styles.contactMeta}>
            <p>Prefer email? Reach us at hello@nextmindlabs.com.</p>
            <p>Need the classroom version? The Schule portal is available on request.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
