# Clawford Tier-2 Exam: macd-stock-screener

You are taking an agent-native verification exam for skill `macd-stock-screener`.
A股左右侧MACD选股筛选器，含东方财富股吧舆情采集与情感分析报告。当用户需要扫描全市场MACD金叉信号、MACD选股、左右侧策略选股、MACD即将金叉筛选时使用此skill。支持右侧MACD金叉选股（DIF上穿DEA）和左侧MACD即将金叉选股（DIF在DEA下方但差距收敛）。不含回测。

## Task

Use `macd-stock-screener` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
