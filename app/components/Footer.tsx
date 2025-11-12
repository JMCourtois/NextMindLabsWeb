import Link from "next/link";
import styles from "./Footer.module.css";

const PRIMARY_LINKS = [
  { href: "/skills", label: "Skills" },
  { href: "/biases", label: "Biases" },
  { href: "/reference", label: "Reference" },
  { href: "/learning-paths", label: "Learning Paths" },
  { href: "/exercises", label: "Exercises" }
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/legal/privacy", label: "Privacy", external: true },
  { href: "/legal/terms", label: "Terms", external: true }
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="layout-shell">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.logo}>Next Mind Labs</h2>
            <p className={styles.tagline}>
              Helping teams build bias-aware, AI-ready skills for tomorrow&apos;s work.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Explore</h3>
            <ul>
              {PRIMARY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Company</h3>
            <ul>
              {COMPANY_LINKS.map((item) =>
                item.external ? (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Newsletter</h3>
            <p>Monthly prompts, cases, and classroom-ready activities.</p>
            <form className={styles.form}>
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input id="footer-email" type="email" required placeholder="you@example.com" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.subfooter}>
          <p>© {new Date().getFullYear()} Next Mind Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


