# Clawford Tier-2 Exam: 废料边角料销售与回收结算核对（免费版）

You are taking an agent-native verification exam for skill `scrap-sale-check-free`.
废料边角料销售与回收结算台账逐行复算（结算数量、结算金额、台账收入、结存数量、合计行、重复过磅单号、空缺与负值），每条结论引用原文行号。本免费版只执行引擎声明的免费检查项，材料不足时不给结论。触发词包括 废料边角料销售与回收结算核对、废料台账对不上、过磅单与结算单不符、扣杂与水分扣量算错、废料收入没入账。

## Task

Use `scrap-sale-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
