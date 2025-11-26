import type { Metadata } from "next";
import Link from "next/link";
import styles from "../programa.module.css";

export const metadata: Metadata = {
  title: "Sprints Mensuales | Next Mind Labs",
  description: "Deep dives mensuales con frameworks aplicables, ejercicios prácticos y casos reales.",
};

const SPRINTS = [
  {
    id: "enero-2025",
    month: "Enero 2025",
    title: "Pensamiento Crítico Aumentado: Cómo evaluar outputs de IA",
    description: "Aprende a aplicar pensamiento crítico a los resultados que genera la IA. Detecta sesgos, evalúa calidad y toma decisiones informadas.",
    duration: "3-4 horas",
    exercises: 5,
    current: true,
  },
  {
    id: "diciembre-2024",
    month: "Diciembre 2024",
    title: "El Arte del Prompting Estratégico",
    description: "Más allá de los trucos: cómo estructurar tu pensamiento antes de escribir un prompt para obtener resultados que realmente sirvan.",
    duration: "3-4 horas",
    exercises: 4,
    current: false,
  },
  {
    id: "noviembre-2024",
    month: "Noviembre 2024",
    title: "Sistemas de Decisión con IA",
    description: "Frameworks para integrar IA en tu proceso de toma de decisiones sin perder el control ni el juicio humano.",
    duration: "4 horas",
    exercises: 6,
    current: false,
  },
  {
    id: "octubre-2024",
    month: "Octubre 2024",
    title: "Automatización Inteligente para Profesionales",
    description: "Identifica qué automatizar, qué delegar a la IA y qué mantener 100% humano. Un framework de priorización.",
    duration: "3 horas",
    exercises: 4,
    current: false,
  },
];

export default function SprintsPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Sprints Mensuales</span>
        <h1 className={styles.pageTitle}>Deep Dives que transforman</h1>
        <p className={styles.pageSubtitle}>
          Cada mes, un tema central explorado en profundidad. No superficialidades de 
          "10 prompts para X". Frameworks aplicables, ejercicios prácticos, casos reales.
        </p>
      </header>

      {/* How Sprints Work */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Cómo funcionan los Sprints</h2>
          <div className={styles.contentBlockText}>
            <p>
              Cada sprint mensual está diseñado para que puedas aplicar lo aprendido 
              inmediatamente en tu trabajo. No es contenido para "algún día", es para esta semana.
            </p>
            <ul>
              <li><strong>Deep Dive conceptual:</strong> El "por qué" y el "cómo" del tema del mes</li>
              <li><strong>Frameworks aplicables:</strong> Herramientas mentales que puedes usar hoy</li>
              <li><strong>Ejercicios prácticos:</strong> Casos para practicar con tu propio contexto</li>
              <li><strong>Playbook de referencia:</strong> Resumen ejecutivo para consultar después</li>
            </ul>
            <p>
              Tiempo estimado: 3-4 horas distribuidas como prefieras. Puedes hacerlo en un día 
              intensivo o repartirlo a lo largo del mes.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sprint */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sprint actual</h2>
        {SPRINTS.filter(s => s.current).map((sprint) => (
          <div key={sprint.id} className={`${styles.card} ${styles.cardClickable}`}>
            <span className={`${styles.cardBadge} ${styles.cardBadgeHighlight}`}>{sprint.month}</span>
            <h3 className={styles.cardTitle}>{sprint.title}</h3>
            <p className={styles.cardDescription}>{sprint.description}</p>
            <div className={styles.cardMeta}>
              <span className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 4V7L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {sprint.duration}
              </span>
              <span className={styles.cardMetaItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {sprint.exercises} ejercicios
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Previous Sprints */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sprints anteriores</h2>
          <Link href="/programa/vault" className={styles.sectionLink}>
            Ver todo en el Vault
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className={styles.list}>
          {SPRINTS.filter(s => !s.current).map((sprint) => (
            <div key={sprint.id} className={`${styles.listItem} ${styles.listItemClickable}`}>
              <span className={styles.listItemIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 6H12M6 9H12M6 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <div className={styles.listItemContent}>
                <h3 className={styles.listItemTitle}>{sprint.title}</h3>
                <p className={styles.listItemDescription}>{sprint.description}</p>
                <span className={styles.listItemMeta}>{sprint.month} · {sprint.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Próximamente</h2>
        <div className={styles.highlightBox}>
          <div className={styles.highlightBoxTitle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M9 5V9L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Febrero 2025
          </div>
          <p className={styles.highlightBoxText}>
            <strong>Análisis de Datos con IA para No-Técnicos.</strong> Cómo usar ChatGPT y Claude 
            para analizar datos, encontrar patrones y tomar decisiones basadas en evidencia, 
            sin necesidad de saber programar.
          </p>
        </div>
      </section>
    </main>
  );
}

