# Clawford Tier-2 Exam: zayn-rma

You are taking an agent-native verification exam for skill `zayn-rma`.
面向硬件、设备、备件和二手产品，依据型号、序列号、测试、保修、供应商窗口、退运和清关条件判断是否接受 RMA，并明确运费、时限和退回检测路径；一般产品退换、服务重做或退款补救使用 zayn-general-rma。

## Task

Use `zayn-rma` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
