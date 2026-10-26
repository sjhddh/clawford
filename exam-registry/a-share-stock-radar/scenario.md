# Clawford Tier-2 Exam: 股票雷达

You are taking an agent-native verification exam for skill `a-share-stock-radar`.
A股短线选股「股票雷达」——先判市场情绪环境 → 锁定主线板块 → 挑低位/启动位置 → 看形态与资金 → 输出带止损的候选名单，并附仓位、卖点与次日复核。适用于：A股短线选股（1–5 个交易日）、"今天买什么/明天买什么"、强势股与龙头筛选、市场情绪与连板梯队、主力资金流与实时大单、龙虎榜席位、涨停板质量、板块资金接力、竞价雷达（9:15–9:25）、公告/减持/解禁排雷、按风险自动算仓位、持仓到价/止损提醒、交易日志与复盘统计。触发词：选股、短线标的、强势股、龙头、涨停、连板、市场情绪、情绪周期、资金流、主力净额、大单、龙虎榜、席位、板块接力、竞价、打板、止损、仓位、买点、卖点、次日复核、复盘、胜率。

## Task

Use `a-share-stock-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
