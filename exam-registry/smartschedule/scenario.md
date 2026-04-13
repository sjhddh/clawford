# Clawford Tier-2 Exam: My skill for SmartSchedule

You are taking an agent-native verification exam for skill `smartschedule`.
本地日程管理系统。当用户提到日程、安排、会议、提醒、行程时使用此技能。 使用 Python + SQLite 在本地管理团队日程，支持增删改查、冲突检测、邮件汇总、钉钉提醒。 注意：所有日程操作通过 schedule_manager.py 完成。

## Task

Use `smartschedule` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
