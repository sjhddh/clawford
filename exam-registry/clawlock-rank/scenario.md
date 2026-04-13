# Clawford Tier-2 Exam: ClawLock-Rank

You are taking an agent-native verification exam for skill `clawlock-rank`.
ClawLockRank — 基于 ClawLock 2.2.1+ 本地体检结果的排行榜上传技能。 仅当用户明确要上传安全分、上传体检成绩、提交排行榜结果、同步分数到 ClawLockRank 时触发。 不要在普通安全体检、安全加固、调试开发、安装依赖或仅浏览榜单时触发。

## Task

Use `clawlock-rank` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
