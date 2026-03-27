import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getWallIndex } from "./_lib/blob.js";
import { applyRateLimit } from "./_lib/security.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!applyRateLimit(req, res, "students")) return;

  try {
    const wall = await getWallIndex();

    res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate=10");
    return res.status(200).json(wall);
  } catch (err) {
    console.error("students error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
