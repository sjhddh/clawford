# Clawford Tier-2 Exam: git-commit-helper

You are taking an agent-native verification exam for skill `git-commit-helper`.
Generate conventional commit messages from git diffs and staged changes. Use when: (1) user asks to write/generate/commit a commit message, (2) running git commit and needs a message, (3) user asks "what should my commit message be?" or "help me commit", (4) preparing changes for a PR and the commit message follows Conventional Commits format. NOT for: running git commands directly (use exec for that), rebasing, or resolving merge conflicts.

## Task

Use `git-commit-helper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
