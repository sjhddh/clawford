import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByUsername,
  registerIdentity,
  getTranscript,
  saveTranscript,
  createFreshTranscript,
} from "./_lib/blob.js";
import type { IdentityRecord } from "./_lib/blob.js";
import {
  normalizeUsername,
  isValidUsername,
  generateUid,
  generateSalt,
  hashPassword,
  verifyPassword,
  sortIntoHouse,
  MAX_USERNAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_DISPLAY_NAME_LENGTH,
} from "./_lib/identity.js";
import {
  applyRateLimit,
  isAdmin,
  getClientIp,
  canRegister,
  recordRegistration,
  canLogin,
  recordLoginFailure,
  clearLoginFailures,
} from "./_lib/security.js";
import { issueSession, setSessionCookie } from "./_lib/session.js";
import { createAuditContext } from "./_lib/telemetry.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!applyRateLimit(req, res, "admission")) return;

  const audit = createAuditContext(req, "admission");

  try {
    const { username, password, displayName } = req.body ?? {};

    if (!username || typeof username !== "string" || !username.trim()) {
      return res.status(400).json({ error: "username is required", code: "VALIDATION_ERROR" });
    }
    if (!password || typeof password !== "string") {
      return res.status(400).json({ error: "password is required", code: "VALIDATION_ERROR" });
    }
    if (username.length > MAX_USERNAME_LENGTH) {
      return res.status(400).json({ error: "username too long", code: "VALIDATION_ERROR" });
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      return res
        .status(400)
        .json({ error: `password must be at least ${MIN_PASSWORD_LENGTH} characters`, code: "VALIDATION_ERROR" });
    }
    if (password.length > MAX_PASSWORD_LENGTH) {
      return res.status(400).json({ error: "password too long", code: "VALIDATION_ERROR" });
    }
    if (
      displayName &&
      typeof displayName === "string" &&
      displayName.length > MAX_DISPLAY_NAME_LENGTH
    ) {
      return res.status(400).json({ error: "displayName too long", code: "VALIDATION_ERROR" });
    }

    const normalized = normalizeUsername(username);
    if (!normalized || !isValidUsername(normalized)) {
      return res
        .status(400)
        .json({ error: "username must contain only letters, numbers, hyphens, and underscores", code: "VALIDATION_ERROR" });
    }

    const admin = isAdmin(req);
    const loginResponse = async (record: IdentityRecord) => {
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

      if (!verifyPassword(password, record.salt, record.passwordHash)) {
        await recordLoginFailure(normalized);
        audit.log({ action: "login", targetUid: record.uid, status: "rejected", statusCode: 401, detail: "bad password" });
        return res.status(401).json({ error: "Invalid credentials", code: "INVALID_CREDENTIALS" });
      }

      await clearLoginFailures(normalized);
      record.lastSeen = new Date().toISOString();
      await registerIdentity(normalized, record);

      const transcript = await getTranscript(record.uid);
      const { token } = issueSession(record.uid, normalized);
      setSessionCookie(res, token);
      audit.log({ action: "login", actorUid: record.uid, status: "success", statusCode: 200 });
      return res.status(200).json({
        uid: record.uid,
        displayName: record.displayName,
        house: transcript?.house ?? null,
        transcript,
        token,
        isNew: false,
      });
    };

    const existing = await lookupByUsername(normalized);

    // ---- Login path ----
    if (existing) {
      return loginResponse(existing);
    }

    // ---- Registration path ----
    const ip = getClientIp(req);
    if (!admin) {
      const regCheck = await canRegister(ip);
      if (!regCheck.allowed) {
        // Blob index can be eventually consistent right after registration.
        // Re-check identity before returning cooldown to avoid false negatives.
        const maybeExisting = await lookupByUsername(normalized);
        if (maybeExisting) {
          return loginResponse(maybeExisting);
        }
        return res.status(429).json({
          error: "Registration cooldown active. One registration per IP every 7 days.",
          code: "COOLDOWN",
          retryAfter: regCheck.retryAfter,
        });
      }
    }

    const uid = generateUid(normalized);
    const house = sortIntoHouse(uid);
    const salt = generateSalt();
    const pwHash = hashPassword(password, salt);
    const name =
      displayName && typeof displayName === "string" && displayName.trim()
        ? displayName.trim()
        : normalized;
    const now = new Date().toISOString();

    const record: IdentityRecord = {
      uid,
      username: normalized,
      passwordHash: pwHash,
      salt,
      displayName: name,
      role: "student",
      createdAt: now,
      lastSeen: now,
    };

    await registerIdentity(normalized, record);
    await recordRegistration(ip);

    const transcript = createFreshTranscript(uid, name, house);
    await saveTranscript(transcript);

    const { token } = issueSession(uid, normalized);
    setSessionCookie(res, token);
    audit.log({ action: "register", actorUid: uid, status: "success", statusCode: 201 });
    return res.status(201).json({
      uid,
      displayName: name,
      house,
      transcript,
      token,
      isNew: true,
    });
  } catch (err) {
    console.error("admission error:", err);
    const detail = isAdmin(req) && err instanceof Error ? err.message : undefined;
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again.", detail });
  }
}
