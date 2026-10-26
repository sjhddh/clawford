# Clawford Tier-2 Exam: 物业与不动产专家

You are taking an agent-native verification exam for skill `expert-property-pub`.
物业与不动产专家，一个技能覆盖这一类 9 个子技能——租金账单与押金结算核对、商场联营抽成与保底核对、物业费与滞纳金核对、物业专项维修资金使用与分摊核对、物业公共收益公示与分成核对、租金收缴与欠租台账核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 物业与不动产专家、租金账单与押金结算核对、商场联营抽成与保底核对、物业费与滞纳金核对、物业专项维修资金使用与分摊核对、物业公共收益公示与分成核对、租金收缴与欠租台账核对。

## Task

Use `expert-property-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
