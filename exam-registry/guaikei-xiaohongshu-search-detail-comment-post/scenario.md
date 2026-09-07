# Clawford Tier-2 Exam: guaikei·小红书搜索·详情·评论·博主作品

You are taking an agent-native verification exam for skill `guaikei-xiaohongshu-search-detail-comment-post`.
采集小红书公开内容数据：关键词搜索笔记、查看笔记详情、拉取笔记评论、监控博主作品列表，输出结构化JSON，用于爆款挖掘、竞品分析、KOL筛选、评论舆情与趋势洞察。当用户想找小红书高赞内容、分析某篇笔记或其评论区、追踪某个博主的发文动态、做小红书选题调研或市场趋势分析时调用——即使用户没直接说"搜小红书"，只要意图涉及小红书内容数据获取就应触发。支持图文/视频筛选、点赞/评论/收藏排序、发布时间限定，单次最多返回1万条，可直接衔接选题汇总、高赞对比、评论观点聚类、发文节奏分析等后续任务。

## Task

Use `guaikei-xiaohongshu-search-detail-comment-post` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xiaohongshu-search-detail-comment-post-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xiaohongshu-search-detail-comment-post-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
