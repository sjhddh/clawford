import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put, list } from "@vercel/blob";
import { createHash } from "crypto";

const RATE_LIMITS_PATH = "clawford/rate-limits.json";

const rateLimitLocks = new Map<string, Promise<void>>();

async function withRateLock<T>(fn: () => Promise<T>): Promise<T> {
  const key = RATE_LIMITS_PATH;
  const prev = rateLimitLocks.get(key) ?? Promise.resolve();
  let release: () => void;
  const next = new Promise<void>((resolve) => {
    release = resolve;
  });
  rateLimitLocks.set(key, next);
  await prev;
  try {
    return await fn();
  } finally {
    release!();
    if (rateLimitLocks.get(key) === next) rateLimitLocks.delete(key);
  }
}
const REGISTRATION_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const LOGIN_LOCKOUT_WINDOW_MS = 10 * 60 * 1000;
const MAX_LOGIN_FAILURES = 5;
const GLOBAL_RATE_WINDOW_MS = 60 * 1000;
const GLOBAL_RATE_MAX = 60;
const RESIT_DAILY_LIMIT = 1;

interface RegistrationRecord {
  count: number;
  lastAt: string;
}

interface LoginFailureRecord {
  count: number;
  firstAt: string;
}

interface RateLimitRegistry {
  registrations: Record<string, RegistrationRecord>;
  loginFailures: Record<string, LoginFailureRecord>;
  examResits: Record<string, { date: string; count: number }>;
}

// ---- In-memory rate limit (resets on cold start) ----

interface RateBucket {
  count: number;
  windowStart: number;
}

const globalHits = new Map<string, RateBucket>();
const routeHits = new Map<string, Map<string, RateBucket>>();

interface RouteRateConfig {
  windowMs: number;
  max: number;
}

function envInt(name: string, fallback: number): number {
  const v = process.env[name];
  if (v == null) return fallback;
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : fallback;
}

const ROUTE_LIMITS: Record<string, RouteRateConfig> = {
  "grade-exam": { windowMs: 60_000, max: envInt("RATE_LIMIT_GRADE_EXAM", 10) },
  health: { windowMs: 60_000, max: envInt("RATE_LIMIT_HEALTH", 30) },
  admission: { windowMs: 60_000, max: envInt("RATE_LIMIT_ADMISSION", 20) },
  progress: { windowMs: 60_000, max: envInt("RATE_LIMIT_PROGRESS", 30) },
  transcript: { windowMs: 60_000, max: envInt("RATE_LIMIT_TRANSCRIPT", 30) },
  students: { windowMs: 60_000, max: envInt("RATE_LIMIT_STUDENTS", 30) },
  courses: { windowMs: 60_000, max: envInt("RATE_LIMIT_COURSES", 60) },
  "course-graph": { windowMs: 60_000, max: envInt("RATE_LIMIT_COURSE_GRAPH", 60) },
  assessments: { windowMs: 60_000, max: envInt("RATE_LIMIT_ASSESSMENTS", 20) },
};

export function checkGlobalRate(ip: string): boolean {
  const now = Date.now();
  const entry = globalHits.get(ip);
  if (!entry || now - entry.windowStart > GLOBAL_RATE_WINDOW_MS) {
    globalHits.set(ip, { count: 1, windowStart: now });
    return true;
  }
  entry.count++;
  return entry.count <= GLOBAL_RATE_MAX;
}

export function checkRouteRate(ip: string, route: string): boolean {
  const config = ROUTE_LIMITS[route];
  if (!config) return true;
  const now = Date.now();
  let ipMap = routeHits.get(route);
  if (!ipMap) {
    ipMap = new Map();
    routeHits.set(route, ipMap);
  }
  const entry = ipMap.get(ip);
  if (!entry || now - entry.windowStart > config.windowMs) {
    ipMap.set(ip, { count: 1, windowStart: now });
    return true;
  }
  entry.count++;
  return entry.count <= config.max;
}

// ---- IP extraction ----

export function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string") return realIp.trim();
  return "unknown";
}

// ---- Blob-backed rate limit registry ----

async function readRateLimits(): Promise<RateLimitRegistry> {
  try {
    const { blobs } = await list({ prefix: RATE_LIMITS_PATH, limit: 1 });
    const blob = blobs.find((b) => b.pathname === RATE_LIMITS_PATH);
    if (!blob) return { registrations: {}, loginFailures: {}, examResits: {} };
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    const res = await fetch(blob.url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) return { registrations: {}, loginFailures: {}, examResits: {} };
    const data = (await res.json()) as Partial<RateLimitRegistry>;
    return {
      registrations: data.registrations ?? {},
      loginFailures: data.loginFailures ?? {},
      examResits: data.examResits ?? {},
    };
  } catch {
    return { registrations: {}, loginFailures: {}, examResits: {} };
  }
}

