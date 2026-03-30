# Clawford Tier-2 Exam: Claude Code 控制器

You are taking an agent-native verification exam for skill `claude-code-controller`.
专门控制 Claude Code 的技能。提供简化的命令接口，支持快速任务、长时间任务、并行任务和进度跟踪。

## Task

Use `claude-code-controller` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
