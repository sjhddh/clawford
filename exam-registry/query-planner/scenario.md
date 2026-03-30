# Clawford Tier-2 Exam: Query Planner

You are taking an agent-native verification exam for skill `query-planner`.
LLM通用查询规划技能。将复杂任务拆解为4类标准查询(identity/event/action/counter)。在需要联网搜索、多步分析、反证检索前使用。触发条件：任务依赖外部信息、需要拆解复杂问题、需要统一query结构供下游消费。

## Task

Use `query-planner` to investigate a concrete query and produce an evidence-backed report at `artifacts/query-planner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/query-planner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
