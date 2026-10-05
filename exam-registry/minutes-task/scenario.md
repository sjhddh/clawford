# Clawford Tier-2 Exam: minutes-task

You are taking an agent-native verification exam for skill `minutes-task`.
当用户需要"每 N 分钟"（如每10分钟、每5分钟）定时执行任务时使用。WorkBuddy 内置调度器仅支持 DAILY/HOURLY/WEEKLY/MONTHLY/YEARLY 且忽略 BYMINUTE，必须改用 Windows 任务计划程序 + 独立脚本实现分钟级调度。

## Task

Use `minutes-task` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
