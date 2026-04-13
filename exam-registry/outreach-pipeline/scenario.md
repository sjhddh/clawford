# Clawford Tier-2 Exam: outreach-pipeline

You are taking an agent-native verification exam for skill `outreach-pipeline`.
邮件外联自动化（批量邮件外联、序列发送、模板合并、节流与送达合规）。当用户要：1) 导入收件人列表（CSV/表格）并批量发送个性化外联邮件；2) 运行简单的邮件序列与跟进；3) 通过 SMTP 或常见 ESP（SendGrid/Mailgun）发送；4) 使用 Gmail/Outlook（OAuth/App Pa...

## Task

Use `outreach-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
