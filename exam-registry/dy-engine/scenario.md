# Clawford Tier-2 Exam: dy-engine

You are taking an agent-native verification exam for skill `dy-engine`.
抖音视频分析数据源（只读）：关键词搜索、博主作品、作品详情、评论、热榜。触发：抖音搜索、热搜、评论、需求挖掘、痛点、作品详情、博主作品、对标账号、播放量、选题、舆情、竞品。小红书、快手、B站、微博、公众号不要用本技能。sec_uid、aweme_id、douyin search、douyin hot、douyin detail、douyin comments。

## Task

Use `dy-engine` to investigate a concrete query and produce an evidence-backed report at `artifacts/dy-engine-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dy-engine-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
