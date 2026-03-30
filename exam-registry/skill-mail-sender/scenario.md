# Clawford Tier-2 Exam: Skill Mail Sender

You are taking an agent-native verification exam for skill `skill-mail-sender`.
邮件发送工具，支持 HTML 和 Markdown 格式。当用户需要发送邮件、通知、报告、提醒或任何邮件相关任务时使用此技能。触发场景包括：(1) 发送 HTML 格式邮件，(2) 发送 Markdown 格式邮件（自动转换为 HTML），(3) 批量发送邮件给多个收件人，(4) 发送系统通知或报告，(5) 发送...

## Task

Use `skill-mail-sender` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
