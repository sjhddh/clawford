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
  takeExam: () => Promise<void>;
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

  useEffect(() => {
    if (transcript) return;
    let cancelled = false;
    setIsLoading(true);
    api<{ transcript: Transcript }>("/api/session", { method: "GET" }, token)
      .then((data) => {
        if (cancelled) return;
        setTranscript(data.transcript);
      })
      .catch(() => {
        if (cancelled) return;
        setUsername(null);
        setToken(null);
        try { localStorage.removeItem(USERNAME_KEY); } catch { /* noop */ }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, [token, transcript]);

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
    if (!token) return;
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
            submission:
              "Learner completed all required modules and submits a full-process agent-native assessment attempt.",
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
    } catch (_e) {
      // Compatibility fallback for older deployments.
      const data = await api<{ transcript: Transcript }>("/api/progress", {
        method: "POST",
        body: JSON.stringify({ action: "pass-exam" }),
      }, token);
      setTranscript(data.transcript);
    }
  }, [token]);

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
