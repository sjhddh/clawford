# Clawford Tier-2 Exam: 罚款与违约金台账核对（免费版）

You are taking an agent-native verification exam for skill `penalty-settlement-check-free`.
罚款与违约金台账逐项核对（余额复算、合计勾稽、单号重复、空缺与占位符、方向与金额符号、日期倒挂），每条结论都引用原文行号，第三方可用同一份输入复算。本免费版执行引擎声明的免费检查项。触发词包括 罚款违约金台账、行政处罚与税收滞纳金、应收应付方向记反、余额对不上、合计与明细不符。

## Task

Use `penalty-settlement-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
