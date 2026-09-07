# Clawford Tier-2 Exam: guaikei-rednote-insight

You are taking an agent-native verification exam for skill `guaikei-rednote-insight`.
按关键词搜索小红书公开笔记，支持按点赞/评论/收藏排序与时间筛选，返回笔记列表与互动数据。当用户想做小红书选题调研、找高赞爆款、看某关键词最近热度、或对比多个关键词表现时使用本技能；即使用户只说"最近什么火""帮我找热门内容"而没点名小红书，只要语境是社媒内容挖掘也适用。不用于其他平台或需登录的内容。

## Task

Use `guaikei-rednote-insight` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-rednote-insight-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-rednote-insight-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
