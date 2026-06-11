# Animation Notes

Reference for animation behavior in the old portfolio and recommendations for the rebuild.

## Animation Libraries

| Library | Version | Usage |
|---------|---------|-------|
| GSAP | 3.2.6 | Timelines, text plugin, stagger, transforms |
| nuxt-gsap-module | 1.7.2 | `$gsap` injection, SplitText/text extra plugin |
| ScrollMagic | 2.0.7 (CDN) | Scroll-triggered scenes binding GSAP tweens |
| vue-scrollto | 2.18.1 | Smooth scroll to `#hireme` (2000ms) |
| CSS keyframes | — | Pulse button, rotate blob, updownblob |

**Not used:** Framer Motion, Lenis, Anime.js, GSAP ScrollTrigger

**Dead code:** `plugins/scrollmagic.js` registers vue-scrollmagic but ScrollMagic is loaded via CDN script tags instead.

## Animation Behavior by Section

### Hero (`Header.vue`)

**On load (auto-playing, loops):**

1. **Name text timeline** (`textTimeline`):
   - After 2s delay, set `#im-anim` text to "I'm"
   - Animate `#me-anim` text to "TopzDev" (2s, Power4.easeOut)
   - Then animate to "Christian Lugod" (2s)

2. **Job title carousel** (`timeline`, restarts on complete):
   - Cycles through `.title-job-1` … `.title-job-5`
   - Each: set hidden → show (y: -100→0, fade in, 2s) → fade out (y: 50, 0.5s)
   - Uses 3D perspective/skew transforms

**On scroll (ScrollMagic, trigger `#intro`, duration 100%):**

- `#name-anim`: fade to 50% opacity, move up 40% over 5s
- `#title-anim`: same parallax fade (10s, overlapping)
- `#btn-anim`: move up, fade to 50% opacity (15s)

**CSS:** Hero CTA has `.pulse` infinite box-shadow animation.

### Introduction (`IntroductionSection.vue`)

- Custom `splitText()` wraps words into line-based `<span>` elements
- GSAP `from` on each span: y: 20, autoAlpha: 0, stagger: 0.4, duration: 3, Elastic.easeOut
- ScrollMagic scene on `#intro`, triggerHook onEnter, duration 50%, offset 100, no reverse

### Stacks (`StacksList.vue`)

- ScrollMagic scene on `#stacks`, triggerHook: 1, offset: 300
- `.stack-anim` rows: y: -400 over 2s, stagger 0.3, slow ease
- `.stack-offset-anim` rows: y: 128 (opposite direction), overlapping
- Blank cards fade to 50% opacity
- Rows have CSS `top` offsets (200px / -258px) for initial staggered layout

### Projects (`ProjectCard.vue`)

- Per-card ScrollMagic scene, triggerHook: 1, duration 200%, offset -80
- Entrance: from x ±30%, rotate ±20deg, y 25%, autoAlpha 0 → visible over 5s
- Left column cards animate from left; right column (`isRight`) from right

### Testimony (`TestimonyCard.vue`)

- Image slides from x: -100% (1.5s)
- Quote text from x: 100 (1s, overlapping)
- Author block from y: -50 (1s)
- Trigger: onEnter, offset 200

### Contact Form (`ProposalForm.vue`)

- Heading fades up first
- Inputs stagger in from below (y: -30, autoAlpha 0→1, stagger 0.5, Elastic.easeOut)
- File attach area and submit button fade up sequentially
- Inputs start with `opacity: 0` in scoped CSS

### Footer (`FooterList.vue`)

- Title fades in (opacity 0→1)
- List items stagger up (y: -30, autoAlpha 0→1, stagger 0.2, Back.easeOut)
- Trigger: `.list--footer` onEnter, no reverse

### CSS-only animations (`_animation.scss`, `_section.scss`, `_footer.scss`)

