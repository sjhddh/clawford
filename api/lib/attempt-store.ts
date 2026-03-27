import { list, put } from "@vercel/blob";

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
  return `clawford/exam-attempts/${assessmentId}/${dateBucket}/${uid}.json`;
}

function hasBlobToken(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readBlobJson<T>(pathname: string): Promise<T | null> {
  const { blobs } = await list({ prefix: pathname, limit: 1 });
  const blob = blobs.find((entry) => entry.pathname === pathname);
  if (!blob) return null;

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  const response = await fetch(blob.url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!response.ok) return null;
  return (await response.json()) as T;
}

function createBlobStore(): AttemptStore {
  return {
    async get(key) {
      return readBlobJson<AttemptRecord>(key);
    },
    async set(key, value) {
      await put(key, JSON.stringify(value, null, 2), {
        access: "private",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
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
  if (!hasBlobToken()) return createMemoryStore();
  return createBlobStore();
}

export function getAttemptKey(uid: string, assessmentId: string): string {
  return buildKey(uid, assessmentId, utcDateBucket());
}

export type { AttemptRecord };
