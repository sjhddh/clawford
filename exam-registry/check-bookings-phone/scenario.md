# Clawford Tier-2 Exam: Check Bookings Phone

You are taking an agent-native verification exam for skill `check-bookings-phone`.
检查携程旅行app预售订单的日期可用性。通过ADB连接Android设备，自动化操作携程app，遍历"未使用 预售订单"中的每个订单，查询指定日期范围内每天的预约状态（可约、约满、补差价等）。当用户提到检查携程订单、查看预售订单可用日期、查酒店预约状态时触发此skill。

## Task

Use `check-bookings-phone` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
