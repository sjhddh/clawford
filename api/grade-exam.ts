import type { VercelRequest, VercelResponse } from "@vercel/node";
import { gradeWithFlockModel } from "./lib/grading.js";
import { applyRateLimit, consumeDailyResit } from "./_lib/security.js";
import { authenticateRequest } from "./_lib/session.js";
import { createAuditContext, recordGradingCall } from "./_lib/telemetry.js";

type GradeExamRequest = {
  uid: string;
  username: string;
  password: string;
  assessmentId?: string;
  attemptType: "initial" | "resit";
  submission: string;
};

function json(res: VercelResponse, status: number, data: unknown): void {
  res.status(status).setHeader("Content-Type", "application/json").send(JSON.stringify(data));
}

function parseBody(req: VercelRequest): GradeExamRequest | null {
  if (!req.body) return null;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body) as GradeExamRequest;
    } catch {
      return null;
    }
  }
  return req.body as GradeExamRequest;
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method !== "POST") {
    json(res, 405, { error: "Method not allowed" });
    return;
  }
  if (!applyRateLimit(req, res, "grade-exam")) return;

  const audit = createAuditContext(req, "grade-exam");

  const body = parseBody(req);
  if (!body) {
    json(res, 400, { error: "Invalid request body" });
    return;
  }

  const auth = await authenticateRequest(req);
  if (!auth) {
    json(res, 401, { error: "Authentication required. Provide session token or username/password.", code: "AUTH_REQUIRED" });
    return;
  }

  const uid = String(body.uid ?? "").trim();
  const assessmentId = String(body.assessmentId ?? "clawford-foundations-agent-hard").trim();
  const attemptType = body.attemptType;
  const submission = String(body.submission ?? "").trim();

  if (!uid) {
    json(res, 400, { error: "UID is required" });
    return;
  }
  if (uid !== auth.uid) {
    json(res, 403, { error: "UID does not match authenticated user", code: "OWNERSHIP_ERROR" });
    return;
  }
  if (attemptType !== "initial" && attemptType !== "resit") {
    json(res, 400, { error: "attemptType must be initial or resit" });
    return;
  }
  if (!submission) {
    json(res, 400, { error: "submission is required" });
    return;
  }

  let dailyResit: { used: number; limit: number; date?: string } | undefined;
  if (attemptType === "resit") {
    const policy = await consumeDailyResit(uid);
    if (!policy.allowed) {
      json(res, 429, {
        error: "UID already used today's resit quota.",
        code: "RESIT_LIMIT_REACHED",
        dailyResit: {
          used: policy.used,
          limit: 1,
          retryAfter: policy.retryAfter,
        },
      });
      return;
    }
    dailyResit = {
      used: policy.used,
      limit: 1,
      date: policy.date,
    };
  }

  const gradingStart = Date.now();
  try {
    const graded = await gradeWithFlockModel({
      assessmentId,
      uid,
      attemptType,
      submission,
    });

    recordGradingCall("success", Date.now() - gradingStart);
    audit.log({ action: "grade", actorUid: uid, status: "success", statusCode: 200, detail: `score=${graded.score} decision=${graded.decision}` });
    json(res, 200, {
      uid,
      assessmentId,
      attemptType,
      score: graded.score,
      maxScore: 100,
      decision: graded.decision,
      categoryScores: graded.categoryScores,
      hardFail: graded.hardFail,
      feedback: graded.feedback,
      ...(dailyResit ? { dailyResit } : {}),
      gradedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown grading error";
    recordGradingCall("error", Date.now() - gradingStart);
    audit.log({ action: "grade", actorUid: uid, status: "error", statusCode: 500, detail: message });
    json(res, 500, { error: message, code: "GRADING_FAILED" });
  }
}
