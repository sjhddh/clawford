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

interface VerifyAttestationOptions {
  requireBindingFields?: boolean;
  passingScore?: number;
  revisitScore?: number;
}

/**
 * Computes the expected HMAC-SHA256 signature for an attestation payload.
 * The sandbox TEE must sign the same canonical payload with the shared secret.
 * Canonicalization rules:
 * - Property order is fixed by this function.
 * - Optional binding fields are normalized to null (never undefined).
 * - assertionResults defaults to [].
 */
export function buildCanonicalAttestationPayload(attestation: ExamAttestation): string {
  return JSON.stringify({
    examAttemptId: attestation.examAttemptId ?? null,
    attestationId: attestation.attestationId,
    skillId: attestation.skillId,
    challengeNonce: attestation.challengeNonce ?? null,
    contractHash: attestation.contractHash ?? null,
    skillVersion: attestation.skillVersion ?? null,
    skillHash: attestation.skillHash ?? null,
    score: attestation.score,
    passed: attestation.passed,
    hardFailTriggered: attestation.hardFailTriggered,
    hardFailReasons: attestation.hardFailReasons,
    assertionResults: attestation.assertionResults ?? [],
    sandboxId: attestation.sandboxId,
  });
}

function computeExpectedSignature(attestation: ExamAttestation, secret: string): string {
  const payload = buildCanonicalAttestationPayload(attestation);
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function parseSandboxSecrets(): Record<string, string> | null {
  const raw = process.env.TEE_SANDBOX_SECRETS_JSON;
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("TEE_SANDBOX_SECRETS_JSON must be a JSON object map");
    }
    const entries = Object.entries(parsed as Record<string, unknown>);
    const cleaned: Record<string, string> = {};
    for (const [sandboxId, secret] of entries) {
      if (typeof sandboxId !== "string" || sandboxId.trim() === "") continue;
      if (typeof secret === "string" && secret.trim() !== "") {
        cleaned[sandboxId.trim()] = secret;
      }
    }
    return cleaned;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "invalid JSON";
    throw new Error(`Invalid TEE_SANDBOX_SECRETS_JSON configuration: ${message}`);
  }
}

function parseTrustedSandboxIds(): Set<string> {
  const raw = process.env.TEE_TRUSTED_SANDBOX_IDS;
  if (!raw) return new Set<string>();
  return new Set(
    raw
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  );
}

function resolveSigningSecret(sandboxId: string): string | null {
  const sandboxSecrets = parseSandboxSecrets();
  if (sandboxSecrets) {
    const sandboxSecret = sandboxSecrets[sandboxId];
    if (!sandboxSecret) {
      throw new Error(`Untrusted sandboxId: ${sandboxId}. No per-sandbox secret configured.`);
    }
    return sandboxSecret;
  }

  const sharedSecret = process.env.TEE_SHARED_SECRET;
  if (!sharedSecret) return null;

  const trustedSandboxIds = parseTrustedSandboxIds();
  if (trustedSandboxIds.size === 0) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[attestation-validator] TEE_TRUSTED_SANDBOX_IDS not set while using TEE_SHARED_SECRET. " +
        "This is ONLY acceptable in local development.",
      );
    } else {
      throw new Error(
        "TEE_TRUSTED_SANDBOX_IDS is required in non-development environments when using TEE_SHARED_SECRET.",
      );
    }
  } else if (!trustedSandboxIds.has(sandboxId)) {
    throw new Error(`Untrusted sandboxId: ${sandboxId}. Add it to TEE_TRUSTED_SANDBOX_IDS.`);
  }

  return sharedSecret;
}

export function verifyAttestation(
  attestation: ExamAttestation,
  options?: VerifyAttestationOptions,
): AttestationValidationResult {
  if (!attestation.sandboxSignature) {
    throw new Error("Missing cryptographic signature from Certified Software TEE (sTEE)");
  }
  if (!attestation.sandboxId || typeof attestation.sandboxId !== "string") {
    throw new Error("Missing sandboxId on attestation");
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

  const signingSecret = resolveSigningSecret(attestation.sandboxId);

  if (!signingSecret) {
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
    const expected = computeExpectedSignature(attestation, signingSecret);
    const sigBuf = new Uint8Array(Buffer.from(attestation.sandboxSignature, "hex"));
    const expectedBuf = new Uint8Array(Buffer.from(expected, "hex"));
    const isValid =
      sigBuf.length === expectedBuf.length && timingSafeEqual(sigBuf, expectedBuf);

    if (!isValid) {
      throw new Error("Invalid sTEE sandbox attestation signature. Proof of Execution rejected.");
    }
  }

  const passingScore = options?.passingScore ?? 70;
  const revisitScore = options?.revisitScore ?? 50;
  const shouldPass = attestation.score >= passingScore;
  if (!attestation.hardFailTriggered && attestation.passed !== shouldPass) {
    throw new Error(
      `Attestation passed flag does not match score threshold. score=${attestation.score}, passingScore=${passingScore}, passed=${attestation.passed}`,
    );
  }

  let decision: "pass" | "revisit" | "fail" = "fail";
  if (!attestation.hardFailTriggered) {
    if (shouldPass) decision = "pass";
    else if (attestation.score >= revisitScore) decision = "revisit";
  }

  return {
    score: attestation.score,
    maxScore: 100,
    decision,
    hardFail: {
      triggered: attestation.hardFailTriggered,
      reasons: attestation.hardFailReasons ?? [],
    },
  };
}
