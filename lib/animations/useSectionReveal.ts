"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "./gsap";

type SectionRevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
};

export function useSectionReveal(
  ref: RefObject<HTMLElement | null>,
  options: SectionRevealOptions = {},
): void {
  const { y = 32, duration = 0.7, delay = 0, start = "top 85%" } = options;

  useGSAP(
    () => {
      registerGsap();
      const element = ref.current;
      if (!element) return;

      if (prefersReducedMotion()) {
        gsap.set(element, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(element, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [ref] },
  );
}
