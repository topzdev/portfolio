import { scrollToSection } from "@/lib/utils";
import type { WebsiteSectionId } from "@/lib/data/websiteContext";

const VALID_SECTION_IDS = new Set<string>([
  "hero",
  "about",
  "skills",
  "projects",
  "testimonials",
  "contact",
  "footer",
]);

export function isWebsiteSectionId(id: string): id is WebsiteSectionId {
  return VALID_SECTION_IDS.has(id);
}

export function navigateToWebsiteSection(
  sectionId: string,
  options?: {
    pathname?: string;
    closeChat?: () => void;
  },
): void {
  if (!isWebsiteSectionId(sectionId)) return;

  options?.closeChat?.();

  const isHome = !options?.pathname || options.pathname === "/";

  if (isHome) {
    window.requestAnimationFrame(() => scrollToSection(sectionId));
    return;
  }

  window.location.assign(`/#${sectionId}`);
}

/** Parse #section-id or /#section-id into a section id, if valid. */
export function parseSectionHref(href: string): WebsiteSectionId | null {
  const trimmed = href.trim();
  const match = /^(?:\/#|#)([a-z-]+)$/.exec(trimmed);
  if (!match) return null;
  const id = match[1];
  return isWebsiteSectionId(id) ? id : null;
}

export function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href.trim());
}
