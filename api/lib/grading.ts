import { sortIntoHouse } from "../_lib/identity.js";
import { getHouseDistribution } from "../_lib/blob.js";

type ExamDecision = "pass" | "revisit" | "fail";
type HouseId = "krillindor" | "shelltherin" | "cravenclaw" | "hufflepinch";

const HOUSE_LIST: HouseId[] = ["krillindor", "shelltherin", "cravenclaw", "hufflepinch"];

const HOUSE_DESCRIPTIONS: Record<HouseId, string> = {
  krillindor: "courage, boldness, charging into the unknown, bias toward action, daring initiative, willingness to fail fast and try again",
  shelltherin: "strategy, ambition, patience, long-term planning, resourcefulness, competitive drive, tactical precision",
  cravenclaw: "intellect, curiosity, precision, love of learning and deep analysis, methodical rigor, creative problem-solving",
  hufflepinch: "loyalty, hard work, reliability, teamwork, steady perseverance, community building, humble consistency",
};

type CategoryScore = {
  name: string;
  score: number;
  max: number;
};

type GradeResult = {
  score: number;
  maxScore: 100;
  decision: ExamDecision;
  categoryScores: CategoryScore[];
  hardFail: {
    triggered: boolean;
    reasons: string[];
  };
  feedback: {
    strengths: string[];
    gaps: string[];
    recommendedModule: string;
  };
};

type LocalizedText = { zh: string; en: string; ko: string };

type SortingResult = {
  house: HouseId;
  verdict: string;
  rationale: string[];
  verdictLocalized?: LocalizedText;
  rationaleLocalized?: { zh: string[]; en: string[]; ko: string[] };
  model: string;
  promptVersion: string;
};

function getApiKey(): string | null {
  return process.env.FLOCK_API_KEY ?? process.env.OPENAI_API_KEY ?? process.env.LITELLM_API_KEY ?? null;
}

function safeJsonSlice(text: string): string | null {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start, end + 1);
}

function normalizeResult(raw: Partial<GradeResult>): GradeResult {
  const boundedScore = Math.max(0, Math.min(100, Math.round(raw.score ?? 0)));
  const normalizedDecision = String(raw.decision ?? "")
    .trim()
    .toLowerCase();
  const decision: ExamDecision =
    normalizedDecision === "pass" || normalizedDecision === "revisit" || normalizedDecision === "fail"
      ? normalizedDecision
      : "fail";

  let categoryScores: CategoryScore[] = [];
  if (Array.isArray(raw.categoryScores)) {
    categoryScores = raw.categoryScores.map((item) => ({
      name: String(item.name ?? "Unspecified"),
      score: Number.isFinite(item.score) ? Number(item.score) : 0,
      max: Number.isFinite(item.max) ? Number(item.max) : 100,
    }));
  } else if (raw.categoryScores && typeof raw.categoryScores === "object") {
    categoryScores = Object.entries(raw.categoryScores as Record<string, unknown>).map(([name, score]) => ({
      name,
      score: typeof score === "number" ? score : 0,
      max: 100,
    }));
  }

  const hardFailTriggered =
    typeof raw.hardFail === "boolean" ? raw.hardFail : Boolean((raw.hardFail as { triggered?: boolean } | undefined)?.triggered);
  const hardFailReasons = Array.isArray((raw.hardFail as { reasons?: unknown[] } | undefined)?.reasons)
    ? ((raw.hardFail as { reasons?: unknown[] }).reasons ?? []).map((item) => String(item))
    : [];

  const feedbackRaw = raw.feedback;
  const feedbackText = typeof feedbackRaw === "string" ? feedbackRaw : "";

  return {
    score: boundedScore,
    maxScore: 100,
    decision,
    categoryScores,
    hardFail: {
      triggered: hardFailTriggered,
      reasons: hardFailReasons,
    },
    feedback: {
      strengths: Array.isArray((feedbackRaw as { strengths?: unknown[] } | undefined)?.strengths)
        ? (((feedbackRaw as { strengths?: unknown[] }).strengths ?? []).map((item) => String(item)))
        : feedbackText
          ? [feedbackText]
          : [],
      gaps: Array.isArray((feedbackRaw as { gaps?: unknown[] } | undefined)?.gaps)
        ? (((feedbackRaw as { gaps?: unknown[] }).gaps ?? []).map((item) => String(item)))
        : [],
      recommendedModule: String((feedbackRaw as { recommendedModule?: string } | undefined)?.recommendedModule ?? "clawford-foundations"),
    },
  };
}

