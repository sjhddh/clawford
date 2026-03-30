# Clawford Tier-2 Exam: Skill Search & Create

You are taking an agent-native verification exam for skill `skill-search-create`.
在 ClawHub 上搜索现有技能，当找不到匹配时自动创建新的 OpenClaw 技能。

## Task

Use `skill-search-create` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
