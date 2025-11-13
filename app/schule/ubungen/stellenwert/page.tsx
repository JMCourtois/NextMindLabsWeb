import type { Metadata } from "next";
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
      <header className={styles.header}>
        <p className={styles.eyebrow}>Zahlen verstehen</p>
        <h1 id="stellenwertHeading">Stellenwert-Trainer</h1>
        <p>
          Klicke auf die farbigen Karten, um die Ziffern zu verändern. Aktiviere bei Bedarf den automatischen Übertrag
          und wechsle zwischen Dezimal-, Binär- und Hexadezimalsystem.
        </p>
      </header>

      <PlaceValueTrainer />
    </section>
  );
}


