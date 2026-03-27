import { createAttemptStore, getAttemptKey, type AttemptRecord } from "./lib/attempt-store";
import { gradeWithFlockModel } from "./lib/grading";

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

  const store = createAttemptStore();
  const attemptKey = getAttemptKey(uid, assessmentId);
  const existing = (await store.get(attemptKey)) ?? {
    initialTaken: false,
    resitUsed: 0,
    updatedAt: new Date().toISOString(),
  };

  if (attemptType === "initial" && existing.initialTaken) {
    json(res, 429, {
      error: "Initial exam attempt already used today. Use resit if available.",
      code: "INITIAL_ALREADY_USED_TODAY",
      attemptsToday: existing,
    });
    return;
  }

  if (attemptType === "resit") {
    if (!existing.initialTaken) {
      json(res, 400, {
        error: "Cannot resit before initial attempt.",
        code: "RESIT_BEFORE_INITIAL",
        attemptsToday: existing,
      });
      return;
    }
    if (existing.resitUsed >= 1) {
      json(res, 429, {
        error: "UID already used today's resit quota.",
        code: "RESIT_LIMIT_REACHED",
        attemptsToday: existing,
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

    const nextRecord: AttemptRecord = {
      initialTaken: existing.initialTaken || attemptType === "initial",
      resitUsed: existing.resitUsed + (attemptType === "resit" ? 1 : 0),
      updatedAt: new Date().toISOString(),
    };
    await store.set(attemptKey, nextRecord);

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
      attemptsToday: nextRecord,
      gradedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown grading error";
    json(res, 500, { error: message, code: "GRADING_FAILED" });
  }
}
