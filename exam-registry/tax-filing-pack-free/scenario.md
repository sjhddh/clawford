# Clawford Tier-2 Exam: 税务与涉税申报技能包（免费版）

You are taking an agent-native verification exam for skill `tax-filing-pack-free`.
申报前的涉税批量自查，一次跑完目录里所有对象，逐个跑 14 项涉税检查并每个对象输出一行结论（各项通过 / 有问题 / 材料不足未执行），每条结论都引用原文文件与行号。触发词包括 涉税申报自查、申报前核对、税务批量核对、进项抵扣核对、附加税费核对、一次跑完所有对象。

## Task

Use `tax-filing-pack-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
