# Rebuild TODO

Tasks tracked after Next.js rebuild on branch `2026`.

## Missing Content to Confirm

- [x] Confirm primary title: **Fullstack Developer** (static headline in hero)
- [ ] Write project descriptions for all 7 projects
- [ ] Add tech stack per project
- [ ] Add GitHub repo URLs per project (where applicable)
- [ ] Brocode — provide live demo URL or mark as archive-only
- [x] Include Brocode and Luzon TSC in rebuild (all 7 projects shown)
- [ ] Correct project name: "Shareitineray" vs "Share Itinerary"
- [ ] Add work experience entries (company, role, dates, bullets)
- [ ] Education — add graduation years (TUP, Information Technology)
- [ ] Add more testimonials or keep single-card layout
- [ ] Update phone number format (+63…) and confirm still active
- [ ] Confirm email christianlugod05@gmail.com is preferred contact
- [ ] Confirm social links: current footer set vs legacy Upwork/Dribbble/Twitter icons
- [x] Resume copied to `public/christian-lugod-resume.pdf`
- [ ] Update SEO description for Fullstack Developer focus in `lib/data/profile.ts`
- [x] Hero value proposition added (static copy in `HeroSection`)

## Assets to Attach or Replace

- [x] Copy `seo-cover.jpg`, resume, favicon, logo to `public/`
- [x] Hero memoji loads from Cloudinary (`topzdev-memoji`)
- [ ] Download project logos and screenshots for local hosting (optional)
- [ ] Download stack icons or replace with Simple Icons / SVG set
- [ ] Copy full favicon set (16x16, 32x32, android-chrome) to `public/`
- [ ] Optimize images (WebP/AVIF) during import

## Sections Rebuilt

- [x] Initialize Next.js + TypeScript + Tailwind + Bun
- [x] Hero section (`components/sections/HeroSection.tsx`)
- [x] About section
- [x] Skills section
- [x] Projects section (descriptions/tech still placeholders in data)
- [x] Experience section
- [x] Testimonials section
- [x] Contact section
- [x] Footer
- [x] Sticky header + navigation
- [ ] Custom 404 page (optional)

## Animation Tasks

- [x] GSAP + ScrollTrigger via `@gsap/react` (`lib/animations/*`)
- [x] Hero entrance (one-time stagger, no infinite loop)
- [x] Text reveal on about section (`useTextReveal`)
- [x] Scroll-triggered stagger for skills, projects, experience, contact form
- [x] Section reveal for testimonials (`useSectionReveal`)
- [x] Magnetic hero CTA (`MagneticButton`)
- [x] `prefers-reduced-motion` fallbacks in animation utilities + CSS
- [x] Timeline cleanup via `useGSAP` scope
- [ ] Optional Lenis smooth scroll (not added — native smooth scroll used)

## SEO Tasks

- [x] Next.js `metadata` + `viewport` in `app/layout.tsx`
- [x] Open Graph + Twitter cards
- [ ] `robots.txt` and `sitemap.xml`
- [x] Canonical URL https://topz.dev
- [ ] Structured data (Person schema)
- [x] Twitter handle wired correctly in metadata
- [ ] Lighthouse SEO audit

## Accessibility Tasks

- [x] Semantic HTML landmarks
- [x] Skip to content link
- [x] Focus states on buttons/links
- [x] Alt text on images via data/components
- [x] Form labels
- [ ] Color contrast audit (manual)
- [x] Keyboard-friendly navigation
- [x] Reduced motion support
- [ ] Screen reader pass on mobile menu

## Deployment Checklist

- [x] Bun install + lockfile (`bun.lock`)
- [x] `bun run build` passes
- [x] `bun run lint` passes
- [ ] Contact form backend (currently `mailto:` fallback — replace with API/Formspree)
- [ ] Vercel project configuration for Next.js
- [ ] Custom domain topz.dev
- [x] OG image at `/seo-cover.jpg` in `public/`
- [ ] Production deploy and cutover from old Nuxt site

## Contact Form Note

The rebuild uses a client-side `mailto:` submit flow in `ContactSection` as a placeholder. Replace with Resend, Formspree, or a Next.js API route before production if automated inbox delivery is required.

## Safe to Delete Old Implementation?

**Mostly yes for local development.** The Next.js rebuild is complete and builds successfully. Before production cutover:

- [ ] Confirm missing content with user
- [ ] Deploy and verify on Vercel
- [ ] Retire old Nuxt deployment at topz.dev
