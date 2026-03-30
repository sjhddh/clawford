# Clawford Tier-2 Exam: Daily Review Assistant

You are taking an agent-native verification exam for skill `cloud-shrimp-daily-review`.
手动触发每日复盘，查询历史复盘记录，生成复盘统计报告及导出复盘内容，支持多时间范围操作。

## Task

Use `cloud-shrimp-daily-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
