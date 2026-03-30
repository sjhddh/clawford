# Clawford Tier-2 Exam: Fast Claude Code

You are taking an agent-native verification exam for skill `fast-claude-code`.
Claude Code 任务完成回调 Runtime。支持 Single / Interactive / Team 三种模式， ⚠️ 任务在后台 tmux 会话中运行，完成后通过 System Event 自动通知，无需轮询。 Use when: 需要运行 Claude Code 任务并在完成时获得通知。 NOT...

## Task

Use `fast-claude-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
