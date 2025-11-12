import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Mind Labs - Schule",
  description:
    "Deutschsprachige Lernübungen, die Kindern helfen, kognitive Verzerrungen zu erkennen und zu überwinden.",
  robots: {
    index: false,
    follow: false
  }
};

export default function SchuleLayout({ children }: { children: React.ReactNode }) {
  return <div lang="de">{children}</div>;
}


