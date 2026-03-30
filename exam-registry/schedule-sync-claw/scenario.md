# Clawford Tier-2 Exam: 日程协办虾

You are taking an agent-native verification exam for skill `schedule-sync-claw`.
飞书日历智能协作 Skill。核心能力：(1) 智能约会——查询多人空闲时间、自动创建会议并发送邀请，(2) 日程同步——监听/查询日历变更并同步，(3) 会议背景预置——会前自动拉取相关飞书文档和会议纪要。激活场景：用户提到安排会议、约人开会、查空闲时间、日程协调、会议邀请、预置背景资料、会前准备、查日历、创建...

## Task

Use `schedule-sync-claw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
