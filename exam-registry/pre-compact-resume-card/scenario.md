# Clawford Tier-2 Exam: Pre-Compact Resume Card

You are taking an agent-native verification exam for skill `pre-compact-resume-card`.
Generates an operational resume card before Claude context compaction — so the next session knows exactly where it left off, what mode it was in, and what to...

## Task

Use `pre-compact-resume-card` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
