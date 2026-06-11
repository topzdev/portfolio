"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "./gsap";

/**
 * Odd columns (high) animate from above; even columns (low, with blank cards)
 * animate from below. All settle to y: 0 — zigzag comes from blank card offsets.
 */
const ODD_START_Y = -280;
const EVEN_START_Y = 280;

export function useSkillsColumnScroll(
  sectionRef: RefObject<HTMLElement | null>,
  containerRef: RefObject<HTMLElement | null>,
): void {
  useGSAP(
    () => {
      registerGsap();
      const section = sectionRef.current;
      const container = containerRef.current;
      if (!section || !container) return;

      const columns = Array.from(
        container.querySelectorAll<HTMLElement>("[data-skills-column]"),
      );

      if (columns.length === 0) return;

      columns.forEach((column, index) => {
        const startY = index % 2 === 0 ? ODD_START_Y : EVEN_START_Y;
        gsap.set(column, { y: startY, force3D: true });
      });

      if (prefersReducedMotion()) {
        gsap.set(columns, { y: 0 });
        return;
      }

      gsap.to(columns, {
        y: 0,
        duration: 1.8,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [] },
  );
}
