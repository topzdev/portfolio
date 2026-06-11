# Rebuild TODO

Tasks tracked after old portfolio audit. Extraction phase complete; rebuild not started on branch `2026`.

## Missing Content to Confirm

- [ ] Confirm primary title: **Fullstack Developer** (replaces rotating hero titles)
- [ ] Write project descriptions for all 7 projects
- [ ] Add tech stack per project
- [ ] Add GitHub repo URLs per project (where applicable)
- [ ] Brocode — provide live demo URL or mark as archive-only
- [ ] Include Brocode and Luzon TSC in rebuild? (hidden in old UI)
- [ ] Correct project name: "Shareitineray" vs "Share Itinerary"
- [ ] Add work experience entries (company, role, dates, bullets)
- [ ] Education — add graduation years (TUP, Information Technology)
- [ ] Add more testimonials or keep single-card layout
- [ ] Update phone number format (+63…) and confirm still active
- [ ] Confirm email christianlugod05@gmail.com is preferred contact
- [ ] Confirm social links: current footer set vs legacy Upwork/Dribbble/Twitter icons
- [ ] Pick canonical resume file (`static/christian-lugod-resume.pdf` vs `assets/files/christian-lugod-resume-2025.pdf`)
- [ ] Update SEO description for Fullstack Developer focus
- [ ] Hero value proposition / short intro line for rebuild

## Assets to Attach or Replace

- [ ] Copy favicons and `seo-cover.jpg` from `static/` → Next.js `public/`
- [ ] Copy or link hero memoji from Cloudinary (`topzdev-memoji`)
- [ ] Download project logos and screenshots for local hosting (optional)
- [ ] Download stack icons or replace with Simple Icons / SVG set
- [ ] Consolidate resume PDFs → single `public/` file
- [ ] Optimize images (WebP/AVIF) during import
- [ ] Review `static/Portfolio.fig..fig` for design reference

## Sections to Rebuild

- [ ] Initialize Next.js + TypeScript + Tailwind + Bun
- [ ] Hero section
- [ ] About section
- [ ] Skills section
- [ ] Projects section
- [ ] Experience section (new)
- [ ] Testimonials section
- [ ] Contact section
- [ ] Footer
- [ ] Sticky header + navigation
- [ ] Custom 404 page (optional)

## Animation Tasks

- [ ] Set up GSAP + ScrollTrigger via `@gsap/react`
- [ ] Hero entrance (one-time, no infinite loop)
- [ ] Text reveal on about section
- [ ] Scroll-triggered stagger for skills, projects, experience, contact form
- [ ] Section reveal for testimonials
- [ ] `prefers-reduced-motion` fallbacks
- [ ] Timeline cleanup on unmount
- [ ] Optional Lenis smooth scroll

## SEO Tasks

- [ ] Next.js `metadata` + `viewport` in `app/layout.tsx`
- [ ] Open Graph + Twitter cards (fix old Twitter meta typo)
- [ ] `robots.txt` and `sitemap.xml`
- [ ] Canonical URL https://topz.dev
- [ ] Structured data (Person schema)
- [ ] Lighthouse SEO audit

## Accessibility Tasks

- [ ] Semantic HTML landmarks
- [ ] Skip to content link
- [ ] Focus states on buttons/links
- [ ] Alt text on all images
- [ ] Form labels and error states
- [ ] Color contrast audit
- [ ] Keyboard-friendly navigation
- [ ] Reduced motion support
- [ ] Screen reader pass on mobile menu

## Deployment Checklist

- [ ] Bun install + lockfile
- [ ] `bun run build` passes
- [ ] Contact form backend (replace Netlify — Resend, Formspree, or API route)
- [ ] Vercel project configuration for Next.js
- [ ] Custom domain topz.dev
- [ ] Verify OG image at `/seo-cover.jpg`
- [ ] Retire old Nuxt deployment after cutover

## Safe to Delete Old Implementation?

**Not yet.** Documentation and starter data files are in place, but:

- [ ] Missing content confirmed with user
- [ ] Assets migrated or Cloudinary verified
- [ ] Next.js rebuild implemented and tested
- [ ] Production deploy verified

Old Nuxt/Vue files can be archived or removed only after successful deploy and content sign-off.
