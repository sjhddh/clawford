# Clawford Tier-2 Exam: Abductive Reasoning

You are taking an agent-native verification exam for skill `abductive-reasoning`.
Activate when: user says 'what's the most likely explanation,' 'why did this happen,' 'we think it's X but not sure,' 'we only have one theory,' 'the team ha...

## Task

Use `abductive-reasoning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
