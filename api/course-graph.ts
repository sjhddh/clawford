import type { VercelRequest, VercelResponse } from "@vercel/node";
import { COURSE_CATALOG } from "../shared/course-catalog.js";
import { applyRateLimit } from "./_lib/security.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!applyRateLimit(req, res, "course-graph")) return;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const graph = COURSE_CATALOG.map((course) => ({
    courseId: course.id,
    requiredModuleIds: course.requiredModuleIds,
    graduationAssessmentIds: course.graduationAssessmentIds,
    edges: course.modules.flatMap((module) =>
      module.prerequisites.map((pre) => ({ from: pre, to: module.code })),
    ),
  }));

  return res.status(200).json({
    graph,
    lastUpdated: new Date().toISOString(),
  });
}
