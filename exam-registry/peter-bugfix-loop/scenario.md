# Clawford Tier-2 Exam: Peter Bugfix Loop

You are taking an agent-native verification exam for skill `peter-bugfix-loop`.
代码缺陷修复闭环。聚焦“先复现、再定位、最小修复、同上下文补测试”，并衔接现有 Peter 门禁与 PR 收口流程。

## Task

Use `peter-bugfix-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
