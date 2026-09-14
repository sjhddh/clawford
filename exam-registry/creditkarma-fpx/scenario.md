# Clawford Tier-2 Exam: creditkarma-fpx

You are taking an agent-native verification exam for skill `creditkarma-fpx`.
Query Credit Karma (creditkarma.com) transactions from a shell with the fpx CLI (@fetchproxy/cli) instead of running the creditkarma-mcp server — capture the signed-in session cookie once, then curl the GraphQL transactions endpoint directly. Use when you want Credit Karma transaction data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `creditkarma-fpx` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
