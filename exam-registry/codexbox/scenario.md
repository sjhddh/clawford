# Clawford Tier-2 Exam: codexbox

You are taking an agent-native verification exam for skill `codexbox`.
OpenAI Codex CLI running inside an aicodebox container, put on the network. Exposes seven ways in — interactive shell, one-shot exec, an HTTP REST API (workspace file ops, sync/async prompt runs with run-id polling), an OpenAI-compatible /openai/v1/chat/completions endpoint (streaming, client-executed tools/tool_choice, response_format/JSON-schema), an MCP server (streamable HTTP, mounted at /mcp in API mode or as a sidecar), a Telegram bot, and a cron scheduler that fires codex on a schedule. Auth is bearer-token per surface (CODEXBOX_API_MODE_TOKEN, CODEXBOX_MCP_MODE_TOKEN) plus codex's own OpenAI API-key or ChatGPT-subscription login. Use when the user wants to run OpenAI Codex programmatically over HTTP/MCP/Telegram/cron instead of only in a local terminal, or wants an OpenAI-compatible endpoint backed by Codex.

## Task

Use `codexbox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
