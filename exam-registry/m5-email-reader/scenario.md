# Clawford Tier-2 Exam: Only read email

You are taking an agent-native verification exam for skill `m5-email-reader`.
只读邮件助手，通过 POP3 协议读取163、QQ、Gmail、Outlook等任意邮箱的邮件。支持：查询邮件总数、获取最近若干封邮件的标题列表、读取邮件完整内容（正文+附件信息）、按序号读取指定邮件、按关键词搜索邮件主题。当用户询问"帮我看看邮件"、"读一下邮箱"、"邮件里有没有XX"、"最近有什么邮件"、"查...

## Task

Use `m5-email-reader` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
