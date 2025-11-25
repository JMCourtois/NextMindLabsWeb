"use client";

import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (href: string) => {
    return pathname?.startsWith(href);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when route changes (optional, but good practice)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link href="/schule" className={styles.logo} aria-label="Next Mind Labs Schule" onClick={closeMenu}>
            Next Mind Labs Schule
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {SCHULE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
