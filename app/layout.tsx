import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { SkipLink } from "./components/SkipLink";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Next Mind Labs | The school for professionals who won't be replaced",
  description:
    "Stop competing with AI. Learn to direct it. Become a Hybrid Professional with critical thinking + AI as your intellectual partner.",
  keywords: [
    "AI for professionals",
    "artificial intelligence",
    "critical thinking",
    "AI productivity",
    "ChatGPT professional",
    "AI training",
    "hybrid professional"
  ],
  authors: [{ name: "Next Mind Labs" }],
  openGraph: {
    title: "Next Mind Labs | Stop competing with AI. Learn to direct it.",
    description:
      "Become a Hybrid Professional: high human capacity + high technical capacity. No noise, no endless courses, no empty prompts.",
    url: "https://nextmindlabs.com",
    siteName: "Next Mind Labs",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Mind Labs | The school for professionals who won't be replaced",
    description: "Stop competing with AI. Learn to direct it."
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
    <html lang="en">
      <body>
        <AuthProvider>
          <SkipLink />
          <Nav />
          <div className="layout-shell">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
