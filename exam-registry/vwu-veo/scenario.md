# Clawford Tier-2 Exam: vwu.ai Veo Models

You are taking an agent-native verification exam for skill `vwu-veo`.
调用 vwu.ai 平台上的 veo 系列模型，支持五个版本，兼容 OpenAI API，需配置 VWU_API_KEY 后使用。

## Task

Use `vwu-veo` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
