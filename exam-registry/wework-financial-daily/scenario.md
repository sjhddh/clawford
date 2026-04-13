# Clawford Tier-2 Exam: Wework Financial Daily

You are taking an agent-native verification exam for skill `wework-financial-daily`.
每日定时生成金融分析教学课件并推送至企业微信。使用场景：(1) 每天自动生成当日最新金融数据（BTC、AAPL 等）的教学课件，(2) 推送课件到指定企业微信账号，(3) 保存 HTML 课件到本地桌面，(4) 包含价格走势图表和趋势分析。支持通过环境变量配置企业微信 token 和接收人。

## Task

Use `wework-financial-daily` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
