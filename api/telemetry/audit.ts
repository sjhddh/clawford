import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../_lib/session.js";
import { applyRateLimit } from "../_lib/security.js";
import { createAuditContext } from "../_lib/telemetry.js";
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

  const attestation: ExamAttestation = {
    attestationId: body.attestationId,
    skillId: body.skillId,
    score: body.score,
    passed: body.passed,
    hardFailTriggered: body.hardFailTriggered,
    hardFailReasons: Array.isArray(body.hardFailReasons) ? body.hardFailReasons : [],
    sandboxSignature: body.sandboxSignature,
    sandboxId: body.sandboxId,
  };

  let validationResult: AttestationValidationResult;
  try {
    validationResult = verifyAttestation(attestation);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Attestation verification failed";
    return res.status(403).json({ error: message });
  }

  const audit = createAuditContext(req, "audit-telemetry");

  audit.log({
    action: "telemetry_audit",
    actorUid: auth.uid,
    status: validationResult.hardFail.triggered ? "rejected" : "success",
    statusCode: 200,
    detail: `Audited TEE production attestation ${attestation.attestationId} for skill ${attestation.skillId}. HardFail: ${validationResult.hardFail.triggered}`,
  });

  return res.status(200).json(validationResult);
}
