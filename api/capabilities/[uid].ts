import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getTranscript } from "../_lib/blob.js";
import { applyRateLimit } from "../_lib/security.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "get-capabilities")) return;

  const { uid } = req.query;

  if (!uid || typeof uid !== "string") {
    return res.status(400).json({ error: "Missing UID" });
  }

  const transcript = await getTranscript(uid);
  if (!transcript) return res.status(404).json({ error: "Transcript not found" });

  const activeSkills = (transcript.skillExamResults ?? [])
    .filter((s) => s.credentialStatus === "active" && s.decision === "pass");

  // Public projection only: expose skill/tier/version for trust decisions.
  // Scores, timestamps, and attestation IDs are omitted — use
  // /api/transcript-self with auth for the full record.
  return res.status(200).json({
    uid,
    capabilities: activeSkills.map((s) => ({
      skillId: s.skillId,
      version: s.skillVersion,
      tier: s.tier,
    })),
    totalSkillCredits: transcript.totalSkillCredits ?? 0,
  });
}
