"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import styles from "./Nav.module.css";

const PUBLIC_NAV_ITEMS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

const LOGGED_IN_NAV_ITEMS = [
  { href: "/program", label: "Program" },
  { href: "/program/sprints", label: "Sprints" },
  { href: "/program/vault", label: "Vault" },
  { href: "/program/radar", label: "Radar" },
  { href: "/program/clinic", label: "Case Clinic" },
];

export function Nav() {
  const { isLoggedIn, user, toggle, logout } = useAuth();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navItems = isLoggedIn ? LOGGED_IN_NAV_ITEMS : PUBLIC_NAV_ITEMS;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  // Close menus on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  // Close user menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const isActiveLink = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link 
            href={isLoggedIn ? "/program" : "/"} 
            className={styles.logo} 
            aria-label="Next Mind Labs - Home"
            onClick={closeMenu}
          >
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
          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/#") ? (
                    <a href={item.href} className={styles.navLink}>
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      href={item.href} 
                      className={`${styles.navLink} ${isActiveLink(item.href) ? styles.navLinkActive : ""}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* User Menu / CTA */}
            {isLoggedIn ? (
              <div className={styles.userMenuWrapper} ref={userMenuRef}>
                <button
                  className={styles.userButton}
                  onClick={toggleUserMenu}
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                  aria-label="User menu"
                >
                  <span className={styles.userAvatar}>
                    {user?.name.charAt(0)}
                  </span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    className={`${styles.userChevron} ${isUserMenuOpen ? styles.userChevronOpen : ""}`}
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className={styles.userDropdown}>
                    <div className={styles.userDropdownHeader}>
                      <span className={styles.userDropdownName}>{user?.name}</span>
                      <span className={styles.userDropdownEmail}>{user?.email}</span>
                      <span className={styles.userDropdownBadge}>{user?.plan} member</span>
                    </div>
                    <div className={styles.userDropdownDivider} />
                    <Link href="/program/account" className={styles.userDropdownItem} onClick={closeMenu}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      My account
                    </Link>
                    <button className={styles.userDropdownItem} onClick={logout}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M11 11L14 8L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      Sign out
                    </button>
                    <div className={styles.userDropdownDivider} />
                    <button className={styles.userDropdownItemMuted} onClick={toggle}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      View public mode
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.navActions}>
                <div className={styles.userButtonWrapper}>
                  <button
                    className={styles.userButtonOutline}
                    onClick={toggle}
                    aria-label="Simulate login"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 17.5C3 14.1863 6.13401 11.5 10 11.5C13.866 11.5 17 14.1863 17 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <span className={styles.userButtonTooltip}>
                    Demo: View member experience
                  </span>
                </div>
                <a href="#pricing" className={styles.ctaButton}>
                  Join now
                </a>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className={styles.mobileActions}>
            {isLoggedIn && (
              <button
                className={styles.userButtonMobile}
                onClick={toggleUserMenu}
                aria-label="User menu"
              >
                <span className={styles.userAvatar}>
                  {user?.name.charAt(0)}
                </span>
              </button>
            )}
            {!isLoggedIn && (
              <button
                className={styles.userButtonOutlineMobile}
                onClick={toggle}
                aria-label="Simulate login"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 17.5C3 14.1863 6.13401 11.5 10 11.5C13.866 11.5 17 14.1863 17 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile User Dropdown */}
      {isUserMenuOpen && isLoggedIn && (
        <div className={styles.mobileUserDropdown}>
          <div className={styles.userDropdownHeader}>
            <span className={styles.userDropdownName}>{user?.name}</span>
            <span className={styles.userDropdownEmail}>{user?.email}</span>
            <span className={styles.userDropdownBadge}>{user?.plan} member</span>
          </div>
          <div className={styles.userDropdownDivider} />
          <Link href="/program/account" className={styles.userDropdownItem} onClick={closeMenu}>
            My account
          </Link>
          <button className={styles.userDropdownItem} onClick={logout}>
            Sign out
          </button>
          <div className={styles.userDropdownDivider} />
          <button className={styles.userDropdownItemMuted} onClick={toggle}>
            View public mode
          </button>
        </div>
      )}

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/#") ? (
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${isActiveLink(item.href) ? styles.mobileNavLinkActive : ""}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {!isLoggedIn && (
            <a href="#pricing" className={styles.mobileCta} onClick={closeMenu}>
              Join as founding member
            </a>
          )}
        </nav>
      </div>

      {/* Backdrop */}
      {(isMenuOpen || isUserMenuOpen) && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
