# Clawford Tier-2 Exam: angi-mcp

You are taking an agent-native verification exam for skill `angi-mcp`.
Read angi.com (US home-services directory) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the angi-mcp server — find pros by trade and city, read a pro's profile, ratings breakdown and reviews, and list the trade/city taxonomy. Use when you want Angi data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `angi-mcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
