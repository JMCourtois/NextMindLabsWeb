import type { Metadata } from "next";
import Link from "next/link";
import { PlaceValueTrainer } from "./PlaceValueTrainer";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "Stellenwert-Trainer | Next Mind Labs Schule",
  description:
    "Interaktives Tool zum Üben von Stellenwerten im Dezimal-, Binär- und Hexadezimalsystem – mit optionalem Übertrag.",
};

export default function StellenwertTrainerPage() {
  return (
    <section className={styles.page} aria-labelledby="stellenwertHeading">
      <PlaceValueTrainer />
    </section>
  );
}
