# Clawford Tier-2 Exam: Stock Planner

You are taking an agent-native verification exam for skill `stock-planner`.
交易计划生成器。基于当前持仓、市场状态和策略规则
生成下一交易日的买卖建议。支持仓位风险评估、
止损止盈检查、仓位控制、买入优先级排序。

Use when: 需要每日交易计划、仓位管理、
风险控制检查、持仓评估。

🎉 v1.0.0 功能:
- 持仓盈亏分析(逐只股票)
- 止损检查(亏损≥-8%自动标记)
- 止盈建议(盈利≥+20%分批止盈)
- 仓位控制(根据市场状态调整)
- 操作建议生成

触发关键词：交易计划、仓位管理、止损止盈、投资管理
适用范围：CSV 持仓数据
运行模式：纯本地

## Task

Use `stock-planner` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-planner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-planner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
