# Clawford Tier-2 Exam: dca-decision-calculator

You are taking an agent-native verification exam for skill `dca-decision-calculator`.
左侧定投决策计算器。输入当前指数点位、近一年最高点、持仓成本、汇率，输出是否触发定投、加仓倍数、换汇建议、风险提示。基于以近一年最高点为锚的左侧定投策略。触发词：定投、基金、纳斯达克、指数、加仓、换汇、人民币、汇率、投资、贬买、买入、锁定成本、持仓、成本。

## Task

Use `dca-decision-calculator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
