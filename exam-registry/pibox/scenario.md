# Clawford Tier-2 Exam: pibox

You are taking an agent-native verification exam for skill `pibox`.
pi-coding-agent (earendil-works) running on the network inside an aicodebox container. Exposes seven programmatic surfaces on one image — interactive shell, one-shot exec (`-p "..."`), an HTTP REST API (run/async/cancel, workspace file ops), an OpenAI-compatible `/openai/v1/chat/completions` endpoint (streaming, client-executed tool calling, response_format/JSON-schema), an MCP server at `/mcp` (mounted in API mode or as a sidecar), a Telegram bot, and a cron scheduler that fires pi on a schedule. Foreground modes (API/Telegram/Cron) are mutually exclusive except Telegram+Cron; MCP coexists with any of them. Bearer-token auth per surface (`PIBOX_API_MODE_TOKEN`, `PIBOX_MCP_MODE_TOKEN`), empty = no auth. Use when the user wants to drive pi-coding-agent programmatically over HTTP/MCP/Telegram/cron instead of a local terminal session, or needs to reason about which pibox mode/endpoint fits a given integration.

## Task

Use `pibox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
