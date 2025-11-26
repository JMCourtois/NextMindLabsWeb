import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programa | Next Mind Labs",
  description: "Accede a tu programa de formación: sprints mensuales, vault de contenido, radar semanal y case clinics.",
};

export default function ProgramaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

