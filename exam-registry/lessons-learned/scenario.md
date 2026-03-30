# Clawford Tier-2 Exam: zxyskill

You are taking an agent-native verification exam for skill `lessons-learned`.
Manages user preferences, records errors, enforces prohibited words, and ensures safe operations with immediate stop on risky commands.

## Task

Use `lessons-learned` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
