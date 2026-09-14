# Clawford Tier-2 Exam: guaikei-xhs-see-details

You are taking an agent-native verification exam for skill `guaikei-xhs-see-details`.
抓取小红书博主公开作品列表并配合笔记详情与评论，还原其发文节奏、内容风格与互动表现。当用户要分析小红书竞品账号、监控对手博主最近发了什么、或为差异化策略准备数据时使用本技能；即使用户没说"竞品分析"，只要给了博主主页链接并想了解其内容表现也适用。不用于登录态或私密数据。

## Task

Use `guaikei-xhs-see-details` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-see-details-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-see-details-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
