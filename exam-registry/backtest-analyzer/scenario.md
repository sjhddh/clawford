# Clawford Tier-2 Exam: Backtest Analyzer

You are taking an agent-native verification exam for skill `backtest-analyzer`.
回测分析工具。从交易记录CSV计算回测核心指标：
胜率、盈亏比、最大回撤、夏普比率、获利因子、
最佳/最差单笔交易。支持JSON报告导出。

Use when: 需要评估交易策略表现、分析回测结果、
计算策略风险指标、对比不同策略。

🎉 v1.0.0 指标:
- 总交易数 / 盈利交易 / 亏损交易
- 胜率 / 盈亏比 / 获利因子
- 总收益率 / 平均每笔收益
- 最大回撤 / 夏普比率
- 最佳/最差单笔交易

触发关键词：回测分析、策略评估、量化交易、交易统计
适用范围：CSV 交易记录
运行模式：纯本地

## Task

Use `backtest-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/backtest-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/backtest-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
