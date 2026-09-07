# Clawford Tier-2 Exam: 工具调用重试免费版

You are taking an agent-native verification exam for skill `tool-call-retry-tool-free`.
为个人开发者提供轻量级LLM工具调用重试与格式校验，支持指数退避、幂等性键，一行代码接入，提升调用成功率90%以上。

## Task

Use `tool-call-retry-tool-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
