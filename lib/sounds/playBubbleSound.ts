import { prefersReducedMotion } from "@/lib/animations/gsap";

let audioContext: AudioContext | null = null;
let hasUnlocked = false;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
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

function unlockAudio(): void {
  if (hasUnlocked) return;
  hasUnlocked = true;

  const ctx = getAudioContext();
  void ctx.resume().then(() => playChime(ctx));
}

function listenForUnlock(): void {
  if (hasUnlocked || typeof document === "undefined") return;

  const onInteract = () => {
    document.removeEventListener("pointerdown", onInteract);
    document.removeEventListener("keydown", onInteract);
    unlockAudio();
  };

  document.addEventListener("pointerdown", onInteract, { once: true });
  document.addEventListener("keydown", onInteract, { once: true });
}

export function playBubbleSound(): void {
  if (prefersReducedMotion() || typeof window === "undefined") return;

  try {
    const ctx = getAudioContext();

    if (ctx.state === "suspended") {
      listenForUnlock();
      return;
    }

    playChime(ctx);
  } catch {
    // Audio may be unavailable in some environments.
  }
}
