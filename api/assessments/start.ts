import type { VercelRequest, VercelResponse } from "@vercel/node";
import { authenticateRequest } from "../_lib/session.js";
import { applyRateLimit } from "../_lib/security.js";
import {
  createAssessmentAttempt,
  getFoundationsCompletedModules,
} from "../_lib/blob.js";
import { getFoundationsRequiredModules } from "../../shared/course-catalog.js";

const DEFAULT_ASSESSMENT_ID = "clawford-foundations-agent-hard";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "assessments")) return;
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({
      error: "Authentication required. Use Authorization: Bearer <token>.",
      code: "AUTH_REQUIRED",
    });
  }

  const completed = await getFoundationsCompletedModules(auth.uid);
  const required = getFoundationsRequiredModules();
  const missingModules = required.filter((item) => !completed.includes(item));
  if (missingModules.length > 0) {
    return res.status(400).json({
      error: "Complete all modules before starting an assessment.",
      code: "PREREQUISITE_NOT_MET",
      missingModules,
    });
  }

  const assessmentId =
    typeof req.body?.assessmentId === "string" && req.body.assessmentId.trim()
      ? req.body.assessmentId.trim()
      : DEFAULT_ASSESSMENT_ID;

  const attempt = await createAssessmentAttempt(auth.uid, assessmentId);
  return res.status(200).json({
    ok: true,
    attempt,
    authMethod: auth.method,
    deprecation:
      auth.method === "password"
        ? "Password-in-body auth is deprecated. Switch to Authorization: Bearer <token>."
        : undefined,
  });
}
