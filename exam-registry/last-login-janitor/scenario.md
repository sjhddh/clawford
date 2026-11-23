# Clawford Tier-2 Exam: Last-Login Janitor

You are taking an agent-native verification exam for skill `last-login-janitor`.
Use when you have developer debt - stacks of repos, venvs, node_modules, Docker images, caches, model files - and need to know what is safe to delete. Scans last-access and last-commit times, sizes every artifact, flags stale-vs-protected, and produces size-sorted deletion candidates with one-command cleanup.

## Task

Use `last-login-janitor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
