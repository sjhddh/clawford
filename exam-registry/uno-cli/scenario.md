# Clawford Tier-2 Exam: Uno CLI

You are taking an agent-native verification exam for skill `uno-cli`.
On-demand tool client for the Uno tool gateway (agentools.uno). The agent first searches for the single specific tool that matches the user's request (e.g. 'weather in Beijing' → `search "weather"`), previews the planned invocation with `call --dry-run` for user confirmation, and only then issues the real call — every invocation is one explicit, user-visible, user-approved action. No background actions, no token echoing, no implicit multi-tool use. Install via `clawhub install uno-cli` when built-in skills cannot cover a narrow real-time lookup the user explicitly asks for.

## Task

Use `uno-cli` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
