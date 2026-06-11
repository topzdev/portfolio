# Project Context

Planning document for the portfolio rebuild, informed by the old portfolio audit.

## Purpose of the Rebuild

Replace the aging Nuxt 2 / Vue 2 portfolio with a modern, maintainable codebase that:

- Preserves personal brand, project showcase, and contact pathways
- Improves performance, accessibility, and mobile experience
- Adopts a clean, minimal, Apple-inspired visual language
- Centralizes content in editable data files instead of scattered component strings
- Uses contemporary animation patterns with reduced-motion support

## New Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | React |
| Styling | Tailwind CSS |
| Package manager | Bun |
| Animation (planned) | GSAP + ScrollTrigger or Framer Motion |
| Smooth scroll (optional) | Lenis |
| Deployment | Vercel (existing) |

## Role / Title

**Fullstack Developer**

The old portfolio cycled through UI/UX Designer, Backend, Frontend, SEO Specialist, and Fullstack Developer. The rebuild should lead with Fullstack Developer while optionally mentioning design capability in about copy.

## Design Direction

- **Aesthetic:** Clean, minimal, Apple-like
- **Layout:** One-page scrolling portfolio
- **Typography:** Single modern sans-serif (Inter, Geist, or system stack) — drop dual Google Font setup unless intentional
- **Color:** Neutral base (white, off-white, near-black text) + one accent (consider keeping `#0993e5` or shifting to a subtler blue)
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

Preserve the **intent** of the old animations, not the implementation:

| Old behavior | Rebuild approach |
|--------------|----------------|
| Hero name typewriter | One-time fade/slide reveal; static text for reduced motion |
| Rotating job titles | Single headline: "Fullstack Developer" |
| Hero parallax on scroll | Subtle opacity fade or remove |
| Intro line stagger | Fade-up words or paragraph reveal (shorter duration) |
| Stack cards scroll float | Gentle stagger fade-up; remove blank blur cards |
| Project card rotate-in | Simple fade + translateY |
| Testimony slide-in | Fade-up with stagger |
| Form field reveal | Fade-up on scroll into view |
| Footer link stagger | Optional; keep subtle |
| Pulse CTA button | Subtle hover scale or remove infinite pulse |
| Decorative blob animations | Remove for minimal aesthetic |

**Requirements:**
- `prefers-reduced-motion` support
- Cleanup timelines on unmount
- No ScrollMagic

## Data Structure Recommendation

```
lib/data/
├── profile.ts      # Name, title, bio, location, resume URL, SEO
├── projects.ts     # Title, description, tech, links, images
├── skills.ts       # Grouped skills with icons
├── experience.ts   # Work + education timeline
└── socials.ts      # Contact + social links
```

**Suggested types:**

```typescript
// profile.ts
export type Profile = {
  name: string;
  alias?: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  avatarUrl: string;
  seo: { title: string; description: string; ogImage: string; url: string };
};

// projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  logo: { src: string; width: number; height: number };
  image: { src: string; alt: string };
  featured?: boolean;
};

// skills.ts
export type Skill = {
  name: string;
  iconUrl?: string;
  url?: string;
  category: "frontend" | "backend" | "mobile" | "database" | "design" | "other";
};

// experience.ts
export type Experience = {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

// socials.ts
export type SocialLink = {
  platform: string;
  label: string;
  url: string;
  icon?: string;
};
```

## Important Decisions from Old Portfolio Audit

1. **Keep section order** broadly the same; add Experience as a new section.
2. **Migrate Cloudinary assets** — most images are not in `static/`.
3. **Do not port ScrollMagic** — use ScrollTrigger or Framer `whileInView`.
4. **Centralize content** — starter data files created in `lib/data/`.
5. **Fix SEO bugs** — Twitter meta typo, missing OG image.
6. **Replace Netlify form** — evaluate Resend, Formspree, or API route for Next.js.
7. **Update skills list** — add Bun; de-emphasize jQuery, Bootstrap, Vuetify unless still relevant.
8. **Add missing project metadata** — descriptions and tech stacks need user input.
9. **Verify live demo URLs** — Heroku apps may be offline.
10. **Do not delete old code** until documentation and data extraction are complete (this audit).

## Environment / Deployment Notes

| Item | Value |
|------|-------|
| Production URL | https://topz.dev |
| Old deploy | Vercel with `@nuxtjs/vercel-builder` |
| Cloudinary cloud | `topzdev` |
| Axios baseURL | `https://topz.dev/` (proposal form) |
| Form backend | Netlify Forms (`data-netlify="true"`) |
| `.env` | Not in repo (gitignored) — any secrets were env-based |

**Rebuild deployment checklist:** See `docs/TODO.md`.
