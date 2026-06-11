"use client";

import { useRef } from "react";
import { useTextReveal } from "@/lib/animations/useTextReveal";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  useTextReveal(ref);

  const words = text.split(/\s+/);

  return (
    <p ref={ref} className={cn(className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <span data-reveal-word className="inline-block">
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </p>
  );
}
