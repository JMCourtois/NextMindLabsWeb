import type { Metadata } from "next";
import { notFound } from "next/navigation";
import biases from "@/data/biases.json";
import styles from "./page.module.css";

type Bias = (typeof biases)[number];

function getBias(slug: string): Bias | undefined {
  return biases.find((bias) => bias.slug === slug);
}

type BiasesPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return biases.map((bias) => ({ slug: bias.slug }));
}

export function generateMetadata({ params }: BiasesPageProps): Metadata {
  const bias = getBias(params.slug);
  if (!bias) {
    return {
      title: "Bias not found | Next Mind Labs"
    };
  }
  return {
    title: `${bias.name} | Biases Index`,
    description: bias.definition,
    openGraph: {
      title: bias.name,
      description: bias.definition
    }
  };
}

export default function BiasDetailPage({ params }: BiasesPageProps) {
  const bias = getBias(params.slug);

  if (!bias) {
    notFound();
  }

  return (
    <main id="mainContent" className={styles.page}>
      <header className={styles.hero}>
        <div>
          <span className="tag">Bias profile</span>
          <h1>{bias.name}</h1>
          <p>{bias.definition}</p>
        </div>
        <div className={styles.meta}>
          <h2>Categories</h2>
          <ul>
            {bias.category.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <h2>Real-world example</h2>
          <p>{bias.example}</p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="impactHeading">
        <div className={styles.surface}>
          <h2 id="impactHeading">Impact</h2>
          <p>{bias.impact}</p>
        </div>

        <div className={styles.surface}>
          <h2 id="mitigationHeading">Mitigation strategies</h2>
          <ul>
            {bias.mitigation.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className={styles.surface}>
          <h2 id="furtherReadingHeading">Further reading</h2>
          <ul className={styles.links}>
            {bias.furtherReading.map((resource) => (
              <li key={resource.url}>
                <a href={resource.url}>{resource.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {bias.related.length > 0 ? (
        <section className={styles.related}>
          <h2>Related biases</h2>
          <ul>
            {bias.related.map((slug) => {
              const relatedBias = getBias(slug);
              return relatedBias ? (
                <li key={slug}>
                  <a href={`/biases/${slug}`}>{relatedBias.name}</a>
                </li>
              ) : null;
            })}
          </ul>
        </section>
      ) : null}
    </main>
  );
}


