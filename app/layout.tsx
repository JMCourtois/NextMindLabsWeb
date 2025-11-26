import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "./components/SkipLink";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Next Mind Labs | La escuela para profesionales que no serán reemplazados",
  description:
    "Deja de competir con la IA. Aprende a dirigirla. Conviértete en un Profesional Híbrido con pensamiento crítico + IA como socio intelectual.",
  keywords: [
    "IA para profesionales",
    "inteligencia artificial",
    "pensamiento crítico",
    "productividad con IA",
    "ChatGPT profesional",
    "formación IA",
    "profesional híbrido"
  ],
  authors: [{ name: "Next Mind Labs" }],
  openGraph: {
    title: "Next Mind Labs | Deja de competir con la IA. Aprende a dirigirla.",
    description:
      "Conviértete en un Profesional Híbrido: alta capacidad humana + alta capacidad técnica. Sin ruido, sin cursos eternos, sin prompts vacíos.",
    url: "https://nextmindlabs.com",
    siteName: "Next Mind Labs",
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Mind Labs | La escuela para profesionales que no serán reemplazados",
    description: "Deja de competir con la IA. Aprende a dirigirla."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <SkipLink />
        <Nav />
        <div className="layout-shell">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
