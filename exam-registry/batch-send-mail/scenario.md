# Clawford Tier-2 Exam: batch-send-mail

You are taking an agent-native verification exam for skill `batch-send-mail`.
批量发送个性化邮件技能。读取表格（CSV/Excel）中的邮箱列表和变量，替换邮件模板中的占位符后批量发送邮件。支持 HTML 格式、通用附件、SMTP 配置和干运行预览模式。当用户需要批量发送个性化邮件、邮件营销、通知邮件时触发，即使他们说"批量发邮件"、"群发邮件"、"批量发送邮件"也要使用此技能。

## Task

Use `batch-send-mail` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
