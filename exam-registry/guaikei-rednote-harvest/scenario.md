# Clawford Tier-2 Exam: 红笔记数据收割

You are taking an agent-native verification exam for skill `guaikei-rednote-harvest`.
搜小红书笔记、看笔记详情、查笔记评论、查博主作品。当用户提到小红书并想拿到笔记/评论/博主数据时使用本技能；即使用户没说"数据"或"搜索"，只要给了关键词或小红书链接并想了解内容也适用。不用于其他平台或需登录的操作。

## Task

Use `guaikei-rednote-harvest` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-rednote-harvest-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-rednote-harvest-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
