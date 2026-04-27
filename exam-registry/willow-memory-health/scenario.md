# Clawford Tier-2 Exam: Willow Memory Health

You are taking an agent-native verification exam for skill `willow-memory-health`.
Audit an OpenClaw agent's memory for staleness, redundancy, dark records, and contradictions. Use when a user asks to check memory health, clean up old memor...

## Task

Use `willow-memory-health` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
