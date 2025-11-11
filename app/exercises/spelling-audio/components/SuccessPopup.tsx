"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "../styles.module.css";
import { safeAudioPlay, withBasePath } from "@/lib/utils";

type SuccessPopupProps = {
  open: boolean;
  message?: string;
  onClose: () => void;
  autoCloseMs?: number;
};

export function SuccessPopup({
  open,
  message,
  onClose,
  autoCloseMs = 1600,
}: SuccessPopupProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [visible, setVisible] = useState(false);

  const label = useMemo(() => message || "Sehr gut! Weiter so.", [message]);

  useEffect(() => {
    const timers: number[] = [];
    if (!open) {
      timers.push(window.setTimeout(() => setVisible(false), 0));
      return () => {
        timers.forEach((id) => window.clearTimeout(id));
      };
    }
    timers.push(window.setTimeout(() => setVisible(true), 0));
    const element = audioRef.current;
    if (element) {
      void safeAudioPlay(element);
    }
    const timeoutId = window.setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, autoCloseMs);
    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.clearTimeout(timeoutId);
    };
  }, [open, autoCloseMs, onClose]);

  return (
    <div
      className={`${styles.successOverlay} ${visible ? styles.successOverlayOpen : ""}`}
      aria-hidden={!visible}
    >
      <div
        className={styles.successModal}
        role="alertdialog"
        aria-live="assertive"
        aria-modal="true"
        aria-label="Erfolgsmeldung"
      >
        <div className={styles.successEmblem} aria-hidden="true">
          ✓
        </div>
        <p className={styles.successMessage}>{label}</p>
      </div>

      <audio
        ref={audioRef}
        preload="auto"
        src={withBasePath("/assets/appsounds/success-chime.mp3")}
        aria-hidden="true"
      />
    </div>
  );
}


