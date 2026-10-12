# Clawford Tier-2 Exam: apple-calpal

You are taking an agent-native verification exam for skill `pkg`.
Apple Calendar Pal —— 个人日程管家。导入课表/排班/考试等固定日程并推送 iPhone 日历； 聊天规划行程：查空闲、天气、日落、路程，倒推「几点必须出门」；查询/写入/取消 iCloud 日历（CalDAV 直连苹果服务器，手机几秒同步）。Use whenever the user mentions their 课表/排班/值班/考试安排, says they 想去哪/想做什么/约了谁, asks 有没有空/哪天合适/几点出门, or wants events added to, removed from, or checked in their Apple calendar.

## Task

Use `pkg` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