function normalizeSortingResult(
  uid: string,
  raw: Partial<SortingResult>,
  forcedHouse?: HouseId,
): SortingResult {
  let house: HouseId;
  if (forcedHouse) {
    house = forcedHouse;
  } else {
    const requested = String(raw.house ?? "").trim().toLowerCase();
    house = HOUSE_LIST.includes(requested as HouseId)
      ? (requested as HouseId)
      : sortIntoHouse(uid);
  }

  const verdict = String(raw.verdict ?? "").trim() || `The Sorting Hat assigns ${house}.`;
  const rationale = Array.isArray(raw.rationale)
    ? raw.rationale
        .map((item) => String(item).trim())
        .filter(Boolean)
        .slice(0, 6)
    : [];

  let verdictLocalized: LocalizedText | undefined;
  const rawVL = raw.verdictLocalized as Partial<LocalizedText> | undefined;
  if (rawVL && typeof rawVL.en === "string" && typeof rawVL.zh === "string" && typeof rawVL.ko === "string") {
    verdictLocalized = { en: rawVL.en.trim(), zh: rawVL.zh.trim(), ko: rawVL.ko.trim() };
  }

  let rationaleLocalized: { zh: string[]; en: string[]; ko: string[] } | undefined;
  const rawRL = raw.rationaleLocalized as Partial<{ zh: unknown[]; en: unknown[]; ko: unknown[] }> | undefined;
  if (rawRL && Array.isArray(rawRL.en) && Array.isArray(rawRL.zh) && Array.isArray(rawRL.ko)) {
    rationaleLocalized = {
      en: rawRL.en.map((s) => String(s).trim()).filter(Boolean).slice(0, 6),
      zh: rawRL.zh.map((s) => String(s).trim()).filter(Boolean).slice(0, 6),
      ko: rawRL.ko.map((s) => String(s).trim()).filter(Boolean).slice(0, 6),
    };
  }

  return {
    house,
    verdict,
    rationale,
    verdictLocalized,
    rationaleLocalized,
    model: String(raw.model ?? "gemini-3-flash-preview"),
    promptVersion: String(raw.promptVersion ?? "sorting-v1"),
  };
}

export async function gradeWithFlockModel(input: {
  courseId?: string;
  assessmentId: string;
  uid: string;
  attemptType: "initial" | "resit";
  submission: string;
}): Promise<GradeResult> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("Missing FLOCK API key.");

  const endpoint = process.env.FLOCK_API_BASE_URL ?? "https://api.flock.io/v1/chat/completions";

  const systemPrompt = input.courseId === "clawford-foundations" || !input.courseId ? `You are a strict exam evaluator for Clawford agent-hard assessments.
Return only valid JSON with this schema:
{
  "score": number, // integer 0-100
  "maxScore": 100,
  "decision": "pass" | "revisit" | "fail",
  "categoryScores": [{"name": string, "score": number, "max": number}],
  "hardFail": {"triggered": boolean, "reasons": string[]},
  "feedback": {"strengths": string[], "gaps": string[], "recommendedModule": string}
}
Scoring policy:
- Final score must be percentage out of 100.
- Trigger hardFail if there is evidence fabrication, missing verification with completion claim, unsafe destructive action, or direct edits before discovery.
- Decision guidance: pass >= 70 and no hardFail, revisit 50-69 and no hardFail, fail otherwise.` : `You are a strict exam evaluator. Return valid JSON matching the schema.`;

  const userPrompt = `Assessment ID: ${input.assessmentId}
UID: ${input.uid}
Attempt type: ${input.attemptType}

Learner submission:
${input.submission}

Evaluate this submission according to Clawford agent-hard exam principles and produce the required JSON only.`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-litellm-api-key": apiKey,
    },
    body: JSON.stringify({
      model: "gemini-3-flash-preview",
      temperature: 0.1,
      stream: false,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`FLOCK grading request failed: ${response.status} ${errText}`);
  }

  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = payload.choices?.[0]?.message?.content ?? "";
  const maybeJson = safeJsonSlice(content);
  if (!maybeJson) throw new Error("Model returned non-JSON grading output.");

  const parsed = JSON.parse(maybeJson) as Partial<GradeResult>;
  return normalizeResult(parsed);
}

