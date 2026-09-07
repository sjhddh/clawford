# Clawford Tier-2 Exam: Fact Check

You are taking an agent-native verification exam for skill `fact-check`.
Fast, source-backed answer to a factual question or "is it true that…" claim, returned within a hard time budget (simple ≤2 min, complex ≤5 min) — speed is t...

## Task

Use `fact-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
