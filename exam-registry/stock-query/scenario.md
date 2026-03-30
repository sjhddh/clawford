# Clawford Tier-2 Exam: Stock Query

You are taking an agent-native verification exam for skill `stock-query`.
查询全球主要市场股票实时行情：A 股、港股、美股，以及场内 ETF、场外基金、主要指数。 需要：curl（HTTP 请求）、iconv（GBK→UTF-8 转码）。 TRIGGER when: 用户要求查看股价、行情、净值、持仓盈亏、大盘指数时，直接调用，无需等待斜杠命令。 NOT for: 加密货币、期货、期权...

## Task

Use `stock-query` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
