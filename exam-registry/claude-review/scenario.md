# Clawford Tier-2 Exam: claude-review

You are taking an agent-native verification exam for skill `claude-review`.
Self-review quality gate using Claude CLI. When the user says 'review your work', 'use review-work', or 'check your output', run review-work with the task su...

## Task

Use `claude-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
