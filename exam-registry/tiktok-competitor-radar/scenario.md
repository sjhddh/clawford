# Clawford Tier-2 Exam: TikTok竞品分析与品牌对比

You are taking an agent-native verification exam for skill `tiktok-competitor-radar`.
对比品牌在TikTok社媒上的内容表现、互动数据和讨论趋势，可结合历史数据进行分析，输出差异、证据与可执行机会，用于竞品分析、品牌对比、阶段性变化判断、品牌传播复盘和品牌策略优化。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-competitor-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-competitor-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-competitor-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
