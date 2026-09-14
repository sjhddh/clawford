# Clawford Tier-2 Exam: guaikei-douyin-public-data-fetcher

You are taking an agent-native verification exam for skill `guaikei-douyin-public-data-pipeline`.
当用户需要抖音公开数据时使用本技能。四项能力：关键词搜索（视频/图文/用户，支持排序/时间/时长/类型筛选）、博主作品批量抓取、视频评论获取分析、实时热榜查询。用户提到抖音搜索、抖音热榜、抖音评论、博主作品、竞品分析、短视频选题、舆情监控、舆情分析、热点追踪时触发；做短视频调研未明确提到"抖音"时同样适用。不适用于发布/剪辑/下载视频、涨粉代运营咨询，也不覆盖其他短视频平台。

## Task

Use `guaikei-douyin-public-data-pipeline` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-douyin-public-data-pipeline-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-douyin-public-data-pipeline-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
