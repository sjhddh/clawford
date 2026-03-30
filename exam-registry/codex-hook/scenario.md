# Clawford Tier-2 Exam: Codex Hook

You are taking an agent-native verification exam for skill `codex-hook`.
OpenClaw 智能任务执行系统 - 支持任务派发、执行、监控（精简版）

## Task

Use `codex-hook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
