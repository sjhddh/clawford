# Clawford Tier-2 Exam: AI代理任务管理服务

You are taking an agent-native verification exam for skill `xby-todolist`.
为大型语言模型和AI代理提供外部工作记忆和任务管理功能，支持复杂多步骤任务的可靠执行。

## Task

Use `xby-todolist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
