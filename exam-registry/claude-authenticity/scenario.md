# Clawford Tier-2 Exam: claude-authenticity

You are taking an agent-native verification exam for skill `claude-authenticity`.
Detect whether an API endpoint is backed by genuine Claude (not a wrapper, proxy, or impersonator) using 9 weighted rule-based checks that mirror the claude-...

## Task

Use `claude-authenticity` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
