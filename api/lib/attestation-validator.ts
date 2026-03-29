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
  harnessId?: string;
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

export function verifyAttestation(
  attestation: ExamAttestation,
  options?: VerifyAttestationOptions,
): AttestationValidationResult {
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

  if (typeof attestation.score !== "number" || attestation.score < 0 || attestation.score > 100) {
    throw new Error("Attestation score must be a number between 0 and 100");
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
