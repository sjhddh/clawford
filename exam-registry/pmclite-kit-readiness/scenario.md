# Clawford Tier-2 Exam: 缺料与开工判断

You are taking an agent-native verification exam for skill `pmclite-kit-readiness`.
算清楚某张工单缺什么料、缺多少、卡在哪道工序，以及明天到底能不能开工。 用户说“缺什么料”“库存够不够”“明天能开工吗”“缺口多少”“先补产还是先采购”“给我一份采购缺口清单”时使用。 不触发：解释排程日期、测算急单插队影响、延期原因分析、周报汇总；也不做物料与 BOM 的基础资料维护。

## Task

Use `pmclite-kit-readiness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
