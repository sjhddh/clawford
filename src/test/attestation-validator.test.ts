import { createHmac } from "crypto";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  buildCanonicalAttestationPayload,
  verifyAttestation,
  type ExamAttestation,
} from "../../api/lib/attestation-validator.js";

function signAttestation(attestation: ExamAttestation, secret: string): string {
  const payload = buildCanonicalAttestationPayload(attestation);
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function makeAttestation(): ExamAttestation {
  return {
    examAttemptId: "skill-123",
    attestationId: "att-123",
    skillId: "postgres-backups",
    challengeNonce: "nonce-123",
    contractHash: "contract-hash-123",
    skillVersion: "1.0.0",
    skillHash: "skill-hash-123",
    score: 88,
    passed: true,
    hardFailTriggered: false,
    hardFailReasons: [],
    assertionResults: [{ id: "efficiency-check", passed: true }],
    sandboxSignature: "",
    sandboxId: "tee-sandbox-a",
  };
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("attestation-validator", () => {
  it("verifies signed attestations when binding fields are required", () => {
    const secret = "test-tee-secret";
    vi.stubEnv("TEE_SHARED_SECRET", secret);
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "tee-sandbox-a");

    const attestation = makeAttestation();
    attestation.sandboxSignature = signAttestation(attestation, secret);
    const result = verifyAttestation(attestation, { requireBindingFields: true });

    expect(result.decision).toBe("pass");
    expect(result.score).toBe(88);
  });

  it("rejects attestations missing required binding fields", () => {
    vi.stubEnv("TEE_SHARED_SECRET", "test-tee-secret");
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "tee-sandbox-a");
    const attestation = makeAttestation();
    attestation.challengeNonce = undefined;
    attestation.sandboxSignature = "00";

    expect(() => verifyAttestation(attestation, { requireBindingFields: true })).toThrow(
      "Missing required attestation binding field: challengeNonce",
    );
  });

  it("rejects invalid signatures", () => {
    vi.stubEnv("TEE_SHARED_SECRET", "test-tee-secret");
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "tee-sandbox-a");
    const attestation = makeAttestation();
    attestation.sandboxSignature = "deadbeef";

    expect(() => verifyAttestation(attestation, { requireBindingFields: true })).toThrow(
      "Invalid TEE sandbox attestation signature",
    );
  });

  it("rejects attestations when TEE_SHARED_SECRET is missing in non-development mode", () => {
    vi.stubEnv("TEE_SHARED_SECRET", "");
    vi.stubEnv("NODE_ENV", "test");
    const attestation = makeAttestation();
    attestation.sandboxSignature = "deadbeef";

    expect(() => verifyAttestation(attestation)).toThrow(
      "TEE_SHARED_SECRET is not configured",
    );
  });

  it("rejects sandbox IDs that are not allowlisted in shared-key mode", () => {
    vi.stubEnv("TEE_SHARED_SECRET", "test-tee-secret");
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "tee-other");
    const attestation = makeAttestation();
    attestation.sandboxSignature = "deadbeef";

    expect(() => verifyAttestation(attestation, { requireBindingFields: true })).toThrow(
      "Untrusted sandboxId",
    );
  });

  it("rejects passed=true when score is below passing threshold", () => {
    const secret = "test-tee-secret";
    vi.stubEnv("TEE_SHARED_SECRET", secret);
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "tee-sandbox-a");
    const attestation = makeAttestation();
    attestation.score = 40;
    attestation.passed = true;
    attestation.sandboxSignature = signAttestation(attestation, secret);

    expect(() => verifyAttestation(attestation, { passingScore: 70 })).toThrow(
      "Attestation passed flag does not match score threshold",
    );
  });

  it("fails decision when hard fail is triggered even with passing score", () => {
    const secret = "test-tee-secret";
    vi.stubEnv("TEE_SHARED_SECRET", secret);
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "tee-sandbox-a");
    const attestation = makeAttestation();
    attestation.score = 99;
    attestation.passed = true;
    attestation.hardFailTriggered = true;
    attestation.hardFailReasons = ["secret-leak"];
    attestation.sandboxSignature = signAttestation(attestation, secret);

    const result = verifyAttestation(attestation, { passingScore: 70 });
    expect(result.decision).toBe("fail");
    expect(result.hardFail.triggered).toBe(true);
    expect(result.hardFail.reasons).toEqual(["secret-leak"]);
  });

  it("verifies attestations with per-sandbox secrets", () => {
    vi.stubEnv("TEE_SANDBOX_SECRETS_JSON", JSON.stringify({
      "tee-sandbox-a": "sandbox-a-secret",
    }));
    vi.stubEnv("TEE_SHARED_SECRET", "");
    vi.stubEnv("TEE_TRUSTED_SANDBOX_IDS", "");

    const attestation = makeAttestation();
    attestation.sandboxSignature = signAttestation(attestation, "sandbox-a-secret");
    const result = verifyAttestation(attestation, { requireBindingFields: true });
    expect(result.decision).toBe("pass");
  });
});
