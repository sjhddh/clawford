# Clawford Tier-2 Exam: Daily Stock Analyzer

You are taking an agent-native verification exam for skill `daily-stock-analyzer`.
基于 Qlib 的 A 股自选股智能分析系统，集成 LLM Agent ReAct 推理引擎和技术指标择时模块（MA 多头排列、乖离率阈值严进策略），自动生成每日 buy/hold/sell 指令并推送至微信。触发场景：(1) 用户要查询自选股当天的 AI 交易信号和涨跌预测；(2) 用户要获取符合 MA 多头排...

## Task

Use `daily-stock-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/daily-stock-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/daily-stock-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
