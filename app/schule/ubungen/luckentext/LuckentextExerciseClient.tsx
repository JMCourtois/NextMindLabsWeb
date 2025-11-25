"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SpellingWord } from "@/lib/types";
import { safeAudioPlay } from "@/lib/utils";
import styles from "./styles.module.css";

type LuckentextExerciseClientProps = {
  words: SpellingWord[];
  title: string;
  description: string;
};

type GameStatus = "idle" | "selected" | "success" | "error";

type GameState = {
  currentWordIndex: number;
  options: SpellingWord[];
  selectedOption: SpellingWord | null;
  status: GameStatus;
};

export function LuckentextExerciseClient({ words, title, description }: LuckentextExerciseClientProps) {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const successAudioRef = useRef<HTMLAudioElement | null>(null);
  const errorAudioRef = useRef<HTMLAudioElement | null>(null);

  // We need all valid words to generate distractors
  const [allWords, setAllWords] = useState<SpellingWord[]>([]);
  
  useEffect(() => {
    // Load all words for distractor generation
    fetch('/data/words.json')
      .then(res => res.json())
      .then((data: SpellingWord[]) => {
        setAllWords(data.filter(w => w.sentence && w.sentence.includes("___")));
      })
      .catch(console.error);
  }, []);

  const generateOptions = (targetWord: SpellingWord, wordPool: SpellingWord[]): SpellingWord[] => {
    const otherWords = wordPool.filter((w) => w.id !== targetWord.id);
    const distractors = otherWords
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    return [...distractors, targetWord].sort(() => Math.random() - 0.5);
  };

  const [gameState, setGameState] = useState<GameState>({
    currentWordIndex: 0,
    options: [],
    selectedOption: null,
    status: "idle",
  });

  // Initialize options when allWords are loaded
  useEffect(() => {
    if (allWords.length > 0 && gameState.options.length === 0) {
      const currentWord = words[gameState.currentWordIndex];
      setGameState(prev => ({
        ...prev,
        options: generateOptions(currentWord, allWords),
      }));
    }
  }, [allWords, gameState.currentWordIndex, gameState.options.length, words]);

  if (allWords.length === 0 || gameState.options.length === 0) {
    return <p className={styles.statusError}>Lade Übung...</p>;
  }

  const currentWord = words[gameState.currentWordIndex];
  const progressLabel = `${title}: Wort ${gameState.currentWordIndex + 1} von ${words.length}`;
  const sentenceParts = currentWord.sentence!.split("___");

  const playAudio = async (url: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
      await safeAudioPlay(audioRef.current);
    }
  };

  const handleOptionSelect = async (option: SpellingWord) => {
    if (gameState.status === "success") return;

    void playAudio(option.audioUrl);

    setGameState({
      ...gameState,
      selectedOption: option,
      status: "selected",
    });
  };

  const handleCheck = () => {
    if (!gameState.selectedOption) return;

    const isCorrect = gameState.selectedOption.id === currentWord.id;

    if (isCorrect) {
      setGameState({ ...gameState, status: "success" });
      if (successAudioRef.current) void safeAudioPlay(successAudioRef.current);
    } else {
      setGameState({ ...gameState, status: "error" });
      if (errorAudioRef.current) void safeAudioPlay(errorAudioRef.current);
      
      setTimeout(() => {
        setGameState((prev) => 
          prev.status === "success" ? prev : { ...prev, status: "selected" }
        );
      }, 800);
    }
  };

  const handleNext = () => {
    const nextIndex = gameState.currentWordIndex + 1;
    
    if (nextIndex >= words.length) {
      // Finished - go back to overview
      router.push("/schule/ubungen/luckentext");
    } else {
      // Move to next word
      const nextWord = words[nextIndex];
      setGameState({
        currentWordIndex: nextIndex,
        options: generateOptions(nextWord, allWords),
        selectedOption: null,
        status: "idle",
      });
    }
  };

  const isCheckEnabled = gameState.selectedOption !== null && gameState.status !== "success";
  const showNextButton = gameState.status === "success";

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.progress}>{progressLabel}</p>
          <h2 className={styles.heading}>{title}</h2>
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
             {gameState.currentWordIndex < words.length - 1 
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
