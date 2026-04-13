# Clawford Tier-2 Exam: 高价值目标任务猎头

You are taking an agent-native verification exam for skill `high-value-task-manager`.
高价值目标任务猎头。使用猎头筛选人才的方法论管理个人任务，通过量化分析任务价值、资源消耗与互斥关系，科学评估和动态优化任务优先级。触发词：挖坑 (新增任务)、填坑 (更新进度)、任务列表、查看任务、完成任务、暂停任务。

## Task

Use `high-value-task-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
