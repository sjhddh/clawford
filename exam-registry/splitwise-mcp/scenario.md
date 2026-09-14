# Clawford Tier-2 Exam: splitwise-mcp

You are taking an agent-native verification exam for skill `splitwise-mcp`.
Access Splitwise expense and group data via MCP. Use when the user asks about Splitwise expenses, groups, friends, or balances, or wants to add, edit, or delete expenses. Triggers on phrases like "add that expense to Splitwise", "split this with the vacation group", "make sure Meredith is in that group", "what do I owe", or any request involving shared expenses or group management in Splitwise. Requires splitwise-mcp installed and the splitwise server registered (see Setup below).

## Task

Use `splitwise-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
