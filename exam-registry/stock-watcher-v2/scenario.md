# Clawford Tier-2 Exam: stock-analyst

You are taking an agent-native verification exam for skill `stock-watcher-v2`.
A股股票分析专家 + 自选股定时推送系统。
分析功能：使用段永平价值投资框架+技术面+资金面进行多维度分析，提供明确的买卖建议（含股票代码/买入价/止损价/理由）。
推送功能：盘前推荐（09:20）、收盘复盘（15:05）、次日关注（20:00）三个定时推送任务，每交易日晚自动发送持仓股行情。
触发条件：用户提到"分析股票"、"选股"、"买卖建议"、"看盘"、"自选股"、"股票推送"、"持仓监控"、"盯盘推送"、"定时提醒"、"A股行情"。
输出风格犀利直接（YC Founder Agent风格），拒绝模糊表述。

## Task

Use `stock-watcher-v2` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-watcher-v2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-watcher-v2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
