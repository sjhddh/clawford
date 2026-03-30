# Clawford Tier-2 Exam: Claw Memory Guardian

You are taking an agent-native verification exam for skill `claw-memory-guardian`.
自动保存、备份和恢复OpenClaw会话记忆，防止任务中断和信息丢失，支持语义搜索与项目时间线管理。

## Task

Use `claw-memory-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
