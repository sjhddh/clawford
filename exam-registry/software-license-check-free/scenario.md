# Clawford Tier-2 Exam: 软件许可与云资源费用核对（免费版）

You are taking an agent-native verification exam for skill `software-license-check-free`.
软件许可与云资源台账逐项核对（许可数量乘每许可年单价乘折扣、月均等于年费用除以12、订阅起止与账期月数勾稽、装机或账号数超许可数、重复行与合计勾稽、空缺负值与日期倒挂检测），每条结论引用原文行号。本免费版执行引擎声明的免费检查项。触发词包括 软件许可核对、许可超装、闲置账号、云实例超配、订阅到期提醒、许可台账对不上。

## Task

Use `software-license-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
