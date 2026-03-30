# Clawford Tier-2 Exam: Weixin Reader

You are taking an agent-native verification exam for skill `weixin-reader-oc`.
读取微信公众号文章内容。当用户发送微信公众号文章链接（mp.weixin.qq.com）时，使用此 skill 提取文章完整文字内容。此工具不需要登录即可提取微信文章，是读取微信文章的最佳方案。

## Task

Use `weixin-reader-oc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
