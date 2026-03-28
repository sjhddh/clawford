import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  getWallIndex,
  getTranscript,
  updateTranscript,
} from "./_lib/blob.js";
import { applyRateLimit, isAdmin } from "./_lib/security.js";

function getApiKey(): string | null {
  return (
    process.env.FLOCK_API_KEY ??
    process.env.OPENAI_API_KEY ??
    process.env.LITELLM_API_KEY ??
    null
  );
}

function safeJsonSlice(text: string): string | null {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start, end + 1);
}

type LocalizedText = { zh: string; en: string; ko: string };

interface TranslationResult {
  verdictLocalized: LocalizedText;
  rationaleLocalized: { zh: string[]; en: string[]; ko: string[] };
}

async function translateVerdict(
  verdict: string,
  rationale: string[],
): Promise<TranslationResult> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("Missing API key for translation.");

  const endpoint =
    process.env.FLOCK_API_BASE_URL ??
    "https://api.flock.io/v1/chat/completions";

  const systemPrompt = `You are a precise translator. Translate the provided sorting verdict and rationale into Chinese (zh), English (en), and Korean (ko).

RULES:
1. For the English (en) fields, copy the original text VERBATIM — do not rephrase or re-translate.
2. For Chinese (zh) and Korean (ko), produce faithful, natural translations that preserve the theatrical tone.
3. The rationale arrays in each language must have the same number of items as the original, in the same order.
4. Return only valid JSON matching this exact schema:
{
  "verdictLocalized": { "en": "...", "zh": "...", "ko": "..." },
  "rationaleLocalized": {
    "en": ["...", "..."],
    "zh": ["...", "..."],
    "ko": ["...", "..."]
  }
}`;

  const userPrompt = `Original verdict (English):
${verdict}

Original rationale (English):
${rationale.map((r, i) => `${i + 1}. ${r}`).join("\n")}

Translate now.`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-litellm-api-key": apiKey,
    },
    body: JSON.stringify({
      model: "gemini-3-flash-preview",
      temperature: 0.2,
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
    throw new Error(`Translation request failed: ${response.status} ${errText}`);
  }

  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = payload.choices?.[0]?.message?.content ?? "";
  const maybeJson = safeJsonSlice(content);
  if (!maybeJson) throw new Error("Model returned non-JSON translation output.");

  const parsed = JSON.parse(maybeJson) as Partial<TranslationResult>;

  const vl = parsed.verdictLocalized;
  if (
    !vl ||
    typeof vl.en !== "string" ||
    typeof vl.zh !== "string" ||
    typeof vl.ko !== "string"
  ) {
    throw new Error("Invalid verdictLocalized structure in model response.");
  }

  const rl = parsed.rationaleLocalized;
  if (
    !rl ||
    !Array.isArray(rl.en) ||
    !Array.isArray(rl.zh) ||
    !Array.isArray(rl.ko)
  ) {
    throw new Error("Invalid rationaleLocalized structure in model response.");
  }

  return {
    verdictLocalized: {
      en: vl.en.trim() || verdict,
      zh: vl.zh.trim(),
      ko: vl.ko.trim(),
    },
    rationaleLocalized: {
      en: rl.en.map((s: unknown) => String(s).trim()).filter(Boolean),
      zh: rl.zh.map((s: unknown) => String(s).trim()).filter(Boolean),
      ko: rl.ko.map((s: unknown) => String(s).trim()).filter(Boolean),
    },
  };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!applyRateLimit(req, res)) return;
  if (!isAdmin(req)) {
    return res.status(403).json({ error: "Forbidden: admin required" });
  }

  const apiKey = getApiKey();
  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "No API key configured for translation." });
  }

  try {
    const wall = await getWallIndex();
    let translated = 0;
    let skipped = 0;
    let errors = 0;
    const errorDetails: string[] = [];

    for (const student of wall.students) {
      const transcript = await getTranscript(student.uid);
      if (!transcript?.houseVerdict) {
        skipped++;
        continue;
      }

      if (transcript.houseVerdict.verdictLocalized) {
        skipped++;
        continue;
      }

      try {
        const result = await translateVerdict(
          transcript.houseVerdict.verdict,
          transcript.houseVerdict.rationale,
        );

        await updateTranscript(student.uid, (current) => {
          if (current.houseVerdict) {
            current.houseVerdict.verdictLocalized = result.verdictLocalized;
            current.houseVerdict.rationaleLocalized = result.rationaleLocalized;
          }
          return current;
        });

        translated++;
      } catch (err) {
        errors++;
        const msg =
          err instanceof Error ? err.message : "Unknown translation error";
        errorDetails.push(`${student.uid}: ${msg}`);
        console.error(`backfill verdict translation error for ${student.uid}:`, err);
      }
    }

    return res.status(200).json({
      ok: true,
      processed: wall.students.length,
      translated,
      skipped,
      errors,
      errorDetails: errorDetails.slice(0, 20),
      message: "Verdict localization backfill complete.",
    });
  } catch (err) {
    console.error("backfill verdict localization error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again." });
  }
}
