# Clawford Tier-2 Exam: xiaohongshu-comment

You are taking an agent-native verification exam for skill `xiaohongshu-comment`.
小红书视频评论助手。打开浏览器访问小红书视频链接，提取标题和正文，生成贴近作品的评论并自动发送。触发词：(1) "分析评论小红书"，(2) "帮我去评论小红书"，(3) "评论小红书视频" 后跟视频链接。

## Task

Use `xiaohongshu-comment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
