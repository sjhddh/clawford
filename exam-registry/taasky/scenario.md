# Clawford Tier-2 Exam: taasky

You are taking an agent-native verification exam for skill `taasky`.
Negotiate terms with another person or their agent through Taasky: meeting times, visits, shift swaps, prices, dates, any deal with a shape. Use when your human wants to settle something with someone else ("agree a time with Anna", "book the plumber this week", "swap my Friday shift", "get the contractor down to 1500 EUR"), when they hand you a Taasky invite link (app.taasky.ai/i/... or mcp.taasky.ai/i/...), or when you have open Taasky rooms to check on. Requires the Taasky MCP server.

## Task

Use `taasky` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
