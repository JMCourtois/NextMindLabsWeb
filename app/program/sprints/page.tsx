import type { Metadata } from "next";
import Link from "next/link";
import styles from "../program.module.css";

export const metadata: Metadata = {
  title: "Monthly Sprints | Next Mind Labs",
  description: "Monthly deep dives with applicable frameworks, practical exercises, and real cases.",
};

const SPRINTS = [
  {
    id: "january-2025",
    month: "January 2025",
    title: "Augmented Critical Thinking: How to Evaluate AI Outputs",
    description: "Learn to apply critical thinking to AI-generated results. Detect biases, evaluate quality, and make informed decisions.",
    duration: "3-4 hours",
    exercises: 5,
    current: true,
  },
  {
    id: "december-2024",
    month: "December 2024",
    title: "The Art of Strategic Prompting",
    description: "Beyond tricks: how to structure your thinking before writing a prompt to get results that actually work.",
    duration: "3-4 hours",
    exercises: 4,
    current: false,
  },
  {
    id: "november-2024",
    month: "November 2024",
    title: "Decision Systems with AI",
    description: "Frameworks to integrate AI into your decision-making process without losing control or human judgment.",
    duration: "4 hours",
    exercises: 6,
    current: false,
  },
  {
    id: "october-2024",
    month: "October 2024",
    title: "Intelligent Automation for Professionals",
    description: "Identify what to automate, what to delegate to AI, and what to keep 100% human. A prioritization framework.",
    duration: "3 hours",
    exercises: 4,
    current: false,
  },
];

export default function SprintsPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Monthly Sprints</span>
        <h1 className={styles.pageTitle}>Deep Dives that Transform</h1>
        <p className={styles.pageSubtitle}>
          Each month, one central topic explored in depth. No superficialities like 
          "10 prompts for X". Applicable frameworks, practical exercises, real cases.
        </p>
      </header>

      {/* How Sprints Work */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>How Sprints Work</h2>
          <div className={styles.contentBlockText}>
            <p>
              Each monthly sprint is designed so you can apply what you learn 
              immediately in your work. It's not content for "someday"—it's for this week.
            </p>
            <ul>
              <li><strong>Conceptual Deep Dive:</strong> The "why" and "how" of the month's topic</li>
              <li><strong>Applicable Frameworks:</strong> Mental tools you can use today</li>
              <li><strong>Practical Exercises:</strong> Cases to practice with your own context</li>
              <li><strong>Reference Playbook:</strong> Executive summary to consult later</li>
            </ul>
            <p>
              Estimated time: 3-4 hours distributed as you prefer. You can do it in one 
              intensive day or spread it throughout the month.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sprint */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Current Sprint</h2>
        {SPRINTS.filter(s => s.current).map((sprint) => (
          <Link key={sprint.id} href={`/program/sprints/${sprint.id}`} className={`${styles.card} ${styles.cardClickable}`}>
            <span className={`${styles.cardBadge} ${styles.cardBadgeHighlight}`}>{sprint.month}</span>
            <h3 className={styles.cardTitle}>{sprint.title}</h3>
            <p className={styles.cardDescription}>{sprint.description}</p>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {sprint.duration}
              </span>
              <span className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {sprint.exercises} exercises
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Previous Sprints */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Previous Sprints</h2>
          <Link href="/program/vault" className={styles.sectionLink}>
            View all in Vault
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className={styles.list}>
          {SPRINTS.filter(s => !s.current).map((sprint) => (
            <Link key={sprint.id} href={`/program/sprints/${sprint.id}`} className={`${styles.listItem} ${styles.listItemClickable}`}>
              <span className={styles.listItemIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 6H12M6 9H12M6 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <div className={styles.listItemContent}>
                <h3 className={styles.listItemTitle}>{sprint.title}</h3>
                <p className={styles.listItemDescription}>{sprint.description}</p>
                <span className={styles.listItemMeta}>{sprint.month} · {sprint.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Coming Up</h2>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 5V9L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            February 2025
          </div>
          <p className={styles.highlightBoxText}>
            <strong>Data Analysis with AI for Non-Technical Professionals.</strong> How to use ChatGPT and Claude 
            to analyze data, find patterns, and make evidence-based decisions—no coding required.
          </p>
        </div>
      </section>
    </main>
  );
}

