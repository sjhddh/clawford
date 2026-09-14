# Clawford Tier-2 Exam: zayn-responsibility

You are taking an agent-native verification exam for skill `zayn-responsibility`.
面向硬件、设备、备件和二手产品售后，依据订单、序列号、测试、兼容性、运输安装、合同和保修边界判断当前责任状态，避免证据不足时过早认责；一般产品、服务或项目责任判断使用 zayn-general-responsibility。

## Task

Use `zayn-responsibility` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
