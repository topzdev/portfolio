"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations/gsap";

const CHAR_DELAY_MS = 16;

export function useTypewriter(
  fullText: string,
  active: boolean,
  onComplete?: () => void,
): string {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!active) {
      setDisplayed(fullText);
      indexRef.current = fullText.length;
      return;
    }

    if (prefersReducedMotion()) {
      setDisplayed(fullText);
      indexRef.current = fullText.length;
      onCompleteRef.current?.();
      return;
    }

    setDisplayed("");
    indexRef.current = 0;

    const timer = window.setInterval(() => {
      indexRef.current += 1;
      setDisplayed(fullText.slice(0, indexRef.current));

      if (indexRef.current >= fullText.length) {
        window.clearInterval(timer);
        onCompleteRef.current?.();
      }
    }, CHAR_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [active, fullText]);

  return displayed;
}
