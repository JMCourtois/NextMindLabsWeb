import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "./components/SkipLink";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Next Mind Labs",
  description:
    "Playful learning journeys that help young minds recognise and work through cognitive biases.",
  openGraph: {
    title: "Next Mind Labs",
    description:
      "Future-ready skills and bias-aware learning paths for an AI-powered workplace.",
    url: "https://nextmindlabs.example",
    siteName: "Next Mind Labs",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Mind Labs",
    description: "Build bias-aware, AI-ready capabilities for tomorrow’s jobs."
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
        <SkipLink />
        <Nav />
        <div className="layout-shell">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
