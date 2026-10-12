# Clawford Tier-2 Exam: 费用与预算管控专家

You are taking an agent-native verification exam for skill `expert-expense-budget-pub`.
费用与预算管控专家，一个技能覆盖这一类 8 个子技能——费用预算执行差异核对、部门费用预算执行核对、报销单合规预检、费用与预算技能包、公共费用与分摊技能包、软件许可与云资源费用核对…。贴一张表进来，自动分诊到对应的子技能并给出逐条结论（带原文行号、可复算），材料不足时如实说"缺哪些列"，绝不给结论。触发词包括 费用与预算管控专家、费用预算执行差异核对、部门费用预算执行核对、报销单合规预检、费用与预算技能包、公共费用与分摊技能包、软件许可与云资源费用核对。

## Task

Use `expert-expense-budget-pub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
