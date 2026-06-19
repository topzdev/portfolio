# Design Notes

Visual and layout reference extracted from the old portfolio SCSS and components.

## Current Visual Style

- **Overall feel:** Bright, friendly developer portfolio with blue primary accent, soft lavender page backgrounds, decorative dot/blob SVG overlays, and rounded section transitions.
- **Layout:** Single-page scroll, full-viewport hero, alternating background colors between sections, asymmetric two-column project grid.
- **Density:** Generous whitespace in hero and intro; stacks section uses a tall fixed-height container (900px) with animated cards; footer is dark with large motivational typography.

## Colors

Defined in `assets/scss/abstracts/_variables.scss`:

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#0993e5` | Buttons, links, theme-color, pulse animation |
| Primary light | `#0094ff` | Hero name highlight (`#me-anim`) |
| Secondary | `#000000` | Headings |
| Secondary light | `#444444` | Body text, button borders |
| Secondary lighter | `#6f6f6f` | Overlines, muted text |
| Yellow accent | `#ffd600` | Footer icon highlights, hover states |
| Light blue accent | `#a3e1ff` | Footer highlighted words |
| Red | `#fc4040` | Error states (snackbar) |
| Base 1 | `#f3f4fb` | Page background, hero, project cards |
| Base 2 | `#ffffff` | Section backgrounds, stack cards |
| Footer background | `#151e29` | Footer |
| Footer title | `#dddddd` | Footer section headings |
| Input background | `#f2f2f2` | Form inputs, icon buttons |
| Footer link label | `#bdbdbd` | Default footer link text |

**Gradients:**

- Testimony section: `linear-gradient(to bottom right, #a5ddff, #a5ddff31 60%)`
- Proposal section accent: `linear-gradient(to bottom right, #fde985, #fde98531 60%)`
- AI stack card: `linear-gradient(180deg, #4A90E2 0%, #50E3C2 100%)`
- Footer/section decorations: red and blue ellipse gradients (Cloudinary SVGs)

## Typography

| Role | Font | Weights |
|------|------|---------|
| Headings | Poppins | 400, 500, 600, 700 |
| Body / overlines | Open Sans | 300, 400, 600, 700 (incl. italic) |

Loaded via Google Fonts in `nuxt.config.js`.

**Scale highlights:**

- Hero job title: 115px → scales down to 52px on mobile-s
- Hero name: 40px → 28px on mobile
- Section headings (`.heading--primary__title`): 42px → 22px
- Body (`.paragraph--primary`): 19px → 16px
- Footer quote: 34px → 25px
- Testimony quote: 34px italic → 20px

**Overline pattern:** Uppercase, letter-spacing 1px, 16px Open Sans, small horizontal rule pseudo-element before text.

## Layout Structure

```
┌─────────────────────────────────────┐
│  HERO (100vh, rounded bottom)       │
│  [memoji + centered text + CTA]     │
├─────────────────────────────────────┤
│  INTRO (white)                      │
├─────────────────────────────────────┤
│  STACKS (lavender, rounded top)     │
│  [3-column animated card rows]       │
├─────────────────────────────────────┤
│  PROJECTS (white, decorative dots)  │
│  [intro left]  [cards 2-col offset] │
├─────────────────────────────────────┤
│  TESTIMONY (blue gradient, clip)    │
├─────────────────────────────────────┤
│  PROPOSAL (white, form right)       │
├─────────────────────────────────────┤
│  FOOTER (dark)                      │
└─────────────────────────────────────┘
```

- **Grid:** Materialize CSS (`row`, `col s12 m6 l6`)
- **Container:** Standard `.container` class (from Materialize)
- **Rounded sections:** `border-radius` 130px → 50px on top or bottom corners via `rounded-container` mixin

## Spacing Patterns

- Section padding: `50px 0` default; stacks `80px 0`; testimony `160px 0`; proposal `80px 0`
- Intro paragraph width: 80% desktop, 100% mobile
- Project cards: 80px gap between cards; right column offset `-25%` margin-top for staggered layout
- Footer contact groups: 120px top margin; 80px gap between columns
- Utility classes: `mt-2`, `mt-3`, `mb-3`, etc. (`base/_utilities.scss`)

## Card Styles

### Stack card

