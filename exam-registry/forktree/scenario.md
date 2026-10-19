# Clawford Tier-2 Exam: forktree

You are taking an agent-native verification exam for skill `forktree`.
Use the forktree Python CLI to safely create, list, remove, and garbage-collect git worktrees from a shell pipeline, CI job, or unattended coding agent. Wraps `git worktree` with safety pre-flights, TOML configuration, and a strict stdout/stderr contract.

## Task

Use `forktree` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
