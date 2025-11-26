"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import styles from "./program.module.css";

export default function ProgramPage() {
  const { user } = useAuth();

  return (
    <main id="mainContent" className={styles.page}>
      {/* Welcome Section */}
      <div className={styles.welcomeCard}>
        <h1 className={styles.welcomeTitle}>
          Hi, {user?.name?.split(" ")[0] || "there"} 👋
        </h1>
        <p className={styles.welcomeText}>
          Welcome to your learning space. Here you'll find everything you need 
          to become a Hybrid Professional.
        </p>
      </div>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>12</div>
          <div className={styles.statLabel}>Sprints available</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>48</div>
          <div className={styles.statLabel}>Radars published</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>8</div>
          <div className={styles.statLabel}>Case Clinics</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>∞</div>
          <div className={styles.statLabel}>Vault access</div>
        </div>
      </div>

      {/* Current Sprint */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Current Sprint</h2>
          <Link href="/program/sprints" className={styles.sectionLink}>
            View all
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <Link href="/program/sprints/january-2025" className={`${styles.card} ${styles.cardClickable}`}>
          <span className={`${styles.cardBadge} ${styles.cardBadgeHighlight}`}>January 2025</span>
          <h3 className={styles.cardTitle}>Augmented Critical Thinking: How to Evaluate AI Outputs</h3>
          <p className={styles.cardDescription}>
            This month we explore how to apply critical thinking to AI-generated results. 
            You'll learn to detect biases, evaluate quality, and make informed decisions.
          </p>
          <div className={styles.cardMeta}>
            <span className={styles.cardMetaItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              3-4 hours
            </span>
            <span className={styles.cardMetaItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              5 practical exercises
            </span>
          </div>
        </Link>
      </section>

      {/* Quick Links */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick access</h2>
        <div className={styles.quickLinks}>
          <Link href="/program/sprints" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Monthly Sprints</div>
              <div className={styles.quickLinkMeta}>Deep dives + exercises</div>
            </div>
          </Link>
          <Link href="/program/vault" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 8V17" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Vault</div>
              <div className={styles.quickLinkMeta}>All previous content</div>
            </div>
          </Link>
          <Link href="/program/radar" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 3V10" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Weekly Radar</div>
              <div className={styles.quickLinkMeta}>Curated AI insights</div>
            </div>
          </Link>
          <Link href="/program/clinic" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="15" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Case Clinic</div>
              <div className={styles.quickLinkMeta}>Live sessions</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Radar */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Radar</h2>
          <Link href="/program/radar" className={styles.sectionLink}>
            View archive
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <Link href="/program/radar/week-4-january-2025" className={`${styles.card} ${styles.cardClickable}`}>
          <span className={styles.cardBadge}>Week 4 · January</span>
          <h3 className={styles.cardTitle}>Claude 3.5 Sonnet Update + The Future of AI Agents</h3>
          <p className={styles.cardDescription}>
            This week: the Claude update that changes the rules, why AI agents are 
            the next big leap, and a framework for evaluating if a tool is worth your time.
          </p>
          <div className={styles.cardMeta}>
            <span className={styles.cardMetaItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              5 min read
            </span>
          </div>
        </Link>
      </section>

      {/* Upcoming Clinic */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Next Case Clinic</h2>
        </div>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 7H16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 1V4M12 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Thursday, January 30 · 6:00 PM CET
          </div>
          <p className={styles.highlightBoxText}>
            Live session where we'll work on real cases from members. Bring your problem 
            or learn by watching how others approach theirs.
          </p>
        </div>
      </section>
    </main>
  );
}

