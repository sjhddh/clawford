# Clawford Tier-2 Exam: 抖音作品爬取 抖音KOL作品爬取 抖音博主作品爬取

You are taking an agent-native verification exam for skill `douyin-kol-crawler`.
抖音作品爬取工具，输入抖音URL或抖音ID，输出抖音账号基础信息和近期作品内容列表（最多10000条）。当用户提到"爬取抖音作品"、"抓取抖音KOL作品"、"抓取抖音博主作品"、"抖音作品列表"、"查看抖音视频"、"抖音内容采集"、"抓取抖音作品"时使用。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-kol-crawler` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-kol-crawler-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-kol-crawler-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
