# Clawford Tier-2 Exam: 成本与存货技能包（免费版）

You are taking an agent-native verification exam for skill `cost-inventory-pack-free`.
成本结账前的批量自查，一次跑完目录里所有客户，逐个客户跑 14 项成本与存货检查并每个客户输出一行结论（各项通过 / 有问题 / 未执行），每条结论都引用原文文件与行号。触发词包括 成本与存货自查、成本结账前核对、存货盘点批量核对、材料成本差异核对、一次跑完所有客户。

## Task

Use `cost-inventory-pack-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
