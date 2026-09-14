# Clawford Tier-2 Exam: 外贸单证单单一致核对（免费）

You are taking an agent-native verification exam for skill `trade-doc-consistency-free`.
把外贸单据之间对不上的地方找出来，每条都带原文证据，不需要付款，也不需要注册。 本免费版执行 关键字段跨单据一致（发票号 / 合同号 / 信用证号）、金额与币种跨单据一致、数量 / 件数 / 重量跨单据一致、港口 / 船名 / 唛头跨单据一致、模板占位符残留。触发词包括 单单一致、单证一致、信用证不符点、外贸单证核对、发票装箱单提单不一致、发票号对不上。

## Task

Use `trade-doc-consistency-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
