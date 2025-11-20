"use client";

import { useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
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

type BundleEvent = {
  from: number;
  to: number;
  id: number;
  targetColor: string;
  offsetX: number;
  offsetY: number;
  payloadCount: number;
};

type BundleStyle = CSSProperties & {
  "--bundle-target-x"?: string;
  "--bundle-target-y"?: string;
};

function formatDigit(value: number, system: NumberSystem) {
  if (system === "hex") {
    return value.toString(16).toUpperCase();
  }
  return value.toString();
}

function withAlpha(hexColor: string, alpha: number) {
  if (!hexColor.startsWith("#")) {
    return hexColor;
  }

  let hex = hexColor.replace("#", "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex.length !== 6) {
    return hexColor;
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function PlaceValueTrainer() {
  const [numberSystem, setNumberSystem] = useState<NumberSystem>("decimal");
  const [autoCarry, setAutoCarry] = useState(false);
  const [hideLeadingZeros, setHideLeadingZeros] = useState(false);
  const [showCubes, setShowCubes] = useState(true);
  const [digits, setDigits] = useState<number[]>(INITIAL_DIGITS);
  const [bundleEvent, setBundleEvent] = useState<BundleEvent | null>(null);
  const bundleIdRef = useRef(0);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const config = useMemo(() => SYSTEM_CONFIG[numberSystem], [numberSystem]);

  const handleSystemChange = (system: NumberSystem) => {
    setNumberSystem(system);
    const base = SYSTEM_CONFIG[system].base;
    setDigits((current) =>
      current.map((value) => {
        if (value >= base) {
          return base - 1;
        }
        return value;
      }),
    );
    setBundleEvent(null);
  };

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

  const resetDigits = () => {
    setDigits(INITIAL_DIGITS);
    setBundleEvent(null);
  };

  const incrementAtIndex = (index: number) => {
    const base = config.base;
    let pendingBundleMeta: { from: number; to: number; payloadCount: number } | null = null;
    setDigits((prev) => {
      const next = [...prev];
      const previousValue = prev[index];
      carryIncrement(next, index, base, autoCarry);
      if (
        showCubes &&
        autoCarry &&
        base === 10 &&
        previousValue === base - 1 &&
        next[index] === 0
      ) {
        const targetIndex = index - 1;
        if (targetIndex >= 0) {
          pendingBundleMeta = {
            from: index,
            to: targetIndex,
            payloadCount: base,
          };
        }
      }
      return next;
    });

    if (pendingBundleMeta) {
      const { from, to, payloadCount } = pendingBundleMeta;
      const fromCard = cardRefs.current[from];
      const toCard = cardRefs.current[to];
      const fromRect = fromCard?.getBoundingClientRect();
      const toRect = toCard?.getBoundingClientRect();

      const offsetX =
        fromRect && toRect
          ? toRect.left + toRect.width / 2 - (fromRect.left + fromRect.width / 2)
          : to < from
            ? -120
            : 120;

      const offsetY =
        fromRect && toRect ? toRect.top - fromRect.top : -30;

      const nextId = bundleIdRef.current + 1;
      bundleIdRef.current = nextId;

      setBundleEvent({
        from,
        to,
        id: nextId,
        targetColor: COLORS[to % COLORS.length],
        offsetX,
        offsetY,
        payloadCount,
      });
    }
  };

  const handleBundleAnimationEnd = (id: number) => {
    setBundleEvent((current) => {
      if (current?.id === id) {
        return null;
      }
      return current;
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
                onClick={() => handleSystemChange(system)}
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

        <label className={styles.toggle}>
          <input
            type="checkbox"
            checked={showCubes}
            onChange={(event) => {
              const nextValue = event.target.checked;
              setShowCubes(nextValue);
              if (!nextValue) {
                setBundleEvent(null);
              }
            }}
          />
          Würfel anzeigen
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
          const cubeBorder = withAlpha(color, 0.65);
          const cubeFill = withAlpha(color, 0.18);
          const cubeGlow = withAlpha(color, 0.18);
          const isBundleSource = bundleEvent?.from === index;
          const isBundleTarget = bundleEvent?.to === index;
          const bundleId = bundleEvent?.id ?? 0;
          const activeCubeCount =
            isBundleSource && bundleEvent ? bundleEvent.payloadCount : digit;
          const shouldShowOrbit = showCubes && (activeCubeCount > 0 || isBundleSource);
          const bundleStyles: BundleStyle | null =
            isBundleSource && bundleEvent
              ? {
                  borderColor: withAlpha(bundleEvent.targetColor, 0.75),
                  backgroundColor: withAlpha(bundleEvent.targetColor, 0.25),
                  boxShadow: `0 6px 16px ${withAlpha(bundleEvent.targetColor, 0.3)}`,
                  "--bundle-target-x": `${bundleEvent.offsetX}px`,
                  "--bundle-target-y": `${bundleEvent.offsetY}px`,
                }
              : null;
          return (
            <button
              key={label ?? index}
              type="button"
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={`${styles.digitCard} ${isHidden ? styles.digitCardHidden : ""} ${
                isBundleTarget ? styles.digitCardTarget : ""
              }`}
              style={{ borderColor: color, background: `${color}22` }}
              onClick={() => incrementAtIndex(index)}
              aria-label={`${label || "Stelle"}: ${formatDigit(digit, numberSystem)}`}
            >
              {shouldShowOrbit && (
                <div className={styles.cubeOrbit} aria-hidden="true">
                  <div
                    className={`${styles.cubeCluster} ${
                      isBundleSource && bundleEvent ? styles.cubeClusterCollecting : ""
                    }`}
                  >
                    {Array.from({ length: activeCubeCount }).map((_, cubeIndex) => (
                      <span
                        key={`${index}-${cubeIndex}-${digit}`}
                        className={styles.cube}
                        style={{
                          borderColor: cubeBorder,
                          backgroundColor: cubeFill,
                          boxShadow: `0 4px 12px ${cubeGlow}`,
                          animationDelay: `${cubeIndex * 0.025}s`,
                        }}
                      />
                    ))}
                  </div>
                  {bundleStyles && (
                    <span
                      className={styles.cubeBundle}
                      style={bundleStyles}
                      onAnimationEnd={() => handleBundleAnimationEnd(bundleId)}
                    />
                  )}
                </div>
              )}
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


