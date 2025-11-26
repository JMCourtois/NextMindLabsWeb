"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import styles from "./programa.module.css";

export default function ProgramaPage() {
  const { user } = useAuth();

  return (
    <main id="mainContent" className={styles.page}>
      {/* Welcome Section */}
      <div className={styles.welcomeCard}>
        <h1 className={styles.welcomeTitle}>
          Hola, {user?.name?.split(" ")[0] || "ahí"} 👋
        </h1>
        <p className={styles.welcomeText}>
          Bienvenido a tu espacio de aprendizaje. Aquí encontrarás todo lo que necesitas 
          para convertirte en un Profesional Híbrido.
        </p>
      </div>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>12</div>
          <div className={styles.statLabel}>Sprints disponibles</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>48</div>
          <div className={styles.statLabel}>Radares publicados</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>8</div>
          <div className={styles.statLabel}>Case Clinics</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>∞</div>
          <div className={styles.statLabel}>Acceso al Vault</div>
        </div>
      </div>

      {/* Current Sprint */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sprint actual</h2>
          <Link href="/programa/sprints" className={styles.sectionLink}>
            Ver todos
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <Link href="/programa/sprints" className={`${styles.card} ${styles.cardClickable}`}>
          <span className={`${styles.cardBadge} ${styles.cardBadgeHighlight}`}>Enero 2025</span>
          <h3 className={styles.cardTitle}>Pensamiento Crítico Aumentado: Cómo evaluar outputs de IA</h3>
          <p className={styles.cardDescription}>
            Este mes exploramos cómo aplicar pensamiento crítico a los resultados que genera la IA. 
            Aprenderás a detectar sesgos, evaluar calidad y tomar decisiones informadas.
          </p>
          <div className={styles.cardMeta}>
            <span className={styles.cardMetaItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              3-4 horas
            </span>
            <span className={styles.cardMetaItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              5 ejercicios prácticos
            </span>
          </div>
        </Link>
      </section>

      {/* Quick Links */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Acceso rápido</h2>
        <div className={styles.quickLinks}>
          <Link href="/programa/sprints" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Sprints Mensuales</div>
              <div className={styles.quickLinkMeta}>Deep dives + ejercicios</div>
            </div>
          </Link>
          <Link href="/programa/vault" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V5Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 8H17" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 8V17" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Vault</div>
              <div className={styles.quickLinkMeta}>Todo el contenido anterior</div>
            </div>
          </Link>
          <Link href="/programa/radar" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 3V10" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Radar Semanal</div>
              <div className={styles.quickLinkMeta}>Curación de lo importante</div>
            </div>
          </Link>
          <Link href="/programa/clinic" className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="15" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </span>
            <div className={styles.quickLinkContent}>
              <div className={styles.quickLinkTitle}>Case Clinic</div>
              <div className={styles.quickLinkMeta}>Sesiones en vivo</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Radar */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Último Radar</h2>
          <Link href="/programa/radar" className={styles.sectionLink}>
            Ver archivo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <Link href="/programa/radar" className={`${styles.card} ${styles.cardClickable}`}>
          <span className={styles.cardBadge}>Semana 4 · Enero</span>
          <h3 className={styles.cardTitle}>Claude 3.5 Sonnet actualizado + El futuro de los agentes de IA</h3>
          <p className={styles.cardDescription}>
            Esta semana: la actualización de Claude que cambia las reglas, por qué los agentes de IA 
            son el próximo gran salto, y un framework para evaluar si una herramienta vale tu tiempo.
          </p>
          <div className={styles.cardMeta}>
            <span className={styles.cardMetaItem}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              5 min lectura
            </span>
          </div>
        </Link>
      </section>

      {/* Upcoming Clinic */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Próxima Case Clinic</h2>
        </div>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 7H16" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 1V4M12 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Jueves 30 de Enero · 18:00 CET
          </div>
          <p className={styles.highlightBoxText}>
            Sesión en vivo donde trabajaremos casos reales de los miembros. Trae tu problema 
            o aprende viendo cómo otros abordan los suyos.
          </p>
        </div>
      </section>
    </main>
  );
}

