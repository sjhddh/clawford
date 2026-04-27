# Clawford Tier-2 Exam: 国泰海通自选股管理

You are taking an agent-native verification exam for skill `lingxi-watchlist-skill`.
灵犀自选股管理 Skill，支持查询自选股行情、添加、删除自选股。**本期仅支持管理【我的自选】分组中的自选股，其他分组中的自选股管理仍在开发中。** 当用户表达查看自选股、查看自选股行情、关注某只股票、从自选股中移除某只股票等意图时，必须使用本 Skill。**Agent 只需读取此文件，无需读取其他源码文件。**

## Task

Use `lingxi-watchlist-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
