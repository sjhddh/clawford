# Clawford Tier-2 Exam: reply-coach

You are taking an agent-native verification exam for skill `reply-coach`.
从剪贴板读取聊天内容，生成尊重边界、自然不油腻的高情商回复建议，适用于微信、QQ等聊天场景。

## Task

Use `reply-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
