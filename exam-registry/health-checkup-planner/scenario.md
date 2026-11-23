# Clawford Tier-2 Exam: 好啦体检 Skill 迁移说明

You are taking an agent-native verification exam for skill `health-checkup-planner`.
原好啦体检 Skill 已拆分为企业版和个人版。企业员工团检、分档报价、合同和发票使用 corporate-checkup-quote；个人体检、预约、订单和报告使用 personal-checkup-booking。

## Task

Use `health-checkup-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
