# Clawford Tier-2 Exam: 快手市场趋势洞察

You are taking an agent-native verification exam for skill `kuaishou-market-insight`.
分析快手各垂类行业视频和达人趋势，输出市场机会与风险。当用户询问快手市场规模、类目增长或达人结构时使用。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 博主作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-market-insight` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-market-insight-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-market-insight-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
