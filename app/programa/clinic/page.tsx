import type { Metadata } from "next";
import styles from "../programa.module.css";

export const metadata: Metadata = {
  title: "Case Clinic | Next Mind Labs",
  description: "Sesiones en vivo mensuales donde resolvemos casos reales con la comunidad.",
};

const PAST_CLINICS = [
  {
    id: 1,
    date: "19 Diciembre 2024",
    title: "Automatizar reporting sin perder contexto",
    attendees: 24,
    duration: "58 min",
  },
  {
    id: 2,
    date: "21 Noviembre 2024",
    title: "Preparar propuestas comerciales con IA",
    attendees: 31,
    duration: "62 min",
  },
  {
    id: 3,
    date: "17 Octubre 2024",
    title: "Análisis de feedback de clientes a escala",
    attendees: 28,
    duration: "55 min",
  },
];

export default function ClinicPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Case Clinic</span>
        <h1 className={styles.pageTitle}>Aprende viendo cómo otros piensan</h1>
        <p className={styles.pageSubtitle}>
          Sesiones en vivo donde trabajamos casos reales de los miembros. 
          Trae tu problema o aprende viendo cómo otros abordan los suyos.
        </p>
      </header>

      {/* Next Session */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Próxima sesión</h2>
        <div className={styles.welcomeCard}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
            <span className={`${styles.cardBadge} ${styles.cardBadgeLive}`} style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>
              En vivo
            </span>
          </div>
          <h3 className={styles.welcomeTitle}>Jueves 30 de Enero · 18:00 CET</h3>
          <p className={styles.welcomeText}>
            Trabajaremos 2-3 casos reales enviados por miembros. Verás el proceso de pensamiento 
            en tiempo real: cómo estructurar el problema, qué preguntar a la IA, cómo evaluar 
            y refinar los resultados.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cómo funciona</h2>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 10H16M8 14H12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>1. Envía tu caso</h3>
            <p className={styles.featureDescription}>
              Antes de cada sesión, puedes enviar un problema real que quieras resolver. 
              Seleccionamos 2-3 casos por sesión.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C7.87766 14.9233 9.08743 14 10.5 14H13.5C14.9126 14 16.1223 14.9233 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>2. Sesión en vivo</h3>
            <p className={styles.featureDescription}>
              1 hora de trabajo en directo. Vemos el proceso completo: análisis, 
              prompting, evaluación y refinamiento.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>3. Grabación disponible</h3>
            <p className={styles.featureDescription}>
              Si no puedes asistir en directo, todas las sesiones quedan grabadas 
              y disponibles en el Vault.
            </p>
          </div>
        </div>
      </section>

      {/* Past Sessions */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sesiones anteriores</h2>
        <div className={styles.list}>
          {PAST_CLINICS.map((clinic) => (
            <div key={clinic.id} className={`${styles.listItem} ${styles.listItemClickable}`}>
              <span className={styles.listItemIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 7L14 4.5V13.5L11 11M4 13H9C10.1046 13 11 12.1046 11 11V7C11 5.89543 10.1046 5 9 5H4C2.89543 5 2 5.89543 2 7V11C2 12.1046 2.89543 13 4 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className={styles.listItemContent}>
                <h3 className={styles.listItemTitle}>{clinic.title}</h3>
                <span className={styles.listItemMeta}>
                  {clinic.date} · {clinic.attendees} asistentes · {clinic.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Por qué las Case Clinics funcionan</h2>
          <div className={styles.contentBlockText}>
            <p>
              La mejor forma de aprender a pensar con IA no es leer sobre ello, 
              es ver a otros hacerlo en tiempo real. Las Case Clinics te dan exactamente eso:
            </p>
            <ul>
              <li><strong>Problemas reales:</strong> No ejercicios inventados, casos de miembros como tú</li>
              <li><strong>Proceso visible:</strong> Ves los errores, las iteraciones, los "ajá"</li>
              <li><strong>Diversidad de contextos:</strong> Marketing, finanzas, operaciones, consultoría...</li>
              <li><strong>Comunidad:</strong> Preguntas, comentarios, perspectivas diferentes</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

