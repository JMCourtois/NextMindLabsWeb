import type { Metadata } from "next";
import styles from "../programa.module.css";

export const metadata: Metadata = {
  title: "Radar Semanal | Next Mind Labs",
  description: "Newsletter semanal que filtra el ruido de la IA. Solo lo que importa, en 5 minutos.",
};

const RADAR_ISSUES = [
  {
    id: 1,
    week: "Semana 4",
    month: "Enero 2025",
    title: "Claude 3.5 Sonnet actualizado + El futuro de los agentes de IA",
    topics: ["Actualización de Claude", "Agentes de IA", "Framework de evaluación"],
    readTime: "5 min",
    latest: true,
  },
  {
    id: 2,
    week: "Semana 3",
    month: "Enero 2025",
    title: "OpenAI o1 vs Claude: cuándo usar cada uno",
    topics: ["Comparativa LLMs", "Casos de uso", "Costes"],
    readTime: "6 min",
    latest: false,
  },
  {
    id: 3,
    week: "Semana 2",
    month: "Enero 2025",
    title: "Por qué los prompts largos no siempre son mejores",
    topics: ["Prompting", "Eficiencia", "Mitos"],
    readTime: "4 min",
    latest: false,
  },
  {
    id: 4,
    week: "Semana 1",
    month: "Enero 2025",
    title: "Predicciones IA 2025: lo que realmente importa",
    topics: ["Tendencias", "Predicciones", "Estrategia"],
    readTime: "7 min",
    latest: false,
  },
  {
    id: 5,
    week: "Semana 4",
    month: "Diciembre 2024",
    title: "Google Gemini 2.0: ¿competidor real o más de lo mismo?",
    topics: ["Gemini", "Comparativa", "Google"],
    readTime: "5 min",
    latest: false,
  },
];

export default function RadarPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Radar Semanal</span>
        <h1 className={styles.pageTitle}>El ruido filtrado por ti</h1>
        <p className={styles.pageSubtitle}>
          Cada semana, una selección curada de lo que realmente importa en el mundo de la IA. 
          Sin FOMO, sin hype, sin perder el tiempo. 5 minutos de lectura.
        </p>
      </header>

      {/* What Radar Covers */}
      <section className={styles.section}>
        <div className={styles.cardsGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Una herramienta destacada</h3>
            <p className={styles.featureDescription}>
              Cada semana analizamos una herramienta o actualización relevante. 
              No todas las novedades merecen tu atención, te decimos cuáles sí.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Un concepto clave</h3>
            <p className={styles.featureDescription}>
              Una idea o framework que puedes aplicar esta misma semana. 
              Conocimiento denso, sin relleno.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.66347 17H14.3364M12 3V4M18.364 5.63604L17.6569 6.34315M21 12H20M4 12H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 14 17.5739 14 18.469V19C14 20.1046 13.1045 21 12 21C10.8954 21 9.99996 20.1046 9.99996 19V18.469C9.99996 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Una reflexión</h3>
            <p className={styles.featureDescription}>
              Perspectiva sobre hacia dónde va todo esto y cómo posicionarte. 
              Pensamiento estratégico, no solo táctico.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Issue */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Último número</h2>
        {RADAR_ISSUES.filter(r => r.latest).map((issue) => (
          <div key={issue.id} className={`${styles.card} ${styles.cardClickable}`}>
            <span className={`${styles.cardBadge} ${styles.cardBadgeHighlight}`}>
              {issue.week} · {issue.month}
            </span>
            <h3 className={styles.cardTitle}>{issue.title}</h3>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {issue.readTime} lectura
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Archive */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Archivo</h2>
        <div className={styles.list}>
          {RADAR_ISSUES.filter(r => !r.latest).map((issue) => (
            <div key={issue.id} className={`${styles.listItem} ${styles.listItemClickable}`}>
              <span className={styles.listItemIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 2V9" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              <div className={styles.listItemContent}>
                <h3 className={styles.listItemTitle}>{issue.title}</h3>
                <span className={styles.listItemMeta}>
                  {issue.week} · {issue.month} · {issue.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className={styles.section}>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5L9 2L15 5V13L9 16L3 13V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M3 5L9 8M9 8V16M9 8L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            Llega cada lunes
          </div>
          <p className={styles.highlightBoxText}>
            El Radar se publica cada lunes por la mañana. Empieza tu semana con claridad 
            sobre qué merece tu atención y qué puedes ignorar tranquilamente.
          </p>
        </div>
      </section>
    </main>
  );
}

