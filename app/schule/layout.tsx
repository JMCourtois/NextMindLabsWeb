import type { Metadata } from "next";
import "./theme.css";
import { SchuleBodyClass } from "./BodyClass";
import { SchuleNav } from "./components/SchuleNav";

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
  return (
    <div className="schule-theme" lang="de">
      <SchuleBodyClass />
      <SchuleNav />
      {children}
    </div>
  );
}
