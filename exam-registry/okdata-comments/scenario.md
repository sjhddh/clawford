# Clawford Tier-2 Exam: 评论口碑分析 okdata

You are taking an agent-native verification exam for skill `okdata-comments`.
What are people praising and complaining about under this post? Reads the comments under one post, page by page, into one table: comment, author, likes, replies and time. Each page is one paid call; making sense of praise and complaints is left to your AI. Use when the user asks this about Douyin, Xiaohongshu (RedNote), WeChat Official Accounts, Bilibili, Weibo, TikTok, YouTube, Instagram, Reddit, Kuaishou, WeChat Channels. 这条内容底下，大家在夸什么、吐槽什么？按页读取一条内容下的评论，整理成一张表：评论、评论人、点赞、回复数和时间。每页是一次计费调用；夸什么、吐槽什么由你的 AI 从表里归纳。

## Task

Use `okdata-comments` to investigate a concrete query and produce an evidence-backed report at `artifacts/okdata-comments-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/okdata-comments-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
