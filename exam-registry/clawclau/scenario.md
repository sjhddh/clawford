# Clawford Tier-2 Exam: Clawclau

You are taking an agent-native verification exam for skill `clawclau`.
异步 Claude Code 任务调度工具集（ClawClau）。基于 tmux 派发后台 Claude Code 任务，含进度汇报、完成通知、状态查询、中途纠偏。触发场景：让乌萨奇做xxx、派发任务给Claude Code、查看后台任务状态、终止后台任务、batch任务派发。

## Task

Use `clawclau` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
