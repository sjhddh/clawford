# Clawford Tier-2 Exam: tock-fpx

You are taking an agent-native verification exam for skill `tock-fpx`.
Query Tock (exploretock.com — restaurant discovery, availability, and the signed-in user's reservations) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the tock-mcp server — list metros, search a metro's restaurants, get a venue's bookable calendar, and list reservations, all through a signed-in browser tab. Use when you want Tock data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `tock-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
