import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../program.module.css";

const CLINIC_CONTENT: Record<string, {
  title: string;
  date: string;
  duration: string;
  attendees: number;
  cases: { title: string; context: string; outcome: string }[];
}> = {
  "december-2024": {
    title: "Automating Reporting Without Losing Context",
    date: "December 19, 2024",
    duration: "58 min",
    attendees: 24,
    cases: [
      {
        title: "Weekly Client Reports",
        context: "A consultant needed to automate weekly client reports but was worried about losing the nuanced observations that made them valuable.",
        outcome: "We developed a hybrid approach: AI handles data aggregation and formatting, while the consultant focuses on strategic insights. Time reduced from 3 hours to 45 minutes."
      },
      {
        title: "Project Status Updates",
        context: "A project manager struggled to keep stakeholders informed without spending hours on status reports.",
        outcome: "Created a template system where AI drafts updates from bullet points, maintaining consistency while preserving the PM's voice."
      }
    ]
  },
  "november-2024": {
    title: "Preparing Commercial Proposals with AI",
    date: "November 21, 2024",
    duration: "62 min",
    attendees: 31,
    cases: [
      {
        title: "Customized RFP Responses",
        context: "A sales team was spending 6+ hours per proposal response, much of it on repetitive sections.",
        outcome: "Built a proposal framework where AI drafts standard sections while the team focuses on customization. Proposal time cut to 2 hours."
      },
      {
        title: "Pricing Strategy Documentation",
        context: "A consultant needed to explain complex pricing models to non-technical stakeholders.",
        outcome: "Used AI to translate technical pricing into clear narratives, with the consultant reviewing for accuracy."
      }
    ]
  },
  "october-2024": {
    title: "Analyzing Customer Feedback at Scale",
    date: "October 17, 2024",
    duration: "55 min",
    attendees: 28,
    cases: [
      {
        title: "NPS Comment Analysis",
        context: "A product manager had 2,000+ NPS comments and needed to identify actionable themes.",
        outcome: "Developed a systematic approach to categorize and prioritize feedback using AI, with human validation on key insights."
      },
      {
        title: "Support Ticket Patterns",
        context: "A support lead wanted to proactively address recurring issues but lacked time to analyze all tickets.",
        outcome: "Created a weekly AI-powered analysis routine that surfaces emerging patterns and trends."
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(CLINIC_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const clinic = CLINIC_CONTENT[params.slug];
  if (!clinic) return { title: "Session Not Found" };
  
  return {
    title: `${clinic.title} | Case Clinic | Next Mind Labs`,
    description: `Case Clinic session from ${clinic.date}`,
  };
}

export default function ClinicSessionPage({ params }: { params: { slug: string } }) {
  const clinic = CLINIC_CONTENT[params.slug];
  
  if (!clinic) {
    notFound();
  }

  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <Link href="/program/clinic" className={styles.sectionLink} style={{ marginBottom: "1rem", display: "inline-flex" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(180deg)" }}>
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Case Clinic
        </Link>
        <span className={styles.pageLabel}>Case Clinic · {clinic.date}</span>
        <h1 className={styles.pageTitle}>{clinic.title}</h1>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.5rem", color: "var(--color-muted)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {clinic.duration}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 14H14V12C14 10.8954 13.1046 10 12 10C11.4477 10 10.9477 10.2239 10.5858 10.5858M10 14H6M10 14V12C10 11.5 9.9 11.03 9.72 10.6M6 14H2V12C2 10.8954 2.89543 10 4 10C4.55228 10 5.05228 10.2239 5.41421 10.5858M6 14V12C6 11.5 6.1 11.03 6.28 10.6M6.28 10.6C6.74 9.66 7.71 9 8.85 9H7.15C6.01 9 5.04 9.66 4.58 10.6M9.5 4.5C9.5 5.60457 8.60457 6.5 7.5 6.5C6.39543 6.5 5.5 5.60457 5.5 4.5C5.5 3.39543 6.39543 2.5 7.5 2.5C8.60457 2.5 9.5 3.39543 9.5 4.5ZM13.5 6C13.5 6.82843 12.8284 7.5 12 7.5C11.1716 7.5 10.5 6.82843 10.5 6C10.5 5.17157 11.1716 4.5 12 4.5C12.8284 4.5 13.5 5.17157 13.5 6ZM5.5 6C5.5 6.82843 4.82843 7.5 4 7.5C3.17157 7.5 2.5 6.82843 2.5 6C2.5 5.17157 3.17157 4.5 4 4.5C4.82843 4.5 5.5 5.17157 5.5 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {clinic.attendees} attendees
          </span>
        </div>
      </header>

      {/* Cases */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cases Covered</h2>
        <div className={styles.list}>
          {clinic.cases.map((caseItem, i) => (
            <div key={i} className={styles.contentBlock} style={{ marginBottom: "1.5rem" }}>
              <h3 className={styles.contentBlockTitle}>Case {i + 1}: {caseItem.title}</h3>
              <div className={styles.contentBlockText}>
                <p><strong>Context:</strong> {caseItem.context}</p>
                <p><strong>Outcome:</strong> {caseItem.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recording Note */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 7L14 4.5V13.5L11 11M4 13H9C10.1046 13 11 12.1046 11 11V7C11 5.89543 10.1046 5 9 5H4C2.89543 5 2 5.89543 2 7V11C2 12.1046 2.89543 13 4 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Recording Available
          </div>
          <p className={styles.highlightBoxText}>
            This session recording is available in the Vault. Watch the full problem-solving process 
            including the prompts used, iterations, and final solutions.
          </p>
        </div>
      </section>
    </main>
  );
}

