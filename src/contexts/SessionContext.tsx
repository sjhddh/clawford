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

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const headers: Record<string, string> = { "Content-Type": "application/json", ...init?.headers as Record<string, string> };
  const res = await fetch(path, { ...init, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `API error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(getStoredUsername);
  const [password, setPassword] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<Transcript | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (transcript) return;
    let cancelled = false;
    setIsLoading(true);
    api<{ transcript: Transcript }>("/api/session", { method: "GET" })
      .then((data) => {
        if (cancelled) return;
        setTranscript(data.transcript);
      })
      .catch(() => {
        if (cancelled) return;
        setUsername(null);
        try { localStorage.removeItem(USERNAME_KEY); } catch { /* noop */ }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, [transcript]);

  const connect = useCallback(
    async (u: string, pw: string, displayName?: string) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await api<{ transcript: Transcript }>("/api/admission", {
          method: "POST",
          body: JSON.stringify({ username: u, password: pw, displayName }),
        });
        setUsername(u);
        setPassword(pw);
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
    setPassword(null);
    setTranscript(null);
    setError(null);
    try { localStorage.removeItem(USERNAME_KEY); } catch { /* noop */ }
  }, []);

  const studyModule = useCallback(
    async (moduleId: string) => {
      if (!username) return;
      setError(null);
      try {
        const body: Record<string, string> = { action: "complete-module", moduleId };
        if (username && password) {
          body.username = username;
          body.password = password;
        }
        const data = await api<{ transcript: Transcript }>("/api/progress", {
          method: "POST",
          body: JSON.stringify(body),
        });
        setTranscript(data.transcript);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to update progress";
        setError(msg);
        throw e;
      }
    },
    [username, password],
  );

  const takeExam = useCallback(async () => {
    if (!username) return;
    setError(null);
    try {
      const body: Record<string, string> = { action: "pass-exam" };
      if (username && password) {
        body.username = username;
        body.password = password;
      }
      const data = await api<{ transcript: Transcript }>("/api/progress", {
        method: "POST",
        body: JSON.stringify(body),
      });
      setTranscript(data.transcript);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to submit exam";
      setError(msg);
      throw e;
    }
  }, [username, password]);

  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!username) return;
      setError(null);
      try {
        const body: Record<string, string> = { displayName: name };
        if (username && password) {
          body.username = username;
          body.password = password;
        }
        const data = await api<{ transcript: Transcript }>("/api/transcript", {
          method: "PATCH",
          body: JSON.stringify(body),
        });
        setTranscript(data.transcript);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to update name");
      }
    },
    [username, password],
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
