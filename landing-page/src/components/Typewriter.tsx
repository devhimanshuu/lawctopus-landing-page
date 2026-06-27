"use client";

import { useState, useEffect } from "react";

export default function Typewriter({
  text,
  speed = 40,
  delay = 500,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, hasStarted, text, speed]);

  return (
    <div className="relative font-mono text-xs sm:text-sm text-slate-700 leading-relaxed overflow-hidden h-full">
      <div className="whitespace-pre-wrap">{displayedText}</div>
      {!isComplete && hasStarted && (
        <span className="inline-block w-1.5 h-3.5 bg-gold ml-1 animate-pulse align-middle" />
      )}
    </div>
  );
}
