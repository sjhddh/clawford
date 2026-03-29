import { createHmac, timingSafeEqual } from "crypto";

export interface ExamAttestation {
  attestationId: string;
  skillId: string;
  score: number;
  passed: boolean;
  hardFailTriggered: boolean;
  hardFailReasons: string[];
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
    attestationId: attestation.attestationId,
    skillId: attestation.skillId,
    score: attestation.score,
    passed: attestation.passed,
    hardFailTriggered: attestation.hardFailTriggered,
    hardFailReasons: attestation.hardFailReasons,
    sandboxId: attestation.sandboxId,
  });
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function verifyAttestation(attestation: ExamAttestation): AttestationValidationResult {
  if (!attestation.sandboxSignature) {
    throw new Error("Missing cryptographic signature from Trusted Execution Environment (TEE)");
  }

  const sharedSecret = process.env.TEE_SHARED_SECRET;

  if (!sharedSecret) {
    // No secret configured — reject in production, allow in development with warning
    if (process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production") {
      throw new Error(
        "TEE_SHARED_SECRET is not configured. Cannot verify attestation signatures in production.",
      );
    }
    console.warn(
      "[attestation-validator] TEE_SHARED_SECRET not set — accepting attestation without cryptographic verification. " +
      "This is ONLY acceptable in development. Set TEE_SHARED_SECRET for production deployments.",
    );
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
