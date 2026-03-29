import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest as getAuth } from "../_lib/session.js";
import { applyRateLimit } from "../_lib/security.js";
import { createAuditContext } from "../_lib/telemetry.js";
import { verifyAttestation, type ExamAttestation, type AttestationValidationResult } from "../lib/attestation-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "audit-telemetry")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const attestation: ExamAttestation = req.body;

  if (!attestation || !attestation.skillId) {
    return res.status(400).json({ error: "Invalid attestation or missing skill ID" });
  }

  let validationResult: AttestationValidationResult;
  try {
    validationResult = verifyAttestation(attestation);
  } catch (error: any) {
    return res.status(403).json({ error: error.message });
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
