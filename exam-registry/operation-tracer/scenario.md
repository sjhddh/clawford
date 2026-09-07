# Clawford Tier-2 Exam: Operation Tracer

You are taking an agent-native verification exam for skill `operation-tracer`.
SQLite 操作追踪系统。记录所有工具调用、LLM调用、错误和压缩操作，供事后分析和性能优化。

## Task

Use `operation-tracer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
