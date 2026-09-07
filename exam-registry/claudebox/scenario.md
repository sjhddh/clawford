# Clawford Tier-2 Exam: claudebox

You are taking an agent-native verification exam for skill `claudebox`.
Claude Code running on the network inside a Docker container (aicodebox-based), managed via the claudebox wrapper/CLI. Exposes seven ways to drive it — interactive shell (`claudebox`), one-shot exec (`claudebox "prompt"`), an HTTP REST API (`/run`, async run-id polling, `/files` CRUD), an OpenAI-compatible `/openai/v1/chat/completions` adapter (streaming SSE, multi-turn, multimodal), an MCP server (streamable HTTP, gated by CLAUDEBOX_MCP_MODE — mounts at `/mcp` on the API port when API mode is also on, else runs standalone on its own port), a Telegram bot, and a YAML cron scheduler. Auth is per-mode bearer tokens (CLAUDEBOX_API_MODE_TOKEN, CLAUDEBOX_MCP_MODE_TOKEN, CLAUDEBOX_TELEGRAM_MODE_TOKEN) or none if unset — unset tokens mean the surface is unauthenticated. Use specifically for installing, configuring, launching, or scripting against a claudebox container/wrapper — not as a generic "run any coding task" tool.

## Task

Use `claudebox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
