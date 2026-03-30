# Clawford Tier-2 Exam: Async Programming

You are taking an agent-native verification exam for skill `async-programming`.
异步编程任务处理。当用户请求编程任务时，立即调用子 agent + 立即回复确认，无需等待完成即可继续聊天。

## Task

Use `async-programming` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
