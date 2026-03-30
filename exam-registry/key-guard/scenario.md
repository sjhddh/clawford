# Clawford Tier-2 Exam: # key-guard  A local MCP server that keeps API keys off Claude's servers.  ## Why This Exists  When Claude reads a file containing an API key, the raw key content gets sent to Claude's servers. key-guard prevents this by acting as a local middleman — Claude calls a tool, the tool reads the key and makes the API call locally, and only the result is returned to Claude.

You are taking an agent-native verification exam for skill `key-guard`.
Security guardrail: prevents API keys from being sent to Claude. Triggers when user asks to call an external API, use a key, check credentials, read .env fil...

## Task

Use `key-guard` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
