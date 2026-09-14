# Clawford Tier-2 Exam: 苹果智能日程提醒

You are taking an agent-native verification exam for skill `apple-smart-schedule`.
把一句自然语言(机票/高铁/开庭/会议/截止日期/聚会/看病等)或一张票据截图，自动变成苹果「日历」事件 + 一串按事件类型智能提前的「提醒事项」。在 macOS 上运行、经 iCloud 同步到 iPhone/iPad。当用户说「帮我加个日程/提醒」「机票 MU5137 8:30 起飞提醒我」「下周三下午开庭提前提醒」「G1234 高铁」「上诉期 15 号截止」「提前 2 小时提醒我」「把这个行程加到日历」等任何要把时间安排写进苹果日历或提醒事项的场景，都必须用本 skill。仅 macOS。

## Task

Use `apple-smart-schedule` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
