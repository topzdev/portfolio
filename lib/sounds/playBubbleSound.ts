import { prefersReducedMotion } from "@/lib/animations/gsap";

type WindowWithWebkitAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

let audioContext: AudioContext | null = null;
let pendingPlay = false;
let unlockAttached = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  if (!audioContext) {
    const Ctor =
      window.AudioContext ?? (window as WindowWithWebkitAudio).webkitAudioContext;
    if (!Ctor) return null;
    audioContext = new Ctor();
  }

  return audioContext;
}

function playChime(ctx: AudioContext): void {
  const now = ctx.currentTime;
  const gain = ctx.createGain();
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  const tone = ctx.createOscillator();
  tone.type = "sine";
  tone.frequency.setValueAtTime(740, now);
  tone.frequency.exponentialRampToValueAtTime(980, now + 0.08);
  tone.connect(gain);
  tone.start(now);
  tone.stop(now + 0.35);

  const tone2 = ctx.createOscillator();
  tone2.type = "triangle";
  tone2.frequency.setValueAtTime(988, now + 0.06);
  tone2.connect(gain);
  tone2.start(now + 0.06);
  tone2.stop(now + 0.28);
}

function flushPendingPlay(ctx: AudioContext): void {
  if (!pendingPlay) return;
  pendingPlay = false;
  playChime(ctx);
}

function attachUnlockListener(): void {
  if (unlockAttached || typeof document === "undefined") return;
  unlockAttached = true;

  const onInteract = () => {
    document.removeEventListener("pointerdown", onInteract);
    document.removeEventListener("keydown", onInteract);
    document.removeEventListener("touchstart", onInteract);
    unlockAttached = false;

    const ctx = getAudioContext();
    if (!ctx) return;

    void ctx.resume().then(() => flushPendingPlay(ctx));
  };

  document.addEventListener("pointerdown", onInteract);
  document.addEventListener("keydown", onInteract);
  document.addEventListener("touchstart", onInteract);
}

/**
 * Attach the audio-unlock listener early (e.g. on mount) so the FIRST user
 * gesture resumes the AudioContext. Without this, an interaction that happens
 * before the bubble appears is wasted and the chime is delayed until the next one.
 */
export function primeBubbleSound(): void {
  if (prefersReducedMotion() || typeof window === "undefined") return;

  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    attachUnlockListener();
  }
}

export function playBubbleSound(): void {
  if (prefersReducedMotion() || typeof window === "undefined") return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === "running") {
      playChime(ctx);
      return;
    }

    pendingPlay = true;
    void ctx.resume().then(() => {
      if (ctx.state === "running") {
        flushPendingPlay(ctx);
      } else {
        attachUnlockListener();
      }
    });
  } catch {
    // Audio may be unavailable in some environments.
  }
}
