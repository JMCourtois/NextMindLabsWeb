"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SpellingWord } from "@/lib/types";
import { safeAudioPlay } from "@/lib/utils";
import styles from "./styles.module.css";

type LuckentextClientProps = {
  words: SpellingWord[];
};

type GameStatus = "idle" | "selected" | "success" | "error";

type GameState = {
  currentWordIndex: number;
  activeWords: SpellingWord[]; // The subset of words for the current round
  options: SpellingWord[];
  selectedOption: SpellingWord | null;
  status: GameStatus;
};

type ViewMode = "menu" | "game";

export function LuckentextClient({ words }: LuckentextClientProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("menu");
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentGroupTitle, setCurrentGroupTitle] = useState("");
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const successAudioRef = useRef<HTMLAudioElement | null>(null);
  const errorAudioRef = useRef<HTMLAudioElement | null>(null);

  // Group definitions
  const groups = useMemo(() => {
    const validWords = words.filter((w) => w.sentence && w.sentence.includes("___"));
    // Ensure we have consistent groups based on the list
    // 6 groups of 10, 1 group of 9 = 69 total
    const chunked = [];
    for (let i = 0; i < validWords.length; i += 10) {
      chunked.push(validWords.slice(i, i + 10));
    }
    return chunked;
  }, [words]);

  const startGroup = (groupIndex: number) => {
    const groupWords = groups[groupIndex];
    if (!groupWords) return;

    setCurrentGroupTitle(`Gruppe ${groupIndex + 1}`);
    initializeGame(groupWords);
  };

  const startRandomMode = () => {
    const validWords = words.filter((w) => w.sentence && w.sentence.includes("___"));
    // Shuffle and take 10
    const shuffled = [...validWords].sort(() => Math.random() - 0.5).slice(0, 10);
    setCurrentGroupTitle("Zufallsauswahl");
    initializeGame(shuffled);
  };

  const initializeGame = (gameWords: SpellingWord[]) => {
    setupRound(0, gameWords);
    setViewMode("game");
  };

  const setupRound = (index: number, gameWords: SpellingWord[]) => {
    const target = gameWords[index];
    
    // Generate distractors from ALL valid words, excluding target
    const allValidWords = words.filter((w) => w.sentence && w.sentence.includes("___"));
    const otherWords = allValidWords.filter((w) => w.id !== target.id);
    
    const distractors = otherWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    
    const options = [...distractors, target].sort(() => Math.random() - 0.5);

    setGameState({
      currentWordIndex: index,
      activeWords: gameWords,
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

  const handleOptionSelect = async (option: SpellingWord) => {
    if (gameState?.status === "success") return;

    // Play word audio
    void playAudio(option.audioUrl);

    setGameState((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        selectedOption: option,
        status: "selected", // Enable check button
      };
    });
  };

  const handleCheck = () => {
    if (!gameState || !gameState.selectedOption) return;

    const currentWord = gameState.activeWords[gameState.currentWordIndex];
    const isCorrect = gameState.selectedOption.id === currentWord.id;

    if (isCorrect) {
      setGameState((prev) => prev ? { ...prev, status: "success" } : null);
      if (successAudioRef.current) void safeAudioPlay(successAudioRef.current);
    } else {
      setGameState((prev) => prev ? { ...prev, status: "error" } : null);
      if (errorAudioRef.current) void safeAudioPlay(errorAudioRef.current);
      
      // Reset error status after animation, but keep selection
      setTimeout(() => {
        setGameState((prev) => {
          if (prev?.status === "success") return prev;
          return prev ? { ...prev, status: "selected" } : null;
        });
      }, 800);
    }
  };

  const handleNext = () => {
    if (!gameState) return;
    
    const nextIndex = gameState.currentWordIndex + 1;
    
    if (nextIndex >= gameState.activeWords.length) {
      // End of group - go back to menu
      setViewMode("menu");
      setGameState(null);
    } else {
      setupRound(nextIndex, gameState.activeWords);
    }
  };

  const handleBackToMenu = () => {
    setViewMode("menu");
    setGameState(null);
  };

  // RENDER: MENU
  if (viewMode === "menu") {
    return (
      <section className={styles.page}>
         <Link href="/schule" className={styles.backLink}>
            ← Zur Übersicht
          </Link>
          
          <header className={styles.header}>
            <div className={styles.headerText}>
              <h2 className={styles.heading}>Lückentext-Training</h2>
              <p className={styles.headerDescription}>
                Wähle eine Übungsgruppe. Höre genau hin und finde das passende Wort für den Satz.
              </p>
            </div>
          </header>

          <div className={styles.groupSection}>
             <button onClick={startRandomMode} className={styles.groupCard}>
                <h3 className={styles.groupCardTitle}>🎲 Zufallsauswahl</h3>
                <p className={styles.groupCardInfo}>10 gemischte Sätze aus allen Bereichen</p>
             </button>

             {groups.map((group, idx) => (
               <button key={idx} onClick={() => startGroup(idx)} className={styles.groupCard}>
                 <h3 className={styles.groupCardTitle}>Gruppe {idx + 1}</h3>
                 <p className={styles.groupCardInfo}>{group.length} Sätze</p>
               </button>
             ))}
          </div>
      </section>
    );
  }

  // RENDER: GAME
  if (!gameState) return <p className={styles.statusError}>Lade Übung...</p>;

  const currentWord = gameState.activeWords[gameState.currentWordIndex];
  const progressLabel = `${currentGroupTitle}: Wort ${gameState.currentWordIndex + 1} von ${gameState.activeWords.length}`;
  const sentenceParts = currentWord.sentence!.split("___");

  const isCheckEnabled = gameState.selectedOption !== null && gameState.status !== "success";
  const showNextButton = gameState.status === "success";

  return (
    <section className={styles.page}>
      <button onClick={handleBackToMenu} className={styles.backLink} type="button">
        ← Zurück zur Auswahl
      </button>

      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.progress}>{progressLabel}</p>
          <h2 className={styles.heading}>{currentGroupTitle}</h2>
          <p className={styles.headerDescription}>
            Finde das fehlende Wort. Erst auswählen, dann prüfen.
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
        
        {showNextButton ? (
           <button onClick={handleNext} className={styles.actionButton}>
             {gameState.currentWordIndex < gameState.activeWords.length - 1 
                ? "Nächstes Wort →" 
                : "Übung abschließen ✓"}
           </button>
        ) : (
          <button 
            onClick={handleCheck} 
            disabled={!isCheckEnabled} 
            className={styles.actionButton}
          >
            Prüfen
          </button>
        )}
      </div>

      <div className={styles.optionsGrid}>
        {gameState.options.map((option) => {
            const isSelected = gameState.selectedOption?.id === option.id;
            const isCorrect = gameState.status === "success" && isSelected;
            const isWrong = gameState.status === "error" && isSelected;
            
            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                disabled={gameState.status === "success"}
                className={`
                  ${styles.optionButton}
                  ${isSelected && !isCorrect && !isWrong ? styles.optionButtonSelected : ''}
                  ${isCorrect ? styles.optionButtonCorrect : ''}
                  ${isWrong ? styles.optionButtonWrong : ''}
                `}
              >
                {option.word}
              </button>
            );
        })}
      </div>

      <audio ref={audioRef} />
      <audio ref={successAudioRef} src="/assets/appsounds/success-chime.mp3" />
      <audio ref={errorAudioRef} src="/assets/appsounds/error-buzz.mp3" />
    </section>
  );
}
