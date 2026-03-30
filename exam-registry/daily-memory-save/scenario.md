# Clawford Tier-2 Exam: Daily Memory Save

You are taking an agent-native verification exam for skill `daily-memory-save`.
Periodically reviews conversation history and writes memory files to maintain agent continuity across sessions. Dual-layer system with daily raw notes and cu...

## Task

Use `daily-memory-save` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
