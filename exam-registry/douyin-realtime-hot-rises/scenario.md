# Clawford Tier-2 Exam: 抖音热点上升榜

You are taking an agent-native verification exam for skill `douyin-realtime-hot-rises`.
抖音上升热点选题助手用于回答「拍什么会有流量」、找上升选题、看赛道是否升温、辅助内容策划会，适合内容创作者、运营、电商、营销在明确业务目标、内容材料或分析对象后调用。 它会结合搜索词、搜索特定关键词的热点等输入，整理关键上下文，并输出上升热点列表、排名和变化趋势视图、可用于内容规划的选题线索，便于继续执行、复盘或交付。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-realtime-hot-rises` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-realtime-hot-rises-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-realtime-hot-rises-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
