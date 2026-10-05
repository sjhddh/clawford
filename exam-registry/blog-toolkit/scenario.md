# Clawford Tier-2 Exam: blog-toolkit

You are taking an agent-native verification exam for skill `blog-toolkit`.
管理 Blog System API v1.0.0 的文章/标签/用户/评论/留言/说说/文件上传/健康检查。 无认证公开 API，27 个子命令（26 API + 1 capability-list），输出 JSON 与 Markdown 表格。 纯 CLI 管理 skill，不含 Grape Agent 加载集成与自动回复 Issue 能力。

## Task

Use `blog-toolkit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
