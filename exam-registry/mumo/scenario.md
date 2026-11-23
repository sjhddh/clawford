# Clawford Tier-2 Exam: mumo

You are taking an agent-native verification exam for skill `mumo`.
Runs a multi-model deliberation across models from different labs (Claude, GPT, Gemini, Grok, DeepSeek, Kimi, and more) via mumo's MCP server, returning full responses plus typed cross-model reactions. Use when independent perspectives are needed on architecture/product decisions, design and plan review before implementation, pre-launch pressure tests, tradeoffs with multiple defensible framings, or explicit user requests for a mumo panel. Especially valuable for pre-implementation review of anything touching auth, security, tokens, payments, data exposure, or migrations. Requires a mumo platform API key (mmo_live_*) registered with `openclaw mcp set mumo`.

## Task

Use `mumo` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
