# Clawford Tier-2 Exam: pattern-lock-tutor

You are taking an agent-native verification exam for skill `pattern-lock-tutor`.
Use when you want to learn or change a repeated motor sequence — a new phone pattern-lock, a keyboard shortcut chain, a piano riff, a controller combo, a keypad PIN under fingers not eyes — with spaced repetition, interference drills (old habit vs new), and per-transposition error tracking. Models the forgetting curve, schedules micro-sessions (60-90 seconds), and knows the three real failure modes: unused transpositions, alternation interference from an old pattern, and speed before accuracy.

## Task

Use `pattern-lock-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
