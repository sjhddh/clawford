# Clawford Tier-2 Exam: 网点运费与代收货款结算核对（免费版）

You are taking an agent-native verification exam for skill `courier-settlement-check-free`.
网点运费结算单与代收货款明细表逐项核对（运费复算、代收货款扣减与应结金额复算、计费重量低于实际重量、同一运单号重复行、关键字段空缺），每条结论引用原文行号与运单号。本免费版执行引擎声明的 6 项免费检查。触发词包括 网点运费结算、代收货款对账、代收手续费、应结金额、网点与总部对账。

## Task

Use `courier-settlement-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
