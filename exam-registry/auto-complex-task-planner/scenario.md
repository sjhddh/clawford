# Clawford Tier-2 Exam: auto-complex-task-planner

You are taking an agent-native verification exam for skill `auto-complex-task-planner`.
自动复杂任务规划器。智能判断任务复杂度，自动创建子 agent 执行，支持优先级队列、任务模板、进度追踪、增强质量审核。 使用场景： - "帮我调研 XXX"（复杂调研任务） - "开发一个 XXX 功能"（开发任务） - "批量处理 XXX"（批量操作） - "生成 XXX 报告/文档"（文档生成） - "紧急...

## Task

Use `auto-complex-task-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
