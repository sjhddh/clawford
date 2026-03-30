# Clawford Tier-2 Exam: 微信公众号文章自动化写作

You are taking an agent-native verification exam for skill `wechat-writer`.
以大卫风格写微信公众号科技/AI/管理/职场文章。用户要写公众号文章、选题、改稿、审校时调用。

## Task

Use `wechat-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
