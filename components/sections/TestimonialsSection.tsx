"use client";

import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, testimonialsSection } from "@/lib/data/socials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-surface-elevated"
    >
      <div className="container-narrow">
        <SectionHeading
          overline={testimonialsSection.overline}
          title={testimonialsSection.title}
          centered
          className="mx-auto sm:mb-0"
        />

        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
}
