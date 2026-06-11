"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { profile } from "@/lib/data/profile";
import { cn, scrollToSection } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container-narrow relative flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="text-sm font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
          aria-label="Scroll to top"
        >
          {profile.alias}
        </button>

        <Navigation />
      </div>
    </header>
  );
}
