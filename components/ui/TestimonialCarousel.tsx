"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations/gsap";
import { cloudinaryUrl } from "@/lib/data/profile";
import type { Testimonial } from "@/lib/data/socials";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 10_000;
const ARC_RADIUS = 460;
const ARC_ANGLE_STEP = 52;

type TestimonialCarouselProps = {
  items: Testimonial[];
};

type ArcTransform = {
  x: number;
  y: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

function getCircularOffset(
  itemIndex: number,
  activeIndex: number,
  total: number,
): number {
  let offset = itemIndex - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

/** Positions cards on a horizontal circular arc (semi-wheel in XZ space). */
function arcTransform(offset: number): ArcTransform {
  const clamped = Math.max(-3, Math.min(3, offset));
  const angleRad = (clamped * ARC_ANGLE_STEP * Math.PI) / 180;
  const distance = Math.abs(clamped);

  const x = ARC_RADIUS * Math.sin(angleRad);
  const z = ARC_RADIUS * (Math.cos(angleRad) - 1);

  return {
    x,
    y: 0,
    z,
    rotateY: -clamped * ARC_ANGLE_STEP,
    scale: distance === 0 ? 1 : Math.max(0.68, 1 - distance * 0.15),
    opacity: distance <= 2 ? Math.max(0.12, 1 - distance * 0.32) : 0,
    zIndex: 40 - Math.round(distance * 10),
  };
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useRef(false);

  const animateToIndex = useCallback(
    (index: number) => {
      registerGsap();

      items.forEach((_, itemIndex) => {
        const card = cardRefs.current[itemIndex];
        if (!card) return;

        const offset = getCircularOffset(itemIndex, index, items.length);
        const transform = arcTransform(offset);

        const props = {
          x: transform.x,
          y: transform.y,
          z: transform.z,
          rotateY: transform.rotateY,
          scale: transform.scale,
          opacity: transform.opacity,
          zIndex: transform.zIndex,
        };

        if (reducedMotion.current) {
          gsap.set(card, props);
          return;
        }

        gsap.to(card, {
          ...props,
          duration: 1,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });
    },
    [items],
  );

  useLayoutEffect(() => {
    reducedMotion.current = prefersReducedMotion();
    animateToIndex(activeIndex);
  }, [activeIndex, animateToIndex]);

  useEffect(() => {
    if (isPaused || items.length <= 1 || prefersReducedMotion()) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  const goTo = (index: number) => setActiveIndex(index);
  const goNext = () => setActiveIndex((current) => (current + 1) % items.length);
  const goPrev = () =>
    setActiveIndex((current) => (current - 1 + items.length) % items.length);

  if (items.length === 0) return null;

  return (
    <div
      className="mx-auto w-full max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        className="relative mx-auto flex h-[min(440px,78vw)] w-full max-w-5xl items-center justify-center"
        aria-live="polite"
        aria-roledescription="carousel"
        aria-label="Testimonials"
      >
        <div
          className="relative h-full w-full"
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {/* Circular arc pivot — all cards orbit this center point */}
          <div
            className="absolute left-1/2 top-0 sm:top-[20%] h-0 w-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {items.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="absolute left-0 top-0 w-[min(calc(100vw-3rem),28rem)] sm:w-[45rem]"
                style={{
                  transform: "translate(-50%, 0)",
                  transformStyle: "preserve-3d",
                  zIndex: 10 * index,
                }}
                aria-hidden={index !== activeIndex}
              >
                <figure className="rounded-2xl border border-border bg-surface-elevated p-7 shadow-[0_24px_64px_rgba(0,0,0,0.1)] sm:p-9">
                  <blockquote className="text-lg leading-relaxed text-ink sm:text-xl md:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-4 sm:mt-8">
                    <Image
                      src={cloudinaryUrl(testimonial.imagePath)}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                    />
                    <div>
                      <p className="font-semibold text-ink sm:text-xl">{testimonial.name}</p>
                      <p className="text-ink-muted text-sm sm:text-base">{testimonial.position}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary/40 hover:text-primary sm:flex"
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div
          className="flex items-center gap-2.5"
          role="tablist"
          aria-label="Testimonial pagination"
        >
          {items.map((testimonial, index) => (
            <button
              key={`dot-${testimonial.name}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to testimonial ${index + 1}: ${testimonial.name}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-border hover:bg-ink-subtle",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary/40 hover:text-primary sm:flex"
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>
    </div>
  );
}
