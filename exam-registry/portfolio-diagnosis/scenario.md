# Clawford Tier-2 Exam: 持仓诊断

You are taking an agent-native verification exam for skill `portfolio-diagnosis`.
持仓诊断技能(Tushare驱动版)——专为A股投资者设计。当用户说"帮我诊断持仓"、"看看我的股票组合"、"仓位合理吗"、"持仓风险大吗"、"我的组合夏普比率多少"时触发。使用Tushare SDK获取实时行情和历史数据，进行包含波动率、Beta、夏普比率、最大回撤在内的量化风险诊断，并生成专业诊断报告,包含：...

## Task

Use `portfolio-diagnosis` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
