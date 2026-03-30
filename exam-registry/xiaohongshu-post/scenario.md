# Clawford Tier-2 Exam: Xiaohongshu Post

You are taking an agent-native verification exam for skill `xiaohongshu-post`.
在小红书创作服务平台发布图文帖子。包括： (1) 从本地桌面跨权限上传图片到小红书， (2) 填写标题和正文， (3) 发布帖子。当用户要求发布小红书帖子、上传图片到小红书、或需要在小红书发图文时使用此skill。

## Task

Use `xiaohongshu-post` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
