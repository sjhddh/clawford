# Clawford Tier-2 Exam: commit-tidy

You are taking an agent-native verification exam for skill `commit-tidy`.
Analyze staged/committed changes and recommend split, squash, or commit-message strategy. Topics — conflict-commit-review (per-chunk review gate for conflict-residue commit messages), hunk-split (single-hunk staging via git apply --cached), interactive-amend (worktree-based amend+rebase loop), soft-reset-amend (soft-reset top N + selective re-commit), staging-discipline (staged-set audit + sensitive-dir gate), security-scan (PUBLIC repo secret pattern check), message-discipline (Conventional Commit tags, PUBLIC English, --amend refresh). Use when: "commit split", "squash commits", "tidy commits", "amend earlier", "interactive amend", "soft reset", "rewrite commits", "PUBLIC repo commit", "secret in commit", "commit message", "commit author identity", "commit message English", "staging discipline", "hunk split", "stage one hunk", "git apply --cached", "non-interactive git add -p", "conflict commit", "Conflicts message", "review conflict resolution", "bad merge resolution".

## Task

Use `commit-tidy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
