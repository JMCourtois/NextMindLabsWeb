import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../program.module.css";

const SPRINTS_DATA: Record<string, {
  title: string;
  month: string;
  duration: string;
  exercises: number;
  description: string;
  content: {
    overview: string;
    topics: string[];
    outcomes: string[];
  };
}> = {
  "january-2025": {
    title: "Augmented Critical Thinking: How to Evaluate AI Outputs",
    month: "January 2025",
    duration: "3-4 hours",
    exercises: 5,
    description: "Learn to apply critical thinking to AI-generated results.",
    content: {
      overview: "In this sprint, we explore how to evaluate AI outputs with rigor. You'll develop a systematic approach to questioning AI responses, detecting biases, and making informed decisions based on LLM outputs.",
      topics: [
        "The anatomy of an AI hallucination",
        "Framework for evaluating AI output quality",
        "Detecting biases in AI responses",
        "When to trust and when to verify",
        "Building verification workflows"
      ],
      outcomes: [
        "A personal checklist for evaluating AI outputs",
        "Skills to detect common AI failure patterns",
        "Confidence to challenge AI-generated content",
        "A verification framework for your work context"
      ]
    }
  },
  "december-2024": {
    title: "The Art of Strategic Prompting",
    month: "December 2024",
    duration: "3-4 hours",
    exercises: 4,
    description: "Beyond tricks: how to structure your thinking before writing a prompt.",
    content: {
      overview: "This sprint goes beyond prompt templates. We focus on the thinking process that precedes the prompt—how to structure a problem, break it down, and communicate it effectively to an AI.",
      topics: [
        "Problem decomposition for AI assistance",
        "The context-instruction-output framework",
        "Iterative prompting strategies",
        "When simple prompts beat complex ones",
        "Prompt debugging techniques"
      ],
      outcomes: [
        "A systematic approach to writing effective prompts",
        "Understanding of when to use different prompting styles",
        "Ability to debug underperforming prompts",
        "Personal prompt templates for your use cases"
      ]
    }
  },
  "november-2024": {
    title: "Decision Systems with AI",
    month: "November 2024",
    duration: "4 hours",
    exercises: 6,
    description: "Frameworks to integrate AI into your decision-making process.",
    content: {
      overview: "This sprint explores how to integrate AI into your decision-making without losing human judgment. We cover frameworks for knowing when to involve AI, how to weight its input, and how to maintain accountability.",
      topics: [
        "The human-AI decision spectrum",
        "Risk assessment for AI involvement",
        "Building decision support systems",
        "Accountability in AI-assisted decisions",
        "Case studies: successes and failures"
      ],
      outcomes: [
        "A personal decision framework for AI involvement",
        "Risk assessment skills for AI-assisted decisions",
        "Clear accountability structures",
        "Practical decision support templates"
      ]
    }
  },
  "october-2024": {
    title: "Intelligent Automation for Professionals",
    month: "October 2024",
    duration: "3 hours",
    exercises: 4,
    description: "Identify what to automate, what to delegate to AI, and what to keep human.",
    content: {
      overview: "Not everything should be automated, and not all automation requires AI. This sprint helps you develop a strategic approach to automation that preserves what makes you valuable while leveraging AI for maximum impact.",
      topics: [
        "The automation decision matrix",
        "High-value vs. low-value automation",
        "Building automation gradually",
        "Maintaining human oversight",
        "Measuring automation ROI"
      ],
      outcomes: [
        "A personal automation strategy",
        "Clear criteria for automation decisions",
        "Skills to build incremental automation",
        "ROI framework for automation projects"
      ]
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(SPRINTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sprint = SPRINTS_DATA[params.slug];
  if (!sprint) return { title: "Sprint Not Found" };
  
  return {
    title: `${sprint.title} | Next Mind Labs`,
    description: sprint.description,
  };
}

export default function SprintDetailPage({ params }: { params: { slug: string } }) {
  const sprint = SPRINTS_DATA[params.slug];
  
  if (!sprint) {
    notFound();
  }

  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <Link href="/program/sprints" className={styles.sectionLink} style={{ marginBottom: "1rem", display: "inline-flex" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(180deg)" }}>
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Sprints
        </Link>
        <span className={`${styles.pageLabel}`}>{sprint.month}</span>
        <h1 className={styles.pageTitle}>{sprint.title}</h1>
        <p className={styles.pageSubtitle}>{sprint.description}</p>
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", color: "var(--color-muted)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {sprint.duration}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M14 8L10 4M14 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {sprint.exercises} exercises
          </span>
        </div>
      </header>

      {/* Overview */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Overview</h2>
          <div className={styles.contentBlockText}>
            <p>{sprint.content.overview}</p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>What You'll Learn</h2>
          <div className={styles.contentBlockText}>
            <ul>
              {sprint.content.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>What You'll Walk Away With</h2>
          <div className={styles.contentBlockText}>
            <ul>
              {sprint.content.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L11.5 7.5L17 8.5L13 12.5L14 18L9 15L4 18L5 12.5L1 8.5L6.5 7.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            Ready to dive in?
          </div>
          <p className={styles.highlightBoxText}>
            This sprint includes the deep dive content, exercises, and a downloadable playbook for reference.
          </p>
        </div>
      </section>
    </main>
  );
}

