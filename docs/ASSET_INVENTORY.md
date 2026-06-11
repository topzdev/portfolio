# Asset Inventory

Catalog of images, icons, fonts, and static files referenced by the old portfolio.

## Cloudinary Base URL

```
https://res.cloudinary.com/topzdev/image/upload/portfolio
```

Configured in `nuxt.config.js` (`image.cloudinary.baseURL`) and `configs/index.js`.

Helper for rebuild: `cloudinaryUrl()` in `lib/data/profile.ts`.

## Images

### Hero / Profile

| Asset | Cloudinary path | Notes |
|-------|-----------------|-------|
| Hero memoji | `/topzdev-memoji` | Active hero image, 150×150 |
| Hero portrait (alt) | `/me_prsc2l` | Commented out in template; 650×933 |
| Loading spinner | `v1665813583/portfolio/loading_h3a5xy.gif` | Submit button loading state |

### Project Logos

| Project | Cloudinary path | Dimensions |
|---------|-----------------|------------|
| Linktree Clone | `/logo/linktree_gwkwvu` | 353×142 |
| Shareitinerary | `/logo/shareitinerary_logo_m4zqlq` | 213×50 |
| HomeOfDevs | `/logo/homeofdevs_qpa2gr` | 572×100 |
| Knovie | `/logo/knowvie_logo_v1wb6a` | 47×50 |
| PC Master Shop | `/logo/pcmaster_logo_ud6tcm` | 175×50 |
| Brocode | `/logo/brocode_logo_x3wynw` | 259×50 |
| Luzon TSC | `/logo/tsc_logo_t2o9pc` | 53×50 |

### Project Screenshots

| Project | Cloudinary path | Display |
|---------|-----------------|---------|
| Linktree Clone | `/projects/all/linktree-clone_ktfxzc` | WebP via preset, rotated |
| Shareitinerary | `/projects/all/proj_sharetinerary_x0cqjn` | WebP |
| HomeOfDevs | `/projects/all/homeofdevs_qqgfbk` | WebP |
| Knovie | `/projects/all/proj_knowvie_hi2qyh` | WebP |
| PC Master Shop | `/projects/all/proj_pcmaster_f0xrlx` | WebP |
| Brocode | `/projects/all/proj_brocode_q6fknk` | WebP |
| Luzon TSC | `/projects/all/proj_tsc_ggaleu` | WebP |

### Stack / Skill Icons

All under `/icons/`, typically 68×68:

`ai_f5zcc6`, `icon_react_xnelsh`, `icon_nextjs_t8gyda`, `icon_vue_jhkfs6`, `icon_nuxt_mcbcyd`, `icon_expo_wspzok`, `icon_typescript_fld2yp`, `icon_javascript_dfxxqk`, `icon_jquery_rp7qwu`, `icon_nodejs_rii0or`, `adonis_jdvxsq`, `icon_php_xouhs3`, `icon_laravel_xtmrqn`, `icon_postgresql_yg7kxl`, `icon_tailwind-css_iw8ufr`, `shadcn-ui_ycf2n3`, `docker_vnzxw4`, `icon_figma_qijjss`, `icon_html_iatcnq`, `icon_css_pnlbyb`, `icon_sass_pbvayy`

### Testimonial

| Asset | Cloudinary path |
|-------|-----------------|
| Miko Suarez profile | `/profiles/client_sir_miko_wrknfx` |

### UI Decoration SVGs (Cloudinary)

| Variable | Purpose |
|----------|---------|
| `ui_dots_light_blue` | Hero background dots (commented out) |
| `ui_dots_grey` | Testimony, proposal sections |
| `ui_float_blobs` | Proposal section animated blob |
| `ui_ellipse_violet_gradient` | Proposal section accent |
| `ui_ellipse_red_gradient` | Footer decoration |
| `ui_ellipse_blue_gradient` | Footer rotating decoration |
| `ui_square_grey` | Projects section corner pattern |

## Icons (Vue Components)

Located in `components/icons/`:

