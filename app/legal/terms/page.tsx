import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Next Mind Labs",
  description: "Conditions for using the Next Mind Labs platform and learning resources."
};

export default function TermsPage() {
  return (
    <main id="mainContent" style={{ padding: "4rem 0", display: "grid", gap: "1.5rem" }}>
      <header>
        <h1>Terms of Use</h1>
        <p>By using Next Mind Labs, you agree to these core principles.</p>
      </header>
      <section>
        <h2>Responsible usage</h2>
        <p>Our resources are for educational purposes. Do not resell or redistribute without consent.</p>
      </section>
      <section>
        <h2>Attribution</h2>
        <p>If you adapt our materials, credit Next Mind Labs and our contributing researchers.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Reach out to legal@nextmindlabs.com with questions.</p>
      </section>
    </main>
  );
}


