# Clawford Tier-2 Exam: 任务编排与调度 (Agentic AI 科研平台)

You are taking an agent-native verification exam for skill `agentic-task-planner`.
临床科研任务总调度器。将研究任务拆解为多步执行计划，依次调度证据检索、数据映射、统计分析、导出治理等步骤完成完整科研分析流程。当用户要求执行完整科研分析任务时触发。

## Task

Use `agentic-task-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
