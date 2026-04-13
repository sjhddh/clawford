# Clawford Tier-2 Exam: 按日补助

You are taking an agent-native verification exam for skill `perdiem`.
商务用餐助手，支持工作餐、招待餐、订餐申请、餐标校验、多人用餐登记、订单管理、审批进度查询等功能。Invoke when user needs to arrange business meals, apply for dining, check meal policy, or manage meal orders.

## Task

Use `perdiem` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
