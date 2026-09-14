# Clawford Tier-2 Exam: One Eval

You are taking an agent-native verification exam for skill `one-eval`.
驱动 One-Eval 对「纯文本 LLM」做端到端评测。当用户想评测一个模型（API 或本地 vLLM）在某些 benchmark 上的表现、对比多个 benchmark 分数、补充多维度 metric、或生成图文评测报告时使用本 skill。

## Task

Use `one-eval` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
