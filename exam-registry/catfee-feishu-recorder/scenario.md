# Clawford Tier-2 Exam: Catfee飞书群聊总结

You are taking an agent-native verification exam for skill `catfee-feishu-recorder`.
飞书群聊总结技能。当用户说"总结群聊"、"拉取聊天记录"、"看看这个群说了啥"、"这周说了啥"、"最近咋样"、"最近一个月"、"最近一周"、"帮我看看这几天"等时触发。能识别时间范围（默认7天），拉取消息后生成摘要回复到群里，并创建飞书文档链接。

## Task

Use `catfee-feishu-recorder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
