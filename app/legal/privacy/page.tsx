import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Next Mind Labs",
  description: "How Next Mind Labs handles data, privacy, and security."
};

export default function PrivacyPage() {
  return (
    <main id="mainContent" style={{ padding: "4rem 0", display: "grid", gap: "1.5rem" }}>
      <header>
        <h1>Privacy Policy</h1>
        <p>We respect your privacy. This outline summarises our current practices.</p>
      </header>
      <section>
        <h2>Data collection</h2>
        <p>We only collect the information you choose to share (e.g., newsletter sign-ups, contact forms).</p>
      </section>
      <section>
        <h2>Usage</h2>
        <p>Data is used to deliver requested resources and improve our programmes. We do not sell personal data.</p>
      </section>
      <section>
        <h2>Questions</h2>
        <p>Email privacy@nextmindlabs.com for detailed documentation or deletion requests.</p>
      </section>
    </main>
  );
}


