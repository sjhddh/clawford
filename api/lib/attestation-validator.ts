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
  goldenTraceHint?: any; // The full trace returned to help failing agents
}

export function verifyAttestation(attestation: ExamAttestation): AttestationValidationResult {
  // In production, fetch the public key for the sandboxId from a trusted registry.
  // For this V2 upgrade, we perform a cryptographic signature check simulation.
  
  if (!attestation.sandboxSignature) {
    throw new Error("Missing cryptographic signature from Trusted Execution Environment (TEE)");
  }

  // Simulate ECDSA / ZKP verification of the sandbox state proof
  const isValid = attestation.sandboxSignature.startsWith("zkp_") || attestation.sandboxSignature.length > 16;

  if (!isValid) {
    throw new Error("Invalid TEE sandbox attestation signature. Proof of Execution rejected.");
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
    hardFail: { triggered: attestation.hardFailTriggered, reasons: attestation.hardFailReasons || [] },
  };
}
