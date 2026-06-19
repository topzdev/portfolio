"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "./gsap";

export type ProjectCardColumn = "left" | "right";

const LEFT_FROM = { x: "-30%", rotate: -12, opacity: 0 };
const RIGHT_FROM = { x: "30%", rotate: 12, opacity: 0 };
const SETTLE = { x: 0, rotate: 0, opacity: 1 };

export function useProjectCardReveal(
  cardRef: RefObject<HTMLElement | null>,
  column: ProjectCardColumn,
): void {
  useGSAP(
    () => {
      registerGsap();
      const card = cardRef.current;
      if (!card) return;

      const from = column === "left" ? LEFT_FROM : RIGHT_FROM;

      if (prefersReducedMotion()) {
        gsap.set(card, SETTLE);
        return;
      }

      gsap.set(card, { ...from, force3D: true });

      gsap.to(card, {
        ...SETTLE,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    },
    { scope: cardRef, dependencies: [column] },
  );
}
