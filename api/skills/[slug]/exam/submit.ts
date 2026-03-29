import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { authenticateRequest as getAuth } from "../../../_lib/session.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";
import { verifyAttestation, type ExamAttestation, type AttestationValidationResult } from "../../../lib/attestation-validator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "submit-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const { slug } = req.query;
  const attestation: ExamAttestation = req.body;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Invalid slug" });
  }

  if (!attestation || attestation.skillId !== slug) {
    return res.status(400).json({ error: "Invalid attestation or skill ID mismatch" });
  }

  let validationResult: AttestationValidationResult;
  try {
    // Zero-Knowledge Proof / Signature Verification
    // Clawford no longer executes eval() or regex. The TEE Sandbox is trusted.
    validationResult = verifyAttestation(attestation);
  } catch (error: any) {
    return res.status(403).json({ error: error.message });
  }
  
  // Golden Trace Injection for Few-Shot Learning on failure
  const goldenTracePath = path.join(process.cwd(), "exam-registry", slug, "golden-trace.json");
  if (validationResult.decision === "fail" && fs.existsSync(goldenTracePath)) {
    validationResult.goldenTraceHint = JSON.parse(fs.readFileSync(goldenTracePath, "utf-8"));
  }

  const audit = createAuditContext(req, "submit-exam");
  audit.log({
    action: "exam_submit",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Verified TEE attestation ${attestation.attestationId} for skill ${slug}. Score: ${validationResult.score}`,
  });

  return res.status(200).json(validationResult);
}
