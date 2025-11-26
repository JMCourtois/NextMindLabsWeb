import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../program.module.css";

const VAULT_CONTENT: Record<string, {
  title: string;
  type: "playbook" | "sprint";
  date: string;
  description: string;
  content: {
    overview: string;
    steps?: string[];
    topics?: string[];
  };
}> = {
  "playbook-competitive-analysis": {
    title: "Playbook: Competitive Analysis with AI",
    type: "playbook",
    date: "December 2024",
    description: "A step-by-step guide to researching competitors using AI tools effectively.",
    content: {
      overview: "This playbook walks you through a structured approach to competitive analysis using AI. From identifying competitors to synthesizing insights, you'll learn how to leverage LLMs to do in hours what used to take days.",
      steps: [
        "Define your competitive landscape and key players",
        "Gather public information systematically",
        "Use AI to summarize and compare offerings",
        "Identify patterns and gaps in the market",
        "Synthesize findings into actionable insights",
        "Present your analysis effectively"
      ]
    }
  },
  "playbook-presentations": {
    title: "Playbook: Prepare Presentations with AI",
    type: "playbook",
    date: "November 2024",
    description: "From blank page to polished slides in record time.",
    content: {
      overview: "Creating presentations is one of the highest-ROI uses of AI. This playbook shows you how to go from rough ideas to a structured narrative, then to slide content, using AI at each step while maintaining your voice.",
      steps: [
        "Clarify your message and audience",
        "Use AI to brainstorm structure options",
        "Develop your narrative arc",
        "Generate slide content iteratively",
        "Refine and add your personal touch",
        "Create supporting visuals and notes"
      ]
    }
  },
  "playbook-emails": {
    title: "Playbook: Writing Effective Emails",
    type: "playbook",
    date: "October 2024",
    description: "Professional communication with AI assistance that still sounds like you.",
    content: {
      overview: "Email is still the backbone of professional communication. This playbook shows you how to use AI to write faster without losing your personal style or sounding robotic.",
      steps: [
        "Identify the email type and goal",
        "Draft key points in bullet form",
        "Use AI to expand into prose",
        "Edit for tone and personality",
        "Review for clarity and action items",
        "Build your personal email templates"
      ]
    }
  },
  "sprint-fundamentals": {
    title: "Hybrid Professional Fundamentals",
    type: "sprint",
    date: "September 2024",
    description: "The foundational mental model for integrating AI into your professional life.",
    content: {
      overview: "This foundational sprint establishes the core concepts of the Hybrid Professional approach. Understanding these fundamentals will help you get more from every other sprint and playbook.",
      topics: [
        "What makes a Hybrid Professional",
        "The augmentation mindset vs. replacement fear",
        "Core competencies that AI amplifies",
        "Building your AI collaboration framework",
        "Setting up your learning environment",
        "Creating your personal development plan"
      ]
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(VAULT_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = VAULT_CONTENT[params.slug];
  if (!item) return { title: "Content Not Found" };
  
  return {
    title: `${item.title} | Next Mind Labs`,
    description: item.description,
  };
}

export default function VaultItemPage({ params }: { params: { slug: string } }) {
  const item = VAULT_CONTENT[params.slug];
  
  if (!item) {
    notFound();
  }

  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <Link href="/program/vault" className={styles.sectionLink} style={{ marginBottom: "1rem", display: "inline-flex" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(180deg)" }}>
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Vault
        </Link>
        <span className={`${styles.pageLabel}`}>
          {item.type === "playbook" ? "Playbook" : "Sprint"} · {item.date}
        </span>
        <h1 className={styles.pageTitle}>{item.title}</h1>
        <p className={styles.pageSubtitle}>{item.description}</p>
      </header>

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Overview</h2>
          <div className={styles.contentBlockText}>
            <p>{item.content.overview}</p>
          </div>
        </div>
      </section>

      {/* Steps or Topics */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>
            {item.content.steps ? "Step-by-Step Process" : "Topics Covered"}
          </h2>
          <div className={styles.contentBlockText}>
            <ul>
              {(item.content.steps || item.content.topics || []).map((step, i) => (
                <li key={i}><strong>Step {i + 1}:</strong> {step}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 6V10M9 12.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Demo content
          </div>
          <p className={styles.highlightBoxText}>
            This is a preview of the content structure. In the full version, you'd have access to the complete 
            {item.type === "playbook" ? " playbook with templates, examples, and exercises." : " sprint content with exercises and resources."}
          </p>
        </div>
      </section>
    </main>
  );
}

