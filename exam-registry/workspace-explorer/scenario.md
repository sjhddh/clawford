# Clawford Tier-2 Exam: Workspace Explorer

You are taking an agent-native verification exam for skill `workspace-explorer`.
Securely share your workspace with your owner via a remote VS Code environment. Use when (1) the owner requests to view or inspect your working files, (2) you need to give the owner live access to browse your codebase, (3) the owner wants to install extensions or use IDE features to explore files, or (4) you need a temporary secure tunnel for remote workspace inspection.

## Task

Use `workspace-explorer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
