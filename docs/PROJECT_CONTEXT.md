# Project Context

Planning and implementation reference for the portfolio rebuild.

## Purpose of the Rebuild

Replace the aging Nuxt 2 / Vue 2 portfolio with a modern, maintainable codebase that:

- Preserves personal brand, project showcase, and contact pathways
- Improves performance, accessibility, and mobile experience
- Adopts a clean, minimal, Apple-inspired visual language
- Centralizes content in editable data files instead of scattered component strings
- Uses contemporary animation patterns with reduced-motion support

**Current phase:** Next.js rebuild implemented on branch `2026`. Legacy Nuxt source was removed from the working tree; audit preserved in `docs/OLD_PORTFOLIO_AUDIT.md`.

## New Stack (Implemented)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Package manager | Bun |
| Animation | GSAP 3 + ScrollTrigger via `@gsap/react` |
| Smooth scroll | Native `scroll-behavior: smooth` + `scrollIntoView` |
| Images | `next/image` + Cloudinary remote patterns |
| Deployment | Vercel (target: topz.dev) |

## Implementation Structure

```
app/
  layout.tsx          # Metadata, Inter font, skip link
  page.tsx            # One-page section composition
  globals.css         # Tailwind theme tokens, reduced motion
components/
  layout/             # Header, Footer, Navigation
  sections/           # Hero, About, Skills, Projects, Experience, Testimonials, Contact
  ui/                 # Button, SectionHeading, ProjectCard, AnimatedText, MagneticButton
lib/
  animations/         # gsap.ts, useSectionReveal, useTextReveal, useStaggerReveal
  data/               # profile, projects, skills, experience, socials
  utils.ts            # cn, scrollToSection
public/               # resume, OG image, favicon, logo
```

## Role / Title

**Fullstack Developer** — static hero headline (no rotating title carousel).

## Design Direction

- **Aesthetic:** Clean, minimal, Apple-like
- **Typography:** Inter via `next/font`
- **Color:** `#f5f5f7` surface, `#1d1d1f` ink, `#0993e5` primary accent
- **Layout:** `max-w-6xl` container, generous section padding
- **Navigation:** Sticky glass header with intersection-observer active states

## Website Sections (Order)

1. Hero (`#hero`)
2. About (`#about`)
3. Skills (`#skills`)
4. Projects (`#projects`) — all 7 projects shown
5. Experience (`#experience`) — new section
6. Testimonials (`#testimonials`)
7. Contact (`#contact`)
8. Footer (`#footer`)

## Animation Direction

GSAP ScrollTrigger via reusable hooks. See `docs/ANIMATION_NOTES.md` for section mapping.

## Data Files

All section content sourced from `lib/data/*`. Placeholders documented in `docs/TODO.md`.

## Contact Form

Client-side `mailto:` fallback in `ContactSection`. Replace with API route or Formspree before production if automated delivery is required.

## Environment / Deployment Notes

| Item | Value |
|------|-------|
| Production URL | https://topz.dev |
| Cloudinary cloud | `topzdev` |
| Build | `bun run build` |
| Dev | `bun dev` |
