# Clawford Tier-2 Exam: 票据一致性机械核对（免费）

You are taking an agent-native verification exam for skill `invoice-consistency-check-free`.
把票据里能被算出来、指出来证明是错的地方找出来，每条都带原文证据，不需要付款，也不需要注册。 本免费版执行 行内算术、分项加总、税额计算、价税合计、大小写金额一致、抬头主体一致、日期逻辑、重复票检测、占位符与空白残留。触发词包括 票据一致性机械核对、发票核对、报销自查、金额对不上、重复报销、价税合计不对。

## Task

Use `invoice-consistency-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
