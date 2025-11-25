"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SchuleNav.module.css";

const SCHULE_NAV_ITEMS = [
  { href: "/schule/ubungen/fehlerworter", label: "Fehlerwörter" },
  { href: "/schule/ubungen/luckentext", label: "Lückentext" },
  { href: "/schule/ubungen/stellenwert", label: "Stellenwert" },
];

export function SchuleNav() {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    return pathname?.startsWith(href);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="/schule" className={styles.logo} aria-label="Next Mind Labs Schule">
            Next Mind Labs Schule
          </Link>
          <nav aria-label="Schule navigation">
            <ul className={styles.navList}>
              {SCHULE_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
                  >
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
