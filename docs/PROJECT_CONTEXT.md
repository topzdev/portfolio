# Project Context

Planning document for the portfolio rebuild, informed by the old portfolio audit on branch `2026`.

## Purpose of the Rebuild

Replace the aging Nuxt 2 / Vue 2 portfolio with a modern, maintainable codebase that:

- Preserves personal brand, project showcase, and contact pathways
- Improves performance, accessibility, and mobile experience
- Adopts a clean, minimal, Apple-inspired visual language
- Centralizes content in editable data files instead of scattered component strings
- Uses contemporary animation patterns with reduced-motion support

**Current phase:** Content and design extraction only. The old Nuxt implementation remains in place until documentation and data files are reviewed.

## New Stack (Planned)

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | React |
| Styling | Tailwind CSS |
| Package manager | Bun |
| Animation | GSAP 3 + ScrollTrigger via `@gsap/react` |
| Smooth scroll | Native `scroll-behavior: smooth` + `scrollIntoView (Lenis optional later) |
| Deployment | Vercel (existing domain: topz.dev) |

## Role / Title

**Fullstack Developer**

The old portfolio cycled through UI/UX Designer, Backend, Frontend, SEO Specialist, and Fullstack Developer. The rebuild should lead with Fullstack Developer while optionally mentioning design capability in about copy.

## Design Direction

- **Aesthetic:** Clean, minimal, Apple-like
- **Layout:** One-page scrolling portfolio
- **Typography:** Single modern sans-serif (Inter, Geist, or system stack)
- **Color:** Neutral base (white, off-white, near-black text) + one accent (keep `#0993e5` or soften)
- **Imagery:** Contained, no rotated screenshots; generous whitespace
- **Components:** Subtle borders, light shadows, rounded-2xl cards
- **Navigation:** Minimal sticky header with section links and smooth scroll

## Website Type

Single-page scrolling portfolio with anchored sections:

1. Hero
2. About
3. Skills
4. Projects
5. Experience (new — not in old site)
6. Testimonials
7. Contact
8. Footer

## Animation Direction

Preserve the **intent** of the old animations, not the ScrollMagic implementation. See `docs/ANIMATION_NOTES.md` for section-by-section mapping.

**Requirements:**

- `prefers-reduced-motion` support
- Cleanup timelines on unmount
- No ScrollMagic
- No infinite hero title carousel

## Data Structure Recommendation

```
lib/data/
├── profile.ts      # Name, title, bio, location, resume URL, SEO
├── projects.ts     # Title, description, tech, links, images
├── skills.ts       # Skills with icons and categories
├── experience.ts   # Work + education timeline
└── socials.ts      # Contact + social links, footer copy, section headings
```

Starter files have been created from extracted old-portfolio content. Descriptions, tech stacks, and work history need user input.

## Important Decisions from Old Portfolio Audit

1. **Keep section order** broadly the same; add Experience as a new section.
2. **Migrate Cloudinary assets** — most images are not in `static/`; paths are preserved in data files.
3. **Do not port ScrollMagic** — use GSAP ScrollTrigger.
4. **Centralize content** — starter data files in `lib/data/`.
5. **Fix SEO bugs** — Twitter meta typo (`twittterUsername`) in old `nuxt.config.js`.
6. **Replace Netlify form** — evaluate Resend, Formspree, or Next.js API route.
7. **Update skills list** — reflect current stacks (AI, Docker, Shadcn, AdonisJS); de-emphasize jQuery.
8. **Add missing project metadata** — descriptions and tech stacks need user input.
9. **Show all 7 projects** or consciously exclude Brocode/Luzon TSC (hidden in old UI).
10. **Do not delete old code** until documentation is reviewed and rebuild is verified.

## Environment / Deployment Notes

| Item | Value |
|------|-------|
| Production URL | https://topz.dev |
| Old deploy | Vercel with `@nuxtjs/vercel-builder` |
| Cloudinary cloud | `topzdev` |
| Axios baseURL | `https://topz.dev/` (proposal form) |
| Form backend | Netlify Forms (`data-netlify="true"`) |
| Docker | Node 16 Alpine, `npm run generate` + `npm start` |
| `.env` | Not in repo — no env vars required for static content site |

**Rebuild deployment checklist:** See `docs/TODO.md`.
