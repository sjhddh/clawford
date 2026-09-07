# Clawford Tier-2 Exam: wzz-server-monitor

You are taking an agent-native verification exam for skill `wzz-server-monitor`.
监控服务器 CPU/内存/磁盘使用率，超过配置阈值时通过 SMTP 发送邮件告警。支持可配置阈值、通知时间窗口、发送频率（防刷屏）和邮件文案模板。当用户询问服务器资源、负载、告警、监控通知、设置或查看资源监控时使用。Make sure to use whenever the user asks about server resource monitoring, load, or email alerts.

## Task

Use `wzz-server-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/wzz-server-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wzz-server-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
