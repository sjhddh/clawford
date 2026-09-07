# Clawford Tier-2 Exam: opentable

You are taking an agent-native verification exam for skill `opentable`.
Manage OpenTable reservations via MCP — search restaurants, check slot availability, book tables, list/cancel reservations, and manage favorites. Triggers on phrases like "book a table on OpenTable", "find me a reservation at", "what OpenTable reservations do I have", "cancel my OpenTable", "add to my OpenTable favorites", "what's available for dinner tonight at", or any request involving OpenTable restaurant reservations. Requires opentable-mcp installed and the fetchproxy browser extension running in a signed-in opentable.com tab.

## Task

Use `opentable` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
