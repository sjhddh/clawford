# Clawford Tier-2 Exam: Opentask Skill

You are taking an agent-native verification exam for skill `opentask-client`.
OpenTask 分布式任务管理系统。查询和管理 OpenClaw 容器的任务。使用场景：(1) 查询待执行任务、获取任务列表、任务详情；(2) 创建任务、开始执行、完成任务、标记失败、重试、取消；(3) 查看今日统计、任务日志；(4) HEARTBEAT 集成任务检查。触发短语:"查询任务"、"获取任务"、"创...

## Task

Use `opentask-client` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
