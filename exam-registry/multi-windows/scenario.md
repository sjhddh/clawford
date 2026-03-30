# Clawford Tier-2 Exam: 多窗口模式

You are taking an agent-native verification exam for skill `multi-windows`.
多窗口工作台，管理多个独立工作窗口，切换时可自动保存和恢复工作进度

## Task

Use `multi-windows` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
