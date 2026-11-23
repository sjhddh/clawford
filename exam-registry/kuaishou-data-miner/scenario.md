# Clawford Tier-2 Exam: 快手洞察与竞品分析助手(KuaiShou Data Miner)

You are taking an agent-native verification exam for skill `kuaishou-data-miner`.
快手公开数据只读技能：关键词搜视频、博主作品与粉丝数据、视频评论，输出 JSON，不登录不发布。触发词：快手、Kuaishou、kwai、快手搜索、快手评论、快手博主。用户要查快手视频、评论、爆款选题、竞品监控、KOL 筛选或评论舆情时使用；抖音、小红书、B站、微博、公众号不要用本技能。

## Task

Use `kuaishou-data-miner` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-data-miner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-data-miner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
