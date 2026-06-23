"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/animations/gsap";
import { cloudinaryUrl } from "@/lib/data/profile";
import type { Testimonial } from "@/lib/data/socials";
import { cn, getInitials } from "@/lib/utils";

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

function arcTransform(offset: number): ArcTransform {
  const clamped = Math.max(-3, Math.min(3, offset));
  const angleRad = (clamped * ARC_ANGLE_STEP * Math.PI) / 180;
  const distance = Math.abs(clamped);

  return {
    x: ARC_RADIUS * Math.sin(angleRad),
    y: 0,
    z: ARC_RADIUS * (Math.cos(angleRad) - 1),
    rotateY: -clamped * ARC_ANGLE_STEP,
    scale: distance === 0 ? 1 : Math.max(0.68, 1 - distance * 0.15),
    opacity: distance <= 2 ? Math.max(0.12, 1 - distance * 0.32) : 0,
    zIndex: 40 - Math.round(distance * 10),
  };
}

function getCardLayer(
  itemIndex: number,
  activeIndex: number,
  total: number,
): ArcTransform {
  return arcTransform(getCircularOffset(itemIndex, activeIndex, total));
}

function setStackedState(cards: (HTMLDivElement | null)[], hidden = true) {
  cards.forEach((card) => {
    if (!card) return;
    gsap.set(card, {
      xPercent: -50,
      x: 0,
      y: 0,
      z: 0,
      rotateY: 0,
      scale: 0.9,
      opacity: hidden ? 0 : 0.75,
      force3D: true,
    });
  });
}

function TestimonialAvatar({
  name,
  imagePath,
}: {
  name: string;
  imagePath: string | null;
}) {
  const sizeClasses = "h-12 w-12 shrink-0 rounded-full sm:h-14 sm:w-14";

  if (!imagePath) {
    return (
      <div
        className={cn(
          sizeClasses,
          "flex items-center justify-center bg-primary/10 text-sm font-semibold text-primary sm:text-base",
        )}
        aria-hidden
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <CloudinaryImage
      src={cloudinaryUrl(imagePath)}
      alt={name}
      width={56}
      height={56}
      className={cn(sizeClasses, "object-cover")}
    />
  );
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const reducedMotion = useRef(false);
  const hasIntroPlayed = useRef(false);

  activeIndexRef.current = activeIndex;

  const animateToIndex = useCallback(
    (index: number, immediate = false) => {
      registerGsap();

      items.forEach((_, itemIndex) => {
        const card = cardRefs.current[itemIndex];
        if (!card) return;

        const transform = getCardLayer(itemIndex, index, items.length);

        const transformProps = {
          xPercent: -50,
          x: transform.x,
          y: transform.y,
          z: transform.z,
          rotateY: transform.rotateY,
          scale: transform.scale,
          opacity: transform.opacity,
          force3D: true,
        };

        if (reducedMotion.current || immediate) {
          gsap.set(card, transformProps);
          return;
        }

        gsap.to(card, {
          ...transformProps,
          duration: 1,
          ease: "power3.inOut",
          overwrite: "auto",
        });
      });
    },
    [items],
  );

  const playIntroSpread = useCallback(
    (index: number) => {
      registerGsap();
      setStackedState(cardRefs.current, false);

      let completed = 0;

      items.forEach((_, itemIndex) => {
        const card = cardRefs.current[itemIndex];
        if (!card) return;

        const transform = getCardLayer(itemIndex, index, items.length);
        const offset = Math.abs(getCircularOffset(itemIndex, index, items.length));

        gsap.to(card, {
          xPercent: -50,
          x: transform.x,
          y: transform.y,
          z: transform.z,
          rotateY: transform.rotateY,
          scale: transform.scale,
          opacity: transform.opacity,
          force3D: true,
          duration: 1.15,
          delay: offset * 0.07,
          ease: "power3.out",
          overwrite: "auto",
          onComplete: () => {
            completed += 1;
            if (completed === items.length) {
              setIntroComplete(true);
            }
          },
        });
      });
    },
    [items],
  );

  const runIntro = useCallback(() => {
    if (hasIntroPlayed.current) return;
    hasIntroPlayed.current = true;

    const index = activeIndexRef.current;

    if (reducedMotion.current) {
      animateToIndex(index, true);
      setIntroComplete(true);
      return;
    }

    playIntroSpread(index);
  }, [animateToIndex, playIntroSpread]);

  useLayoutEffect(() => {
    reducedMotion.current = prefersReducedMotion();
    registerGsap();
    setStackedState(cardRefs.current, true);
  }, [items]);

  useLayoutEffect(() => {
    if (!hasIntroPlayed.current) return;
    animateToIndex(activeIndex, reducedMotion.current);
  }, [activeIndex, animateToIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runIntro();
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [runIntro]);

  useEffect(() => {
    if (!introComplete || isPaused || items.length <= 1 || prefersReducedMotion()) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [introComplete, isPaused, items.length]);

  const goTo = (index: number) => setActiveIndex(index);
  const goNext = () => setActiveIndex((current) => (current + 1) % items.length);
  const goPrev = () =>
    setActiveIndex((current) => (current - 1 + items.length) % items.length);

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
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
          <div
            className="absolute left-1/2 top-0 h-0 w-0 sm:top-[20%]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {items.map((testimonial, index) => {
              const layer = getCardLayer(index, activeIndex, items.length);

              return (
                <div
                  key={`${testimonial.name}-${index}`}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="absolute left-0 top-0 w-[min(calc(100vw-3rem),28rem)] sm:w-[45rem]"
                  style={{
                    zIndex: layer.zIndex,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    transform: "translate(-50%, 0)",
                  }}
                  aria-hidden={index !== activeIndex}
                >
                  <figure className="rounded-2xl border border-border bg-surface-elevated p-7 shadow-[0_24px_64px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.35)] sm:p-9">
                    <blockquote className="text-lg leading-relaxed text-ink sm:text-xl md:text-2xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <figcaption className="mt-6 flex items-center gap-4 sm:mt-8">
                      <TestimonialAvatar
                        name={testimonial.name}
                        imagePath={testimonial.imagePath}
                      />
                      <div>
                        <p className="font-semibold text-ink sm:text-xl">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-ink-muted sm:text-base">
                          {testimonial.position}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
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
