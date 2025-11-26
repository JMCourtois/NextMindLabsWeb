"use client";

import { useState } from "react";
import styles from "./page.module.css";

const FAQ_ITEMS = [
  {
    question: "How much time do I need to invest each week?",
    answer: "The content is designed for busy professionals. The monthly deep dive takes about 2-3 hours of reading and exercises. The Weekly Radar is a 5-minute read. Case Clinics are optional and last 1 hour. You decide how deep to go."
  },
  {
    question: "Do I need to know how to code or have technical knowledge?",
    answer: "No. This program is designed for professionals from any field: marketing, finance, operations, HR, consulting... We don't teach code, we teach how to think with and alongside AI."
  },
  {
    question: "What AI tools do we use?",
    answer: "We primarily work with ChatGPT and Claude, but the mental frameworks we teach apply to any LLM. This isn't a 'how to use X tool' course—it's about how to structure your thinking to leverage any AI."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, no commitments. You can cancel your subscription at any time from your account. If you cancel, you keep access until the end of the paid period."
  },
  {
    question: "Is there a community or just content?",
    answer: "Both. You get access to the content (deep dives, sprints, Radar) to consume at your own pace, plus monthly live Case Clinics where we solve real problems with other members."
  },
  {
    question: "What happens if I join after the first 97 founders?",
    answer: "The standard price will be €39/month. Founders keep their €19/month price for life as long as they maintain an active subscription."
  }
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main id="mainContent" className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            The school for professionals who won't be replaced
          </span>
          <h1 id="hero-title" className={styles.heroTitle}>
            Stop competing with AI.
            <span className={styles.heroTitleAccent}> Learn to direct it.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Become a <strong>Hybrid Professional</strong>: high human capacity + 
            high technical capacity. No noise, no endless courses, no empty prompts.
          </p>
          <div className={styles.heroCtas}>
            <a href="#pricing" className={styles.primaryButton}>
              Reserve your founder spot
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className={styles.secondaryButton}>
              See how it works
            </a>
          </div>
          <p className={styles.heroProof}>
            <span className={styles.heroProofDot}></span>
            <strong>38 of 97</strong> founder spots taken
          </p>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroVisualInner}>
            <div className={styles.heroOrb1}></div>
            <div className={styles.heroOrb2}></div>
            <div className={styles.heroOrb3}></div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className={styles.socialProof} aria-label="Credentials">
        <div className={styles.socialProofInner}>
          <div className={styles.socialProofItem}>
            <span className={styles.socialProofValue}>15+</span>
            <span className={styles.socialProofLabel}>years in executive training</span>
          </div>
          <div className={styles.socialProofDivider}></div>
          <div className={styles.socialProofItem}>
            <span className={styles.socialProofValue}>500+</span>
            <span className={styles.socialProofLabel}>professionals trained in critical thinking</span>
          </div>
          <div className={styles.socialProofDivider}></div>
          <div className={styles.socialProofItem}>
            <span className={styles.socialProofValue}>4.9/5</span>
            <span className={styles.socialProofLabel}>average member rating</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.section} aria-labelledby="problem-title">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>The problem</span>
          <h2 id="problem-title" className={styles.sectionTitle}>
            The market is full of "what is AI"<br />
            but empty of <span className={styles.highlight}>"how to use it to think better"</span>
          </h2>
        </div>
        <ul className={styles.problemList}>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>A junior with GPT-4 can appear more productive than you.</strong>
              <p>And your 10+ years of experience doesn't automatically translate into an advantage.</p>
            </div>
          </li>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Every week there are 50 new tools and zero time.</strong>
              <p>Tech FOMO paralyzes you more than it helps.</p>
            </div>
          </li>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Prompt courses don't teach you how to think about the problem.</strong>
              <p>Knowing how to write "act as X" isn't a sustainable competitive advantage.</p>
            </div>
          </li>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>You feel like you're being left behind.</strong>
              <p>And you don't know whether to invest time in learning or just wait for the wave to pass.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="solution-title" id="solution">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>The solution</span>
          <h2 id="solution-title" className={styles.sectionTitle}>
            We don't teach prompts.<br />
            <span className={styles.highlight}>We teach how to think before the prompt.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            A mental framework that turns your experience into a competitive advantage, not obsolescence.
          </p>
        </div>
        
        <div className={styles.solutionGrid}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M16 16L4 10M16 16V28M16 16L28 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Critical Thinking</h3>
            <p>Question assumptions, evaluate evidence, detect biases. The foundation for not being fooled by brilliant but empty outputs.</p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 11L14 21M22 11L18 21M12 8H20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Systems Thinking</h3>
            <p>See connections, anticipate consequences, understand context. What separates a senior professional from someone who just executes.</p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 14H20M12 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="4" r="3" fill="currentColor"/>
              </svg>
            </div>
            <h3>AI as Intellectual Partner</h3>
            <p>Use LLMs to amplify your judgment, not replace it. Delegate the mechanical, keep control of the strategic.</p>
          </div>
        </div>

        <div className={styles.solutionResult}>
          <span className={styles.solutionResultLabel}>The result</span>
          <p className={styles.solutionResultText}>
            <strong>Mental Operating System:</strong> a framework that lets you approach any problem 
            with clarity, use AI as a multiplier of your experience, and make decisions a junior 
            with ChatGPT can't replicate.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.section} aria-labelledby="how-title" id="how-it-works">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>How it works</span>
          <h2 id="how-title" className={styles.sectionTitle}>
            Everything you need.<br />
            <span className={styles.highlight}>Nothing you don't.</span>
          </h2>
        </div>

        <div className={styles.featuresGrid}>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>01</span>
            <h3>Monthly Deep Dive</h3>
            <p>
              One central topic each month, explored in depth. No superficialities like 
              "10 prompts for X". Applicable frameworks, practical exercises, real cases.
            </p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>02</span>
            <h3>Sprints & Playbooks</h3>
            <p>
              Tactical guides to solve specific problems with AI. From analyzing data 
              to preparing presentations. Ready to use the same day.
            </p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>03</span>
            <h3>Weekly Radar</h3>
            <p>
              Newsletter that filters the noise for you. Only what matters this week: 
              one tool, one concept, one insight. 5-minute read.
            </p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>04</span>
            <h3>Live Case Clinic</h3>
            <p>
              Monthly session where we solve real member cases. Bring your problem, 
              we work on it together. Learn by watching how others think.
            </p>
          </article>
        </div>

        <div className={styles.featureBonus}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <p>
            <strong>+ Content Vault:</strong> Access to all previous deep dives, sprints, and playbooks 
            from day one.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="pricing-title" id="pricing">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Founders offer</span>
          <h2 id="pricing-title" className={styles.sectionTitle}>
            Founder pricing<br />
            <span className={styles.highlight}>(only 97 spots)</span>
          </h2>
            </div>

        <div className={styles.pricingCard}>
          <div className={styles.pricingBadge}>Price locked for life</div>
          <div className={styles.pricingAmount}>
            <span className={styles.pricingCurrency}>€</span>
            <span className={styles.pricingValue}>19</span>
            <span className={styles.pricingPeriod}>/month</span>
          </div>
          <p className={styles.pricingAlt}>or €190/year (save 2 months)</p>
          
          {/* Urgency indicator */}
          <div className={styles.urgencyBar}>
            <div className={styles.urgencyBarFill} style={{ width: "39%" }}></div>
          </div>
          <p className={styles.urgencyText}>
            <strong>38 of 97</strong> spots taken
          </p>

          <ul className={styles.pricingFeatures}>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Full access to all content
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Monthly deep dives + Sprints
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Weekly Radar
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Monthly live Case Clinic
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vault with all previous content
            </li>
          </ul>

          <form className={styles.waitlistForm} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="waitlist-email" className="sr-only">Your email</label>
            <input 
              type="email" 
              id="waitlist-email"
              placeholder="you@email.com" 
              required 
              className={styles.waitlistInput}
            />
            <button type="submit" className={styles.waitlistButton}>
              Reserve my spot
            </button>
          </form>

          <p className={styles.pricingNote}>
            Standard price: €39/month after the first 97 members.
          </p>
        </div>
      </section>

      {/* For Who Section */}
      <section className={styles.section} aria-labelledby="for-who-title">
        <div className={styles.sectionHeader}>
          <h2 id="for-who-title" className={styles.sectionTitle}>
            Is this for you?
          </h2>
        </div>

        <div className={styles.forWhoGrid}>
          <div className={styles.forWhoCard}>
            <h3 className={styles.forWhoYes}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              This is for you if...
            </h3>
            <ul>
              <li>You have 5-15+ years of professional experience</li>
              <li>You feel AI is leaving you behind (or will soon)</li>
              <li>You want to apply, not just consume theory</li>
              <li>You value your time and want dense content, not filler</li>
              <li>You're looking for real competitive advantage, not certificates</li>
            </ul>
              </div>
          <div className={styles.forWhoCard}>
            <h3 className={styles.forWhoNo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              This is NOT for you if...
            </h3>
            <ul>
              <li>You're looking for certifications for your LinkedIn</li>
              <li>You want to "master ChatGPT" in 2 hours</li>
              <li>You prefer 40-hour courses you never finish</li>
              <li>You're only interested in prompts and tricks</li>
              <li>You have no interest in critical thinking</li>
            </ul>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title" id="faq">
        <div className={styles.sectionHeader}>
          <h2 id="faq-title" className={styles.sectionTitle}>
            Frequently asked questions
          </h2>
        </div>

        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={`${styles.faqIcon} ${openFaq === index ? styles.faqIconOpen : ""}`}
                  aria-hidden="true"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`${styles.faqAnswer} ${openFaq === index ? styles.faqAnswerOpen : ""}`}
                aria-hidden={openFaq !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.section} aria-labelledby="founder-title">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>About the founder</span>
          <h2 id="founder-title" className={styles.sectionTitle}>
            Who's behind this
          </h2>
        </div>

        <div className={styles.founderCard}>
          <div className={styles.founderImage} aria-hidden="true">
            <div className={styles.founderImagePlaceholder}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 42C8 33.1634 15.1634 26 24 26C32.8366 26 40 33.1634 40 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
        </div>
          <div className={styles.founderContent}>
            <h3>[Your Name]</h3>
            <p className={styles.founderRole}>Founder of Next Mind Labs</p>
            <p className={styles.founderBio}>
              [Placeholder: Your bio goes here. Something like: "After 15 years helping teams 
              make better decisions, I saw how brilliant professionals froze in the face of 
              AI. Not because they lacked intelligence, but because they lacked a mental framework 
              to integrate it. I created Next Mind Labs to solve exactly that."]
            </p>
            <p className={styles.founderBio}>
              [You can add: previous experience, companies you've worked with, 
              relevant training, etc.]
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">Ready to stop competing with AI?</h2>
        <p>Join the first 97 professionals building their competitive advantage.</p>
        <a href="#pricing" className={styles.primaryButton}>
          Reserve my founder spot
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>
    </main>
  );
}
