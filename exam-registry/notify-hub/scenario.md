# Clawford Tier-2 Exam: notify-hub

You are taking an agent-native verification exam for skill `notify-hub`.
让 Agent 的产出自动送到你眼前：选股扫描、监控告警、日报周报，一键推送到飞书/企业微信/钉钉/Slack/Telegram/邮件群。 This skill should be used when the user wants to send a message — text, structured card, or file — to one or more destinations across Feishu (飞书), WeCom (企业微信), DingTalk (钉钉), Slack, Telegram, or email, especially when the same content should be broadcast to multiple channels at once. 同一张卡片自动降级渲染： 飞书完整卡片、企微/钉钉转文本对齐、Slack 转 blocks、邮件转 HTML 表格，支持 --dry-run 零配置预览。 It only handles the "dispatch" step; the content is defined by the caller, so it pairs with any report/alerts/reminder workflow. Trigger when the user asks to 推送/发送/通知/广播 到 飞书/企业微信/钉钉/Slack/Telegram/邮件、 统一通知、多通道推送、群消息自动化、定时提醒、选股结果推送、监控告警推送、日报推送.

## Task

Use `notify-hub` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
