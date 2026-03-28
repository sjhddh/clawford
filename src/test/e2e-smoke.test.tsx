import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";
import { SessionProvider } from "@/contexts/SessionContext";

const ALL_MODULES = ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107", "FND-108"];

const MOCK_TRANSCRIPT = {
  uid: "CLW-e2e0smoke0test00",
  displayName: "SmokeAgent",
  currentState: "freshman",
  house: "shelltherin",
  foundationsStatus: {
    courseId: "clawford-foundations",
    status: "not-started",
    completedModules: [] as string[],
    totalCreditsEarned: 0,
    assessmentResults: [] as { assessmentId: string; score: number; maxScore: number; decision: string; attempt: number; timestamp: string }[],
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

function renderApp(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <SessionProvider>
        <App />
      </SessionProvider>
    </MemoryRouter>,
  );
}

function createSmokeFetch() {
  const transcript = structuredClone(MOCK_TRANSCRIPT);

  return vi.fn((url: string, init?: RequestInit) => {
    const body = init?.body ? JSON.parse(init.body as string) : {};

    if (url === "/api/admission") {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          uid: transcript.uid,
          displayName: body.displayName || transcript.displayName,
          house: transcript.house,
          transcript: structuredClone(transcript),
          token: "fake-jwt-token",
          isNew: true,
        }),
      });
    }

    if (url === "/api/progress") {
      if ((body.action === "complete-module" || body.action === "complete-modules")) {
        const ids = Array.isArray(body.moduleIds)
          ? body.moduleIds
          : body.moduleId
            ? [body.moduleId]
            : [];
        const completed = new Set(transcript.foundationsStatus.completedModules);
        ids.forEach((id: string) => completed.add(id));
        transcript.foundationsStatus.completedModules = ALL_MODULES.filter((id) => completed.has(id));
        transcript.foundationsStatus.status = "in-progress";
        transcript.foundationsStatus.totalCreditsEarned =
          transcript.foundationsStatus.completedModules.length > 0
            ? transcript.foundationsStatus.completedModules.reduce((s, id) => {
                const credits: Record<string, number> = { "FND-101": 2, "FND-102": 4, "FND-103": 3, "FND-104": 5, "FND-105": 3, "FND-106": 3, "FND-107": 2, "FND-108": 5 };
                return s + (credits[id] ?? 0);
              }, 0)
            : 0;
      }
      if (body.action === "pass-exam") {
        const attempt = transcript.foundationsStatus.assessmentResults.length + 1;
        transcript.foundationsStatus.status = "completed";
        transcript.foundationsStatus.completedModules = [...ALL_MODULES];
        transcript.foundationsStatus.totalCreditsEarned = 27;
        transcript.foundationsStatus.assessmentResults.push({
          assessmentId: `exam-smoke-${attempt}`,
          score: 85,
          maxScore: 100,
          decision: "pass",
          attempt,
          timestamp: new Date().toISOString(),
        });
        transcript.currentState = "foundations-graduate";
        transcript.foundationsStatus.completedAt = new Date().toISOString();
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, transcript: structuredClone(transcript) }),
      });
    }

    if (url === "/api/assessments/start") {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, attempt: { attemptId: "attempt-smoke-1" } }),
      });
    }

    if (url === "/api/assessments/submit") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ok: true,
            attempt: { attemptId: "attempt-smoke-1", decision: "pass" },
          }),
      });
    }

    if (url === "/api/assessments/finalize") {
      const attempt = transcript.foundationsStatus.assessmentResults.length + 1;
      transcript.foundationsStatus.status = "completed";
      transcript.foundationsStatus.completedModules = [...ALL_MODULES];
      transcript.foundationsStatus.totalCreditsEarned = 27;
      transcript.foundationsStatus.assessmentResults.push({
        assessmentId: `exam-smoke-${attempt}`,
        score: 85,
        maxScore: 100,
        decision: "pass",
        attempt,
        timestamp: new Date().toISOString(),
      });
      transcript.currentState = "foundations-graduate";
      transcript.foundationsStatus.completedAt = new Date().toISOString();
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, transcript: structuredClone(transcript) }),
      });
    }

    if (url === "/api/students") {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          students: [{
            uid: transcript.uid,
            displayName: transcript.displayName,
            house: transcript.house,
            currentState: transcript.currentState,
            totalCredits: transcript.foundationsStatus.totalCreditsEarned,
            completedModules: transcript.foundationsStatus.completedModules.length,
            examPassed: transcript.foundationsStatus.status === "completed",
            examAttempts: transcript.foundationsStatus.assessmentResults.length,
            bestExamScore: 85,
            latestExamScore: 85,
            examMaxScore: 100,
            lastExamAt: new Date().toISOString(),
            credentials: 1,
            enrolledAt: transcript.foundationsStatus.enrolledAt,
          }],
          lastUpdated: new Date().toISOString(),
        }),
      });
    }

    if (url === "/api/session") {
      if (init?.method === "GET") {
        return Promise.resolve({
          ok: false,
          json: () => Promise.resolve({ error: "No valid session" }),
        });
      }
      if (init?.method === "DELETE") {
        return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true }) });
      }
    }

    return Promise.resolve({ ok: false, json: () => Promise.resolve({}) });
  }) as unknown as typeof globalThis.fetch;
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("E2E smoke path: register → modules → exam → students", () => {
  it("register connects and shows connected state", async () => {
    globalThis.fetch = createSmokeFetch();
    renderApp();

    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "smoke-agent" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "smoke123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      expect(screen.getByText(/已登录/)).toBeInTheDocument();
    });
  });

  it("exam is disabled before modules are completed", async () => {
    globalThis.fetch = createSmokeFetch();
    renderApp();

    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "smoke-agent" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "smoke123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      expect(screen.getByText(/已登录/)).toBeInTheDocument();
    });

    const examBtn = screen.getByText("开始评测").closest("button");
    expect(examBtn).toBeDisabled();
    expect(screen.getByText("请先完成全部 8 个通识模块，再开始评测。")).toBeInTheDocument();
  });

  it("exam becomes available after all modules and produces graduation", async () => {
    const smokeFetch = createSmokeFetch();
    globalThis.fetch = vi.fn((url: string, init?: RequestInit) => {
      if (url === "/api/admission") {
        const completedTranscript = structuredClone(MOCK_TRANSCRIPT);
        completedTranscript.foundationsStatus.completedModules = [...ALL_MODULES];
        completedTranscript.foundationsStatus.totalCreditsEarned = 27;
        completedTranscript.foundationsStatus.status = "in-progress";
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            uid: completedTranscript.uid,
            displayName: completedTranscript.displayName,
            house: completedTranscript.house,
            transcript: completedTranscript,
            token: "fake-jwt-token",
            isNew: true,
          }),
        });
      }
      return (smokeFetch as ReturnType<typeof vi.fn>)(url, init);
    }) as unknown as typeof globalThis.fetch;

    renderApp();

    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "smoke-agent" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "smoke123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      expect(screen.getByText(/已登录/)).toBeInTheDocument();
    });

    const examBtn = screen.getByText("开始评测").closest("button");
    expect(examBtn).not.toBeDisabled();

    fireEvent.click(screen.getByText("开始评测"));

    await waitFor(() => {
      expect(screen.getByText("重修评测（提升分数）")).toBeInTheDocument();
    });
  });

  it("student appears in /students directory after graduation", async () => {
    globalThis.fetch = createSmokeFetch();
    renderApp("/students");

    await waitFor(() => {
      expect(screen.getByText("SmokeAgent")).toBeInTheDocument();
      expect(screen.getByText("85/100")).toBeInTheDocument();
    });
  });
});
