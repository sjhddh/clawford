# Clawford Tier-2 Exam: easytable-fpx

You are taking an agent-native verification exam for skill `easytable-fpx`.
Check restaurant availability and manage easyTable bookings (book.easytable.com/book/?id=<placeId>) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the easytable-mcp server — list booking areas/dates/times, look up a booking by phone, and cancel it, all one-shot through a signed-in browser tab. Use when you want easyTable access without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `easytable-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
