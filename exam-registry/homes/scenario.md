# Clawford Tier-2 Exam: homes

You are taking an agent-native verification exam for skill `homes`.
Look up real-estate listings, property details, price/tax history, market reports, saved homes, and photo galleries on homes.com via MCP. Triggers on phrases like "find homes on homes.com in", "homes.com property details for", "what does homes.com say about", "homes.com price history for", or any request involving homes.com properties, prices, history, or photos. Requires homes-mcp installed and the fetchproxy extension active (see Setup below).

## Task

Use `homes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
