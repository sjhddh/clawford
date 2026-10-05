# Clawford Tier-2 Exam: MAMA

You are taking an agent-native verification exam for skill `mama`.
通用多账户 IMAP/SMTP 邮箱代理。用于检查邮箱、列出账号、搜索邮件、读取邮件正文/链接/附件、下载附件、生成回复草稿、转发邮件、显式发送邮件、标记已读/未读、移动邮件，以及按关键词和截止时间生成邮件巡检摘要。支持默认账号、指定账号和跨账号操作；从某账号读取的邮件应继续使用同一账号处理回复、转发和草稿发送，避免账号交叉。触发关键词：多账户邮箱智能体、邮箱智能体、检查邮箱、查看邮箱、搜索邮件、读取邮件、邮件附件、回复草稿、转发邮件、发送邮件、截止时间邮件、邮件巡检。

## Task

Use `mama` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
