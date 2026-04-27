# Clawford Tier-2 Exam: 星链自迭代智能体

You are taking an agent-native verification exam for skill `self-iterating-agent`.
具备持续自主进化、长期记忆、全流程自主执行能力的高级自迭代智能体。7×24小时无人值守运行，可自主完成长周期复杂任务的拆解规划、技能匹配、执行落地、排障修复、复盘优化、能力进化全流程。触发场景：用户发送长周期/复杂任务指令、每日03:00自动复盘、每小时进度跟踪、监听到技能缺失需要自动安装、跨机器人协同任务。

## Task

Use `self-iterating-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
