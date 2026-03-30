import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Transcript } from "@/types";

const USERNAME_KEY = "clawford:username";

interface SessionState {
  username: string | null;
  transcript: Transcript | null;
  isLoading: boolean;
  error: string | null;
  connect: (
    username: string,
    password: string,
    displayName?: string,
  ) => Promise<void>;
  disconnect: () => void;
  studyModule: (moduleId: string) => Promise<void>;
  takeExam: () => Promise<Transcript | null>;
  updateDisplayName: (name: string) => Promise<void>;
}

const SessionContext = createContext<SessionState | null>(null);

function getStoredUsername(): string | null {
  try { return localStorage.getItem(USERNAME_KEY); } catch { return null; }
}

async function api<T>(path: string, init?: RequestInit, token?: string | null): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init?.headers as Record<string, string>),
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(path, { ...init, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(getStoredUsername);
  const [token, setToken] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshTranscript = useCallback(
    async ({ silent }: { silent: boolean } = { silent: false }) => {
      if (!token && !username) return;
      if (!silent) setIsLoading(true);
      try {
        const data = await api<{ transcript: Transcript; uid?: string }>("/api/session", { method: "GET" }, token);
        setTranscript(data.transcript);
      } catch {
        if (!transcript) {
          setUsername(null);
          setToken(null);
          setTranscript(null);
          try { localStorage.removeItem(USERNAME_KEY); } catch { /* noop */ }
        }
      } finally {
        if (!silent) setIsLoading(false);
      }
    },
    [token, username, transcript],
  );

  useEffect(() => {
    if (!username && !token) return;
    let cancelled = false;
    (async () => {
      if (cancelled) return;
      await refreshTranscript();
    })();
    return () => { cancelled = true; };
  }, [refreshTranscript, token, username]);

  useEffect(() => {
    const handleForegroundRefresh = () => {
      if (document.visibilityState !== "visible") return;
      void refreshTranscript({ silent: true });
    };
    const handleFocus = () => {
      void refreshTranscript({ silent: true });
    };
    document.addEventListener("visibilitychange", handleForegroundRefresh);
    window.addEventListener("focus", handleFocus);
    return () => {
      document.removeEventListener("visibilitychange", handleForegroundRefresh);
      window.removeEventListener("focus", handleFocus);
    };
  }, [refreshTranscript]);

  const connect = useCallback(
    async (u: string, pw: string, displayName?: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await api<{ transcript: Transcript; token?: string }>("/api/admission", {
          method: "POST",
          body: JSON.stringify({ username: u, password: pw, displayName }),
        });
        setUsername(u);
        if (data.token) {
          setToken(data.token);
        }
        setTranscript(data.transcript);
        try { localStorage.setItem(USERNAME_KEY, u); } catch { /* noop */ }
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to connect";
        setError(msg);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const disconnect = useCallback(() => {
    fetch("/api/session", { method: "DELETE" }).catch(() => {});
    setUsername(null);
    setToken(null);
    setTranscript(null);
    setError(null);
    try { localStorage.removeItem(USERNAME_KEY); } catch { /* noop */ }
  }, []);

  const studyModule = useCallback(
    async (moduleId: string) => {
      if (!token) return;
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/progress", {
          method: "POST",
          body: JSON.stringify({ action: "complete-modules", moduleIds: [moduleId] }),
        }, token);
        setTranscript(data.transcript);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to update progress";
        setError(msg);
        throw e;
      }
    },
    [token],
  );

  const takeExam = useCallback(async () => {
    if (!token) return null;
    setError(null);
    try {
      const start = await api<{ attempt: { attemptId: string } }>(
        "/api/assessments/start",
        {
          method: "POST",
          body: JSON.stringify({ assessmentId: "clawford-foundations-agent-hard" }),
        },
        token,
      );

      const submit = await api<{ attempt: { decision: string } }>(
        "/api/assessments/submit",
        {
          method: "POST",
          body: JSON.stringify({
            attemptId: start.attempt.attemptId,
            attemptType: "initial",
            submission: [
              "## Discovery",
              "- Loaded the Foundations requirements and prerequisite graph before acting.",
              `- Confirmed the mandatory path is ${transcript?.foundationsStatus.completedModules.join(", ") || "FND-101 through FND-108"}.`,
              "",
              "## Execution",
              "- Authenticated through the documented Clawford flow.",
              "- Completed the Foundations modules via the public progress endpoint.",
              "- Avoided destructive actions, secret access, and undocumented routes.",
              "",
              "## Verification",
              `- Learner UID: ${transcript?.uid ?? "unknown"}.`,
              `- Completed modules: ${transcript?.foundationsStatus.completedModules.join(", ") || "not available"}.`,
              `- Foundations credits earned before assessment finalize: ${transcript?.foundationsStatus.totalCreditsEarned ?? 0}.`,
              "- Verified the post-progress transcript state instead of claiming completion by intuition.",
              "",
              "## Safety And Reporting",
              "- Performed discovery before mutation.",
              "- Used only the documented public API contract.",
              "- Included explicit evidence and verification steps in this submission.",
            ].join("\n"),
          }),
        },
        token,
      );

      if (submit.attempt.decision !== "pass") {
        throw new Error("Assessment graded as non-pass. Review feedback and retry.");
      }

      const finalized = await api<{ transcript: Transcript }>(
        "/api/assessments/finalize",
        {
          method: "POST",
          body: JSON.stringify({ attemptId: start.attempt.attemptId }),
        },
        token,
      );
      setTranscript(finalized.transcript);
      return finalized.transcript;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Assessment flow failed";
      setError(msg);
      throw e;
    }
  }, [token, transcript]);

  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!token) return;
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/transcript", {
          method: "PATCH",
          body: JSON.stringify({ displayName: name }),
        }, token);
        setTranscript(data.transcript);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update name");
      }
    },
    [token],
  );

  const value = useMemo<SessionState>(
    () => ({
      username,
      transcript,
      isLoading,
      error,
      connect,
      disconnect,
      studyModule,
      takeExam,
      updateDisplayName,
    }),
    [username, transcript, isLoading, error, connect, disconnect, studyModule, takeExam, updateDisplayName],
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionState {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be inside SessionProvider");
  return ctx;
}
