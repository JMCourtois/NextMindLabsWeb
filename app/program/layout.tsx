import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program | Next Mind Labs",
  description: "Access your training program: monthly sprints, content vault, weekly radar, and case clinics.",
};

export default function ProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

