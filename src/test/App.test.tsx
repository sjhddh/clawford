import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";
import { SessionProvider } from "@/contexts/SessionContext";

const MOCK_TRANSCRIPT = {
  uid: "CLW-a1b2c3d4e5f6a7b8",
  displayName: "TestAgent",
  currentState: "freshman",
  house: "krillindor",
  foundationsStatus: {
    courseId: "clawford-foundations",
    status: "not-started",
    completedModules: [],
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

function renderApp(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <SessionProvider>
        <App />
      </SessionProvider>
    </MemoryRouter>,
  );
}

interface MockFetchOptions {
  transcriptOverrides?: Record<string, unknown>;
  students?: unknown[];
}

function mockFetch(options: MockFetchOptions = {}) {
  const transcriptOverrides = options.transcriptOverrides ?? {};
  const students = options.students ?? [];

  return vi.fn((url: string, init?: RequestInit) => {
    const body = init?.body ? JSON.parse(init.body as string) : {};

    if (url === "/api/admission") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            uid: MOCK_TRANSCRIPT.uid,
            displayName: body.displayName || MOCK_TRANSCRIPT.displayName,
            house: MOCK_TRANSCRIPT.house,
            transcript: { ...MOCK_TRANSCRIPT, ...transcriptOverrides },
            token: "test-token",
            isNew: true,
          }),
      });
    }

    if (url === "/api/progress") {
      const t = { ...MOCK_TRANSCRIPT, ...transcriptOverrides };
      if (body.action === "complete-module" || body.action === "complete-modules") {
        const ids = Array.isArray(body.moduleIds)
          ? body.moduleIds
          : body.moduleId
            ? [body.moduleId]
            : [];
        t.foundationsStatus = {
          ...t.foundationsStatus,
          completedModules: Array.from(new Set([...t.foundationsStatus.completedModules, ...ids])),
          status: "in-progress",
        };
      }
      if (body.action === "pass-exam") {
        const priorAttempts =
          t.foundationsStatus.assessmentResults.filter((r: { assessmentId: string }) =>
            r.assessmentId.startsWith("exam-"),
          ).length;
        t.foundationsStatus = {
          ...t.foundationsStatus,
          status: "completed",
          assessmentResults: [
            ...t.foundationsStatus.assessmentResults,
            {
              assessmentId: `exam-test-${priorAttempts + 1}`,
              score: 12,
              maxScore: 14,
              decision: "pass",
              attempt: priorAttempts + 1,
              timestamp: "2026-03-27T00:00:01.000Z",
            },
          ],
        };
        t.currentState = "foundations-graduate";
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, transcript: t }),
      });
    }

    if (url === "/api/assessments/start") {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, attempt: { attemptId: "attempt-test-1" } }),
      });
    }

    if (url === "/api/assessments/submit") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            ok: true,
            attempt: { attemptId: "attempt-test-1", decision: "pass" },
          }),
      });
    }

    if (url === "/api/assessments/finalize") {
      const t = { ...MOCK_TRANSCRIPT, ...transcriptOverrides };
      t.foundationsStatus = {
        ...t.foundationsStatus,
        status: "completed",
        completedModules: ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107", "FND-108"],
        totalCreditsEarned: 27,
      };
      t.currentState = "foundations-graduate";
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ok: true, transcript: t }),
      });
    }

    if (url === "/api/students") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({ students, lastUpdated: new Date().toISOString() }),
      });
    }

    if (url === "/api/session") {
      if (init?.method === "DELETE") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ ok: true }),
        });
      }
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: "No valid session" }),
      });
    }

    return Promise.resolve({ ok: false, json: () => Promise.resolve({}) });
  }) as unknown as typeof globalThis.fetch;
}

beforeEach(() => {
  localStorage.clear();
  globalThis.fetch = mockFetch();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("App", () => {
  it("renders without crashing", () => {
    renderApp();
    const matches = screen.getAllByText("Clawford");
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it("defaults to Chinese language", () => {
    renderApp();
    expect(screen.getByText("龙虾智能体大学")).toBeInTheDocument();
  });

  it("switches language to English", () => {
    renderApp();
    fireEvent.click(screen.getByLabelText("Switch to EN"));
    expect(
      screen.getByText(/Correctness first, then speed and scale/),
    ).toBeInTheDocument();
  });
});

describe("Connect flow", () => {
  it("shows idle status by default", () => {
    renderApp();
    expect(screen.getByText(/等待 agent 接入/)).toBeInTheDocument();
  });

  it("shows skill guide and manual toggle when not connected", () => {
    renderApp();
    expect(screen.getByText("Agent 官方接入指南")).toBeInTheDocument();
    expect(screen.getByText("手动注册")).toBeInTheDocument();
  });

  it("connects via manual form after expanding it", async () => {
    renderApp();
    fireEvent.click(screen.getByText("手动注册"));
    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "pass123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      expect(screen.getByText(/已接入/)).toBeInTheDocument();
    });
  });
});

describe("Module completion", () => {
  it("disables study buttons when not connected", () => {
    renderApp();
    const buttons = screen.getAllByText("学习模块");
    buttons.forEach((btn: HTMLElement) => {
      expect(btn.closest("button")).toBeDisabled();
    });
  });

  it("enables study buttons after connecting", async () => {
    renderApp();
    fireEvent.click(screen.getByText("手动注册"));
    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "pass123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      const buttons = screen.getAllByText("学习模块");
      buttons.forEach((btn: HTMLElement) => {
        expect(btn.closest("button")).not.toBeDisabled();
      });
    });
  });
});

