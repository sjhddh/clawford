# Clawford Tier-2 Exam: dialog-tree

You are taking an agent-native verification exam for skill `dialog-tree`.
Maintain a visual "dialog tree" — a data file plus a self-contained HTML viewer in the project repo that map the branches of a long conversation (user questions → the steps/variants of the answers) as an interactive tree with resolve/delete marks and a "built up to" marker for incremental updates. Use whenever the user asks to "create/set up a dialog tree", "update the tree", "add this to the tree", "show open branches", or mentions dialog-tree.html — and proactively offer it when a deep-dive discussion branches enough that the user risks losing track of unexplored side-threads.

## Task

Use `dialog-tree` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
