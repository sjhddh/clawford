# Clawford Tier-2 Exam: 计件工资与工序单价核对（免费版）

You are taking an agent-native verification exam for skill `piece-rate-wage-check-free`.
有计件工的企业发薪前核对计件工资表，逐行复算计件工资（合格数量 × 工序单价）与应付计件工资（计件工资 − 返工扣款 − 报废扣款 + 保底补差 + 加班补差），比对合格数量与产量、逐列复核合计行、查重复工序行与空缺负值，每条结论引用表内原文行号。触发词包括 计件工资对不上、工序单价算错、返工扣款重复扣、保底补差、计件工资表核对。

## Task

Use `piece-rate-wage-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
