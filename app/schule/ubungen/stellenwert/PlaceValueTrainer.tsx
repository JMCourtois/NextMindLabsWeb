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

type CarryOverlay = {
  from: number;
  to: number;
  id: number;
  fromColor: string;
  toColor: string;
  deltaX: number;
  deltaY: number;
  startX: number;
  startY: number;
};

type FlightStyle = CSSProperties & {
  "--flight-start-x"?: string;
  "--flight-start-y"?: string;
  "--flight-delta-x"?: string;
  "--flight-delta-y"?: string;
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
  const [operationMode, setOperationMode] = useState<"add" | "subtract">("add");
  const [autoCarry, setAutoCarry] = useState(false);
  const [hideLeadingZeros, setHideLeadingZeros] = useState(false);
  const [showCubes, setShowCubes] = useState(true);
  const [digits, setDigits] = useState<number[]>(INITIAL_DIGITS);
  const [carryOverlay, setCarryOverlay] = useState<CarryOverlay | null>(null);
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const bundleIdRef = useRef(0);
  const cardRefs = useRef<(DOMRect | null)[]>(Array(7).fill(null));
  const boardRef = useRef<HTMLDivElement | null>(null);

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
    setCarryOverlay(null);
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
    setCarryOverlay(null);
    setErrorIndex(null);
  };

  // Check if subtracting at index would result in negative total
  const wouldResultInNegative = (index: number): boolean => {
    const base = config.base;
    // Calculate total value from index 0 to current index (inclusive)
    // This represents the "available" value at this position and higher
    let availableValue = 0;
    for (let i = 0; i <= index; i++) {
      availableValue = availableValue * base + digits[i];
    }
    // If we subtract 1 unit at this position, it would be negative if availableValue is 0
    // The unit value at position 'index' is base^(6-index) but we need to check 
    // if there's enough value to subtract from
    return availableValue === 0;
  };

  const handleDigitClick = (index: number) => {
    const base = config.base;
    const previousValue = digits[index];

    if (operationMode === "add") {
      setDigits((prev) => {
        const next = [...prev];
        carryIncrement(next, index, base, autoCarry);
        return next;
      });

      // Detect if a carry occurred (digit overflowed and wrapped to 0)
      const didCarry = autoCarry && previousValue === base - 1;
      if (showCubes && didCarry) {
        const targetIndex = index - 1;
        if (targetIndex >= 0) {
          const fromCard = cardRefs.current[index];
          const toCard = cardRefs.current[targetIndex];
          const boardRect = boardRef.current?.getBoundingClientRect();

          const hasMeasurements = Boolean(fromCard && toCard && boardRect);

          const startX = hasMeasurements
            ? (fromCard!.left + fromCard!.width / 2) - boardRect!.left
            : (boardRect?.width ?? 0) / 2;

          const startY = hasMeasurements
            ? fromCard!.top - boardRect!.top - 56
            : -56;

          const deltaX = hasMeasurements
            ? (toCard!.left + toCard!.width / 2) - (fromCard!.left + fromCard!.width / 2)
            : targetIndex < index
              ? -140
              : 140;

          const deltaY = hasMeasurements ? toCard!.top - fromCard!.top : 0;

          const nextCarry: CarryOverlay = {
            from: index,
            to: targetIndex,
            id: bundleIdRef.current + 1,
            fromColor: COLORS[index % COLORS.length],
            toColor: COLORS[targetIndex % COLORS.length],
            deltaX,
            deltaY,
            startX,
            startY,
          };

          bundleIdRef.current = nextCarry.id;
          requestAnimationFrame(() => {
            setCarryOverlay(nextCarry);
          });
        }
      }
    } else {
      // Subtract mode - check if this would result in negative
      if (wouldResultInNegative(index)) {
        // Show error animation
        setErrorIndex(index);
        return;
      }

      setDigits((prev) => {
        const next = [...prev];
        borrowDecrement(next, index, base, autoCarry);
        return next;
      });

      // Detect if a borrow occurred (digit underflowed from 0 to base-1)
      const didBorrow = autoCarry && previousValue === 0;
      if (showCubes && didBorrow) {
        const sourceIndex = index - 1;
        const targetIndex = index;

        if (sourceIndex >= 0) {
          const fromCard = cardRefs.current[sourceIndex];
          const toCard = cardRefs.current[targetIndex];
          const boardRect = boardRef.current?.getBoundingClientRect();

          const hasMeasurements = Boolean(fromCard && toCard && boardRect);

          const startX = hasMeasurements
            ? (fromCard!.left + fromCard!.width / 2) - boardRect!.left
            : (boardRect?.width ?? 0) / 2;

          const startY = hasMeasurements
            ? fromCard!.top - boardRect!.top - 56
            : -56;

          const deltaX = hasMeasurements
            ? (toCard!.left + toCard!.width / 2) - (fromCard!.left + fromCard!.width / 2)
            : 140;

          const deltaY = hasMeasurements ? toCard!.top - fromCard!.top : 0;

          const nextCarry: CarryOverlay = {
            from: sourceIndex,
            to: targetIndex,
            id: bundleIdRef.current + 1,
            fromColor: COLORS[sourceIndex % COLORS.length],
            toColor: COLORS[targetIndex % COLORS.length],
            deltaX,
            deltaY,
            startX,
            startY,
          };

          bundleIdRef.current = nextCarry.id;
          requestAnimationFrame(() => {
            setCarryOverlay(nextCarry);
          });
        }
      }
    }
  };

  const handleCarryAnimationEnd = (id: number) => {
    setCarryOverlay((current) => {
      if (current?.id === id) {
        return null;
      }
      return current;
    });
  };

  return (
    <div className={styles.trainer}>
      <section className={styles.controls} aria-label="Einstellungen">
        <div className={styles.controlsHeader}>
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

          <button type="button" className={styles.resetButton} onClick={resetDigits}>
            Zurücksetzen
          </button>
        </div>

        <fieldset className={styles.optionGroup}>
          <legend>Optionen</legend>
          <div className={styles.optionRow}>
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
                    setCarryOverlay(null);
                  }
                }}
              />
              Würfel anzeigen
            </label>
          </div>
        </fieldset>
      </section>

      {/* Mode Toggle +/- centered */}
      <div className={styles.modeToggleWrapper}>
        <div className={styles.modeToggle} role="group" aria-label="Rechenoperation">
          <button
            type="button"
            className={`${styles.modeButton} ${operationMode === "add" ? styles.modeButtonActive : ""}`}
            onClick={() => setOperationMode("add")}
            aria-pressed={operationMode === "add"}
            aria-label="Addieren"
          >
            +
          </button>
          <button
            type="button"
            className={`${styles.modeButton} ${operationMode === "subtract" ? styles.modeButtonActive : ""}`}
            onClick={() => setOperationMode("subtract")}
            aria-pressed={operationMode === "subtract"}
            aria-label="Subtrahieren"
          >
            −
          </button>
        </div>
      </div>

      <div className={styles.boardWrapper}>
        <div
          className={styles.board}
          role="group"
          aria-label="Stellenwerttafeln"
          ref={boardRef}
        >
          {digits.map((digit, index) => {
          const color = COLORS[index % COLORS.length];
          const label = config.labels[index] ?? "";
          const isHidden = hideLeadingZeros && leadingZeroMask[index];
          const cubeBorder = withAlpha(color, 0.65);
          const cubeFill = withAlpha(color, 0.18);
          const cubeGlow = withAlpha(color, 0.18);
          const isCarrySource = carryOverlay?.from === index;
          const isCarryTarget = carryOverlay?.to === index;
          const isError = errorIndex === index;
          const shouldShowOrbit = showCubes && digit > 0 && !isCarrySource;
          return (
            <div 
              key={label ?? index}
              className={`${styles.digitColumn} ${isHidden ? styles.digitColumnHidden : ""}`}
            >
              <button
                type="button"
                ref={(element) => {
                  if (element) {
                    cardRefs.current[index] = element.getBoundingClientRect();
                  }
                }}
                className={`${styles.digitCard} ${
                  isCarryTarget ? styles.digitCardTarget : ""
                } ${isError ? styles.digitCardError : ""}`}
                style={{ 
                  borderColor: isError ? "var(--color-error)" : color, 
                  background: isError ? "rgba(220, 38, 38, 0.08)" : `${color}22` 
                }}
                onClick={() => handleDigitClick(index)}
                onAnimationEnd={() => {
                  if (isError) {
                    setErrorIndex(null);
                  }
                }}
                aria-label={`${label || "Stelle"}: ${formatDigit(digit, numberSystem)}`}
              >
                {shouldShowOrbit && (
                  <div className={styles.cubeOrbit} aria-hidden="true">
                    <div className={styles.cubeCluster}>
                      {Array.from({ length: digit }).map((_, cubeIndex) => (
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
                  </div>
                )}
                <span className={styles.digitValue} style={{ color }}>
                  {formatDigit(digit, numberSystem)}
                </span>
              </button>
              <span className={styles.digitLabel} style={{ color }}>
                {label}
              </span>
            </div>
          );
          })}
        </div>
        {showCubes && carryOverlay && (() => {
          const flightStyles: FlightStyle = {
            borderColor: withAlpha(carryOverlay.toColor, 0.85),
            backgroundImage: `linear-gradient(to right, ${withAlpha(carryOverlay.fromColor, 0.22)}, ${withAlpha(carryOverlay.toColor, 0.22)})`,
            boxShadow: `0 14px 32px ${withAlpha(carryOverlay.toColor, 0.25)}`,
            "--flight-start-x": `${carryOverlay.startX}px`,
            "--flight-start-y": `${carryOverlay.startY}px`,
            "--flight-delta-x": `${carryOverlay.deltaX}px`,
            "--flight-delta-y": `${carryOverlay.deltaY}px`,
          };
          return (
            <span
              className={styles.flightCube}
              style={flightStyles}
              onAnimationEnd={() => handleCarryAnimationEnd(carryOverlay.id)}
            />
          );
        })()}
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

function borrowDecrement(digits: number[], index: number, base: number, autoCarry: boolean) {
  if (index < 0) {
    return;
  }
  digits[index] -= 1;
  if (digits[index] < 0) {
    digits[index] = base - 1;
    if (autoCarry) {
      borrowDecrement(digits, index - 1, base, autoCarry);
    }
  }
}
