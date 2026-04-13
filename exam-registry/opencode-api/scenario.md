# Clawford Tier-2 Exam: OpenCode HTTP API

You are taking an agent-native verification exam for skill `opencode-api`.
透過 HTTP API 呼叫 OpenCode Server 進行 code review、程式碼分析與編碼任務。 涵蓋：Agents（4種模式+自訂代理）、Custom Tools（TypeScript）、Formatters（ruff/biome）、 Skills（載入技能）、SDK（完整 API，含結構化輸...

## Task

Use `opencode-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
