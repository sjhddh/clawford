import { put, list } from "@vercel/blob";
import type { HouseId } from "./identity.js";

const REGISTRY_PATH = "clawford/identity-registry.json";
const WALL_INDEX_PATH = "clawford/student-wall.json";

function transcriptPath(uid: string): string {
  return `clawford/transcripts/${uid}.json`;
}

const locks = new Map<string, Promise<void>>();

async function withLock<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const prev = locks.get(key) ?? Promise.resolve();
  let release: () => void;
  const next = new Promise<void>((resolve) => {
    release = resolve;
  });
  locks.set(key, next);
  await prev;
  try {
    return await fn();
  } finally {
    release!();
    if (locks.get(key) === next) locks.delete(key);
  }
}

async function readBlob<T>(pathname: string): Promise<T | null> {
  try {
    const { blobs } = await list({ prefix: pathname, limit: 1 });
    const blob = blobs.find((b) => b.pathname === pathname);
    if (!blob) return null;
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    // Use a cache-busted URL and no-store to avoid stale edge reads.
    const cacheBustedUrl = new URL(blob.url);
    cacheBustedUrl.searchParams.set("ts", Date.now().toString());
    const res = await fetch(cacheBustedUrl.toString(), {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch (err) {
    console.error(`readBlob(${pathname}) failed:`, err);
    return null;
  }
}

function assertBlobToken(): void {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN is not set. " +
        "Connect a Vercel Blob store and ensure the token is available in the environment.",
    );
  }
}

async function writeBlob<T>(pathname: string, data: T): Promise<string> {
  assertBlobToken();
  try {
    const blob = await put(pathname, JSON.stringify(data, null, 2), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return blob.url;
  } catch (err) {
    console.error(`writeBlob(${pathname}) failed:`, err);
    throw err;
  }
}

// --------------- Types ---------------

export interface IdentityRecord {
  uid: string;
  username: string;
  passwordHash: string;
  salt: string;
  displayName: string;
  role: "student" | "professor";
  createdAt: string;
  lastSeen: string;
}

export interface IdentityRegistry {
  users: Record<string, IdentityRecord>;
  version: number;
}

export interface CourseStatus {
  courseId: string;
  status: "not-started" | "in-progress" | "completed" | "failed";
  completedModules: string[];
  totalCreditsEarned: number;
  assessmentResults: AssessmentResult[];
  enrolledAt: string;
  completedAt: string | null;
}

export interface AssessmentResult {
  assessmentId: string;
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  attempt: number;
  timestamp: string;
}

export interface Credential {
  credentialId: string;
  type: "foundation-certificate" | "academy-badge" | "specialist-transcript";
  issuedAt: string;
}

export interface LinkedId {
  provider: "github" | "x" | "wallet";
  value: string;
  linkedAt: string;
}

export interface Transcript {
  uid: string;
  displayName: string;
  currentState:
    | "applicant"
    | "freshman"
    | "foundations-graduate"
    | "academy-candidate"
    | "specialist";
  house: HouseId | null;
  foundationsStatus: CourseStatus;
  enrollments: CourseStatus[];
  credentials: Credential[];
  weakAreas: string[];
  linkedIds: LinkedId[];
  recommendedAcademy: string | null;
  lastUpdated: string;
}

export interface StudentWallEntry {
  uid: string;
  displayName: string;
  house: HouseId | null;
  currentState: string;
  totalCredits: number;
  completedModules: number;
  examPassed: boolean;
  examAttempts: number;
  bestExamScore: number | null;
  latestExamScore: number | null;
  examMaxScore: number | null;
  lastExamAt: string | null;
  credentials: number;
  enrolledAt: string;
}

export interface StudentWallIndex {
  students: StudentWallEntry[];
  lastUpdated: string;
}

// --------------- Registry ---------------

export async function getRegistry(): Promise<IdentityRegistry> {
  const data = await readBlob<IdentityRegistry>(REGISTRY_PATH);
  const raw = data as unknown as Record<string, unknown> | null;
  if (raw && !raw.users && raw.anchors) {
    return { users: raw.anchors as Record<string, IdentityRecord>, version: (raw.version as number) ?? 1 };
  }
  return data ?? { users: {}, version: 1 };
}

export async function saveRegistry(
  registry: IdentityRegistry,
): Promise<void> {
  await writeBlob(REGISTRY_PATH, registry);
}

export async function lookupByUsername(
  normalizedUsername: string,
): Promise<IdentityRecord | null> {
  const registry = await getRegistry();
  return registry.users[normalizedUsername] ?? null;
}

export async function registerIdentity(
  normalizedUsername: string,
  record: IdentityRecord,
): Promise<void> {
  await withLock(REGISTRY_PATH, async () => {
    const registry = await getRegistry();
    registry.users[normalizedUsername] = record;
    await saveRegistry(registry);
  });
}

// --------------- Transcript ---------------

export async function getTranscript(uid: string): Promise<Transcript | null> {
  return readBlob<Transcript>(transcriptPath(uid));
}

export async function saveTranscript(transcript: Transcript): Promise<void> {
  transcript.lastUpdated = new Date().toISOString();
  await writeBlob(transcriptPath(transcript.uid), transcript);
  await withLock(WALL_INDEX_PATH, async () => {
    await updateWallIndex(transcript);
  });
}

export async function updateTranscript(
  uid: string,
  updater: (transcript: Transcript) => Transcript | Promise<Transcript>,
): Promise<Transcript | null> {
  return withLock(transcriptPath(uid), async () => {
    const transcript = await getTranscript(uid);
    if (!transcript) return null;
    const updated = await updater(transcript);
    await saveTranscript(updated);
    return updated;
  });
}

export function createFreshTranscript(
  uid: string,
  displayName: string,
  house: HouseId,
): Transcript {
  const now = new Date().toISOString();
  return {
    uid,
    displayName,
    currentState: "freshman",
    house,
    foundationsStatus: {
      courseId: "clawford-foundations",
      status: "not-started",
      completedModules: [],
      totalCreditsEarned: 0,
      assessmentResults: [],
      enrolledAt: now,
      completedAt: null,
    },
    enrollments: [],
    credentials: [],
    weakAreas: [],
    linkedIds: [],
    recommendedAcademy: null,
    lastUpdated: now,
  };
}

// --------------- Wall Index ---------------

export async function getWallIndex(): Promise<StudentWallIndex> {
  const data = await readBlob<StudentWallIndex>(WALL_INDEX_PATH);
  return data ?? { students: [], lastUpdated: new Date().toISOString() };
}

async function updateWallIndex(transcript: Transcript): Promise<void> {
  const wall = await getWallIndex();
  const examAttempts = transcript.foundationsStatus.assessmentResults.filter(
    (result) => result.assessmentId.startsWith("exam-"),
  );
  const latestExam = examAttempts.at(-1) ?? null;
  const bestExam = examAttempts.reduce<AssessmentResult | null>((best, curr) => {
    if (!best) return curr;
    return curr.score > best.score ? curr : best;
  }, null);

  const entry: StudentWallEntry = {
    uid: transcript.uid,
    displayName: transcript.displayName,
    house: transcript.house,
    currentState: transcript.currentState,
    totalCredits: transcript.foundationsStatus.totalCreditsEarned,
    completedModules: transcript.foundationsStatus.completedModules.length,
    examPassed: transcript.foundationsStatus.status === "completed",
    examAttempts: examAttempts.length,
    bestExamScore: bestExam?.score ?? null,
    latestExamScore: latestExam?.score ?? null,
    examMaxScore: latestExam?.maxScore ?? bestExam?.maxScore ?? null,
    lastExamAt: latestExam?.timestamp ?? null,
    credentials: transcript.credentials.length,
    enrolledAt: transcript.foundationsStatus.enrolledAt,
  };

  const idx = wall.students.findIndex((s) => s.uid === transcript.uid);
  if (idx >= 0) {
    const existing = wall.students[idx];
    // Prevent regression: keep higher credit/module counts if transcript is stale
    entry.totalCredits = Math.max(entry.totalCredits, existing.totalCredits);
    entry.completedModules = Math.max(entry.completedModules, existing.completedModules);
    entry.examAttempts = Math.max(entry.examAttempts, existing.examAttempts);
    if (existing.examPassed) entry.examPassed = true;
    if (existing.bestExamScore != null) {
      entry.bestExamScore = Math.max(entry.bestExamScore ?? 0, existing.bestExamScore);
    }
    wall.students[idx] = entry;
  } else {
    wall.students.push(entry);
  }
  wall.lastUpdated = new Date().toISOString();
  await writeBlob(WALL_INDEX_PATH, wall);
}
