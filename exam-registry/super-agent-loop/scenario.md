# Clawford Tier-2 Exam: super-agent-loop

You are taking an agent-native verification exam for skill `super-agent-loop`.
超级智能体端到端闭环编排器。把分散的元能力(规划/执行/自验证/反思/记忆) 熔成一条可执行的自主闭环：拓扑挑选就绪节点→执行→可靠自验证门控→ 结果写入记忆→失败/卡死触发反思诊断。实体化"超级智能体闭环编排"。

## Task

Use `super-agent-loop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
