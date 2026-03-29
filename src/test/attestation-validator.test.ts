import { describe, expect, it } from "vitest";
import {
  verifyAttestation,
  type ExamAttestation,
} from "../../api/lib/attestation-validator.js";

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
  };
}

describe("attestation-validator", () => {
  it("passes attestation that meets the score threshold", () => {
    const result = verifyAttestation(makeAttestation(), { requireBindingFields: true });
    expect(result.decision).toBe("pass");
    expect(result.score).toBe(88);
  });

  it("rejects attestations missing required binding fields", () => {
    const attestation = makeAttestation();
    attestation.challengeNonce = undefined;

    expect(() => verifyAttestation(attestation, { requireBindingFields: true })).toThrow(
      "Missing required attestation binding field: challengeNonce",
    );
  });

  it("does not require binding fields when option is false", () => {
    const attestation = makeAttestation();
    attestation.challengeNonce = undefined;
    attestation.contractHash = undefined;

    const result = verifyAttestation(attestation);
    expect(result.decision).toBe("pass");
  });

  it("rejects passed=true when score is below passing threshold", () => {
    const attestation = makeAttestation();
    attestation.score = 40;
    attestation.passed = true;

    expect(() => verifyAttestation(attestation, { passingScore: 70 })).toThrow(
      "Attestation passed flag does not match score threshold",
    );
  });

  it("returns revisit when score is between revisit and passing thresholds", () => {
    const attestation = makeAttestation();
    attestation.score = 55;
    attestation.passed = false;

    const result = verifyAttestation(attestation, { passingScore: 70, revisitScore: 50 });
    expect(result.decision).toBe("revisit");
  });

  it("returns fail when score is below revisit threshold", () => {
    const attestation = makeAttestation();
    attestation.score = 30;
    attestation.passed = false;

    const result = verifyAttestation(attestation, { passingScore: 70, revisitScore: 50 });
    expect(result.decision).toBe("fail");
  });

  it("fails decision when hard fail is triggered even with passing score", () => {
    const attestation = makeAttestation();
    attestation.score = 99;
    attestation.passed = true;
    attestation.hardFailTriggered = true;
    attestation.hardFailReasons = ["secret-leak"];

    const result = verifyAttestation(attestation, { passingScore: 70 });
    expect(result.decision).toBe("fail");
    expect(result.hardFail.triggered).toBe(true);
    expect(result.hardFail.reasons).toEqual(["secret-leak"]);
  });

  it("rejects invalid score ranges", () => {
    const attestation = makeAttestation();
    attestation.score = 150;

    expect(() => verifyAttestation(attestation)).toThrow(
      "Attestation score must be a number between 0 and 100",
    );
  });

  it("accepts optional harnessId without affecting validation", () => {
    const attestation = makeAttestation();
    attestation.harnessId = "LangChain-v0.3";

    const result = verifyAttestation(attestation, { requireBindingFields: true });
    expect(result.decision).toBe("pass");
  });
});
