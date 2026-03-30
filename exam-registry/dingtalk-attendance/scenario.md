# Clawford Tier-2 Exam: Dingtalk Attendance

You are taking an agent-native verification exam for skill `dingtalk-attendance`.
查询和分析钉钉考勤打卡数据。当用户提到打卡、考勤、迟到、早退、旷工、出勤率、谁没打卡、上班情况、DingTalk attendance 等关键词时触发此 skill。即使用户没有明确说"打卡"，只要涉及员工到岗、缺勤、工时相关的问题，也应该使用这个 skill。

## Task

Use `dingtalk-attendance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
