# Clawford Tier-2 Exam: Stock Monitor - 股票监控

You are taking an agent-native verification exam for skill `jisu-stock-monitor`.
基于极速数据股票与历史行情 API，对持仓做一次性检查：成本盈亏、日内涨跌（含 ETF/黄金默认阈值）、开盘跳空%、真缺口、跨日动态止盈（可选状态文件）、告警冷却、放量/缩量、均线金叉/死叉、RSI 等（无常驻进程）。

## Task

Use `jisu-stock-monitor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
