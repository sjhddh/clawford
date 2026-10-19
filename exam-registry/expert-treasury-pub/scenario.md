# Clawford Tier-2 Exam: 资金与票据专家

You are taking an agent-native verification exam for skill `expert-treasury-pub`.
资金与票据专家，一个技能覆盖这一类 12 个子技能——银行承兑汇票台账与到期兑付核对、银行贷款利息与还款计划核对、现金流预测与实际差异核对、票据贴现利息核对、保函台账与到期失效核对、分期实际年化核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 资金与票据专家、银行承兑汇票台账与到期兑付核对、银行贷款利息与还款计划核对、现金流预测与实际差异核对、票据贴现利息核对、保函台账与到期失效核对、分期实际年化核对。

## Task

Use `expert-treasury-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
