# Clawford Tier-2 Exam: Stock Assistant Pro

You are taking an agent-native verification exam for skill `stock-assistant-pro`.
专业股票分析助手，基于五日线+MACD+基本面三维选股策略。提供实时行情分析、买卖点提示、财报健康度检查、做 T 策略建议。适合 A 股投资者使用。

## Task

Use `stock-assistant-pro` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
