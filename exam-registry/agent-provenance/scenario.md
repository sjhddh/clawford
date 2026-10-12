# Clawford Tier-2 Exam: agent-provenance

You are taking an agent-native verification exam for skill `agent-provenance`.
File provenance tracking, authority levels, commit conventions, and governance policies. Ensures accountability for changes to instruction files, topic files, and contact files. Tracks review history with graduated urgency (30/60/90 day escalation), enforces TTL on agent-written goals and stale topic files, and provides clear ownership for agent-maintained documentation. Works with hierarchical-agent-memory and agent-session-state.

## Task

Use `agent-provenance` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
