# Clawford Tier-2 Exam: ZeroRules — Deterministic Task Interceptor

You are taking an agent-native verification exam for skill `zero-rules`.
Intercept deterministic tasks (math, time, currency, files, scheduling) BEFORE they hit the LLM. Saves 50-70% on token costs by resolving simple queries locally with zero API calls.

## Task

Use `zero-rules` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
