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
    examAttemptId: "skill-123",
    attestationId: "att-123",
    skillId: "postgres-backups",
    challengeNonce: "nonce-123",
    contractHash: "contract-abc",
    skillVersion: "1.0.0",
    skillHash: "skill-hash-abc",
    score: 86,
    passed: true,
    hardFailTriggered: false,
    hardFailReasons: [],
    assertionResults: [{ id: "efficiency-check", passed: true }],
    sandboxSignature: "abc123",
    sandboxId: "tee-1",
  };
}

afterEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
});

describe("POST /api/skills/[slug]/exam/submit", () => {
  it("rejects missing examAttemptId", async () => {
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
      getSkillExamAttempt: vi.fn(),
      saveSkillExamAttempt: vi.fn(),
      saveSkillVerification: vi.fn(),
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: vi.fn(),
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/submit.js");
    const req = {
      method: "POST",
      query: { slug: "postgres-backups" },
      body: { ...baseBody(), examAttemptId: "" },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(400);
    expect((res.body as any).error).toContain("examAttemptId");
  });

  it("rejects nonce/hash mismatch against server-issued attempt", async () => {
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
      getSkillExamAttempt: vi.fn().mockResolvedValue({
        examAttemptId: "skill-123",
        uid: "CLW-test-0001",
        skillId: "postgres-backups",
        challengeNonce: "nonce-server",
        contractHash: "contract-server",
        skillVersion: "1.0.0",
        skillHash: "skill-hash-server",
        tier: 2,
        credits: 1,
        passingScore: 70,
        assertionIds: ["efficiency-check"],
        dynamicParams: {},
        startedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 60_000).toISOString(),
        status: "started",
      }),
      saveSkillExamAttempt: vi.fn(),
      saveSkillVerification: vi.fn(),
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: vi.fn(),
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/submit.js");
    const req = {
      method: "POST",
      query: { slug: "postgres-backups" },
      body: baseBody(),
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(400);
    expect((res.body as any).error).toContain("binding fields");
  });

  it("uses server-issued passingScore for attestation verification", async () => {
    const verifyAttestationMock = vi.fn().mockReturnValue({
      score: 65,
      maxScore: 100,
      decision: "revisit",
      hardFail: { triggered: false, reasons: [] },
    });

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
      getSkillExamAttempt: vi.fn().mockResolvedValue({
        examAttemptId: "skill-123",
        uid: "CLW-test-0001",
        skillId: "postgres-backups",
        challengeNonce: "nonce-123",
        contractHash: "contract-abc",
        skillVersion: "1.0.0",
        skillHash: "skill-hash-abc",
        tier: 2,
        credits: 1,
        passingScore: 82,
        assertionIds: ["efficiency-check"],
        dynamicParams: {},
        startedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 60_000).toISOString(),
        status: "started",
      }),
      saveSkillExamAttempt: vi.fn(),
      saveSkillVerification: vi.fn(),
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: verifyAttestationMock,
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/submit.js");
    const req = {
      method: "POST",
      query: { slug: "postgres-backups" },
      body: baseBody(),
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(verifyAttestationMock).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({ requireBindingFields: true, passingScore: 82 }),
    );
    expect(res.statusCode).toBe(200);
  });

  it("returns 410 when exam attempt is expired", async () => {
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
      getSkillExamAttempt: vi.fn().mockResolvedValue({
        examAttemptId: "skill-123",
        uid: "CLW-test-0001",
        skillId: "postgres-backups",
        challengeNonce: "nonce-123",
        contractHash: "contract-abc",
        skillVersion: "1.0.0",
        skillHash: "skill-hash-abc",
        tier: 2,
        credits: 1,
        passingScore: 70,
        assertionIds: ["efficiency-check"],
        dynamicParams: {},
        startedAt: new Date(Date.now() - 120_000).toISOString(),
        expiresAt: new Date(Date.now() - 60_000).toISOString(),
        status: "started",
      }),
      saveSkillExamAttempt: vi.fn(),
      saveSkillVerification: vi.fn(),
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: vi.fn(),
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/submit.js");
    const req = {
      method: "POST",
      query: { slug: "postgres-backups" },
      body: baseBody(),
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(410);
    expect((res.body as any).error).toContain("expired");
  });

  it("returns 403 when attestation verification fails", async () => {
    const verifyAttestationMock = vi.fn().mockImplementation(() => {
      throw new Error("Invalid TEE sandbox attestation signature");
    });

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
      getSkillExamAttempt: vi.fn().mockResolvedValue({
        examAttemptId: "skill-123",
        uid: "CLW-test-0001",
        skillId: "postgres-backups",
        challengeNonce: "nonce-123",
        contractHash: "contract-abc",
        skillVersion: "1.0.0",
        skillHash: "skill-hash-abc",
        tier: 2,
        credits: 1,
        passingScore: 70,
        assertionIds: ["efficiency-check"],
        dynamicParams: {},
        startedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 60_000).toISOString(),
        status: "started",
      }),
      saveSkillExamAttempt: vi.fn(),
      saveSkillVerification: vi.fn(),
    }));
    vi.doMock("../../api/lib/attestation-validator.js", () => ({
      verifyAttestation: verifyAttestationMock,
    }));

    const { default: handler } = await import("../../api/skills/[slug]/exam/submit.js");
    const req = {
      method: "POST",
      query: { slug: "postgres-backups" },
      body: baseBody(),
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(403);
    expect((res.body as any).error).toContain("Invalid TEE sandbox attestation signature");
  });
});
