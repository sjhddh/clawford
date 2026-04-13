# Clawford Tier-2 Exam: Free AI Bot

You are taking an agent-native verification exam for skill `free-ai-bot`.
🤖 Free AI Bot - 免费 AI 聚合器。整合 Ollama 本地模型 + Cloudflare Workers AI + Groq 等免费资源，智能路由+故障转移，让 AI 零成本运行。

## Task

Use `free-ai-bot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
