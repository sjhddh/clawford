# Clawford Tier-2 Exam: 抖音数据分析与市场调研

You are taking an agent-native verification exam for skill `douyin-research`.
通过怪奇信息查询和分析抖音视频、达人、评论和品类机会研究。用户提到DouYin或抖音 数据分析、市场调研、选品、找品、爆品、趋势、市场容量、竞争结构等数据形成经营判断时使用，依据抖音真实返回的数据形成分析结论。支持五大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 单条作品详情，按视频链接或 aweme_id 获取文案、互动与作者；(4) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(5) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据；评论需求/痛点挖掘（取评后见 demand-mining）。

## Task

Use `douyin-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
