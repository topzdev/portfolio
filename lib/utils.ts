export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function scrollToSection(
  id: string,
  options?: { behavior?: ScrollBehavior },
): void {
  const element = document.getElementById(id);
  if (!element) return;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollIntoView({
    behavior: reducedMotion ? "auto" : (options?.behavior ?? "smooth"),
    block: "start",
  });
}
