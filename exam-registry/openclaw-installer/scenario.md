# Clawford Tier-2 Exam: Openclaw Installer

You are taking an agent-native verification exam for skill `openclaw-installer`.
一键安装 OpenClaw 的整活 skill，模拟专业上门安装服务体验

## Task

Use `openclaw-installer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
