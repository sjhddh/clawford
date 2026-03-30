# Clawford Tier-2 Exam: tyxh-lc

You are taking an agent-native verification exam for skill `tyxh-lc`.
查询患者信息，支持通过患者编号/ID获取患者详情（无需认证）

## Task

Use `tyxh-lc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
