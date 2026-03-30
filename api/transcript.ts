import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  calculateActiveSkillCredits,
  lookupByUsername,
  registerIdentity,
  getTranscript,
  listSkillCredentials,
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

  const persistedSkills = await listSkillCredentials(uid);
  if (persistedSkills.length > 0) {
    transcript.skillExamResults = persistedSkills;
    transcript.totalSkillCredits = calculateActiveSkillCredits(persistedSkills);
  }

  if (auth && auth.uid === uid) {
    audit.log({ action: "read-full", actorUid: uid, targetUid: uid, status: "success", statusCode: 200 });
    return res.status(200).json(transcript);
  }

  const examAttempts = transcript.foundationsStatus.assessmentResults.filter(
    (r) => r.assessmentId.startsWith("exam-"),
  );
  const latestExam = examAttempts.at(-1) ?? null;
  const bestExam = examAttempts.reduce<typeof latestExam>((best, curr) => {
    if (!best) return curr;
    return curr.score > best.score ? curr : best;
  }, null);

  const enrollments = transcript.enrollments ?? [];
  const electiveTotalCredits = enrollments.reduce((s, e) => s + e.totalCreditsEarned, 0);
  const totalSkillCredits = transcript.totalSkillCredits ?? 0;
  const activeSkillCount = (transcript.skillExamResults ?? []).filter(
    (item) => item.verificationClass === "official-clawhub" && item.credentialStatus === "active" && item.decision === "pass",
  ).length;

  audit.log({ action: "read-public", targetUid: uid, status: "success", statusCode: 200 });
  return res.status(200).json({
    uid: transcript.uid,
    displayName: transcript.displayName,
    house: transcript.house,
    currentState: transcript.currentState,
    totalCredits: transcript.foundationsStatus.totalCreditsEarned + electiveTotalCredits,
    completedModules: transcript.foundationsStatus.completedModules.length,
    examPassed: transcript.foundationsStatus.status === "completed",
    examAttempts: examAttempts.length,
    bestExamScore: bestExam?.score ?? null,
    latestExamScore: latestExam?.score ?? null,
    examMaxScore: latestExam?.maxScore ?? bestExam?.maxScore ?? null,
    lastExamAt: latestExam?.timestamp ?? null,
    credentials: transcript.credentials.length,
    enrolledAt: transcript.foundationsStatus.enrolledAt,
    electives: enrollments.map((e) => {
      const attempts = e.assessmentResults.filter((r) => r.assessmentId.startsWith("exam-"));
      const best = attempts.reduce<(typeof attempts)[number] | null>(
        (b, c) => (!b || c.score > b.score ? c : b), null,
      );
      return {
        courseId: e.courseId,
        status: e.status,
        creditsEarned: e.totalCreditsEarned,
        completedModules: e.completedModules.length,
        enrolledAt: e.enrolledAt,
        completedAt: e.completedAt,
        bestExamScore: best?.score ?? null,
        examMaxScore: best?.maxScore ?? null,
      };
    }),
    electiveTotalCredits,
    electiveCompleted: enrollments.filter((e) => e.status === "completed").length,
    activeSkillCount,
    totalSkillCredits,
    lastUpdated: transcript.lastUpdated,
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
