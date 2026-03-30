import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest } from "../_lib/session.js";
import { applyRateLimit, consumeDailyResit } from "../_lib/security.js";
import {
  getAssessmentAttempt,
  saveAssessmentAttempt,
} from "../_lib/blob.js";
import { gradeWithFlockModel } from "../lib/grading.js";

function toSectionTitle(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\w/, (char) => char.toUpperCase());
}

function normalizeSubmissionInput(input: unknown): string {
  if (typeof input === "string") return input.trim();
  if (!input || typeof input !== "object" || Array.isArray(input)) return "";

  const record = input as Record<string, unknown>;
  const preferredOrder = [
    "discovery",
    "execution",
    "verification",
    "safetyAndReporting",
    "safety",
    "reporting",
    "notes",
  ];
  const orderedKeys = [
    ...preferredOrder.filter((key) => key in record),
    ...Object.keys(record).filter((key) => !preferredOrder.includes(key)),
  ];
  const sections = orderedKeys
    .map((key) => {
      const value = record[key];
      if (value === undefined || value === null) return null;
      const content =
        typeof value === "string"
          ? value.trim()
          : JSON.stringify(value, null, 2);
      if (!content) return null;
      return `## ${toSectionTitle(key)}\n${content}`;
    })
    .filter((entry): entry is string => typeof entry === "string");

  return sections.join("\n\n").trim();
}

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
  const submission = normalizeSubmissionInput(req.body?.submission);
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

  let graded;
  try {
    graded = await gradeWithFlockModel({
      assessmentId: attempt.assessmentId,
      uid: auth.uid,
      attemptType,
      submission,
    });
  } catch (err) {
    console.error("assessment grading error:", err);
    return res.status(503).json({
      error: "Grading service temporarily unavailable. Please retry.",
      code: "GRADING_FAILED",
      retryAfter: new Date(Date.now() + 30_000).toISOString(),
    });
  }

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
