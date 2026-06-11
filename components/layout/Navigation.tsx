"use client";

import { useEffect, useState } from "react";
import { cn, scrollToSection } from "@/lib/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;

export function Navigation() {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <nav aria-label="Primary">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          {mobileOpen ? (
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 6h14M3 10h14M3 14h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      <ul className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                activeId === item.id
                  ? "bg-ink text-white"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full border-b border-border bg-surface-elevated/95 p-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "w-full rounded-xl px-4 py-3 text-left text-sm transition-colors",
                    activeId === item.id
                      ? "bg-ink text-white"
                      : "text-ink-muted hover:bg-surface hover:text-ink",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
