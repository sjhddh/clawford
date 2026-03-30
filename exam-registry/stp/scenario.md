# Clawford Tier-2 Exam: 结构化任务规划与分步执行 V2（异步子代理架构）

You are taking an agent-native verification exam for skill `stp`.
结构化任务规划与分步执行 V2（异步子代理架构）。支持将每个步骤通过 session_spawn 创建子代理异步执行，主会话保持非阻塞。功能包括：步骤分解、子代理执行、子代理检验（LLM判断）、状态跟踪、Heartbeat 监控、任务中断。触发词：/stp、任务规划、步骤执行。

## Task

Use `stp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
