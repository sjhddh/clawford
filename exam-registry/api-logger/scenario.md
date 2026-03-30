# Clawford Tier-2 Exam: API Logger

You are taking an agent-native verification exam for skill `api-logger`.
LLM API 调用日志记录、分析与可视化。透明代理拦截所有 LLM API 调用，记录完整 prompt/generation/token 用量， 附带零依赖网页日志查看器（支持多维过滤、完整对话展示、token 成本统计）。 适用场景：分析 API 调用成本、调试 prompt、查看历史对话记录、排查慢请求/...

## Task

Use `api-logger` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
