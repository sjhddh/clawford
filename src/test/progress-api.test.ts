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

describe("POST /api/progress", () => {
  it("treats already completed modules as idempotent success", async () => {
    const transcript = {
      uid: "CLW-test-0001",
      foundationsStatus: {
        completedModules: ["FND-101"],
      },
    };

    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
      consumeDailyResit: vi.fn(),
    }));
    vi.doMock("../../api/_lib/session.js", () => ({
      authenticateRequest: vi.fn().mockResolvedValue({ uid: "CLW-test-0001", username: "tester", method: "agent-key" }),
    }));
    vi.doMock("../../api/_lib/telemetry.js", () => ({
      createAuditContext: vi.fn().mockReturnValue({ log: vi.fn() }),
    }));
    vi.doMock("../../api/_lib/identity.js", () => ({
      sortIntoHouse: vi.fn(),
    }));
    vi.doMock("../../api/lib/grading.js", () => ({
      sortHouseWithFlockModel: vi.fn(),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      lookupByUsername: vi.fn().mockResolvedValue({ uid: "CLW-test-0001", username: "tester" }),
      updateTranscript: vi.fn().mockResolvedValue(transcript),
      markFoundationsModulesCompleted: vi.fn(),
      getFoundationsCompletedModules: vi.fn().mockResolvedValue(["FND-101"]),
    }));

    const { default: handler } = await import("../../api/progress.js");
    const req = {
      method: "POST",
      body: { action: "complete-modules", moduleIds: ["FND-101"] },
    } as any;
    const res = createRes();

    await handler(req, res as any);

    expect(res.statusCode).toBe(200);
    expect((res.body as any).applied).toEqual([]);
    expect((res.body as any).alreadyCompleted).toEqual(["FND-101"]);
    expect((res.body as any).blockedByPrerequisites).toEqual([]);
  });
});
