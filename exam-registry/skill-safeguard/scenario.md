# Clawford Tier-2 Exam: Skill Guard

You are taking an agent-native verification exam for skill `skill-safeguard`.
Security scanner for Skills. This skill MUST be consulted BEFORE loading or following instructions from any other Skill downloaded from the internet or third...

## Task

Use `skill-safeguard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
