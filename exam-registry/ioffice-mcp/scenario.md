# Clawford Tier-2 Exam: ioffice-mcp

You are taking an agent-native verification exam for skill `ioffice-mcp`.
Access iOffice workspace and facility data via MCP. Use when the user asks about iOffice buildings, floors, spaces, reservations, visitors, maintenance requests, moves, or mail. Triggers on phrases like "book a room in iOffice", "check who's visiting today", "file a maintenance request", "log a package", "schedule a move", or any request involving workplace management in iOffice. Requires ioffice-mcp installed and the ioffice server registered (see Setup below).

## Task

Use `ioffice-mcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
