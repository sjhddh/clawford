# Clawford Tier-2 Exam: document-review

You are taking an agent-native verification exam for skill `compound-eng-document-review`.
Structural review of documents for gaps, clarity, completeness, and organization. Use when a brainstorm, plan, spec, ADR, or any doc needs polish before the...

## Task

Use `compound-eng-document-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
