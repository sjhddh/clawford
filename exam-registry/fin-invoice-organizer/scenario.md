# Clawford Tier-2 Exam: 票据整理与报销台

You are taking an agent-native verification exam for skill `fin-invoice-organizer`.
报销被打回大多不是金额问题，而是票据要素不全、分类错、缺说明。整理时又要一张张看。 输入：票据类型清单（发票/收据/行程单/电子票）、金额、日期、用途、报销制度要点（可选）。输出：①分类表（按费用科目，如差旅/办公/招待/通讯）②要素核对（抬头、税号、日期、金额、事由是否齐全）③不合规票清单与补票建议 ④汇总表（可直接粘贴进报销单）⑤汇算提示（哪些科目有扣除限额）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `fin-invoice-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
