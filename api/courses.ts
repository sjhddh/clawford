import type { VercelRequest, VercelResponse } from "@vercel/node";
import { COURSE_CATALOG } from "../shared/course-catalog.js";
import { applyRateLimit } from "./_lib/security.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "courses")) return;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json({
    courses: COURSE_CATALOG,
    lastUpdated: new Date().toISOString(),
  });
}
