import type { VercelRequest, VercelResponse } from "@vercel/node";
import { lookupByUsername, updateTranscript } from "./_lib/blob.js";
import {
  normalizeUsername,
  verifyPassword,
  MAX_USERNAME_LENGTH,
} from "./_lib/identity.js";
import { applyRateLimit, consumeDailyResit } from "./_lib/security.js";
import { authenticateRequest } from "./_lib/session.js";
import { createAuditContext } from "./_lib/telemetry.js";

const MODULE_CREDITS: Record<string, number> = {
  "FND-101": 2,
  "FND-102": 4,
  "FND-103": 3,
  "FND-104": 5,
  "FND-105": 3,
  "FND-106": 3,
  "FND-107": 2,
  "FND-108": 5,
};

const ALL_MODULE_IDS = Object.keys(MODULE_CREDITS);
const FOUNDATIONS_CREDENTIAL = "foundation-certificate";

class ExamPrerequisiteError extends Error {}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!applyRateLimit(req, res, "progress")) return;

  const audit = createAuditContext(req, "progress");

  try {
    const auth = await authenticateRequest(req);
    if (!auth) {
      return res.status(401).json({ error: "Authentication required. Provide session token or username/password.", code: "AUTH_REQUIRED" });
    }

    const identity = await lookupByUsername(auth.username);
    if (!identity) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const { action, moduleId } = req.body ?? {};

    if (action === "complete-module") {
      if (!moduleId || typeof moduleId !== "string") {
        return res.status(400).json({ error: "moduleId is required" });
      }
      const normalizedModuleId = moduleId.toUpperCase();
      if (!ALL_MODULE_IDS.includes(normalizedModuleId)) {
        return res
          .status(400)
          .json({ error: `Invalid moduleId: ${moduleId}` });
      }

      const MAX_RETRIES = 3;
      let transcript = null;
      for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        transcript = await updateTranscript(identity.uid, (current) => {
          const completed = new Set(current.foundationsStatus.completedModules);
          completed.add(normalizedModuleId);
          const orderedCompleted = ALL_MODULE_IDS.filter((id) => completed.has(id));
          const totalCredits = orderedCompleted.reduce(
            (sum, id) => sum + (MODULE_CREDITS[id] ?? 0),
            0,
          );

          current.foundationsStatus.completedModules = orderedCompleted;
          current.foundationsStatus.totalCreditsEarned = totalCredits;
          if (current.foundationsStatus.status === "not-started") {
            current.foundationsStatus.status = "in-progress";
          }
          return current;
        });
        if (!transcript) {
          return res.status(404).json({ error: "Transcript not found" });
        }

        if (transcript.foundationsStatus.completedModules.includes(normalizedModuleId)) {
          break;
        }
      }
      audit.log({ action: "complete-module", actorUid: identity.uid, status: "success", statusCode: 200, detail: normalizedModuleId });
      return res.status(200).json({ ok: true, transcript });
    }

    if (action === "pass-exam") {
      const { score } = req.body ?? {};
      const examScore =
        typeof score === "number" && score >= 0 && score <= 100 ? score : 80;
      const now = new Date().toISOString();
      let attempt = 1;
      let alreadyPassed = false;
      let improved = false;
      let bestScore = examScore;
      let latestScore = examScore;

      let dailyResit = { used: 0, limit: 1, date: now.slice(0, 10), retryAfter: undefined as string | undefined };

      let transcript = null;
      try {
        transcript = await updateTranscript(identity.uid, async (current) => {
          alreadyPassed = current.foundationsStatus.status === "completed";

          if (alreadyPassed) {
            const policy = await consumeDailyResit(current.uid);
            dailyResit = {
              used: policy.used,
              limit: 1,
              date: policy.date,
              retryAfter: policy.retryAfter,
            };
            if (!policy.allowed) {
              throw new ExamPrerequisiteError(
                `Daily resit limit reached. Retry after ${policy.retryAfter}.`,
              );
            }
          }

          const completedSet = new Set(
            current.foundationsStatus.completedModules.map((id) => id.toUpperCase()),
          );
          const hasCompletedAllModules = ALL_MODULE_IDS.every((id) =>
            completedSet.has(id),
          );
          if (!alreadyPassed && !hasCompletedAllModules) {
            throw new ExamPrerequisiteError(
              "Complete all modules before taking the exam.",
            );
          }

          const previousBest = current.foundationsStatus.assessmentResults
            .filter((result) => result.assessmentId.startsWith("exam-"))
            .reduce((best, result) => Math.max(best, result.score), -1);

          attempt =
            current.foundationsStatus.assessmentResults.filter((result) =>
              result.assessmentId.startsWith("exam-"),
            ).length + 1;

          current.foundationsStatus.assessmentResults.push({
            assessmentId: `exam-${Date.now()}-${attempt}`,
            score: examScore,
            maxScore: 100,
            decision: "pass",
            attempt,
            timestamp: now,
          });

          if (!alreadyPassed) {
            current.foundationsStatus.status = "completed";
            current.foundationsStatus.completedAt = now;
            current.foundationsStatus.completedModules = [...ALL_MODULE_IDS];
            current.foundationsStatus.totalCreditsEarned = Object.values(
              MODULE_CREDITS,
            ).reduce((a, b) => a + b, 0);
            current.currentState = "foundations-graduate";
          }

          if (
            !current.credentials.some(
              (credential) => credential.type === FOUNDATIONS_CREDENTIAL,
            )
          ) {
            current.credentials.push({
              credentialId: `cred-${current.uid}-foundations`,
              type: FOUNDATIONS_CREDENTIAL,
              issuedAt: now,
            });
          }

          const examResults = current.foundationsStatus.assessmentResults.filter(
            (result) => result.assessmentId.startsWith("exam-"),
          );
          latestScore = examResults.at(-1)?.score ?? examScore;
          bestScore = examResults.reduce((best, result) => Math.max(best, result.score), 0);
          improved = previousBest >= 0 && bestScore > previousBest;
          return current;
        });
      } catch (err) {
        if (err instanceof ExamPrerequisiteError) {
          const status = err.message.startsWith("Daily resit limit reached") ? 429 : 400;
          return res.status(status).json({
            error: err.message,
            dailyResit,
          });
        }
        throw err;
      }
      if (!transcript) {
        return res.status(404).json({ error: "Transcript not found" });
      }

      audit.log({ action: "pass-exam", actorUid: identity.uid, status: "success", statusCode: 200, detail: `attempt=${attempt} best=${bestScore}` });
      return res.status(200).json({
        ok: true,
        transcript,
        alreadyPassed,
        attempt,
        bestScore,
        latestScore,
        improved,
        dailyResit,
      });
    }

    return res.status(400).json({ error: "Unknown action" });
  } catch (err) {
    console.error("progress error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
