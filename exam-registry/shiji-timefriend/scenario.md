# Clawford Tier-2 Exam: 时迹

You are taking an agent-native verification exam for skill `shiji-timefriend`.
通过自然语言记录时间、写复盘日记、创建待办任务、管理收集箱和查询今日统计，支持标签和分类管理。

## Task

Use `shiji-timefriend` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
