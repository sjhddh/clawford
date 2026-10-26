# Clawford Tier-2 Exam: 社保公积金核对（免费版）

You are taking an agent-native verification exam for skill `social-insurance-check-free`.
社保申报明细逐项核对（逐行算术、合计勾稽、重复与空缺检测），每条结论引用原文行号。本免费版执行引擎声明的免费检查项。触发词包括 社保申报明细核对、社保申报明细对不上。本免费版只执行 6 项，即 逐人个人合计算术、逐人单位合计算术、应缴合计勾稽等。不执行 4 项判定，例如 个人扣款比例校验。详见 SKILL.md 的「这个免费版不包含」一节。

## Task

Use `social-insurance-check-free` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
