import { createHmac, randomBytes } from "crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { lookupByUsername } from "./blob.js";
import { normalizeUsername, verifyPassword } from "./identity.js";

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;
const COOKIE_NAME = "clawford_session";

export interface SessionPayload {
  uid: string;
  username: string;
  iat: number;
  exp: number;
}

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return "fallback-secret-for-development-only";
  return secret;
}

function base64url(buf: Buffer): string {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64urlDecode(str: string): Buffer {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(padded, "base64");
}

export function signSession(payload: SessionPayload): string {
  const header = base64url(Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })));
  const body = base64url(Buffer.from(JSON.stringify(payload)));
  const data = `${header}.${body}`;
  const sig = base64url(createHmac("sha256", getSecret()).update(data).digest());
  return `${data}.${sig}`;
}

export function verifySession(token: string): SessionPayload | null {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const data = `${parts[0]}.${parts[1]}`;
    const expected = base64url(createHmac("sha256", getSecret()).update(data).digest());
    if (expected !== parts[2]) return null;
    const payload = JSON.parse(base64urlDecode(parts[1]).toString("utf8")) as SessionPayload;
    if (Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export function issueSession(uid: string, username: string): { token: string; payload: SessionPayload } {
  const now = Date.now();
  const payload: SessionPayload = { uid, username, iat: now, exp: now + SESSION_DURATION_MS };
  return { token: signSession(payload), payload };
}

export function setSessionCookie(res: VercelResponse, token: string): void {
  const maxAge = Math.floor(SESSION_DURATION_MS / 1000);
  const secure = process.env.NODE_ENV === "production" || process.env.VERCEL === "1";
  const parts = [
    `${COOKIE_NAME}=${token}`,
    `Path=/`,
    `HttpOnly`,
    `SameSite=Lax`,
    `Max-Age=${maxAge}`,
  ];
  if (secure) parts.push("Secure");
  res.setHeader("Set-Cookie", parts.join("; "));
}

export function clearSessionCookie(res: VercelResponse): void {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

function parseCookies(req: VercelRequest): Record<string, string> {
  const raw = req.headers.cookie;
  if (!raw) return {};
  const result: Record<string, string> = {};
  for (const pair of raw.split(";")) {
    const idx = pair.indexOf("=");
    if (idx < 0) continue;
    result[pair.slice(0, idx).trim()] = pair.slice(idx + 1).trim();
  }
  return result;
}

export function extractSession(req: VercelRequest): SessionPayload | null {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith("Bearer ")) {
    const token = auth.slice(7).trim();
    const session = verifySession(token);
    if (session) return session;
  }

  const agentKey = req.headers["x-agent-key"];
  if (typeof agentKey === "string" && agentKey) {
    const session = verifySession(agentKey);
    if (session) return session;
  }

  const cookies = parseCookies(req);
  const cookieToken = cookies[COOKIE_NAME];
  if (cookieToken) {
    return verifySession(cookieToken);
  }

  return null;
}

export async function authenticateRequest(
  req: VercelRequest,
): Promise<{ uid: string; username: string; method: "session" | "password" } | null> {
  const session = extractSession(req);
  if (session) {
    return { uid: session.uid, username: session.username, method: "session" };
  }

  const body = req.body ?? {};
  const username = body.username;
  const password = body.password;
  if (typeof username === "string" && typeof password === "string" && username && password) {
    const normalized = normalizeUsername(username);
    const identity = await lookupByUsername(normalized);
    if (identity && verifyPassword(password, identity.salt, identity.passwordHash)) {
      return { uid: identity.uid, username: normalized, method: "password" };
    }
  }

  return null;
}
