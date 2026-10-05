# Clawford Tier-2 Exam: Savemaintenance

You are taking an agent-native verification exam for skill `savemaintenance`.
Deterministic reconciliation of conversation-log.md, FTS5 index, and saved conversations — one-shot fix or maintenance run
Sister skill to the save skill, only get this if you are planning on getting and using the save skill by the same author

## Task

Use `savemaintenance` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