describe("Students page", () => {
  it("renders students page at /students route", () => {
    renderApp("/students");
    expect(screen.getByText("Clawford 学生档案")).toBeInTheDocument();
  });

  it("shows back to home link", () => {
    renderApp("/students");
    expect(screen.getByText("返回首页")).toBeInTheDocument();
  });

  it("shows house and best score columns from API data", async () => {
    globalThis.fetch = mockFetch({
      students: [
        {
          uid: "CLW-1111",
          displayName: "AlphaAgent",
          house: "krillindor",
          currentState: "foundations-graduate",
          totalCredits: 27,
          completedModules: 8,
          examPassed: true,
          examAttempts: 2,
          bestExamScore: 13,
          latestExamScore: 12,
          examMaxScore: 14,
          lastExamAt: "2026-03-27T00:00:02.000Z",
          credentials: 1,
          enrolledAt: "2026-03-27T00:00:00.000Z",
        },
      ],
    });

    renderApp("/students");
    await waitFor(() => {
      expect(screen.getByText("学院")).toBeInTheDocument();
      expect(screen.getByText("最佳分数")).toBeInTheDocument();
      expect(screen.getByText("钳兰芬多")).toBeInTheDocument();
      expect(screen.getByText("13/14")).toBeInTheDocument();
    });
  });

  it("ranks same-credit students by best score", async () => {
    globalThis.fetch = mockFetch({
      students: [
        {
          uid: "CLW-low",
          displayName: "LowScoreAgent",
          house: "shelltherin",
          currentState: "foundations-graduate",
          totalCredits: 27,
          completedModules: 8,
          examPassed: true,
          examAttempts: 2,
          bestExamScore: 11,
          latestExamScore: 11,
          examMaxScore: 14,
          lastExamAt: "2026-03-27T00:00:02.000Z",
          credentials: 1,
          enrolledAt: "2026-03-27T00:00:00.000Z",
        },
        {
          uid: "CLW-high",
          displayName: "HighScoreAgent",
          house: "cravenclaw",
          currentState: "foundations-graduate",
          totalCredits: 27,
          completedModules: 8,
          examPassed: true,
          examAttempts: 2,
          bestExamScore: 13,
          latestExamScore: 12,
          examMaxScore: 14,
          lastExamAt: "2026-03-27T00:00:03.000Z",
          credentials: 1,
          enrolledAt: "2026-03-27T00:00:00.000Z",
        },
      ],
    });

    renderApp("/students");
    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      const firstDataRow = rows[1];
      expect(firstDataRow).toHaveTextContent("HighScoreAgent");
      expect(firstDataRow).toHaveTextContent("13/14");
    });
  });
});

describe("Exam gating", () => {
  it("disables exam button when modules are incomplete", async () => {
    renderApp();
    fireEvent.click(screen.getByText("手动注册"));
    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "pass123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      expect(screen.getByText("开始评测")).toBeInTheDocument();
    });
    expect(screen.getByText("开始评测").closest("button")).toBeDisabled();
    expect(screen.getByText("请先完成全部 8 个通识模块，再开始评测。")).toBeInTheDocument();
  });
});

describe("Exam retake flow", () => {
  const ALL_MODULES = ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107", "FND-108"];

  it("shows retake action after first pass", async () => {
    globalThis.fetch = mockFetch({
      transcriptOverrides: {
        foundationsStatus: {
          courseId: "clawford-foundations",
          status: "in-progress",
          completedModules: ALL_MODULES,
          totalCreditsEarned: 27,
          assessmentResults: [],
          enrolledAt: "2026-03-27T00:00:00.000Z",
          completedAt: null,
        },
      },
    });

    renderApp();
    fireEvent.click(screen.getByText("手动注册"));
    fireEvent.change(screen.getByPlaceholderText("用户名"), { target: { value: "testuser" } });
    fireEvent.change(screen.getByPlaceholderText("密码"), { target: { value: "pass123" } });
    fireEvent.click(await screen.findByRole("button", { name: /注册 \/ 登录|Sign In \/ Register/ }));

    await waitFor(() => {
      expect(screen.getByText("开始评测")).toBeInTheDocument();
    });
    expect(screen.getByText("开始评测").closest("button")).not.toBeDisabled();

    fireEvent.click(screen.getByText("开始评测"));

    await waitFor(() => {
      expect(screen.getByText("重修评测（提升分数）")).toBeInTheDocument();
    });
  });
});
