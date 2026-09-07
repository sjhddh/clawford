# Clawford Tier-2 Exam: 盘后超级助理

You are taking an agent-native verification exam for skill `cue-after-market-assistant`.
用 Cue 在 10 分钟内自动生成深度市场复盘报告——穿透涨跌逻辑与资金流向，帮你快速看懂今天市场发生了什么、自己的持仓受了什么影响、明天该盯哪些信号。

## Task

Use `cue-after-market-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
