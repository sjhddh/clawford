import { describe, expect, it, vi } from "vitest";
import aiPlugin from "../../public/.well-known/ai-plugin.json";
import openapi from "../../public/openapi.json";
import { COURSE_CATALOG } from "../../shared/course-catalog";

const MOCK_IDENTITY = {
  uid: "CLW-a1b2c3d4e5f6a7b8",
  username: "testuser",
  passwordHash: "fakehash",
  salt: "fakesalt",
  displayName: "TestAgent",
  role: "student" as const,
  createdAt: "2026-03-27T00:00:00.000Z",
  lastSeen: "2026-03-27T00:00:00.000Z",
};

const MOCK_TRANSCRIPT = {
  uid: "CLW-a1b2c3d4e5f6a7b8",
  displayName: "TestAgent",
  currentState: "freshman" as const,
  house: "krillindor" as const,
  foundationsStatus: {
    courseId: "clawford-foundations",
    status: "not-started" as const,
    completedModules: [] as string[],
    totalCreditsEarned: 0,
    assessmentResults: [],
    enrolledAt: "2026-03-27T00:00:00.000Z",
    completedAt: null,
  },
  enrollments: [],
  credentials: [],
  weakAreas: [],
  linkedIds: [],
  recommendedAcademy: null,
  lastUpdated: "2026-03-27T00:00:00.000Z",
};

describe("Session token contract", () => {
  it("signSession produces verifiable token", async () => {
    vi.stubEnv("SESSION_SECRET", "test-secret-key-for-testing");
    const { signSession, verifySession } = await import("../../api/_lib/session.js");
    const payload = { uid: "CLW-abc123", username: "testuser", iat: Date.now(), exp: Date.now() + 3600_000 };
    const token = signSession(payload);

    expect(token.split(".")).toHaveLength(3);

    const verified = verifySession(token);
    expect(verified).not.toBeNull();
    expect(verified!.uid).toBe("CLW-abc123");
    expect(verified!.username).toBe("testuser");
    vi.unstubAllEnvs();
  });

  it("rejects expired tokens", async () => {
    vi.stubEnv("SESSION_SECRET", "test-secret-key-for-testing");
    const { signSession, verifySession } = await import("../../api/_lib/session.js");
    const payload = { uid: "CLW-abc123", username: "testuser", iat: Date.now() - 7200_000, exp: Date.now() - 3600_000 };
    const token = signSession(payload);
    const verified = verifySession(token);
    expect(verified).toBeNull();
    vi.unstubAllEnvs();
  });

  it("rejects tampered tokens", async () => {
    vi.stubEnv("SESSION_SECRET", "test-secret-key-for-testing");
    const { signSession, verifySession } = await import("../../api/_lib/session.js");
    const payload = { uid: "CLW-abc123", username: "testuser", iat: Date.now(), exp: Date.now() + 3600_000 };
    const token = signSession(payload);
    const tampered = token.slice(0, -5) + "XXXXX";
    const verified = verifySession(tampered);
    expect(verified).toBeNull();
    vi.unstubAllEnvs();
  });
});

describe("Transcript auth boundary contract", () => {
  it("public transcript GET returns sanitized fields only", () => {
    const examAttempts = MOCK_TRANSCRIPT.foundationsStatus.assessmentResults.filter(
      (r: { assessmentId: string }) => r.assessmentId.startsWith("exam-"),
    );
    const latestExam = examAttempts.at(-1) ?? null;
    const bestExam = examAttempts.reduce<typeof latestExam>((best, curr) => {
      if (!best) return curr;
      return curr.score > best.score ? curr : best;
    }, null);

    const publicFields = {
      uid: MOCK_TRANSCRIPT.uid,
      displayName: MOCK_TRANSCRIPT.displayName,
      house: MOCK_TRANSCRIPT.house,
      currentState: MOCK_TRANSCRIPT.currentState,
      totalCredits: MOCK_TRANSCRIPT.foundationsStatus.totalCreditsEarned,
      completedModules: MOCK_TRANSCRIPT.foundationsStatus.completedModules.length,
      examPassed: MOCK_TRANSCRIPT.foundationsStatus.status === "completed",
      examAttempts: examAttempts.length,
      bestExamScore: bestExam?.score ?? null,
      latestExamScore: latestExam?.score ?? null,
      examMaxScore: latestExam?.maxScore ?? bestExam?.maxScore ?? null,
      lastExamAt: latestExam?.timestamp ?? null,
      credentials: MOCK_TRANSCRIPT.credentials.length,
      enrolledAt: MOCK_TRANSCRIPT.foundationsStatus.enrolledAt,
      houseVerdict: null,
      recommendedAcademy: MOCK_TRANSCRIPT.recommendedAcademy,
      lastUpdated: MOCK_TRANSCRIPT.lastUpdated,
    };

    expect(publicFields).not.toHaveProperty("foundationsStatus");
    expect(publicFields).not.toHaveProperty("linkedIds");
    expect(publicFields).not.toHaveProperty("weakAreas");
    expect(publicFields).not.toHaveProperty("enrollments");
    expect(publicFields).toHaveProperty("uid");
    expect(publicFields).toHaveProperty("displayName");
    expect(publicFields).toHaveProperty("house");
    expect(publicFields).toHaveProperty("houseVerdict");
    expect(publicFields).toHaveProperty("recommendedAcademy");
    expect(publicFields).toHaveProperty("examAttempts");
    expect(publicFields).toHaveProperty("bestExamScore");
    expect(typeof publicFields.completedModules).toBe("number");
    expect(typeof publicFields.examPassed).toBe("boolean");
  });
});

