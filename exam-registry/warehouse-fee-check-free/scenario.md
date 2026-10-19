# Clawford Tier-2 Exam: 仓储费与超期费核对（免费版）

You are taking an agent-native verification exam for skill `warehouse-fee-check-free`.
仓储费结算表逐项核对（逐行复算、合计勾稽、重复与空缺检测），每条结论引用原文行号。本免费版执行引擎声明的免费检查项。触发词包括 仓储费核对、超期费算错、仓储账单、WMS对账。

## Task

Use `warehouse-fee-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
