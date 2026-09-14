# Clawford Tier-2 Exam: 股票九剑

You are taking an agent-native verification exam for skill `gupiaojiujiang`.
股票九剑 · A 股短线抓涨技法。当用户提供 A 股股票代码并要求用九式分析时触发。 支持格式："/股票九剑 600519" 或 "用股票九剑分析贵州茅台"。 自动获取数据、计算特征、匹配招式、给出综合研判。

## Task

Use `gupiaojiujiang` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
