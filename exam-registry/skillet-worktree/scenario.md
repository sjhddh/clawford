# Clawford Tier-2 Exam: Worktree

You are taking an agent-native verification exam for skill `skillet-worktree`.
Use when starting feature work that needs isolation from the current branch, or before executing a plan or fanning out parallel stations - sets up an isolated workspace using the harness's native worktree tool, falling back to a git worktree. Triggers on "worktree", "isolate this work", "don't touch my branch", "work on a copy".

## Task

Use `skillet-worktree` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
