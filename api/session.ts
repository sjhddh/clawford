import type { VercelRequest, VercelResponse } from "@vercel/node";
import { lookupByUsername, getTranscript } from "./_lib/blob.js";
import {
  normalizeUsername,
  verifyPassword,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "./_lib/identity.js";
import { applyRateLimit, canLogin, recordLoginFailure, clearLoginFailures, isAdmin } from "./_lib/security.js";
import { issueSession, setSessionCookie, clearSessionCookie, extractSession } from "./_lib/session.js";
import { createAuditContext } from "./_lib/telemetry.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "admission")) return;

  const audit = createAuditContext(req, "session");

  try {
    if (req.method === "POST") {
      return handleLogin(req, res, audit);
    }
    if (req.method === "GET") {
      return handleRestore(req, res, audit);
    }
    if (req.method === "DELETE") {
      return handleLogout(req, res, audit);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("session error:", err);
    return res.status(500).json({ error: "Internal server error. Please try again." });
  }
}

async function handleLogin(
  req: VercelRequest,
  res: VercelResponse,
  audit: ReturnType<typeof createAuditContext>,
) {
  const { username, password } = req.body ?? {};

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "username is required", code: "VALIDATION_ERROR" });
  }
  if (!password || typeof password !== "string") {
    return res.status(400).json({ error: "password is required", code: "VALIDATION_ERROR" });
  }
  if (username.length > MAX_USERNAME_LENGTH) {
    return res.status(400).json({ error: "username too long", code: "VALIDATION_ERROR" });
  }
  if (password.length < MIN_PASSWORD_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
    return res.status(400).json({ error: "invalid password length", code: "VALIDATION_ERROR" });
  }

  const normalized = normalizeUsername(username);
  const admin = isAdmin(req);

  if (!admin) {
    const loginCheck = await canLogin(normalized);
    if (!loginCheck.allowed) {
      return res.status(429).json({
        error: "Too many failed login attempts. Try again later.",
        code: "LOCKOUT",
        retryAfter: loginCheck.retryAfter,
      });
    }
  }

  const identity = await lookupByUsername(normalized);
  if (!identity) {
    return res.status(401).json({ error: "Invalid credentials", code: "INVALID_CREDENTIALS" });
  }
  if (!verifyPassword(password, identity.salt, identity.passwordHash)) {
    await recordLoginFailure(normalized);
    audit.log({ action: "session-login", targetUid: identity.uid, status: "rejected", statusCode: 401 });
    return res.status(401).json({ error: "Invalid credentials", code: "INVALID_CREDENTIALS" });
  }

  await clearLoginFailures(normalized);
  const { token } = issueSession(identity.uid, normalized);
  setSessionCookie(res, token);

  const transcript = await getTranscript(identity.uid);
  audit.log({ action: "session-login", actorUid: identity.uid, status: "success", statusCode: 200 });
  return res.status(200).json({
    token,
    uid: identity.uid,
    displayName: identity.displayName,
    house: transcript?.house ?? null,
    transcript,
  });
}

async function handleRestore(
  req: VercelRequest,
  res: VercelResponse,
  audit: ReturnType<typeof createAuditContext>,
) {
  const session = extractSession(req);
  if (!session) {
    return res.status(401).json({ error: "No valid session", code: "NO_SESSION" });
  }

  const transcript = await getTranscript(session.uid);
  if (!transcript) {
    clearSessionCookie(res);
    return res.status(404).json({ error: "Transcript not found — session invalidated", code: "SESSION_INVALID" });
  }

  const identity = await lookupByUsername(session.username);
  audit.log({ action: "session-restore", actorUid: session.uid, status: "success", statusCode: 200 });
  return res.status(200).json({
    uid: session.uid,
    displayName: identity?.displayName ?? transcript.displayName,
    house: transcript.house,
    transcript,
  });
}

async function handleLogout(
  _req: VercelRequest,
  res: VercelResponse,
  audit: ReturnType<typeof createAuditContext>,
) {
  clearSessionCookie(res);
  audit.log({ action: "session-logout", status: "success", statusCode: 200 });
  return res.status(200).json({ ok: true });
}
