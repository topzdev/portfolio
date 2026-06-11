# Old Portfolio Audit

Audit of the existing Nuxt 2 portfolio at `topz.dev`. Captured for reference before a clean rebuild on Next.js.

## Current Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Nuxt 2.15.8 (Vue 2) |
| Language | JavaScript (no TypeScript) |
| Styling | SCSS + Materialize CSS grid |
| Animation | GSAP 3.2.6 + ScrollMagic 2.0.7 (CDN) |
| Smooth scroll | vue-scrollto |
| Images | @nuxt/image with Cloudinary provider |
| HTTP | Axios |
| State | Vuex (`store/frontend.js`) — proposal snackbar only |
| PWA | @nuxtjs/pwa |
| Build target | Static (`nuxt generate`) |
| Deployment | Vercel (`vercel.json` → `@nuxtjs/vercel-builder`) |
| Forms | Netlify Forms (`data-netlify="true"` on proposal form) |

## Current Folder Structure

```
portfolio/
├── assets/
│   ├── css/materialize-grid.css
│   └── scss/               # Partial SCSS architecture (some imports missing)
├── components/
│   ├── buttons/            # Primary, Secondary, Tertiary, Icon
│   ├── cards/              # Project, Stack, Testimony
│   ├── footer/
│   ├── form/                 # ProposalForm (contact)
│   ├── header/               # Hero
│   ├── icons/                # SVG icon components (social, etc.)
│   ├── input/
│   ├── list/                 # Project, Stack, Testimony, Footer lists
│   ├── misc/
│   ├── sections/             # Intro, Stacks, Projects, Testimony, Proposal
│   ├── snackbars/
│   └── typography/
├── configs/index.js          # Site config, Cloudinary refs, SEO
├── layouts/default.vue
├── pages/index.vue           # Single-page layout
├── plugins/
│   ├── global-components.js
│   └── scrollmagic.js        # Unused vue-scrollmagic plugin
├── static/                   # Favicons, manifest, logo (most assets on Cloudinary)
├── store/frontend.js
├── utils/splitText.js        # Custom line-splitting for intro animation
├── nuxt.config.js
└── vercel.json
```

## Main Sections (Page Order)

1. **Header / Hero** — animated greeting, rotating job titles, portrait, "Hire Me" CTA
2. **Introduction** (`#intro`) — about copy, resume download
3. **Stacks** (`#stacks`) — technology grid with scroll animation
4. **Projects** (`#projects`) — featured work, GitHub link
5. **Testimony** (`#testimony`) — client testimonial
6. **Proposal / Contact** (`#hireme`) — contact form
7. **Footer** (`#footer`) — motivational quote, contacts, social links, copyright

There is **no dedicated navigation bar**. The only in-page navigation is the hero "Hire Me" button scrolling to `#hireme` via vue-scrollto (2000ms duration).

## Existing Dependencies

**Runtime:** axios, gsap, nuxt, sass, vue-scrollto

**Dev:** @nuxt/image, @nuxtjs/pwa, nuxt-gsap-module, sass-loader

**CDN (in `nuxt.config.js` head):** ScrollMagic core + animation.gsap plugin

## Important Implementation Details

### Content location
- Most content is **hardcoded inside Vue components**, not centralized data files.
- Projects: `components/list/ProjectList.vue`
- Skills/stacks: `components/list/StacksList.vue`
- Testimonials: `components/list/TestimonyList.vue`
- Contact/social: `components/footer/MainFooter.vue`
- Site metadata: `configs/index.js`

### Images
- Almost all imagery is served from **Cloudinary** (`res.cloudinary.com/topzdev/image/upload/portfolio`).
- `@nuxt/image` presets: `stack`, `project_image` (webp), `project_logo`, `testimony_profile`.
- Hero portrait, project screenshots, stack icons, and UI decorations are Cloudinary paths.

### Forms
- Proposal form posts to `/` via Axios with `multipart/form-data` and Netlify form attributes.
- Success/error feedback via Vuex snackbar.

### SEO / Meta
- Full OG and Twitter card tags in `nuxt.config.js`.
- `og:image` points to `/seo-cover.jpg` (not in repo — likely deployed asset or missing).
- **Bug:** `twitter:site` and `twitter:creator` reference `config.twittterUsername` (typo) instead of `config.website.twitterUsername`, so Twitter meta may be empty.

### SCSS issues
- `assets/scss/main.scss` imports several files that **do not exist** in the repo (`layout/navbar`, `layout/sidebar`, `layout/grid`, `components/badges`, etc.). Build may depend on stubs elsewhere or fail on fresh clone.

### ScrollMagic + GSAP pattern
- Each animated component creates its own `ScrollMagic.Controller()` and scene in `mounted()`.
- No shared animation context, no cleanup on destroy, no `prefers-reduced-motion` handling.

## What Should Be Kept

- **Personal brand content:** name, roles, about copy, contact info, social URLs
- **Project list** with live demo links and Cloudinary asset references
- **Skills/stacks inventory** (update for current tooling)
- **Testimonial** from Miko Suarez
- **Section flow:** hero → about → skills → projects → social proof → contact → footer
- **Animation intent:** hero text cycling, scroll-reveal sections, staggered stacks, project card entrance
- **Visual identity anchors:** primary blue `#0993e5`, Poppins + Open Sans, rounded section containers
- **SEO fields** from `configs/index.js` (with fixes)
- **Cloudinary image URLs** as reference for asset migration

## What Should Be Improved

- Centralize all content in typed data files (`lib/data/*`)
- Replace ScrollMagic with GSAP ScrollTrigger (or Framer Motion) — single controller, proper cleanup
- Add `prefers-reduced-motion` support
- Fix Twitter meta typo; verify OG image exists
- Add proper navigation (sticky header or section links) for one-page scroll
- Add project descriptions and tech stacks (currently missing)
- Add work experience section (currently absent — only education in intro)
- Update resume (file is `christian-lugod-resume-2022.pdf`, dated 2022)
- Replace Netlify form with a modern solution (Resend, Formspree, or Next.js API route)
- Remove dead SCSS imports and unused plugins (`scrollmagic.js`, vue-scrollmagic)
- Consolidate animation logic — avoid per-component ScrollMagic controllers
- Use Next.js Image + static/Cloudinary instead of @nuxt/image
- Modernize role focus to **Fullstack Developer** (user's stated rebuild direction)

## What Should Not Be Carried Over

- Nuxt 2 / Vue 2 component architecture
- Hardcoded content scattered across `.vue` files
- ScrollMagic CDN dependency and per-component controller pattern
- Materialize CSS grid (replace with Tailwind)
- Custom `splitText.js` DOM manipulation (use GSAP SplitText plugin or CSS)
- Vuex for a single snackbar
- Global component registration via `plugins/global-components.js`
- Blank placeholder stack cards (decorative blur cards in stack rows)
- Heavy decorative pseudo-element blobs (can be simplified for Apple-like minimalism)
- `jQuery` in skills list (outdated emphasis)
- Misspelled project name "Shareitineray" in UI (verify correct branding)
- Phone number in footer without international format
