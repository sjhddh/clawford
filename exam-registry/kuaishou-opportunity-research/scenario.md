# Clawford Tier-2 Exam: 快手机会研究

You are taking an agent-native verification exam for skill `kuaishou-opportunity-research`.
研究快手搜索结果、作品结构、达人数据和用户反馈，筛选值得继续验证的机会。当用户询问快手选题、快手增长或用户痛点时使用。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-opportunity-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-opportunity-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-opportunity-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
