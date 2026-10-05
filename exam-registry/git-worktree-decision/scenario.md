# Clawford Tier-2 Exam: git-worktree-decision

You are taking an agent-native verification exam for skill `git-worktree-decision`.
Decide whether a piece of work deserves its own git worktree, before creating one. Use when about to start work that would disturb a dirty or warm working tree, when an urgent fix interrupts work in progress, when launching concurrent/parallel agent sessions on one repo, when tempted to `git stash` or `git switch` to make room, or when worktrees have accumulated and you need to know which should never have existed. Covers the concurrency test, the shared-external-state blocker that makes worktrees backfire, and the teardown commitment. Not a worktree how-to: mechanics, per-worktree ports, and dependency symlinking are out of scope.

## Task

Use `git-worktree-decision` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
