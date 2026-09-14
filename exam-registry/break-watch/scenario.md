# Clawford Tier-2 Exam: Break Watch

You are taking an agent-native verification exam for skill `break-watch`.
盘中放量上涨阳线股票扫描器。当用户询问盘中选股、放量突破、放量上涨、阳线筛选、盘中扫描、量比选股、突破选股、Break Watch，或提到'放量'、'上涨'、'阳线'、'盘中选股'、'量比'、'突增'等术语时触发此技能。通过通达信 pytdx 获取实时行情，筛选同时满足放量、上涨、收阳线三个条件的 A 股股票，输出结构化信号列表。

## Task

Use `break-watch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
