# Content Inventory

Extracted from the old Nuxt portfolio on branch `2026`. Placeholders and gaps are noted explicitly.

## Hero

| Field | Content |
|-------|---------|
| Greeting | "Hello, I'm … World!" (animated: `#im-anim` → "I'm", `#me-anim` → "TopzDev" then "Christian Lugod") |
| Display name | Christian Lugod |
| Brand alias | TopzDev |
| Rotating titles | UI/UX Designer, Backend Developer, Frontend Developer, SEO Specialist, Fullstack Developer |
| CTA | "Hire Me" → scrolls to `#hireme` (vue-scrollto, 2000ms) |
| Hero image | Cloudinary: `/topzdev-memoji` (150×150, centered above text) |
| Alternate portrait | `/me_prsc2l` (650×933, commented out in template) |

**Rebuild note:** New role/title target is **Fullstack Developer**. Consider a single static headline instead of the rotating carousel.

## About (Introduction Section)

| Field | Content |
|-------|---------|
| Overline | Introduction |
| Heading | Know more about me |
| Body | Hello! My name is Christian Lugod, and I'm currently a full-stack web developer working in the capital city of Manila, Philippines. I graduated from the Technological University of the Philippines with a degree in Information Technology. I am extremely passionate about this profession, and my dedication reflects in my skills and experience in the field. This passion also fuels my lifelong commitment to continuously enhance my web and mobile application development skills |
| Resume CTA | Download my Resume → `christian-lugod-resume.pdf` (cache-busted with `?v=timestamp` in code) |

## Skills / Tools (Stacks Section)

| Field | Content |
|-------|---------|
| Overline | Technology |
| Heading | My Current Stacks |

**Technologies listed (21 items, from `StacksList.vue`):**

AI & LLM (ChatGPT, Claude, V0 & Cursor), React and React Native, NextJs, VueJS, NuxtJs, Expo, Typescript, Javascript, JQuery, NodeJS, AdonisJS, PHP, Laravel, PostgreSQL, TailwindCSS, Shadcn UI, Docker, Figma, HTML, CSS, SCSS

Each has an icon on Cloudinary under `/icons/` (AI uses `/icons/ai_f5zcc6` with custom gradient background). Most have official doc links.

## Projects

| Field | Content |
|-------|---------|
| Overline | Projects |
| Heading | Dynamic: "Here are some of my work for the past {years} years" (calculated from **2018**) |
| Subcopy | Believes in perfection by design and performance by default |
| GitHub CTA | Visit my github → https://github.com/topzdev |

**Note:** 7 projects exist in data; only the first 5 are rendered in `ProjectList.vue`.

### Project 1: Linktree Clone (displayed)

- **Live:** https://linktree-clone-topzdev.vercel.app/
- **Logo:** Cloudinary `/logo/linktree_gwkwvu` (353×142)
- **Screenshot:** Cloudinary `/projects/all/linktree-clone_ktfxzc`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase
- **GitHub:** Not listed

### Project 2: Shareitineray (displayed)

- **Live:** https://shareitinerary.com/
- **Logo:** Cloudinary `/logo/shareitinerary_logo_m4zqlq` (213×50)
- **Screenshot:** Cloudinary `/projects/all/proj_sharetinerary_x0cqjn`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase
- **Note:** Title spelled "Shareitineray" in code; domain is shareitinerary.com

### Project 3: HomeOfDevs (displayed, right column)

- **Live:** https://homeofdevs.com/
- **Logo:** Cloudinary `/logo/homeofdevs_qpa2gr`
- **Screenshot:** Cloudinary `/projects/all/homeofdevs_qqgfbk`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 4: Knovie (displayed, right column)

- **Live:** https://knovieapp.topz.dev/
- **Logo:** Cloudinary `/logo/knowvie_logo_v1wb6a` (47×50)
- **Screenshot:** Cloudinary `/projects/all/proj_knowvie_hi2qyh`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 5: PC Master Shop (displayed, right column)

- **Live:** https://pcmastershop.vercel.app/
- **Logo:** Cloudinary `/logo/pcmaster_logo_ud6tcm` (175×50)
- **Screenshot:** Cloudinary `/projects/all/proj_pcmaster_f0xrlx`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 6: Brocode (in data, **not displayed**)

