"use client";

import type { ReactNode } from "react";
import styles from "./layout.module.css";

export default function UebungenLayout({ children }: { children: ReactNode }) {
  return (
    <main id="mainContent" className={styles.main} lang="de">
      {children}
    </main>
  );
}
