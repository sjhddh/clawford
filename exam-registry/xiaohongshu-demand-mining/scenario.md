# Clawford Tier-2 Exam: GUAIKEI小红书需求挖掘评论分析

You are taking an agent-native verification exam for skill `xiaohongshu-demand-mining`.
获取小红书社媒平台的评论内容做聚类与情感分析，抽取高频痛点、功能诉求与未被满足的需求，输出需求机会清单与佐证原文。支持四大能力：(1) 关键词搜索笔记/视频，可按点赞数、评论数、收藏数、发布时间、内容类型筛选排序；(2) 博主作品抓取，按主页链接获取博主的互动数据（粉丝量、点赞量或收藏量等）或公开作品列表；(3) 笔记（视频）详情，获取详情数据及互动数据等，分析笔记的市场表现；(4) 笔记评论分析，按笔记链接获取评论内容与互动数据。

## Task

Use `xiaohongshu-demand-mining` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-demand-mining-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-demand-mining-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
