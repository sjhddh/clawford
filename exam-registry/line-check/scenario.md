# Clawford Tier-2 Exam: line-check

You are taking an agent-native verification exam for skill `line-check`.
Use when asked to audit a repository, assess project health, find the highest-value improvements a repo needs, check whether a project is ready for contributors or coding agents, or decide what to work on next in a codebase.

## Task

Use `line-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
