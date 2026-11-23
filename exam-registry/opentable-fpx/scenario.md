# Clawford Tier-2 Exam: opentable-fpx

You are taking an agent-native verification exam for skill `opentable-fpx`.
Query and manage OpenTable (opentable.com) restaurant reservations from a shell with the fpx CLI (@fetchproxy/cli) instead of running the opentable-mcp server — search restaurants, check slot availability, list reservations/favorites, and book/modify/cancel a table via one-shot GraphQL + REST calls through a signed-in browser tab. Use when you want OpenTable data or actions without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `opentable-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
