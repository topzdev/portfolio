"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "./gsap";

type StaggerRevealOptions = {
  selector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
};

export function useStaggerReveal(
  ref: RefObject<HTMLElement | null>,
  options: StaggerRevealOptions = {},
): void {
  const {
    selector = "[data-reveal-item]",
    y = 24,
    duration = 0.55,
    stagger = 0.08,
    start = "top 85%",
  } = options;

  useGSAP(
    () => {
      registerGsap();
      const container = ref.current;
      if (!container) return;

      const items = container.querySelectorAll(selector);
      if (items.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(items, { opacity: 0, y });

      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [ref, selector] },
  );
}
