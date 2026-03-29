import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../_lib/session.js";
import { applyRateLimit } from "../_lib/security.js";
import { createAuditContext } from "../_lib/telemetry.js";
import { updateTranscript } from "../_lib/blob.js";
import {
  verifyAttestation,
  type ExamAttestation,
  type AttestationValidationResult,
} from "../lib/attestation-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "audit-telemetry")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const body = req.body;

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Missing request body" });
  }

  const requiredFields = ["attestationId", "skillId", "score", "passed", "hardFailTriggered", "sandboxSignature", "sandboxId"] as const;
  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === null) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  if (typeof body.score !== "number" || body.score < 0 || body.score > 100) {
    return res.status(400).json({ error: "Score must be a number between 0 and 100" });
  }
  if (typeof body.passed !== "boolean" || typeof body.hardFailTriggered !== "boolean") {
    return res.status(400).json({ error: "passed and hardFailTriggered must be booleans" });
  }
  if (body.skillVersion !== undefined && typeof body.skillVersion !== "string") {
    return res.status(400).json({ error: "skillVersion must be a string when provided" });
  }
  if (body.skillHash !== undefined && typeof body.skillHash !== "string") {
    return res.status(400).json({ error: "skillHash must be a string when provided" });
  }

  const attestation: ExamAttestation = {
    attestationId: body.attestationId,
    skillId: body.skillId,
    score: body.score,
    passed: body.passed,
    hardFailTriggered: body.hardFailTriggered,
    hardFailReasons: Array.isArray(body.hardFailReasons) ? body.hardFailReasons : [],
    skillVersion: body.skillVersion,
    skillHash: body.skillHash,
    // sandboxSignature: body.sandboxSignature,
    harnessId: body.sandboxId,
  };

  const telemetryBindingRequired = process.env.TEE_TELEMETRY_REQUIRE_BINDING === "true";
  if (telemetryBindingRequired && (!attestation.skillVersion || !attestation.skillHash)) {
    return res.status(400).json({
      error: "skillVersion and skillHash are required when TEE_TELEMETRY_REQUIRE_BINDING=true",
    });
  }

  const passThresholdRaw = process.env.TEE_DEFAULT_PASSING_SCORE;
  const passThreshold = passThresholdRaw ? Number(passThresholdRaw) : 70;
  if (!Number.isFinite(passThreshold) || passThreshold < 0 || passThreshold > 100) {
    return res.status(500).json({
      error: "TEE_DEFAULT_PASSING_SCORE must be a number between 0 and 100",
    });
  }

  let validationResult: AttestationValidationResult;
  try {
    validationResult = verifyAttestation(attestation, { passingScore: passThreshold });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Attestation verification failed";
    return res.status(403).json({ error: message });
  }

  const audit = createAuditContext(req, "audit-telemetry");
  let credentialRevoked = false;
  let revokedCredentials = 0;

  if (validationResult.hardFail.triggered) {
    const updated = await updateTranscript(auth.uid, (transcript) => {
      if (!transcript.skillExamResults || transcript.skillExamResults.length === 0) return transcript;

      let changed = false;
      for (const exam of transcript.skillExamResults) {
        const versionMatches = !telemetryBindingRequired
          || (
            attestation.skillVersion
            && attestation.skillHash
            && exam.skillVersion === attestation.skillVersion
            && exam.skillHash === attestation.skillHash
          );
        if (
          exam.skillId === attestation.skillId
          && exam.credentialStatus === "active"
          && versionMatches
        ) {
          exam.credentialStatus = "revoked";
          changed = true;
        }
      }
      if (!changed) return transcript;

      transcript.totalSkillCredits = transcript.skillExamResults
        .filter((r) => r.credentialStatus === "active" && r.decision === "pass")
        .reduce((sum, r) => sum + r.credits, 0);
      return transcript;
    });
    if (updated?.skillExamResults?.length) {
      revokedCredentials = updated.skillExamResults.filter(
        (exam) => exam.skillId === attestation.skillId && exam.credentialStatus === "revoked",
      ).length;
      credentialRevoked = revokedCredentials > 0;
    }
  }

  audit.log({
    action: "telemetry_audit",
    actorUid: auth.uid,
    status: validationResult.hardFail.triggered ? "rejected" : "success",
    statusCode: 200,
    detail: `Audited TEE production attestation ${attestation.attestationId} for skill ${attestation.skillId}. HardFail: ${validationResult.hardFail.triggered}. Revoked: ${credentialRevoked}`,
  });

  return res.status(200).json({
    ...validationResult,
    credentialRevoked,
    revokedCredentials,
  });
}
