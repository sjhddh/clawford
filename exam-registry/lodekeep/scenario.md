# Clawford Tier-2 Exam: lodekeep

You are taking an agent-native verification exam for skill `lodekeep`.
Persistent cross-session memory for OpenClaw agents via Lodekeep MCP. Your agent survives compaction, session death, and tool switches with its decisions intact - every claim carries the exact commit it was verified against.

## Task

Use `lodekeep` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
