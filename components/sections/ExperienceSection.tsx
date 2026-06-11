"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useStaggerReveal } from "@/lib/animations/useStaggerReveal";
import { experience, experienceSection } from "@/lib/data/experience";
export function ExperienceSection() {
  const listRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(listRef);

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          overline={experienceSection.overline}
          title={experienceSection.title}
        />

        <div ref={listRef} className="space-y-6">
          {experience.map((item) => {
            const isPlaceholder = item.title.startsWith("[TODO");

            return (
              <article
                key={item.id}
                data-reveal-item
                className="rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink-subtle">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {isPlaceholder ? "Role details coming soon" : item.title}
                    </h3>
                    <p className="mt-1 text-primary">{item.organization}</p>
                  </div>
                  <p className="text-sm text-ink-muted">
                    {item.startDate}
                    {item.endDate ? ` — ${item.endDate}` : ""}
                  </p>
                </div>

                {item.location && (
                  <p className="mt-3 text-sm text-ink-subtle">{item.location}</p>
                )}

                {item.description && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {item.description.startsWith("[TODO")
                      ? "Add role summary and key achievements."
                      : item.description}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
