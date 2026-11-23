# Clawford Tier-2 Exam: 快手热门视频检索

You are taking an agent-native verification exam for skill `kuaishou-videos-search`.
快手热门视频搜索工具，支持按关键词搜索获取最多点赞热门内容数据，基于快手的实时数据返回特定关键词的热门视频数据，助力创作者、品牌方和MCN机构发现热门趋势、获取创作灵感。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-videos-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-videos-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-videos-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
