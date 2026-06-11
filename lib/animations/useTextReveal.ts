"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "./gsap";

type TextRevealOptions = {
  selector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

export function useTextReveal(
  ref: RefObject<HTMLElement | null>,
  options: TextRevealOptions = {},
): void {
  const {
    selector = "[data-reveal-word]",
    y = 12,
    duration = 0.45,
    stagger = 0.03,
    start = "top 85%",
  } = options;

  useGSAP(
    () => {
      registerGsap();
      const container = ref.current;
      if (!container) return;

      const words = container.querySelectorAll(selector);
      if (words.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(words, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(words, {
        opacity: 0,
        y,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start,
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [ref, selector] },
  );
}
