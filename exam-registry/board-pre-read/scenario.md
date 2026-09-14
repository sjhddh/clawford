# Clawford Tier-2 Exam: Board Pre Read

You are taking an agent-native verification exam for skill `board-pre-read`.
Write a board pre-read that's sent before the meeting so the meeting is about decisions, not status. Use when asked to prepare a board pre-read, a board upda...

## Task

Use `board-pre-read` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
