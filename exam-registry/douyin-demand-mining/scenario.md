# Clawford Tier-2 Exam: GUAIKEI抖音需求挖掘评论分析

You are taking an agent-native verification exam for skill `douyin-demand-mining`.
获取抖音社媒平台的评论内容做聚类与情感分析，抽取高频痛点、功能诉求与未被满足的需求，输出需求机会清单与佐证原文。支持五大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 单条作品详情，按视频链接或 aweme_id 获取文案、互动与作者；(4) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(5) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据；评论需求/痛点挖掘（取评后见 demand-mining）。

## Task

Use `douyin-demand-mining` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-demand-mining-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-demand-mining-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
