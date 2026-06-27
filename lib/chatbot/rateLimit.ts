const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;
const MIN_INTERVAL_MS = 1500;

type RateLimitEntry = {
  timestamps: number[];
  lastRequestAt: number;
};

const store = new Map<string, RateLimitEntry>();

export type ServerRateLimitResult = {
  allowed: boolean;
  retryAfterMs?: number;
  message?: string;
};

export function checkServerRateLimit(clientId: string): ServerRateLimitResult {
  const now = Date.now();
  const entry = store.get(clientId) ?? { timestamps: [], lastRequestAt: 0 };

  if (now - entry.lastRequestAt < MIN_INTERVAL_MS) {
    return {
      allowed: false,
      retryAfterMs: MIN_INTERVAL_MS - (now - entry.lastRequestAt),
      message: "Please wait before sending another message.",
    };
  }

  const recent = entry.timestamps.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterMs: WINDOW_MS - (now - recent[0]),
      message: "Too many requests. Please try again in a minute.",
    };
  }

  recent.push(now);
  store.set(clientId, { timestamps: recent, lastRequestAt: now });

  if (store.size > 500) {
    for (const [key, value] of store) {
      const active = value.timestamps.some(
        (timestamp) => now - timestamp < WINDOW_MS,
      );
      if (!active) store.delete(key);
    }
  }

  return { allowed: true };
}

export function getClientIdFromRequest(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}
