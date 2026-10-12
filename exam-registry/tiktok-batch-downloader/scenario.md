# Clawford Tier-2 Exam: TikTok作品批量下载

You are taking an agent-native verification exam for skill `tiktok-batch-downloader`.
输入关键词、TikTok账号主页链接，自动拉取垂类视频、账号作品并解析下载链接，支持一键批量下载到本地。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。当用户需要搜TikTok视频、抓博主作品、看TikTok评论、做竞品/对标账号监控、短视频选题调研、评论舆情分析、热点追踪、爆款挖掘时使用。

## Task

Use `tiktok-batch-downloader` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-batch-downloader-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-batch-downloader-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
