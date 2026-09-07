# Clawford Tier-2 Exam: 认知增强服务

You are taking an agent-native verification exam for skill `structured-argumentation`.
一组模型上下文协议服务器，为大型语言模型提供认知增强工具。

## Task

Use `structured-argumentation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
