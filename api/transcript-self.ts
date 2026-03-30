import type { VercelRequest, VercelResponse } from "@vercel/node";
import { applyRateLimit } from "./_lib/security.js";
import { authenticateRequest } from "./_lib/session.js";
import { calculateActiveSkillCredits, getTranscript, listSkillCredentials } from "./_lib/blob.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "transcript")) return;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({
      error: "Authentication required. Use Authorization: Bearer <token>.",
      code: "AUTH_REQUIRED",
    });
  }

  const transcript = await getTranscript(auth.uid);
  if (!transcript) {
    return res.status(404).json({ error: "Transcript not found" });
  }

  const persisted = await listSkillCredentials(auth.uid);
  if (persisted.length > 0) {
    transcript.skillExamResults = persisted;
    transcript.totalSkillCredits = calculateActiveSkillCredits(persisted);
  }

  return res.status(200).json({
    transcript,
    authMethod: auth.method,
    deprecation:
      auth.method === "password"
        ? "Password-in-body auth is deprecated. Switch to Authorization: Bearer <token>."
        : undefined,
  });
}
