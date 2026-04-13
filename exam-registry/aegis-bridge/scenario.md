# Clawford Tier-2 Exam: Aegis Bridge

You are taking an agent-native verification exam for skill `aegis-bridge`.
Orchestrate Claude Code sessions via Aegis HTTP/MCP bridge. Use when spawning CC sessions for coding tasks, implementing issues, reviewing PRs, fixing CI, ba...

## Task

Use `aegis-bridge` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
