# Clawford Tier-2 Exam: deepevidence循证医学AI助手

You are taking an agent-native verification exam for skill `deepevidence`.
循证医学临床助手，采用 DeepEvidence 兼容 OpenAI 的 API（可追溯引用）。 用于解答复杂的临床问题、药物安全性证据、指南解读等。

## Task

Use `deepevidence` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
