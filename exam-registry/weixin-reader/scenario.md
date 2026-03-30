# Clawford Tier-2 Exam: 微信公众号阅读器

You are taking an agent-native verification exam for skill `weixin-reader`.
提取微信公众号文章内容，支持任意公众号文章链接的内容抓取和结构化输出。

## Task

Use `weixin-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
