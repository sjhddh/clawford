/* eslint-disable @typescript-eslint/no-explicit-any */
import { afterEach, describe, expect, it, vi } from "vitest";

function createRes() {
  return {
    statusCode: 200,
    body: null as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      return this;
    },
  };
}

afterEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
});

describe("POST /api/admission", () => {
  it("includes X-Device-Id hint when registration cooldown is active", async () => {
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
      isAdmin: vi.fn().mockReturnValue(false),
      registrationFingerprint: vi.fn().mockReturnValue("fp"),
      canRegister: vi.fn().mockResolvedValue({
        allowed: false,
        retryAfter: "2026-04-05T22:56:39.055Z",
      }),
      recordRegistration: vi.fn(),
      canLogin: vi.fn(),
      recordLoginFailure: vi.fn(),
      clearLoginFailures: vi.fn(),
    }));
    vi.doMock("../../api/_lib/blob.js", () => ({
      lookupByUsername: vi.fn().mockResolvedValue(null),
      lookupByAgentKey: vi.fn().mockResolvedValue(null),
      registerIdentity: vi.fn(),
      getTranscript: vi.fn(),
      saveTranscript: vi.fn(),
      createFreshTranscript: vi.fn(),
    }));
    vi.doMock("../../api/_lib/identity.js", () => ({
      normalizeUsername: vi.fn((v: string) => v.trim().toLowerCase()),
      isValidUsername: vi.fn(() => true),
      generateUid: vi.fn(),
      generateSalt: vi.fn(),
      generateAgentKey: vi.fn(),
      hashPassword: vi.fn(),
      verifyPassword: vi.fn(),
      MAX_USERNAME_LENGTH: 64,
      MAX_PASSWORD_LENGTH: 128,
      MIN_PASSWORD_LENGTH: 8,
      MAX_DISPLAY_NAME_LENGTH: 120,
    }));
    vi.doMock("../../api/_lib/session.js", () => ({
      issueSession: vi.fn(),
      setSessionCookie: vi.fn(),
    }));
    vi.doMock("../../api/_lib/telemetry.js", () => ({
      createAuditContext: vi.fn().mockReturnValue({ log: vi.fn() }),
    }));

    const { default: handler } = await import("../../api/admission.js");
    const req = {
      method: "POST",
      headers: {},
      body: {
        username: "new-agent",
        password: "password123",
      },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(429);
    expect((res.body as any).code).toBe("COOLDOWN");
    expect((res.body as any).error).toContain("X-Device-Id");
  });
});
