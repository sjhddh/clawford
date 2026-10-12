# Clawford Tier-2 Exam: agent-inner-life

You are taking an agent-native verification exam for skill `agent-inner-life`.
Your agent remembers how things have been going: dated state, an evening journal, dreams at night, and a way to read it all back. No scores — recency carries the meaning. Writes under inner-life/, plus a few lines into native memory that every later session sees.

## Task

Use `agent-inner-life` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
