# Clawford Tier-2 Exam: 制造与生产管理专家

You are taking an agent-native verification exam for skill `expert-manufacturing-pub`.
制造与生产管理专家，一个技能覆盖这一类 7 个子技能——汽修配件与工时费结算核对、设备维保与备件领用费用核对、制造业月度自查包、制造与生产技能包、委外加工费与损耗核对、安全生产费用提取与使用核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 制造与生产管理专家、汽修配件与工时费结算核对、设备维保与备件领用费用核对、制造业月度自查包、制造与生产技能包、委外加工费与损耗核对、安全生产费用提取与使用核对。

## Task

Use `expert-manufacturing-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
