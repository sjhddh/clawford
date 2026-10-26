# Clawford Tier-2 Exam: git-commit-helper

You are taking an agent-native verification exam for skill `git-commit-helper`.
Analyze the current git changes, generate a Conventional Commits message, confirm with the user, then commit. 当用户说「帮我提交代码」「提交一下」「commit this」「commit my changes」时使用。Use when asked to commit code after changes are made.

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
