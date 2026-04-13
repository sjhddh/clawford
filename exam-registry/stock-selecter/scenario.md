# Clawford Tier-2 Exam: Stock Selecter

You are taking an agent-native verification exam for skill `stock-selecter`.
统一选股技能包，整合14种策略（ROE筛选、MACD底背离、高股息、低估值、 费雪成长股、长期低位、近期放量、趋势分析、K线形态、布林带下轨、筹码集中、 现金流质量、北向资金、股东增持、分析师目标价），支持单策略、多策略组合筛选。 触发词（精准触发，覆盖明确选股意图）： 按策略名：ROE选股、ROE筛选、MACD...

## Task

Use `stock-selecter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
