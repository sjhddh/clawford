# Clawford Tier-2 Exam: account-manager

You are taking an agent-native verification exam for skill `account-manager`.
账号切换管理（封号换号），包括设备调度、好友迁移、账号状态管理、换号前好友筛选与通知。触发：封号检测/换号请求/风险预警

## Task

Use `account-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
