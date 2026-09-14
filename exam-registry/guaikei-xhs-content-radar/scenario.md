# Clawford Tier-2 Exam: guaikei·小红书内容雷达

You are taking an agent-native verification exam for skill `guaikei-xhs-content-radar`.
能做：小红书关键词搜索、笔记详情、笔记评论、博主作品列表，仅公开数据。当用户任务在此范围内时使用本技能；即使用户没说"小红书"，只要意图匹配也适用。不能做：登录、发布、点赞、获取私密内容、跨平台。若任务超出边界请告知用户而非硬调。

## Task

Use `guaikei-xhs-content-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-content-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-content-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
