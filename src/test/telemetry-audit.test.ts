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

function baseBody() {
  return {
    attestationId: "audit-1",
    skillId: "postgres-backups",
    score: 12,
    passed: false,
    hardFailTriggered: true,
    hardFailReasons: ["secret-leak"],
    harnessId: "test-harness",
  };
}

afterEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.unstubAllEnvs();
});

describe("POST /api/telemetry/audit", () => {
  it("requires version/hash binding fields when enforcement is enabled", async () => {
    vi.stubEnv("TEE_TELEMETRY_REQUIRE_BINDING", "true");
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
      calculateActiveSkillCredits: vi.fn().mockReturnValue(0),
      isOfficialVerificationClass: vi.fn((value: string | undefined) => value === "official-clawhub" || value === "official-open"),
      listSkillCredentials: vi.fn().mockResolvedValue([]),
      saveSkillCredential: vi.fn(),
      updateTranscript: vi.fn(),
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: vi.fn(),
    }));

    const { default: handler } = await import("../../api/telemetry/audit.js");
    const req = { method: "POST", body: baseBody() } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(400);
    expect((res.body as any).error).toContain("skillVersion and skillHash are required");
  });

  it("revokes only matching version/hash when binding enforcement is enabled", async () => {
    vi.stubEnv("TEE_TELEMETRY_REQUIRE_BINDING", "true");
    vi.stubEnv("TEE_DEFAULT_PASSING_SCORE", "70");

    const updateTranscriptMock = vi.fn().mockImplementation(async (_uid: string, updater: (t: any) => any) => {
      const transcript = { skillExamResults: [], totalSkillCredits: 0 };
      return updater(transcript);
    });
    const listSkillCredentialsMock = vi.fn().mockResolvedValue([
      {
        skillId: "postgres-backups",
        skillVersion: "1.0.0",
        skillHash: "hash-a",
        verificationClass: "official-clawhub",
        credentialStatus: "active",
        decision: "pass",
        credits: 3,
        attestationId: "a",
        assertionResults: [],
        tier: 2,
        score: 90,
        maxScore: 100,
        timestamp: "2026-01-01T00:00:00.000Z",
      },
      {
        skillId: "postgres-backups",
        skillVersion: "2.0.0",
        skillHash: "hash-b",
        verificationClass: "official-clawhub",
        credentialStatus: "active",
        decision: "pass",
        credits: 5,
        attestationId: "b",
        assertionResults: [],
        tier: 2,
        score: 95,
        maxScore: 100,
        timestamp: "2026-01-02T00:00:00.000Z",
      },
    ]);

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
      isOfficialVerificationClass: vi.fn((value: string | undefined) => value === "official-clawhub" || value === "official-open"),
      listSkillCredentials: listSkillCredentialsMock,
      saveSkillCredential: vi.fn(),
      updateTranscript: updateTranscriptMock,
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: vi.fn().mockReturnValue({
        score: 12,
        maxScore: 100,
        decision: "fail",
        hardFail: { triggered: true, reasons: ["secret-leak"] },
      }),
    }));

    const { default: handler } = await import("../../api/telemetry/audit.js");
    const req = {
      method: "POST",
      body: {
        ...baseBody(),
        skillVersion: "2.0.0",
        skillHash: "hash-b",
      },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(200);
    expect((res.body as any).credentialRevoked).toBe(true);
    expect((res.body as any).revokedCredentials).toBe(1);
  });

  it("does not revoke credentials when hard fail is not triggered", async () => {
    vi.stubEnv("TEE_TELEMETRY_REQUIRE_BINDING", "false");
    vi.stubEnv("TEE_DEFAULT_PASSING_SCORE", "70");

    const updateTranscriptMock = vi.fn();
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
      calculateActiveSkillCredits: vi.fn().mockReturnValue(0),
      isOfficialVerificationClass: vi.fn((value: string | undefined) => value === "official-clawhub" || value === "official-open"),
      listSkillCredentials: vi.fn().mockResolvedValue([]),
      saveSkillCredential: vi.fn(),
      updateTranscript: updateTranscriptMock,
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: vi.fn().mockReturnValue({
        score: 55,
        maxScore: 100,
        decision: "revisit",
        hardFail: { triggered: false, reasons: [] },
      }),
    }));

    const { default: handler } = await import("../../api/telemetry/audit.js");
    const req = {
      method: "POST",
      body: {
        ...baseBody(),
        hardFailTriggered: false,
        hardFailReasons: [],
      },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(200);
    expect(updateTranscriptMock).not.toHaveBeenCalled();
    expect((res.body as any).credentialRevoked).toBe(false);
    expect((res.body as any).revokedCredentials).toBe(0);
  });
});
