import Link from "next/link";
import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/biases", label: "Biases" },
  { href: "/reference", label: "Reference" },
  { href: "/learning-paths", label: "Learning Paths" },
  { href: "/exercises", label: "Exercises" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  return (
    <header className={styles.header}>
      <div className="layout-shell">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Next Mind Labs home">
            Next Mind Labs
          </Link>
          <nav aria-label="Main navigation">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


