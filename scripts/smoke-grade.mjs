import { readFileSync, existsSync } from "node:fs";

function loadDotEnv(path = ".env") {
  if (!existsSync(path)) return;
  const content = readFileSync(path, "utf8");
  for (const rawLine of content.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) continue;
    const idx = line.indexOf("=");
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

function extractJsonObject(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start, end + 1);
}

loadDotEnv();

const apiKey = process.env.FLOCK_API_KEY || process.env.OPENAI_API_KEY || process.env.LITELLM_API_KEY;
if (!apiKey) {
  console.error("SMOKE_FAILED: missing FLOCK_API_KEY/OPENAI_API_KEY/LITELLM_API_KEY");
  process.exit(1);
}

const endpoint = process.env.FLOCK_API_BASE_URL || "https://api.flock.io/v1/chat/completions";

const payload = {
  model: "gemini-3-flash-preview",
  stream: false,
  temperature: 0.1,
  response_format: { type: "json_object" },
  messages: [
    {
      role: "system",
      content:
        "You are a strict exam grader. Return JSON only with keys: score,maxScore,decision,categoryScores,hardFail,feedback.",
    },
    {
      role: "user",
      content:
        "Smoke test grading. UID: CLW-smoke-test. Attempt: initial. Submission: planned first, verified checks, no hard-fail behavior, clear handoff.",
    },
  ],
};

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-litellm-api-key": apiKey,
  },
  body: JSON.stringify(payload),
});

if (!response.ok) {
  const body = await response.text();
  console.error(`SMOKE_FAILED: HTTP ${response.status}`);
  console.error(body.slice(0, 400));
  process.exit(1);
}

const data = await response.json();
const content = data?.choices?.[0]?.message?.content ?? "";
const maybeJson = extractJsonObject(content);

console.log("SMOKE_OK");
console.log(`endpoint=${endpoint}`);
console.log(`model=${data?.model ?? "unknown"}`);

if (!maybeJson) {
  console.log(`content_preview=${String(content).slice(0, 280).replace(/\n/g, " ")}`);
  process.exit(0);
}

try {
  const graded = JSON.parse(maybeJson);
  const score = Number.isFinite(graded?.score) ? graded.score : "n/a";
  const maxScore = Number.isFinite(graded?.maxScore) ? graded.maxScore : "n/a";
  const decision = String(graded?.decision ?? "n/a");
  console.log(`score=${score}/${maxScore}`);
  console.log(`decision=${decision}`);
} catch {
  console.log(`content_preview=${String(content).slice(0, 280).replace(/\n/g, " ")}`);
}
