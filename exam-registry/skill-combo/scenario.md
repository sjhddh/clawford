# Clawford Tier-2 Exam: Skill Combo - 技能组合器

You are taking an agent-native verification exam for skill `skill-combo`.
支持同时启用多个技能协同工作，分工执行并整合结果，实现复杂任务的高效完成与管理。

## Task

Use `skill-combo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
