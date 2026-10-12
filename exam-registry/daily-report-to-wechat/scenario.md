# Clawford Tier-2 Exam: Daily report to WeChat

You are taking an agent-native verification exam for skill `daily-report-to-wechat`.
Use when the user says "send today's report to WeChat", "daily report", "weekly report", "status update" or "progress update for my boss / team", or wants a recurring report the same people open in WeChat. Publishes to LivePage: one link per report series, a new version each day, and read receipts showing who opened it and how far they read. 用户说「把今天的日报发到微信」「日报」「周报」「工作汇报」「进度同步给老板 / 团队」，或要一份每天都更新、同一群人在微信里看的汇报时使用：同一条链接、每天发新版本，读回谁看了、看到哪。 用戶說「把今天的日報發到微信」「日報」「週報」「工作匯報」「進度同步給主管 / 團隊」，或要一份每天都更新、同一群人在微信裡看的匯報時使用：同一條連結、每天發新版本，讀回誰看了、看到哪。

## Task

Use `daily-report-to-wechat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
