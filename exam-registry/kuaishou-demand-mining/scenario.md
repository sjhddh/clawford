# Clawford Tier-2 Exam: GUAIKEI快手需求挖掘评论分析

You are taking an agent-native verification exam for skill `kuaishou-demand-mining`.
获取快手社媒平台的评论内容做聚类与情感分析，抽取高频痛点、功能诉求与未被满足的需求，输出需求机会清单与佐证原文。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-demand-mining` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-demand-mining-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-demand-mining-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
