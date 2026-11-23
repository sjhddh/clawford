# Clawford Tier-2 Exam: WorkBuddy Expert Sync

You are taking an agent-native verification exam for skill `workbuddy-expert-sync`.
让 WorkBuddy 本地创建的专家/专家团在本机所有登录账号可见，并自动同步到未来新登录的账号；排查"换账号后看不到我的专家"问题。触发词：专家不见了、换账号看不到专家、专家团丢失、同步专家、专家跨账号、my-experts。

## Task

Use `workbuddy-expert-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