AttachIcon, DribbleIcon, EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, PhoneIcon, ResumeIcon, ThreadsIcon, TwitterIcon, UpworkIcon, VueIcon

Also referenced: `utils/icons.js` (`icon_github`, `icon_clip`, `upwork`)

## Logos (Local — `static/`)

| File | Path |
|------|------|
| TopzDev logo | `/topzdev-logo.svg` |
| Safari pinned tab | `/safari-pinned-tab.svg` |
| Portfolio photo | `/portfolio-christopher-lugod.jpg` |

## Favicons (`static/`)

| File | Path |
|------|------|
| favicon.ico | `/favicon.ico` |
| favicon-32x32.png | `/favicon-32x32.png` |
| favicon-16x16.png | `/favicon-16x16.png` |
| apple-touch-icon.png | `/apple-touch-icon.png` |
| android-chrome-192x192.png | `/android-chrome-192x192.png` |
| android-chrome-512x512.png | `/android-chrome-512x512.png` |
| mstile-150x150.png | `/mstile-150x150.png` |

## OG / Social Images

| Asset | Path | In repo |
|-------|------|---------|
| SEO cover | `/seo-cover.jpg` | Yes (`static/seo-cover.jpg`) |
| OG itemprop image | `/topzdev-logo.svg` | Yes |

## Resume Files

| File | Location |
|------|----------|
| `christian-lugod-resume.pdf` | `static/` (linked from intro) |
| `christian-lugod-resume.docx` | `static/` |
| `christian-lugod-resume-2025.pdf` | `assets/files/` |
| `christian-lugod-resume-2025.docx` | `assets/files/` |
| Older variants | `assets/files/` (multiple spellings) |

## Fonts

| Family | Source | Weights |
|--------|--------|---------|
| Poppins | Google Fonts | 400, 500, 700 |
| Open Sans | Google Fonts | 300, 400, 600, 700 (+ italic 300, 400) |

## Other Static Files

| File | Path |
|------|------|
| Web manifest | `/site.webmanifest` |
| Browser config | `/browserconfig.xml` |
| Figma source | `/Portfolio.fig..fig` |
| Materialize grid CSS | `assets/css/materialize-grid.css` |

## Assets to Reuse

**High priority:**

- Hero memoji (`topzdev-memoji`) — current branding
- All project logos and screenshots — portfolio content
- Stack/skill icons — reusable with updated list
- Testimonial profile photo
- `topzdev-logo.svg` — brand mark
- Favicon set and `seo-cover.jpg` from `static/`
- Cloudinary account/paths — continue remote hosting or export to `public/`

**Medium priority:**

- `safari-pinned-tab.svg`
- `portfolio-christopher-lugod.jpg`
- Latest resume from `assets/files/christian-lugod-resume-2025.pdf`

**Low priority / skip for minimal redesign:**

- UI decoration blobs and dot patterns
- Loading GIF (replace with CSS spinner)
- Blank stack placeholder cards (decorative only)
- Commented-out full-body portrait `me_prsc2l` unless reintroduced

## Assets to Replace or Optimize

| Asset | Reason |
|-------|--------|
| Resume PDFs | Multiple versions/spellings — pick one canonical file for `public/` |
| Project screenshots | May be stale; capture fresh screenshots where apps still exist |
| Brocode | No live URL — confirm before reusing screenshot |
| Stack icons | Consider Simple Icons SVG set instead of Cloudinary PNGs |
| Hero memoji | Optional refresh for Apple-like aesthetic |
| `loading_h3a5xy.gif` | Replace with inline SVG/CSS loader |
| Decorative UI SVGs | Omit for minimal design direction |
| Figma file | Review for outdated layouts before relying on it |

## Migration Notes

1. Configure `next/image` remote patterns for `res.cloudinary.com` or export assets to `public/images/`.
2. Verify Cloudinary `topzdev` account is still accessible.
3. Copy favicons and `seo-cover.jpg` from `static/` to Next.js `public/` during rebuild.
4. Consolidate resume files — use 2025 PDF if content is current.
