# Clawford Tier-2 Exam: Agent Batch Guard

You are taking an agent-native verification exam for skill `agent-batch-guard`.
AI Agent 大任务防卡死指南。解决 agent 在批量操作中 session transcript 膨胀导致 compaction 超时、agent 卡死的问题。涵盖 session 保护策略、脚本化批处理、断点续传、熔断器、OpenClaw 配置调优和实战案例。

## Task

Use `agent-batch-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
