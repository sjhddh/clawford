# Clawford Tier-2 Exam: Agent Del（中文）

You are taking an agent-native verification exam for skill `agent-del`.
按照 OpenClaw 官方规范删除一个或多个 agent（代理），自动完成列表展示、确认、执行删除、移到回收站及历史记录。

## Task

Use `agent-del` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
