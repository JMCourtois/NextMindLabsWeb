import type { Metadata } from "next";
import Link from "next/link";
import styles from "../program.module.css";

export const metadata: Metadata = {
  title: "Weekly Radar | Next Mind Labs",
  description: "Weekly newsletter that filters the AI noise. Only what matters, in 5 minutes.",
};

const RADAR_ISSUES = [
  {
    id: "week-4-january-2025",
    week: "Week 4",
    month: "January 2025",
    title: "Claude 3.5 Sonnet Update + The Future of AI Agents",
    topics: ["Claude Update", "AI Agents", "Evaluation Framework"],
    readTime: "5 min",
    latest: true,
  },
  {
    id: "week-3-january-2025",
    week: "Week 3",
    month: "January 2025",
    title: "OpenAI o1 vs Claude: When to Use Each",
    topics: ["LLM Comparison", "Use Cases", "Costs"],
    readTime: "6 min",
    latest: false,
  },
  {
    id: "week-2-january-2025",
    week: "Week 2",
    month: "January 2025",
    title: "Why Longer Prompts Aren't Always Better",
    topics: ["Prompting", "Efficiency", "Myths"],
    readTime: "4 min",
    latest: false,
  },
  {
    id: "week-1-january-2025",
    week: "Week 1",
    month: "January 2025",
    title: "AI Predictions 2025: What Actually Matters",
    topics: ["Trends", "Predictions", "Strategy"],
    readTime: "7 min",
    latest: false,
  },
  {
    id: "week-4-december-2024",
    week: "Week 4",
    month: "December 2024",
    title: "Google Gemini 2.0: Real Competitor or More of the Same?",
    topics: ["Gemini", "Comparison", "Google"],
    readTime: "5 min",
    latest: false,
  },
];

export default function RadarPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Weekly Radar</span>
        <h1 className={styles.pageTitle}>The Noise Filtered for You</h1>
        <p className={styles.pageSubtitle}>
          Every week, a curated selection of what actually matters in the AI world. 
          No FOMO, no hype, no wasted time. 5-minute read.
        </p>
      </header>

      {/* What Radar Covers */}
      <section className={styles.section}>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>One Featured Tool</h3>
            <p className={styles.featureDescription}>
              Each week we analyze one relevant tool or update. 
              Not all news deserves your attention—we tell you which does.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>One Key Concept</h3>
            <p className={styles.featureDescription}>
              An idea or framework you can apply this very week. 
              Dense knowledge, no filler.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.66347 17H14.3364M12 3V4M18.364 5.63604L17.6569 6.34315M21 12H20M4 12H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 14 17.5739 14 18.469V19C14 20.1046 13.1045 21 12 21C10.8954 21 9.99996 20.1046 9.99996 19V18.469C9.99996 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>One Insight</h3>
            <p className={styles.featureDescription}>
              Perspective on where this is all going and how to position yourself. 
              Strategic thinking, not just tactical.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Issue */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Latest Issue</h2>
        {RADAR_ISSUES.filter(r => r.latest).map((issue) => (
          <Link key={issue.id} href={`/program/radar/${issue.id}`} className={`${styles.card} ${styles.cardClickable}`}>
            <span className={`${styles.cardBadge} ${styles.cardBadgeHighlight}`}>
              {issue.week} · {issue.month}
            </span>
            <h3 className={styles.cardTitle}>{issue.title}</h3>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {issue.readTime} read
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Archive */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Archive</h2>
        <div className={styles.list}>
          {RADAR_ISSUES.filter(r => !r.latest).map((issue) => (
            <Link key={issue.id} href={`/program/radar/${issue.id}`} className={`${styles.listItem} ${styles.listItemClickable}`}>
              <span className={styles.listItemIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 2V9" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              <div className={styles.listItemContent}>
                <h3 className={styles.listItemTitle}>{issue.title}</h3>
                <span className={styles.listItemMeta}>
                  {issue.week} · {issue.month} · {issue.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5L9 2L15 5V13L9 16L3 13V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M3 5L9 8M9 8V16M9 8L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            Arrives every Monday
          </div>
          <p className={styles.highlightBoxText}>
            The Radar is published every Monday morning. Start your week with clarity 
            about what deserves your attention and what you can safely ignore.
          </p>
        </div>
      </section>
    </main>
  );
}

