"use client";

import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSectionReveal } from "@/lib/animations/useSectionReveal";
import { cloudinaryUrl } from "@/lib/data/profile";
import { testimonials, testimonialsSection } from "@/lib/data/socials";

export function TestimonialsSection() {
  const cardRef = useRef<HTMLElement>(null);
  useSectionReveal(cardRef);

  const testimonial = testimonials[0];

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-primary/10 via-surface to-surface-elevated"
    >
      <div className="container-narrow">
        <SectionHeading
          overline={testimonialsSection.overline}
          title={testimonialsSection.title}
          centered
          className="mx-auto"
        />

        <figure
          ref={cardRef}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-elevated p-8 shadow-sm sm:p-10"
        >
          <blockquote className="text-xl leading-relaxed text-ink sm:text-2xl">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={cloudinaryUrl(testimonial.imagePath)}
              alt={testimonial.name}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-ink">{testimonial.name}</p>
              <p className="text-sm text-ink-muted">{testimonial.position}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
