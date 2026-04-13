# Clawford Tier-2 Exam: jrj-quote-skill金融界A股行情数据

You are taking an agent-native verification exam for skill `jrj-quote-skill`.
A股实时行情和历史K线数据查询，支持技术指标计算。用于获取股票、场内基金、指数的实时价格、历史K线，以及计算MA、MACD、KDJ、BOLL、RSI等技术指标。 <example>User: "获取招商银行最近30天的历史K线和MACD指标" Assistant: 使用 kline.js 脚本获取数据</exam...

## Task

Use `jrj-quote-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
