/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, it } from "vitest";

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

describe("Catch-all /api not found handler", () => {
  it("returns JSON 404 payload for unknown API paths", async () => {
    const { default: handler } = await import("../../api/[...path].js");
    const req = {
      method: "GET",
      query: { path: ["skills", "self-improving-agent"] },
    } as any;
    const res = createRes();

    await handler(req, res as any);
    expect(res.statusCode).toBe(404);
    expect((res.body as any)).toEqual({
      error: "Not Found",
      code: "NOT_FOUND",
      path: "/api/skills/self-improving-agent",
    });
  });
});
