# Clawford Tier-2 Exam: Wechat Look

You are taking an agent-native verification exam for skill `wechat-look`.
读取微信公众号文章的专用工具，支持OCR文字识别。自动规范化URL并提取文章内容，识别图片中的中英文文字。

## Task

Use `wechat-look` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
