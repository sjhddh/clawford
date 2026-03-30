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

describe("Strict skill certification policy", () => {
  it("rejects exam start when skill is not registry-backed", async () => {
    vi.doMock("../../api/_lib/session.js", () => ({
      authenticateRequest: vi.fn().mockResolvedValue({ uid: "CLW-test-0001" }),
    }));
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    vi.doMock("../../api/_lib/telemetry.js", () => ({
      createAuditContext: vi.fn().mockReturnValue({ log: vi.fn() }),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      getTranscript: vi.fn().mockResolvedValue({ currentState: "foundations-graduate" }),
      saveSkillExamAttempt: vi.fn(),
    }));
    vi.doMock("fs", () => ({
      default: {
        existsSync: vi.fn().mockImplementation((target: string) => {
          return target.includes("cn-weather") || target.includes("clawtip-weather");
        }),
        readdirSync: vi.fn().mockReturnValue([
          { isDirectory: () => true, name: "cn-weather" },
          { isDirectory: () => true, name: "clawtip-weather" },
          { isDirectory: () => true, name: "react-components" },
        ]),
      },
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/start.js");
    const req = { method: "POST", query: { slug: "weather" } } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(404);
    expect((res.body as any).code).toBe("SKILL_EXAM_NOT_FOUND");
    expect((res.body as any).suggestedSlugs).toEqual(["clawtip-weather", "cn-weather"]);
    expect((res.body as any).nextAction.registry).toBe("/api/skills?limit=100");
  });

  it("issues finalized credentials with official verification class", async () => {
    const saveSkillCredentialMock = vi.fn();
    vi.doMock("../../api/_lib/session.js", () => ({
      authenticateRequest: vi.fn().mockResolvedValue({ uid: "CLW-test-0001" }),
    }));
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    vi.doMock("../../api/_lib/telemetry.js", () => ({
      createAuditContext: vi.fn().mockReturnValue({ log: vi.fn() }),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      calculateActiveSkillCredits: vi.fn().mockReturnValue(3),
      getSkillCredential: vi.fn().mockResolvedValue(null),
      getSkillExamAttempt: vi.fn().mockResolvedValue({
        examAttemptId: "skill-123",
        status: "submitted",
      }),
      getSkillVerification: vi.fn().mockResolvedValue({
        examAttemptId: "skill-123",
        skillId: "postgres-backups",
        skillVersion: "1.0.0",
        skillHash: "hash-a",
        tier: 1,
        credits: 3,
        score: 90,
        maxScore: 100,
        decision: "pass",
        assertionResults: [{ id: "assert-a", passed: true }],
      }),
      listSkillCredentials: vi.fn().mockResolvedValue([]),
      saveSkillCredential: saveSkillCredentialMock,
      saveSkillExamAttempt: vi.fn(),
      updateTranscript: vi.fn().mockResolvedValue({ uid: "CLW-test-0001" }),
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/finalize.js");
    const req = {
      method: "POST",
      query: { slug: "postgres-backups" },
      body: { attestationId: "att-123" },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(200);
    expect(saveSkillCredentialMock).toHaveBeenCalledWith(
      "CLW-test-0001",
      expect.objectContaining({ verificationClass: "official-clawhub" }),
    );
    expect((res.body as any).verificationClass).toBe("official-clawhub");
  });

  it("returns only official active pass capabilities", async () => {
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      calculateActiveSkillCredits: vi.fn().mockReturnValue(3),
      getTranscript: vi.fn().mockResolvedValue({ uid: "CLW-test-0001", totalSkillCredits: 999 }),
      listSkillCredentials: vi.fn().mockResolvedValue([
        {
          skillId: "official-pass",
          skillVersion: "1.0.0",
          skillHash: "hash-1",
          verificationClass: "official-clawhub",
          credentialStatus: "active",
          decision: "pass",
          tier: 1,
          score: 95,
          maxScore: 100,
          assertionResults: [],
          attestationId: "att-1",
          credits: 3,
          timestamp: "2026-01-01T00:00:00.000Z",
        },
        {
          skillId: "legacy-pass",
          skillVersion: "1.0.0",
          skillHash: "hash-2",
          credentialStatus: "active",
          decision: "pass",
          tier: 1,
          score: 95,
          maxScore: 100,
          assertionResults: [],
          attestationId: "att-2",
          credits: 3,
          timestamp: "2026-01-01T00:00:00.000Z",
        },
        {
          skillId: "official-fail",
          skillVersion: "1.0.0",
          skillHash: "hash-3",
          verificationClass: "official-clawhub",
          credentialStatus: "active",
          decision: "fail",
          tier: 1,
          score: 40,
          maxScore: 100,
          assertionResults: [],
          attestationId: "att-3",
          credits: 0,
          timestamp: "2026-01-01T00:00:00.000Z",
        },
      ]),
    }));

    const { default: handler } = await import("../../api/capabilities/[uid].js");
    const req = { method: "GET", query: { uid: "CLW-test-0001" } } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(200);
    expect((res.body as any).capabilities).toEqual([
      {
        skillId: "official-pass",
        version: "1.0.0",
        tier: 1,
        verificationClass: "official-clawhub",
      },
    ]);
    expect((res.body as any).totalSkillCredits).toBe(3);
  });
});
