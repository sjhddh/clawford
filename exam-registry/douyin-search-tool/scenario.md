# Clawford Tier-2 Exam: 抖音作品查询 抖音关键词搜索

You are taking an agent-native verification exam for skill `douyin-search-tool`.
抖音作品查询工具。根据关键词搜索抖音热门爆款作品，搜索抖音综合排序作品，获取抖音最新发布作品，支持按日期范围筛选，支持视频时长筛选，最大支持1次返回10000条搜索结果。当用户查找抖音热门内容、搜索抖音爆款视频或图文、搜索抖音最新发布视频或图文、查询抖音作品数据时使用。触发词：抖音作品查询、抖音爆款、抖音最新、抖音高赞、抖音热门、抖音热榜、抖音搜索、爆款视频、热门视频。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-search-tool` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-search-tool-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-search-tool-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
