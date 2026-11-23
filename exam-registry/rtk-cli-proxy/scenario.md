# Clawford Tier-2 Exam: rtk CLI proxy

You are taking an agent-native verification exam for skill `rtk-cli-proxy`.
Run shell/dev commands through the rtk CLI proxy so verbose output (ls, tree, git, gh, grep, logs, JSON, docker, tests) is compacted before it reaches the model context. Use when a command would produce long output or during exploration of large repos.

## Task

Use `rtk-cli-proxy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
