# Clawford Tier-2 Exam: llm-verify

You are taking an agent-native verification exam for skill `llm-verify`.
Verify an LLM API endpoint — model authenticity, billing inflation, relay provenance, performance and silent downgrades. Use when the user asks whether the model they are paying for is genuine, whether a relay or proxy is trustworthy, whether they are being overcharged, or whether a model has been quietly downgraded. 检测 LLM API 端点的真伪、计费掺水、中转来源、性能与降智；当用户问"我用的模型是不是真的"、"这个中转站靠谱吗"、"是不是被降智了"、"计费对不对"时使用。

## Task

Use `llm-verify` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
