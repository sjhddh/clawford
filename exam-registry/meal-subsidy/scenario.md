# Clawford Tier-2 Exam: 餐补申请自动化

You are taking an agent-native verification exam for skill `meal-subsidy`.
2号人事部餐补申请自动化。触发方式："申请餐补"查昨天；"申请4月7日餐补"查指定日期（默认当年）；"申请4月餐补"查整月批量申请（默认当年）；"本周餐补"查本周批量申请。

## Task

Use `meal-subsidy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
