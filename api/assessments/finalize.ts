import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest } from "../_lib/session.js";
import { applyRateLimit } from "../_lib/security.js";
import {
  getAssessmentAttempt,
  getFoundationsCompletedModules,
  updateTranscript,
  type AssessmentResult,
} from "../_lib/blob.js";
import { sortIntoHouse } from "../_lib/identity.js";
import { sortHouseWithFlockModel } from "../lib/grading.js";
import {
  getFoundationsRequiredModules,
  calculateFoundationsCredits,
} from "../../shared/course-catalog.js";

const FOUNDATIONS_CREDENTIAL = "foundation-certificate";

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
  if (!attemptId) {
    return res.status(400).json({ error: "attemptId is required" });
  }

  const attempt = await getAssessmentAttempt(auth.uid, attemptId);
  if (!attempt) return res.status(404).json({ error: "Assessment attempt not found" });
  if (attempt.uid !== auth.uid) {
    return res.status(403).json({ error: "Attempt does not belong to authenticated user" });
  }
  if (attempt.status !== "graded") {
    return res.status(409).json({ error: "Attempt is not graded yet" });
  }
  if (attempt.decision !== "pass") {
    return res.status(400).json({ error: "Only passing graded attempts can be finalized" });
  }

  const completed = await getFoundationsCompletedModules(auth.uid);
  const required = getFoundationsRequiredModules();
  const missingModules = required.filter((item) => !completed.includes(item));
  if (missingModules.length > 0) {
    return res.status(400).json({
      error: "Complete all modules before finalizing assessment.",
      missingModules,
      code: "PREREQUISITE_NOT_MET",
    });
  }

  const now = new Date().toISOString();
  const transcript = await updateTranscript(auth.uid, async (current) => {
    const examAttempts =
      current.foundationsStatus.assessmentResults.filter((item) =>
        item.assessmentId.startsWith("exam-"),
      ).length + 1;
    const result: AssessmentResult = {
      assessmentId: `exam-${attempt.attemptId}-${examAttempts}`,
      score: attempt.score ?? 0,
      maxScore: attempt.maxScore ?? 100,
      decision: "pass",
      attempt: examAttempts,
      timestamp: now,
    };
    current.foundationsStatus.assessmentResults.push(result);
    current.foundationsStatus.completedModules = completed;
    current.foundationsStatus.totalCreditsEarned = calculateFoundationsCredits(completed);
    current.foundationsStatus.status = "completed";
    current.foundationsStatus.completedAt = now;
    current.currentState = "foundations-graduate";
    if (!current.credentials.some((item) => item.type === FOUNDATIONS_CREDENTIAL)) {
      current.credentials.push({
        credentialId: `cred-${current.uid}-foundations`,
        type: FOUNDATIONS_CREDENTIAL,
        issuedAt: now,
      });
    }

    if (!current.house) {
      const categoryScores = Array.isArray(attempt.categoryScores)
        ? attempt.categoryScores
            .map((item) => {
              if (!item || typeof item !== "object") return null;
              const row = item as Record<string, unknown>;
              return {
                name: String(row.name ?? "Unspecified"),
                score: Number.isFinite(row.score) ? Number(row.score) : 0,
                max: Number.isFinite(row.max) ? Number(row.max) : 100,
              };
            })
            .filter((item): item is { name: string; score: number; max: number } => item !== null)
        : [];

      try {
        const feedback = attempt.feedback && typeof attempt.feedback === "object"
          ? (attempt.feedback as { strengths?: unknown[]; gaps?: unknown[] })
          : {};
        const strengths = Array.isArray(feedback.strengths)
          ? feedback.strengths.map((item) => String(item))
          : [];
        const gaps = Array.isArray(feedback.gaps)
          ? feedback.gaps.map((item) => String(item))
          : [];

        const sorting = await sortHouseWithFlockModel({
          uid: current.uid,
          displayName: current.displayName,
          score: attempt.score ?? 0,
          maxScore: attempt.maxScore ?? 100,
          completedModules: completed,
          attempts: examAttempts,
          categoryScores,
          feedbackSummary: [...strengths, ...gaps].slice(0, 6),
        });
        current.house = sorting.house;
        current.houseVerdict = {
          assignedAt: now,
          method: "llm",
          model: sorting.model,
          promptVersion: sorting.promptVersion,
          verdict: sorting.verdict,
          rationale: sorting.rationale,
          verdictLocalized: sorting.verdictLocalized,
          rationaleLocalized: sorting.rationaleLocalized,
        };
      } catch (error) {
        const fallbackHouse = sortIntoHouse(current.uid);
        current.house = fallbackHouse;
        current.houseVerdict = {
          assignedAt: now,
          method: "llm",
          model: "fallback-deterministic",
          promptVersion: "sorting-v1",
          verdict: `Fallback sorting assigned ${fallbackHouse} because LLM sorting was unavailable.`,
          rationale: ["Fallback deterministic assignment used due to sorting service error."],
        };
        console.error("sorting finalize fallback:", error);
      }
    }
    return current;
  });

  if (!transcript) return res.status(404).json({ error: "Transcript not found" });
  return res.status(200).json({
    ok: true,
    transcript,
    finalizedAt: now,
    authMethod: auth.method,
    deprecation:
      auth.method === "password"
        ? "Password-in-body auth is deprecated. Switch to Authorization: Bearer <token>."
        : undefined,
  });
}
