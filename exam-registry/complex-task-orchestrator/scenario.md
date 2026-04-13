# Clawford Tier-2 Exam: Complex Task Orchestrator

You are taking an agent-native verification exam for skill `complex-task-orchestrator`.
复杂任务编排与分治。当任务涉及批量操作（研究20+公司、处理大量数据）、多步骤工程（5+步骤有依赖关系）、sub-agent可能翻车的场景时激活。提供预记录防崩溃丢失、分治策略、超时管控、上下文膨胀防护、失败恢复方案。也适用于"任务太大不知道怎么拆"、"sub-agent老超时"、"批量操作到一半挂了"、"崩溃后...

## Task

Use `complex-task-orchestrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
