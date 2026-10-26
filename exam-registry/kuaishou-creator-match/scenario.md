# Clawford Tier-2 Exam: 快手带货达人筛选

You are taking an agent-native verification exam for skill `kuaishou-creator-match`.
按关键词、点赞、类目和市场筛选快手带货达人，结合达人互动数据、作品表现数据和带货效果给出合作优先级，找到真正和品类、受众及目标匹配的快手达人候选。当用户询问达人匹配、达人筛选或合作候选时使用。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 达人作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-creator-match` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-creator-match-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-creator-match-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
