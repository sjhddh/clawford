# Clawford Tier-2 Exam: Parallel Responder

You are taking an agent-native verification exam for skill `parallel-responder`.
并行回复助手 - 让 AI 回复不再等待。支持任务分类、时间预估、并行执行、进度汇报。 简单任务直接回复，中等任务执行 + 汇报，复杂任务启动子 agent 并行处理。 Parallel Responder - Zero-wait AI responses. Task classification, time e...

## Task

Use `parallel-responder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