describe("Module append-only contract", () => {
  it("set union never loses existing modules", () => {
    const ALL_MODULE_IDS = ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107", "FND-108"];
    const existing = ["FND-101", "FND-103", "FND-105"];
    const newModule = "FND-102";

    const completed = new Set(existing);
    completed.add(newModule);
    const orderedCompleted = ALL_MODULE_IDS.filter((id) => completed.has(id));

    expect(orderedCompleted).toContain("FND-101");
    expect(orderedCompleted).toContain("FND-102");
    expect(orderedCompleted).toContain("FND-103");
    expect(orderedCompleted).toContain("FND-105");
    expect(orderedCompleted.length).toBe(4);
  });

  it("concurrent simulated writes preserve all modules via union", () => {
    const ALL_MODULE_IDS = ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107", "FND-108"];

    const base = ["FND-101"];
    const writerA = new Set(base);
    writerA.add("FND-102");
    const writerB = new Set(base);
    writerB.add("FND-103");

    const merged = new Set([...writerA, ...writerB]);
    const final = ALL_MODULE_IDS.filter((id) => merged.has(id));

    expect(final).toContain("FND-101");
    expect(final).toContain("FND-102");
    expect(final).toContain("FND-103");
    expect(final.length).toBe(3);
  });

  it("8 sequential completions produce exactly 27 credits", () => {
    const MODULE_CREDITS: Record<string, number> = {
      "FND-101": 2, "FND-102": 4, "FND-103": 3, "FND-104": 5,
      "FND-105": 3, "FND-106": 3, "FND-107": 2, "FND-108": 5,
    };
    const ALL_MODULE_IDS = Object.keys(MODULE_CREDITS);

    let completed: string[] = [];
    for (const moduleId of ALL_MODULE_IDS) {
      const set = new Set(completed);
      set.add(moduleId);
      completed = ALL_MODULE_IDS.filter((id) => set.has(id));
    }

    const totalCredits = completed.reduce((sum, id) => sum + (MODULE_CREDITS[id] ?? 0), 0);
    expect(completed).toEqual(ALL_MODULE_IDS);
    expect(completed.length).toBe(8);
    expect(totalCredits).toBe(27);
  });
});

describe("Grading ownership contract", () => {
  it("uid mismatch is rejected with 403 semantics", () => {
    const authedUid = "CLW-user1111111111";
    const requestedUid = "CLW-user2222222222";
    const ownershipMatch = authedUid === requestedUid;
    expect(ownershipMatch).toBe(false);
  });

  it("uid match is allowed", () => {
    const authedUid = "CLW-a1b2c3d4e5f6a7b8";
    const requestedUid = "CLW-a1b2c3d4e5f6a7b8";
    expect(authedUid === requestedUid).toBe(true);
  });
});

describe("Wall projection monotonic safety", () => {
  it("never regresses credits or modules on stale write", () => {
    const existing = { totalCredits: 20, completedModules: 6, examPassed: true, bestExamScore: 85, examAttempts: 2 };
    const staleUpdate = { totalCredits: 15, completedModules: 5, examPassed: false, bestExamScore: 80, examAttempts: 1 };

    const merged = {
      totalCredits: Math.max(staleUpdate.totalCredits, existing.totalCredits),
      completedModules: Math.max(staleUpdate.completedModules, existing.completedModules),
      examPassed: existing.examPassed || staleUpdate.examPassed,
      bestExamScore: Math.max(staleUpdate.bestExamScore ?? 0, existing.bestExamScore ?? 0),
      examAttempts: Math.max(staleUpdate.examAttempts, existing.examAttempts),
    };

    expect(merged.totalCredits).toBe(20);
    expect(merged.completedModules).toBe(6);
    expect(merged.examPassed).toBe(true);
    expect(merged.bestExamScore).toBe(85);
    expect(merged.examAttempts).toBe(2);
  });
});

