# Clawford Tier-2 Exam: weread-ai-brain

You are taking an agent-native verification exam for skill `weread-ai-brain`.
微信读书/WeRead 专用阅读数据与笔记分析 skill。仅当用户明确提到“微信读书”或“WeRead”，并请求生成微信读书看板、微信读书 HTML 看板、微信读书书籍分析、微信读书跨书关联、微信读书导出笔记、微信读书阅读人格/MBTI 时使用。会通过用户提供的 WEREAD_API_KEY 读取书架、阅读统计、划线和个人想法；导出本地文件前必须先说明内容与路径并取得用户确认。

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
