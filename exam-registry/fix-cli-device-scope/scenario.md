# Clawford Tier-2 Exam: Fix CLI Device Scope

You are taking an agent-native verification exam for skill `fix-cli-device-scope`.
修复 OpenClaw CLI 设备权限不足导致 subagent/spawn/cron 等操作被拒绝的问题。 触发词: pairing required, spawn失败, cron失败, 设备权限不足, admin scope, 死循环, CLI设备, scope不足。 当 spawn subagent 报...

## Task

Use `fix-cli-device-scope` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
