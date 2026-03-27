import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByUsername,
  registerIdentity,
  getTranscript,
  updateTranscript,
} from "./_lib/blob.js";
import {
  isValidUid,
  normalizeUsername,
  MAX_USERNAME_LENGTH,
  MAX_DISPLAY_NAME_LENGTH,
} from "./_lib/identity.js";
import { applyRateLimit } from "./_lib/security.js";
import { authenticateRequest } from "./_lib/session.js";
import { createAuditContext } from "./_lib/telemetry.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (!applyRateLimit(req, res, "transcript")) return;

  const audit = createAuditContext(req, "transcript");

  try {
    if (req.method === "GET") {
      return handleGet(req, res, audit);
    }
    if (req.method === "PATCH") {
      return handlePatch(req, res, audit);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("transcript error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse, audit: ReturnType<typeof createAuditContext>) {
  const auth = await authenticateRequest(req);
  const uidQuery = req.query.uid as string | undefined;
  const usernameQuery = req.query.username as string | undefined;

  let uid = uidQuery;
  if (!uid && usernameQuery) {
    const normalized = normalizeUsername(usernameQuery);
    const identity = await lookupByUsername(normalized);
    uid = identity?.uid;
  }
  if (!uid && auth) {
    uid = auth.uid;
  }
  if (!uid) {
    return res.status(400).json({ error: "Provide uid, username, or authenticated session." });
  }
  if (!isValidUid(uid)) {
    return res.status(400).json({ error: "Invalid uid format" });
  }

  const transcript = await getTranscript(uid);
  if (!transcript) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  if (auth && auth.uid === uid) {
    audit.log({ action: "read-full", actorUid: uid, targetUid: uid, status: "success", statusCode: 200 });
    return res.status(200).json(transcript);
  }

  audit.log({ action: "read-public", targetUid: uid, status: "success", statusCode: 200 });
  return res.status(200).json({
    uid: transcript.uid,
    displayName: transcript.displayName,
    house: transcript.house,
    currentState: transcript.currentState,
    totalCredits: transcript.foundationsStatus.totalCreditsEarned,
    completedModules: transcript.foundationsStatus.completedModules.length,
    examPassed: transcript.foundationsStatus.status === "completed",
    credentials: transcript.credentials.length,
    enrolledAt: transcript.foundationsStatus.enrolledAt,
  });
}

async function handlePatch(req: VercelRequest, res: VercelResponse, audit: ReturnType<typeof createAuditContext>) {
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Authentication required", code: "AUTH_REQUIRED" });
  }

  const { displayName } = req.body ?? {};
  if (!displayName || typeof displayName !== "string" || !displayName.trim()) {
    return res.status(400).json({ error: "displayName is required" });
  }
  if (displayName.length > MAX_DISPLAY_NAME_LENGTH) {
    return res.status(400).json({ error: "displayName too long" });
  }

  const identity = await lookupByUsername(auth.username);
  if (!identity) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const trimmedName = displayName.trim();
  const transcript = await updateTranscript(identity.uid, (current) => {
    current.displayName = trimmedName;
    return current;
  });
  if (!transcript) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  identity.displayName = trimmedName;

  await registerIdentity(auth.username, identity);

  audit.log({ action: "update-name", actorUid: identity.uid, status: "success", statusCode: 200 });
  return res.status(200).json({ ok: true, transcript });
}
