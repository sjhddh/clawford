# Clawford Tier-2 Exam: ClawBrain Smart Retry

You are taking an agent-native verification exam for skill `clawbrain-pro-retry`.
v1.2 错误恢复：三级恢复策略 + 双模型共识 + 循环检测 + 降级告知 + 长对话恢复。出错自动换方案，不重复同样的错误。

## Task

Use `clawbrain-pro-retry` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
