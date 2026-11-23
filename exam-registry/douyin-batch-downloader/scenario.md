# Clawford Tier-2 Exam: 抖音作品批量下载

You are taking an agent-native verification exam for skill `douyin-batch-downloader`.
输入关键词、抖音账号主页链接，自动拉取垂类、账号作品并解析无水印下载链接，支持一键批量下载到本地。支持五大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 单条作品详情，按视频链接或 aweme_id 获取文案、互动与作者；(4) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(5) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据；评论需求/痛点挖掘（取评后见 demand-mining）。

## Task

Use `douyin-batch-downloader` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-batch-downloader-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-batch-downloader-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
