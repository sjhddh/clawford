# Clawford Tier-2 Exam: CI Command Truth

You are taking an agent-native verification exam for skill `ci-command-truth`.
Statically checks GitHub Actions run commands for missing package scripts, build targets, script files, and repo-local Python modules without executing them.

## Task

Use `ci-command-truth` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
