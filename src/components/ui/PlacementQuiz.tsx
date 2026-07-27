"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { CURRICULUM_LEVELS } from "@/lib/constants";

export default function PlacementQuiz() {
  const [answers, setAnswers] = useState({
    experience: "",
    tactics: "",
    endgames: "",
  });
  const [resultLevel, setResultLevel] = useState<number | null>(null);

  function handleSelect(question: keyof typeof answers, val: string) {
    setAnswers((prev) => ({ ...prev, [question]: val }));
  }

  function calculateResult() {
    if (answers.experience === "brand-new") {
      setResultLevel(1); // Pawn
    } else if (answers.experience === "beginner" && answers.tactics === "forks") {
      setResultLevel(2); // Knight
    } else if (answers.tactics === "pins" && answers.endgames === "basic") {
      setResultLevel(3); // Bishop
    } else if (answers.endgames === "intermediate") {
      setResultLevel(5); // Rook
    } else {
      setResultLevel(4); // Double Bishop
    }
  }

  function handleReset() {
    setAnswers({ experience: "", tactics: "", endgames: "" });
    setResultLevel(null);
  }

  return (
    <Card className="p-6 sm:p-8 bg-surface border-chess-green/30 relative">
      <div className="mb-6 text-center sm:text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-chess-green-light bg-chess-green/15 px-3 py-1 rounded-full border border-chess-green/30">
          🎯 2-MINUTE LEVEL FINDER
        </span>
        <h3 className="text-2xl font-bold text-foreground mt-2">Find Your Curriculum Level</h3>
        <p className="text-xs text-foreground-secondary mt-1">
          Answer 3 quick questions to find your recommended starting level from Pawn (Lvl 1) to King (Lvl 8).
        </p>
      </div>

      {resultLevel === null ? (
        <div className="space-y-6 text-left">
          {/* Question 1 */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
              1. What is your current chess experience?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                { label: "Just learned how pieces move", value: "brand-new" },
                { label: "Play casually on chess apps (< 1000 Elo)", value: "beginner" },
                { label: "Play club or rated games (1000+ Elo)", value: "rated" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("experience", opt.value)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    answers.experience === opt.value
                      ? "border-chess-green bg-chess-green/15 text-chess-green-light font-bold"
                      : "border-border bg-background text-foreground-secondary hover:border-border-hover"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
              2. Which tactical concepts are you comfortable with?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                { label: "Still learning knight forks & checks", value: "forks" },
                { label: "Pins, skewers, and double attacks", value: "pins" },
                { label: "Deep calculation & sacrifices", value: "sacrifices" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("tactics", opt.value)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    answers.tactics === opt.value
                      ? "border-chess-green bg-chess-green/15 text-chess-green-light font-bold"
                      : "border-border bg-background text-foreground-secondary hover:border-border-hover"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
              3. How would you rate your endgame technique?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              {[
                { label: "Basic checkmate with Queen & Rook", value: "basic" },
                { label: "King & Pawn opposition", value: "intermediate" },
                { label: "Rook endgames & master conversions", value: "advanced" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect("endgames", opt.value)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    answers.endgames === opt.value
                      ? "border-chess-green bg-chess-green/15 text-chess-green-light font-bold"
                      : "border-border bg-background text-foreground-secondary hover:border-border-hover"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <Button
              onClick={calculateResult}
              disabled={!answers.experience || !answers.tactics || !answers.endgames}
              size="lg"
              className="w-full"
            >
              <span>Calculate Recommended Starting Level →</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="py-6 text-center space-y-4 animate-fade-in">
          {(() => {
            const levelInfo = CURRICULUM_LEVELS.find((l) => l.level === resultLevel) || CURRICULUM_LEVELS[0];
            return (
              <>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-chess-green/20 text-chess-green-light text-5xl border border-chess-green/40 shadow-lg">
                  {levelInfo.icon}
                </div>
                <div className="text-xs font-bold text-chess-green-light uppercase tracking-wider">
                  RECOMMENDED LEVEL {levelInfo.level}
                </div>
                <h4 className="text-3xl font-extrabold text-foreground">{levelInfo.name}</h4>
                <p className="text-sm font-semibold text-gold-light">{levelInfo.title}</p>
                <p className="text-xs text-foreground-secondary max-w-md mx-auto leading-relaxed">
                  {levelInfo.desc}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <Button href="/contact" variant="primary" size="md">
                    Enroll in {levelInfo.name}
                  </Button>
                  <Button onClick={handleReset} variant="secondary" size="md">
                    Retake Quiz
                  </Button>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </Card>
  );
}
