"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import styles from "./layout.module.css";

type CategoryCopy = {
  eyebrow: string;
  title: string;
};

const CATEGORY_CONTENT: Record<string, CategoryCopy> = {
  fehlerworter: {
    eyebrow: "Deutsch",
    title: "Sprach- und Hörtraining",
  },
  stellenwert: {
    eyebrow: "Mathematik",
    title: "Zahlen verstehen",
  },
};

const DEFAULT_COPY: CategoryCopy = {
  eyebrow: "Übungen",
  title: "Lernraum",
};

export default function UebungenLayout({ children }: { children: ReactNode }) {
  const segments = useSelectedLayoutSegments();
  const primarySegment = segments[0] ?? "";
  const copy = CATEGORY_CONTENT[primarySegment] ?? DEFAULT_COPY;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerCopy}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.title}>{copy.title}</h1>
        </div>
        <Link href="/schule" className={styles.backLink}>
          ← Zur Übersicht
        </Link>
      </header>

      <main id="mainContent" className={styles.main} lang="de">
        {children}
      </main>
    </div>
  );
}


