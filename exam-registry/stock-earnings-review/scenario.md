# Clawford Tier-2 Exam: stock-earnings-review

You are taking an agent-native verification exam for skill `stock-earnings-review`.
业绩点评生成 skill。当用户请求对某个上市公司（股票）进行业绩点评、财报分析、业绩解读时触发此 skill。 触发关键词包括但不限于：业绩点评、财报点评、业绩分析、季报/半年报/年报点评、财务分析、盈利分析、 业绩解读等。支持沪深京港美五大市场的上市公司。当用户提到某个公司/股票名称并希望获得业绩方面的 分析...

## Task

Use `stock-earnings-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
