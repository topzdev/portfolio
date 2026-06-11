# Content Inventory

Extracted from the old Nuxt portfolio. Placeholders and gaps are noted explicitly.

## Hero

| Field | Content |
|-------|---------|
| Greeting | "Hello, I'm … World!" (animated text replaces "World" with "TopzDev" then "Christian Lugod") |
| Display name | Christian Lugod |
| Brand alias | TopzDev |
| Rotating titles | UI/UX Designer, Backend Developer, Frontend Developer, SEO Specialist, Fullstack Developer |
| CTA | "Hire Me" → scrolls to `#hireme` |
| Hero image | Cloudinary: `/me_prsc2l` (portrait, right-aligned, hidden below laptop breakpoint) |

**Rebuild note:** New role/title target is **Fullstack Developer**. Consider simplifying the rotating titles or using a single headline.

## About (Introduction Section)

| Field | Content |
|-------|---------|
| Overline | Introduction |
| Heading | Know more about me |
| Body | Hello! My name is Christian Lugod, and I'm currently a full-stack web developer working in the capital city of Manila, Philippines. I graduated from the Technological University of the Philippines with a degree in Information Technology. I am extremely passionate about this profession, and my dedication reflects in my skills and experience in the field. This passion also fuels my lifelong commitment to continuously enhance my web and mobile application development skills |
| Resume CTA | Download my Resume → `/christian-lugod-resume-2022.pdf` |

## Skills / Tools (Stacks Section)

| Field | Content |
|-------|---------|
| Overline | Technology |
| Heading | My Current Stacks |

**Technologies listed (18 items):**

VueJS, NuxtJs, React and React Native, NextJs, Expo, Javascript, Typescript, JQuery, PostgreSQL, NodeJS, PHP, Laravel, Figma, HTML, CSS, SCSS, TailwindCSS, Vuetify, MUI, Bootstrap

Each has an icon on Cloudinary under `/icons/` and most have official doc links.

## Projects

| Field | Content |
|-------|---------|
| Overline | Projects |
| Heading | Dynamic: "Here are some of my work for the past {years} years" (calculated from 2017) |
| Subcopy | Believes in perfection by design and performance by default |
| GitHub CTA | Visit my github → https://github.com/topzdev |

### Project 1: Shareitineray
- **Live:** https://shareitinerary.com/
- **Logo:** Cloudinary `/logo/shareitinerary_logo_m4zqlq`
- **Screenshot:** Cloudinary `/projects/all/proj_sharetinerary_x0cqjn`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase
- **GitHub:** Not listed
- **Note:** Title spelled "Shareitineray" in code; domain is shareitinerary.com

### Project 2: Knovie
- **Live:** https://knowvie.herokuapp.com/
- **Logo:** Cloudinary `/logo/knowvie_logo_v1wb6a`
- **Screenshot:** Cloudinary `/projects/all/proj_knowvie_hi2qyh`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 3: PC Master Shop
- **Live:** http://pcmastershop.herokuapp.com/
- **Logo:** Cloudinary `/logo/pcmaster_logo_ud6tcm`
- **Screenshot:** Cloudinary `/projects/all/proj_pcmaster_f0xrlx`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 4: Brocode
- **Live:** None (no link in codebase)
- **Logo:** Cloudinary `/logo/brocode_logo_x3wynw`
- **Screenshot:** Cloudinary `/projects/all/proj_brocode_q6fknk`
- **Description:** Not in codebase
- **Tech stack:** Not in codebase

### Project 5: Luzon TSC
- **Live:** https://luzontsc.com/
- **Logo:** Cloudinary `/logo/tsc_logo_t2o9pc`
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
| Miko Suarez | Project Manager | "Christian is not only great for design and development, he is a problem solver who always delivers an exceptional quality of work. Highly recommended" |

Profile image: Cloudinary `/profiles/client_sir_miko_wrknfx`

**Note:** Testimony slider UI has 3 progress dots but only 1 testimonial in data.

## Contact (Proposal Section)

| Field | Content |
|-------|---------|
| Heading | Got a project? Hmmm... Let's Talk |
| Subcopy | Don't hesitate, lets talk about your idea and make it happen. |
| Form heading | Estimate your project? Let me know here. |
| Form fields | Name, Email, Message, optional file attachment |
| Submit | Send it! |

## Footer

**Quote:**
> Never stop learning, **Never** give up your **dream**. We don't just come here to lose, Keep **fighting** for your dreams.

**Copyright:** Designed and Developed by Christian Lugod © {year}

## Contact Information

| Type | Value |
|------|-------|
| Email | christianlugod05@gmail.com |
| Phone | 09286665903 |

## Social Links

| Platform | URL |
|----------|-----|
| Upwork | https://www.upwork.com/freelancers/~0183563188426b2c0c |
| GitHub | https://github.com/topzdev |
| Dribbble | https://dribbble.com/TopzTheDev |
| LinkedIn | https://www.linkedin.com/in/christopher-lugod-ba146b197/ |
| Facebook | https://www.facebook.com/Christoplugod |
| Twitter / X | https://twitter.com/_christop_ |
| Instagram | https://www.instagram.com/christoplugod/ |

## Resume Links

| File | Path |
|------|------|
| Resume PDF | `/christian-lugod-resume-2022.pdf` (referenced, not in repo) |

## SEO Metadata

| Field | Value |
|-------|-------|
| Site title | TopzDev - Christian Lugod Portfolio |
| OG title | Christian Lugod \| Portfolio |
| Description | UI/UX Designer, SEO Specialist, Backend, Frontend, Fullstack Web Developer from Manila, Philippines |
| URL | https://topz.dev |
| Theme color | #0993e5 |
| Twitter handle | @_christop_ |
| OG image | /seo-cover.jpg (not in repo) |
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

- [ ] Project descriptions for all 5 projects
- [ ] Project tech stacks
- [ ] Per-project GitHub repository URLs
- [ ] Brocode live demo URL
- [ ] Work experience / employment history
- [ ] Updated resume (current file is 2022)
- [ ] Resume PDF file in repository
- [ ] OG cover image (`seo-cover.jpg`) in repository
- [ ] Favicon PNG/ICO files referenced in `nuxt.config.js` (not in repo)
- [ ] Confirm whether "Shareitineray" or "Share Itinerary" is correct branding
- [ ] Whether Knovie / PC Master Shop / Brocode demos are still live
- [ ] Additional testimonials (UI supports slider, data has one)
- [ ] Confirm phone number is still current
- [ ] Whether Upwork profile is still active
