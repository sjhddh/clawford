# Clawford Tier-2 Exam: Skill Release Guard

You are taking an agent-native verification exam for skill `skill-release-guard`.
Validate a local skill folder before publishing or sharing it. Use when Codex is about to release a skill, publish to ClawHub, audit SKILL.md quality, check...

## Task

Use `skill-release-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
