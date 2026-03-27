import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest } from "../_lib/session.js";
import { applyRateLimit, consumeDailyResit } from "../_lib/security.js";
import {
  getAssessmentAttempt,
  saveAssessmentAttempt,
} from "../_lib/blob.js";
import { gradeWithFlockModel } from "../lib/grading.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "assessments")) return;
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({
      error: "Authentication required. Use Authorization: Bearer <token>.",
      code: "AUTH_REQUIRED",
    });
  }

  const attemptId = String(req.body?.attemptId ?? "").trim();
  const submission = String(req.body?.submission ?? "").trim();
  const attemptType = req.body?.attemptType === "resit" ? "resit" : "initial";
  if (!attemptId) return res.status(400).json({ error: "attemptId is required" });
  if (!submission) return res.status(400).json({ error: "submission is required" });

  const attempt = await getAssessmentAttempt(auth.uid, attemptId);
  if (!attempt) return res.status(404).json({ error: "Assessment attempt not found" });
  if (attempt.uid !== auth.uid) {
    return res.status(403).json({ error: "Attempt does not belong to authenticated user" });
  }
  if (attempt.status === "graded" || attempt.status === "finalized") {
    return res.status(409).json({ error: "Attempt already graded" });
  }

  let dailyResit:
    | {
        used: number;
        limit: number;
        date?: string;
        retryAfter?: string;
      }
    | undefined;

  if (attemptType === "resit") {
    const policy = await consumeDailyResit(auth.uid);
    if (!policy.allowed) {
      return res.status(429).json({
        error: "Daily resit limit reached.",
        code: "RESIT_LIMIT_REACHED",
        dailyResit: {
          used: policy.used,
          limit: 1,
          retryAfter: policy.retryAfter,
          date: policy.date,
        },
      });
    }
    dailyResit = {
      used: policy.used,
      limit: 1,
      date: policy.date,
    };
  }

  const graded = await gradeWithFlockModel({
    assessmentId: attempt.assessmentId,
    uid: auth.uid,
    attemptType,
    submission,
  });

  attempt.status = "graded";
  attempt.submission = submission;
  attempt.submittedAt = new Date().toISOString();
  attempt.gradedAt = new Date().toISOString();
  attempt.score = graded.score;
  attempt.maxScore = 100;
  attempt.decision = graded.decision;
  attempt.categoryScores = graded.categoryScores;
  attempt.hardFail = graded.hardFail;
  attempt.feedback = graded.feedback;
  await saveAssessmentAttempt(attempt);

  return res.status(200).json({
    ok: true,
    attempt,
    dailyResit,
    authMethod: auth.method,
    deprecation:
      auth.method === "password"
        ? "Password-in-body auth is deprecated. Switch to Authorization: Bearer <token>."
        : undefined,
  });
}
