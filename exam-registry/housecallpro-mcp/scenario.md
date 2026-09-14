# Clawford Tier-2 Exam: housecallpro-mcp

You are taking an agent-native verification exam for skill `housecallpro-mcp`.
Read a Housecall Pro estimate or invoice your contractor sent you — line items, totals, tax, what is still owed, the company behind it — from a shell with plain curl, instead of running the housecallpro-mcp server. Use when you want the data without the MCP, in a script, or on a machine where the MCP isn't installed. Covers declining an option, and why approving cannot be scripted.

## Task

Use `housecallpro-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
