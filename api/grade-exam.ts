import { gradeWithFlockModel } from "./lib/grading.js";
import { canUseDailyResit, recordDailyResit } from "./_lib/security.js";

type GradeExamRequest = {
  uid: string;
  assessmentId?: string;
  attemptType: "initial" | "resit";
  submission: string;
};

function json(res: any, status: number, data: unknown): void {
  res.status(status).setHeader("Content-Type", "application/json").send(JSON.stringify(data));
}

function parseBody(req: any): GradeExamRequest | null {
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

export default async function handler(req: any, res: any): Promise<void> {
  if (req.method !== "POST") {
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  const body = parseBody(req);
  if (!body) {
    json(res, 400, { error: "Invalid request body" });
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
  if (attemptType !== "initial" && attemptType !== "resit") {
    json(res, 400, { error: "attemptType must be initial or resit" });
    return;
  }
  if (!submission) {
    json(res, 400, { error: "submission is required" });
    return;
  }

  if (attemptType === "resit") {
    const policy = await canUseDailyResit(uid);
    if (!policy.allowed) {
      json(res, 429, {
        error: "UID already used today's resit quota.",
        code: "RESIT_LIMIT_REACHED",
        dailyResit: {
          used: policy.used ?? 1,
          limit: 1,
          retryAfter: policy.retryAfter,
        },
      });
      return;
    }
  }

  try {
    const graded = await gradeWithFlockModel({
      assessmentId,
      uid,
      attemptType,
      submission,
    });

    let dailyResit: { used: number; limit: number; date?: string } | undefined;
    if (attemptType === "resit") {
      const recorded = await recordDailyResit(uid);
      dailyResit = {
        used: recorded.used,
        limit: 1,
        date: recorded.date,
      };
    }

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
    json(res, 500, { error: message, code: "GRADING_FAILED" });
  }
}
