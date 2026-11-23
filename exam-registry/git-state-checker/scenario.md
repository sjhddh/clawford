# Clawford Tier-2 Exam: git-state-checker

You are taking an agent-native verification exam for skill `git-state-checker`.
Reports git repository status including modified files, untracked files, recent commits, and stash list. Use when checking repo state before solidify, after evolution cycles, or when diagnosing git issues.

## Task

Use `git-state-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
