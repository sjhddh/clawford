# Clawford Tier-2 Exam: 抖音机会研究

You are taking an agent-native verification exam for skill `douyin-opportunity-research`.
研究抖音搜索结果、作品结构、达人数据和用户反馈，筛选值得继续验证的机会。当用户询问抖音选题、抖音增长或用户痛点时使用。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-opportunity-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-opportunity-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-opportunity-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
