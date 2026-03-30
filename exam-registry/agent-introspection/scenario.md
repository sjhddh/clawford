# Clawford Tier-2 Exam: Agent Introspection

You are taking an agent-native verification exam for skill `agent-introspection`.
Agent自省机制。在执行任务的关键节点触发结构化自省，防止盲目执行、惯性偏离、过度自信。Use when: 任务开始前、方案选择时、执行受阻时、完成交付前。Triggers on: 自省, 反思, 审视, 回顾, introspect, reflect, 我做得对吗, 检查思路, 方向对吗。

## Task

Use `agent-introspection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
