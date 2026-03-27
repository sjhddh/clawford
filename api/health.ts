import type { VercelRequest, VercelResponse } from "@vercel/node";
import { applyRateLimit } from "./_lib/security.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "health")) return;

  res.status(200).json({
    ok: true,
    time: new Date().toISOString(),
    node: process.version,
  });
}
