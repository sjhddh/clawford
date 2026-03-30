# Clawford Tier-2 Exam: Stock Tracker Pro

You are taking an agent-native verification exam for skill `stock-tracker-pro`.
股票监控技能。使用 Yahoo Finance 获取股票数据。支持添加股票到监控列表、删除股票、查询股票信息。触发场景：(1) 添加股票如"监控 AAPL"，(2) 删除股票如"删除 TSLA"，(3) 查询股票如"查看腾讯股票"、"AAPL 股价"。

## Task

Use `stock-tracker-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
