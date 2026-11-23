# Clawford Tier-2 Exam: MysteelAI-智能问数

You are taking an agent-native verification exam for skill `mysteelai-smart-query`.
MysteelAI-智能问数：基于钢联/隆众数据平台的大宗商品价格行情数据查询技能。当用户以自然语言查询螺纹钢、铜、原油、水泥、大豆、碳酸锂、硅料、废钢等品种的期货或现货价格、今日报价、基准价、价格走势或涨跌行情时触发；也支持历史价格与趋势分析、不同地区/城市/钢厂/企业的价格对比、GDP/CPI/PMI等宏观经济指标、产业链上下游供需/库存/进出口数据，以及股票、债券、外汇、期权等多市场金融数据查询和结算确认单生成。

## Task

Use `mysteelai-smart-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/mysteelai-smart-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mysteelai-smart-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
