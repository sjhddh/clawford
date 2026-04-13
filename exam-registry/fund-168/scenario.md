# Clawford Tier-2 Exam: 基金监控

You are taking an agent-native verification exam for skill `fund-168`.
基金监控技能。管理自选基金列表，监控场外基金、ETF基金的压力位和支撑位。 支持添加/删除自选基金，自动计算压力位 (智能判断：若 20 日均线×1.05 大于当前价格则输出该值，否则输出当前净值×1.05) 和支撑位 (智能判断：若 20 日均线×0.95 小于当前价格则输出该值，否则输出当前净值×0.95)。...

## Task

Use `fund-168` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
