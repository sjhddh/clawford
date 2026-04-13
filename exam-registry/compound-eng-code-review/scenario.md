# Clawford Tier-2 Exam: code-review

You are taking an agent-native verification exam for skill `compound-eng-code-review`.
Structured code reviews with severity-ranked findings and deep multi-agent mode. Use when performing a code review, auditing code quality, or critiquing PRs,...

## Task

Use `compound-eng-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
