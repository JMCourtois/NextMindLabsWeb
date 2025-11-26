import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../program.module.css";

const RADAR_CONTENT: Record<string, {
  title: string;
  week: string;
  month: string;
  readTime: string;
  sections: {
    tool?: { title: string; content: string };
    concept?: { title: string; content: string };
    insight?: { title: string; content: string };
  };
}> = {
  "week-4-january-2025": {
    title: "Claude 3.5 Sonnet Update + The Future of AI Agents",
    week: "Week 4",
    month: "January 2025",
    readTime: "5 min",
    sections: {
      tool: {
        title: "Claude 3.5 Sonnet's New Computer Use Feature",
        content: "Anthropic released a significant update allowing Claude to directly control your computer. This is a glimpse into the future of AI agents—systems that don't just suggest but act. Key takeaway: Start thinking about which of your workflows could benefit from this level of automation."
      },
      concept: {
        title: "The Agent Readiness Framework",
        content: "Not all tasks are ready for AI agents. Use this simple framework: Is the task (1) repetitive, (2) rule-based, (3) low-risk if mistakes occur, and (4) currently taking significant time? If yes to all four, it's a good candidate for agent automation."
      },
      insight: {
        title: "The New Skill: Orchestration",
        content: "As AI agents become more capable, the valuable skill shifts from 'doing' to 'orchestrating'. Understanding which agent to use for what task, how to verify their work, and when human judgment is essential—this is the meta-skill of the next decade."
      }
    }
  },
  "week-3-january-2025": {
    title: "OpenAI o1 vs Claude: When to Use Each",
    week: "Week 3",
    month: "January 2025",
    readTime: "6 min",
    sections: {
      tool: {
        title: "Practical Comparison: o1 vs Claude 3.5",
        content: "After extensive testing, here's the bottom line: Use o1 for complex reasoning chains and math-heavy tasks. Use Claude for writing, analysis, and tasks requiring nuance. Neither is universally better—context is everything."
      },
      concept: {
        title: "Model Selection as a Skill",
        content: "Knowing which model to use for which task is becoming a professional skill. Build a simple decision tree: nature of task → complexity level → cost tolerance → model selection. Document your results to refine over time."
      },
      insight: {
        title: "The Multi-Model Future",
        content: "Stop looking for 'the best' model. The future is using multiple models strategically. Think of them as specialized team members, each with strengths. Your job is to be the manager who knows who to assign to what."
      }
    }
  },
  "week-2-january-2025": {
    title: "Why Longer Prompts Aren't Always Better",
    week: "Week 2",
    month: "January 2025",
    readTime: "4 min",
    sections: {
      concept: {
        title: "The Prompt Length Myth",
        content: "Many believe that more detailed prompts always yield better results. Our testing shows this isn't true. Often, a clear, focused prompt outperforms a lengthy one with extensive context. Quality beats quantity."
      },
      insight: {
        title: "Clarity Over Completeness",
        content: "The best prompts share one trait: clarity about what you want. Before adding more instructions, ask: 'Is the core request crystal clear?' If not, simplify before expanding."
      }
    }
  },
  "week-1-january-2025": {
    title: "AI Predictions 2025: What Actually Matters",
    week: "Week 1",
    month: "January 2025",
    readTime: "7 min",
    sections: {
      insight: {
        title: "2025: The Year of Application",
        content: "2024 was about capability. 2025 will be about application. The gap between 'AI can do X' and 'professionals are using AI for X' will close rapidly. Those who've been experimenting will have a significant head start."
      },
      concept: {
        title: "The Integration Imperative",
        content: "Standalone AI tools will matter less than integrated workflows. The professionals who thrive will be those who've built AI into their daily processes, not those who use it occasionally for special tasks."
      }
    }
  },
  "week-4-december-2024": {
    title: "Google Gemini 2.0: Real Competitor or More of the Same?",
    week: "Week 4",
    month: "December 2024",
    readTime: "5 min",
    sections: {
      tool: {
        title: "Gemini 2.0 First Impressions",
        content: "Google's latest release shows improvement but doesn't change the landscape. For most professionals, switching costs don't justify the marginal gains. Stay with what you know unless you have specific needs Gemini addresses better."
      },
      insight: {
        title: "The Platform Play",
        content: "Google's real advantage isn't the model—it's integration with Workspace. If you're already in the Google ecosystem, Gemini becomes more attractive. Platform lock-in is the new moat."
      }
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(RADAR_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = RADAR_CONTENT[params.slug];
  if (!item) return { title: "Radar Issue Not Found" };
  
  return {
    title: `${item.title} | Weekly Radar | Next Mind Labs`,
    description: `Weekly Radar ${item.week}, ${item.month}`,
  };
}

export default function RadarIssuePage({ params }: { params: { slug: string } }) {
  const issue = RADAR_CONTENT[params.slug];
  
  if (!issue) {
    notFound();
  }

  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <Link href="/program/radar" className={styles.sectionLink} style={{ marginBottom: "1rem", display: "inline-flex" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: "rotate(180deg)" }}>
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Radar
        </Link>
        <span className={styles.pageLabel}>{issue.week} · {issue.month}</span>
        <h1 className={styles.pageTitle}>{issue.title}</h1>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", color: "var(--color-muted)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {issue.readTime} read
          </span>
        </div>
      </header>

      {/* Tool Section */}
      {issue.sections.tool && (
        <section className={styles.section}>
          <div className={styles.contentBlock}>
            <h2 className={styles.contentBlockTitle}>
              🔧 {issue.sections.tool.title}
            </h2>
            <div className={styles.contentBlockText}>
              <p>{issue.sections.tool.content}</p>
            </div>
          </div>
        </section>
      )}

      {/* Concept Section */}
      {issue.sections.concept && (
        <section className={styles.section}>
          <div className={styles.contentBlock}>
            <h2 className={styles.contentBlockTitle}>
              💡 {issue.sections.concept.title}
            </h2>
            <div className={styles.contentBlockText}>
              <p>{issue.sections.concept.content}</p>
            </div>
          </div>
        </section>
      )}

      {/* Insight Section */}
      {issue.sections.insight && (
        <section className={styles.section}>
          <div className={styles.contentBlock}>
            <h2 className={styles.contentBlockTitle}>
              🎯 {issue.sections.insight.title}
            </h2>
            <div className={styles.contentBlockText}>
              <p>{issue.sections.insight.content}</p>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 2V9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Weekly Radar
          </div>
          <p className={styles.highlightBoxText}>
            Each issue of the Radar is designed to give you clarity on what matters this week. 
            <Link href="/program/radar" style={{ color: "var(--color-primary)", marginLeft: "0.5rem" }}>
              View all issues →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

