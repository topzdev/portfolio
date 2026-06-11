# Old Portfolio Audit

Audit of the existing Nuxt 2 portfolio at [topz.dev](https://topz.dev). Captured on branch `2026` before a clean rebuild on Next.js.

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
| Container | Docker (Node 16 Alpine, `npm run generate`) |
| Forms | Netlify Forms (`data-netlify="true"` on proposal form) |

## Current Folder Structure

```
portfolio/
├── assets/
│   ├── css/materialize-grid.css
│   ├── files/                  # Resume PDF/DOCX variants (multiple spellings/versions)
│   ├── js/Gradient.js          # Empty placeholder
│   └── scss/                   # Partial SCSS architecture
├── components/
│   ├── buttons/                # Primary, Secondary, Tertiary, Icon
│   ├── cards/                  # Project, Stack, Testimony
│   ├── footer/
│   ├── form/                   # ProposalForm (contact)
│   ├── header/                 # Hero
│   ├── icons/                  # SVG icon components (social, etc.)
│   ├── input/
│   ├── list/                   # Project, Stack, Testimony, Footer lists
│   ├── misc/
│   ├── sections/               # Intro, Stacks, Projects, Testimony, Proposal
│   ├── snackbars/
│   └── typography/
├── configs/index.js            # Site config, Cloudinary refs, SEO
├── layouts/default.vue
├── pages/index.vue             # Single-page layout
├── plugins/
│   ├── global-components.js
│   └── scrollmagic.js          # Registers vue-scrollmagic (unused; ScrollMagic loaded via CDN)
├── static/                     # Favicons, manifest, logo, resume, OG image
├── store/frontend.js
├── utils/splitText.js          # Custom line-splitting for intro animation
├── nuxt.config.js
├── docker-compose.yml
├── Dockerfile
└── vercel.json
```

## Main Sections (Page Order)

1. **Header / Hero** — animated greeting, rotating job titles, memoji avatar, "Hire Me" CTA
2. **Introduction** (`#intro`) — about copy, resume download
3. **Stacks** (`#stacks`) — technology grid with scroll animation
4. **Projects** (`#projects`) — featured work (5 of 7 projects rendered), GitHub link
5. **Testimony** (`#testimony`) — client testimonial
6. **Proposal / Contact** (`#hireme`) — contact form
7. **Footer** (`#footer`) — motivational quote, contacts, social links, copyright

There is **no dedicated navigation bar** (`layout/_navbar.scss` is empty). The only in-page navigation is the hero "Hire Me" button scrolling to `#hireme` via vue-scrollto (2000ms duration).

## Existing Dependencies

**Runtime:** axios ^0.19.2, gsap ^3.2.6, nuxt 2.15.8, sass ^1.55.0, vue-scrollto ^2.18.1

**Dev:** @nuxt/image ^0.7.1, @nuxtjs/pwa, nuxt-gsap-module ^1.7.2, sass-loader ^10.1.1

**CDN (in `nuxt.config.js` head):** ScrollMagic core + animation.gsap plugin

## Important Implementation Details

### Content location

- Most content is **hardcoded inside Vue components**, not centralized data files.
- Projects: `components/list/ProjectList.vue`
- Skills/stacks: `components/list/StacksList.vue`
- Testimonials: `components/list/TestimonyList.vue`
- Contact/social: `components/footer/MainFooter.vue`
- Site metadata: `configs/index.js`

### Projects display quirk

`ProjectList.vue` defines **7 projects** but only renders **5** via `slice(0, 2)` and `slice(2, 5)`. **Brocode** and **Luzon TSC** exist in data but are not shown in the UI.

### Images

- Almost all imagery is served from **Cloudinary** (`res.cloudinary.com/topzdev/image/upload/portfolio`).
- `@nuxt/image` presets: `stack`, `project_image` (webp), `project_logo`, `testimony_profile`.
- Hero uses `/topzdev-memoji` (150×150). A larger portrait `/me_prsc2l` exists in data but is commented out.

### Forms

- Proposal form posts to `/` via Axios with `multipart/form-data` and Netlify form attributes.
- Hidden Netlify form stub in `app.html`.
- Success/error feedback via Vuex snackbar (`store/frontend.js`).

### SEO / Meta

- Full OG and Twitter card tags in `nuxt.config.js`.
- `og:image` points to `/seo-cover.jpg` (present in `static/`).
- **Bug:** `twitter:site` and `twitter:creator` reference `config.twittterUsername` (typo, undefined) instead of `config.website.twitterUsername`, so Twitter meta may be empty at runtime.

### SCSS

- `main.scss` imports layout/component partials; `_navbar.scss` is empty.
- Decorative UI assets are Cloudinary SVG URLs in `_variables.scss`.

### ScrollMagic + GSAP pattern

- Each animated component creates its own `ScrollMagic.Controller()` and scene in `mounted()`.
- No shared animation context, no cleanup on destroy, no `prefers-reduced-motion` handling.

## What Should Be Kept

- **Personal brand content:** name, roles, about copy, contact info, social URLs
- **Project list** with live demo links and Cloudinary asset references
- **Skills/stacks inventory** (including AI/LLM, Docker, Shadcn UI, AdonisJS)
- **Testimonial** from Miko Suarez
- **Section flow:** hero → about → skills → projects → social proof → contact → footer
- **Animation intent:** hero text cycling, scroll-reveal sections, staggered stacks, project card entrance
- **Visual identity anchors:** primary blue `#0993e5`, Poppins + Open Sans, rounded section containers
- **SEO fields** from `configs/index.js` (with Twitter meta fix)
- **Cloudinary image URLs** as reference for asset migration
- **Static assets** in `static/` (favicons, OG cover, resume, logo)

## What Should Be Improved

- Centralize all content in typed data files (`lib/data/*`)
- Replace ScrollMagic with GSAP ScrollTrigger — single controller, proper cleanup
- Add `prefers-reduced-motion` support
- Fix Twitter meta typo; verify all meta tags at deploy time
- Add proper navigation (sticky header or section links) for one-page scroll
- Add project descriptions and tech stacks (currently missing)
- Add work experience section (currently absent — only education in intro)
- Consolidate resume files (many versions/spellings in `assets/files/` and `static/`)
- Replace Netlify form with a modern solution (Resend, Formspree, or Next.js API route)
- Remove unused plugins (`scrollmagic.js`, vue-scrollmagic)
- Consolidate animation logic — avoid per-component ScrollMagic controllers
- Use Next.js Image + static/Cloudinary instead of @nuxt/image
- Modernize role focus to **Fullstack Developer** (stated rebuild direction)
- Render all projects or remove hidden entries (Brocode, Luzon TSC)

## What Should Not Be Carried Over

- Nuxt 2 / Vue 2 component architecture
- Hardcoded content scattered across `.vue` files
- ScrollMagic CDN dependency and per-component controller pattern
- Materialize CSS grid (replace with Tailwind)
- Custom `splitText.js` DOM manipulation (use GSAP SplitText or CSS)
- Vuex for a single snackbar
- Global component registration via `plugins/global-components.js`
- Blank placeholder stack cards (decorative blur cards in stack rows)
- Heavy decorative pseudo-element blobs (can be simplified for Apple-like minimalism)
- `jQuery` in skills list (outdated emphasis — still listed but low priority)
- Misspelled project name "Shareitineray" in UI (verify correct branding)
- Phone number without international format
- Infinite looping hero title carousel (distracting for modern/a11y standards)
