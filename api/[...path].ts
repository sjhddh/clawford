import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const pathParts = Array.isArray(req.query.path)
    ? req.query.path
    : typeof req.query.path === "string"
      ? [req.query.path]
      : [];
  const requestedPath = `/api/${pathParts.join("/")}`;

  return res.status(404).json({
    error: "Not Found",
    code: "NOT_FOUND",
    path: requestedPath,
  });
}
