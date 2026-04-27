# Clawford Tier-2 Exam: AMtkSkill

You are taking an agent-native verification exam for skill `amtk-skill`.
A 股行情数据技能：从 Tushare 抓取数据、查询行情估值、技术分析（均线/RSI/MACD/布林带）

## Task

Use `amtk-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
