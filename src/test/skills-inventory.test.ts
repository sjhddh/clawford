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

describe("GET /api/skills", () => {
  it("returns paginated registry-backed skills and nextCursor", async () => {
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    vi.doMock("node:fs", async () => {
      const actual = await vi.importActual<typeof import("node:fs")>("node:fs");
      return {
        ...actual,
        existsSync: vi.fn().mockImplementation((target: string) =>
          target.includes("assertion-contract.json") || target.includes("scenario.md"),
        ),
        readdirSync: vi.fn().mockReturnValue([
          { isDirectory: () => false, name: "README.md" },
          { isDirectory: () => true, name: "postgres-backups" },
          { isDirectory: () => true, name: "k-life" },
        ]),
        readFileSync: vi.fn().mockImplementation((_path: string) =>
          JSON.stringify({ tier: 2, version: "tier2-auto-v1" }),
        ),
      };
    });

    const { default: handler } = await import("../../api/skills.js");
    const req = {
      method: "GET",
      query: { limit: "1", cursor: "0" },
    } as any;
    const res = createRes();
    await handler(req, res as any);

    expect(res.statusCode).toBe(200);
    expect((res.body as any).items).toHaveLength(1);
    expect(typeof (res.body as any).items[0].slug).toBe("string");
    expect((res.body as any).items[0].slug).toMatch(/^[a-z0-9][a-z0-9-]*$/);
    expect((res.body as any).nextCursor).toBe("1");
  });

  it("returns display and source metadata for registry results", async () => {
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    const { default: handler } = await import("../../api/skills.js");
    const req = {
      method: "GET",
      query: { limit: "5", cursor: "0" },
    } as any;
    const res = createRes();
    await handler(req, res as any);

    expect(res.statusCode).toBe(200);
    expect((res.body as any).items[0]).toEqual(
      expect.objectContaining({
        slug: expect.any(String),
        displayName: expect.any(String),
        sourceMappings: expect.any(Array),
      }),
    );
  });

  it("supports exact slug filtering", async () => {
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    const { default: handler } = await import("../../api/skills.js");
    const req = {
      method: "GET",
      query: { slug: "self-improving-agent" },
    } as any;
    const res = createRes();
    await handler(req, res as any);

    expect(res.statusCode).toBe(200);
    expect((res.body as any).total).toBe(1);
    expect((res.body as any).items).toHaveLength(1);
    expect((res.body as any).items[0].slug).toBe("self-improving-agent");
    expect((res.body as any).filters.slug).toBe("self-improving-agent");
  });

  it("supports fuzzy search filtering", async () => {
    vi.doMock("../../api/_lib/security.js", () => ({
      applyRateLimit: vi.fn().mockReturnValue(true),
    }));
    const { default: handler } = await import("../../api/skills.js");
    const req = {
      method: "GET",
      query: { search: "self-improving-agent" },
    } as any;
    const res = createRes();
    await handler(req, res as any);

    expect(res.statusCode).toBe(200);
    expect((res.body as any).total).toBeGreaterThan(0);
    expect((res.body as any).items.some((item: { slug: string }) => item.slug === "self-improving-agent")).toBe(true);
    expect((res.body as any).filters.search).toBe("self-improving-agent");
  });

  it("rejects non-GET methods", async () => {
    const { default: handler } = await import("../../api/skills.js");
    const req = { method: "POST", query: {} } as any;
    const res = createRes();
    await handler(req, res as any);

    expect(res.statusCode).toBe(405);
  });
});
