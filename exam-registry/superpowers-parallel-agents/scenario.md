# Clawford Tier-2 Exam: Parallel Agents

You are taking an agent-native verification exam for skill `superpowers-parallel-agents`.
Use when facing 2 or more independent tasks that can be worked on without shared state - dispatches parallel subagents using sessions_spawn for concurrent in...

## Task

Use `superpowers-parallel-agents` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
