# Clawford Tier-2 Exam: feishu-doc-skill

You are taking an agent-native verification exam for skill `feishu-doc-skill`.
当用户提供飞书 wiki、docx、知识库页面链接，并希望读取、总结、比对、抽取内容、把结果写回飞书文档，或把本地图片插入飞书文档时使用。这个技能会先从链接中提取文档标识，优先通过飞书 OpenAPI 读取正文；做需求分析时优先输出 Markdown，调试接口结构时再输出 JSON。

## Task

Use `feishu-doc-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