| Class / element | Animation |
|-----------------|-----------|
| `.pulse` | Scale + expanding box-shadow ring, 2s infinite |
| `.rotate` | 360deg rotation, 10s infinite (footer blue ellipse) |
| `@keyframes updownblob` | Floating blob in proposal section, 10s infinite |
| Footer `::after` | Red gradient ellipse (static) |
| Footer `::before` | Blue gradient ellipse with rotate |

## GSAP Timeline Summary

| Component | Easing | Duration range | Scroll-linked |
|-----------|--------|----------------|---------------|
| Header text | Power4.easeOut | 0–2s per step | Partial (parallax) |
| Header titles | Power4.easeOut | 0.5–2s per cycle | No (auto-loop) |
| Intro spans | Elastic.easeOut | 3s + 0.4s stagger | Yes |
| Stacks | slow(0.7, 0.7) | 2s + stagger | Yes |
| Projects | Power4.easeOut | 5s | Yes |
| Testimony | Power4.easeOut | 1–1.5s | Yes |
| Form | Elastic.easeOut | 0.5–1.5s | Yes |
| Footer | Back.easeOut(1.7) | 1s + stagger | Yes |

## Text Reveal Behavior

- **Hero:** GSAP TextPlugin (`text: { value: "..." }`) for typewriter-style name reveal
- **Intro:** Custom `splitText.js` groups words by line, then GSAP staggers each line's words upward with elastic ease
- No other text split/reveal patterns

## Hover Effects

| Element | Effect |
|---------|--------|
| Secondary button | Background tint, border color → primary, text → primary (300ms transition) |
| Icon button | Darker background, SVG fill → primary (300ms) |
| Footer links | Label → white, icon background → solid yellow (300ms) |
| Copyright link | Opacity 0.8 → 1 on hover |
| Stack cards | None (links only) |
| Project cards | None |

**No custom cursor effects** in the codebase.

## Smooth Scrolling

- **Library:** vue-scrollto
- **Usage:** Hero "Hire Me" → `#hireme`, duration 2000ms
- **Hash routing:** On mount, if `$route.hash` exists, scroll to it (2000ms)
- **No Lenis or native CSS scroll-behavior** configured

## Animation Issues to Improve

1. **No cleanup:** ScrollMagic scenes and GSAP timelines not killed on component destroy
2. **Multiple controllers:** Each component creates its own ScrollMagic.Controller (performance/memory)
3. **Long durations:** 5–15s tweens feel sluggish on modern sites
4. **Auto-looping hero:** Title carousel restarts forever — distracting, bad for a11y
5. **No reduced motion:** `prefers-reduced-motion` not checked anywhere
6. **ScrollMagic is deprecated:** Maintenance burden; GSAP ScrollTrigger is the modern replacement
7. **Hero parallax tied to `#intro`:** Can feel disconnected from scroll position
8. **Form inputs hidden by default:** FOUC risk if JS fails
9. **splitText DOM rewrite:** Fragile, not SSR-friendly
10. **Per-card project animations:** 5 separate ScrollMagic scenes for similar effect

## Suggested Rebuild Animation Approach

1. **Use GSAP ScrollTrigger** (or Framer Motion `whileInView`) with a single shared context
2. **Hero:** One-time entrance animation on load; static headline after reveal; respect reduced motion
3. **Sections:** Subtle fade-up + translateY(24px → 0), 0.6s, stagger children 0.08s
4. **Projects:** Simple opacity + y entrance; skip rotation/skew for cleaner Apple-like feel
5. **Optional:** Lenis for smooth scroll (lightweight, popular with GSAP)
6. **Hover:** CSS transitions only for buttons/links
7. **Page transitions:** None needed for one-page portfolio
8. **Loading:** Skeleton or fade-in for images; no loading GIF pulse on buttons

## Reduced Motion Considerations

Current portfolio: **zero support**.

Rebuild should:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
- Skip hero text cycling; show final text immediately
- Disable scroll-linked parallax
- Use `ScrollTrigger.matchMedia` or Framer `useReducedMotion`
- Keep functional scroll-to-section but with instant or short scroll
