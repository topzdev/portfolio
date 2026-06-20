"use client";

import { useEffect, useState } from "react";
import { cn, scrollToSection } from "@/lib/utils";

type NavTheme = "light" | "dark";

const navItems = [
  { id: "about", label: "About", theme: "light" as NavTheme },
  { id: "skills", label: "Skills", theme: "light" as NavTheme },
  { id: "projects", label: "Projects", theme: "light" as NavTheme },
  // { id: "experience", label: "Experience", theme: "light" as NavTheme },
  { id: "testimonials", label: "Testimonials", theme: "light" as NavTheme },
  { id: "contact", label: "Contact", theme: "light" as NavTheme },
] as const;

const sectionIds = ["hero", ...navItems.map((item) => item.id), "footer"] as const;

/** Viewport line used to decide which section is active (33% from top). */
const SCROLL_MARKER_RATIO = 0.33;

function getActiveSectionId(): string {
  const marker = window.innerHeight * SCROLL_MARKER_RATIO;

  for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
    const id = sectionIds[index];
    const element = document.getElementById(id);
    if (!element) continue;

    const { top, bottom } = element.getBoundingClientRect();
    if (top <= marker && bottom > marker) {
      return id;
    }
  }

  let fallback: (typeof sectionIds)[number] = sectionIds[0];
  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (!element) continue;
    if (element.getBoundingClientRect().top <= marker) {
      fallback = id;
    }
  }

  return fallback;
}

const themeStyles: Record<
  NavTheme,
  { idle: string; active: string; indicator: string; menuButton: string; panel: string }
> = {
  light: {
    idle: "text-ink-subtle hover:text-ink",
    active: "font-semibold text-primary",
    indicator: "bg-primary",
    menuButton:
      "border-border/80 bg-surface-elevated/90 text-ink shadow-sm",
    panel: "border-border/80 bg-surface-elevated/95",
  },
  dark: {
    idle: "text-white/55 hover:text-white",
    active: "font-semibold text-white",
    indicator: "bg-white",
    menuButton:
      "border-white/15 bg-footer/90 text-white shadow-sm",
    panel: "border-white/10 bg-footer/95",
  },
};

function resolveTheme(activeId: string): NavTheme {
  if (activeId === "footer") return "dark";
  const item = navItems.find((entry) => entry.id === activeId);
  return item?.theme ?? "light";
}

export function Navigation() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = resolveTheme(activeId);
  const styles = themeStyles[theme];

  useEffect(() => {
    let frame = 0;

    const updateActive = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActiveId(getActiveSectionId());
      });
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  const linkClass = (id: string) =>
    cn(
      "rounded-full px-3 py-1.5 text-left text-sm transition-colors duration-300 lg:px-0 lg:py-0 lg:text-right",
      activeId === id ? styles.active : styles.idle,
    );

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <nav
        aria-label="Primary"
        className="fixed right-4 top-4 z-50 lg:right-8 lg:top-1/2 lg:-translate-y-1/2"
      >
        <button
          type="button"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
            styles.menuButton,
          )}
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="side-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            {mobileOpen ? (
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5.5h12M3 9h12M3 12.5h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <div
          id="side-nav-panel"
          className={cn(
            "absolute right-0 top-[calc(100%+0.75rem)] min-w-[11rem] rounded-2xl border p-3 shadow-lg transition-all duration-300 lg:static lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none",
            styles.panel,
            mobileOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100",
          )}
        >
          <ul className="flex flex-col gap-1 lg:items-end lg:gap-2">
            <li className="lg:hidden">
              <button
                type="button"
                onClick={() => handleNavClick("hero")}
                className={linkClass("hero")}
              >
                Home
              </button>
            </li>
            {navItems.map((item) => (
              <li key={item.id} className="relative lg:flex lg:items-center lg:justify-end lg:gap-3">
                <span
                  aria-hidden
                  className={cn(
                    "absolute -left-2 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full transition-opacity duration-300 lg:block",
                    styles.indicator,
                    activeId === item.id ? "opacity-100" : "opacity-0",
                  )}
                />
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={linkClass(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
