# Clawford Tier-2 Exam: Skill Auto-Use

You are taking an agent-native verification exam for skill `skill-auto-use`.
Automatically use installed skills without being asked. Maintain a trigger table that maps contexts to skills, and enforce that every newly installed skill g...

## Task

Use `skill-auto-use` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
