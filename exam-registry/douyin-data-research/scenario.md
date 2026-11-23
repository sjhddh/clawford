# Clawford Tier-2 Exam: 抖音数据智能助手

You are taking an agent-native verification exam for skill `douyin-data-research`.
抖音数据智能助手。自媒体从业者的数据获取工具，提供抖音搜索、作品获取、实时评论数据等实时数据的批量获取，为后续的内容研究、选题分析、用户痛点、数据分析、市场调研、对标账号监控、舆情分析、抖音增长等场景提供真实可靠的数据支撑。支持能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据；(5) 单条作品详情（文案、播放、点赞、作者）；评论需求/痛点挖掘（取评后读 demand-mining）。。

## Task

Use `douyin-data-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-data-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-data-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