- 112×158px white card, 8px radius, soft shadow (`0 4px 56px #ededed`)
- Centered icon + label
- Blank decorative cards with blur filter at row edges

### Project card (new build)

- Aspect ratio ~485:580, rounded corners, soft shadow
- Screenshot fills card as background (`object-cover`); logo pinned top-left
- No description or tech stack on card
- Two-column staggered layout; right column offset upward on desktop

### Testimony card

- Large square image (400px) with shadow, offset upward
- Italic quote typography, author block with circular avatar on mobile

## Button Styles

### Primary (`btn--primary`)

- Blue background, white uppercase text, Poppins 600
- Padding 14px 80px, 5px radius (or `rounded` → 100px pill)
- Optional `pulse` CSS keyframe animation on hero CTA
- Optional `shadow`, `block`, `dense` modifiers

### Secondary (`btn--secondary`)

- Text link style with bottom border
- Hover: light blue tint background, primary border color
- Used for resume download and GitHub link

### Icon (`btn--icon`)

- 70px circle, gray background, attachment button in form

## Mobile / Responsive Notes

Breakpoints (`_mixins.scss`):

| Name | Max width |
|------|-----------|
| mobile-s | 320px |
| mobile-m | 375px |
| mobile-lg | 600px |
| tab-port | 768px |
| tab-land | 900px |
| laptop-s | 1000px |
| laptop | 1264px |
| desktop | 1940px |
| big-desktop | 119em min |

**Key responsive behaviors:**

- Hero memoji scales down at laptop/tablet breakpoints
- Hero `#me-anim` becomes block on mobile-lg
- Stacks section height increases on tablet breakpoints; `listToShow` changes on resize
- Project right column loses negative margin on mobile-lg
- Testimony large image hidden on mobile-lg; small circular avatar shown instead
- Decorative blob pseudo-elements hidden on smaller screens
- Footer stacks contact columns vertically on tab-land

## Apple-like Modernization Opportunities

1. **Typography:** Replace dual-font setup with a single family (Inter, Geist, or system-ui)
2. **Color:** Reduce to monochrome + one accent; remove yellow/light-blue footer highlights
3. **Hero:** Static confident headline instead of rotating titles; subtle fade-in vs. heavy text plugin animation
4. **Sections:** Remove clip-path testimony section and decorative dot overlays
5. **Cards:** Flat or subtle-border cards instead of heavy shadows and rotated screenshots
6. **Motion:** Short, purposeful transitions (300–500ms) vs. long GSAP timelines (5–15s)
7. **Navigation:** Add minimal sticky nav with blur backdrop
8. **Spacing:** Increase vertical rhythm; use consistent 8px grid via Tailwind
9. **Imagery:** Contained screenshots without skew/rotate
10. **Dark mode:** Optional system-preference dark theme

### Suggested rebuild palette direction

| Token | Suggested value | Notes |
|-------|-----------------|-------|
| Primary | `#0993e5` or subtler blue | Keep brand recognition or soften |
| Surface | `#f5f5f7` | Apple-like gray background |
| Ink | `#1d1d1f` | Headings |
| Ink muted | `#6e6e73` | Body text |
| Border | `#d2d2d7` | Card borders |

## Rebuild Implementation (Current)

Applied in `app/globals.css` via Tailwind `@theme`:

| Token | CSS variable | Value |
|-------|--------------|-------|
| Primary | `--color-primary` | `#0993e5` |
| Primary light | `--color-primary-light` | `#0094ff` |
| Surface | `--color-surface` | `#f5f5f7` |
| Surface elevated | `--color-surface-elevated` | `#ffffff` |
| Ink | `--color-ink` | `#1d1d1f` |
| Ink muted | `--color-ink-muted` | `#6e6e73` |
| Ink subtle | `--color-ink-subtle` | `#86868b` |
| Border | `--color-border` | `#d2d2d7` |
| Footer | `--color-footer` | `#151e29` |

**Typography:** Inter via `next/font` (single family).

**Layout:** `container-narrow` (`max-w-6xl`), `section-padding` utility, `rounded-2xl` cards.

**Components:** No rotated project screenshots, no decorative blob overlays, sticky glass navigation header.

**Footer:** Dark `#151e29` background; primary-light accent on highlighted quote words (replaces yellow/light-blue).
