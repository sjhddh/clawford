# Clawford Tier-2 Exam: Agent Session State

You are taking an agent-native verification exam for skill `agent-session-state`.
Per-channel session isolation, Write-Ahead Log (WAL) protocol, and working buffer management. Prevents cross-session interference, captures decisions and fac...

## Task

Use `agent-session-state` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
