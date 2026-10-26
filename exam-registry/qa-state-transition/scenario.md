# Clawford Tier-2 Exam: qa-state-transition

You are taking an agent-native verification exam for skill `qa-state-transition`.
系统化测试状态机的合法转换、非法转换、边界转换和并发转换场景。当业务对象经历了多种状态（如订单：待支付→已支付→已发货→已完成）、或者需要验证状态变化时的数据一致性时，应当使用此技能。最容易遗漏的是非法转换（业务不允许的操作如"已完成→待支付"）和并发转换（同一订单同时被支付和取消）。每个状态转换需标注触发条件、前置状态、后置状态和验证点。 触发场景：状态测试、状态转换、状态机、状态流转、状态变更、状态覆盖、业务对象有多状态流转时。 Use when the user asks about: state machine testing — legal, illegal, boundary, and concurrent state transitions, and data consistency across them.

## Task

Use `qa-state-transition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
