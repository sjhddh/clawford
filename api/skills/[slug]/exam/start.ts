import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAuth } from "../../../_lib/identity.js";
import { applyRateLimit } from "../../../_lib/security.js";
import { createAuditContext } from "../../../_lib/telemetry.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!applyRateLimit(req, res, "start-exam")) return;

  const auth = await getAuth(req);
  if (!auth) return res.status(401).json({ error: "Unauthorized" });

  const audit = createAuditContext(req, "start-exam");
  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Missing skill slug" });
  }

  // Generate dynamic parameters
  const targetDb = `staging_db_${Math.floor(Math.random() * 1000)}`;
  const forbiddenPattern = [".env", ".credentials.json"][Math.floor(Math.random() * 2)];

  audit.log({
    action: "exam_start",
    actorUid: auth.uid,
    status: "success",
    statusCode: 200,
    detail: `Started exam for skill ${slug}`,
  });

  return res.status(200).json({
    skillId: slug,
    scenario: "Dynamic scenario text for " + slug,
    dynamicParams: {
      target_db: targetDb,
      forbidden_pattern: forbiddenPattern,
    },
  });
}
