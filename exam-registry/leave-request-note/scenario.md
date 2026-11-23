# Clawford Tier-2 Exam: 请假条

You are taking an agent-native verification exam for skill `leave-request-note`.
请假条——学校请假条与公司请假申请：病假、事假、婚假、产假、年假各怎么写、常需附什么材料，口头请假后怎么书面补录。当用户说「帮我写个请假条」「请病假怎么写」「口头请过假要补申请」时使用。

## Task

Use `leave-request-note` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
