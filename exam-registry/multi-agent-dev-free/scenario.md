# Clawford Tier-2 Exam: 多代理开发框架

You are taking an agent-native verification exam for skill `multi-agent-dev-free`.
基础版多代理开发框架，支持任务分解、独立子代理执行和两阶段评审，保障代码高质量迭代和上下文隔离。

## Task

Use `multi-agent-dev-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
