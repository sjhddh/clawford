# Clawford Tier-2 Exam: 甲供材料与分包领用核对（免费版）

You are taking an agent-native verification exam for skill `owner-supplied-material-check-free`.
甲供材台账与分包领用逐项核对，领用数量 = 进场数量 − 退库数量、领用金额 = 领用数量 × 单价、结算抵扣金额 = 领用金额，逐行复算并做合计勾稽与重复材料行、空缺与负值检测，每条结论引用台账原文行号。触发词包括 甲供材对不上、分包领用核对、甲供材抵扣金额、超领扣款、退库没冲减。

## Task

Use `owner-supplied-material-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
