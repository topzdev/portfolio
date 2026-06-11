"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { prefersReducedMotion } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function MagneticButton({
  href,
  children,
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion() || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      className={cn("inline-block transition-transform duration-200", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <Button href={href} onClick={onClick}>
          {children}
        </Button>
      ) : (
        <Button onClick={onClick}>{children}</Button>
      )}
    </div>
  );
}
