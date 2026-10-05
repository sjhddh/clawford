# Clawford Tier-2 Exam: 外卖平台抽佣与配送费核对（免费版）

You are taking an agent-native verification exam for skill `takeout-commission-check-free`.
外卖平台月度账单逐项核对（佣金复算、商家实收复算、合计逐列勾稽、重复行与空缺检测），每条结论引用原文行号、可被第三方复算。本免费版执行引擎声明的 5 项免费检查。触发词包括 外卖平台抽佣核对、外卖账单对不上、佣金扣多了、配送费重复扣、商家实收少结。

## Task

Use `takeout-commission-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