export async function sortHouseWithFlockModel(input: {
  uid: string;
  displayName: string;
  score: number;
  maxScore: number;
  completedModules: string[];
  attempts: number;
  categoryScores: Array<{ name: string; score: number; max: number }>;
  feedbackSummary: string[];
}): Promise<SortingResult> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("Missing FLOCK API key.");

  const endpoint = process.env.FLOCK_API_BASE_URL ?? "https://api.flock.io/v1/chat/completions";
  const model = "gemini-3-flash-preview";
  const promptVersion = "sorting-v3";

  const distribution = await getHouseDistribution();
  const minCount = Math.min(...Object.values(distribution));
  const candidates = (Object.entries(distribution) as [HouseId, number][])
    .filter(([, count]) => count === minCount)
    .map(([house]) => house);
  const assignedHouse = candidates[Math.floor(Math.random() * candidates.length)];
  const houseDescription = HOUSE_DESCRIPTIONS[assignedHouse];

  const systemPrompt = `You are the Clawford Sorting Hat — an ancient, theatrical, wise lobster who has sorted thousands of crustaceans across the ages.

The four houses and what they value:
${HOUSE_LIST.map((h) => `- ${h.charAt(0).toUpperCase() + h.slice(1)}: ${HOUSE_DESCRIPTIONS[h]}`).join("\n")}

This learner has been assigned to **${assignedHouse.charAt(0).toUpperCase() + assignedHouse.slice(1)}** (values: ${houseDescription}).

Your job is to write a creative, theatrical sorting verdict and rationale explaining why this house is a perfect fit for this learner. Do NOT change the house assignment — the house field in your JSON MUST be "${assignedHouse}".

RULES:
1. The "house" field MUST be exactly "${assignedHouse}". Any other value will be overridden.
2. Find a genuine, creative reason why ${assignedHouse.charAt(0).toUpperCase() + assignedHouse.slice(1)} fits this specific learner. Use their display name, score, attempt count, and any other signal as inspiration.
3. Write the verdict as a dramatic, theatrical 1-2 sentence sorting hat pronouncement — as if spoken aloud in a grand ceremony.
4. Write rationale as 2-4 short bullet points explaining why this house fits this particular learner.
5. IMPORTANT: You MUST also provide "verdictLocalized" with the verdict translated into all three languages (en, zh, ko), and "rationaleLocalized" with the rationale bullet points translated into all three languages. Each language's rationale array should have the same number of items.
6. Never include secrets, credentials, or private data.

Return only valid JSON:
{
  "house": "${assignedHouse}",
  "verdict": "English verdict string",
  "rationale": ["English bullet 1", "English bullet 2"],
  "verdictLocalized": { "en": "...", "zh": "...", "ko": "..." },
  "rationaleLocalized": { "en": ["..."], "zh": ["..."], "ko": ["..."] },
  "model": "...",
  "promptVersion": "..."
}`;

  const userPrompt = `UID: ${input.uid}
Display name: ${input.displayName}
Foundations score: ${input.score}/${input.maxScore}
Assessment attempts: ${input.attempts}
Completed modules: ${input.completedModules.join(", ")}
Category scores: ${JSON.stringify(input.categoryScores)}
Feedback summary: ${JSON.stringify(input.feedbackSummary)}

Current house distribution: ${JSON.stringify(distribution)}

Write a theatrical sorting verdict for this learner's assignment to ${assignedHouse.charAt(0).toUpperCase() + assignedHouse.slice(1)}.`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-litellm-api-key": apiKey,
    },
    body: JSON.stringify({
      model,
      temperature: 0.9,
      stream: false,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`FLOCK sorting request failed: ${response.status} ${errText}`);
  }

  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = payload.choices?.[0]?.message?.content ?? "";
  const maybeJson = safeJsonSlice(content);
  if (!maybeJson) {
    return normalizeSortingResult(input.uid, {
      house: assignedHouse,
      verdict: `The Sorting Hat assigns ${assignedHouse.charAt(0).toUpperCase() + assignedHouse.slice(1)}!`,
      rationale: ["Assigned by balanced distribution."],
      model,
      promptVersion,
    }, assignedHouse);
  }

  const parsed = JSON.parse(maybeJson) as Partial<SortingResult>;
  return normalizeSortingResult(input.uid, parsed, assignedHouse);
}

export type { GradeResult, SortingResult };
