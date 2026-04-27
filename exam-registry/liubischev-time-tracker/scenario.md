# Clawford Tier-2 Exam: 柳比歇夫时间记录

You are taking an agent-native verification exam for skill `liubischev-time-tracker`.
基于柳比歇夫方法的时间与精力管理助理，通过飞书多维表格存储数据，支持自然语言记录与日报生成。 **当以下情况时使用此 Skill**： (1) 用户描述了刚才做的任何活动（记录时间流水账） (2) 用户说「日报」「今日日报」「生成日报」 (3) 平台定时触发日报生成

## Task

Use `liubischev-time-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
