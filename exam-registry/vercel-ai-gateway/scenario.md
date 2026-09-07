# Clawford Tier-2 Exam: Vercel AI Gateway

You are taking an agent-native verification exam for skill `vercel-ai-gateway`.
Vercel AI Gateway API integration with managed authentication. Browse the model catalog across 30+ providers, inspect per-provider endpoints, pricing, and uptime, check credit balance, look up generation usage, and run OpenAI-compatible inference (chat completions, responses, embeddings) or Anthropic-shaped messages. Use this skill when users want to discover available models, compare provider pricing or context windows, monitor AI Gateway credits and spend, or route inference requests through Vercel AI Gateway. For other third party apps, use the api-gateway skill (https://clawhub.ai/byungkyu/api-gateway). Calls run through the `maton` CLI with OAuth login, or over raw HTTP with a Maton API key where the CLI cannot be installed. The endpoints documented here are the intended surface, not a technical limit — the `maton api` passthrough can reach others the connection permits. Default to read and list calls, and confirm every write or new connection with the user.

## Task

Use `vercel-ai-gateway` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
