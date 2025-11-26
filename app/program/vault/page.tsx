import type { Metadata } from "next";
import Link from "next/link";
import styles from "../program.module.css";

export const metadata: Metadata = {
  title: "Vault | Next Mind Labs",
  description: "Access all previous content: sprints, playbooks, and resources.",
};

const VAULT_ITEMS = [
  {
    id: "sprint-january-2025",
    type: "sprint",
    slug: "/program/sprints/january-2025",
    title: "Augmented Critical Thinking",
    description: "How to evaluate AI outputs with rigor",
    date: "January 2025",
    tag: "Sprint",
  },
  {
    id: "sprint-december-2024",
    type: "sprint",
    slug: "/program/sprints/december-2024",
    title: "The Art of Strategic Prompting",
    description: "Structure your thinking before the prompt",
    date: "December 2024",
    tag: "Sprint",
  },
  {
    id: "playbook-competitive-analysis",
    type: "playbook",
    slug: "/program/vault/playbook-competitive-analysis",
    title: "Playbook: Competitive Analysis with AI",
    description: "Step-by-step guide for researching competitors",
    date: "December 2024",
    tag: "Playbook",
  },
  {
    id: "sprint-november-2024",
    type: "sprint",
    slug: "/program/sprints/november-2024",
    title: "Decision Systems with AI",
    description: "Frameworks to integrate AI into decisions",
    date: "November 2024",
    tag: "Sprint",
  },
  {
    id: "playbook-presentations",
    type: "playbook",
    slug: "/program/vault/playbook-presentations",
    title: "Playbook: Prepare Presentations with AI",
    description: "From idea to slides in record time",
    date: "November 2024",
    tag: "Playbook",
  },
  {
    id: "sprint-october-2024",
    type: "sprint",
    slug: "/program/sprints/october-2024",
    title: "Intelligent Automation",
    description: "What to automate and what to keep human",
    date: "October 2024",
    tag: "Sprint",
  },
  {
    id: "playbook-emails",
    type: "playbook",
    slug: "/program/vault/playbook-emails",
    title: "Playbook: Writing Effective Emails",
    description: "Professional communication with AI assistance",
    date: "October 2024",
    tag: "Playbook",
  },
  {
    id: "sprint-september-2024",
    type: "sprint",
    slug: "/program/vault/sprint-fundamentals",
    title: "Hybrid Professional Fundamentals",
    description: "The mental model that changes everything",
    date: "September 2024",
    tag: "Sprint",
  },
];

export default function VaultPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Vault</span>
        <h1 className={styles.pageTitle}>All content, always available</h1>
        <p className={styles.pageSubtitle}>
          Full access to all previous sprints, playbooks, and resources. 
          Your personal library of applicable knowledge.
        </p>
      </header>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>12</div>
          <div className={styles.statLabel}>Sprints</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>24</div>
          <div className={styles.statLabel}>Playbooks</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>60+</div>
          <div className={styles.statLabel}>Exercises</div>
        </div>
      </div>

      {/* Content Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explore content</h2>
        </div>
        
        <div className={styles.cardsGrid}>
          {VAULT_ITEMS.map((item) => (
            <Link key={item.id} href={item.slug} className={`${styles.card} ${styles.cardClickable}`}>
              <span className={`${styles.cardBadge} ${item.type === "playbook" ? styles.cardBadgeHighlight : ""}`}>
                {item.tag}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.cardMetaItem}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 6H12" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 1V4M9 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {item.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Block */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>How to Use the Vault</h2>
          <div className={styles.contentBlockText}>
            <p>
              The Vault is your reference library. You don't need to consume everything linearly. 
              Use it based on your needs:
            </p>
            <ul>
              <li><strong>Specific problem:</strong> Find the relevant playbook and apply it directly</li>
              <li><strong>Deep dive into a topic:</strong> Review the corresponding sprint</li>
              <li><strong>Refresh concepts:</strong> Check the executive summaries</li>
              <li><strong>New members:</strong> Start with "Hybrid Professional Fundamentals"</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

