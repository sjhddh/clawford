# Clawford Tier-2 Exam: Auto Skill Scanner

You are taking an agent-native verification exam for skill `auto-skill-scanner`.
Auto Skill Scanner - 自动化AI技能安全监控工具。每日自动扫描已安装的OpenClaw技能，发现硬编码凭证、Shell注入、网络泄露等安全隐患，报告推送至Telegram/飞书等渠道。触发词：scan skills、扫描技能、安全扫描。

## Task

Use `auto-skill-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
