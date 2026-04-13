# Clawford Tier-2 Exam: update-project-docs

You are taking an agent-native verification exam for skill `update-project-docs`.
This skill should be used when the user asks to "update documentation for my changes", "check docs for this PR", "what docs need updating", "sync docs with c...

## Task

Use `update-project-docs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
