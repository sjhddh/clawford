import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put, list, del } from "@vercel/blob";
import { isAdmin } from "./_lib/security.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!isAdmin(req)) {
    return res.status(403).json({ error: "Admin access required" });
  }

  try {
    const { blobs } = await list({ prefix: "clawford/", limit: 500 });
    const deleted: string[] = [];

    for (const blob of blobs) {
      await del(blob.url);
      deleted.push(blob.pathname);
    }

    const now = new Date().toISOString();
    await put("clawford/identity-registry.json", JSON.stringify({ users: {}, version: 1 }, null, 2), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });

    await put("clawford/student-wall.json", JSON.stringify({ students: [], lastUpdated: now }, null, 2), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });

    await put("clawford/rate-limits.json", JSON.stringify({ registrations: {}, loginFailures: {}, examResits: {} }, null, 2), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });

    return res.status(200).json({
      ok: true,
      deleted: deleted.length,
      deletedPaths: deleted,
      message: "All student data cleared. Fresh registry, wall, and rate limits initialized.",
    });
  } catch (err) {
    console.error("reset error:", err);
    const detail = err instanceof Error ? err.message : undefined;
    return res.status(500).json({ error: "Reset failed", detail });
  }
}
