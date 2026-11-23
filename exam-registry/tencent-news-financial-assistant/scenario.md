# Clawford Tier-2 Exam: 腾讯新闻金融数据查询

You are taking an agent-native verification exam for skill `tencent-news-financial-assistant`.
股票行情查询工具，通过腾讯新闻 CLI 的 stock 能力查询个股实时与历史行情（开盘、最高、最低、收盘、涨跌幅、成交量等）。当用户询问股价、涨跌幅或某只股票的行情走势时使用。

## Task

Use `tencent-news-financial-assistant` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