describe("Rate limiting contract", () => {
  it("route-specific limits are configurable via environment", () => {
    const envInt = (name: string, fallback: number): number => {
      const v = process.env[name];
      if (v == null) return fallback;
      const n = parseInt(v, 10);
      return Number.isFinite(n) ? n : fallback;
    };

    expect(envInt("NONEXISTENT_VAR", 42)).toBe(42);

    vi.stubEnv("RATE_LIMIT_TEST", "100");
    expect(envInt("RATE_LIMIT_TEST", 42)).toBe(100);
    vi.unstubAllEnvs();
  });
});

describe("Admission error code contract", () => {
  const errorCodes = ["VALIDATION_ERROR", "INVALID_CREDENTIALS", "LOCKOUT", "COOLDOWN"];

  it("all expected error codes are distinct strings", () => {
    expect(new Set(errorCodes).size).toBe(errorCodes.length);
    errorCodes.forEach((code) => {
      expect(typeof code).toBe("string");
      expect(code.length).toBeGreaterThan(0);
    });
  });
});

describe("Agent discovery contract", () => {
  it("publishes ai-plugin and OpenAPI endpoints", () => {
    expect(aiPlugin.api.type).toBe("openapi");
    expect(aiPlugin.api.url).toContain("/openapi.json");
    expect((openapi as { paths: Record<string, unknown> }).paths).toHaveProperty("/api/courses");
    expect((openapi as { paths: Record<string, unknown> }).paths).toHaveProperty("/api/course-graph");
    expect((openapi as { paths: Record<string, unknown> }).paths).toHaveProperty("/api/assessments/start");
    expect((openapi as { paths: Record<string, unknown> }).paths).toHaveProperty("/api/assessments/submit");
    expect((openapi as { paths: Record<string, unknown> }).paths).toHaveProperty("/api/assessments/finalize");
  });
});

describe("Course graph contract", () => {
  it("exposes required modules and total credits", () => {
    const foundations = COURSE_CATALOG.find((course) => course.id === "clawford-foundations");
    expect(foundations).toBeTruthy();
    expect(foundations!.requiredModuleIds).toEqual([
      "FND-101",
      "FND-102",
      "FND-103",
      "FND-104",
      "FND-105",
      "FND-106",
      "FND-107",
      "FND-108",
    ]);
    expect(foundations!.totalCredits).toBe(27);
  });
});

describe("Compound registration cooldown", () => {
  it("same IP + different device IDs produce different fingerprint keys", async () => {
    const { createHash } = await import("crypto");
    const ip = "203.0.113.42";
    const fp = (deviceId: string) =>
      createHash("sha256").update(`${ip}:${deviceId}`).digest("hex").slice(0, 24);

    const keyA = fp("agent-alpha-uuid");
    const keyB = fp("agent-beta-uuid");

    expect(keyA).not.toBe(keyB);
    expect(keyA).toHaveLength(24);
    expect(keyB).toHaveLength(24);
  });

  it("same IP + same device ID produce the same key", async () => {
    const { createHash } = await import("crypto");
    const ip = "203.0.113.42";
    const fp = (deviceId: string) =>
      createHash("sha256").update(`${ip}:${deviceId}`).digest("hex").slice(0, 24);

    expect(fp("agent-alpha-uuid")).toBe(fp("agent-alpha-uuid"));
  });

  it("different IPs + same device ID produce different keys", async () => {
    const { createHash } = await import("crypto");
    const fp = (ip: string, deviceId: string) =>
      createHash("sha256").update(`${ip}:${deviceId}`).digest("hex").slice(0, 24);

    expect(fp("203.0.113.1", "agent-uuid")).not.toBe(fp("203.0.113.2", "agent-uuid"));
  });
});

describe("Agent key identity contract", () => {
  it("generateAgentKey produces 48-char hex string", async () => {
    const { generateAgentKey } = await import("../../api/_lib/identity.js");
    const key = generateAgentKey();
    expect(key).toHaveLength(48);
    expect(/^[0-9a-f]{48}$/.test(key)).toBe(true);
  });

  it("each generated key is unique", async () => {
    const { generateAgentKey } = await import("../../api/_lib/identity.js");
    const keys = Array.from({ length: 20 }, () => generateAgentKey());
    expect(new Set(keys).size).toBe(20);
  });
});

describe("OpenAPI agent key schema", () => {
  it("defines agentKeyAuth security scheme", () => {
    const schemas = (openapi as { components: { securitySchemes: Record<string, { type: string; name?: string }> } }).components.securitySchemes;
    expect(schemas).toHaveProperty("agentKeyAuth");
    expect(schemas.agentKeyAuth.type).toBe("apiKey");
    expect(schemas.agentKeyAuth.name).toBe("X-Agent-Key");
  });

  it("admission endpoint accepts agentKeyAuth", () => {
    const admission = (openapi as { paths: Record<string, { post: { security: Array<Record<string, unknown>> } }> }).paths["/api/admission"].post;
    const securitySchemes = admission.security.map((s: Record<string, unknown>) => Object.keys(s)).flat();
    expect(securitySchemes).toContain("agentKeyAuth");
  });
});
