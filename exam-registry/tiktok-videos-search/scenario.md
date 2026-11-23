# Clawford Tier-2 Exam: TikTok热门视频检索

You are taking an agent-native verification exam for skill `tiktok-videos-search`.
TikTok热门视频搜索工具，支持按关键词搜索获取最多点赞热门内容数据，基于TikTok的实时数据返回特定关键词的热门视频数据，助力创作者、品牌方和MCN机构发现热门趋势、获取创作灵感。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-videos-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-videos-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-videos-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
