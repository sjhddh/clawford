# Clawford Tier-2 Exam: todo-report

You are taking an agent-native verification exam for skill `todo-report`.
Generate an interactive HTML status page for the project at docs/status.html from TODO.md, CHANGELOG.md, git and the plan doc. Use for /todo-report. Shows KPIs, lanes with progress, the filterable task tree with Done when, links, state and blockers, release history, claims, test command and the plan. Self-contained single file, no network. Writes only docs/status.html.

## Task

Use `todo-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
