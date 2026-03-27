type AttemptRecord = {
  initialTaken: boolean;
  resitUsed: number;
  updatedAt: string;
};

type AttemptStore = {
  get: (key: string) => Promise<AttemptRecord | null>;
  set: (key: string, value: AttemptRecord) => Promise<void>;
};

const inMemoryStore = new Map<string, AttemptRecord>();

function utcDateBucket(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

function buildKey(uid: string, assessmentId: string, dateBucket: string): string {
  return `exam-attempt:${assessmentId}:${uid}:${dateBucket}`;
}

function getKvConfig(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

function createKvStore(url: string, token: string): AttemptStore {
  return {
    async get(key) {
      const endpoint = `${url}/get/${encodeURIComponent(key)}`;
      const response = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) return null;
      const payload = (await response.json()) as { result?: string | null };
      if (!payload.result) return null;
      try {
        return JSON.parse(payload.result) as AttemptRecord;
      } catch {
        return null;
      }
    },
    async set(key, value) {
      const serialized = JSON.stringify(value);
      const endpoint = `${url}/set/${encodeURIComponent(key)}/${encodeURIComponent(serialized)}?EX=${60 * 60 * 72}`;
      await fetch(endpoint, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  };
}

function createMemoryStore(): AttemptStore {
  return {
    async get(key) {
      return inMemoryStore.get(key) ?? null;
    },
    async set(key, value) {
      inMemoryStore.set(key, value);
    },
  };
}

export function createAttemptStore(): AttemptStore {
  const kv = getKvConfig();
  if (!kv) return createMemoryStore();
  return createKvStore(kv.url, kv.token);
}

export function getAttemptKey(uid: string, assessmentId: string): string {
  return buildKey(uid, assessmentId, utcDateBucket());
}

export type { AttemptRecord };
