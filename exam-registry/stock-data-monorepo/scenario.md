# Clawford Tier-2 Exam: Stock Data Monorepo

You are taking an agent-native verification exam for skill `stock-data-monorepo`.
A 股数据查询技能集合，包含 4 个子技能：cn-stock-volume（成交量）、stock-top-gainers（涨幅排名）、ths-stock-themes（题材概念）、stock-theme-events（题材事件）。 **触发场景**: - 作为 stock-daily-report 的数据源依赖...

## Task

Use `stock-data-monorepo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
