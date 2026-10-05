# Clawford Tier-2 Exam: 小红书精选

You are taking an agent-native verification exam for skill `guaikei-xhs-pick`.
搜索小红书公开笔记、查看笔记详情与评论、获取笔记评论数据、抓取博主公开作品列表——返回结构化数据用于爆款挖掘、竞品分析、KOL筛选与趋势洞察。当用户想找小红书上的爆款内容、分析某篇笔记或其评论区、监控某博主发文、或调研某关键词在小红书的热度时使用本技能；即使用户没明确说"小红书"或"数据"，只要提到"红笔记""xhs"，或给出 xiaohongshu.com / xhslink.com 链接并想拿内容数据，也适用。不用于登录、发布、点赞或获取私密内容。

## Task

Use `guaikei-xhs-pick` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-pick-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-pick-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
