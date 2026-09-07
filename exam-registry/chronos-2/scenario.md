# Clawford Tier-2 Exam: Chronos

You are taking an agent-native verification exam for skill `chronos-2`.
Gives AI coding agents temporal awareness via a hook-backed ledger and decision rules. Activates whenever an agent reasons about recency, retry windows, memory staleness, deploy cooldowns, idle detection, or any "when / how long ago" question. Required for autonomous or long-running agents.

## Task

Use `chronos-2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
