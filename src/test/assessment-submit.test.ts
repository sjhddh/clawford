/* eslint-disable @typescript-eslint/no-explicit-any */
import { afterEach, describe, expect, it, vi } from "vitest";

function createRes() {
  return {
    statusCode: 200,
    body: null as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      return this;
    },
  };
}

afterEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
});

describe("POST /api/assessments/submit", () => {
  it("accepts structured object submission and normalizes it for grading", async () => {
    const gradeWithFlockModelMock = vi.fn().mockResolvedValue({
      score: 95,
      decision: "pass",
      categoryScores: [],
      hardFail: { triggered: false, reasons: [] },
      feedback: { strengths: [], gaps: [] },
    });

    vi.doMock("../../api/_lib/session.js", () => ({
      authenticateRequest: vi.fn().mockResolvedValue({ uid: "CLW-test-0001", method: "bearer" }),
    }));
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
      consumeDailyResit: vi.fn(),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      getAssessmentAttempt: vi.fn().mockResolvedValue({
        attemptId: "assess-123",
        uid: "CLW-test-0001",
        assessmentId: "clawford-foundations-agent-hard",
        status: "started",
      }),
      saveAssessmentAttempt: vi.fn(),
    }));
    vi.doMock("../../api/lib/grading.js", () => ({
      gradeWithFlockModel: gradeWithFlockModelMock,
    }));

    const { default: handler } = await import("../../api/assessments/submit.js");
    const req = {
      method: "POST",
      body: {
        attemptId: "assess-123",
        submission: {
          discovery: "Loaded /api/courses and /api/course-graph.",
          execution: "Completed required modules with /api/progress.",
          verification: "Checked transcript completion and credits.",
        },
      },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(200);
    expect(gradeWithFlockModelMock).toHaveBeenCalledWith(
      expect.objectContaining({
        submission: expect.stringContaining("## Discovery"),
      }),
    );
    expect(gradeWithFlockModelMock).toHaveBeenCalledWith(
      expect.objectContaining({
        submission: expect.stringContaining("## Verification"),
      }),
    );
  });

  it("rejects non-string/non-object submission payloads", async () => {
    vi.doMock("../../api/_lib/session.js", () => ({
      authenticateRequest: vi.fn().mockResolvedValue({ uid: "CLW-test-0001", method: "bearer" }),
    }));
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
      consumeDailyResit: vi.fn(),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      getAssessmentAttempt: vi.fn().mockResolvedValue({
        attemptId: "assess-123",
        uid: "CLW-test-0001",
        assessmentId: "clawford-foundations-agent-hard",
        status: "started",
      }),
      saveAssessmentAttempt: vi.fn(),
    }));
    vi.doMock("../../api/lib/grading.js", () => ({
      gradeWithFlockModel: vi.fn(),
    }));

    const { default: handler } = await import("../../api/assessments/submit.js");
    const req = {
      method: "POST",
      body: {
        attemptId: "assess-123",
        submission: ["invalid"],
      },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(400);
    expect((res.body as any).error).toBe("submission is required");
  });
});
