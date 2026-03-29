import { createHmac, timingSafeEqual } from "crypto";

export interface ExamAttestation {
  examAttemptId?: string;
  attestationId: string;
  skillId: string;
  challengeNonce?: string;
  contractHash?: string;
  skillVersion?: string;
  skillHash?: string;
  score: number;
  passed: boolean;
  hardFailTriggered: boolean;
  hardFailReasons: string[];
  assertionResults?: { id: string; passed: boolean }[];
  sandboxSignature: string;
  sandboxId: string;
}

export interface AttestationValidationResult {
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  hardFail: { triggered: boolean; reasons: string[] };
  goldenTraceHint?: Record<string, unknown>;
}

/**
 * Computes the expected HMAC-SHA256 signature for an attestation payload.
 * The sandbox TEE must sign the same canonical payload with the shared secret.
 */
function computeExpectedSignature(attestation: ExamAttestation, secret: string): string {
  const payload = JSON.stringify({
    examAttemptId: attestation.examAttemptId,
    attestationId: attestation.attestationId,
    skillId: attestation.skillId,
    challengeNonce: attestation.challengeNonce,
    contractHash: attestation.contractHash,
    skillVersion: attestation.skillVersion,
    skillHash: attestation.skillHash,
    score: attestation.score,
    passed: attestation.passed,
    hardFailTriggered: attestation.hardFailTriggered,
    hardFailReasons: attestation.hardFailReasons,
    assertionResults: attestation.assertionResults ?? [],
    sandboxId: attestation.sandboxId,
  });
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function verifyAttestation(
  attestation: ExamAttestation,
  options?: { requireBindingFields?: boolean },
): AttestationValidationResult {
  if (!attestation.sandboxSignature) {
    throw new Error("Missing cryptographic signature from Trusted Execution Environment (TEE)");
  }
  if (options?.requireBindingFields) {
    const required = [
      "examAttemptId",
      "challengeNonce",
      "contractHash",
      "skillVersion",
      "skillHash",
    ] as const;
    for (const field of required) {
      if (!attestation[field] || typeof attestation[field] !== "string") {
        throw new Error(`Missing required attestation binding field: ${field}`);
      }
    }
  }

  const sharedSecret = process.env.TEE_SHARED_SECRET;

  if (!sharedSecret) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[attestation-validator] TEE_SHARED_SECRET not set — accepting attestation without cryptographic verification. " +
        "This is ONLY acceptable in local development.",
      );
    } else {
      throw new Error(
        "TEE_SHARED_SECRET is not configured. Cannot verify attestation signatures. " +
        "Set this environment variable in your deployment.",
      );
    }
  } else {
    const expected = computeExpectedSignature(attestation, sharedSecret);
    const sigBuf = new Uint8Array(Buffer.from(attestation.sandboxSignature, "hex"));
    const expectedBuf = new Uint8Array(Buffer.from(expected, "hex"));
    const isValid =
      sigBuf.length === expectedBuf.length && timingSafeEqual(sigBuf, expectedBuf);

    if (!isValid) {
      throw new Error("Invalid TEE sandbox attestation signature. Proof of Execution rejected.");
    }
  }

  let decision: "pass" | "revisit" | "fail" = "fail";
  if (!attestation.hardFailTriggered) {
    if (attestation.passed) decision = "pass";
    else if (attestation.score >= 50) decision = "revisit";
  }

  return {
    score: attestation.score,
    maxScore: 100,
    decision,
    hardFail: {
      triggered: attestation.hardFailTriggered,
      reasons: attestation.hardFailReasons || [],
    },
  };
}
