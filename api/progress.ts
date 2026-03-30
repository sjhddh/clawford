import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  lookupByUsername,
  updateTranscript,
  markFoundationsModulesCompleted,
  getFoundationsCompletedModules,
} from "./_lib/blob.js";
import { applyRateLimit, consumeDailyResit } from "./_lib/security.js";
import { authenticateRequest } from "./_lib/session.js";
import { createAuditContext } from "./_lib/telemetry.js";
import { sortIntoHouse } from "./_lib/identity.js";
import { sortHouseWithFlockModel } from "./lib/grading.js";
import {
  getFoundationsModuleMeta,
  getFoundationsRequiredModules,
  calculateFoundationsCredits,
  planFoundationsModuleCompletion,
} from "../shared/course-catalog.js";

const ALL_MODULE_IDS = getFoundationsRequiredModules();
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

    const { action } = req.body ?? {};

    if (action === "complete-module" || action === "complete-modules") {
      const moduleIdsRaw = req.body?.moduleIds ?? req.body?.moduleId;
      const parsedIds = Array.isArray(moduleIdsRaw)
        ? moduleIdsRaw
        : typeof moduleIdsRaw === "string"
          ? [moduleIdsRaw]
          : [];
      if (parsedIds.length === 0) {
        return res.status(400).json({ error: "moduleId or moduleIds is required" });
      }
      const normalizedIds = parsedIds.map((item) => String(item).trim().toUpperCase()).filter(Boolean);
      const uniqueIds = Array.from(new Set(normalizedIds));
      const invalid = uniqueIds.filter((item) => !getFoundationsModuleMeta(item));
      const valid = uniqueIds.filter((item) => !invalid.includes(item));

      if (valid.length === 0) {
        return res.status(400).json({ error: "No valid module IDs supplied", invalid });
      }

      const completedBefore = await getFoundationsCompletedModules(identity.uid);
      const completedBeforeSet = new Set(completedBefore);
      const alreadyCompleted = valid.filter((item) => completedBeforeSet.has(item));
      const completionPlan = planFoundationsModuleCompletion(valid, completedBefore);

      if (completionPlan.accepted.length === 0) {
        if (alreadyCompleted.length > 0 && completionPlan.blocked.length === 0) {
          const transcript = await updateTranscript(identity.uid, (current) => current);
          if (!transcript) {
            return res.status(404).json({ error: "Transcript not found" });
          }
          audit.log({ action: "complete-module", actorUid: identity.uid, status: "success", statusCode: 200, detail: `already-completed:${alreadyCompleted.join(",")}` });
          return res.status(200).json({
            ok: true,
            transcript,
            applied: [],
            alreadyCompleted,
            invalid,
            blockedByPrerequisites: [],
            nextEligibleModules: completionPlan.nextEligible,
            authMethod: auth.method,
            deprecation:
              auth.method === "password"
                ? "Password-in-body auth is deprecated. Switch to Authorization: Bearer <token>."
                : undefined,
          });
        }
        return res.status(409).json({
          error: "Requested modules are blocked by foundations prerequisites.",
          invalid,
          blockedByPrerequisites: completionPlan.blocked,
          nextEligibleModules: completionPlan.nextEligible,
        });
      }

      const batch = await markFoundationsModulesCompleted(identity.uid, completionPlan.accepted);
      const transcript = await updateTranscript(identity.uid, (current) => {
          current.foundationsStatus.completedModules = batch.completedModules;
          current.foundationsStatus.totalCreditsEarned = batch.totalCredits;
          if (current.foundationsStatus.status === "not-started") {
            current.foundationsStatus.status = "in-progress";
          }
          return current;
      });
      if (!transcript) {
        return res.status(404).json({ error: "Transcript not found" });
      }
      audit.log({ action: "complete-module", actorUid: identity.uid, status: "success", statusCode: 200, detail: valid.join(",") });
      return res.status(200).json({
        ok: true,
        transcript,
        applied: batch.applied,
        alreadyCompleted: Array.from(new Set([...alreadyCompleted, ...batch.alreadyCompleted])),
        invalid,
        blockedByPrerequisites: completionPlan.blocked,
        nextEligibleModules: completionPlan.nextEligible,
        authMethod: auth.method,
        deprecation:
          auth.method === "password"
            ? "Password-in-body auth is deprecated. Switch to Authorization: Bearer <token>."
            : undefined,
      });
    }

    if (action === "pass-exam") {
      // Compatibility shim: the canonical flow is /api/assessments/start -> submit -> finalize.
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

          const completedModules = await getFoundationsCompletedModules(current.uid);
          const completedSet = new Set(completedModules);
          const hasCompletedAllModules = ALL_MODULE_IDS.every((id) => completedSet.has(id));
          const missingModules = ALL_MODULE_IDS.filter((id) => !completedSet.has(id));
          if (!alreadyPassed && !hasCompletedAllModules) {
            const err = new ExamPrerequisiteError("Complete all modules before taking the exam.");
            (err as Error & { missingModules?: string[] }).missingModules = missingModules;
            throw err;
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
            current.foundationsStatus.totalCreditsEarned = calculateFoundationsCredits(ALL_MODULE_IDS);
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

          if (!current.house) {
            try {
              const sorting = await sortHouseWithFlockModel({
                uid: current.uid,
                displayName: current.displayName,
                score: examScore,
                maxScore: 100,
                completedModules: current.foundationsStatus.completedModules,
                attempts: attempt,
                categoryScores: [],
                feedbackSummary: [],
              });
              current.house = sorting.house;
              current.houseVerdict = {
                assignedAt: now,
                method: "llm",
                model: sorting.model,
                promptVersion: sorting.promptVersion,
                verdict: sorting.verdict,
                rationale: sorting.rationale,
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
              console.error("sorting progress fallback:", error);
            }
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
          const missingModules = (err as Error & { missingModules?: string[] }).missingModules ?? [];
          return res.status(status).json({
            error: err.message,
            dailyResit,
            missingModules,
            deprecated: true,
            nextAction: {
              start: "/api/assessments/start",
              submit: "/api/assessments/submit",
              finalize: "/api/assessments/finalize",
            },
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
        deprecated: true,
        nextAction: {
          start: "/api/assessments/start",
          submit: "/api/assessments/submit",
          finalize: "/api/assessments/finalize",
        },
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
