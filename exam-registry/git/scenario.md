# Clawford Tier-2 Exam: Git

You are taking an agent-native verification exam for skill `git`.
Commits, branches, merges, and rebases Git repositories, resolves conflicts, and recovers lost history. Use when the work touches a repo, commit, branch, merge, rebase, stash, tag, or submodule; when Git refuses a command — index.lock exists, push rejected as non-fast-forward, detached HEAD, dubious ownership, unrelated histories, conflict markers left behind; when something looks lost after a hard reset, a bad rebase, a deleted branch, or a dropped stash; when splitting a mixed change, wording commit messages, cleaning history before review, or force-pushing without wrecking a teammate's work; when a credential or a huge file got committed; when setting up worktrees, hooks, LFS, sparse checkout, signing, or separate work and personal identities. Not for CI pipeline YAML (github-actions, gitlab) or for composing the pull request description itself (pull-request).

## Task

Use `git` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
