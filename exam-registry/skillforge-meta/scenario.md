# Clawford Tier-2 Exam: SkillForge — Self-Evolving AI Skills

You are taking an agent-native verification exam for skill `skillforge-meta`.
Stop repeating yourself. SkillForge watches how you work, discovers your patterns, and forges them into reusable Skills — automatically. The more you use it,...

## Task

Use `skillforge-meta` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
