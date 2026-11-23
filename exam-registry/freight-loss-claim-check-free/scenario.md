# Clawford Tier-2 Exam: 货运破损理赔与扣款核对（免费版）

You are taking an agent-native verification exam for skill `freight-loss-claim-check-free`.
货运破损理赔与承运商扣款明细表逐项核对（理赔金额复算、扣款不得超过理赔金额、重复运单与赔付比例超上限、关键字段缺失或负数），每条结论引用原文行号与运单号。本免费版执行引擎声明的 5 项免费检查。触发词包括 货运破损理赔、承运商扣款核对、破损理赔对账、理赔扣款明细表。

## Task

Use `freight-loss-claim-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
