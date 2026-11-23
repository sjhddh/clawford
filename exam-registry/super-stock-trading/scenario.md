# Clawford Tier-2 Exam: 超级股票操盘 Skill

You are taking an agent-native verification exam for skill `super-stock-trading`.
超级股票操盘 Skill —— 面向 A 股个人投资者的全流程操盘智能体 Skill 包。整合 137 个细粒度 Skills 与 31 位数字人专家，并内置《短线金手》七册实战战法体系（私募盈利系统/经典形态/涨停狙击/急速拉升/分时图/T+0/K线精通），覆盖盘前分析、盘中决策、盘后复盘、选股、持仓体检、月度组合管理等完整投资闭环。 何时使用本 Skill：当用户提到「股票操盘」「盘前分析」「盘后复盘」「选股」「持仓体检」「月度组合管理」「仓位管理」「止损止盈」「板块轮动」「题材挖掘」「龙头战法」「财报季」「公告解读」「资金面」「北向资金」「龙虎榜」「风险体检」「组合再平衡」「定投」「指数基金」「期权对冲」「产业链」「护城河」「估值」「黑马」「打板」「异动」等关键词，或提到「短线」「涨停」「集合竞价」「分时图」「T+0」「主力吸筹」「仙人指路」「黄金十字」「梅开二度」「大长腿」「黄金分割」「急速拉升」等短线战术关键词，或需要系统性地完成 A 股投研—交易—风控—复盘工作时，应启用本 Skill。 能力边界：主要服务于 A 股（沪深京）及与之相关的港股通、ETF、可转债、期权等品种的研究与决策辅助；不提供直接下单通道，所有交易建议均需用户人工二次确认；不构成任何投资建议，最终决策与盈亏由用户自行承担。

## Task

Use `super-stock-trading` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
