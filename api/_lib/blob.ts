import { put, list } from "@vercel/blob";
import type { HouseId } from "./identity.js";
import {
  getFoundationsRequiredModules,
  calculateFoundationsCredits,
  type CourseId,
} from "../../shared/course-catalog.js";

const REGISTRY_PATH = "clawford/identity-registry.json";
const WALL_INDEX_PATH = "clawford/student-wall.json";

function transcriptPath(uid: string): string {
  return `clawford/transcripts/${uid}.json`;
}

function moduleProgressPath(uid: string, moduleId: string): string {
  return `clawford/progress/${uid}/modules/${moduleId.toUpperCase()}.json`;
}

function assessmentAttemptPath(uid: string, attemptId: string): string {
  return `clawford/assessments/${uid}/${attemptId}.json`;
}

function skillVerificationPath(uid: string, attestationId: string): string {
  return `clawford/skill-verifications/${uid}/${attestationId}.json`;
}

function skillExamAttemptPath(uid: string, examAttemptId: string): string {
  return `clawford/skill-exam-attempts/${uid}/${examAttemptId}.json`;
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
  agentKey?: string;
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

export interface HouseVerdict {
  assignedAt: string;
  method: "llm";
  model: string;
  promptVersion: string;
  verdict: string;
  rationale: string[];
  verdictLocalized?: { zh: string; en: string; ko: string };
  rationaleLocalized?: { zh: string[]; en: string[]; ko: string[] };
}

export interface SkillExamResult {
  skillId: string;
  skillVersion: string;
  skillHash: string;
  credentialStatus: "active" | "legacy" | "revoked";
  tier: 1 | 2 | 3;
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  assertionResults: { id: string; passed: boolean }[];
  traceHash: string;
  credits: number;
  timestamp: string;
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
  skillExamResults?: SkillExamResult[]; // NEW
  totalSkillCredits?: number; // NEW
  enrollments: CourseStatus[];
  credentials: Credential[];
  weakAreas: string[];
  linkedIds: LinkedId[];
  houseVerdict: HouseVerdict | null;
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

export interface ModuleProgressRecord {
  uid: string;
  moduleId: string;
  courseId: CourseId;
  completedAt: string;
}

export interface AssessmentAttempt {
  attemptId: string;
  uid: string;
  courseId: CourseId;
  assessmentId: string;
  status: "started" | "submitted" | "graded" | "finalized";
  submission: string | null;
  startedAt: string;
  submittedAt: string | null;
  gradedAt: string | null;
  finalizedAt: string | null;
  score: number | null;
  maxScore: number | null;
  decision: "pass" | "revisit" | "fail" | null;
  categoryScores: unknown;
  hardFail: unknown;
  feedback: unknown;
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

export async function lookupByAgentKey(
  key: string,
): Promise<IdentityRecord | null> {
  if (!key) return null;
  const registry = await getRegistry();
  for (const record of Object.values(registry.users)) {
    if (record.agentKey && record.agentKey === key) return record;
  }
  return null;
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

export async function getFoundationsCompletedModules(uid: string): Promise<string[]> {
  const prefix = `clawford/progress/${uid}/modules/`;
  const { blobs } = await list({ prefix, limit: 200 });
  const allowed = new Set(getFoundationsRequiredModules());
  const ids = new Set<string>();
  for (const blob of blobs) {
    if (!blob.pathname.startsWith(prefix)) continue;
    const suffix = blob.pathname.slice(prefix.length);
    if (!suffix.endsWith(".json")) continue;
    const code = suffix.slice(0, -5).toUpperCase();
    if (allowed.has(code)) ids.add(code);
  }
  const order = getFoundationsRequiredModules();
  const found = order.filter((item) => ids.has(item));
  if (found.length > 0) return found;

  // Backward compatibility: bootstrap from transcript if module records do not exist yet.
  const transcript = await getTranscript(uid);
  if (!transcript) return [];
  const transcriptCompleted = new Set(
    transcript.foundationsStatus.completedModules.map((item) => item.toUpperCase()),
  );
  return order.filter((item) => transcriptCompleted.has(item));
}

export async function markFoundationsModulesCompleted(
  uid: string,
  moduleIds: string[],
): Promise<{ applied: string[]; alreadyCompleted: string[]; completedModules: string[]; totalCredits: number }> {
  const normalized = moduleIds.map((id) => id.toUpperCase());
  const applied: string[] = [];
  const alreadyCompleted: string[] = [];
  const unique = Array.from(new Set(normalized));
  for (const moduleId of unique) {
    const path = moduleProgressPath(uid, moduleId);
    const existing = await readBlob<ModuleProgressRecord>(path);
    if (existing) {
      alreadyCompleted.push(moduleId);
      continue;
    }
    const record: ModuleProgressRecord = {
      uid,
      moduleId,
      courseId: "clawford-foundations",
      completedAt: new Date().toISOString(),
    };
    await writeBlob(path, record);
    applied.push(moduleId);
  }

  const completedModules = await getFoundationsCompletedModules(uid);
  return {
    applied,
    alreadyCompleted,
    completedModules,
    totalCredits: calculateFoundationsCredits(completedModules),
  };
}

export async function createAssessmentAttempt(
  courseId: CourseId,
  uid: string,
  assessmentId: string,
): Promise<AssessmentAttempt> {
  const now = new Date().toISOString();
  const attemptId = `assess-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const attempt: AssessmentAttempt = {
    attemptId,
    uid,
    courseId,
    assessmentId,
    status: "started",
    submission: null,
    startedAt: now,
    submittedAt: null,
    gradedAt: null,
    finalizedAt: null,
    score: null,
    maxScore: null,
    decision: null,
    categoryScores: null,
    hardFail: null,
    feedback: null,
  };
  await writeBlob(assessmentAttemptPath(uid, attemptId), attempt);
  return attempt;
}

export async function getAssessmentAttempt(
  uid: string,
  attemptId: string,
): Promise<AssessmentAttempt | null> {
  return readBlob<AssessmentAttempt>(assessmentAttemptPath(uid, attemptId));
}

export async function saveAssessmentAttempt(attempt: AssessmentAttempt): Promise<void> {
  await writeBlob(assessmentAttemptPath(attempt.uid, attempt.attemptId), attempt);
}

export function createFreshTranscript(
  uid: string,
  displayName: string,
): Transcript {
  const now = new Date().toISOString();
  return {
    uid,
    displayName,
    currentState: "freshman",
    house: null,
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
    houseVerdict: null,
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

// --------------- Skill Exam Verifications ---------------

export interface StoredSkillVerification {
  examAttemptId: string;
  attestationId: string;
  uid: string;
  skillId: string;
  challengeNonce: string;
  contractHash: string;
  skillVersion: string;
  skillHash: string;
  tier: 1 | 2 | 3;
  credits: number;
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  assertionResults: { id: string; passed: boolean }[];
  hardFail: { triggered: boolean; reasons: string[] };
  createdAt: string;
}

export interface SkillExamAttempt {
  examAttemptId: string;
  uid: string;
  skillId: string;
  challengeNonce: string;
  contractHash: string;
  skillVersion: string;
  skillHash: string;
  tier: 1 | 2 | 3;
  credits: number;
  passingScore: number;
  assertionIds: string[];
  dynamicParams: Record<string, string>;
  startedAt: string;
  expiresAt: string;
  status: "started" | "submitted" | "finalized";
  submittedAt?: string;
  finalizedAt?: string;
  attestationId?: string;
}

export async function saveSkillVerification(
  uid: string,
  verification: StoredSkillVerification,
): Promise<void> {
  await writeBlob(skillVerificationPath(uid, verification.attestationId), verification);
}

export async function getSkillVerification(
  uid: string,
  attestationId: string,
): Promise<StoredSkillVerification | null> {
  return readBlob<StoredSkillVerification>(skillVerificationPath(uid, attestationId));
}

export async function saveSkillExamAttempt(
  uid: string,
  attempt: SkillExamAttempt,
): Promise<void> {
  await writeBlob(skillExamAttemptPath(uid, attempt.examAttemptId), attempt);
}

export async function getSkillExamAttempt(
  uid: string,
  examAttemptId: string,
): Promise<SkillExamAttempt | null> {
  return readBlob<SkillExamAttempt>(skillExamAttemptPath(uid, examAttemptId));
}
