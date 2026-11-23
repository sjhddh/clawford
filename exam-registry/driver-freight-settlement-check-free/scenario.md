# Clawford Tier-2 Exam: 承运司机运费结算核对（免费版）

You are taking an agent-native verification exam for skill `driver-freight-settlement-check-free`.
承运司机运费结算单逐项核对（运费复算、逐单应付运费复算、对账单合计勾稽、重复运单与空缺检测），每条结论引用原文行号与运单号。本免费版执行引擎声明的免费检查项。触发词包括 司机运费结算、运费对账、回单扣款、油卡抵扣、押金扣留。

## Task

Use `driver-freight-settlement-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
