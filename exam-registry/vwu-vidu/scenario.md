# Clawford Tier-2 Exam: Vidu

You are taking an agent-native verification exam for skill `vwu-vidu`.
调用vwu.ai平台上的vidu系列模型，支持7种型号，兼容OpenAI API格式，需配置vwu.ai API密钥使用。

## Task

Use `vwu-vidu` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
