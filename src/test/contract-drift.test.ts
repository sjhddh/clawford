import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it, vi, afterEach } from "vitest";
import openapi from "../../public/openapi.json";
import sampleCourse from "../../courses/agent-hard-assessment-sample/course.json";
import coursePackageSchema from "../../docs/schemas/course-package.schema.json";
import {
  COURSE_CATALOG,
  FOUNDATIONS_GRADUATION_ASSESSMENT_ID,
} from "../../shared/course-catalog";

afterEach(() => {
  vi.resetModules();
  vi.unstubAllEnvs();
  vi.doUnmock("@vercel/blob");
});

describe("Assessment contract drift protection", () => {
  it("keeps docs, UI snippets, OpenAPI, and runtime catalog aligned", () => {
    const repoRoot = process.cwd();
    const clawfordPlaybook = readFileSync(
      path.join(repoRoot, "CLAWFORD.md"),
      "utf8",
    );
    const terminalSection = readFileSync(
      path.join(repoRoot, "src/components/TerminalSection.tsx"),
      "utf8",
    );
    const sessionContext = readFileSync(
      path.join(repoRoot, "src/contexts/SessionContext.tsx"),
      "utf8",
    );

    expect(FOUNDATIONS_GRADUATION_ASSESSMENT_ID).toBe("clawford-foundations-agent-hard");
    expect(clawfordPlaybook).toContain(FOUNDATIONS_GRADUATION_ASSESSMENT_ID);
    expect(terminalSection).toContain(FOUNDATIONS_GRADUATION_ASSESSMENT_ID);
    expect(sessionContext).toContain(FOUNDATIONS_GRADUATION_ASSESSMENT_ID);
    expect(COURSE_CATALOG[0]?.graduationAssessmentIds).toEqual([
      FOUNDATIONS_GRADUATION_ASSESSMENT_ID,
    ]);

    const startPath = (openapi as { paths: Record<string, any> }).paths["/api/assessments/start"];
    expect(startPath.post.requestBody.content["application/json"].example.assessmentId).toBe(
      FOUNDATIONS_GRADUATION_ASSESSMENT_ID,
    );
  });
});

describe("Public API contract coverage", () => {
  it("documents browser session and public student directory surfaces", () => {
    const paths = (openapi as { paths: Record<string, unknown> }).paths;
    expect(paths).toHaveProperty("/api/session");
    expect((paths["/api/session"] as Record<string, unknown>)).toHaveProperty("post");
    expect(paths).toHaveProperty("/api/students");
  });
});

describe("Session secret hardening", () => {
  it("derives deterministic secret from BLOB_READ_WRITE_TOKEN when SESSION_SECRET is missing", async () => {
    vi.stubEnv("BLOB_READ_WRITE_TOKEN", "test-blob-token-for-derivation");
    const { signSession, verifySession } = await import("../../api/_lib/session.js");

    const payload = {
      uid: "CLW-hardening000001",
      username: "hardening-user",
      iat: Date.now(),
      exp: Date.now() + 60_000,
    };
    const token = signSession(payload);
    expect(typeof token).toBe("string");
    expect(token.split(".")).toHaveLength(3);

    const verified = verifySession(token);
    expect(verified).not.toBeNull();
    expect(verified!.uid).toBe("CLW-hardening000001");
  });

  it("derived secret is deterministic (same blob token = same result)", async () => {
    const { createHmac } = await import("crypto");
    const blobToken = "test-blob-token-for-derivation";
    const a = createHmac("sha256", "clawford-session-derived-key").update(blobToken).digest("hex");
    const b = createHmac("sha256", "clawford-session-derived-key").update(blobToken).digest("hex");
    expect(a).toBe(b);
    expect(a).toHaveLength(64);
  });
});

describe("Admin secret transport", () => {
  it("rejects query-string admin codes", async () => {
    vi.stubEnv("ADMIN_CODE", "top-secret");
    const { getAdminCode, isAdmin } = await import("../../api/_lib/security.js");
    const req = {
      headers: {},
      body: {},
      query: { adminCode: "top-secret" },
    } as any;

    expect(getAdminCode(req)).toBeNull();
    expect(isAdmin(req)).toBe(false);
  });

  it("accepts x-admin-code header and request body adminCode", async () => {
    vi.stubEnv("ADMIN_CODE", "top-secret");
    const { getAdminCode, isAdmin } = await import("../../api/_lib/security.js");

    const headerReq = {
      headers: { "x-admin-code": "top-secret" },
      body: {},
      query: {},
    } as any;
    const bodyReq = {
      headers: {},
      body: { adminCode: "top-secret" },
      query: {},
    } as any;

    expect(getAdminCode(headerReq)).toBe("top-secret");
    expect(isAdmin(headerReq)).toBe(true);
    expect(getAdminCode(bodyReq)).toBe("top-secret");
    expect(isAdmin(bodyReq)).toBe(true);
  });
});

describe("Reset DB pagination", () => {
  it("lists every blob page instead of truncating at the first 500 entries", async () => {
    const list = vi
      .fn()
      .mockResolvedValueOnce({
        blobs: [{ pathname: "clawford/a.json" }],
        cursor: "page-2",
        hasMore: true,
      })
      .mockResolvedValueOnce({
        blobs: [{ pathname: "clawford/b.json" }],
        hasMore: false,
      });

    vi.doMock("@vercel/blob", () => ({
      list,
      del: vi.fn(),
      put: vi.fn(),
    }));

    const { listAllClawfordBlobPaths } = await import("../../api/resetdb.js");
    await expect(listAllClawfordBlobPaths("clawford/")).resolves.toEqual([
      "clawford/a.json",
      "clawford/b.json",
    ]);
    expect(list).toHaveBeenNthCalledWith(1, {
      prefix: "clawford/",
      limit: 500,
      cursor: undefined,
    });
    expect(list).toHaveBeenNthCalledWith(2, {
      prefix: "clawford/",
      limit: 500,
      cursor: "page-2",
    });
  });
});

describe("Schema and sample alignment", () => {
  it("allows the first-party sample execution exam fields", () => {
    const assessmentSchema = (coursePackageSchema as any).$defs.Assessment.properties;
    const reviewStatusSchema = (coursePackageSchema as any).$defs.ReviewStatus.properties;
    const sampleAssessment = (sampleCourse as any).assessments[0];

    expect(assessmentSchema.type.enum).toContain(sampleAssessment.type);
    expect(sampleAssessment.passingThreshold).toBeGreaterThanOrEqual(
      assessmentSchema.passingThreshold.minimum,
    );
    expect(sampleAssessment.passingThreshold).toBeLessThanOrEqual(
      assessmentSchema.passingThreshold.maximum,
    );
    expect(reviewStatusSchema.status.enum).toContain((sampleCourse as any).reviewStatus.status);
    expect(assessmentSchema).toHaveProperty("contractPath");
    expect(assessmentSchema).toHaveProperty("reviewerGuidePath");
    expect(assessmentSchema).toHaveProperty("sampleSubmissionPath");
  });
});
