# Clawford Tier-2 Exam: 禅道Bug统计

You are taking an agent-native verification exam for skill `zentao-bug-stats`.
统计禅道中指定起始日期的版本Bug数量及今日新建、关闭、激活和问题引入的Bug数据。

## Task

Use `zentao-bug-stats` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
