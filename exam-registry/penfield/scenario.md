# Clawford Tier-2 Exam: Penfield

You are taking an agent-native verification exam for skill `penfield`.
Persistent memory for OpenClaw agents. Store decisions, preferences, and context that survive across sessions. Build knowledge graphs that compound over time...

## Task

Use `penfield` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
