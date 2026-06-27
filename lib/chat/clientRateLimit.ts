export const CHAT_CLIENT_COOLDOWN_MS = 2500;
export const CHAT_CLIENT_MAX_PER_MINUTE = 8;

export type ClientRateLimitResult = {
  allowed: boolean;
  retryAfterMs?: number;
  message?: string;
};

export function checkClientRateLimit(
  lastSentAt: number,
  recentTimestamps: number[],
): ClientRateLimitResult {
  const now = Date.now();
  const elapsed = now - lastSentAt;

  if (elapsed < CHAT_CLIENT_COOLDOWN_MS) {
    return {
      allowed: false,
      retryAfterMs: CHAT_CLIENT_COOLDOWN_MS - elapsed,
      message: "Please wait a moment before sending another message.",
    };
  }

  const withinWindow = recentTimestamps.filter(
    (timestamp) => now - timestamp < 60_000,
  );

  if (withinWindow.length >= CHAT_CLIENT_MAX_PER_MINUTE) {
    return {
      allowed: false,
      retryAfterMs: 60_000 - (now - withinWindow[0]),
      message: "You're sending messages too quickly. Please wait a minute.",
    };
  }

  return { allowed: true };
}
