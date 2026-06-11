# Rebuild TODO

Tasks tracked after old portfolio audit. Check off as completed during rebuild.

## Missing Content to Confirm

- [ ] Confirm primary title: **Fullstack Developer** (vs. rotating titles)
- [ ] Write project descriptions for all 5 projects
- [ ] Add tech stack per project
- [ ] Add GitHub repo URLs per project (where applicable)
- [ ] Brocode — provide live demo URL or mark as archive-only
- [ ] Correct project name: "Shareitineray" vs "Share Itinerary"
- [ ] Verify live status: knowvie.herokuapp.com, pcmastershop.herokuapp.com
- [ ] Add work experience entries (company, role, dates, bullets)
- [ ] Confirm education entry is sufficient or expand
- [ ] Add more testimonials or remove slider UI
- [ ] Update phone number format (+63…) and confirm still active
- [ ] Confirm email christianlugod05@gmail.com is preferred contact
- [ ] Confirm Upwork profile is still active
- [ ] Write new hero headline / value proposition for minimal design
- [ ] Update SEO description for Fullstack Developer focus

## Assets to Attach or Replace

- [ ] Download hero portrait from Cloudinary → `public/images/`
- [ ] Download all project logos and screenshots
- [ ] Download stack icons or replace with Simple Icons / SVG set
- [ ] Download testimonial profile image
- [ ] Recover or recreate favicon set from live site
- [ ] Create new `og-image.jpg` (1200×630)
- [ ] Update resume PDF (replace 2022 version) → `public/resume.pdf`
- [ ] Pull `seo-cover.jpg` from production if available
- [ ] Decide fate of decorative UI blobs (likely omit)
- [ ] Optimize images (WebP/AVIF) during import

## Sections to Rebuild

- [ ] Initialize Next.js + TypeScript + Tailwind + Bun
- [ ] Hero section
- [ ] About section
- [ ] Skills section
- [ ] Projects section (with descriptions + tech)
- [ ] Experience section (new)
- [ ] Testimonials section
- [ ] Contact section
- [ ] Footer
- [ ] Sticky navigation with section links
- [ ] 404 page (optional)

## Animation Tasks

- [ ] Choose animation library (GSAP ScrollTrigger vs Framer Motion)
- [ ] Implement hero entrance (one-time, no infinite loop)
- [ ] Section scroll reveals (fade-up stagger)
- [ ] Project card entrance
- [ ] Optional Lenis smooth scroll
- [ ] `prefers-reduced-motion` fallbacks
- [ ] Timeline cleanup on unmount
- [ ] Remove pulse infinite animation on CTA (or make subtle)

## SEO Tasks

- [ ] Next.js `metadata` export in layout/page
- [ ] Open Graph + Twitter cards
- [ ] `robots.txt` and `sitemap.xml`
- [ ] Canonical URL https://topz.dev
- [ ] Structured data (Person schema)
- [ ] Fix old Twitter meta typo (`twittterUsername`)
- [ ] Lighthouse SEO audit

## Accessibility Tasks

- [ ] Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- [ ] Skip to content link
- [ ] Focus states on all interactive elements
- [ ] Alt text for all images (verify against data files)
- [ ] Form labels and error messages
- [ ] Color contrast check (WCAG AA)
- [ ] Keyboard navigation for nav and form
- [ ] Reduced motion support
- [ ] Screen reader test for hero text (no infinite animations)

## Deployment Checklist

- [ ] Bun install + lockfile
- [ ] `next build` passes
- [ ] Environment variables for contact form (if API-based)
- [ ] Vercel project configuration
- [ ] Custom domain topz.dev
- [ ] Redirect www → apex (if applicable)
- [ ] Verify OG image on social debuggers
- [ ] Test contact form in production
- [ ] Analytics (optional — Plausible, Vercel Analytics)
- [ ] Retire old Nuxt deployment after cutover

## Safe to Delete Old Implementation?

**Not yet.** Complete the following first:

- [x] `docs/OLD_PORTFOLIO_AUDIT.md`
- [x] `docs/CONTENT_INVENTORY.md`
- [x] `docs/DESIGN_NOTES.md`
- [x] `docs/ANIMATION_NOTES.md`
- [x] `docs/ASSET_INVENTORY.md`
- [x] `docs/PROJECT_CONTEXT.md`
- [x] `docs/TODO.md`
- [x] `lib/data/profile.ts`
- [x] `lib/data/projects.ts`
- [x] `lib/data/skills.ts`
- [x] `lib/data/experience.ts`
- [x] `lib/data/socials.ts`
- [ ] Assets exported from Cloudinary / production
- [ ] Missing content confirmed with user
- [ ] Next.js scaffold in place on `new` branch

Once the above are done, old Nuxt files can be removed or archived on a separate git branch.
