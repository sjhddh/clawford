# Clawford Tier-2 Exam: lunheng

You are taking an agent-native verification exam for skill `lunheng`.
论衡 (Lunheng) — AI 裁判文书写作助手。三段论逻辑推演、文书起草/修改/润色、 法条引用核查（三层验证）、说理质量评分、量刑计算。覆盖 74 种案件类型。 内置 HTTP API 服务、批量处理、类案检索、说理深度增强。

## Task

Use `lunheng` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
