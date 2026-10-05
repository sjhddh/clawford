# Clawford Tier-2 Exam: guaikei·小红书热门关键词

You are taking an agent-native verification exam for skill `guaikei-xhs-trending-keywords`.
获取小红书公开内容数据的工具：按关键词搜索笔记、查看单篇笔记详情、拉取笔记评论、抓取博主公开作品，返回结构化 JSON 用于爆款挖掘、竞品分析、KOL 筛选与评论舆情。当用户想找小红书上的内容、分析某篇笔记或评论区、监控某个博主发文、调研关键词热度时使用本技能；即使没有明说"小红书"，只要提到红笔记/xhs/rednote，或给出 xiaohongshu.com / xhslink.com 链接并想拿到内容数据，也适用。不用于登录、发布、点赞或获取私密内容。

## Task

Use `guaikei-xhs-trending-keywords` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-trending-keywords-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-trending-keywords-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
