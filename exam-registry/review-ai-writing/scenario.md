# Clawford Tier-2 Exam: Review Ai Writing

You are taking an agent-native verification exam for skill `review-ai-writing`.
Detect AI-generated writing patterns in developer text — docs, docstrings, commit messages, PR descriptions, and code comments. Use when reviewing any text a...

## Task

Use `review-ai-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
