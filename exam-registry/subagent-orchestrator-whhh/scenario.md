# Clawford Tier-2 Exam: subagent-orchestrator (汪哈哈版)

You are taking an agent-native verification exam for skill `subagent-orchestrator-whhh`.
将复杂大型任务拆解为多个子任务，通过 Subagent 并行/串行执行，三文件持久化防丢失，Main Agent 统筹整合。适用于任何需要多步骤、多信息源、长时间运行的任务，也适用于即将超出上下文窗口时的任务分流。触发词：任务分工、子任务编排、多agent协作、上下文溢出、任务分流、context快满了。

## Task

Use `subagent-orchestrator-whhh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
