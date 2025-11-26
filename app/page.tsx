"use client";

import { useState } from "react";
import styles from "./page.module.css";

const FAQ_ITEMS = [
  {
    question: "¿Cuánto tiempo necesito dedicar cada semana?",
    answer: "El contenido está diseñado para profesionales ocupados. El deep dive mensual requiere unas 2-3 horas de lectura y ejercicios. El Radar semanal se lee en 5 minutos. Las Case Clinics son opcionales y duran 1 hora. Tú decides cuánto profundizar."
  },
  {
    question: "¿Necesito saber programar o tener conocimientos técnicos?",
    answer: "No. Este programa está diseñado para profesionales de cualquier área: marketing, finanzas, operaciones, RRHH, consultoría... No enseñamos código, enseñamos a pensar con y junto a la IA."
  },
  {
    question: "¿Qué herramientas de IA usamos?",
    answer: "Principalmente trabajamos con ChatGPT y Claude, pero los frameworks mentales que enseñamos aplican a cualquier LLM. No es un curso de 'cómo usar X herramienta', sino de cómo estructurar tu pensamiento para aprovechar cualquier IA."
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: "Sí, sin compromisos. Puedes cancelar tu suscripción en cualquier momento desde tu cuenta. Si cancelas, mantienes acceso hasta el final del período pagado."
  },
  {
    question: "¿Hay comunidad o es solo contenido?",
    answer: "Ambas cosas. Tienes acceso al contenido (deep dives, sprints, Radar) para consumir a tu ritmo, más las Case Clinics mensuales en vivo donde resolvemos casos reales con otros miembros."
  },
  {
    question: "¿Qué pasa si me uno después de los 50 fundadores?",
    answer: "El precio estándar será de €29-39/mes. Los fundadores mantienen su precio de €19/mes de por vida mientras mantengan su suscripción activa."
  }
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main id="mainContent" className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            La escuela para profesionales que no serán reemplazados
          </span>
          <h1 id="hero-title" className={styles.heroTitle}>
            Deja de competir con la IA.
            <span className={styles.heroTitleAccent}> Aprende a dirigirla.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Conviértete en un <strong>Profesional Híbrido</strong>: alta capacidad humana + 
            alta capacidad técnica. Sin ruido, sin cursos eternos, sin prompts vacíos.
          </p>
          <div className={styles.heroCtas}>
            <a href="#precio" className={styles.primaryButton}>
              Únete como miembro fundador
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#como-funciona" className={styles.secondaryButton}>
              Ver cómo funciona
            </a>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroVisualInner}>
            <div className={styles.heroOrb1}></div>
            <div className={styles.heroOrb2}></div>
            <div className={styles.heroOrb3}></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.section} aria-labelledby="problem-title">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>El problema</span>
          <h2 id="problem-title" className={styles.sectionTitle}>
            El mercado está lleno de "qué es la IA"<br />
            pero vacío de <span className={styles.highlight}>"cómo usarla para pensar mejor"</span>
          </h2>
        </div>
        <ul className={styles.problemList}>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Un junior con GPT-4 puede parecer más productivo que tú.</strong>
              <p>Y tu experiencia de 10+ años no se traduce automáticamente en ventaja.</p>
            </div>
          </li>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Cada semana hay 50 herramientas nuevas y cero tiempo.</strong>
              <p>El FOMO tecnológico te paraliza más de lo que te ayuda.</p>
            </div>
          </li>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Los cursos de prompts no enseñan a pensar el problema.</strong>
              <p>Saber escribir "actúa como X" no es una ventaja competitiva sostenible.</p>
            </div>
          </li>
          <li className={styles.problemItem}>
            <span className={styles.problemIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <strong>Sientes que te están dejando atrás.</strong>
              <p>Y no sabes si invertir tiempo en aprender o simplemente esperar a que pase la ola.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="solution-title" id="solucion">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>La solución</span>
          <h2 id="solution-title" className={styles.sectionTitle}>
            No enseñamos prompts.<br />
            <span className={styles.highlight}>Enseñamos a pensar antes del prompt.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Un marco mental que convierte tu experiencia en ventaja competitiva, no en obsolescencia.
          </p>
        </div>
        
        <div className={styles.solutionGrid}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M16 16L4 10M16 16V28M16 16L28 10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Pensamiento Crítico</h3>
            <p>Cuestionar supuestos, evaluar evidencia, detectar sesgos. La base para no dejarte engañar por outputs brillantes pero vacíos.</p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="16" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 11L14 21M22 11L18 21M12 8H20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Pensamiento Sistémico</h3>
            <p>Ver conexiones, anticipar consecuencias, entender el contexto. Lo que separa a un profesional senior de alguien que solo ejecuta.</p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 14H20M12 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="4" r="3" fill="currentColor"/>
              </svg>
            </div>
            <h3>IA como Socio Intelectual</h3>
            <p>Usar LLMs para amplificar tu juicio, no para reemplazarlo. Delegar lo mecánico, mantener el control de lo estratégico.</p>
          </div>
        </div>

        <div className={styles.solutionResult}>
          <span className={styles.solutionResultLabel}>El resultado</span>
          <p className={styles.solutionResultText}>
            <strong>Sistema Operativo Mental:</strong> un framework que te permite abordar cualquier problema 
            con claridad, usar la IA como multiplicador de tu experiencia, y tomar decisiones que un junior 
            con ChatGPT no puede replicar.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.section} aria-labelledby="how-title" id="como-funciona">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Cómo funciona</span>
          <h2 id="how-title" className={styles.sectionTitle}>
            Todo lo que necesitas.<br />
            <span className={styles.highlight}>Nada que no necesites.</span>
          </h2>
        </div>

        <div className={styles.featuresGrid}>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>01</span>
            <h3>Deep Dive Mensual</h3>
            <p>
              Un tema central cada mes, explorado en profundidad. No superficialidades de 
              "10 prompts para X". Frameworks aplicables, ejercicios prácticos, casos reales.
            </p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>02</span>
            <h3>Sprints & Playbooks</h3>
            <p>
              Guías tácticas para resolver problemas específicos con IA. Desde analizar datos 
              hasta preparar presentaciones. Listos para usar el mismo día.
            </p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>03</span>
            <h3>Radar Semanal</h3>
            <p>
              Newsletter que filtra el ruido por ti. Solo lo que importa esta semana: 
              una herramienta, un concepto, una reflexión. 5 minutos de lectura.
            </p>
          </article>
          <article className={styles.featureCard}>
            <span className={styles.featureNumber}>04</span>
            <h3>Case Clinic en Vivo</h3>
            <p>
              Sesión mensual donde resolvemos casos reales de los miembros. Traes tu problema, 
              lo trabajamos juntos. Aprendes viendo cómo otros piensan.
            </p>
          </article>
        </div>

        <div className={styles.featureBonus}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <p>
            <strong>+ Vault de contenido:</strong> Acceso a todos los deep dives, sprints y playbooks 
            anteriores desde el día uno.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="pricing-title" id="precio">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Oferta fundadores</span>
          <h2 id="pricing-title" className={styles.sectionTitle}>
            Precio de fundador<br />
            <span className={styles.highlight}>(solo 50 plazas)</span>
          </h2>
            </div>

        <div className={styles.pricingCard}>
          <div className={styles.pricingBadge}>Precio bloqueado de por vida</div>
          <div className={styles.pricingAmount}>
            <span className={styles.pricingCurrency}>€</span>
            <span className={styles.pricingValue}>19</span>
            <span className={styles.pricingPeriod}>/mes</span>
          </div>
          <p className={styles.pricingAlt}>o €190/año (ahorra 2 meses)</p>
          
          <ul className={styles.pricingFeatures}>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Acceso completo a todo el contenido
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Deep dives mensuales + Sprints
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Radar semanal
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Case Clinic mensual en vivo
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Vault con todo el contenido anterior
            </li>
                </ul>

          <form className={styles.waitlistForm} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="waitlist-email" className="sr-only">Tu email</label>
            <input 
              type="email" 
              id="waitlist-email"
              placeholder="tu@email.com" 
              required 
              className={styles.waitlistInput}
            />
            <button type="submit" className={styles.waitlistButton}>
              Reservar mi plaza
            </button>
          </form>

          <p className={styles.pricingNote}>
            Precio estándar: €29-39/mes tras los primeros 50 miembros.
          </p>
        </div>
      </section>

      {/* For Who Section */}
      <section className={styles.section} aria-labelledby="for-who-title">
        <div className={styles.sectionHeader}>
          <h2 id="for-who-title" className={styles.sectionTitle}>
            ¿Es esto para ti?
          </h2>
        </div>

        <div className={styles.forWhoGrid}>
          <div className={styles.forWhoCard}>
            <h3 className={styles.forWhoYes}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Esto es para ti si...
            </h3>
            <ul>
              <li>Tienes 5-15+ años de experiencia profesional</li>
              <li>Sientes que la IA te está dejando atrás (o lo hará pronto)</li>
              <li>Quieres aplicar, no solo consumir teoría</li>
              <li>Valoras tu tiempo y buscas contenido denso, no relleno</li>
              <li>Buscas ventaja competitiva real, no certificados</li>
            </ul>
              </div>
          <div className={styles.forWhoCard}>
            <h3 className={styles.forWhoNo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              Esto NO es para ti si...
            </h3>
            <ul>
              <li>Buscas certificaciones para tu LinkedIn</li>
              <li>Quieres "dominar ChatGPT" en 2 horas</li>
              <li>Prefieres cursos de 40 horas que nunca terminas</li>
              <li>Solo te interesa aprender prompts y trucos</li>
              <li>No tienes interés en pensamiento crítico</li>
            </ul>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-title" id="faq">
        <div className={styles.sectionHeader}>
          <h2 id="faq-title" className={styles.sectionTitle}>
            Preguntas frecuentes
          </h2>
        </div>

        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={`${styles.faqIcon} ${openFaq === index ? styles.faqIconOpen : ""}`}
                  aria-hidden="true"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`${styles.faqAnswer} ${openFaq === index ? styles.faqAnswerOpen : ""}`}
                aria-hidden={openFaq !== index}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className={styles.section} aria-labelledby="founder-title">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Sobre el fundador</span>
          <h2 id="founder-title" className={styles.sectionTitle}>
            Quién está detrás
          </h2>
        </div>

        <div className={styles.founderCard}>
          <div className={styles.founderImage} aria-hidden="true">
            <div className={styles.founderImagePlaceholder}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 42C8 33.1634 15.1634 26 24 26C32.8366 26 40 33.1634 40 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
        </div>
          <div className={styles.founderContent}>
            <h3>[Tu Nombre]</h3>
            <p className={styles.founderRole}>Fundador de Next Mind Labs</p>
            <p className={styles.founderBio}>
              [Placeholder: Aquí irá tu bio. Algo como: "Después de 15 años ayudando a equipos 
              a tomar mejores decisiones, vi cómo profesionales brillantes se paralizaban ante 
              la IA. No por falta de inteligencia, sino por falta de un marco mental para 
              integrarla. Creé Next Mind Labs para resolver exactamente eso."]
            </p>
            <p className={styles.founderBio}>
              [Puedes añadir: experiencia previa, empresas con las que has trabajado, 
              formación relevante, etc.]
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <h2 id="final-cta-title">¿Listo para dejar de competir con la IA?</h2>
        <p>Únete a los primeros 50 profesionales que están construyendo su ventaja competitiva.</p>
        <a href="#precio" className={styles.primaryButton}>
          Reservar mi plaza de fundador
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>
    </main>
  );
}
