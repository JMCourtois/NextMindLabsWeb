import type { Metadata } from "next";
import biases from "@/data/biases.json";
import { BiasIndexClient } from "./BiasIndexClient";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Biases Index | Next Mind Labs",
  description:
    "Search and filter cognitive biases inspired by The Decision Lab, complete with examples, impacts, and mitigation strategies."
};

export default function BiasesIndexPage() {
  const initialBiases = biases;
  return (
    <main id="mainContent" className={styles.page}>
      <BiasIndexClient biases={initialBiases} />
    </main>
  );
}


