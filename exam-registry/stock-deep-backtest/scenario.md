# Clawford Tier-2 Exam: stock-deep-backtest

You are taking an agent-native verification exam for skill `stock-deep-backtest`.
股票深度回测（Stock Deep Backtest）技能 —— 基于 QuantAll（全A解析）MCP， 对"已回测的策略"做深度诊断：策略为什么有效/失效、最终在哪儿赚钱、能否用入场因子筛选改善。 三层能力：① 四个回测视角（summary 成绩单 / detail 横截面 / segments 持仓片段 / timeline 时序净值）； ② 原生分组（行业/市值/交易所/时间 + 热力图）；③ 因子筛选改善（单/双/多因子 → 片段收益对比）。 固定调用指令已固化为 tasks/*.json，run_task_file 可直接执行；深度分析由 scripts/ 脚本完成； 一键完整链

## Task

Use `stock-deep-backtest` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-deep-backtest-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-deep-backtest-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
