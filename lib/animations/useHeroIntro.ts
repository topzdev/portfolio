"use client";

import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
import { profile } from "@/lib/data/profile";
import { gsap, prefersReducedMotion, registerGsap } from "./gsap";
import { createDeleteText, createTypeText } from "./typeText";

type HeroIntroRefs = {
  section: RefObject<HTMLElement | null>;
  im: RefObject<HTMLSpanElement | null>;
  name: RefObject<HTMLSpanElement | null>;
  titleContainer: RefObject<HTMLDivElement | null>;
};

export function splitJobTitle(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title, ""];
  return [words.slice(0, -1).join(" "), words.at(-1) ?? ""];
}

export function useHeroIntro(
  refs: HeroIntroRefs,
  titles: string[] = profile.rotatingTitles,
): void {
  useGSAP(
    () => {
      registerGsap();
      const { section, im, name, titleContainer } = refs;
      if (!section.current || !im.current || !name.current || !titleContainer.current) {
        return;
      }

      const titleJobs = titleContainer.current.querySelectorAll<HTMLElement>(
        "[data-title-job]",
      );

      if (prefersReducedMotion()) {
        im.current.textContent = "I'm ";
        name.current.textContent = profile.name;
        gsap.set(titleJobs, { autoAlpha: 0, y: 0 });
        if (titleJobs.length > 0) {
          gsap.set(titleJobs[titleJobs.length - 1], { autoAlpha: 1, y: 0 });
        }
        return;
      }

      const ease = "power4.out";

      im.current.textContent = "";
      name.current.textContent = "";

      const nameTimeline = gsap.timeline({ delay: 0.4 });

      nameTimeline
        .add(createTypeText(name.current, "World!", { charDuration: 0.08 }))
        .to({}, { duration: 1.6 })
        .add(createTypeText(im.current, "I'm ", { charDuration: 0.06 }))
        .add(createDeleteText(name.current, { charDuration: 0.035 }))
        .add(createTypeText(name.current, profile.alias, { charDuration: 0.07 }))
        .to({}, { duration: 1.2 })
        .add(createDeleteText(name.current, { charDuration: 0.035 }))
        .add(createTypeText(name.current, profile.name, { charDuration: 0.055 }));

      const hidden = { autoAlpha: 0, y: -48 };
      const show = { autoAlpha: 1, y: 0, duration: 1.1, ease };
      const fadeDown = { autoAlpha: 0, y: 40, duration: 0.5, ease };

      const titleTimeline = gsap.timeline({ delay: 1.8 });

      titleJobs.forEach((job, index) => {
        const isLast = index === titleJobs.length - 1;

        titleTimeline.set(job, hidden).to(job, show);

        if (!isLast) {
          titleTimeline.to(job, fadeDown);
        }
      });
    },
    { scope: refs.section, dependencies: [titles] },
  );
}
