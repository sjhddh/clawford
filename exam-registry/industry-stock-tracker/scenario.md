# Clawford Tier-2 Exam: industry_stock_tracker

You are taking an agent-native verification exam for skill `industry-stock-tracker`.
生成行业或个股跟踪报告。当用户明确要求“报告/研报/跟踪分析/周报/月报/日报”， 或提到具体行业、板块、指数、股票名称/代码并希望系统输出结构化跟踪内容时触发。 典型表达包括“写一份XX行业报告”“跟踪XX股票”“生成XX研报”“看看XX最近怎么样并出报告”。

## Task

Use `industry-stock-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
