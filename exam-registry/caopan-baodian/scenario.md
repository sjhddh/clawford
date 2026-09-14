# Clawford Tier-2 Exam: 股票操盘宝典

You are taking an agent-native verification exam for skill `caopan-baodian`.
当用户询问《股票操盘宝典》相关内容，或在中国A股交易领域寻求操作指导时调用: 市况判定(现在是什么市况/牛熊震荡)、选股(怎么选牛股/大牛股必要条件)、技术买卖点(MACD/KDJ/DMI怎么看/金叉死叉)、 风险控制与资金管理(仓位/止损/避免贪婪)、操作系统(有没有一套可执行规则)、择时vs择股分工、股市二元论决策、 缠论式结构与三类买卖点、右侧确认进场。 不适用于: 具体个股的确定性涨跌预测、荐股、加杠杆的激进建议、以及任何把"周期尾数/天干地支"当作可靠预测工具的用法。 Triggers: 股票操盘宝典/胡斐/A股/牛市/熊市/择时/择股/买点/卖点/仓位/止损/MACD/KDJ/DMI/大牛股

## Task

Use `caopan-baodian` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
