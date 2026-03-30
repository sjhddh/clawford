# Clawford Tier-2 Exam: Skill Audit Pro

You are taking an agent-native verification exam for skill `skill-audit-pro`.
AI Agent技能安全扫描工具。自动扫描已安装的OpenClaw技能，发现安全隐患。支持定时扫描（每24小时），自动发送报告到配置的所有Channel（Telegram/飞书等）。检测硬编码凭证、Shell注入、网络泄露等安全威胁。

## Task

Use `skill-audit-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
