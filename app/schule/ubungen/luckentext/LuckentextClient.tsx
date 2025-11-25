"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SpellingWord } from "@/lib/types";
import { safeAudioPlay } from "@/lib/utils";
import styles from "./styles.module.css";

type LuckentextClientProps = {
  words: SpellingWord[];
};

type GameState = {
  currentWordIndex: number;
  shuffledWords: SpellingWord[];
  options: SpellingWord[];
  selectedOption: SpellingWord | null;
  status: "idle" | "success" | "error";
};

export function LuckentextClient({ words }: LuckentextClientProps) {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const successAudioRef = useRef<HTMLAudioElement | null>(null);
  const errorAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize game
  useEffect(() => {
    const validWords = words.filter((w) => w.sentence && w.sentence.includes("___"));
    if (validWords.length === 0) return;

    const shuffled = [...validWords].sort(() => Math.random() - 0.5);
    startNewRound(0, shuffled, validWords);
  }, [words]);

  const startNewRound = (
    index: number, 
    shuffled: SpellingWord[], 
    allValidWords: SpellingWord[]
  ) => {
    const target = shuffled[index];
    
    // Generate distractors
    const otherWords = allValidWords.filter((w) => w.id !== target.id);
    const distractors = otherWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    
    const options = [...distractors, target].sort(() => Math.random() - 0.5);

    setGameState({
      currentWordIndex: index,
      shuffledWords: shuffled,
      options,
      selectedOption: null,
      status: "idle",
    });
  };

  const playAudio = async (url: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      await safeAudioPlay(audioRef.current);
    }
  };

  const handleOptionClick = async (option: SpellingWord) => {
    if (gameState?.status === "success") return;

    // Play word audio
    void playAudio(option.audioUrl);

    const isCorrect = option.id === gameState?.shuffledWords[gameState.currentWordIndex].id;

    if (isCorrect) {
      setGameState((prev) => prev ? { ...prev, selectedOption: option, status: "success" } : null);
      if (successAudioRef.current) void safeAudioPlay(successAudioRef.current);
    } else {
      setGameState((prev) => prev ? { ...prev, selectedOption: option, status: "error" } : null);
      if (errorAudioRef.current) void safeAudioPlay(errorAudioRef.current);
      
      // Reset error status after animation
      setTimeout(() => {
        setGameState((prev) => {
          if (prev?.status === "success") return prev;
          return prev ? { ...prev, status: "idle" } : null; // Keep selected option visible but remove error state?
          // Or maybe clear selection? 
          // "The chosen word is inserted into the blank". If wrong, it should probably stay until changed.
          // But if I want to allow "proceed only if correct", maybe just mark it as error.
        });
      }, 800);
    }
  };

  const handleNext = () => {
    if (!gameState) return;
    const nextIndex = (gameState.currentWordIndex + 1) % gameState.shuffledWords.length;
    startNewRound(nextIndex, gameState.shuffledWords, words.filter(w => w.sentence));
  };

  if (!gameState) {
    return <p className={styles.statusError}>Lade Übung...</p>;
  }

  const currentWord = gameState.shuffledWords[gameState.currentWordIndex];
  const progressLabel = `Wort ${gameState.currentWordIndex + 1} von ${gameState.shuffledWords.length}`;

  // Replace placeholder with selected word or blank
  const sentenceParts = currentWord.sentence!.split("___");
  
  return (
    <section className={styles.page}>
      <Link href="/schule" className={styles.backLink}>
        ← Zur Übersicht
      </Link>

      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.progress}>{progressLabel}</p>
          <h2 className={styles.heading}>Lückentext-Training</h2>
          <p className={styles.headerDescription}>
            Finde das fehlende Wort. Klicke auf die richtige Lösung, um den Satz zu vervollständigen.
          </p>
        </div>
      </header>

      <div className={styles.sentenceSection}>
        <div className={styles.sentence}>
          {sentenceParts[0]}
          <span 
            className={`
              ${styles.blank} 
              ${gameState.selectedOption ? styles.blankFilled : ''}
              ${gameState.status === 'success' ? styles.blankSuccess : ''}
              ${gameState.status === 'error' ? styles.blankError : ''}
            `}
          >
            {gameState.selectedOption ? gameState.selectedOption.word : "___"}
          </span>
          {sentenceParts[1]}
        </div>

        {gameState.status === "success" && (
          <button onClick={handleNext} className={styles.nextButton}>
            Nächstes Wort →
          </button>
        )}
      </div>

      <div className={styles.optionsGrid}>
        {gameState.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            disabled={gameState.status === "success" && gameState.selectedOption?.id !== option.id}
            className={`
              ${styles.optionButton}
              ${gameState.selectedOption?.id === option.id && gameState.status === "success" ? styles.optionButtonCorrect : ''}
              ${gameState.selectedOption?.id === option.id && gameState.status === "error" ? styles.optionButtonWrong : ''}
            `}
          >
            {option.word}
          </button>
        ))}
      </div>

      <audio ref={audioRef} />
      <audio ref={successAudioRef} src="/assets/appsounds/success-chime.mp3" />
      <audio ref={errorAudioRef} src="/assets/appsounds/error-buzz.mp3" />
    </section>
  );
}

