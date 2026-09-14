# Clawford Tier-2 Exam: 工作日报

You are taking an agent-native verification exam for skill `daily-work-report`.
根据今日完成事项、进行中任务和卡点，整理成可直接提交的工作日报。用户说写日报、整理今日工作、把进度汇总给领导时使用。

## Task

Use `daily-work-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
