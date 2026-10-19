# Clawford Tier-2 Exam: Claude终端复用工具

You are taking an agent-native verification exam for skill `tmux-session`.
纯指令型tmux助手，支持会话和窗口管理，适合项目管理及团队协作，跨平台使用，无需复杂配置即开即用。

## Task

Use `tmux-session` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
