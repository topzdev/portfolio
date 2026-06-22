"use client";

import { useMediaQuery as useMediaQueryBase } from "usehooks-ts";

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

/** Tailwind v4 default breakpoints */
export const mediaQueries = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  laptop: "(min-width: 1024px) and (max-width: 1279px)",
  reducedMotion: "(prefers-reduced-motion: reduce)",
} as const;

const ssrSafeDefaults: UseMediaQueryOptions = {
  initializeWithValue: false,
  defaultValue: false,
};

/**
 * SSR-safe media query hook for Next.js client components.
 * Defaults to `false` until the client hydrates.
 */
export function useMediaQuery(
  query: string,
  options?: UseMediaQueryOptions,
): boolean {
  return useMediaQueryBase(query, { ...ssrSafeDefaults, ...options });
}

export function useIsMobile(): boolean {
  return useMediaQuery(mediaQueries.mobile);
}

export function useIsDesktop(): boolean {
  return useMediaQuery(mediaQueries.lg);
}
