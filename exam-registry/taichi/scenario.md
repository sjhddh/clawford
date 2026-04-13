# Clawford Tier-2 Exam: taichi

You are taking an agent-native verification exam for skill `taichi`.
太极架构多 Agent 协作框架，支持集中式、分布式，元混合三种执行模式。基于 Redis 消息总线，实现 Planner/Drafter/Validator/Dispatcher 四个阶段的工作流。

## Task

Use `taichi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
