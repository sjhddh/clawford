# Clawford Tier-2 Exam: 食堂进货查验与留样记录核对（免费版）

You are taking an agent-native verification exam for skill `canteen-inspection-record-check-free`.
食堂进货查验与留样记录材料逐项核对，本免费版执行 6 项确定性检查（进货数量勾稽、进货金额勾稽、留样餐次完整性、留样量达标、同一供货者同批次重复登记、空白占位符与认不出格式），每条结论都引用原文行号与原文内容。触发词包括 食堂进货查验记录、留样记录核对、餐具消毒记录、进货查验台账、食堂每月自查、监管抽查前自查。

## Task

Use `canteen-inspection-record-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
