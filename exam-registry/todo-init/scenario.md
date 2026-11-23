# Clawford Tier-2 Exam: todo-init

You are taking an agent-native verification exam for skill `todo-init`.
Bootstrap and report on the todo backlog workspace. Use for /todo-init [--plan] [--ci] or when the user wants to set up or check TODO.md and CHANGELOG.md. Scans README.md, docs/, TODO.md and CHANGELOG.md, creates the missing backlog files, detects git, runtime, package manager and test command, offers to migrate the old three-section format to the task tree, and reports the tree. Optionally asks pre-planning questions and sets up CI (or a local pre-push fallback) running the backlog lint and the tests. Idempotent.

## Task

Use `todo-init` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
