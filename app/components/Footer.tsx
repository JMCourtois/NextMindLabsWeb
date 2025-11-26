import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Next Mind Labs - Home">
            <span className={styles.logoIcon} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="currentColor"/>
                <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white"/>
                <path d="M14 16L20 10L26 16L20 22L14 16Z" fill="white" fillOpacity="0.6"/>
              </svg>
            </span>
            <span className={styles.logoText}>Next Mind Labs</span>
          </Link>

          {/* Links */}
          <nav className={styles.nav} aria-label="Footer links">
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
            <a href="mailto:hello@nextmindlabs.com">Contact</a>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Next Mind Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
