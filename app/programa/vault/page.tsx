import type { Metadata } from "next";
import styles from "../programa.module.css";

export const metadata: Metadata = {
  title: "Vault | Next Mind Labs",
  description: "Accede a todo el contenido anterior: sprints, playbooks y recursos.",
};

const VAULT_ITEMS = [
  {
    id: 1,
    type: "sprint",
    title: "Pensamiento Crítico Aumentado",
    description: "Cómo evaluar outputs de IA con rigor",
    date: "Enero 2025",
    tag: "Sprint",
  },
  {
    id: 2,
    type: "sprint",
    title: "El Arte del Prompting Estratégico",
    description: "Estructurar pensamiento antes del prompt",
    date: "Diciembre 2024",
    tag: "Sprint",
  },
  {
    id: 3,
    type: "playbook",
    title: "Playbook: Análisis de Competencia con IA",
    description: "Guía paso a paso para investigar competidores",
    date: "Diciembre 2024",
    tag: "Playbook",
  },
  {
    id: 4,
    type: "sprint",
    title: "Sistemas de Decisión con IA",
    description: "Frameworks para integrar IA en decisiones",
    date: "Noviembre 2024",
    tag: "Sprint",
  },
  {
    id: 5,
    type: "playbook",
    title: "Playbook: Preparar Presentaciones con IA",
    description: "De idea a slides en tiempo récord",
    date: "Noviembre 2024",
    tag: "Playbook",
  },
  {
    id: 6,
    type: "sprint",
    title: "Automatización Inteligente",
    description: "Qué automatizar y qué mantener humano",
    date: "Octubre 2024",
    tag: "Sprint",
  },
  {
    id: 7,
    type: "playbook",
    title: "Playbook: Escribir Emails Efectivos",
    description: "Comunicación profesional asistida por IA",
    date: "Octubre 2024",
    tag: "Playbook",
  },
  {
    id: 8,
    type: "sprint",
    title: "Fundamentos del Profesional Híbrido",
    description: "El modelo mental que lo cambia todo",
    date: "Septiembre 2024",
    tag: "Sprint",
  },
];

const FILTERS = ["Todos", "Sprints", "Playbooks"];

export default function VaultPage() {
  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.pageHeader}>
        <span className={styles.pageLabel}>Vault</span>
        <h1 className={styles.pageTitle}>Todo el contenido, siempre disponible</h1>
        <p className={styles.pageSubtitle}>
          Acceso completo a todos los sprints anteriores, playbooks y recursos. 
          Tu biblioteca personal de conocimiento aplicable.
        </p>
      </header>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>12</div>
          <div className={styles.statLabel}>Sprints</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>24</div>
          <div className={styles.statLabel}>Playbooks</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>60+</div>
          <div className={styles.statLabel}>Ejercicios</div>
        </div>
      </div>

      {/* Content Grid */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Explorar contenido</h2>
        </div>
        
        <div className={styles.cardsGrid}>
          {VAULT_ITEMS.map((item) => (
            <article key={item.id} className={`${styles.card} ${styles.cardClickable}`}>
              <span className={`${styles.cardBadge} ${item.type === "playbook" ? styles.cardBadgeHighlight : ""}`}>
                {item.tag}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.cardMetaItem}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="2" y="3" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 6H12" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 1V4M9 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {item.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Info Block */}
      <section className={styles.section}>
        <div className={styles.contentBlock}>
          <h2 className={styles.contentBlockTitle}>Cómo usar el Vault</h2>
          <div className={styles.contentBlockText}>
            <p>
              El Vault es tu biblioteca de referencia. No necesitas consumir todo de forma lineal. 
              Úsalo según tus necesidades:
            </p>
            <ul>
              <li><strong>Problema específico:</strong> Busca el playbook relevante y aplícalo directamente</li>
              <li><strong>Profundizar en un tema:</strong> Revisa el sprint correspondiente</li>
              <li><strong>Refrescar conceptos:</strong> Consulta los resúmenes ejecutivos</li>
              <li><strong>Nuevos miembros:</strong> Empieza por "Fundamentos del Profesional Híbrido"</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

