const WINDOW_SECONDS = Number(process.env.RATE_LIMIT_WINDOW || 900);
const MAX_HITS = Number(process.env.RATE_LIMIT_MAX || 8);

if (!global.__snowbirdRateStore) {
  global.__snowbirdRateStore = new Map();
}

const store = global.__snowbirdRateStore;

export function checkRateLimit(key) {
  const now = Date.now();
  const windowMs = WINDOW_SECONDS * 1000;
  const entry = store.get(key);

  if (!entry || now - entry.start > windowMs) {
    store.set(key, { start: now, count: 1 });
    return { allowed: true, remaining: MAX_HITS - 1, resetIn: WINDOW_SECONDS };
  }

  entry.count += 1;
  const allowed = entry.count <= MAX_HITS;
  const resetIn = Math.ceil((windowMs - (now - entry.start)) / 1000);
  return { allowed, remaining: Math.max(0, MAX_HITS - entry.count), resetIn };
}

export function getClientIp(request) {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}
