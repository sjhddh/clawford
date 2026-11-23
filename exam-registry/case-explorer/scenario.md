# Clawford Tier-2 Exam: 案例智能匹配分析

You are taking an agent-native verification exam for skill `case-explorer`.
从全书实战案例中匹配真实情境并提炼可迁移的行动原则

## Task

Use `case-explorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
