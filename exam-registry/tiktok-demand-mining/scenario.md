# Clawford Tier-2 Exam: GUAIKEI TikTok需求挖掘评论分析

You are taking an agent-native verification exam for skill `tiktok-demand-mining`.
获取成千上万条TikTok社媒平台的实时用户评论内容做聚类与情感分析，抽取高频痛点、功能诉求与未被满足的需求，把用户评论变成“用户到底要什么”的结构清单，按痛点聚类、标注频次与情感强度，直接喂给选品与产品工程，输出需求机会清单与佐证原文。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-demand-mining` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-demand-mining-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-demand-mining-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
