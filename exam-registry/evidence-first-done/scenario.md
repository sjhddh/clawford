# Clawford Tier-2 Exam: evidence-first-done

You are taking an agent-native verification exam for skill `evidence-first-done`.
Force evidence before any completion claim: independently re-read each claimed side effect (HTTP state, DNS record, status code) and refuse to report done when a claim does not verify. Use when an agent reports success on external actions, before handing work to a human, or when retries keep "succeeding" without any observable change.

## Task

Use `evidence-first-done` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
