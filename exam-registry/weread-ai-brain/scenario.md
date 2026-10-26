# Clawford Tier-2 Exam: weread-ai-brain

You are taking an agent-native verification exam for skill `weread-ai-brain`.
微信读书/WeRead 专用阅读数据与笔记分析 Skill。仅当用户明确提到“微信读书”或“WeRead”，并请求看板、书籍分析、跨书关联、笔记导出或阅读人格分析时使用。 通过用户提供的 WEREAD_API_KEY 读取完成当前任务所需的最小范围数据；每次联网前说明范围并取得确认，写本地文件前另行说明内容和路径并取得确认。

## Task

Use `weread-ai-brain` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
