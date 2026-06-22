"use client";

import Image from "next/image";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { StatusBubble } from "@/components/ui/StatusBubble";
import { useHeroIntro, splitJobTitle } from "@/lib/animations/useHeroIntro";
import { heroImageUrl, profile } from "@/lib/data/profile";
import { contactSection } from "@/lib/data/socials";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useHeroIntro({
    section: sectionRef,
    im: imRef,
    name: nameRef,
    titleContainer: titleContainerRef,
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-screen items-center section-padding"
    >
      <div className="container-narrow w-full">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="relative mb-10 inline-block sm:mb-12">
            <StatusBubble
              messages={profile.statusBubble.messages}
              intervalMs={profile.statusBubble.intervalMs}
              initialDelayMs={profile.statusBubble.initialDelayMs}
              className="bottom-full left-1/2 mb-2 -translate-x-1/2 sm:mb-3"
            />
            <Image
              src={heroImageUrl()}
              alt={`${profile.name} avatar`}
              width={150}
              height={150}
              priority
              className="mx-auto block"
            />
          </div>

          <h1 className="text-[1.75rem] font-bold leading-tight text-ink sm:text-4xl md:text-[2.5rem]">
            <span className="inline-block">
              Hello,{" "}
              <span ref={imRef} className="inline" />
              <span ref={nameRef} className="text-primary-light" />
            </span>
          </h1>

          <p className="sr-only">
            {profile.title} — {profile.name}
          </p>

          <div
            ref={titleContainerRef}
            className="relative mt-6 h-[7.5rem] w-full sm:h-[9rem] md:mt-8 md:h-[11rem] lg:h-[12rem]"
            aria-hidden
          >
            {profile.rotatingTitles.map((title) => {
              const [lineOne, lineTwo] = splitJobTitle(title);

              return (
                <div
                  key={title}
                  data-title-job
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
                >
                  <span className="block text-5xl font-bold leading-none tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
                    {lineOne}
                  </span>
                  {lineTwo && (
                    <span className="mt-1 block text-5xl font-bold leading-none tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
                      {lineTwo}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 md:mt-12">
            <MagneticButton
              onClick={() => scrollToSection(contactSection.id)}
              className="[&_button]:px-14 [&_button]:py-4 [&_button]:text-base [&_button]:font-semibold [&_button]:uppercase [&_button]:tracking-[0.2em] [&_button]:shadow-[0_0_30px_rgba(9,147,229,0.35)]"
            >
              {contactSection.hireMeCta}
            </MagneticButton>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] bg-gradient-to-b from-primary/[0.04] to-transparent"
      />
    </section>
  );
}
