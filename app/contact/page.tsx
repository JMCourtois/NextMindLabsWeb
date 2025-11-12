import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact | Next Mind Labs",
  description: "Reach the Next Mind Labs team for partnerships, programmes, or media enquiries."
};

export default function ContactPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <h1>Contact us</h1>
        <p>
          Tell us about your team, classroom, or initiative. We’ll share tailored recommendations and outline the best
          path to build bias-aware, AI-ready skills.
        </p>
      </header>

      <section className={styles.content}>
        <form className={styles.form} noValidate>
          <div className={styles.field}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-role">Role</label>
            <input id="contact-role" name="role" type="text" />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-org">Organisation</label>
            <input id="contact-org" name="organisation" type="text" autoComplete="organization" />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-message">How can we help?</label>
            <textarea id="contact-message" name="message" rows={5} />
          </div>
          <label className={styles.checkbox}>
            <input type="checkbox" name="consent" required /> I’m okay receiving occasional updates.
          </label>
          <button type="submit">Send message</button>
        </form>

        <aside className={styles.sidebar}>
          <div>
            <h2>General enquiries</h2>
            <a href="mailto:hello@nextmindlabs.com">hello@nextmindlabs.com</a>
          </div>
          <div>
            <h2>Press &amp; media</h2>
            <a href="mailto:press@nextmindlabs.com">press@nextmindlabs.com</a>
          </div>
          <div>
            <h2>Community</h2>
            <p>Join our Slack workspace for facilitators and educators.</p>
            <a href="https://nextmindlabs.com/community" target="_blank" rel="noreferrer">
              Request invite
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}


