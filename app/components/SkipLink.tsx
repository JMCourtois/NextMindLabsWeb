"use client";

import { usePathname } from "next/navigation";

export function SkipLink() {
  const pathname = usePathname();
  const isSchoolSection = pathname.startsWith("/schule");

  return (
    <a className="skip-link" href="#mainContent">
      {isSchoolSection ? "Zum Inhalt springen" : "Skip to content"}
    </a>
  );
}


