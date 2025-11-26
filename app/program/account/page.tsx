"use client";

import { useAuth } from "@/lib/auth-context";
import styles from "../program.module.css";

export default function AccountPage() {
  const { user, logout, toggle } = useAuth();

  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>My Account</span>
        <h1 className={styles.pageTitle}>Settings</h1>
      </header>

      {/* Profile Section */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Profile</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ 
                width: "4rem", 
                height: "4rem", 
                borderRadius: "50%", 
                background: "var(--color-primary)", 
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "600"
              }}>
                {user?.name?.charAt(0) || "U"}
              </div>
              <div>
                <div style={{ fontWeight: "600", fontSize: "1.125rem" }}>{user?.name || "User"}</div>
                <div style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}>{user?.email || "email@example.com"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Subscription</h2>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "var(--color-surface-muted)", borderRadius: "var(--radius-md)" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Current plan</div>
                <div style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}>{user?.plan || "Founder"} member</div>
              </div>
              <span style={{ 
                padding: "0.25rem 0.75rem", 
                background: "rgba(193, 127, 36, 0.1)", 
                color: "var(--color-primary-strong)",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: "600",
                textTransform: "uppercase"
              }}>
                €19/month
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Member since</div>
                <div style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}>{user?.memberSince || "January 2025"}</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: "600" }}>Next billing date</div>
                <div style={{ color: "var(--color-muted)", fontSize: "0.875rem" }}>February 1, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Actions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button 
              onClick={logout}
              style={{
                padding: "0.875rem 1.25rem",
                background: "transparent",
                border: "1px solid var(--color-border-strong)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                fontWeight: "500",
                color: "var(--color-text)",
                textAlign: "left",
                transition: "all 0.2s ease"
              }}
            >
              Sign out
            </button>
            <button 
              onClick={toggle}
              style={{
                padding: "0.875rem 1.25rem",
                background: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                fontWeight: "500",
                color: "var(--color-muted)",
                textAlign: "left",
                fontSize: "0.875rem",
                transition: "all 0.2s ease"
              }}
            >
              Demo: View public mode
            </button>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 6V10M9 12.5V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            About this demo
          </div>
          <p className={styles.highlightBoxText}>
            This is a demo version. In the full version, you'll be able to manage 
            your profile, change your payment method, view invoice history, and more.
          </p>
        </div>
      </section>
    </main>
  );
}

