"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSkillsColumnScroll } from "@/lib/animations/useSkillsColumnScroll";
import { cloudinaryUrl } from "@/lib/data/profile";
import {
  getSkillsColumns,
  type Skill,
  skillsSection,
} from "@/lib/data/skills";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import {
  mediaQueries,
  useIsMobile,
  useMediaQuery,
} from "@/lib/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const BACKDROP_ICONS = [
  "/icons/icon_react_xnelsh",
  "/icons/icon_vue_jhkfs6",
  "/icons/icon_nodejs_rii0or",
  "/icons/icon_typescript_fld2yp",
  "/icons/docker_vnzxw4",
  "/icons/icon_laravel_xtmrqn",
  "/icons/icon_figma_qijjss",
];

const CARD_SIZE =
  "h-[130px] w-[96px] shrink-0 flex-col items-center justify-center rounded-lg p-2 text-center";

const CARD_SHADOW =
  "shadow-[0_4px_40px_rgba(237,237,237,1)] transition-shadow hover:shadow-[0_6px_32px_rgba(237,237,237,1)]";

function BlankSkillCard() {
  return (
    <div
      aria-hidden
      className={cn(
        "flex",
        CARD_SIZE,
        CARD_SHADOW,
        "border border-white/60 bg-white/70 blur-[2px]",
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2 h-10 w-10 rounded-full bg-[#f3f4fb]" />
        <div className="h-2.5 w-12 rounded-full bg-[#f3f4fb]" />
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const isGradient = Boolean(skill.cardStyle);

  return (
    <div
      className={cn(
        "flex",
        CARD_SIZE,
        CARD_SHADOW,
        isGradient
          ? "border-transparent text-white"
          : "border border-white/80 bg-white",
      )}
      style={
        isGradient
          ? {
            background:
              "linear-gradient(180deg, #4A90E2 0%, #50E3C2 100%)",
          }
          : undefined
      }
    >
      <Image
        src={cloudinaryUrl(skill.iconPath)}
        alt=""
        width={skill.iconWidth}
        height={skill.iconHeight}
        className="mb-2 h-10 w-10 object-contain"
        unoptimized
        aria-hidden
      />
      <p className="text-[11px] font-semibold leading-snug text-inherit">
        {skill.name}
      </p>
      {skill.subtitle && (
        <p className="mt-0.5 text-[8px] leading-tight opacity-75">
          {skill.subtitle}
        </p>
      )}
    </div>
  );
}

function SkillCardLink({ skill }: { skill: Skill }) {
  const card = <SkillCard skill={skill} />;

  if (!skill.url) {
    return card;
  }

  return (
    <Link
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`Learn more about ${skill.name}`}
    >
      {card}
    </Link>
  );
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useSkillsColumnScroll(sectionRef, columnsRef);

  const hasMounted = useHasMounted();
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery(mediaQueries.tablet);
  const isLaptop = useMediaQuery(mediaQueries.laptop);

  const columns = useMemo(() => {
    if (!hasMounted) return getSkillsColumns(3);

    if (isMobile) return getSkillsColumns(7);
    if (isTablet) return getSkillsColumns(6);
    if (isLaptop) return getSkillsColumns(4);
    return getSkillsColumns(3);
  }, [hasMounted, isMobile, isTablet, isLaptop]);

  const maxColumnLength = useMemo(
    () => Math.max(...columns.map((column) => column.length), 0),
    [columns],
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3f4fb]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {BACKDROP_ICONS.map((icon, index) => (
          <Image
            key={icon}
            src={cloudinaryUrl(icon)}
            alt=""
            width={120}
            height={120}
            className="absolute opacity-[0.07] blur-2xl"
            style={{
              left: `${8 + index * 13}%`,
              top: `${12 + (index % 3) * 28}%`,
            }}
          />
        ))}
      </div>

      <div className="container-narrow relative pt-30">
        <SectionHeading
          className="px-5 xl:px-0"
          overline={skillsSection.overline}
          title={skillsSection.title}
        />

        <div className="relative -my-60  z-10 xl:-mx-12">
          <div
            ref={columnsRef}
            className="flex w-max min-w-full items-start justify-between gap-6 px-5 pb-6 pt-4 sm:gap-8 sm:px-8 md:gap-10 lg:mx-auto lg:gap-12 lg:px-12"
          >
            {columns.map((column, columnIndex) => {
              const isOffsetColumn = columnIndex % 2 === 0;

              return (
                <div
                  key={columnIndex}
                  data-skills-column
                  data-skills-offset={isOffsetColumn ? "true" : "false"}
                  className={cn("flex shrink-0 flex-col gap-6", isOffsetColumn ? "-mt-25" : "")}
                >
                  <BlankSkillCard />
                  <BlankSkillCard />
                  {column.map((skill) => (
                    <SkillCardLink key={skill.name} skill={skill} />
                  ))}
                  {Array.from({
                    length: maxColumnLength - column.length,
                  }).map((_, padIndex) => (
                    <BlankSkillCard key={`pad-${columnIndex}-${padIndex}`} />
                  ))}

                  <BlankSkillCard />
                  <BlankSkillCard />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