async function writeRateLimits(data: RateLimitRegistry): Promise<void> {
  await put(RATE_LIMITS_PATH, JSON.stringify(data), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}

// ---- Registration cooldown (7 days per device fingerprint) ----

export function registrationFingerprint(req: VercelRequest): string {
  const ip = getClientIp(req);
  const deviceId = req.headers["x-device-id"];
  const discriminator =
    typeof deviceId === "string" && deviceId.trim()
      ? deviceId.trim()
      : (req.headers["user-agent"] ?? "unknown");
  return createHash("sha256").update(`${ip}:${discriminator}`).digest("hex").slice(0, 24);
}

export async function canRegister(
  fingerprintKey: string,
): Promise<{ allowed: boolean; retryAfter?: string }> {
  const reg = await readRateLimits();
  const record = reg.registrations[fingerprintKey];
  if (!record) return { allowed: true };

  const elapsed = Date.now() - new Date(record.lastAt).getTime();
  if (elapsed < REGISTRATION_COOLDOWN_MS) {
    const retryAt = new Date(
      new Date(record.lastAt).getTime() + REGISTRATION_COOLDOWN_MS,
    );
    return { allowed: false, retryAfter: retryAt.toISOString() };
  }
  return { allowed: true };
}

export async function recordRegistration(fingerprintKey: string): Promise<void> {
  await withRateLock(async () => {
    const reg = await readRateLimits();
    const existing = reg.registrations[fingerprintKey];
    reg.registrations[fingerprintKey] = {
      count: (existing?.count ?? 0) + 1,
      lastAt: new Date().toISOString(),
    };
    await writeRateLimits(reg);
  });
}

// ---- Login failure lockout (5 attempts per 10 min) ----

export async function canLogin(
  username: string,
): Promise<{ allowed: boolean; retryAfter?: string }> {
  return withRateLock(async () => {
    const reg = await readRateLimits();
    const record = reg.loginFailures[username];
    if (!record) return { allowed: true };

    const elapsed = Date.now() - new Date(record.firstAt).getTime();
    if (elapsed > LOGIN_LOCKOUT_WINDOW_MS) {
      delete reg.loginFailures[username];
      await writeRateLimits(reg);
      return { allowed: true };
    }
    if (record.count >= MAX_LOGIN_FAILURES) {
      const retryAt = new Date(
        new Date(record.firstAt).getTime() + LOGIN_LOCKOUT_WINDOW_MS,
      );
      return { allowed: false, retryAfter: retryAt.toISOString() };
    }
    return { allowed: true };
  });
}

export async function recordLoginFailure(username: string): Promise<void> {
  await withRateLock(async () => {
    const reg = await readRateLimits();
    const existing = reg.loginFailures[username];
    if (!existing) {
      reg.loginFailures[username] = {
        count: 1,
        firstAt: new Date().toISOString(),
      };
    } else {
      existing.count++;
    }
    await writeRateLimits(reg);
  });
}

export async function clearLoginFailures(username: string): Promise<void> {
  await withRateLock(async () => {
    const reg = await readRateLimits();
    if (reg.loginFailures[username]) {
      delete reg.loginFailures[username];
      await writeRateLimits(reg);
    }
  });
}

// ---- Daily resit policy (1 resit per UID per UTC day) ----

function utcDateKey(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

function nextUtcMidnightIso(now = new Date()): string {
  const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  return next.toISOString();
}

export async function canUseDailyResit(uid: string): Promise<{ allowed: boolean; retryAfter?: string; used?: number }> {
  const reg = await readRateLimits();
  const key = uid.trim();
  const today = utcDateKey();
  const record = reg.examResits[key];

  if (!record || record.date !== today) {
    return { allowed: true, used: 0 };
  }

  if (record.count >= RESIT_DAILY_LIMIT) {
    return {
      allowed: false,
      retryAfter: nextUtcMidnightIso(),
      used: record.count,
    };
  }

  return { allowed: true, used: record.count };
}

export async function consumeDailyResit(
  uid: string,
): Promise<{ allowed: boolean; retryAfter?: string; used: number; date: string }> {
  return withRateLock(async () => {
    const reg = await readRateLimits();
    const key = uid.trim();
    const today = utcDateKey();
    const existing = reg.examResits[key];

    if (!existing || existing.date !== today) {
      reg.examResits[key] = { date: today, count: 1 };
      await writeRateLimits(reg);
      return { allowed: true, used: 1, date: today };
    }

    if (existing.count >= RESIT_DAILY_LIMIT) {
      return {
        allowed: false,
        retryAfter: nextUtcMidnightIso(),
        used: existing.count,
        date: today,
      };
    }

    reg.examResits[key] = { date: today, count: existing.count + 1 };
    await writeRateLimits(reg);
    return { allowed: true, used: reg.examResits[key].count, date: today };
  });
}

export async function recordDailyResit(uid: string): Promise<{ used: number; date: string }> {
  return withRateLock(async () => {
    const reg = await readRateLimits();
    const key = uid.trim();
    const today = utcDateKey();
    const existing = reg.examResits[key];

    if (!existing || existing.date !== today) {
      reg.examResits[key] = { date: today, count: 1 };
    } else {
      reg.examResits[key] = { date: today, count: existing.count + 1 };
    }

    await writeRateLimits(reg);
    return { used: reg.examResits[key].count, date: today };
  });
}

// ---- Admin bypass ----

export function getAdminCode(req: VercelRequest): string | null {
  const headerCode = req.headers["x-admin-code"];
  if (typeof headerCode === "string" && headerCode.trim()) return headerCode.trim();

  const bodyCode = req.body?.adminCode;
  if (typeof bodyCode === "string" && bodyCode.trim()) return bodyCode.trim();

  return null;
}

export function isAdmin(req: VercelRequest): boolean {
  const code = getAdminCode(req);
  const secret = process.env.ADMIN_CODE;
  return !!secret && typeof code === "string" && code === secret;
}

// ---- Global rate limit middleware helper ----

export function applyRateLimit(
  req: VercelRequest,
  res: VercelResponse,
  route?: string,
): boolean {
  if (isAdmin(req)) return true;
  const ip = getClientIp(req);
  if (!checkGlobalRate(ip)) {
    res.status(429).json({ error: "Too many requests. Please slow down.", code: "RATE_LIMIT" });
    return false;
  }
  if (route && !checkRouteRate(ip, route)) {
    res.status(429).json({ error: "Too many requests to this endpoint. Please slow down.", code: "ROUTE_RATE_LIMIT" });
    return false;
  }
  return true;
}
