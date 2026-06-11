# Asset Inventory

Catalog of images, icons, fonts, and static files referenced by the old portfolio.

## Cloudinary Base URL

```
https://res.cloudinary.com/topzdev/image/upload/portfolio
```

Configured in `nuxt.config.js` (`image.cloudinary.baseURL`) and `configs/index.js`.

## Images

### Hero / Profile

| Asset | Cloudinary path | Full URL suffix | Notes |
|-------|-----------------|-----------------|-------|
| Hero portrait | `/me_prsc2l` | `.../portfolio/me_prsc2l` | Preloaded, 650×933, hidden on mobile |
| Loading spinner | `v1665813583/portfolio/loading_h3a5xy.gif` | Separate upload version path | Used on submit button loading state |

### Project Logos

| Project | Cloudinary path | Dimensions |
|---------|-----------------|------------|
| Shareitinerary | `/logo/shareitinerary_logo_m4zqlq` | 213×50 |
| Knovie | `/logo/knowvie_logo_v1wb6a` | 47×50 |
| PC Master Shop | `/logo/pcmaster_logo_ud6tcm` | 175×50 |
| Brocode | `/logo/brocode_logo_x3wynw` | 259×50 |
| Luzon TSC | `/logo/tsc_logo_t2o9pc` | 53×50 |

### Project Screenshots

| Project | Cloudinary path | Display |
|---------|-----------------|---------|
| Shareitinerary | `/projects/all/proj_sharetinerary_x0cqjn` | WebP via preset, rotated |
| Knovie | `/projects/all/proj_knowvie_hi2qyh` | WebP |
| PC Master Shop | `/projects/all/proj_pcmaster_f0xrlx` | WebP |
| Brocode | `/projects/all/proj_brocode_q6fknk` | WebP |
| Luzon TSC | `/projects/all/proj_tsc_ggaleu` | WebP |

### Stack / Skill Icons

All under `/icons/`, typically 68×68:

`icon_vue_jhkfs6`, `icon_nuxt_mcbcyd`, `icon_react_xnelsh`, `icon_nextjs_t8gyda`, `icon_expo_wspzok`, `icon_javascript_dfxxqk`, `icon_typescript_fld2yp`, `icon_jquery_rp7qwu`, `icon_postgresql_yg7kxl`, `icon_nodejs_rii0or`, `icon_php_xouhs3`, `icon_laravel_xtmrqn`, `icon_figma_qijjss`, `icon_html_iatcnq`, `icon_css_pnlbyb`, `icon_sass_pbvayy`, `icon_tailwind-css_iw8ufr`, `icon_vuetify_nkvejh`, `icon_mui_nsfsz2`, `icon_bootstrap_truxzr`

### Testimonial

| Asset | Cloudinary path |
|-------|-----------------|
| Miko Suarez profile | `/profiles/client_sir_miko_wrknfx` |

### UI Decoration SVGs (Cloudinary)

| Variable | Purpose |
|----------|---------|
| `ui_dots_light_blue` | Hero background dots |
| `ui_dots_grey` | Testimony, proposal sections |
| `ui_float_blobs` | Proposal section animated blob |
| `ui_ellipse_violet_gradient` | Proposal section accent |
| `ui_ellipse_red_gradient` | Footer decoration |
| `ui_ellipse_blue_gradient` | Footer rotating decoration |
| `ui_square_grey` | Projects section corner pattern |

## Icons (Vue Components)

Located in `components/icons/`:

AttachIcon, DribbleIcon, EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, PhoneIcon, ResumeIcon, TwitterIcon, UpworkIcon, VueIcon

Also referenced: `utils/icons.js` (`icon_github`, `icon_clip`)

## Logos (Local)

| File | Path | In repo |
|------|------|---------|
| TopzDev logo | `/topzdev-logo.svg` | Yes (`static/topzdev-logo.svg`) |
| Safari pinned tab | `/safari-pinned-tab.svg` | Yes (`static/safari-pinned-tab.svg`) |

## Favicons (Referenced, not in repo)

Referenced in `nuxt.config.js` and `site.webmanifest`:

- `/favicon.ico`
- `/favicon-32x32.png`
- `/favicon-16x16.png`
- `/apple-touch-icon.png`
- `/android-chrome-192x192.png`
- `/android-chrome-512x512.png`

## OG / Social Images

| Asset | Path | In repo |
|-------|------|---------|
| SEO cover | `/seo-cover.jpg` | No |
| OG itemprop image | `/topzdev-logo.svg` | Yes |

## Resume Files

| File | Path | In repo |
|------|------|---------|
| Resume 2022 | `/christian-lugod-resume-2022.pdf` | No |

## Fonts

| Family | Source | Weights |
|--------|--------|---------|
| Poppins | Google Fonts | 400, 500, 700 |
| Open Sans | Google Fonts | 300, 400, 600, 700 (+ italic 300, 400) |

## Other Static Files

| File | Path | In repo |
|------|------|---------|
| Web manifest | `/site.webmanifest` | Yes |
| Browser config | `/browserconfig.xml` | Yes |
| Materialize grid CSS | `assets/css/materialize-grid.css` | Yes |

## Assets to Reuse

**High priority:**
- Hero portrait (`me_prsc2l`) — personal branding
- All 5 project logos and screenshots — portfolio content
- Stack/skill icons — reusable with updated list
- Testimonial profile photo
- `topzdev-logo.svg` — brand mark
- Cloudinary account/paths — download or re-host in `public/` for Next.js

**Medium priority:**
- Favicon set — recover from production deploy or regenerate from logo
- `safari-pinned-tab.svg`

**Low priority / skip for minimal redesign:**
- UI decoration blobs and dot patterns
- Loading GIF (replace with CSS spinner)
- Blank stack placeholder cards (decorative only)

## Assets to Replace or Optimize

| Asset | Reason |
|-------|--------|
| `seo-cover.jpg` | Missing from repo; create new OG image for rebuild |
| Resume PDF | Outdated (2022); generate new CV |
| Favicon set | Not in repo; create cohesive set from new brand |
| Project screenshots | May be stale; capture fresh screenshots where apps still exist |
| Knovie / PC Master Shop demos | Heroku URLs may be dead — verify before reusing screenshots |
| Stack icons | Consider SVG icon set (Simple Icons) instead of Cloudinary PNGs |
| Hero portrait | Optional reshoot or AI cleanup for Apple-like aesthetic |
| `loading_h3a5xy.gif` | Replace with inline SVG/CSS loader |
| Decorative UI SVGs | Omit for minimal design direction |

## Migration Notes

1. Export all Cloudinary assets to `public/images/` or configure `next/image` remote patterns for Cloudinary.
2. Verify Cloudinary `topzdev` account is still accessible.
3. Pull favicons and `seo-cover.jpg` from live `topz.dev` deployment if not in git.
4. Add resume PDF to `public/` when updated copy is ready.
