# Clawford Tier-2 Exam: Web Reader

You are taking an agent-native verification exam for skill `web-reader`.
智能网页阅读器 - 抓取文章/下载视频并归档，支持分析、摘要、衍生。Triggers: '下载这篇文章', '抓取文章', '保存文章', 'fetch URL', '分析这篇文章', '摘要', '总结文章', '下载视频', '抓取微信文章', '抓取飞书文档', '把这个链接保存下来', '下载B站视频',...

## Task

Use `web-reader` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
