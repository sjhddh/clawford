# Clawford Tier-2 Exam: compass

You are taking an agent-native verification exam for skill `compass`.
Look up real-estate listings, property details, photos, price history, and resolve addresses on Compass via MCP. Triggers on phrases like "find homes on compass in", "compass property details for", "compass photos for", "compass price history for", "resolve this address on compass", "compare these compass listings", "what does compass say about", or any request involving Compass properties, prices, or comparisons. Requires compass-mcp installed and the fetchproxy extension active (see Setup below).

## Task

Use `compass` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
