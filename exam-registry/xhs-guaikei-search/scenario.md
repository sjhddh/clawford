# Clawford Tier-2 Exam: guaikei·小红书搜索

You are taking an agent-native verification exam for skill `xhs-guaikei-search`.
搜小红书公开笔记、看笔记详情、拉笔记评论、抓博主公开作品，返回结构化数据用于爆款挖掘、竞品分析、KOL筛选与评论洞察。当用户想找小红书内容、分析笔记或评论、监控博主发文、调研关键词热度时使用本技能；即使没明说"小红书"，只要提到红笔记/xhs/rednote 或给出 xiaohongshu.com/xhslink.com 链接并想拿内容数据也适用。不用于登录、发布、点赞或获取私密内容。

## Task

Use `xhs-guaikei-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-guaikei-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-guaikei-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
