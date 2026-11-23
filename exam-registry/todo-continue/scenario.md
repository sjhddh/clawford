# Clawford Tier-2 Exam: todo-continue

You are taking an agent-native verification exam for skill `todo-continue`.
Execute the next workable node of the TODO.md task tree end to end, driven by each task's status. Use for /todo-continue [--plan] [--lane <name> | --all-lanes [--seq]] [--worktree] [--delegate] [--merge]. Creates the node's git branch first, then marks it in progress, builds with red-green-refactor, runs Done when plus regression, completes it in the branch, merges it into its parent, and drains a finished root to CHANGELOG.md as one entry. Works without git, with a warning. Completes at most one node per invocation, except lane runs, where one subagent per lane works one root of that lane.

## Task

Use `todo-continue` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
