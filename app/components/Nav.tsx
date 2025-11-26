"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const NAV_ITEMS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precio", label: "Precio" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Next Mind Labs - Inicio" onClick={closeMenu}>
            <span className={styles.logoIcon} aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="currentColor"/>
                <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="white"/>
                <path d="M14 16L20 10L26 16L20 22L14 16Z" fill="white" fillOpacity="0.6"/>
              </svg>
            </span>
            <span className={styles.logoText}>Next Mind Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Navegación principal">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#precio" className={styles.ctaButton}>
              Únete ahora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Navegación móvil">
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#precio" className={styles.mobileCta} onClick={closeMenu}>
            Únete como miembro fundador
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
