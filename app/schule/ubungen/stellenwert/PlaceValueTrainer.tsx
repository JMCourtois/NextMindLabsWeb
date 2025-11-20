"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

type NumberSystem = "decimal" | "binary" | "hex";

const COLORS = ["#9CA3AF", "#22D3EE", "#F97316", "#38BDF8", "#34D399", "#FACC15", "#EF4444"];

const DECIMAL_LABELS = [
  "Millionen",
  "H_Tausender",
  "Z_Tausender",
  "Tausender",
  "Hunderter",
  "Zehner",
  "Einer",
];
const BINARY_LABELS = ["2⁶", "2⁵", "2⁴", "2³", "2²", "2¹", "2⁰"];
const HEX_LABELS = ["16⁶", "16⁵", "16⁴", "16³", "16²", "16¹", "16⁰"];

const SYSTEM_CONFIG: Record<NumberSystem, { base: number; labels: string[]; name: string }> = {
  decimal: { base: 10, labels: DECIMAL_LABELS, name: "Dezimalsystem" },
  binary: { base: 2, labels: BINARY_LABELS, name: "Binärsystem" },
  hex: { base: 16, labels: HEX_LABELS, name: "Hexadezimalsystem" },
};

const INITIAL_DIGITS = Array(7).fill(0) as number[];

function formatDigit(value: number, system: NumberSystem) {
  if (system === "hex") {
    return value.toString(16).toUpperCase();
  }
  return value.toString();
}

export function PlaceValueTrainer() {
  const [numberSystem, setNumberSystem] = useState<NumberSystem>("decimal");
  const [autoCarry, setAutoCarry] = useState(false);
  const [hideLeadingZeros, setHideLeadingZeros] = useState(false);
  const [digits, setDigits] = useState<number[]>(INITIAL_DIGITS);

  const config = useMemo(() => SYSTEM_CONFIG[numberSystem], [numberSystem]);

  useEffect(() => {
    setDigits((current) =>
      current.map((value) => {
        if (value >= config.base) {
          return config.base - 1;
        }
        return value;
      }),
    );
  }, [config.base]);

  const displayedValue = useMemo(() => {
    const base = config.base;
    const decimalValue = digits.reduce((acc, digit) => acc * base + digit, 0);
    if (numberSystem === "decimal") {
      return decimalValue.toString(10);
    }
    if (numberSystem === "binary") {
      return `${decimalValue.toString(2)} (binär) – ${decimalValue.toString(10)} (dezimal)`;
    }
    return `${decimalValue.toString(16).toUpperCase()} (hex) – ${decimalValue.toString(10)} (dezimal)`;
  }, [config.base, digits, numberSystem]);

  const leadingZeroMask = useMemo(() => {
    if (!hideLeadingZeros) {
      return digits.map(() => false);
    }

    let seenSignificant = false;
    return digits.map((digit, index) => {
      if (seenSignificant) {
        return false;
      }
      if (digit === 0) {
        const isLast = index === digits.length - 1;
        if (isLast) {
          return false;
        }
        return true;
      }
      seenSignificant = true;
      return false;
    });
  }, [digits, hideLeadingZeros]);

  const resetDigits = () => setDigits(INITIAL_DIGITS);

  const incrementAtIndex = (index: number) => {
    const base = config.base;
    setDigits((prev) => {
      const next = [...prev];
      carryIncrement(next, index, base, autoCarry);
      return next;
    });
  };

  return (
    <div className={styles.trainer}>
      <div className={styles.controls}>
        <fieldset className={styles.fieldset}>
          <legend>Zahlensystem</legend>
          <div className={styles.buttonGroup} role="group" aria-label="Zahlensystem wählen">
            {(["decimal", "binary", "hex"] as NumberSystem[]).map((system) => (
              <button
                key={system}
                type="button"
                className={numberSystem === system ? styles.switchActive : styles.switch}
                onClick={() => setNumberSystem(system)}
                aria-pressed={numberSystem === system}
              >
                {SYSTEM_CONFIG[system].name}
              </button>
            ))}
          </div>
        </fieldset>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={autoCarry}
            onChange={(event) => setAutoCarry(event.target.checked)}
          />
          Automatischer Übertrag
        </label>

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={hideLeadingZeros}
            onChange={(event) => setHideLeadingZeros(event.target.checked)}
          />
          Führende Nullen ausblenden
        </label>

        <button type="button" className={styles.resetButton} onClick={resetDigits}>
          Zurücksetzen
        </button>
      </div>

      <div className={styles.board} role="group" aria-label="Stellenwerttafeln">
        {digits.map((digit, index) => {
          const color = COLORS[index % COLORS.length];
          const label = config.labels[index] ?? "";
          const isHidden = hideLeadingZeros && leadingZeroMask[index];
          return (
            <button
              key={label ?? index}
              type="button"
              className={`${styles.digitCard} ${isHidden ? styles.digitCardHidden : ""}`}
              style={{ borderColor: color, background: `${color}22` }}
              onClick={() => incrementAtIndex(index)}
              aria-label={`${label || "Stelle"}: ${formatDigit(digit, numberSystem)}`}
            >
              <span className={styles.digitLabel} style={{ color }}>
                {label}
              </span>
              <span className={styles.digitValue} style={{ color }}>
                {formatDigit(digit, numberSystem)}
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.readout} aria-live="polite">
        Aktueller Wert: <strong>{displayedValue}</strong>
      </div>
    </div>
  );
}

function carryIncrement(digits: number[], index: number, base: number, autoCarry: boolean) {
  if (index < 0) {
    return;
  }
  digits[index] += 1;
  if (digits[index] >= base) {
    digits[index] = 0;
    if (autoCarry) {
      carryIncrement(digits, index - 1, base, autoCarry);
    }
  }
}


