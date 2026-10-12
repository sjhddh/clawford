# Clawford Tier-2 Exam: 招投标处理专家

You are taking an agent-native verification exam for skill `expert-bidding-pub`.
招投标处理专家，一个技能覆盖这一类 7 个子技能——中标结果与合同一致性核对、多家报价横向比价、投标保证金收退核对、多标书批量合规体检、串通投标线索筛查、履约保证金与保函台账核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 招投标处理专家、中标结果与合同一致性核对、多家报价横向比价、投标保证金收退核对、多标书批量合规体检、串通投标线索筛查、履约保证金与保函台账核对。

## Task

Use `expert-bidding-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
