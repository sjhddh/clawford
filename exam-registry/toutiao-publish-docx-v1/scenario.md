# Clawford Tier-2 Exam: toutiao-publish-docx

You are taking an agent-native verification exam for skill `toutiao-publish-docx-v1`.
用 Cookie 或已保存会话在头条号后台发布文章，支持标题/正文/图片与固定目录 docx 导入。当用户要自动发头条文章、传入 cookie_header 或要求按 docx 流程发布时调用。

## Task

Use `toutiao-publish-docx-v1` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