- **Live:** None (no `link` prop — card defaults to `/`)
- **Logo:** Cloudinary `/logo/brocode_logo_x3wynw` (259×50)
- **Screenshot:** Cloudinary `/projects/all/proj_brocode_q6fknk`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 7: Luzon TSC (in data, **not displayed**)

- **Live:** https://luzontsc.com/
- **Logo:** Cloudinary `/logo/tsc_logo_t2o9pc` (53×50)
- **Screenshot:** Cloudinary `/projects/all/proj_tsc_ggaleu`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

## Experience / Work History

**No dedicated experience section exists** in the old portfolio.

Education mentioned in About:

- **Institution:** Technological University of the Philippines
- **Degree:** Information Technology
- **Location context:** Manila, Philippines

## Testimonials

| Name | Role | Quote |
|------|------|-------|
| Miko Suarez | COO of Webdev200 | Christian is not only great for design and development, he is a problem solver who always delivers an exceptional quality of work. Highly recommended |

Profile image: Cloudinary `/profiles/client_sir_miko_wrknfx`

**Note:** Testimony slider UI has 3 progress dots but only 1 testimonial in data.

## Contact (Proposal Section)

| Field | Content |
|-------|---------|
| Heading | Got a project? Hmmm... Let's Talk |
| Subcopy | Don't hesitate, lets talk about your idea and make it happen. |
| Form heading | Estimate your project? Let me know here. |
| Form fields | Name, Email, Message, optional file attachment (docx, image, pdf, etc.) |
| Submit | Send it! |
| Success message | Thanks for the proposal!, I'll review it immediately. |

## Footer

**Quote:**

> Never stop learning, **Never** give up your **dream**. We don't just come here to lose, Keep **fighting** for your dreams.

**Copyright:** Designed and Developed by Christian Lugod © {year}

## Contact Information

| Type | Value |
|------|-------|
| Email | christianlugod05@gmail.com |
| Phone | 09286665903 |

## Social Links (current footer)

| Platform | URL |
|----------|-----|
| GitHub | https://github.com/topzdev |
| LinkedIn | https://www.linkedin.com/in/christianlugod15/ |
| Instagram | https://www.instagram.com/_christopz |
| Threads | https://www.threads.com/@_christopz |
| Facebook | https://www.facebook.com/Christoplugod |

**Legacy icons in codebase (not in current footer):** Upwork, Twitter/X, Dribbble — icon components exist under `components/icons/` and `utils/icons.js` but are not wired in `MainFooter.vue`.

## Resume Links

| File | Location | Notes |
|------|----------|-------|
| `christian-lugod-resume.pdf` | `static/` | Referenced by Introduction section |
| `christian-lugod-resume.docx` | `static/` | |
| `christian-lugod-resume-2025.pdf` | `assets/files/` | Newer version candidate |
| `christian-lugod-resume-2025.docx` | `assets/files/` | Newer version candidate |
| Multiple typo variants | `assets/files/` | chistopher/christopher spellings — consolidate before rebuild |

## SEO Metadata

| Field | Value |
|-------|-------|
| Site title | TopzDev - Christian Lugod Portfolio |
| OG title | Christian Lugod \| Portfolio |
| Description | UI/UX Designer,SEO Specialist,Backend,Frontend,Fullstack Web Developer from Manila,Philippines |
| URL | https://topz.dev |
| Theme color | #0993e5 |
| Twitter handle | @_christop_ |
| OG image | /seo-cover.jpg |
| Logo | /topzdev-logo.svg |

## Navigation Items

No traditional nav menu. Implicit section anchors:

| Anchor | Section |
|--------|---------|
| (top) | Hero |
| `#intro` | Introduction |
| `#stacks` | Stacks |
| `#projects` | Projects |
| `#testimony` | Testimony |
| `#hireme` | Contact form |
| `#footer` | Footer |

## Missing or Unclear Content

- [ ] Project descriptions for all 7 projects
- [ ] Project tech stacks
- [ ] Per-project GitHub repository URLs
- [ ] Brocode live demo URL
- [ ] Whether to show Brocode and Luzon TSC (currently hidden in UI)
- [ ] Work experience / employment history
- [ ] Which resume file is canonical (2025 vs static PDF)
- [ ] Confirm whether "Shareitineray" or "Share Itinerary" is correct branding
- [ ] Additional testimonials (UI supports slider, data has one)
- [ ] Confirm phone number is still current
- [ ] Confirm preferred social set (footer vs legacy Upwork/Dribbble/Twitter icons)
- [ ] Education graduation years
