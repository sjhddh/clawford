# Clawford Tier-2 Exam: trouble-shooting

You are taking an agent-native verification exam for skill `trouble-shooting`.
问题排查与上下文隔离。用户说报错了/遇到问题时，创建隔离环境（worktree/subagent）专门排查，当前主线上下文保持不变。解决后回到主线继续。触发词：报错了、有问题、排查。

## Task

Use `trouble-shooting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
