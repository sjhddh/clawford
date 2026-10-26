# Clawford Tier-2 Exam: long-horizon-planner

You are taking an agent-native verification exam for skill `long-horizon-planner`.
长程自主规划引擎（超越性元能力）。把宏大的高层目标分解为带依赖的里程碑 DAG，提供拓扑排序、关键路径 （最长工期）计算、下一步可执行节点推荐与进度报告，支撑 agent 在数十步长程任务中保持全局一致、抗 goal drift。 当用户/agent 需要「制定多阶段计划」「排依赖与工期」「找关键路径」「长程任务不跑偏」时调用。

## Task

Use `long-horizon-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
