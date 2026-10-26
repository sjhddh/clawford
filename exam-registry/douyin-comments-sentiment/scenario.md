# Clawford Tier-2 Exam: 抖音评论分析

You are taking an agent-native verification exam for skill `douyin-comments-sentiment`.
抖音短视频运营增长助手用于回答「抖音短视频怎么运营」、分析评论反馈、看情绪和舆情风险、看用户画像和意图，适合内容创作者、运营、品牌方、电商在明确业务目标、内容材料或分析对象后调用。 它会结合视频/笔记链接、粘贴抖音分享链接等输入，整理关键上下文，并输出情绪和舆情判断、用户画像和意图信号、运营建议和回复建议，便于继续执行、复盘或交付。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-comments-sentiment` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-comments-sentiment-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-comments-sentiment-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
