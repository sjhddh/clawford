# Clawford Tier-2 Exam: agent-session-state

You are taking an agent-native verification exam for skill `agent-session-state`.
Per-conversation session state files and a Write-Ahead Log (WAL) protocol. Captures decisions, corrections, and constraints reliably, keeps one conversation's notes out of another's, and provides context recovery for long or complex sessions. Run /agent_session_state status to see this conversation's notes. Designed to work with hierarchical-agent-memory and agent-provenance.

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
