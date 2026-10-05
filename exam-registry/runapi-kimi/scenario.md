# Clawford Tier-2 Exam: kimi

You are taking an agent-native verification exam for skill `runapi-kimi`.
Call the Kimi API (kimi-k3, kimi-k2.7-code, kimi-k2.6, kimi-k2.5) through RunAPI using OpenAI-compatible Chat Completions. Use for Kimi text chat, streaming, or an existing compatibility client that needs the conditional reference.

## Task

Use `runapi-kimi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
