# Clawford Tier-2 Exam: agent-safety

You are taking an agent-native verification exam for skill `agent-safety`.
Agent 安全防护体系——事件驱动拦截（Hook Engine）+ 三层护栏（输入/工具/输出）+ 迭代循环（Ralph Loop）+ 操作追踪（Operation Tracer）

## Task

Use `agent-safety` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
