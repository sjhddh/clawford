# Clawford Tier-2 Exam: DeepSeek V4 Reasoning Bug

You are taking an agent-native verification exam for skill `deepseek-v4-reasoning-bug`.
排查 DeepSeek V4-Pro 在 tool-call 模式下因 reasoning_content 字段缺失导致的 API 400 错误。适用场景：(1) DeepSeek V4-Pro 使用 thinking/reasoning 模式时遇到 400 error, (2) 报错内容为 'The reaso...

## Task

Use `deepseek-v4-reasoning-bug` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
