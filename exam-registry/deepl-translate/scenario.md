# Clawford Tier-2 Exam: deepL Translate

You are taking an agent-native verification exam for skill `deepl-translate`.
当用户明确要求使用 DeepL 官方 API 时使用，适用于文本翻译、文档翻译、语言与用量查询，以及 glossary v2/v3 管理。仅连接 DeepL 官方 API 域名，使用环境变量中的 DEEPL_API_KEY，不读取其他凭证。

## Task

Use `deepl-translate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
