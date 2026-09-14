# Clawford Tier-2 Exam: guaikei·小红书笔记·评论·博主

You are taking an agent-native verification exam for skill `guaikei-xhs-content-and-creator-data`.
搜索小红书公开笔记、查看笔记详情与评论、获取博主作品列表，用于爆款挖掘、竞品分析、KOL筛选和趋势洞察。当用户想找小红书高赞内容、分析评论区反馈、监控竞品博主发文动态、做选题调研或市场趋势分析时调用——即使用户没有直接说"搜小红书"，只要意图涉及小红书内容数据获取就应触发。支持关键词搜索（图文/视频筛选、点赞/评论/收藏排序、时间范围限定）、笔记详情与评论获取、博主公开作品抓取，单次最多返回1万条结构化JSON，可直接衔接选题汇总、高赞对比、评论观点聚类、发文节奏分析等后续任务。

## Task

Use `guaikei-xhs-content-and-creator-data` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-content-and-creator-data-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-content-and-creator-data-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
