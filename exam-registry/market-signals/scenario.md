# Clawford Tier-2 Exam: Market Signals

You are taking an agent-native verification exam for skill `market-signals`.
技术信号扫描器 v1.1.0。从价格数据计算RSI(14)、均线(5/10/20)、
成交量异动、ATR波动率、MACD、布林带(±2σ)、VWAP。
综合评分(0-100)给出买入/关注/观望/回避建议。
支持多股票一键扫描(scan)、信号历史追踪(history)、支撑/阻力位识别。

Use when: 需要快速扫描多只股票的技术面、
获取买入/卖出信号、信号历史分析、支撑阻力位参考。

🎉 v1.1.0 新增:
- 布林带(±2σ, %b, 带宽)
- VWAP 成交量加权均价
- 支撑/阻力位识别(基于20日局部极值)
- 信号组合综合评分(含明细)
- --scan: 多股票一

## Task

Use `market-signals` to investigate a concrete query and produce an evidence-backed report at `artifacts/market-signals-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/market-signals-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
