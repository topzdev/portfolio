"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/animations/gsap";
import { playBubbleSound } from "@/lib/sounds/playBubbleSound";
import { cn } from "@/lib/utils";

type StatusBubbleProps = {
  messages: string[];
  intervalMs?: number;
  initialDelayMs?: number;
  className?: string;
};

const CHAR_DELAY_MS = 42;

export function StatusBubble({
  messages,
  intervalMs = 10000,
  initialDelayMs = 2800,
  className,
}: StatusBubbleProps) {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const hasPlayedSound = useRef(false);

  const message = messages[messageIndex] ?? messages[0] ?? "";

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), initialDelayMs);
    return () => window.clearTimeout(timer);
  }, [initialDelayMs]);

  useEffect(() => {
    if (!visible || messages.length <= 1) return;

    const timer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [visible, messages.length, intervalMs]);

  useEffect(() => {
    if (visible && !hasPlayedSound.current) {
      hasPlayedSound.current = true;
      playBubbleSound();
    }
  }, [visible]);

  useEffect(() => {
    if (!message) return;

    if (prefersReducedMotion()) {
      setDisplayedText(message);
      setIsTyping(false);
      return;
    }

    setDisplayedText("");
    setIsTyping(true);

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayedText(message.slice(0, index));

      if (index >= message.length) {
        window.clearInterval(timer);
        setIsTyping(false);
      }
    }, CHAR_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [message, messageIndex]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "status-bubble pointer-events-none absolute z-10",
        "w-max max-w-[min(17rem,calc(100vw-2.5rem))] sm:max-w-[min(20rem,calc(100vw-3rem))]",
        visible && "status-bubble--visible",
        className,
      )}
    >
      <div className="relative rounded-2xl border border-border bg-surface-elevated px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.1)] sm:px-4 sm:py-2.5">
        <div className="flex items-center gap-2 text-left text-xs font-medium leading-snug text-ink sm:text-sm sm:leading-relaxed">
          <span
            aria-hidden
            className="relative mt-1 flex h-2 w-2 shrink-0"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>

          <span className="min-w-0 flex-1 break-words">
            {displayedText}
            {isTyping && (
              <span
                aria-hidden
                className="status-bubble-caret ml-px inline-block h-[1em] w-0.5 align-text-bottom"
              />
            )}
          </span>
        </div>

        <span
          aria-hidden
          className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-border bg-surface-elevated"
        />
      </div>
    </div>
  );
}
