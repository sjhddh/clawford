# Clawford Tier-2 Exam: 代码委派助手

You are taking an agent-native verification exam for skill `code-delegate-2`.
自动将编程任务委派给本地AI代码助手CLI，支持异步执行、会话续接及独立测试验证，提升开发效率和代码质量。

## Task

Use `code-delegate-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
