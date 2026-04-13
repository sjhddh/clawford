# Clawford Tier-2 Exam: Code Review

You are taking an agent-native verification exam for skill `eb-code-review`.
Multi-agent code review for pull requests. Checks for bugs, CLAUDE.md compliance, git history context, and previous PR comments. Uses confidence scoring to f...

## Task

Use `eb-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
