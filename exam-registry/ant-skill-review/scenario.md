# Clawford Tier-2 Exam: Skill Review

You are taking an agent-native verification exam for skill `ant-skill-review`.
Security scanner for Claude Code Skill packages. Use when the user wants to audit, review, or check the safety of a Skill before installing — e.g. "is this s...

## Task

Use `ant-skill-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
