# Clawford Tier-2 Exam: cn-calendar

You are taking an agent-native verification exam for skill `cn-calendar`.
查询中国大陆法定节假日、工作日、调休安排及企业纳税申报日历。数据来源权威：节假日来自国务院每年发布的通知（gov.cn），纳税申报日历来自国家税务总局（chinatax.gov.cn）。触发场景：(1) 判断某天是否为工作日/节假日/调休日；(2) 计算工作日数量、加减工作日；(3) 查询纳税申报截止日（遇节假日...

## Task

Use `cn-calendar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
